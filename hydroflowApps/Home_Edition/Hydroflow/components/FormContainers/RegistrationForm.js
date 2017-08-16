import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import {Footer, FooterTab, Icon} from 'native-base';
import device from '../../modules/device';
import DeviceIDField from '../FormFields/DeviceIDField';
import CategoryField from '../FormFields/CategoryField';
import LocationField from '../FormFields/LocationField';
import ParentField from '../FormFields/ParentField';

export default class RegistrationForm extends Component {
    static navigationOptions = {
        title: 'Register Device',
    };

    constructor(props){
        super(props);
        this.state = {
            index: 0,
            errors: [false, false, false, false], //maps to indices for fields
            deviceID: "",
            category: "",
            location: "",
            parent: ""
        }
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

    displayFormField() {
        const errors = this.state.errors;
        switch(this.state.index){
            case 0:
                return (
                    <DeviceIDField
                        error={errors[0]}
                        deviceID={this.state.deviceID}
                        setDeviceID={this.setDeviceID.bind(this)}
                    />
                );
                break;
            case 1:
                return (
                    <CategoryField
                        error={errors[1]}
                        category={this.state.category}
                        setCategory={this.setCategory.bind(this)}
                    />
                );
                break;
            case 2:
                return (
                    <LocationField
                        error={errors[2]}
                        location={this.state.location}
                        setLocation={this.setLocation.bind(this)}
                    />
                );
                break;
            case 3:
                return (
                    <ParentField
                        error={errors[3]}
                        parent={this.state.parent}
                        setParent={this.setParent.bind(this)}
                    />
                );
                break;
        }
    }

    onBack(){
      const {goBack} = this.props.navigation;
      if(this.state.index === 0)
          goBack();
      else
          this.setState((prevState) => ({index: prevState.index-1}));
    }

    onNext(){
      const {goBack} = this.props.navigation;
      const errors = this.state.errors;
      var deviceFields = [this.state.deviceID, this.state.category, this.state.location, this.state.parent];
      if(deviceFields[this.state.index] == ''){
        errors[this.state.index] = true;
        this.setState({errors: errors});
      }
      else if(this.state.index === 3) {
          device.register({
             deviceID: this.state.deviceID,
             category: this.state.category,
             location: this.state.location,
             parent: this.state.parent
          });
          this.props.navigation.state.params.updateList();
          goBack();
      }
      else {
          this.setState((prevState) => ({index: prevState.index + 1}));
      }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image style={styles.imageBackground2} source={require('../../images/waterbg.jpg')}>
                      {this.displayFormField()}
                </Image>
                <Footer>
                  <FooterTab style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#1b75bb', borderRightWidth: 1, borderColor: '#c8cace'}}>
                    <TouchableOpacity onPress={this.onBack.bind(this)}>
                        <Text style={styles.footerText}>BACK</Text>
                    </TouchableOpacity>
                  </FooterTab>
                  <FooterTab style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#1b75bb', borderLeftWidth: 1, borderColor: '#c8cace'}}>
                    <TouchableOpacity onPress={this.onNext.bind(this)}>
                          <Text style={styles.footerText}>{this.state.index === 3 ? "SUBMIT" : "NEXT"}</Text>
                    </TouchableOpacity>
                  </FooterTab>
                </Footer>
            </View>
        );
    }
}
