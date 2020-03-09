<template>
  <header>
    <Logo width="100" height="50" />
    <form action="">
      <input type="text" name="search" id="search" /><button>Search</button>
    </form>
    <nav>
      <a href="">Home</a>
      <a href="">Recipes</a>
      <a href="">About</a>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  name: 'Header',
  components: { Logo },
};
</script>

<style lang="scss">
header {
  padding: 0 $page-margin-h;
  display: flex;
  justify-content: space-between;
  height: $header-height;
  background-color: white;
  box-shadow: 0px 1px 5px gray;
}

.logo {
  overflow: hidden;
  cursor: pointer;
  text-shadow: 1px 1px 2px black;
  display: inline;
  font-size: 43px;
  font-family: 'Arial Black';
  color: $main-color;
}
form {
  margin: 10px 0;
  flex: 1 0 0;
  text-align: center;
}

input {
  padding: 0;
  box-shadow: 1px 1px 1px gray;
  height: 100%;
  width: 70%;
  background-color: whitesmoke;
  border: none;
  flex: 0.5 0 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-indent: 10px;
}

button {
  box-shadow: 1px 1px 1px gray;
  cursor: pointer;
  height: 100%;
  background-color: $main-color;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

nav {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
