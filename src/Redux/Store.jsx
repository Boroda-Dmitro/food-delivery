import { configureStore } from '@reduxjs/toolkit';
// import { contactSlice } from '../Redux/Contacts/Slice';
import { pizzaSlice } from '../Redux/Pizza/Slice';
import { basketSlice } from './Basket/Slise';

// import { userSlice } from '../Redux/User/Slice';
import {
//   persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'userState',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice.reducer,
    basket: basketSlice.reducer
    // userState: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);