<template>
  <div class="banner">
    <transition name="fade" v-for="banner in bannerList" :key="banner">
      <img
        :src="require(`@/assets/images/banner/${banner}.jpg`)"
        class="w-100"
        v-show="banner == gameType"
      />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    gameType: Number,
  },
  data() {
    return {
      bannerList: [-1, 1000, 2000, 2500, 3000, 7000],
    };
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  padding-top: 32%;
  position: relative;
}
.banner img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>