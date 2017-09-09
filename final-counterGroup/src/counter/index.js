import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import * as Actions from "../actions"
import { Button } from 'semantic-ui-react'

const btnStyle = {
	"margin": "30px",
	"fontFamily": "FangSong"
}

const spanStyle = {
	"fontSize": "23px"
}

const Counter = ({value, handleIncrement, handleDecrement}) => {
	return (
		<div>
			<Button style={btnStyle} onClick={handleIncrement} primary>增加</Button>
			<span style={spanStyle}>{value}</span>
			<Button style={btnStyle} onClick={handleDecrement} secondary>减少</Button>
		</div>
	)
}

Counter.proptypes = {
	"value": PropTypes.number.isRequired,
	"handleIncrement": PropTypes.func.isRequired,
	"handleDecrement": PropTypes.func.isRequired
}

const mapStateToProps = (storeState, ownProps) => ({
	"value": storeState[ownProps.caption]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	"handleIncrement": () => {dispatch(Actions.incrementAction(ownProps.caption))},
	"handleDecrement": () => {dispatch(Actions.decrementAction(ownProps.caption))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)