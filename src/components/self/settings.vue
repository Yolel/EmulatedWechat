<template>
    <!--设置 组件-->
    <div class="setting">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                </router-link>
                <span>设置</span>
            </div>
        </header>
        <section>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">帐号与安全</div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">新消息通知</div>
                    <div class="weui-cell__ft"></div>
                </a>
              <a class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">勿扰模式</div>
                <div class="weui-cell__ft"></div>
              </a>
                <a  class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">聊天</div>
                    <div class="weui-cell__ft"></div>
                </a>
              <a  class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">隐私</div>
                <div class="weui-cell__ft"></div>
              </a>
              <a  class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">设备</div>
                <div class="weui-cell__ft"></div>
              </a>
                <a class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">通用</div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">帮助与反馈</div>
                    <div class="weui-cell__ft"></div>
                </a>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">关于微信</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-btn-area">
                <button class="weui-btn weui-btn_default" id="changeBtn">切换账号</button>
                <button class="weui-btn weui-btn_default" id="exitBtn">退出</button>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}
</script>
<style>

</style>
