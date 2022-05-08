import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { mockAppState } from '../__mocks__/mockAppState';
import mockStore from '../__mocks__/mockStore';

const store = mockStore(mockAppState);

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText('Welcome');
  expect(linkElement).toBeInTheDocument();
});
