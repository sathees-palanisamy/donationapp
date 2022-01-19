import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import DonationForm from './DonationForm';

const store = storeFactory({});

it('renders form details', () => {
  const tree = renderer.create(<Provider store={store}><DonationForm  /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});