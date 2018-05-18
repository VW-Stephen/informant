<template>
  <div class="card card-message">
    <div class="card-header" @click="toggleMessage">
      <span :class="{'oi': true, 'oi-envelope-open': read, 'oi-envelope-closed': !read}"></span>
      <span v-html="message.title"></span>

      <span class="float-right">+</span>
    </div>
    <div class="card-body" v-if="showMessage" v-html="message.message">
    </div>
  </div>
</template>

<script>
import { MESSAGE_STATUS } from '@/constants'

export default {
  computed: {
    read () {
      return this.message.status === MESSAGE_STATUS.READ
    }
  },
  data () {
    return {
      showMessage: false
    }
  },
  methods: {
    toggleMessage () {
      this.$store.commit('markMessageRead', {
        messageTitle: this.message.title
      })
      this.showMessage = !this.showMessage
    }
  },
  props: ['message']
}
</script>

<style lang="scss">
.card-message {
  margin-bottom: 1rem;

  .card-header {
    cursor: pointer;

    .oi {
      margin-right: 1rem;
    }
    .oi-envelope-closed {
      color: #66a666;
    }
    .oi-envelope-open {
      color: #fff;
    }
  }
}
</style>
