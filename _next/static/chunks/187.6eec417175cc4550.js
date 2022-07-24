"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{8552:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function d(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.EmbedGist=void 0;const r=n(7225),s={};class o extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=s[this.getCacheKey()];t&&(e.innerHTML=t)}render(e){if(!(this.shadowRoot&&e.stylesheet&&e.div))return void this.renderError();const t=`<link rel="stylesheet" href="${e.stylesheet}"><div>${e.div}</div>`;s[this.getCacheKey()]=t,this.shadowRoot.innerHTML=t}renderError(){this.innerHTML=`<div style="text-align: center; margin: 1.5rem 0; color: gray; font-size: 0.9rem;">\n    Gist\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f<br>  \n    ${this.getAttribute("page-url")}\n    </div>`}getCacheKey(){return encodeURIComponent(`${this.getAttribute("page-url")}-${this.getAttribute("encoded-filename")}`)}connectedCallback(){return i(this,void 0,void 0,(function*(){if(s[this.getCacheKey()])return;const e=this.getAttribute("page-url"),t=this.getAttribute("encoded-filename");if(!e)return;const n=((i=e).endsWith(".json")?i:i.endsWith(".js")?i.replace(".js",".json"):`${i}.json`)+((null===t||void 0===t?void 0:t.length)?`?file=${t}`:"");var i;try{const e=yield r.getByJsonp(n);this.render(e)}catch(o){console.log(o),this.renderError()}}))}}t.EmbedGist=o},1545:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function d(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.EmbedKatex=void 0;const r=n(5532),s=n(798);class o extends HTMLElement{constructor(){super();const e=document.createElement("div");e.setAttribute("id","katex-container"),this._container=e}connectedCallback(){return i(this,void 0,void 0,(function*(){this.render()}))}render(){return i(this,void 0,void 0,(function*(){"undefined"===typeof katex&&(yield r.loadScript({src:"https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.js",id:"katex-js"})),s.loadStylesheet({href:"https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css",id:"katex-css"});const e=!!this.getAttribute("display-mode"),t=this.textContent||this.innerText;null===katex||void 0===katex||katex.render(t,this._container,{macros:{"\\RR":"\\mathbb{R}"},throwOnError:!1,displayMode:e}),this.innerHTML=this._container.innerHTML}))}}t.EmbedKatex=o},9503:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function d(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.EmbedMermaid=void 0;const r=n(5532);class s extends HTMLElement{connectedCallback(){return i(this,void 0,void 0,(function*(){const e=document.createElement("div");this.appendChild(e),this._tmpContainer=e,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{var t;if(e.isIntersecting){if(this.render(),!this._tmpContainer)return void console.error("Something wrong with _tmpContainer");null===(t=this.observer)||void 0===t||t.unobserve(this._tmpContainer)}}))}),{rootMargin:"1000px 0px"}),this._tmpContainer&&this.observer.observe(this._tmpContainer)}))}disconnectedCallback(){this.observer&&(this._tmpContainer&&this.observer.unobserve(this._tmpContainer),this.observer.disconnect())}render(){return i(this,void 0,void 0,(function*(){yield function(){return i(this,void 0,void 0,(function*(){if("undefined"===typeof mermaid){yield r.loadScript({src:"https://cdn.jsdelivr.net/npm/mermaid@8.13/dist/mermaid.min.js",id:"mermaid-js"});const e="default";mermaid.initialize({mermaid:{startOnLoad:!1}}),mermaid.mermaidAPI.initialize({startOnLoad:!1,securityLevel:"strict",theme:e,er:{useMaxWidth:!0},flowchart:{useMaxWidth:!0,htmlLabels:!1},sequence:{useMaxWidth:!0},class:{useMaxWidth:!0},journey:{useMaxWidth:!0}})}}))}();const e=this.textContent||this.innerText;if(!e)return;this.childNodes[0].setAttribute("style","display:none");const t=(n=e,{syntaxError:{yes:!(()=>{try{return mermaid.mermaidAPI.parse(n),!0}catch(e){return console.log("mermaid.js \u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f",e),!1}})(),message:"<li>\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u3067\u3059</li>"},charLimitOver:{yes:n.length>2e3,message:"<li>\u30d6\u30ed\u30c3\u30af\u3042\u305f\u308a\u306e\u6587\u5b57\u6570\u4e0a\u9650\u306f2000\u3067\u3059</li>"},chainingOfLinksOver:{yes:(n.match(/&/g)||[]).length>10,message:"<li>\u30d6\u30ed\u30c3\u30af\u3042\u305f\u308a\u306e<code>&</code>\u306b\u3088\u308b\u30c1\u30a7\u30a4\u30f3\u4e0a\u9650\u306f10\u3067\u3059</li>"}});var n;if(Object.values(t).map((e=>e.yes)).includes(!0))return void(this.innerHTML=`\n       <p>\n        <span>mermaid\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u304d\u307e\u305b\u3093\u3002</span>\n        <ul>\n        ${t.syntaxError.yes?t.syntaxError.message:""}\n        ${t.charLimitOver.yes?t.charLimitOver.message:""}\n        ${t.chainingOfLinksOver.yes?t.chainingOfLinksOver.message:""}\n        </ul>\n       </p>\n      `);null===mermaid||void 0===mermaid||mermaid.mermaidAPI.render(`mermaid-container-${Date.now().valueOf()}-render`,e,(e=>{const t=document.createElement("div");this.appendChild(t),t.innerHTML=e}),this._tmpContainer)}))}}t.EmbedMermaid=s},8022:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function d(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.EmbedTweet=void 0;const i={};class r extends HTMLElement{constructor(){super();const e=this.getAttribute("src");if(!e)return;this.url=e;const t=e.match(/https?:\/\/twitter.com\/(.*?)\/status\/(\d+)[/?]?/);t&&t[2]&&(this.tweetId=t[2])}connectedCallback(){return n(this,void 0,void 0,(function*(){this.render(),this.embedTweet()}))}render(){const e=this.tweetId&&i[this.tweetId]?`style="min-height: ${encodeURIComponent(i[this.tweetId])};"`:"";this.innerHTML=`<div class="embed-tweet-container" ${e}>\n      <a href="${this.url}" class="embed-tweet-link" rel="nofollow">${this.url}</a>\n    </div>`}embedTweet(){return n(this,void 0,void 0,(function*(){const e=this.tweetId;if(!this.url||!e)return void console.log(`Invalid tweet URL:${this.url}`);const t=this.querySelector(".embed-tweet-container"),n=this.url.includes("?conversation=none");window.twttr.widgets.createTweet(this.tweetId,t,Object.assign({align:"center"},n?{conversation:"none"}:{})).then((()=>{var t;null===(t=this.querySelector(".embed-tweet-link"))||void 0===t||t.remove();const n=this.querySelector("iframe");n&&setTimeout((()=>{i[e]=n.style.height}),1e3)}))}))}}t.EmbedTweet=r},1187:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(8552),r=n(8022),s=n(1545),o=n(9503);customElements.define("embed-gist",i.EmbedGist),customElements.define("embed-tweet",r.EmbedTweet),customElements.define("embed-katex",s.EmbedKatex),customElements.define("embed-mermaid",o.EmbedMermaid)},7225:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getByJsonp=void 0;const n=document.getElementsByTagName("head")[0];let i=null;function r(){i&&clearTimeout(i)}const s=(e,t)=>{try{delete window[e]}catch(r){window[e]=void 0}const i=document.getElementById(t);i&&n.removeChild(i)};t.getByJsonp=function(e){const t=`jsonp_${Date.now()}_${Math.ceil(1e4*Math.random())}`,o=`id_${t}`;return new Promise(((d,c)=>{window[t]=e=>{d(e),r(),s(t,o)};const a=e+(e.includes("?")?"&":"?")+`callback=${t}`,l=document.createElement("script");l.setAttribute("src",a),l.setAttribute("charset","UTF-8"),l.id=o,n.appendChild(l),i=setTimeout((()=>{c(new Error(`Request to ${e} timed out.`)),s(t,o),window[t]=()=>s(t,o)}),6e3),l.addEventListener("error",(()=>{c(new Error(`JSONP request to ${e} failed`)),s(t,o),r()}))}))}},5532:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.loadScript=void 0;const n={};t.loadScript=function({src:e,id:t}){return new Promise(((i,r)=>{if(document.getElementById(t)){const e=setInterval((()=>{n[t]&&(clearInterval(e),i())}),100)}else{const s=document.createElement("script");s.setAttribute("src",e),s.setAttribute("id",t),document.head.appendChild(s),s.onload=()=>{n[t]=!0,i()},s.onerror=e=>r(e)}}))}},798:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.loadStylesheet=void 0,t.loadStylesheet=function({href:e,id:t}){return new Promise(((n,i)=>{if(document.getElementById(t))return n();const r=document.createElement("link");r.setAttribute("href",e),r.setAttribute("rel","stylesheet"),r.setAttribute("id",t),document.head.appendChild(r),r.onload=()=>{n()},r.onerror=e=>i(e)}))}}}]);