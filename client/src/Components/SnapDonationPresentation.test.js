import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import DonationPresentation from './DonationPresentation';

const store = storeFactory({});

const defaultProps = { id:0,amount:0,tip:0,userid:"" };

it('renders correctly when there are no items', () => {

  const setupProps = { ...defaultProps}
  const tree = renderer.create(<Provider store={store}><DonationPresentation  {...setupProps} /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});


const defaultPropsWithValidData = { id:1,amount:100,tip:10,userid:"1" };

it('renders correctly when there are 1 items', () => {

  const setupProps = { ...defaultProps}
  const tree = renderer.create(<Provider store={store}><DonationPresentation  {...defaultPropsWithValidData} /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});