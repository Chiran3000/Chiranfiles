


let hone = {
  answer : 'Hyper Text Markup Language',
  question: 'What is HTML?',
  question2 : 'What is Tag?',
  question3 : 'What is ordered list?'
  }
let htwo = {
    answer: 'allows contents to placed in between',
    question:'what are the tags?',
    question2: 'What is div?',
    question3: 'what is syntax?'
}
let hthree = {
  answer: 'let you link many different web pages using a single image',
  question: 'What is an image map?',
  question2: 'What is link tag?',
  question3:'what is header?'
}
let hfour = {
  answer:'enables you to build consistent, transportable and well-defined style templates',
  question: 'what are style sheets?',
  question2: 'what is the advantage of collapsing white space?',
  question3: 'what are applets?'
}
let hfive = {
  answer:'allow you to put a scroolling text in a web pages',
  question: 'What is a marquee?',
  question1: 'what are applets?',
  question2: 'What is the use of alternative text in image mapping?'
}

const answers = [hone, htwo, hthree, hfour, hfive]


  


$(() => {   

$('.boxes').on('click', (e) => {
console.log(e.currentTarget.id)
let obj = e.currentTarget.id
console.log(obj)
$('#answers').text(hone)
console.log(eval(obj))
    
    
  })
})

 
    
  










