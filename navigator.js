import React from 'react';
import {Button, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screen/login';
import {GameballWidget} from 'react-native-gameball';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View>
                    <Button onPress={() => this.props.navigation.navigate('Auth')} title={'back'}/>
                </View>

                <GameballWidget/>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const AuthStack = createStackNavigator({
    Login: LoginScreen,
});

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            // AuthLoading: AuthLoadingScreen,
            Auth: AuthStack,
            App: TabNavigator,
        },
        {
            initialRouteName: 'Auth',
        },
    ),
);

export default AppNavigator;
