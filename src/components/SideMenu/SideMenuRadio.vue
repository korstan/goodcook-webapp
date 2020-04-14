<template>
  <v-radio :label="label"></v-radio>
</template>

<script>
export default {
  name: 'SideMenuRadio',
  props: {
    label: {
      type: [String],
      default: '',
    }
  }
}
</script>

<style>

</style>