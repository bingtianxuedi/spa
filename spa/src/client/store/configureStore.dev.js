import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from  '../middleware/logger';
import rootReducer from '../../common/reducers';

const enhancer = compose(
    applyMiddleware(thunk,logger)
)

 function configureStore(initialstate) {
    const store = createStore(rootReducer,initialstate,enhancer);
    return store;
}
export default configureStore;


