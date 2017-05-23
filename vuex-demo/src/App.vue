<template>
  <div id="app">
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能增加" @click="oddClick">
    <input type="button" value="点击异步加载" @click="asyncClick">
    <input type="button" value="能除3增加" @click="test">
    <span>现在的数字为{{count}}</span>
    {{isOdd}}
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed:mapGetters([
            'count','isOdd'
        ]),//从getter.js获取数据属性
        methods:mapActions([
            'increment',
            'decrement',
            'oddClick',
            'asyncClick',
            'test'
        ])//提交function到action.js
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
