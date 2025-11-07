const button = document.getElementById("nextButton");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

button.addEventListener("click",(e)=>{

    const  collection = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let number  = (Math.random()).toString();
    let numberSplitted =  number.split(".",2);
    console.log(numberSplitted[0])
   img1.setAttribute("src","../img/places/place"+collection[numberSplitted[0]]);
   img2.setAttribute("src","../img/places/place");
//    img3.setAttribute("src","../img/places/places.jpg");
})