import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer"; 
import App from './App';
import ViewScreen from './ViewScreen';
import Login from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('view screen', () => {
  test('matches the snapshot', () => {
    const component = create (
      <ViewScreen/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('authenticated viewscreen', () => {
  test('matches the snapshot', () => {
    const component = create (
      <ViewScreen user={true}/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('login screen', () => {
  test('matches the snapshot', () => {
    const component = create (
      <Login/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
