import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import BarcodeScanner from './barcodeSanner';

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      hasCameraPermission: null,
      lastScannedUrl: null,
      scanned: false,
    }
  }

  render(){
    return(
      <View style={{ flex:1 }}>
        <BarcodeScanner/>
      </View>
    )
  }
}