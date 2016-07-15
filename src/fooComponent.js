import React, { Component } from 'react'

export default class FooComponent extends Component {

  render() {
    let decorator = '!!!!'
    return (
      <div>
        Foo Component {decorator}
      </div>
    );
  }
}