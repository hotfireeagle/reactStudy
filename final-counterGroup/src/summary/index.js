import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import { Button } from 'semantic-ui-react'

const spanStyle = {
	"display": "inline-block",
	"width": "214px",
	"marginLeft": "30px",
	"fontSize": "23px"
}

const Summary = ({value}) => {
	return (
		<div>
			<Button style={spanStyle}>{value}</Button>
		</div>
	)
}

Summary.proptypes = {
	"value": PropTypes.number.isRequired
}

const mapStateToProps = (storeState, ownProps) => {
	let sum = 0
	for(let key in storeState){
		if(storeState.hasOwnProperty(key)){
			sum += storeState[key]
		}
	}
	return {"value": sum}
}

export default connect(mapStateToProps)(Summary)