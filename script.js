
// dom  
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle= document.querySelectorAll('.circle')



let currentActive = 1
// Events
next.addEventListener('click',()=>{
    currentActive++


    if(currentActive>circle.length){
     currentActive= circle.length

}

   update()
})


prev.addEventListener('click',()=>{
    currentActive--


    if(currentActive<1){
     currentActive= 1

}
    update()

})


function update() {
    circle.forEach((circle,idx)=>{
        if(idx<currentActive){
           circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })


const actives =document.querySelectorAll('.active')
// console.log(actives.length,circle.length-1)
progress.style.width=(actives.length-1)/(circle.length-1)*100 +"%"

if(currentActive ===1){  /* strictly condtition*/
    prev.disabled = true
}else if(currentActive === circle.length){
    next.disabled = true
}
else {
    prev.disabled= false
    next.disabled =false
}
}
// console.log((actives.length-1)/(circle.length-1) * 100 + '%'); 
 /* percentage  concate*  which will give lower percentage  if u remove -1 then it will become 50, 75 ,100%
without percentage it will be like move to icons */
