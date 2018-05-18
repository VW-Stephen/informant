<template>
  <div class="card">
    <div class="card-header">
      Informants
    </div>
    <div class="card-body">
      <InformantCard
        v-for="informant in filteredInformants(informants)"
        :informant="informant"
        :key="informant.name"
      />
    </div>
  </div>
</template>

<script>
import InformantCard from '@/components/Informants/InformantCard'

export default {
  components: {
    InformantCard
  },
  methods: {
    filteredInformants (informants) {
      let ret = []
      for (let i = 0; i < informants.length; i++) {
        if (informants[i].count > 0) {
          ret.push(informants[i])
        } else {
          ret.push(informants[i])
          break
        }
      }
      return ret
    }
  },
  props: ['informants']
}
</script>
