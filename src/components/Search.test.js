import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Search from './Search';

describe('Search', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Search
      searchExternalCallback={() => { }}
      searchResultsCallback={() => { }}
      addMovieCallback={() => { }}
      resetMessageCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});