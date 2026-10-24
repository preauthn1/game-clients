<template>
  <Loader v-if="isLoading" />
  <div class="ip-test-page">
    <div style="padding: 10px">
      <h3>请将此页面截图并交给客服人员</h3>
      <h3>Please screenshot the information, and send to customer service.</h3>
      <h3 style="color: #ff0000">{{ errorMsgOfPublicAPI }}</h3>
    </div>

    <table
      class="ez-table"
      style="width: 100%"
      v-if="myIPAnalyzeInfo && myIPAnalyzeInfo != null"
    >
      <tr>
        <td class="text-l">IP</td>
        <td>{{ myIPAnalyzeInfo.ip }}</td>
      </tr>
      <tr>
        <td class="text-l">Country</td>
        <td>{{ myIPAnalyzeInfo.country_full }}</td>
      </tr>
      <tr>
        <td class="text-l">ISP</td>
        <td>{{ myIPAnalyzeInfo.isp }}</td>
      </tr>

      <tr>
        <td class="text-l">Current time</td>
        <td>{{ apiResult.serverTime_UTC8 }} (UTC+8)</td>
      </tr>
    </table>

    <table
      class="ez-table"
      style="width: 100%"
      v-if="speedTestUrls && speedTestUrls != null && speedTestUrls.length > 0"
    >
      <tr class="headers">
        <th class="text-l">Name</th>
        <!-- <th>Url</th> -->
        <th>Time</th>
      </tr>

      <tr v-for="(item, index) in speedTestUrls" :key="index">
        <td class="text-l">{{ item.displayName }}</td>
        <!-- <td>
          <div class="maxWidthOfTD">
            {{ item.url.replace("https://", "").replace("http://", "") }}
          </div>
        </td> -->
        <td :class="item.spendTime == 'error' ? 'red-text' : ''">
          {{ item.spendTime }}
        </td>
      </tr>
    </table>

    <div v-if="speedTestImages && speedTestImages.length > 0">
      <div style="font-size: 16px">Image loading test</div>
      <div style="font-size: 12px; color: #d7afa3; margin-top: -5px">
        图像加载测试
      </div>
      <hr />
      <div class="row">
        <div
          class="col-md-3 col-sm-3 col-3"
          v-for="(item, index) in speedTestImages"
          :key="index"
          style="margin-bottom: 10px"
        >
          <img :src="item.url" style="width: 64px; border-radius: 0%" />
        </div>
      </div>
    </div>

    <div style="margin-top: 20px">
      <h2 style="color: #fdd151">User Agent</h2>
      {{ myUserAgent }}
    </div>

    <div style="color: #aaa">
      {{ myUrlHost }}
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
import otherApi from "../utilities/api/otherApi";

export default {
  components: {},

  mixins: [commonMixin],
  computed: {
    isCN() {
      return false;
    },
  },

  data() {
    return {
      isLoading: false,
      isApiLoad: false,
      isIPInfoLoad: false,
      errorMsgOfPublicAPI: "",
      myUserAgent: "",
      myIPAnalyzeInfo: null,
      apiResult: {},
      speedTestUrls: [],
      speedTestImages: [],
      remaningSeconds: 0,
      myUrlHost: "",
    };
  },

  created() {
    console.log("-------------");
    console.log("------- v1.0.1 ------");
    this.getSpeedTestInfo();
    this.getCurrentIPInfo();
    console.log(process.env.APP_VERSION);
    this.myUserAgent = window.navigator.userAgent;
    this.myUrlHost = location.host;
  },

  methods: {
    closeAllModal() {
      this.isMaintainMsgRead = true;
    },

    async getSpeedTestInfo() {
      const vm = this;
      vm.isLoading = true;

      otherApi
        .getSpeedTestInfo(this)
        .then((res) => {
          this.apiResult = res.data;
          this.speedTestUrls = res.data.urls;
          this.speedTestImages = res.data.images;

          //迴圈測試每個速度
          this.speedTestUrls.forEach((element) => {
            let ts = Date.now();
            const targetUrl = element.url + "?v=" + ts;
            vm.fetchApi(targetUrl, (astatus, spendTime, responseText) => {
              element.spendTime = spendTime;
            });
          });
        })
        .catch((e) => {
          console.log(e);
          vm.errorMsgOfPublicAPI = "Error! fail request.";
        })
        .finally(() => {
          vm.isApiLoad = true;
          vm.closeLoadingMask();
        });
    },

    getCurrentIPInfo() {
      const vm = this;
      const targetUrl =
        "https://example.invalid/ipgeo?apiKey=[REDACTED]";
      fetch(targetUrl, { method: "GET" }).then((res) => {
        console.log(res);
        res
          .json()
          .then((x) => {
            console.log(x);

            this.myIPAnalyzeInfo = {};
            this.myIPAnalyzeInfo.country_full =
              x.continent_name + " , " + x.country_name + " , " + x.city;
            this.myIPAnalyzeInfo.ip = x.ip;
            this.myIPAnalyzeInfo.isp = x.isp;
          })
          .finally(() => {
            this.isIPInfoLoad = true;
            vm.closeLoadingMask();
          });

        return;
      });
    },

    fetchApi(url, callback) {
      const vm = this;

      var xmlhttp;
      xmlhttp = this.createXmlHttpRequest();
      xmlhttp.open("GET", url, true);
      xmlhttp.responseType = "text";
      var localImgTime = vm.getTime();
      xmlhttp.onload = function () {
        var status = false;
        var spandata,
          text = "";
        if (this.status == 200) {
          var howlong = vm.getTime() - localImgTime;
          spandata = howlong + "ms";
          text = this.response;
          status = true;
        } else {
          spandata = "error " + this.status;
        }
        console.log({ status: status, spandata: spandata, text: text });
        callback(status, spandata, text);
      };
      xmlhttp.onerror = function (e) {
        console.log({ status: false, spandata: "error", text: "" });
        callback(false, "error", "");
      };

      xmlhttp.send();
    },

    closeLoadingMask() {
      const vm = this;
      if (vm.isApiLoad && vm.isIPInfoLoad) {
        setTimeout(() => {
          vm.isLoading = false;
        }, 1000);
      }
    },

    createXmlHttpRequest() {
      if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
    },

    getTime() {
      var myDate = new Date();
      return myDate.getTime();
    },
  },
};
</script>

<style scoped>
.ip-test-page {
  max-width: 550px;
  margin: 0 auto;
  font-size: 12px;
  padding: 10px;
}

.ez-table {
  width: 100%;
  border-collapse: collapse;
  background: #111;
  margin-bottom: 15px;
  box-shadow: 0px 0px 2px #bfb46a;
}

.ez-table td,
.ez-table th {
  padding: 5px 10px;
  text-align: right;
}

.ez-table th {
  font-weight: 400;
  color: #aaa;
  font-size: 11px;
}

.ez-table tr {
  border-bottom: solid 1px #333 !important;
}

.text-l {
  text-align: left !important;
  color: #999;
  font-size: 10px;
}

.red-text {
  color: #ff0000;
}

.maxWidthOfTD {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  display: inline-block;
}
</style>
