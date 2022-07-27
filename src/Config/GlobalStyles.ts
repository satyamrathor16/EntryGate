import { StyleSheet } from 'react-native';
import Colors from './Colors';


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 12,
    },
    pagePaddingSide: {
        paddingTop: 6,
        paddingBottom: 18,
        paddingHorizontal: 16,
    }
})

export default styles;