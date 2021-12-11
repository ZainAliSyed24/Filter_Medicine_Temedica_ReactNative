import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 15,
        marginHorizontal: 15,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    drugsView:{
        flex: 1,
        flexDirection: 'row',
    },
    titleName:{
        fontSize: 20,
    },
    dossView:{
        flex: 1,
    },
    dateView:{
        flex: 1,
        alignItems: "flex-end",
    },
    discriptionView: {
        flex: 1,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
    },
    scrol: {
        marginBottom: "105%",
    }
});