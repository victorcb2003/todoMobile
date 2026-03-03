import { StyleSheet } from "react-native";

export const style=StyleSheet.create({
    button : {
        borderWidth:1,
        borderBlockColor:"black",
        borderRadius:15,
        justifyContent:"center",
        paddingHorizontal:10
    },
    true:{
        display:'flex',
        flexDirection:"row",
        backgroundColor:"green",
        justifyContent:"space-between",
        alignItems:"center",
        padding:5,marginHorizontal: "5%",
        marginTop:10,
        borderBlockColor:"black",
        borderWidth:2,
        borderRadius:15
    },
    false:{
        display:'flex',
        flexDirection:"row",
        backgroundColor:"red",
        justifyContent:"space-between",
        alignItems:"center",
        padding:5,
        marginHorizontal: "5%",
        marginTop:10,
        borderBlockColor:"black",
        borderWidth:2,
        borderRadius:15
    },
    displayConteiner : {
        display: "flex",
    },
    h1:{
        backgroundColor:"lightblue",
        display:"flex",
        textAlign:"center",
        fontSize:30,
        padding:20,
        marginBottom:10
    },
    h2 : {
        marginLeft:20,
        fontSize:20,
        marginBottom:10,
    },  
    inputConteiner : {
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        marginHorizontal:"10%",
        marginTop:20,
        marginBottom:40
    },
    modifyConteiner :{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    input: {
        maxWidth:"60%"
    }
})