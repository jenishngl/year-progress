if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const t=e=>n(e,s),d={module:{uri:s},exports:c,require:t};i[s]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"icons/icon-192x192.png",revision:"f962aea372bd5f09b08650500bb7deab"},{url:"icons/icon-256x256.png",revision:"5d936096318a816d4149b47e61bae043"},{url:"icons/icon-384x384.png",revision:"86fe482e3a56b258514d6ae210026fa5"},{url:"icons/icon-512x512.png",revision:"66f21d1066dd8ace6b7e0fa472ab3cda"},{url:"index.html",revision:"4b20ef617e6b5f0939f970eecf1b3954"},{url:"manifest.webmanifest",revision:"1ec1d6a740a209d647cd01c34da7bc52"},{url:"moment-precise-range.js",revision:"5c3704aefe72d6cc160b5283314073b6"},{url:"moment.js",revision:"6e5aa6783efbeff584f4292398326b32"},{url:"progressbar.min.js",revision:"013916ab61482481d8de9742a0f95bee"}],{})}));
//# sourceMappingURL=sw.js.map
