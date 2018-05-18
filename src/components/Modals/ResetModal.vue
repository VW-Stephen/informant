<template>
  <BaseModal modalId="resetModal" :title="getTitle()">
    <div class="row">
      <div class="col-12">
        Are you sure you want to completely reset the game? I'm too lazy to program
        this to make it reversable...
      </div>
      <div class="col-12">
        <button class="btn btn-danger reset-btn" @click="reset" data-dismiss="modal">
          I like the game so much I'm playing it again
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/Modals/BaseModal'
import { COMRADE } from '@/constants'

export default {
  components: {
    BaseModal
  },
  methods: {
    getTitle () {
      return `Starting over, ${COMRADE}?`
    },
    reset () {
      this.$store.commit('reset')
    }
  }
}
</script>

<style lang="scss">
.reset-btn {
  display: block;
  margin: 0 auto;
}
</style>
