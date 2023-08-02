import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import cartSlice from './slice/cartSlice'
  

export const store = configureStore({
    reducer: {
        counterSlice, cartSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Use 'redux-persist/lib/session' for session storage
// import { counterSlice } from './slice/counterSlice';
// import { cartSlice } from './slice/cartSlice';

// // Root reducer combining all your slices
// const rootReducer = combineReducers({
//   counter:counterSlice.reducer,
//   cart:cartSlice.reducer,
// });
  
  
// // Persist configuration
// const persistConfig = {
//   key: 'root', // key for the root state in local storage
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
