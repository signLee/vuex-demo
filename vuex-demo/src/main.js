import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
        store,//挂载store下的index.js
        el: '#app',
        render: h => h(App)
})
