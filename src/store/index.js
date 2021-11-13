import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AsyncStorage from "@react-native-community/async-storage";
import { storeMovie } from "./reducers";

const middleware = applyMiddleware(thunk,logger);
const config = {

    key : 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(config, storeMovie);
const store = createStore(persistedReducer,{}, middleware);
const persistor = persistStore(store)


export {store, persistor}