// add event listeners in JS 

document.getElementById("owl").addEventListener("click", function(){
    alert("Owl clicked")
})

//event object

document.getElementById("owl").addEventListener("click", function(e){
    console.log(e)
})


document.querySelector("images").addEventListener("click", function(e){
    console.log(e.target.parentNode)
    let removeIt = e.target.parentNode
    removeIt.remove();
})