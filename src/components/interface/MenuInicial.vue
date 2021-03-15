<template>
  <div class="menu-inicial">
    <button class="btn" @click="callback()">
      <slot>
        INICIAR
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    callback: {
      type: Function,
      required: true
    }
  }

}
</script>

<style scoped>

.menu-inicial {
  padding: 5rem;
}

</style>