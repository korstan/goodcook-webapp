<template>
  <v-footer
    absolute
    color="transparent"
    class="d-flex flex-column justify-center"
  >
    <slot />
    <span>{{ new Date().getFullYear() }} — <strong>Go Cook</strong></span>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style></style>
