import React, {Component} from "react"
import Counter from "./counter"
import PropTypes from "prop-types"
import * as Actions from "../actions"

/**
 * 容器组件，负责与store交互，将数据作为props传递给子组件-视图组件
 */

 class CounterContainer extends Component{
	 constructor(props, context){
		 super(props, context)
		 this.handleIncrement = this.handleIncrement.bind(this)
		 this.handleDecrement = this.handleDecrement.bind(this)
		 this.updateFromStore = this.updateFromStore.bind(this)
		 this.state = {
			 "value": this.context.store.getState()[this.props.caption]
		 }
	 }

	 //这个时候store所维护的state需要做出改变了，因此在这个函数里面需要dispatch
	 handleIncrement(){
		this.context.store.dispatch(Actions.incrementAction(this.props.caption))
	 }

	 handleDecrement(){
		 this.context.store.dispatch(Actions.decrementAction(this.props.caption))
	 }

	 updateFromStore(){
		 this.setState({"value": this.context.store.getState()[this.props.caption]})
	 }

	 //由于store所维护的状态会不断发生迭代，所以我们需要组件的state与store所维护的状态保持同步更新
	 componentDidMount(){
		this.context.store.subscribe(this.updateFromStore)
	 }

	 componentWillUnmount(){
		this.context.store.unsubscribe(this.updateFromStore)
	 }

	 shouldComponentUpdate(nextProps, nextState){
		return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
	 }

	 render(){
		 return (
			 <div>
				 <Counter
					value={this.state.value}
					handleIncrement={this.handleIncrement}
					handleDecrement={this.handleDecrement} 
				 />
			 </div>
		 )
	 }
 }

 CounterContainer.proptypes = {
	 "caption": PropTypes.number.isRequired
 }

 CounterContainer.contextTypes = {
	 "store": PropTypes.object.isRequired
 }

 export default CounterContainer