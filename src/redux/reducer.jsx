const initialState = {
  men: JSON.parse(localStorage.getItem("men")) || [],
  women: JSON.parse(localStorage.getItem("women")) || [],
  kids: JSON.parse(localStorage.getItem("kids")) || [],
  sale: JSON.parse(localStorage.getItem("sale")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const { category, product } = action.payload;
      const updatedCategoryProducts = [...state[category], product];
      localStorage.setItem(category, JSON.stringify(updatedCategoryProducts));
      return {
        ...state,
        [category]: updatedCategoryProducts,
      };
    }
    case "ADD_TO_BASKET": {
      const addbasket = state.basket.find((el) => el.id === action.payload.id);
      let updatedBasket;
      if (addbasket) {
        updatedBasket = state.basket.map((el) =>
          el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
        );
      } else {
        updatedBasket = [...state.basket, { ...action.payload, count: 1 }];
      }
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket,
      };
    }
    case "REMOVE_FROM_BASKET": {
      const updatedBasket = state.basket.filter(
        (el) => el.id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket,
      };
    }
    default:
      return state;
  }
}

export default reducer;
