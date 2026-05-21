import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";    

export const style = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },

    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },

    centerWrapper:{
        flex: 1,
        alignItems: 'center',
    },

    centerButtonContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30, //Sobe o botão para ficar centralizado na tab
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }
}); 