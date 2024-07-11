import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function h(s){const t="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!1}),e=`${t}${i}?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(s){const{comments:t,downloads:i,largeImageURL:o,likes:e,tags:r,views:a,webformatURL:l}=s;return`<li class="list__card">
  <a href="${o}"><img src="${l}" alt="${r}"></a>
      <ul>
        <li class="list__card-headers">
          <h3>Likes</h3>
          <h4>${e}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Views</h3>
          <h4>${a}</h4>
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
      </li>`}function f(s){return s.map(m).join("")}function d(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}const p=new c(".gallery a",{captionsData:"alt",captionDelay:350}),n={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};n.form.addEventListener("submit",g);function g(s){s.preventDefault();const t=s.currentTarget,{query:i}=t.elements,o=i.value.trim().toLowerCase();if(!o)return;const e=d();n.list.innerHTML=e,h(o).then(r=>{if(!r.hits.length){u.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),n.list.innerHTML="";return}const a=f(r.hits);n.list.innerHTML=a}).catch(console.log).finally(()=>{t.reset(),p.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
