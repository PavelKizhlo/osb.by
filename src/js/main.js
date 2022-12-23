import { menuHandler } from './burger';
import { showAdvantages, slidePopularItems } from './home';
import { handlePopup } from './popup';
import {
  closeMobileFilter,
  materialsFilter,
  showMobileFilter,
  thicknessFilter,
} from './catalog';
import { toggleDeliveryButtons } from './delivery';
import { toggleAboutButtons, toggleOurProducts } from './about';
import { handleForm } from './forms';

menuHandler();

switch (window.location.pathname) {
  case '/':
    showAdvantages();
    handlePopup();
    slidePopularItems();
    handleForm('questions-form');
    handleForm('order-form');

    $(document).ready(function () {
      $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
      });
    });

    break;
  case '/catalog':
    materialsFilter();
    thicknessFilter();
    handlePopup();
    showMobileFilter();
    closeMobileFilter();
    handleForm('order-form');
    break;
  case '/delivery':
    toggleDeliveryButtons();
    break;
  case '/about':
    toggleAboutButtons();
    toggleOurProducts();
    break;
  default:
    break;
}
