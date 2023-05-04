import { Dimensions } from 'react-native';


export default {
    SCREEN_WIDTH: Dimensions.get('screen').width,
    SCREEN_HEIGHT: Dimensions.get('screen').height,
    EMAIL_VALIDATION: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    MOBILE_NUMBER:/^[0-9\b]+$/,
}