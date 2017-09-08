import React, {Component} from "react"

let divStyle = {
	"marginBottom": "50px"
}

let btnStyle = {
	"display": "inline-block",
	"width": "40px",
	"height": "30px",
	"cursor": "pointer",
	"textAlign": "center",
	"verticalAlign": "middle",
	"color": "#5a98de",
	"backgroundColor": "#fff",
	"border": "1px solid #5a98de",
	"fontSize": "20px"
}

let spanStyle = {
	"display": "inline-block",//副作用：为子元素开启了BFC
	"width": "200px",
	"height": "30px",
	"lineHeight": "30px",
	"textAlign": "center",
	"vertialAlign": "middle"
}

let sumStyle = {
	"width": "284px",
	"height": "30px",
	"lineHeight": "30px",
	"marginTop": "20px",
	"textAlign": "center"
}

class Counter extends Component{
	constructor(props){
		super(props)
		this.state = {
			"first": 1,
			"second": 2,
			"third": 3
		}
	}

	handleClick(obj){
		console.log(obj)
		return function(){
			this.setState(obj)
		}.bind(this)
	}

	render(){
		let summary = 0;
		//注意一定要不能省略变量定义关键字，否则会出错，大概react的源代码开启了严格模式
		for(var key in this.state){
			if(this.state.hasOwnProperty(key)){
				summary += this.state[key]
			}
		}
		
		return (
			<div>
				<div style={divStyle}>
					<button style={btnStyle} onClick={() => {this.handleClick({"first": this.state.first+1})()}}>+</button>
					<span style={spanStyle}>{this.state.first}</span>
					<button style={btnStyle} onClick={() => {this.handleClick({"first": (this.state.first-1)>=0 ? (this.state.first-1): 0})()}}>-</button>
				</div>

				<div style={divStyle}>
					<button style={btnStyle} onClick={() => {this.handleClick({"second": this.state.second+1})()}}>+</button>
					<span style={spanStyle}>{this.state.second}</span>
					<button style={btnStyle} onClick={() => {this.handleClick({"second": (this.state.second-1)>=0 ? (this.state.second-1) : 0})()}}>-</button>
				</div>

				<div style={divStyle}>
					<button style={btnStyle} onClick={() => {this.handleClick({"third": this.state.third+1})()}}>+</button>
					<span style={spanStyle}>{this.state.third}</span>
					<button style={btnStyle} onClick={() => {this.handleClick({"third": (this.state.third-1)>=0 ? (this.state.third-1) : 0})()}}>-</button>
				</div>

				<div style={sumStyle}>
					<span style={spanStyle}>{summary}</span>
				</div>
			</div>
		)
	}
}

export default Counter