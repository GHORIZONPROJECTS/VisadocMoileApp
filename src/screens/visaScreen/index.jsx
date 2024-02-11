import { StyleSheet, Text, View, StatusBar, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants/theme'
import { Ionicons, FontAwesome5, Feather, Entypo } from '@expo/vector-icons';
import { documentsCardData, visaApprovedData } from '../../data';
import { Divider } from 'react-native-paper';

export default function VisaScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>

      <StatusBar translucent={true} backgroundColor={COLORS.main}  barStyle="light-content" />

      <View style={{width:SIZES.width, height:60, backgroundColor:COLORS.main, alignItems:'center', justifyContent:'space-around', flexDirection:'row', paddingTop:0}}> 
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', width: 200}}>
        <Text style={{fontSize:16, color:COLORS.white}}>Visa Documents Approved</Text>
      </View>
      
      <Pressable onPress={() => (navigation.navigate('NotificationScreen'))}>
          <View>
            <Ionicons name="ios-notifications-outline" size={24} color="white" />
            <View style={{position:'absolute', right:-5, top:-5, width:16, height:16, borderRadius:8, backgroundColor:'red', alignItems:'center', justifyContent:'center' }}><Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>3</Text></View>
          </View>
      </Pressable>
        
      
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{width:SIZES.width,}}>
     

      <View style={{width:'100%', paddingHorizontal:20, marginTop:20}}>
        <View style={{  width:'100%', height:60, backgroundColor:COLORS.primary, borderRadius:5, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingHorizontal:20}}>
          <View style={{flexDirection:'row', alignItems:'center', }}>
            <Text style={{color:'white', fontWeight:400, marginRight:10, fontSize:14}}>Visa Interview Date</Text>
          <FontAwesome5 name="plane-departure" size={18} color="white" />
          </View>
        
          <Text style={{color:'white', fontWeight:400, fontSize:14}}>01 Jan, 2024</Text>
        </View>
      </View>

      <View style={{width:'100%', padding:20, marginTop:0}}>
        <View style={{  width:'100%', minHeight:60, backgroundColor:'#D9E7EE', borderRadius:5,  justifyContent:'', flexDirection:'row', paddingHorizontal:20, alignItems:'center'}}>
          <View style={{justifyContent:'center', width:40, height:40, backgroundColor:COLORS.main, justifyContent:'center', alignItems:'center',  borderRadius:8}}>
            <Ionicons name="ios-information-circle" size={24} color="white" />
          </View>
          <View style={{marginLeft:20, width:230, minHeight:60, alignItems:'center', paddingVertical:10}}>
          <Text style={{color:'#00000088',fontSize:14, fontWeight:500, }}>Download your documents for your visa Interviews</Text>
          </View>
         
          
        </View>
      </View>

      <View style={{width:'100%', paddingHorizontal:20, backgroundColor:'#00000011', marginVertical:20}}>
        <View style={{  width:'100%', height:60,alignItems:'center', justifyContent:'space-between', flexDirection:'row', borderColor:'#00000022', }}>
          <View style={{flexDirection:'row', alignItems:'center', }}>
            <Text style={{color:'#00000088', fontWeight:400, marginRight:10, fontSize:14, fontWeight:'bold'}}>S/N</Text>
            <Text style={{color:'#00000088', fontWeight:400, fontSize:14, fontWeight:'bold'}}>Documents</Text>
          
          </View>
          <Text style={{color:COLORS.main, fontWeight:400, fontSize:14}}>Status</Text>
          <Pressable onPress={() => navigation.navigate('Documents')} style={{flexDirection:'row', alignItems:'center', }}>
          <Text style={{color:COLORS.main, fontWeight:400, fontSize:14, marginRight:3,}}>Action</Text>
          </Pressable>
        </View>
      </View>

      <View style={{width:'100%'}}>
      <View style={{  width:'100%', flexDirection:'row',  justifyContent:'space-between', flexWrap:'wrap', gap:20}}>

        {
          visaApprovedData.map((item)=>(

            <View key={item.id} style={{width:'100%', paddingHorizontal:20,}}>
            <View style={{  width:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'row', borderColor:'#00000022', marginBottom:10}}>
              <View style={{flexDirection:'row', alignItems:'center', }}>
                <Text style={{color:'#00000088', fontWeight:400, marginRight:20, fontSize:14, fontWeight:'bold'}}>{item.number}</Text>
                <View style={{flexDirection:'column', gap:5}}>
                    <Text style={{color:'#00000088', fontWeight:400, fontSize:14, fontWeight:'bold'}}>{item.title}</Text>
                    <Text style={{color:'#00000088', fontWeight:400, fontSize:12,}}>{item.date}</Text>
                </View>
                
              
              </View>
              <View>

                <Text style={{color:'#00000088', fontWeight:400, fontSize:14, fontWeight:'bold'}}>Ready</Text>
               
                {/* <Image
                    source= {require('../../../assets/images/approvedvisa.png')}
                    alt=''
                    resizeMode='contain'
                    style = {{ width : 60, height : 60, }}

                /> */}
              </View>
              <Pressable onPress={() => navigation.navigate('Documents')} style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
              <Feather name="download" size={24} color={COLORS.main} />
              </Pressable>
            </View>
            <Divider/>
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