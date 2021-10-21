'use strict';

/*Spoilers*/

const spoilersArray = document.querySelectorAll('[data-spoilers]');
if (spoilersArray.length > 0) {
  //Получение обычных спойлеров(также через Array переводим коллекцию в массив)
  const spoilersRegular = Array.from(spoilersArray).filter(function(item, index, self) {
    return !item.dataset.spoilers.split(",")[0];
  });
  //Инициализыция обычных спойлеров
  if (spoilersRegular.length > 0) {
    initSpoilers(spoilersRegular);
  }

  //Получение спойлеров с медиа запросами
  const spoilersMedia = Array.from(spoilersArray).filter(function(item, index, self) {
    return item.dataset.spoilers.split(",")[0];
  });

  //Инициализация спойлеров с медиа запросами 
  if (spoilersMedia.length > 0) {
    const breakpointsArray = [];
    spoilersMedia.forEach(item => {
      const params = item.dataset.spoilers;
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });

    //Получаем уникальные брейкпоинты 
    let mediaQueries = breakpointsArray.map(function(item) {
      return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
    });
    mediaQueries = mediaQueries.filter(function(item, index, self) {
      return self.indexOf(item) === index;
    });
  }

  //Работаем с каждым брейкпоинтом 
  
}





/*SlideToggle*/
