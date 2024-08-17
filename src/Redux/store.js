import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';

// React-Redux-Firebase Config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const initialState = {};
const store = createStore(rootReducer, initialState);

export { store, rrfConfig };