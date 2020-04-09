<template>
  <div class="choseButton">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "ChoseButton",
};
</script>

<style lang="scss" scoped>
.choseButton {
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
