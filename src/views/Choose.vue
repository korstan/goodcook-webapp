<template>
  <div class="chooseMenu m-t-125">
    <h1 class="chooseMenu__title text-center">This is an choose page</h1>
    <div class="chooseMenu__card m-t-50">
      <div>
        <chooseButton class="p-t-30 p-b-0" @click="() => this.$router.push('/search?mode=meals')">
          <v-img
            class="chooseMenu__card-icon"
            contain
            src="@/assets/recipes-logo.svg"
            alt="Сковородка с яишенкой"
            srcset=""
          />
        </chooseButton>
        <h2 class="text-center m-t-30">я знаю чего я хочу</h2>
      </div>
      <div>
        <chooseButton @click="() => this.$router.push('/search?mode=ingredients')">
          <v-img
            class="chooseMenu__card-icon"
            contain
            src="@/assets/ingredients-logo.svg"
            alt="Игридиенты для яишенки"
            srcset=""
          />
        </chooseButton>
        <h2 class="text-center m-t-30">я не знаю чего я хочу</h2>
      </div>
    </div>
  </div>
</template>

<script>
import chooseButton from '@/components/ChooseButton.vue';

export default {
  name: 'Choose',
  components: { chooseButton }
};
</script>

<style lang="scss" scoped>
.chooseMenu {
  &__card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &-icon {
      transition: 0.18s all ease-out;
      &:hover {
        cursor: pointer;
        transition: 0.18s all ease-in;
        transform: scale(1.05);
      }
    }
  }
}
</style>
