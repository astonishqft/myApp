import React, { Component } from 'react';

class Son extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.numberObj.number == nextProps.numberObj.number) {
            return false;
        }
        return true;
    }
    render() {
        const { index, numberObj, handleClick } = this.props;
        console.log(numberObj.number)
        return <h1 onClick={() => {handleClick(index)}}>{numberObj.number}</h1>
    }
}

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberArray: [{number:0}, {number:1}, {number:2}]
        }
    }

    handleClick = (index) => {
        let preNumberArr = this.state.numberArray;
        preNumberArr[index] = Object.assign({}, preNumberArr[index]);
        preNumberArr[index].number += 1;
        this.setState({
            numberArray: preNumberArr,
        })
    }


    render() {
        return (
            <div>
                {this.state.numberArray.map((numberObj, key)=>{
                    return <Son index={key} numberObj={numberObj} handleClick={this.handleClick}/>
                })}
            </div>
        );
    }
}

export default Father;