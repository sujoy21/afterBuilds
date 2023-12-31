import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer , 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './loginSlice'
import getApartmentReducer from './getApartmentSlice'


const rootReducer = combineReducers({
  login : loginReducer,
  apartment : getApartmentReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})
export const persistor = persistStore(store);