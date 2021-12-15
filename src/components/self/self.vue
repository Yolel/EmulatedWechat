<template>
  <div id="self">
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/self/profile" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/headers/header01.png" style="width: 50px;height: 50px;border-radius: 4px;" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">Yolel</h4>

            <p class="self-wxid">微信号: wbl2401</p>
          </div>
          <div class="weui-cell__ft">
            <img src="../../assets/images/chat-info-qr.png">
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
      <a class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/me_more-my-bank-card.png">
        </div>
        <div class="weui-cell__bd">
          <p>支付</p>
        </div>
      </a>
      </div>
      <div class="weui-cells">

        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
           <img src="../../assets/images/me_more-my-favorites.png">
          </div>
          <div class="weui-cell__bd">
            <p>收藏</p>
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-album.png">
          </div>
          <div class="weui-cell__bd">
            <p>朋友圈</p>
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_my-card-package-icon.png">
          </div>
          <div class="weui-cell__bd">
            <p>卡包</p>
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-expression.png">
          </div>
          <div class="weui-cell__bd">
            <p>表情</p>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <router-link to="/self/settings" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-setting.png">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "我"
            }
        },
        mounted() {
            this.$store.commit("toggleTipsStatus", -1)
        },
        activated() {
            this.$store.commit("toggleTipsStatus", -1)
        }
    }
</script>
<style>
    @import "../../assets/css/self.css";
</style>
