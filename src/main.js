// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { makeAxios } from './js/pixabay-api';

import * as renderFunc from './js/render-functions';

//!!!!!!!
import axios from 'axios';
import * as classHidden from './js/helper';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});

//?/
/////////////////////

let page = 1;
const per_page = 15;
let request = '';

const refsEl = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  loadMore: document.querySelector('.load-more'),
};

refsEl.form.addEventListener('submit', handlerForm);

async function handlerForm(event) {
  event.preventDefault();

  const thisCurrentForm = event.currentTarget;

  const { query } = thisCurrentForm.elements;

  const normalizeInputValue = query.value.trim().toLowerCase();

  request = normalizeInputValue;
  if (!request) {
    return;
  }

  const preLoader = renderFunc.preLoader();
  refsEl.list.innerHTML = preLoader;

  // classHidden.addClassHidden(refsEl.loadMore);

  try {
    ///
    page = 1;
    ///

    const response = await makeAxios(request, page, per_page);

    if (!response.data.hits.length) {
      iziToast.error({
        theme: 'dark',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        messageSize: '16',
        messageLineHeight: '1,5',
        backgroundColor: '#ef4040',
        maxWidth: '370',
        position: 'topRight',
        progressBarColor: '#B51B1B',
      });

      refsEl.list.innerHTML = '';
      return;
    }

    const markup = renderFunc.makeMarkupItemS(response.data.hits);
    refsEl.list.innerHTML = markup;

    /////

    let limit = per_page;
    // Кількість груп в колекції
    const totalPages = Math.ceil(response.data.totalHits / limit);
    console.log(response.data);
    console.log(totalPages);

    if (page >= totalPages) {
      return iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      classHidden.removeClassHidden(refsEl.loadMore);
    }

    /////
  } catch {
    console.log(error);
  } finally {
    thisCurrentForm.reset();
    lightbox.refresh();
  }
}

///===============////

refsEl.loadMore.addEventListener('click', handlerLoadMoreBtn);

async function handlerLoadMoreBtn(event) {
  ///
  const preLoader = renderFunc.preLoader();
  document.querySelector('.loaderR').innerHTML = preLoader;

  classHidden.addClassHidden(refsEl.loadMore);

  try {
    ///
    page += 1;
    ///

    const response = await makeAxios(request, page, per_page);

    if (!response.data.hits.length) {
      iziToast.error({
        theme: 'dark',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        messageSize: '16',
        messageLineHeight: '1,5',
        backgroundColor: '#ef4040',
        maxWidth: '370',
        position: 'topRight',
        progressBarColor: '#B51B1B',
      });

      refsEl.list.innerHTML = '';
      return;
    }

    const markup = renderFunc.makeMarkupItemS(response.data.hits);
    refsEl.list.insertAdjacentHTML('beforeend', markup);

    //
    let limit = per_page;
    // Кількість груп в колекції
    const totalPages = Math.ceil(response.data.totalHits / limit);
    console.log(response.data);
    console.log('current page', page);
    console.log(totalPages);

    if (page === totalPages) {
      // classHidden.addClassHidden(refsEl.loadMore);

      return iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      classHidden.removeClassHidden(refsEl.loadMore);
    }

    // const preLoader = renderFunc.preLoader();
    // document.querySelector('.loaderR').innerHTML = preLoader;
  } catch {
    console.log(error);
  } finally {
    lightbox.refresh();
    document.querySelector('.loaderR').innerHTML = '';
    //
    const listItem = document.querySelector('.list__card');

    const rect = listItem.getBoundingClientRect();

    console.log(rect);
    const doubleHeigth = rect.height * 2;
    console.log(doubleHeigth);
    //
    window.scrollBy({
      top: doubleHeigth,
      left: 100,
      behavior: 'smooth',
    });
  }
}
