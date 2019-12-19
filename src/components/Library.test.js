import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Library from './Library';

describe('Library', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Library
      movieList={[]}
      selectMovieCallback={() => { }}
      resetMessageCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

});