<template>
  <nav class="navbar">
    <h1 class="navbar-brand">Informant</h1>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" data-toggle="modal" data-target="#aboutModal">About</a>
      </li>
      <li class="nav-item">
        <a href="#" data-toggle="modal" data-target="#resetModal">Reset</a>
      </li>
    </ul>
    <portal to="modals">
      <AboutModal/>
      <ResetModal/>
    </portal>
  </nav>
</template>

<script>
import AboutModal from '@/components/Modals/AboutModal'
import ResetModal from '@/components/Modals/ResetModal'

export default {
  components: {
    AboutModal,
    ResetModal
  },
  data () {
    return {
      showReset: false
    }
  }
}
</script>

<style lang="scss">
@import '../constants.scss';

.header {
  margin: 1rem 0;

  .header-brand {
    display: inline-block;
  }
}
.nav-item a {
  color: $in-font-color;
}
.navbar-nav {
  flex-direction: row;

  li {
    margin-left: 3rem;
  }
}
</style>
