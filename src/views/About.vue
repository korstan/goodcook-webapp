<template>
  <div class="about">
    <h1 class="text-center m-t-120">Команда мечты</h1>
    <div class="contentBox m-t-80">
      <div class="contentBox__item">
        <v-img class="image" contain src="@/images/ivan.jpg" alt="Ваня" />
        <v-img
          class="image image_mem hide"
          contain
          src="@/images/ivan_mem.jpg"
        />
        <div class="contentBox__item-name">Баширов Иван</div>
        <div class="contentBox__item-desk text">
          Создал дизайн проекта, помогал разрабатывать визуальную часть сервиса и рисовал иллюстрации
        </div>
      </div>
      <div class="contentBox__item">
        <v-img class="image" contain src="@/images/dima.jpg" alt="Дима" />
        <v-img
          class="image image_mem hide"
          contain
          src="@/images/dima_mem.jpg"
        />

        <div class="contentBox__item-name">Щапин Дмитрий</div>
        <div class="contentBox__item-desk">
          Предложил идею этого проекта, руководил разработкой, проводил встречи
          команды
        </div>
      </div>
      <div class="contentBox__item">
        <v-img class="image" contain src="@/images/stas.jpg" alt="Стас" />
        <v-img
          class="image image_mem hide"
          contain
          src="@/images/stas_mem.jpg"
        />

        <div class="contentBox__item-name">Корда Станислав</div>
        <div class="contentBox__item-desk">
          Разрабатывал frontend сервиса, занимался логистикой страниц проекта
          и&nbsp;создавал компоненты
        </div>
      </div>
      <div class="contentBox__item">
        <v-img
          class="image"
          contain
          src="@/images/ivanM.jpg"
          alt="Другой Ваня"
        />
        <v-img
          class="image image_mem hide"
          contain
          src="@/images/ivanM_mem.jpg"
        />
        <div class="contentBox__item-name">Морозов Иван</div>
        <div class="contentBox__item-desk">
          Разрабатывал и&nbsp;наполнял информационную базу проекта, занимался
          деплоем проекта
        </div>
      </div>
      <div class="contentBox__item">
        <v-img class="image" contain src="@/images/misha.jpg" alt="Миша" />
        <v-imgу
          class="image image_mem hide"
          contain
          src="@/images/misha_mem.jpg"
        />
        <div class="contentBox__item-name">Мишин Александр</div>
        <div class="contentBox__item-desk">
          Занимался тестированием сервиса, оформлением технического задания
          и&nbsp;пояснительной записки
        </div>
      </div>
    </div>
    <Footer><a href="/">Main</a></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
  components: {Footer}
}

var clickCounter = 0;
document.body.onclick = function() {
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter > 10) {
    document
      .querySelectorAll(".image")
      .forEach(elem => elem.classList.add("hide"));
    document
      .querySelectorAll(".image.image_mem")
      .forEach(elem => elem.classList.remove("hide"));
  }
};
</script>

<style lang="scss" scoped>
.contentBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    width: 300px;
    height: 300px;
    font-style: normal;
    font-weight: normal;
    align-self: center;

    .image {
      display: flex;
      background: white;
      border: solid 8px hsla(0, 0%, 55%, 0.5);
      border-radius: $default-border-radius;
      max-width: 300px;
      max-height: 300px;
    }

    &-name {
      margin-top: 20px;
      text-align: center;
      font-size: 28px;
      line-height: 56px;
      letter-spacing: 0.25px;
    }
    &-desk {
      font-size: 17px;
      line-height: 42px;
      opacity: 70%;
    }
  }
}
</style>
