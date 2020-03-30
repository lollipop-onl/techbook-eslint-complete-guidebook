import Vue from 'vue';
import App from './App.vue';
import '../styles/main.scss';
import config from '../config.json';

new Vue({
  el: '#root',
  render: (h) => h(App),
});
