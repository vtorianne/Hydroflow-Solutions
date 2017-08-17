import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';
import {Footer, FooterTab} from 'native-base';

export default class FooterMenu extends Component {
  constructor(props){
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        var footerStyle = {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
          borderRightWidth: 1,
          borderColor: '#c8cace'
        };
        return (
          <Footer>
            <FooterTab style={footerStyle}>
              <TouchableOpacity onPress={()=>navigate('ViewDevices')}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../images/app_devices.png')}
                />
              </TouchableOpacity>
            </FooterTab>
            <FooterTab style={footerStyle}>
              <TouchableOpacity onPress={()=>navigate('RegisterDevice', {updateList: this.props.updateList})}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../images/app_register.png')}
                />
              </TouchableOpacity>
            </FooterTab>
            <FooterTab style={footerStyle}>
              <TouchableOpacity onPress={()=>Linking.openURL('http://hub.hydroflow.solutions/sources/1/dashboards/1')}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../images/app_dashboard.png')}
                />
              </TouchableOpacity>
            </FooterTab>
            <FooterTab style={footerStyle}>
              <TouchableOpacity onPress={()=>navigate('Settings')}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../images/app_settings.png')}
                />
              </TouchableOpacity>
            </FooterTab>
          </Footer>
        );
    }
}
