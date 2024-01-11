import SplineApp from '@/components/spline';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <SplineApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
