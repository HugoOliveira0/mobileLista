import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87cefa',

    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        // backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'


    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        // backgroundColor: 'green',
        width: '100%',
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        // backgroundColor: 'blue',
        width: '100%',
        //justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,

        fontSize: 18,
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20,
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightgray,
        borderColor: themas.colors.lightgray,
    },
    input: {
        height: '100%',
        width: '90%'
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    textButton: {
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray,
    }

})

