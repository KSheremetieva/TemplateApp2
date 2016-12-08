import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'lodash';
import Mn from 'backbone.marionette';

const MyView = Mn.View.extend({
	el: 'body',
	template: _.template('hello')
})

export default MyView;