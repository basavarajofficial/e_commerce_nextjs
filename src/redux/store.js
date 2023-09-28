import cartSlice from "./cartSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';
//   import { WebStorage } from "redux-persist/es/types";
// import createWebStorage from "redux-persist/es/storage/createWebStorage";
  

  // export function createPersistStore(WebStorage) {
  //   const isServer = typeof window !== 'undefined';

  //   //return noop (dummy) server
  //   if(isServer){
  //       return {
  //           getItem(){
  //               return Promise.resolve(null);
  //           },
  //           setItem(){
  //               return Promise.resolve();
  //           },
  //           removeItem(){
  //               return Promise.resolve();
  //           }
  //       }
  //   }
  //   return createWebStorage('local');
  // }

  // const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStore();
  

const { configureStore } = require("@reduxjs/toolkit");


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, cartSlice)


export const store = configureStore({
    reducer: {shopping : persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);