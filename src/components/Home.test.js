import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Home from './Home';

describe('Home', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Home
      createRentalCallback={() => { }}
      resetMessageCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('The "createRentalCallback" function is called when the `Create a rental!` button is clicked on', () => {

    const createRental = jest.fn();

    const container = render(<Home
      createRentalCallback={createRental}
      resetMessageCallback={() => { }}
      />);

    const rentalButton = container.getByText(/Create a rental!/);
    rentalButton.click();

    expect(createRental).toHaveBeenCalled();
  });

});