/**
 * 这里导出的todoListContainer应该是一个容器组件，它负责把这里与store交互得来的数据
 * 作为props传递给视图组件todoList，todoList再将这些某些必要的props继而传递给todoItem
 * 同时需要注意的是，我们再展示todo时是需要筛选一下的，默认展示所有的todo
 */

import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {reverseTodo, deleteTodo} from "../actions"
import {FILTER_ALL, FILTER_FINISHED, FILTER_UNFINISH} from "../../filter/actionTypes"
import ListItem from "./listItem"

/**
 * @param {PropTypes.array} todos：在这里的todos应该是经过筛选的
 */
const TodoList = ({todos, handleReverse, handleDelete}) => {
	return (
		<ul>
		{
		todos.map((todo) => {
			return (
				<ListItem 
					key={todo.id}
					value={todo.text} 
					//在这里的问题是，如果在这里不适用narrow function是否可行,答案是可行
					handleReverse={() => {handleReverse(todo.id)}}
					handleDelete={() => {handleDelete(todo.id)}}
					finished={todo.finished}
				/>
			)
		})
		}
		</ul>
	)
}

TodoList.propTypes = {
	"todos": PropTypes.array.isRequired,
	"handleReverse": PropTypes.func.isRequired,
	"handleDelete": PropTypes.func.isRequired
}

const filterTodo = (todos, filter) => {
	switch(filter){
		case FILTER_ALL:
			return todos
		case FILTER_FINISHED:
			return todos.filter(todo => todo.finished)
		case FILTER_UNFINISH:
			return todos.filter(todo => (!todo.finished))
		default:
			return todos
	}
}


//需要注意的地方是，对于mapStateToProps方法中的state参数来说，它是整个应用所维护的state
//而对于每个组件所属的reducer方法来说，它的previousState却是这个组件所需的某部分状态
const mapStateToProps = (storeState, ownProps) => ({
	"todos": filterTodo(storeState.todos, storeState.filter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	"handleReverse": (id) => {dispatch(reverseTodo(id))},
	"handleDelete": (id) => {dispatch(deleteTodo(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)