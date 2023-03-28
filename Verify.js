// import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// //web :1092041933613-ffcr1b00gt2d8on3b8s6aup7dda1b53c.apps.googleusercontent.com

// WebBrowser.maybeCompleteAuthSession();

// export default function Verify() {
//   const [accessToken, setAccessToken] = React.useState(null);
//   const [user, setUser] = React.useState(null);
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     clientId: "your cliend id goes here!",
//   });

//   React.useEffect(() => {
//     if(response?.type === "success") {
//       setAccessToken(response.authentication.accessToken);
//       accessToken && fetchUserInfo();
//     }
//   }, [response, accessToken])

//   async function fetchUserInfo() {
//     let response = await fetch("https://www.googleapis.com/insider/v2/me", {
//       headers: { Authorization: `Bearer ${accessToken}` }
//     });
//     const useInfo = await response.json();
//     setUser(useInfo);
//   }

//   const ShowUserInfo = () => {
//     if(user) {
//       return(
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
//           <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
//           <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
//         </View>
//       )
//     }
//   }  

//   return (
//     <View style={styles.container}>
//       {user && <ShowUserInfo />}
//       {user === null &&
//           <>
//           <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
//           <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
//         <TouchableOpacity
//           disabled={!request}
//           onPress={() => {
//             promptAsync();
//             }} 
//         >
//           <Image source={require("")} style={{width: 300, height: 40}} />
//         </TouchableOpacity>
//         </>
//       }
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// // import * as React from 'react';

// // import * as WebBrowser from 'expo-web-browser';
// // import * as Google from 'expo-auth-session/providers/google'
// // import { View,Text,TouchableOpacity,Image,StyleSheet } from 'react-native'


// // WebBrowser.maybeCompleteAuthSession();

// // //web :1092041933613-ffcr1b00gt2d8on3b8s6aup7dda1b53c.apps.googleusercontent.com



// // export default function Verify() {
// //   const [accessToken,setAccessToken]=React.useState(null);
// //   const[user,setUser]=React.useState(null);
// //   const [request,response,promptAsync]=Google.useIdTokenAuthRequest({
// //     clientId:"1092041933613-ffcr1b00gt2d8on3b8s6aup7dda1b53c.apps.googleusercontent.com"
// //   });
// //   React.useEffect(() => {
// //     if(response?.type === "success") {
// //       setAccessToken(response.authentication.accessToken);
// //       accessToken && fetchUserInfo();
// //     }
// //   }, [response, accessToken])

// //   async function fetchUserInfo() {
// //     let response = await fetch("https://www.googleapis.com/insider/v2/me", {
// //       headers: { Authorization: `Bearer ${accessToken}` }
// //     });
// //     const useInfo = await response.json();
// //     setUser(useInfo);
// //   }

// //   const ShowUserInfo = () => {
// //     if(user) {
// //       return(
// //         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// //           <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
// //           <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
// //           <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
// //         </View>
// //       )
// //     }
// //   }  

// //   return (
// //     <View style={styles.container}>
// //       {user && <ShowUserInfo />}
// //       {user === null &&
// //           <>
// //           <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
// //           <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
// //         <TouchableOpacity
// //           disabled={!request}
// //           onPress={() => {
// //             promptAsync();
// //             }} 
// //         >
// //           <Image source={require("")} style={{width: 300, height: 40}} />
// //         </TouchableOpacity>
// //         </>
// //       }
// //     </View>
// //   )
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

import * as GoogleSignIn from 'expo-google-app-auth';
import { Button } from 'react-native';
async function signInWithGoogleAsync() {
  try {
    const result = await GoogleSignIn.logInAsync({
      androidClientId: 'YOUR_ANDROID_CLIENT_ID_HERE',
      iosClientId: 'YOUR_IOS_CLIENT_ID_HERE',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      console.log(result.accessToken);
      // You can now use the access token to authenticate the user on your server
    } else {
      console.log('Google sign-in was cancelled');
    }
  } catch (e) {
    console.log('Error with Google sign-in:', e);
  }
}



export default function Verify() {
  return (
    <Button
      title="Sign in with Google"
      onPress={() => signInWithGoogleAsync()}
    />
  );
}


