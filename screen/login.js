import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {GameballSdk} from 'react-native-gameball';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isUserRegistered: false,
        };
    }


    onLogin() {
        GameballSdk.registerUser({
            'playerUniqueId': '898989898989',
            'playerAttributes': {
                'displayName': 'JOhn Doe',
            },
        }).then(response => {
            console.info('==> Player registration response :', response);
            this.setState({isUserRegistered: true});
            this.props.navigation.navigate('App');
        }) // on success
            .catch(error => console.log(error)); // on error

    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.onLogin()} title={'Click to Login'}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

