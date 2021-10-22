let left = document.getElementsByClassName('left_but')[0]
    let right = document.getElementsByClassName('right_but')[0]
    let min = document.getElementsByClassName('min')
    let images = document.getElementsByClassName('images')[0]

    let index = 0
    let time

    function position() {
        images.style.left = (index * -100) + '%'
    }
    function add() {
        if(index >= min.length-1){
            index = 0
        }else {
            index++
        }
    }
    function desc() {
        if(index < 1){
            index = min.length-1
        }else {
            index--
        }
    }
    function timer() {
        time = setInterval(()=>{
            index++
            desc()
            add()
            position()
        },3000)
    }
    left.addEventListener('click',()=>{
        desc()
        position()
        clearInterval(time)
        timer()
    })
    right.addEventListener('click',()=>{
        add()
        position()
        clearInterval(time)
        timer()
    })
    for(let i = 0;i<min.length;i++){
        min[i].addEventListener('click',()=>{
            index = i
            position()
            clearInterval(time)
            timer()
        })
    }
    timer()