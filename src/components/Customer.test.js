import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Customer from './Customer';

describe('Customer', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Customer
      id={1}
      name=''
      registered_at=''
      address=''
      city=''
      state=''
      postal_code=''
      phone=''
      account_credit={3.0}
      movies_checked_out_count={3}
      selectCustomerCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('It will render the proper customer fields', () => {
    // Arrange & Act
    const container = render(<Customer
      id={1}
      name='Nicolas Cage'
      registered_at=''
      address='Avatar'
      city=''
      state=''
      postal_code=''
      phone=''
      account_credit={3.0}
      movies_checked_out_count={3}
      selectCustomerCallback={() => { }}
      />);

    // Assert
    expect(container.getByText(/Nicolas Cage/)).toBeDefined();
  });

  test('The "selectCustomerCallback" function is called when the `select` button is clicked on', () => {

    const selectCustomer = jest.fn();

    const container = render(<Customer
      id={1}
      name=''
      registered_at=''
      address=''
      city=''
      state=''
      postal_code=''
      phone=''
      account_credit={3.0}
      movies_checked_out_count={3}
      selectCustomerCallback={selectCustomer}
      />);

    const selectButton = container.getByText(/Select/);
    selectButton.click();

    expect(selectCustomer).toHaveBeenCalled();
  });

});