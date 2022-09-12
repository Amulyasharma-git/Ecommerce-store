import {prodReducer, selectedProdReducer} from "./productReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    allProducts:prodReducer,
    selectedProduct:selectedProdReducer,
});

