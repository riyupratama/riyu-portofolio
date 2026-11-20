(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ba(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},Dt=[],Ge=()=>{},xo=()=>!1,ar=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ya=e=>e.startsWith("onUpdate:"),me=Object.assign,xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jl=Object.prototype.hasOwnProperty,G=(e,t)=>Jl.call(e,t),B=Array.isArray,Rt=e=>ir(e)==="[object Map]",_o=e=>ir(e)==="[object Set]",W=e=>typeof e=="function",de=e=>typeof e=="string",yt=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",wo=e=>(ie(e)||W(e))&&W(e.then)&&W(e.catch),So=Object.prototype.toString,ir=e=>So.call(e),Zl=e=>ir(e).slice(8,-1),Ao=e=>ir(e)==="[object Object]",_a=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,en=ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ql=/-\w/g,pt=or(e=>e.replace(Ql,t=>t.slice(1).toUpperCase())),ef=/\B([A-Z])/g,xt=or(e=>e.replace(ef,"-$1").toLowerCase()),Co=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sr=or(e=>e?`on${Co(e)}`:""),mt=(e,t)=>!Object.is(e,t),Ar=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Po=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},tf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},nf=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let ri;const sr=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wa(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?sf(r):wa(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(de(e)||ie(e))return e}const rf=/;(?![^(]*\))/g,af=/:([^]+)/,of=/\/\*[^]*?\*\//g;function sf(e){const t={};return e.replace(of,"").split(rf).forEach(n=>{if(n){const r=n.split(af);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function lr(e){let t="";if(de(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=lr(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ff=ba(lf);function Io(e){return!!e||e===""}const Eo=e=>!!(e&&e.__v_isRef===!0),Me=e=>de(e)?e:e==null?"":B(e)||ie(e)&&(e.toString===So||!W(e.toString))?Eo(e)?Me(e.value):JSON.stringify(e,ko,2):String(e),ko=(e,t)=>Eo(t)?ko(e,t.value):Rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[Cr(r,i)+" =>"]=a,n),{})}:_o(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Cr(n))}:yt(t)?Cr(t):ie(t)&&!B(t)&&!Ao(t)?String(t):t,Cr=(e,t="")=>{var n;return yt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ie;class cf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){this._on>0&&--this._on===0&&(Ie=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function uf(){return Ie}let ne;const Pr=new WeakSet;class To{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&Ie.active&&Ie.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pr.has(this)&&(Pr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ai(this),jo(this);const t=ne,n=$e;ne=this,$e=!0;try{return this.fn()}finally{Mo(this),ne=t,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ca(t);this.deps=this.depsTail=void 0,ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hr(this)&&this.run()}get dirty(){return Hr(this)}}let Oo=0,tn,nn;function Fo(e,t=!1){if(e.flags|=8,t){e.next=nn,nn=e;return}e.next=tn,tn=e}function Sa(){Oo++}function Aa(){if(--Oo>0)return;if(nn){let t=nn;for(nn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;tn;){let t=tn;for(tn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function jo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Mo(e){let t,n=e.depsTail,r=n;for(;r;){const a=r.prevDep;r.version===-1?(r===n&&(n=a),Ca(r),df(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}e.deps=t,e.depsTail=n}function Hr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($o(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $o(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===dn)||(e.globalVersion=dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Hr(e))))return;e.flags|=2;const t=e.dep,n=ne,r=$e;ne=e,$e=!0;try{jo(e);const a=e.fn(e._value);(t.version===0||mt(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{ne=n,$e=r,Mo(e),e.flags&=-3}}function Ca(e,t=!1){const{dep:n,prevSub:r,nextSub:a}=e;if(r&&(r.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ca(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function df(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $e=!0;const zo=[];function tt(){zo.push($e),$e=!1}function nt(){const e=zo.pop();$e=e===void 0?!0:e}function ai(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let dn=0;class mf{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!$e||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new mf(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Lo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(t){this.version++,dn++,this.notify(t)}notify(t){Sa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Aa()}}}function Lo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Lo(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Wr=new WeakMap,Ot=Symbol(""),Ur=Symbol(""),mn=Symbol("");function be(e,t,n){if($e&&ne){let r=Wr.get(e);r||Wr.set(e,r=new Map);let a=r.get(n);a||(r.set(n,a=new Pa),a.map=r,a.key=n),a.track()}}function et(e,t,n,r,a,i){const o=Wr.get(e);if(!o){dn++;return}const s=l=>{l&&l.trigger()};if(Sa(),t==="clear")o.forEach(s);else{const l=B(e),c=l&&_a(n);if(l&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===mn||!yt(p)&&p>=f)&&s(d)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),c&&s(o.get(mn)),t){case"add":l?c&&s(o.get("length")):(s(o.get(Ot)),Rt(e)&&s(o.get(Ur)));break;case"delete":l||(s(o.get(Ot)),Rt(e)&&s(o.get(Ur)));break;case"set":Rt(e)&&s(o.get(Ot));break}}Aa()}function $t(e){const t=Y(e);return t===e?t:(be(t,"iterate",mn),Fe(e)?t:t.map(ze))}function fr(e){return be(e=Y(e),"iterate",mn),e}function ft(e,t){return rt(e)?Ut(Ft(e)?ze(t):t):ze(t)}const pf={__proto__:null,[Symbol.iterator](){return Ir(this,Symbol.iterator,e=>ft(this,e))},concat(...e){return $t(this).concat(...e.map(t=>B(t)?$t(t):t))},entries(){return Ir(this,"entries",e=>(e[1]=ft(this,e[1]),e))},every(e,t){return qe(this,"every",e,t,void 0,arguments)},filter(e,t){return qe(this,"filter",e,t,n=>n.map(r=>ft(this,r)),arguments)},find(e,t){return qe(this,"find",e,t,n=>ft(this,n),arguments)},findIndex(e,t){return qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qe(this,"findLast",e,t,n=>ft(this,n),arguments)},findLastIndex(e,t){return qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Er(this,"includes",e)},indexOf(...e){return Er(this,"indexOf",e)},join(e){return $t(this).join(e)},lastIndexOf(...e){return Er(this,"lastIndexOf",e)},map(e,t){return qe(this,"map",e,t,void 0,arguments)},pop(){return qt(this,"pop")},push(...e){return qt(this,"push",e)},reduce(e,...t){return ii(this,"reduce",e,t)},reduceRight(e,...t){return ii(this,"reduceRight",e,t)},shift(){return qt(this,"shift")},some(e,t){return qe(this,"some",e,t,void 0,arguments)},splice(...e){return qt(this,"splice",e)},toReversed(){return $t(this).toReversed()},toSorted(e){return $t(this).toSorted(e)},toSpliced(...e){return $t(this).toSpliced(...e)},unshift(...e){return qt(this,"unshift",e)},values(){return Ir(this,"values",e=>ft(this,e))}};function Ir(e,t,n){const r=fr(e),a=r[t]();return r!==e&&!Fe(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.done||(i.value=n(i.value)),i}),a}const hf=Array.prototype;function qe(e,t,n,r,a,i){const o=fr(e),s=o!==e&&!Fe(e),l=o[t];if(l!==hf[t]){const d=l.apply(e,i);return s?ze(d):d}let c=n;o!==e&&(s?c=function(d,p){return n.call(this,ft(e,d),p,e)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,e)}));const f=l.call(o,c,r);return s&&a?a(f):f}function ii(e,t,n,r){const a=fr(e);let i=n;return a!==e&&(Fe(e)?n.length>3&&(i=function(o,s,l){return n.call(this,o,s,l,e)}):i=function(o,s,l){return n.call(this,o,ft(e,s),l,e)}),a[t](i,...r)}function Er(e,t,n){const r=Y(e);be(r,"iterate",mn);const a=r[t](...n);return(a===-1||a===!1)&&Ta(n[0])?(n[0]=Y(n[0]),r[t](...n)):a}function qt(e,t,n=[]){tt(),Sa();const r=Y(e)[t].apply(e,n);return Aa(),nt(),r}const gf=ba("__proto__,__v_isRef,__isVue"),No=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yt));function vf(e){yt(e)||(e=String(e));const t=Y(this);return be(t,"has",e),t.hasOwnProperty(e)}class Do{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?If:Wo:i?Ho:Bo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=B(t);if(!a){let l;if(o&&(l=pf[n]))return l;if(n==="hasOwnProperty")return vf}const s=Reflect.get(t,n,ye(t)?t:r);if((yt(n)?No.has(n):gf(n))||(a||be(t,"get",n),i))return s;if(ye(s)){const l=o&&_a(n)?s:s.value;return a&&ie(l)?Kr(l):l}return ie(s)?a?Kr(s):Ea(s):s}}class Ro extends Do{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];const o=B(t)&&_a(n);if(!this._isShallow){const c=rt(i);if(!Fe(r)&&!rt(r)&&(i=Y(i),r=Y(r)),!o&&ye(i)&&!ye(r))return c||(i.value=r),!0}const s=o?Number(n)<t.length:G(t,n),l=Reflect.set(t,n,r,ye(t)?t:a);return t===Y(a)&&(s?mt(r,i)&&et(t,"set",n,r):et(t,"add",n,r)),l}deleteProperty(t,n){const r=G(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&et(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!yt(n)||!No.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",B(t)?"length":Ot),Reflect.ownKeys(t)}}class bf extends Do{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yf=new Ro,xf=new bf,_f=new Ro(!0);const Vr=e=>e,En=e=>Reflect.getPrototypeOf(e);function wf(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Rt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Vr:t?Ut:ze;return!t&&be(i,"iterate",l?Ur:Ot),me(Object.create(c),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}}})}}function kn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Sf(e,t){const n={get(a){const i=this.__v_raw,o=Y(i),s=Y(a);e||(mt(a,s)&&be(o,"get",a),be(o,"get",s));const{has:l}=En(o),c=t?Vr:e?Ut:ze;if(l.call(o,a))return c(i.get(a));if(l.call(o,s))return c(i.get(s));i!==o&&i.get(a)},get size(){const a=this.__v_raw;return!e&&be(Y(a),"iterate",Ot),a.size},has(a){const i=this.__v_raw,o=Y(i),s=Y(a);return e||(mt(a,s)&&be(o,"has",a),be(o,"has",s)),a===s?i.has(a):i.has(a)||i.has(s)},forEach(a,i){const o=this,s=o.__v_raw,l=Y(s),c=t?Vr:e?Ut:ze;return!e&&be(l,"iterate",Ot),s.forEach((f,d)=>a.call(i,c(f),c(d),o))}};return me(n,e?{add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear")}:{add(a){!t&&!Fe(a)&&!rt(a)&&(a=Y(a));const i=Y(this);return En(i).has.call(i,a)||(i.add(a),et(i,"add",a,a)),this},set(a,i){!t&&!Fe(i)&&!rt(i)&&(i=Y(i));const o=Y(this),{has:s,get:l}=En(o);let c=s.call(o,a);c||(a=Y(a),c=s.call(o,a));const f=l.call(o,a);return o.set(a,i),c?mt(i,f)&&et(o,"set",a,i):et(o,"add",a,i),this},delete(a){const i=Y(this),{has:o,get:s}=En(i);let l=o.call(i,a);l||(a=Y(a),l=o.call(i,a)),s&&s.call(i,a);const c=i.delete(a);return l&&et(i,"delete",a,void 0),c},clear(){const a=Y(this),i=a.size!==0,o=a.clear();return i&&et(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=wf(a,e,t)}),n}function Ia(e,t){const n=Sf(e,t);return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(G(n,a)&&a in r?n:r,a,i)}const Af={get:Ia(!1,!1)},Cf={get:Ia(!1,!0)},Pf={get:Ia(!0,!1)};const Bo=new WeakMap,Ho=new WeakMap,Wo=new WeakMap,If=new WeakMap;function Ef(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kf(e){return e.__v_skip||!Object.isExtensible(e)?0:Ef(Zl(e))}function Ea(e){return rt(e)?e:ka(e,!1,yf,Af,Bo)}function Tf(e){return ka(e,!1,_f,Cf,Ho)}function Kr(e){return ka(e,!0,xf,Pf,Wo)}function ka(e,t,n,r,a){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=kf(e);if(i===0)return e;const o=a.get(e);if(o)return o;const s=new Proxy(e,i===2?r:n);return a.set(e,s),s}function Ft(e){return rt(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function rt(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function Ta(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Of(e){return!G(e,"__v_skip")&&Object.isExtensible(e)&&Po(e,"__v_skip",!0),e}const ze=e=>ie(e)?Ea(e):e,Ut=e=>ie(e)?Kr(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function cr(e){return Ff(e,!1)}function Ff(e,t){return ye(e)?e:new jf(e,t)}class jf{constructor(t,n){this.dep=new Pa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Fe(t)||rt(t);t=r?t:Y(t),mt(t,n)&&(this._rawValue=t,this._value=r?t:ze(t),this.dep.trigger())}}function ur(e){return ye(e)?e.value:e}const Mf={get:(e,t,n)=>t==="__v_raw"?e:ur(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ye(a)&&!ye(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Uo(e){return Ft(e)?e:new Proxy(e,Mf)}class $f{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Pa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Fo(this,!0),!0}get value(){const t=this.dep.track();return $o(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function zf(e,t,n=!1){let r,a;return W(e)?r=e:(r=e.get,a=e.set),new $f(r,a,n)}const Tn={},Kn=new WeakMap;let It;function Lf(e,t=!1,n=It){if(n){let r=Kn.get(n);r||Kn.set(n,r=[]),r.push(e)}}function Nf(e,t,n=ae){const{immediate:r,deep:a,once:i,scheduler:o,augmentJob:s,call:l}=n,c=k=>a?k:Fe(k)||a===!1||a===0?dt(k,1):dt(k);let f,d,p,g,P=!1,C=!1;if(ye(e)?(d=()=>e.value,P=Fe(e)):Ft(e)?(d=()=>c(e),P=!0):B(e)?(C=!0,P=e.some(k=>Ft(k)||Fe(k)),d=()=>e.map(k=>{if(ye(k))return k.value;if(Ft(k))return c(k);if(W(k))return l?l(k,2):k()})):W(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){tt();try{p()}finally{nt()}}const k=It;It=f;try{return l?l(e,3,[g]):e(g)}finally{It=k}}:d=Ge,t&&a){const k=d,N=a===!0?1/0:a;d=()=>dt(k(),N)}const j=uf(),v=()=>{f.stop(),j&&j.active&&xa(j.effects,f)};if(i&&t){const k=t;t=(...N)=>{k(...N),v()}}let A=C?new Array(e.length).fill(Tn):Tn;const M=k=>{if(!(!(f.flags&1)||!f.dirty&&!k))if(t){const N=f.run();if(a||P||(C?N.some((U,q)=>mt(U,A[q])):mt(N,A))){p&&p();const U=It;It=f;try{const q=[N,A===Tn?void 0:C&&A[0]===Tn?[]:A,g];A=N,l?l(t,3,q):t(...q)}finally{It=U}}}else f.run()};return s&&s(M),f=new To(d),f.scheduler=o?()=>o(M,!1):M,g=k=>Lf(k,!1,f),p=f.onStop=()=>{const k=Kn.get(f);if(k){if(l)l(k,4);else for(const N of k)N();Kn.delete(f)}},t?r?M(!0):A=f.run():o?o(M.bind(null,!0),!0):f.run(),v.pause=f.pause.bind(f),v.resume=f.resume.bind(f),v.stop=v,v}function dt(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ye(e))dt(e.value,t,n);else if(B(e))for(let r=0;r<e.length;r++)dt(e[r],t,n);else if(_o(e)||Rt(e))e.forEach(r=>{dt(r,t,n)});else if(Ao(e)){for(const r in e)dt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&dt(e[r],t,n)}return e}function _n(e,t,n,r){try{return r?e(...r):e()}catch(a){dr(a,t,n)}}function Le(e,t,n,r){if(W(e)){const a=_n(e,t,n,r);return a&&wo(a)&&a.catch(i=>{dr(i,t,n)}),a}if(B(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Le(e[i],t,n,r));return a}}function dr(e,t,n,r=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let s=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const f=s.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,l,c)===!1)return}s=s.parent}if(i){tt(),_n(i,null,10,[e,l,c]),nt();return}}Df(e,n,a,r,o)}function Df(e,t,n,r=!0,a=!1){if(a)throw e;console.error(e)}const we=[];let Ue=-1;const Bt=[];let ct=null,Lt=0;const Vo=Promise.resolve();let Yn=null;function Rf(e){const t=Yn||Vo;return e?t.then(this?e.bind(this):e):t}function Bf(e){let t=Ue+1,n=we.length;for(;t<n;){const r=t+n>>>1,a=we[r],i=pn(a);i<e||i===e&&a.flags&2?t=r+1:n=r}return t}function Oa(e){if(!(e.flags&1)){const t=pn(e),n=we[we.length-1];!n||!(e.flags&2)&&t>=pn(n)?we.push(e):we.splice(Bf(t),0,e),e.flags|=1,Ko()}}function Ko(){Yn||(Yn=Vo.then(Go))}function Hf(e){B(e)?Bt.push(...e):ct&&e.id===-1?ct.splice(Lt+1,0,e):e.flags&1||(Bt.push(e),e.flags|=1),Ko()}function oi(e,t,n=Ue+1){for(;n<we.length;n++){const r=we[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;we.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Yo(e){if(Bt.length){const t=[...new Set(Bt)].sort((n,r)=>pn(n)-pn(r));if(Bt.length=0,ct){ct.push(...t);return}for(ct=t,Lt=0;Lt<ct.length;Lt++){const n=ct[Lt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ct=null,Lt=0}}const pn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Go(e){try{for(Ue=0;Ue<we.length;Ue++){const t=we[Ue];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_n(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ue<we.length;Ue++){const t=we[Ue];t&&(t.flags&=-2)}Ue=-1,we.length=0,Yo(),Yn=null,(we.length||Bt.length)&&Go()}}let Ke=null,Xo=null;function Gn(e){const t=Ke;return Ke=e,Xo=e&&e.type.__scopeId||null,t}function qo(e,t=Ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Jn(-1);const i=Gn(t);let o;try{o=e(...a)}finally{Gn(i),r._d&&Jn(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function St(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tt(),Le(l,n,8,[e.el,s,e,t]),nt())}}function Wf(e,t){if(Ae){let n=Ae.provides;const r=Ae.parent&&Ae.parent.provides;r===n&&(n=Ae.provides=Object.create(r)),n[e]=t}}function Ln(e,t,n=!1){const r=Fs();if(r||Ht){let a=Ht?Ht._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}const Uf=Symbol.for("v-scx"),Vf=()=>Ln(Uf);function Nn(e,t,n){return Jo(e,t,n)}function Jo(e,t,n=ae){const{immediate:r,deep:a,flush:i,once:o}=n,s=me({},n),l=t&&r||!t&&i!=="post";let c;if(bn){if(i==="sync"){const g=Vf();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Ge,g.resume=Ge,g.pause=Ge,g}}const f=Ae;s.call=(g,P,C)=>Le(g,f,P,C);let d=!1;i==="post"?s.scheduler=g=>{_e(g,f&&f.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(g,P)=>{P?g():Oa(g)}),s.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=Nf(e,t,s);return bn&&(c?c.push(p):l&&p()),p}function Kf(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?Zo(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=wn(this),s=Jo(a,i.bind(r),n);return o(),s}function Zo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}const Qo=Symbol("_vte"),es=e=>e.__isTeleport,rn=e=>e&&(e.disabled||e.disabled===""),si=e=>e&&(e.defer||e.defer===""),li=e=>typeof SVGElement<"u"&&e instanceof SVGElement,fi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Yr=(e,t)=>{const n=e&&e.to;return de(n)?t?t(n):null:n},ts={name:"Teleport",__isTeleport:!0,process(e,t,n,r,a,i,o,s,l,c){const{mc:f,pc:d,pbc:p,o:{insert:g,querySelector:P,createText:C,createComment:j}}=c,v=rn(t.props);let{shapeFlag:A,children:M,dynamicChildren:k}=t;if(e==null){const N=t.el=C(""),U=t.anchor=C("");g(N,n,r),g(U,n,r);const q=(D,V)=>{A&16&&f(M,D,V,a,i,o,s,l)},Z=()=>{const D=t.target=Yr(t.props,P),V=ns(D,t,C,g);D&&(o!=="svg"&&li(D)?o="svg":o!=="mathml"&&fi(D)&&(o="mathml"),a&&a.isCE&&(a.ce._teleportTargets||(a.ce._teleportTargets=new Set)).add(D),v||(q(D,V),Dn(t,!1)))};v&&(q(n,U),Dn(t,!0)),si(t.props)?(t.el.__isMounted=!1,_e(()=>{Z(),delete t.el.__isMounted},i)):Z()}else{if(si(t.props)&&e.el.__isMounted===!1){_e(()=>{ts.process(e,t,n,r,a,i,o,s,l,c)},i);return}t.el=e.el,t.targetStart=e.targetStart;const N=t.anchor=e.anchor,U=t.target=e.target,q=t.targetAnchor=e.targetAnchor,Z=rn(e.props),D=Z?n:U,V=Z?N:q;if(o==="svg"||li(U)?o="svg":(o==="mathml"||fi(U))&&(o="mathml"),k?(p(e.dynamicChildren,k,D,a,i,o,s),Ma(e,t,!0)):l||d(e,t,D,V,a,i,o,s,!1),v)Z?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):On(t,n,N,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Q=t.target=Yr(t.props,P);Q&&On(t,Q,null,c,0)}else Z&&On(t,U,q,c,1);Dn(t,v)}},remove(e,t,n,{um:r,o:{remove:a}},i){const{shapeFlag:o,children:s,anchor:l,targetStart:c,targetAnchor:f,target:d,props:p}=e;if(d&&(a(c),a(f)),i&&a(l),o&16){const g=i||!rn(p);for(let P=0;P<s.length;P++){const C=s[P];r(C,t,n,g,!!C.dynamicChildren)}}},move:On,hydrate:Yf};function On(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:s,shapeFlag:l,children:c,props:f}=e,d=i===2;if(d&&r(o,t,n),(!d||rn(f))&&l&16)for(let p=0;p<c.length;p++)a(c[p],t,n,2);d&&r(s,t,n)}function Yf(e,t,n,r,a,i,{o:{nextSibling:o,parentNode:s,querySelector:l,insert:c,createText:f}},d){function p(C,j,v,A){j.anchor=d(o(C),j,s(C),n,r,a,i),j.targetStart=v,j.targetAnchor=A}const g=t.target=Yr(t.props,l),P=rn(t.props);if(g){const C=g._lpa||g.firstChild;if(t.shapeFlag&16)if(P)p(e,t,C,C&&o(C));else{t.anchor=o(e);let j=C;for(;j;){if(j&&j.nodeType===8){if(j.data==="teleport start anchor")t.targetStart=j;else if(j.data==="teleport anchor"){t.targetAnchor=j,g._lpa=t.targetAnchor&&o(t.targetAnchor);break}}j=o(j)}t.targetAnchor||ns(g,t,f,c),d(C&&o(C),t,g,n,r,a,i)}Dn(t,P)}else P&&t.shapeFlag&16&&p(e,t,e,o(e));return t.anchor&&o(t.anchor)}const Gf=ts;function Dn(e,t){const n=e.ctx;if(n&&n.ut){let r,a;for(t?(r=e.el,a=e.anchor):(r=e.targetStart,a=e.targetAnchor);r&&r!==a;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function ns(e,t,n,r){const a=t.targetStart=n(""),i=t.targetAnchor=n("");return a[Qo]=i,e&&(r(a,e),r(i,e)),i}const Qe=Symbol("_leaveCb"),Fn=Symbol("_enterCb");function Xf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cs(()=>{e.isMounted=!0}),us(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],rs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},as=e=>{const t=e.subTree;return t.component?as(t.component):t},qf={name:"BaseTransition",props:rs,setup(e,{slots:t}){const n=Fs(),r=Xf();return()=>{const a=t.default&&ss(t.default(),!0);if(!a||!a.length)return;const i=is(a),o=Y(e),{mode:s}=o;if(r.isLeaving)return kr(i);const l=ci(i);if(!l)return kr(i);let c=Gr(l,o,r,n,d=>c=d);l.type!==Se&&hn(l,c);let f=n.subTree&&ci(n.subTree);if(f&&f.type!==Se&&!kt(f,l)&&as(n).type!==Se){let d=Gr(f,o,r,n);if(hn(f,d),s==="out-in"&&l.type!==Se)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},kr(i);s==="in-out"&&l.type!==Se?d.delayLeave=(p,g,P)=>{const C=os(r,f);C[String(f.key)]=f,p[Qe]=()=>{g(),p[Qe]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{P(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function is(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Se){t=n;break}}return t}const Jf=qf;function os(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Gr(e,t,n,r,a){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:P,onLeaveCancelled:C,onBeforeAppear:j,onAppear:v,onAfterAppear:A,onAppearCancelled:M}=t,k=String(e.key),N=os(n,e),U=(D,V)=>{D&&Le(D,r,9,V)},q=(D,V)=>{const Q=V[1];U(D,V),B(D)?D.every(F=>F.length<=1)&&Q():D.length<=1&&Q()},Z={mode:o,persisted:s,beforeEnter(D){let V=l;if(!n.isMounted)if(i)V=j||l;else return;D[Qe]&&D[Qe](!0);const Q=N[k];Q&&kt(e,Q)&&Q.el[Qe]&&Q.el[Qe](),U(V,[D])},enter(D){let V=c,Q=f,F=d;if(!n.isMounted)if(i)V=v||c,Q=A||f,F=M||d;else return;let se=!1;const ve=D[Fn]=Xe=>{se||(se=!0,Xe?U(F,[D]):U(Q,[D]),Z.delayedLeave&&Z.delayedLeave(),D[Fn]=void 0)};V?q(V,[D,ve]):ve()},leave(D,V){const Q=String(e.key);if(D[Fn]&&D[Fn](!0),n.isUnmounting)return V();U(p,[D]);let F=!1;const se=D[Qe]=ve=>{F||(F=!0,V(),ve?U(C,[D]):U(P,[D]),D[Qe]=void 0,N[Q]===e&&delete N[Q])};N[Q]=e,g?q(g,[D,se]):se()},clone(D){const V=Gr(D,t,n,r,a);return a&&a(V),V}};return Z}function kr(e){if(mr(e))return e=ht(e),e.children=null,e}function ci(e){if(!mr(e))return es(e.type)&&e.children?is(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&W(n.default))return n.default()}}function hn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,hn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ss(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===he?(o.patchFlag&128&&a++,r=r.concat(ss(o.children,t,s))):(t||o.type!==Se)&&r.push(s!=null?ht(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Zf(e,t){return W(e)?me({name:e.name},t,{setup:e}):e}function ls(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Xn=new WeakMap;function an(e,t,n,r,a=!1){if(B(e)){e.forEach((P,C)=>an(P,t&&(B(t)?t[C]:t),n,r,a));return}if(on(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&an(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Na(r.component):r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ae?s.refs={}:s.refs,d=s.setupState,p=Y(d),g=d===ae?xo:P=>G(p,P);if(c!=null&&c!==l){if(ui(t),de(c))f[c]=null,g(c)&&(d[c]=null);else if(ye(c)){c.value=null;const P=t;P.k&&(f[P.k]=null)}}if(W(l))_n(l,s,12,[o,f]);else{const P=de(l),C=ye(l);if(P||C){const j=()=>{if(e.f){const v=P?g(l)?d[l]:f[l]:l.value;if(a)B(v)&&xa(v,i);else if(B(v))v.includes(i)||v.push(i);else if(P)f[l]=[i],g(l)&&(d[l]=f[l]);else{const A=[i];l.value=A,e.k&&(f[e.k]=A)}}else P?(f[l]=o,g(l)&&(d[l]=o)):C&&(l.value=o,e.k&&(f[e.k]=o))};if(o){const v=()=>{j(),Xn.delete(e)};v.id=-1,Xn.set(e,v),_e(v,n)}else ui(e),j()}}}function ui(e){const t=Xn.get(e);t&&(t.flags|=8,Xn.delete(e))}sr().requestIdleCallback;sr().cancelIdleCallback;const on=e=>!!e.type.__asyncLoader,mr=e=>e.type.__isKeepAlive;function Qf(e,t){fs(e,"a",t)}function ec(e,t){fs(e,"da",t)}function fs(e,t,n=Ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(pr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)mr(a.parent.vnode)&&tc(r,t,n,a),a=a.parent}}function tc(e,t,n,r){const a=pr(t,e,r,!0);ds(()=>{xa(r[t],a)},n)}function pr(e,t,n=Ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{tt();const s=wn(n),l=Le(t,n,e,o);return s(),nt(),l});return r?a.unshift(i):a.push(i),i}}const ot=e=>(t,n=Ae)=>{(!bn||e==="sp")&&pr(e,(...r)=>t(...r),n)},nc=ot("bm"),cs=ot("m"),rc=ot("bu"),ac=ot("u"),us=ot("bum"),ds=ot("um"),ic=ot("sp"),oc=ot("rtg"),sc=ot("rtc");function lc(e,t=Ae){pr("ec",e,t)}const fc=Symbol.for("v-ndc");function gn(e,t,n,r){let a;const i=n,o=B(e);if(o||de(e)){const s=o&&Ft(e);let l=!1,c=!1;s&&(l=!Fe(e),c=rt(e),e=fr(e)),a=new Array(e.length);for(let f=0,d=e.length;f<d;f++)a[f]=t(l?c?Ut(ze(e[f])):ze(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i)}else if(ie(e))if(e[Symbol.iterator])a=Array.from(e,(s,l)=>t(s,l,void 0,i));else{const s=Object.keys(e);a=new Array(s.length);for(let l=0,c=s.length;l<c;l++){const f=s[l];a[l]=t(e[f],f,l,i)}}else a=[];return a}const Xr=e=>e?js(e)?Na(e):Xr(e.parent):null,sn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ps(e),$forceUpdate:e=>e.f||(e.f=()=>{Oa(e.update)}),$nextTick:e=>e.n||(e.n=Rf.bind(e.proxy)),$watch:e=>Kf.bind(e)}),Tr=(e,t)=>e!==ae&&!e.__isScriptSetup&&G(e,t),cc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(a!==ae&&G(a,t))return o[t]=2,a[t];if(G(i,t))return o[t]=3,i[t];if(n!==ae&&G(n,t))return o[t]=4,n[t];qr&&(o[t]=0)}}const c=sn[t];let f,d;if(c)return t==="$attrs"&&be(e.attrs,"get",""),c(e);if((f=s.__cssModules)&&(f=f[t]))return f;if(n!==ae&&G(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,G(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==ae&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,props:i,type:o}},s){let l;return!!(n[s]||e!==ae&&s[0]!=="$"&&G(e,s)||Tr(t,s)||G(i,s)||G(r,s)||G(sn,s)||G(a.config.globalProperties,s)||(l=o.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function di(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qr=!0;function uc(e){const t=ps(e),n=e.proxy,r=e.ctx;qr=!1,t.beforeCreate&&mi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:j,beforeDestroy:v,beforeUnmount:A,destroyed:M,unmounted:k,render:N,renderTracked:U,renderTriggered:q,errorCaptured:Z,serverPrefetch:D,expose:V,inheritAttrs:Q,components:F,directives:se,filters:ve}=t;if(c&&dc(c,r,null),o)for(const ce in o){const ee=o[ce];W(ee)&&(r[ce]=ee.bind(n))}if(a){const ce=a.call(n,n);ie(ce)&&(e.data=Ea(ce))}if(qr=!0,i)for(const ce in i){const ee=i[ce],_t=W(ee)?ee.bind(n,n):W(ee.get)?ee.get.bind(n,n):Ge,Pn=!W(ee)&&W(ee.set)?ee.set.bind(n):Ge,wt=Et({get:_t,set:Pn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>wt.value,set:De=>wt.value=De})}if(s)for(const ce in s)ms(s[ce],r,n,ce);if(l){const ce=W(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(ee=>{Wf(ee,ce[ee])})}f&&mi(f,e,"c");function pe(ce,ee){B(ee)?ee.forEach(_t=>ce(_t.bind(n))):ee&&ce(ee.bind(n))}if(pe(nc,d),pe(cs,p),pe(rc,g),pe(ac,P),pe(Qf,C),pe(ec,j),pe(lc,Z),pe(sc,U),pe(oc,q),pe(us,A),pe(ds,k),pe(ic,D),B(V))if(V.length){const ce=e.exposed||(e.exposed={});V.forEach(ee=>{Object.defineProperty(ce,ee,{get:()=>n[ee],set:_t=>n[ee]=_t,enumerable:!0})})}else e.exposed||(e.exposed={});N&&e.render===Ge&&(e.render=N),Q!=null&&(e.inheritAttrs=Q),F&&(e.components=F),se&&(e.directives=se),D&&ls(e)}function dc(e,t,n=Ge){B(e)&&(e=Jr(e));for(const r in e){const a=e[r];let i;ie(a)?"default"in a?i=Ln(a.from||r,a.default,!0):i=Ln(a.from||r):i=Ln(a),ye(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function mi(e,t,n){Le(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){let a=r.includes(".")?Zo(n,r):()=>n[r];if(de(e)){const i=t[e];W(i)&&Nn(a,i)}else if(W(e))Nn(a,e.bind(n));else if(ie(e))if(B(e))e.forEach(i=>ms(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Nn(a,i,e)}}function ps(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>qn(l,c,o,!0)),qn(l,t,o)),ie(t)&&i.set(t,l),l}function qn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&qn(e,i,n,!0),a&&a.forEach(o=>qn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=mc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const mc={data:pi,props:hi,emits:hi,methods:Zt,computed:Zt,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Zt,directives:Zt,watch:hc,provide:pi,inject:pc};function pi(e,t){return t?e?function(){return me(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function pc(e,t){return Zt(Jr(e),Jr(t))}function Jr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?me(Object.create(null),e,t):t}function hi(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:me(Object.create(null),di(e),di(t??{})):t}function hc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function hs(){return{app:null,config:{isNativeTag:xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gc=0;function vc(e,t){return function(r,a=null){W(r)||(r=me({},r)),a!=null&&!ie(a)&&(a=null);const i=hs(),o=new WeakSet,s=[];let l=!1;const c=i.app={_uid:gc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Gc,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(c,...d)):W(f)&&(o.add(f),f(c,...d))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,d){return d?(i.components[f]=d,c):i.components[f]},directive(f,d){return d?(i.directives[f]=d,c):i.directives[f]},mount(f,d,p){if(!l){const g=c._ceVNode||re(r,a);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(g,f,p),l=!0,c._container=f,f.__vue_app__=c,Na(g.component)}},onUnmount(f){s.push(f)},unmount(){l&&(Le(s,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return i.provides[f]=d,c},runWithContext(f){const d=Ht;Ht=c;try{return f()}finally{Ht=d}}};return c}}let Ht=null;const bc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${pt(t)}Modifiers`]||e[`${xt(t)}Modifiers`];function yc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&bc(r,t.slice(7));o&&(o.trim&&(a=n.map(f=>de(f)?f.trim():f)),o.number&&(a=n.map(tf)));let s,l=r[s=Sr(t)]||r[s=Sr(pt(t))];!l&&i&&(l=r[s=Sr(xt(t))]),l&&Le(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(c,e,6,a)}}const xc=new WeakMap;function gs(e,t,n=!1){const r=n?xc:t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=c=>{const f=gs(c,t,!0);f&&(s=!0,me(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ie(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):me(o,i),ie(e)&&r.set(e,o),o)}function hr(e,t){return!e||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,xt(t))||G(e,t))}function gi(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:o,attrs:s,emit:l,render:c,renderCache:f,props:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e,j=Gn(e);let v,A;try{if(n.shapeFlag&4){const k=a||r,N=k;v=Ve(c.call(N,k,f,d,g,p,P)),A=s}else{const k=t;v=Ve(k.length>1?k(d,{attrs:s,slots:o,emit:l}):k(d,null)),A=t.props?s:_c(s)}}catch(k){ln.length=0,dr(k,e,1),v=re(Se)}let M=v;if(A&&C!==!1){const k=Object.keys(A),{shapeFlag:N}=M;k.length&&N&7&&(i&&k.some(ya)&&(A=wc(A,i)),M=ht(M,A,!1,!0))}return n.dirs&&(M=ht(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&hn(M,n.transition),v=M,Gn(j),v}const _c=e=>{let t;for(const n in e)(n==="class"||n==="style"||ar(n))&&((t||(t={}))[n]=e[n]);return t},wc=(e,t)=>{const n={};for(const r in e)(!ya(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!hr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?vi(r,o,c):!0:!!o;return!1}function vi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!hr(n,i))return!0}return!1}function Ac({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const vs={},bs=()=>Object.create(vs),ys=e=>Object.getPrototypeOf(e)===vs;function Cc(e,t,n,r=!1){const a={},i=bs();e.propsDefaults=Object.create(null),xs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Tf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Pc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(hr(e.emitsOptions,p))continue;const g=t[p];if(l)if(G(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const P=pt(p);a[P]=Zr(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{xs(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!G(t,d)&&((f=xt(d))===d||!G(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!G(t,d))&&(delete i[d],c=!0)}c&&et(e.attrs,"set","")}function xs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(en(l))continue;const c=t[l];let f;a&&G(a,f=pt(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:hr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||ae;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Zr(a,l,d,c[d],e,!G(c,d))}}return o}function Zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=G(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const f=wn(a);r=c[n]=l.call(null,t),f()}}else r=l;a.ce&&a.ce._setProp(n,r)}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}const Ic=new WeakMap;function _s(e,t,n=!1){const r=n?Ic:t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const f=d=>{l=!0;const[p,g]=_s(d,t,!0);me(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return ie(e)&&r.set(e,Dt),Dt;if(B(i))for(let f=0;f<i.length;f++){const d=pt(i[f]);bi(d)&&(o[d]=ae)}else if(i)for(const f in i){const d=pt(f);if(bi(d)){const p=i[f],g=o[d]=B(p)||W(p)?{type:p}:me({},p),P=g.type;let C=!1,j=!0;if(B(P))for(let v=0;v<P.length;++v){const A=P[v],M=W(A)&&A.name;if(M==="Boolean"){C=!0;break}else M==="String"&&(j=!1)}else C=W(P)&&P.name==="Boolean";g[0]=C,g[1]=j,(C||G(g,"default"))&&s.push(d)}}const c=[o,s];return ie(e)&&r.set(e,c),c}function bi(e){return e[0]!=="$"&&!en(e)}const Fa=e=>e==="_"||e==="_ctx"||e==="$stable",ja=e=>B(e)?e.map(Ve):[Ve(e)],Ec=(e,t,n)=>{if(t._n)return t;const r=qo((...a)=>ja(t(...a)),n);return r._c=!1,r},ws=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Fa(a))continue;const i=e[a];if(W(i))t[a]=Ec(a,i,r);else if(i!=null){const o=ja(i);t[a]=()=>o}}},Ss=(e,t)=>{const n=ja(t);e.slots.default=()=>n},As=(e,t,n)=>{for(const r in t)(n||!Fa(r))&&(e[r]=t[r])},kc=(e,t,n)=>{const r=e.slots=bs();if(e.vnode.shapeFlag&32){const a=t._;a?(As(r,t,n),n&&Po(r,"_",a,!0)):ws(t,r)}else t&&Ss(e,t)},Tc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:As(a,t,n):(i=!t.$stable,ws(t,a)),o=t}else t&&(Ss(e,t),o={default:1});if(i)for(const s in a)!Fa(s)&&o[s]==null&&delete a[s]},_e=$c;function Oc(e){return Fc(e)}function Fc(e,t){const n=sr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Ge,insertStaticContent:P}=e,C=(u,m,h,_=null,b=null,y=null,T=void 0,E=null,I=!!m.dynamicChildren)=>{if(u===m)return;u&&!kt(u,m)&&(_=In(u),De(u,b,y,!0),u=null),m.patchFlag===-2&&(I=!1,m.dynamicChildren=null);const{type:x,ref:R,shapeFlag:O}=m;switch(x){case gr:j(u,m,h,_);break;case Se:v(u,m,h,_);break;case Rn:u==null&&A(m,h,_,T);break;case he:F(u,m,h,_,b,y,T,E,I);break;default:O&1?N(u,m,h,_,b,y,T,E,I):O&6?se(u,m,h,_,b,y,T,E,I):(O&64||O&128)&&x.process(u,m,h,_,b,y,T,E,I,Gt)}R!=null&&b?an(R,u&&u.ref,y,m||u,!m):R==null&&u&&u.ref!=null&&an(u.ref,null,y,u,!0)},j=(u,m,h,_)=>{if(u==null)r(m.el=s(m.children),h,_);else{const b=m.el=u.el;m.children!==u.children&&c(b,m.children)}},v=(u,m,h,_)=>{u==null?r(m.el=l(m.children||""),h,_):m.el=u.el},A=(u,m,h,_)=>{[u.el,u.anchor]=P(u.children,m,h,_,u.el,u.anchor)},M=({el:u,anchor:m},h,_)=>{let b;for(;u&&u!==m;)b=p(u),r(u,h,_),u=b;r(m,h,_)},k=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},N=(u,m,h,_,b,y,T,E,I)=>{if(m.type==="svg"?T="svg":m.type==="math"&&(T="mathml"),u==null)U(m,h,_,b,y,T,E,I);else{const x=u.el&&u.el._isVueCE?u.el:null;try{x&&x._beginPatch(),D(u,m,b,y,T,E,I)}finally{x&&x._endPatch()}}},U=(u,m,h,_,b,y,T,E)=>{let I,x;const{props:R,shapeFlag:O,transition:z,dirs:H}=u;if(I=u.el=o(u.type,y,R&&R.is,R),O&8?f(I,u.children):O&16&&Z(u.children,I,null,_,b,Or(u,y),T,E),H&&St(u,null,_,"created"),q(I,u,u.scopeId,T,_),R){for(const te in R)te!=="value"&&!en(te)&&i(I,te,null,R[te],y,_);"value"in R&&i(I,"value",null,R.value,y),(x=R.onVnodeBeforeMount)&&We(x,_,u)}H&&St(u,null,_,"beforeMount");const K=jc(b,z);K&&z.beforeEnter(I),r(I,m,h),((x=R&&R.onVnodeMounted)||K||H)&&_e(()=>{x&&We(x,_,u),K&&z.enter(I),H&&St(u,null,_,"mounted")},b)},q=(u,m,h,_,b)=>{if(h&&g(u,h),_)for(let y=0;y<_.length;y++)g(u,_[y]);if(b){let y=b.subTree;if(m===y||Is(y.type)&&(y.ssContent===m||y.ssFallback===m)){const T=b.vnode;q(u,T,T.scopeId,T.slotScopeIds,b.parent)}}},Z=(u,m,h,_,b,y,T,E,I=0)=>{for(let x=I;x<u.length;x++){const R=u[x]=E?ut(u[x]):Ve(u[x]);C(null,R,m,h,_,b,y,T,E)}},D=(u,m,h,_,b,y,T)=>{const E=m.el=u.el;let{patchFlag:I,dynamicChildren:x,dirs:R}=m;I|=u.patchFlag&16;const O=u.props||ae,z=m.props||ae;let H;if(h&&At(h,!1),(H=z.onVnodeBeforeUpdate)&&We(H,h,m,u),R&&St(m,u,h,"beforeUpdate"),h&&At(h,!0),(O.innerHTML&&z.innerHTML==null||O.textContent&&z.textContent==null)&&f(E,""),x?V(u.dynamicChildren,x,E,h,_,Or(m,b),y):T||ee(u,m,E,null,h,_,Or(m,b),y,!1),I>0){if(I&16)Q(E,O,z,h,b);else if(I&2&&O.class!==z.class&&i(E,"class",null,z.class,b),I&4&&i(E,"style",O.style,z.style,b),I&8){const K=m.dynamicProps;for(let te=0;te<K.length;te++){const X=K[te],Ce=O[X],Pe=z[X];(Pe!==Ce||X==="value")&&i(E,X,Ce,Pe,b,h)}}I&1&&u.children!==m.children&&f(E,m.children)}else!T&&x==null&&Q(E,O,z,h,b);((H=z.onVnodeUpdated)||R)&&_e(()=>{H&&We(H,h,m,u),R&&St(m,u,h,"updated")},_)},V=(u,m,h,_,b,y,T)=>{for(let E=0;E<m.length;E++){const I=u[E],x=m[E],R=I.el&&(I.type===he||!kt(I,x)||I.shapeFlag&198)?d(I.el):h;C(I,x,R,null,_,b,y,T,!0)}},Q=(u,m,h,_,b)=>{if(m!==h){if(m!==ae)for(const y in m)!en(y)&&!(y in h)&&i(u,y,m[y],null,b,_);for(const y in h){if(en(y))continue;const T=h[y],E=m[y];T!==E&&y!=="value"&&i(u,y,E,T,b,_)}"value"in h&&i(u,"value",m.value,h.value,b)}},F=(u,m,h,_,b,y,T,E,I)=>{const x=m.el=u?u.el:s(""),R=m.anchor=u?u.anchor:s("");let{patchFlag:O,dynamicChildren:z,slotScopeIds:H}=m;H&&(E=E?E.concat(H):H),u==null?(r(x,h,_),r(R,h,_),Z(m.children||[],h,R,b,y,T,E,I)):O>0&&O&64&&z&&u.dynamicChildren&&u.dynamicChildren.length===z.length?(V(u.dynamicChildren,z,h,b,y,T,E),(m.key!=null||b&&m===b.subTree)&&Ma(u,m,!0)):ee(u,m,h,R,b,y,T,E,I)},se=(u,m,h,_,b,y,T,E,I)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?b.ctx.activate(m,h,_,T,I):ve(m,h,_,b,y,T,I):Xe(u,m,I)},ve=(u,m,h,_,b,y,T)=>{const E=u.component=Hc(u,_,b);if(mr(u)&&(E.ctx.renderer=Gt),Wc(E,!1,T),E.asyncDep){if(b&&b.registerDep(E,pe,T),!u.el){const I=E.subTree=re(Se);v(null,I,m,h),u.placeholder=I.el}}else pe(E,u,m,h,b,y,T)},Xe=(u,m,h)=>{const _=m.component=u.component;if(Sc(u,m,h))if(_.asyncDep&&!_.asyncResolved){ce(_,m,h);return}else _.next=m,_.update();else m.el=u.el,_.vnode=m},pe=(u,m,h,_,b,y,T)=>{const E=()=>{if(u.isMounted){let{next:O,bu:z,u:H,parent:K,vnode:te}=u;{const Be=Cs(u);if(Be){O&&(O.el=te.el,ce(u,O,T)),Be.asyncDep.then(()=>{u.isUnmounted||E()});return}}let X=O,Ce;At(u,!1),O?(O.el=te.el,ce(u,O,T)):O=te,z&&Ar(z),(Ce=O.props&&O.props.onVnodeBeforeUpdate)&&We(Ce,K,O,te),At(u,!0);const Pe=gi(u),Re=u.subTree;u.subTree=Pe,C(Re,Pe,d(Re.el),In(Re),u,b,y),O.el=Pe.el,X===null&&Ac(u,Pe.el),H&&_e(H,b),(Ce=O.props&&O.props.onVnodeUpdated)&&_e(()=>We(Ce,K,O,te),b)}else{let O;const{el:z,props:H}=m,{bm:K,m:te,parent:X,root:Ce,type:Pe}=u,Re=on(m);At(u,!1),K&&Ar(K),!Re&&(O=H&&H.onVnodeBeforeMount)&&We(O,X,m),At(u,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(Pe);const Be=u.subTree=gi(u);C(null,Be,h,_,u,b,y),m.el=Be.el}if(te&&_e(te,b),!Re&&(O=H&&H.onVnodeMounted)){const Be=m;_e(()=>We(O,X,Be),b)}(m.shapeFlag&256||X&&on(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&_e(u.a,b),u.isMounted=!0,m=h=_=null}};u.scope.on();const I=u.effect=new To(E);u.scope.off();const x=u.update=I.run.bind(I),R=u.job=I.runIfDirty.bind(I);R.i=u,R.id=u.uid,I.scheduler=()=>Oa(R),At(u,!0),x()},ce=(u,m,h)=>{m.component=u;const _=u.vnode.props;u.vnode=m,u.next=null,Pc(u,m.props,_,h),Tc(u,m.children,h),tt(),oi(u),nt()},ee=(u,m,h,_,b,y,T,E,I=!1)=>{const x=u&&u.children,R=u?u.shapeFlag:0,O=m.children,{patchFlag:z,shapeFlag:H}=m;if(z>0){if(z&128){Pn(x,O,h,_,b,y,T,E,I);return}else if(z&256){_t(x,O,h,_,b,y,T,E,I);return}}H&8?(R&16&&Yt(x,b,y),O!==x&&f(h,O)):R&16?H&16?Pn(x,O,h,_,b,y,T,E,I):Yt(x,b,y,!0):(R&8&&f(h,""),H&16&&Z(O,h,_,b,y,T,E,I))},_t=(u,m,h,_,b,y,T,E,I)=>{u=u||Dt,m=m||Dt;const x=u.length,R=m.length,O=Math.min(x,R);let z;for(z=0;z<O;z++){const H=m[z]=I?ut(m[z]):Ve(m[z]);C(u[z],H,h,null,b,y,T,E,I)}x>R?Yt(u,b,y,!0,!1,O):Z(m,h,_,b,y,T,E,I,O)},Pn=(u,m,h,_,b,y,T,E,I)=>{let x=0;const R=m.length;let O=u.length-1,z=R-1;for(;x<=O&&x<=z;){const H=u[x],K=m[x]=I?ut(m[x]):Ve(m[x]);if(kt(H,K))C(H,K,h,null,b,y,T,E,I);else break;x++}for(;x<=O&&x<=z;){const H=u[O],K=m[z]=I?ut(m[z]):Ve(m[z]);if(kt(H,K))C(H,K,h,null,b,y,T,E,I);else break;O--,z--}if(x>O){if(x<=z){const H=z+1,K=H<R?m[H].el:_;for(;x<=z;)C(null,m[x]=I?ut(m[x]):Ve(m[x]),h,K,b,y,T,E,I),x++}}else if(x>z)for(;x<=O;)De(u[x],b,y,!0),x++;else{const H=x,K=x,te=new Map;for(x=K;x<=z;x++){const Ee=m[x]=I?ut(m[x]):Ve(m[x]);Ee.key!=null&&te.set(Ee.key,x)}let X,Ce=0;const Pe=z-K+1;let Re=!1,Be=0;const Xt=new Array(Pe);for(x=0;x<Pe;x++)Xt[x]=0;for(x=H;x<=O;x++){const Ee=u[x];if(Ce>=Pe){De(Ee,b,y,!0);continue}let He;if(Ee.key!=null)He=te.get(Ee.key);else for(X=K;X<=z;X++)if(Xt[X-K]===0&&kt(Ee,m[X])){He=X;break}He===void 0?De(Ee,b,y,!0):(Xt[He-K]=x+1,He>=Be?Be=He:Re=!0,C(Ee,m[He],h,null,b,y,T,E,I),Ce++)}const ei=Re?Mc(Xt):Dt;for(X=ei.length-1,x=Pe-1;x>=0;x--){const Ee=K+x,He=m[Ee],ti=m[Ee+1],ni=Ee+1<R?ti.el||Ps(ti):_;Xt[x]===0?C(null,He,h,ni,b,y,T,E,I):Re&&(X<0||x!==ei[X]?wt(He,h,ni,2):X--)}}},wt=(u,m,h,_,b=null)=>{const{el:y,type:T,transition:E,children:I,shapeFlag:x}=u;if(x&6){wt(u.component.subTree,m,h,_);return}if(x&128){u.suspense.move(m,h,_);return}if(x&64){T.move(u,m,h,Gt);return}if(T===he){r(y,m,h);for(let O=0;O<I.length;O++)wt(I[O],m,h,_);r(u.anchor,m,h);return}if(T===Rn){M(u,m,h);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(y),r(y,m,h),_e(()=>E.enter(y),b);else{const{leave:O,delayLeave:z,afterLeave:H}=E,K=()=>{u.ctx.isUnmounted?a(y):r(y,m,h)},te=()=>{y._isLeaving&&y[Qe](!0),O(y,()=>{K(),H&&H()})};z?z(y,K,te):te()}else r(y,m,h)},De=(u,m,h,_=!1,b=!1)=>{const{type:y,props:T,ref:E,children:I,dynamicChildren:x,shapeFlag:R,patchFlag:O,dirs:z,cacheIndex:H}=u;if(O===-2&&(b=!1),E!=null&&(tt(),an(E,null,h,u,!0),nt()),H!=null&&(m.renderCache[H]=void 0),R&256){m.ctx.deactivate(u);return}const K=R&1&&z,te=!on(u);let X;if(te&&(X=T&&T.onVnodeBeforeUnmount)&&We(X,m,u),R&6)ql(u.component,h,_);else{if(R&128){u.suspense.unmount(h,_);return}K&&St(u,null,m,"beforeUnmount"),R&64?u.type.remove(u,m,h,Gt,_):x&&!x.hasOnce&&(y!==he||O>0&&O&64)?Yt(x,m,h,!1,!0):(y===he&&O&384||!b&&R&16)&&Yt(I,m,h),_&&Za(u)}(te&&(X=T&&T.onVnodeUnmounted)||K)&&_e(()=>{X&&We(X,m,u),K&&St(u,null,m,"unmounted")},h)},Za=u=>{const{type:m,el:h,anchor:_,transition:b}=u;if(m===he){Xl(h,_);return}if(m===Rn){k(u);return}const y=()=>{a(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:E}=b,I=()=>T(h,y);E?E(u.el,y,I):I()}else y()},Xl=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},ql=(u,m,h)=>{const{bum:_,scope:b,job:y,subTree:T,um:E,m:I,a:x}=u;yi(I),yi(x),_&&Ar(_),b.stop(),y&&(y.flags|=8,De(T,u,m,h)),E&&_e(E,m),_e(()=>{u.isUnmounted=!0},m)},Yt=(u,m,h,_=!1,b=!1,y=0)=>{for(let T=y;T<u.length;T++)De(u[T],m,h,_,b)},In=u=>{if(u.shapeFlag&6)return In(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const m=p(u.anchor||u.el),h=m&&m[Qo];return h?p(h):m};let wr=!1;const Qa=(u,m,h)=>{let _;u==null?m._vnode&&(De(m._vnode,null,null,!0),_=m._vnode.component):C(m._vnode||null,u,m,null,null,null,h),m._vnode=u,wr||(wr=!0,oi(_),Yo(),wr=!1)},Gt={p:C,um:De,m:wt,r:Za,mt:ve,mc:Z,pc:ee,pbc:V,n:In,o:e};return{render:Qa,hydrate:void 0,createApp:vc(Qa)}}function Or({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function At({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function jc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ma(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ut(a[i]),s.el=o.el),!n&&s.patchFlag!==-2&&Ma(o,s)),s.type===gr&&(s.patchFlag!==-1?s.el=o.el:s.__elIndex=i+(e.type===he?1:0)),s.type===Se&&!s.el&&(s.el=o.el)}}function Mc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Cs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cs(t)}function yi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ps(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ps(t.subTree):null}const Is=e=>e.__isSuspense;function $c(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Hf(e)}const he=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),Rn=Symbol.for("v-stc"),ln=[];let ke=null;function fe(e=!1){ln.push(ke=e?null:[])}function zc(){ln.pop(),ke=ln[ln.length-1]||null}let vn=1;function Jn(e,t=!1){vn+=e,e<0&&ke&&t&&(ke.hasOnce=!0)}function Es(e){return e.dynamicChildren=vn>0?ke||Dt:null,zc(),vn>0&&ke&&ke.push(e),e}function ue(e,t,n,r,a,i){return Es(w(e,t,n,r,a,i,!0))}function ks(e,t,n,r,a){return Es(re(e,t,n,r,a,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const Ts=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ye(e)||W(e)?{i:Ke,r:e,k:t,f:!!n}:e:null);function w(e,t=null,n=null,r=0,a=null,i=e===he?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ts(t),ref:t&&Bn(t),scopeId:Xo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ke};return s?(La(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),vn>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const re=Lc;function Lc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===fc)&&(e=Se),Zn(e)){const s=ht(e,t,!0);return n&&La(s,n),vn>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag=-2,s}if(Yc(e)&&(e=e.__vccOpts),t){t=Nc(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=lr(s)),ie(l)&&(Ta(l)&&!B(l)&&(l=me({},l)),t.style=wa(l))}const o=de(e)?1:Is(e)?128:es(e)?64:ie(e)?4:W(e)?2:0;return w(e,t,n,r,a,o,i,!0)}function Nc(e){return e?Ta(e)||ys(e)?me({},e):e:null}function ht(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:o,children:s,transition:l}=e,c=t?Dc(a||{},t):a,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ts(c),ref:t&&t.ref?n&&i?B(i)?i.concat(Bn(t)):[i,Bn(t)]:Bn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&hn(f,l.clone(f)),f}function $a(e=" ",t=0){return re(gr,null,e,t)}function Os(e,t){const n=re(Rn,null,e);return n.staticCount=t,n}function za(e="",t=!1){return t?(fe(),ks(Se,null,e)):re(Se,null,e)}function Ve(e){return e==null||typeof e=="boolean"?re(Se):B(e)?re(he,null,e.slice()):Zn(e)?ut(e):re(gr,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function La(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),La(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!ys(t)?t._ctx=Ke:a===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),r&64?(n=16,t=[$a(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=lr([t.class,r.class]));else if(a==="style")t.style=wa([t.style,r.style]);else if(ar(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function We(e,t,n,r=null){Le(e,t,7,[n,r])}const Rc=hs();let Bc=0;function Hc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Rc,i={uid:Bc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_s(r,a),emitsOptions:gs(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=yc.bind(null,i),e.ce&&e.ce(i),i}let Ae=null;const Fs=()=>Ae||Ke;let Qn,Qr;{const e=sr(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};Qn=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Qr=t("__VUE_SSR_SETTERS__",n=>bn=n)}const wn=e=>{const t=Ae;return Qn(e),e.scope.on(),()=>{e.scope.off(),Qn(t)}},xi=()=>{Ae&&Ae.scope.off(),Qn(null)};function js(e){return e.vnode.shapeFlag&4}let bn=!1;function Wc(e,t=!1,n=!1){t&&Qr(t);const{props:r,children:a}=e.vnode,i=js(e);Cc(e,r,i,t),kc(e,a,n||t);const o=i?Uc(e,t):void 0;return t&&Qr(!1),o}function Uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cc);const{setup:r}=n;if(r){tt();const a=e.setupContext=r.length>1?Kc(e):null,i=wn(e),o=_n(r,e,0,[e.props,a]),s=wo(o);if(nt(),i(),(s||e.sp)&&!on(e)&&ls(e),s){if(o.then(xi,xi),t)return o.then(l=>{_i(e,l)}).catch(l=>{dr(l,e,0)});e.asyncDep=o}else _i(e,o)}else Ms(e)}function _i(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Uo(t)),Ms(e)}function Ms(e,t,n){const r=e.type;e.render||(e.render=r.render||Ge);{const a=wn(e);tt();try{uc(e)}finally{nt(),a()}}}const Vc={get(e,t){return be(e,"get",""),e[t]}};function Kc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Vc),slots:e.slots,emit:e.emit,expose:t}}function Na(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Uo(Of(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sn)return sn[n](e)},has(t,n){return n in t||n in sn}})):e.proxy}function Yc(e){return W(e)&&"__vccOpts"in e}const Et=(e,t)=>zf(e,t,bn);function fn(e,t,n){try{Jn(-1);const r=arguments.length;return r===2?ie(t)&&!B(t)?Zn(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zn(n)&&(n=[n]),re(e,t,n))}finally{Jn(1)}}const Gc="3.5.27";let ea;const wi=typeof window<"u"&&window.trustedTypes;if(wi)try{ea=wi.createPolicy("vue",{createHTML:e=>e})}catch{}const $s=ea?e=>ea.createHTML(e):e=>e,Xc="http://www.w3.org/2000/svg",qc="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Si=Ze&&Ze.createElement("template"),Jc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?Ze.createElementNS(Xc,e):t==="mathml"?Ze.createElementNS(qc,e):n?Ze.createElement(e,{is:n}):Ze.createElement(e);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=$s(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=Si.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},lt="transition",Jt="animation",yn=Symbol("_vtc"),zs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zc=me({},rs,zs),Qc=e=>(e.displayName="Transition",e.props=Zc,e),eu=Qc((e,{slots:t})=>fn(Jf,tu(e),t)),Ct=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ai=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function tu(e){const t={};for(const F in e)F in zs||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:f=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,P=nu(a),C=P&&P[0],j=P&&P[1],{onBeforeEnter:v,onEnter:A,onEnterCancelled:M,onLeave:k,onLeaveCancelled:N,onBeforeAppear:U=v,onAppear:q=A,onAppearCancelled:Z=M}=t,D=(F,se,ve,Xe)=>{F._enterCancelled=Xe,Pt(F,se?f:s),Pt(F,se?c:o),ve&&ve()},V=(F,se)=>{F._isLeaving=!1,Pt(F,d),Pt(F,g),Pt(F,p),se&&se()},Q=F=>(se,ve)=>{const Xe=F?q:A,pe=()=>D(se,F,ve);Ct(Xe,[se,pe]),Ci(()=>{Pt(se,F?l:i),Je(se,F?f:s),Ai(Xe)||Pi(se,r,C,pe)})};return me(t,{onBeforeEnter(F){Ct(v,[F]),Je(F,i),Je(F,o)},onBeforeAppear(F){Ct(U,[F]),Je(F,l),Je(F,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(F,se){F._isLeaving=!0;const ve=()=>V(F,se);Je(F,d),F._enterCancelled?(Je(F,p),ki(F)):(ki(F),Je(F,p)),Ci(()=>{F._isLeaving&&(Pt(F,d),Je(F,g),Ai(k)||Pi(F,r,j,ve))}),Ct(k,[F,ve])},onEnterCancelled(F){D(F,!1,void 0,!0),Ct(M,[F])},onAppearCancelled(F){D(F,!0,void 0,!0),Ct(Z,[F])},onLeaveCancelled(F){V(F),Ct(N,[F])}})}function nu(e){if(e==null)return null;if(ie(e))return[Fr(e.enter),Fr(e.leave)];{const t=Fr(e);return[t,t]}}function Fr(e){return nf(e)}function Je(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[yn]||(e[yn]=new Set)).add(t)}function Pt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[yn];n&&(n.delete(t),n.size||(e[yn]=void 0))}function Ci(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ru=0;function Pi(e,t,n,r){const a=e._endId=++ru,i=()=>{a===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=au(e,t);if(!o)return r();const c=o+"end";let f=0;const d=()=>{e.removeEventListener(c,p),i()},p=g=>{g.target===e&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},s+1),e.addEventListener(c,p)}function au(e,t){const n=window.getComputedStyle(e),r=P=>(n[P]||"").split(", "),a=r(`${lt}Delay`),i=r(`${lt}Duration`),o=Ii(a,i),s=r(`${Jt}Delay`),l=r(`${Jt}Duration`),c=Ii(s,l);let f=null,d=0,p=0;t===lt?o>0&&(f=lt,d=o,p=i.length):t===Jt?c>0&&(f=Jt,d=c,p=l.length):(d=Math.max(o,c),f=d>0?o>c?lt:Jt:null,p=f?f===lt?i.length:l.length:0);const g=f===lt&&/\b(?:transform|all)(?:,|$)/.test(r(`${lt}Property`).toString());return{type:f,timeout:d,propCount:p,hasTransform:g}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ei(n)+Ei(e[r])))}function Ei(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ki(e){return(e?e.ownerDocument:document).body.offsetHeight}function iu(e,t,n){const r=e[yn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ti=Symbol("_vod"),ou=Symbol("_vsh"),su=Symbol(""),lu=/(?:^|;)\s*display\s*:/;function fu(e,t,n){const r=e.style,a=de(n);let i=!1;if(n&&!a){if(t)if(de(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Hn(r,s,"")}else for(const o in t)n[o]==null&&Hn(r,o,"");for(const o in n)o==="display"&&(i=!0),Hn(r,o,n[o])}else if(a){if(t!==n){const o=r[su];o&&(n+=";"+o),r.cssText=n,i=lu.test(n)}}else t&&e.removeAttribute("style");Ti in e&&(e[Ti]=i?r.display:"",e[ou]&&(r.display="none"))}const Oi=/\s*!important$/;function Hn(e,t,n){if(B(n))n.forEach(r=>Hn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cu(e,t);Oi.test(n)?e.setProperty(xt(r),n.replace(Oi,""),"important"):e[r]=n}}const Fi=["Webkit","Moz","ms"],jr={};function cu(e,t){const n=jr[t];if(n)return n;let r=pt(t);if(r!=="filter"&&r in e)return jr[t]=r;r=Co(r);for(let a=0;a<Fi.length;a++){const i=Fi[a]+r;if(i in e)return jr[t]=i}return t}const ji="http://www.w3.org/1999/xlink";function Mi(e,t,n,r,a,i=ff(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ji,t.slice(6,t.length)):e.setAttributeNS(ji,t,n):n==null||i&&!Io(n)?e.removeAttribute(t):e.setAttribute(t,i?"":yt(n)?String(n):n)}function $i(e,t,n,r,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?$s(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(s!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Io(n):n==null&&s==="string"?(n="",o=!0):s==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(a||t)}function uu(e,t,n,r){e.addEventListener(t,n,r)}function du(e,t,n,r){e.removeEventListener(t,n,r)}const zi=Symbol("_vei");function mu(e,t,n,r,a=null){const i=e[zi]||(e[zi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=pu(t);if(r){const c=i[t]=vu(r,a);uu(e,s,c,l)}else o&&(du(e,s,o,l),i[t]=void 0)}}const Li=/(?:Once|Passive|Capture)$/;function pu(e){let t;if(Li.test(e)){t={};let r;for(;r=e.match(Li);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xt(e.slice(2)),t]}let Mr=0;const hu=Promise.resolve(),gu=()=>Mr||(hu.then(()=>Mr=0),Mr=Date.now());function vu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(bu(r,n.value),t,5,[r])};return n.value=e,n.attached=gu(),n}function bu(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yu=(e,t,n,r,a,i)=>{const o=a==="svg";t==="class"?iu(e,r,o):t==="style"?fu(e,n,r):ar(t)?ya(t)||mu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xu(e,t,r,o))?($i(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mi(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?$i(e,pt(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Mi(e,t,r,o))};function xu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ni(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Ni(t)&&de(n)?!1:t in e}const _u=["ctrl","shift","alt","meta"],wu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>_u.some(n=>e[`${n}Key`]&&!t.includes(n))},Ls=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((a,...i)=>{for(let o=0;o<t.length;o++){const s=wu[t[o]];if(s&&s(a,t))return}return e(a,...i)}))},Su={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Au=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(a=>{if(!("key"in a))return;const i=xt(a.key);if(t.some(o=>o===i||Su[o]===i))return e(a)}))},Cu=me({patchProp:yu},Jc);let Di;function Pu(){return Di||(Di=Oc(Cu))}const Iu=((...e)=>{const t=Pu().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ku(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=n(a,!1,Eu(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function Eu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ku(e){return de(e)?document.querySelector(e):e}const Tu="/favicon/favicon-32x32.png",Ou={class:"fixed top-0 w-full bg-white shadow z-50"},Fu={class:"max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"},ju={class:"space-x-6 hidden md:flex"},Mu={class:"w-6 h-6",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},$u=["d"],zu={key:0,class:"md:hidden border-t px-6 py-4 h-screen flex flex-col items-center space-y-7 bg-white"},Lu={__name:"Navbar",setup(e){const t=cr(!1),n=a=>{document.getElementById(a)?.scrollIntoView({behavior:"smooth"})},r=a=>{n(a),t.value=!1};return(a,i)=>(fe(),ue("nav",Ou,[w("div",Fu,[w("a",{onClick:i[0]||(i[0]=o=>n("home")),class:"font-bold text-xl hover:text-primary cursor-pointer flex items-center space-x-2"},[...i[12]||(i[12]=[w("img",{src:Tu},null,-1),$a(" Riyu R Pratama ",-1)])]),w("div",ju,[w("button",{onClick:i[1]||(i[1]=o=>n("about")),class:"hover:text-primary"},"About"),w("button",{onClick:i[2]||(i[2]=o=>n("skills")),class:"hover:text-primary"},"Skills"),w("button",{onClick:i[3]||(i[3]=o=>n("projects")),class:"hover:text-primary"},"Projects"),w("button",{onClick:i[4]||(i[4]=o=>n("product")),class:"hover:text-primary"},"Product"),w("button",{onClick:i[5]||(i[5]=o=>n("contact")),class:"hover:text-primary"},"Contact")]),w("button",{class:"md:hidden focus:outline-none",onClick:i[6]||(i[6]=o=>t.value=!t.value)},[(fe(),ue("svg",Mu,[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:t.value?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"},null,8,$u)]))])]),re(eu,{name:"slide-down"},{default:qo(()=>[t.value?(fe(),ue("div",zu,[w("button",{onClick:i[7]||(i[7]=o=>r("about")),class:"w-full py-3 text-2xl text-center hover:text-primary"}," About "),w("button",{onClick:i[8]||(i[8]=o=>r("skills")),class:"w-full py-3 text-2xl text-center hover:text-primary"}," Skills "),w("button",{onClick:i[9]||(i[9]=o=>r("projects")),class:"w-full py-3 text-2xl text-center hover:text-primary"}," Projects "),w("button",{onClick:i[10]||(i[10]=o=>r("product")),class:"w-full py-3 text-2xl text-center hover:text-primary"}," Product "),w("button",{onClick:i[11]||(i[11]=o=>r("contact")),class:"w-full py-3 text-2xl text-center hover:text-primary"}," Contact ")])):za("",!0)]),_:1})]))}},Nu="/assets/profile-BMDvYQ0Z.png",Du={id:"home",class:"pt-28 min-h-screen flex items-center bg-white"},Ru={class:"max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"},Bu={class:"order-2 md:order-1"},Hu={class:"order-1 md:order-2 flex justify-center"},Wu=["src"],Uu={__name:"Hero",setup(e){const t=n=>{document.getElementById(n)?.scrollIntoView({behavior:"smooth"})};return(n,r)=>(fe(),ue("section",Du,[w("div",Ru,[w("div",Bu,[r[1]||(r[1]=w("h2",{class:"text-4xl md:text-5xl font-bold mb-4"},[$a(" Hi, I'm "),w("span",{class:"text-primary"},"Riyu")],-1)),r[2]||(r[2]=w("p",{class:"text-xl leading-8 mb-6"}," I’m Riyu Rahmat Pratama, a Data Analyst who uses Excel, PowerShell, and Python to process and analyze data more quickly and accurately. I also work on front-end and back-end development. Want to know more about me? ",-1)),w("button",{onClick:r[0]||(r[0]=a=>t("about")),class:"inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover"}," Get to Know Me ")]),w("div",Hu,[w("img",{src:ur(Nu),class:"d-none w-50 h-50"},null,8,Wu)])])]))}},Vu="/assets/my-cv-CUEH-RsJ.pdf",Ku={id:"about",class:"py-20 bg-white"},Yu={class:"max-w-4xl mx-auto px-6 text-center"},Gu={class:"btn-contact mt-5 grid grid-cols-2"},Xu={class:"relative inline-block"},qu={class:"flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-xl"},Ju={class:"flex items-center justify-between border-b px-4 py-3"},Zu=["src"],Qu={__name:"About",setup(e){const t=cr(!1),n=r=>{document.getElementById(r)?.scrollIntoView({behavior:"smooth"})};return(r,a)=>(fe(),ue(he,null,[w("section",Ku,[w("div",Yu,[a[5]||(a[5]=Os('<h3 class="text-3xl font-bold mb-6">About Me</h3><p class="text-gray-600 leading-relaxed text-xl"> Currently, I work as a Project Leader. I am accustomed to coordinating teams to ensure that tasks are completed according to targets. I also monitor project progress closely, allowing me to understand how the project is running, from the team’s condition to on-site situations. <br><br> In addition to overseeing project workflows, I manage client company documents. This includes handling data in Excel as well as organizing both softcopy and hardcopy files. As a result, when certain documents are needed, I can provide them quickly, or immediately identify if any documents are missing. <br><br><b>Why can I work in front-end and back-end development?</b> <br><br> In the past, I aspired to become a web programmer. However, circumstances initially led me down a different path. At that time, my technical skills were still limited, so I joined a company where my primary responsibility was converting hardcopy documents into softcopy. <br><br> Through this experience, I began to understand how to manage data properly using Excel. Frequently using features like lookup functions helped me develop strong data-handling and analytical skills. However, my passion for web development never faded. I continuously honed my programming skills alongside my daily tasks, which is how I eventually mastered both front-end and back-end development. <br><br> This unique journey has made me not only a capable developer but also a meticulous data handler. If you are interested in learning more about me, please feel free to review my CV for a more detailed overview of my skills, and contact me through the provided information. </p>',2)),w("div",Gu,[w("div",Xu,[w("button",{onClick:a[0]||(a[0]=i=>t.value=!0),class:"inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover"}," See My CV ")]),w("div",null,[w("button",{onClick:a[1]||(a[1]=i=>n("contact")),class:"inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover"}," Contact Me ")])])])]),t.value?(fe(),ue("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",onClick:a[3]||(a[3]=Ls(i=>t.value=!1,["self"])),onKeydown:a[4]||(a[4]=Au(i=>t.value=!1,["esc"])),role:"dialog","aria-modal":"true","aria-label":"CV Riyu Rahmat Pratama"},[w("div",qu,[w("div",Ju,[a[6]||(a[6]=w("h4",{class:"font-semibold"},"My CV",-1)),w("button",{onClick:a[2]||(a[2]=i=>t.value=!1),"aria-label":"Close CV",class:"rounded px-3 py-1 text-gray-700 hover:bg-gray-100"}," Close ")]),w("iframe",{src:ur(Vu),title:"CV Riyu Rahmat Pratama",class:"min-h-0 flex-1 w-full"},null,8,Zu)])],32)):za("",!0)],64))}},ed="/assets/project-handle%201-Dkh-QVrv.jpeg",td="/assets/project-handle%202-COEiqtM-.jpeg",nd="/assets/project-handle%203-jJH7XtN4.jpeg",rd="/assets/project-handle%204-CcAKu1mr.jpeg",ad="/assets/project-handle%205-fGDwqgGh.jpeg",id="/assets/project-handle%206-Pu9w045B.jpeg",od="/assets/project-handle%207-CNUJFOHj.jpeg",Da=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},sd={id:"projects",class:"py-20 bg-gray-100"},ld={class:"max-w-6xl mx-auto px-6"},fd={class:"grid md:grid-cols-3 gap-8"},cd={class:"font-semibold text-xl mb-2"},ud={class:"text-gray-600 text-lg mb-4"},dd={class:"mt-16"},md={class:"flex items-center gap-3"},pd=["src","alt"],hd={class:"mt-4 text-center font-medium text-gray-700"},gd={__name:"Projects",setup(e){const t=cr(null),n=[{id:1,title:"PT Shell Indonesia",desc:"Responsible for managing all site licensing documents, including both archived and newly created records, as well as handling incoming and outgoing letters.",link:"#"},{id:2,title:"PT North Sumatera Hydro Energy",desc:"Provide guidance to clients on how to use the company’s applications, perform application testing to ensure stable performance, and assist in identifying and resolving application bugs.Dashboard admin responsive.",link:"#"},{id:3,title:"RSUD Ciawi",desc:"Manage team workflows for media conversion projects, monitor field conditions, and track team performance to ensure all targets are met successfully.",link:"#"}],r=[{name:"Supreme Energy",image:ed},{name:"Sefas",image:td},{name:"North Sumatera Hydro Energy",image:nd},{name:"Law Office Batubara & Bels",image:rd},{name:"Guerlain",image:ad},{name:"Exort Digital",image:id},{name:"Kementerian Agama",image:od}],a=i=>{t.value?.scrollBy({left:i*t.value.clientWidth*.8,behavior:"smooth"})};return(i,o)=>(fe(),ue("section",sd,[w("div",ld,[o[4]||(o[4]=w("h3",{class:"text-3xl font-bold text-center mb-3"},"Projects",-1)),o[5]||(o[5]=w("p",{class:"text-gray-600 text-center mb-12 text-lg"},"Here are some of my best projects:",-1)),w("div",fd,[(fe(),ue(he,null,gn(n,s=>w("div",{key:s.id,class:"bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"},[w("h4",cd,Me(s.title),1),o[2]||(o[2]=w("div",{class:"relative my-6"},[w("div",{class:"h-px bg-gray-300"}),w("div",{class:"absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 bg-gray-300 opacity-30 blur-md -z-10"})],-1)),w("p",ud,Me(s.desc),1)])),64))]),w("div",dd,[o[3]||(o[3]=w("h4",{class:"text-2xl font-bold text-center mb-8"},"Other Projects I’ve Worked On",-1)),w("div",md,[w("button",{onClick:o[0]||(o[0]=s=>a(-1)),"aria-label":"Slide projects left",class:"shrink-0 rounded-full bg-white px-4 py-2 shadow hover:bg-gray-50"}," ← "),w("div",{ref_key:"projectSlider",ref:t,class:"project-slider flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3","aria-label":"Other project organizations"},[(fe(),ue(he,null,gn(r,s=>w("div",{key:s.name,class:"flex min-w-[75%] snap-start flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-sm sm:min-w-[40%] md:min-w-[28%]"},[w("img",{src:s.image,alt:`${s.name} logo`,class:"h-36 w-full object-contain"},null,8,pd),w("p",hd,Me(s.name),1)])),64))],512),w("button",{onClick:o[1]||(o[1]=s=>a(1)),"aria-label":"Slide projects right",class:"shrink-0 rounded-full bg-white px-4 py-2 shadow hover:bg-gray-50"}," → ")])])])]))}},vd=Da(gd,[["__scopeId","data-v-dfd7c741"]]),bd={},yd={id:"contact",class:"py-20 bg-gray-100"};function xd(e,t){return fe(),ue("section",yd,[...t[0]||(t[0]=[Os('<div class="max-w-4xl mx-auto px-6 text-center"><h3 class="text-3xl font-bold mb-6">Contact</h3><p class="text-gray-600 mb-6">Looking for professional data entry or other services with the best results? Contacting me is the right decision.</p><div class="space-x-4"><a href="mailto:riyurahmatpratama@gmail.com" class="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primaryHover">Email</a><a href="https://www.linkedin.com/in/riyu-r-pratama/" target="_blank" class="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50">LinkedIn</a></div></div>',1)])])}const _d=Da(bd,[["render",xd]]),wd={},Sd={class:"py-6 text-center text-sm text-gray-500"};function Ad(e,t){return fe(),ue("footer",Sd," © 2026 Riyu Pratama. All rights reserved. ")}const Cd=Da(wd,[["render",Ad]]),Pd={class:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3"},Id=["onClick"],Ed=["src","alt"],kd={class:"space-y-2 p-4"},Td={class:"text-base font-semibold text-gray-900"},Od={class:"text-sm text-gray-600"},Fd={__name:"ProductScreenshots",props:{screenshots:{type:Array,required:!0}},emits:["open-screenshot"],setup(e,{emit:t}){const n=t;return(r,a)=>(fe(),ue("div",Pd,[(fe(!0),ue(he,null,gn(e.screenshots,i=>(fe(),ue("button",{key:i.title,onClick:o=>n("open-screenshot",i),class:"overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left"},[w("img",{src:i.src,alt:i.title,class:"h-56 w-full object-cover transition duration-300"},null,8,Ed),w("div",kd,[w("h3",Td,Me(i.title),1),w("p",Od,Me(i.desc),1)])],8,Id))),128))]))}},jd="/assets/project-1-DIm9a8oG.png",Md="/assets/project-2-BDHKzfL3.png",$d="/assets/project-3-DHTFATRP.png",zd={id:"dummy-projects",class:"py-20 bg-gray-50"},Ld={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Nd={class:"grid gap-10 lg:grid-cols-[1.1fr_1.3fr] items-center"},Dd={class:"relative w-full max-w-3xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col"},Rd={class:"overflow-y-auto flex-1"},Bd=["src","alt"],Hd={class:"p-6 text-center border-t border-gray-200"},Wd={class:"text-2xl font-bold text-gray-900 mb-2"},Ud={class:"text-gray-600"},Vd={__name:"DummyProjects",setup(e){const t=cr(null),n=[{title:"Data Migration & Validation",desc:"Migrated unstructured data from MS Word into Excel, cleaned formatting errors, and eliminated duplicate entries to ensure 100% data integrity.",src:jd},{title:"Data Parsing & Advanced Structuring",desc:"Successfully separated complex, comma-delimited raw data from a single column into multiple dedicated columns, significantly improving data readability.",src:Md},{title:"Data Summarization via Pivot Tables",desc:"Transformed extensive, unorganized raw datasets into concise, interactive Pivot Tables to enable efficient analysis and data-driven insights.",src:$d}],r=i=>{t.value=i},a=()=>{t.value=null};return(i,o)=>(fe(),ue("section",zd,[w("div",Ld,[w("div",Nd,[o[0]||(o[0]=w("div",{class:"space-y-6"},[w("span",{class:"inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary"}," My Dummy Projects "),w("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}," Screenshot Project "),w("p",{class:"max-w-2xl text-lg leading-8 text-gray-600"}," Below are three examples of my Excel projects, delivered with precision, clarity, and professionalism. ")],-1)),re(Fd,{screenshots:n,onOpenScreenshot:r})])]),(fe(),ks(Gf,{to:"body"},[t.value?(fe(),ue("div",{key:0,onClick:Ls(a,["self"]),class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"},[w("div",Dd,[w("button",{onClick:a,class:"absolute top-4 right-4 bg-white rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 z-10 transition"},[...o[1]||(o[1]=[w("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])]),w("div",Rd,[w("img",{src:t.value.src,alt:t.value.title,class:"w-full h-auto"},null,8,Bd)]),w("div",Hd,[w("h3",Wd,Me(t.value.title),1),w("p",Ud,Me(t.value.desc),1)])])])):za("",!0)]))]))}};function ta(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Kd(e){if(Array.isArray(e))return e}function Yd(e){if(Array.isArray(e))return ta(e)}function Gd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ns(r.key),r)}}function qd(e,t,n){return t&&Xd(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wn(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ra(e))||t){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw i}}}}function L(e,t,n){return(t=Ns(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,o,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(f){c=!0,a=f}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}function Qd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function em(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ri(Object(n),!0).forEach(function(r){L(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vr(e,t){return Kd(e)||Zd(e,t)||Ra(e,t)||Qd()}function Ne(e){return Yd(e)||Jd(e)||Ra(e)||em()}function tm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ns(e){var t=tm(e,"string");return typeof t=="symbol"?t:t+""}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function Ra(e,t){if(e){if(typeof e=="string")return ta(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ta(e,t):void 0}}var Bi=function(){},Ba={},Ds={},Rs=null,Bs={mark:Bi,measure:Bi};try{typeof window<"u"&&(Ba=window),typeof document<"u"&&(Ds=document),typeof MutationObserver<"u"&&(Rs=MutationObserver),typeof performance<"u"&&(Bs=performance)}catch{}var nm=Ba.navigator||{},Hi=nm.userAgent,Wi=Hi===void 0?"":Hi,gt=Ba,oe=Ds,Ui=Rs,jn=Bs;gt.document;var st=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",Hs=~Wi.indexOf("MSIE")||~Wi.indexOf("Trident/"),Mn,rm=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,am=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ws={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},im={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Us=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],ge="classic",Sn="duotone",Vs="sharp",Ks="sharp-duotone",Ys="chisel",Gs="etch",Xs="graphite",qs="jelly",Js="jelly-duo",Zs="jelly-fill",Qs="mosaic",el="notdog",tl="notdog-duo",nl="pixel",rl="slab",al="slab-duo",il="slab-press",ol="slab-press-duo",sl="thumbprint",ll="utility",fl="utility-duo",cl="utility-fill",ul="vellum",dl="whiteboard",om="Classic",sm="Duotone",lm="Sharp",fm="Sharp Duotone",cm="Chisel",um="Etch",dm="Graphite",mm="Jelly",pm="Jelly Duo",hm="Jelly Fill",gm="Mosaic",vm="Notdog",bm="Notdog Duo",ym="Pixel",xm="Slab",_m="Slab Duo",wm="Slab Press",Sm="Slab Press Duo",Am="Thumbprint",Cm="Utility",Pm="Utility Duo",Im="Utility Fill",Em="Vellum",km="Whiteboard",ml=[ge,Sn,Vs,Ks,Ys,Gs,Xs,qs,Js,Zs,Qs,el,tl,nl,rl,al,il,ol,sl,ll,fl,cl,ul,dl];Mn={},L(L(L(L(L(L(L(L(L(L(Mn,ge,om),Sn,sm),Vs,lm),Ks,fm),Ys,cm),Gs,um),Xs,dm),qs,mm),Js,pm),Zs,hm),L(L(L(L(L(L(L(L(L(L(Mn,Qs,gm),el,vm),tl,bm),nl,ym),rl,xm),al,_m),il,wm),ol,Sm),sl,Am),ll,Cm),L(L(L(L(Mn,fl,Pm),cl,Im),ul,Em),dl,km);var Tm={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Om={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Fm=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),jm={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},pl=["fak","fa-kit","fakd","fa-kit-duotone"],Vi={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mm=["kit"],$m="kit",zm="kit-duotone",Lm="Kit",Nm="Kit Duotone";L(L({},$m,Lm),zm,Nm);var Dm={kit:{"fa-kit":"fak"}},Rm={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Bm={kit:{fak:"fa-kit"}},Ki={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$n,zn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hm=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Wm="classic",Um="duotone",Vm="sharp",Km="sharp-duotone",Ym="chisel",Gm="etch",Xm="graphite",qm="jelly",Jm="jelly-duo",Zm="jelly-fill",Qm="mosaic",e0="notdog",t0="notdog-duo",n0="pixel",r0="slab",a0="slab-duo",i0="slab-press",o0="slab-press-duo",s0="thumbprint",l0="utility",f0="utility-duo",c0="utility-fill",u0="vellum",d0="whiteboard",m0="Classic",p0="Duotone",h0="Sharp",g0="Sharp Duotone",v0="Chisel",b0="Etch",y0="Graphite",x0="Jelly",_0="Jelly Duo",w0="Jelly Fill",S0="Mosaic",A0="Notdog",C0="Notdog Duo",P0="Pixel",I0="Slab",E0="Slab Duo",k0="Slab Press",T0="Slab Press Duo",O0="Thumbprint",F0="Utility",j0="Utility Duo",M0="Utility Fill",$0="Vellum",z0="Whiteboard";$n={},L(L(L(L(L(L(L(L(L(L($n,Wm,m0),Um,p0),Vm,h0),Km,g0),Ym,v0),Gm,b0),Xm,y0),qm,x0),Jm,_0),Zm,w0),L(L(L(L(L(L(L(L(L(L($n,Qm,S0),e0,A0),t0,C0),n0,P0),r0,I0),a0,E0),i0,k0),o0,T0),s0,O0),l0,F0),L(L(L(L($n,f0,j0),c0,M0),u0,$0),d0,z0);var L0="kit",N0="kit-duotone",D0="Kit",R0="Kit Duotone";L(L({},L0,D0),N0,R0);var B0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},H0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},na={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},W0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],hl=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Hm,W0),U0=["solid","regular","light","thin","duotone","brands","semibold"],gl=[1,2,3,4,5,6,7,8,9,10],V0=gl.concat([11,12,13,14,15,16,17,18,19,20]),K0=["aw","fw","pull-left","pull-right"],Y0=[].concat(Ne(Object.keys(H0)),U0,K0,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",zn.GROUP,zn.SWAP_OPACITY,zn.PRIMARY,zn.SECONDARY]).concat(gl.map(function(e){return"".concat(e,"x")})).concat(V0.map(function(e){return"w-".concat(e)})),G0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},at="___FONT_AWESOME___",ra=16,vl="fa",bl="svg-inline--fa",jt="data-fa-i2svg",aa="data-fa-pseudo-element",X0="data-fa-pseudo-element-pending",Ha="data-prefix",Wa="data-icon",Yi="fontawesome-i2svg",q0="async",J0=["HTML","HEAD","STYLE","SCRIPT"],yl=["::before","::after",":before",":after"],xl=(function(){try{return!0}catch{return!1}})();function An(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ge]}})}var _l=S({},Ws);_l[ge]=S(S(S(S({},{"fa-duotone":"duotone"}),Ws[ge]),Vi.kit),Vi["kit-duotone"]);var Z0=An(_l),ia=S({},jm);ia[ge]=S(S(S(S({},{duotone:"fad"}),ia[ge]),Ki.kit),Ki["kit-duotone"]);var Gi=An(ia),oa=S({},na);oa[ge]=S(S({},oa[ge]),Bm.kit);var Ua=An(oa),sa=S({},B0);sa[ge]=S(S({},sa[ge]),Dm.kit);An(sa);var Q0=rm,wl="fa-layers-text",ep=am,tp=S({},Tm);An(tp);var np=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$r=im,rp=[].concat(Ne(Mm),Ne(Y0)),cn=gt.FontAwesomeConfig||{};function ap(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ip(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var op=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];op.forEach(function(e){var t=vr(e,2),n=t[0],r=t[1],a=ip(ap(n));a!=null&&(cn[r]=a)})}var Sl={styleDefault:"solid",familyDefault:ge,cssPrefix:vl,replacementClass:bl,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};cn.familyPrefix&&(cn.cssPrefix=cn.familyPrefix);var Vt=S(S({},Sl),cn);Vt.autoReplaceSvg||(Vt.observeMutations=!1);var $={};Object.keys(Sl).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){Vt[e]=n,un.forEach(function(r){return r($)})},get:function(){return Vt[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){Vt.cssPrefix=t,un.forEach(function(n){return n($)})},get:function(){return Vt.cssPrefix}});gt.FontAwesomeConfig=$;var un=[];function sp(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var zt=ra,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lp(e){if(!(!e||!st)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return oe.head.insertBefore(t,r),e}}var fp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xi(){for(var e=12,t="";e-- >0;)t+=fp[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Va(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Al(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cp(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Al(e[n]),'" ')},"").trim()}function br(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ka(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function up(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function dp(e){var t=e.transform,n=e.width,r=n===void 0?ra:n,a=e.height,i=a===void 0?ra:a,o="";return Hs?o+="translate(".concat(t.x/zt-r/2,"em, ").concat(t.y/zt-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/zt,"em), calc(-50% + ").concat(t.y/zt,"em)) "),o+="scale(".concat(t.size/zt*(t.flipX?-1:1),", ").concat(t.size/zt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var mp=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Cl(){var e=vl,t=bl,n=$.cssPrefix,r=$.replacementClass,a=mp;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var qi=!1;function zr(){$.autoAddCss&&!qi&&(lp(Cl()),qi=!0)}var pp={mixout:function(){return{dom:{css:Cl,insertCss:zr}}},hooks:function(){return{beforeDOMElementCreation:function(){zr()},beforeI2svg:function(){zr()}}}},it=gt||{};it[at]||(it[at]={});it[at].styles||(it[at].styles={});it[at].hooks||(it[at].hooks={});it[at].shims||(it[at].shims=[]);var je=it[at],Pl=[],Il=function(){oe.removeEventListener("DOMContentLoaded",Il),tr=1,Pl.map(function(t){return t()})},tr=!1;st&&(tr=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),tr||oe.addEventListener("DOMContentLoaded",Il));function hp(e){st&&(tr?setTimeout(e,0):Pl.push(e))}function Cn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Al(e):"<".concat(t," ").concat(cp(r),">").concat(i.map(Cn).join(""),"</").concat(t,">")}function Ji(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function El(e){return Ne(e).length!==1?null:e.codePointAt(0).toString(16)}function Zi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function la(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Zi(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,Zi(t)):je.styles[e]=S(S({},je.styles[e]||{}),i),e==="fas"&&la("fa",t)}var xn=je.styles,gp=je.shims,kl=Object.keys(Ua),vp=kl.reduce(function(e,t){return e[t]=Object.keys(Ua[t]),e},{}),Ya=null,Tl={},Ol={},Fl={},jl={},Ml={};function bp(e){return~rp.indexOf(e)}function yp(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!bp(a)?a:null}var $l=function(){var t=function(i){return Lr(xn,function(o,s,l){return o[l]=Lr(s,i,{}),o},{})};Tl=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ol=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ml=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xn||$.autoFetchSvg,r=Lr(gp,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Fl=r.names,jl=r.unicodes,Ya=yr($.styleDefault,{family:$.familyDefault})};sp(function(e){Ya=yr(e.styleDefault,{family:$.familyDefault})});$l();function Ga(e,t){return(Tl[e]||{})[t]}function xp(e,t){return(Ol[e]||{})[t]}function Tt(e,t){return(Ml[e]||{})[t]}function zl(e){return Fl[e]||{prefix:null,iconName:null}}function _p(e){var t=jl[e],n=Ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Ya}var Ll=function(){return{prefix:null,iconName:null,rest:[]}};function wp(e){var t=ge,n=kl.reduce(function(r,a){return r[a]="".concat($.cssPrefix,"-").concat(a),r},{});return ml.forEach(function(r){(e.includes(n[r])||e.some(function(a){return vp[r].includes(a)}))&&(t=r)}),t}function yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ge:n,a=Z0[r][e];if(r===Sn&&!e)return"fad";var i=Gi[r][e]||Gi[r][a],o=e in je.styles?e:null,s=i||o||null;return s}function Sp(e){var t=[],n=null;return e.forEach(function(r){var a=yp($.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function Qi(e){return e.sort().filter(function(t,n,r){return r.indexOf(t)===n})}var eo=hl.concat(pl);function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=Qi(e.filter(function(g){return eo.includes(g)})),o=Qi(e.filter(function(g){return!eo.includes(g)})),s=i.filter(function(g){return a=g,!Us.includes(g)}),l=vr(s,1),c=l[0],f=c===void 0?null:c,d=wp(i),p=S(S({},Sp(o)),{},{prefix:yr(f,{family:d})});return S(S(S({},p),Ip({values:e,family:d,styles:xn,config:$,canonical:p,givenPrefix:a})),Ap(r,a,p))}function Ap(e,t,n){var r=n.prefix,a=n.iconName;if(e||!r||!a)return{prefix:r,iconName:a};var i=t==="fa"?zl(a):{},o=Tt(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!xn.far&&xn.fas&&!$.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}var Cp=ml.filter(function(e){return e!==ge||e!==Sn}),Pp=Object.keys(na).filter(function(e){return e!==ge}).map(function(e){return Object.keys(na[e])}).flat();function Ip(e){var t=e.values,n=e.family,r=e.canonical,a=e.givenPrefix,i=a===void 0?"":a,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,f=n===Sn,d=t.includes("fa-duotone")||t.includes("fad"),p=c.familyDefault==="duotone",g=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(d||p||g)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Cp.includes(n)){var P=Object.keys(s).find(function(j){return Pp.includes(j)});if(P||c.autoFetchSvg){var C=Fm.get(n).defaultShortPrefixId;r.prefix=C,r.iconName=Tt(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=vt()||"fas"),r}var Ep=(function(){function e(){Gd(this,e),this.definitions={}}return qd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),la(s,o[s]);var l=Ua[ge][s];l&&la(l,o[s]),$l()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}])})(),to=[],Nt={},Wt={},kp=Object.keys(Wt);function Tp(e,t){var n=t.mixoutsTo;return to=e,Nt={},Object.keys(Wt).forEach(function(r){kp.indexOf(r)===-1&&delete Wt[r]}),to.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),er(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Nt[o]||(Nt[o]=[]),Nt[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function fa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Nt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Nt[e]||[];a.forEach(function(i){i.apply(null,n)})}function bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function ca(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(t)return t=Tt(n,t)||t,Ji(Nl.definitions,n,t)||Ji(je.styles,n,t)}var Nl=new Ep,Op=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Mt("noAuto")},Fp={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return st?(Mt("beforeI2svg",t),bt("pseudoElements2svg",t),bt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,hp(function(){Mp({autoReplaceSvgRoot:n}),Mt("watch",t)})}},jp={icon:function(t){if(t===null)return null;if(er(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=yr(t[0]);return{prefix:r,iconName:Tt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(Q0))){var a=xr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Tt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Tt(i,t)||t}}}},Te={noAuto:Op,config:$,dom:Fp,parse:jp,library:Nl,findIconDefinition:ca,toHtml:Cn},Mp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(je.styles).length>0||$.autoFetchSvg)&&st&&$.autoReplaceSvg&&Te.dom.i2svg({node:r})};function _r(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Cn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(st){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $p(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=br(S(S({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function zp(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function Lp(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(n){return n in e})}function Xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,f=e.watchable,d=f===void 0?!1:f,p=r.found?r:n,g=p.width,P=p.height,C=[$.replacementClass,i?"".concat($.cssPrefix,"-").concat(i):""].filter(function(N){return c.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(c.classes).join(" "),j={children:[],attributes:S(S({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:c.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(P)})};!Lp(c.attributes)&&!c.attributes["aria-hidden"]&&(j.attributes["aria-hidden"]="true"),d&&(j.attributes[jt]="");var v=S(S({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:S({},c.styles)}),A=r.found&&n.found?bt("generateAbstractMask",v)||{children:[],attributes:{}}:bt("generateAbstractIcon",v)||{children:[],attributes:{}},M=A.children,k=A.attributes;return v.children=M,v.attributes=k,s?zp(v):$p(v)}function no(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=S(S({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[jt]="");var c=S({},i.styles);Ka(a)&&(c.transform=dp({transform:a,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=br(c);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function Np(e){var t=e.content,n=e.extra,r=S(S({},n.attributes),{},{class:n.classes.join(" ")}),a=br(n.styles);a.length>0&&(r.style=a);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Nr=je.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),a=vr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat($r.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat($r.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat($r.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Dp={found:!1,width:512,height:512};function Rp(e,t){!xl&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function da(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(n==="fa"){var i=zl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Nr[t]&&Nr[t][e]){var o=Nr[t][e];return r(ua(o))}Rp(e,t),r(S(S({},Dp),{},{icon:$.showMissingIcons&&e?bt("missingIconAbstract")||{}:{}}))})}var ro=function(){},ma=$.measurePerformance&&jn&&jn.mark&&jn.measure?jn:{mark:ro,measure:ro},Qt='FA "7.3.1"',Bp=function(t){return ma.mark("".concat(Qt," ").concat(t," begins")),function(){return Dl(t)}},Dl=function(t){ma.mark("".concat(Qt," ").concat(t," ends")),ma.measure("".concat(Qt," ").concat(t),"".concat(Qt," ").concat(t," begins"),"".concat(Qt," ").concat(t," ends"))},qa={begin:Bp,end:Dl},Un=function(){};function ao(e){var t=e.getAttribute?e.getAttribute(jt):null;return typeof t=="string"}function Hp(e){var t=e.getAttribute?e.getAttribute(Ha):null,n=e.getAttribute?e.getAttribute(Wa):null;return t&&n}function Wp(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function Up(){if($.autoReplaceSvg===!0)return Vn.replace;var e=Vn[$.autoReplaceSvg];return e||Vn.replace}function Vp(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function Kp(e){return oe.createElement(e)}function Rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vp:Kp:n;if(typeof e=="string")return oe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Rl(o,{ceFn:r}))}),a}function Yp(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Vn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Rl(a),n)}),n.getAttribute(jt)===null&&$.keepOriginalSource){var r=oe.createComment(Yp(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Va(n).indexOf($.replacementClass))return Vn.replace(t);var a=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Cn(s)}).join(`
`);n.setAttribute(jt,""),n.innerHTML=o}};function io(e){e()}function Bl(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=io;$.mutateApproach===q0&&(r=gt.requestAnimationFrame||io),r(function(){var a=Up(),i=qa.begin("mutate");e.map(a),i(),n()})}}var Ja=!1;function Hl(){Ja=!0}function pa(){Ja=!1}var nr=null;function oo(e){if(Ui&&$.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,o=i===void 0?Un:i,s=e.observeMutationsRoot,l=s===void 0?oe:s;nr=new Ui(function(c){if(!Ja){var f=vt();Kt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ao(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&ao(d.target)&&~np.indexOf(d.attributeName))if(d.attributeName==="class"&&Hp(d.target)){var p=xr(Va(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Ha,g||f),P&&d.target.setAttribute(Wa,P)}else Wp(d.target)&&a(d.target)})}}),st&&nr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gp(){nr&&nr.disconnect()}function Xp(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qp(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=xr(Va(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=xp(a.prefix,e.innerText)||Ga(a.prefix,El(e.innerText))),!a.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Jp(e){var t=Kt(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return t}function Zp(){return{iconName:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qp(e),r=n.iconName,a=n.prefix,i=n.rest,o=Jp(e),s=fa("parseNodeAttributes",{},e),l=t.styleParser?Xp(e):[];return S({iconName:r,prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Qp=je.styles;function Wl(e){var t=$.autoReplaceSvg==="nest"?so(e,{styleParser:!1}):so(e);return~t.extra.classes.indexOf(wl)?bt("generateLayersText",e,t):bt("generateSvgReplacementMutation",e,t)}function eh(){return[].concat(Ne(pl),Ne(hl))}function lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!st)return Promise.resolve();var n=oe.documentElement.classList,r=function(d){return n.add("".concat(Yi,"-").concat(d))},a=function(d){return n.remove("".concat(Yi,"-").concat(d))},i=$.autoFetchSvg?eh():Us.concat(Object.keys(Qp));i.includes("fa")||i.push("fa");var o=[".".concat(wl,":not([").concat(jt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(jt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=qa.begin("onTree"),c=s.reduce(function(f,d){try{var p=Wl(d);p&&f.push(p)}catch(g){xl||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){Bl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function th(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wl(e).then(function(n){n&&Bl([n],t)})}function nh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ca(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ca(a||{})),e(r,S(S({},n),{},{mask:a}))}}var rh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.classes,p=d===void 0?[]:d,g=n.attributes,P=g===void 0?{}:g,C=n.styles,j=C===void 0?{}:C;if(t){var v=t.prefix,A=t.iconName,M=t.icon;return _r(S({type:"icon"},t),function(){return Mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),Xa({icons:{main:ua(M),mask:l?ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:A,transform:S(S({},Ye),a),symbol:o,maskId:f,extra:{attributes:P,styles:j,classes:p}})})}},ah={mixout:function(){return{icon:nh(rh)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=lo,n.nodeCallback=th,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?oe:r,i=n.callback,o=i===void 0?function(){}:i;return lo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,c=r.maskId,f=r.extra;return new Promise(function(d,p){Promise.all([da(a,i),l.iconName?da(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var P=vr(g,2),C=P[0],j=P[1];d([n,Xa({icons:{main:C,mask:j},prefix:i,iconName:a,transform:o,symbol:s,maskId:c,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=br(s);l.length>0&&(a.style=l);var c;return Ka(o)&&(c=bt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ih={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return _r({type:"layer"},function(){Mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Ne(i)).join(" ")},children:o}]})}}}},oh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var a=r.classes,i=a===void 0?[]:a,o=r.attributes,s=o===void 0?{}:o,l=r.styles,c=l===void 0?{}:l;return _r({type:"counter",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),Np({content:n.toString(),extra:{attributes:s,styles:c,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Ne(i))}})})}}}},sh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return _r({type:"text",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),no({content:n,transform:S(S({},Ye),i),extra:{attributes:c,styles:d,classes:["".concat($.cssPrefix,"-layers-text")].concat(Ne(s))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.transform,i=r.extra,o=null,s=null;if(Hs){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([n,no({content:n.innerHTML,width:o,height:s,transform:a,extra:i,watchable:!0})])}}},Ul=new RegExp('"',"ug"),fo=[1105920,1112319],co=S(S(S(S({},{FontAwesome:{normal:"fas",400:"fas"}}),Om),G0),Rm),ha=Object.keys(co).reduce(function(e,t){return e[t.toLowerCase()]=co[t],e},{}),lh=Object.keys(ha).reduce(function(e,t){var n=ha[t];return e[t]=n[900]||Ne(Object.entries(n))[0][1],e},{});function fh(e){var t=e.replace(Ul,"");return El(Ne(t)[0]||"")}function ch(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),r=n.replace(Ul,""),a=r.codePointAt(0),i=a>=fo[0]&&a<=fo[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function uh(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(ha[n]||{})[a]||lh[n]}function uo(e,t){var n="".concat(X0).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kt(e.children),o=i.filter(function(U){return U.getAttribute(aa)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),c=l.match(ep),f=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&d!=="none"&&d!==""){var p=s.getPropertyValue("content"),g=uh(l,f),P=fh(p),C=c[0].startsWith("FontAwesome"),j=ch(s),v=Ga(g,P),A=v;if(C){var M=_p(P);M.iconName&&M.prefix&&(v=M.iconName,g=M.prefix)}if(v&&!j&&(!o||o.getAttribute(Ha)!==g||o.getAttribute(Wa)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var k=Zp(),N=k.extra;N.attributes[aa]=t,da(v,g).then(function(U){var q=Xa(S(S({},k),{},{icons:{main:U,mask:Ll()},prefix:g,iconName:A,extra:N,watchable:!0})),Z=oe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Z,e.firstChild):e.appendChild(Z),Z.outerHTML=q.map(function(D){return Cn(D)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function dh(e){return Promise.all([uo(e,"::before"),uo(e,"::after")])}function mh(e){return e.parentNode!==document.head&&!~J0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(aa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var ph=function(t){return!!t&&yl.some(function(n){return t.includes(n)})},hh=function(t){if(!t)return[];var n=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var a=Wn(r),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;if(ph(o)){var s=yl.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&n.add(s)}}}catch(l){a.e(l)}finally{a.f()}return n};function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(st){var n;if(t)n=e;else if($.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var r=new Set,a=Wn(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=Wn(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,f=hh(c.selectorText),d=Wn(f),p;try{for(d.s();!(p=d.n()).done;){var g=p.value;r.add(g)}}catch(C){d.e(C)}finally{d.f()}}}catch(C){s.e(C)}finally{s.f()}}catch(C){$.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){a.e(C)}finally{a.f()}if(!r.size)return;var P=Array.from(r).join(", ");try{n=e.querySelectorAll(P)}catch{}}return new Promise(function(C,j){var v=Kt(n).filter(mh).map(dh),A=qa.begin("searchPseudoElements");Hl(),Promise.all(v).then(function(){A(),pa(),C()}).catch(function(){A(),pa(),j()})})}}var gh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?oe:r;$.searchPseudoElements&&mo(a)}}},po=!1,vh={mixout:function(){return{dom:{unwatch:function(){Hl(),po=!0}}}},hooks:function(){return{bootstrap:function(){oo(fa("mutationObserverCallbacks",{}))},noAuto:function(){Gp()},watch:function(n){var r=n.observeMutationsRoot;po?pa():oo(fa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ho=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bh={mixout:function(){return{parse:{transform:function(n){return ho(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ho(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:S({},g.outer),children:[{tag:"g",attributes:S({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),g.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yh(e){return e.tag==="g"?e.children:[e]}var xh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?xr(a.split(" ").map(function(o){return o.trim()})):Ll();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=up({transform:l,containerWidth:d,iconWidth:c}),P={tag:"rect",attributes:S(S({},Dr),{},{fill:"white"})},C=f.children?{children:f.children.map(go)}:{},j={tag:"g",attributes:S({},g.inner),children:[go(S({tag:f.tag,attributes:S(S({},f.attributes),g.path)},C))]},v={tag:"g",attributes:S({},g.outer),children:[j]},A="mask-".concat(s||Xi()),M="clip-".concat(s||Xi()),k={tag:"mask",attributes:S(S({},Dr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,v]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:yh(p)},k]};return r.push(N,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(A,")")},Dr)}),{children:r,attributes:a}}}},_h={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Sh=[pp,ah,ih,oh,sh,gh,vh,bh,xh,_h,wh];Tp(Sh,{mixoutsTo:Te});Te.noAuto;Te.config;Te.library;Te.dom;var ga=Te.parse;Te.findIconDefinition;Te.toHtml;var Ah=Te.icon;Te.layer;Te.text;Te.counter;function va(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ch(e){if(Array.isArray(e))return va(e)}function J(e,t,n){return(t=Oh(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ph(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ih(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vo(Object(n),!0).forEach(function(r){J(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rr(e,t){if(e==null)return{};var n,r,a=Eh(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Eh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function kh(e){return Ch(e)||Ph(e)||Fh(e)||Ih()}function Th(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oh(e){var t=Th(e,"string");return typeof t=="symbol"?t:t+""}function rr(e){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function Fh(e,t){if(e){if(typeof e=="string")return va(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?va(e,t):void 0}}function Br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?J({},e,t):{}}function jh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},J(J(J(J(J(J(J(J(J(J(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),J(J(J(J(J(J(J(J(J(J(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto),"fa-canvas-square",e.canvasSquare),"fa-canvas-roomy",e.canvasRoomy),"fa-flip-360",e.flip360),"fa-buzz",e.buzz),"fa-float",e.float),"fa-jello",e.jello),J(J(J(J(J(t,"fa-spin-snap",e.spinSnap),"fa-spin-snap-4",e.spinSnap4),"fa-spin-snap-8",e.spinSnap8),"fa-swing",e.swing),"fa-wag",e.wag));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var Mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vl={exports:{}};(function(e){(function(t){var n=function(v,A,M){if(!c(A)||d(A)||p(A)||g(A)||l(A))return A;var k,N=0,U=0;if(f(A))for(k=[],U=A.length;N<U;N++)k.push(n(v,A[N],M));else{k={};for(var q in A)Object.prototype.hasOwnProperty.call(A,q)&&(k[v(q,M)]=n(v,A[q],M))}return k},r=function(v,A){A=A||{};var M=A.separator||"_",k=A.split||/(?=[A-Z])/;return v.split(k).join(M)},a=function(v){return P(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(A,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var A=a(v);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(v,A){return r(v,A).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},p=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},P=function(v){return v=v-0,v===v},C=function(v,A){var M=A&&"process"in A?A.process:A;return typeof M!="function"?v:function(k,N){return M(k,v,N)}},j={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,A){return n(C(a,A),v)},decamelizeKeys:function(v,A){return n(C(o,A),v,A)},pascalizeKeys:function(v,A){return n(C(i,A),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Mh)})(Vl);var $h=Vl.exports,zh=["gradientFill"],Lh=["class","style"],Nh=["type","stops","id"];function Dh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=$h.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Rh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Bh(e,t){return fn("stop",le({key:"".concat(t,"-").concat(e.offset),offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function Kl(e){if(typeof e=="string")return e;var t=(e.children||[]).map(Kl);return e.tag==="path"&&e.attributes&&"fill"in e.attributes?le(le({},e),{},{attributes:le(le({},e.attributes),{},{fill:void 0}),children:t}):le(le({},e),{},{children:t})}function Yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=t.gradientFill,a=r===void 0?null:r,i=Rr(t,zh),o=!!a||"fill"in n,s=o?Kl(e):e,l=(s.children||[]).map(function(k){return Yl(k,{},{})}),c=Object.keys(s.attributes||{}).reduce(function(k,N){var U=s.attributes[N];switch(N){case"class":k.class=Rh(U);break;case"style":k.style=Dh(U);break;default:k.attrs[N]=U}return k},{attrs:{},class:{},style:{}});n.class;var f=n.style,d=f===void 0?{}:f,p=Rr(n,Lh);if(a&&a.id&&(a.type==="linear"||a.type==="radial")){var g=a.type,P=a.stops,C=P===void 0?[]:P,j=a.id,v=Rr(a,Nh),A=g==="linear"?"linearGradient":"radialGradient",M=fn(A,le(le({},v),{},{id:j}),C.map(Bh));return fn(s.tag,le(le(le(le({},i),{},{class:c.class,style:le(le({},c.style),d)},c.attrs),p),{},{fill:"url(#".concat(j,")")}),[M].concat(kh(l)))}return fn(e.tag,le(le(le({},i),{},{class:c.class,style:le(le({},c.style),d)},c.attrs),p),l)}var Gl=!1;try{Gl=!0}catch{}function bo(){if(!Gl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yo(e){if(e&&rr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ga.icon)return ga.icon(e);if(e===null)return null;if(rr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hh=Zf({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(t){return typeof t.id!="string"||!t.id?(console.warn("FontAwesomeIcon: gradientFill.id must be a non-empty string"),!1):t.type!=="linear"&&t.type!=="radial"?(console.warn('FontAwesomeIcon: gradientFill.type must be "linear" or "radial"'),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Et(function(){return yo(t.icon)}),i=Et(function(){return Br("classes",jh(t))}),o=Et(function(){return Br("transform",typeof t.transform=="string"?ga.transform(t.transform):t.transform)}),s=Et(function(){return Br("mask",yo(t.mask))}),l=Et(function(){var f=le(le(le(le({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return f.title=t.title,f.titleId=t.titleId,Ah(a.value,f)});Nn(l,function(f){if(!f)return bo("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0}),t.gradientFill&&t.symbol&&bo("gradientFill is not supported when symbol is true and will be ignored");var c=Et(function(){return l.value?Yl(l.value.abstract[0],{gradientFill:t.symbol?null:t.gradientFill},r):null});return function(){return c.value}}});var Wh={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"]},Uh={prefix:"fas",iconName:"terminal",icon:[512,512,[],"f120","M9.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 256 9.4 118.6zM224 384l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Vh={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"]},Kh={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Yh={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},Gh={prefix:"fas",iconName:"chart-pie",icon:[576,512,["pie-chart"],"f200","M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z"]},Xh={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M263.4-27L278.2 9.8 315 24.6c3 1.2 5 4.2 5 7.4s-2 6.2-5 7.4L278.2 54.2 263.4 91c-1.2 3-4.2 5-7.4 5s-6.2-2-7.4-5L233.8 54.2 197 39.4c-3-1.2-5-4.2-5-7.4s2-6.2 5-7.4L233.8 9.8 248.6-27c1.2-3 4.2-5 7.4-5s6.2 2 7.4 5zM110.7 41.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7L59.8 164.2 9.7 142.7C3.8 140.2 0 134.4 0 128s3.8-12.2 9.7-14.7L59.8 91.8 81.3 41.7C83.8 35.8 89.6 32 96 32s12.2 3.8 14.7 9.7zM464 304c6.4 0 12.2 3.8 14.7 9.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7l-21.5-50.1-50.1-21.5c-5.9-2.5-9.7-8.3-9.7-14.7s3.8-12.2 9.7-14.7l50.1-21.5 21.5-50.1c2.5-5.9 8.3-9.7 14.7-9.7zM460 0c11 0 21.6 4.4 29.5 12.2l42.3 42.3C539.6 62.4 544 73 544 84s-4.4 21.6-12.2 29.5l-88.2 88.2-101.3-101.3 88.2-88.2C438.4 4.4 449 0 460 0zM44.2 398.5L308.4 134.3 409.7 235.6 145.5 499.8C137.6 507.6 127 512 116 512s-21.6-4.4-29.5-12.2L44.2 457.5C36.4 449.6 32 439 32 428s4.4-21.6 12.2-29.5z"]};var qh={prefix:"far",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M97.5 400l50-160 379.4 0-50 160-379.4 0zm190.7 48L477 448c21 0 39.6-13.6 45.8-33.7l50-160c9.7-30.9-13.4-62.3-45.8-62.3l-379.4 0c-21 0-39.6 13.6-45.8 33.7L80.2 294.4 80.2 96c0-8.8 7.2-16 16-16l138.7 0c3.5 0 6.8 1.1 9.6 3.2L282.9 112c13.8 10.4 30.7 16 48 16l117.3 0c8.8 0 16 7.2 16 16l48 0c0-35.3-28.7-64-64-64L330.9 80c-6.9 0-13.7-2.2-19.2-6.4L273.3 44.8C262.2 36.5 248.8 32 234.9 32L96.2 32c-35.3 0-64 28.7-64 64l0 288c0 35.3 28.7 64 64 64l192 0z"]};var Jh={prefix:"fab",iconName:"vuejs",icon:[448,512,[],"f41f","M356.9 64.3l-76.9 0-56 88.6-48-88.6-176 0 224 383.7 224-383.7-91.1 0zM55.7 96.3l53.8 0 114.5 198.2 114.4-198.2 53.8 0-168.2 288.2-168.3-288.2z"]},Zh={prefix:"fab",iconName:"laravel",icon:[512,512,[],"f3bd","M504.6 115.8c-.1-.2-.2-.5-.3-.7-.1-.4-.3-.8-.5-1.2-.2-.2-.3-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L404.6 55.5c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L300.3 111c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .2-.4 .4-.5 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 105.2-80.2 46.2 0-205.9c0-.7-.1-1.4-.3-2.1-.1-.2-.2-.4-.3-.7-.1-.4-.3-.8-.5-1.2-.1-.3-.4-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L115.8 1.1c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L11.5 56.5c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .3-.4 .5-.6 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 329.7c0 1.4 .4 2.8 1.1 4s1.7 2.2 2.9 2.9L204 510.9c.4 .2 .9 .4 1.3 .5 .2 .1 .4 .2 .6 .3 1.3 .4 2.8 .4 4.1 0 .2-.1 .4-.2 .6-.2 .5-.2 1-.3 1.4-.6L404.6 400.1c1.2-.7 2.2-1.7 2.9-2.9s1.1-2.6 1.1-4l0-105.3 92.2-53.1c1.2-.7 2.2-1.7 2.9-3s1.1-2.6 1.1-4l0-109.8c0-.7-.1-1.4-.2-2.1zM111.8 17.3l80.2 46.1-80.2 46.2-80.2-46.2 80.2-46.2zm88.2 60l0 201.3c-33.2 19.1-59.9 34.5-80.2 46.2l0-201.3C153 104.4 179.7 89 200 77.3zm0 412.8L23.5 388.5 23.5 77.3c20.3 11.7 47.1 27.1 80.2 46.2l0 215.2c0 .3 .1 .6 .1 .9 0 .4 .1 .8 .2 1.2 .1 .3 .2 .6 .4 .9 .1 .3 .3 .7 .4 1 .2 .3 .4 .5 .6 .8 .2 .3 .4 .6 .7 .8 .2 .2 .5 .4 .8 .6 .3 .2 .6 .5 .9 .7l92.2 52.2 .1 92.4zm8-106.2L128 338.6c54.7-31.5 113.5-65.3 176.3-101.5l80.1 46.1C355 300 296.2 333.5 208 383.9zm184.5 4.6l-176.5 101.6 0-92.3C317.4 340 376.2 306.4 392.5 297l0 91.4zm0-119.1c-20.3-11.6-47.1-27-80.2-46.1l0-91.4c20.3 11.7 47.1 27.1 80.2 46.2l0 91.3zm8-105.3l-80.2-46.2 80.2-46.2 80.2 46.1-80.2 46.2zm8 105.3l0-91.3c33.2-19.1 60-34.5 80.3-46.2l0 91.4-80.3 46.2z"]},Qh={prefix:"fab",iconName:"python",icon:[448,512,[],"f3e2","M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2l-40.1 0 0 47.4c0 36.8-31.2 67.8-66.8 67.8l-106.8 0c-29.2 0-53.4 25-53.4 54.3l0 101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3l0-40.7-106.7 0 0-13.6 160.2 0c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 444.7a20.4 20.4 0 1 1 0-40.7 20.4 20.4 0 1 1 0 40.7zM167.8 248.1l106.8 0c29.7 0 53.4-24.5 53.4-54.3l0-101.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6l0 40.7 106.9 0 0 13.6-147 0c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2l36.7 0 0-48.8c0-35.3 30.5-66.4 66.8-66.4zM161.2 64.7a20.4 20.4 0 1 1 0 40.8 20.4 20.4 0 1 1 0-40.8z"]},eg={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]};const tg={id:"skills",class:"py-20 bg-gray-50"},ng={class:"max-w-6xl mx-auto px-6"},rg={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"},ag={class:"font-medium text-center"},ig={__name:"Skills",setup(e){const t=[{name:"Excel / Spreadsheet",icon:Yh,color:"text-green-500"},{name:"Data Analystics",icon:Kh,color:"text-blue-500"},{name:"Document Control",icon:Vh,color:"text-orange-400"},{name:"Project Management",icon:qh,color:"text-blue-700"},{name:"Vue.js (Front End)",icon:Jh,color:"text-green-500"},{name:"Laravel (Back End)",icon:Zh,color:"text-red-500"},{name:"JavaScript",icon:eg,color:"text-yellow-400"},{name:"MySQL",icon:Wh,color:"text-purple-500"},{name:"PowerShell",icon:Uh,color:"text-blue-600"},{name:"Python",icon:Qh,color:"text-blue-500"},{name:"Prompt Engineering",icon:Xh,color:"text-purple-500"},{name:"Data Visualization",icon:Gh,color:"text-indigo-500"}];return(n,r)=>(fe(),ue("section",tg,[w("div",ng,[r[0]||(r[0]=w("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-12"}," My Skills ",-1)),w("div",rg,[(fe(),ue(he,null,gn(t,a=>w("div",{key:a.name,class:"bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center justify-center"},[re(ur(Hh),{icon:a.icon,class:lr(["text-4xl mb-4",a.color])},null,8,["icon","class"]),w("p",ag,Me(a.name),1)])),64))])])]))}},og={id:"product",class:"mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"},sg={class:"grid grid-cols-1 gap-8 md:grid-cols-2"},lg={class:"space-y-6"},fg={class:"flex items-start gap-4"},cg={class:"shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700"},ug={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},dg=["d"],mg={class:"text-lg font-semibold text-gray-900"},pg={class:"mt-1 text-gray-700 text-lg"},hg={__name:"Product",setup(e){const t=[{title:"Data Entry",desc:"I provide accurate and well-organized data entry services, ensuring your data is clean, structured, and ready to be used efficiently.",path:"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"},{title:"Front-End Development",desc:"I build modern, responsive, and user-friendly interfaces using Vue.js to deliver clean and intuitive user experiences.",path:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"},{title:"Back-End Development",desc:"I develop secure and reliable back-end systems using Laravel to support scalable applications and seamless data processing.",path:"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"}];return(n,r)=>(fe(),ue("section",og,[w("div",sg,[r[0]||(r[0]=w("div",{class:"col-span-1"},[w("h2",{class:"text-3xl/tight font-bold text-gray-900 sm:text-4xl"},"My Products"),w("p",{class:"mt-4 text-lg text-pretty text-gray-700"}," I offer professional data entry services, front-end development using Vue.js, and back-end development using Laravel to help build efficient and reliable web applications. ")],-1)),w("div",lg,[(fe(),ue(he,null,gn(t,a=>w("div",{key:a.title},[w("div",fg,[w("div",cg,[(fe(),ue("svg",ug,[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:a.path},null,8,dg)]))]),w("div",null,[w("h3",mg,Me(a.title),1),w("p",pg,Me(a.desc),1)])])])),64))])])]))}},gg={class:"min-h-screen bg-gray-50 text-gray-800"},vg={__name:"App",setup(e){return(t,n)=>(fe(),ue("div",gg,[re(Lu),re(Uu),re(Qu),re(ig),re(vd),re(hg),re(Vd),re(_d),re(Cd)]))}};Iu(vg).mount("#app");
