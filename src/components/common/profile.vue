<template>
<!--个人信息组件-->
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                </router-link>
                <span>个人信息</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access" id="avatarCell">
                <div class="weui-cell__bd">
                    <p>头像</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="../../assets/images/headers/header01.png" style="width: 50px;height: 50px;border-radius: 4px;">
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>名字</p>
                </div>
                <div class="weui-cell__ft">
                    Yolel
                </div>
            </div>
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">
              <p>拍一拍</p>
            </div>
            <div class="weui-cell__ft">
            </div>
          </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>微信号</p>
                </div>
                <div class="weui-cell__ft ">
                    wbl2401
                </div>
            </div>
            <router-link to="/self/profile/my-qrcode" class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>二维码名片</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="../../assets/images/contact_add-friend-my-qr.png" style="vertical-align: middle;;width:24px" class="_align-middle">
                </div>
            </router-link>
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">
              <p>更多信息</p>
            </div>
            <div class="weui-cell__ft">

            </div>
            </div>
            </div>

              <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
              <div class="weui-cell__bd">
                <p>微信豆</p>
              </div>
              <div class="weui-cell__ft">

              </div>
              </div>
              </div>


            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的地址</p>
                </div>
                <div class="weui-cell__ft">

                </div>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: "个人信息"
            }
        }
    }
</script>
