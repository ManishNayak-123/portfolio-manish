//Before the redux library i have an example ->
//Such as we react use the react-dom library for the browser and react-native for the mobile development.

// In the same way the Redux is an independent library and redux tool kit is used to connect to the redux.
// React redux is used for making a bridge between react and core redux.

// Why redux  -> Because in the react js if we have the multiple components and passed the information to 
// eact component of each other then we had to pass the componet in each component.

// SO the new concept then created and this concept was that it provide the central place called store.
// Redux is a predictable state container for the js apps.

//compnents of redux ->
//1. Store -> Store is used to store data.
//2. reducers -> perform action.
//3. useSelector -> 
//4. useDispatch ->

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/todo/todoSlice';
export const store = configureStore({
    reducer : todoReducer
});