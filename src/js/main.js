import { menuHandler } from './burger';
import { showAdvantages, slidePopularItems } from './home';
import { closePopup, showPopup } from './popup';
import {
  closeMobileFilter,
  materialsFilter,
  showMobileFilter,
  thicknessFilter,
} from './catalog';
import { toggleDeliveryButtons } from './delivery';
import { toggleAboutButtons, toggleOurProducts } from './about';

menuHandler();

switch (window.location.pathname) {
  case '/':
    showAdvantages();
    showPopup();
    closePopup();
    slidePopularItems();

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
    showPopup();
    closePopup();
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
  default:
    break;
}
