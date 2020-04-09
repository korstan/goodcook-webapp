<template>
  <v-text-field
    solo
    color="amber lighten-1"
    :background-color="backgroundColor"
    shaped
    class="searchbar mt-2"
    v-on:keyup="checkPressedKey"
    :height="height"
    :style="{ fontSize, width, height: '100%' }"
    v-model="query"
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
    value: {
      type: [String],
      default: '',
    },
    fontSize: {
      type: [String],
      default: '16pt',
    },
    height: {
      type: [String],
      default: '1',
    },
    width: {
      type: [String],
      default: '100%',
    },
    backgroundColor: {
      type: [String],
      default: 'grey lighten-4',
    },
  },
  data() {
    return {
      query: this.value,
    };
  },
  methods: {
    checkPressedKey: function(e) {
      if (e.keyCode === 13) {
        this.submit();
      }
    },
    submit: function() {
      this.$emit('submit', this.query);
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
