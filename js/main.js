const modifiers = {
    imgThumbnailActive:'selected'
}

 // SHOPPING CART MODAL
  const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
  const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal__open');
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
  const elLightboxToggler = document.querySelector('.img-showcase__showcase-lightbox-toggle');
  const elLightbox = document.querySelector('.lightbox');
