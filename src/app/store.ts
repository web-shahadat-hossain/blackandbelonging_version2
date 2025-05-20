import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import aboutReducer from '../features/about/about.slice';
import contactReducer from '../features/contact/contact.slice';
import homeReducer from '../features/homepage/homepage.slice';
import loadingReducer from '../features/loading/loading.slice';
import userReducer from '../features/user/user.slice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    loading: loadingReducer,
    user: userReducer,
    homepage: homeReducer,
    about: aboutReducer,
    contact: contactReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;