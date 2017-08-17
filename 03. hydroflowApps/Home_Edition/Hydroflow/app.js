import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import styles from './styles.js';
import RegistrationForm from './components/FormContainers/RegistrationForm';
import DeviceList from './components/Views/DeviceView/DeviceList';
import UpdateForm from './components/FormContainers/UpdateForm';
import LogIn from './components/Views/LogIn';
import Settings from './components/Views/Settings';

const AppNavigator = StackNavigator(
    {
        LogIn: {
          screen: LogIn
        },
        ViewDevices: {
            screen: DeviceList
        },
        UpdateDevice: {
            screen: UpdateForm
        },
        RegisterDevice: {
            screen: RegistrationForm
        },
        Settings: {
          screen: Settings
        },
    },
    {
        initialRouteName: 'LogIn'
    }
);

export default class Hydroflow extends Component {

    render() {
        return (
            <AppNavigator/>
        );
    }
}
