import {RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

function entries(state={}, action){
    switch (action.type){
        case RECEIVE_ENTRIES :
            return {
                //return same state & Merge the 'entries with keys represent specific date' with that state
                ...state,
                ...action.entries
            }
        case ADD_ENTRY :
            return {
                //
                ...state,
                ...action.entry, //bring brand new entry in specific day, merge it to State
            }
        default:
            return state
    }
}
//that State is a 1 big object for entries, so we can add directly

export default entries