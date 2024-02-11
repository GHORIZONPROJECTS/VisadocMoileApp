import { StyleSheet, Text, View, StatusBar, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants/theme'
import { Ionicons, FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { NotificationListData, ProfileListData, documentsCardData } from '../../data';
import { Divider } from 'react-native-paper';

export default function NotificationScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>

      <StatusBar translucent={true} backgroundColor={COLORS.main}  barStyle="light-content" />

      <View style={{width:SIZES.width, height:60, backgroundColor:COLORS.main, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingHorizontal:20}}> 
      
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Ionicons name="ios-arrow-back" size={28} color="white" />
                </Pressable>
                <View style={{flexDirection:'column', marginLeft:10}}>
                    <Text style={{fontSize:16, color:COLORS.white}}>Notification</Text>
                </View>
              </View>

                <Text style={{fontSize:16, color:COLORS.white}}>Mark as read</Text>
    
      
      {/* <Pressable onPress={() => (navigation.navigate('NotificationScreen'))}>
          <View>
            <Ionicons name="ios-notifications-outline" size={24} color="white" />
            <View style={{position:'absolute', right:-5, top:-5, width:16, height:16, borderRadius:8, backgroundColor:'red', alignItems:'center', justifyContent:'center' }}><Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>3</Text></View>
          </View>
      </Pressable> */}
        
      
      </View>
      {/* <View style={{flexDirection:'column', justifyContent:'space-between', height:SIZES.height}}> */}
      <ScrollView showsVerticalScrollIndicator={false} style={{width:SIZES.width,}}>
     
      
      <View style={{width:'100%', marginTop:20}}>
      <View style={{  width:'100%', flexDirection:'row',  justifyContent:'space-between', flexWrap:'wrap', gap:20}}>

        {
          NotificationListData.map((item)=>(

          <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Pressable style={{  width:'80%', justifyContent:'space-between', flexDirection:'row', borderColor:'#00000022', paddingHorizontal:10}}>
              <View style={{flexDirection:'row', gap:10}}>
                <View style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center', backgroundColor:'#00000012'}}>
                <Ionicons name={item.icon} size={24} color={item.iconColor}/>
                </View>
                <View style={{flexDirection:'column', marginLeft:10, width: 200}}>
                    <Text style={{color:'#00000088',  fontSize:12, }}>{item.title}</Text>
                </View>
                
              </View>
             
              
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Documents')} style={{flexDirection:'row', alignItems:'center', marginRight:15, width: 50, height: 50, borderRadius:25,alignItems:'center', justifyContent:'center', backgroundColor:'#FAE9E9'}}>
              <MaterialCommunityIcons name="delete" size={24} color="red" />
              </Pressable>
          </View>

            // <Pressable key={item.id} style={{flexDirection:'row', alignItems:'center', width:'100%', backgroundColor:item.baackgroundColor, height:60}}>
            // <View style={{width:'30%', height:60, padding:10, alignItems:'center', justifyContent:'center'}}>
            //     <Text style={{fontSize:18, fontWeight:'bold', color:item.numberColor, letterSpacing:1}}>{item.number}</Text>
            // </View>
            // <View style={{width:'70%', height:60, padding:5, alignItems:'center', justifyContent:'center'}}>
            //   <Text style={{fontSize:12, lineHeight:15, color:'#00000088'}}>{item.title}</Text>
            // </View>
            // </Pressable>

          ))
        }

        </View>
      </View>

     
      {/* <Pressable onPress={() => navigation.goBack()} style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:300}}>
            <Ionicons name='ios-arrow-back-outline' size={24} color="#00000099"/>
            <Text  style={{color:COLORS.main, marginLeft:10, fontSize:18, }}>Back to Home</Text>
      </Pressable> */}
      
     
      
      </ScrollView>

    
      
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

// import { StyleSheet, Text, Pressable, View } from 'react-native'
// import React from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'


// const HomeScreen = () => {

//   const clearOnboarding = async() => {

//     try {

//       await AsyncStorage.removeItem('@viewedOnboarding')
      
//       return true;

//     } catch (error) {
      
//       console.log('Error @remeoveItem :', error)

//     }

//   }

//   return (

//     <View>

//       <Text>Home</Text>

//       <Pressable onPress={clearOnboarding}>
      
//         <Text>Clear Onboarding</Text>
        
//       </Pressable>

//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})