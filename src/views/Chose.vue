<template>
  <div class="choseMenu m-t-125">
    <h1 class="choseMenu__title text-center">This is an chose page</h1>
    <div class="choseMenu__card m-t-50">
      <div>
        <choseButton class="p-t-30 p-b-0" @click="() => this.$router.push('/')">
          <v-img
            class="choseMenu__card-icon"
            contain
            src="@/assets/recipes-logo.svg"
            alt="Сковородка с яишенкой"
            srcset=""
          />
        </choseButton>
        <h2 class="text-center m-t-30">я знаю чего я хочу</h2>
      </div>
      <div>
        <choseButton @click="() => this.$router.push('/')">
          <v-img
            class="choseMenu__card-icon"
            contain
            src="@/assets/ingredients-logo.svg"
            alt="Игридиенты для яишенки"
            srcset=""
          />
        </choseButton>
        <h2 class="text-center m-t-30">я не знаю чего я хочу</h2>
      </div>
    </div>
  </div>
</template>

<script>
import choseButton from '@/components/ChoseButton.vue';

export default {
  name: 'Chose',
  components: { choseButton }
};
</script>

<style lang="scss" scoped>
.choseMenu {
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
