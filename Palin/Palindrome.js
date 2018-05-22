var tb = document.getElementById("nameTextBox")

var btn = document.getElementById("btnClickMe")

var h2 = document.getElementById("heading2")

btn.addEventListener('click',function(){

  h2.innerHTML = tb.value

})


console.log(tb)
