import angular from 'angular';
import rxHttp from './rxHttp.factory';
import rx from 'rx-angular';

let rxHttpModule = angular.module('rxHttp', ['rx'])
.factory('rxHttp', rxHttp)
.name;

export default rxHttpModule;
