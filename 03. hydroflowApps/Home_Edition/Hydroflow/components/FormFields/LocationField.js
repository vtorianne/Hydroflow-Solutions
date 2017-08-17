import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';
import {Item, Input} from 'native-base';

export default class LocationField extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.formField}>
                <Text style={styles.formText}>Location</Text>
                <Item error={this.props.error}>
                  <Input
                      placeholder='Location'
                      style={styles.formInput}
                      onChangeText={(text) => this.props.setLocation(text)}
                      value={this.props.location}
                  />
                  {this.props.error && <Text style={styles.errorText}>Required</Text>}
                </Item>
            </View>
        )
    }
}
