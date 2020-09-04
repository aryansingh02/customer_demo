import {applyMiddleware, compose, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {rootReducer} from "./model/rootReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer /* preloadedState, */,
  composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
