import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';
import {Item, Input} from 'native-base';

export default class DeviceIDField extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.formField}>
                <Text style={styles.formText}>Device ID</Text>
                <Item error={this.props.error}>
                  <Input
                      placeholder='Device ID'
                      style={styles.formInput}
                      onChangeText={(text) => this.props.setDeviceID(text)}
                      value={this.props.deviceID}
                  />
                  {this.props.error && <Text style={styles.errorText}>Required</Text>}
                </Item>
            </View>
        )
    }
}
