import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Alert, Pressable, Image, Button } from "react-native";
// import Constants from "expo-constants";

// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { WizardStore } from "../../store";
// import { Button, MD3Colors, ProgressBar, TextInput } from "react-native-paper";
// import { useIsFocused } from "@react-navigation/native";
// import { Chip } from 'react-native-paper';
import { COLORS, SIZES } from "../../constants/theme";
import { FontAwesome, Ionicons} from '@expo/vector-icons'
import BackArrow from '../../components/backArrow'
import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";


export default function VisaTypeScreen({ navigation }) {

   const [selectedItem, setSelectedItem] = useState(null);
   const [errorMessage, setErrorMessage] = useState('')
   const selectedData = [
    {value:'Single', title:'Single', image:require('../../../assets/images/singleTraveller.png')},
    {value:'Family', title: 'Family', image:require('../../../assets/images/familyTravellers.png')},
   ]

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
    
      // const onSubmit = (selectedItem) => {
        // WizardStore.update((s) => {
        //   s.progress = 33;
        //   s.service = selectedItem.value;
        //   // s.age = data.age;
        // });
        // navigation.navigate("DriverDetails");
      // };

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
    

    const handlePurpose = async() => {

        if(selectedItem !==null){

        try {

           await updateDoc(doc(db, "travellers", user.uid), {
        
        visaType : selectedItem,
        timeStamp: serverTimestamp(),
        

    }).then(() => {
      // setLoading(false)
      // showToast()
      // if (condition) {
        
      // } else {
        
      // }
      navigation.navigate("AvailableDocumentScreen");
        
    })
  
          
        } catch (error) {
          console.log('error:',error.message)
        }

       
      }else{

        return setErrorMessage('Please select your visa Type');
        
      }
        
  }
  return (
    <View style={styles.container}>
    {/* <ProgressBar
      style={styles.progressBar}
      progress={WizardStore.getRawState().progress}
      color={MD3Colors.primary60}
    /> */}
    <View style={{ paddingVertical: 20 }}>
      <BackArrow onPress={() => navigation.goBack()}/>
      <View style={{marginTop:30,marginBottom:10, justifyContent:'center', width:'100%',alignItems:'center'}}>
        <Text style={{fontSize:18, marginBottom:10, color:'black'}}>Please Choose a Visa Type.</Text>  
        {/* <Text style={{fontSize:13, fontWeight:400}}>Select a type of account you want to create</Text> */}
      </View> 

      <View style={{alignItems:'center', marginTop:30, gap:20}}>
       
        {selectedData.map(item => {
          return (
            <Pressable key= {item.value} onPress={() => setSelectedItem(item.value)} style={{
              width:250,
              height:150,
              // alignItems:'center',
              // justifyContent:'center',
              gap:10,
              margin:10,
              paddingLeft:20,
              paddingTop:10,
              borderWidth:1,
              borderRadius:10,
              backgroundColor:'white',
              borderColor: selectedItem == item.value? COLORS.main : 'lightgray',
              position:'relative'
        
            }}>
              {selectedItem === item.value ? <View style={styles.check}>
                <FontAwesome name="check-circle" size={20} color='darkblue'/>
              </View> : null}
              <Image source={item.image} alt="" style={styles.itemImage} resizeMode="contain"/>
              <Text style={{
                fontSize:13,
                color: selectedItem == item.value? COLORS.main : 'black',
                position:'absolute',
                top:15,
                left:15

              }}>{item.title}</Text>
            </Pressable>
          )
        })}
        
        {/* <Pressable
          onPress={onSubmit}
          style={styles.button} 
        >
          <Text style={styles.buttonText}>Next Step</Text>
        </Pressable>  */}
        <View>
          {
            errorMessage && <Text style={{color:'red', fontSize:14, marginTop:20}}>{errorMessage}</Text> 
          }
          
        </View>
        
     </View> 
     
      </View>
      <Pressable onPress = {handlePurpose}  style = {{ backgroundColor : 'brown', width : '100%', marginBottom : 20, alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
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
      // backgroundColor: selectedItem == item.value? COLORS.main : 'white'

    },

    itemImage:{
      width:200,
      height:130,

    },

   
    check: {
      position:'absolute',
      top:10,
      right:10,

    }


});
