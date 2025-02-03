<template>
  <h1>{{ title }} </h1>
  <p> Welcome...</p>
  <teleport to=".modals" v-if="showModal">
      <modal theme="sale" @close="toggleModel">
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
        <h1> Ninja Giveaway!</h1>
        <p> Grab your ninja sword fot half price!</p>
      </modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
      <modal @close="toggleModelTwo">
        <h1> Ninja Training</h1>
        <p> Learn the art of ninjutsu</p>
      </modal>
  </teleport>

  <button @click="toggleModel">Open model one </button>
  <button @click="toggleModelTwo">Open model Two </button>

</template>

<script>

import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: {Modal},

  data() {
    return {
      title: 'My First Vue App :)',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModel() {
      this.showModal = !this.showModal;
    },
    toggleModelTwo(){
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
  #app, .modals {
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
