import{S as L,i as P,s as R,k as p,q as D,a as H,l as y,m as x,r as N,h as w,c as T,n as S,b as G,G as m,B as _,o as K}from"../../../../chunks/index-1664d19c.js";const d=800,u=400,o=20,E=3;let c=new Array(E).fill(1).map((t,e)=>({x:(E-e)*o,y:0})),g=[{x:60,y:20}],a=null,C=null,i=null;const M=(t,e,s,n,r="green")=>{a.fillStyle=r,a.fillRect(t,e,s,n)},U=()=>{a.clearRect(0,0,d,u)},v=(t,e,s,n)=>{a.beginPath(),a.rect(t,e,s,n),a.stroke(),a.closePath()},q=()=>{for(let t=0;t<d;t+=o)for(let e=0;e<u;e+=o)v(t,e,o,o)},I=(t=c,e)=>{for(const{x:s,y:n}of t)M(s,n,o,o,e)},B=()=>I(g,"red"),V=(t,e,s)=>{switch(t){case"up":{let n=s-o;return n<0&&(n=u-o),{x:e,y:n}}case"down":{let n=s+o;return n>u&&(n=0),{x:e,y:n}}case"left":{let n=e-o;return n<0&&(n=d-o),{x:n,y:s}}case"right":{let n=e+o;return n>d&&(n=0),{x:n,y:s}}default:throw new Error("Unknown direction")}},$=t=>{c.pop(),c=[V(t,c[0].x,c[0].y),...c]},b=(t,e)=>t.x===e.x&&t.y===e.y,k=t=>Math.floor(Math.random()*t),F=()=>{g=g.map(t=>{if(b(t,c[0])){c.unshift(t);const s=d/o,n=u/o,r=k(s),l=k(n);return{x:r*o,y:l*o}}return t})},O=t=>new Promise(e=>setTimeout(e,t)),W=()=>{const t=document.getElementById("canvas");return t.width=d,t.height=u,a=t.getContext("2d"),{canvas:t,context:a}},Z=t=>{U(),v(0,0,d,u),q(),$(t),I(),F(),B()},j=(t,e)=>t===i||[["up","down"],["left","right"]].some(n=>n.includes(i)&&n.includes(t))?i:t,z=t=>{if(["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"].includes(t.code)){const e=t.code.toLowerCase().replace("arrow","");i=j(e)}return i},J=async()=>{for(W(),C=100,i="right",document.addEventListener("keydown",z);;)Z(i),await O(C)};function Q(t){let e,s,n,r,l;return{c(){e=p("div"),s=p("h1"),n=D("Snake"),r=H(),l=p("canvas"),this.h()},l(f){e=y(f,"DIV",{class:!0});var h=x(e);s=y(h,"H1",{});var A=x(s);n=N(A,"Snake"),A.forEach(w),r=T(h),l=y(h,"CANVAS",{id:!0}),x(l).forEach(w),h.forEach(w),this.h()},h(){S(l,"id","canvas"),S(e,"class","svelte-nmnl5o")},m(f,h){G(f,e,h),m(e,s),m(s,n),m(e,r),m(e,l)},p:_,i:_,o:_,d(f){f&&w(e)}}}function X(t){return K(J),[]}class tt extends L{constructor(e){super(),P(this,e,X,Q,R,{})}}export{tt as default};
