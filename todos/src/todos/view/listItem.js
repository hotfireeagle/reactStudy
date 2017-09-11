import React from "react"
import PropTypes from "prop-types"

const ListItem = ({value, finished, handleReverse, handleDelete}) => {
	return (
		<li>
			<button onClick={handleReverse}>置反</button>
			<span style={{"textDecoration": finished ? "line-through" : "none"}}>{value}</span>
			<button onClick={handleDelete}>删除</button>
		</li>
	)
}

ListItem.propTypes = {
	"value": PropTypes.string.isRequired,
	"finished": PropTypes.bool.isRequired,
	"handleReverse": PropTypes.func.isRequired,
	"handleDelete": PropTypes.func.isRequired
}

export default ListItem