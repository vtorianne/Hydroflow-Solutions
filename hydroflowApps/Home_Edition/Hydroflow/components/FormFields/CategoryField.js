import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class Category extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let categories = [
          {value: "Kitchen"},
          {value: "Bathroom"},
          {value: "Laundry"},
          {value: "Toilets"},
          {value: "Dishwasher"},
          {value: "Irrigation"},
          {value: "Outside"},
          {value: "Other"}
        ]
        var err = this.props.error ? 'Required' : '';
        return (
            <View style={styles.formSelect}>
                <Dropdown
                    labelFontSize={24}
                    baseColor={'#1b75bb'}
                    itemTextStyle={{fontSize: 18, color: '#1b75bb'}}
                    itemCount={3}
                    error={err}
                    label='Category'
                    value={this.props.category}
                    onChangeText={(text)=>this.props.setCategory(text)}
                    data={categories}
                />
            </View>
        )
    }
}
