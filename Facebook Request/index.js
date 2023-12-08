var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#btn1")
var check = 0


//  var removeFriend = document.querySelector("#btn2"
//  )


//  removeFriend.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
//  })



addFriend.addEventListener("click",function(){

    if(check == 0){
istatus.innerHTML = "Friends"
istatus.style.color = "green"
check = 1
    }
else{
    istatus.innerHTML = "Stranger"
istatus.style.color = "Red"
check = 0
}
})