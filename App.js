import React from 'react';
import LandingPage from './pages/LandingPage'
import { Provider } from 'react-redux';
import store from './redux/store';


export default function App() {
  return (
    <Provider store = { store }>
      <LandingPage />
    </Provider>
  );
}