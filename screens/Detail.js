import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Detail Page',
        headerStyle: {
          backgroundColor: '#dbcccc',
          textAlign: 'center'
        },
        headerTintColor: '#ffffff',
        
      };
    
    render(){
        const { params } = this.props.navigation.state;
        const products = params ? params : null;
       console.log(this.props.navigation.state)
        return(
            <View style={{padding:'auto', backgroundColor:'#ffffff'}}>
                <View style={styles.container}>
                        <Text style={styles.textTitle}>{products.productName}</Text>
                        <Image style={styles.imageColor} source={{uri: products.productImage}}/>
                        <Text style={styles.textNumber}>$ {products.productPrice}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
        marginTop: 20,
        marginLeft: 31,
        marginRight: 37,
    },
    textTitle: {
      textAlign: 'left',
      fontFamily: 'Verdana',
      fontSize: 15
    },
    textNumber: {
        textAlign: 'left',
        fontFamily: 'Verdana',
        fontSize: 15
      },
      imageColor:{
        width: 'auto', 
        height: 225,
          marginBottom:24,
          marginTop:24
      }
  });