
import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Alert, Pressable, Image, ScrollView } from "react-native";
// import Constants from "expo-constants";

// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { WizardStore } from "../../store";
import { Button, Divider, MD3Colors, ProgressBar, TextInput } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import { FontAwesome, Ionicons, Feather} from '@expo/vector-icons'
import BackArrow from '../../components/backArrow'
import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import Loader from '../../components/loader'
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";
import { EmploymentStatusData, MaritalStatusData, birthCertificateData, fatherData, motherData } from "../../data";
import { TouchableOpacity } from "react-native-gesture-handler";
import { VisaContext } from "../../config/VisaContext";

export default function DocumentsAvailableScreen({ navigation }) {
  
  const [errorMessage, setErrorMessage] = useState('')
  const [visaData, setVisaData] = useState("")
//   const [fatherAlive, setFatherAlive] = useState('fatherAlive')

      const { user } = useContext(AuthContext)

      const {visaId} = useContext(VisaContext)

      console.log(user.uid)

    
      const getVisaData = async() => {
        const docRef = doc(db, "visa", visaId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
    
            setVisaData(docSnap.data())
            
          } else {
    
            console.log("No such document!");
          }
      }
    
      useEffect(()=>{
        getVisaData()
      }, [])
    
      console.log(visaData.birthCertificate)

      // const birthCertificate = visaData.birthCertificate

      // console.log(birthCertificate)


    

    const handleDocumentsUpload = async() => {


     

      
    //   if(employmentLetter === null){

    //     return setErrorMessage('Please choose an option');
        
    //   }
    navigation.navigate("ServiceChargeScreen");

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
    //   navigation.navigate("UserInformationScreen");
        
    // })
    // navigation.navigate("UserInformationScreen");
          
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
      <Text style={{fontSize:18, color:'black', marginLeft: 30, fontWeight:'bold'}}>Upload Documents</Text>  

    </View>
    
    <ScrollView style={{ paddingVertical: 10 }} showsVerticalScrollIndicator={false}>
      
     <View style={{marginBottom:50}}>

      <View style={{marginBottom:20}}>

                <Text style={{fontSize:16, marginBottom:20}}>Please Upload all your available documents</Text>
                
                <View style={{flexDirection:'row'}}>

                  {
                      visaData.internationalPassport === 'available' 
                      
                      ?

                      <View style={styles.formEntryImage}>
                      <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                      {/* <FontAwesome name="check-circle" size={20} color={visaData.birthCertificate ? 'green' : 'gray'}/> */}
                      <Text style={{marginHorizontal:5, fontSize:12}}>International Passport</Text>
                      {/* {visaData.birthCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                      </View>
                      
                      <TouchableOpacity 
                        onPress={() => navigation.navigate("InternationalPassportImageScreen", {internationalPassport : visaData.internationalPassport})}
                        style={{ 
                          alignItems:'center', 
                          flexDirection:'row', 
                          padding:10, 
                          backgroundColor:COLORS.main, 
                          borderRadius:5, }}>
                      <Feather name="upload" size={20} color="white" />
                      <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                      </TouchableOpacity>

                      </View>

                      :

                      ""
                  }

                    

                </View> 
                
                <View style={{flexDirection:'row'}}>

            {
                visaData.birthCertificate === 'available' 
                
                ?

                <View style={styles.formEntryImage}>
                <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                {/* <FontAwesome name="check-circle" size={20} color={visaData.birthCertificate ? 'green' : 'gray'}/> */}
                <Text style={{marginHorizontal:5, fontSize:12}}>Birth Certificate</Text>
                {/* {visaData.birthCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                </View>
                
                <TouchableOpacity 
                onPress={() => navigation.navigate("BirthCertificateImageScreen", {birthCertificate : visaData.birthCertificate})}
                style={{ 
                    alignItems:'center', 
                    flexDirection:'row', 
                    padding:10, 
                    backgroundColor:COLORS.main, 
                    borderRadius:5, }}>
                <Feather name="upload" size={20} color="white" />
                <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                </TouchableOpacity>
        
                </View>

                :

                ""
            }

              

                </View> 

                <View style={{flexDirection:'row', }}>

              {
                  visaData.leaveApprovalLetter === 'available' 
                  
                  ?

                  <View style={styles.formEntryImage}>
                  <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                  {/* <FontAwesome name="check-circle" size={20} color={visaData.leaveApprovalLetter ? 'green' : 'gray'}/> */}
                  <Text style={{marginHorizontal:5, fontSize:12}}>Leave Approval Letter</Text>
                  {/* {visaData.birthCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                  </View>
                  
                  <TouchableOpacity 
                  onPress={() => navigation.navigate("LeaveApprovalLetterImageScreen")}
                  style={{ 
                      alignItems:'center', 
                      flexDirection:'row', 
                      padding:10, 
                      backgroundColor:COLORS.main, 
                      borderRadius:5, }}>
                  <Feather name="upload" size={20} color="white" />
                  <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                  </TouchableOpacity>

                  </View>

                  :

                  ""
              }

  

                </View> 

                <View style={{flexDirection:'row',}}>

                  {
                      visaData.marriageCertificate === 'available' 
                      
                      ?

                      <View style={styles.formEntryImage}>
                      <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                      {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                      <Text style={{marginHorizontal:5, fontSize:12}}>Marriage Certificate</Text>
                      {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                      </View>
                      
                      <TouchableOpacity 
                      onPress={() => navigation.navigate("MarriageCertificateImageScreen")}
                      style={{ 
                          alignItems:'center', 
                          flexDirection:'row', 
                          padding:10, 
                          backgroundColor:COLORS.main, 
                          borderRadius:5, }}>
                      <Feather name="upload" size={20} color="white" />
                      <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                      </TouchableOpacity>

                      </View>

                      :

                      ""
                  }



                </View> 

                <View style={{flexDirection:'row',}}>

                  {
                      visaData.passportPhotograph === 'available' 
                      
                      ?

                      <View style={styles.formEntryImage}>
                      <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                      {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                      <Text style={{marginHorizontal:5, fontSize:12}}>Passport Photograph</Text>
                      {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                      </View>
                      
                      <TouchableOpacity 
                      onPress={() => navigation.navigate("PassportPhotographImageScreen")}
                      style={{ 
                          alignItems:'center', 
                          flexDirection:'row', 
                          padding:10, 
                          backgroundColor:COLORS.main, 
                          borderRadius:5, }}>
                      <Feather name="upload" size={20} color="white" />
                      <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                      </TouchableOpacity>

                      </View>

                      :

                      ""
                  }

                  
                </View> 


                <View style={{flexDirection:'row',}}>

                {
                    visaData.schoolCredentials === 'available' 
                    
                    ?

                    <View style={styles.formEntryImage}>
                    <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                    {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                    <Text style={{marginHorizontal:5, fontSize:12}}>School Credentials</Text>
                    {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                    </View>
                    
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("SchoolCredentialsImageScreen")}
                    style={{ 
                        alignItems:'center', 
                        flexDirection:'row', 
                        padding:10, 
                        backgroundColor:COLORS.main, 
                        borderRadius:5, }}>
                    <Feather name="upload" size={20} color="white" />
                    <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                    </TouchableOpacity>

                    </View>

                    :

                    ""
                }


                </View> 

                <View style={{flexDirection:'row',}}>

                {
                    visaData.selfIntroduction === 'available' 
                    
                    ?

                    <View style={styles.formEntryImage}>
                    <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                    {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                    <Text style={{marginHorizontal:5, fontSize:12}}>Self Introduction</Text>
                    {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                    </View>
                    
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("SelfIntroductionImageScreen")}
                    style={{ 
                        alignItems:'center', 
                        flexDirection:'row', 
                        padding:10, 
                        backgroundColor:COLORS.main, 
                        borderRadius:5, }}>
                    <Feather name="upload" size={20} color="white" />
                    <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                    </TouchableOpacity>

                    </View>

                    :

                    ""
                }


                </View> 

                <View style={{flexDirection:'row',}}>

                {
                    visaData.statementOfAccount === 'available' 
                    
                    ?

                    <View style={styles.formEntryImage}>
                    <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                    {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                    <Text style={{marginHorizontal:5, fontSize:12}}>Statement of Account</Text>
                    {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                    </View>
                    
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("StatementOfAccountImageScreen")}
                    style={{ 
                        alignItems:'center', 
                        flexDirection:'row', 
                        padding:10, 
                        backgroundColor:COLORS.main, 
                        borderRadius:5, }}>
                    <Feather name="upload" size={20} color="white" />
                    <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                    </TouchableOpacity>

                    </View>

                    :

                    ""
                }


                </View> 

                <View style={{flexDirection:'row',}}>

                {
                    visaData.companyIntroduction === 'available' 
                    
                    ?

                    <View style={styles.formEntryImage}>
                    <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                    {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                    <Text style={{marginHorizontal:5, fontSize:12}}>Company Introduction</Text>
                    {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                    </View>
                    
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("CompanyIntroductionImageScreen")}
                    style={{ 
                        alignItems:'center', 
                        flexDirection:'row', 
                        padding:10, 
                        backgroundColor:COLORS.main, 
                        borderRadius:5, }}>
                    <Feather name="upload" size={20} color="white" />
                    <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                    </TouchableOpacity>

                    </View>

                    :

                    ""
                }


                </View> 

                <View style={{flexDirection:'row',}}>

                {
                    visaData.employmentLetter === 'available' 
                    
                    ?

                    <View style={styles.formEntryImage}>
                    <View style={{ flexDirection:'row', alignItems:'space-between'}}>
                    {/* <FontAwesome name="check-circle" size={20} color={visaData.marriageCertificate ? 'green' : 'gray'}/> */}
                    <Text style={{marginHorizontal:5, fontSize:12}}>Employment Letter</Text>
                    {/* {visaData.marriageCertificate && <Text style={{marginHorizontal:5, color:'green'}}>saved</Text>} */}
                    </View>
                    
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("EmploymentLetterImageScreen")}
                    style={{ 
                        alignItems:'center', 
                        flexDirection:'row', 
                        padding:10, 
                        backgroundColor:COLORS.main, 
                        borderRadius:5, }}>
                    <Feather name="upload" size={20} color="white" />
                    <Text style={{marginLeft:5, color:'white'}}>Upload</Text>
                    </TouchableOpacity>

                    </View>

                    :

                    ""
                }


                </View> 


                

                {errorMessage &&
                <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorMessage}</Text>
                }

      </View> 

      <View style={{marginBottom:20}}>

      <Text style={{fontSize:16, marginBottom:20, fontWeight:'bold'}}>Visadoc will Provide the following unavailable Documents</Text>

      <View style={{flexDirection:'row'}}>

        {
            visaData.internationalPassport === 'unavailable' 
            
            ?
            
            <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>International Passport</Text>

            :

            ""
        }

          

      </View> 

      <View style={{flexDirection:'row'}}>

      {
      visaData.birthCertificate === 'unavailable' 

      ?

      <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Birth Certicate</Text>

      :

      ""
      }



      </View> 

      <View style={{flexDirection:'row', }}>

      {
        visaData.leaveApprovalLetter === 'unavailable' 
        
        ?

        <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5 }}>Leave Approval Letter</Text>

        :

        ""
      }



      </View> 

      <View style={{flexDirection:'row',}}>

        {
            visaData.marriageCertificate === 'unavailable' 
            
            ?

            <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Marriage Certficate</Text>

            :

            ""
        }



      </View> 

      <View style={{flexDirection:'row',}}>

        {
            visaData.passportPhotograph === 'unavailable' 
            
            ?

            <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Passport Photograph</Text>

            :

            ""
        }

        
      </View> 


      <View style={{flexDirection:'row',}}>

      {
          visaData.schoolCredentials === 'unavailable' 
          
          ?

          <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>School Credentials</Text>

          :

          ""
      }


      </View> 

      <View style={{flexDirection:'row',}}>

      {
          visaData.selfIntroduction === 'unavailable' 
          
          ?

          <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Self Introduction</Text>

          :

          ""
      }


      </View> 

      <View style={{flexDirection:'row',}}>

      {
          visaData.statementOfAccount === 'unavailable' 
          
          ?

          <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Statement of Account</Text>

          :

          ""
      }


      </View> 

      <View style={{flexDirection:'row',}}>

      {
          visaData.companyIntroduction === 'unavailable' 
          
          ?

          <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Company Introduction</Text>

          :

          ""
      }


      </View> 

      <View style={{flexDirection:'row',}}>

      {
          visaData.employmentLetter === 'unavailable' 
          
          ?

          <Text style={{marginHorizontal:5, fontSize:14, marginHorizontal:5}}>Employment Letter</Text>

          :

          ""
      }


      </View> 




      {errorMessage &&
      <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorMessage}</Text>
      }

      </View> 

     </View> 

     

    </ScrollView>
      <Pressable onPress = {handleDocumentsUpload}  style = {{ backgroundColor : 'brown', width : '100%', marginBottom : 20, alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
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
      // margin: 8,
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
      // margin: ,
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

    },
    // buttonSnap: {
    //     margin: 8,
    //   },
    //   formEntry: {
    //     margin: 8,
    //   },
    //   container: {
    //     flex: 1,
    //   },
    //   progressBar: {
    //     marginBottom: 16,
    // },
    formEntryImage:{
      flex:1,
      margin:8,
      marginTop:12,
      width:'95%',
      height:50,
      borderWidth:1,
      borderRadius:5,
      borderColor:'gray',
      padding:5,
      // backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      paddingHorizontal:10
    }


});


