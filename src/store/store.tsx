import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import cartSlice from './slice/cartSlice'
  

export const store = configureStore({
    reducer: {
        counterSlice, cartSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Use 'redux-persist/lib/session' for session storage

// import counterSlice from './slice/counterSlice';
// import cartSlice from './slice/cartSlice';

// // Root reducer combining all your slices
// const rootReducer = combineReducers({
//   counterSlice,
//   cartSlice,
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

// export const persistor = persistStore(store);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
