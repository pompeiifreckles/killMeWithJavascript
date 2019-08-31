import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native';
import Constants  from 'expo-constants';


const styles = StyleSheet.create({
  appContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }, 
})

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
    // this.inc = this.inc.bind(this)

  componentDidMount(){
    setInterval(() => this.inc(), 1000)
  }

  inc()  {
    this.setState(prevState => ({count: prevState.count + 1}))
  } 
  


  render() {
    return(
      <View style={[styles.appContainer]}>
      <Text style={{fontSize: 48}}>{this.state.count}</Text>
      </View>
    )
  }
}
