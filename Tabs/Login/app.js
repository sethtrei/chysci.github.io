// JavaScript File for login
myFirebaseRef = new Firebase("https://vivid-torch-4895.firebaseio.com/");
var theEmail;
function authorize(){
    var username = $('#usernameInput').val();
    var password = $('#passwordInput').val();
    newRef = new Firebase("https://vivid-torch-4895.firebaseio.com/users/"+username+"/");
    newRef.child("email").on("value",function(snapshot){
        theEmail = snapshot.val();
        fireAuth(username, password, newRef);
    });
}
function login(username){
    alert("You're in "+username+"!");
}

function fireAuth(username, password, newRef){
    newRef.child("password").on("value", function(snapshot){
        if(password === snapshot.val()){
            myFirebaseRef.authWithPassword({
                email : theEmail,
                password : snapshot.val()
            }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
                alert("Login Failed: "+ error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                login(username);
            }
        });
        } else {
            alert("That username and password combination does not match");
        }
    });
}