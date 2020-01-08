import React from 'react';
import ReactDOM from 'react-dom';
import HizmetYonetimi from './HizmetYonetimi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HizmetYonetimi />, div);
  ReactDOM.unmountComponentAtNode(div);
});
