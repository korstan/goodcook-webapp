<template>
  <div @click="() => this.$emit('click')" class="chooseButton">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "ChooseButton",
};
</script>

<style lang="scss" scoped>
.chooseButton {
  background: $primary-color;
  border-radius: $default-border-radius;
  width: 300px;
  height: 300px;
  display: flex;
  padding: 10px;
  align-self: center;
  &:hover {

  }
}
</style>
