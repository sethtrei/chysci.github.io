// JavaScript File
myFirebaseRef = new Firebase("https://vivid-torch-4895.firebaseio.com/");

function create(){
    var name = $('#usernameInput').val();
    var password = $('#passwordInput').val();
    var passwordCheck = $('#passwordCheck').val();
    var email = $('#emailInput').val();
    var code = $('#passwordInput').val();
    if((password === passwordCheck)&&(code==="CHMSE")){
        myFirebaseRef.createUser({
            email    : email,
            password : password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                alert("Success!");
            }
        }); 
    }
}