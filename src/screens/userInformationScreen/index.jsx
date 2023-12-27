import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Alert, Pressable, Image, ScrollView } from "react-native";
// import Constants from "expo-constants";

// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { WizardStore } from "../../store";
import { Button, MD3Colors, ProgressBar, TextInput } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import { FontAwesome, Ionicons} from '@expo/vector-icons'
import BackArrow from '../../components/backArrow'
import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import Loader from '../../components/loader'
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";

export default function UserInformationScreen({ navigation }) {

  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerLeft: () => null,
    //     });
    // }, [navigation]);

    // const {
    //     handleSubmit,
    //     control,
    //     formState: { errors },
    //   } = useForm({ defaultValues: WizardStore.useState((s) => s) });
    //   const isFocused = useIsFocused();
    
    //   useEffect(() => {
    //     isFocused &&
    //       WizardStore.update((s) => {
    //         s.progress = 0;
    //       });
    
    //   }, [isFocused]);
    
    //   const onSubmit = (internationalPassport) => {
    //     WizardStore.update((s) => {
    //       s.progress = 33;
    //       s.service = internationalPassport.value;
    //       // s.age = data.age;
    //     });
    //     navigation.navigate("");
    //   };

      const { user } = useContext(AuthContext)

      console.log(user.uid)
    
    
      // const getUser = async() => {
      //   const docRef = doc(db, "travellers", user.uid);
      //     const docSnap = await getDoc(docRef);
          
      //     if (docSnap.exists()) {
    
      //       setUserData(docSnap.data())
            
      //     } else {
    
      //       console.log("No such document!");
      //     }
      // }
    
      // useEffect(()=>{
      //   getUser()
      // }, [])
    
      // console.log(userData)
    

    const handleMyProfile = async() => {

      
    //   if(employmentLetter === null){

    //     return setErrorMessage('Please choose an option');
        
    //   }

    navigation.navigate("MaritalAndEmploymentScreen");


    //     try {

    //       setLoading(true)

    //        await updateDoc(doc(db, "travellers", user.uid), {
        
    //    internationalPassport : internationalPassport,
      
    //    timeStamp: serverTimestamp(),
        

    // }).then(() => {
    //   setLoading(false)
    //   // showToast()
    //   // if (condition) {
        
    //   // } else {
        
    //   // }
    //   navigation.navigate("MaritalAndEmploymentScreen");
        
    // })
  
          
    //     } catch (error) {
    //       console.log('error:',error.message)
    //     }

       
    //   }else{

    //     return setErrorMessage('Please select your visa Type');
        
    //   }
        
  }
  return (
    <View style={styles.container}>
      {/* <Loader visible ={loading}/> */}
    {/* <ProgressBar
      style={styles.progressBar}
      progress={WizardStore.getRawState().progress}
      color={MD3Colors.primary60}
    /> */}
    <View style={{ marginTop:10, flexDirection:'row', alignItems:'center', }}>
      <BackArrow onPress={() => navigation.goBack()}/>
      <Text style={{fontSize:18, color:'black', marginLeft: 50, fontWeight:'bold'}}>My Personal Info</Text>  

    </View>
    
    <ScrollView style={{ paddingVertical: 10 }} showsVerticalScrollIndicator={false}>
      
      <View>
      {/* <View style={{marginBottom:10, justifyContent:'center', width:'100%',alignItems:'center'}}>
        <Text style={{fontSize:18, marginBottom:10, color:'black'}}>Fill in all Informations</Text>  
      </View>  */}

     <View style={{marginBottom:50}}>

        <Text style={{fontSize:16, marginBottom:5, fontWeight:'400', color:'gray'}}>Please Fill in all Information as it appears in your International Passport</Text>
        <TextInput
          type='text'
          style={{ marginTop: 15 }}
          label='Firstname'
          mode='outlined'
        />

        <TextInput
          style={{ marginTop: 15 }}
          label='Surname'
          mode='outlined'
          // placeholderTextColor="yellow"
          value=""
          onChangeText={() => setSurname()}
        />

        <TextInput
          type='date'
          style={{ marginTop: 15 }}
          label='Date of Birth'
          mode='outlined'
        />

        <TextInput
          type='email'
          style={{ marginTop: 15 }}
          label='Email'
          mode='outlined'
        />
        <TextInput
          type='text'
          secureTextEntry= {true}
          style={{ marginTop: 15 }}
          label='Social Media Username(optional)'
          mode='outlined'
        />

        <TextInput
          type='text'
          style={{ marginTop: 15 }}
          label='Home Address'
          mode='outlined'
        />

        <TextInput
          type='text'
          style={{ marginTop: 15 }}
          label='Phone Number'
          mode='outlined'
        />

        {errorMessage &&
          <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorMessage}</Text>
        }
   
       
        
     </View> 



     </View>
    </ScrollView>
      <Pressable onPress = {handleMyProfile}  style = {{ backgroundColor : 'brown', width : '100%', marginBottom : 20, alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
        <Text style={{color : 'white', fontSize : 18, marginRight : 10}}>Next</Text>
        <View style = {{ alignItems : 'center', flexDirection : 'row', width : 17}}>
          <Ionicons name="chevron-forward" size={24} color="white" />
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
        
      </Pressable>
    </View>
  );
      
        
  
}

const styles = StyleSheet.create({


    button: {
      padding : 10,
      alignItems: 'center',
      justifyContent :'center',
      margin: 8,
      width:190,
      backgroundColor:COLORS.main,
      width : 250,
      borderRadius : 5
      

    },
    buttonText : {
      fontSize: 18,
      fontWeight : 'bold',
      color : 'white'
    },
    formEntry: {
      margin: 8,
    },
    container: {
      flex: 1,
      flexDirection:'column',
      justifyContent:'space-between',
      paddingHorizontal:20
    },
    progressBar: {
      marginBottom: 16,
      paddingHorizontal: 0,
    },

    selected:{
      // width:250,
      // height:150,
      // alignItems:'center',
      // justifyContent:'center',
      // gap:10,
      // margin:10,
      // borderWidth:1,
      // borderRadius:10,
      // borderColor:'lightgray',
      // backgroundColor: internationalPassport == item.value? COLORS.main : 'white'

    },

    itemImage:{
      width:200,
      height:130,

    },

   
    check: {
      position:'absolute',
      top:2,
      right:2,

    }


});
