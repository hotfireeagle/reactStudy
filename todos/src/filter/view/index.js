import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {clickAll, clickFinished, clickUnfinish} from "../actions"

const Filter = ({handleAll, handleFinish, handleUnfinish}) => {
	return (
		<div>
			<button onClick={handleAll}>所有</button>
			<button onClick={handleFinish}>已完成</button>
			<button onClick={handleUnfinish}>未完成</button>
		</div>
	)
}

Filter.propTypes = {
	"handleAll": PropTypes.func.isRequired,
	"handleFinish": PropTypes.func.isRequired,
	"handleUnfinish": PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	"handleAll": () => {dispatch(clickAll())},
	"handleFinish": () => {dispatch(clickFinished())},
	"handleUnfinish": () => {dispatch(clickUnfinish())}
})

export default connect(null, mapDispatchToProps)(Filter)