<template>
  <v-scroll-y-reverse-transition>
    <v-container v-if="!isHide" class="home">
      <Logo />
      <SearchBar width="50%" @submit="() => (isHide = true)" />
    </v-container>
  </v-scroll-y-reverse-transition>
</template>

<script>
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Home',
  components: { Logo, SearchBar },
  data() {
    return {
      isHide: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
