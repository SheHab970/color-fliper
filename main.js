
let mybtn = document.getElementById("click");
let color = document.getElementById("sp_one");

let arr_of_color = ["red","green","rgb(128, 130, 0)","blue","rgb(11, 205, 215)","rgb(211, 29, 239)","rgb(239, 29, 151)","rgb(239, 109, 29)","rgb(148, 18, 129)","rgb(63, 25, 133)"];

color.style.color = localStorage.getItem("newColor");
color.innerHTML = localStorage.getItem("newColor");
document.body.style.background = localStorage.getItem("newColor");
if(localStorage.getItem("newColor") != null){
    mybtn.style.color = "white";
}
function createcolor(){
    let random = Math.trunc(Math.random()*10);
    document.body.style.background = arr_of_color[random];
    color.innerHTML = arr_of_color[random];
    color.style.color = arr_of_color[random];
    // if(arr_of_color[random] == "blue"){
    //     mybtn.removeEventListener("click",createcolor);
    // }
    localStorage.setItem("newColor", arr_of_color[random]);
}
mybtn.addEventListener("click",createcolor);


