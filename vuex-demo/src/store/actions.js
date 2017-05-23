/**
 * Created by Administrator on 2017/5/23.
 */
import * as types from './types.js'
export default{
    increment: ({
        commit
    }) => {
    commit(types.INCREMENT);
    },
    decrement: ({
        commit
    }) => {
        commit(types.DECREMENT);
    },
    oddClick: ({
        commit,
        state
    }) => {
        if (state.mutations.count % 2 == 0) {
            commit(types.INCREMENT);
        }
    },
    asyncClick: ({
        commit
    }) => {
        new Promise((resolve) => {
            setTimeout(function() {
                commit(types.INCREMENT);
            }, 1000);
    })
    },
    test:({commit,state})=>{
        if(state.mutations.count%3==0){
            commit(types.INCREMENT);
        }
    }
}