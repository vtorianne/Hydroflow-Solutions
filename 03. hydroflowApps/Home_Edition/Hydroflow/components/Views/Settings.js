import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Switch,
    TouchableOpacity,
} from 'react-native';
import {Item} from 'native-base';
import FooterMenu from '../FooterMenu.js';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    constructor(props){
        super(props);
        this.state = {value: false};
    }

    render() {
        return (
            <View style={{flex: 1}}>
              <View style={{flex: 1, backgroundColor: '#F5FCFF'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', margin: 20, marginTop: 30}}>
                  <Item style={{flex: 1}}>
                  <Switch value={this.state.value} onValueChange={(value)=>this.setState({value: value})}/>
                  <Text style={{margin: 10, fontSize: 18}}>Share Water Usage Data</Text>
                  </Item>
                </View>
                <Text style={{margin: 25, fontSize: 14}}>
                  Sharing is caring! Join the effort and with us and help conserve water. By sharing your water data with us we can compile and disseminate the nation's water-use data This will help our team of Hydrologists, cool name for people who study water, understand water usage at home, in agriculture, and on a business level. Don't worry we just gather your water usage and study the numbers we do not share your data with anyone one else.
                  {'\n\n'}
                  Will you help us try conserve water and save the planet?
                </Text>
              </View>
              <FooterMenu navigation={this.props.navigation}/>
            </View>
        );
    }
}
