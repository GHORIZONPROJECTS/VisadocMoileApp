import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState,  useContext, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import {storage, db} from '../../firebase'
import * as FileSystem from 'expo-file-system'
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, getDoc, setDoc, serverTimestamp, updateDoc  } from "firebase/firestore";
import { COLORS } from '../../constants/theme'
import { FontAwesome, Ionicons, Feather} from '@expo/vector-icons'
import { VisaContext } from "../../config/VisaContext";
import { AuthContext } from '../../config/AuthContext'
import BackArrowComponent from '../../components/backArrow'

const InternationalPassportImageScreen = ({navigation}) => {

  const [userData, setUserData] = useState({})
  const [image, setImage] = useState(null)  
  const [uploading, setUploading] = useState(false)
  const [url, setUrl] = useState("")

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


  //Pick an image from gallery

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //Save image to firebase storage 


  const uploadMedia = async() => {

    setUploading(true);

    try {

        const {uri} = await FileSystem.getInfoAsync(image)
        const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
              resolve(xhr.response);
        };

        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const name = new Date().getTime() + image.substring(image.lastIndexOf('/') + 1);
      
        const storageRef = ref(storage, name);

        const uploadTask = await uploadBytesResumable(storageRef, blob);

      

        // uploadTask.on('state_changed', 
        //         (snapshot) => {
                
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         setPerc(progress)
        //         switch (snapshot.state) {
        //             case 'paused':
        //             console.log('Upload is paused');
        //             break;
        //             case 'running':
        //             console.log('Upload is running');
        //             break;
        //             default:
        //             break;
        //         }
        //         }, 
        //         (error) => {
        //         console.log(error)
        //         }, 
        //         () => {

        //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             //    setUrl(downloadURL)
        //                console.log('File available at', downloadURL);
        //               });

                
        //         // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //         //     setData((prev) => ({...prev, img: downloadURL}))
        //         // });
        //         }
        //     );

        //
        setUrl(await getDownloadURL(storageRef));

        console.log(getDownloadURL(storageRef))

        await updateDoc(doc(db, "visa", visaId), {

           InternationalPassportImage : url,
           timeStamp: serverTimestamp(),

         });

        
        setUploading(false)

        Alert.alert("International Passport has been uploaded successfully!!!")

        // setImage(null)

        blob.close();
        
      
        
    } catch (error) {

        console.log(error)
        setUploading(false)
        
    }

  }

console.log('url:',url)
console.log('image:', image)

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'space-between', flexDirection:'column', padding:20}}>

        <View style={{width:'100%', flexDirection: 'row', alignItems:"center", justifyContent:'space-between'}}>
            <BackArrowComponent onPress={() => navigation.goBack()}/>
            <Text style={{fontSize:18, fontWeight:'bold', color:COLORS.main}}>{userData.firstname}</Text>
        </View>
        <View>
            {url

            ? 
            
                <>
                    <Image

                        source={{uri: url}}
                        style={{width:400, height:500}}
                    />
                </>

            :

                <>
                    <Text>No Image</Text>
                </>

            }
        </View>
        <View style={{width:'100%', flexDirection:'row', justifyContent:'center', paddingBottom:100}}>
           {!image &&

              <Pressable
              onPress={pickImage}
              style={{ 
                  alignItems:'center', 
                  flexDirection:'row', 
                  padding:10, 
                  backgroundColor:COLORS.primary, 
                  borderRadius:5, 
                  
              }}>
                  <Feather name="upload" size={20} color="white" />
                  <Text style={{marginLeft:5, color:'white'}}>Pick Image</Text>
              </Pressable>
           
           }
            

           {url &&
           
              <Pressable 
              onPress={uploadMedia}
              style={{ 
                  alignItems:'center', 
                  flexDirection:'row', 
                  padding:10, 
                  backgroundColor:COLORS.main, 
                  borderRadius:5, 
              }}>
                  <Feather name="upload" size={20} color="white" />
                  <Text style={{marginLeft:5, color:'white'}}>Save Image</Text>
              </Pressable>

           } 

          
        </View>
       
        
    </View>
  )
}

export default InternationalPassportImageScreen

const styles = StyleSheet.create({})