import Store from "./store"
import React, {Component} from "react"
import PropTypes from "prop-types"

class Provider extends Component{
	getChildContext(){
		return {"store": Store}
	}

	render(){
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

Provider.childContextTypes = {
	"store": PropTypes.object.isRequired
}

Provider.proptypes = {
	"store": PropTypes.object.isRequired
}

export default Provider