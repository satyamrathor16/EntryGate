import React from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Text from './CustomText';

import Config from '../Config';
interface listItem {
    item: {
        id: number;
        name: string;
        image: number;
        navigation?: string
    },
    index: number
}

interface FlatListProps {
    data: object;
    numColumns?: number;
    onItemPress: (data: listItem) => void;
}

const DashboardFlatList = (props: FlatListProps) => {

    const {
        data,
        numColumns = 3,
        onItemPress = () => { }
    } = props

    const _renderItem = ({ item, index }: listItem) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    onItemPress({ item, index })
                }}
                style={styles.listItem}>
                <Image
                    source={item.image}
                    style={{ width: '60%', height: '60%' }}
                    resizeMode='contain'
                />
                <Text numberofLine={1} textStyle={styles.listItemText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={_renderItem}
            style={styles.listSty}
            // contentContainerStyle={contentContainerStyle}
            numColumns={numColumns}
        />
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '28.1%',
        height: 150,
        backgroundColor: '#F5F5F5',
        marginVertical: 10,
        marginHorizontal: 10,
        // marginTop: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowColor: Config.Colors.BLACK,
        shadowRadius: 5
    },
    listSty: {
        paddingHorizontal: 8
    },
    listItemText: {
        marginTop: 10,
        marginHorizontal:5
    }
})

export default DashboardFlatList;