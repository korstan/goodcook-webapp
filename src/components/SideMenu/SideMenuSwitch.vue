<template>
  <div class="switch-group d-flex align-center justify-space-between">
    <label>
      {{ label }}
    </label>
    <v-switch color="grey darken-1"></v-switch>
  </div>
</template>

<script>
export default {
  name: 'SideMenuSwitch',
  props: {
    label: {
      type: [String],
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.switch-group {
  width: 100%;
}
</style>
