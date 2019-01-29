import React from 'react'
import { StackNavigator } from 'react-navigation'
import Main from './screens/Main'
import Home from './screens/Home'
import Detail from './screens/Detail'
import Product from './screens/Content/Product'
const ScreenNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  },
  Main: {
    screen: Main
  },
  Product: {
    screen: Product
  }
},
{
  initialRouteName : 'Main'
})

export default class App extends React.Component{
  render(){
    return <ScreenNavigator/>
  }
}