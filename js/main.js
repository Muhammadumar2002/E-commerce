const modifiers = {
  imgThumbnailActive:'selected',
  siteHeaderCartModalOpen:'site-header__cart-modal__open',
  lightboxOpen:'lightbox--open'
};

// SHOPPING CART MODAL
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
  });
}


// IMAGE SHOWCASE
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img')
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');



elsImgShowcaseThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove active state from all buttons
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive );
    });

    // Add active statevto clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image scr accordingly
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina}
    2x`;
  });
});

// LIGHTBOX
const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightClose = document.querySelector('.js-lightbox-close');

if(elLightboxToggler){
  elLightboxToggler.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
}

if(elLightClose){
  elLightClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
}


// Thumbnail click
const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');


elsImgLightboxThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove active state from all buttons
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive );
    });

    // Add active statevto clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image scr accordingly
    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina}
    2x`;
  });
});

// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');


if(elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function(){
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.selected');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if(elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0];
    }else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }
    elNextActiveItem .classList.add(modifiers.imgThumbnailActive);
    // Update active image scr accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x,
    ${elNextActiveItem.children[0].dataset.imgShowcaseRetina}
    2x`;
  });
}

if(elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function(){
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.selected');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if(elActiveItem.previousElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length -1];
    }else {
      elNextActiveItem = elActiveItem.previousElementSibling;
    }
    elNextActiveItem .classList.add(modifiers.imgThumbnailActive);
    // Update active image scr accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x,
    ${elNextActiveItem.children[0].dataset.imgShowcaseRetina}
    2x`;
  });
}

// product-info__counter-quantity-wrapper
const elquantityButtonMinus = document.querySelector('.js-quantity-button-minus');
const elquantityButtonPlus = document.querySelector('.js-quantity-button-plus');
const elquantitInfoButton = document.querySelector('.product-info__quantity');


elquantityButtonMinus.addEventListener('click', function(){
  elquantitInfoButton.innerHTML = +elquantitInfoButton.innerHTML -1;
});

elquantityButtonMinus.addEventListener('click', function (){
  if (elquantitInfoButton.innerHTML < 1) {
    elquantitInfoButton.innerHTML = 0;
  }
});

elquantityButtonPlus.addEventListener('click', function(){
  elquantitInfoButton.innerHTML = +elquantitInfoButton.innerHTML +1;
});