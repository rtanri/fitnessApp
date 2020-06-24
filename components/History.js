import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import {receiveEntries, addEntry} from '../actions/index'
import {timeToString, getDailyReminderValue} from '../utils/helpers'
import {fetchCalendarResults} from '../utils/api'
// import entries from '../reducers'
import UdaciFitnessCalendar from 'udacifitness-calendar' //with new way.

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

    renderItem = ({today, ...metrics}, formattedDate, key) => (
        <View>
            {today
             ? <Text>{JSON.stringify(today)}</Text>
             : <Text>{JSON.stringify(metrics)}</Text>
            }
        </View>
    )

    renderEmptyDate = (formattedDate) => {
        return (
            <View>
                <Text>No Data for this day</Text>
            </View>
        )
    }

    render(){
        const {entries} = this.props
        return(
            <UdaciFitnessCalendar
                items={entries}
                renderItem={this.renderItem}
                renderEmptyDate={this.renderEmptyDate}
            />
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