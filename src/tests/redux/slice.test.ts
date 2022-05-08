import reducer, { initialItemState } from "../../redux/items/slice";
import { getItems } from "../../redux/items/thunk";
import { mockItemsList } from "../../__mocks__/mockItemsList";
import mockStore from "../../__mocks__/mockStore";

describe('items slice',() => {
  
    it('items should return initial state',()=>{

        const anyAction:any = {};
        expect(reducer(undefined,anyAction)).toEqual(initialItemState);
    });
    it('items should return loading state when getItems is pending',()=>{

        const actual = reducer(initialItemState, getItems.pending(''));
        expect(actual.status).toEqual('loading');
    });
    it('items should return failure state when getItems is rejected',()=>{

        const actual = reducer(initialItemState, getItems.rejected({name: 'error',message: 'Test message'},''));
        expect(actual.status).toEqual('failure');
    });
    it('items should return success state when getItems is fulfilled',()=>{

        const actual = reducer(initialItemState, getItems.fulfilled(mockItemsList,''));
        expect(actual.status).toEqual('success');
    });

});