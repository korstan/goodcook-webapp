<template>
  <div class="chooseMenu m-t-125">
    <h1 class="chooseMenu__title text-center">Что будем готовить?</h1>
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
        <h2 class="text-center m-t-30">Я знаю чего хочу!</h2>
        <h4 class="text-center">Поиск по рецептам</h4>
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
        <h2 class="text-center m-t-30">Я не знаю чего хочу...</h2>
        <h4 class="text-center">Поиск по ингредиентам</h4>
      </div>
    </div>
    <Footer><a href="/about">About</a></Footer>
  </div>
</template>

<script>
import chooseButton from '@/components/ChooseButton.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Choose',
  components: { chooseButton, Footer }
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
