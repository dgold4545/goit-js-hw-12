import{a as u,S as d,i as f}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/";async function p(s,t,a){const o=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!1,page:t,per_page:a});return await u.get(h,{params:o})}function g(s){const{comments:t,downloads:a,largeImageURL:o,likes:e,tags:r,views:i,webformatURL:m}=s;return`<li class="list__card">
  <a href="${o}"><img src="${m}" alt="${r}"></a>
      <ul>
        <li class="list__card-headers">
          <h3>Likes</h3>
          <h4>${e}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Views</h3>
          <h4>${i}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Comments</h3>
          <h4>${t}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${a}</h4>
        </li>
      </ul>
      </li>`}function y(s){return s.map(g).join("")}function L(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}u.defaults.baseURL="https://pixabay.com/api/";const b=new d(".gallery a",{captionsData:"alt",captionDelay:350});let c=1;const _=5;let l="";const n={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};n.form.addEventListener("submit",w);async function w(s){s.preventDefault();const t=s.currentTarget,{query:a}=t.elements;if(l=a.value.trim().toLowerCase(),!l)return;const e=L();n.list.innerHTML=e;try{c=1;const r=await p(l,c,_);if(!r.data.hits.length){f.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),n.list.innerHTML="";return}const i=y(r.data.hits);n.list.innerHTML=i}catch{console.log(error)}finally{t.reset(),b.refresh()}}
//# sourceMappingURL=commonHelpers.js.map
