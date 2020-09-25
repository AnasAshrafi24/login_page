const facebook_login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
  
        var token = result.credential.accessToken;
       
        var user = result.user;
         console.log("user====>",user)
        // ...
    }).catch(function (error) {
    console.log(error.message)
    });
}




let singup = () =>{
    let email = document.getElementById("email_singup");
    let password = document.getElementById("password_singup")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    
    .then((result)=>{
        console.log("Ok hai", result)
    })
    
    .catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
       
      });


    


}

let login = () =>{
 
    email = document.getElementById("email")
    password = document.getElementById("password")
 
 

firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((result)=>{
    console.log("Ok hai", result)
})

.catch(function(error) {
  
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log( "Masla hai",errorMessage)
   
})
}
