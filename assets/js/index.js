let section1 = document.querySelector('.number-1');
let hasEntered1 = false;

window.addEventListener('scroll', (e) => {
  let shouldAnimate = (window.scrollY + window.innerHeight) >= section1.offsetTop;

  if (shouldAnimate && !hasEntered1) {
    hasEntered1 = true;

    $('.number-1 .value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }
});

$(function () {
  let header = $(".header-top");
  let contact = $(".header-contact");
  let image = $(".rabiloo-logo");
  let openMenu = $(".menu-open");
  let src1 = 'assets/img/LOGO.png';
  let src2 = 'assets/img/LOGO2.png';
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 200) {

      header.removeClass('header-top').addClass("header-top-alt");
      contact.addClass('button-v1');
      image.attr("src", src2);
      openMenu.attr("src", "/assets/img/menu-black.png");
    } else {
      header.removeClass("header-top-alt").addClass('header-top');
      contact.removeClass('button-v1');
      image.attr("src", src1);
      openMenu.attr("src", "/assets/img/menu-white.png");
    }
  });
});

let section2 = document.querySelector('.number-2');
let hasEntered2 = false;

window.addEventListener('scroll', (e) => {
  let shouldAnimate = (window.scrollY + window.innerHeight) >= section2.offsetTop;

  if (shouldAnimate && !hasEntered2) {
    hasEntered2 = true;

    $('.number-2 .value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }
});

let section3 = document.querySelector('.number-3');
let hasEntered3 = false;

window.addEventListener('scroll', (e) => {
  let shouldAnimate = (window.scrollY + window.innerHeight) >= section3.offsetTop;

  if (shouldAnimate && !hasEntered3) {
    hasEntered3 = true;

    $('.number-3 .value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }
});

$(document).ready(function () {
  $("#carouselExampleIndicators").carousel({ interval: 1000 * 4, pause: "hover" });
});


$(document).ready(function () {
  const selectList = $('#selectList');
  const select = ['retail', 'healthcare', 'education'];
  const imgUrls = ['/../assets/img/Rectangle2878.png', '/../assets/img/Rectangle2856.png', '/../assets/img/Rectangle2870.png']
  let index = 0;
  const intervalTime = 1000 * 4;
  let interval;

  function changeMolecule() {
    index = (index + 1) % select.length;
    const selectedOption = selectList.find(`li[value='${select[index]}']`);
    selectedOption.addClass('select-box-selected').siblings().removeClass('select-box-selected');
    $('.content-bg').css("background-image", `url(${imgUrls[index]})`);
  }

  interval = setInterval(changeMolecule, intervalTime);

  selectList.on('click', 'li', function () {
    clearInterval(interval);
    $(this).addClass('select-box-selected').siblings().removeClass('select-box-selected');
    index = $(this).index();
    $('.content-bg').css("background-image", `url(${imgUrls[index]})`);
    interval = setInterval(changeMolecule, intervalTime);

  });
});
