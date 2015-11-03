// JavaScript File
myFirebaseRef = new Firebase("https://vivid-torch-4895.firebaseio.com/");

function create(){
    var name = $('#usernameInput').val();
    var password = $('#passwordInput').val();
    var passwordCheck = $('#passwordCheck').val();
    var email = $('#emailInput').val();
    var code = $('#codeInput').val();
    newRef = new Firebase("https://vivid-torch-4895.firebaseio.com/users/"+name+"/");
    if((password === passwordCheck)&&(code==="CHMSE")){
        myFirebaseRef.createUser({
            email    : email,
            password : password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
                alert("Error: Please try again")
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                alert("Success!");
            }
        }); 
    } else if(password!=passwordCheck){
        alert("Your password and password check don't match");
    } else {
        alert("That is not the code");
    }
    var joinDate = new Date();
    newRef.update({
        "email" : email,
        "password" : password,
        "joined" : joinDate
    });
}