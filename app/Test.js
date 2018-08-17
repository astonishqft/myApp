import React from 'react'
class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Number:1//设state中Number值为1
        }
    }
    //这里调用了setState但是并没有改变setState中的值
    handleClick = () => {
        console.log('哈哈哈')

        const preNumber = this.state.Number
        this.setState({
            Number:this.state.Number
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.number === this.state.number) {
            return false;
        }
    }
    render(){
        //当render函数被调用时，打印当前的Number
        return(<h1 onClick = {this.handleClick} style ={{margin:30}}>
            {this.state.Number}
        </h1>)
    }
}
export default Test
//省略reactDOM的渲染代码...