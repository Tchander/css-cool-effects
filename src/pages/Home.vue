<template>
  <div class="home">
    <nav class="nav">
      <router-link class="nav__link" :to="$options.ROUTES.clocks"
        >Clocks</router-link
      >
    </nav>
  </div>
</template>

<script>
import { ROUTES } from "@/const";
export default {
  ROUTES,
  name: "Home",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  padding: 50px 200px;
  font-size: 28px;
  font-weight: 700;
  &__link {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #e7e7e7;
    }
  }
}
</style>
