<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators" v-if="isMultiple">
      <button
        v-for="(item, index) in advertisementItems"
        :key="item.announcementID"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        :data-bs-slide-to="index"
        :class="{ active: index == 0 }"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in advertisementItems"
        :key="item.announcementID"
        class="carousel-item"
        :class="{ active: index == 0 }"
        @click="clickItem(item)"
      >
        <img
          :src="item.imageUrl"
          class="d-block w-100"
          :class="{ pointer: item.linkType > 0 }"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
      v-if="isMultiple"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
      v-if="isMultiple"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
export default {
  mixins: [commonMixin],
  computed: {
    advertisementItems() {
      const lobbySetting = this.$store.getters["games/lobbyGameExtraInfo"];
      return lobbySetting.advertisementItems;
    },
    isMultiple() {
      return this.advertisementItems.length > 1;
    },
  },
  methods: {
    clickItem(item) {
      switch (item.linkType) {
        case 99: {
          const urlParsing = this.replaceToValidRoutePushUrl(
            item.linkReference
          );
          if (urlParsing.isSameOrigin) {
            this.$router.push(urlParsing.url);
          } else {
            location.href = item.linkReference;
          }
          break;
        }
        case 98:
          this.$router.push(item.linkReference);
          break;
        case 21:
          window.location.href =
            window.location.href.split("?")[0] +
            "?page=game&gameID=" +
            item.linkReference;
          break;
        case 777:
          if (this.notEmptyNullText(item.imageUrlMiddle)) {
            window.open(item.imageUrlMiddle, "_blank");
          }
          break;
        case 2001:
          this.$router.push(window.location.pathname + "?page=EventQuest");
          break;
        case 2005:
          this.$router.push(window.location.pathname + "?page=EventLuckyWheel");
          break;
        default:
          break;
      }
    },
  },
};
</script>
