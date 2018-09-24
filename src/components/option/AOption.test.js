import React from 'react';
import ReactDOM from 'react-dom';
import AOption from './AOption';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AOption />, div);
  ReactDOM.unmountComponentAtNode(div);
});
