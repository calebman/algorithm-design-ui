<template>
  <section>
    <tooltip-button type="primary" @click="sendMessage" :disabled="sending">
      <count-down
        v-if="sending"
        :target="countDownTarget"
        :format="format"
        @on-end="handleTimeout"
      />
      <span v-else>{{ reSend | filterSendText }}</span>
    </tooltip-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reSend: false,
      sending: false,
      countDownTarget: null
    }
  },
  filters: {
    filterSendText(value) {
      return value ? '点此重新发送' : '点此发送验证短信'
    }
  },
  methods: {
    sendMessage() {
      this.sending = true
      this.countDownTarget = new Date().getTime() + 10 * 1000
    },
    format(time) {
      return `${parseInt(time / 1000)}秒后可重新发送`
    },
    handleTimeout() {
      this.reSend = true
      this.sending = false
    }
  }
}
</script>