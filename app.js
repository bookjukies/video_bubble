const video_ = document.querySelector(`.video_`)
const video_container_ = document.querySelector(`.video_container_`)
const words_ = document.querySelector(`.words_`)
const controls_ = document.querySelector(`.controls_`)
const btns_ = controls_.querySelectorAll(`.icon_`)
const left_ = document.querySelector(`.left_`)
const right_ = document.querySelector(`.right_`)
const link_btn_ = document.querySelector(`.started_`)
const close_btn_ = document.querySelector(`.close_`)
const bubble_ = document.querySelector(`.bubble_`)

video_.muted = true

left_.classList.add(`none_`)
right_.classList.add(`none_`)
video_.addEventListener(`click`,()=>{
    hide_()
    control_()
    video_.muted = false
    refresh_()
})

close_btn_.addEventListener(`click`,()=>{
    bubble_.classList.add(`none_`)
})
function hide_ (){
    //removes the cliph path
    video_.classList.remove(`video_`)
    video_.classList.add(`open_`)
    //remove position down
    video_container_.classList.remove(`down_`)
    //remove grid
    video_container_.classList.remove(`divide_`)
    //show controls
    controls_.classList.remove(`none_`)
    link_btn_.classList.remove(`none_`)
    //hide prompt
    words_.classList.add(`hide_`)
    left_.classList.remove(`none_`)
    right_.classList.remove(`none_`)
    //close btn
    close_btn_.classList.add(`none_`)
}
function close_(){
     //removes the cliph path
    video_.classList.add(`video_`)
    video_.classList.remove(`open_`)
   //add position down
    video_container_.classList.add(`down_`)
    //add grid
    video_container_.classList.add(`divide_`)
    //close controls
    controls_.classList.add(`none_`)
    left_.classList.add(`none_`)
    right_.classList.add(`none_`)
    //hide prompt
    words_.classList.remove(`hide_`)
    link_btn_.classList.add(`none_`)
     //close btn
    close_btn_.classList.remove(`none_`)
  
  
}
function refresh_ (){
    video_.currentTime = 0
    video_.play()
    
}

function control_(){
    btns_.forEach((btn_)=>{
        
        btn_.addEventListener(`click`,(e)=>{
            let id_ = e.target.id
            
            if(id_==`close_`){
               close_()
               video_.muted = true
            }
            if(id_==`pause_`){
               video_.pause()
                document.getElementById(`play_`).classList.remove(`none_`)
                document.getElementById(`pause_`).classList.add(`none_`)
            }
            if(id_==`play_`){
                video_.play()
                document.getElementById(`play_`).classList.add(`none_`)
                document.getElementById(`pause_`).classList.remove(`none_`)
            }
            if(id_==`refresh_`){
                
               refresh_()
            }
            if(id_==`volume_`){
                
               video_.muted = true
               document.getElementById(`volume_`).classList.add(`none_`)
               document.getElementById(`mute_`).classList.remove(`none_`)
            }
            if(id_==`mute_`){
                
               video_.muted = false
               document.getElementById(`mute_`).classList.add(`none_`)
               document.getElementById(`volume_`).classList.remove(`none_`)
            }
        })
    })
}
