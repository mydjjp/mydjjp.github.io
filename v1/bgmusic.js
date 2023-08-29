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
  arrAudio=['https://music.163.com/song/media/outer/url?id=408280692.MP3','https://music.163.com/song/media/outer/url?id=28952154.MP3'];
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
