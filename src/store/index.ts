import { combineReducers, createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import Reducer from './reducer';
const ConfigureStore = configureStore({
    reducer: Reducer
})

// const ConfigureStore = rootReducer;

export default ConfigureStore;