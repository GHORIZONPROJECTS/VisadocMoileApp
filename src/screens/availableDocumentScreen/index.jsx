import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Alert, Pressable, Image, Button, ScrollView } from "react-native";
// import Constants from "expo-constants";

// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { WizardStore } from "../../store";
// import { Button, MD3Colors, ProgressBar, TextInput } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import { FontAwesome, Ionicons} from '@expo/vector-icons'
import BackArrow from '../../components/backArrow'
import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import Loader from '../../components/loader'
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";
import { InternationalPassportData, marriageCertificateData, birthCertificateData, passportPhotographData, statementOfAccountData, schoolCredentialsData, companyIntroductionData, selfIntroductionData, leaveApprovalLetterData, employmentLetterData } from "../../data";
import { VisaContext } from "../../config/VisaContext";


export default function AvailableDocumentScreen({ navigation }) {

  const [userData, setUserData] = useState({});
  const [visaData, setVisaData] = useState({});
  const [internationalPassport, setInternationalPassport] = useState(null);
  const [passportPhotograph, setPassportPhotograph] = useState(null);
  const [statementOfAccount, setStatementOfAccount] = useState(null);
  const [birthCertificate, setBirthCertificate] = useState(null);
  const [marriageCertificate, setMarriageCertificate] = useState(null);
  const [schoolCredentials, setSchoolCredentials] = useState(null);
  const [companyIntroduction, setCompanyIntroduction] = useState(null);
  const [selfIntroduction, setSelfIntroduction] = useState(null);
  const [leaveApprovalLetter, setLeaveApprovalLetter] = useState(null);
  const [employmentLetter, setEmploymentLetter] = useState(null);
  const [errorInternational, setErrorInternational] = useState('')
  const [errorPhotograph, setErrorPhotograph] = useState('')
  const [errorStatement, setErrorStatement] = useState('')
  const [errorBirth, setErrorBirth] = useState('')
  const [errorMarriage, setErrorMarriage] = useState('')
  const [errorSchool, setErrorSchool] = useState('')
  const [errorCompany, setErrorCompany] = useState('')
  const [errorSelf, setErrorSelf] = useState('')
  const [errorLeave, setErrorLeave] = useState('')
  const [errorEmployment, setErrorEmployment] = useState('')
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

      const {visaId} = useContext(VisaContext)

      console.log(user.uid)


      // Fetch user Information
    
    
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

      //fetch visa information


      const getVisa = async() => {
        const docRef = doc(db, "visa", visaId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
    
            setVisaData(docSnap.data())
            
          } else {
    
            console.log("No such document!");
          }
      }
    
      useEffect(()=>{

        getVisa()

      }, [])

      console.log(visaData.travelPurpose)
      
    

    const handleDocuments = async() => {

      if(visaData.travelPurpose === "Tourism"){

        if(internationalPassport === null){

          return setErrorInternational('Please choose an option');
  
        }
  
        if(passportPhotograph === null){
  
          return setErrorPhotograph('Please choose an option');
          
        }
  
        if(statementOfAccount === null){
  
          return setErrorStatement('Please choose an option');
          
        }
  
        if(birthCertificate === null){
  
          return setErrorBirth('Please choose an option');
          
        }
  
        if(marriageCertificate === null){
  
          return setErrorMarriage('Please choose an option');
          
        }

        if(companyIntroduction === null){

          return setErrorCompany('Please choose an option');
          
        }

        if(selfIntroduction === null){

          return setErrorSelf('Please choose an option');
          
        }

        if(leaveApprovalLetter === null){

          return setErrorLeave('Please choose an option');
          
        }

        if(employmentLetter === null){

          return setErrorEmployment('Please choose an option');
          
        }
  

      }


      if(visaData.travelPurpose === "Study"){
        
          if(internationalPassport === null){

            return setErrorInternational('Please choose an option');
    
          }
    
          if(passportPhotograph === null){
    
            return setErrorPhotograph('Please choose an option');
            
          }
    
          if(statementOfAccount === null){
    
            return setErrorStatement('Please choose an option');
            
          }
    
          if(birthCertificate === null){
    
            return setErrorBirth('Please choose an option');
            
          }
    
          if(marriageCertificate === null){
    
            return setErrorMarriage('Please choose an option');
            
          }

          
          if(schoolCredentials === null){
    
            return setErrorSchool('Please choose an option');
            
          }
    
  
     
      }

    


    //     if(internationalPassport !== null){


          

          if(visaData.travelPurpose === "Tourism"){

            setLoading(true)

            try {

              await updateDoc(doc(db, "visa", visaId), {
        
                internationalPassport : internationalPassport,
                passportPhotograph : passportPhotograph,
                statementOfAccount : statementOfAccount,
                birthCertificate : birthCertificate, 
                marriageCertificate : marriageCertificate,
                companyIntroduction : companyIntroduction , 
                selfIntroduction : selfIntroduction,
                leaveApprovalLetter : leaveApprovalLetter,
                employmentLetter : employmentLetter,
                timeStamp: serverTimestamp(),
            
    
                }).then(() => {

                  setLoading(false)
                  
                  navigation.navigate("UserInformationScreen");
                    
                })
              
            } catch (error) {

              console.log('error:',error.message)
              
            }

          

          }

          if(visaData.travelPurpose === "Study"){

            setLoading(true)

            try {
              
              await updateDoc(doc(db, "visa", visaId), {
        
                internationalPassport : internationalPassport,
                passportPhotograph : passportPhotograph,
                statementOfAccount : statementOfAccount,
                birthCertificate : birthCertificate, 
                marriageCertificate : marriageCertificate,
                schoolCredentials : schoolCredentials,
                timeStamp: serverTimestamp(),
            
    
                }).then(() => {

                  setLoading(false)
                  
                  navigation.navigate("UserInformationScreen");
                    
                })

            } catch (error) {

              console.log('error:',error.message)
              
            }

     

          }

          
          
          
       

       
    //   }else{

    //     return setErrorMessage('Please select your visa Type');
        
    //   }
        
  }
  return (
    <View style={styles.container}>
      <Loader visible ={loading}/>
    {/* <ProgressBar
      style={styles.progressBar}
      progress={WizardStore.getRawState().progress}
      color={MD3Colors.primary60}
    /> */}
    <View style={{ marginTop:10, flexDirection:'row', alignItems:'center', }}>
      <BackArrow onPress={() => navigation.goBack()}/>
      <Text style={{fontSize:18, color:'black', marginLeft: 50, fontWeight:'bold'}}>My Documents</Text>  

    </View>
    
    <ScrollView style={{ paddingVertical: 10 }} showsVerticalScrollIndicator={false}>
      
      <View>
      <View style={{marginBottom:10, justifyContent:'center', width:'100%',alignItems:'center'}}>
        <Text style={{fontSize:18, marginBottom:10, color:'black'}}>Choose Available Documents</Text>  
        {/* <Text style={{fontSize:13, fontWeight:400}}>Select a type of account you want to create</Text> */}
      </View> 

      <View style={{marginBottom:20}}>

        <Text style={{fontSize:16, marginBottom:5}}>1. Scanned International Passport Data Page</Text>
        
        {InternationalPassportData.map(item => {
          return (
            <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                <Pressable key= {item.value} onPress={() => setInternationalPassport(item.value)} style={{
                  width:30,
                  height:30,
                  flexDirection:'column',

                  position:'relative',

                  alignItems:'center',
                  justifyContent:'center',
                  // gap:10,
                  marginRight:10,
                  // paddingLeft:20,
                  // paddingTop:10,
                  borderWidth:1,
                  // borderRadius:10,
                  backgroundColor:'white',
                  borderColor: internationalPassport == item.value? COLORS.main : 'lightgray',
                  position:'relative'
            
                }}>
                  {internationalPassport === item.value ? <View style={styles.check}>
                    <FontAwesome name="check" size={20} color='darkblue'/>
                  </View> : null}
                
                </Pressable>

                <Text style={{
                    fontSize:13,
                    color: internationalPassport == item.value? COLORS.main : 'black',
                  }}>
                    {item.title}
                </Text>

                </View>

            </View>
            
          )
        })}

        {errorInternational &&
          <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorInternational}</Text>
        }
    
     </View> 

     <View style={{marginBottom:20}}>

      <Text style={{fontSize:16, marginBottom:5}}>2. White/Colored Passport Photograph</Text>

      {passportPhotographData.map(item => {
        return (
          <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>

              <Pressable key= {item.value} onPress={() => setPassportPhotograph(item.value)} style={{
                width:30,
                height:30,
                flexDirection:'column',

                position:'relative',

                alignItems:'center',
                justifyContent:'center',
                // gap:10,
                marginRight:10,
                // paddingLeft:20,
                // paddingTop:10,
                borderWidth:1,
                // borderRadius:10,
                backgroundColor:'white',
                borderColor: passportPhotograph == item.value? COLORS.main : 'lightgray',
                position:'relative'
          
              }}>
                {passportPhotograph === item.value ? <View style={styles.check}>
                  <FontAwesome name="check" size={20} color='darkblue'/>
                </View> : null}
              
              </Pressable>

              <Text style={{
                  fontSize:13,
                  color: passportPhotograph == item.value? COLORS.main : 'black',
                }}>
                  {item.title}
              </Text>

              </View>

          </View>
          
        )
      })}

      {errorPhotograph &&
          <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorPhotograph}</Text>
      }

     </View>

     <View style={{marginBottom:20}}>

      <Text style={{fontSize:16, marginBottom:5}}>3. Statement of Account/Payslip</Text>

      {statementOfAccountData.map(item => {
        return (
          <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>

              <Pressable key= {item.value} onPress={() => setStatementOfAccount(item.value)} style={{
                width:30,
                height:30,
                flexDirection:'column',

                position:'relative',

                alignItems:'center',
                justifyContent:'center',
                // gap:10,
                marginRight:10,
                // paddingLeft:20,
                // paddingTop:10,
                borderWidth:1,
                // borderRadius:10,
                backgroundColor:'white',
                borderColor: statementOfAccount == item.value? COLORS.main : 'lightgray',
                position:'relative'
          
              }}>
                {statementOfAccount === item.value ? <View style={styles.check}>
                  <FontAwesome name="check" size={20} color='darkblue'/>
                </View> : null}
              
              </Pressable>

              <Text style={{
                  fontSize:13,
                  color: statementOfAccount == item.value? COLORS.main : 'black',
                }}>
                  {item.title}
              </Text>

              </View>

          </View>
          
        )
      })}

      {/* <Pressable
        onPress={onSubmit}
        style={styles.button} 
      >
        <Text style={styles.buttonText}>Next Step</Text>
      </Pressable>  */}
      {errorStatement &&
          <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorStatement}</Text>
      }

     </View>

     <View style={{marginBottom:20}}>

      <Text style={{fontSize:16, marginBottom:5}}>4. Birth Certificate / Affidavit</Text>

      {birthCertificateData.map(item => {
        return (
          <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>

              <Pressable key= {item.value} onPress={() => setBirthCertificate(item.value)} style={{
                width:30,
                height:30,
                flexDirection:'column',

                position:'relative',

                alignItems:'center',
                justifyContent:'center',
                // gap:10,
                marginRight:10,
                // paddingLeft:20,
                // paddingTop:10,
                borderWidth:1,
                // borderRadius:10,
                backgroundColor:'white',
                borderColor: birthCertificate == item.value? COLORS.main : 'lightgray',
                position:'relative'
          
              }}>
                {birthCertificate === item.value ? <View style={styles.check}>
                  <FontAwesome name="check" size={20} color='darkblue'/>
                </View> : null}
              
              </Pressable>

              <Text style={{
                  fontSize:13,
                  color: birthCertificate == item.value? COLORS.main : 'black',
                }}>
                  {item.title}
              </Text>

              </View>

          </View>
          
        )
      })}

        {errorBirth &&
          <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorBirth}</Text>
        }

     </View>

     <View style={{marginBottom:20}}>

        <Text style={{fontSize:16, marginBottom:5}}>5. Marriage Certificate</Text>

        {marriageCertificateData.map(item => {
          return (
            <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                <Pressable key= {item.value} onPress={() => setMarriageCertificate(item.value)} style={{
                  width:30,
                  height:30,
                  flexDirection:'column',

                  position:'relative',

                  alignItems:'center',
                  justifyContent:'center',
                  // gap:10,
                  marginRight:10,
                  // paddingLeft:20,
                  // paddingTop:10,
                  borderWidth:1,
                  // borderRadius:10,
                  backgroundColor:'white',
                  borderColor: marriageCertificate == item.value? COLORS.main : 'lightgray',
                  position:'relative'
            
                }}>
                  {marriageCertificate === item.value ? <View style={styles.check}>
                    <FontAwesome name="check" size={20} color='darkblue'/>
                  </View> : null}
                
                </Pressable>

                <Text style={{
                    fontSize:13,
                    color: marriageCertificate == item.value? COLORS.main : 'black',
                  }}>
                    {item.title}
                </Text>

                </View>

            </View>
            
          )
        })}

        {errorMarriage &&

          <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorMarriage}</Text>
        }

     </View>

     {visaData.travelPurpose === "Study"  &&

        <View style={{marginBottom:20}}>

        <Text style={{fontSize:16, marginBottom:5}}>6. School Credentials</Text>

        {schoolCredentialsData.map(item => {
          return (
            <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                <Pressable key= {item.value} onPress={() => setSchoolCredentials(item.value)} style={{
                  width:30,
                  height:30,
                  flexDirection:'column',

                  position:'relative',

                  alignItems:'center',
                  justifyContent:'center',
                  // gap:10,
                  marginRight:10,
                  // paddingLeft:20,
                  // paddingTop:10,
                  borderWidth:1,
                  // borderRadius:10,
                  backgroundColor:'white',
                  borderColor: schoolCredentials == item.value? COLORS.main : 'lightgray',
                  position:'relative'
            
                }}>
                  {schoolCredentials === item.value ? <View style={styles.check}>
                    <FontAwesome name="check" size={20} color='darkblue'/>
                  </View> : null}
                
                </Pressable>

                <Text style={{
                    fontSize:13,
                    color: schoolCredentials == item.value? COLORS.main : 'black',
                  }}>
                    {item.title}
                </Text>

                </View>

            </View>
            
          )
        })}

        {errorSchool &&
            
            <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorSchool}</Text>
        }

        </View>
     
     }

     

     {visaData.travelPurpose === "Tourism"  && 


        <View style={{marginBottom:20}}>

        <Text style={{fontSize:16, marginBottom:5}}>6. Company Introduction Letter </Text>

        {companyIntroductionData.map(item => {
          return (
            <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                <Pressable key= {item.value} onPress={() => setCompanyIntroduction(item.value)} style={{
                  width:30,
                  height:30,
                  flexDirection:'column',

                  position:'relative',

                  alignItems:'center',
                  justifyContent:'center',
                  // gap:10,
                  marginRight:10,
                  // paddingLeft:20,
                  // paddingTop:10,
                  borderWidth:1,
                  // borderRadius:10,
                  backgroundColor:'white',
                  borderColor: companyIntroduction == item.value? COLORS.main : 'lightgray',
                  position:'relative'
            
                }}>
                  {companyIntroduction === item.value ? <View style={styles.check}>
                    <FontAwesome name="check" size={20} color='darkblue'/>
                  </View> : null}
                
                </Pressable>

                <Text style={{
                    fontSize:13,
                    color: companyIntroduction == item.value? COLORS.main : 'black',
                  }}>
                    {item.title}
                </Text>

                </View>

            </View>
            
          )
        })}

        {errorCompany &&
        <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorCompany}</Text>
        }

        </View>   

     
     }

     {visaData.travelPurpose === "Tourism" &&
     
          <View style={{marginBottom:20}}>

          <Text style={{fontSize:16, marginBottom:5}}>7. Self Introductory Letter </Text>
      
          {selfIntroductionData.map(item => {
            return (
              <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>
      
                  <View style={{flexDirection:'row', alignItems:'center'}}>
      
                  <Pressable key= {item.value} onPress={() => setSelfIntroduction(item.value)} style={{
                    width:30,
                    height:30,
                    flexDirection:'column',
      
                    position:'relative',
      
                    alignItems:'center',
                    justifyContent:'center',
                    // gap:10,
                    marginRight:10,
                    // paddingLeft:20,
                    // paddingTop:10,
                    borderWidth:1,
                    // borderRadius:10,
                    backgroundColor:'white',
                    borderColor: selfIntroduction == item.value? COLORS.main : 'lightgray',
                    position:'relative'
              
                  }}>
                    {selfIntroduction === item.value ? <View style={styles.check}>
                      <FontAwesome name="check" size={20} color='darkblue'/>
                    </View> : null}
                  
                  </Pressable>
      
                  <Text style={{
                      fontSize:13,
                      color: selfIntroduction === item.value? COLORS.main : 'black',
                    }}>
                      {item.title}
                  </Text>
      
                  </View>
      
              </View>
              
            )
          })}
      
          {errorSelf &&
                <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorSelf}</Text>
          }
      
          </View>
     
     }

    

    {visaData.travelPurpose === "Tourism" &&
    
        <View style={{marginBottom:20}}>

        <Text style={{fontSize:16, marginBottom:5}}>8. Leave Approval Letter </Text>

        {leaveApprovalLetterData.map(item => {
          return (
            <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                <Pressable key= {item.value} onPress={() => setLeaveApprovalLetter(item.value)} style={{
                  width:30,
                  height:30,
                  flexDirection:'column',

                  position:'relative',

                  alignItems:'center',
                  justifyContent:'center',
                  // gap:10,
                  marginRight:10,
                  // paddingLeft:20,
                  // paddingTop:10,
                  borderWidth:1,
                  // borderRadius:10,
                  backgroundColor:'white',
                  borderColor: leaveApprovalLetter == item.value? COLORS.main : 'lightgray',
                  position:'relative'
            
                }}>
                  {leaveApprovalLetter === item.value ? <View style={styles.check}>
                    <FontAwesome name="check" size={20} color='darkblue'/>
                  </View> : null}
                
                </Pressable>

                <Text style={{
                    fontSize:13,
                    color: leaveApprovalLetter == item.value? COLORS.main : 'black',
                  }}>
                    {item.title}
                </Text>

                </View>

            </View>
            
          )
        })}

        {errorLeave &&
              <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorLeave}</Text>
        }

        </View> 
    
    }

     {visaData.travelPurpose === "Tourism" && 
     
        <View style={{marginBottom:20}}>

        <Text style={{fontSize:16, marginBottom:5}}>9. Employment Letter </Text>

        {employmentLetterData.map(item => {
          return (
            <View key= {item.value} style={{flexDirection: 'column', justifyContent:'flex-start', marginVertical:10}}>

                <View style={{flexDirection:'row', alignItems:'center'}}>

                <Pressable key= {item.value} onPress={() => setEmploymentLetter(item.value)} style={{
                  width:30,
                  height:30,
                  flexDirection:'column',

                  position:'relative',

                  alignItems:'center',
                  justifyContent:'center',
                  // gap:10,
                  marginRight:10,
                  // paddingLeft:20,
                  // paddingTop:10,
                  borderWidth:1,
                  // borderRadius:10,
                  backgroundColor:'white',
                  borderColor: employmentLetter == item.value? COLORS.main : 'lightgray',
                  position:'relative'
            
                }}>
                  {employmentLetter === item.value ? <View style={styles.check}>
                    <FontAwesome name="check" size={20} color='darkblue'/>
                  </View> : null}
                
                </Pressable>

                <Text style={{
                    fontSize:13,
                    color: employmentLetter == item.value? COLORS.main : 'black',
                  }}>
                    {item.title}
                </Text>

                </View>

            </View>
            
          )
        })}

        {errorEmployment &&
            <Text style={{color:'red', fontSize:10, marginVertical:5}}> {errorEmployment}</Text>
        }

      </View> 

     }

   

     </View>
    </ScrollView>
      <Pressable onPress = {handleDocuments}  style = {{ backgroundColor : 'brown', width : '100%', marginBottom : 20, alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
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
