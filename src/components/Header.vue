<template>
  <header class="header" :style="currentMood.isOk ? { boxShadow: 'none' } : {}">
    <Logo
      width="100"
      height="50"
      :style="currentMood.isOk ? { visibility: 'hidden' } : {}"
    />
    <form action="" :style="currentMood.isOk ? { visibility: 'hidden' } : {}">
      <input type="text" name="search" id="search" /><button>Search</button>
    </form>
    <nav>
      <a href="" @click="changeMood">{{ currentMood.msg }}</a>
      <NavLink @navLinkClick="$router.push('/')" title="Frame 1" />
      <NavLink @navLinkClick="$router.push('/frame2')" title="Frame 2" />
      <NavLink @navLinkClick="$router.push('/about')" title="About" />
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo';
import NavLink from '@/components/NavLink';

export default {
  name: 'Header',
  components: {
    Logo,
    NavLink,
  },
  data() {
    return {
      currentMood: {
        isOk: true,
        msg: 'Сделать страшно',
      },
    };
  },
  methods: {
    changeMood(e) {
      e.preventDefault();
      this.currentMood = this.currentMood.isOk
        ? { isOk: false, msg: 'Сделать красиво' }
        : { isOk: true, msg: 'Сделать страшно' };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 $page-margin-h;
  display: flex;
  justify-content: space-between;
  height: $header-height;
  background-color: white;
  box-shadow: 0px 1px 5px gray;
}

form {
  margin: 10px 0;
  flex: 1 0 0;
  text-align: center;
}

input {
  padding: 0;
  box-shadow: 1px 1px 1px $gray;
  height: 100%;
  width: 50%;
  background-color: whitesmoke;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-indent: 10px;
}

button {
  box-shadow: 1px 1px 1px gray;
  cursor: pointer;
  height: 100%;
  background-color: $primary-color;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

nav {
  flex: 0.3;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
