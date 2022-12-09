import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false

  constructor(public firebaseAuth : AngularFireAuth, private router : Router) { }

  // forgot password
  forgotPassword(email : string) {
    this.firebaseAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/Home']);
      alert('   We send a link to Reset your Password by email. Please check your email rpryor13@gmail.com');
    }, err => {
      alert('Something went wrong');
    })
  }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
.then(res=>{
  this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
  },err=>{alert("Not valid Email or Password")}
  )}

  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
  .then(res=>{
  this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
  })  
}

logout(){
  this.firebaseAuth.signOut()
  localStorage.removeItem('user')
}
}
