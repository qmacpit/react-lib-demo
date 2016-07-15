import ReactDOM from 'react-dom'
import React from 'react'

import FooComponent from  './src/fooComponent'

function main() {
  ReactDOM.render(
    <FooComponent />,
    document.getElementsByTagName('body')[0]
  );
  console.log('main function')
}

module.exports.main = main
module.exports.FooComponent = FooComponent
// export FooComponent
// export main