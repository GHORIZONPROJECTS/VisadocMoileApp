import { StyleSheet, Text, View, StatusBar, Pressable, ScrollView, ImageBackground, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, COLORS } from '../../constants/theme'
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal'
import { documentsCardData, tourismCardData, visitingCardData } from '../../data';
import React, {useState, useContext, useEffect} from 'react'
import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import {serverTimestamp, doc, getDoc, setDoc, updateDoc, addDoc, collection, onSnapshot } from "firebase/firestore";
import { Divider } from 'react-native-paper';


export default function ApplicationScreen({navigation}) {

  const [userData, setUserData] = useState([]) 
  const [countryCodeFrom, setCountryCodeFrom] = useState('NG')
  const [countryCodeTo, setCountryCodeTo] = useState('CA')
  const [countryFrom, setCountryFrom] = useState('Nigeria')
  const [countryTo, setCountryTo] = useState('Canada')
  const [error, setError] = useState(false)


  const handleCountryFromSelect = country => {

    setCountryCodeFrom(country.cca2)
    setCountryFrom(country.name)
 
  }

  const handleNewApplication = {

  }

  const handleCountryToSelect = country => {

    setCountryCodeTo(country.cca2)
    setCountryTo(country.name)
 
  }




  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>

      <StatusBar translucent={true} backgroundColor={COLORS.main}  barStyle="light-content" />

      <View style={{width:SIZES.width, height:60, backgroundColor:COLORS.main, alignItems:'center', justifyContent:'space-around', flexDirection:'row', paddingTop:0}}> 
      <Pressable onPress={() =>navigation.navigate('ProfileScreen')}>
      <Ionicons name="ios-person-outline" size={24} color="white"  /> 
      </Pressable> 
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', width: 200}}>
        <Text style={{fontSize:16, color:COLORS.white}}>New Application</Text>
      </View>
      
      <Pressable onPress={() => (navigation.navigate('NotificationScreen'))}>
          <View>
            <Ionicons name="ios-notifications-outline" size={24} color="white" />
            <View style={{position:'absolute', right:-5, top:-5, width:16, height:16, borderRadius:8, backgroundColor:'red', alignItems:'center', justifyContent:'center' }}><Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>3</Text></View>
          </View>
      </Pressable>
        
      
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{width:SIZES.width,}}>

        <View style={{margin:20, }}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View>
                <Text style={{fontSize:20, color:'red'}}>Hurry Now!!! </Text>
                <View style={{width:150, marginTop:5}}>
                  <Text style={{fontSize:16, fontWeight:'500', lineHeight:20, color:COLORS.main}}>We Make your Visa Processing Seemless and Quick</Text>
                </View>
              </View>
              <View style={{}}>
                
                <Image
                    source= {require('../../../assets/images/passport.png')}
                    alt=''
                    resizeMode='contain'
                    style = {{ width : 120, height : 120, }}

                />
              </View>
          </View>
         
        
          
        </View>
        {/* <View style={{margin:20}}>
        <Divider/>
      </View> */}
      
      <View style={{width:'100%', paddingHorizontal:20}}>
        <View style={{  width:'100%', borderRadius:5, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingVertical:10}}>
          <View style={{flexDirection:'row', alignItems:'center', }}>
            <View style={{flexDirection:'column'}}></View>
            <Text style={{color:'#00000088', fontWeight:500, marginRight:10, fontSize:14}}>Where from?</Text>
          
          </View>
          {/* <FontAwesome5 name="plane-departure" size={18} color="white" /> */}
        
          <Text style={{color:'#00000088', fontWeight:500, fontSize:14}}>Where to?</Text>

      </View>


       
      </View>

      <View style={{width:'100%',}}>
        <View style={{  width:'100%',  backgroundColor:COLORS.primary, borderRadius:5, alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingVertical:10, paddingHorizontal:20}}>
          <View style={{flexDirection:'row', }}>
            <View style={{}}></View>
            <View style={{ height:"100%", alignItems:'center', flexDirection:'row' }}>
              <View style={{width:120}}>
              <CountryPicker
                  onSelect={handleCountryFromSelect}
                  withCountryNameButton={true}
                  // withFilter
                  // withAlphaFilter
                  withCallingCode = {true}
                  withEmoji = {false}
                  withCloseButton
                  country = {countryFrom}
                  countryCode={countryCodeFrom}
                  withFlagButton = {true}
                  // visible
                  containerButtonStyle={styles.countryPickerButton}
                  placeholder = 'Select Country'
                  closeButtonImageStyle={styles.countryPickerCloseItem}
                  filterPlaceholderTextColor = '#999'
                  filterInputStyle = {styles.countryPickerFilterInput}

                />
              </View>
                
                <View style={{marginTop:10, width:15}}>
                    <Ionicons name="caret-down-sharp" size={14} color="#00000066" />
                </View>
                
                
            </View>
          
          </View>
          <FontAwesome5 name="plane-departure" size={18} color="white" />
        
          <View style={{height:"100%", alignItems:'center', flexDirection:'row'}}>
          <View style={{width:120}}>
              <CountryPicker
                  onSelect={handleCountryToSelect}
                  withCountryNameButton={true}
                  // withFilter
                  // withAlphaFilter
                  withCallingCode = {true}
                  withEmoji = {false}
                  withCloseButton
                  country = {countryTo}
                  countryCode={countryCodeTo}
                  withFlagButton = {true}
                  // visible
                  containerButtonStyle={styles.countryPickerButton}
                  placeholder = 'Select Country'
                  closeButtonImageStyle={styles.countryPickerCloseItem}
                  filterPlaceholderTextColor = '#999'
                  filterInputStyle = {styles.countryPickerFilterInput}

              />
          </View>    
               <View style={{marginTop:10, width:15}}>
                    <Ionicons name="caret-down-sharp" size={14} color="#00000066" />
                </View>
          </View>

      </View>

       
      </View>
      {/* <View style={{margin:20}}>
        <Divider/>
      </View> */}
      {/* <Pressable style={{width:'100%', padding:20}}>
        <View style={{width:'100%', paddingVertical:20, backgroundColor:'brown', alignItems:'center', justifyContent:'center', }}>
          <Text style={{color:'white'}}>Start Visa Process</Text>
        </View>
      </Pressable> */}

      <View style={{width:'100%', padding:20}}>
        <Pressable onPress = {handleNewApplication}  style = {{ backgroundColor : 'brown', width : '100%',  alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
          <Text style={{color : 'white', fontSize : 18, marginRight : 10}}>Start Visa Process</Text>
          <View style = {{ alignItems : 'center', flexDirection : 'row', width : 17}}>
            <Ionicons name="chevron-forward" size={24} color="white" />
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
          
        </Pressable>
      </View>

      <View style={{width:'100%', padding:20, }}>
        <View style={{  width:'100%',alignItems:'center', justifyContent:'space-between', flexDirection:'row', borderColor:'#00000022', }}>
          <View style={{flexDirection:'row', alignItems:'center', }}>
            <Text style={{color:'#00000088', fontWeight:400, marginRight:10, fontSize:14, fontWeight:'bold'}}>Choice countries for Tourism</Text>
          
          </View>
        
        </View>
      </View>
      

      <View style={{width:'100%', paddingHorizontal:20}}>
      <View style={{  width:'100%',  flexDirection:'row',  justifyContent:'space-between', flexWrap:'wrap', gap:20}}>

        {
          tourismCardData.map((item)=>(

            <Pressable key={item.id} style={{flexDirection:'row', alignItems:'center', width:'46%', backgroundColor:item.baackgroundColor,  borderRadius:10, flexDirection:'column', borderWidth:1, borderColor:'#00000033'}}>
            <View style={{width:'100%', height:80, alignItems:'center', justifyContent:'center',  borderRadius:10}}>
                <Image
                    source= {item.image}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : '100%', height : 80,  borderTopRightRadius:10,  borderTopLeftRadius:10 }}

                />
                {/* <Text style={{fontSize:18, fontWeight:'bold', color:item.numberColor, letterSpacing:1}}>{item.number}</Text> */}
            </View>
            <View style={{width:'100%', padding:10, justifyContent:'center'}}>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
                <Image
                    source= {item.countryIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:12, lineHeight:15, color:'#000000', fontWeight:'bold'}}>{item.country}</Text>
              </View>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
              <Image
                    source= {item.capitalIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:10, color:'#00000077'}}>{item.capital}</Text>
              </View>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
                <Image
                    source= {item.continentIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:10, color:'#00000077'}}>{item.continent}</Text>
              </View>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
                <Image
                    source= {item.regionIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:10, color:'#00000077'}}>{item.region}</Text>
              </View>
              
            </View>
            </Pressable>

          ))
        }

       
        
         
        </View>
      </View>



      <View style={{width:'100%', padding:20, }}>
        <View style={{  width:'100%',alignItems:'center', justifyContent:'space-between', flexDirection:'row', borderColor:'#00000022', }}>
          <View style={{flexDirection:'row', alignItems:'center', }}>
            <Text style={{color:'#00000088', fontWeight:400, marginRight:10, fontSize:14, fontWeight:'bold'}}>Choice countries for Visiting</Text>
          
          </View>
        
        </View>
      </View>
      

      <View style={{width:'100%', paddingHorizontal:20}}>
      <View style={{  width:'100%',  flexDirection:'row',  justifyContent:'space-between', flexWrap:'wrap', gap:20}}>

        {
          visitingCardData.map((item)=>(

            <Pressable key={item.id} style={{flexDirection:'row', alignItems:'center', width:'46%', backgroundColor:item.baackgroundColor,  borderRadius:10, flexDirection:'column', borderWidth:1, borderColor:'#00000033'}}>
            <View style={{width:'100%', height:80, alignItems:'center', justifyContent:'center',  borderRadius:10}}>
                <Image
                    source= {item.image}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : '100%', height : 80,  borderTopRightRadius:10,  borderTopLeftRadius:10 }}

                />
                {/* <Text style={{fontSize:18, fontWeight:'bold', color:item.numberColor, letterSpacing:1}}>{item.number}</Text> */}
            </View>
            <View style={{width:'100%', padding:10, justifyContent:'center'}}>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
                <Image
                    source= {item.countryIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:12, lineHeight:15, color:'#000000', fontWeight:'bold'}}>{item.country}</Text>
              </View>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
              <Image
                    source= {item.capitalIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:10, color:'#00000077'}}>{item.capital}</Text>
              </View>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
                <Image
                    source= {item.continentIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:10, color:'#00000077'}}>{item.continent}</Text>
              </View>
              <View style={{flexDirection:'row', marginBottom:2, gap:5}}>
                <Image
                    source= {item.regionIcon}
                    alt=''
                    resizeMode='cover'
                    style = {{ width : 10, height : 10}}

                />
                <Text style={{fontSize:10, color:'#00000077'}}>{item.region}</Text>
              </View>
              
            </View>
            </Pressable>

          ))
        }

       
        
         
        </View>
      </View>

    

      <View style={{width:'100%',  marginBottom:50 }}>

     

      

      </View>

      
      

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  countryPickerButton : {
    borderColor : 'gray',
    // borderWidth : 2,
    // marginBottom : 16,
    justifyContent : 'center',
    alignItems : 'flex-start',
    marginVertical:0


  },

  countryPickerCloseItem : {
    width : 20,
    height : 20,
  },

  countryPickerFilterInput : {
    paddingVertical : 8,
    fontSize : 20
  }

  
})

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