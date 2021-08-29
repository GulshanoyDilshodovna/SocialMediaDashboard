//consts
const theme = document.querySelector('.theme')
const circle = document.getElementById('circle')
// const bg1 = document.getElementById('col')
const bg1 = document.querySelectorAll('.col')
const bg2 = document.querySelectorAll('.coll')
const bg = document.querySelector('.wrapper')
const dark = document.querySelectorAll('.dark')
let boolean = true

// theme event
theme.addEventListener('click', function(e){
    if(boolean){
        circle.classList.toggle('circle1')
        circle.classList.toggle('circle2')
        bg.style.backgroundColor = 'rgb(255, 255, 255)'
        theme.style.backgroundColor = 'rgb(158, 155, 155)'
        for(let i=0; i<dark.length; i++){
            dark[i].style.color = '#000'
        }
        for(let i=0; i<bg1.length; i++){
            bg1[i].style.backgroundColor = 'rgb(220, 224, 235)'
        }
        for(let i=0; i<bg2.length; i++){
            bg2[i].style.backgroundColor = 'rgb(220, 224, 235)'
        }
        boolean = false
    }
    else{
        circle.classList.toggle('circle1')
        circle.classList.toggle('circle2')
        bg.style.backgroundColor = 'rgb(5, 3, 12)'
        theme.style.backgroundColor = '#073486'
        for(let i=0; i<dark.length; i++){
            dark[i].style.color = '#fff'
        }
        for(let i=0; i<bg1.length; i++){
            bg1[i].style.backgroundColor = 'rgb(14, 24, 46)'
        }
        for(let i=0; i<bg2.length; i++){
            bg2[i].style.backgroundColor = 'rgb(14, 24, 46)'
        }
        boolean = true
    }
})
