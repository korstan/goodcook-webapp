<template>
  <div class="home">
    <Logo />
    <SearchBar width="50%" />
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Home',
  components: { Logo, SearchBar },
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
