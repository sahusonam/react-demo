import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockConfigureStore = configureStore(middlewares);

function mockStore(initialState: any){
    return mockConfigureStore({...initialState});
}
export default mockStore;