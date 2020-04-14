<template>
  <v-text-field
    solo
    color="amber lighten-1"
    :background-color="backgroundColor"
    :placeholder="placeholder"
    shaped
    class="searchbar"
    v-on:keyup="checkPressedKey"
    :height="height"
    :style="{ fontSize, width }"
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
      default: ''
    },
    placeholder: {
      type: [String],
      default: ''
    },
    fontSize: {
      type: [String],
      default: '16pt'
    },
    height: {
      type: [String],
      default: '1'
    },
    width: {
      type: [String]
    },
    backgroundColor: {
      type: [String],
      default: 'grey lighten-4'
    }
  },
  data() {
    return {
      query: this.value
    };
  },
  methods: {
    checkPressedKey: function(e) {
      if (e.keyCode === 13) {
        this.submit();
      }
    },
    submit: function() {
      if (this.query) {
        const queryArray = this.query.split(',').map(item => item.trim());
        this.$emit('submit', queryArray);
      }
    }
  }
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
