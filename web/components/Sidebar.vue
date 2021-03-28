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

        <div class="site-info">
            <div class="site-author-image">
                <img src="@/assets/images/lz.jpg" alt="bobo" />
            </div>
            <p class="site-author-name">
                <img src="@/assets/images/source.jpg" alt="bobo" />
                <span>梁凤波</span>
            </p>
            <p class="site-description">您好呀~ BoBlog.com</p>

            <ul class="links-of-author">
                <li class="links-of-author-item">
                    <a href="https://github.com/LFB/nodejs-koa-blog" target="_blank">
                        <i class="iconfont icongithub"></i>
                        Github
                    </a>
                </li>
            </ul>
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
            color: #fff;
            background: #222;
        }
    }
}

.site-info {
    box-sizing: border-box;
    padding: 16px;
    background: #fff;
}

.site-author-image {
    width: 61.8%;
    margin: 0 auto 24px;
}

.site-author-name {
    margin: 0;
    text-align: center;
    color: #222;
    font-weight: 600;
    height: 28px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 24px;
        margin-right: 6px;
    }
}

.site-description {
    box-sizing: border-box;
    padding: 0 24px;
    text-align: center;
    font-size: 13px;
    color: #999;
    margin-bottom: 24px;
}

.links-of-author {
    text-align: center;
    width: 61.8%;
    margin: auto;

    &-item {
        a {
            box-sizing: border-box;
            display: block;
            width: 100%;
            padding: 0 24px;
            font-size: 14px;
            color: #555;
            background: #fff;
            text-decoration: none;
            border-radius: 2px;
            transition-property: background-color;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;
            line-height: 2;

            &:hover {
                background: #f0f0f0;
            }
        }
    }
}
</style>
