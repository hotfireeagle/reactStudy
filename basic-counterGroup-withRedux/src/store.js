import {createStore} from "redux"
import Reducer from "./reducer"

const initState = {
	"first": 1,
	"second": 2,
	"third": 3
}

const store = createStore(Reducer, initState)
export default store