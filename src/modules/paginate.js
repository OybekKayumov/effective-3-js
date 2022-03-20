const showPagination = (middle, active) => {
  if (middle > 6) {
    const span = document.createElement('span');
    span.innerText = '...';
    document.querySelector('.pagination').insertBefore(span, document.querySelector('.next'));
  }

  for (let i = middle -5; i <= middle+5; i+= 1) {
    const anchor = document.createElement('a');
    anchor.href =  `/?page=${i}`;
    anchor.innerText = i;
    anchor.className = 'page flex flex-jcc flex-aic';

    if (i === active) {
      anchor.classList.add('active');
    }

    document.querySelector('.pagination')
            .insertBefore(anchor, document.querySelector('.next'));
  }

  if (middle < 51) {
    const span = document.createElement('span');
    span.innerText = '...';
    document.querySelector('.pagination').insertBefore(span, document.querySelector('.next'));
  }
};

const setupPagination = () => {
  const currentPage = window.location.search.split('page=')[1];
  if (currentPage === undefined) {
    showPagination(6, 1);
  } else if (+currentPage <= 6) {
    showPagination(6, +currentPage);
  } else if (+currentPage <= 51) {
    showPagination(+currentPage, +currentPage);
  } else if (+currentPage > 51) {
    if (+currentPage <= 56) {
      showPagination(51, +currentPage);  
    } else {
      showPagination(51, 56);
    }
  }

  document.querySelector('next').addEventListener('click', () => {
    if (+currentPage >= 56) {
      return;
    }

    window.location = `/?page=${currentPage ? +currentPage + 1 : 2}`;
  })
};

export default setupPagination;