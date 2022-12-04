$(function () {

// К О Н Т А Н Т Ы =============================================================

    const minimumSliderHeight = 500;                                            // минимальная высота окна слайдера
    const slideHeight = 780;                                                    // высота фотографии слайда
    const slideWidth = 1920;                                                    // ширина фотографии слайда

// П Е Р Е М Е Н Н Ы Е =========================================================

    var slideAspectRatio = slideHeight / slideWidth;                            // пропорции фотографии слайда
    var $slider = $('#slider').children().filter('.slider_items');                                      // дочерний объект слайдера = родитель слайдов
    var delaySlide = $slider.data('delay');                                     // время смены кадров слайда
    var fadeSlide = $slider.data('fade');                                       // время смены прозрачности кадра слайда
    var $sliderItems = $($slider).children();                                   // слайды
    var windowWidth;                                                            // ширина окна браузера

// Н А Ч А Л Ь Н Ы Е  У С Т А Н О В К И ========================================

    updateWindowWidth();                                                        // актуализировать ширину окна браузера
    updatePicturesWidth();                                                      // обновить ширину фотографии слайда
    firstSlideActivated();
    var sliderStart = setInterval(nextSlideShow, delaySlide);                   // запуск таймера с функцией смены слайдов


// С О Б Ы Т И Я ===============================================================

    $slider.mouseenter(function () {                                            // курсор зашел на слайдер
        clearInterval(sliderStart);                                             // остановить таймер смены слайдов
    }).mouseleave(function () {                                                 // курсор вышел со слайдера
        sliderStart = setInterval(nextSlideShow, delaySlide);                   // запуск таймера с функцией смены слайдов
    });

    $(window).resize(function () {                                              // изменились размеры окна браузера
        updateWindowWidth();                                                    // актуализировать ширину окна браузера
    });


// Ф У Н К Ц И И ===============================================================

    // функция активации первого слайда
    function firstSlideActivated() {
        $sliderItems.first().addClass('active');
    }

    // функция смены видимости слайдов
    function nextSlideShow() {
        var nomActiveSlide = $sliderItems.filter('.active').index();            // получить номер текущего "активного" слайда
        $sliderItems.eq(nomActiveSlide).fadeOut(fadeSlide, 'linear');           // погасить - увеличить прозрачность текущего слайда
        $sliderItems.eq(nomActiveSlide).removeClass('active');                  // снять класс "активный" с текущего кадра
        nomActiveSlide++;                                                       // увеличить номер "активного" слайда
        if (nomActiveSlide == $sliderItems.length) {                            // если номер "активного" слайда достиг последнего в слайдере
            nomActiveSlide = 0;                                                 // новый "активный" слайд - первый
        }
        $sliderItems.eq(nomActiveSlide).fadeIn(fadeSlide, 'linear');            // проявить - уменшить прозрачность нового слайда
        $sliderItems.eq(nomActiveSlide).addClass('active');                     // присвоить новому слайду класс "активный"
    }

    // функция акуализации свойств слайдера при изменении размеров окна браузера
    function updateWindowWidth() {
        windowWidth = $(window).width();                                        // обновить значение переменной хранящей ширину окна браузера
        updateSliderHeight();                                                   // обновить высоту окна слайдера
        updatePicturesWidth();                                                  // обновить ширину окна фотографии слайда
    }

    // функция обновления высоты окна слайдера
    function updateSliderHeight() {
        var sliderHeight = windowWidth * slideAspectRatio;                      // расчет высоты слайдера
        if (sliderHeight < minimumSliderHeight) {                               // если окно меньше минимальной высоты
            sliderHeight = minimumSliderHeight;                                 // актуальная высота = константе минимальной высоты
        }
        $slider.outerHeight(sliderHeight);                                      // обновление высоты слайдера
    }

    // обновление высоты фото слайдов
    function updatePicturesWidth() {
        $sliderItems.children('picture').width($slider.outerHeight() / slideAspectRatio);
    }
});