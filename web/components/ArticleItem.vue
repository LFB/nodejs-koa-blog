<template>
    <NuxtLink class="article-link" to="/article">
        <div class="article-image">
            <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.davevoyles.com%2Fwp-content%2Fuploads%2F2014%2F10%2FJavaScript-Logo-1024x1024.png&refer=http%3A%2F%2Fwww.davevoyles.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619452609&t=fd71cdf5a5d4d51d918e5b2dd0e10e04"
                alt="title"
            />
        </div>

        <div class="article-item-content">
            <h1 class="article-title">JavaScript 原型链的作用</h1>
            <div class="article-description">开展深入了解原型链开展深入了解原型链开展深入了解原型链开展深入了解原型链</div>
            <div class="article-category">javascript</div>
            <!--                            <NuxtLink to="/" class="read-article-btn">阅读文章</NuxtLink>-->
        </div>
    </NuxtLink>
</template>

<script>
export default {
    name: 'ArticleItem'
}
</script>

<style scoped lang="scss">
.article-link {
    box-sizing: border-box;
    position: relative;
    display: block;
    clear: both;
    width: 100%;
    height: 148px;
    padding-top: 24px;
    border-bottom: 1px solid #f0f0f0;
    color: #555;
    border-bottom: none;
    line-height: 1.2;
    vertical-align: top;

    &:last-child {
        border: none;
    }
}
.article-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
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
.article-link:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
}
.article-item {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    -webkit-transition: background-color 0.35s, color 0.35s, margin 0.45s, -webkit-transform 0.5s;
    transition: background-color 0.35s, color 0.35s, margin 0.45s, transform 0.5s;
}

.article-image {
    float: right;
    width: 100px;
}

.article-image img {
    width: 100%;
    border-radius: 4px;
}

.article-item-content {
    overflow: hidden;
    padding-right: 24px;
    height: 124px;
}

.article-title {
    font-weight: bold;
    font-size: 18px;
    color: #404040;
}

.article-description {
    font-size: 14px;
    color: #404040;
    margin: 12px 0 24px;
}

.article-category {
    font-size: 14px;
    color: #808080;
}
</style>
