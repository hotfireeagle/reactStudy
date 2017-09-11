import {FILTER_ALL, FILTER_FINISHED, FILTER_UNFINISH} from "./actionTypes"

export const clickAll = () => ({
	"type": FILTER_ALL
})

export const clickFinished = () => ({
	"type": FILTER_FINISHED
})

export const clickUnfinish = () => ({
	"type": FILTER_UNFINISH
})