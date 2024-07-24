import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors'
import { AntDesign } from '@expo/vector-icons';



export default function ProfileScreen() {
  return (
    <View style={{}}>
        
        <View style={styles.containerProfile}>
            <Image style={styles.image} source={{uri:'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868.jpg'}}/>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Name</Text>
            <Text style={{opacity: 0.5}}>Frase descritiva</Text>
        </View>
        

        <View style={styles.containerOptions}>
            <View style={{position: 'absolute', backgroundColor: Colors.Branco,}}>

            <View style={styles.itemOptions}>
                <View style={styles.option}>
                    <AntDesign name="customerservice" size={30} color="black" style={styles.iconLeft}/>
                    <Text style={styles.textOption}>legenda</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.iconRight}/>
                </View>
            </View>
            <View style={styles.itemOptions}>
                <View style={styles.option}>
                    <AntDesign name="customerservice" size={30} color="black" style={styles.iconLeft}/>
                    <Text style={styles.textOption}>legenda</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.iconRight}/>
                </View>
            </View>
            <View style={styles.itemOptions}>
                <View style={styles.option}>
                    <AntDesign name="customerservice" size={30} color="black" style={styles.iconLeft}/>
                    <Text style={styles.textOption}>legenda</Text>
                    <AntDesign name="right" size={24} color="black" style={styles.iconRight}/>
                </View>
            </View>

            </View>

        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        height: '60%',
        backgroundColor: Colors.Bege,
        
    },
    containerProfile:{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        marginTop: 40, 
    },
    containerOptions:{
        flexDirection: 'column',
        alignItems: 'center', 
        
    },
    image:{
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 20,
        borderWidth: 5,
        borderColor: Colors.Preto,
    },
    itemOptions:{
        width: 300,
        margin: 2,
        marginBottom: 2,
        borderBottomEndRadius: 6,
        borderBottomColor: Colors.Marrom,
        height: 50,
        alignItems: 'center',
    },
    option:{
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10,
        
    },
    iconLeft:{
        left: -70

    },
    iconRight:{
        right: -80, 
        opacity: 0.3
    },
    textOption:{
        left: -50, 
        fontSize: 17
    }
})