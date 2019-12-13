const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "(variable).addEventListener :",
    choices: ["listens for events", "listens for key down inputs", "listens for             clicks", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "Jake Weary is known for what c class movie?",
    choices: ["High School Musical 2", "Fred: The Show", "The Incredible Hulk", "Spy Kids 3D"],
    answer: "Fred: The Show"
  },
  {
    title: "What is jQuery?",
    choices: ["a java library", "a JavaScript library", "a Python library", "a C# library"],
    answer: "a JavaScript library"
  },
  {
    title: "",
    choices: ["", "", "", ""],
    answer: ""
  },
  
];
var timer = document.getElementById('timer')
var time = 76
const buttonsEl = document.getElementById('buttons');
let questionsNumber = 0
//timer/////////////////////////////////////////
$(document).ready(function () {
  function Timer() {
    document.getElementById('timer').textContent = 'time: ' + -- time;
  }
  var interval = setInterval(function() {
   
  if (window.location.pathname == '/C:/Users/alber/Desktop/CodeQuiz/questions.html') {
    Timer();
  }
  
    
    if(time == 0) {
    document.location.href = 'results.html';
    localStorage.setItem('points', time)
    ;
    }
    
    if(window.location.pathname === '/C:/Users/alber/Desktop/CodeQuiz/results.html') {
   document.getElementById('timer').textContent = 'time: ' + localStorage.getItem('points', time)
   document.getElementById('score').textContent = 'Score: ' + localStorage.getItem('points', time)
      }
   
  }, 1000);

  $('#ask').text(questions[0].title);
  $('#choice0').text(questions[0].choices[0]);
  $('#choice1').text(questions[0].choices[1]);
  $('#choice2').text(questions[0].choices[2]);
  $('#choice3').text(questions[0].choices[3]);
  localStorage.setItem('answer', questions[0].answer)
  
  //on click event//
  $('.btn-large').on('click', function() {
      localStorage.setItem('userans', this.textContent)
  });
  $('#next').on('click', function() {
    questionsNumber++;
    
    if (questionsNumber>=5) {

      document.location.href = 'results.html';
    }
    var ans = localStorage.getItem('answer')
    var userans = localStorage.getItem('userans')
    if (ans === userans) {
      
    }
    else {
      
      time = time-10
      console.log(time)
      
    }
    localStorage.setItem('answer', questions[questionsNumber].answer)
  
    $('#ask').text(questions[questionsNumber].title);
    $('#choice0').text(questions[questionsNumber].choices[0]);
  $('#choice1').text(questions[questionsNumber].choices[1]);
  $('#choice2').text(questions[questionsNumber].choices[2]);
  $('#choice3').text(questions[questionsNumber].choices[3]);
  

  
  localStorage.setItem('points', time);
  
  
  
  


});






/////////////////////////////////////////////////

console.log(questions.length)
});

  
 
