<template>
  <v-app-bar app>
    <v-toolbar-title><Logo height="70"/></v-toolbar-title>
  </v-app-bar>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  name: 'Header',
  components: { Logo },
};
</script>

<style></style>
