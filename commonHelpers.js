import{a as n,S as u,i as d}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const m="https://pixabay.com/api/";function h(o){const r=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!1});return n.get(m,{params:r})}function f(o){const{comments:r,downloads:i,largeImageURL:s,likes:t,tags:e,views:a,webformatURL:c}=o;return`<li class="list__card">
  <a href="${s}"><img src="${c}" alt="${e}"></a>
      <ul>
        <li class="list__card-headers">
          <h3>Likes</h3>
          <h4>${t}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Views</h3>
          <h4>${a}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Comments</h3>
          <h4>${r}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${i}</h4>
        </li>
      </ul>
      </li>`}function g(o){return o.map(f).join("")}function p(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}n.defaults.baseURL="https://pixabay.com/api/";const y=new u(".gallery a",{captionsData:"alt",captionDelay:350}),l={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};l.form.addEventListener("submit",L);function L(o){o.preventDefault();const r=o.currentTarget,{query:i}=r.elements,s=i.value.trim().toLowerCase();if(!s)return;const t=p();l.list.innerHTML=t,h(s).then(e=>{if(console.log(e.data),console.log(e.status),console.log(e.statusText),console.log(e.headers),console.log(e.config),!e.data.hits.length){d.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),l.list.innerHTML="";return}const a=g(e.data.hits);l.list.innerHTML=a}).catch(e=>{console.log(e)}).finally(()=>{r.reset(),y.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
