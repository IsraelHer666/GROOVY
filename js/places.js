//Selecting objects

const button = document.getElementsByClassName("nextButton");

$(button).click(function (e) { 
    alert("Hola")
    e.preventDefault();
});