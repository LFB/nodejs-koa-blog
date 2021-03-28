<template>
    <div class="sidebar-wrap">
        <div class="category">
            <!--            <div class="category-header">-->
            <!--                <i class="iconfont iconbar"></i>-->
            <!--            </div>-->
            <ul class="category-content">
                <li class="category-item">HTML</li>
                <li class="category-item">CSS</li>
                <li class="category-item">JavaScript</li>
                <li class="category-item">Node.js</li>
                <li class="category-item">Vue.js</li>
                <li class="category-item">Koa.js</li>
                <li class="category-item">Nuxt.js</li>
            </ul>
        </div>

        <div class="recommend-box">
            <a v-for="item in 5" :key="item" class="recommend-article-link" href="https://github.com/LFB/nodejs-koa-blog" target="_blank">
                JavaScript 原型链的作用
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style scoped lang="scss">
.sidebar-wrap {
    position: sticky;
    left: 0;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    border-right: 1px solid #f0f0f0;
    height: 400px;
}

.category {
    box-sizing: border-box;
    padding: 16px;
    background: #fff;
    margin-bottom: 16px;

    &-item {
        cursor: pointer;
        box-sizing: border-box;
        display: inline-block;
        padding: 0 16px;
        font-size: 12px;
        margin-right: 8px;
        margin-bottom: 8px;
        color: #555;
        background: #fff;
        border: 1px solid #eee;
        text-decoration: none;
        border-radius: 2px;
        transition-property: background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        line-height: 2;

        &:hover {
            /*border: 2px solid #000;*/
            color: #fff;
            background: #000;
        }
    }
}

.recommend-box {
    box-sizing: border-box;
    padding: 0 16px;
    background: #fff;
}

.recommend-article-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    line-height: 42px;
    font-weight: 400;
    font-size: 12px;
    color: #666;
    border-bottom: 1px solid #f0f0f0;

    .iconarrow-right-fix {
        color: #989898;
    }

    &:hover {
        color: #000;
    }
}

.recommend-article-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
}
.recommend-article-link:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
}
</style>
