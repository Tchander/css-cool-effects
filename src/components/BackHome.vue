<template>
  <page-link class="back-home" :link="$options.ROUTES.home" />
</template>

<script>
import PageLink from "@/components/PageLink";
import { ROUTES } from "@/const";
export default {
  ROUTES,
  name: "BackHome",
  components: { PageLink },
};
</script>

<style lang="scss" scoped>
.back-home {
  position: fixed;
  top: 50px;
  left: 200px;
}
</style>
