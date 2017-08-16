import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Picker,
    TouchableHighlight
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import device from '../../modules/device';

export default class ParentField extends Component {
    constructor(props){
        super(props);
        this.state = {devices: [], parent: this.props.parent};
    }

    componentDidMount(){
        device.getAll((devices) => {
            if(this.props.currDevice && this.props.currDevice !== ''){
                var index = devices.findIndex(device => device.deviceID === this.props.currDevice);
                if(index > -1){
                    devices.splice(index, 1);
                }
            }
            this.setState({devices: devices});
        });
    }

    render() {
        let devices = this.state.devices.map((device)=>{return {value: device.deviceID}});
        devices.unshift({value: "None"});
        var err = this.props.error ? 'Required' : '';
        return (
          <View style={styles.formSelect}>
              <Dropdown
                  labelFontSize={24}
                  baseColor={'#1b75bb'}
                  itemTextStyle={{fontSize: 18, color: '#1b75bb'}}
                  itemCount={3}
                  error={err}
                  label='Parent Device'
                  value={this.props.parent}
                  onChangeText={(text)=>this.props.setParent(text)}
                  data={devices}
              />
          </View>
        );
    }
}
