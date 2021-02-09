


let hone = {
  0 : 'Hyper Text Markup Language',
  1 : 'What is HTML?',
  2 : 'What is Tag?',
  3 : 'What is ordered list?'
  }
let htwo = {
    0: 'allows contents to placed in between',
    1:'what are the tags?',
    2: 'What is div?',
    3: 'what is syntax?'
}
let hthree = {
  Jeopardyhthree: 'let you link many different web pages using a single image',
  firstquestion: 'What is an image map?',
  secondquestion: 'What is link tag?',
  thirdquestion:'what is header?'
}
let hfour = {
  Jeopardyhfour:'enables you to build consistent, transportable and well-defined style templates',
  firstquestion: 'what are style sheets?',
  secondquestion: 'what is the advantage of collapsing white space?',
  thirdquestion: 'what are applets?'
}
let hfive = {
  Jeopardyhfive:'allow you to put a scroolling text in a web pages',
  firstquestion: 'What is a marquee?',
  secondquestion: 'what are applets?',
  thirdquestion: 'What is the use of alternative text in image mapping?'
}

const answers = [hone, htwo, hthree, hfour, hfive]


  


$(() => {   

$('.boxes').on('click', (e) => {
console.log(e.currentTarget.id)
let obj = e.currentTarget.id
console.log(obj)
$('#answers').text(hfive)
console.log(eval(obj))
    
    
  })
})

 
    
  










