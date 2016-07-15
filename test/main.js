import ReactDOM from 'react-dom'
import React from 'react'


/**
 * using bundle.js
 */
// import { main, FooComponent } from '../dist/bundle'

// //main function usagel example
// // main();

// //react component usage example
// ReactDOM.render(
//   <FooComponent />,
//   document.getElementsByTagName('body')[0]
// );


/**
 * using bundle.js
 */

import FooComponent from '../lib/fooComponent'
//react component usage example
ReactDOM.render(
  <FooComponent />,
  document.getElementsByTagName('body')[0]
);
