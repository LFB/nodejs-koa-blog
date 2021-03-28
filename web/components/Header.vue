<template>
    <div class="header">
        <div class="responsive-box header-inner">
            <NuxtLink to="/" class="logo"></NuxtLink>
            <!--            <div class="nav">-->
            <!--                <ul class="nav-box">-->
            <!--                    <li class="nav-item">-->
            <!--                        <NuxtLink to="/">首页</NuxtLink>-->
            <!--                    </li>-->
            <!--                    <li class="nav-item">-->
            <!--                        <NuxtLink to="/">关于</NuxtLink>-->
            <!--                    </li>-->
            <!--                </ul>-->
            <!--            </div>-->
            <form class="search-box" action="/search">
                <input type="text" class="search" placeholder="代码改变世界" />
                <i class="iconfont iconsearch iconsearch-fix"></i>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
    box-sizing: border-box;
    background: #fff;
}

.header-inner {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
}

.logo {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 150px;
    height: 64px;
    background: url('@/assets/images/boblog.png') -16px center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    text-align: center;
}

.nav {
    flex: 1;
    height: 64px;
}
.nav-box {
    flex: 1;
    height: 64px;
    display: flex;
}
.nav-item {
    padding: 0 16px;
    height: 64px;

    a {
        display: block;
        height: 64px;
        line-height: 64px;
        color: #222;

        &:hover {
            color: #0164da;
        }
    }
}
.search-box {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.search {
    max-width: 320px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 32px;
    height: 36px;
    line-height: 36px;
    color: #222;
    font-size: 14px;
    border: 1px solid #ddd;
    outline: none;
    transition: 0.2s ease-in;

    &:focus {
        border: 1px solid #222;
    }

    &::placeholder {
        color: #989898;
    }
}
.iconsearch-fix {
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
