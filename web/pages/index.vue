<template>
    <div class="responsive-box container">
        <div class="article">
            <ArticleItem v-for="item in 10" :key="item" />
        </div>
        <div class="sidebar">
            <Sidebar />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import ArticleItem from '@/components/ArticleItem'
export default {
    components: {
        Sidebar,
        ArticleItem
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    margin-top: 16px;
}

.article {
    box-sizing: border-box;
    flex: 1;
    padding: 0 24px;
    margin-right: 16px;
    background: #fff;
}
.sidebar {
    width: 320px;
}
</style>
