import{a as l,S as u,i as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/";async function f(s){const t=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!1});return await l.get(d,{params:t})}function h(s){const{comments:t,downloads:i,largeImageURL:a,likes:e,tags:r,views:o,webformatURL:c}=s;return`<li class="list__card">
  <a href="${a}"><img src="${c}" alt="${r}"></a>
      <ul>
        <li class="list__card-headers">
          <h3>Likes</h3>
          <h4>${e}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Views</h3>
          <h4>${o}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Comments</h3>
          <h4>${t}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${i}</h4>
        </li>
      </ul>
      </li>`}function p(s){return s.map(h).join("")}function g(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}l.defaults.baseURL="https://pixabay.com/api/";const y=new u(".gallery a",{captionsData:"alt",captionDelay:350}),n={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};n.form.addEventListener("submit",L);async function L(s){s.preventDefault();const t=s.currentTarget,{query:i}=t.elements,a=i.value.trim().toLowerCase();if(!a)return;const e=g();n.list.innerHTML=e;try{const r=await f(a);if(!r.data.hits.length){m.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),n.list.innerHTML="";return}const o=p(r.data.hits);n.list.innerHTML=o}catch{console.log(error)}finally{t.reset(),y.refresh()}}
//# sourceMappingURL=commonHelpers.js.map
