import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Config from '../Config';
import CustomText from './CustomText';
import Assets from '../assets';
interface propsInterfce {
    title: string;
    imageStyle?: object;
    titleStyles?: object;
    leftButtonPress?: () => void;
    showRightButton?: boolean;
    showLeftButton?: boolean;
    rightButtonPress?: () => void;
    mainContainer?: object;
    statusBarContainerStyle?: object;
    contentContainerStyle?: object;
    centerImage?: ImageSourcePropType;
    leftImage?: ImageSourcePropType;
    rightImage?: ImageSourcePropType;
    showNotificationCount?: boolean;
}

const Header = (props: propsInterfce) => {

    const {
        title,
        imageStyle,
        titleStyles,
        leftButtonPress,
        showRightButton = false,
        showLeftButton = true,
        rightButtonPress,
        mainContainer,
        statusBarContainerStyle,
        contentContainerStyle,
        centerImage,
        leftImage,
        rightImage,
        showNotificationCount = true
    } = props;

    return (
        <View style={[styles.container, mainContainer]}>
            <View style={[styles.statusBarContainer, statusBarContainerStyle]} />
            <View style={[styles.contentContainer, contentContainerStyle]}>
                {showLeftButton ?
                    <TouchableOpacity style={styles.imageButtonStyle} onPress={leftButtonPress}>
                        {leftImage ?
                            <Image source={leftImage} resizeMode='contain' style={[styles.leftImageStyle, imageStyle]} />
                            :
                            <Image source={Assets.back} resizeMode='contain' style={[styles.leftImageStyle, styles.backIconColor, imageStyle]} />
                        }
                    </TouchableOpacity>
                    :
                    <View style={styles.flexStyle} />
                }

                {centerImage ?
                    <View style={styles.centerImageContainer}>
                        <Image
                            source={centerImage}
                            resizeMode='contain'
                            style={styles.centerImage}
                        />
                    </View>
                    :
                    <View style={styles.centerContainer}>
                        <CustomText numberofLine={1} textStyle={[styles.titleStyle, titleStyles]}>{title}</CustomText>
                    </View>
                }

                {showRightButton ?
                    <TouchableOpacity style={styles.imageRightButtonStyle} onPress={() => {
                        // analytics().logEvent('menu_button');
                        rightButtonPress()
                    }}>
                        {rightImage &&
                            <View style={[styles.rightImageStyles]}>
                                <Image source={rightImage} style={[styles.rightImageStyles, imageStyle]} />
                                {/* {!!unreadCount &&
                                    <View style={styles.iconBadge}>
                                        <Component.CustomText textStyle={styles.listItemMessageCount}>{unreadCount}</Component.CustomText>
                                    </View>
                                } */}

                            </View>
                            // :
                            // <Image source={require('../assets/images/ic_navigation_right_button.png')} style={[styles.rightImageStyles, imageStyle]} />
                        }
                    </TouchableOpacity>
                    :
                    <View style={styles.flexStyle}></View>
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Config.Constants.SCREEN_WIDTH,
        backgroundColor: Config.Colors.BLACK,
        // elevation: 7,
        // shadowColor: Config.Colors.BLACK,
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 5
    },
    statusBarContainer: {
        width: Config.Constants.SCREEN_WIDTH,
        height: getStatusBarHeight(),
        backgroundColor: Config.Colors.BLACK,
    },
    contentContainer: {
        flexDirection: 'row',
        height: 50,
        width: Config.Constants.SCREEN_WIDTH,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: Config.Colors.PRIMARY,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    leftImageStyle: {
        height: 25,
        width: 25,
    },
    rightImageStyles: {
        height: 25,
        width: 25,
    },
    centerContainer: {
        flex: 10,
        alignItems: Platform.OS == 'android' ? 'flex-start' : 'center',
    },
    titleStyle: {
        // flex: 10,
        fontSize: 18,
        color: Config.Colors.WHITE,
        // fontFamily: Platform.OS == 'android' ? Config.Theme.FONT_BOLD : Config.Theme.FONT_SEMI_BOLD,
        // textAlign: Platform.OS == 'android' ? 'justify' : 'center',
        // textAlign: 'center',
    },
    imageButtonStyle: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageRightButtonStyle: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    centerImage: {
        height: 50,
        width: 150,
    },
    centerImageContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexStyle: {
        flex: 1,
    },
    iconBadge: {
        minHeight: 14,
        minWidth: 14,
        backgroundColor: Config.Colors.SECONDARY,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
        position: 'absolute',
        right: -5,
        top: 0
    },
    listItemMessageCount: {
        fontSize: 8,
        color: Config.Colors.BLACK
    },
    backIconColor: {
        tintColor: Config.Colors.SECONDARY
    }
})

export default Header;