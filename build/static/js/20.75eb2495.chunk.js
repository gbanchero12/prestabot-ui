(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[20],{695:function(o,e,r){"use strict";r.r(e);var t=r(80),p=r(14),i=r(84),c=r(82),n=r(0),a=r.n(n),s=r(599),l=r.n(s),h=r(23),d=r(235),u={cropperWrapper:{"& img":{height:"auto",width:"100%",maxWidth:"100%"}},"@global":{".cropper-container":{direction:"ltr",fontSize:"0",lineHeight:"0",position:"relative",M:"none",touchAction:"none",W:"none",fallbacks:[{M:"none"},{M:"none"}],userSelect:"none"},".cropper-container img":{display:"block",height:"100%",imageOrientation:"0deg",maxHeight:"none !important",maxWidth:"none !important",minHeight:"0 !important",minWidth:"0 !important",width:"100%"},".cropper-wrap-box, .cropper-canvas, .cropper-drag-box, .cropper-crop-box, .cropper-modal":{bottom:"0",left:"0",position:"absolute",right:"0",top:"0"},".cropper-wrap-box, .cropper-canvas":{overflow:"hidden"},".cropper-drag-box":{backgroundColor:"#fff",opacity:"0"},".cropper-modal":{backgroundColor:"#000",opacity:"0.5"},".cropper-view-box":{display:"block",height:"100%",outline:function(o){return"1px solid ".concat(o.color)},outlineColor:function(o){return"1px solid ".concat(Object(d.a)(o.color,.75))},overflow:"hidden",width:"100%"},".cropper-dashed":{border:"0 dashed #eee",display:"block",opacity:"0.5",position:"absolute"},".cropper-dashed.dashed-h":{borderBottomWidth:1,borderTopWidth:1,height:"calc(100% / 3)",left:"0",top:"calc(100% / 3)",width:"100%"},".cropper-dashed.dashed-v":{borderLeftWidth:1,borderRightWidth:1,height:"100%",left:"calc(100% / 3)",top:"0",width:"calc(100% / 3)"},".cropper-center":{display:"block",height:"0",left:"50%",opacity:"0.75",position:"absolute",top:"50%",width:"0"},".cropper-center::before, .cropper-center::after":{backgroundColor:"#eee",content:"' '",display:"block",position:"absolute"},".cropper-center::before":{height:1,left:-3,top:"0",width:7},".cropper-center::after":{height:7,left:"0",top:-3,width:1},".cropper-face, .cropper-line, .cropper-point":{display:"block",height:"100%",opacity:"0.1",position:"absolute",width:"100%"},".cropper-face":{backgroundColor:"#fff",left:"0",top:"0"},".cropper-line":{backgroundColor:function(o){return o.color}},".cropper-line.line-e":{cursor:"ew-resize",right:-3,top:"0",width:5},".cropper-line.line-n":{cursor:"ns-resize",height:5,left:"0",top:-3},".cropper-line.line-w":{cursor:"ew-resize",left:-3,top:"0",width:5},".cropper-line.line-s":{bottom:-3,cursor:"ns-resize",height:5,left:"0"},".cropper-point":{backgroundColor:function(o){return o.color},height:5,opacity:"0.75",width:5},".cropper-point.point-e":{cursor:"ew-resize",marginTop:-3,right:-3,top:"50%"},".cropper-point.point-n":{cursor:"ns-resize",left:"50%",marginLeft:-3,top:-3},".cropper-point.point-w":{cursor:"ew-resize",left:-3,marginTop:-3,top:"50%"},".cropper-point.point-s":{bottom:-3,cursor:"s-resize",left:"50%",marginLeft:-3},".cropper-point.point-ne":{cursor:"nesw-resize",right:-3,top:-3},".cropper-point.point-nw":{cursor:"nwse-resize",left:-3,top:-3},".cropper-point.point-sw":{bottom:-3,cursor:"nesw-resize",left:-3},".cropper-point.point-se":{bottom:-3,cursor:"nwse-resize",height:20,opacity:"1",right:-3,width:20},"@media (min-width: 768px)":{".cropper-point.point-se":{height:15,width:15}},"@media (min-width: 992px)":{".cropper-point.point-se":{height:10,width:10}},"@media (min-width: 1200px)":{".cropper-point.point-se":{height:5,opacity:"0.75",width:5}},".cropper-point.point-se::before":{backgroundColor:function(o){return o.color},bottom:"-50%",content:"' '",display:"block",height:"200%",opacity:"0",position:"absolute",right:"-50%",width:"200%"},".cropper-invisible":{opacity:"0"},".cropper-bg":{backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC')"},".cropper-hide":{display:"block",height:"0",position:"absolute",width:"0"},".cropper-hidden":{display:"none !important"},".cropper-move":{cursor:"move"},".cropper-crop":{cursor:"crosshair"},".cropper-disabled .cropper-drag-box, .cropper-disabled .cropper-face, .cropper-disabled .cropper-line, .cropper-disabled .cropper-point":{cursor:"not-allowed"}}},b=function(o){Object(c.a)(r,o);var e=Object(i.a)(r);function r(){var o;Object(t.a)(this,r);for(var p=arguments.length,i=new Array(p),c=0;c<p;c++)i[c]=arguments[c];return(o=e.call.apply(e,[this].concat(i))).crop=function(){(0,o.props.onCrop)(o.cropper.getCroppedCanvas().toDataURL())},o}return Object(p.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.setCropFunction)(this.crop)}},{key:"render",value:function(){var o=this,e=this.props,r=e.classes,t=e.src,p=e.aspectRatio;return a.a.createElement("div",{className:r.cropperWrapper},a.a.createElement(l.a,{ref:function(e){o.cropper=e},src:t,guides:!1,zoomable:!1,viewMode:3,aspectRatio:p,cropmove:p?null:function(){var e=o.cropper.getCropBoxData(),r=e.width,t=r/e.height;t<1?o.cropper.setCropBoxData({height:r/1}):t>16/9&&o.cropper.setCropBoxData({height:r/(16/9)})}}))}}]),r}(n.PureComponent);e.default=Object(h.a)(u)(b)}}]);
//# sourceMappingURL=20.75eb2495.chunk.js.map