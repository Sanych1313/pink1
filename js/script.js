//Назначаем переменные для пагинации прайса

var pricePaginationItemFirst = document.querySelector('.price__pagination-item--first');

var pricePaginationItemSecond = document.querySelector('.price__pagination-item--second');

var pricePaginationItemThird = document.querySelector('.price__pagination-item--third');

var priceTable = document.querySelector('.price__table');

//Функции для перемещения прайса при клике

pricePaginationItemFirst.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceTable.classList.add('price__table--first');
  priceTable.classList.remove('price__table--third');
});

pricePaginationItemSecond.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceTable.classList.remove('price__table--first');
  priceTable.classList.remove('price__table--third');
});

pricePaginationItemThird.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceTable.classList.add('price__table--third');
  priceTable.classList.remove('price__table--first');
});

//Функции для изменения значка пагинации при клике

pricePaginationItemFirst.addEventListener('click', function(evt) {
  evt.preventDefault();
  pricePaginationItemFirst.classList.add('price__pagination-item--active');
  pricePaginationItemSecond.classList.remove('price__pagination-item--active');
  pricePaginationItemThird.classList.remove('price__pagination-item--active');
});

pricePaginationItemSecond.addEventListener('click', function(evt) {
  evt.preventDefault();
  pricePaginationItemSecond.classList.add('price__pagination-item--active');
  pricePaginationItemFirst.classList.remove('price__pagination-item--active');
  pricePaginationItemThird.classList.remove('price__pagination-item--active');
});

pricePaginationItemThird.addEventListener('click', function(evt) {
  evt.preventDefault();
  pricePaginationItemThird.classList.add('price__pagination-item--active');
  pricePaginationItemFirst.classList.remove('price__pagination-item--active');
  pricePaginationItemSecond.classList.remove('price__pagination-item--active');
});

