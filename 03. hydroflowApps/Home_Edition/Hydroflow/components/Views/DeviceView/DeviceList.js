import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    Image
} from 'react-native';
import device from '../../../modules/device';
import DeviceRow from './DeviceRow';
import FooterMenu from '../../FooterMenu.js';

export default class DeviceList extends Component {
    static navigationOptions = {
        title: 'My Devices',
    };

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows([])}
    }

    componentDidMount(){
        this.updateList();
    }

    componentWillReceiveProps(){
        this.updateList();
    }

    updateList(){
      device.getAll((devices)=>{
         this.setState({dataSource: this.state.dataSource.cloneWithRows(devices)});
      });
    }

    removeFromList(rowID){
      var devices = this.state.dataSource._dataBlob.s1;
      delete devices[rowID];
      this.setState({dataSource: this.state.dataSource.cloneWithRows(devices)});
    }

    render() {
        return (
            <View style={{flex: 1}}>
              <Image style={styles.imageBackground2} source={require('../../../images/waterbg.jpg')}>
                <ListView
                    style={styles.deviceList}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) => (
                      <DeviceRow
                        device={rowData}
                        rowID={rowID}
                        updateList={this.updateList.bind(this)}
                        removeFromList={this.removeFromList.bind(this)}
                        {...this.props}
                      />
                    )}
                />
            </Image>
            <FooterMenu navigation={this.props.navigation} updateList={this.updateList.bind(this)}/>
            </View>
        );
    }
}
