<template>
  <div class="switch-group d-flex align-center justify-space-around">
    <v-switch></v-switch>
    <label>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'SideMenuSwitch',
  props: {
    label: {
      type: [String],
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.switch-group {
  width: 100%;
}
</style>
