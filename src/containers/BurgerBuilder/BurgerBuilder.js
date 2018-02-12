import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  };
  updatePurchaseState() {
    const ingredients = {
      ...this.state.ingredients
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, elm) => {
        return sum + elm;
      }, 0);
    console.log(sum);
    this.setState({
      purchaseable: sum > 0
    });
  }
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };
  removeIngredientHandler = type => {
    let updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedIngredients[type] - 1;
    if (updatedIngredients[type] < 0) {
      return;
    }
    const oldPrice = this.state.totalPrice;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const newPrice = oldPrice - priceDeduction;
    this.setState(
      {
        ingredients: updatedIngredients,
        totalPrice: newPrice
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger {...this.state} />
        <BuildControls
          inredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
