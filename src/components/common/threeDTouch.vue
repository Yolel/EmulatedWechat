<template>
    <div class="threeD">
        <div class="main">
            <header>ABCDE</header>

            <section class="dialogue-section clearfix">
                <div class="row clearfix"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquanq.jpg" class="header">
                    <p class="text">abcdefghi</p>
                </div>
                <div class="row clearfix"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquanq.jpg" class="header">
                    <p class="text">abcdefghi</p>
                </div>
                <div class="row clearfix"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquanq.jpg" class="header">
                    <p class="text">abcdefghi</p>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["msgInfo"]
    }
</script>
<style>
    @import "../../assets/css/threeD.css";
</style>
