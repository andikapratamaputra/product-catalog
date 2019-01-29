import React from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import Product from './Content/Product'
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
            data: [],
            page : 1,
            seed : 1,
            error: null,
            refreshing: false,
            nextPage: 2
        }
    }
    static navigationOptions = {
        header: null,
        navigationOptions: {
            headerVisible: true,
        }
    };
    
    componentDidMount(){
        this.makeRemoteRequest();
        // https://product-catalog-api.herokuapp.com/products
        // const {page,seed} = this.state
        // return fetch('https://product-catalog-api.herokuapp.com/products/?seed=${seed}&page=${page}&results=20')
        //   .then((response) => response.json())
        //   .then((responseJson) => {
    
        //     this.setState({
        //     data: page === 1 ? responseJson.result : [...this.state.data, ...responseJson.result],
        //     error: responseJson.error || null,
        //     loading: false,
        //     refreshing: false
        //       //dataSource: responseJson.result,
        //     }, function(){
    
        //     });
    
        //   })
        //   .catch((error) =>{
        //     this.setState({error,loading:false})
        //     console.error(error);
        //   });
    }

    makeRemoteRequest = () => {
        const {page,seed} = this.state
        const url = `https://product-catalog-api.herokuapp.com/products/?seed=${seed}&page=${page}&results=20`

        fetch(url)
        .then((response) => response.json())
        .then((response) => {
  
          this.setState({
          data: page === 1 ? response.result : [...this.state.data, ...response.result],
          error: response.error || null,
          loading: false,
          refreshing: false,
          nextPage: response.nextPage
          })
        })
        .catch((error) =>{
          this.setState({error,loading:false,refreshing:false})
          console.error(error);
        });

    }

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                refreshing: true,
                seed: this.state.seed +1
            },
            () =>{
                this.makeRemoteRequest()
            }
        )
    }
    
    handleLoadMore = () => {
        const {nextPage} = this.state
        if(nextPage !== null){
            this.setState(
            {
             page: this.state.page + 1
            },
            () => {
             this.makeRemoteRequest()
            }
        )}
    }

    render(){
        return(
            <View style={{flex: 1,marginLeft:13 , marginRight:34,marginTop:25}}>
               <FlatList
               numColumns= {2}
               style={{
                   margin:18
               }}
               data={this.state.data}
                    renderItem={({item})=>
                    (
                        <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('Detail',item)}  >
                             <Product products={item}/>
                         </TouchableOpacity>
                    )}
                    keyExtractor={item => item.productPrice}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndReachedTreshold={10}                   
                />
            </View>
        )
    }
}