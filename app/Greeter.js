import React, {Component} from 'react';
import style from './main.css';
// import Welcome from './Welcome';
import Test1 from './Test1';


class Greeter extends Component {
  render() {
    return (
        <div className={style.root}>
          <Test1 />
        </div>
    );
  }
}

export default Greeter;
