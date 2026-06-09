var zp=Object.defineProperty;var Hp=(n,e,t)=>e in n?zp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Rt=(n,e,t)=>Hp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},Rs=[],Wn=()=>{},gf=()=>!1,Ho=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Go=n=>n.startsWith("onUpdate:"),Nt=Object.assign,Hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gp=Object.prototype.hasOwnProperty,tt=(n,e)=>Gp.call(n,e),He=Array.isArray,Cs=n=>br(n)==="[object Map]",_f=n=>br(n)==="[object Set]",Uc=n=>br(n)==="[object Date]",ke=n=>typeof n=="function",mt=n=>typeof n=="string",jn=n=>typeof n=="symbol",it=n=>n!==null&&typeof n=="object",vf=n=>(it(n)||ke(n))&&ke(n.then)&&ke(n.catch),xf=Object.prototype.toString,br=n=>xf.call(n),Vp=n=>br(n).slice(8,-1),yf=n=>br(n)==="[object Object]",Gl=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ar=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},kp=/-\w/g,An=Vo(n=>n.replace(kp,e=>e.slice(1).toUpperCase())),Wp=/\B([A-Z])/g,ss=Vo(n=>n.replace(Wp,"-$1").toLowerCase()),Sf=Vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ua=Vo(n=>n?`on${Sf(n)}`:""),Vn=(n,e)=>!Object.is(n,e),ha=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},qp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Fc;const ko=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=mt(i)?$p(i):Vl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(mt(n)||it(n))return n}const Xp=/;(?![^(]*\))/g,jp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function $p(n){const e={};return n.replace(Yp,"").split(Xp).forEach(t=>{if(t){const i=t.split(jp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wo(n){let e="";if(mt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=Wo(n[t]);i&&(e+=i+" ")}else if(it(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=zl(Kp);function Mf(n){return!!n||n===""}function Jp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=kl(n[i],e[i]);return t}function kl(n,e){if(n===e)return!0;let t=Uc(n),i=Uc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=jn(n),i=jn(e),t||i)return n===e;if(t=He(n),i=He(e),t||i)return t&&i?Jp(n,e):!1;if(t=it(n),i=it(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!kl(n[o],e[o]))return!1}}return String(n)===String(e)}const bf=n=>!!(n&&n.__v_isRef===!0),ir=n=>mt(n)?n:n==null?"":He(n)||it(n)&&(n.toString===xf||!ke(n.toString))?bf(n)?ir(n.value):JSON.stringify(n,wf,2):String(n),wf=(n,e)=>bf(e)?wf(n,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[fa(i,r)+" =>"]=s,t),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>fa(t))}:jn(e)?fa(e):it(e)&&!He(e)&&!yf(e)?String(e):e,fa=(n,e="")=>{var t;return jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Lt&&(Lt.active?(this.parent=Lt,this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Lt;try{return Lt=this,e()}finally{Lt=t}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){if(this._on>0&&--this._on===0){if(Lt===this)Lt=this.prevScope;else{let e=Lt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function em(){return Lt}let at;const da=new WeakSet;class Tf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&(Lt.active?Lt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oc(this),Cf(this);const e=at,t=Rn;at=this,Rn=!0;try{return this.fn()}finally{Pf(this),at=e,Rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,Oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fl(this)&&this.run()}get dirty(){return fl(this)}}let Af=0,lr,cr;function Rf(n,e=!1){if(n.flags|=8,e){n.next=cr,cr=n;return}n.next=lr,lr=n}function Wl(){Af++}function ql(){if(--Af>0)return;if(cr){let e=cr;for(cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;lr;){let e=lr;for(lr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Xl(i),tm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function fl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===gr)||(n.globalVersion=gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!fl(n))))return;n.flags|=2;const e=n.dep,t=at,i=Rn;at=n,Rn=!0;try{Cf(n);const s=n.fn(n._value);(e.version===0||Vn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{at=t,Rn=i,Pf(n),n.flags&=-3}}function Xl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Xl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Rn=!0;const If=[];function fi(){If.push(Rn),Rn=!1}function di(){const n=If.pop();Rn=n===void 0?!0:n}function Oc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let gr=0;class nm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!at||!Rn||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new nm(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,Df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,gr++,this.notify(e)}notify(e){Wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ql()}}}function Df(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Df(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const dl=new WeakMap,Yi=Symbol(""),pl=Symbol(""),_r=Symbol("");function Bt(n,e,t){if(Rn&&at){let i=dl.get(n);i||dl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new jl),s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const o=dl.get(n);if(!o){gr++;return}const a=l=>{l&&l.trigger()};if(Wl(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&Gl(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===_r||!jn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(_r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Yi)),Cs(n)&&a(o.get(pl)));break;case"delete":l||(a(o.get(Yi)),Cs(n)&&a(o.get(pl)));break;case"set":Cs(n)&&a(o.get(Yi));break}}ql()}function rs(n){const e=et(n);return e===n?e:(Bt(e,"iterate",_r),mn(n)?e:e.map(Cn))}function qo(n){return Bt(n=et(n),"iterate",_r),n}function zn(n,e){return pi(n)?Ns($i(n)?Cn(e):e):Cn(e)}const im={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,n=>zn(this,n))},concat(...n){return rs(this).concat(...n.map(e=>He(e)?rs(e):e))},entries(){return pa(this,"entries",n=>(n[1]=zn(this,n[1]),n))},every(n,e){return $n(this,"every",n,e,void 0,arguments)},filter(n,e){return $n(this,"filter",n,e,t=>t.map(i=>zn(this,i)),arguments)},find(n,e){return $n(this,"find",n,e,t=>zn(this,t),arguments)},findIndex(n,e){return $n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return $n(this,"findLast",n,e,t=>zn(this,t),arguments)},findLastIndex(n,e){return $n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return $n(this,"forEach",n,e,void 0,arguments)},includes(...n){return ma(this,"includes",n)},indexOf(...n){return ma(this,"indexOf",n)},join(n){return rs(this).join(n)},lastIndexOf(...n){return ma(this,"lastIndexOf",n)},map(n,e){return $n(this,"map",n,e,void 0,arguments)},pop(){return qs(this,"pop")},push(...n){return qs(this,"push",n)},reduce(n,...e){return Bc(this,"reduce",n,e)},reduceRight(n,...e){return Bc(this,"reduceRight",n,e)},shift(){return qs(this,"shift")},some(n,e){return $n(this,"some",n,e,void 0,arguments)},splice(...n){return qs(this,"splice",n)},toReversed(){return rs(this).toReversed()},toSorted(n){return rs(this).toSorted(n)},toSpliced(...n){return rs(this).toSpliced(...n)},unshift(...n){return qs(this,"unshift",n)},values(){return pa(this,"values",n=>zn(this,n))}};function pa(n,e,t){const i=qo(n),s=i[e]();return i!==n&&!mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const sm=Array.prototype;function $n(n,e,t,i,s,r){const o=qo(n),a=o!==n&&!mn(n),l=o[e];if(l!==sm[e]){const h=l.apply(n,r);return a?Cn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,zn(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Bc(n,e,t,i){const s=qo(n),r=s!==n&&!mn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=zn(n,c)),t.call(this,c,zn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?zn(n,l):l}function ma(n,e,t){const i=et(n);Bt(i,"iterate",_r);const s=i[e](...t);return(s===-1||s===!1)&&Zl(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function qs(n,e,t=[]){fi(),Wl();const i=et(n)[e].apply(n,t);return ql(),di(),i}const rm=zl("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function om(n){jn(n)||(n=String(n));const e=et(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class Uf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?gm:zf:r?Bf:Of).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!s){let l;if(o&&(l=im[t]))return l;if(t==="hasOwnProperty")return om}const a=Reflect.get(e,t,zt(e)?e:i);if((jn(t)?Nf.has(t):rm(t))||(s||Bt(e,"get",t),r))return a;if(zt(a)){const l=o&&Gl(t)?a:a.value;return s&&it(l)?gl(l):l}return it(a)?s?gl(a):$l(a):a}}class Ff extends Uf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=He(e)&&Gl(t);if(!this._isShallow){const c=pi(r);if(!mn(i)&&!pi(i)&&(r=et(r),i=et(i)),!o&&zt(r)&&!zt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:tt(e,t),l=Reflect.set(e,t,i,zt(e)?e:s);return e===et(s)&&(a?Vn(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),l}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!jn(t)||!Nf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",He(e)?"length":Yi),Reflect.ownKeys(e)}}class am extends Uf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lm=new Ff,cm=new am,um=new Ff(!0);const ml=n=>n,Gr=n=>Reflect.getPrototypeOf(n);function hm(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=Cs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?ml:e?Ns:Cn;return!e&&Bt(r,"iterate",l?pl:Yi),Nt(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Vr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fm(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(Vn(s,a)&&Bt(o,"get",s),Bt(o,"get",a));const{has:l}=Gr(o),c=e?ml:n?Ns:Cn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Bt(et(s),"iterate",Yi),s.size},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(Vn(s,a)&&Bt(o,"has",s),Bt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?ml:n?Ns:Cn;return!n&&Bt(l,"iterate",Yi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Nt(t,n?{add:Vr("add"),set:Vr("set"),delete:Vr("delete"),clear:Vr("clear")}:{add(s){const r=et(this),o=Gr(r),a=et(s),l=!e&&!mn(s)&&!pi(s)?a:s;return o.has.call(r,l)||Vn(s,l)&&o.has.call(r,s)||Vn(a,l)&&o.has.call(r,a)||(r.add(l),ui(r,"add",l,l)),this},set(s,r){!e&&!mn(r)&&!pi(r)&&(r=et(r));const o=et(this),{has:a,get:l}=Gr(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Vn(r,u)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=Gr(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=hm(s,n,e)}),t}function Yl(n,e){const t=fm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const dm={get:Yl(!1,!1)},pm={get:Yl(!1,!0)},mm={get:Yl(!0,!1)};const Of=new WeakMap,Bf=new WeakMap,zf=new WeakMap,gm=new WeakMap;function _m(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $l(n){return pi(n)?n:Kl(n,!1,lm,dm,Of)}function vm(n){return Kl(n,!1,um,pm,Bf)}function gl(n){return Kl(n,!0,cm,mm,zf)}function Kl(n,e,t,i,s){if(!it(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=_m(Vp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function $i(n){return pi(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function pi(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function Zl(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function xm(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const Cn=n=>it(n)?$l(n):n,Ns=n=>it(n)?gl(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function ri(n){return ym(n,!1)}function ym(n,e){return zt(n)?n:new Sm(n,e)}class Sm{constructor(e,t){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Cn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||pi(e);e=i?e:et(e),Vn(e,t)&&(this._rawValue=e,this._value=i?e:Cn(e),this.dep.trigger())}}function Em(n){return zt(n)?n.value:n}const Mm={get:(n,e,t)=>e==="__v_raw"?n:Em(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return zt(s)&&!zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Hf(n){return $i(n)?n:new Proxy(n,Mm)}class bm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return Rf(this,!0),!0}get value(){const e=this.dep.track();return Lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wm(n,e,t=!1){let i,s;return ke(n)?i=n:(i=n.get,s=n.set),new bm(i,s,t)}const kr={},To=new WeakMap;let Gi;function Tm(n,e=!1,t=Gi){if(t){let i=To.get(t);i||To.set(t,i=[]),i.push(n)}}function Am(n,e,t=lt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:mn(y)||s===!1||s===0?bi(y,1):bi(y);let u,h,f,m,_=!1,g=!1;if(zt(n)?(h=()=>n.value,_=mn(n)):$i(n)?(h=()=>c(n),_=!0):He(n)?(g=!0,_=n.some(y=>$i(y)||mn(y)),h=()=>n.map(y=>{if(zt(y))return y.value;if($i(y))return c(y);if(ke(y))return l?l(y,2):y()})):ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){fi();try{f()}finally{di()}}const y=Gi;Gi=u;try{return l?l(n,3,[m]):n(m)}finally{Gi=y}}:h=Wn,e&&s){const y=h,R=s===!0?1/0:s;h=()=>bi(y(),R)}const p=em(),d=()=>{u.stop(),p&&p.active&&Hl(p.effects,u)};if(r&&e){const y=e;e=(...R)=>{y(...R),d()}}let v=g?new Array(n.length).fill(kr):kr;const x=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const R=u.run();if(s||_||(g?R.some((A,C)=>Vn(A,v[C])):Vn(R,v))){f&&f();const A=Gi;Gi=u;try{const C=[R,v===kr?void 0:g&&v[0]===kr?[]:v,m];v=R,l?l(e,3,C):e(...C)}finally{Gi=A}}}else u.run()};return a&&a(x),u=new Tf(h),u.scheduler=o?()=>o(x,!1):x,m=y=>Tm(y,!1,u),f=u.onStop=()=>{const y=To.get(u);if(y){if(l)l(y,4);else for(const R of y)R();To.delete(u)}},e?i?x(!0):v=u.run():o?o(x.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function bi(n,e=1/0,t){if(e<=0||!it(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))bi(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)bi(n[i],e,t);else if(_f(n)||Cs(n))n.forEach(i=>{bi(i,e,t)});else if(yf(n)){for(const i in n)bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&bi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wr(n,e,t,i){try{return i?n(...i):n()}catch(s){Xo(s,e,t)}}function Pn(n,e,t,i){if(ke(n)){const s=wr(n,e,t,i);return s&&vf(s)&&s.catch(r=>{Xo(r,e,t)}),s}if(He(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Pn(n[r],e,t,i));return s}}function Xo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){fi(),wr(r,null,10,[n,l,c]),di();return}}Rm(n,t,s,i,o)}function Rm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Xt=[];let Bn=-1;const Ps=[];let Mi=null,ws=0;const Gf=Promise.resolve();let Ao=null;function Cm(n){const e=Ao||Gf;return n?e.then(this?n.bind(this):n):e}function Pm(n){let e=Bn+1,t=Xt.length;for(;e<t;){const i=e+t>>>1,s=Xt[i],r=vr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Jl(n){if(!(n.flags&1)){const e=vr(n),t=Xt[Xt.length-1];!t||!(n.flags&2)&&e>=vr(t)?Xt.push(n):Xt.splice(Pm(e),0,n),n.flags|=1,Vf()}}function Vf(){Ao||(Ao=Gf.then(Wf))}function Lm(n){He(n)?Ps.push(...n):Mi&&n.id===-1?Mi.splice(ws+1,0,n):n.flags&1||(Ps.push(n),n.flags|=1),Vf()}function zc(n,e,t=Bn+1){for(;t<Xt.length;t++){const i=Xt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kf(n){if(Ps.length){const e=[...new Set(Ps)].sort((t,i)=>vr(t)-vr(i));if(Ps.length=0,Mi){Mi.push(...e);return}for(Mi=e,ws=0;ws<Mi.length;ws++){const t=Mi[ws];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Mi=null,ws=0}}const vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(Bn=0;Bn<Xt.length;Bn++){const e=Xt[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<Xt.length;Bn++){const e=Xt[Bn];e&&(e.flags&=-2)}Bn=-1,Xt.length=0,kf(),Ao=null,(Xt.length||Ps.length)&&Wf()}}let kn=null,qf=null;function Ro(n){const e=kn;return kn=n,qf=n&&n.type.__scopeId||null,e}function Im(n,e=kn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Zc(-1);const r=Ro(e);let o;try{o=n(...s)}finally{Ro(r),i._d&&Zc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ni(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(fi(),Pn(l,t,8,[n.el,a,n,e]),di())}}function Dm(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function xo(n,e,t=!1){const i=Lg();if(i||Ls){let s=Ls?Ls._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Nm=Symbol.for("v-scx"),Um=()=>xo(Nm);function ga(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=lt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Nt({},t),l=e&&i||!e&&r!=="post";let c;if(yr){if(r==="sync"){const m=Um();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Wn,m.resume=Wn,m.pause=Wn,m}}const u=jt;a.call=(m,_,g)=>Pn(m,u,_,g);let h=!1;r==="post"?a.scheduler=m=>{Jt(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,_)=>{_?m():Jl(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=Am(n,e,a);return yr&&(c?c.push(f):l&&f()),f}function Fm(n,e,t){const i=this.proxy,s=mt(n)?n.includes(".")?jf(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const o=Tr(this),a=Xf(s,r.bind(i),t);return o(),a}function jf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Om=Symbol("_vte"),Bm=n=>n.__isTeleport,_a=Symbol("_leaveCb");function Ql(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ql(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ec(n,e){return ke(n)?Nt({name:n.name},e,{setup:n}):n}function Yf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Co=new WeakMap;function ur(n,e,t,i,s=!1){if(He(n)){n.forEach((g,p)=>ur(g,e&&(He(e)?e[p]:e),t,i,s));return}if(hr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ur(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?oc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,h=a.setupState,f=et(h),m=h===lt?gf:g=>Hc(u,g)?!1:tt(f,g),_=(g,p)=>!(p&&Hc(u,p));if(c!=null&&c!==l){if(Gc(e),mt(c))u[c]=null,m(c)&&(h[c]=null);else if(zt(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(ke(l))wr(l,a,12,[o,u]);else{const g=mt(l),p=zt(l);if(g||p){const d=()=>{if(n.f){const v=g?m(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)He(v)&&Hl(v,r);else if(He(v))v.includes(r)||v.push(r);else if(g)u[l]=[r],m(l)&&(h[l]=u[l]);else{const x=[r];_(l,n.k)&&(l.value=x),n.k&&(u[n.k]=x)}}else g?(u[l]=o,m(l)&&(h[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const v=()=>{d(),Co.delete(n)};v.id=-1,Co.set(n,v),Jt(v,t)}else Gc(n),d()}}}function Gc(n){const e=Co.get(n);e&&(e.flags|=8,Co.delete(n))}ko().requestIdleCallback;ko().cancelIdleCallback;const hr=n=>!!n.type.__asyncLoader,$f=n=>n.type.__isKeepAlive;function zm(n,e){Kf(n,"a",e)}function Hm(n,e){Kf(n,"da",e)}function Kf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(jo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)$f(s.parent.vnode)&&Gm(i,e,t,s),s=s.parent}}function Gm(n,e,t,i){const s=jo(e,n,i,!0);nc(()=>{Hl(i[e],s)},t)}function jo(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{fi();const a=Tr(t),l=Pn(e,t,n,o);return a(),di(),l});return i?s.unshift(r):s.push(r),r}}const gi=n=>(e,t=jt)=>{(!yr||n==="sp")&&jo(n,(...i)=>e(...i),t)},Vm=gi("bm"),tc=gi("m"),km=gi("bu"),Wm=gi("u"),qm=gi("bum"),nc=gi("um"),Xm=gi("sp"),jm=gi("rtg"),Ym=gi("rtc");function $m(n,e=jt){jo("ec",n,e)}const Km=Symbol.for("v-ndc");function Vc(n,e,t,i){let s;const r=t,o=He(n);if(o||mt(n)){const a=o&&$i(n);let l=!1,c=!1;a&&(l=!mn(n),c=pi(n),n=qo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Ns(Cn(n[u])):Cn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(it(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const _l=n=>n?vd(n)?oc(n):_l(n.parent):null,fr=Nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_l(n.parent),$root:n=>_l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jf(n),$forceUpdate:n=>n.f||(n.f=()=>{Jl(n.update)}),$nextTick:n=>n.n||(n.n=Cm.bind(n.proxy)),$watch:n=>Fm.bind(n)}),va=(n,e)=>n!==lt&&!n.__isScriptSetup&&tt(n,e),Zm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(va(i,e))return o[e]=1,i[e];if(s!==lt&&tt(s,e))return o[e]=2,s[e];if(tt(r,e))return o[e]=3,r[e];if(t!==lt&&tt(t,e))return o[e]=4,t[e];vl&&(o[e]=0)}}const c=fr[e];let u,h;if(c)return e==="$attrs"&&Bt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==lt&&tt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,tt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return va(s,e)?(s[e]=t,!0):i!==lt&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==lt&&a[0]!=="$"&&tt(n,a)||va(e,a)||tt(r,a)||tt(i,a)||tt(fr,a)||tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let vl=!0;function Jm(n){const e=Jf(n),t=n.proxy,i=n.ctx;vl=!1,e.beforeCreate&&Wc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:_,activated:g,deactivated:p,beforeDestroy:d,beforeUnmount:v,destroyed:x,unmounted:y,render:R,renderTracked:A,renderTriggered:C,errorCaptured:U,serverPrefetch:M,expose:T,inheritAttrs:B,components:G,directives:z,filters:L}=e;if(c&&Qm(c,i,null),o)for(const j in o){const V=o[j];ke(V)&&(i[j]=V.bind(t))}if(s){const j=s.call(t,t);it(j)&&(n.data=$l(j))}if(vl=!0,r)for(const j in r){const V=r[j],Y=ke(V)?V.bind(t,t):ke(V.get)?V.get.bind(t,t):Wn,re=!ke(V)&&ke(V.set)?V.set.bind(t):Wn,ae=Og({get:Y,set:re});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>ae.value,set:K=>ae.value=K})}if(a)for(const j in a)Zf(a[j],i,t,j);if(l){const j=ke(l)?l.call(t):l;Reflect.ownKeys(j).forEach(V=>{Dm(V,j[V])})}u&&Wc(u,n,"c");function D(j,V){He(V)?V.forEach(Y=>j(Y.bind(t))):V&&j(V.bind(t))}if(D(Vm,h),D(tc,f),D(km,m),D(Wm,_),D(zm,g),D(Hm,p),D($m,U),D(Ym,A),D(jm,C),D(qm,v),D(nc,y),D(Xm,M),He(T))if(T.length){const j=n.exposed||(n.exposed={});T.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:Y=>t[V]=Y,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Wn&&(n.render=R),B!=null&&(n.inheritAttrs=B),G&&(n.components=G),z&&(n.directives=z),M&&Yf(n)}function Qm(n,e,t=Wn){He(n)&&(n=xl(n));for(const i in n){const s=n[i];let r;it(s)?"default"in s?r=xo(s.from||i,s.default,!0):r=xo(s.from||i):r=xo(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Wc(n,e,t){Pn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Zf(n,e,t,i){let s=i.includes(".")?jf(t,i):()=>t[i];if(mt(n)){const r=e[n];ke(r)&&ga(s,r)}else if(ke(n))ga(s,n.bind(t));else if(it(n))if(He(n))n.forEach(r=>Zf(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&ga(s,r,n)}}function Jf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Po(l,c,o,!0)),Po(l,e,o)),it(e)&&r.set(e,l),l}function Po(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Po(n,r,t,!0),s&&s.forEach(o=>Po(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=eg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const eg={data:qc,props:Xc,emits:Xc,methods:sr,computed:sr,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:sr,directives:sr,watch:ng,provide:qc,inject:tg};function qc(n,e){return e?n?function(){return Nt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function tg(n,e){return sr(xl(n),xl(e))}function xl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function sr(n,e){return n?Nt(Object.create(null),n,e):e}function Xc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Nt(Object.create(null),kc(n),kc(e??{})):e}function ng(n,e){if(!n)return e;if(!e)return n;const t=Nt(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function Qf(){return{app:null,config:{isNativeTag:gf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function sg(n,e){return function(i,s=null){ke(i)||(i=Nt({},i)),s!=null&&!it(s)&&(s=null);const r=Qf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ig++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...h)):ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||qn(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,oc(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ls;Ls=c;try{return u()}finally{Ls=h}}};return c}}let Ls=null;const rg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${An(e)}Modifiers`]||n[`${ss(e)}Modifiers`];function og(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let s=t;const r=e.startsWith("update:"),o=r&&rg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>mt(u)?u.trim():u)),o.number&&(s=t.map(qp)));let a,l=i[a=ua(e)]||i[a=ua(An(e))];!l&&r&&(l=i[a=ua(ss(e))]),l&&Pn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,s)}}const ag=new WeakMap;function ed(n,e,t=!1){const i=t?ag:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=ed(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(it(n)&&i.set(n,null),null):(He(r)?r.forEach(l=>o[l]=null):Nt(o,r),it(n)&&i.set(n,o),o)}function Yo(n,e){return!n||!Ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,ss(e))||tt(n,e))}function jc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:_,inheritAttrs:g}=n,p=Ro(n);let d,v;try{if(t.shapeFlag&4){const y=s||i,R=y;d=Hn(c.call(R,y,u,h,m,f,_)),v=a}else{const y=e;d=Hn(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),v=e.props?a:lg(a)}}catch(y){dr.length=0,Xo(y,n,1),d=qn(Pi)}let x=d;if(v&&g!==!1){const y=Object.keys(v),{shapeFlag:R}=x;y.length&&R&7&&(r&&y.some(Go)&&(v=cg(v,r)),x=Us(x,v,!1,!0))}return t.dirs&&(x=Us(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ql(x,t.transition),d=x,Ro(p),d}const lg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ho(t))&&((e||(e={}))[t]=n[t]);return e},cg=(n,e)=>{const t={};for(const i in n)(!Go(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ug(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Yc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(td(o,i,f)&&!Yo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yc(i,o,c):!0:!!o;return!1}function Yc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(td(e,n,r)&&!Yo(t,r))return!0}return!1}function td(n,e,t){const i=n[t],s=e[t];return t==="style"&&it(i)&&it(s)?!kl(i,s):i!==s}function hg({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const nd={},id=()=>Object.create(nd),sd=n=>Object.getPrototypeOf(n)===nd;function fg(n,e,t,i=!1){const s={},r=id();n.propsDefaults=Object.create(null),rd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:vm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function dg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Yo(n.emitsOptions,f))continue;const m=e[f];if(l)if(tt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const _=An(f);s[_]=yl(l,a,_,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{rd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!tt(e,h)&&((u=ss(h))===h||!tt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=yl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!tt(e,h))&&(delete r[h],c=!0)}c&&ui(n.attrs,"set","")}function rd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ar(l))continue;const c=e[l];let u;s&&tt(s,u=An(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Yo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||lt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=yl(s,l,h,c[h],n,!tt(c,h))}}return o}function yl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Tr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ss(t))&&(i=!0))}return i}const pg=new WeakMap;function od(n,e,t=!1){const i=t?pg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=h=>{l=!0;const[f,m]=od(h,e,!0);Nt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return it(n)&&i.set(n,Rs),Rs;if(He(r))for(let u=0;u<r.length;u++){const h=An(r[u]);$c(h)&&(o[h]=lt)}else if(r)for(const u in r){const h=An(u);if($c(h)){const f=r[u],m=o[h]=He(f)||ke(f)?{type:f}:Nt({},f),_=m.type;let g=!1,p=!0;if(He(_))for(let d=0;d<_.length;++d){const v=_[d],x=ke(v)&&v.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(p=!1)}else g=ke(_)&&_.name==="Boolean";m[0]=g,m[1]=p,(g||tt(m,"default"))&&a.push(h)}}const c=[o,a];return it(n)&&i.set(n,c),c}function $c(n){return n[0]!=="$"&&!ar(n)}const ic=n=>n==="_"||n==="_ctx"||n==="$stable",sc=n=>He(n)?n.map(Hn):[Hn(n)],mg=(n,e,t)=>{if(e._n)return e;const i=Im((...s)=>sc(e(...s)),t);return i._c=!1,i},ad=(n,e,t)=>{const i=n._ctx;for(const s in n){if(ic(s))continue;const r=n[s];if(ke(r))e[s]=mg(s,r,i);else if(r!=null){const o=sc(r);e[s]=()=>o}}},ld=(n,e)=>{const t=sc(e);n.slots.default=()=>t},cd=(n,e,t)=>{for(const i in e)(t||!ic(i))&&(n[i]=e[i])},gg=(n,e,t)=>{const i=n.slots=id();if(n.vnode.shapeFlag&32){const s=e._;s?(cd(i,e,t),t&&Ef(i,"_",s,!0)):ad(e,i)}else e&&ld(n,e)},_g=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:cd(s,e,t):(r=!e.$stable,ad(e,s)),o=e}else e&&(ld(n,e),o={default:1});if(r)for(const a in s)!ic(a)&&o[a]==null&&delete s[a]},Jt=Eg;function vg(n){return xg(n)}function xg(n,e){const t=ko();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Wn,insertStaticContent:_}=n,g=(E,F,H,J=null,X=null,se=null,le=void 0,b=null,S=!!F.dynamicChildren)=>{if(E===F)return;E&&!Xs(E,F)&&(J=Me(E),K(E,X,se,!0),E=null),F.patchFlag===-2&&(S=!1,F.dynamicChildren=null);const{type:I,ref:Q,shapeFlag:W}=F;switch(I){case $o:p(E,F,H,J);break;case Pi:d(E,F,H,J);break;case ya:E==null&&v(F,H,J,le);break;case Sn:G(E,F,H,J,X,se,le,b,S);break;default:W&1?R(E,F,H,J,X,se,le,b,S):W&6?z(E,F,H,J,X,se,le,b,S):(W&64||W&128)&&I.process(E,F,H,J,X,se,le,b,S,Ae)}Q!=null&&X?ur(Q,E&&E.ref,se,F||E,!F):Q==null&&E&&E.ref!=null&&ur(E.ref,null,se,E,!0)},p=(E,F,H,J)=>{if(E==null)i(F.el=a(F.children),H,J);else{const X=F.el=E.el;F.children!==E.children&&c(X,F.children)}},d=(E,F,H,J)=>{E==null?i(F.el=l(F.children||""),H,J):F.el=E.el},v=(E,F,H,J)=>{[E.el,E.anchor]=_(E.children,F,H,J,E.el,E.anchor)},x=({el:E,anchor:F},H,J)=>{let X;for(;E&&E!==F;)X=f(E),i(E,H,J),E=X;i(F,H,J)},y=({el:E,anchor:F})=>{let H;for(;E&&E!==F;)H=f(E),s(E),E=H;s(F)},R=(E,F,H,J,X,se,le,b,S)=>{if(F.type==="svg"?le="svg":F.type==="math"&&(le="mathml"),E==null)A(F,H,J,X,se,le,b,S);else{const I=E.el&&E.el._isVueCE?E.el:null;try{I&&I._beginPatch(),M(E,F,X,se,le,b,S)}finally{I&&I._endPatch()}}},A=(E,F,H,J,X,se,le,b)=>{let S,I;const{props:Q,shapeFlag:W,transition:Z,dirs:he}=E;if(S=E.el=o(E.type,se,Q&&Q.is,Q),W&8?u(S,E.children):W&16&&U(E.children,S,null,J,X,xa(E,se),le,b),he&&Ni(E,null,J,"created"),C(S,E,E.scopeId,le,J),Q){for(const fe in Q)fe!=="value"&&!ar(fe)&&r(S,fe,null,Q[fe],se,J);"value"in Q&&r(S,"value",null,Q.value,se),(I=Q.onVnodeBeforeMount)&&Nn(I,J,E)}he&&Ni(E,null,J,"beforeMount");const ue=yg(X,Z);ue&&Z.beforeEnter(S),i(S,F,H),((I=Q&&Q.onVnodeMounted)||ue||he)&&Jt(()=>{try{I&&Nn(I,J,E),ue&&Z.enter(S),he&&Ni(E,null,J,"mounted")}finally{}},X)},C=(E,F,H,J,X)=>{if(H&&m(E,H),J)for(let se=0;se<J.length;se++)m(E,J[se]);if(X){let se=X.subTree;if(F===se||dd(se.type)&&(se.ssContent===F||se.ssFallback===F)){const le=X.vnode;C(E,le,le.scopeId,le.slotScopeIds,X.parent)}}},U=(E,F,H,J,X,se,le,b,S=0)=>{for(let I=S;I<E.length;I++){const Q=E[I]=b?ci(E[I]):Hn(E[I]);g(null,Q,F,H,J,X,se,le,b)}},M=(E,F,H,J,X,se,le)=>{const b=F.el=E.el;let{patchFlag:S,dynamicChildren:I,dirs:Q}=F;S|=E.patchFlag&16;const W=E.props||lt,Z=F.props||lt;let he;if(H&&Ui(H,!1),(he=Z.onVnodeBeforeUpdate)&&Nn(he,H,F,E),Q&&Ni(F,E,H,"beforeUpdate"),H&&Ui(H,!0),(W.innerHTML&&Z.innerHTML==null||W.textContent&&Z.textContent==null)&&u(b,""),I?T(E.dynamicChildren,I,b,H,J,xa(F,X),se):le||V(E,F,b,null,H,J,xa(F,X),se,!1),S>0){if(S&16)B(b,W,Z,H,X);else if(S&2&&W.class!==Z.class&&r(b,"class",null,Z.class,X),S&4&&r(b,"style",W.style,Z.style,X),S&8){const ue=F.dynamicProps;for(let fe=0;fe<ue.length;fe++){const ge=ue[fe],Re=W[ge],ce=Z[ge];(ce!==Re||ge==="value")&&r(b,ge,Re,ce,X,H)}}S&1&&E.children!==F.children&&u(b,F.children)}else!le&&I==null&&B(b,W,Z,H,X);((he=Z.onVnodeUpdated)||Q)&&Jt(()=>{he&&Nn(he,H,F,E),Q&&Ni(F,E,H,"updated")},J)},T=(E,F,H,J,X,se,le)=>{for(let b=0;b<F.length;b++){const S=E[b],I=F[b],Q=S.el&&(S.type===Sn||!Xs(S,I)||S.shapeFlag&198)?h(S.el):H;g(S,I,Q,null,J,X,se,le,!0)}},B=(E,F,H,J,X)=>{if(F!==H){if(F!==lt)for(const se in F)!ar(se)&&!(se in H)&&r(E,se,F[se],null,X,J);for(const se in H){if(ar(se))continue;const le=H[se],b=F[se];le!==b&&se!=="value"&&r(E,se,b,le,X,J)}"value"in H&&r(E,"value",F.value,H.value,X)}},G=(E,F,H,J,X,se,le,b,S)=>{const I=F.el=E?E.el:a(""),Q=F.anchor=E?E.anchor:a("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:he}=F;he&&(b=b?b.concat(he):he),E==null?(i(I,H,J),i(Q,H,J),U(F.children||[],H,Q,X,se,le,b,S)):W>0&&W&64&&Z&&E.dynamicChildren&&E.dynamicChildren.length===Z.length?(T(E.dynamicChildren,Z,H,X,se,le,b),(F.key!=null||X&&F===X.subTree)&&ud(E,F,!0)):V(E,F,H,Q,X,se,le,b,S)},z=(E,F,H,J,X,se,le,b,S)=>{F.slotScopeIds=b,E==null?F.shapeFlag&512?X.ctx.activate(F,H,J,le,S):L(F,H,J,X,se,le,S):N(E,F,S)},L=(E,F,H,J,X,se,le)=>{const b=E.component=Pg(E,J,X);if($f(E)&&(b.ctx.renderer=Ae),Ig(b,!1,le),b.asyncDep){if(X&&X.registerDep(b,D,le),!E.el){const S=b.subTree=qn(Pi);d(null,S,F,H),E.placeholder=S.el}}else D(b,E,F,H,X,se,le)},N=(E,F,H)=>{const J=F.component=E.component;if(ug(E,F,H))if(J.asyncDep&&!J.asyncResolved){j(J,F,H);return}else J.next=F,J.update();else F.el=E.el,J.vnode=F},D=(E,F,H,J,X,se,le)=>{const b=()=>{if(E.isMounted){let{next:W,bu:Z,u:he,parent:ue,vnode:fe}=E;{const Ue=hd(E);if(Ue){W&&(W.el=fe.el,j(E,W,le)),Ue.asyncDep.then(()=>{Jt(()=>{E.isUnmounted||I()},X)});return}}let ge=W,Re;Ui(E,!1),W?(W.el=fe.el,j(E,W,le)):W=fe,Z&&ha(Z),(Re=W.props&&W.props.onVnodeBeforeUpdate)&&Nn(Re,ue,W,fe),Ui(E,!0);const ce=jc(E),qe=E.subTree;E.subTree=ce,g(qe,ce,h(qe.el),Me(qe),E,X,se),W.el=ce.el,ge===null&&hg(E,ce.el),he&&Jt(he,X),(Re=W.props&&W.props.onVnodeUpdated)&&Jt(()=>Nn(Re,ue,W,fe),X)}else{let W;const{el:Z,props:he}=F,{bm:ue,m:fe,parent:ge,root:Re,type:ce}=E,qe=hr(F);Ui(E,!1),ue&&ha(ue),!qe&&(W=he&&he.onVnodeBeforeMount)&&Nn(W,ge,F),Ui(E,!0);{Re.ce&&Re.ce._hasShadowRoot()&&Re.ce._injectChildStyle(ce,E.parent?E.parent.type:void 0);const Ue=E.subTree=jc(E);g(null,Ue,H,J,E,X,se),F.el=Ue.el}if(fe&&Jt(fe,X),!qe&&(W=he&&he.onVnodeMounted)){const Ue=F;Jt(()=>Nn(W,ge,Ue),X)}(F.shapeFlag&256||ge&&hr(ge.vnode)&&ge.vnode.shapeFlag&256)&&E.a&&Jt(E.a,X),E.isMounted=!0,F=H=J=null}};E.scope.on();const S=E.effect=new Tf(b);E.scope.off();const I=E.update=S.run.bind(S),Q=E.job=S.runIfDirty.bind(S);Q.i=E,Q.id=E.uid,S.scheduler=()=>Jl(Q),Ui(E,!0),I()},j=(E,F,H)=>{F.component=E;const J=E.vnode.props;E.vnode=F,E.next=null,dg(E,F.props,J,H),_g(E,F.children,H),fi(),zc(E),di()},V=(E,F,H,J,X,se,le,b,S=!1)=>{const I=E&&E.children,Q=E?E.shapeFlag:0,W=F.children,{patchFlag:Z,shapeFlag:he}=F;if(Z>0){if(Z&128){re(I,W,H,J,X,se,le,b,S);return}else if(Z&256){Y(I,W,H,J,X,se,le,b,S);return}}he&8?(Q&16&&Ee(I,X,se),W!==I&&u(H,W)):Q&16?he&16?re(I,W,H,J,X,se,le,b,S):Ee(I,X,se,!0):(Q&8&&u(H,""),he&16&&U(W,H,J,X,se,le,b,S))},Y=(E,F,H,J,X,se,le,b,S)=>{E=E||Rs,F=F||Rs;const I=E.length,Q=F.length,W=Math.min(I,Q);let Z;for(Z=0;Z<W;Z++){const he=F[Z]=S?ci(F[Z]):Hn(F[Z]);g(E[Z],he,H,null,X,se,le,b,S)}I>Q?Ee(E,X,se,!0,!1,W):U(F,H,J,X,se,le,b,S,W)},re=(E,F,H,J,X,se,le,b,S)=>{let I=0;const Q=F.length;let W=E.length-1,Z=Q-1;for(;I<=W&&I<=Z;){const he=E[I],ue=F[I]=S?ci(F[I]):Hn(F[I]);if(Xs(he,ue))g(he,ue,H,null,X,se,le,b,S);else break;I++}for(;I<=W&&I<=Z;){const he=E[W],ue=F[Z]=S?ci(F[Z]):Hn(F[Z]);if(Xs(he,ue))g(he,ue,H,null,X,se,le,b,S);else break;W--,Z--}if(I>W){if(I<=Z){const he=Z+1,ue=he<Q?F[he].el:J;for(;I<=Z;)g(null,F[I]=S?ci(F[I]):Hn(F[I]),H,ue,X,se,le,b,S),I++}}else if(I>Z)for(;I<=W;)K(E[I],X,se,!0),I++;else{const he=I,ue=I,fe=new Map;for(I=ue;I<=Z;I++){const _e=F[I]=S?ci(F[I]):Hn(F[I]);_e.key!=null&&fe.set(_e.key,I)}let ge,Re=0;const ce=Z-ue+1;let qe=!1,Ue=0;const De=new Array(ce);for(I=0;I<ce;I++)De[I]=0;for(I=he;I<=W;I++){const _e=E[I];if(Re>=ce){K(_e,X,se,!0);continue}let Ie;if(_e.key!=null)Ie=fe.get(_e.key);else for(ge=ue;ge<=Z;ge++)if(De[ge-ue]===0&&Xs(_e,F[ge])){Ie=ge;break}Ie===void 0?K(_e,X,se,!0):(De[Ie-ue]=I+1,Ie>=Ue?Ue=Ie:qe=!0,g(_e,F[Ie],H,null,X,se,le,b,S),Re++)}const Le=qe?Sg(De):Rs;for(ge=Le.length-1,I=ce-1;I>=0;I--){const _e=ue+I,Ie=F[_e],Ze=F[_e+1],ct=_e+1<Q?Ze.el||fd(Ze):J;De[I]===0?g(null,Ie,H,ct,X,se,le,b,S):qe&&(ge<0||I!==Le[ge]?ae(Ie,H,ct,2):ge--)}}},ae=(E,F,H,J,X=null)=>{const{el:se,type:le,transition:b,children:S,shapeFlag:I}=E;if(I&6){ae(E.component.subTree,F,H,J);return}if(I&128){E.suspense.move(F,H,J);return}if(I&64){le.move(E,F,H,Ae);return}if(le===Sn){i(se,F,H);for(let W=0;W<S.length;W++)ae(S[W],F,H,J);i(E.anchor,F,H);return}if(le===ya){x(E,F,H);return}if(J!==2&&I&1&&b)if(J===0)b.persisted&&!se[_a]?i(se,F,H):(b.beforeEnter(se),i(se,F,H),Jt(()=>b.enter(se),X));else{const{leave:W,delayLeave:Z,afterLeave:he}=b,ue=()=>{E.ctx.isUnmounted?s(se):i(se,F,H)},fe=()=>{const ge=se._isLeaving||!!se[_a];se._isLeaving&&se[_a](!0),b.persisted&&!ge?ue():W(se,()=>{ue(),he&&he()})};Z?Z(se,ue,fe):fe()}else i(se,F,H)},K=(E,F,H,J=!1,X=!1)=>{const{type:se,props:le,ref:b,children:S,dynamicChildren:I,shapeFlag:Q,patchFlag:W,dirs:Z,cacheIndex:he,memo:ue}=E;if(W===-2&&(X=!1),b!=null&&(fi(),ur(b,null,H,E,!0),di()),he!=null&&(F.renderCache[he]=void 0),Q&256){F.ctx.deactivate(E);return}const fe=Q&1&&Z,ge=!hr(E);let Re;if(ge&&(Re=le&&le.onVnodeBeforeUnmount)&&Nn(Re,F,E),Q&6)de(E.component,H,J);else{if(Q&128){E.suspense.unmount(H,J);return}fe&&Ni(E,null,F,"beforeUnmount"),Q&64?E.type.remove(E,F,H,Ae,J):I&&!I.hasOnce&&(se!==Sn||W>0&&W&64)?Ee(I,F,H,!1,!0):(se===Sn&&W&384||!X&&Q&16)&&Ee(S,F,H),J&&ne(E)}const ce=ue!=null&&he==null;(ge&&(Re=le&&le.onVnodeUnmounted)||fe||ce)&&Jt(()=>{Re&&Nn(Re,F,E),fe&&Ni(E,null,F,"unmounted"),ce&&(E.el=null)},H)},ne=E=>{const{type:F,el:H,anchor:J,transition:X}=E;if(F===Sn){oe(H,J);return}if(F===ya){y(E);return}const se=()=>{s(H),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(E.shapeFlag&1&&X&&!X.persisted){const{leave:le,delayLeave:b}=X,S=()=>le(H,se);b?b(E.el,se,S):S()}else se()},oe=(E,F)=>{let H;for(;E!==F;)H=f(E),s(E),E=H;s(F)},de=(E,F,H)=>{const{bum:J,scope:X,job:se,subTree:le,um:b,m:S,a:I}=E;Kc(S),Kc(I),J&&ha(J),X.stop(),se&&(se.flags|=8,K(le,E,F,H)),b&&Jt(b,F),Jt(()=>{E.isUnmounted=!0},F)},Ee=(E,F,H,J=!1,X=!1,se=0)=>{for(let le=se;le<E.length;le++)K(E[le],F,H,J,X)},Me=E=>{if(E.shapeFlag&6)return Me(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const F=f(E.anchor||E.el),H=F&&F[Om];return H?f(H):F};let Ce=!1;const Oe=(E,F,H)=>{let J;E==null?F._vnode&&(K(F._vnode,null,null,!0),J=F._vnode.component):g(F._vnode||null,E,F,null,null,null,H),F._vnode=E,Ce||(Ce=!0,zc(J),kf(),Ce=!1)},Ae={p:g,um:K,m:ae,r:ne,mt:L,mc:U,pc:V,pbc:T,n:Me,o:n};return{render:Oe,hydrate:void 0,createApp:sg(Oe)}}function xa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ud(n,e,t=!1){const i=n.children,s=e.children;if(He(i)&&He(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ud(o,a)),a.type===$o&&(a.patchFlag===-1&&(a=s[r]=ci(a)),a.el=o.el),a.type===Pi&&!a.el&&(a.el=o.el)}}function Sg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function hd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hd(e)}function Kc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function fd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?fd(e.subTree):null}const dd=n=>n.__isSuspense;function Eg(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Lm(n)}const Sn=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),Pi=Symbol.for("v-cmt"),ya=Symbol.for("v-stc"),dr=[];let on=null;function yn(n=!1){dr.push(on=n?null:[])}function Mg(){dr.pop(),on=dr[dr.length-1]||null}let xr=1;function Zc(n,e=!1){xr+=n,n<0&&on&&e&&(on.hasOnce=!0)}function pd(n){return n.dynamicChildren=xr>0?on||Rs:null,Mg(),xr>0&&on&&on.push(n),n}function oi(n,e,t,i,s,r){return pd(dt(n,e,t,i,s,r,!0))}function md(n,e,t,i,s){return pd(qn(n,e,t,i,s,!0))}function gd(n){return n?n.__v_isVNode===!0:!1}function Xs(n,e){return n.type===e.type&&n.key===e.key}const _d=({key:n})=>n??null,yo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?mt(n)||zt(n)||ke(n)?{i:kn,r:n,k:e,f:!!t}:n:null);function dt(n,e=null,t=null,i=0,s=null,r=n===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_d(e),ref:e&&yo(e),scopeId:qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kn};return a?(rc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),xr>0&&!o&&on&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&on.push(l),l}const qn=bg;function bg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Km)&&(n=Pi),gd(n)){const a=Us(n,e,!0);return t&&rc(a,t),xr>0&&!r&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(Fg(n)&&(n=n.__vccOpts),e){e=wg(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=Wo(a)),it(l)&&(Zl(l)&&!He(l)&&(l=Nt({},l)),e.style=Vl(l))}const o=mt(n)?1:dd(n)?128:Bm(n)?64:it(n)?4:ke(n)?2:0;return dt(n,e,t,i,s,o,r,!0)}function wg(n){return n?Zl(n)||sd(n)?Nt({},n):n:null}function Us(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ag(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_d(c),ref:e&&e.ref?t&&r?He(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Sn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Us(n.ssContent),ssFallback:n.ssFallback&&Us(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ql(u,l.clone(u)),u}function Tg(n=" ",e=0){return qn($o,null,n,e)}function Sa(n="",e=!1){return e?(yn(),md(Pi,null,n)):qn(Pi,null,n)}function Hn(n){return n==null||typeof n=="boolean"?qn(Pi):He(n)?qn(Sn,null,n.slice()):gd(n)?ci(n):qn($o,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Us(n)}function rc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),rc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!sd(e)?e._ctx=kn:s===3&&kn&&(kn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:kn},t=32):(e=String(e),i&64?(t=16,e=[Tg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ag(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Wo([e.class,i.class]));else if(s==="style")e.style=Vl([e.style,i.style]);else if(Ho(s)){const r=e[s],o=i[s];o&&r!==o&&!(He(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Go(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Nn(n,e,t,i=null){Pn(n,e,7,[t,i])}const Rg=Qf();let Cg=0;function Pg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Rg,r={uid:Cg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:od(i,s),emitsOptions:ed(i,s),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=og.bind(null,r),n.ce&&n.ce(r),r}let jt=null;const Lg=()=>jt||kn;let Lo,Sl;{const n=ko(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Lo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Sl=e("__VUE_SSR_SETTERS__",t=>yr=t)}const Tr=n=>{const e=jt;return Lo(n),n.scope.on(),()=>{n.scope.off(),Lo(e)}},Jc=()=>{jt&&jt.scope.off(),Lo(null)};function vd(n){return n.vnode.shapeFlag&4}let yr=!1;function Ig(n,e=!1,t=!1){e&&Sl(e);const{props:i,children:s}=n.vnode,r=vd(n);fg(n,i,r,e),gg(n,s,t||e);const o=r?Dg(n,e):void 0;return e&&Sl(!1),o}function Dg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zm);const{setup:i}=t;if(i){fi();const s=n.setupContext=i.length>1?Ug(n):null,r=Tr(n),o=wr(i,n,0,[n.props,s]),a=vf(o);if(di(),r(),(a||n.sp)&&!hr(n)&&Yf(n),a){if(o.then(Jc,Jc),e)return o.then(l=>{Qc(n,l)}).catch(l=>{Xo(l,n,0)});n.asyncDep=o}else Qc(n,o)}else xd(n)}function Qc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:it(e)&&(n.setupState=Hf(e)),xd(n)}function xd(n,e,t){const i=n.type;n.render||(n.render=i.render||Wn);{const s=Tr(n);fi();try{Jm(n)}finally{di(),s()}}}const Ng={get(n,e){return Bt(n,"get",""),n[e]}};function Ug(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ng),slots:n.slots,emit:n.emit,expose:e}}function oc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hf(xm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fr)return fr[t](n)},has(e,t){return t in e||t in fr}})):n.proxy}function Fg(n){return ke(n)&&"__vccOpts"in n}const Og=(n,e)=>wm(n,e,yr),Bg="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let El;const eu=typeof window<"u"&&window.trustedTypes;if(eu)try{El=eu.createPolicy("vue",{createHTML:n=>n})}catch{}const yd=El?n=>El.createHTML(n):n=>n,zg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,tu=li&&li.createElement("template"),Gg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?li.createElementNS(zg,n):e==="mathml"?li.createElementNS(Hg,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{tu.innerHTML=yd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=tu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vg=Symbol("_vtc");function kg(n,e,t){const i=n[Vg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const nu=Symbol("_vod"),Wg=Symbol("_vsh"),qg=Symbol(""),Xg=/(?:^|;)\s*display\s*:/;function jg(n,e,t){const i=n.style,s=mt(t);let r=!1;if(t&&!s){if(e)if(mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&rr(i,a,"")}else for(const o in e)t[o]==null&&rr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?$g(n,o,!mt(e)&&e?e[o]:void 0,a)||rr(i,o,a):rr(i,o,"")}}else if(s){if(e!==t){const o=i[qg];o&&(t+=";"+o),i.cssText=t,r=Xg.test(t)}}else e&&n.removeAttribute("style");nu in n&&(n[nu]=r?i.display:"",n[Wg]&&(i.display="none"))}const iu=/\s*!important$/;function rr(n,e,t){if(He(t))t.forEach(i=>rr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Yg(n,e);iu.test(t)?n.setProperty(ss(i),t.replace(iu,""),"important"):n[i]=t}}const su=["Webkit","Moz","ms"],Ea={};function Yg(n,e){const t=Ea[e];if(t)return t;let i=An(e);if(i!=="filter"&&i in n)return Ea[e]=i;i=Sf(i);for(let s=0;s<su.length;s++){const r=su[s]+i;if(r in n)return Ea[e]=r}return e}function $g(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&mt(i)&&t===i}const ru="http://www.w3.org/1999/xlink";function ou(n,e,t,i,s,r=Zp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ru,e.slice(6,e.length)):n.setAttributeNS(ru,e,t):t==null||r&&!Mf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":jn(t)?String(t):t)}function au(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Mf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Kg(n,e,t,i){n.addEventListener(e,t,i)}function Zg(n,e,t,i){n.removeEventListener(e,t,i)}const lu=Symbol("_vei");function Jg(n,e,t,i,s=null){const r=n[lu]||(n[lu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Qg(e);if(i){const c=r[e]=n_(i,s);Kg(n,a,c,l)}else o&&(Zg(n,a,o,l),r[e]=void 0)}}const cu=/(?:Once|Passive|Capture)$/;function Qg(n){let e;if(cu.test(n)){e={};let i;for(;i=n.match(cu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ss(n.slice(2)),e]}let Ma=0;const e_=Promise.resolve(),t_=()=>Ma||(e_.then(()=>Ma=0),Ma=Date.now());function n_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(He(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Pn(c,e,5,a)}}else Pn(s,e,5,[i])};return t.value=n,t.attached=t_(),t}const uu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,i_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?kg(n,i,o):e==="style"?jg(n,t,i):Ho(e)?Go(e)||Jg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):s_(n,e,i,o))?(au(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ou(n,e,i,o,r,e!=="value")):n._isVueCE&&(r_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!mt(i)))?au(n,An(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ou(n,e,i,o))};function s_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&uu(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uu(e)&&mt(t)?!1:e in n}function r_(n,e){const t=n._def.props;if(!t)return!1;const i=An(e);return Array.isArray(t)?t.some(s=>An(s)===i):Object.keys(t).some(s=>An(s)===i)}const o_=Nt({patchProp:i_},Gg);let hu;function a_(){return hu||(hu=vg(o_))}const l_=(...n)=>{const e=a_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=u_(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,c_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function c_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u_(n){return mt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="160",h_=0,fu=1,f_=2,Sd=1,d_=2,ai=3,Li=0,en=1,Mn=2,Ai=0,Is=1,du=2,pu=3,mu=4,p_=5,Wi=100,m_=101,g_=102,gu=103,_u=104,__=200,v_=201,x_=202,y_=203,Ml=204,bl=205,S_=206,E_=207,M_=208,b_=209,w_=210,T_=211,A_=212,R_=213,C_=214,P_=0,L_=1,I_=2,Io=3,D_=4,N_=5,U_=6,F_=7,Ed=0,O_=1,B_=2,Ri=0,z_=1,H_=2,G_=3,V_=4,k_=5,W_=6,Md=300,Fs=301,Os=302,wl=303,Tl=304,Ko=306,Al=1e3,bn=1001,Rl=1002,qt=1003,vu=1004,ba=1005,fn=1006,q_=1007,Sr=1008,Ci=1009,X_=1010,j_=1011,lc=1012,bd=1013,wi=1014,Ti=1015,Er=1016,wd=1017,Td=1018,Ki=1020,Y_=1021,wn=1023,$_=1024,K_=1025,Zi=1026,Bs=1027,Z_=1028,Ad=1029,J_=1030,Rd=1031,Cd=1033,wa=33776,Ta=33777,Aa=33778,Ra=33779,xu=35840,yu=35841,Su=35842,Eu=35843,Pd=36196,Mu=37492,bu=37496,wu=37808,Tu=37809,Au=37810,Ru=37811,Cu=37812,Pu=37813,Lu=37814,Iu=37815,Du=37816,Nu=37817,Uu=37818,Fu=37819,Ou=37820,Bu=37821,Ca=36492,zu=36494,Hu=36495,Q_=36283,Gu=36284,Vu=36285,ku=36286,Ld=3e3,Ji=3001,ev=3200,tv=3201,Id=0,nv=1,pn="",It="srgb",mi="srgb-linear",cc="display-p3",Zo="display-p3-linear",Do="linear",ht="srgb",No="rec709",Uo="p3",os=7680,Wu=519,iv=512,sv=513,rv=514,Dd=515,ov=516,av=517,lv=518,cv=519,qu=35044,Xu="300 es",Cl=1035,hi=2e3,Fo=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,Pl=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function uv(n,e){return(n%e+e)%e}function La(n,e,t){return(1-t)*n+t*e}function ju(n){return(n&n-1)===0&&n!==0}function Ll(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],d=s[6],v=s[1],x=s[4],y=s[7],R=s[2],A=s[5],C=s[8];return r[0]=o*g+a*v+l*R,r[3]=o*p+a*x+l*A,r[6]=o*d+a*y+l*C,r[1]=c*g+u*v+h*R,r[4]=c*p+u*x+h*A,r[7]=c*d+u*y+h*C,r[2]=f*g+m*v+_*R,r[5]=f*p+m*x+_*A,r[8]=f*d+m*y+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new $e;function Nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hv(){const n=Oo("canvas");return n.style.display="block",n}const Yu={};function pr(n){n in Yu||(Yu[n]=!0,console.warn(n))}const $u=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[mi]:{transfer:Do,primaries:No,toReference:n=>n,fromReference:n=>n},[It]:{transfer:ht,primaries:No,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zo]:{transfer:Do,primaries:Uo,toReference:n=>n.applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u)},[cc]:{transfer:ht,primaries:Uo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u).convertLinearToSRGB()}},fv=new Set([mi,Zo]),nt={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Wr[e].toReference,s=Wr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Wr[n].primaries},getTransfer:function(n){return n===pn?Do:Wr[n].transfer}};function Ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let as;class Ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Oo("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ds(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dv=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ud.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pv=0;class ln extends Gs{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=bn,s=bn,r=fn,o=Sr,a=wn,l=Ci,c=ln.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Ar(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ji?It:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Ji:Ld}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?It:pn}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Md;ln.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,R=(d+1)/2,A=(u+f)/4,C=(h+g)/4,U=(_+p)/4;return x>y&&x>R?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=C/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=U/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=U/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-g)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mv extends Gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ji?It:pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends mv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Od extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gv extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Rr=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*g,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,d*v);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const y=a*v;if(l=l*p+f*y,c=c*p+m*y,u=u*p+_*y,h=h*p+g*y,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new $,Zu=new Rr;class Cr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Xr.subVectors(this.max,Ys),ls.subVectors(e.a,Ys),cs.subVectors(e.b,Ys),us.subVectors(e.c,Ys),_i.subVectors(cs,ls),vi.subVectors(us,cs),Fi.subVectors(ls,us);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Fi.z,Fi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Fi.z,0,-Fi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Fi.y,Fi.x,0];return!Fa(t,ls,cs,us,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,ls,cs,us,Xr))?!1:(jr.crossVectors(_i,vi),t=[jr.x,jr.y,jr.z],Fa(t,ls,cs,us,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new $,new $,new $,new $,new $,new $,new $,new $],gn=new $,qr=new Cr,ls=new $,cs=new $,us=new $,_i=new $,vi=new $,Fi=new $,Ys=new $,Xr=new $,jr=new $,Oi=new $;function Fa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Oi.fromArray(n,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _v=new Cr,$s=new $,Oa=new $;let uc=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_v.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Oa)),this.expandByPoint($s.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Zn=new $,Ba=new $,Yr=new $,xi=new $,za=new $,$r=new $,Ha=new $;let Bd=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ba.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=xi.dot(this.direction),l=-xi.dot(Yr),c=xi.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ba).addScaledVector(Yr,f),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){za.subVectors(t,e),$r.subVectors(i,e),Ha.crossVectors(za,$r);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot($r.crossVectors(xi,$r));if(l<0)return null;const c=a*this.direction.dot(za.cross(xi));if(c<0||l+c>o)return null;const u=-a*xi.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Et{constructor(e,t,i,s,r,o,a,l,c,u,h,f,m,_,g,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,m,_,g,p)}set(e,t,i,s,r,o,a,l,c,u,h,f,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,t,i){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),yi.crossVectors(i,sn),yi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),yi.crossVectors(i,sn)),yi.normalize(),Kr.crossVectors(sn,yi),s[0]=yi.x,s[4]=Kr.x,s[8]=sn.x,s[1]=yi.y,s[5]=Kr.y,s[9]=sn.y,s[2]=yi.z,s[6]=Kr.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],v=i[3],x=i[7],y=i[11],R=i[15],A=s[0],C=s[4],U=s[8],M=s[12],T=s[1],B=s[5],G=s[9],z=s[13],L=s[2],N=s[6],D=s[10],j=s[14],V=s[3],Y=s[7],re=s[11],ae=s[15];return r[0]=o*A+a*T+l*L+c*V,r[4]=o*C+a*B+l*N+c*Y,r[8]=o*U+a*G+l*D+c*re,r[12]=o*M+a*z+l*j+c*ae,r[1]=u*A+h*T+f*L+m*V,r[5]=u*C+h*B+f*N+m*Y,r[9]=u*U+h*G+f*D+m*re,r[13]=u*M+h*z+f*j+m*ae,r[2]=_*A+g*T+p*L+d*V,r[6]=_*C+g*B+p*N+d*Y,r[10]=_*U+g*G+p*D+d*re,r[14]=_*M+g*z+p*j+d*ae,r[3]=v*A+x*T+y*L+R*V,r[7]=v*C+x*B+y*N+R*Y,r[11]=v*U+x*G+y*D+R*re,r[15]=v*M+x*z+y*j+R*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],v=h*p*c-g*f*c+g*l*m-a*p*m-h*l*d+a*f*d,x=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,y=u*g*c-_*h*c+_*a*m-o*g*m-u*a*d+o*h*d,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,A=t*v+i*x+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(g*f*r-h*p*r-g*s*m+i*p*m+h*s*d-i*f*d)*C,e[2]=(a*p*r-g*l*r+g*s*c-i*p*c-a*s*d+i*l*d)*C,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*C,e[4]=x*C,e[5]=(u*p*r-_*f*r+_*s*m-t*p*m-u*s*d+t*f*d)*C,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*d-t*l*d)*C,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*C,e[8]=y*C,e[9]=(_*h*r-u*g*r-_*i*m+t*g*m+u*i*d-t*h*d)*C,e[10]=(o*g*r-_*a*r+_*i*c-t*g*c-o*i*d+t*a*d)*C,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*C,e[12]=R*C,e[13]=(u*g*s-_*h*s+_*i*f-t*g*f-u*i*p+t*h*p)*C,e[14]=(_*a*s-o*g*s-_*i*l+t*g*l+o*i*p-t*a*p)*C,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,g=o*u,p=o*h,d=a*h,v=l*c,x=l*u,y=l*h,R=i.x,A=i.y,C=i.z;return s[0]=(1-(g+d))*R,s[1]=(m+y)*R,s[2]=(_-x)*R,s[3]=0,s[4]=(m-y)*A,s[5]=(1-(f+d))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(_+x)*C,s[9]=(p-v)*C,s[10]=(1-(f+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=hi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===hi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=hi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,m=(i+s)*u;let _,g;if(a===hi)_=(o+r)*h,g=-2*h;else if(a===Fo)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new $,_n=new Et,vv=new $(0,0,0),xv=new $(1,1,1),yi=new $,Kr=new $,sn=new $,Ju=new Et,Qu=new Rr;class Jo{constructor(e=0,t=0,i=0,s=Jo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jo.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const eh=new $,fs=new Rr,Jn=new Et,Zr=new $,Ks=new $,Sv=new $,Ev=new Rr,th=new $(1,0,0),nh=new $(0,1,0),ih=new $(0,0,1),Mv={type:"added"},bv={type:"removed"};class Ht extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new $,t=new Jo,i=new Rr,s=new $(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ks,Zr,this.up):Jn.lookAt(Zr,Ks,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Jn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new $(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new $,Qn=new $,Ga=new $,ei=new $,ds=new $,ps=new $,sh=new $,Va=new $,ka=new $,Wa=new $;let Jr=!1;class En{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Qn.subVectors(i,t),Ga.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Qn),l=vn.dot(Ga),c=Qn.dot(Qn),u=Qn.dot(Ga),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,i,s,r,o,a,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Qn.subVectors(e,t),vn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),vn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,i),ps.subVectors(r,i),Va.subVectors(e,i);const l=ds.dot(Va),c=ps.dot(Va);if(l<=0&&c<=0)return t.copy(i);ka.subVectors(e,s);const u=ds.dot(ka),h=ps.dot(ka);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ds,o);Wa.subVectors(e,r);const m=ds.dot(Wa),_=ps.dot(Wa);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ps,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return sh.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(sh,a);const d=1/(p+g+f);return o=g*d,a=f*d,t.copy(i).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=uv(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=zd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Qt(Ot.r*255,0,255))*65536+Math.round(Qt(Ot.g*255,0,255))*256+Math.round(Qt(Ot.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=It){nt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Qr);const i=La(Si.h,Qr.h,t),s=La(Si.s,Qr.s,t),r=La(Si.l,Qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=zd;let wv=0,Pr=class extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=Is,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=bl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Hd extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new $,eo=new Ke;class Xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=js(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=js(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=js(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qu&&(e.usage=this.usage),e}}class Gd extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vd extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tv=0;const hn=new Et,Xa=new Ht,ms=new $,rn=new Cr,Zs=new Cr,Ct=new $;class Ln extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nd(e)?Vd:Gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Zs.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Zs.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Zs.min),rn.expandByPoint(Zs.max))}rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Ct.add(ms)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new $,u[T]=new $;const h=new $,f=new $,m=new $,_=new Ke,g=new Ke,p=new Ke,d=new $,v=new $;function x(T,B,G){h.fromArray(s,T*3),f.fromArray(s,B*3),m.fromArray(s,G*3),_.fromArray(o,T*2),g.fromArray(o,B*2),p.fromArray(o,G*2),f.sub(h),m.sub(h),g.sub(_),p.sub(_);const z=1/(g.x*p.y-p.x*g.y);isFinite(z)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(z),v.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(z),c[T].add(d),c[B].add(d),c[G].add(d),u[T].add(v),u[B].add(v),u[G].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,B=y.length;T<B;++T){const G=y[T],z=G.start,L=G.count;for(let N=z,D=z+L;N<D;N+=3)x(i[N+0],i[N+1],i[N+2])}const R=new $,A=new $,C=new $,U=new $;function M(T){C.fromArray(r,T*3),U.copy(C);const B=c[T];R.copy(B),R.sub(C.multiplyScalar(C.dot(B))).normalize(),A.crossVectors(U,B);const z=A.dot(u[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=z}for(let T=0,B=y.length;T<B;++T){const G=y[T],z=G.start,L=G.count;for(let N=z,D=z+L;N<D;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Xn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new Et,Bi=new Bd,to=new uc,oh=new $,gs=new $,_s=new $,vs=new $,ja=new $,no=new $,io=new Ke,so=new Ke,ro=new Ke,ah=new $,lh=new $,ch=new $,oo=new $,ao=new $;class an extends Ht{constructor(e=new Ln,t=new Hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ja.fromBufferAttribute(h,e),o?no.addScaledVector(ja,u):no.addScaledVector(ja.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(to.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(to,oh)===null||Bi.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(rh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(rh),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,R=x;y<R;y+=3){const A=a.getX(y),C=a.getX(y+1),U=a.getX(y+2);s=lo(this,d,e,i,c,u,h,A,C,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=lo(this,o,e,i,c,u,h,v,x,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,R=x;y<R;y+=3){const A=y,C=y+1,U=y+2;s=lo(this,d,e,i,c,u,h,A,C,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const v=p,x=p+1,y=p+2;s=lo(this,o,e,i,c,u,h,v,x,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Av(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;ao.copy(a),ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:n}}function lo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,gs),n.getVertexPosition(l,_s),n.getVertexPosition(c,vs);const u=Av(n,e,t,i,gs,_s,vs,oo);if(u){s&&(io.fromBufferAttribute(s,a),so.fromBufferAttribute(s,l),ro.fromBufferAttribute(s,c),u.uv=En.getInterpolation(oo,gs,_s,vs,io,so,ro,new Ke)),r&&(io.fromBufferAttribute(r,a),so.fromBufferAttribute(r,l),ro.fromBufferAttribute(r,c),u.uv1=En.getInterpolation(oo,gs,_s,vs,io,so,ro,new Ke),u.uv2=u.uv1),o&&(ah.fromBufferAttribute(o,a),lh.fromBufferAttribute(o,l),ch.fromBufferAttribute(o,c),u.normal=En.getInterpolation(oo,gs,_s,vs,ah,lh,ch,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};En.getNormal(gs,_s,vs,h.normal),u.face=h}return u}class Lr extends Ln{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function _(g,p,d,v,x,y,R,A,C,U,M){const T=y/C,B=R/U,G=y/2,z=R/2,L=A/2,N=C+1,D=U+1;let j=0,V=0;const Y=new $;for(let re=0;re<D;re++){const ae=re*B-z;for(let K=0;K<N;K++){const ne=K*T-G;Y[g]=ne*v,Y[p]=ae*x,Y[d]=L,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(K/C),h.push(1-re/U),j+=1}}for(let re=0;re<U;re++)for(let ae=0;ae<C;ae++){const K=f+ae+N*re,ne=f+ae+N*(re+1),oe=f+(ae+1)+N*(re+1),de=f+(ae+1)+N*re;l.push(K,ne,de),l.push(ne,oe,de),V+=6}a.addGroup(m,V,M),m+=V,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=zs(n[t]);for(const s in i)e[s]=i[s]}return e}function Rv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kd(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const Cv={clone:zs,merge:Wt};var Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends Wd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class Iv extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(xs,ys,e,t);s.layers=this.layers,this.add(s);const r=new dn(xs,ys,e,t);r.layers=this.layers,this.add(r);const o=new dn(xs,ys,e,t);o.layers=this.layers,this.add(o);const a=new dn(xs,ys,e,t);a.layers=this.layers,this.add(a);const l=new dn(xs,ys,e,t);l.layers=this.layers,this.add(l);const c=new dn(xs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qd extends ln{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?It:pn),this.texture=new qd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lr(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ai});r.uniforms.tEquirect.value=t;const o=new an(s,r),a=t.minFilter;return t.minFilter===Sr&&(t.minFilter=fn),new Iv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ya=new $,Nv=new $,Uv=new $e;class Vi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ya.subVectors(i,t).cross(Nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uv.getNormalMatrix(e),s=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new uc,co=new $;class fc{constructor(e=new Vi,t=new Vi,i=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],d=s[12],v=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,p-m,y-d).normalize(),i[1].setComponents(l+r,f+c,p+m,y+d).normalize(),i[2].setComponents(l+o,f+u,p+_,y+v).normalize(),i[3].setComponents(l-o,f-u,p-_,y-v).normalize(),i[4].setComponents(l-a,f-h,p-g,y-x).normalize(),t===hi)i[5].setComponents(l+a,f+h,p+g,y+x).normalize();else if(t===Fo)i[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Fv(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const d=_[g];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class dc extends Ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const v=d*f-o;for(let x=0;x<c;x++){const y=x*h-r;_.push(y,-v,0),g.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+c*d,y=v+c*(d+1),R=v+1+c*(d+1),A=v+1+c*d;m.push(x,y,A),m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$v=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,J0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ix=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Ov,alphahash_pars_fragment:Bv,alphamap_fragment:zv,alphamap_pars_fragment:Hv,alphatest_fragment:Gv,alphatest_pars_fragment:Vv,aomap_fragment:kv,aomap_pars_fragment:Wv,batching_pars_vertex:qv,batching_vertex:Xv,begin_vertex:jv,beginnormal_vertex:Yv,bsdfs:$v,iridescence_fragment:Kv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Jv,clipping_planes_pars_fragment:Qv,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:u0,emissivemap_fragment:h0,emissivemap_pars_fragment:f0,colorspace_fragment:d0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:P0,envmap_vertex:x0,fog_vertex:y0,fog_pars_vertex:S0,fog_fragment:E0,fog_pars_fragment:M0,gradientmap_pars_fragment:b0,lightmap_fragment:w0,lightmap_pars_fragment:T0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:L0,lights_toon_pars_fragment:I0,lights_phong_fragment:D0,lights_phong_pars_fragment:N0,lights_physical_fragment:U0,lights_physical_pars_fragment:F0,lights_fragment_begin:O0,lights_fragment_maps:B0,lights_fragment_end:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:k0,map_fragment:W0,map_pars_fragment:q0,map_particle_fragment:X0,map_particle_pars_fragment:j0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:$0,morphcolor_vertex:K0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:Q0,normal_fragment_begin:ex,normal_fragment_maps:tx,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:sx,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:lx,iridescence_pars_fragment:cx,opaque_fragment:ux,packing:hx,premultiplied_alpha_fragment:fx,project_vertex:dx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:vx,shadowmap_pars_vertex:xx,shadowmap_vertex:yx,shadowmask_pars_fragment:Sx,skinbase_vertex:Ex,skinning_pars_vertex:Mx,skinning_vertex:bx,skinnormal_vertex:Tx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Lx,transmission_pars_fragment:Ix,uv_pars_fragment:Dx,uv_pars_vertex:Nx,uv_vertex:Ux,worldpos_vertex:Fx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:zx,backgroundCube_frag:Hx,cube_vert:Gx,cube_frag:Vx,depth_vert:kx,depth_frag:Wx,distanceRGBA_vert:qx,distanceRGBA_frag:Xx,equirect_vert:jx,equirect_frag:Yx,linedashed_vert:$x,linedashed_frag:Kx,meshbasic_vert:Zx,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:hy,points_frag:fy,shadow_vert:dy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Gn={basic:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Wt([me.common,me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Wt([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Gn.physical={uniforms:Wt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const uo={r:0,b:0,g:0};function _y(n,e,t,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ko)?(u===void 0&&(u=new an(new Lr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:zs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=nt.getTransfer(x.colorSpace)!==ht,(h!==x||f!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new an(new dc(2,2),new ts({name:"BackgroundMaterial",uniforms:zs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(uo,kd(n)),i.buffers.color.setClear(uo.r,uo.g,uo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function vy(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(L,N,D,j,V){let Y=!1;if(o){const re=g(j,D,N);c!==re&&(c=re,m(c.object)),Y=d(L,j,D,V),Y&&v(L,j,D,V)}else{const re=N.wireframe===!0;(c.geometry!==j.id||c.program!==D.id||c.wireframe!==re)&&(c.geometry=j.id,c.program=D.id,c.wireframe=re,Y=!0)}V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,U(L,N,D,j),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,N,D){const j=D.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let Y=V[N.id];Y===void 0&&(Y={},V[N.id]=Y);let re=Y[j];return re===void 0&&(re=p(f()),Y[j]=re),re}function p(L){const N=[],D=[],j=[];for(let V=0;V<s;V++)N[V]=0,D[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:j,object:L,attributes:{},index:null}}function d(L,N,D,j){const V=c.attributes,Y=N.attributes;let re=0;const ae=D.getAttributes();for(const K in ae)if(ae[K].location>=0){const oe=V[K];let de=Y[K];if(de===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;re++}return c.attributesNum!==re||c.index!==j}function v(L,N,D,j){const V={},Y=N.attributes;let re=0;const ae=D.getAttributes();for(const K in ae)if(ae[K].location>=0){let oe=Y[K];oe===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));const de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),V[K]=de,re++}c.attributes=V,c.attributesNum=re,c.index=j}function x(){const L=c.newAttributes;for(let N=0,D=L.length;N<D;N++)L[N]=0}function y(L){R(L,0)}function R(L,N){const D=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;D[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),V[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),V[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let D=0,j=N.length;D<j;D++)N[D]!==L[D]&&(n.disableVertexAttribArray(D),N[D]=0)}function C(L,N,D,j,V,Y,re){re===!0?n.vertexAttribIPointer(L,N,D,V,Y):n.vertexAttribPointer(L,N,D,j,V,Y)}function U(L,N,D,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=j.attributes,Y=D.getAttributes(),re=N.defaultAttributeValues;for(const ae in Y){const K=Y[ae];if(K.location>=0){let ne=V[ae];if(ne===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const oe=ne.normalized,de=ne.itemSize,Ee=t.get(ne);if(Ee===void 0)continue;const Me=Ee.buffer,Ce=Ee.type,Oe=Ee.bytesPerElement,Ae=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||ne.gpuType===bd);if(ne.isInterleavedBufferAttribute){const ve=ne.data,E=ve.stride,F=ne.offset;if(ve.isInstancedInterleavedBuffer){for(let H=0;H<K.locationSize;H++)R(K.location+H,ve.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let H=0;H<K.locationSize;H++)y(K.location+H);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let H=0;H<K.locationSize;H++)C(K.location+H,de/K.locationSize,Ce,oe,E*Oe,(F+de/K.locationSize*H)*Oe,Ae)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<K.locationSize;ve++)R(K.location+ve,ne.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<K.locationSize;ve++)y(K.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ve=0;ve<K.locationSize;ve++)C(K.location+ve,de/K.locationSize,Ce,oe,de*Oe,de/K.locationSize*ve*Oe,Ae)}}else if(re!==void 0){const oe=re[ae];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(K.location,oe);break;case 3:n.vertexAttrib3fv(K.location,oe);break;case 4:n.vertexAttrib4fv(K.location,oe);break;default:n.vertexAttrib1fv(K.location,oe)}}}}A()}function M(){G();for(const L in a){const N=a[L];for(const D in N){const j=N[D];for(const V in j)_(j[V].object),delete j[V];delete N[D]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const D in N){const j=N[D];for(const V in j)_(j[V].object),delete j[V];delete N[D]}delete a[L.id]}function B(L){for(const N in a){const D=a[N];if(D[L.id]===void 0)continue;const j=D[L.id];for(const V in j)_(j[V].object),delete j[V];delete D[L.id]}}function G(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function xy(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),R=x&&y,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:A}}function Sy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Vi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const v=r?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=u(_,f,x,m);for(let R=0;R!==x;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,y=m;x!==g;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Ey(n){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=Fs:a===Tl&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wl||a===Tl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class jd extends Wd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,uh=[.125,.215,.35,.446,.526,.582],qi=20,$a=new jd,hh=new Je;let Ka=null,Za=0,Ja=0;const ki=(1+Math.sqrt(5))/2,Ss=1/ki,fh=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,ki,Ss),new $(0,ki,-Ss),new $(Ss,0,ki),new $(-Ss,0,ki),new $(ki,Ss,0),new $(-ki,Ss,0)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Za,Ja),e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Er,format:wn,colorSpace:mi,depthBuffer:!1},s=ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=My(r)),this._blurMaterial=by(r,e,t)}return s}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,s){const a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(hh),u.toneMapping=Ri,u.autoClear=!1;const m=new Hd({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new an(new Lr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(hh),g=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;ho(s,v*x,d>2?x:0,x,x),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fh[(s-1)%fh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qi-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):qi;p>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);const d=[];let v=0;for(let C=0;C<qi;++C){const U=C/g,M=Math.exp(-U*U/2);d.push(M),C===0?v+=M:C<p&&(v+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[s],R=3*y*(s>x-Ts?s-x+Ts:0),A=4*(this._cubeSize-y);ho(t,R,A,3*y,2*y),l.setRenderTarget(t),l.render(h,$a)}}function My(n){const e=[],t=[],i=[];let s=n;const r=n-Ts+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ts?l=uh[o-n+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,d=1,v=new Float32Array(g*_*m),x=new Float32Array(p*_*m),y=new Float32Array(d*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,U=A>2?0:-1,M=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];v.set(M,g*_*A),x.set(f,p*_*A);const T=[A,A,A,A,A,A];y.set(T,d*_*A)}const R=new Ln;R.setAttribute("position",new Xn(v,g)),R.setAttribute("uv",new Xn(x,p)),R.setAttribute("faceIndex",new Xn(y,d)),e.push(R),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ph(n,e,t){const i=new es(n,e,t);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function by(n,e,t){const i=new Float32Array(qi),s=new $(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function mh(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function gh(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wl||l===Tl,u=l===Fs||l===Os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new dh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new dh(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ty(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ay(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let x=0,y=v.length;x<y;x+=3){const R=v[x+0],A=v[x+1],C=v[x+2];f.push(R,A,A,C,C,R)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const R=x+0,A=x+1,C=x+2;f.push(R,A,A,C,C,R)}}else return;const p=new(Nd(f)?Vd:Gd)(f,1);p.version=g;const d=r.get(h);d&&e.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ry(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,g){if(g===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,a,m*l,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let d=0;for(let v=0;v<g;v++)d+=_[v];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Cy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Py(n,e){return n[0]-e[0]}function Ly(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Iy(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let N=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),R===!0&&(M=3);let T=u.attributes.position.count*M,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*B*4*g),z=new Od(G,T,B,g);z.type=Ti,z.needsUpdate=!0;const L=M*4;for(let D=0;D<g;D++){const j=A[D],V=C[D],Y=U[D],re=T*B*4*D;for(let ae=0;ae<j.count;ae++){const K=ae*L;x===!0&&(o.fromBufferAttribute(j,ae),G[re+K+0]=o.x,G[re+K+1]=o.y,G[re+K+2]=o.z,G[re+K+3]=0),y===!0&&(o.fromBufferAttribute(V,ae),G[re+K+4]=o.x,G[re+K+5]=o.y,G[re+K+6]=o.z,G[re+K+7]=0),R===!0&&(o.fromBufferAttribute(Y,ae),G[re+K+8]=o.x,G[re+K+9]=o.y,G[re+K+10]=o.z,G[re+K+11]=Y.itemSize===4?o.w:1)}}p={count:g,texture:z,size:new Ke(T,B)},r.set(u,p),u.addEventListener("dispose",N)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const v=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<_;y++){const R=g[y];R[0]=y,R[1]=f[y]}g.sort(Ly);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Py);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const R=a[y],A=R[0],C=R[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+y)!==p[A]&&u.setAttribute("morphTarget"+y,p[A]),d&&u.getAttribute("morphNormal"+y)!==d[A]&&u.setAttribute("morphNormal"+y,d[A]),s[y]=C,v+=C):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Dy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Yd extends ln{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zi&&(i=wi),i===void 0&&u===Bs&&(i=Ki),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $d=new ln,Kd=new Yd(1,1);Kd.compareFunction=Dd;const Zd=new Od,Jd=new gv,Qd=new qd,_h=[],vh=[],xh=new Float32Array(16),yh=new Float32Array(9),Sh=new Float32Array(4);function Vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=vh[e];t===void 0&&(t=new Int32Array(e),vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function By(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),wt(t,i)}}function zy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),wt(t,i)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;xh.set(i),n.uniformMatrix4fv(this.addr,!1,xh),wt(t,i)}}function Gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function qy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function $y(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Kd:$d;t.setTexture2D(e||r,s)}function Ky(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jd,s)}function Zy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qd,s)}function Jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zd,s)}function Qy(n){switch(n){case 5126:return Ny;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return zy;case 35676:return Hy;case 5124:case 35670:return Gy;case 35667:case 35671:return Vy;case 35668:case 35672:return ky;case 35669:case 35673:return Wy;case 5125:return qy;case 36294:return Xy;case 36295:return jy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}function eS(n,e){n.uniform1fv(this.addr,e)}function tS(n,e){const t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function nS(n,e){const t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function iS(n,e){const t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function sS(n,e){const t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rS(n,e){const t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oS(n,e){const t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aS(n,e){n.uniform1iv(this.addr,e)}function lS(n,e){n.uniform2iv(this.addr,e)}function cS(n,e){n.uniform3iv(this.addr,e)}function uS(n,e){n.uniform4iv(this.addr,e)}function hS(n,e){n.uniform1uiv(this.addr,e)}function fS(n,e){n.uniform2uiv(this.addr,e)}function dS(n,e){n.uniform3uiv(this.addr,e)}function pS(n,e){n.uniform4uiv(this.addr,e)}function mS(n,e,t){const i=this.cache,s=e.length,r=Qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$d,r[o])}function gS(n,e,t){const i=this.cache,s=e.length,r=Qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jd,r[o])}function _S(n,e,t){const i=this.cache,s=e.length,r=Qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,r[o])}function vS(n,e,t){const i=this.cache,s=e.length,r=Qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zd,r[o])}function xS(n){switch(n){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return sS;case 35675:return rS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return fS;case 36295:return dS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}class yS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}}class SS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xS(t.type)}}class ES{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Eh(n,e){n.seq.push(e),n.map[e.id]=e}function MS(n,e,t){const i=n.name,s=i.length;for(Qa.lastIndex=0;;){const r=Qa.exec(i),o=Qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(t,c===void 0?new yS(a,n,e):new SS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ES(a),Eh(t,h)),t=h}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);MS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Mh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bS=37297;let wS=0;function TS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AS(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Uo&&t===No?i="LinearDisplayP3ToLinearSRGB":e===No&&t===Uo&&(i="LinearSRGBToLinearDisplayP3"),n){case mi:case Zo:return[i,"LinearTransferOETF"];case It:case cc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+TS(n.getShaderSource(e),o)}else return s}function RS(n,e){const t=AS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function CS(n,e){let t;switch(e){case z_:t="Linear";break;case H_:t="Reinhard";break;case G_:t="OptimizedCineon";break;case V_:t="ACESFilmic";break;case W_:t="AgX";break;case k_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function PS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function LS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function IS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function As(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(NS,FS)}const US=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function FS(n,e){let t=We[e];if(t===void 0){const i=US.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(n){return n.replace(OS,BS)}function BS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function HS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function VS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case B_:e="ENVMAP_BLENDING_ADD";break}return e}function kS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zS(t),c=HS(t),u=GS(t),h=VS(t),f=kS(t),m=t.isWebGL2?"":PS(t),_=LS(t),g=IS(r),p=s.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),v.length>0&&(v+=`
`)):(d=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[m,Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?We.tonemapping_pars_fragment:"",t.toneMapping!==Ri?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,RS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Il(o),o=wh(o,t),o=Th(o,t),a=Il(a),a=wh(a,t),a=Th(a,t),o=Ah(o),a=Ah(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+d+o,R=x+v+a,A=Mh(s,s.VERTEX_SHADER,y),C=Mh(s,s.FRAGMENT_SHADER,R);s.attachShader(p,A),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(G){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(C).trim();let D=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,A,C);else{const V=bh(s,A,"vertex"),Y=bh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+V+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||N==="")&&(j=!1);j&&(G.diagnostics={runnable:D,programLog:z,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:v}})}s.deleteShader(A),s.deleteShader(C),M=new So(s,p),T=DS(s,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(p,bS)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}let qS=0;class XS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jS(e),t.set(e,i)),i}}class jS{constructor(e){this.id=qS++,this.code=e,this.usedTimes=0}}function YS(n,e,t,i,s,r,o){const a=new hc,l=new XS,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,T,B,G,z){const L=G.fog,N=z.geometry,D=M.isMeshStandardMaterial?G.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||D),V=j&&j.mapping===Ko?j.image.height:null,Y=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=re!==void 0?re.length:0;let K=0;N.morphAttributes.position!==void 0&&(K=1),N.morphAttributes.normal!==void 0&&(K=2),N.morphAttributes.color!==void 0&&(K=3);let ne,oe,de,Ee;if(Y){const Gt=Gn[Y];ne=Gt.vertexShader,oe=Gt.fragmentShader}else ne=M.vertexShader,oe=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const Me=n.getRenderTarget(),Ce=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,Ae=!!M.map,ve=!!M.matcap,E=!!j,F=!!M.aoMap,H=!!M.lightMap,J=!!M.bumpMap,X=!!M.normalMap,se=!!M.displacementMap,le=!!M.emissiveMap,b=!!M.metalnessMap,S=!!M.roughnessMap,I=M.anisotropy>0,Q=M.clearcoat>0,W=M.iridescence>0,Z=M.sheen>0,he=M.transmission>0,ue=I&&!!M.anisotropyMap,fe=Q&&!!M.clearcoatMap,ge=Q&&!!M.clearcoatNormalMap,Re=Q&&!!M.clearcoatRoughnessMap,ce=W&&!!M.iridescenceMap,qe=W&&!!M.iridescenceThicknessMap,Ue=Z&&!!M.sheenColorMap,De=Z&&!!M.sheenRoughnessMap,Le=!!M.specularMap,_e=!!M.specularColorMap,Ie=!!M.specularIntensityMap,Ze=he&&!!M.transmissionMap,ct=he&&!!M.thicknessMap,je=!!M.gradientMap,pe=!!M.alphaMap,O=M.alphaTest>0,xe=!!M.alphaHash,ye=!!M.extensions,Be=!!N.attributes.uv1,Ne=!!N.attributes.uv2,st=!!N.attributes.uv3;let rt=Ri;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:oe,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Oe,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:mi,map:Ae,matcap:ve,envMap:E,envMapMode:E&&j.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:H,bumpMap:J,normalMap:X,displacementMap:f&&se,emissiveMap:le,normalMapObjectSpace:X&&M.normalMapType===nv,normalMapTangentSpace:X&&M.normalMapType===Id,metalnessMap:b,roughnessMap:S,anisotropy:I,anisotropyMap:ue,clearcoat:Q,clearcoatMap:fe,clearcoatNormalMap:ge,clearcoatRoughnessMap:Re,iridescence:W,iridescenceMap:ce,iridescenceThicknessMap:qe,sheen:Z,sheenColorMap:Ue,sheenRoughnessMap:De,specularMap:Le,specularColorMap:_e,specularIntensityMap:Ie,transmission:he,transmissionMap:Ze,thicknessMap:ct,gradientMap:je,opaque:M.transparent===!1&&M.blending===Is,alphaMap:pe,alphaTest:O,alphaHash:xe,combine:M.combine,mapUv:Ae&&g(M.map.channel),aoMapUv:F&&g(M.aoMap.channel),lightMapUv:H&&g(M.lightMap.channel),bumpMapUv:J&&g(M.bumpMap.channel),normalMapUv:X&&g(M.normalMap.channel),displacementMapUv:se&&g(M.displacementMap.channel),emissiveMapUv:le&&g(M.emissiveMap.channel),metalnessMapUv:b&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:ue&&g(M.anisotropyMap.channel),clearcoatMapUv:fe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(M.sheenRoughnessMap.channel),specularMapUv:Le&&g(M.specularMap.channel),specularColorMapUv:_e&&g(M.specularColorMap.channel),specularIntensityMapUv:Ie&&g(M.specularIntensityMap.channel),transmissionMapUv:Ze&&g(M.transmissionMap.channel),thicknessMapUv:ct&&g(M.thicknessMap.channel),alphaMapUv:pe&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(X||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Ne,vertexUv3s:st,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Ae||pe),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ye&&M.extensions.derivatives===!0,extensionFragDepth:ye&&M.extensions.fragDepth===!0,extensionDrawBuffers:ye&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(v(T,M),x(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=_[M.type];let B;if(T){const G=Gn[T];B=Cv.clone(G.uniforms)}else B=M.uniforms;return B}function R(M,T){let B;for(let G=0,z=c.length;G<z;G++){const L=c[G];if(L.cacheKey===T){B=L,++B.usedTimes;break}}return B===void 0&&(B=new WS(n,T,M,r),c.push(B)),B}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:U}}function $S(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function KS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ph(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,m,_,g,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=p),e++,d}function a(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||KS),i.length>1&&i.sort(f||Ch),s.length>1&&s.sort(f||Ch)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ZS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ph,n.set(i,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function JS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Je};break;case"SpotLight":t={position:new $,direction:new $,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function QS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eE=0;function tE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nE(n,e){const t=new JS,i=QS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new $);const r=new $,o=new Et,a=new Et;function l(u,h){let f=0,m=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let g=0,p=0,d=0,v=0,x=0,y=0,R=0,A=0,C=0,U=0,M=0;u.sort(tE);const T=h===!0?Math.PI:1;for(let G=0,z=u.length;G<z;G++){const L=u[G],N=L.color,D=L.intensity,j=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*D*T,m+=N.g*D*T,_+=N.b*D*T;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],D);M++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const re=L.shadow,ae=i.get(L);ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,s.directionalShadow[g]=ae,s.directionalShadowMap[g]=V,s.directionalShadowMatrix[g]=L.shadow.matrix,y++}s.directional[g]=Y,g++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(N).multiplyScalar(D*T),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[d]=Y;const re=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,re.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[d]=re.matrix,L.castShadow){const ae=i.get(L);ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,s.spotShadow[d]=ae,s.spotShadowMap[d]=V,A++}d++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(N).multiplyScalar(D),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=Y,v++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*T),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const re=L.shadow,ae=i.get(L);ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,ae.shadowCameraNear=re.camera.near,ae.shadowCameraFar=re.camera.far,s.pointShadow[p]=ae,s.pointShadowMap[p]=V,s.pointShadowMatrix[p]=L.shadow.matrix,R++}s.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(D*T),Y.groundColor.copy(L.groundColor).multiplyScalar(D*T),s.hemi[x]=Y,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const B=s.hash;(B.directionalLength!==g||B.pointLength!==p||B.spotLength!==d||B.rectAreaLength!==v||B.hemiLength!==x||B.numDirectionalShadows!==y||B.numPointShadows!==R||B.numSpotShadows!==A||B.numSpotMaps!==C||B.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=v,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+C-U,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,B.directionalLength=g,B.pointLength=p,B.spotLength=d,B.rectAreaLength=v,B.hemiLength=x,B.numDirectionalShadows=y,B.numPointShadows=R,B.numSpotShadows=A,B.numSpotMaps=C,B.numLightProbes=M,s.version=eE++)}function c(u,h){let f=0,m=0,_=0,g=0,p=0;const d=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const y=u[v];if(y.isDirectionalLight){const R=s.directional[f];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),f++}else if(y.isSpotLight){const R=s.spot[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const R=s.rectArea[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Lh(n,e){const t=new nE(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function iE(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Lh(n,e),t.set(r,[l])):o>=a.length?(l=new Lh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class sE extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lE(n,e,t){let i=new fc;const s=new Ke,r=new Ke,o=new Pt,a=new sE({depthPacking:tv}),l=new rE,c={},u=t.maxTextureSize,h={[Li]:en,[en]:Li,[Mn]:Mn},f=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:oE,fragmentShader:aE}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ln;_.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new an(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let d=this.type;this.render=function(A,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Ai),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=d!==ai&&this.type===ai,L=d===ai&&this.type!==ai;for(let N=0,D=A.length;N<D;N++){const j=A[N],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Y=V.getFrameExtents();if(s.multiply(Y),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y)),V.map===null||z===!0||L===!0){const ae=this.type!==ai?{minFilter:qt,magFilter:qt}:{};V.map!==null&&V.map.dispose(),V.map=new es(s.x,s.y,ae),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const re=V.getViewportCount();for(let ae=0;ae<re;ae++){const K=V.getViewport(ae);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),G.viewport(o),V.updateMatrices(j,ae),i=V.getFrustum(),y(C,U,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ai&&v(V,U),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,T,B)};function v(A,C){const U=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new es(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,U,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,U,m,g,null)}function x(A,C,U,M){let T=null;const B=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)T=B;else if(T=U.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=T.uuid,z=C.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let N=L[z];N===void 0&&(N=T.clone(),L[z]=N,C.addEventListener("dispose",R)),T=N}if(T.visible=C.visible,T.wireframe=C.wireframe,M===ai?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=n.properties.get(T);G.light=U}return T}function y(A,C,U,M,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const z=e.update(A),L=A.material;if(Array.isArray(L)){const N=z.groups;for(let D=0,j=N.length;D<j;D++){const V=N[D],Y=L[V.materialIndex];if(Y&&Y.visible){const re=x(A,Y,M,T);A.onBeforeShadow(n,A,C,U,z,re,V),n.renderBufferDirect(U,null,z,re,A,V),A.onAfterShadow(n,A,C,U,z,re,V)}}}else if(L.visible){const N=x(A,L,M,T);A.onBeforeShadow(n,A,C,U,z,N,null),n.renderBufferDirect(U,null,z,N,A,null),A.onAfterShadow(n,A,C,U,z,N,null)}}const G=A.children;for(let z=0,L=G.length;z<L;z++)y(G[z],C,U,M,T)}function R(A){A.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function cE(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const xe=new Pt;let ye=null;const Be=new Pt(0,0,0,0);return{setMask:function(Ne){ye!==Ne&&!O&&(n.colorMask(Ne,Ne,Ne,Ne),ye=Ne)},setLocked:function(Ne){O=Ne},setClear:function(Ne,st,rt,Tt,Gt){Gt===!0&&(Ne*=Tt,st*=Tt,rt*=Tt),xe.set(Ne,st,rt,Tt),Be.equals(xe)===!1&&(n.clearColor(Ne,st,rt,Tt),Be.copy(xe))},reset:function(){O=!1,ye=null,Be.set(-1,0,0,0)}}}function r(){let O=!1,xe=null,ye=null,Be=null;return{setTest:function(Ne){Ne?Oe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Ne){xe!==Ne&&!O&&(n.depthMask(Ne),xe=Ne)},setFunc:function(Ne){if(ye!==Ne){switch(Ne){case P_:n.depthFunc(n.NEVER);break;case L_:n.depthFunc(n.ALWAYS);break;case I_:n.depthFunc(n.LESS);break;case Io:n.depthFunc(n.LEQUAL);break;case D_:n.depthFunc(n.EQUAL);break;case N_:n.depthFunc(n.GEQUAL);break;case U_:n.depthFunc(n.GREATER);break;case F_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Ne}},setLocked:function(Ne){O=Ne},setClear:function(Ne){Be!==Ne&&(n.clearDepth(Ne),Be=Ne)},reset:function(){O=!1,xe=null,ye=null,Be=null}}}function o(){let O=!1,xe=null,ye=null,Be=null,Ne=null,st=null,rt=null,Tt=null,Gt=null;return{setTest:function(ot){O||(ot?Oe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!O&&(n.stencilMask(ot),xe=ot)},setFunc:function(ot,Vt,Dn){(ye!==ot||Be!==Vt||Ne!==Dn)&&(n.stencilFunc(ot,Vt,Dn),ye=ot,Be=Vt,Ne=Dn)},setOp:function(ot,Vt,Dn){(st!==ot||rt!==Vt||Tt!==Dn)&&(n.stencilOp(ot,Vt,Dn),st=ot,rt=Vt,Tt=Dn)},setLocked:function(ot){O=ot},setClear:function(ot){Gt!==ot&&(n.clearStencil(ot),Gt=ot)},reset:function(){O=!1,xe=null,ye=null,Be=null,Ne=null,st=null,rt=null,Tt=null,Gt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,d=!1,v=null,x=null,y=null,R=null,A=null,C=null,U=null,M=new Je(0,0,0),T=0,B=!1,G=null,z=null,L=null,N=null,D=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(re)[1]),V=Y>=1):re.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),V=Y>=2);let ae=null,K={};const ne=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),de=new Pt().fromArray(ne),Ee=new Pt().fromArray(oe);function Me(O,xe,ye,Be){const Ne=new Uint8Array(4),st=n.createTexture();n.bindTexture(O,st),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<ye;rt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(xe+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return st}const Ce={};Ce[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(Io),le(!1),b(fu),Oe(n.CULL_FACE),X(Ai);function Oe(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function Ae(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function ve(O,xe){return m[O]!==xe?(n.bindFramebuffer(O,xe),m[O]=xe,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function E(O,xe){let ye=g,Be=!1;if(O)if(ye=_.get(xe),ye===void 0&&(ye=[],_.set(xe,ye)),O.isWebGLMultipleRenderTargets){const Ne=O.texture;if(ye.length!==Ne.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Ne.length;st<rt;st++)ye[st]=n.COLOR_ATTACHMENT0+st;ye.length=Ne.length,Be=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,Be=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function F(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const H={[Wi]:n.FUNC_ADD,[m_]:n.FUNC_SUBTRACT,[g_]:n.FUNC_REVERSE_SUBTRACT};if(i)H[gu]=n.MIN,H[_u]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(H[gu]=O.MIN_EXT,H[_u]=O.MAX_EXT)}const J={[__]:n.ZERO,[v_]:n.ONE,[x_]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[w_]:n.SRC_ALPHA_SATURATE,[M_]:n.DST_COLOR,[S_]:n.DST_ALPHA,[y_]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[b_]:n.ONE_MINUS_DST_COLOR,[E_]:n.ONE_MINUS_DST_ALPHA,[T_]:n.CONSTANT_COLOR,[A_]:n.ONE_MINUS_CONSTANT_COLOR,[R_]:n.CONSTANT_ALPHA,[C_]:n.ONE_MINUS_CONSTANT_ALPHA};function X(O,xe,ye,Be,Ne,st,rt,Tt,Gt,ot){if(O===Ai){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(Oe(n.BLEND),d=!0),O!==p_){if(O!==v||ot!==B){if((x!==Wi||A!==Wi)&&(n.blendEquation(n.FUNC_ADD),x=Wi,A=Wi),ot)switch(O){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.ONE,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,R=null,C=null,U=null,M.set(0,0,0),T=0,v=O,B=ot}return}Ne=Ne||xe,st=st||ye,rt=rt||Be,(xe!==x||Ne!==A)&&(n.blendEquationSeparate(H[xe],H[Ne]),x=xe,A=Ne),(ye!==y||Be!==R||st!==C||rt!==U)&&(n.blendFuncSeparate(J[ye],J[Be],J[st],J[rt]),y=ye,R=Be,C=st,U=rt),(Tt.equals(M)===!1||Gt!==T)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Gt),M.copy(Tt),T=Gt),v=O,B=!1}function se(O,xe){O.side===Mn?Ae(n.CULL_FACE):Oe(n.CULL_FACE);let ye=O.side===en;xe&&(ye=!ye),le(ye),O.blending===Is&&O.transparent===!1?X(Ai):X(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Be=O.stencilWrite;c.setTest(Be),Be&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),I(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){G!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),G=O)}function b(O){O!==h_?(Oe(n.CULL_FACE),O!==z&&(O===fu?n.cullFace(n.BACK):O===f_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),z=O}function S(O){O!==L&&(V&&n.lineWidth(O),L=O)}function I(O,xe,ye){O?(Oe(n.POLYGON_OFFSET_FILL),(N!==xe||D!==ye)&&(n.polygonOffset(xe,ye),N=xe,D=ye)):Ae(n.POLYGON_OFFSET_FILL)}function Q(O){O?Oe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function W(O){O===void 0&&(O=n.TEXTURE0+j-1),ae!==O&&(n.activeTexture(O),ae=O)}function Z(O,xe,ye){ye===void 0&&(ae===null?ye=n.TEXTURE0+j-1:ye=ae);let Be=K[ye];Be===void 0&&(Be={type:void 0,texture:void 0},K[ye]=Be),(Be.type!==O||Be.texture!==xe)&&(ae!==ye&&(n.activeTexture(ye),ae=ye),n.bindTexture(O,xe||Ce[O]),Be.type=O,Be.texture=xe)}function he(){const O=K[ae];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){de.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),de.copy(O))}function Ze(O){Ee.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ee.copy(O))}function ct(O,xe){let ye=h.get(xe);ye===void 0&&(ye=new WeakMap,h.set(xe,ye));let Be=ye.get(O);Be===void 0&&(Be=n.getUniformBlockIndex(xe,O.name),ye.set(O,Be))}function je(O,xe){const Be=h.get(xe).get(O);u.get(xe)!==Be&&(n.uniformBlockBinding(xe,Be,O.__bindingPointIndex),u.set(xe,Be))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ae=null,K={},m={},_=new WeakMap,g=[],p=null,d=!1,v=null,x=null,y=null,R=null,A=null,C=null,U=null,M=new Je(0,0,0),T=0,B=!1,G=null,z=null,L=null,N=null,D=null,de.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Ae,bindFramebuffer:ve,drawBuffers:E,useProgram:F,setBlending:X,setMaterial:se,setFlipSided:le,setCullFace:b,setLineWidth:S,setPolygonOffset:I,setScissorTest:Q,activeTexture:W,bindTexture:Z,unbindTexture:he,compressedTexImage2D:ue,compressedTexImage3D:fe,texImage2D:Le,texImage3D:_e,updateUBOMapping:ct,uniformBlockBinding:je,texStorage2D:Ue,texStorage3D:De,texSubImage2D:ge,texSubImage3D:Re,compressedTexSubImage2D:ce,compressedTexSubImage3D:qe,scissor:Ie,viewport:Ze,reset:pe}}function uE(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return m?new OffscreenCanvas(b,S):Oo("canvas")}function g(b,S,I,Q){let W=1;if((b.width>Q||b.height>Q)&&(W=Q/Math.max(b.width,b.height)),W<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const Z=S?Ll:Math.floor,he=Z(W*b.width),ue=Z(W*b.height);h===void 0&&(h=_(he,ue));const fe=I?_(he,ue):h;return fe.width=he,fe.height=ue,fe.getContext("2d").drawImage(b,0,0,he,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+he+"x"+ue+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return ju(b.width)&&ju(b.height)}function d(b){return a?!1:b.wrapS!==bn||b.wrapT!==bn||b.minFilter!==qt&&b.minFilter!==fn}function v(b,S){return b.generateMipmaps&&S&&b.minFilter!==qt&&b.minFilter!==fn}function x(b){n.generateMipmap(b)}function y(b,S,I,Q,W=!1){if(a===!1)return S;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=S;if(S===n.RED&&(I===n.FLOAT&&(Z=n.R32F),I===n.HALF_FLOAT&&(Z=n.R16F),I===n.UNSIGNED_BYTE&&(Z=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Z=n.R8UI),I===n.UNSIGNED_SHORT&&(Z=n.R16UI),I===n.UNSIGNED_INT&&(Z=n.R32UI),I===n.BYTE&&(Z=n.R8I),I===n.SHORT&&(Z=n.R16I),I===n.INT&&(Z=n.R32I)),S===n.RG&&(I===n.FLOAT&&(Z=n.RG32F),I===n.HALF_FLOAT&&(Z=n.RG16F),I===n.UNSIGNED_BYTE&&(Z=n.RG8)),S===n.RGBA){const he=W?Do:nt.getTransfer(Q);I===n.FLOAT&&(Z=n.RGBA32F),I===n.HALF_FLOAT&&(Z=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Z=he===ht?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function R(b,S,I){return v(b,I)===!0||b.isFramebufferTexture&&b.minFilter!==qt&&b.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){return b===qt||b===vu||b===ba?n.NEAREST:n.LINEAR}function C(b){const S=b.target;S.removeEventListener("dispose",C),M(S),S.isVideoTexture&&u.delete(S)}function U(b){const S=b.target;S.removeEventListener("dispose",U),B(S)}function M(b){const S=i.get(b);if(S.__webglInit===void 0)return;const I=b.source,Q=f.get(I);if(Q){const W=Q[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&T(b),Object.keys(Q).length===0&&f.delete(I)}i.remove(b)}function T(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const I=b.source,Q=f.get(I);delete Q[S.__cacheKey],o.memory.textures--}function B(b){const S=b.texture,I=i.get(b),Q=i.get(S);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(I.__webglFramebuffer[W]))for(let Z=0;Z<I.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(I.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(I.__webglFramebuffer[W]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[W])}else{if(Array.isArray(I.__webglFramebuffer))for(let W=0;W<I.__webglFramebuffer.length;W++)n.deleteFramebuffer(I.__webglFramebuffer[W]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let W=0;W<I.__webglColorRenderbuffer.length;W++)I.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[W]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let W=0,Z=S.length;W<Z;W++){const he=i.get(S[W]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(S[W])}i.remove(S),i.remove(b)}let G=0;function z(){G=0}function L(){const b=G;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),G+=1,b}function N(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function D(b,S){const I=i.get(b);if(b.isVideoTexture&&se(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(I,b,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function j(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){de(I,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function V(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){de(I,b,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function Y(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){Ee(I,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const re={[Al]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},ae={[qt]:n.NEAREST,[vu]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[q_]:n.LINEAR_MIPMAP_NEAREST,[Sr]:n.LINEAR_MIPMAP_LINEAR},K={[iv]:n.NEVER,[cv]:n.ALWAYS,[sv]:n.LESS,[Dd]:n.LEQUAL,[rv]:n.EQUAL,[lv]:n.GEQUAL,[ov]:n.GREATER,[av]:n.NOTEQUAL};function ne(b,S,I){if(I?(n.texParameteri(b,n.TEXTURE_WRAP_S,re[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,re[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,re[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ae[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ae[S.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==bn||S.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,A(S.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==qt&&S.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===qt||S.minFilter!==ba&&S.minFilter!==Sr||S.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function oe(b,S){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));const Q=S.source;let W=f.get(Q);W===void 0&&(W={},f.set(Q,W));const Z=N(S);if(Z!==b.__cacheKey){W[Z]===void 0&&(W[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),W[Z].usedTimes++;const he=W[b.__cacheKey];he!==void 0&&(W[b.__cacheKey].usedTimes--,he.usedTimes===0&&T(S)),b.__cacheKey=Z,b.__webglTexture=W[Z].texture}return I}function de(b,S,I){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);const W=oe(b,S),Z=S.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+I);const he=i.get(Z);if(Z.version!==he.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const ue=nt.getPrimaries(nt.workingColorSpace),fe=S.colorSpace===pn?null:nt.getPrimaries(S.colorSpace),ge=S.colorSpace===pn||ue===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=d(S)&&p(S.image)===!1;let ce=g(S.image,Re,!1,s.maxTextureSize);ce=le(S,ce);const qe=p(ce)||a,Ue=r.convert(S.format,S.colorSpace);let De=r.convert(S.type),Le=y(S.internalFormat,Ue,De,S.colorSpace,S.isVideoTexture);ne(Q,S,qe);let _e;const Ie=S.mipmaps,Ze=a&&S.isVideoTexture!==!0&&Le!==Pd,ct=he.__version===void 0||W===!0,je=R(S,ce,qe);if(S.isDepthTexture)Le=n.DEPTH_COMPONENT,a?S.type===Ti?Le=n.DEPTH_COMPONENT32F:S.type===wi?Le=n.DEPTH_COMPONENT24:S.type===Ki?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:S.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Zi&&Le===n.DEPTH_COMPONENT&&S.type!==lc&&S.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=wi,De=r.convert(S.type)),S.format===Bs&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,S.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ki,De=r.convert(S.type))),ct&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Le,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Le,ce.width,ce.height,0,Ue,De,null));else if(S.isDataTexture)if(Ie.length>0&&qe){Ze&&ct&&t.texStorage2D(n.TEXTURE_2D,je,Le,Ie[0].width,Ie[0].height);for(let pe=0,O=Ie.length;pe<O;pe++)_e=Ie[pe],Ze?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,_e.width,_e.height,Ue,De,_e.data):t.texImage2D(n.TEXTURE_2D,pe,Le,_e.width,_e.height,0,Ue,De,_e.data);S.generateMipmaps=!1}else Ze?(ct&&t.texStorage2D(n.TEXTURE_2D,je,Le,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Ue,De,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ce.width,ce.height,0,Ue,De,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Le,Ie[0].width,Ie[0].height,ce.depth);for(let pe=0,O=Ie.length;pe<O;pe++)_e=Ie[pe],S.format!==wn?Ue!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,ce.depth,Ue,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Le,_e.width,_e.height,ce.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,ce.depth,Ue,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Le,_e.width,_e.height,ce.depth,0,Ue,De,_e.data)}else{Ze&&ct&&t.texStorage2D(n.TEXTURE_2D,je,Le,Ie[0].width,Ie[0].height);for(let pe=0,O=Ie.length;pe<O;pe++)_e=Ie[pe],S.format!==wn?Ue!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,_e.width,_e.height,Ue,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,_e.width,_e.height,Ue,De,_e.data):t.texImage2D(n.TEXTURE_2D,pe,Le,_e.width,_e.height,0,Ue,De,_e.data)}else if(S.isDataArrayTexture)Ze?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Le,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ue,De,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ce.width,ce.height,ce.depth,0,Ue,De,ce.data);else if(S.isData3DTexture)Ze?(ct&&t.texStorage3D(n.TEXTURE_3D,je,Le,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ue,De,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ce.width,ce.height,ce.depth,0,Ue,De,ce.data);else if(S.isFramebufferTexture){if(ct)if(Ze)t.texStorage2D(n.TEXTURE_2D,je,Le,ce.width,ce.height);else{let pe=ce.width,O=ce.height;for(let xe=0;xe<je;xe++)t.texImage2D(n.TEXTURE_2D,xe,Le,pe,O,0,Ue,De,null),pe>>=1,O>>=1}}else if(Ie.length>0&&qe){Ze&&ct&&t.texStorage2D(n.TEXTURE_2D,je,Le,Ie[0].width,Ie[0].height);for(let pe=0,O=Ie.length;pe<O;pe++)_e=Ie[pe],Ze?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ue,De,_e):t.texImage2D(n.TEXTURE_2D,pe,Le,Ue,De,_e);S.generateMipmaps=!1}else Ze?(ct&&t.texStorage2D(n.TEXTURE_2D,je,Le,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,De,ce)):t.texImage2D(n.TEXTURE_2D,0,Le,Ue,De,ce);v(S,qe)&&x(Q),he.__version=Z.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ee(b,S,I){if(S.image.length!==6)return;const Q=oe(b,S),W=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);const Z=i.get(W);if(W.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const he=nt.getPrimaries(nt.workingColorSpace),ue=S.colorSpace===pn?null:nt.getPrimaries(S.colorSpace),fe=S.colorSpace===pn||he===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Re=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let pe=0;pe<6;pe++)!ge&&!Re?ce[pe]=g(S.image[pe],!1,!0,s.maxCubemapSize):ce[pe]=Re?S.image[pe].image:S.image[pe],ce[pe]=le(S,ce[pe]);const qe=ce[0],Ue=p(qe)||a,De=r.convert(S.format,S.colorSpace),Le=r.convert(S.type),_e=y(S.internalFormat,De,Le,S.colorSpace),Ie=a&&S.isVideoTexture!==!0,Ze=Z.__version===void 0||Q===!0;let ct=R(S,qe,Ue);ne(n.TEXTURE_CUBE_MAP,S,Ue);let je;if(ge){Ie&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,_e,qe.width,qe.height);for(let pe=0;pe<6;pe++){je=ce[pe].mipmaps;for(let O=0;O<je.length;O++){const xe=je[O];S.format!==wn?De!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,0,0,xe.width,xe.height,De,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,_e,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,0,0,xe.width,xe.height,De,Le,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,_e,xe.width,xe.height,0,De,Le,xe.data)}}}else{je=S.mipmaps,Ie&&Ze&&(je.length>0&&ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,_e,ce[0].width,ce[0].height));for(let pe=0;pe<6;pe++)if(Re){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce[pe].width,ce[pe].height,De,Le,ce[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_e,ce[pe].width,ce[pe].height,0,De,Le,ce[pe].data);for(let O=0;O<je.length;O++){const ye=je[O].image[pe].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,0,0,ye.width,ye.height,De,Le,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,_e,ye.width,ye.height,0,De,Le,ye.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,De,Le,ce[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_e,De,Le,ce[pe]);for(let O=0;O<je.length;O++){const xe=je[O];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,0,0,De,Le,xe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,_e,De,Le,xe.image[pe])}}}v(S,Ue)&&x(n.TEXTURE_CUBE_MAP),Z.__version=W.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Me(b,S,I,Q,W,Z){const he=r.convert(I.format,I.colorSpace),ue=r.convert(I.type),fe=y(I.internalFormat,he,ue,I.colorSpace);if(!i.get(S).__hasExternalTextures){const Re=Math.max(1,S.width>>Z),ce=Math.max(1,S.height>>Z);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,Z,fe,Re,ce,S.depth,0,he,ue,null):t.texImage2D(W,Z,fe,Re,ce,0,he,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),X(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,W,i.get(I).__webglTexture,0,J(S)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,W,i.get(I).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(b,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||X(S)){const W=S.depthTexture;W&&W.isDepthTexture&&(W.type===Ti?Q=n.DEPTH_COMPONENT32F:W.type===wi&&(Q=n.DEPTH_COMPONENT24));const Z=J(S);X(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,Q,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Q,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const Q=J(S);I&&X(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,S.width,S.height):X(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let W=0;W<Q.length;W++){const Z=Q[W],he=r.convert(Z.format,Z.colorSpace),ue=r.convert(Z.type),fe=y(Z.internalFormat,he,ue,Z.colorSpace),ge=J(S);I&&X(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,fe,S.width,S.height):X(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,W=J(S);if(S.depthTexture.format===Zi)X(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Bs)X(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const S=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Oe(S.__webglFramebuffer,b)}else if(I){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=n.createRenderbuffer(),Ce(S.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ce(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(b,S,I){const Q=i.get(b);S!==void 0&&Me(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ae(b)}function E(b){const S=b.texture,I=i.get(b),Q=i.get(S);b.addEventListener("dispose",U),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++);const W=b.isWebGLCubeRenderTarget===!0,Z=b.isWebGLMultipleRenderTargets===!0,he=p(b)||a;if(W){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let fe=0;fe<S.mipmaps.length;fe++)I.__webglFramebuffer[ue][fe]=n.createFramebuffer()}else I.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)I.__webglFramebuffer[ue]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Z)if(s.drawBuffers){const ue=b.texture;for(let fe=0,ge=ue.length;fe<ge;fe++){const Re=i.get(ue[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&X(b)===!1){const ue=Z?S:[S];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const ge=ue[fe];I.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const Re=r.convert(ge.format,ge.colorSpace),ce=r.convert(ge.type),qe=y(ge.internalFormat,Re,ce,ge.colorSpace,b.isXRRenderTarget===!0),Ue=J(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,qe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(n.TEXTURE_CUBE_MAP,S,he);for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Me(I.__webglFramebuffer[ue][fe],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Me(I.__webglFramebuffer[ue],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(S,he)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){const ue=b.texture;for(let fe=0,ge=ue.length;fe<ge;fe++){const Re=ue[fe],ce=i.get(Re);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),ne(n.TEXTURE_2D,Re,he),Me(I.__webglFramebuffer,b,Re,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),v(Re,he)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,Q.__webglTexture),ne(ue,S,he),a&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Me(I.__webglFramebuffer[fe],b,S,n.COLOR_ATTACHMENT0,ue,fe);else Me(I.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,ue,0);v(S,he)&&x(ue),t.unbindTexture()}b.depthBuffer&&Ae(b)}function F(b){const S=p(b)||a,I=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,W=I.length;Q<W;Q++){const Z=I[Q];if(v(Z,S)){const he=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(Z).__webglTexture;t.bindTexture(he,ue),x(he),t.unbindTexture()}}}function H(b){if(a&&b.samples>0&&X(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],I=b.width,Q=b.height;let W=n.COLOR_BUFFER_BIT;const Z=[],he=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){Z.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&Z.push(he);const Re=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Re===!1&&(b.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]),Re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),fe){const ce=i.get(S[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,I,Q,0,0,I,Q,W,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const Re=i.get(S[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function J(b){return Math.min(s.maxSamples,b.samples)}function X(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function le(b,S){const I=b.colorSpace,Q=b.format,W=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Cl||I!==mi&&I!==pn&&(nt.getTransfer(I)===ht?a===!1?e.has("EXT_sRGB")===!0&&Q===wn?(b.format=Cl,b.minFilter=fn,b.generateMipmaps=!1):S=Ud.sRGBToLinear(S):(Q!==wn||W!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=ve,this.setupRenderTarget=E,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=X}function hE(n,e,t){const i=t.isWebGL2;function s(r,o=pn){let a;const l=nt.getTransfer(o);if(r===Ci)return n.UNSIGNED_BYTE;if(r===wd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return n.UNSIGNED_SHORT_5_5_5_1;if(r===X_)return n.BYTE;if(r===j_)return n.SHORT;if(r===lc)return n.UNSIGNED_SHORT;if(r===bd)return n.INT;if(r===wi)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===Er)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Y_)return n.ALPHA;if(r===wn)return n.RGBA;if(r===$_)return n.LUMINANCE;if(r===K_)return n.LUMINANCE_ALPHA;if(r===Zi)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===Cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Z_)return n.RED;if(r===Ad)return n.RED_INTEGER;if(r===J_)return n.RG;if(r===Rd)return n.RG_INTEGER;if(r===Cd)return n.RGBA_INTEGER;if(r===wa||r===Ta||r===Aa||r===Ra)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xu||r===yu||r===Su||r===Eu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Su)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mu||r===bu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Mu)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===bu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wu||r===Tu||r===Au||r===Ru||r===Cu||r===Pu||r===Lu||r===Iu||r===Du||r===Nu||r===Uu||r===Fu||r===Ou||r===Bu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Au)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ru)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Iu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Du)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ou)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ca||r===zu||r===Hu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ca)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Q_||r===Gu||r===Vu||r===ku)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ca)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ku)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ki?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class fE extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pE extends Gs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const v=[],x=[],y=new Ke;let R=null;const A=new dn;A.layers.enable(1),A.viewport=new Pt;const C=new dn;C.layers.enable(2),C.viewport=new Pt;const U=[A,C],M=new fE;M.layers.enable(1),M.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=v[ne];return oe===void 0&&(oe=new el,v[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=v[ne];return oe===void 0&&(oe=new el,v[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=v[ne];return oe===void 0&&(oe=new el,v[ne]=oe),oe.getHandSpace()};function G(ne){const oe=x.indexOf(ne.inputSource);if(oe===-1)return;const de=v[oe];de!==void 0&&(de.update(ne.inputSource,ne.frame,c||o),de.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",L);for(let ne=0;ne<v.length;ne++){const oe=x[ne];oe!==null&&(x[ne]=null,v[ne].disconnect(oe))}T=null,B=null,e.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new es(m.framebufferWidth,m.framebufferHeight,{format:wn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,de=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?Bs:Zi,de=g.stencil?Ki:wi);const Me={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new es(f.textureWidth,f.textureHeight,{format:wn,type:Ci,depthTexture:new Yd(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(ne){for(let oe=0;oe<ne.removed.length;oe++){const de=ne.removed[oe],Ee=x.indexOf(de);Ee>=0&&(x[Ee]=null,v[Ee].disconnect(de))}for(let oe=0;oe<ne.added.length;oe++){const de=ne.added[oe];let Ee=x.indexOf(de);if(Ee===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=x.length){x.push(de),Ee=Ce;break}else if(x[Ce]===null){x[Ce]=de,Ee=Ce;break}if(Ee===-1)break}const Me=v[Ee];Me&&Me.connect(de)}}const N=new $,D=new $;function j(ne,oe,de){N.setFromMatrixPosition(oe.matrixWorld),D.setFromMatrixPosition(de.matrixWorld);const Ee=N.distanceTo(D),Me=oe.projectionMatrix.elements,Ce=de.projectionMatrix.elements,Oe=Me[14]/(Me[10]-1),Ae=Me[14]/(Me[10]+1),ve=(Me[9]+1)/Me[5],E=(Me[9]-1)/Me[5],F=(Me[8]-1)/Me[0],H=(Ce[8]+1)/Ce[0],J=Oe*F,X=Oe*H,se=Ee/(-F+H),le=se*-F;oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(le),ne.translateZ(se),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const b=Oe+se,S=Ae+se,I=J-le,Q=X+(Ee-le),W=ve*Ae/S*b,Z=E*Ae/S*b;ne.projectionMatrix.makePerspective(I,Q,W,Z,b,S),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function V(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;M.near=C.near=A.near=ne.near,M.far=C.far=A.far=ne.far,(T!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,B=M.far);const oe=ne.parent,de=M.cameras;V(M,oe);for(let Ee=0;Ee<de.length;Ee++)V(de[Ee],oe);de.length===2?j(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),Y(ne,M,oe)};function Y(ne,oe,de){de===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(de.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Pl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)};let re=null;function ae(ne,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Ee=!1;de.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let Me=0;Me<de.length;Me++){const Ce=de[Me];let Oe=null;if(m!==null)Oe=m.getViewport(Ce);else{const ve=h.getViewSubImage(f,Ce);Oe=ve.viewport,Me===0&&(e.setRenderTargetTextures(d,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(d))}let Ae=U[Me];Ae===void 0&&(Ae=new dn,Ae.layers.enable(Me),Ae.viewport=new Pt,U[Me]=Ae),Ae.matrix.fromArray(Ce.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ce.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Me===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(Ae)}}for(let de=0;de<v.length;de++){const Ee=x[de],Me=v[de];Ee!==null&&Me!==void 0&&Me.update(Ee,oe,c||o)}re&&re(ne,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const K=new Xd;K.setAnimationLoop(ae),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}}function mE(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,kd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===en&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===en&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gE(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=s[v.id];y===void 0&&(_(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));const R=x.program;i.updateUBOMapping(v,R);const A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),R=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=s[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,C=y.length;A<C;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,T=U.length;M<T;M++){const B=U[M];if(m(B,A,M,R)===!0){const G=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let N=0;N<z.length;N++){const D=z[N],j=g(D);typeof D=="number"||typeof D=="boolean"?(B.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,G+L,B.__data)):D.isMatrix3?(B.__data[0]=D.elements[0],B.__data[1]=D.elements[1],B.__data[2]=D.elements[2],B.__data[3]=0,B.__data[4]=D.elements[3],B.__data[5]=D.elements[4],B.__data[6]=D.elements[5],B.__data[7]=0,B.__data[8]=D.elements[6],B.__data[9]=D.elements[7],B.__data[10]=D.elements[8],B.__data[11]=0):(D.toArray(B.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,x,y,R){const A=v.value,C=x+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const U=R[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function _(v){const x=v.uniforms;let y=0;const R=16;for(let C=0,U=x.length;C<U;C++){const M=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,B=M.length;T<B;T++){const G=M[T],z=Array.isArray(G.value)?G.value:[G.value];for(let L=0,N=z.length;L<N;L++){const D=z[L],j=g(D),V=y%R;V!==0&&R-V<j.boundary&&(y+=R-V),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=j.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class ep{constructor(e={}){const{canvas:t=hv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let y=!1,R=0,A=0,C=null,U=-1,M=null;const T=new Pt,B=new Pt;let G=null;const z=new Je(0);let L=0,N=t.width,D=t.height,j=1,V=null,Y=null;const re=new Pt(0,0,N,D),ae=new Pt(0,0,N,D);let K=!1;const ne=new fc;let oe=!1,de=!1,Ee=null;const Me=new Et,Ce=new Ke,Oe=new $,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return C===null?j:1}let E=i;function F(P,q){for(let te=0;te<P.length;te++){const ie=P[te],ee=t.getContext(ie,q);if(ee!==null)return ee}return null}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",xe,!1),E===null){const q=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&q.shift(),E=F(q,P),E===null)throw F(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let H,J,X,se,le,b,S,I,Q,W,Z,he,ue,fe,ge,Re,ce,qe,Ue,De,Le,_e,Ie,Ze;function ct(){H=new Ty(E),J=new yy(E,H,e),H.init(J),_e=new hE(E,H,J),X=new cE(E,H,J),se=new Cy(E),le=new $S,b=new uE(E,H,X,le,J,_e,se),S=new Ey(x),I=new wy(x),Q=new Fv(E,J),Ie=new vy(E,H,Q,J),W=new Ay(E,Q,se,Ie),Z=new Dy(E,W,Q,se),Ue=new Iy(E,J,b),Re=new Sy(le),he=new YS(x,S,I,H,J,Ie,Re),ue=new mE(x,le),fe=new ZS,ge=new iE(H,J),qe=new _y(x,S,I,X,Z,f,l),ce=new lE(x,Z,J),Ze=new gE(E,se,J,X),De=new xy(E,H,se,J),Le=new Ry(E,H,se,J),se.programs=he.programs,x.capabilities=J,x.extensions=H,x.properties=le,x.renderLists=fe,x.shadowMap=ce,x.state=X,x.info=se}ct();const je=new pE(x,E);this.xr=je,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const P=H.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=H.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(N,D,!1))},this.getSize=function(P){return P.set(N,D)},this.setSize=function(P,q,te=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,D=q,t.width=Math.floor(P*j),t.height=Math.floor(q*j),te===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(N*j,D*j).floor()},this.setDrawingBufferSize=function(P,q,te){N=P,D=q,j=te,t.width=Math.floor(P*te),t.height=Math.floor(q*te),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,q,te,ie){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,q,te,ie),X.viewport(T.copy(re).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(ae)},this.setScissor=function(P,q,te,ie){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,q,te,ie),X.scissor(B.copy(ae).multiplyScalar(j).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(P){X.setScissorTest(K=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(P=!0,q=!0,te=!0){let ie=0;if(P){let ee=!1;if(C!==null){const Se=C.texture.format;ee=Se===Cd||Se===Rd||Se===Ad}if(ee){const Se=C.texture.type,Pe=Se===Ci||Se===wi||Se===lc||Se===Ki||Se===wd||Se===Td,Fe=qe.getClearColor(),ze=qe.getClearAlpha(),Xe=Fe.r,Ge=Fe.g,Ve=Fe.b;Pe?(m[0]=Xe,m[1]=Ge,m[2]=Ve,m[3]=ze,E.clearBufferuiv(E.COLOR,0,m)):(_[0]=Xe,_[1]=Ge,_[2]=Ve,_[3]=ze,E.clearBufferiv(E.COLOR,0,_))}else ie|=E.COLOR_BUFFER_BIT}q&&(ie|=E.DEPTH_BUFFER_BIT),te&&(ie|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),fe.dispose(),ge.dispose(),le.dispose(),S.dispose(),I.dispose(),Z.dispose(),Ie.dispose(),Ze.dispose(),he.dispose(),je.dispose(),je.removeEventListener("sessionstart",Gt),je.removeEventListener("sessionend",ot),Ee&&(Ee.dispose(),Ee=null),Vt.stop()};function pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=se.autoReset,q=ce.enabled,te=ce.autoUpdate,ie=ce.needsUpdate,ee=ce.type;ct(),se.autoReset=P,ce.enabled=q,ce.autoUpdate=te,ce.needsUpdate=ie,ce.type=ee}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ye(P){const q=P.target;q.removeEventListener("dispose",ye),Be(q)}function Be(P){Ne(P),le.remove(P)}function Ne(P){const q=le.get(P).programs;q!==void 0&&(q.forEach(function(te){he.releaseProgram(te)}),P.isShaderMaterial&&he.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,te,ie,ee,Se){q===null&&(q=Ae);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=Up(P,q,te,ie,ee);X.setMaterial(ie,Pe);let ze=te.index,Xe=1;if(ie.wireframe===!0){if(ze=W.getWireframeAttribute(te),ze===void 0)return;Xe=2}const Ge=te.drawRange,Ve=te.attributes.position;let gt=Ge.start*Xe,nn=(Ge.start+Ge.count)*Xe;Se!==null&&(gt=Math.max(gt,Se.start*Xe),nn=Math.min(nn,(Se.start+Se.count)*Xe)),ze!==null?(gt=Math.max(gt,0),nn=Math.min(nn,ze.count)):Ve!=null&&(gt=Math.max(gt,0),nn=Math.min(nn,Ve.count));const At=nn-gt;if(At<0||At===1/0)return;Ie.setup(ee,ie,Fe,te,ze);let Yn,ft=De;if(ze!==null&&(Yn=Q.get(ze),ft=Le,ft.setIndex(Yn)),ee.isMesh)ie.wireframe===!0?(X.setLineWidth(ie.wireframeLinewidth*ve()),ft.setMode(E.LINES)):ft.setMode(E.TRIANGLES);else if(ee.isLine){let Ye=ie.linewidth;Ye===void 0&&(Ye=1),X.setLineWidth(Ye*ve()),ee.isLineSegments?ft.setMode(E.LINES):ee.isLineLoop?ft.setMode(E.LINE_LOOP):ft.setMode(E.LINE_STRIP)}else ee.isPoints?ft.setMode(E.POINTS):ee.isSprite&&ft.setMode(E.TRIANGLES);if(ee.isBatchedMesh)ft.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)ft.renderInstances(gt,At,ee.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,oa=Math.min(te.instanceCount,Ye);ft.renderInstances(gt,At,oa)}else ft.render(gt,At)};function st(P,q,te){P.transparent===!0&&P.side===Mn&&P.forceSinglePass===!1?(P.side=en,P.needsUpdate=!0,Hr(P,q,te),P.side=Li,P.needsUpdate=!0,Hr(P,q,te),P.side=Mn):Hr(P,q,te)}this.compile=function(P,q,te=null){te===null&&(te=P),p=ge.get(te),p.init(),v.push(p),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),P!==te&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights(x._useLegacyLights);const ie=new Set;return P.traverse(function(ee){const Se=ee.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Fe=Se[Pe];st(Fe,te,ee),ie.add(Fe)}else st(Se,te,ee),ie.add(Se)}),v.pop(),p=null,ie},this.compileAsync=function(P,q,te=null){const ie=this.compile(P,q,te);return new Promise(ee=>{function Se(){if(ie.forEach(function(Pe){le.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){ee(P);return}setTimeout(Se,10)}H.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let rt=null;function Tt(P){rt&&rt(P)}function Gt(){Vt.stop()}function ot(){Vt.start()}const Vt=new Xd;Vt.setAnimationLoop(Tt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(P){rt=P,je.setAnimationLoop(P),P===null?Vt.stop():Vt.start()},je.addEventListener("sessionstart",Gt),je.addEventListener("sessionend",ot),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(q),q=je.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,q,C),p=ge.get(P,v.length),p.init(),v.push(p),Me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ne.setFromProjectionMatrix(Me),de=this.localClippingEnabled,oe=Re.init(this.clippingPlanes,de),g=fe.get(P,d.length),g.init(),d.push(g),Dn(P,q,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,Y),this.info.render.frame++,oe===!0&&Re.beginShadows();const te=p.state.shadowsArray;if(ce.render(te,P,q),oe===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(g,P),p.setupLights(x._useLegacyLights),q.isArrayCamera){const ie=q.cameras;for(let ee=0,Se=ie.length;ee<Se;ee++){const Pe=ie[ee];Cc(g,P,Pe,Pe.viewport)}}else Cc(g,P,q);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(x,P,q),Ie.resetDefaultState(),U=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Dn(P,q,te,ie){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ne.intersectsSprite(P)){ie&&Oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Me);const Pe=Z.update(P),Fe=P.material;Fe.visible&&g.push(P,Pe,Fe,te,Oe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ne.intersectsObject(P))){const Pe=Z.update(P),Fe=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Oe.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(P.matrixWorld).applyMatrix4(Me)),Array.isArray(Fe)){const ze=Pe.groups;for(let Xe=0,Ge=ze.length;Xe<Ge;Xe++){const Ve=ze[Xe],gt=Fe[Ve.materialIndex];gt&&gt.visible&&g.push(P,Pe,gt,te,Oe.z,Ve)}}else Fe.visible&&g.push(P,Pe,Fe,te,Oe.z,null)}}const Se=P.children;for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++)Dn(Se[Pe],q,te,ie)}function Cc(P,q,te,ie){const ee=P.opaque,Se=P.transmissive,Pe=P.transparent;p.setupLightsView(te),oe===!0&&Re.setGlobalState(x.clippingPlanes,te),Se.length>0&&Np(ee,Se,q,te),ie&&X.viewport(T.copy(ie)),ee.length>0&&zr(ee,q,te),Se.length>0&&zr(Se,q,te),Pe.length>0&&zr(Pe,q,te),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Np(P,q,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const Se=J.isWebGL2;Ee===null&&(Ee=new es(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?Er:Ci,minFilter:Sr,samples:Se?4:0})),x.getDrawingBufferSize(Ce),Se?Ee.setSize(Ce.x,Ce.y):Ee.setSize(Ll(Ce.x),Ll(Ce.y));const Pe=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Fe=x.toneMapping;x.toneMapping=Ri,zr(P,te,ie),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee);let ze=!1;for(let Xe=0,Ge=q.length;Xe<Ge;Xe++){const Ve=q[Xe],gt=Ve.object,nn=Ve.geometry,At=Ve.material,Yn=Ve.group;if(At.side===Mn&&gt.layers.test(ie.layers)){const ft=At.side;At.side=en,At.needsUpdate=!0,Pc(gt,te,ie,nn,At,Yn),At.side=ft,At.needsUpdate=!0,ze=!0}}ze===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee)),x.setRenderTarget(Pe),x.setClearColor(z,L),x.toneMapping=Fe}function zr(P,q,te){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Se=P.length;ee<Se;ee++){const Pe=P[ee],Fe=Pe.object,ze=Pe.geometry,Xe=ie===null?Pe.material:ie,Ge=Pe.group;Fe.layers.test(te.layers)&&Pc(Fe,q,te,ze,Xe,Ge)}}function Pc(P,q,te,ie,ee,Se){P.onBeforeRender(x,q,te,ie,ee,Se),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(x,q,te,ie,P,Se),ee.transparent===!0&&ee.side===Mn&&ee.forceSinglePass===!1?(ee.side=en,ee.needsUpdate=!0,x.renderBufferDirect(te,q,ie,ee,P,Se),ee.side=Li,ee.needsUpdate=!0,x.renderBufferDirect(te,q,ie,ee,P,Se),ee.side=Mn):x.renderBufferDirect(te,q,ie,ee,P,Se),P.onAfterRender(x,q,te,ie,ee,Se)}function Hr(P,q,te){q.isScene!==!0&&(q=Ae);const ie=le.get(P),ee=p.state.lights,Se=p.state.shadowsArray,Pe=ee.state.version,Fe=he.getParameters(P,ee.state,Se,q,te),ze=he.getProgramCacheKey(Fe);let Xe=ie.programs;ie.environment=P.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(P.isMeshStandardMaterial?I:S).get(P.envMap||ie.environment),Xe===void 0&&(P.addEventListener("dispose",ye),Xe=new Map,ie.programs=Xe);let Ge=Xe.get(ze);if(Ge!==void 0){if(ie.currentProgram===Ge&&ie.lightsStateVersion===Pe)return Ic(P,Fe),Ge}else Fe.uniforms=he.getUniforms(P),P.onBuild(te,Fe,x),P.onBeforeCompile(Fe,x),Ge=he.acquireProgram(Fe,ze),Xe.set(ze,Ge),ie.uniforms=Fe.uniforms;const Ve=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=Re.uniform),Ic(P,Fe),ie.needsLights=Op(P),ie.lightsStateVersion=Pe,ie.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=Ge,ie.uniformsList=null,Ge}function Lc(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=So.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Ic(P,q){const te=le.get(P);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function Up(P,q,te,ie,ee){q.isScene!==!0&&(q=Ae),b.resetTextureUnits();const Se=q.fog,Pe=ie.isMeshStandardMaterial?q.environment:null,Fe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mi,ze=(ie.isMeshStandardMaterial?I:S).get(ie.envMap||Pe),Xe=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ge=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,nn=!!te.morphAttributes.color;let At=Ri;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=x.toneMapping);const Yn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ft=Yn!==void 0?Yn.length:0,Ye=le.get(ie),oa=p.state.lights;if(oe===!0&&(de===!0||P!==M)){const un=P===M&&ie.id===U;Re.setState(ie,P,un)}let pt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==oa.state.version||Ye.outputColorSpace!==Fe||ee.isBatchedMesh&&Ye.batching===!1||!ee.isBatchedMesh&&Ye.batching===!0||ee.isInstancedMesh&&Ye.instancing===!1||!ee.isInstancedMesh&&Ye.instancing===!0||ee.isSkinnedMesh&&Ye.skinning===!1||!ee.isSkinnedMesh&&Ye.skinning===!0||ee.isInstancedMesh&&Ye.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ye.instancingColor===!1&&ee.instanceColor!==null||Ye.envMap!==ze||ie.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Re.numPlanes||Ye.numIntersection!==Re.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Ge||Ye.morphTargets!==Ve||Ye.morphNormals!==gt||Ye.morphColors!==nn||Ye.toneMapping!==At||J.isWebGL2===!0&&Ye.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Ye.__version=ie.version);let Ii=Ye.currentProgram;pt===!0&&(Ii=Hr(ie,q,ee));let Dc=!1,Ws=!1,aa=!1;const Ut=Ii.getUniforms(),Di=Ye.uniforms;if(X.useProgram(Ii.program)&&(Dc=!0,Ws=!0,aa=!0),ie.id!==U&&(U=ie.id,Ws=!0),Dc||M!==P){Ut.setValue(E,"projectionMatrix",P.projectionMatrix),Ut.setValue(E,"viewMatrix",P.matrixWorldInverse);const un=Ut.map.cameraPosition;un!==void 0&&un.setValue(E,Oe.setFromMatrixPosition(P.matrixWorld)),J.logarithmicDepthBuffer&&Ut.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ut.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Ws=!0,aa=!0)}if(ee.isSkinnedMesh){Ut.setOptional(E,ee,"bindMatrix"),Ut.setOptional(E,ee,"bindMatrixInverse");const un=ee.skeleton;un&&(J.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Ut.setValue(E,"boneTexture",un.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(Ut.setOptional(E,ee,"batchingTexture"),Ut.setValue(E,"batchingTexture",ee._matricesTexture,b));const la=te.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&J.isWebGL2===!0)&&Ue.update(ee,te,Ii),(Ws||Ye.receiveShadow!==ee.receiveShadow)&&(Ye.receiveShadow=ee.receiveShadow,Ut.setValue(E,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Di.envMap.value=ze,Di.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ws&&(Ut.setValue(E,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Fp(Di,aa),Se&&ie.fog===!0&&ue.refreshFogUniforms(Di,Se),ue.refreshMaterialUniforms(Di,ie,j,D,Ee),So.upload(E,Lc(Ye),Di,b)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(So.upload(E,Lc(Ye),Di,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ut.setValue(E,"center",ee.center),Ut.setValue(E,"modelViewMatrix",ee.modelViewMatrix),Ut.setValue(E,"normalMatrix",ee.normalMatrix),Ut.setValue(E,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const un=ie.uniformsGroups;for(let ca=0,Bp=un.length;ca<Bp;ca++)if(J.isWebGL2){const Nc=un[ca];Ze.update(Nc,Ii),Ze.bind(Nc,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Fp(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Op(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,q,te){le.get(P.texture).__webglTexture=q,le.get(P.depthTexture).__webglTexture=te;const ie=le.get(P);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const te=le.get(P);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,te=0){C=P,R=q,A=te;let ie=!0,ee=null,Se=!1,Pe=!1;if(P){const ze=le.get(P);ze.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(E.FRAMEBUFFER,null),ie=!1):ze.__webglFramebuffer===void 0?b.setupRenderTarget(P):ze.__hasExternalTextures&&b.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);const Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const Ge=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ge[q])?ee=Ge[q][te]:ee=Ge[q],Se=!0):J.isWebGL2&&P.samples>0&&b.useMultisampledRTT(P)===!1?ee=le.get(P).__webglMultisampledFramebuffer:Array.isArray(Ge)?ee=Ge[te]:ee=Ge,T.copy(P.viewport),B.copy(P.scissor),G=P.scissorTest}else T.copy(re).multiplyScalar(j).floor(),B.copy(ae).multiplyScalar(j).floor(),G=K;if(X.bindFramebuffer(E.FRAMEBUFFER,ee)&&J.drawBuffers&&ie&&X.drawBuffers(P,ee),X.viewport(T),X.scissor(B),X.setScissorTest(G),Se){const ze=le.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,te)}else if(Pe){const ze=le.get(P.texture),Xe=q||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,Xe)}U=-1},this.readRenderTargetPixels=function(P,q,te,ie,ee,Se,Pe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){X.bindFramebuffer(E.FRAMEBUFFER,Fe);try{const ze=P.texture,Xe=ze.format,Ge=ze.type;if(Xe!==wn&&_e.convert(Xe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Er&&(H.has("EXT_color_buffer_half_float")||J.isWebGL2&&H.has("EXT_color_buffer_float"));if(Ge!==Ci&&_e.convert(Ge)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Ti&&(J.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ie&&te>=0&&te<=P.height-ee&&E.readPixels(q,te,ie,ee,_e.convert(Xe),_e.convert(Ge),Se)}finally{const ze=C!==null?le.get(C).__webglFramebuffer:null;X.bindFramebuffer(E.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(P,q,te=0){const ie=Math.pow(2,-te),ee=Math.floor(q.image.width*ie),Se=Math.floor(q.image.height*ie);b.setTexture2D(q,0),E.copyTexSubImage2D(E.TEXTURE_2D,te,0,0,P.x,P.y,ee,Se),X.unbindTexture()},this.copyTextureToTexture=function(P,q,te,ie=0){const ee=q.image.width,Se=q.image.height,Pe=_e.convert(te.format),Fe=_e.convert(te.type);b.setTexture2D(te,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,te.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,te.unpackAlignment),q.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ie,P.x,P.y,ee,Se,Pe,Fe,q.image.data):q.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ie,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,Pe,q.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,ie,P.x,P.y,Pe,Fe,q.image),ie===0&&te.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(P,q,te,ie,ee=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=P.max.x-P.min.x+1,Pe=P.max.y-P.min.y+1,Fe=P.max.z-P.min.z+1,ze=_e.convert(ie.format),Xe=_e.convert(ie.type);let Ge;if(ie.isData3DTexture)b.setTexture3D(ie,0),Ge=E.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)b.setTexture2DArray(ie,0),Ge=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ie.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ve=E.getParameter(E.UNPACK_ROW_LENGTH),gt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),nn=E.getParameter(E.UNPACK_SKIP_PIXELS),At=E.getParameter(E.UNPACK_SKIP_ROWS),Yn=E.getParameter(E.UNPACK_SKIP_IMAGES),ft=te.isCompressedTexture?te.mipmaps[ee]:te.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,ft.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ft.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,P.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,P.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,P.min.z),te.isDataTexture||te.isData3DTexture?E.texSubImage3D(Ge,ee,q.x,q.y,q.z,Se,Pe,Fe,ze,Xe,ft.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(Ge,ee,q.x,q.y,q.z,Se,Pe,Fe,ze,ft.data)):E.texSubImage3D(Ge,ee,q.x,q.y,q.z,Se,Pe,Fe,ze,Xe,ft),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ve),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,gt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,nn),E.pixelStorei(E.UNPACK_SKIP_ROWS,At),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Yn),ee===0&&ie.generateMipmaps&&E.generateMipmap(Ge),X.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?b.setTextureCube(P,0):P.isData3DTexture?b.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?b.setTexture2DArray(P,0):b.setTexture2D(P,0),X.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,X.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Zo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Ji:Ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?It:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _E extends ep{}_E.prototype.isWebGL1Renderer=!0;class vE extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mc extends Ln{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new $,u=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gc extends Ln{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const g=[],p=i/2;let d=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(m,2));function v(){const y=new $,R=new $;let A=0;const C=(t-e)/i;for(let U=0;U<=r;U++){const M=[],T=U/r,B=T*(t-e)+e;for(let G=0;G<=s;G++){const z=G/s,L=z*l+a,N=Math.sin(L),D=Math.cos(L);R.x=B*N,R.y=-T*i+p,R.z=B*D,h.push(R.x,R.y,R.z),y.set(N,C,D).normalize(),f.push(y.x,y.y,y.z),m.push(z,1-T),M.push(_++)}g.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){const T=g[M][U],B=g[M+1][U],G=g[M+1][U+1],z=g[M][U+1];u.push(T,B,z),u.push(B,G,z),A+=6}c.addGroup(d,A,0),d+=A}function x(y){const R=_,A=new Ke,C=new $;let U=0;const M=y===!0?e:t,T=y===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;const B=_;for(let G=0;G<=s;G++){const L=G/s*l+a,N=Math.cos(L),D=Math.sin(L);C.x=M*D,C.y=p*T,C.z=M*N,h.push(C.x,C.y,C.z),f.push(0,T,0),A.x=N*.5+.5,A.y=D*.5*T+.5,m.push(A.x,A.y),_++}for(let G=0;G<s;G++){const z=R+G,L=B+G;y===!0?u.push(L,L+1,z):u.push(L+1,L,z),U+=3}c.addGroup(d,U,y===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _c extends Ln{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new $,f=new $,m=[],_=[],g=[],p=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(A+y,1-x),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const x=u[d][v+1],y=u[d][v],R=u[d+1][v],A=u[d+1][v+1];(d!==0||o>0)&&m.push(x,y,A),(d!==i-1||l<Math.PI)&&m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vc extends Ln{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new $,h=new $,f=new $;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const g=_/s*r,p=m/i*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(g),h.y=(e+t*Math.cos(p))*Math.sin(g),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const g=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,v=(s+1)*m+_;o.push(g,p,v),o.push(p,d,v)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Eo extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tp extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tl=new Et,Ih=new $,Dh=new $;class xE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yE extends xE{constructor(){super(new jd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SE extends tp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new yE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EE extends tp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ME{constructor(e,t,i=0,s=1/0){this.ray=new Bd(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Dl(e,this,i,t),i.sort(Nh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Dl(e[s],this,i,t);return i.sort(Nh),i}}function Nh(n,e){return n.distance-e.distance}function Dl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Dl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);class Tn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const i=this.elements,s=e.x,r=e.y,o=e.z;return t.x=i[0]*s+i[1]*r+i[2]*o,t.y=i[3]*s+i[4]*r+i[5]*o,t.z=i[6]*s+i[7]*r+i[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Tn);const i=this.elements,s=e.elements,r=t.elements,o=i[0],a=i[1],l=i[2],c=i[3],u=i[4],h=i[5],f=i[6],m=i[7],_=i[8],g=s[0],p=s[1],d=s[2],v=s[3],x=s[4],y=s[5],R=s[6],A=s[7],C=s[8];return r[0]=o*g+a*v+l*R,r[1]=o*p+a*x+l*A,r[2]=o*d+a*y+l*C,r[3]=c*g+u*v+h*R,r[4]=c*p+u*x+h*A,r[5]=c*d+u*y+h*C,r[6]=f*g+m*v+_*R,r[7]=f*p+m*x+_*A,r[8]=f*d+m*y+_*C,t}scale(e,t){t===void 0&&(t=new Tn);const i=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*i[3*r+0],s[3*r+1]=e.y*i[3*r+1],s[3*r+2]=e.z*i[3*r+2];return t}solve(e,t){t===void 0&&(t=new w);const i=3,s=4,r=[];let o,a;for(o=0;o<i*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let u;const h=4;let f;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=h;do f=h-u,r[f+s*o]+=r[f+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const m=r[o+s*a]/r[o+s*o];u=h;do f=h-u,r[f+s*a]=f<=o?0:r[f+s*a]-r[f+s*o]*m;while(--u)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Tn);const t=3,i=6,s=bE;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const u=i;let h;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){c=u;do h=u-c,s[h+i*r]+=s[h+i*o];while(--c);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const f=s[r+i*o]/s[r+i*r];c=u;do h=u-c,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*f;while(--c)}}while(--a);r=2;do{o=r-1;do{const f=s[r+i*o]/s[r+i*r];c=i;do h=i-c,s[h+i*o]=s[h+i*o]-s[h+i*r]*f;while(--c)}while(o--)}while(--r);r=2;do{const f=1/s[r+i*r];c=i;do h=i-c,s[h+i*r]=s[h+i*r]*f;while(--c)}while(r--);r=2;do{o=2;do{if(h=s[t+o+i*r],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,h)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,s=e.z,r=e.w,o=t+t,a=i+i,l=s+s,c=t*o,u=t*a,h=t*l,f=i*a,m=i*l,_=s*l,g=r*o,p=r*a,d=r*l,v=this.elements;return v[3*0+0]=1-(f+_),v[3*0+1]=u-d,v[3*0+2]=h+p,v[3*1+0]=u+d,v[3*1+1]=1-(c+_),v[3*1+2]=m-g,v[3*2+0]=h-p,v[3*2+1]=m+g,v[3*2+2]=1-(c+f),this}transpose(e){e===void 0&&(e=new Tn);const t=this.elements,i=e.elements;let s;return i[0]=t[0],i[4]=t[4],i[8]=t[8],s=t[1],i[1]=t[3],i[3]=s,s=t[2],i[2]=t[6],i[6]=s,s=t[5],i[5]=t[7],i[7]=s,e}}const bE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new w);const i=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*i-o*r,t.z=o*s-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Tn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,s=Math.sqrt(e*e+t*t+i*i);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new w);const t=this.x,i=this.y,s=this.z;let r=Math.sqrt(t*t+i*i+s*s);return r>0?(r=1/r,e.x=t*r,e.y=i*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-i)*(o-i)+(a-s)*(a-s))}distanceSquared(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-i)*(o-i)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new w);const i=this.x,s=this.y,r=this.z;return t.x=e*i,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new w),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const s=wE,r=1/i;s.set(this.x*r,this.y*r,this.z*r);const o=TE;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const s=this.x,r=this.y,o=this.z;i.x=s+(e.x-s)*t,i.y=r+(e.y-r)*t,i.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Uh),Uh.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const wE=new w,TE=new w,Uh=new w;class cn{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,s){const r=this.lowerBound,o=this.upperBound,a=i;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Fh),c=Fh),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new cn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=i.x&&i.x<=r.x||t.x<=r.x&&r.x<=i.x,a=s.y<=i.y&&i.y<=r.y||t.y<=r.y&&r.y<=i.y,l=s.z<=i.z&&i.z<=r.z||t.z<=r.z&&r.z<=i.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&i.x>=r.x&&t.y<=s.y&&i.y>=r.y&&t.z<=s.z&&i.z>=r.z}getCorners(e,t,i,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const i=Oh,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7];this.getCorners(s,r,o,a,l,c,u,h);for(let f=0;f!==8;f++){const m=i[f];e.pointToLocal(m,m)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=Oh,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7];this.getCorners(s,r,o,a,l,c,u,h);for(let f=0;f!==8;f++){const m=i[f];e.pointToWorld(m,m)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*r,u=(this.upperBound.y-i.y)*r,h=(this.lowerBound.z-i.z)*o,f=(this.upperBound.z-i.z)*o,m=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(h,f)),_=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(h,f));return!(_<0||m>_)}}const Fh=new w,Oh=[new w,new w,new w,new w,new w,new w,new w,new w];class Bh{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}return this.matrix[(i*(i+1)>>1)+s-1]}set(e,t,i){let{index:s}=e,{index:r}=t;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class np{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const s=i[e].indexOf(t);return s!==-1&&i[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const i=this._listeners[e.type];if(i!==void 0){e.target=this;for(let s=0,r=i.length;s<r;s++)i[s].call(this,e)}return this}}class yt{constructor(e,t,i,s){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=i,this.w=s}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=AE,s=RE;e.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new yt);const i=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=i*u+o*a+s*c-r*l,t.y=s*u+o*l+r*a-i*c,t.z=r*u+o*c+i*l-s*a,t.w=o*u-i*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new yt);const t=this.x,i=this.y,s=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+i*i+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new yt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const i=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*i+a*r-l*s,h=c*s+l*i-o*r,f=c*r+o*s-a*i,m=-o*i-a*s-l*r;return t.x=u*c+m*-o+h*-l-f*-a,t.y=h*c+m*-a+f*-o-u*-l,t.z=f*c+m*-l+u*-a-h*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=o*a+l*c;if(u>.499&&(i=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(i=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),i===void 0){const h=o*o,f=a*a,m=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*f-2*m),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*h-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=s,e.x=r}setFromEuler(e,t,i,s){s===void 0&&(s="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new yt(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new yt);const s=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,h=e.w,f,m,_,g,p;return m=s*l+r*c+o*u+a*h,m<0&&(m=-m,l=-l,c=-c,u=-u,h=-h),1-m>1e-6?(f=Math.acos(m),_=Math.sin(f),g=Math.sin((1-t)*f)/_,p=Math.sin(t*f)/_):(g=1-t,p=t),i.x=g*s+p*l,i.y=g*r+p*c,i.z=g*o+p*u,i.w=g*a+p*h,i}integrate(e,t,i,s){s===void 0&&(s=new yt);const r=e.x*i.x,o=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,u=this.z,h=this.w,f=t*.5;return s.x+=f*(r*h+o*u-a*c),s.y+=f*(o*h+a*l-r*u),s.z+=f*(a*h+r*c-o*l),s.w+=f*(-r*l-o*c-a*u),s}}const AE=new w,RE=new w,CE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class we{constructor(e){e===void 0&&(e={}),this.id=we.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}we.idCounter=0;we.types=CE;class Qe{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new yt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Qe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Qe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,s){return s===void 0&&(s=new w),i.vsub(e,s),t.conjugate(zh),zh.vmult(s,s),s}static pointToWorldFrame(e,t,i,s){return s===void 0&&(s=new w),t.vmult(i,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new w),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,s){return s===void 0&&(s=new w),t.w*=-1,t.vmult(i,s),t.w*=-1,s}}const zh=new yt;class mr extends we{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:we.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const s=new w;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let u=!1;for(let h=0;h!==i.length;h++)if(i[h].almostEquals(s)||i[h].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],s=this.vertices[i[0]],r=this.vertices[i[1]],o=this.vertices[i[2]];mr.computeNormal(s,r,o,t)}static computeNormal(e,t,i,s){const r=new w,o=new w;t.vsub(e,o),i.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,i,s,r,o,a,l,c){const u=new w;let h=-1,f=-Number.MAX_VALUE;for(let _=0;_<i.faces.length;_++){u.copy(i.faceNormals[_]),r.vmult(u,u);const g=u.dot(o);g>f&&(f=g,h=_)}const m=[];for(let _=0;_<i.faces[h].length;_++){const g=i.vertices[i.faces[h][_]],p=new w;p.copy(g),r.vmult(p,p),s.vadd(p,p),m.push(p)}h>=0&&this.clipFaceAgainstHull(o,e,t,m,a,l,c)}findSeparatingAxis(e,t,i,s,r,o,a,l){const c=new w,u=new w,h=new w,f=new w,m=new w,_=new w;let g=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let d=0;d!==p.uniqueAxes.length;d++){i.vmult(p.uniqueAxes[d],c);const v=p.testSepAxis(c,e,t,i,s,r);if(v===!1)return!1;v<g&&(g=v,o.copy(c))}else{const d=a?a.length:p.faces.length;for(let v=0;v<d;v++){const x=a?a[v]:v;c.copy(p.faceNormals[x]),i.vmult(c,c);const y=p.testSepAxis(c,e,t,i,s,r);if(y===!1)return!1;y<g&&(g=y,o.copy(c))}}if(e.uniqueAxes)for(let d=0;d!==e.uniqueAxes.length;d++){r.vmult(e.uniqueAxes[d],u);const v=p.testSepAxis(u,e,t,i,s,r);if(v===!1)return!1;v<g&&(g=v,o.copy(u))}else{const d=l?l.length:e.faces.length;for(let v=0;v<d;v++){const x=l?l[v]:v;u.copy(e.faceNormals[x]),r.vmult(u,u);const y=p.testSepAxis(u,e,t,i,s,r);if(y===!1)return!1;y<g&&(g=y,o.copy(u))}}for(let d=0;d!==p.uniqueEdges.length;d++){i.vmult(p.uniqueEdges[d],f);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],m),f.cross(m,_),!_.almostZero()){_.normalize();const x=p.testSepAxis(_,e,t,i,s,r);if(x===!1)return!1;x<g&&(g=x,o.copy(_))}}return s.vsub(t,h),h.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,i,s,r,o){const a=this;mr.project(a,e,i,s,nl),mr.project(t,e,r,o,il);const l=nl[0],c=nl[1],u=il[0],h=il[1];if(l<h||u<c)return!1;const f=l-h,m=u-c;return f<m?f:m}calculateLocalInertia(e,t){const i=new w,s=new w;this.computeLocalAABB(s,i);const r=i.x-s.x,o=i.y-s.y,a=i.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],s=this.vertices[t[0]];return-i.dot(s)}clipFaceAgainstHull(e,t,i,s,r,o,a){const l=new w,c=new w,u=new w,h=new w,f=new w,m=new w,_=new w,g=new w,p=this,d=[],v=s,x=d;let y=-1,R=Number.MAX_VALUE;for(let T=0;T<p.faces.length;T++){l.copy(p.faceNormals[T]),i.vmult(l,l);const B=l.dot(e);B<R&&(R=B,y=T)}if(y<0)return;const A=p.faces[y];A.connectedFaces=[];for(let T=0;T<p.faces.length;T++)for(let B=0;B<p.faces[T].length;B++)A.indexOf(p.faces[T][B])!==-1&&T!==y&&A.connectedFaces.indexOf(T)===-1&&A.connectedFaces.push(T);const C=A.length;for(let T=0;T<C;T++){const B=p.vertices[A[T]],G=p.vertices[A[(T+1)%C]];B.vsub(G,c),u.copy(c),i.vmult(u,u),t.vadd(u,u),h.copy(this.faceNormals[y]),i.vmult(h,h),t.vadd(h,h),u.cross(h,f),f.negate(f),m.copy(B),i.vmult(m,m),t.vadd(m,m);const z=A.connectedFaces[T];_.copy(this.faceNormals[z]);const L=this.getPlaneConstantOfFace(z);g.copy(_),i.vmult(g,g);const N=L-g.dot(t);for(this.clipFaceAgainstPlane(v,x,g,N);v.length;)v.shift();for(;x.length;)v.push(x.shift())}_.copy(this.faceNormals[y]);const U=this.getPlaneConstantOfFace(y);g.copy(_),i.vmult(g,g);const M=U-g.dot(t);for(let T=0;T<v.length;T++){let B=g.dot(v[T])+M;if(B<=r&&(console.log(`clamped: depth=${B} to minDist=${r}`),B=r),B<=o){const G=v[T];if(B<=1e-6){const z={point:G,normal:g,depth:B};a.push(z)}}}}clipFaceAgainstPlane(e,t,i,s){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=i.dot(l)+s;for(let u=0;u<a;u++){if(c=e[u],o=i.dot(c)+s,r<0)if(o<0){const h=new w;h.copy(c),t.push(h)}else{const h=new w;l.lerp(c,r/(r-o),h),t.push(h)}else if(o<0){const h=new w;l.lerp(c,r/(r-o),h),t.push(h),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const i=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(i[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=i[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const i=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(i[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const s=t[i].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,s){const r=this.vertices;let o,a,l,c,u,h,f=new w;for(let m=0;m<r.length;m++){f.copy(r[m]),t.vmult(f,f),e.vadd(f,f);const _=f;(o===void 0||_.x<o)&&(o=_.x),(c===void 0||_.x>c)&&(c=_.x),(a===void 0||_.y<a)&&(a=_.y),(u===void 0||_.y>u)&&(u=_.y),(l===void 0||_.z<l)&&(l=_.z),(h===void 0||_.z>h)&&(h=_.z)}i.set(o,a,l),s.set(c,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<i;r++){const o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<i;r++){const o=s[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,i=this.faces,s=this.faceNormals,r=new w;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=t[i[o][0]],c=new w;e.vsub(l,c);const u=a.dot(c),h=new w;r.vsub(l,h);const f=a.dot(h);if(u<0&&f>0||u>0&&f<0)return!1}return-1}static project(e,t,i,s,r){const o=e.vertices.length,a=PE;let l=0,c=0;const u=LE,h=e.vertices;u.setZero(),Qe.vectorToLocalFrame(i,s,t,a),Qe.pointToLocalFrame(i,s,u,u);const f=u.dot(a);c=l=h[0].dot(a);for(let m=1;m<o;m++){const _=h[m].dot(a);_>l&&(l=_),_<c&&(c=_)}if(c-=f,l-=f,c>l){const m=c;c=l,l=m}r[0]=l,r[1]=c}}const nl=[],il=[];new w;const PE=new w,LE=new w;class Mr extends we{constructor(e){super({type:we.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,s=w,r=[new s(-e,-t,-i),new s(e,-t,-i),new s(e,t,-i),new s(-e,t,-i),new s(-e,-t,i),new s(e,-t,i),new s(e,t,i),new s(-e,t,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new mr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),Mr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const s=e;i.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){const i=e,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==i.length;r++)t.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ei.set(r[o][0],r[o][1],r[o][2]),t.vmult(Ei,Ei),e.vadd(Ei,Ei),i(Ei.x,Ei.y,Ei.z)}calculateWorldAABB(e,t,i,s){const r=this.halfExtents;Un[0].set(r.x,r.y,r.z),Un[1].set(-r.x,r.y,r.z),Un[2].set(-r.x,-r.y,r.z),Un[3].set(-r.x,-r.y,-r.z),Un[4].set(r.x,-r.y,-r.z),Un[5].set(r.x,r.y,-r.z),Un[6].set(-r.x,r.y,-r.z),Un[7].set(r.x,-r.y,r.z);const o=Un[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=Un[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,h=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),h>s.z&&(s.z=h),c<i.x&&(i.x=c),u<i.y&&(i.y=u),h<i.z&&(i.z=h)}}}const Ei=new w,Un=[new w,new w,new w,new w,new w,new w,new w,new w],xc={DYNAMIC:1,STATIC:2,KINEMATIC:4},yc={AWAKE:0,SLEEPY:1,SLEEPING:2};class be extends np{constructor(e){e===void 0&&(e={}),super(),this.id=be.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?be.STATIC:be.DYNAMIC,typeof e.type==typeof be.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=be.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new yt,this.initQuaternion=new yt,this.previousQuaternion=new yt,this.interpolatedQuaternion=new yt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Tn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Tn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new cn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=be.AWAKE,this.wakeUpAfterNarrowphase=!1,e===be.SLEEPING&&this.dispatchEvent(be.wakeupEvent)}sleep(){this.sleepState=be.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===be.AWAKE&&i<s?(this.sleepState=be.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(be.sleepyEvent)):t===be.SLEEPY&&i>s?this.wakeUp():t===be.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(be.sleepEvent))}}updateSolveMassProperties(){this.sleepState===be.SLEEPING||this.type===be.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,i){const s=new w,r=new yt;return t&&s.copy(t),i&&r.copy(i),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let s=0;for(let r=0;r!==i;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,s=e.length,r=IE,o=DE,a=this.quaternion,l=this.aabb,c=NE;for(let u=0;u!==s;u++){const h=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(i[u],o),h.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=UE,s=FE;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(t,i),i.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;this.sleepState===be.SLEEPING&&this.wakeUp();const i=OE;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;const i=BE,s=zE;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,s),this.applyForce(i,s)}applyTorque(e){this.type===be.DYNAMIC&&(this.sleepState===be.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;this.sleepState===be.SLEEPING&&this.wakeUp();const i=t,s=HE;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=GE;i.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==be.DYNAMIC)return;const i=VE,s=kE;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,s),this.applyImpulse(i,s)}updateMassProperties(){const e=WE;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Mr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new w;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===be.DYNAMIC||this.type===be.KINEMATIC)||this.sleepState===be.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,h=this.invInertiaWorld,f=this.linearFactor,m=u*e;s.x+=a.x*m*f.x,s.y+=a.y*m*f.y,s.z+=a.z*m*f.z;const _=h.elements,g=this.angularFactor,p=l.x*g.x,d=l.y*g.y,v=l.z*g.z;r.x+=e*(_[0]*p+_[1]*d+_[2]*v),r.y+=e*(_[3]*p+_[4]*d+_[5]*v),r.z+=e*(_[6]*p+_[7]*d+_[8]*v),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}be.idCounter=0;be.COLLIDE_EVENT_NAME="collide";be.DYNAMIC=xc.DYNAMIC;be.STATIC=xc.STATIC;be.KINEMATIC=xc.KINEMATIC;be.AWAKE=yc.AWAKE;be.SLEEPY=yc.SLEEPY;be.SLEEPING=yc.SLEEPING;be.wakeupEvent={type:"wakeup"};be.sleepyEvent={type:"sleepy"};be.sleepEvent={type:"sleep"};const IE=new w,DE=new yt,NE=new cn,UE=new Tn,FE=new Tn;new Tn;const OE=new w,BE=new w,zE=new w,HE=new w,GE=new w,VE=new w,kE=new w,WE=new w;class qE{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&be.STATIC||e.sleepState===be.SLEEPING)&&(t.type&be.STATIC||t.sleepState===be.SLEEPING))}intersectionTest(e,t,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,s):this.doBoundingSphereBroadphase(e,t,i,s)}doBoundingSphereBroadphase(e,t,i,s){const r=XE;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(i.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,i,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),s.push(t))}makePairsUnique(e,t){const i=jE,s=YE,r=$E,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(s[c]),t.push(r[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new w;e.position.vsub(t.position,i);const s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const XE=new w;new w;new yt;new w;const jE={keys:[]},YE=[],$E=[];new w;new w;new w;class ip extends qE{constructor(){super()}collisionPairs(e,t,i){const s=e.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let s=0;s<e.bodies.length;s++){const r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&i.push(r)}return i}}class Bo{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let sp,rp,op,ap,lp,cp,up;const Sc={CLOSEST:1,ANY:2,ALL:4};sp=we.types.SPHERE;rp=we.types.PLANE;op=we.types.BOX;ap=we.types.CYLINDER;lp=we.types.CONVEXPOLYHEDRON;cp=we.types.HEIGHTFIELD;up=we.types.TRIMESH;class xt{get[sp](){return this._intersectSphere}get[rp](){return this._intersectPlane}get[op](){return this._intersectBox}get[ap](){return this._intersectConvex}get[lp](){return this._intersectConvex}get[cp](){return this._intersectHeightfield}get[up](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=xt.ANY,this.result=new Bo,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||xt.ANY,this.result=t.result||new Bo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Hh),sl.length=0,e.broadphase.aabbQuery(e,Hh,sl),this.intersectBodies(sl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const s=KE,r=ZE;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,s=e.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,s){const r=this.from;if(hM(r,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,s,e)}_intersectBox(e,t,i,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,s,r)}_intersectPlane(e,t,i,s,r){const o=this.from,a=this.to,l=this.direction,c=new w(0,0,1);t.vmult(c,c);const u=new w;o.vsub(i,u);const h=u.dot(c);a.vsub(i,u);const f=u.dot(c);if(h*f>0||o.distanceTo(a)<h)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const _=new w,g=new w,p=new w;o.vsub(i,_);const d=-c.dot(_)/m;l.scale(d,g),o.vadd(g,p),this.reportIntersection(c,p,r,s,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),i.x=Math.max(s.x,r.x),i.y=Math.max(s.y,r.y),i.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,i,s,r){e.data,e.elementSize;const o=JE;o.from.copy(this.from),o.to.copy(this.to),Qe.pointToLocalFrame(i,t,o.from,o.from),Qe.pointToLocalFrame(i,t,o.to,o.to),o.updateDirection();const a=QE;let l,c,u,h;l=c=0,u=h=e.data.length-1;const f=new cn;o.getAABB(f),e.getIndexOfPosition(f.lowerBound.x,f.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(f.upperBound.x,f.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let m=l;m<u;m++)for(let _=c;_<h;_++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,_,f),!!f.overlapsRay(o)){if(e.getConvexTrianglePillar(m,_,!1),Qe.pointToWorldFrame(i,t,e.pillarOffset,fo),this._intersectConvex(e.pillarConvex,t,fo,s,r,Gh),this.result.shouldStop)return;e.getConvexTrianglePillar(m,_,!0),Qe.pointToWorldFrame(i,t,e.pillarOffset,fo),this._intersectConvex(e.pillarConvex,t,fo,s,r,Gh)}}}_intersectSphere(e,t,i,s,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),h=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,f=u**2-4*c*h,m=eM,_=tM;if(!(f<0))if(f===0)o.lerp(a,f,m),m.vsub(i,_),_.normalize(),this.reportIntersection(_,m,r,s,-1);else{const g=(-u-Math.sqrt(f))/(2*c),p=(-u+Math.sqrt(f))/(2*c);if(g>=0&&g<=1&&(o.lerp(a,g,m),m.vsub(i,_),_.normalize(),this.reportIntersection(_,m,r,s,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,m),m.vsub(i,_),_.normalize(),this.reportIntersection(_,m,r,s,-1))}}_intersectConvex(e,t,i,s,r,o){const a=nM,l=Vh,c=o&&o.faceList||null,u=e.faces,h=e.vertices,f=e.faceNormals,m=this.direction,_=this.from,g=this.to,p=_.distanceTo(g),d=c?c.length:u.length,v=this.result;for(let x=0;!v.shouldStop&&x<d;x++){const y=c?c[x]:x,R=u[y],A=f[y],C=t,U=i;l.copy(h[R[0]]),C.vmult(l,l),l.vadd(U,l),l.vsub(_,l),C.vmult(A,a);const M=m.dot(a);if(Math.abs(M)<this.precision)continue;const T=a.dot(l)/M;if(!(T<0)){m.scale(T,Kt),Kt.vadd(_,Kt),xn.copy(h[R[0]]),C.vmult(xn,xn),U.vadd(xn,xn);for(let B=1;!v.shouldStop&&B<R.length-1;B++){Fn.copy(h[R[B]]),On.copy(h[R[B+1]]),C.vmult(Fn,Fn),C.vmult(On,On),U.vadd(Fn,Fn),U.vadd(On,On);const G=Kt.distanceTo(_);!(xt.pointInTriangle(Kt,xn,Fn,On)||xt.pointInTriangle(Kt,Fn,xn,On))||G>p||this.reportIntersection(a,Kt,r,s,y)}}}}_intersectTrimesh(e,t,i,s,r,o){const a=iM,l=cM,c=uM,u=Vh,h=sM,f=rM,m=oM,_=lM,g=aM,p=e.indices;e.vertices;const d=this.from,v=this.to,x=this.direction;c.position.copy(i),c.quaternion.copy(t),Qe.vectorToLocalFrame(i,t,x,h),Qe.pointToLocalFrame(i,t,d,f),Qe.pointToLocalFrame(i,t,v,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,m.vsub(f,h),h.normalize();const y=f.distanceSquared(m);e.tree.rayQuery(this,c,l);for(let R=0,A=l.length;!this.result.shouldStop&&R!==A;R++){const C=l[R];e.getNormal(C,a),e.getVertex(p[C*3],xn),xn.vsub(f,u);const U=h.dot(a),M=a.dot(u)/U;if(M<0)continue;h.scale(M,Kt),Kt.vadd(f,Kt),e.getVertex(p[C*3+1],Fn),e.getVertex(p[C*3+2],On);const T=Kt.distanceSquared(f);!(xt.pointInTriangle(Kt,Fn,xn,On)||xt.pointInTriangle(Kt,xn,Fn,On))||T>y||(Qe.vectorToWorldFrame(t,a,g),Qe.pointToWorldFrame(i,t,Kt,_),this.reportIntersection(g,_,r,s,C))}l.length=0}reportIntersection(e,t,i,s,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case xt.ALL:this.hasHit=!0,c.set(o,a,e,t,i,s,l),c.hasHit=!0,this.callback(c);break;case xt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,s,l));break;case xt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,s){s.vsub(t,Xi),i.vsub(t,Js),e.vsub(t,rl);const r=Xi.dot(Xi),o=Xi.dot(Js),a=Xi.dot(rl),l=Js.dot(Js),c=Js.dot(rl);let u,h;return(u=l*a-o*c)>=0&&(h=r*c-o*a)>=0&&u+h<r*l-o*o}}xt.CLOSEST=Sc.CLOSEST;xt.ANY=Sc.ANY;xt.ALL=Sc.ALL;const Hh=new cn,sl=[],Js=new w,rl=new w,KE=new w,ZE=new yt,Kt=new w,xn=new w,Fn=new w,On=new w;new w;new Bo;const Gh={faceList:[0]},fo=new w,JE=new xt,QE=[],eM=new w,tM=new w,nM=new w;new w;new w;const Vh=new w,iM=new w,sM=new w,rM=new w,oM=new w,aM=new w,lM=new w;new cn;const cM=[],uM=new Qe,Xi=new w,po=new w;function hM(n,e,t){t.vsub(n,Xi);const i=Xi.dot(e);return e.scale(i,po),po.vadd(n,po),t.distanceTo(po)}class fM{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class kh{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ir{constructor(e,t,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=Ir.idCounter++,this.minForce=i,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kh,this.jacobianElementB=new kh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const s=t,r=e,o=i;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,i){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.velocity,o=s.velocity,a=i.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.vlambda,o=s.vlambda,a=i.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.force,o=i.torque,a=s.force,l=s.torque,c=i.invMassSolve,u=s.invMassSolve;return r.scale(c,Wh),a.scale(u,qh),i.invInertiaWorldSolve.vmult(o,Xh),s.invInertiaWorldSolve.vmult(l,jh),e.multiplyVectors(Wh,Xh)+t.multiplyVectors(qh,jh)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.invMassSolve,o=s.invMassSolve,a=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,mo),c+=mo.dot(e.rotational),l.vmult(t.rotational,mo),c+=mo.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,r=this.bj,o=dM;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,i.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ir.idCounter=0;const Wh=new w,qh=new w,Xh=new w,jh=new w,mo=new w,dM=new w;class pM extends Ir{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,i=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=mM,c=gM,u=s.velocity,h=s.angularVelocity;s.force,s.torque;const f=r.velocity,m=r.angularVelocity;r.force,r.torque;const _=_M,g=this.jacobianElementA,p=this.jacobianElementB,d=this.ni;o.cross(d,l),a.cross(d,c),d.negate(g.spatial),l.negate(g.rotational),p.spatial.copy(d),p.rotational.copy(c),_.copy(r.position),_.vadd(a,_),_.vsub(s.position,_),_.vsub(o,_);const v=d.dot(_),x=this.restitution+1,y=x*f.dot(d)-x*u.dot(d)+m.dot(c)-h.dot(l),R=this.computeGiMf();return-v*t-y*i-e*R}getImpactVelocityAlongNormal(){const e=vM,t=xM,i=yM,s=SM,r=EM;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}}const mM=new w,gM=new w,_M=new w,vM=new w,xM=new w,yM=new w,SM=new w,EM=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Yh extends Ir{constructor(e,t,i){super(e,t,-i,i),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,r=MM,o=bM,a=this.t;i.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),h=this.computeGiMf();return-u*t-e*h}}const MM=new w,bM=new w;class Dr{constructor(e,t,i){i=fM.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Dr.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Dr.idCounter=0;class Nr{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Nr.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Nr.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new xt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class wM extends we{constructor(e){if(super({type:we.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new w);const i=2*e*this.radius*this.radius/5;return t.x=i,t.y=i,t.z=i,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,i,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];i[l]=e[l]-r,s[l]=e[l]+r}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new cn;new w;new cn;new w;new w;new w;new w;new w;new w;new w;new cn;new w;new Qe;new cn;class TM{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class AM extends TM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e;let h,f,m,_,g,p;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const d=CM,v=PM,x=RM;d.length=a,v.length=a,x.length=a;for(let y=0;y!==a;y++){const R=o[y];x[y]=0,v[y]=R.computeB(u),d[y]=1/R.computeC()}if(a!==0){for(let A=0;A!==c;A++){const C=l[A],U=C.vlambda,M=C.wlambda;U.set(0,0,0),M.set(0,0,0)}for(i=0;i!==s;i++){_=0;for(let A=0;A!==a;A++){const C=o[A];h=v[A],f=d[A],p=x[A],g=C.computeGWlambda(),m=f*(h-g-C.eps*p),p+m<C.minForce?m=C.minForce-p:p+m>C.maxForce&&(m=C.maxForce-p),x[A]+=m,_+=m>0?m:-m,C.addToWlambda(m)}if(_*_<r)break}for(let A=0;A!==c;A++){const C=l[A],U=C.velocity,M=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),U.vadd(C.vlambda,U),C.wlambda.vmul(C.angularFactor,C.wlambda),M.vadd(C.wlambda,M)}let y=o.length;const R=1/u;for(;y--;)o[y].multiplier=x[y]*R}return i}}const RM=[],CM=[],PM=[];class LM{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class IM extends LM{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const ut={sphereSphere:we.types.SPHERE,spherePlane:we.types.SPHERE|we.types.PLANE,boxBox:we.types.BOX|we.types.BOX,sphereBox:we.types.SPHERE|we.types.BOX,planeBox:we.types.PLANE|we.types.BOX,convexConvex:we.types.CONVEXPOLYHEDRON,sphereConvex:we.types.SPHERE|we.types.CONVEXPOLYHEDRON,planeConvex:we.types.PLANE|we.types.CONVEXPOLYHEDRON,boxConvex:we.types.BOX|we.types.CONVEXPOLYHEDRON,sphereHeightfield:we.types.SPHERE|we.types.HEIGHTFIELD,boxHeightfield:we.types.BOX|we.types.HEIGHTFIELD,convexHeightfield:we.types.CONVEXPOLYHEDRON|we.types.HEIGHTFIELD,sphereParticle:we.types.PARTICLE|we.types.SPHERE,planeParticle:we.types.PLANE|we.types.PARTICLE,boxParticle:we.types.BOX|we.types.PARTICLE,convexParticle:we.types.PARTICLE|we.types.CONVEXPOLYHEDRON,cylinderCylinder:we.types.CYLINDER,sphereCylinder:we.types.SPHERE|we.types.CYLINDER,planeCylinder:we.types.PLANE|we.types.CYLINDER,boxCylinder:we.types.BOX|we.types.CYLINDER,convexCylinder:we.types.CONVEXPOLYHEDRON|we.types.CYLINDER,heightfieldCylinder:we.types.HEIGHTFIELD|we.types.CYLINDER,particleCylinder:we.types.PARTICLE|we.types.CYLINDER,sphereTrimesh:we.types.SPHERE|we.types.TRIMESH,planeTrimesh:we.types.PLANE|we.types.TRIMESH};class DM{get[ut.sphereSphere](){return this.sphereSphere}get[ut.spherePlane](){return this.spherePlane}get[ut.boxBox](){return this.boxBox}get[ut.sphereBox](){return this.sphereBox}get[ut.planeBox](){return this.planeBox}get[ut.convexConvex](){return this.convexConvex}get[ut.sphereConvex](){return this.sphereConvex}get[ut.planeConvex](){return this.planeConvex}get[ut.boxConvex](){return this.boxConvex}get[ut.sphereHeightfield](){return this.sphereHeightfield}get[ut.boxHeightfield](){return this.boxHeightfield}get[ut.convexHeightfield](){return this.convexHeightfield}get[ut.sphereParticle](){return this.sphereParticle}get[ut.planeParticle](){return this.planeParticle}get[ut.boxParticle](){return this.boxParticle}get[ut.convexParticle](){return this.convexParticle}get[ut.cylinderCylinder](){return this.convexConvex}get[ut.sphereCylinder](){return this.sphereConvex}get[ut.planeCylinder](){return this.planeConvex}get[ut.boxCylinder](){return this.boxConvex}get[ut.convexCylinder](){return this.convexConvex}get[ut.heightfieldCylinder](){return this.heightfieldCylinder}get[ut.particleCylinder](){return this.particleCylinder}get[ut.sphereTrimesh](){return this.sphereTrimesh}get[ut.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new IM,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new pM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,u=s.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||i,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){const i=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||i.material,h=o.material||s.material;if(u&&h&&u.friction>=0&&h.friction>=0&&(c=u.friction*h.friction),c>0){const f=c*(a.frictionGravity||a.gravity).length();let m=i.invMass+s.invMass;m>0&&(m=1/m);const _=this.frictionEquationPool,g=_.length?_.pop():new Yh(i,s,f*m),p=_.length?_.pop():new Yh(i,s,f*m);return g.bi=p.bi=i,g.bj=p.bj=s,g.minForce=p.minForce=-f*m,g.maxForce=p.maxForce=f*m,g.ri.copy(e.ri),g.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(g.t,p.t),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.enabled=p.enabled=e.enabled,t.push(g,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Hi.setZero(),Es.setZero(),Ms.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Hi.vadd(t.ni,Hi),Es.vadd(t.ri,Es),Ms.vadd(t.rj,Ms)):(Hi.vsub(t.ni,Hi),Es.vadd(t.rj,Es),Ms.vadd(t.ri,Ms));const o=1/e;Es.scale(o,i.ri),Ms.scale(o,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),Hi.normalize(),Hi.tangents(i.t,s.t)}getContacts(e,t,i,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=FM,c=OM,u=NM,h=UM;for(let f=0,m=e.length;f!==m;f++){const _=e[f],g=t[f];let p=null;_.material&&g.material&&(p=i.getContactMaterial(_.material,g.material)||null);const d=_.type&be.KINEMATIC&&g.type&be.STATIC||_.type&be.STATIC&&g.type&be.KINEMATIC||_.type&be.KINEMATIC&&g.type&be.KINEMATIC;for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],l),_.quaternion.vmult(_.shapeOffsets[v],u),u.vadd(_.position,u);const x=_.shapes[v];for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],c),g.quaternion.vmult(g.shapeOffsets[y],h),h.vadd(g.position,h);const R=g.shapes[y];if(!(x.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(h)>x.boundingSphereRadius+R.boundingSphereRadius)continue;let A=null;x.material&&R.material&&(A=i.getContactMaterial(x.material,R.material)||null),this.currentContactMaterial=A||p||i.defaultContactMaterial;const C=x.type|R.type,U=this[C];if(U){let M=!1;x.type<R.type?M=U.call(this,x,R,u,h,l,c,_,g,x,R,d):M=U.call(this,R,x,h,u,c,l,g,_,x,R,d),M&&d&&(i.shapeOverlapKeeper.set(x.id,R.id),i.bodyOverlapKeeper.set(_.id,g.id))}}}}}sphereSphere(e,t,i,s,r,o,a,l,c,u,h){if(h)return i.distanceSquared(s)<(e.radius+t.radius)**2;const f=this.createContactEquation(a,l,e,t,c,u);s.vsub(i,f.ni),f.ni.normalize(),f.ri.copy(f.ni),f.rj.copy(f.ni),f.ri.scale(e.radius,f.ri),f.rj.scale(-t.radius,f.rj),f.ri.vadd(i,f.ri),f.ri.vsub(a.position,f.ri),f.rj.vadd(s,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}spherePlane(e,t,i,s,r,o,a,l,c,u,h){const f=this.createContactEquation(a,l,e,t,c,u);if(f.ni.set(0,0,1),o.vmult(f.ni,f.ni),f.ni.negate(f.ni),f.ni.normalize(),f.ni.scale(e.radius,f.ri),i.vsub(s,go),f.ni.scale(f.ni.dot(go),$h),go.vsub($h,f.rj),-go.dot(f.ni)<=e.radius){if(h)return!0;const m=f.ri,_=f.rj;m.vadd(i,m),m.vsub(a.position,m),_.vadd(s,_),_.vsub(l.position,_),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxBox(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,s,r,o,a,l,e,t,h)}sphereBox(e,t,i,s,r,o,a,l,c,u,h){const f=this.v3pool,m=cb;i.vsub(s,_o),t.getSideNormals(m,o);const _=e.radius;let g=!1;const p=hb,d=fb,v=db;let x=null,y=0,R=0,A=0,C=null;for(let D=0,j=m.length;D!==j&&g===!1;D++){const V=ob;V.copy(m[D]);const Y=V.length();V.normalize();const re=_o.dot(V);if(re<Y+_&&re>0){const ae=ab,K=lb;ae.copy(m[(D+1)%3]),K.copy(m[(D+2)%3]);const ne=ae.length(),oe=K.length();ae.normalize(),K.normalize();const de=_o.dot(ae),Ee=_o.dot(K);if(de<ne&&de>-ne&&Ee<oe&&Ee>-oe){const Me=Math.abs(re-Y-_);if((C===null||Me<C)&&(C=Me,R=de,A=Ee,x=Y,p.copy(V),d.copy(ae),v.copy(K),y++,h))return!0}}}if(y){g=!0;const D=this.createContactEquation(a,l,e,t,c,u);p.scale(-_,D.ri),D.ni.copy(p),D.ni.negate(D.ni),p.scale(x,p),d.scale(R,d),p.vadd(d,p),v.scale(A,v),p.vadd(v,D.rj),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let U=f.get();const M=ub;for(let D=0;D!==2&&!g;D++)for(let j=0;j!==2&&!g;j++)for(let V=0;V!==2&&!g;V++)if(U.set(0,0,0),D?U.vadd(m[0],U):U.vsub(m[0],U),j?U.vadd(m[1],U):U.vsub(m[1],U),V?U.vadd(m[2],U):U.vsub(m[2],U),s.vadd(U,M),M.vsub(i,M),M.lengthSquared()<_*_){if(h)return!0;g=!0;const Y=this.createContactEquation(a,l,e,t,c,u);Y.ri.copy(M),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(_,Y.ri),Y.rj.copy(U),Y.ri.vadd(i,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(s,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}f.release(U),U=null;const T=f.get(),B=f.get(),G=f.get(),z=f.get(),L=f.get(),N=m.length;for(let D=0;D!==N&&!g;D++)for(let j=0;j!==N&&!g;j++)if(D%3!==j%3){m[j].cross(m[D],T),T.normalize(),m[D].vadd(m[j],B),G.copy(i),G.vsub(B,G),G.vsub(s,G);const V=G.dot(T);T.scale(V,z);let Y=0;for(;Y===D%3||Y===j%3;)Y++;L.copy(i),L.vsub(z,L),L.vsub(B,L),L.vsub(s,L);const re=Math.abs(V),ae=L.length();if(re<m[Y].length()&&ae<_){if(h)return!0;g=!0;const K=this.createContactEquation(a,l,e,t,c,u);B.vadd(z,K.rj),K.rj.copy(K.rj),L.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(s,K.ri),K.ri.vsub(i,K.ri),K.ri.normalize(),K.ri.scale(_,K.ri),K.ri.vadd(i,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(s,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}f.release(T,B,G,z,L)}planeBox(e,t,i,s,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,s,r,o,a,l,e,t,h)}convexConvex(e,t,i,s,r,o,a,l,c,u,h,f,m){const _=Rb;if(!(i.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,r,s,o,_,f,m)){const g=[],p=Cb;e.clipAgainstHull(i,r,t,s,o,_,-100,100,g);let d=0;for(let v=0;v!==g.length;v++){if(h)return!0;const x=this.createContactEquation(a,l,e,t,c,u),y=x.ri,R=x.rj;_.negate(x.ni),g[v].normal.negate(p),p.scale(g[v].depth,p),g[v].point.vadd(p,y),R.copy(g[v].point),y.vsub(i,y),R.vsub(s,R),y.vadd(i,y),y.vsub(a.position,y),R.vadd(s,R),R.vsub(l.position,R),this.result.push(x),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d)}}sphereConvex(e,t,i,s,r,o,a,l,c,u,h){const f=this.v3pool;i.vsub(s,pb);const m=t.faceNormals,_=t.faces,g=t.vertices,p=e.radius;let d=!1;for(let v=0;v!==g.length;v++){const x=g[v],y=vb;o.vmult(x,y),s.vadd(y,y);const R=_b;if(y.vsub(i,R),R.lengthSquared()<p*p){if(h)return!0;d=!0;const A=this.createContactEquation(a,l,e,t,c,u);A.ri.copy(R),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(p,A.ri),y.vsub(s,A.rj),A.ri.vadd(i,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(s,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,x=_.length;v!==x&&d===!1;v++){const y=m[v],R=_[v],A=xb;o.vmult(y,A);const C=yb;o.vmult(g[R[0]],C),C.vadd(s,C);const U=Sb;A.scale(-p,U),i.vadd(U,U);const M=Eb;U.vsub(C,M);const T=M.dot(A),B=Mb;if(i.vsub(C,B),T<0&&B.dot(A)>0){const G=[];for(let z=0,L=R.length;z!==L;z++){const N=f.get();o.vmult(g[R[z]],N),s.vadd(N,N),G.push(N)}if(rb(G,A,i)){if(h)return!0;d=!0;const z=this.createContactEquation(a,l,e,t,c,u);A.scale(-p,z.ri),A.negate(z.ni);const L=f.get();A.scale(-T,L);const N=f.get();A.scale(-p,N),i.vsub(s,z.rj),z.rj.vadd(N,z.rj),z.rj.vadd(L,z.rj),z.rj.vadd(s,z.rj),z.rj.vsub(l.position,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(a.position,z.ri),f.release(L),f.release(N),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let D=0,j=G.length;D!==j;D++)f.release(G[D]);return}else for(let z=0;z!==R.length;z++){const L=f.get(),N=f.get();o.vmult(g[R[(z+1)%R.length]],L),o.vmult(g[R[(z+2)%R.length]],N),s.vadd(L,L),s.vadd(N,N);const D=mb;N.vsub(L,D);const j=gb;D.unit(j);const V=f.get(),Y=f.get();i.vsub(L,Y);const re=Y.dot(j);j.scale(re,V),V.vadd(L,V);const ae=f.get();if(V.vsub(i,ae),re>0&&re*re<D.lengthSquared()&&ae.lengthSquared()<p*p){if(h)return!0;const K=this.createContactEquation(a,l,e,t,c,u);V.vsub(s,K.rj),V.vsub(i,K.ni),K.ni.normalize(),K.ni.scale(p,K.ri),K.rj.vadd(s,K.rj),K.rj.vsub(l.position,K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let ne=0,oe=G.length;ne!==oe;ne++)f.release(G[ne]);f.release(L),f.release(N),f.release(V),f.release(ae),f.release(Y);return}f.release(L),f.release(N),f.release(V),f.release(ae),f.release(Y)}for(let z=0,L=G.length;z!==L;z++)f.release(G[z])}}}planeConvex(e,t,i,s,r,o,a,l,c,u,h){const f=bb,m=wb;m.set(0,0,1),r.vmult(m,m);let _=0;const g=Tb;for(let p=0;p!==t.vertices.length;p++)if(f.copy(t.vertices[p]),o.vmult(f,f),s.vadd(f,f),f.vsub(i,g),m.dot(g)<=0){if(h)return!0;const v=this.createContactEquation(a,l,e,t,c,u),x=Ab;m.scale(m.dot(g),x),f.vsub(x,x),x.vsub(i,v.ri),v.ni.copy(m),f.vsub(s,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,h)}sphereHeightfield(e,t,i,s,r,o,a,l,c,u,h){const f=t.data,m=e.radius,_=t.elementSize,g=Gb,p=Hb;Qe.pointToLocalFrame(s,o,i,p);let d=Math.floor((p.x-m)/_)-1,v=Math.ceil((p.x+m)/_)+1,x=Math.floor((p.y-m)/_)-1,y=Math.ceil((p.y+m)/_)+1;if(v<0||y<0||d>f.length||x>f[0].length)return;d<0&&(d=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),d>=f.length&&(d=f.length-1),v>=f.length&&(v=f.length-1),y>=f[0].length&&(y=f[0].length-1),x>=f[0].length&&(x=f[0].length-1);const R=[];t.getRectMinMax(d,x,v,y,R);const A=R[0],C=R[1];if(p.z-m>C||p.z+m<A)return;const U=this.result;for(let M=d;M<v;M++)for(let T=x;T<y;T++){const B=U.length;let G=!1;if(t.getConvexTrianglePillar(M,T,!1),Qe.pointToWorldFrame(s,o,t.pillarOffset,g),i.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,i,g,r,o,a,l,e,t,h)),h&&G||(t.getConvexTrianglePillar(M,T,!0),Qe.pointToWorldFrame(s,o,t.pillarOffset,g),i.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,i,g,r,o,a,l,e,t,h)),h&&G))return!0;if(U.length-B>2)return}}boxHeightfield(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,h)}convexHeightfield(e,t,i,s,r,o,a,l,c,u,h){const f=t.data,m=t.elementSize,_=e.boundingSphereRadius,g=Bb,p=zb,d=Ob;Qe.pointToLocalFrame(s,o,i,d);let v=Math.floor((d.x-_)/m)-1,x=Math.ceil((d.x+_)/m)+1,y=Math.floor((d.y-_)/m)-1,R=Math.ceil((d.y+_)/m)+1;if(x<0||R<0||v>f.length||y>f[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),R<0&&(R=0),v>=f.length&&(v=f.length-1),x>=f.length&&(x=f.length-1),R>=f[0].length&&(R=f[0].length-1),y>=f[0].length&&(y=f[0].length-1);const A=[];t.getRectMinMax(v,y,x,R,A);const C=A[0],U=A[1];if(!(d.z-_>U||d.z+_<C))for(let M=v;M<x;M++)for(let T=y;T<R;T++){let B=!1;if(t.getConvexTrianglePillar(M,T,!1),Qe.pointToWorldFrame(s,o,t.pillarOffset,g),i.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,i,g,r,o,a,l,null,null,h,p,null)),h&&B||(t.getConvexTrianglePillar(M,T,!0),Qe.pointToWorldFrame(s,o,t.pillarOffset,g),i.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,i,g,r,o,a,l,null,null,h,p,null)),h&&B))return!0}}sphereParticle(e,t,i,s,r,o,a,l,c,u,h){const f=Db;if(f.set(0,0,1),s.vsub(i,f),f.lengthSquared()<=e.radius*e.radius){if(h)return!0;const _=this.createContactEquation(l,a,t,e,c,u);f.normalize(),_.rj.copy(f),_.rj.scale(e.radius,_.rj),_.ni.copy(f),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(e,t,i,s,r,o,a,l,c,u,h){const f=Pb;f.set(0,0,1),a.quaternion.vmult(f,f);const m=Lb;if(s.vsub(a.position,m),f.dot(m)<=0){if(h)return!0;const g=this.createContactEquation(l,a,t,e,c,u);g.ni.copy(f),g.ni.negate(g.ni),g.ri.set(0,0,0);const p=Ib;f.scale(f.dot(s),p),s.vsub(p,p),g.rj.copy(p),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,h)}convexParticle(e,t,i,s,r,o,a,l,c,u,h){let f=-1;const m=Ub,_=Fb;let g=null;const p=Nb;if(p.copy(s),p.vsub(i,p),r.conjugate(Kh),Kh.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let d=0,v=e.faces.length;d!==v;d++){const x=[e.worldVertices[e.faces[d][0]]],y=e.worldFaceNormals[d];s.vsub(x[0],Zh);const R=-y.dot(Zh);if(g===null||Math.abs(R)<Math.abs(g)){if(h)return!0;g=R,f=d,m.copy(y)}}if(f!==-1){const d=this.createContactEquation(l,a,t,e,c,u);m.scale(g,_),_.vadd(s,_),_.vsub(i,_),d.rj.copy(_),m.negate(d.ni),d.ri.set(0,0,0);const v=d.ri,x=d.rj;v.vadd(s,v),v.vsub(l.position,v),x.vadd(i,x),x.vsub(a.position,x),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,s,r,o,a,l,c,u,h){return this.convexHeightfield(t,e,s,i,o,r,l,a,c,u,h)}particleCylinder(e,t,i,s,r,o,a,l,c,u,h){return this.convexParticle(t,e,s,i,o,r,l,a,c,u,h)}sphereTrimesh(e,t,i,s,r,o,a,l,c,u,h){const f=qM,m=XM,_=jM,g=YM,p=$M,d=KM,v=eb,x=WM,y=VM,R=tb;Qe.pointToLocalFrame(s,o,i,p);const A=e.radius;v.lowerBound.set(p.x-A,p.y-A,p.z-A),v.upperBound.set(p.x+A,p.y+A,p.z+A),t.getTrianglesInAABB(v,R);const C=kM,U=e.radius*e.radius;for(let z=0;z<R.length;z++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[R[z]*3+L],C),C.vsub(p,y),y.lengthSquared()<=U){if(x.copy(C),Qe.pointToWorldFrame(s,o,x,C),C.vsub(i,y),h)return!0;let N=this.createContactEquation(a,l,e,t,c,u);N.ni.copy(y),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(e.radius,N.ri),N.ri.vadd(i,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(C),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let z=0;z<R.length;z++)for(let L=0;L<3;L++){t.getVertex(t.indices[R[z]*3+L],f),t.getVertex(t.indices[R[z]*3+(L+1)%3],m),m.vsub(f,_),p.vsub(m,d);const N=d.dot(_);p.vsub(f,d);let D=d.dot(_);if(D>0&&N<0&&(p.vsub(f,d),g.copy(_),g.normalize(),D=d.dot(g),g.scale(D,d),d.vadd(f,d),d.distanceTo(p)<e.radius)){if(h)return!0;const V=this.createContactEquation(a,l,e,t,c,u);d.vsub(p,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(i,V.ri),V.ri.vsub(a.position,V.ri),Qe.pointToWorldFrame(s,o,d,d),d.vsub(l.position,V.rj),Qe.vectorToWorldFrame(o,V.ni,V.ni),Qe.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const M=ZM,T=JM,B=QM,G=GM;for(let z=0,L=R.length;z!==L;z++){t.getTriangleVertices(R[z],M,T,B),t.getNormal(R[z],G),p.vsub(M,d);let N=d.dot(G);if(G.scale(N,d),p.vsub(d,d),N=d.distanceTo(p),xt.pointInTriangle(d,M,T,B)&&N<e.radius){if(h)return!0;let D=this.createContactEquation(a,l,e,t,c,u);d.vsub(p,D.ni),D.ni.normalize(),D.ni.scale(e.radius,D.ri),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),Qe.pointToWorldFrame(s,o,d,d),d.vsub(l.position,D.rj),Qe.vectorToWorldFrame(o,D.ni,D.ni),Qe.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}R.length=0}planeTrimesh(e,t,i,s,r,o,a,l,c,u,h){const f=new w,m=BM;m.set(0,0,1),r.vmult(m,m);for(let _=0;_<t.vertices.length/3;_++){t.getVertex(_,f);const g=new w;g.copy(f),Qe.pointToWorldFrame(s,o,g,f);const p=zM;if(f.vsub(i,p),m.dot(p)<=0){if(h)return!0;const v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(m);const x=HM;m.scale(p.dot(m),x),f.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(f),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Hi=new w,Es=new w,Ms=new w,NM=new w,UM=new w,FM=new yt,OM=new yt,BM=new w,zM=new w,HM=new w,GM=new w,VM=new w;new w;const kM=new w,WM=new w,qM=new w,XM=new w,jM=new w,YM=new w,$M=new w,KM=new w,ZM=new w,JM=new w,QM=new w,eb=new cn,tb=[],go=new w,$h=new w,nb=new w,ib=new w,sb=new w;function rb(n,e,t){let i=null;const s=n.length;for(let r=0;r!==s;r++){const o=n[r],a=nb;n[(r+1)%s].vsub(o,a);const l=ib;a.cross(e,l);const c=sb;t.vsub(o,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const _o=new w,ob=new w,ab=new w,lb=new w,cb=[new w,new w,new w,new w,new w,new w],ub=new w,hb=new w,fb=new w,db=new w,pb=new w,mb=new w,gb=new w,_b=new w,vb=new w,xb=new w,yb=new w,Sb=new w,Eb=new w,Mb=new w;new w;new w;const bb=new w,wb=new w,Tb=new w,Ab=new w,Rb=new w,Cb=new w,Pb=new w,Lb=new w,Ib=new w,Db=new w,Kh=new yt,Nb=new w;new w;const Ub=new w,Zh=new w,Fb=new w,Ob=new w,Bb=new w,zb=[0],Hb=new w,Gb=new w;class Jh{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),s=this.current;let r=0;for(;i>s[r];)r++;if(i!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,s=this.previous,r=i.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>s[a];)a++;c=u===s[a],c||Qh(e,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>i[a];)a++;c=i[a]===u,c||Qh(t,u)}}}function Qh(n,e){n.push((e&4294901760)>>16,e&65535)}const ol=(n,e)=>n<e?`${n}-${e}`:`${e}-${n}`;class Vb{constructor(){this.data={keys:[]}}get(e,t){const i=ol(e,t);return this.data[i]}set(e,t,i){const s=ol(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=i}delete(e,t){const i=ol(e,t),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class kb extends np{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new ip,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new AM,this.constraints=[],this.narrowphase=new DM(this),this.collisionMatrix=new Bh,this.collisionMatrixPrevious=new Bh,this.bodyOverlapKeeper=new Jh,this.shapeOverlapKeeper=new Jh,this.contactmaterials=[],this.contactMaterialTable=new Vb,this.defaultMaterial=new Nr("default"),this.defaultContactMaterial=new Dr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof Bo?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,s){return i===void 0&&(i={}),i.mode=xt.ALL,i.from=e,i.to=t,i.callback=s,al.intersectWorld(this,i)}raycastAny(e,t,i,s){return i===void 0&&(i={}),i.mode=xt.ANY,i.from=e,i.to=t,i.result=s,al.intersectWorld(this,i)}raycastClosest(e,t,i,s){return i===void 0&&(i={}),i.mode=xt.CLOSEST,i.from=e,i.to=t,i.result=s,al.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof be&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,s=i.indexOf(e);if(s!==-1){i.splice(s,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const s=t[i].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=St.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const s=i-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const s=St.now();let r=0;for(;this.accumulator>=e&&r<i&&(this.internalStep(e),this.accumulator-=e,r++,!(St.now()-s>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=Yb,s=$b,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,h=be.DYNAMIC;let f=-1/0;const m=this.constraints,_=jb;l.length();const g=l.x,p=l.y,d=l.z;let v=0;for(c&&(f=St.now()),v=0;v!==r;v++){const z=o[v];if(z.type===h){const L=z.force,N=z.mass;L.x+=N*g,L.y+=N*p,L.z+=N*d}}for(let z=0,L=this.subsystems.length;z!==L;z++)this.subsystems[z].update();c&&(f=St.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(u.broadphase=St.now()-f);let x=m.length;for(v=0;v!==x;v++){const z=m[v];if(!z.collideConnected)for(let L=i.length-1;L>=0;L-=1)(z.bodyA===i[L]&&z.bodyB===s[L]||z.bodyB===i[L]&&z.bodyA===s[L])&&(i.splice(L,1),s.splice(L,1))}this.collisionMatrixTick(),c&&(f=St.now());const y=Xb,R=t.length;for(v=0;v!==R;v++)y.push(t[v]);t.length=0;const A=this.frictionEquations.length;for(v=0;v!==A;v++)_.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,t,y,this.frictionEquations,_),c&&(u.narrowphase=St.now()-f),c&&(f=St.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=t.length;for(let z=0;z!==C;z++){const L=t[z],N=L.bi,D=L.bj,j=L.si,V=L.sj;let Y;if(N.material&&D.material?Y=this.getContactMaterial(N.material,D.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,N.material&&D.material&&(N.material.friction>=0&&D.material.friction>=0&&N.material.friction*D.material.friction,N.material.restitution>=0&&D.material.restitution>=0&&(L.restitution=N.material.restitution*D.material.restitution)),a.addEquation(L),N.allowSleep&&N.type===be.DYNAMIC&&N.sleepState===be.SLEEPING&&D.sleepState===be.AWAKE&&D.type!==be.STATIC){const re=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ae=D.sleepSpeedLimit**2;re>=ae*2&&(N.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===be.DYNAMIC&&D.sleepState===be.SLEEPING&&N.sleepState===be.AWAKE&&N.type!==be.STATIC){const re=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ae=N.sleepSpeedLimit**2;re>=ae*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,D,!0),this.collisionMatrixPrevious.get(N,D)||(Qs.body=D,Qs.contact=L,N.dispatchEvent(Qs),Qs.body=N,D.dispatchEvent(Qs)),this.bodyOverlapKeeper.set(N.id,D.id),this.shapeOverlapKeeper.set(j.id,V.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=St.now()-f,f=St.now()),v=0;v!==r;v++){const z=o[v];z.wakeUpAfterNarrowphase&&(z.wakeUp(),z.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const z=m[v];z.update();for(let L=0,N=z.equations.length;L!==N;L++){const D=z.equations[L];a.addEquation(D)}}a.solve(e,this),c&&(u.solve=St.now()-f),a.removeAllEquations();const U=Math.pow;for(v=0;v!==r;v++){const z=o[v];if(z.type&h){const L=U(1-z.linearDamping,e),N=z.velocity;N.scale(L,N);const D=z.angularVelocity;if(D){const j=U(1-z.angularDamping,e);D.scale(j,D)}}}this.dispatchEvent(qb),c&&(f=St.now());const T=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,T,B);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=St.now()-f),this.stepnumber+=1,this.dispatchEvent(Wb);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==r;v++){const z=o[v];z.sleepTick(this.time),z.sleepState!==be.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ti,ni),e){for(let r=0,o=ti.length;r<o;r+=2)er.bodyA=this.getBodyById(ti[r]),er.bodyB=this.getBodyById(ti[r+1]),this.dispatchEvent(er);er.bodyA=er.bodyB=null}if(t){for(let r=0,o=ni.length;r<o;r+=2)tr.bodyA=this.getBodyById(ni[r]),tr.bodyB=this.getBodyById(ni[r+1]),this.dispatchEvent(tr);tr.bodyA=tr.bodyB=null}ti.length=ni.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(ti,ni),i){for(let r=0,o=ti.length;r<o;r+=2){const a=this.getShapeById(ti[r]),l=this.getShapeById(ti[r+1]);ii.shapeA=a,ii.shapeB=l,a&&(ii.bodyA=a.body),l&&(ii.bodyB=l.body),this.dispatchEvent(ii)}ii.bodyA=ii.bodyB=ii.shapeA=ii.shapeB=null}if(s){for(let r=0,o=ni.length;r<o;r+=2){const a=this.getShapeById(ni[r]),l=this.getShapeById(ni[r+1]);si.shapeA=a,si.shapeB=l,a&&(si.bodyA=a.body),l&&(si.bodyB=l.body),this.dispatchEvent(si)}si.bodyA=si.bodyB=si.shapeA=si.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const s=e[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new cn;const al=new xt,St=globalThis.performance||{};if(!St.now){let n=Date.now();St.timing&&St.timing.navigationStart&&(n=St.timing.navigationStart),St.now=()=>Date.now()-n}new w;const Wb={type:"postStep"},qb={type:"preStep"},Qs={type:be.COLLIDE_EVENT_NAME,body:null,contact:null},Xb=[],jb=[],Yb=[],$b=[],ti=[],ni=[],er={type:"beginContact",bodyA:null,bodyB:null},tr={type:"endContact",bodyA:null,bodyB:null},ii={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},si={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Kb{constructor(e){Rt(this,"scene");Rt(this,"camera");Rt(this,"renderer");Rt(this,"animFns",[]);const t=e.clientWidth,i=e.clientHeight;this.scene=new vE,this.scene.background=new Je(1710638),this.camera=new dn(50,t/i,.1,100),this.camera.position.set(0,12,10),this.camera.lookAt(0,0,0);const s=new SE(16777215,1.2);s.position.set(5,15,8),s.castShadow=!0,this.scene.add(s);const r=new EE(16777215,.5);this.scene.add(r),this.renderer=new ep({antialias:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,e.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onResize(e)),this.animate()}addAnimFn(e){this.animFns.push(e)}createPot(){const e=new or,t=new gc(5,3,4,32,1,!0),i=new Eo({color:16777215,side:Mn,roughness:.3,metalness:.1}),s=new an(t,i);s.position.y=0,e.add(s);const r=new mc(3,32),o=new Eo({color:15658734,side:Mn}),a=new an(r,o);a.rotation.x=-Math.PI/2,a.position.y=-2,e.add(a);const l=new vc(5,.15,8,32),c=new Eo({color:13421772,metalness:.6}),u=new an(l,c);return u.rotation.x=Math.PI/2,u.position.y=2,e.add(u),this.scene.add(e),e}animate(){requestAnimationFrame(()=>this.animate()),this.animFns.forEach(e=>e()),this.renderer.render(this.scene,this.camera)}onResize(e){const t=e.clientWidth,i=e.clientHeight;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i)}dispose(){this.renderer.dispose(),this.scene.traverse(e=>{e instanceof an&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}class Zb{constructor(){Rt(this,"world");Rt(this,"bodies",[]);this.world=new kb,this.world.gravity.set(0,-15,0),this.world.broadphase=new ip,this.world.solver.iterations=10;const e=new Nr("default"),t=new Dr(e,e,{friction:.5,restitution:.3});this.world.addContactMaterial(t),this.world.defaultContactMaterial=t}createPotCollider(){const e=new be({mass:0}),t=new Mr(new w(3,.1,3));e.addShape(t),e.position.set(0,-2.1,0),this.world.addBody(e);const i=.3,s=4;[{pos:[0,0,4],rot:[.3,0,0]},{pos:[0,0,-4],rot:[-.3,0,0]},{pos:[4,0,0],rot:[0,0,-.3]},{pos:[-4,0,0],rot:[0,0,.3]}].forEach(o=>{const a=new be({mass:0}),l=new Mr(new w(5,s/2,i));a.addShape(l),a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.quaternion.setFromEuler(o.rot[0],o.rot[1],o.rot[2]),this.world.addBody(a)})}createSphereBody(e,t,i){const r=new be({mass:1,shape:new wM(.35),position:new w(e,t,i),linearDamping:.3,angularDamping:.5});return this.world.addBody(r),r}registerBody(e,t){this.bodies.push({body:e,mesh:t})}unregisterBody(e){const t=this.bodies.findIndex(i=>i.body===e);t>=0&&this.bodies.splice(t,1),this.world.removeBody(e)}step(e=1/60){this.world.step(e)}syncBodies(){this.bodies.forEach(({body:e,mesh:t})=>{t.position.copy(e.position),t.quaternion.copy(e.quaternion)})}applyImpulseToAll(e){this.bodies.forEach(({body:t})=>{t.applyImpulse(e,t.position)})}getRegisteredBodies(){return this.bodies}}class Jb{constructor(){Rt(this,"lastX",0);Rt(this,"lastY",0);Rt(this,"lastZ",0);Rt(this,"lastTime",0);Rt(this,"threshold",15);Rt(this,"debounceMs",500);Rt(this,"onShake",null);Rt(this,"isWxEnv",!1);this.isWxEnv=typeof wx<"u"&&typeof wx.startAccelerometer=="function"}setShakeCallback(e){this.onShake=e}start(){this.isWxEnv&&this.startWxAccelerometer()}stop(){if(this.isWxEnv)try{wx.stopAccelerometer({})}catch{}}startWxAccelerometer(){wx.startAccelerometer({interval:"game",success:()=>console.log("[ShakeSensor] 微信加速度监听已开启"),fail:e=>console.error("[ShakeSensor] 加速度监听失败:",e)}),wx.onAccelerometerChange(e=>{this.handleAcceleration(e.x,e.y,e.z)})}handleAcceleration(e,t,i){var c;const s=Date.now();if(s-this.lastTime<this.debounceMs){this.lastX=e,this.lastY=t,this.lastZ=i;return}const r=Math.abs(e-this.lastX),o=Math.abs(t-this.lastY),a=Math.abs(i-this.lastZ);this.lastX=e,this.lastY=t,this.lastZ=i;const l=r+o+a;l>this.threshold&&(this.lastTime=s,console.log("[ShakeSensor] 检测到摇晃, 差值:",l.toFixed(2)),(c=this.onShake)==null||c.call(this))}simulateShake(){var e;console.log("[ShakeSensor] 模拟摇晃触发"),(e=this.onShake)==null||e.call(this)}}const Qb={apple:16729156,banana:16763904,orange:16746496,grape:8930508,peach:16755336};class ew{constructor(e=20){Rt(this,"pool",[]);Rt(this,"active",new Map);Rt(this,"geo");this.geo=new _c(.35,16,16);for(let t=0;t<e;t++){const i=this.createMesh();i.visible=!1,this.pool.push(i)}}createMesh(){const e=new Eo({roughness:.4,metalness:.1}),t=new an(this.geo,e);return t.userData.isFoodItem=!0,t}acquire(e){let t;this.pool.length>0?t=this.pool.pop():t=this.createMesh();const i=Qb[e]||11184810;return t.material.color.setHex(i),t.visible=!0,this.active.set(t,e),t}release(e){e.visible=!1,e.position.set(0,-100,0),this.active.delete(e),this.pool.push(e)}getItemKey(e){return this.active.get(e)}getActiveMeshes(){return Array.from(this.active.keys())}get activeCount(){return this.active.size}dispose(){this.geo.dispose(),this.pool.forEach(e=>e.material.dispose()),this.active.forEach((e,t)=>t.material.dispose()),this.pool=[],this.active.clear()}}function tw(n,e,t=7){n.push(e);let i=0;const s=nw(n);return i=n.length-s.length,{slots:s,matched:i}}function nw(n){let e=[...n],t=!0;for(;t;){t=!1;for(let i=0;i<=e.length-3;i++)if(e[i].itemKey===e[i+1].itemKey&&e[i+1].itemKey===e[i+2].itemKey){e.splice(i,3),t=!0;break}}return e}function iw(n,e=7){return n.length>=e&&!sw(n)}function sw(n){const e={};return n.forEach(t=>{e[t.itemKey]=(e[t.itemKey]||0)+1}),Object.values(e).some(t=>t>=3)}function rw(n){return n===0}function ow(n,e){const t={};n.forEach(s=>{t[s.itemKey]=(t[s.itemKey]||0)+1});for(const[s,r]of Object.entries(t))if(r===2)return[s];const i=e[Math.floor(Math.random()*e.length)];return[i,i,i]}const aw=ec({__name:"GameContainer",emits:["slotUpdate","gameOver","levelClear","potCountUpdate"],setup(n,{expose:e,emit:t}){const i=t,s=ri();let r,o,a,l,c=[],u=[],h=[],f=!1,m=new ME,_=new Ke;tc(()=>{s.value&&(r=new Kb(s.value),o=new Zb,a=new Jb,l=new ew(30),r.createPot(),o.createPotCollider(),r.addAnimFn(()=>{f&&(o.step(),o.syncBodies())}),a.setShakeCallback(()=>{v()}),a.start())}),nc(()=>{a.stop(),r==null||r.dispose(),l==null||l.dispose()});function g(U,M){A(),h=U,f=!0;for(let T=0;T<M;T++){const B=U[T%U.length];p(B,3+Math.random()*4)}i("potCountUpdate",u.length)}function p(U,M){const T=(Math.random()-.5)*4,B=(Math.random()-.5)*4,G=l.acquire(U);G.position.set(T,M,B),r.scene.add(G);const z=o.createSphereBody(T,M,B);o.registerBody(z,G);const L={mesh:G,body:z,itemKey:U};u.push(L)}function d(U){if(!f||!s.value)return;const M=s.value.getBoundingClientRect();_.x=(U.clientX-M.left)/M.width*2-1,_.y=-((U.clientY-M.top)/M.height)*2+1,m.setFromCamera(_,r.camera);const T=l.getActiveMeshes(),B=m.intersectObjects(T);if(B.length>0){const G=B[0].object,z=l.getItemKey(G);if(!z)return;const L=u.findIndex(V=>V.mesh===G);if(L<0)return;const N=u.splice(L,1)[0];o.unregisterBody(N.body),r.scene.remove(N.mesh);const D={itemKey:z,meshRef:N.mesh,bodyRef:N.body},j=tw(c,D);if(j.matched>0){const V=new Set(j.slots.map(Y=>Y.meshRef));c.forEach(Y=>{V.has(Y.meshRef)||l.release(Y.meshRef)})}c=j.slots,i("slotUpdate",c),i("potCountUpdate",u.length),rw(u.length)?(f=!1,i("levelClear")):iw(c)&&(f=!1,i("gameOver"))}}function v(){if(!f)return;const U=new w((Math.random()-.5)*8,6+Math.random()*4,(Math.random()-.5)*8);o.applyImpulseToAll(U)}function x(U){if(U<0||U>=c.length)return;const M=c.splice(U,1)[0],T=M.meshRef,B=3+Math.random()*2,G=(Math.random()-.5)*3,z=(Math.random()-.5)*3;T.position.set(G,B,z),T.visible=!0,r.scene.add(T);const L=o.createSphereBody(G,B,z);o.registerBody(L,T),l.acquire(M.itemKey),u.push({mesh:T,body:L,itemKey:M.itemKey}),i("slotUpdate",c),i("potCountUpdate",u.length)}function y(){f&&(u.forEach(U=>{o.unregisterBody(U.body)}),u.forEach(U=>{const M=(Math.random()-.5)*4,T=5+Math.random()*3,B=(Math.random()-.5)*4;U.mesh.position.set(M,T,B);const G=o.createSphereBody(M,T,B);o.registerBody(G,U.mesh),U.body=G}))}function R(U){if(!f)return;ow(c,U).forEach(T=>p(T,5+Math.random()*3)),i("potCountUpdate",u.length)}function A(){u.forEach(U=>{o.unregisterBody(U.body),r.scene.remove(U.mesh),l.release(U.mesh)}),u=[],c=[]}function C(){a.simulateShake()}return e({loadLevel:g,useReturnToPot:x,useShuffle:y,useMakeTriple:R,simulateShake:C,getSlots:()=>c,getPotCount:()=>u.length,getItemTypes:()=>h}),(U,M)=>(yn(),oi("div",{ref_key:"containerRef",ref:s,class:"game-container",onClick:d},null,512))}}),hp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},lw=hp(aw,[["__scopeId","data-v-4b87851a"]]);function fp(n,e){return function(){return n.apply(e,arguments)}}const{toString:cw}=Object.prototype,{getPrototypeOf:ea}=Object,{iterator:ta,toStringTag:dp}=Symbol,na=(n=>e=>{const t=cw.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),In=n=>(n=n.toLowerCase(),e=>na(e)===n),ia=n=>e=>typeof e===n,{isArray:ns}=Array,Hs=ia("undefined");function ks(n){return n!==null&&!Hs(n)&&n.constructor!==null&&!Hs(n.constructor)&&tn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const pp=In("ArrayBuffer");function uw(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&pp(n.buffer),e}const hw=ia("string"),tn=ia("function"),mp=ia("number"),Ur=n=>n!==null&&typeof n=="object",fw=n=>n===!0||n===!1,Mo=n=>{if(na(n)!=="object")return!1;const e=ea(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(dp in n)&&!(ta in n)},dw=n=>{if(!Ur(n)||ks(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},pw=In("Date"),mw=In("File"),gw=n=>!!(n&&typeof n.uri<"u"),_w=n=>n&&typeof n.getParts<"u",vw=In("Blob"),xw=In("FileList"),yw=n=>Ur(n)&&tn(n.pipe);function Sw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ef=Sw(),tf=typeof ef.FormData<"u"?ef.FormData:void 0,Ew=n=>{if(!n)return!1;if(tf&&n instanceof tf)return!0;const e=ea(n);if(!e||e===Object.prototype||!tn(n.append))return!1;const t=na(n);return t==="formdata"||t==="object"&&tn(n.toString)&&n.toString()==="[object FormData]"},Mw=In("URLSearchParams"),[bw,ww,Tw,Aw]=["ReadableStream","Request","Response","Headers"].map(In),Rw=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fr(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),ns(n))for(i=0,s=n.length;i<s;i++)e.call(null,n[i],i,n);else{if(ks(n))return;const r=t?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,n[a],a,n)}}function gp(n,e){if(ks(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,s;for(;i-- >0;)if(s=t[i],e===s.toLowerCase())return s;return null}const ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_p=n=>!Hs(n)&&n!==ji;function Nl(...n){const{caseless:e,skipUndefined:t}=_p(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&gp(i,o)||o,l=Ul(i,a)?i[a]:void 0;Mo(l)&&Mo(r)?i[a]=Nl(l,r):Mo(r)?i[a]=Nl({},r):ns(r)?i[a]=r.slice():(!t||!Hs(r))&&(i[a]=r)};for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!a||ks(a)||(Fr(a,s),typeof a!="object"||ns(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Hw.call(a,u)&&s(a[u],u)}}return i}const Cw=(n,e,t,{allOwnKeys:i}={})=>(Fr(e,(s,r)=>{t&&tn(s)?Object.defineProperty(n,r,{__proto__:null,value:fp(s,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),Pw=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Lw=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(n.prototype,t)},Iw=(n,e,t,i)=>{let s,r,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&ea(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Dw=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},Nw=n=>{if(!n)return null;if(ns(n))return n;let e=n.length;if(!mp(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Uw=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&ea(Uint8Array)),Fw=(n,e)=>{const i=(n&&n[ta]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(n,r[0],r[1])}},Ow=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},Bw=In("HTMLFormElement"),zw=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,s){return i.toUpperCase()+s}),Ul=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),{propertyIsEnumerable:Hw}=Object.prototype,Gw=In("RegExp"),vp=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Fr(t,(s,r)=>{let o;(o=e(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},Vw=n=>{vp(n,(e,t)=>{if(tn(n)&&["arguments","caller","callee"].includes(t))return!1;const i=n[t];if(tn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},kw=(n,e)=>{const t={},i=s=>{s.forEach(r=>{t[r]=!0})};return ns(n)?i(n):i(String(n).split(e)),t},Ww=()=>{},qw=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Xw(n){return!!(n&&tn(n.append)&&n[dp]==="FormData"&&n[ta])}const jw=n=>{const e=new WeakSet,t=i=>{if(Ur(i)){if(e.has(i))return;if(ks(i))return i;if(!("toJSON"in i)){e.add(i);const s=ns(i)?[]:{};return Fr(i,(r,o)=>{const a=t(r);!Hs(a)&&(s[o]=a)}),e.delete(i),s}}return i};return t(n)},Yw=In("AsyncFunction"),$w=n=>n&&(Ur(n)||tn(n))&&tn(n.then)&&tn(n.catch),xp=((n,e)=>n?setImmediate:e?((t,i)=>(ji.addEventListener("message",({source:s,data:r})=>{s===ji&&r===t&&i.length&&i.shift()()},!1),s=>{i.push(s),ji.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",tn(ji.postMessage)),Kw=typeof queueMicrotask<"u"?queueMicrotask.bind(ji):typeof process<"u"&&process.nextTick||xp,Zw=n=>n!=null&&tn(n[ta]),k={isArray:ns,isArrayBuffer:pp,isBuffer:ks,isFormData:Ew,isArrayBufferView:uw,isString:hw,isNumber:mp,isBoolean:fw,isObject:Ur,isPlainObject:Mo,isEmptyObject:dw,isReadableStream:bw,isRequest:ww,isResponse:Tw,isHeaders:Aw,isUndefined:Hs,isDate:pw,isFile:mw,isReactNativeBlob:gw,isReactNative:_w,isBlob:vw,isRegExp:Gw,isFunction:tn,isStream:yw,isURLSearchParams:Mw,isTypedArray:Uw,isFileList:xw,forEach:Fr,merge:Nl,extend:Cw,trim:Rw,stripBOM:Pw,inherits:Lw,toFlatObject:Iw,kindOf:na,kindOfTest:In,endsWith:Dw,toArray:Nw,forEachEntry:Fw,matchAll:Ow,isHTMLForm:Bw,hasOwnProperty:Ul,hasOwnProp:Ul,reduceDescriptors:vp,freezeMethods:Vw,toObjectSet:kw,toCamelCase:zw,noop:Ww,toFiniteNumber:qw,findKey:gp,global:ji,isContextDefined:_p,isSpecCompliantForm:Xw,toJSONObject:jw,isAsyncFn:Yw,isThenable:$w,setImmediate:xp,asap:Kw,isIterable:Zw},Jw=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qw=n=>{const e={};let t,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!t||e[t]&&Jw[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e};function eT(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}const tT=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),nT=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Ec(n,e){return k.isArray(n)?n.map(t=>Ec(t,e)):eT(String(n).replace(e,""))}const iT=n=>Ec(n,tT),sT=n=>Ec(n,nT);function yp(n){const e=Object.create(null);return k.forEach(n.toJSON(),(t,i)=>{e[i]=sT(t)}),e}const nf=Symbol("internals");function nr(n){return n&&String(n).trim().toLowerCase()}function bo(n){return n===!1||n==null?n:k.isArray(n)?n.map(bo):iT(String(n))}function rT(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const oT=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function ll(n,e,t,i,s){if(k.isFunction(i))return i.call(this,e,t);if(s&&(e=t),!!k.isString(e)){if(k.isString(i))return e.indexOf(i)!==-1;if(k.isRegExp(i))return i.test(e)}}function aT(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function lT(n,e){const t=k.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let Yt=class{constructor(e){e&&this.set(e)}set(e,t,i){const s=this;function r(a,l,c){const u=nr(l);if(!u)return;const h=k.findKey(s,u);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||l]=bo(a))}const o=(a,l)=>k.forEach(a,(c,u)=>r(c,u,l));if(k.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(k.isString(e)&&(e=e.trim())&&!oT(e))o(Qw(e),t);else if(k.isObject(e)&&k.isIterable(e)){let a={},l,c;for(const u of e){if(!k.isArray(u))throw new TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?k.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,t)}else e!=null&&r(t,e,i);return this}get(e,t){if(e=nr(e),e){const i=k.findKey(this,e);if(i){const s=this[i];if(!t)return s;if(t===!0)return rT(s);if(k.isFunction(t))return t.call(this,s,i);if(k.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=nr(e),e){const i=k.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||ll(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let s=!1;function r(o){if(o=nr(o),o){const a=k.findKey(i,o);a&&(!t||ll(i,i[a],a,t))&&(delete i[a],s=!0)}}return k.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let i=t.length,s=!1;for(;i--;){const r=t[i];(!e||ll(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,i={};return k.forEach(this,(s,r)=>{const o=k.findKey(i,r);if(o){t[o]=bo(s),delete t[r];return}const a=e?aT(r):String(r).trim();a!==r&&delete t[r],t[a]=bo(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return k.forEach(this,(i,s)=>{i!=null&&i!==!1&&(t[s]=e&&k.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[nf]=this[nf]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=nr(o);i[a]||(lT(s,o),i[a]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}};Yt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Yt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});k.freezeMethods(Yt);const cT="[REDACTED ****]";function uT(n){if(k.hasOwnProp(n,"toJSON"))return!0;let e=Object.getPrototypeOf(n);for(;e&&e!==Object.prototype;){if(k.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function hT(n,e){const t=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||k.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof Yt&&(r=r.toJSON()),i.push(r);let o;if(k.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);k.isUndefined(c)||(o[l]=c)});else{if(!k.isPlainObject(r)&&uT(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=t.has(a.toLowerCase())?cT:s(l);k.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(n)}let Te=class Sp extends Error{static from(e,t,i,s,r,o){const a=new Sp(e.message,t||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,t,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,t=e&&k.hasOwnProp(e,"redact")?e.redact:void 0,i=k.isArray(t)&&t.length>0?hT(e,t):k.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Te.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Te.ERR_BAD_OPTION="ERR_BAD_OPTION";Te.ECONNABORTED="ECONNABORTED";Te.ETIMEDOUT="ETIMEDOUT";Te.ECONNREFUSED="ECONNREFUSED";Te.ERR_NETWORK="ERR_NETWORK";Te.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Te.ERR_DEPRECATED="ERR_DEPRECATED";Te.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Te.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Te.ERR_CANCELED="ERR_CANCELED";Te.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Te.ERR_INVALID_URL="ERR_INVALID_URL";Te.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const fT=null;function Fl(n){return k.isPlainObject(n)||k.isArray(n)}function Ep(n){return k.endsWith(n,"[]")?n.slice(0,-2):n}function cl(n,e,t){return n?n.concat(e).map(function(s,r){return s=Ep(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function dT(n){return k.isArray(n)&&!n.some(Fl)}const pT=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function sa(n,e,t){if(!k.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,d){return!k.isUndefined(d[p])});const i=t.metaTokens,s=t.visitor||h,r=t.dots,o=t.indexes,a=t.Blob||typeof Blob<"u"&&Blob,l=t.maxDepth===void 0?100:t.maxDepth,c=a&&k.isSpecCompliantForm(e);if(!k.isFunction(s))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(k.isBoolean(g))return g.toString();if(!c&&k.isBlob(g))throw new Te("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function h(g,p,d){let v=g;if(k.isReactNative(e)&&k.isReactNativeBlob(g))return e.append(cl(d,p,r),u(g)),!1;if(g&&!d&&typeof g=="object"){if(k.endsWith(p,"{}"))p=i?p:p.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&dT(g)||(k.isFileList(g)||k.endsWith(p,"[]"))&&(v=k.toArray(g)))return p=Ep(p),v.forEach(function(y,R){!(k.isUndefined(y)||y===null)&&e.append(o===!0?cl([p],R,r):o===null?p:p+"[]",u(y))}),!1}return Fl(g)?!0:(e.append(cl(d,p,r),u(g)),!1)}const f=[],m=Object.assign(pT,{defaultVisitor:h,convertValue:u,isVisitable:Fl});function _(g,p,d=0){if(!k.isUndefined(g)){if(d>l)throw new Te("Object is too deeply nested ("+d+" levels). Max depth: "+l,Te.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(g)!==-1)throw new Error("Circular reference detected in "+p.join("."));f.push(g),k.forEach(g,function(x,y){(!(k.isUndefined(x)||x===null)&&s.call(e,x,k.isString(y)?y.trim():y,p,m))===!0&&_(x,p?p.concat(y):[y],d+1)}),f.pop()}}if(!k.isObject(n))throw new TypeError("data must be an object");return _(n),e}function sf(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Mc(n,e){this._pairs=[],n&&sa(n,this,e)}const Mp=Mc.prototype;Mp.append=function(e,t){this._pairs.push([e,t])};Mp.toString=function(e){const t=e?function(i){return e.call(this,i,sf)}:sf;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function mT(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function bp(n,e,t){if(!e)return n;const i=t&&t.encode||mT,s=k.isFunction(t)?{serialize:t}:t,r=s&&s.serialize;let o;if(r?o=r(e,s):o=k.isURLSearchParams(e)?e.toString():new Mc(e,s).toString(i),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class rf{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(i){i!==null&&e(i)})}}const bc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1},gT=typeof URLSearchParams<"u"?URLSearchParams:Mc,_T=typeof FormData<"u"?FormData:null,vT=typeof Blob<"u"?Blob:null,xT={isBrowser:!0,classes:{URLSearchParams:gT,FormData:_T,Blob:vT},protocols:["http","https","file","blob","url","data"]},wc=typeof window<"u"&&typeof document<"u",Ol=typeof navigator=="object"&&navigator||void 0,yT=wc&&(!Ol||["ReactNative","NativeScript","NS"].indexOf(Ol.product)<0),ST=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ET=wc&&window.location.href||"http://localhost",MT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:wc,hasStandardBrowserEnv:yT,hasStandardBrowserWebWorkerEnv:ST,navigator:Ol,origin:ET},Symbol.toStringTag,{value:"Module"})),Dt={...MT,...xT};function bT(n,e){return sa(n,new Dt.classes.URLSearchParams,{visitor:function(t,i,s,r){return Dt.isNode&&k.isBuffer(t)?(this.append(i,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function wT(n){return k.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function TT(n){const e={},t=Object.keys(n);let i;const s=t.length;let r;for(i=0;i<s;i++)r=t[i],e[r]=n[r];return e}function wp(n){function e(t,i,s,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&k.isArray(s)?s.length:o,l?(k.hasOwnProp(s,o)?s[o]=k.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!k.hasOwnProp(s,o)||!k.isObject(s[o]))&&(s[o]=[]),e(t,i,s[o],r)&&k.isArray(s[o])&&(s[o]=TT(s[o])),!a)}if(k.isFormData(n)&&k.isFunction(n.entries)){const t={};return k.forEachEntry(n,(i,s)=>{e(wT(i),s,t,0)}),t}return null}const bs=(n,e)=>n!=null&&k.hasOwnProp(n,e)?n[e]:void 0;function AT(n,e,t){if(k.isString(n))try{return(e||JSON.parse)(n),k.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Or={transitional:bc,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",s=i.indexOf("application/json")>-1,r=k.isObject(e);if(r&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return s?JSON.stringify(wp(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=bs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return bT(e,l).toString();if((a=k.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=bs(this,"env"),u=c&&c.FormData;return sa(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(t.setContentType("application/json",!1),AT(e)):e}],transformResponse:[function(e){const t=bs(this,"transitional")||Or.transitional,i=t&&t.forcedJSONParsing,s=bs(this,"responseType"),r=s==="json";if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(i&&!s||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,bs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Te.from(l,Te.ERR_BAD_RESPONSE,this,null,bs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],n=>{Or.headers[n]={}});function ul(n,e){const t=this||Or,i=e||t,s=Yt.from(i.headers);let r=i.data;return k.forEach(n,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Tp(n){return!!(n&&n.__CANCEL__)}let Br=class extends Te{constructor(e,t,i){super(e??"canceled",Te.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function Ap(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Te("Request failed with status code "+t.status,t.status>=400&&t.status<500?Te.ERR_BAD_REQUEST:Te.ERR_BAD_RESPONSE,t.config,t.request,t))}function RT(n){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return e&&e[1]||""}function CT(n,e){n=n||10;const t=new Array(n),i=new Array(n);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),t[s]=l,i[s]=c;let h=r,f=0;for(;h!==s;)f+=t[h++],h=h%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<e)return;const m=u&&c-u;return m?Math.round(f*1e3/m):void 0}}function PT(n,e){let t=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{t=u,s=null,r&&(clearTimeout(r),r=null),n(...c)};return[(...c)=>{const u=Date.now(),h=u-t;h>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-h)))},()=>s&&o(s)]}const zo=(n,e,t=3)=>{let i=0;const s=CT(50,250);return PT(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const h={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(h)},t)},of=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},af=n=>(...e)=>k.asap(()=>n(...e)),LT=Dt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Dt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,IT=Dt.hasStandardBrowserEnv?{write(n,e,t,i,s,r,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(e)}`];k.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),k.isString(i)&&a.push(`path=${i}`),k.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),k.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const i=e[t].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===n)return decodeURIComponent(i.slice(s+1))}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function DT(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function NT(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Rp(n,e,t){let i=!DT(e);return n&&(i||t===!1)?NT(n,e):e}const lf=n=>n instanceof Yt?{...n}:n;function is(n,e){e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,u,h,f){return k.isPlainObject(c)&&k.isPlainObject(u)?k.merge.call({caseless:f},c,u):k.isPlainObject(u)?k.merge({},u):k.isArray(u)?u.slice():u}function s(c,u,h,f){if(k.isUndefined(u)){if(!k.isUndefined(c))return i(void 0,c,h,f)}else return i(c,u,h,f)}function r(c,u){if(!k.isUndefined(u))return i(void 0,u)}function o(c,u){if(k.isUndefined(u)){if(!k.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,h){if(k.hasOwnProp(e,h))return i(c,u);if(k.hasOwnProp(n,h))return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(c,u,h)=>s(lf(c),lf(u),h,!0)};return k.forEach(Object.keys({...n,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const h=k.hasOwnProp(l,u)?l[u]:s,f=k.hasOwnProp(n,u)?n[u]:void 0,m=k.hasOwnProp(e,u)?e[u]:void 0,_=h(f,m,u);k.isUndefined(_)&&h!==a||(t[u]=_)}),t}const UT=["content-type","content-length"];function FT(n,e,t){if(t!=="content-only"){n.set(e);return}Object.entries(e).forEach(([i,s])=>{UT.includes(i.toLowerCase())&&n.set(i,s)})}const OT=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Cp(n){const e=is({},n),t=f=>k.hasOwnProp(e,f)?e[f]:void 0,i=t("data");let s=t("withXSRFToken");const r=t("xsrfHeaderName"),o=t("xsrfCookieName");let a=t("headers");const l=t("auth"),c=t("baseURL"),u=t("allowAbsoluteUrls"),h=t("url");if(e.headers=a=Yt.from(a),e.url=bp(Rp(c,h,u),t("params"),t("paramsSerializer")),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?OT(l.password):""))),k.isFormData(i)&&(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv||k.isReactNative(i)?a.setContentType(void 0):k.isFunction(i.getHeaders)&&FT(a,i.getHeaders(),t("formDataHeaderPolicy"))),Dt.hasStandardBrowserEnv&&(k.isFunction(s)&&(s=s(e)),s===!0||s==null&&LT(e.url))){const m=r&&o&&IT.read(o);m&&a.set(r,m)}return e}const BT=typeof XMLHttpRequest<"u",zT=BT&&function(n){return new Promise(function(t,i){const s=Cp(n);let r=s.data;const o=Yt.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,h,f,m,_;function g(){m&&m(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function d(){if(!p)return;const x=Yt.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:x,config:n,request:p};Ap(function(C){t(C),g()},function(C){i(C),g()},R),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(d)},p.onabort=function(){p&&(i(new Te("Request aborted",Te.ECONNABORTED,n,p)),g(),p=null)},p.onerror=function(y){const R=y&&y.message?y.message:"Network Error",A=new Te(R,Te.ERR_NETWORK,n,p);A.event=y||null,i(A),g(),p=null},p.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||bc;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new Te(y,R.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,n,p)),g(),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&k.forEach(yp(o),function(y,R){p.setRequestHeader(R,y)}),k.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),c&&([f,_]=zo(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([h,m]=zo(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=x=>{p&&(i(!x||x.type?new Br(null,n,p):x),p.abort(),g(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const v=RT(s.url);if(v&&!Dt.protocols.includes(v)){i(new Te("Unsupported protocol "+v+":",Te.ERR_BAD_REQUEST,n));return}p.send(r||null)})},HT=(n,e)=>{if(n=n?n.filter(Boolean):[],!e&&!n.length)return;const t=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;t.abort(c instanceof Te?c:new Br(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Te(`timeout of ${e}ms exceeded`,Te.ETIMEDOUT))},e);const o=()=>{n&&(r&&clearTimeout(r),r=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>l.addEventListener("abort",s));const{signal:a}=t;return a.unsubscribe=()=>k.asap(o),a},GT=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,s;for(;i<t;)s=i+e,yield n.slice(i,s),i=s},VT=async function*(n,e){for await(const t of kT(n))yield*GT(t,e)},kT=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},cf=(n,e,t,i)=>{const s=VT(n,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let h=u.byteLength;if(t){let f=r+=h;t(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})};function WT(n){if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const e=n.indexOf(",");if(e<0)return 0;const t=n.slice(5,e),i=n.slice(e+1);if(/;base64/i.test(t)){let o=i.length;const a=i.length;for(let m=0;m<a;m++)if(i.charCodeAt(m)===37&&m+2<a){const _=i.charCodeAt(m+1),g=i.charCodeAt(m+2);(_>=48&&_<=57||_>=65&&_<=70||_>=97&&_<=102)&&(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102)&&(o-=2,m+=2)}let l=0,c=a-1;const u=m=>m>=2&&i.charCodeAt(m-2)===37&&i.charCodeAt(m-1)===51&&(i.charCodeAt(m)===68||i.charCodeAt(m)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const f=Math.floor(o/4)*3-(l||0);return f>0?f:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(i,"utf8");let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const Tc="1.17.0",uf=64*1024,{isFunction:vo}=k,qT=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),hf=n=>{if(!k.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},ff=(n,...e)=>{try{return!!n(...e)}catch{return!1}},XT=n=>{const e=n.indexOf("://");let t=n;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},jT=n=>{const e=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:t,TextEncoder:i}=e;n=k.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},n);const{fetch:s,Request:r,Response:o}=n,a=s?vo(s):typeof fetch=="function",l=vo(r),c=vo(o);if(!a)return!1;const u=a&&vo(t),h=a&&(typeof i=="function"?(d=>v=>d.encode(v))(new i):async d=>new Uint8Array(await new r(d).arrayBuffer())),f=l&&u&&ff(()=>{let d=!1;const v=new r(Dt.origin,{body:new t,method:"POST",get duplex(){return d=!0,"half"}}),x=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),d&&!x}),m=c&&u&&ff(()=>k.isReadableStream(new o("").body)),_={stream:m&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!_[d]&&(_[d]=(v,x)=>{let y=v&&v[d];if(y)return y.call(v);throw new Te(`Response type '${d}' is not supported`,Te.ERR_NOT_SUPPORT,x)})});const g=async d=>{if(d==null)return 0;if(k.isBlob(d))return d.size;if(k.isSpecCompliantForm(d))return(await new r(Dt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(k.isArrayBufferView(d)||k.isArrayBuffer(d))return d.byteLength;if(k.isURLSearchParams(d)&&(d=d+""),k.isString(d))return(await h(d)).byteLength},p=async(d,v)=>{const x=k.toFiniteNumber(d.getContentLength());return x??g(v)};return async d=>{let{url:v,method:x,data:y,signal:R,cancelToken:A,timeout:C,onDownloadProgress:U,onUploadProgress:M,responseType:T,headers:B,withCredentials:G="same-origin",fetchOptions:z,maxContentLength:L,maxBodyLength:N}=Cp(d);const D=k.isNumber(L)&&L>-1,j=k.isNumber(N)&&N>-1,V=oe=>k.hasOwnProp(d,oe)?d[oe]:void 0;let Y=s||fetch;T=T?(T+"").toLowerCase():"text";let re=HT([R,A&&A.toAbortSignal()],C),ae=null;const K=re&&re.unsubscribe&&(()=>{re.unsubscribe()});let ne;try{let oe;const de=V("auth");if(de){const ve=de.username||"",E=de.password||"";oe={username:ve,password:E}}if(XT(v)){const ve=new URL(v,Dt.origin);if(!oe&&(ve.username||ve.password)){const E=hf(ve.username),F=hf(ve.password);oe={username:E,password:F}}(ve.username||ve.password)&&(ve.username="",ve.password="",v=ve.href)}if(oe&&(B.delete("authorization"),B.set("Authorization","Basic "+btoa(qT((oe.username||"")+":"+(oe.password||""))))),D&&typeof v=="string"&&v.startsWith("data:")&&WT(v)>L)throw new Te("maxContentLength size of "+L+" exceeded",Te.ERR_BAD_RESPONSE,d,ae);if(j&&x!=="get"&&x!=="head"){const ve=await p(B,y);if(typeof ve=="number"&&isFinite(ve)&&ve>N)throw new Te("Request body larger than maxBodyLength limit",Te.ERR_BAD_REQUEST,d,ae)}if(M&&f&&x!=="get"&&x!=="head"&&(ne=await p(B,y))!==0){let ve=new r(v,{method:"POST",body:y,duplex:"half"}),E;if(k.isFormData(y)&&(E=ve.headers.get("content-type"))&&B.setContentType(E),ve.body){const[F,H]=of(ne,zo(af(M)));y=cf(ve.body,uf,F,H)}}k.isString(G)||(G=G?"include":"omit");const Ee=l&&"credentials"in r.prototype;if(k.isFormData(y)){const ve=B.getContentType();ve&&/^multipart\/form-data/i.test(ve)&&!/boundary=/i.test(ve)&&B.delete("content-type")}B.set("User-Agent","axios/"+Tc,!1);const Me={...z,signal:re,method:x.toUpperCase(),headers:yp(B.normalize()),body:y,duplex:"half",credentials:Ee?G:void 0};ae=l&&new r(v,Me);let Ce=await(l?Y(ae,z):Y(v,Me));if(D){const ve=k.toFiniteNumber(Ce.headers.get("content-length"));if(ve!=null&&ve>L)throw new Te("maxContentLength size of "+L+" exceeded",Te.ERR_BAD_RESPONSE,d,ae)}const Oe=m&&(T==="stream"||T==="response");if(m&&Ce.body&&(U||D||Oe&&K)){const ve={};["status","statusText","headers"].forEach(se=>{ve[se]=Ce[se]});const E=k.toFiniteNumber(Ce.headers.get("content-length")),[F,H]=U&&of(E,zo(af(U),!0))||[];let J=0;const X=se=>{if(D&&(J=se,J>L))throw new Te("maxContentLength size of "+L+" exceeded",Te.ERR_BAD_RESPONSE,d,ae);F&&F(se)};Ce=new o(cf(Ce.body,uf,X,()=>{H&&H(),K&&K()}),ve)}T=T||"text";let Ae=await _[k.findKey(_,T)||"text"](Ce,d);if(D&&!m&&!Oe){let ve;if(Ae!=null&&(typeof Ae.byteLength=="number"?ve=Ae.byteLength:typeof Ae.size=="number"?ve=Ae.size:typeof Ae=="string"&&(ve=typeof i=="function"?new i().encode(Ae).byteLength:Ae.length)),typeof ve=="number"&&ve>L)throw new Te("maxContentLength size of "+L+" exceeded",Te.ERR_BAD_RESPONSE,d,ae)}return!Oe&&K&&K(),await new Promise((ve,E)=>{Ap(ve,E,{data:Ae,headers:Yt.from(Ce.headers),status:Ce.status,statusText:Ce.statusText,config:d,request:ae})})}catch(oe){if(K&&K(),re&&re.aborted&&re.reason instanceof Te){const de=re.reason;throw de.config=d,ae&&(de.request=ae),oe!==de&&(de.cause=oe),de}throw oe&&oe.name==="TypeError"&&/Load failed|fetch/i.test(oe.message)?Object.assign(new Te("Network Error",Te.ERR_NETWORK,d,ae,oe&&oe.response),{cause:oe.cause||oe}):Te.from(oe,oe&&oe.code,d,ae,oe&&oe.response)}}},YT=new Map,Pp=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:s}=e,r=[i,s,t];let o=r.length,a=o,l,c,u=YT;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:jT(e)),u=c;return c};Pp();const Ac={http:fT,xhr:zT,fetch:{get:Pp}};k.forEach(Ac,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:e})}});const df=n=>`- ${n}`,$T=n=>k.isFunction(n)||n===null||n===!1;function KT(n,e){n=k.isArray(n)?n:[n];const{length:t}=n;let i,s;const r={};for(let o=0;o<t;o++){i=n[o];let a;if(s=i,!$T(i)&&(s=Ac[(a=String(i)).toLowerCase()],s===void 0))throw new Te(`Unknown adapter '${a}'`);if(s&&(k.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(df).join(`
`):" "+df(o[0]):"as no adapter specified";throw new Te("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Lp={getAdapter:KT,adapters:Ac};function hl(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Br(null,n)}function pf(n){return hl(n),n.headers=Yt.from(n.headers),n.data=ul.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Lp.getAdapter(n.adapter||Or.adapter,n)(n).then(function(i){hl(n),n.response=i;try{i.data=ul.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=Yt.from(i.headers),i},function(i){if(!Tp(i)&&(hl(n),i&&i.response)){n.response=i.response;try{i.response.data=ul.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=Yt.from(i.response.headers)}return Promise.reject(i)})}const ra={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{ra[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const mf={};ra.transitional=function(e,t,i){function s(r,o){return"[Axios v"+Tc+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Te(s(o," has been removed"+(t?" in "+t:"")),Te.ERR_DEPRECATED);return t&&!mf[o]&&(mf[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};ra.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function ZT(n,e,t){if(typeof n!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new Te("option "+r+" must be "+l,Te.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Te("Unknown option "+r,Te.ERR_BAD_OPTION)}}const wo={assertOptions:ZT,validators:ra},Zt=wo.validators;let Qi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new rf,response:new rf}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=is(this.defaults,t);const{transitional:i,paramsSerializer:s,headers:r}=t;i!==void 0&&wo.assertOptions(i,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean),legacyInterceptorReqResOrdering:Zt.transitional(Zt.boolean),advertiseZstdAcceptEncoding:Zt.transitional(Zt.boolean)},!1),s!=null&&(k.isFunction(s)?t.paramsSerializer={serialize:s}:wo.assertOptions(s,{encode:Zt.function,serialize:Zt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),wo.assertOptions(t,{baseUrl:Zt.spelling("baseURL"),withXsrfToken:Zt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&k.merge(r.common,r[t.method]);r&&k.forEach(["delete","get","head","post","put","patch","query","common"],_=>{delete r[_]}),t.headers=Yt.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(g){if(typeof g.runWhen=="function"&&g.runWhen(t)===!1)return;l=l&&g.synchronous;const p=t.transitional||bc;p&&p.legacyInterceptorReqResOrdering?a.unshift(g.fulfilled,g.rejected):a.push(g.fulfilled,g.rejected)});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,h=0,f;if(!l){const _=[pf.bind(this),void 0];for(_.unshift(...a),_.push(...c),f=_.length,u=Promise.resolve(t);h<f;)u=u.then(_[h++],_[h++]);return u}f=a.length;let m=t;for(;h<f;){const _=a[h++],g=a[h++];try{m=_(m)}catch(p){g.call(this,p);break}}try{u=pf.call(this,m)}catch(_){return Promise.reject(_)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=is(this.defaults,e);const t=Rp(e.baseURL,e.url,e.allowAbsoluteUrls);return bp(t,e.params,e.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(e){Qi.prototype[e]=function(t,i){return this.request(is(i||{},{method:e,url:t,data:(i||{}).data}))}});k.forEach(["post","put","patch","query"],function(e){function t(i){return function(r,o,a){return this.request(is(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Qi.prototype[e]=t(),e!=="query"&&(Qi.prototype[e+"Form"]=t(!0))});let JT=class Ip{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Br(r,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Ip(function(s){e=s}),cancel:e}}};function QT(n){return function(t){return n.apply(null,t)}}function eA(n){return k.isObject(n)&&n.isAxiosError===!0}const Bl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Bl).forEach(([n,e])=>{Bl[e]=n});function Dp(n){const e=new Qi(n),t=fp(Qi.prototype.request,e);return k.extend(t,Qi.prototype,e,{allOwnKeys:!0}),k.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Dp(is(n,s))},t}const _t=Dp(Or);_t.Axios=Qi;_t.CanceledError=Br;_t.CancelToken=JT;_t.isCancel=Tp;_t.VERSION=Tc;_t.toFormData=sa;_t.AxiosError=Te;_t.Cancel=_t.CanceledError;_t.all=function(e){return Promise.all(e)};_t.spread=QT;_t.isAxiosError=eA;_t.mergeConfig=is;_t.AxiosHeaders=Yt;_t.formToJSON=n=>wp(k.isHTMLForm(n)?new FormData(n):n);_t.getAdapter=Lp.getAdapter;_t.HttpStatusCode=Bl;_t.default=_t;const{Axios:RA,AxiosError:CA,CanceledError:PA,isCancel:LA,CancelToken:IA,VERSION:DA,all:NA,Cancel:UA,isAxiosError:FA,spread:OA,toFormData:BA,AxiosHeaders:zA,HttpStatusCode:HA,formToJSON:GA,getAdapter:VA,mergeConfig:kA,create:WA}=_t,Rc=_t.create({baseURL:"/api",timeout:1e4});Rc.interceptors.response.use(n=>{const e=n.data;return e.code===200?e.data:Promise.reject(new Error(e.msg||"请求失败"))},n=>Promise.reject(n));const tA=n=>Rc.get(`/level/get/${n}`),nA=(n,e)=>Rc.post("/user/saveRecord",{openid:n,maxLevel:e}),iA={class:"game-page"},sA={class:"game-area"},rA={class:"top-bar"},oA={class:"level-info"},aA={class:"pot-count"},lA={class:"slot-bar"},cA={class:"slot-container"},uA=["onClick"],hA={key:0,class:"slot-item"},fA={class:"tool-bar"},dA=["disabled"],pA={key:0,class:"dialog-overlay"},mA={key:1,class:"dialog-overlay"},gA={class:"dialog clear-dialog"},_A=ec({__name:"Game",setup(n){const e=ri(),t=ri(1),i=ri([]),s=ri(0),r=ri(-1),o=ri(!1),a=ri(!1),l=ri("test_openid_"+Date.now());async function c(R){var A,C;t.value=R;try{const U=await tA(R);(A=e.value)==null||A.loadLevel(U.itemTypeList,U.itemTotal)}catch(U){console.error("加载关卡失败:",U),(C=e.value)==null||C.loadLevel(["apple","banana","orange"],12)}}function u(R){i.value=R,r.value=-1}function h(R){s.value=R}function f(){o.value=!0}async function m(){a.value=!0;try{await nA(l.value,t.value)}catch(R){console.error("保存通关记录失败:",R)}}function _(R){i.value[R]&&(r.value=r.value===R?-1:R)}function g(){var R;r.value>=0&&((R=e.value)==null||R.useReturnToPot(r.value),r.value=-1)}function p(){var R;(R=e.value)==null||R.useShuffle()}function d(){var A,C;const R=((A=e.value)==null?void 0:A.getItemTypes())||["apple","banana","orange"];(C=e.value)==null||C.useMakeTriple(R)}function v(){var R;(R=e.value)==null||R.simulateShake()}function x(){o.value=!1,c(t.value)}function y(){a.value=!1,c(t.value+1)}return tc(()=>{c(1)}),(R,A)=>(yn(),oi("div",iA,[dt("div",sA,[qn(lw,{ref_key:"gameRef",ref:e,onSlotUpdate:u,onGameOver:f,onLevelClear:m,onPotCountUpdate:h},null,512)]),dt("div",rA,[dt("span",oA,"关卡 "+ir(t.value),1),dt("span",aA,"锅内剩余: "+ir(s.value),1)]),dt("div",lA,[dt("div",cA,[(yn(!0),oi(Sn,null,Vc(i.value,(C,U)=>(yn(),oi("div",{key:U,class:Wo(["slot-cell",{"slot-filled":C,"slot-selected":r.value===U}]),onClick:M=>_(U)},[C?(yn(),oi("span",hA,ir(C.itemKey),1)):Sa("",!0)],10,uA))),128)),(yn(!0),oi(Sn,null,Vc(7-i.value.length,C=>(yn(),oi("div",{key:"empty-"+C,class:"slot-cell slot-empty"}))),128))])]),dt("div",fA,[dt("button",{class:"tool-btn",onClick:g,disabled:r.value<0},"道具回锅",8,dA),dt("button",{class:"tool-btn",onClick:p},"全局洗牌"),dt("button",{class:"tool-btn",onClick:d},"一键凑三"),dt("button",{class:"tool-btn shake-btn",onClick:v},"模拟摇晃")]),o.value?(yn(),oi("div",pA,[dt("div",{class:"dialog fail-dialog"},[A[0]||(A[0]=dt("div",{class:"goose-icon"},"🦆",-1)),A[1]||(A[1]=dt("h2",null,"游戏失败！",-1)),A[2]||(A[2]=dt("p",null,"卡槽已满，无法继续消除",-1)),dt("button",{class:"dialog-btn",onClick:x},"重新挑战")])])):Sa("",!0),a.value?(yn(),oi("div",mA,[dt("div",gA,[A[3]||(A[3]=dt("div",{class:"goose-icon"},"🎉",-1)),A[4]||(A[4]=dt("h2",null,"恭喜通关！",-1)),dt("p",null,"关卡 "+ir(t.value)+" 已完成",1),dt("button",{class:"dialog-btn",onClick:y},"下一关")])])):Sa("",!0)]))}}),vA=hp(_A,[["__scopeId","data-v-2c7bb984"]]),xA=ec({__name:"App",setup(n){return(e,t)=>(yn(),md(vA))}});l_(xA).mount("#app");
