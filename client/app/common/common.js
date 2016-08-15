import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  ngAnimate,
  ngAria,
  ngMaterial,
])
  
.name;

export default commonModule;
