const initial_state = {
    Products:[],
};

export const prodReducer = (state = initial_state,{type,payload}) => {
   switch(type){
    case "SET_PRODUCTS":
        return {...state,Products:payload};
    default:
        return state;
   }
}

export const selectedProdReducer = (state = {},{type,payload}) => {
    switch(type){
     case "SELECTED_PRODUCT":
         return {...state,...payload};
     case "REMOVE_SELECTED_PRODUCT":
         return {};
     default:
         return state;
    }
 }
 



