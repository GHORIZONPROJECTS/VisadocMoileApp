import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth, db } from '../../firebase';
import { collection, onSnapshot, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { AuthContext } from '../../config/AuthContext'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import BackArrow from '../../components/backArrow';

const SafetyAndSecurityScreen = ({navigation}) => {

  // const navigation = useNavigation();

  const [userData, setUserData] = useState([])
  // const [loading, setLoading] = useState(false)
  
  const { user } = useContext(AuthContext)

  console.log(user.uid)


  const getUser = async() => {
    const docRef = doc(db, "travellers", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {

        setUserData(docSnap.data())
        
      } else {

        console.log("No such document!");
      }
  }

  useEffect(()=>{
    getUser()
  }, [])

  console.log(userData)



  const logOut = () => {

    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });

  }

  // const handleIntroduction = () => {
  //   navigation.navigate('destinationCountry')
  // }

  return (
    <View style = {{
        flex : 1,
        paddingHorizontal : 20,
        paddingTop : 20
    }}>
      
      <View style = {{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>

          <BackArrow onPress={() => navigation.goBack()}/>
          {/* <Ionicons name="person-circle" size={32} color="gray" /> */}
          <View style = {{flexDirection : 'row'}}>
            <Text style = {{fontSize : 18, marginHorizontal : 5, color : 'gray'}}>Welcome</Text>
            <Text style = {{fontSize : 18, color : 'darkblue' }}>{userData.firstname}</Text>
          </View>
         
      </View>
      
      <ScrollView style = {{ marginTop : 10,}} showsVerticalScrollIndicator = {false}>
       
      <View style = {{ marginVertical : 5,}}>
        <Text style = {{fontSize : 18, marginVertical : 5, color : 'gray'}}>Safety And Security</Text>

      </View>
      <View style = {{ marginVertical : 1,}}>
       

        <View style = {{ marginVertical : 10,}}>

           <View style={{margingBottom: 15, justifyContent:'center', alignItems:'center' }}>
             <Text style = {{color : '#000000', lineHeight : 20, fontWeight : 'bold'}}>Personal Data Safety. </Text>
          </View> 
          <View style={{flexDirection:'row', marginVertical:20, alignItems : 'center'}}>
           
          <Image
            source= {require('../../../assets/protection.png')}
            alt=''
            resizeMode='contain'
            style = {{ width : 80, height : 80, margin:10}}

          />
          <View style={{width: 220}}>
          <Text style = {{color : '#3B3B3B', lineHeight : 20}}>Our users personal information and biodata is secured and safe with an international best practice, all information supplied to the system is solely for the purpose and it remains confidential. </Text>
          </View>
            
          </View>
          

       
        
        </View>

        <View style = {{ marginVertical : 10,}}>

<View style={{margingBottom: 15, justifyContent:'center', alignItems:'center' }}>
  <Text style = {{color : '#000000', lineHeight : 20, fontWeight : 'bold'}}>Payment information security. </Text>
</View> 
<View style={{flexDirection:'row', marginVertical:20, alignItems : 'center'}}>

<Image
 source= {require('../../../assets/secure-payment.png')}
 alt=''
 resizeMode='contain'
 style = {{ width : 80, height : 80, margin:10}}

/>
<View style={{width: 220}}>
<Text style = {{color : '#3B3B3B', lineHeight : 20}}>All payment information and payment handled in this system is secured by paystack and flutterwave. This system do not store users payment information. </Text>
</View>
 
</View>




</View>

        {/* <View style = {{ marginVertical : 10,}}>

<View>
  <Text style = {{color : '#000000', lineHeight : 20, fontWeight : 'bold'}}>Personal Payment Security. </Text>
</View> 
<View style={{flexDirection:'row', }}>

<Image
 source= {require('../../../assets/credit-card.png')}
 alt=''
 resizeMode='contain'
 style = {{ width : 60, height : 60, padding:10}}

/>
 <Text style = {{color : '#3B3B3B', lineHeight : 20}}>Scanned International Passport Data Page. </Text>
</View>




</View> */}

     

       

       
        
      
      </View>
      
    
      </ScrollView>
      
      {/* <Text>TermsAndConditionsScreen</Text> */}

      <Pressable onPress = {() => {navigation.navigate('DestinationCountryScreen')}}  style = {{ backgroundColor : 'brown', width : '100%', marginVertical : 20, alignItems : 'center', justifyContent : 'center', bottom : 0, paddingVertical : 20, flexDirection : 'row',}}>
        <Text style={{color : 'white', fontSize : 18, marginRight : 10}}>Visa Application</Text>
        <View style = {{ alignItems : 'center', flexDirection : 'row', width : 17}}>
          <Ionicons name="chevron-forward" size={24} color="white" />
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
        
      </Pressable>
      
      {/* <Pressable onPress = {() => logOut()}  style = {{padding :10, backgroundColor : 'brown', width : 200, marginVertical : 20}}>
        <Text style={{color : 'white'}}>Logout</Text>
      </Pressable> */}
    </View>
  )
}

export default SafetyAndSecurityScreen

const styles = StyleSheet.create({
     appconstainer : { 
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
     }
})

