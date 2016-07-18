window.onload=function() {
var music =document.getElementById("music");
var audio=document.getElementsByTagName("audio")[0];
//当音乐播放完毕后，自动停止光盘转动
audio.addEventListener("ended",function(event){
	music.setAttribute("class","");
},false);
//点击音乐图标,控制音乐播放效果
music.addEventListener("touchstart",function(event){
	if(audio.paused){
		audio.play();
        this.setAttribute("class","play");
        /*this.style.animationPlayState="running";//兼容性极差*/
	}
	else{
		audio.pause();
        this.setAttribute("class","");
      /*this.style.animationPlayState="paused";//兼容性极差*/
	}
  },false);
//翻页的效果
page1.addEventListener("touchstart",function(event){
page1.style.display="none";
page2.style.display="block";
page3.style.display="block";
page3.style.top="100%";
setTimeout(function(){
	page2.setAttribute("class","page fadeOut");
	page3.setAttribute("class","page fadeIn");
},8000);
},false);
};