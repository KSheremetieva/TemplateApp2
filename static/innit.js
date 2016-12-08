import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'lodash';
import Mn from 'backbone.marionette';
import MyView from './view/mnView.js';


console.log($);
console.log(Backbone);
console.log('_', _.clone);
console.log(Mn);

let myView = new MyView();
myView.render();