<template>
    <div class="copyright">
        &copy; <NuxtLink to="http://www.boblog.com" class="copyright-item">波波博客 - BoBlog.com</NuxtLink>
        <span class="copyright-mark"></span>
        <NuxtLink to="mailto:itbo@163.com" class="copyright-item">itbo@163.com</NuxtLink>
        <span class="copyright-mark"></span>
        <NuxtLink to="https://beian.miit.gov.cn" target="_blank" class="copyright-item">粤ICP备2020120493号</NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped lang="scss">
.copyright {
    padding: 32px 0;
    color: #9199a1;
    font-size: 13px;
    text-align: center;
    background: #f8f8f8;
}

.copyright-item {
    color: #9199a1;
    text-decoration: none;
}
.copyright-item:hover {
    color: #0164da;
}
.copyright-mark {
    display: inline-block;
    margin: 0 10px;
    height: 10px;
    width: 1px;
    background: #ccc;
}
</style>
