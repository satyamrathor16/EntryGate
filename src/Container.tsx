import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert'
import Config from './Config';
import Components from './components';
const Container = ({ children }) => {
    return (
        <View style={styles.flex}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
            {children}
            <Components.LoaderComponent ref={ref => Components.Loader.setLoaderRef(ref)} />
            <DropdownAlert
                translucent
                inactiveStatusBarBackgroundColor={Config.Colors.TRANSPARENT}
                inactiveStatusBarStyle='light-content'
                ref={DropdownAlertRef => Components.DropDownAlert.setDropdownRef(DropdownAlertRef)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
})

export default Container;