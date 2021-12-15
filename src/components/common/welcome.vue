<template>
    <div class="welcome" :class="{hide:hide}">
    </div>
</template>
<script>
export default {
    data() {
            return {
                hide: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.hide = true
            }, 1000)
        }
}
</script>
<style>
/* 被注释掉的样式不适合部分安卓机 */
.welcome {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: #000b17;

}

.welcome img {
    width: 100%;
}
.welcome.hide{
    opacity: 0;
    visibility: hidden;
}
</style>
