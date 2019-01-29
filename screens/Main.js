import React from 'react'
import { TouchableOpacity,Text,StyleSheet} from 'react-native'

export default class Main extends React.Component{
    static navigationOptions = {
          header: null,
          navigationOptions: {
              headerVisible: true,
          }
      };
    render(){
        return(
            <TouchableOpacity style={styles.container}
            onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.welcome}>SIMPLE CATALOG</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#ffffff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Verdana'
  },
});