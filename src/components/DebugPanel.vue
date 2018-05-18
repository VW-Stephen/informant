<template>
  <div class="row">
    <div class="col-4">
      <input type="text" v-model="information" placeholder="Add Information">
      <button @click="addInformation">Add Information</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      information: 10000
    }
  },
  methods: {
    addInformation () {
      this.$store.commit('addInformation', {
        count: parseInt(this.information)
      })
    }
  }
}
</script>
