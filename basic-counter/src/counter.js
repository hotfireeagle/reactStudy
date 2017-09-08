import React, {Component} from "react"

let buttonStyle = {
	"display": "inline-block",
	"width": "70px",
	"height": "70px",
	"lineHeight": "70px",
	"borderRadius": "70px",
	"color": "#fff",
	"fontSize": "50px",
	"fontWeight": "bolder",
	"textAlign": "center",
	"backgroundColor": "#7b72e9",
	"border": "1px solid #7b72e9",
	"marginRight": "50px",
	"marginLeft": "50px"
}

let contentStyle = {
	"display": "inline-block",
	"width": "90px",
	"height": "70px",
	"lineHeight": "70px",
	"textAlign": "center",
	"marginTop": 0
}

class Counter extends Component{
	constructor(props){
		super(props)
		this.incrementClick = this.incrementClick.bind(this)
		this.decrementClick = this.decrementClick.bind(this)
		this.state = {
			"times": 0
		}
	}

	incrementClick(ev){
		this.setState({"times": this.state.times+1})
	}

	decrementClick(ev){
		let value = (this.state.times-1) >= 0 ? (this.state.times-1) : 0;
		this.setState({"times": value})
	}

	render(){
		return (
			<div>
				<button style={buttonStyle} onClick={this.incrementClick}>+</button>
				<span style={contentStyle}>{this.state.times}</span>
				<button style={buttonStyle} onClick={this.decrementClick}>-</button>
			</div>
		)
	}
}

export default Counter