(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[15],{597:function(t,e,n){(function(e){var n="[object Map]",r="[object Set]",a=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,o="[".concat("\\ud800-\\udfff","]"),u="[".concat("\\u0300-\\u036f\\ufe20-\\ufe23").concat("\\u20d0-\\u20f0","]"),i="\\ud83c[\\udffb-\\udfff]",l="(?:".concat(u,"|").concat(i,")"),f="[^".concat("\\ud800-\\udfff","]"),s="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",m="".concat(l,"?"),h="[".concat("\\ufe0e\\ufe0f","]?"),d=h+m+"(?:".concat("\\u200d","(?:").concat([f,s,p].join("|"),")").concat(h).concat(m,")*"),g="(?:".concat(["".concat(f+u,"?"),u,s,p,o].join("|"),")"),v=RegExp("".concat(i,"(?=").concat(i,")|").concat(g).concat(d),"g"),b=RegExp("[".concat("\\u200d").concat("\\ud800-\\udfff").concat("\\u0300-\\u036f\\ufe20-\\ufe23").concat("\\u20d0-\\u20f0").concat("\\ufe0e\\ufe0f","]")),j="object"===typeof e&&e&&e.Object===Object&&e||Function("return this")();function y(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}(e,(function(e){return t[e]}))}function E(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function O(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function S(t){return function(t){return b.test(t)}(t)?function(t){return t.match(v)||[]}(t):function(t){return t.split("")}(t)}var w,x,C=Function.prototype,k=Object.prototype,A=j["__core-js_shared__"],F=function(){var t=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||"");return t?"Symbol(src)_1.".concat(t):""}(),P=C.toString,T=k.hasOwnProperty,$=k.toString,_=RegExp("^".concat(P.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),"$")),W=j.Symbol,B=W?W.iterator:void 0,M=k.propertyIsEnumerable,R=(w=Object.keys,x=Object,function(t){return w(x(t))}),I=X(j,"DataView"),V=X(j,"Map"),z=X(j,"Promise"),D=X(j,"Set"),N=X(j,"WeakMap"),G=tt(I),J=tt(V),L=tt(z),q=tt(D),H=tt(N);function K(t,e){var n=et(t)||function(t){return function(t){return ct(t)&&nt(t)}(t)&&T.call(t,"callee")&&(!M.call(t,"callee")||"[object Arguments]"===$.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,a=!!r;for(var c in t)!e&&!T.call(t,c)||a&&("length"===c||Z(c,r))||n.push(c);return n}function Q(t){return!(!at(t)||function(t){return!!F&&F in t}(t))&&(rt(t)||function(t){var e=!1;if(null!==t&&"function"!==typeof t.toString)try{e=!!"".concat(t)}catch(n){}return e}(t)?_:a).test(tt(t))}function U(t){if(!function(t){var e=t&&t.constructor,n="function"===typeof e&&e.prototype||k;return t===n}(t))return R(t);var e=[];for(var n in Object(t))T.call(t,n)&&"constructor"!==n&&e.push(n);return e}function X(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Q(n)?n:void 0}var Y=function(t){return $.call(t)};function Z(t,e){return!!(e=null==e?9007199254740991:e)&&("number"===typeof t||c.test(t))&&t>-1&&t%1===0&&t<e}function tt(t){if(null!==t){try{return P.call(t)}catch(e){}try{return"".concat(t)}catch(e){}}return""}(I&&"[object DataView]"!==Y(new I(new ArrayBuffer(1)))||V&&Y(new V)!==n||z&&"[object Promise]"!==Y(z.resolve())||D&&Y(new D)!==r||N&&"[object WeakMap]"!==Y(new N))&&(Y=function(t){var e=$.call(t),a="[object Object]"===e?t.constructor:void 0,c=a?tt(a):void 0;if(c)switch(c){case G:return"[object DataView]";case J:return n;case L:return"[object Promise]";case q:return r;case H:return"[object WeakMap]";default:return}return e});var et=Array.isArray;function nt(t){return null!=t&&function(t){return"number"===typeof t&&t>-1&&t%1===0&&t<=9007199254740991}(t.length)&&!rt(t)}function rt(t){var e=at(t)?$.call(t):"";return"[object Function]"===e||"[object GeneratorFunction]"===e}function at(t){var e=typeof t;return!!t&&("object"===e||"function"===e)}function ct(t){return!!t&&"object"===typeof t}function ot(t){return t?y(t,function(t){return nt(t)?K(t):U(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(nt(t))return function(t){return"string"===typeof t||!et(t)&&ct(t)&&"[object String]"===$.call(t)}(t)?S(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(B&&t[B])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[B]());var e=Y(t);return(e===n?E:e===r?O:ot)(t)}}).call(this,n(45))},710:function(t,e,n){"use strict";n.r(e);var r=n(80),a=n(14),c=n(84),o=n(82),u=n(111),i=n(0),l=n.n(i),f=(n(595),n(612)),s=n(684),p=n(296),m=n(653),h=n(242),d=n(650),g=n(702),v=n(23),b=n(598),j=n.n(b),y=n(112),E=n.n(y),O=n(597),S=n.n(O);var w=function(t){return S()(t).length},x=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={open:!1,value:"",characters:0},t.onSelectEmoji=function(e){var n,r=t.state.value,a=t.props,c=a.maxCharacters,o=a.onChange;r+=e.native,c&&(n=w(r))>c||(o&&o(r,n),t.setState({value:r,characters:n}))},t.handleTextFieldChange=function(e){var n,r=t.props,a=r.maxCharacters,c=r.onChange,o=e.target.value;a&&(n=w(o))>a||(c&&c(o,n),t.setState({value:o,characters:n}))},t.emojisToShowFilter=function(t){return!(t.unified.length>5)},t.toggleOpen=function(){var e=t.state.open;t.setState({open:!e})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.open,n=t.value,r=t.characters,a=this.props,c=a.theme,o=a.classes,u=a.rightContent,v=a.placeholder,b=a.maxCharacters,y=a.emojiSet,O=a.inputClassName;return l.a.createElement(i.Fragment,null,l.a.createElement(s.a,{spacing:0,container:!0},l.a.createElement(s.a,{item:!0,xs:u?8:12,sm:u?9:12,lg:u?10:12,className:o.relative},l.a.createElement(p.a,{fullWidth:!0,multiline:!0,variant:"outlined",rows:6,onInput:this.handleTextFieldChange,value:n,placeholder:v,InputProps:{classes:{notchedOutline:O||null}}}),l.a.createElement("div",{className:o.floatButtonWrapper},l.a.createElement(m.a,{onClick:this.toggleOpen},e?l.a.createElement(E.a,{color:"primary"}):l.a.createElement(j.a,{color:"primary"})))),u&&l.a.createElement(s.a,{item:!0,xs:4,sm:3,lg:2},u)),b&&l.a.createElement(h.a,{error:r>=b},"".concat(r,"/").concat(b," characters")),l.a.createElement(d.a,{in:e},l.a.createElement(g.a,{mt:1},l.a.createElement(f.a,{set:y,color:c.palette.primary.main,style:{width:"100%"},onSelect:this.onSelectEmoji,emojisToShowFilter:this.emojisToShowFilter}))))}}]),n}(i.PureComponent);e.default=Object(v.a)((function(t){return{"@global":{".emoji-mart-category-label":t.typography.body1,".emoji-mart-bar":{display:"none !important"},".emoji-mart-search input":Object(u.a)({},t.typography.body1,{},t.border),".emoji-mart-search":{marginTop:"".concat(t.spacing(1),"px !important"),paddingRight:"".concat(t.spacing(1),"px !important"),paddingLeft:"".concat(t.spacing(1),"px !important"),paddingBottom:"".concat(t.spacing(1),"px !important")},".emoji-mart-search-icon":{top:"5px !important",right:"14px !important",fontSize:20},".emoji-mart-scroll":{height:240},".emoji-mart":Object(u.a)({},t.border)},floatButtonWrapper:{position:"absolute",bottom:12,right:12},floatButtonSVG:{color:t.palette.primary.light},relative:{position:"relative"}}}),{withTheme:!0})(x)}}]);
//# sourceMappingURL=15.a28354f6.chunk.js.map