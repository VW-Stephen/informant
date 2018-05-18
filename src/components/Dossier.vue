<template>
  <div class="card">
    <div class="card-header">
      Dossier
    </div>

    <div class="card-body">
      <div class="row">
        <!-- Info column -->
        <div class="col-6">
          <table class="table">
            <tbody>
              <tr>
                <td class="info-key">Information</td>
                <td class="info-value">{{ getInformation }}</td>
              </tr>
              <tr>
                <td class="info-key">Level</td>
                <td class="info-value">{{ getPlayer.level }}</td>
              </tr>
              <tr>
                <td class="info-key">XP</td>
                <td class="info-value">{{ getPlayer.experience }}</td>
              </tr>
              <tr v-if="getPlayer.generation > 1">
                <td class="info-key">Generation</td>
                <td class="info-value">{{ getPlayer.generation }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Quest column -->
        <div class="col-6">
          <div class="text-yellow">Quest: {{ getQuest.name }}</div>
          <span class="quest-description">
            {{ getQuest.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getInformation', 'getPlayer', 'getQuest'])
  }
}
</script>

<style lang="scss">
.table tbody tr td {
  border: 0;
  padding: 0;
}
.info-key {
  width: 50%;
}
.info-value {
  text-align: left;
}
.quest-description {
  font-size: 0.875rem;
}
</style>
