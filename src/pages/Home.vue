<template>
  <div class="home">
    <nav class="nav">
      <page-link
        class="nav__link"
        :link="$options.ROUTES.clocks"
        :link-text="'Clocks'"
      />
    </nav>
  </div>
</template>

<script>
import { ROUTES } from "@/const";
import PageLink from "@/components/PageLink";
export default {
  ROUTES,
  components: { PageLink },
  name: "Home",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 50px 200px;
}
</style>
