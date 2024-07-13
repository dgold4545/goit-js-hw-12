import{a as d,S as b,i as u}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M="https://pixabay.com/api/";async function m(t,a,s){const i=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,page:a,per_page:s});return await d.get(M,{params:i})}function S(t){const{comments:a,downloads:s,largeImageURL:i,likes:e,tags:r,views:n,webformatURL:L}=t;return`<li class="list__card">
  <a href="${i}"><img src="${L}" alt="${r}"></a>
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
          <h4>${a}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${s}</h4>
        </li>
      </ul>
      </li>`}function h(t){return t.map(S).join("")}function f(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}function _(t){t.classList.add("visually-hidden")}function p(t){t.classList.remove("visually-hidden")}d.defaults.baseURL="https://pixabay.com/api/";const g=new b(".gallery a",{captionsData:"alt",captionDelay:350});let c=1;const y=3;let l="";const o={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loadMore:document.querySelector(".load-more")};o.form.addEventListener("submit",w);async function w(t){t.preventDefault();const a=t.currentTarget,{query:s}=a.elements;if(l=s.value.trim().toLowerCase(),!l)return;const e=f();o.list.innerHTML=e;try{c=1;const r=await m(l,c,y);if(!r.data.hits.length){u.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),o.list.innerHTML="";return}const n=h(r.data.hits);o.list.innerHTML=n,p(o.loadMore)}catch{console.log(error)}finally{a.reset(),g.refresh()}}o.loadMore.addEventListener("click",q);async function q(t){const a=f();document.querySelector(".loaderR").innerHTML=a,_(o.loadMore);try{c+=1;const s=await m(l,c,y);if(!s.data.hits.length){u.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),o.list.innerHTML="";return}const i=h(s.data.hits);o.list.insertAdjacentHTML("beforeend",i)}catch{console.log(error)}finally{g.refresh(),document.querySelector(".loaderR").innerHTML="",p(o.loadMore)}}
//# sourceMappingURL=commonHelpers.js.map
