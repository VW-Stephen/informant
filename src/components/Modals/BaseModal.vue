<template>
  <div class="modal fade" role="dialog" :id="modalId">
    <div :class="{'modal-dialog': true, 'modal-lg': large}" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-html="title"></h5>
          <button class="close" data-dismiss="modal">&times;</button>
        </div>

        <div class="modal-body">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['large', 'modalId', 'title']
}
</script>

<style lang="scss">
@import '../../constants.scss';

.modal-content {
  border-color: $in-card-border-color;
  background: $in-card-background-color;

  .col-12:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}
.modal-header {
  background: $in-card-header-color;

  button.close {
    color: $in-font-color;
    text-shadow: none;
    opacity: 1;
  }
}
</style>
