let button = document.createElement("button");
button.innerHTML = "Submit Your Answer Here";
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener ("click", function() {
  alert("That is Correct!!");
});



const questions = {
  hone: {
    answer1:'Hyper Text Markup Languange',
    question1: ['[1].What is HTML?' + '[2].What is tag?' + '[3].What is an ordered list?']
    
  },

htwo: {
    answer1: 'allows contents to placed in between',
    question1:'what are the tags?',
    question2: 'What is div?',
    question3: 'what is syntax?'
},

hthree:  {
  answer1: 'let you link many different web pages using a single image',
  question1: 'What is an image map?',
  question2: 'What is link tag?',
  question3:'what is header?'
},
hfour:  {
  answer1:'enables you to build consistent, transportable and well-defined style templates',
  question1: 'what are style sheets?',
  question2: 'what is the advantage of collapsing white space?',
  question3: 'what are applets?'
},
 hfive: {
  answer1:'allow you to put a scroolling text in a web pages',
  question1: 'What is a marquee?',
  question2: 'what are applets?',
  question3: 'What is the use of alternative text in image mapping?'
}
}
//const answers = [hone, htwo, hthree, hfour, hfive]


$(() => {   

$('.boxes').on('click', (e) => {
//console.log(e.currentTarget.id)
let obj = e.currentTarget.id
//$('#answers').eval(hone)
$('#answers').text(eval(questions[obj]).answer1)
$('#question').text(eval(questions[obj]).question1)
})

})

 
    
  










