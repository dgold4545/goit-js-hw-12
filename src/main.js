// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { makeFetchRequest } from './js/pixabay-api';

import * as renderFunc from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});

const refsEl = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
};

refsEl.form.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();

  const thisCurrentForm = event.currentTarget;

  const { query } = thisCurrentForm.elements;

  const normalizeInputValue = query.value.trim().toLowerCase();

  if (!normalizeInputValue) {
    return;
  }

  const preLoader = renderFunc.preLoader();
  refsEl.list.innerHTML = preLoader;

  makeFetchRequest(normalizeInputValue)
    .then(data => {
      if (!data.hits.length) {
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
      //   const preLoader = renderFunc.preLoader();
      //   refsEl.list.innerHTML = preLoader;

      const markup = renderFunc.makeMarkupItemS(data.hits);
      refsEl.list.innerHTML = markup;
    })
    .catch(console.log)
    .finally(() => {
      thisCurrentForm.reset();

      lightbox.refresh();
    });
}
