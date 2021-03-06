import React, {Component} from 'react'
import {View,Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {receiveEntries, addEntry} from '../actions/index'
import {timeToString, getDailyReminderValue} from '../utils/helpers'
import {fetchCalendarResults} from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar' //with new way.
import {white} from '../utils/colors'
import DateHeader from './DateHeader'
import MetricCard from './MetricCard'


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
        <View style={styles.item}>
            {today
             ? <View>
                <DateHeader date={formattedDate}/>
                <Text style={styles.noDataText}>
                     {today}
                     {/* you can edit this into JSON */}
                </Text>
             </View>
             : <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate("EntryDetail", {entryId:key})} >
                <MetricCard date={formattedDate} metrics={metrics} />
             </TouchableOpacity>
            }
        </View>
    )

    renderEmptyDate = (formattedDate) => {
        return (
            <View style={styles.item}>
                <DateHeader date={formattedDate} />
                <Text style={styles.noDataText}>
                    You didn't log any data on this day
                </Text>
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

const styles = StyleSheet.create({
    item:{
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 :2,
        padding: 20,
        marginLeft : 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width:0,
            height:3,
         }
    },
    noDataText:{
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,

    }
 
})


//'entries' is the state passed inside the component
function mapStateToProps(entries){
    return{
        entries
    }
}

export default connect(mapStateToProps)(History)





//Try to work on stacking detailed metrics card
// function DetailScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Detail screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
  
//   const HistoryStack = createStackNavigator();
  
//   function HistoryStackScreen() {
//     return (
//       <HistoryStack.Navigator>
//         <HistoryStack.Screen name="History" component={History} />
//         <HistoryStack.Screen name="Details" component={DetailsScreen} />
//       </HistoryStack.Navigator>
//     );
//   }
