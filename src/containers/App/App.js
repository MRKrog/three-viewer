import React, { Component } from 'react';
import ThreeD from '../ThreeD';
import Test from '../../test.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: true
    }
  }

  componentDidMount() {
    console.log('App Mounted');
  };

  handleMount = () => {
    this.setState({
      isMounted: !this.state.isMounted
    })
  }


  // <h2>Mikes Box</h2>
  // <Test />

  render() {
    const { isMounted } = this.state;

    return (
      <div>
        <button onClick={() => this.handleMount()}>
            {isMounted ? "Unmount" : "Mount"}
        </button>
        <h2>Bens Box</h2>
        {isMounted && <ThreeD />}
        {isMounted && <div>Scroll to zoom, drag to rotate</div>}
      </div>
    )
  }
}

export default App;
