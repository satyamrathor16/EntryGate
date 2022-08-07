import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Text from './CustomText'
import Button from './CustomButton'

import assets from '../assets'
import Config from '../Config';

interface ApproveRejectListProps {
    data: Array<listItem1>;
    onPress: (data: listItem) => void;
    onPositivePress: () => void;
    onNagativePress: () => void;

}

interface listItem1 {
    id: number;
    name: string;
    number: string;
    house_no: string;
    is_approved: boolean
}

interface listItem {
    item: {
        id: number;
        name: string;
        number: string;
        house_no: string;
        is_approved: boolean
    },
    index: number
}
const ApproveRejectList = (props: ApproveRejectListProps) => {

    const { data, onPress, onNagativePress, onPositivePress } = props;

    const _renderItem = ({ item, index }: listItem) => {
        return (
            <TouchableOpacity onPress={() => {
                onPress({ item, index })
            }} style={styles.cardStyle}>
                <Text textStyle={styles.nameText}>{item.name}</Text>
                <Text>{'contact No.:' + item.number}</Text>
                <Text>{'House No.: ' + item.house_no}</Text>
                <View style={styles.buttonContainer}>
                    <Button title='Reject' onPress={onNagativePress} buttonStyle={styles.buttonStyle} />
                    <Button title='Accept' onPress={onPositivePress} buttonStyle={styles.buttonStyle} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={_renderItem}
        />
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: Config.Colors.LIGHT_GRAY,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 12,
        elevation: 5,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowColor: Config.Colors.BLACK,
        shadowRadius: 5
    },
    nameText: {
        color: Config.Colors.PRIMARY,
        fontSize: 15,
        fontWeight: '700'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10
    },
    buttonStyle: {
        width: '47%',
    },

})

export default ApproveRejectList;