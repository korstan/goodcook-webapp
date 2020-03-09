<template>
  <div class="frame2">
    <div class="row row1">
      <Logo class="col col1" height="150" />
      <SearchBar class="col col2" />
    </div>

    <div class="row row2">
      <div class="col col1"><BlockWrapper height="550px" /></div>
      <div class="col col2">
        <BlockWrapper height="300px" />
        <BlockWrapper height="300px" />
        <BlockWrapper height="300px" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';
import BlockWrapper from '@/components/BlockWrapper';

export default {
  name: 'Frame2Page',
  components: {
    Logo,
    SearchBar,
    BlockWrapper,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.row1 {
  align-items: center;
  margin-bottom: 20px;
}
.col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
}
.col > * {
  margin-bottom: 25px;
}
.col1 {
  flex: 30%;
}
.col2 {
  flex: 70%;
}
</style>
