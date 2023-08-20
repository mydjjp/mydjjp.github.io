//music loading ... 
var arrAudio=[];     //加载数组
var arrNex=0;        
var bgAudio = document.getElementById('bgmusic_id');  //写入ID

bgAudio.addEventListener('ended', function () {
    arrNex=arrNex+1;
    if(arrNex<arrAudio.length){
        bgAudio.src=arrAudio[arrNex];
        bgAudio.play();
        return;
    }
}, false);

function changeAudio() {
  arrAudio=['../s/musics/Always Come Back To Your Love.mp3','../s/musics/Stupid.mp3','../s/musics/Fire fly.mp3','../s/musics/a new day has come.mp3','../s/musics/commercial advertising.mp3'];
  bgAudio.src=arrAudio[arrNex];
}

function pause() {
  bgAudio.pause();
}
function play() {
  bgAudio.play();
}
function playpause() {
if (bgAudio.paused) {
    //自动播放
bgAudio.play();
     }else{
     bgAudio.pause();
}
}
changeAudio();  
play();	
