import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import Config from '../Config'

export default class LoaderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
    }

    showLoader = (show) => {
        this.setState({
            isVisible: show,
        })
    }

    render() {
        if (!this.state.isVisible) {
            return null
        }
        return (
            <View style={styles.mainContainer}>
                <View style={styles.loaderView}>
                    <ActivityIndicator size="large" color={Config.Colors.PRIMARY} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Config.Colors.TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderView: {
        padding: 25,
        elevation: 10,
        backgroundColor: Config.Colors.WHITE,
        borderRadius: 20,
        shadowColor: Config.Colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }

})