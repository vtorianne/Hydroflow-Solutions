import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import {Footer, FooterTab, Header, Title} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import device from '../../modules/device';
import DeviceIDField from '../FormFields/DeviceIDField';
import CategoryField from '../FormFields/CategoryField';
import LocationField from '../FormFields/LocationField';
import ParentField from '../FormFields/ParentField';

export default class UpdateForm extends Component {
    static navigationOptions = {
        title: 'Update Device'
    };

    constructor(props){
        super(props);
        this._id = this.props.navigation.state.params.device._id;
        this.state = {
            deviceID: this.props.navigation.state.params.device.deviceID,
            category: this.props.navigation.state.params.device.category,
            location: this.props.navigation.state.params.device.location,
            parent: this.props.navigation.state.params.device.parent,
            errors: [false, false, false, false]
        };
    }

    updateDevice(){
        device.update(this._id, {
            deviceID: this.state.deviceID,
            category: this.state.category,
            location: this.state.location,
            parent: this.state.parent
        });
        this.props.navigation.state.params.updateList();
        this.props.navigation.goBack();
    }

    confirmUpdate(){
        var allFilled = true;
        const errors = this.state.errors;
        if(this.state.deviceID == ''){
          allFilled = false;
          errors[0] = true;
          this.setState({errors: errors});
        }
        if(this.state.category == ''){
          allFilled = false;
          errors[1] = true;
          this.setState({errors: errors});
        }
        if(this.state.location == ''){
          allFilled = false;
          errors[2] = true;
          this.setState({errors: errors});
        }
        if(this.state.parent == ''){
          allFilled = false;
          errors[3] = true;
          this.setState({errors: errors});
        }
        if(allFilled){
          Alert.alert(
              "Edit Device",
              "Save changes?",
              [
                  {text: "Yes", onPress: this.updateDevice.bind(this)},
                  {text: "No"}
              ]
          );
        }
    }

    deleteDevice(){
      device.remove(this._id);
      this.props.navigation.state.params.removeFromList(  this.props.navigation.state.params.rowID);
      this.props.navigation.goBack();
    }

    confirmDelete(){
      Alert.alert(
          "Delete Device",
          "Remove this device?",
          [
              {text: "Yes", onPress: this.deleteDevice.bind(this)},
              {text: "No"}
          ]
      );
    }

    setDeviceID(deviceID){
        const errors = this.state.errors;
        this.setState({deviceID: deviceID});
        if(deviceID != '' && errors[0] == true){
          errors[0] = false;
          this.setState({errors: errors});
        }
    }

    setCategory(category){
        const errors = this.state.errors;
        this.setState({category: category});
        if(category != '' && errors[1] == true){
          errors[1] = false;
          this.setState({errors: errors});
        }
    }

    setLocation(location){
        const errors = this.state.errors;
        this.setState({location: location});
        if(location != '' && errors[2] == true){
          errors[2] = false;
          this.setState({errors: errors});
        }
    }

    setParent(parent){
        const errors = this.state.errors;
        this.setState({parent: parent});
        if(parent != '' && errors[3] == true){
          errors[3] = false;
          this.setState({errors: errors});
        }
    }

    render() {
        const {state} = this.props.navigation;
        const errors = this.state.errors;
        return (
          <View style={{flex: 1}}>
              <Image style={styles.imageBackground2} source={require('../../images/waterbg.jpg')}>
                <KeyboardAwareScrollView>
                  <DeviceIDField error={errors[0]} deviceID={this.state.deviceID} setDeviceID={this.setDeviceID.bind(this)}/>
                  <CategoryField error={errors[1]} category={this.state.category} setCategory={this.setCategory.bind(this)}/>
                  <LocationField error={errors[2]} location={this.state.location} setLocation={this.setLocation.bind(this)}/>
                  <ParentField error={errors[3]} parent={this.state.parent} currDevice={this.state.deviceID} setParent={this.setParent.bind(this)}/>
                </KeyboardAwareScrollView>
              </Image>
              <Footer>
                <FooterTab style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#1b75bb', borderRightWidth: 1, borderColor: '#c8cace'}}>
                  <TouchableOpacity onPress={this.confirmUpdate.bind(this)}>
                      <Text style={styles.footerText}>UPDATE</Text>
                  </TouchableOpacity>
                </FooterTab>
                <FooterTab style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#1b75bb', borderLeftWidth: 1, borderColor: '#c8cace'}}>
                  <TouchableOpacity onPress={this.confirmDelete.bind(this)}>
                      <Text style={styles.footerText}>DELETE</Text>
                  </TouchableOpacity>
                </FooterTab>
              </Footer>
          </View>
        );
    }
}
