import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Card} from 'native-base';

export default class DeviceRow extends Component {
    constructor(props){
        super(props);
    }

    goToDeviceEdit(){
        const { navigate } = this.props.navigation;
        navigate('UpdateDevice', {
          device: this.props.device,
          rowID: this.props.rowID,
          updateList: this.props.updateList,
          removeFromList: this.props.removeFromList
        });
    }

    render(){
        return (
            <View style={styles.deviceCard}>
                <TouchableOpacity onPress={this.goToDeviceEdit.bind(this)}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.deviceIdText}>{this.props.device.deviceID}</Text>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'column'}}>
                          <Text style={styles.deviceDetailText}>{this.props.device.location}</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                          <Text style={styles.deviceDetailText}>{this.props.device.category}</Text>
                        </View>
                      </View>
                     </View>
                </TouchableOpacity>
            </View>
        );
    }
}
