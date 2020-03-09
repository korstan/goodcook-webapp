<template>
  <a href="" @click="onClick">{{ title }}</a>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    title: {
      required: true,
      type: [String],
    },
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      this.$emit('navLinkClick');
    },
  },
};
</script>

<style></style>
