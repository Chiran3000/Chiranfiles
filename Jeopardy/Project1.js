

document.addEventListener('keydown', (event) => {
  if (event.key == '1') {
    alert('That is Correct!')
  } else  
  alert('that is incorrect!')

  });

  





const questions = {
  hone: {
    answer1:'Hyper Text Markup Languange',
    question1: ['[1].What is HTML?' + '[2].What is tag?' + '[3].What is an ordered list?']
    
  },

htwo: {
    answer1: 'Allows Contents to Placed in Between',
    question1:['[1].what are the tags?' + '[2].What is Div' + '[3].What is syntax?']
    
},

hthree:  {
  answer1: 'Let you link many different web pages using a single image',
  question1: ['[1].What is an image map?'+ '[2].What is link tag?' + '[3].What is Header?']
  
},
hfour:  {
  answer1:'Enables you to build consistent, transportable and well-defined style templates',
  question1: ['[1]what are style sheets?' + '[2]What is the Advantage of Collapsing White Space' + '[3]What are Applets?']
  
},
 hfive: {
  answer1:'Allows you to put a scroolling text in a web pages',
  question1: ['[1]What is a marquee?' + '[2]What are applets?' + '[3]What is the use of Alternative text in image mappping?']
 },

one: {
  answer1:'First President of the United States',
  question1: ['[1]Who is George Washington?'+ '[2]Who is John Madison?' + '[3]Who is Matama Ghandhi?']
},
two: {
  answer1:'Budapest',
  question1: ['[1]What is a Capital of Hungary'+'[2]What is a Capital of Nepal? '+ '[3]What is a Capital of France?']
},
three: {
  answer1: 'Taxes',
  question1:['[1]What is every citizen civil duty?' + '[2]What is a Credit Card?' + '[3]What is Monetary Balance?']
},
four: {
  answer1: 'Mississippi River',
  question1:[ '[1]River of USA'+'[2]River of Egypt' + '[3]River of Thailand']
},
five: {
  answer1: 'Nepal type of Government',
  question1: ['[1]Republic Democarcy' +'          '+'[2]Monarchy' +'            ' +'[3]Totalitarianism'] 
},
jone: {
  answer1: 'Spermology is the study of',
  question1: ['[1]What is seed?'+ '[2]What is Leaf?' + '[3]What is Pollen grain?']
},
jtwo: {
  answer1:'Animal without red blood cell',
  question1:['[1]What is EarthWorm?'+ '[2]What is Frog?'+ '[3]What is Snake?']
},
jthree: {
  answer1: 'Stomata',
  question1: ['[1]Where does exchange of gases takes place' + '[2]Where is Chylomicrons?'+ '[3]Where does Photo Sythesis takes places?']
},
jfour: {
  answer1: 'Nuclear Membrane is Absent in',
  question1: ['[1]What is Volvox?' + '[2]What is Agaricus?' + '[3]What is Nostoc?'] 
},
jfive: {
  answer1: 'Botany is also Know as',
  question1: ['[1]What is Phytology?' + '[2]What is Pedelogy?' + '[3]What is Plantophyta?']
},
fone: {
  answer1: 'Spermology is the study of',
  question1: ['[1]What is seed?'+ '[2]What is Leaf?' + '[3]What is Pollen grain?']
},
ftwo: {
  answer1:'Animal without red blood cell',
  question1:['[1]What is EarthWorm?'+ '[2]What is Frog?'+ '[3]What is Snake?']
},
fthree: {
  answer1: 'Stomata',
  question1: ['[1]Where does exchange of gases takes place' + '[2]Where is Chylomicrons?'+ '[3]Where does Photo Sythesis takes places?']
},
ffour: {
  answer1: 'Nuclear Membrane is Absent in',
  question1: ['[1]What is Volvox?' + '[2]What is Agaricus?' + '[3]What is Nostoc?'] 
},
ffive: {
  answer1: 'Botany is also Know as',
  question1: ['[1]What is Phytology?' + '[2]What is Pedelogy?' + '[3]What is Plantophyta?']
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

 
    
  










