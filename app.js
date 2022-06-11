const video = document.querySelector(`.video`)
const video_container = document.querySelector(`.video_container`)
const words = document.querySelector(`.words`)
const controls = document.querySelector(`.controls`)
const btns = controls.querySelectorAll(`.icon`)
const left = document.querySelector(`.left`)
const right = document.querySelector(`.right`)
const link_btn = document.querySelector(`.started`)
const close_btn = document.querySelector(`.close`)
let bubble = document.querySelector(`.bubble`)

video.muted = true

left.classList.add(`none`)
right.classList.add(`none`)
video.addEventListener(`click`,()=>{
    hide()
    control()
    video.muted = false
    refresh()
})

close_btn.addEventListener(`click`,()=>{
    bubble.classList.add(`none`)
})
function hide (){
    //removes the cliph path
    video.classList.remove(`video`)
    video.classList.add(`open`)
    //remove position down
    video_container.classList.remove(`down`)
    //remove grid
    video_container.classList.remove(`divide`)
    //show controls
    controls.classList.remove(`none`)
    link_btn.classList.remove(`none`)
    //hide prompt
    words.classList.add(`hide`)
    left.classList.remove(`none`)
    right.classList.remove(`none`)
    //close btn
    close_btn.classList.add(`none`)
}
function close(){
     //removes the cliph path
    video.classList.add(`video`)
    video.classList.remove(`open`)
   //add position down
    video_container.classList.add(`down`)
    //add grid
    video_container.classList.add(`divide`)
    //close controls
    controls.classList.add(`none`)
    left.classList.add(`none`)
    right.classList.add(`none`)
    //hide prompt
    words.classList.remove(`hide`)
    link_btn.classList.add(`none`)
     //close btn
    close_btn.classList.remove(`none`)
  
}
function refresh (){
    video.currentTime = 0
    video.play()
    
}

function control(){
    btns.forEach((btn)=>{
        
        btn.addEventListener(`click`,(e)=>{
            let id = e.target.id
            
            if(id==`close`){
               close()
               video.muted = true
            }
            if(id==`pause`){
               video.pause()
                document.getElementById(`play`).classList.remove(`none`)
                document.getElementById(`pause`).classList.add(`none`)
            }
            if(id==`play`){
                video.play()
                document.getElementById(`play`).classList.add(`none`)
                document.getElementById(`pause`).classList.remove(`none`)
            }
            if(id==`refresh`){
                
               refresh()
            }
            if(id==`volume`){
                
               video.muted = true
               document.getElementById(`volume`).classList.add(`none`)
               document.getElementById(`mute`).classList.remove(`none`)
            }
            if(id==`mute`){
                
               video.muted = false
               document.getElementById(`mute`).classList.add(`none`)
               document.getElementById(`volume`).classList.remove(`none`)
            }
        })
    })
}
