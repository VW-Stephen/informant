<template>
  <div class="container-fluid">
    <!-- Header -->
        <Header/>

    <div class="row">
      <!-- Left column -->
      <div class="col-6">
        <Dossier/>
        <InformantPanel :informants="this.getInformants"/>
      </div>

      <!-- Right column -->
      <div class="col-6">
        <InformNet/>
      </div>
    </div>

    <!-- Probably don't deploy with this enabled, maybe find a better way -->
    <!-- <DebugPanel/> -->

    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import PortalVue from 'portal-vue'

import Dossier from '@/components/Dossier'
import Header from '@/components/Header'
import InformantPanel from '@/components/Informants/InformantPanel'
import InformNet from '@/components/Messaging/InformNet'
import { TICK_TIME } from '@/constants'
import DebugPanel from '@/components/DebugPanel'

Vue.use(PortalVue)

export default {
  components: {
    DebugPanel,
    Dossier,
    Header,
    InformantPanel,
    InformNet
  },
  computed: {
    ...mapGetters(['getPlayer', 'getInformants'])
  },
  data () {
    return {
      intervalId: 0
    }
  },
  mounted () {
    this.$store.commit('loadLocalStorage')

    this.intervalId = setInterval(function () {
      this.$store.commit('tick')
    }.bind(this), TICK_TIME)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
@import 'constants.scss';

body {
  background-color: $in-background-color;
  color: $in-font-color;
  font-family: 'Roboto Mono', sans-serif;
}

// Card styles
.card {
  border-color: $in-card-border-color;
  margin-bottom: 2rem;

  .card-body {
    background: $in-card-background-color;
  }

  .card-header {
    background: $in-card-header-color;
    border-bottom: 1px solid $in-card-border-color;
  }

  .card-footer {
    background: $in-card-header-color;
  }
}

// Buttons
.btn {
  border: 0;
  font-size: 0.75rem;
}
.btn:focus,
.btn-danger:focus {
  box-shadow: none;
}
.btn.btn-danger {
  background: $in-font-color-red;
  color: #222;
}
.btn.btn-danger:not(.disabled):not(:disabled):active {
  background: $in-font-color-red-dark;
}

// Colors
.text-blue {
  color: $in-font-color-blue;
}
.text-green {
  color: $in-font-color-green;
}
.text-red {
  color: $in-font-color-red;
}
.text-yellow {
  color: $in-font-color-yellow;
}
</style>
