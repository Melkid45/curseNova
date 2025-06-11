

$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("#teach", 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone }, 0) // in from left
    .fromTo(
      ".teachers .text",
      1,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -300, ease: Linear.easeNone },
      0
    ); // in from left

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: ".teachers",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin(".teachers")
    .setTween(wipeAnimation)
    .addTo(controller);
});

$(function () {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax().fromTo(
    ".footer__wrap",
    1,
    { x: "0%" },
    { x: "-227%", ease: Linear.easeNone },
    0
  ); // in from left

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin(".footer")
    .setTween(wipeAnimation)
    .addTo(controller);
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Инициализация timeline
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".support",
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 1,
      markers: true,
      snap: {
        snapTo: [0, 0.33, 0.66, 1], // Четкие точки притягивания
        duration: { min: 0.2, max: 0.6 },
        ease: "power1.inOut",
      },
    },
  });

  // Анимация кнопок
  tl.to(".btn-1", { y: "-100%", opacity: 0, ease: "none" }, 0)
    .to(".btn-2", { scale: 1, top: 0, ease: "none" }, 0)
    .to(".btn-3", { scale: 0.8, top: "24rem", ease: "none" }, 0)

    // Первый набор изображений исчезает
    .to(".img-1", { y: "-10%", x: "-10%", opacity: 0, ease: "none" }, 0)
    .to(".img-2", { y: "-10%", x: "10%", opacity: 0, ease: "none" }, 0)
    .to(".img-3", { y: "10%", x: "-10%", opacity: 0, ease: "none" }, 0)
    .to(".img-4", { y: "10%", x: "10%", opacity: 0, ease: "none" }, 0)

    // Второй шаг (1/3 прогресса)
    .to(".btn-2", { y: "-100%", opacity: 0, ease: "none" }, 0.33)
    .to(".btn-3", { scale: 1, top: 0, ease: "none" }, 0.33)
    .to(
      ".img-5",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      0.33
    )
    .to(
      ".img-6",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      0.33
    )
    .to(
      ".img-7",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      0.33
    )
    .to(
      ".img-8",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      0.33
    )

    // Третий шаг (2/3 прогресса)
    .to(".img-5", { y: "-10%", x: "-10%", opacity: 0, ease: "none" }, 0.66)
    .to(".img-6", { y: "-10%", x: "10%", opacity: 0, ease: "none" }, 0.66)
    .to(".img-7", { y: "10%", x: "-10%", opacity: 0, ease: "none" }, 0.66)
    .to(".img-8", { y: "10%", x: "10%", opacity: 0, ease: "none" }, 0.66)

    // Четвертый шаг (3/3 прогресса)
    .to(
      ".img-9",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      1
    )
    .to(
      ".img-10",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      1
    )
    .to(
      ".img-11",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      1
    )
    .to(
      ".img-12",
      { y: "0%", x: "0%", opacity: 1, ease: "none", display: "block" },
      1
    );

  // Обновление индикаторов прогресса
});

document.addEventListener("DOMContentLoaded", () => {
  // Регистрируем плагин ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Настраиваем анимацию для линии стрелки
  const arrowLine = document.querySelector(".arrow-line");
  const arrowHead = document.querySelector(".arrow-head");

  // Получаем общую длину пути
  const lineLength = arrowLine.getTotalLength();
  const headLength = arrowHead.getTotalLength();

  // Устанавливаем начальные стили
  arrowLine.style.strokeDasharray = lineLength;
  arrowLine.style.strokeDashoffset = lineLength;

  arrowHead.style.strokeDasharray = headLength;
  arrowHead.style.strokeDashoffset = headLength;
  arrowHead.style.opacity = 0;

  // Создаем анимацию
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".price",
      start: "top top", // Анимация начнется когда верх контейнера будет на 80% от верха viewport
      end: "top 20%", // Закончится когда верх контейнера будет на 20% от верха viewport
      scrub: 1, // Плавное следование за скроллом
      markers: false, // Для отладки (можно убрать)
    },
  });

  // Анимация прорисовки линии
  tl.to(arrowLine, {
    strokeDashoffset: 0,
    duration: 2,
  })
    // Анимация появления стрелки (с небольшой задержкой)
    .to(
      arrowHead,
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.5,
      },
      "-=0.5"
    ); // Начинается на 0.5 секунды раньше окончания предыдущей анимации
});

//Video

$(function () {
  // Инициализация контроллера ScrollMagic
  var controller = new ScrollMagic.Controller();

  // ===== Часть с анимацией элементов =====
  var wipeAnimation = new TimelineMax()
    .fromTo(
      "#star-white",
      1,
      { opacity: 1 },
      { opacity: 0, ease: Linear.easeNone },
      0
    )
    .fromTo(
      ".learning__text",
      1,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      1
    )
    .fromTo(
      ".learning__try",
      1,
      { opacity: 0 },
      { opacity: 1, ease: Linear.easeNone },
      1
    );

  // Сцена для анимации элементов
  new ScrollMagic.Scene({
    triggerElement: ".learning",
    triggerHook: "onLeave",
    duration: "300%",
  })
    .setPin(".learning")
    .setTween(wipeAnimation)
    .addTo(controller);

  // ===== Часть с видео =====
  const video = document.getElementById("scroll-video");

  // Функция инициализации анимации видео
  function initVideoScrollAnimation() {
    // Убедимся, что видео готово
    if (isNaN(video.duration) || video.duration === 0) {
      console.error("Видео не загрузило длительность!");
      return;
    }

    // Создаём сцену для видео
    new ScrollMagic.Scene({
      triggerElement: ".learning", // Убедитесь, что у вас есть этот элемент
      duration: "300%",
      triggerHook: 0,
    })
      .on("progress", function (e) {
        video.currentTime = video.duration * e.progress;
      })
      .addTo(controller)
      // .addIndicators({ name: "Video Scroll" });
  }

  // Инициализация анимации видео
  if (video) {
    if (video.readyState > 0) {
      // Если видео уже загружено
      initVideoScrollAnimation();
    } else {
      // Ждём загрузки метаданных видео
      video.addEventListener("loadedmetadata", initVideoScrollAnimation);
      // На всякий случай, если событие не сработало
      setTimeout(initVideoScrollAnimation, 1000);
    }
  }
});







document.addEventListener("DOMContentLoaded", function() {
    const videoSection = document.querySelector('.parent');
    const video = document.getElementById('scroll-child');
    let videoWasPlayed = false; // Флаг для отслеживания состояния видео
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight && 
        rect.bottom >= 0
      );
    }
    
    function playVideoOnce() {
      if (!videoWasPlayed && video.paused) {
        video.currentTime = 0;
        video.play()
          .then(() => {
            videoWasPlayed = true;
            console.log('Video started playing');
          })
          .catch(error => {
            console.error('Video play error:', error);
          });
        
        video.addEventListener('ended', function() {
          video.pause();
        }, { once: true });
      }
    }
    
    // Проверка при загрузке
    if (isElementInViewport(videoSection)) {
      setTimeout(playVideoOnce, 300);
    }
    
    // Обработчик скролла с троттлингом
    let isScrolling;
    window.addEventListener('scroll', function() {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function() {
        if (isElementInViewport(videoSection)) {
          playVideoOnce();
        }
      }, 100);
    }, { passive: true });
    
    // Дополнительная проверка после полной загрузки
    window.addEventListener('load', function() {
      if (isElementInViewport(videoSection)) {
        setTimeout(playVideoOnce, 500);
      }
    });
    
    // Ручной запуск по клику
    videoSection.addEventListener('click', function() {
      if (video.paused) {
        video.currentTime = 0;
        video.play();
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
  // Инициализация контроллера ScrollMagic
  const controller = new ScrollMagic.Controller();

  // Фиксируем секцию на время прокрутки
  const platformScene = new ScrollMagic.Scene({
    triggerElement: '.platform',
    triggerHook: 0,
    duration: '200%' // На сколько пикселей закреплять
  })
  .setPin('.platform')
  .addTo(controller);

  // Анимация изменения цвета текста (по буквам)
  const textElements = document.querySelectorAll('.platform p');
  
  textElements.forEach((p) => {
    // Разбиваем текст на буквы (для GSAP)
    const text = p.textContent;
    p.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.color = 'gray'; // Начальный цвет
      p.appendChild(span);
    }
    gsap.fromTo(textElements, 
      {y: 100},
      {
        y: -200,
        scrollTrigger: {
          trigger: '.platform',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true // Плавная анимация при скролле
        }
      }
    )
    // Анимация изменения цвета
    gsap.to(p.querySelectorAll('span'), 
    {
      color: 'white',
      stagger: 0.05, // Задержка между буквами
      scrollTrigger: {
        trigger: p,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true // Плавная анимация при скролле
      }
    });
  });

  // Появление стакана и зефирок с opacity: 0 → 1
  const glass = document.querySelector('.glass');
  const marshmallows = [
    document.querySelector('.marshmaelow-one'),
    document.querySelector('.marshmaelow-two'),
    document.querySelector('.marshmaelow-three')
  ];

  gsap.fromTo(glass, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0,
      scrollTrigger: {
        trigger: '.platform',
        start: 'bottom bottom',
        end: 'bottom 30%',
        scrub: true
      }
    }
  );

  // Поочередное появление зефирок
  marshmallows.forEach((marsh, index) => {
    gsap.fromTo(marsh,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: index * 0.3, // Задержка между элементами
        scrollTrigger: {
          trigger: '.platform',
          start: 'bottom bottom',
          end: 'bottom -10%',
          scrub: true
        }
      }
    );
  });
});

$('.quiz__body-card-item').on('click', function(e){
  $(this).addClass('flipped')
  $('.quiz__body-card-item').not(this).removeClass('flepped')
})






document.addEventListener('DOMContentLoaded', function() {
  // Инициализация контроллера ScrollMagic
  const controller = new ScrollMagic.Controller();

  // Фиксируем секцию на время прокрутки
  const platformScene = new ScrollMagic.Scene({
    triggerElement: '.understand',
    triggerHook: 0,
    duration: '200%' // На сколько пикселей закреплять
  })
  // .setPin('.understand')
  .addTo(controller);

  // Анимация изменения цвета текста (по буквам)
  const textElements = document.querySelectorAll('.understand p');
  
  textElements.forEach((p) => {
    // Разбиваем текст на буквы (для GSAP)
    const text = p.textContent;
    p.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.color = 'gray'; // Начальный цвет
      p.appendChild(span);
    }
    // Анимация изменения цвета
    gsap.to(p.querySelectorAll('span'), 
    {
      color: 'white',
      stagger: 0.05, // Задержка между буквами
      scrollTrigger: {
        trigger: p,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true // Плавная анимация при скролле
      }
    });
  });
});