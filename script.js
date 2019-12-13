startEl = document.getElementById('start')
namesArr = [];
$(document).ready(function () {

finalscore = localStorage.getItem('points')

function myfunction() {
    var x = document.getElementById("highscores");
    var y = document.getElementById('resultspage')
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  } 
  if (y.style.display === "none") {
    y.style.display = "block";
    
  } else {
    y.style.display = "none";
  } 
}

function displaynames (){
  for (var key in localStorage) {
  if (key === "length" || key === "points" || key === "userans" || key === "answer"  || key === "key" || key === "getItem" || key === "setItem" || key === "removeItem" || key === "clear") {
  } else {  let score = localStorage.getItem(key);
    
    $('#scores').append("<li>" + key + " scored " + score + "</li>"); 
}
}
}

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    
    // console.log(namesArr)
    var initials = document.getElementById('initials').value;
    // var car = [JSON.parse(localStorage.getItem('name'))]
    
    // console.log(car)
    // namesArr = car
    // console.log(namesArr)
    // let results = {name: document.querySelector("#initials").value}
    
    // namesArr.push(results);
    document.querySelector('form').reset();
    
    // const initials = document.querySelector("#initials").value;
    // namesArr.push(initials);
    // console.log(namesArr)
    // var JSONnamesArr = JSON.stringify(namesArr);
    // var changednames = JSON.parse(localStorage['name']);
    // var JSONnamesArr = JSON.stringify(changednames.push(initials));
    // console.log(initials)
     
        // localStorage.setItem('name', JSONnamesArr);
        localStorage.setItem(initials, finalscore)
        // document.location.href = 'highscores.html';
        myfunction();
        displaynames();
       
    


// console.log(localStorage.getItem('name'));


});})
    


