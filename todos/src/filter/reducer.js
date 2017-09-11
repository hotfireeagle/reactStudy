import {FILTER_ALL, FILTER_FINISHED, FILTER_UNFINISH} from "./actionTypes"

export default (previousState=FILTER_ALL, action) => {
	switch(action.type){
		case FILTER_ALL:
			return FILTER_ALL
		case FILTER_FINISHED:
			return FILTER_FINISHED
		case FILTER_UNFINISH:
			return FILTER_UNFINISH
		default:
			return FILTER_ALL
	}
}