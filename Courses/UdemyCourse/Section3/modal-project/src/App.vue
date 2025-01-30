<template>
  <h1>{{ title }} </h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
  <Modal />
</template>

<script>
import Modal from './components/Modal.vue';


export default {
  name: 'App',
  components: {
    Modal
  },

  data() {
    return {
      title: 'My First Vue App :)'
    }
  },
  methods: {
    handleClick() {
      console.log('Hello ' + this.$refs.name.value) //accessing the refs value (any ref, so we use ref)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus() //focus on the input
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

</style>
