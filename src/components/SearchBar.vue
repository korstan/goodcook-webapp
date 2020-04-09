<template>
  <v-text-field
    solo
    color="amber lighten-1"
    background-color="grey lighten-4"
    shaped
    class="searchbar m-t-20"
    v-on:keyup="checkPressedKey"
    :style="{ fontSize, height, width }"
  >
    <template v-slot:prepend-inner>
      <v-icon @click="submit" class="searchbar__icon">mdi-magnify</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    fontSize: {
      type: [String],
      default: '16pt',
    },
    height: {
      type: [String],
      default: '1em',
    },
    width: {
      type: [String],
      default: '100%',
    },
  },
  methods: {
    checkPressedKey: function(e) {
      if (e.keyCode === 13) {
        this.submit();
      }
    },
    submit: function() {
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
  border-radius: 100px;
}
.searchbar__icon {
  cursor: pointer;
}
</style>
