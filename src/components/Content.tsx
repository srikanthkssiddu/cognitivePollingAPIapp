import React, { Component } from 'react';
import { Card } from 'react-native-paper'; 
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator
  
} from 'react-native';


export default class App1 extends React.Component{
 
  pageCount: number;
  timer: number | undefined;
  
  constructor() {
    super();
    this.state = {
      loading: true,
      serverData: [],  
      fetching_from_server: false,
    };
    
    
    this.pageCount = 0;
  }
  componentDidMount() {
    this.timer = setInterval(() => this.getItems(),1000*10);
  }
  

  getItems() {
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page='+this.pageCount)
      .then(response => response.json())
      .then(responseJson => {
        this.pageCount = this.pageCount + 1;
        this.setState({
          serverData: [...responseJson.hits,...this.state.serverData],
          loading: false,
          
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
 
  getMoreItems() {
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page='+this.pageCount)
      .then(response => response.json())
      .then(responseJson => {
        this.pageCount = this.pageCount + 1;
        this.setState({
          serverData: [...responseJson.hits,...this.state.serverData],
          loading: false,
          
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
        <FlatList
          style={{ width: '100%' }}
            keyExtractor={(item, index) => index}
            data={this.state.serverData}
            renderItem={({ item, index }) => <>
            <Card>
            <Card.Content>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('RawData', {
                    item,  
                  });
                }} >
                <Text style={styles.title1}>-Url : </Text>
                <Text style={styles.title2}> {item.url} </Text>
                <Text style={styles.title1}>-Title :</Text>
                <Text style={styles.title2}> {item.title} </Text>
                <Text style={styles.title1}>-Created_at: </Text>
                <Text style={styles.title2}> {item.created_at} </Text>
                <Text style={styles.title1}>-Author: </Text>
                <Text style={styles.title2}> {item.author} </Text>
              </TouchableOpacity>
            </Card.Content>
            </Card>
            </>}
            onEndReached={this.getMoreItems}
            onEndReachedThreshold={0.4}
        /> 
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  item: {
    padding: 10,height:80
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  title1: {
    fontWeight: "400",
    fontSize: 15,
    padding:2,
    color: '#4682b4'
  },
  title2: {
  fontWeight: "400",
  fontSize: 15,
  padding:2
  },
  card: {
  width:10,
  height:100
  }

});