<template>
  <div class="home">
    <Logo height="150" />
    <SearchBar width="75%" />
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

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
