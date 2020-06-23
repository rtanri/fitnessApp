export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES' //from calendar
export const ADD_ENTRY = 'ADD_ENTRY' //click submit button on Add_entry page

export function receiveEntries (entries) {
    return {
      type: RECEIVE_ENTRIES,
      entries,
    }
  }
  
  export function addEntry (entry) {
    return {
      type: ADD_ENTRY,
      entry,
    }
  } 