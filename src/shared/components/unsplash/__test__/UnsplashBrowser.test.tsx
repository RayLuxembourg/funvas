import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import UnsplashBrowser from '../UnsplashBrowser';
import '@testing-library/jest-dom/extend-expect';

it('should render UnsplashBrowser', () => {
  const div = document.createElement('div');
  ReactDom.render(<UnsplashBrowser addSelected={
    () => {
    }
  }
  />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('should render UnsplashBrowser correctly', () => {
  const { getByTestId } = render(<UnsplashBrowser addSelected={() => {}} />);
  expect(getByTestId('unsplash-browser')).toHaveTextContent('Unsplash search');
});
