class BubbleComponent extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <style>
.hide_ {
    visibility: hidden;
}

.none_ {
    display: none;
}

.open_{
    width: 100vw;
    height: fit-content;
}
/* media for mobile (mobile first approach) */
@media (max-width:480px){ 
    .bubble_ {
            position: absolute;
            width: 100%;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0);
            
        }
    .down_{
      position: fixed;
      top: 60vh;
    } 
    .divide_{
        display: grid;
        grid-template-columns: 4fr 2fr;
        grid-template-areas:
                "control control"
                "gama video"
                "btn btn";
    }
    .controls_{
        grid-area: control;
        display: flex;
        position: fixed;
        justify-content: space-between;
        z-index: 10;
    }
    .controls_ .icon_{
        width: 1.5rem;
        background-color: rgba(0, 0, 0, 0.142);
        margin: 2vh 7vw;
        padding: 1px;
        border-radius: 2rem;
    }

    .video_ {
        width: 140px;
        width: 140px;
        clip-path: circle(12% at 50% 50%);
        grid-area: video;
        margin: 0;
        padding: 0;
        z-index: 5;
    }
   
    .words_{
        width: max-content;
        grid-area: gama;
        display: flex;
        justify-content: center;
        align-self: center;
        background-color: rgb(0, 72, 255);
        color: white;
        padding: 5px 1rem;
        border-radius: 1rem;
    }
    .started_{
        grid-area: video;
        z-index: 100;
        text-decoration: none;
        color: white;
        border-radius: 10px;
        background-color: rgb(0, 72, 255);
        width: 80%;
        text-align: center;
        margin: 10% 8% 10% 8%;
        padding: 1rem 0;

    }
    .started_ span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .shuffle_{
        width: 1rem;
    }

   .close_{
       width: 16px;
       height: 16px;
       grid-area: video;
       position: fixed;
       z-index: 20;
       background-color: rgba(0, 0, 0, 0.15);
       top: 70vh;
       left: 70vw;
   }
 }</style>
    <div class="bubble_"> 
        
        <div class="video_container_ divide_ down_">
            <!-- prompt -->
                <div class="words_">Hey! Click Here 👉</div>
            <div class="controls_ ">
                <div class="left_">
                    <img id="pause_" class="icon_" src="./pause.png" alt="pause" >
                    <img id="play_" class="icon_ none_" src="./play.png" alt="play">

                    <img id="refresh_" class=" icon_" src="./refresh.png" alt="refresh">
                    <img id="volume_" class=" icon_" src="./volume.png" alt="volume">
                    <img id="mute_" class=" icon_ none_" src="./mute.png" alt="mute">
                </div>
                <div class="right_">
                    <img id="close_" class="icon_" src="./close.png" alt="close">
                </div>
            </div>
            
            <!-- video -->
            
            <video autoplay loop class="video_">
                <source src="./test.mp4" type="video/mp4" />
            </video>
            <div class="close_"><img class="close_" src="./outer.png" alt="close"></div>
            <a class="started_ down_ none_" href="#"><span><img class="shuffle_" src="./shuffle.png" alt="get started">GET STARTED</span></a>
        </div>
    </div>
        `
    }
}

customElements.define(`bubble-component`,BubbleComponent)