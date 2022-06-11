const video = document.querySelector(`.video`)
const video_container = document.querySelector(`.video_container`)
const words = document.querySelector(`.words`)
const controls = document.querySelector(`.controls`)
const btns = controls.querySelectorAll(`.icon`)

video.muted = true

video.addEventListener(`click`,()=>{
    hide()
    control()
    video.muted = false
    refresh()
})


function hide (){
    //removes the cliph path
    video.classList.remove(`video`)
    video.classList.add(`open`)
    video.classList.add(`video_open`)
    
    //show controls
    controls.classList.remove(`hide`)
    //hide prompt
     words.classList.add(`hide`)

}
function close(){
     //removes the cliph path
    video.classList.add(`video`)
    video.classList.remove(`open`)
    video.classList.remove(`video_open`)
    
    //show controls
    controls.classList.add(`hide`)
    //hide prompt
     words.classList.remove(`hide`)

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
