import{a as f,S as M,i as d}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="https://pixabay.com/api/";async function g(r,s,o){const a=new URLSearchParams({key:"44734756-d98c11aebccc1bae684f0851d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!1,page:s,per_page:o});return await f.get(S,{params:a})}function _(r){const{comments:s,downloads:o,largeImageURL:a,likes:e,tags:t,views:n,webformatURL:h}=r;return`<li class="list__card">
  <a href="${a}"><img src="${h}" alt="${t}"></a>
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
          <h4>${s}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${o}</h4>
        </li>
      </ul>
      </li>`}function p(r){return r.map(_).join("")}function y(){return'<ul class="pre-loader"><li class="loader"></li></ul>'}function v(r){r.classList.add("visually-hidden")}function L(r){r.classList.remove("visually-hidden")}f.defaults.baseURL="https://pixabay.com/api/";const b=new M(".gallery a",{captionsData:"alt",captionDelay:350});let l=1;const u=15;let c="";const i={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loadMore:document.querySelector(".load-more")};i.form.addEventListener("submit",w);async function w(r){r.preventDefault();const s=r.currentTarget,{query:o}=s.elements;if(c=o.value.trim().toLowerCase(),!c)return;const e=y();i.list.innerHTML=e;try{l=1;const t=await g(c,l,u);if(!t.data.hits.length){d.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),i.list.innerHTML="";return}const n=p(t.data.hits);i.list.innerHTML=n;let h=u;const m=Math.ceil(t.data.totalHits/h);if(console.log(t.data),console.log(m),l>=m)return d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L(i.loadMore)}catch{console.log(error)}finally{s.reset(),b.refresh()}}i.loadMore.addEventListener("click",H);async function H(r){const s=y();document.querySelector(".loaderR").innerHTML=s,v(i.loadMore);try{l+=1;const o=await g(c,l,u);if(!o.data.hits.length){d.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16",messageLineHeight:"1,5",backgroundColor:"#ef4040",maxWidth:"370",position:"topRight",progressBarColor:"#B51B1B"}),i.list.innerHTML="";return}const a=p(o.data.hits);i.list.insertAdjacentHTML("beforeend",a);let e=u;const t=Math.ceil(o.data.totalHits/e);if(console.log(o.data),console.log("current page",l),console.log(t),l===t)return d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L(i.loadMore)}catch{console.log(error)}finally{b.refresh(),document.querySelector(".loaderR").innerHTML="";const a=document.querySelector(".list__card").getBoundingClientRect();console.log(a);const e=a.height*2;console.log(e),window.scrollBy({top:e,left:100,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
