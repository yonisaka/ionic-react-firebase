import * as firebase from 'firebase';
import { resolve } from 'dns';

const config  = {
    apiKey: "AIzaSyDyRlXW3HBL1VgoDJ6xEvXXTopisL3oJKQ",
    authDomain: "ionic-react-login-bfc4c.firebaseapp.com",
    databaseURL: "https://ionic-react-login-bfc4c.firebaseio.com",
    projectId: "ionic-react-login-bfc4c",
    storageBucket: "ionic-react-login-bfc4c.appspot.com",
    messagingSenderId: "305514112179",
    appId: "1:305514112179:web:080783f9a3bdad7c47bcc6",
    measurementId: "G-5QNKDB569T"
}

firebase.initializeApp(config)

export function getCurrentUser(){
	return new Promise((resolve, reject) => {
		const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
			if(user){
				resolve(user)
			}else {
				resolve(null)
			}
			unsubscribe()
		})
	})
}

export function logoutUser(){
	return firebase.auth().signOut()
}

export async function loginUser(username:string, password:string){
	const email = `${username}@lacrose.com`

	try{
		const res = await firebase.auth().signInWithEmailAndPassword(email, password)

		return res
	} catch(error){
		console.log(error.message, 4000)
		return false
	}
}

export async function registerUser(username:string, password:string){
	const email = `${username}@lacrose.com`

	try{
		const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
		console.log(res)
		return true
	}catch(error){
		console.log(error.message, 4000)
		return false
	}
	
	 
}