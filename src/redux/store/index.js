import { createStore } from 'redux';
import rootReducers from '../reducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    blacklist: ["authReducer"],
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducers)
  
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor};