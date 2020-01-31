import * as React from 'react';
import AppNavigator from './navigator';
import {GameballWidget} from 'react-native-gameball';

export default function App() {
    GameballWidget.init('61aa61c1d78e4a4b966860bd9d2403e0', 'en');
    console.info('==> GameballWidget.init(61aa61c1d78e4a4b966860bd9d2403e0, en) method call');
    return (
        <>
            <AppNavigator/>
        </>
    );
};
