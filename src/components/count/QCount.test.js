import React from 'react';
import ReactDOM from 'react-dom';
import QCount from './QCount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QCount />, div);
  ReactDOM.unmountComponentAtNode(div);
});
