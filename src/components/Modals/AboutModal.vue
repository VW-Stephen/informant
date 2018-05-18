<template>
  <BaseModal modalId="aboutModal" title="About Informant" :large="true">
    <div class="row">
      <div class="col-12">
        A poorly written game by <span class="text-yellow">/u/SheepSlapper</span>.
      </div>
      <div class="col-12">
        <span class="text-red">Comrades</span> from <span class="text-blue">/u/incremental_games</span>:
        <ul>
          <li><em>Your name here</em></li>
        </ul>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/Modals/BaseModal'

export default {
  components: {
    BaseModal
  }
}
</script>
