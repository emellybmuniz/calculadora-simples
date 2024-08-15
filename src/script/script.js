const display = document.getElementsByClassName('display')
const numberKey = document.getElementsByClassName('key')
const operatorKey = document.getElementsByClassName('operator')
const clearKey = document.getElementsByClassName('dell')
const equalsKey = document.getElementsByClassName('equal')


document.addEventListener("keydown", e => {
  if (isNaN(Number(e.key)) && !['+', '-', '*', '/', 'Backspace', 'Enter'].includes(e.key)) {
    e.preventDefault()
  }
})

document.addEventListener('click', e => {

  if (e.target.matches('button')){
    const key = e.target
    const action = key.dataset.action
    
    if (!action) {
      console.log('key')
      display.value += keyContent
    }
    
  if (
    action === 'clear' 
  ) {
    console.log('Clear key')
    clearInput()
  }

  if (
    action === 'equal' 
  ) {
    console.log('Equal key')
  }
  
    if (
      action === 'add' ||
      action === 'multiply' ||
      action === 'subtract' ||
      action === 'divide'
  ) {
      console.log('operator!')
      input.value += 'operator!'
    }
  }

});

key.addEventListener('click', e =>{
    if(e.target.matches('button')) {
        const keycontent = e.target.textcontent
        console.log('teste')
        
    }

});

const clearInput = () => {
  display.input.value = ''
}

