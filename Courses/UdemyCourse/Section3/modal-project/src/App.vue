<template>
  <h1>{{ title }} </h1>
  <p> Welcome...</p>
  <div>
    <modal :header="header" :text="text" theme="sale" v-if="showModal" @click="toggleModel"></modal>
  </div>
  <button @click="toggleModel">Open model </button>
</template>

<script>
import Modal from './components/Modal.vue';


export default {
  name: 'App',
  components: {Modal},

  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your chance to win a free ticket to the concert!',
      showModal: false
    }
  },
  methods: {
    toggleModel() {
      this.showModal = !this.showModal;
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
