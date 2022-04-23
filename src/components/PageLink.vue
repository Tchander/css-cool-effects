<template>
  <router-link class="link" :to="link">{{ linkText }}</router-link>
</template>

<script>
export default {
    name: "PageLink",
    props: {
        link: {
            type: String,
            required: true,
            default: "/",
        },
        linkText: {
            type: String,
            default: "Back",
        },
    },
};
</script>

<style lang="scss" scoped>
.link {
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #e7e7e7;
  }
}
</style>
