// JavaScript File
alert("hi");
var myFirebaseRef = new Firebase("https://vivid-torch-4895.firebaseio.com/");
var numberOfClicks = 0;
myFirebaseRef.child("location/city").on("value", function(snapshot) {
  numberOfClicks = snapshot.val();
  alert(snapshot.val());  // Alerts "San Francisco"
});
myFirebaseRef.set({
  clicks: numberOfClicks
});
