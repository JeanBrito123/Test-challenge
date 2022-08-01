import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import products from './products'
import listProducts from './cars'
import colors from './theme'


const reducers = combineReducers({
	products,
	listProducts,
	colors
})
const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = (state, action) => {
	return reducers(state, action);
  };

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();

const Data = () => {
	const store = createStore(
	  persistedReducer,
	  undefined,
	  compose(applyMiddleware(sagaMiddleware)), // saga
	);
	const persistor = persistStore(store);
	return { store, persistor, sagaMiddleware };
  };

	export default Data;