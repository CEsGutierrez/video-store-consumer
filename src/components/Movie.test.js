import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Movie from './Movie';

describe('Movie', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Movie
      id={1}
      title=''
      overview=''
      release_date=''
      image_url=''
      external_id={3}
      selectMovieCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('It will render the proper movie fields', () => {
    // Arrange & Act
    const container = render(<Movie
      id={1}
      title='National Treasure: Book of Secrets'
      overview=''
      release_date=''
      image_url=''
      external_id={3}
      selectMovieCallback={() => { }}
      />);

    // Assert
    expect(container.getByText(/National Treasure: Book of Secrets/)).toBeDefined();
  });

  test('The "selectMovieCallback" function is called when the `select` button is clicked on', () => {

    const selectMovie = jest.fn();

    const container = render(<Movie
      id={1}
      title=''
      overview=''
      release_date=''
      image_url=''
      external_id={3}
      selectMovieCallback={selectMovie}
      />);

    const selectButton = container.getByText(/Select/);
    selectButton.click();

    expect(selectMovie).toHaveBeenCalled();
  });

});