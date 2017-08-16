import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import {Item, Input, Footer, FooterTab} from 'native-base';

export default class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {error: false, text: ''}
  }

  onText(text){
    this.setState({text: text});
    if(text.length >= 6 && this.state.error)
      this.setState({error: false})
  }

  onNext(){
    const { navigate } = this.props.navigation;
    if(this.state.text.length < 6){
      this.setState({error: true})
    }
    else{
      navigate('ViewDevices');
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Image style={styles.imageBackground1} source={require('../../images/waterbg.jpg')}>
        <View style={styles.innerImageView}>
          <Image style={styles.logoImage} source={require('../../images/signin_inhome.png')}/>
          <Text style={styles.logInHeader}>Access Code</Text>
          <Item error={this.state.error} regular style={{margin: 20, marginLeft: 20}}>
            <Input
              placeholder='Access code'
              secureTextEntry={true}
              onChangeText={this.onText.bind(this)}
            />
          </Item>
        </View>
      </Image>
      <Footer>
        <FooterTab style={{backgroundColor: '#1b75bb', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={this.onNext.bind(this)}>
            <Text style={styles.logInFooter}>LOG IN</Text>
          </TouchableOpacity>
        </FooterTab>
      </Footer>
      </View>
    );
  }
}
