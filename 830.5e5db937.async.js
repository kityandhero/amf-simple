"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[830],{81048:function(je,ae,m){m.d(ae,{E4:function(){return Rt},xy:function(){return Et}});var x=m(52983),$=m.t(x,2),Ce=m(51869),Te=m(83082),Q=m(59175),J=m(56503),A=m(31407),oe="%",ie=function(){function t(r){(0,Q.Z)(this,t),(0,A.Z)(this,"instanceId",void 0),(0,A.Z)(this,"cache",new Map),this.instanceId=r}return(0,J.Z)(t,[{key:"get",value:function(e){return this.cache.get(e.join(oe))||null}},{key:"update",value:function(e,n){var a=e.join(oe),o=this.cache.get(a),i=n(o);i===null?this.cache.delete(a):this.cache.set(a,i)}}]),t}(),ce=ie,_e=null,Ee="data-token-hash",F="data-css-hash",Zt="data-cache-path",X="__cssinjs_instance__";function ke(){var t=Math.random().toString(12).slice(2);if(typeof document!="undefined"&&document.head&&document.body){var r=document.body.querySelectorAll("style[".concat(F,"]"))||[],e=document.head.firstChild;Array.from(r).forEach(function(a){a[X]=a[X]||t,a[X]===t&&document.head.insertBefore(a,e)});var n={};Array.from(document.querySelectorAll("style[".concat(F,"]"))).forEach(function(a){var o=a.getAttribute(F);if(n[o]){if(a[X]===t){var i;(i=a.parentNode)===null||i===void 0||i.removeChild(a)}}else n[o]=!0})}return new ce(t)}var le=x.createContext({hashPriority:"low",cache:ke(),defaultCache:!0}),xt=function(r){var e=r.children,n=_objectWithoutProperties(r,_e),a=React.useContext(le),o=useMemo(function(){var i=_objectSpread({},a);Object.keys(n).forEach(function(s){var l=n[s];n[s]!==void 0&&(i[s]=l)});var c=n.cache;return i.cache=i.cache||ke(),i.defaultCache=!c&&a.defaultCache,i},[a,n],function(i,c){return!isEqual(i[0],c[0],!0)||!isEqual(i[1],c[1],!0)});return React.createElement(le.Provider,{value:o},e)},Re=le,ee=m(91982),V=m(4523),L=m(85726);function We(t,r){if(t.length!==r.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0}var se=function(){function t(){(0,Q.Z)(this,t),(0,A.Z)(this,"cache",void 0),(0,A.Z)(this,"keys",void 0),(0,A.Z)(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return(0,J.Z)(t,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(e){var n,a,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i={map:this.cache};return e.forEach(function(c){if(!i)i=void 0;else{var s,l;i=(s=i)===null||s===void 0||(l=s.map)===null||l===void 0?void 0:l.get(c)}}),(n=i)!==null&&n!==void 0&&n.value&&o&&(i.value[1]=this.cacheCallTimes++),(a=i)===null||a===void 0?void 0:a.value}},{key:"get",value:function(e){var n;return(n=this.internalGet(e,!0))===null||n===void 0?void 0:n[0]}},{key:"has",value:function(e){return!!this.internalGet(e)}},{key:"set",value:function(e,n){var a=this;if(!this.has(e)){if(this.size()+1>t.MAX_CACHE_SIZE+t.MAX_CACHE_OFFSET){var o=this.keys.reduce(function(l,u){var d=(0,L.Z)(l,2),h=d[1];return a.internalGet(u)[1]<h?[u,a.internalGet(u)[1]]:l},[this.keys[0],this.cacheCallTimes]),i=(0,L.Z)(o,1),c=i[0];this.delete(c)}this.keys.push(e)}var s=this.cache;e.forEach(function(l,u){if(u===e.length-1)s.set(l,{value:[n,a.cacheCallTimes++]});else{var d=s.get(l);d?d.map||(d.map=new Map):s.set(l,{map:new Map}),s=s.get(l).map}})}},{key:"deleteByPath",value:function(e,n){var a=e.get(n[0]);if(n.length===1){var o;return a.map?e.set(n[0],{map:a.map}):e.delete(n[0]),(o=a.value)===null||o===void 0?void 0:o[0]}var i=this.deleteByPath(a.map,n.slice(1));return(!a.map||a.map.size===0)&&!a.value&&e.delete(n[0]),i}},{key:"delete",value:function(e){if(this.has(e))return this.keys=this.keys.filter(function(n){return!We(n,e)}),this.deleteByPath(this.cache,e)}}]),t}();(0,A.Z)(se,"MAX_CACHE_SIZE",20),(0,A.Z)(se,"MAX_CACHE_OFFSET",5);var Mt=m(41590),Bt=0,jt=null,ue=new se;function _t(t){var r=Array.isArray(t)?t:[t];return ue.has(r)||ue.set(r,new Theme(r)),ue.get(r)}var Ae=new WeakMap;function Le(t){var r=Ae.get(t)||"";return r||(Object.keys(t).forEach(function(e){var n=t[e];r+=e,n instanceof Theme?r+=n.id:n&&_typeof(n)==="object"?r+=Le(n):r+=n}),Ae.set(t,r)),r}function Wt(t,r){return hash("".concat(r,"_").concat(Le(t)))}var _="random-".concat(Date.now(),"-").concat(Math.random()).replace(/\./g,""),de="_bAmBoO_";function fe(t,r,e){if((0,ee.Z)()){var n,a;(0,V.hq)(t,_);var o=document.createElement("div");o.style.position="fixed",o.style.left="0",o.style.top="0",r==null||r(o),document.body.appendChild(o);var i=e?e(o):(n=getComputedStyle(o).content)===null||n===void 0?void 0:n.includes(de);return(a=o.parentNode)===null||a===void 0||a.removeChild(o),(0,V.jL)(_),i}return!1}var he=void 0;function Ne(){return he===void 0&&(he=fe("@layer ".concat(_," { .").concat(_,' { content: "').concat(de,'"!important; } }'),function(t){t.className=_})),he}var ve=void 0;function He(){return ve===void 0&&(ve=fe(":where(.".concat(_,') { content: "').concat(de,'"!important; }'),function(t){t.className=_})),ve}var me=void 0;function we(){return me===void 0&&(me=fe(".".concat(_," { inset-block: 93px !important; }"),function(t){t.className=_},function(t){return getComputedStyle(t).bottom==="93px"})),me}var te=m(24856),re=m(77024),Oe=m(92252),ze=(0,re.Z)({},$),Ie=ze.useInsertionEffect,Fe=function(r,e,n){x.useMemo(r,n),(0,Oe.Z)(function(){return e(!0)},n)},De=Ie?function(t,r,e){return Ie(function(){return t(),r()},e)}:Fe,Ge=De,Ke=(0,re.Z)({},$),Ue=Ke.useInsertionEffect,Ye=function(r){var e=[],n=!1;function a(o){n||e.push(o)}return x.useEffect(function(){return n=!1,function(){n=!0,e.length&&e.forEach(function(o){return o()})}},r),a},$e=function(){return function(r){r()}},Qe=typeof Ue!="undefined"?Ye:$e,Je=Qe;function Xe(){return!1}var Ve=!1;function Nt(){return Ve}var qe=Xe;if(!1)var Ht,wt;function et(t,r,e,n,a){var o=x.useContext(Re),i=o.cache,c=[t].concat((0,te.Z)(r)),s=c.join("_"),l=Je([s]),u=qe(),d=function(f){i.update(c,function(v){var g=v||[],b=(0,L.Z)(g,2),I=b[0],k=I===void 0?0:I,P=b[1],M=P,C=M||e(),T=[k,C];return f?f(T):T})};x.useMemo(function(){d()},[s]);var h=i.get(c),p=h[1];return Ge(function(){a==null||a(p)},function(S){return d(function(f){var v=(0,L.Z)(f,2),g=v[0],b=v[1];return S&&g===0&&(a==null||a(p)),[g+1,b]}),function(){i.update(c,function(f){var v=f||[],g=(0,L.Z)(v,2),b=g[0],I=b===void 0?0:b,k=g[1],P=I-1;return P===0?(l(function(){return n==null?void 0:n(k,!1)}),null):[I-1,k]})}},[s]),p}var tt={},rt=null,D=new Map;function nt(t){D.set(t,(D.get(t)||0)+1)}function at(t,r){if(typeof document!="undefined"){var e=document.querySelectorAll("style[".concat(ATTR_TOKEN,'="').concat(t,'"]'));e.forEach(function(n){if(n[CSS_IN_JS_INSTANCE]===r){var a;(a=n.parentNode)===null||a===void 0||a.removeChild(n)}})}}var ot=0;function it(t,r){D.set(t,(D.get(t)||0)-1);var e=Array.from(D.keys()),n=e.filter(function(a){var o=D.get(a)||0;return o<=0});e.length-n.length>ot&&n.forEach(function(a){at(a,r),D.delete(a)})}var ct=function(r,e,n,a){var o=n.getDerivativeToken(r),i=_objectSpread(_objectSpread({},o),e);return a&&(i=a(i)),i};function Ot(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=useContext(StyleContext),a=n.cache.instanceId,o=e.salt,i=o===void 0?"":o,c=e.override,s=c===void 0?tt:c,l=e.formatToken,u=e.getComputedToken,d=React.useMemo(function(){return Object.assign.apply(Object,[{}].concat(_toConsumableArray(r)))},[r]),h=React.useMemo(function(){return flattenToken(d)},[d]),p=React.useMemo(function(){return flattenToken(s)},[s]),S=useGlobalCache("token",[i,t.id,h,p],function(){var f=u?u(d,s,t):ct(d,s,t,l),v=token2key(f,i);f._tokenKey=v,nt(v);var g="".concat(rt,"-").concat(hash(v));return f._hashId=g,[f,g]},function(f){it(f[0]._tokenKey,a)});return S}var lt=m(54805),pe=m(40875),st=m(77116),ut=m(82785),Pe=m(71790),dt=m(26471);function zt(t,r){var e=r.path,n=r.parentSelectors;devWarning(!1,"[Ant Design CSS-in-JS] ".concat(e?"Error in ".concat(e,": "):"").concat(t).concat(n.length?" Selector: ".concat(n.join(" | ")):""))}var Ft=function(r,e,n){if(r==="content"){var a=/(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,o=["normal","none","initial","inherit","unset"];(typeof e!="string"||o.indexOf(e)===-1&&!a.test(e)&&(e.charAt(0)!==e.charAt(e.length-1)||e.charAt(0)!=='"'&&e.charAt(0)!=="'"))&&lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e,"\"'`."),n)}},Dt=null,Gt=function(r,e,n){r==="animation"&&n.hashId&&e!=="none"&&lintWarning("You seem to be using hashed animation '".concat(e,"', in which case 'animationName' with Keyframe as value is recommended."),n)},Kt=null;function ft(t){var r,e=((r=t.match(/:not\(([^)]*)\)/))===null||r===void 0?void 0:r[1])||"",n=e.split(/(\[[^[]*])|(?=[.#])/).filter(function(a){return a});return n.length>1}function ht(t){return t.parentSelectors.reduce(function(r,e){return r?e.includes("&")?e.replace(/&/g,r):"".concat(r," ").concat(e):e},"")}var Ut=function(r,e,n){var a=ht(n),o=a.match(/:not\([^)]*\)/g)||[];o.length>0&&o.some(ft)&&lintWarning("Concat ':not' selector not support in legacy browsers.",n)},Yt=null,$t=function(r,e,n){switch(r){case"marginLeft":case"marginRight":case"paddingLeft":case"paddingRight":case"left":case"right":case"borderLeft":case"borderLeftWidth":case"borderLeftStyle":case"borderLeftColor":case"borderRight":case"borderRightWidth":case"borderRightStyle":case"borderRightColor":case"borderTopLeftRadius":case"borderTopRightRadius":case"borderBottomLeftRadius":case"borderBottomRightRadius":lintWarning("You seem to be using non-logical property '".concat(r,"' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."),n);return;case"margin":case"padding":case"borderWidth":case"borderStyle":if(typeof e=="string"){var a=e.split(" ").map(function(c){return c.trim()});a.length===4&&a[1]!==a[3]&&lintWarning("You seem to be using '".concat(r,"' property with different left ").concat(r," and right ").concat(r,", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."),n)}return;case"clear":case"textAlign":(e==="left"||e==="right")&&lintWarning("You seem to be using non-logical value '".concat(e,"' of ").concat(r,", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."),n);return;case"borderRadius":if(typeof e=="string"){var o=e.split("/").map(function(c){return c.trim()}),i=o.reduce(function(c,s){if(c)return c;var l=s.split(" ").map(function(u){return u.trim()});return l.length>=2&&l[0]!==l[1]||l.length===3&&l[1]!==l[2]||l.length===4&&l[2]!==l[3]?!0:c},!1);i&&lintWarning("You seem to be using non-logical value '".concat(e,"' of ").concat(r,", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."),n)}return;default:}},Qt=null,Jt=function(r,e,n){n.parentSelectors.some(function(a){var o=a.split(",");return o.some(function(i){return i.split("&").length>2})})&&lintWarning("Should not use more than one `&` in a selector.",n)},Xt=null,Ze="data-ant-cssinjs-cache-path",xe="_FILE_STYLE__";function Vt(t){return Object.keys(t).map(function(r){var e=t[r];return"".concat(r,":").concat(e)}).join(";")}var w,ge=!0;function qt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;w=t,ge=r}function vt(){if(!w&&(w={},(0,ee.Z)())){var t=document.createElement("div");t.className=Ze,t.style.position="fixed",t.style.visibility="hidden",t.style.top="-9999px",document.body.appendChild(t);var r=getComputedStyle(t).content||"";r=r.replace(/^"/,"").replace(/"$/,""),r.split(";").forEach(function(a){var o=a.split(":"),i=(0,L.Z)(o,2),c=i[0],s=i[1];w[c]=s});var e=document.querySelector("style[".concat(Ze,"]"));if(e){var n;ge=!1,(n=e.parentNode)===null||n===void 0||n.removeChild(e)}document.body.removeChild(t)}}function mt(t){return vt(),!!w[t]}function pt(t){var r=w[t],e=null;if(r&&(0,ee.Z)())if(ge)e=xe;else{var n=document.querySelector("style[".concat(F,'="').concat(w[t],'"]'));n?e=n.innerHTML:delete w[t]}return[e,r]}var Me=(0,ee.Z)(),gt="_skip_check_",Be="_multi_value_";function ye(t){var r=(0,Pe.q)((0,dt.MY)(t),Pe.P);return r.replace(/\{%%%\:[^;];}/g,";")}function yt(t){return(0,pe.Z)(t)==="object"&&t&&(gt in t||Be in t)}function St(t,r,e){if(!r)return t;var n=".".concat(r),a=e==="low"?":where(".concat(n,")"):n,o=t.split(",").map(function(i){var c,s=i.trim().split(/\s+/),l=s[0]||"",u=((c=l.match(/^\w+/))===null||c===void 0?void 0:c[0])||"";return l="".concat(u).concat(a).concat(l.slice(u.length)),[l].concat((0,te.Z)(s.slice(1))).join(" ")});return o.join(",")}var bt=function t(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},a=n.root,o=n.injectHash,i=n.parentSelectors,c=e.hashId,s=e.layer,l=e.path,u=e.hashPriority,d=e.transformers,h=d===void 0?[]:d,p=e.linters,S=p===void 0?[]:p,f="",v={};function g(M){var C=M.getName(c);if(!v[C]){var T=t(M.style,e,{root:!1,parentSelectors:i}),B=(0,L.Z)(T,1),y=B[0];v[C]="@keyframes ".concat(M.getName(c)).concat(y)}}function b(M){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return M.forEach(function(T){Array.isArray(T)?b(T,C):T&&C.push(T)}),C}var I=b(Array.isArray(r)?r:[r]);if(I.forEach(function(M){var C=typeof M=="string"&&!a?{}:M;if(typeof C=="string")f+="".concat(C,`
`);else if(C._keyframe)g(C);else{var T=h.reduce(function(B,y){var O;return(y==null||(O=y.visit)===null||O===void 0?void 0:O.call(y,B))||B},C);Object.keys(T).forEach(function(B){var y=T[B];if((0,pe.Z)(y)==="object"&&y&&(B!=="animationName"||!y._keyframe)&&!yt(y)){var O=!1,E=B.trim(),R=!1;(a||o)&&c?E.startsWith("@")?O=!0:E=St(B,c,u):a&&!c&&(E==="&"||E==="")&&(E="",R=!0);var Z=t(y,e,{root:R,injectHash:O,parentSelectors:[].concat((0,te.Z)(i),[E])}),z=(0,L.Z)(Z,2),q=z[0],U=z[1];v=(0,re.Z)((0,re.Z)({},v),U),f+="".concat(E).concat(q)}else{let G=function(j,H){var be=j.replace(/[A-Z]/g,function(Pt){return"-".concat(Pt.toLowerCase())}),Y=H;!ut.Z[j]&&typeof Y=="number"&&Y!==0&&(Y="".concat(Y,"px")),j==="animationName"&&H!==null&&H!==void 0&&H._keyframe&&(g(H),Y=H.getName(c)),f+="".concat(be,":").concat(Y,";")};var W,N=(W=y==null?void 0:y.value)!==null&&W!==void 0?W:y;(0,pe.Z)(y)==="object"&&y!==null&&y!==void 0&&y[Be]&&Array.isArray(N)?N.forEach(function(j){G(B,j)}):G(B,N)}})}}),!a)f="{".concat(f,"}");else if(s&&Ne()){var k=s.split(","),P=k[k.length-1].trim();f="@layer ".concat(P," {").concat(f,"}"),k.length>1&&(f="@layer ".concat(s,"{%%%:%}").concat(f))}return[f,v]};function Ct(t,r){return(0,st.Z)("".concat(t.join("%")).concat(r))}function Tt(){return null}function Et(t,r){var e=t.token,n=t.path,a=t.hashId,o=t.layer,i=t.nonce,c=t.clientOnly,s=t.order,l=s===void 0?0:s,u=x.useContext(Re),d=u.autoClear,h=u.mock,p=u.defaultCache,S=u.hashPriority,f=u.container,v=u.ssrInline,g=u.transformers,b=u.linters,I=u.cache,k=e._tokenKey,P=[k].concat((0,te.Z)(n)),M=Me,C=et("style",P,function(){var E=P.join("|");if(mt(E)){var R=pt(E),Z=(0,L.Z)(R,2),z=Z[0],q=Z[1];if(z)return[z,k,q,{},c,l]}var U=r(),W=bt(U,{hashId:a,hashPriority:S,layer:o,path:n.join("-"),transformers:g,linters:b}),N=(0,L.Z)(W,2),G=N[0],j=N[1],H=ye(G),be=Ct(P,H);return[H,k,be,j,c,l]},function(E,R){var Z=(0,L.Z)(E,3),z=Z[2];(R||d)&&Me&&(0,V.jL)(z,{mark:F})},function(E){var R=(0,L.Z)(E,4),Z=R[0],z=R[1],q=R[2],U=R[3];if(M&&Z!==xe){var W={mark:F,prepend:"queue",attachTo:f,priority:l},N=typeof i=="function"?i():i;N&&(W.csp={nonce:N});var G=(0,V.hq)(Z,q,W);G[X]=I.instanceId,G.setAttribute(Ee,k),Object.keys(U).forEach(function(j){(0,V.hq)(ye(U[j]),"_effect-".concat(j),W)})}}),T=(0,L.Z)(C,3),B=T[0],y=T[1],O=T[2];return function(E){var R;if(!v||M||!p)R=x.createElement(Tt,null);else{var Z;R=x.createElement("style",(0,lt.Z)({},(Z={},(0,A.Z)(Z,Ee,y),(0,A.Z)(Z,F,O),Z),{dangerouslySetInnerHTML:{__html:B}}))}return x.createElement(x.Fragment,null,R,E)}}function er(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e="style%",n=Array.from(t.cache.keys()).filter(function(l){return l.startsWith(e)}),a={},o={},i="";function c(l,u,d){var h,p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},S=_objectSpread(_objectSpread({},p),{},(h={},_defineProperty(h,ATTR_TOKEN,u),_defineProperty(h,ATTR_MARK,d),h)),f=Object.keys(S).map(function(v){var g=S[v];return g?"".concat(v,'="').concat(g,'"'):null}).filter(function(v){return v}).join(" ");return r?l:"<style ".concat(f,">").concat(l,"</style>")}var s=n.map(function(l){var u=l.slice(e.length).replace(/%/g,"|"),d=_slicedToArray(t.cache.get(l)[1],6),h=d[0],p=d[1],S=d[2],f=d[3],v=d[4],g=d[5];if(v)return null;var b={"data-rc-order":"prependQueue","data-rc-priority":"".concat(g)},I=c(h,p,S,b);o[u]=S,f&&Object.keys(f).forEach(function(P){a[P]||(a[P]=!0,I+=c(ye(f[P]),p,"_effect-".concat(P),b))});var k=[g,I];return k}).filter(function(l){return l});return s.sort(function(l,u){return l[0]-u[0]}).forEach(function(l){var u=_slicedToArray(l,2),d=u[1];i+=d}),i+=c(".".concat(ATTR_CACHE_MAP,'{content:"').concat(serializeCacheMap(o),'";}'),void 0,void 0,_defineProperty({},ATTR_CACHE_MAP,ATTR_CACHE_MAP)),i}var kt=function(){function t(r,e){(0,Q.Z)(this,t),(0,A.Z)(this,"name",void 0),(0,A.Z)(this,"style",void 0),(0,A.Z)(this,"_keyframe",!0),this.name=r,this.style=e}return(0,J.Z)(t,[{key:"getName",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e?"".concat(e,"-").concat(this.name):this.name}}]),t}(),Rt=kt;function At(t){if(typeof t=="number")return[[t],!1];var r=String(t).trim(),e=r.match(/(.*)(!important)/),n=(e?e[1]:r).trim().split(/\s+/),a="",o=0;return[n.reduce(function(i,c){return c.includes("(")?(a+=c,o+=c.split("(").length-1):c.includes(")")?(a+=c,o-=c.split(")").length-1,o===0&&(i.push(a),a="")):o>0?a+=c:i.push(c),i},[]),!!e]}function K(t){return t.notSplit=!0,t}var Lt={inset:["top","right","bottom","left"],insetBlock:["top","bottom"],insetBlockStart:["top"],insetBlockEnd:["bottom"],insetInline:["left","right"],insetInlineStart:["left"],insetInlineEnd:["right"],marginBlock:["marginTop","marginBottom"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],marginInline:["marginLeft","marginRight"],marginInlineStart:["marginLeft"],marginInlineEnd:["marginRight"],paddingBlock:["paddingTop","paddingBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"],paddingInline:["paddingLeft","paddingRight"],paddingInlineStart:["paddingLeft"],paddingInlineEnd:["paddingRight"],borderBlock:K(["borderTop","borderBottom"]),borderBlockStart:K(["borderTop"]),borderBlockEnd:K(["borderBottom"]),borderInline:K(["borderLeft","borderRight"]),borderInlineStart:K(["borderLeft"]),borderInlineEnd:K(["borderRight"]),borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndWidth:["borderBottomWidth"],borderInlineWidth:["borderLeftWidth","borderRightWidth"],borderInlineStartWidth:["borderLeftWidth"],borderInlineEndWidth:["borderRightWidth"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderBlockStartStyle:["borderTopStyle"],borderBlockEndStyle:["borderBottomStyle"],borderInlineStyle:["borderLeftStyle","borderRightStyle"],borderInlineStartStyle:["borderLeftStyle"],borderInlineEndStyle:["borderRightStyle"],borderBlockColor:["borderTopColor","borderBottomColor"],borderBlockStartColor:["borderTopColor"],borderBlockEndColor:["borderBottomColor"],borderInlineColor:["borderLeftColor","borderRightColor"],borderInlineStartColor:["borderLeftColor"],borderInlineEndColor:["borderRightColor"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"]};function ne(t,r){var e=t;return r&&(e="".concat(e," !important")),{_skip_check_:!0,value:e}}var tr={visit:function(r){var e={};return Object.keys(r).forEach(function(n){var a=r[n],o=Lt[n];if(o&&(typeof a=="number"||typeof a=="string")){var i=At(a),c=(0,L.Z)(i,2),s=c[0],l=c[1];o.length&&o.notSplit?o.forEach(function(u){e[u]=ne(a,l)}):o.length===1?e[o[0]]=ne(a,l):o.length===2?o.forEach(function(u,d){var h;e[u]=ne((h=s[d])!==null&&h!==void 0?h:s[0],l)}):o.length===4?o.forEach(function(u,d){var h,p;e[u]=ne((h=(p=s[d])!==null&&p!==void 0?p:s[d-2])!==null&&h!==void 0?h:s[0],l)}):e[n]=a}else e[n]=a}),e}},rr=null,Se=/url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;function It(t,r){var e=Math.pow(10,r+1),n=Math.floor(t*e);return Math.round(n/10)*10/e}var nr=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.rootValue,n=e===void 0?16:e,a=r.precision,o=a===void 0?5:a,i=r.mediaQuery,c=i===void 0?!1:i,s=function(d,h){if(!h)return d;var p=parseFloat(h);if(p<=1)return d;var S=It(p/n,o);return"".concat(S,"rem")},l=function(d){var h=_objectSpread({},d);return Object.entries(d).forEach(function(p){var S=_slicedToArray(p,2),f=S[0],v=S[1];if(typeof v=="string"&&v.includes("px")){var g=v.replace(Se,s);h[f]=g}!unitless[f]&&typeof v=="number"&&v!==0&&(h[f]="".concat(v,"px").replace(Se,s));var b=f.trim();if(b.startsWith("@")&&b.includes("px")&&c){var I=f.replace(Se,s);h[I]=h[f],delete h[f]}}),h};return{visit:l}},ar=null,or={supportModernCSS:function(){return He()&&we()}}},95072:function(je,ae,m){m.d(ae,{Z:function(){return A}});var x=m(54805),$=m(52983),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},Te=Ce,Q=m(45346),J=function(ie,ce){return $.createElement(Q.Z,(0,x.Z)({},ie,{ref:ce,icon:Te}))},A=$.forwardRef(J)}}]);