import { StyleSheet } from "react-native";

export const style=StyleSheet.create({
    button : {
        borderWidth:1,
        borderBlockColor:"black",
        borderRadius:15,
        padding:4
    },
    true:{
        display:'flex',
        flexDirection:"row",
        backgroundColor:"green",
        justifyContent:"space-between",
        alignItems:"center"
    },
    false:{
        display:'flex',
        flexDirection:"row",
        backgroundColor:"red",
        justifyContent:"space-between",
        alignItems:"center"
    },
    displayConteiner : {
        display: "flex",
    }
})