


export const initialState = {
   
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorite: JSON.parse(localStorage.getItem('favorite')) || [],
 shippingData: {},
 cardData:{},
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM:"REMOVE_ITEM",
    EMPTY_BASKET : "EMPTY_BASKET",
    ADD_TO_FAV: "ADD_TO_FAV",
    REMOVE_FAV_ITEM:"REMOVE_FAV_ITEM",
    SET_SHIPPINGDATA : "SET_SHIPPINGDATA",
    CARD_DATA : "SET_DATACARD",
}

export const getBasketTotal = (basket) => {
    const totalAmount = basket?.reduce((amount, item) => item.price + amount, 0)
return totalAmount
// console.log(basket)
}
export const getFavoriteTotal = (favorite) => {
    const totalAmount = favorite?.reduce((amount, item) => item.price + amount, 0)
return totalAmount
// console.log(basket)
}
const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
    case "ADD_TO_BASKET":
    return { 
        ...state,
        basket: [...state.basket, action.item],
    };
    case "ADD_TO_FAV":
    return { 
        ...state,
        favorite: [...state.favorite, action.item],
    };
    case "REMOVE_ITEM":
        const index2 = state.basket.findIndex((basketItem => basketItem.id === action.id))
        const newBasket= [...state.basket];
        if(index2 >= 0){
            newBasket.splice(index2, 1)
        } else {console.log("Can't remove product")}
    return{
           ...state,
           basket:newBasket,
        };
        case "REMOVE_FAV_ITEM":
            const index = state.favorite.findIndex((favoriteItem => favoriteItem.id === action.id))
            const newFav= [...state.favorite];
            if(index >= 0){
                newFav.splice(index, 1)
            } else {console.log("Can't remove product")}
        return{
               ...state,
               favorite:newFav,
            };
        case "EMPTY_BASKET":
        return{
            ...state,
            basket: action.basket,
            favorite:action.favorite,
        };
       case "SET_SHIPPINGDATA":
       return{
                  ...state,
                   shippingData: action.data,   }
case "CARD_DATA":
return{
    ...state,
    cardData: action.data,
    }

    default: return state;
    }
}

export default reducer