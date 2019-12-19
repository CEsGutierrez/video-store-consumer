import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Customers from './Customers';

describe('Customers', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Customers
      customerList={[]}
      selectCustomerCallback={() => { }}
      resetMessageCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

});