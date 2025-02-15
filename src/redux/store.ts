import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer ,persistStore } from 'redux-persist'
import {combineReducers} from "redux";
import todoReducer from "./todo";
import userReducer from './user'
const persistConfig = {
  key: 'root',
  storage
};
const reducers = combineReducers({
  todo:todoReducer,     
  user:userReducer
 });
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  }),
});
export default () => {
  let persistor = persistStore(store)
  return { store, persistor }
}
// export default store;


// import {createStore} from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import userReducer from './user/userReducer'
// import loadingReducer from './loading/loadingReducer'
// import chatReducer from './chat/chatReducer'
// import appReducer from './app/appReducer'

// import { combineReducers ,applyMiddleware } from 'redux';
// // import thunk from 'redux-thunk'
// // import logger from 'redux-logger'

// const reducers = combineReducers({
//   user:userReducer,
//   loading:loadingReducer,
//   chat:chatReducer,
//   app:appReducer
// })
// const persistedReducer = persistReducer({
//   key: 'root',
//   blacklist: ['loading','chat'],
//   storage,
// }, reducers)
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
// // export default store