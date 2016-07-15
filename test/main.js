/**
 * using bundle.js
 */
// import ReactDOM from 'react-dom'
// import React from 'react'
// import { main, FooComponent } from '../dist/bundle'

// //main function usagel example
// // main();

// //react component usage example
// ReactDOM.render(
//   <FooComponent />,
//   document.getElementsByTagName('body')[0]
// );


/**
 * using lib: FooComponent
 */
// import ReactDOM from 'react-dom'
// import React from 'react'
// import FooComponent from '../lib/fooComponent'
// //react component usage example
// ReactDOM.render(
//   <FooComponent />,
//   document.getElementsByTagName('body')[0]
// );


/**
 * using lib: renderer
 */
 import renderer from '../lib/renderer'

 renderer()
