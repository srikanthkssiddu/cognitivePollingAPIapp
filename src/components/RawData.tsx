import {  Text, SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Card } from 'react-native-paper';



export default class App2 extends React.Component{
    render() {
      const { navigation } = this.props;
      const item = this.props.route.params.item;
     
    return (
        <SafeAreaView>
           <ScrollView>
            <Card>
                <Text>{JSON.stringify(item, null, 4)}</Text>
            </Card>
           </ScrollView>   
        </SafeAreaView>
      );
    }
};