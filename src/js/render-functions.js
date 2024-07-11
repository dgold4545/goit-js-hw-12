// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень

export function makeMarkupItem(obj) {
  const {
    comments,
    downloads,
    largeImageURL,
    likes,
    tags,
    views,
    webformatURL,
  } = obj;

  return `<li class="list__card">
  <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
      <ul>
        <li class="list__card-headers">
          <h3>Likes</h3>
          <h4>${likes}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Views</h3>
          <h4>${views}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Comments</h3>
          <h4>${comments}</h4>
        </li>
        <li class="list__card-headers">
          <h3>Downloads</h3>
          <h4>${downloads}</h4>
        </li>
      </ul>
      </li>`;
}

export function makeMarkupItemS(arr) {
  return arr.map(makeMarkupItem).join('');
}

// export function someM(arr) {
//   return arr
//     .map(
//       ({
//         comments,
//         downloads,
//         largeImageURL,
//         likes,
//         tags,
//         views,
//         webformatURL,
//       }) => `<li>
//             <picture>
//               <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" /></a>
//             </picture>
//             <ul>
//               <li>
//                 <p>Likes</p>
//                 <p>${likes}</p>
//               </li>
//               <li>
//                 <p>Views</p>
//                 <p>${views}</p>
//               </li>
//               <li>
//                 <p>Comments</p>
//                 <p>${comments}</p>
//               </li>
//               <li>
//                 <p>Downloads</p>
//                 <p>${downloads}</p>
//               </li>
//             </ul>
//           </li>
//         `
//     )
//     .join('');
// }

export function preLoader() {
  return `<ul class="pre-loader"><li class="loader"></li></ul>`;
}
