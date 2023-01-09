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
import { showWidgets } from './widgets';

menuHandler();
showWidgets();

switch (window.location.pathname) {
  case '/':
  case '/index':
  case '/home':
    showAdvantages();
    slidePopularItems();
    handleForm('questions-form');

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
    showMobileFilter();
    closeMobileFilter();
    break;
  case '/delivery':
    toggleDeliveryButtons();
    break;
  case '/about':
    toggleAboutButtons();
    toggleOurProducts();
    break;
  case '/contacts':
    break;
  default:
    handlePopup();
    handleForm('order-form');
    break;
}
