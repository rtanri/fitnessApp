import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import {receiveEntries, addEntry} from '../actions/index'
import {timeToString, getDailyReminderValue} from '../utils/helpers'
import {fetchCalendarResults} from '../utils/api'
import entries from '../reducers'

class History extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        fetchCalendarResults()
            .then((entries) => dispatch(receiveEntries(entries)))
            .then(({entries}) => {
                if (!entries[timeToString()]){ //condition: if you haven't enter anything in the , show getDailyReminder
                    dispatch(addEntry({
                        [timeToString()]: getDailyReminderValue()
                    }))
                } 
            })
    }


    render(){
        return(
            <View>
                <Text>{JSON.stringify(this.props)}</Text> 
            </View>
        )
    } 
}

//'entries' is the state passed inside the component
function mapStateToProps(entries){
    return{
        entries
    }
}

export default connect(mapStateToProps)(History)