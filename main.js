const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const buttonElement = document.createElement('button')
const imgElement = document.createElement('img')
const anchorElement = document.createElement('a')


bodyElement.append(buttonElement)
buttonElement.append('Do Not Click!!!')

bodyElement.append(mainElement)

imgElement.className = 'image'
imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa0K9dn88ezidXAS0QtqLkEZIyCUoA2mV2Ekz7vaplX8LqCNLK&usqp=CAU'
mainElement.append(imgElement)

anchorElement.className = 'link'
anchorElement.href = 'https://www.funko.com/'
mainElement.append(anchorElement)
anchorElement.append ('Click this Funko link!')

buttonElement.addEventListener('click', function(){
    mainElement.remove ()
})