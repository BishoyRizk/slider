const images = Array.from(document.querySelectorAll(".photoholder img")) 
const sliderdiv = document.getElementById('sliderdiv')
const insiderdiv = document.querySelector('.insiderdiv')
const markforclose = document.querySelector('.markforclose')
const rightarr = document.querySelector(".rightarr")
const leftarr = document.querySelector(".leftarr")
let currentindex = 0
for(let i = 0 ; i<images.length;i++){
    images[i].addEventListener('click',function(e){

        currentindex = i
        sliderdiv.classList.remove("d-none")
        console.log(e.target.getAttribute('src')); 
        insiderdiv.style.backgroundImage=`url(${e.target.getAttribute('src')})`

    })
}




markforclose.addEventListener('click',function(){
    sliderdiv.classList.add("d-none")
})




rightarr.addEventListener('click',function(){
    currentindex++


    if (currentindex == images.length) {
        currentindex = 0
      
   
    }

    let changedphoto = images[currentindex].getAttribute('src')
    insiderdiv.style.backgroundImage=`url(${changedphoto})`
         
  
})




leftarr.addEventListener('click',function(){
    currentindex--


    if (currentindex < 0) {
        currentindex = images.length - 1
      
   
    }

    let changedphoto = images[currentindex].getAttribute('src')
    insiderdiv.style.backgroundImage=`url(${changedphoto})`
         
  
})



document.addEventListener('keydown',function(e){
    console.log(e.key);
     if(e.key== "ArrowRight"){
        currentindex++


        if (currentindex == images.length) {
            currentindex = 0
          
       
        }
    
        let changedphoto = images[currentindex].getAttribute('src')
        insiderdiv.style.backgroundImage=`url(${changedphoto})`
             
    }
    else if (e.key== "ArrowLeft"){
        currentindex--


    if (currentindex < 0) {
        currentindex = images.length - 1
      
   
    }

    let changedphoto = images[currentindex].getAttribute('src')
    insiderdiv.style.backgroundImage=`url(${changedphoto})`
    }
    else if (e.key== "Escape"){
        sliderdiv.classList.add("d-none")
    }
    
})