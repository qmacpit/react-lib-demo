import ReactDOM from 'react-dom'
import React from 'react'

import FooComponent from  './fooComponent'

export default function render() {
  ReactDOM.render(
    <FooComponent />,
    document.getElementsByTagName('body')[0]
  );
}