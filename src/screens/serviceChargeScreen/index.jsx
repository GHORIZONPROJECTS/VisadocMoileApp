import { Text, View, StyleSheet, Alert, Pressable, Image, ScrollView, Keyboard} from 'react-native'
import React, { useState, useEffect, useContext } from "react";
import BackArrow from '../../components/backArrow'
import { COLORS } from '../../constants/theme'
import { FontAwesome, Ionicons} from '@expo/vector-icons'
import { auth, db } from '../../firebase';
import { AuthContext } from '../../config/AuthContext'
import Loader from '../../components/loader'
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";
import { VisaContext } from "../../config/VisaContext";
import { Divider } from 'react-native-paper';

const ServiceChargeScreen = ({navigation}) => {

    const [userData, setUserData] = useState({})
    const [image, setImage] = useState(null)  
    const [uploading, setUploading] = useState(false)
    const [visaData, setVisaData] = useState({})
    const [loading, setLoading] = useState(false)
  
    const { user } = useContext(AuthContext)
  
    const {visaId} = useContext(VisaContext)
  
    const getUserData = async() => {
      const docRef = doc(db, "travellers", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
  
          setUserData(docSnap.data())
          
        } else {
  
          console.log("No such document!");
        }
    }
  
    useEffect(()=>{
      getUserData()
    }, [])


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

      console.log(visaData)
    
  const handleServiceCharge = async() => {

    setUploading(true)

    await updateDoc(doc(db, "visa", visaId), {

        total : 1300,
        timeStamp: serverTimestamp(),

      });

     
     setUploading(false)

    navigation.navigate("CardPaymentScreen")

  }  

//   const [count, setCount] = useState([])

  const [total, setTotal] = useState(0)

  const [grandTotal, setGrandTotal] = useState(0)

//   const handleAdd = () => {
            
//     setCount([...children, {firstname : "" , dob : ""}])

// }

//   const countDocuments = () => {


//     if(visaData.leaveApprovalLetter === "unavailable"){
        
//         setCount([...count, count++])

//     }

//     if(visaData.selfIntroduction === "unavailable"){
        
//         setCount([...count, count++])

//     }

//     if(visaData.companyIntroduction === "unavailable"){
        
//         setCount([...count, count++])

//     }

//     if(visaData.employmentLetter === "unavailable"){
        
//         setCount([...count, count++])

//     }

//   }

//   useEffect(() => {
//     countDocuments()
//   }, [])


//   console.log('count:', count)


  const feeTotal = () =>{
    
  }


  return (
    <View style={{marginHorizontal:20}}>
        <Loader visible ={loading}/>
       <View style={{ marginVertical:10, flexDirection:'row', alignItems:'center', }}>
        <BackArrow onPress={() => navigation.goBack()}/>
        <Text style={{fontSize:18, color:'black', marginLeft: 40, fontWeight:'bold'}}>Payment Information</Text>  

        </View>
        <Text style={{fontSize:18, fontWeight:'bold', color:'green', marginVertical:20}}>{`Congratulations!! ${userData.firstname}`}</Text>

        <Text style={{fontSize:14, lineHeight:20, fontWeight:500, color:COLORS.main}}>Below fee breakdown includes payment for documents provided by VisaDoc Services for you and Charges for Visa processing.</Text>

        <View style={{marginTop:40}}>

        <View style={{marginBottom:20}}>
          
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, fontWeight:"bold", color:'#00000099'}}>Documents</Text>
                    <Text style={{fontSize:20, fontWeight:"bold", color:'#00000099'}}>Fee</Text>
                
                </View>

          
        </View>    

        <View style={visaData.leaveApprovalLetter === "unavailable" ? styles.unavailable : styles.available}>
            {
                visaData.leaveApprovalLetter === "unavailable"

                ?

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>Leave Approval Letter</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>$100</Text>
                
                </View>

                :

                ""
            }
          
        </View>
 

        <View style={visaData.selfIntroduction === "unavailable" ? styles.unavailable : styles.available}>
            {
                visaData.selfIntroduction === "unavailable"

                ?

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>Self Introduction Letter</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>$100</Text>
                
                </View>

                :

                ""
            }
          
        </View>

        <View style={visaData.companyIntroduction === "unavailable" ? styles.unavailable : styles.available}>
            {
                visaData.companyIntroduction === "unavailable"

                ?

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>Company Introduction Letter</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>$100</Text>
                
                </View>

                :

                ""
            }
          
        </View>

        <View style={visaData.employmentLetter === "unavailable" ? styles.unavailable : styles.available}>
            {
                visaData.employmentLetter === "unavailable"

                ?

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>Employment Letter</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>$100</Text>
                
                </View>

                :

                ""
            }
          
        </View>

        <View style={{marginVertical:20}}>
         
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>Visa Processing Fee</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#00000099'}}>$1000</Text>
                
                </View>

        </View>

        <View style={{marginVertical:20}}>
            <Divider/>
        </View>

        

        <View style={{marginBottom:20}}>
          
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{fontSize:20, fontWeight:"bold", color:'#00000099'}}>Total</Text>
              <Text style={{fontSize:20, fontWeight:"bold", color:'#00000099'}}>$1300</Text>
          
          </View>

          <Pressable onPress = {handleServiceCharge}  style = {{ backgroundColor : 'brown', width : '100%', marginVertical : 20, alignItems : 'center', justifyContent : 'center',paddingVertical : 20, flexDirection : 'row',}}>
        <Text style={{color : 'white', fontSize : 18, marginRight : 10}}>Next</Text>
        <View style = {{ alignItems : 'center', flexDirection : 'row', width : 17}}>
          <Ionicons name="chevron-forward" size={24} color="white" />
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
        
      </Pressable>

    
  </View> 

        

        </View>
    </View>
  )
}

export default ServiceChargeScreen

const styles = StyleSheet.create({

    available: {

        marginBottom : 0

    },

    unavailable: {

        marginBottom : 20 

    },

})