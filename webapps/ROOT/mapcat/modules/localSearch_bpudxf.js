/**/﻿_jsload&&_jsload('localSearch', 'function eg(e,jf,i){cM.call(this);if(!e){return}this.container=(typeof(e)=="object")?e:ev.G(e);this.page=1;this.pageCount=100;this.argName="pg";this.pagecap=4;this.callback=jf;this.update=true;var T={page:1,totalCount:100,pageCount:100,pagecap:4,argName:"pg",update:true};if(!i){i=T}for(var je in i){if(typeof(i[je])!="undefined"){this[je]=i[je]}}this.render()}ev.extend(eg.prototype,{render:function(){this.initialize()},initialize:function(){this.checkPages();this.container.innerHTML=this.createHtml()},checkPages:function(){if(isNaN(parseInt(this.page))){this.page=1}if(isNaN(parseInt(this.pageCount))){this.pageCount=1}if(this.page<1){this.page=1}if(this.pageCount<1){this.pageCount=1}if(this.page>this.pageCount){this.page=this.pageCount}this.page=parseInt(this.page);this.pageCount=parseInt(this.pageCount)},getPage:function(){var i=location.search;var T=new RegExp("[?&]?"+this.argName+"=([^&]*)[&$]?","gi");var e=i.match(T);this.page=RegExp.$1},createHtml:function(){var jk=[];var je=this.page-1;var jh=this.page+1;jk.push(\'<p style="margin:0;padding:0;white-space:nowrap">\');if(je<1){}else{if(this.page>=this.pagecap){var T=\'<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">首页</a></span>\';jk.push(T.replace("{temp1}","BMapGL.I(\'"+this.hashCode+"\').toPage(1);"))}var T=\'<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">上一页</a></span>\';jk.push(T.replace("{temp2}","BMapGL.I(\'"+this.hashCode+"\').toPage("+je+");"))}if(this.page<this.pagecap){if(this.page%this.pagecap==0){var jf=this.page-this.pagecap-1}else{var jf=this.page-this.page%this.pagecap+1}var ji=jf+this.pagecap-1}else{var jj=Math.floor(this.pagecap/2);var jg=this.pagecap%2-1;if(this.pageCount>this.page+jj){var ji=this.page+jj;var jf=this.page-jj-jg}else{var ji=this.pageCount;var jf=this.page-jj-jg}}if(this.page>this.pageCount-this.pagecap&&this.page>=this.pagecap){var jf=this.pageCount-this.pagecap+1;var ji=this.pageCount}for(var e=jf;e<=ji;e++){if(e>0){if(e==this.page){jk.push(\'<span style="margin-right:3px">\'+e+"</span>")}else{if(e>=1&&e<=this.pageCount){var T=\'<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[\'+e+"]</a></span>";jk.push(T.replace("{temp3}","BMapGL.I(\'"+this.hashCode+"\').toPage("+e+");"))}}}}if(jh>this.pageCount){}else{var T=\'<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">下一页</a></span>\';jk.push(T.replace("{temp4}","BMapGL.I(\'"+this.hashCode+"\').toPage("+jh+");"))}jk.push("</p>");return jk.join("")},toPage:function(i){var e=i?i:1;if(typeof(this.callback)=="function"){this.callback(e);this.page=e}if(this.update){this.render()}}});ch.isReqDataMap=function(i,e){if(!i||typeof e=="undefined"){return false}if(i==D&&e!=hu&&e!=fp&&e!=eU&&e!=hN&&e!=av){return false}if(i==cw&&e!=bT){return false}if(i==c2&&e!=aZ){return false}if(i==ff&&e!=a4){return false}if(i==dS&&e!=aq){return false}if(i==a0&&e!=iG){return false}return true};ev.extend(ch.prototype,{_check:function(){for(var T=0,e=this._queryList.length;T<e;T++){var je=this._queryList[T];this[je.method].apply(this,je.arguments)}delete this._queryList;this.initialize()},initialize:function(){var e=this;this.renderMap=new cp(e);this.renderList=new W(e)},search:function(e,i){if(!e||(e instanceof Array&&(e.length<1||e.length>10))){this.clearResults();this._setStatus(BMAP_STATUS_INVALID_REQUEST);this._triggerCbk(az.CBK_SEARCH_COMPLETE);return}i=i||{};if(i.customData){this._createCustomSearchInstance();this.customSearch.search({keyword:e,searchType:"local",customData:i.customData});this._useCustomdata=true;return}else{this._useCustomdata=false}var je=arguments[2]||{};var T=this;this._getIdByLoc(this._loc,function(jj){jj=jj||1;T._isMultiKey=T._isKeywordArray(e);var ji;if(!T._isMultiKey){ji={qt:i.forceLocal?da:D,c:jj,wd:e,rn:T.getPageCapacity()}}else{var jh=e.join("$$");var jf=e.length;ji={qt:dS,c:jj,wd:jh,wdn:jf,rn:T.getPageCapacity()}}if(T._opts.reqFrom){ev.extend(ji,{from:T._opts.reqFrom})}ev.extend(ji,je.params);if(i.log){ji.log="center"}var jg={params:ji,options:i,userKw:je.userKw||e};ev.extend(jg,je);iZ.request(function(jl,jk){T._rawDataCbk(jl,jk)},ji,jg)})},_isKeywordArray:function(e){if(e&&e instanceof Array){return true}else{return false}},searchInBounds:function(e,jf,i){if(!e||!jf||(e instanceof Array&&(e.length<1||e.length>10))){this.clearResults();this._setStatus(BMAP_STATUS_INVALID_REQUEST);this._triggerCbk(az.CBK_SEARCH_COMPLETE);return}var i=i||{};var je=this;if(i.customData){this._createCustomSearchInstance();this.customSearch.search({keyword:e,bounds:jf,searchType:"bound",customData:i.customData});this._useCustomdata=true;return}else{this._useCustomdata=false}var T=arguments[2]||{};this._getIdByLoc(this._loc,function(jn){jn=jn||1;var jm=jf.getSouthWest();var jl=jf.getNorthEast();jm=ig.convertLL2MC(jm);jl=ig.convertLL2MC(jl);var jh="("+jm.lng+","+jm.lat+";"+jl.lng+","+jl.lat+")";je._isMultiKey=je._isKeywordArray(e);var jk;if(!je._isMultiKey){jk={qt:c2,c:jn,wd:e,ar:jh,rn:je._opts.pageCapacity,l:18}}else{var jj=e.join("$$");var jg=e.length;jk={qt:ff,c:jn,wd:jj,wdn:jg,ar:jh,rn:je.getPageCapacity(),l:18}}if(je._opts.reqFrom){ev.extend(jk,{from:je._opts.reqFrom})}ev.extend(jk,T.params);var ji;if(T&&T.center&&T.radius){ji={params:jk,bounds:jf,center:T.center,radius:T.radius,userKw:T.userKw||e}}else{ji={params:jk,bounds:jf,userKw:T.userKw||e}}iZ.request(function(jp,jo){je._rawDataCbk(jp,jo)},jk,ji)})},searchNearby:function(jf,T,jg,jm){if(!jf||!T||(!(T instanceof cf||T instanceof b9)&&typeof T=="object"&&!T.uid)||(jf instanceof Array&&(jf.length<1||jf.length>10))){this.clearResults();this._setStatus(BMAP_STATUS_INVALID_REQUEST);this._triggerCbk(az.CBK_SEARCH_COMPLETE);return}var jm=jm||{};if(jm.customData){this._createCustomSearchInstance();this.customSearch.search({keyword:jf,center:T,radius:jg,searchType:"nearby",customData:jm.customData});this._useCustomdata=true;return}else{this._useCustomdata=false}jg=jg||ch.DEFAULT_RADIUS;jg=jg<0?ch.DEFAULT_RADIUS:(jg>ch.MAX_RADIUS?ch.MAX_RADIUS:jg);var jj=this;var i=arguments[3]||{};if(T instanceof cf||T instanceof b9){var je=ig.convertLL2MC(T);var ji=new cf(je.lng-jg,je.lat-jg);var jh=new cf(je.lng+jg,je.lat+jg);var jl=ig.convertMC2LL(ji);var jk=ig.convertMC2LL(jh);var e=new hf(new cf(jl.lng,jl.lat),new cf(jk.lng,jk.lat));i.center=T;i.radius=jg;this.searchInBounds(jf,e,i);return}this._getIdByLoc(this._loc,function(jr){jr=jr||1;jj._isMultiKey=jj._isKeywordArray(jf);var jp;if(!jj._isMultiKey){jp={qt:cw,c:jr,wd:jf,rn:jj.getPageCapacity(),uid:T.uid,r:jg}}else{jp={qt:a0,c:jr,wd:jf.join("$$"),wdn:jf.length,rn:jj.getPageCapacity(),uid:T.uid,r:jg}}if(typeof T=="string"){if(!jj._isMultiKey){jp.qt=D;jp.wd=T+" "+jf}else{jp.qt=dS;var jn=[];for(var jo=0;jo<jf.length;jo++){var jq=T+" "+jf[jo];jn.push(jq)}jp.wd=jn.join("$$");jp.wdn=jn.length}delete jp.r;delete jp.uid}if(jj._opts.reqFrom){ev.extend(jp,{from:jj._opts.reqFrom})}ev.extend(jp,i.params);iZ.request(function(jt,js){jj._rawDataCbk(jt,js)},jp,{params:jp,center:T,radius:jg,userKw:i.userKw||jf})})},_rawDataCbk:function(jp,jf){var jo=this;if(jp.result["type"]==a4||jp.result["type"]==aq||jp.result["type"]==iG){jo._isMultiKey=true}else{jo._isMultiKey=false}this.clearResults();jo._json=jp;this._ud=jf;var T=jp.result;var jm=jf.params.qt;if(!jo._isMultiKey){if(T.error!=0||!ch.isReqDataMap(jm,T.type)){var jh=jp.current_city;this._results=new hy({keyword:jf.userKw,city:jh.name,province:jh.up_province_name||"",ccode:jh.code,pc:jo.getPageCapacity(),center:jf.center,radius:jf.radius,bounds:((jf.center&&jf.radius)?undefined:jf.bounds),moreUrl:this._getMoreUrl(jf,jh)});this._results._qt=jf.params.qt;this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION);this._triggerCbk(az.CBK_SEARCH_COMPLETE,this._results);jo.renderList.dispatchEvent(new fa("onrender"));return}}else{if(T.error!=0||!ch.isReqDataMap(jm,T.type)){var jh=jp.current_city;this._arrResults=[];var je=jf.userKw;for(var jl=0,ji=je.length;jl<ji;jl++){var jk=new hy({keyword:je[jl],city:jh.name,province:jh.up_province_name||"",ccode:jh.code,pc:jo.getPageCapacity(),center:jf.center,radius:jf.radius,bounds:((jf.center&&jf.radius)?undefined:jf.bounds),moreUrl:""});jk._qt=jf.params.qt;this._arrResults.push(jk)}this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION);this._triggerCbk(az.CBK_SEARCH_COMPLETE,this._arrResults);jo.renderList.dispatchEvent(new fa("onrender"));return}}jo._processRaw(jf);jo.renderMap.dispatchEvent(new fa("onrender"));jo.renderList.dispatchEvent(new fa("onrender"));var e=this._ud.center;if(e&&typeof e!="string"&&!(e instanceof cf||e instanceof b9)){this.renderMap.addCenterPoi(e)}var jn=this._json.result&&this._json.result.type;var jg={};switch(jn){case hu:case bT:case aZ:case a4:case aq:case iG:jg.points=this._arrPoints;break;case eU:jg.center=this._results.getPoi(0)["point"];jg.level=this._json.content["level"];break;case av:jg.center=this._results.getPoi(0)["point"];jg.level=13;break;case hN:jg.center=this._results.getPoi(0)["point"];jg.level=parseInt(this._json.content[1]);break;default:break}this.renderMap.getBestViewport(jg);var jj;if(!this._isMultiKey){jj=this._results}else{jj=this._getMaxResults()}if(this._opts.renderOptions.selectFirstResult&&jj&&jj.getNumPois()>0){var jo=this;setTimeout(function(){jo.select(0)},240)}},_processRaw:function(ji){var jC=this._json.result,jN=this._json.content,jy=this._json.current_city,jO=jC.type,jm=this,jj=jC.page_num||0,jv=0,jD=0,jp=[],jA=[],e=[],jM=[],jx=[],jr=[];if(this._json.psrs&&this._json.psrs["SEResult"]){var jf=this._json.psrs["SEResult"];if(jf.length>0){for(var jK=0,jn=jf.length;jK<jn;++jK){jr.push(jf[jK])}}}var jF=this._json.suggest_query;if(jF){for(var jK=0,jn=jF.length;jK<jn;++jK){jF[jK]&&jF[jK]["query"]&&jr.push(jF[jK]["query"])}}jr=by.unique(jr);if(jO!=fp&&jO!=hN){var jt;if(!this._isMultiKey){jD=jC.count-(jj==0?(jC.spec_dispnum||0):0);jv=jC.total<760?jC.total:760;jt=jj==0?(jC.spec_dispnum||0):0}if(jO!=eU){if(!this._isMultiKey){for(var jK=jt;jK<jC.count;jK++){if(jN&&jN[jK]){var jg=jN[jK];if(jg.addr===null){continue}var jq=this._formatAddr(jg.addr,jg.poiType);var ju=[];if(jg.cla&&jg.cla["length"]>0){var je=jg.cla["length"];while(je--){var jB=jg.cla[je][1];jB=jB.replace("<b>","").replace("</b>","");ju.unshift(jB)}}var jz={title:jg.name,uid:jg.uid,point:by.parseGeo(jg.geo,true).point,url:az._getPoiUrl(jg.uid,jy.code),detailUrl:"//api.map.baidu.com/place/detail?uid="+jg.uid+"&output=html&source=jsapi",address:jq,city:jy.name,province:jy.up_province_name||"",phoneNumber:jg.tel,postcode:jg.zip,type:jg.poiType||BMAP_POI_TYPE_NORMAL,isAccurate:(jg.acc_flag&&jg.acc_flag==1)?true:false};if(ju.length>0){jz.tags=ju}jp.push(jz);jA.push(jz.point);this._arrPois.push(jz)}}}else{var jl=jC.result_array;var jE=ji.userKw.length;for(var jK=0;jK<jE;jK++){jM[jK]=[];jx[jK]=[];e[jK]=[];if(!jl[jK]){continue}if(jl[jK]["type"]==fp){if(jN&&jN[jK]){for(var jI=0;jI<jN[jK].length;jI++){var T=jN[jK][jI];e[jK].push({city:T.name,_code:T.code,numResults:T.num})}}if(this._json.more_city&&this._json.more_city[jK]){var jo=this._json.more_city[jK];for(var jI=0,jG=jo.length;jI<jG;jI++){for(var jH=0,jw=jo[jI]["city"]["length"];jH<jw;jH++){var T=jo[jI]["city"][jH];e[jK].push({city:T.name,_code:T.code,numResults:T.num})}}}continue}var js=jl[jK]["count"];var jk=jl[jK]["page_num"]||0;var jL=jl[jK]["total"]>760?760:jl[jK]["total"];var jh={count:js,pagenum:jk,total:jL};jx[jK].push(jh);for(var jI=0;jI<js;jI++){if(jN&&jN[jK]&&jN[jK][jI]){var jg=jN[jK][jI];if(jg.addr===null){continue}var jq=this._formatAddr(jg.addr,jg.poiType);var ju=[];if(jg.cla&&jg.cla["length"]>0){var je=jg.cla["length"];while(je--){var jB=jg.cla[je][1];jB=jB.replace("<b>","").replace("</b>","");ju.unshift(jB)}}var jz={title:jg.name,uid:jg.uid,point:by.parseGeo(jg.geo,true).point,url:az._getPoiUrl(jg.uid,jy.code),detailUrl:"//api.map.baidu.com/place/detail?uid="+jg.uid+"&output=html&source=jsapi",address:jq,city:jy.name,province:jy.up_province_name||"",phoneNumber:jg.tel,postcode:jg.zip,type:jg.poiType||BMAP_POI_TYPE_NORMAL,isAccurate:(jg.acc_flag&&jg.acc_flag==1)?true:false,tags:ju};jM[jK].push(jz);jA.push(jz.point);this._arrPois.push(jz)}}}}}else{jD=jv=1;var jz={title:jN.cname,uid:jN.uid,point:by.parseGeo(jN.geo,true).point,address:jN.cname,url:w.mapHost+"?s="+encodeURIComponent("s&wd="+jC.wd)};jp.push(jz);this._arrPois.push(jz);jA.push(jz.point)}}else{if(jO==hN){jD=jv=1;var jz={title:jC.wd,point:by.parseGeoStr(jN[0]),url:w.mapHost+"?s="+encodeURIComponent("s&wd="+jC.wd)};jp.push(jz);this._arrPois.push(jz);jA.push(jz.point)}if(jO==fp){jD=jv=0;for(var jK=0;jK<jN.length;jK++){e.push({city:jN[jK]["name"],_code:jN[jK]["code"],numResults:jN[jK]["num"]})}if(this._json.more_city){var jo=this._json.more_city;for(var jK=0,jG=jo.length;jK<jG;jK++){for(var jI=0,jw=jo[jK]["city"]["length"];jI<jw;jI++){var jN=jo[jK].city[jI];e.push({city:jN.name,_code:jN.code,numResults:jN.num})}}}}}this._arrPoints=jA;if(!this._isMultiKey){this._results=new hy({keyword:ji.userKw,count:jD,total:jv,pageIdx:jC.page_num,city:jy.name,province:jy.up_province_name||"",ccode:jy.code,pois:jp,cityList:e,pc:jm.getPageCapacity(),center:ji.center,radius:ji.radius,bounds:((ji.center&&ji.radius)?undefined:ji.bounds),moreUrl:this._getMoreUrl(ji,jy),suggestions:jr});this._results._qt=ji.params.qt;if(jv==0&&jO!=fp){this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)}else{if(jO!=fp){this._setStatus(BMAP_STATUS_SUCCESS)}else{this._setStatus(BMAP_STATUS_CITY_LIST)}}this._triggerCbk(az.CBK_SEARCH_COMPLETE,this._results)}else{this._arrResults=[];var jE=ji.userKw.length;var jJ=true;for(var jK=0;jK<jE;jK++){if(jx[jK].length>0&&jx[jK][0].total>0){jJ=false}var jp=new hy({keyword:ji.userKw[jK]||"",count:jx[jK].length>0?jx[jK][0].count:0,total:jx[jK].length>0?jx[jK][0].total:0,pageIdx:jx[jK].length>0?jx[jK][0].pagenum:0,city:jy.name,province:jy.up_province_name||"",ccode:jy.code,pois:jM[jK]||[],cityList:e[jK]||[],pc:jm.getPageCapacity(),center:ji.center,radius:ji.radius,bounds:((ji.center&&ji.radius)?undefined:ji.bounds),moreUrl:"",suggestions:jr});jp._qt=ji.params.qt;this._arrResults.push(jp)}if(jJ){this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)}else{this._setStatus(BMAP_STATUS_SUCCESS)}this._triggerCbk(az.CBK_SEARCH_COMPLETE,this._arrResults)}},_getMoreUrl:function(i,je){var ji="";var jg=typeof i.center=="string"?(i.center+" "+i.userKw):i.userKw;var jj=je.name,jh,jl,e,T="";if(typeof i.center=="object"&&!(i.center instanceof cf||i.center instanceof b9)){jl=i.center.point;jh=i.radius}if(i.bounds&&!i.center){e=i.bounds}if(i.center&&(i.center instanceof cf||i.center instanceof b9)){jl=i.center;jh=i.radius}ji=w.apiHost+"/place/search?res=jsapi&query="+jg+"&region="+jj+"&output=html";if(jl){ji+="&location="+jl.lat+","+jl.lng+"&radius="+jh}if(e){var jk=e.getSouthWest();var jf=e.getNorthEast();ji+="&bounds="+jk.lat+","+jk.lng+","+jf.lat+","+jf.lng}return ji},_formatAddr:function(i,e){e=e||BMAP_POI_TYPE_NORMAL;if(e==BMAP_POI_TYPE_BUSSTOP||e==BMAP_POI_TYPE_SUBSTOP){return by.unique(i.split(";")).join("; ")}return i},_chkMultiKeyResults:function(jf){for(var je=0,e=jf.length;je<e;je++){var T=jf[je];if(T.getCurrentNumPois()>0){return true}}return false},_clearOverlays:function(){for(var T=0,e=this._overlays.length;T<e;T++){this._overlays[T].remove();this._overlays[T]=null}this._overlays.length=0;for(var T=0,e=this._arrPois.length;T<e;T++){this._arrPois[T]=null}this._arrPois.length=0;if(this._centerMkr){this._centerMkr.remove();this._centerMkr=null}},_getMaxResults:function(){if(!this._isMultiKey){return this._results}var jg;var e=-1;for(var jf=0,T=this._arrResults.length;jf<T;jf++){var je=this._arrResults[jf];if(je.getNumPages()>e){jg=je;e=je.getNumPages()}}return jg},clearResults:function(){delete this._json;delete this._status;delete this._results;if(this._isMultiKey){delete this._arrResults}delete this._ud;this._curIndex=-1;this._setStatus();this._clearOverlays();if(this._opts.renderOptions.panel){this._opts.renderOptions.panel.innerHTML=""}},gotoPage:function(i){if(this._useCustomdata){this.customSearch.gotoPage(i);return}if(this._ud){var e;if(!this._isMultiKey){e=this._results}else{e=this._getMaxResults()}if(typeof i=="number"&&!isNaN(i)&&i>=0&&i<=e.getNumPages()-1){this._ud.params.pn=i;var T=this._ud.params.qt;switch(T){case D:case da:this.search(this._ud.params.wd,this._ud.options,this._ud);break;case c2:this.searchInBounds(this._ud.params.wd,this._ud.bounds,this._ud);break;case cw:this.searchNearby(this._ud.params.wd,this._ud.center,this._ud.radius,this._ud);break;case ff:this.searchInBounds(this._ud.userKw,this._ud.bounds,this._ud);break;case dS:this.search(this._ud.userKw,this._ud.options,this._ud);break;case a0:this.searchNearby(this._ud.userKw,this._ud.center,this._ud.radius,this._ud);break;default:break}}else{this._setStatus(BMAP_STATUS_INVALID_REQUEST);this._triggerCbk(az.CBK_SEARCH_COMPLETE)}}},_createCustomSearchInstance:function(){if(!this.customSearch){var e=this;this.customSearch=new CustomSearch(e)}},select:function(e){this.renderMap.select(e);this.renderList.select(e);this._curIndex=e}});function hy(e){this["keyword"]=e.keyword||"";this._pageIndex=e.pageIdx||0;this._currentNumPois=e.count||0;this._numPois=e.total||0;this._numPages=Math.ceil(e.total/e.pc);this["center"]=e.center;this["radius"]=e.radius;this["bounds"]=e.bounds;this["city"]=e.city;this["province"]=e.province;this["viewport"]=e.viewport;this["moreResultsUrl"]=e.moreUrl;this._pois=e.pois&&e.pois.slice(0)||[];this._cityList=e.cityList&&e.cityList.slice(0);this["suggestions"]=e.suggestions||[]}ev.extend(hy.prototype,{getPoi:function(e){if(this._pois[e]){return this._pois[e]}},getNumPois:function(){return this._numPois},getNumPages:function(){return this._numPages},getCurrentNumPois:function(){return this._currentNumPois},getPageIndex:function(){return this._pageIndex},getCityList:function(){return this._cityList},toString:function(){return"LocalResult"}});function cp(e){cM.call(this);this.localSearch=e;this.map=e._opts.renderOptions.map;this._overlays=e._overlays;this.initialize()}cp.inherits(cM,"RenderMap");ev.extend(cp.prototype,{initialize:function(){this.addEventListener("onrender",this._render)},_render:function(){if(!this.map){return}var jg=this;var jh=this.localSearch._arrPois;var jf=[];for(var je=0,e=jh.length;je<e;je++){var ji=jh[je];jf.push(ji.point);var T=this._addPoi(ji.point,je,ji.title);if(!T){continue}ji.marker=T;(function(){var i=je;T.addEventListener("click",function(){jg.localSearch.select(i)})})();this._overlays.push(T)}this.localSearch._triggerCbk(az.CBK_MARKERS_SET,jh)},addCenterPoi:function(je){var e=je;var i=this;if(e&&typeof e!="string"&&!(e instanceof cf||e instanceof b9)){var T=this.localSearch._centerMkr=e6.addCenterPoi(this.map,e.point,e.title);T.addEventListener("click",function(){i.localSearch.select(-1);i.localSearch._curIndex="c";var jf=i._createInfoWindowByPoi(je);T.openInfoWindow(jf)})}},_addPoi:function(T,e,je){if(this.localSearch._opts.pageCapacity<=ch.DEFAULT_PAGE_CAPACITY&&!this.localSearch._isMultiKey){return e6.addSearchPoi(this.map,T,e,je)}else{return e6.addSearchInBoundsPoi(this.map,T,je)}},select:function(jf){if(this.map&&jf>-1&&this._overlays[jf]){if(bK()){var i=null;for(var je=0,e=this._overlays.length;je<e;je++){i=this._overlays[je];if(jf==je){i.setIcon(i.icoActive)}else{i.setIcon(i.icoDefault)}i.draw}}else{for(var je=0,e=this._overlays.length;je<e;je++){i=this._overlays[je];i.setTop(false)}}this.map.closeInfoWindow();var jh=this.localSearch._arrPois[jf];if(!jh){return}var T=this._createInfoWindowByPoi(jh);var jg=this._overlays[jf];jg.setTop(true);jg.openInfoWindow(T)}},_createInfoWindowByPoi:function(T){var e=e6.createSearchInfoWnd({title:T.title,addr:T.address,tel:T.phoneNumber,url:T.url,detailUrl:T.detailUrl,uid:T.uid,poiType:T.type});var i=this;e.addEventListener("close",function(){i.localSearch.renderList.clearSelected()});e.addEventListener("open",function(){i.localSearch._triggerCbk(az.CBK_INFO_HTML_SET,T,e6.getInfoWindowDom(i.map))});return e},getBestViewport:function(i){var e=this.localSearch._opts.renderOptions;if(this.map){if(i.points){var jg=i.points;var je=!e.autoViewport,jf=!e.selectFirstResult&&e.autoViewport,T=this.map.getViewport(jg,{margins:[30,30,30,30]});if(!je){this.map.setViewport(T,{enableAnimation:jf})}}else{i.level=by.getBestLevel(i.level,this.map);if(e.autoViewport){this.map.centerAndZoom(i.center,i.level)}}}}});function W(e){cM.call(this);this.localSearch=e;this.panel=e._opts.renderOptions.panel;this.initialize()}W.inherits(cM,"RenderList");ev.extend(W.prototype,{initialize:function(){this.addEventListener("render",this._render)},_render:function(){if(!this.panel){return}var T=bL("div",{style:"font:12px "+w.fontFamily+";border:1px solid #999;"});var jg=bL("div",{style:"background:#fff"});var ji=bL("ol",{style:"list-style:none;padding:0;margin:0"});var jf=this.localSearch.getStatus();var e=null;if(jf==BMAP_STATUS_SUCCESS){for(var jh=0,je=this.localSearch._arrPois.length;jh<je;jh++){var jk=this._createItem(jh);ji.appendChild(jk)}}else{if(jf==BMAP_STATUS_CITY_LIST){if(jf==BMAP_STATUS_CITY_LIST&&!this.localSearch._isMultiKey){for(var jh=0,je=Math.min(6,this.localSearch._results.getCityList().length);jh<je;jh++){var jk=this._createCityItem(jh);ji.appendChild(jk)}}}else{var jj="";switch(jf){case BMAP_STATUS_UNKNOWN_LOCATION:jj="抱歉，未找到相关地点。";break;case BMAP_STATUS_INVALID_KEY:jj="抱歉，您所提供的key无效。";break}var jk=bL("li",{style:"margin:2px 0;padding:0 5px 0 3px;overflow:hidden;line-height:17px"});jk.innerHTML=jj;ji.appendChild(jk)}}jg.appendChild(ji);T.appendChild(jg);e=this._createResultsControl();T.appendChild(e);this.panel.appendChild(T);this.localSearch._triggerCbk(az.CBK_RESULTS_HTML_SET,T)},_createItem:function(jg){var e=this.localSearch._arrPois;if(!e||!e[jg]){return}var T=e[jg],jn=bL("li",{style:"margin:2px 0;padding:0 5px 5px 0px;cursor:pointer;overflow:hidden;line-height:17px;*zoom:1;"});if(this.localSearch._curIndex>-1&&jg==this.localSearch._curIndex){jn.style.backgroundColor="#f0f0f0"}var i=w.staticHost+"/wolfman/static/common/images/";i+="markers_new2x_2960fb4.png";var je="-139px";var jf=jg==0?"0px":"-"+jg*18+"px";if(this.localSearch._opts.pageCapacity>ch.DEFAULT_PAGE_CAPACITY||this.localSearch._isMultiKey){jf="-180px"}var jm=[\'<span style="background:url(\'+i+") "+jf+" "+je+\' no-repeat;background-size: 300px 300px;width:18px;height:27px;cursor:pointer;float:left;*zoom:1;overflow:hidden;margin:2px 3px 0 5px;*margin-right:0px;display:inline;">&nbsp;</span>\'];var jl,jj,jh;if(!this.localSearch._isMultiKey){jh=this.localSearch._results.keyword}else{jh=this.localSearch._ud.userKw.join("|")}var jk=new RegExp(jh,"ig");if(T.title){jl=T.title.replace(jk,"<b>$&</b>")}if(T.type==BMAP_POI_TYPE_BUSSTOP){jl+="-公交车站"}else{if(T.type==BMAP_POI_TYPE_SUBSTOP){jl+="-地铁站"}}jm.push(\'<div style="zoom:1;overflow:hidden;padding:0 5px;">\');jm.push(\'<div style="line-height:20px;font-size:12px;"><span style="color:#00c;">\'+jl+"</span>");if(T.detailUrl){jm.push(\'<a target="_blank" href="\'+T.detailUrl+\'" style="margin-left:5px;font-size:12px;color:#3d6dcc;font-weight:normal;text-decoration:none;">详情&raquo;</a>\')}jm.push("</div>");if(T.address){jj=T.address.replace(jk,"<b>$&</b>");jm.push(\'<div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;"><b style="float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;">地址:</b><span style="color:#666;display:block;zoom:1;overflow:hidden;">\'+jj+"</span></div>")}if(T.phoneNumber){jm.push(\'<div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;"><b style="float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;">电话:</b><span style="color:#666;">\'+T.phoneNumber+"</span></div>")}jm.push("</div>");jn.innerHTML=jm.join("");var ji=this;jn.onclick=function(){ji.localSearch.select(jg)};return jn},_createResultsControl:function(){var i=this;var jf=bL("div",{style:"white-space:nowrap;text-align:right;background:#e5ecf9;margin-top:5px;padding:2px;overflow:hidden;zoom:1;"});if(!this.localSearch._isMultiKey&&!this.localSearch._useCustomdata){var T=bL("a",{style:"color:#7777cc;float:right;",href:this.localSearch._results.moreResultsUrl,target:"_blank",title:"到百度地图查看更多结果"});T.innerHTML="更多结果&#187;";jf.appendChild(T)}var e=bL("div",{style:"float:left;margin-right:5px"});var je=this.localSearch._getMaxResults();if(this.localSearch._arrPois.length>0){var jg=new eg(e,function(jh){i.localSearch.gotoPage(jh-1)},{pageCount:je.getNumPages(),page:je.getPageIndex()+1,update:false})}jf.appendChild(e);return jf},clearSelected:function(){if(this.panel){if(typeof this.localSearch._curIndex=="number"&&this.localSearch._curIndex!=-1&&this.panel.getElementsByTagName("li")[this.localSearch._curIndex]){this.panel.getElementsByTagName("li")[this.localSearch._curIndex].childNodes[1].style.backgroundColor=""}}this.localSearch._curIndex=-1},select:function(i){if(this.panel){var e=this.localSearch._curIndex;if(typeof e=="number"&&e!=-1&&this.panel.getElementsByTagName("li")[e]){this.panel.getElementsByTagName("li")[e].childNodes[1].style.backgroundColor=""}if(typeof i=="number"&&i!=-1&&this.panel.getElementsByTagName("li")[i]){this.panel.getElementsByTagName("li")[i].childNodes[1].style.backgroundColor="#f0f0f0"}}},_createCityItem:function(e){var je=bL("li",{style:"margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"});je._index=e;var jf=this.localSearch._results.getCityList();je.innerHTML=\'<span style="color:#00c;text-decoration:underline"333>\'+jf[e]["city"]+\'</span> <span style="color:#666">(共\'+jf[e]["numResults"]+"条结果)</span>";var T=this.localSearch;var i=T._results;je.onclick=function(){T.setLocation(i.getCityList()[e]["city"]);T.search(i.keyword)};return je}});');
