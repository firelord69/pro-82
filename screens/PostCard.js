import { Component } from "react";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PostCard extends Component{
       constructor(props){
           super(props);
           this.state = {

           }
       }

       render(){
           return(
               <View style = {styles.container} >
                   <View style = {styles.cardContainer}>
                        <View style = {styles.authorContainer}>
                            <View style={styles.authorImageContainer}>
                                <Image source={require("../assets/profile_img.png")} style = {styles.profileImage} />
                            </View>
                            <View style = {styles.authorNameContainer}>
                                <Text style = {styles.authorNameText} >{this.props.post.author}</Text>
                            </View>
                        </View>
                        <Image source = {require("../assets/post.jpeg")} style = {styles.postImage} />
                        <View style = {styles.captionContainer} >
                            <Text style={styles.captionText}>{this.props.post.caption}</Text>
                        </View>
                        <View style={styles.actionContainer} >
                            <View style = {styles.likeButton} >
                                <Ionicons name = {"Heart"} size = {RFValue(30)} color ={"white"}/>
                                <Text style = {styles.likeText}>12K</Text>
                            </View>
                        </View>
                   </View>
               </View>
           )
       }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:RFValue(28)
    },
    cardContainer:{
        flex:0.85,
        margin:RFValue(13),
        backgroundColor:"#2e2e2e",
        borderRadius:RFValue(20),
        padding:RFValue(20)
    },
    authorContainer:{
        flex:0.1,
        flexDirection:'row',
    },
    authorImageContainer:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    profileImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain",
        borderRadius:RFValue(100)
    },
    authorNameContainer:{
        flex:0.85,
        justifyContent:"center",
    },
    authorNameText:{
        color:"white",
        fontSize:RFValue(20)
    },
    postImage:{
        marginTop:RFValue(20),
        resizeMode:"contain",
        width:"100%",
        height:"100%",
        alignSelf:"center"
    },
    captionContainer:{
        
    },
    captionText:{
        fontSize:13,
        color:"white",
        paddingTop:RFValue(10)
    },
    actionContainer:{
        justifyContent:"center",
        alignItems:"center",
        padding:RFValue(10)
    },
    likeButton:{
        width:RFValue(160),
        height:RFValue(40),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:"#eb3948",
        borderRadius:RFValue(30)
    },
    likeText:{
        color:"white",
        fontSize:RFValue(25),
        marginLeft:RFValue(5)
    }
    
    
    

})