<template>
  <v-sheet tile class="side-menu wrap-box" color="#ffe27a" height="700">
    <div class="d-flex flex-column align-center">
      <div class="display-1 mb-3">Меню</div>
      <slot> </slot>
    </div>
  </v-sheet>
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
  padding: 32px 45px;
}
</style>
