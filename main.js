const bodyElement = document.body
    let buttonElement = document.createElement('button')
    bodyElement.append(buttonElement)
    buttonElement.append('DO NOT CLICK!!!')

    buttonElement.addEventListener ("click", function() {
        alert("I Couldnt Get The Button Removed!!!");
      });

      let mainElement = document.createElement('main')
      bodyElement.append(mainElement)
      mainElement.append('Click on Freddy Funko')

      
      

      var img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa0K9dn88ezidXAS0QtqLkEZIyCUoA2mV2Ekz7vaplX8LqCNLK&usqp=CAU';
img.onclick = function() {
    window.location.href = 'https://www.funko.com/';
};
document.body.appendChild(img);