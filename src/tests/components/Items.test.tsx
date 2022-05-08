import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Items from '../../components/Items';

import { mockAppState } from '../../__mocks__/mockAppState';
import mockStore from '../../__mocks__/mockStore';

const store = mockStore(mockAppState);

describe('Items',()=> {
    let tree;
    
    test('renders correctly', () => {
        const tree = render(<Provider store={{ ...store }}><Items /></Provider>);
        expect(tree).toMatchSnapshot();
    })
});