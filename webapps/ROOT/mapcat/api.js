const bmapcfg = {
  'imgext' : '.jpg',			//图片格式------ 根据需要修改，一般是 .png .jpg
  'customstyle' : '',			//自定义样式的地址，为空默认在 offlinemap/customstyle/mapstyle 文件
  'tiles_dir' : '',       		//图片瓦片图的地址，为空默认在 offlinemap/tiles/ 目录
  'tiles_v_dir' : '',     		//矢量瓦片图的地址，为空默认在 offlinemap/tiles_v/ 目录
  'tiles_satellite_dir' : '',   //卫星图的地址，为空默认在 offlinemap/tiles_satellite/ 目录
  'tiles_road_dir' : '',   		//图片路网的地址，为空默认在 offlinemap/tiles_road/ 目录
  'tiles_v_road_dir' : '',   	//矢量路网的地址，为空默认在 offlinemap/tiles_v_road/ 目录
  //'home':window.Location.origin
  'left_marker': true,//左下角 logo显示 
  'debug':false      //是否调试，打印原本请求
  
};

//
var JS__FILE__ = document.currentScript ? document.currentScript.src : document.scripts[document.scripts.length - 1].src;
bmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/")); //地图API主目录

//离线
window.offLineIPAddress=bmapcfg.home;

console.log("%c初始化根目录地址:"+bmapcfg.home,"color: red; background: #030307; font-size: 20px;");
				

(function() {
	window.BMapGL_loadScriptTime = (new Date).getTime();
	document.write('<script type="text/javascript" src="/mapcat/getscript.js?type=webgl&v=1.0&ak=111111111&services=&t=20220830143644"></script>');
	document.write('<link rel="stylesheet" type="text/css" href="/mapcat/res/webgl/10/bmap.css"/>');
})();