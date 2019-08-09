<template>
  <button
    :class="{ btn: true, 'btn-suc': btnIsSuc, 'btn-fail': btnIsFail }"
    @click="handler"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    btnText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'suc'
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      btnIsSuc: this.type === 'suc',
      btnIsFail: this.type === 'fail'
    }
  },
  created() {
    this.$et.emit('createBtn', { a: 123 }, 9527)
  },
  methods: {
    handler(e) {
      this.callback && this.callback(e)
    }
  }
}
</script>

<style scope lang="less">
@suc: #1aad19;
@fail: #d81e06;
.btn {
  font-size: 32 / @rem;
  padding: 10 / @rem 130 / @rem;
  border-radius: 8 / @rem;
  background: #fff;
  margin-top: auto;
  text-decoration: none;
  border: 2 / @rem solid #aaa;
  &-suc {
    color: @suc;
    border-color: @suc;
  }
  &-fail {
    color: @fail;
    border-color: @fail;
  }
}
</style>
