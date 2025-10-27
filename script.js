for (let i = 0; i < 256; i++) {
  const square = document.createElement('div')
  square.style.height = '75px'
  square.style.width = '75px'
  square.style.border = '1px solid black'
  document.querySelector('.container').appendChild(square)
}

const allSquare = [...document.querySelector('.container').children]
console.log(allSquare)
allSquare.forEach(item => {
  if (item.style.backgroundColor != 'green') {
    item.addEventListener(
      'mouseover',
      () => (item.style.backgroundColor = 'green')
    )
  } else {
    item.removeEventListener(
      'mouseover',
      () => (item.style.backgroundColor = 'green')
    )
    item.addEventListener(
      'mouseover',
      () => (item.style.backgroundColor = 'transparent')
    )
  }
})
