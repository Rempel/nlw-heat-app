import React, { Fragment } from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from "expo-app-loading";
import { StatusBar } from 'expo-status-bar';


import { Home } from './src/screens/Home/index'

export default function App() {
    const [ fonstLoaded ] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    });

    if (!fonstLoaded) {
        return <AppLoading />
    }

    return (
        <Fragment>
            <StatusBar style="light" />
            <Home />
        </Fragment>
    );
}
