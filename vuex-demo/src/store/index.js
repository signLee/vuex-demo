/**
 * Created by Administrator on 2017/5/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);
export default new Vuex.Store({
    actions ,//挂载方法
    modules:{
        mutations
    }
});