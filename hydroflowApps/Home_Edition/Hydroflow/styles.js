import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import Dimensions from 'Dimensions';

var devWidth = Dimensions.get('window').width;
var devHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formField: {
      margin: 20,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    formSelect: {
      margin: 20,
      width: 200
    },
    formInput : {
      fontSize: 18,
      width: 200
    },
    formText: {
      fontSize: 24,
      color: '#1b75bb'
    },
    errorText: {
      fontSize: 12,
      color: 'red'
    },
    imageBackground1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: devWidth,
        height: devHeight
    },
    imageBackground2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: devWidth,
        height: devHeight
    },
    innerImageView: {
      opacity: 1.0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoImage: {
      width: 300,
      height: 100,
      margin: 20
    },
    footerText: {
      fontSize: 20,
      alignItems: 'center',
      color: '#fff',
      fontWeight: 'bold'
    },
    deviceCard: {
      flex: 1,
      margin: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#1b75bb',
      elevation: 5,
      width: devWidth*0.9
    },
    deviceIdText: {
      fontSize: 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
    },
    deviceDetailText: {
      padding: 5,
      fontSize: 14,
      color: '#fff'
    },
    deviceList: {
      margin: 10,
      marginTop: 20,
      marginBottom: 0
    },
    logInHeader: {
      fontSize: 28,
      color: '#1b75bb',
      fontWeight: 'bold',
      margin: 10
    },
    logInFooter: {
      fontSize: 28,
      color: '#fff',
      fontWeight: 'bold'
    },
});
