// JavaScript File
// button app
myFirebaseRef = new Firebase("https://vivid-torch-4895.firebaseio.com/");
var clickAmt = 0;
var started = 0;
function startup(){
  myFirebaseRef.child("clicks").once("value", function(snapshot) {
    if(snapshot.val()>=clickAmt){
      clickAmt = snapshot.val();
    }else {
      myFirebaseRef.set({clicks:clickAmt});
    }
  });
}
function updateClicks(){
  if(started = 1){
    myFirebaseRef.child("clicks").on("value", function(snapshot){
      if(numberOfClicks>snapshot.val()){
        myFirebaseRef.set({
          clicks: numberOfClicks
        });
      } else {
        numberOfClicks = snapshot.val();
        myFirebaseRef.set({clicks:numberOfClicks});
      }
    });
  } else {
    myFirebaseRef.child("clicks").on("value", function(snapshot){
      numberOfClicks = snapshot.val();
    });
    myFirebaseRef.set({
      clicks: numberOfClicks
    });
  }
  myFirebaseRef.child("clicks").on("value", function(snapshot){
    document.getElementById("myLink").innerHTML=snapshot.val();
  });
  setTimeout(updateClicks, (10000));
}
function clicked(){
  numberOfClicks++;
  started = 1;
  updateClicks();
}
var numberOfClicks = clickAmt;
startup();
updateClicks();