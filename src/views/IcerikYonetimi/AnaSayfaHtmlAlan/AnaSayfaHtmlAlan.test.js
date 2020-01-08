import React from 'react';
import ReactDOM from 'react-dom';
import AnaSayfaHtmlAlan from './AnaSayfaHtmlAlan';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnaSayfaHtmlAlan />, div);
  ReactDOM.unmountComponentAtNode(div);
});
