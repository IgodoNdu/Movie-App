//Configure the store to save the received data from API calls
//Here we'll be using Redux tool-kit, which makes it easy to work with Redux, as against the traditional style
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
})