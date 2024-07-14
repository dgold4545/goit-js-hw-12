import{a as m,S,i as d}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const _="https://pixabay.com/api/";async function f(r,o,s){const i=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s});return await m.get(_,{params:i})}function v(r){const{comments:o,downloads:s,largeImageURL:i,likes:e,tags:t,views:n,webformatURL:h}=r;return`<li class="list__card">
  <a href="${i}"><img src="${h}" alt="${t}"></a>
      <ul>
        <li class="list__card-headers">
          <h3>Likes</h3>
          <h4>${e}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Views</h3>
          <h4>${n}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Comments</h3>
          <h4>${o}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${s}</h4>
        </li>
      </ul>
      </li>`}function p(r){return r.map(v).join("")}function g(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}function y(r){r.classList.add("visually-hidden")}function L(r){r.classList.remove("visually-hidden")}m.defaults.baseURL="https://pixabay.com/api/";const b=new S(".gallery a",{captionsData:"alt",captionDelay:350});let l=1;const u=15;let c="";const a={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loadMore:document.querySelector(".load-more")};a.form.addEventListener("submit",w);async function w(r){r.preventDefault();const o=r.currentTarget,{query:s}=o.elements;if(c=s.value.trim().toLowerCase(),!c)return;const e=g();a.list.innerHTML=e;try{l=1;const t=await f(c,l,u);if(!t.data.hits.length){d.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),a.list.innerHTML="";return}const n=p(t.data.hits);a.list.innerHTML=n;let h=u;const M=Math.ceil(t.data.totalHits/h);if(l>=M)return y(a.loadMore),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L(a.loadMore)}catch{console.log(error)}finally{o.reset(),b.refresh()}}a.loadMore.addEventListener("click",H);async function H(r){const o=g();document.querySelector(".loaderR").innerHTML=o,y(a.loadMore);try{l+=1;const s=await f(c,l,u);if(!s.data.hits.length){d.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),a.list.innerHTML="";return}const i=p(s.data.hits);a.list.insertAdjacentHTML("beforeend",i);let e=u;const t=Math.ceil(s.data.totalHits/e);if(l===t)return d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L(a.loadMore)}catch{console.log(error)}finally{b.refresh(),document.querySelector(".loaderR").innerHTML="";const e=document.querySelector(".list__card").getBoundingClientRect().height*2;window.scrollBy({top:e,left:100,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
