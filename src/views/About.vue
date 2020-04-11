<template>
  <div class="about">
    <h1>Команда мечты</h1>
    <div class="contentBox">
      <v-img class="image" contain src="@/images/ivan.jpg" alt="Ваня" />
      <v-img class="image" contain src="@/images/dima.jpg" alt="Дима" />
      <v-img class="image" contain src="@/images/stas.jpg" alt="Стас" />
      <v-img class="image" contain src="@/images/ivanM.jpg" alt="Другой Ваня" />
      <v-img class="image" contain src="@/images/misha.jpg" alt="Миша" />
      <v-img class="image image_mem hide" contain src="@/images/ivan_mem.jpg" />
      <v-img class="image image_mem hide" contain src="@/images/dima_mem.jpg" />
      <v-img class="image image_mem hide" contain src="@/images/stas_mem.jpg" />
      <v-img class="image image_mem hide" contain src="@/images/ivanM_mem.jpg" />
      <v-img class="image image_mem hide" contain src="@/images/misha_mem.jpg" />
    </div>
  </div>
</template>

<script>
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

  .image {
    background: $gray;
    border-radius: $default-border-radius;
    max-width: 300px;
    max-height: 300px;
    display: flex;
    padding: 10px;
    align-self: center;
    &_mem {
    }
  }
}
</style>
