<template>
  <div class="card informant-card">
    <div class="card-body">
      <div class="row">
        <div class="col-8">
          {{ informant.name }} (+{{ informant.information }} info/sec, {{ informant.count }} exploited)<br/>
          <span class="description">{{ informant.description }}</span>
        </div>
        <div class="col-4">
          <button @click="buy" class="btn float-right">
            Buy ({{ informant.price}})
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// TODO: PRICE FUNCTIONS
export default {
  methods: {
    buy () {
      this.$store.commit('purchaseInformant', {
        name: this.informant.name
      })
    }
  },
  props: ['informant']
}
</script>

<style lang="scss">
.informant-card {
  margin-bottom: 1rem;

  .description {
    font-size: 0.75rem;
    font-style: italic;
  }
}
</style>
