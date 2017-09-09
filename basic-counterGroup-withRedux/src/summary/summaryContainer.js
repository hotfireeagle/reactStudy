import React, {Component} from "react"
import PropTypes from "prop-types"
import Summary from "./summary"

class SummaryContainer extends Component{
	constructor(props, context){
		super(props, context)
		this.computeSum = this.computeSum.bind(this)
		this.updateFromStore = this.updateFromStore.bind(this)
		this.state = this.computeSum()
	}

	computeSum(){
		var sum = 0
		for(let key in this.context.store.getState()){
			if(this.context.store.getState().hasOwnProperty(key)){
				sum += this.context.store.getState()[key]
			}
		}
		return {"sum": sum}
	}

	updateFromStore(){
		var status = this.computeSum()
		this.setState(status)
	}

	componentWillMount(){
		this.context.store.subscribe(this.updateFromStore)
	}

	componentWillUnmount(){
		this.context.store.unsubscribe(this.updateFromStore)
	}

	shouldComponentUpdate(nextState, nextProps){
		return (nextState.sum !== this.state.sum)
	}

	render(){
		return (
			<div>
				<Summary sum={this.state.sum} />
			</div>
		)
	}
}

SummaryContainer.contextTypes = {
	"store": PropTypes.object
}

export default SummaryContainer