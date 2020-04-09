<template>
  <v-card tile class="side-menu" color="#ffe27a" height="700">
    <div class="d-flex flex-column align-center">
      <SideMenuSwitch label="Вот такая штука" />
    </div>
  </v-card>
</template>

<script>
import SideMenuSwitch from '@/components/SideMenu/SideMenuSwitch';

export default {
  name: 'SlideMenu',
  components: { SideMenuSwitch }
};
</script>

<style lang="scss" scoped>
.side-menu {
  border-radius: 100px;
}
</style>
