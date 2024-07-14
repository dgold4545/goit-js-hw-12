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

export function preLoader() {
  return `<ul class="pre-loader"><li class="loader"></li></ul>`;
}
