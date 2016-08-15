import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

console.log(ngMaterial);

let navbarModule = angular.module('navbar', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])

.component('navbar', navbarComponent)
  
.name;

export default navbarModule;
