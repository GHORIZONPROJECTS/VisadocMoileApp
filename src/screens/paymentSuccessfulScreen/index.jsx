import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable, TouchableOpacity, Image } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import { InspectionStore } from "../../store";
import { Button, MD3Colors, ProgressBar, TextInput, Divider, RadioButton } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { SIZES } from "../../constants/theme";
import { FontAwesome, Ionicons, AntDesign} from '@expo/vector-icons'
// import LottieView from 'lottie-react-native';

import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import Loader from '../../components/loader'
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";
import { VisaContext } from "../../config/VisaContext";

export default function PaymentSuccessfulScreen({ navigation }) {


  const [userData, setUserData] = useState({})
    const [image, setImage] = useState(null)  
    const [uploading, setUploading] = useState(false)
    const [visaData, setVisaData] = useState({})
    const [loading, setLoading] = useState(false)
  
    const { user } = useContext(AuthContext)
  
    const {visaId} = useContext(VisaContext)
  


//   const isFocused = useIsFocused();

//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({ defaultValues: InspectionStore.useState((s) => s) });

//   useEffect(() => {
//     isFocused &&
//       InspectionStore.update((s) => {
//         s.progress = 100;
//       });

//     console.log("updated state...", InspectionStore.getRawState().progress);
//   }, [isFocused]);

const onSubmit= async() => {

  setUploading(true)

  await updateDoc(doc(db, "travellers", user.uid), {

      registered : true,
      timeStamp: serverTimestamp(),

    });

   
   setUploading(false)

  navigation.navigate("HomeScreen", )

  } 

 

  return (
    <ScrollView style={styles.container}>
      {/* <ProgressBar
        style={styles.progressBar}
        progress={InspectionStore.useState().progress / 100}
        color={MD3Colors.primary60}
      /> */}

         
      <View style={{  alignItems:'center', justifyContent:'center', marginVertical:50, marginHorizontal:20}}>

      {/* <LottieView
            // ref={animation}
            style={{
              width: 200,
              height: 200,
            }}
           
            source={require('../../../assets/json/success.json')}
            loop={false}
            speed={0.9}
            autoPlay
            /> */}
            <Text style={{fontSize:40, fontWeight:500, marginBottom:10, color:'#38D3F5', textAlign:'center', }}>
                Payment Successfull
            </Text> 

            <Text style={{fontSize:13, fontWeight:500, marginBottom:10, color:'gray', textAlign:'center', lineHeight:30}}>
            You will receive an email in your inbox to confirm your PAYMENT.
            Then track you visa application process on your VisaDoc App !
             
            </Text> 
            <Text style={{fontSize:13, fontWeight:400, marginBottom:10, color:'blue'}}>Congratulations!</Text>

            <Pressable onPress={onSubmit} style = {{ backgroundColor : 'brown', width : '100%', marginTop : 80, alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
         <Text style={{color : 'white', fontSize : 18, marginRight : 10}}>Track your application</Text>
         <View style = {{ alignItems : 'center', flexDirection : 'row', width : 17}}>
           <Ionicons name="chevron-forward" size={24} color="white" />
           <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
        
       </Pressable> 

            <View style={styles.formEntryImage}>
           
            
           

            
    
      
        </View>

        <View style={{alignItems:'center', justifyContent:'center', marginVertical:40}}>
           
        </View>
      </View> 



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  formEntry: {
    margin: 8,
  },
  container: {
    flex: 1,
  },
  progressBar: {
    marginBottom: 16,
  },
  formEntryImage:{
    flex:1,
    margin:8,
    marginTop:12,
    width:SIZES.width*0.8,
    height:50,
    
    borderColor:'gray',
    padding:5,
    // backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:10
  }
});
// function RHFTextInput({ control, errors, inputProps }) {
//   return (
//     <View style={styles.formEntry}>
//       <Controller
//         control={control}
//         rules={{
//           required: true,
//         }}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             mode="outlined"
//             label={inputProps.label}
//             placeholder={inputProps.placeholder}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//         name={inputProps.name}
//       />
//       {errors[`${inputProps.name}`] && (
//         <Text style={{ margin: 8, marginLeft: 16, color: "red" }}>
//           This is a required field.
//         </Text>
//       )}
//     </View>
//   );
// }