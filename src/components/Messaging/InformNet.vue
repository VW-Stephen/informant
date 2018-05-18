<template>
  <div class="card">
    <div class="card-header">
      InformNet v0.1.0
      <span v-if="getUnreadMessageCount != 0" class="unread-counter">
        ({{ getUnreadMessageCount }} Unread)
      </span>
    </div>
    <div class="card-body">
      <Message
        v-for="message in getMessages"
        :key="message.title"
        :message="message"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from '@/components/Messaging/Message'

export default {
  components: {
    Message
  },
  computed: {
    ...mapGetters(['getMessages', 'getUnreadMessageCount'])
  }
}
</script>

<style lang="scss">
.unread-counter {
  font-weight: bold;
}
</style>
