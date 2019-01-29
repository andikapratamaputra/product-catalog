import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native'

export default class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {products} = this.props
        return(
            <View style={styles.container}>
                    <Image style={{width: 146, height: 112,flex:2}} source={{uri: products.productImage}}/>
                    <View style={{flex:1}}>
                        <Text numberOfLines={1} style={styles.textTitle}>{products.productName}</Text>
                        <Text style={styles.textNumber}>$ {products.productPrice}</Text>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 176,
        width: 143,
        borderLeftColor: 'gray',
        borderLeftWidth: 1,
        borderRightColor: 'gray',
        borderRightWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginLeft: 18,
        marginTop: 18,

    },
    textTitle: {
      flex:1,
      textAlign: 'left',
      fontFamily: 'Verdana',
      fontSize: 12,
      marginTop:11,
      marginLeft:18
    },
    textNumber: {
        textAlign: 'left',
        fontFamily: 'Verdana',
        fontSize: 10,
        marginTop:8,
        marginLeft:18
      },
  });