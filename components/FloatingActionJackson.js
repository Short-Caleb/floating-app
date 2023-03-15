import React from 'react'
import { StyleSheet, Text, View, Pressable,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



 

export const FloatingActionJackson = ({pressHandler}) => {

    const clickHandler = () => {
        //function to handle click on floating Action Button
        alert('Floating Button Clicked');
      };
   

  return (
    <View style={styles.viewStyle}>
        <Pressable 
        style={styles.pressableStyle}
        onPress={pressHandler("January")}
        >
      
        <MaterialCommunityIcons name="typewriter" size={36} color="black" />
        </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    viewStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    pressableStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });
  