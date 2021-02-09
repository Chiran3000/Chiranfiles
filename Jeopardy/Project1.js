console.log('hello');


const toDoList = [];

const htmlRender = (todo) => {
  const $html = $('#html');
  const $one = $('<button type="button" class = "boxes">who is who</button>');


  $html.append($one);

  $one.on('clikck', (e) => {
    console.log(e.currentTarget);
  })
}
  

  
  
 $(() => {   

  $('.boxes').on('click', (e) => {
    console.log('one')
  
  
  })
})

 
    
  










