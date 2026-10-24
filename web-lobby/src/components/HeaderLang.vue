<template>
  <img class="language col-2 pointer" :src="getLangImg" @click="clickLang" />
</template>

<script>
export default {
  computed: {
    getLangImg() {
      const lang = this.$store.getters["user/lang"];
      if (lang === "zh-cn" || lang === "zh-tw") {
        return require("@/assets/images/language/cn.png");
      }
      if (lang === "ms-my") {
        return require("@/assets/images/language/my.png");
      }
      if (lang === "id-id") {
        return require("@/assets/images/language/id.png");
      }
      if (lang === "vi-vn") {
        return require("@/assets/images/language/vn.png");
      }
      if (lang === "en-us" || lang === "en") {
        return require("@/assets/images/language/uk.png");
      }
      if (lang === "th-th") {
        return require("@/assets/images/language/th.png");
      }
      return require("@/assets/images/language/uk.png");
    },
  },
  methods: {
    clickLang() {
      if (this.$route.query.page == "language") {
        this.$router.push(window.location.pathname);
      } else {
        this.$router.push(window.location.pathname + "?page=language");
      }
    },
  },
};
</script>

<style  scoped>
.language {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.pointer {
  cursor: pointer;
}
</style>