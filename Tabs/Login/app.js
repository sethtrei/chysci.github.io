// JavaScript File
myFirebaseRef = new Firebase("https://vivid-torch-4895.firebaseio.com/");
function authorize(){
    var username = $('#usernameInput').val();
    var password = $('#passwordInput').val();
    newRef = new Firebase("https://vivid-torch-4895.firebaseio.com/users/"+username+"/");
    newRef.child("password").on("value", function(snapshot){
        if(password === snapshot.val()){
            login(username);
        } else {
            alert("That username and password combination does not match");
        }
    });
}
function login(username){
    alert("You're in "+username+"!");
}