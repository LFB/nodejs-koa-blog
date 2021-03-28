<template>
    <div class="responsive-box container">
        <div class="article">
            <h1 class="title">JavaScript 原型链的作用</h1>
            <div class="info">
                <span class="category"> javascript </span>
                <span class="created-at"> 2021-02-13 20:08:35 </span>
            </div>
            <div class="content">
                javascript 开展深入了解原型链开展深入了解原型链开展深入了解原型链开展深入了解原型链 本文属于 CSS 绘图技巧其中一篇，系列文章： 在 CSS
                中使用三角函数绘制曲线图形及展示动画 CSS奇思妙想 -- 使用 CSS 创造艺术 将介绍一些利用 CSS 中的 background、mix-blend-mode、mask
                及一些相关属性，制作一些稍微复杂、酷炫的背景。 通过本文，你将会了解到 CSS background 中更为强大的一些用法，并且学会利用 background
                相关的一些属性，采用不同的方式，去创造更复杂的背景图案。在这个过程中，你会更好的掌握不同的渐变技巧，更深层次的理解各种不同的渐变。
                同时，借助强大的 CSS-Doodle，你将学会如何运用一套规则，快速创建大量不同的随机图案，感受 CSS 的强大，走进 CSS 的美。 背景基础知识
                我们都知道，CSS 中的 background 是非常强大的。 首先，复习一下基础，在日常中，我们使用最多的应该就是下面 4 种： 纯色背景 background:
                #000： 线性渐变 background: linear-gradient(#fff, #000) : 径向渐变 background: radial-gradient(#fff, #000) : 角向渐变 background:
                conic-gradient(#fff, #000) : 背景进阶 当然。掌握了基本的渐变之后，我们开始向更复杂的背景图案进发。我最早是在《CSS
                Secret》一书中接触学习到使用渐变去实现各种背景图案的。然后就是不断的摸索尝试，总结出了一些经验。
                在尝试使用渐变去制作更复杂的背景之前，列出一些比较重要的技巧点： 渐变不仅仅只能是单个的 linear-gradient 或者单个的
                radial-gradient，对于 background 而言，它是支持多重渐变的叠加的，一点非常重要； 灵活使用
                repeating-linear-gradeint（repeating-radial-gradeint），它能减少很多代码量 transparent 透明无处不在 尝试 mix-blend-mode 与
                mask，创建复杂图案的灵魂 使用随机变量，它能让一个 idea 变成无数美丽的图案 接下来，开始组合之旅。 使用 mix-blend-mode mix-blend-mode
                ，混合模式。最常见于 photoshop 中，是 PS 中十分强大的功能之一。在 CSS 中，我们可以利用混合模式将多个图层混合得到一个新的效果。
                关于混合模式的一些基础用法，你可以参考我的这几篇文章： 不可思议的颜色混合模式 mix-blend-mode 不可思议的混合模式 background-blend-mode
                然后，我们来尝试第一个图案，先简单体会一下 mix-blend-mode 的作用。 我们使用 repeating-linear-gradient
                重复线性渐变，制作两个角度相反的背景条纹图。正常而言，不使用混合模式，将两个图案叠加在一起，看看会发生什么。
                额，会发生什么就有鬼了:sweat_smile: 。显而易见，由于图案不是透明的，叠加在一起之后，由于层叠的关系，只能看到其中一张图。
                好，在这个基础上，我们给最上层的图案，添加 mix-blend-mode: multiply，再来一次，看看这次会发生什么。
                可以看到，添加了混合模式之后，两张背景图通过某种算法叠加在了一起，展现出了非常漂亮的图案效果，也正是我们想要的效果。 CodePen Demo -
                Repeating-linear-gradient background & mix-blend-mode 尝试不同的 mix-blend-mode 那为什么上面使用的是 mix-blend-mode: multiply
                呢？用其他混合模式可以不可以？ 当然可以。这里仅仅只是一个示例，mix-blend-mode: multiply 在 PS
                中意为正片叠底，属于图层混合模式的变暗模式组之一。 我们使用上面的 DEMO，尝试其他的混合模式，可以得到不同的效果。
                可以看到，不同的混合模式的叠加，效果相差非常之大。当然，运用不同的混合模式，我们也就可以创造出效果各异的图案。 CodePen Demo -
                Repeating-linear-gradient background & mix-blend-mode 借助 CSS-Doodle 随机生成图案 到这，就不得不引出一个写 CSS 的神器 --
                CSS-Doodle，我在其他非常多文章中也多次提到过 CSS-doodle，简单而言，它是一个基于 Web-Component 的库。允许我们快速的创建基于 CSS Grid
                布局的页面，并且提供各种便捷的指令及函数（随机、循环等等），让我们能通过一套规则，得到不同 CSS 效果。 还是以上面的 DEMO
                作为示例，我们将 repeating-linear-gradient 生成的重复条纹背景的颜色、粗细、角度随机化、采用的混合模式也是随机选取，然后利用
                CSS-Doodle，快速随机的创建各种基于此规则的图案：
            </div>
        </div>
        <div class="sidebar">
            <Recommend />
        </div>
    </div>
</template>

<script>
import Recommend from '@/components/Recommend'
export default {
    components: {
        Recommend
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

    .article {
        box-sizing: border-box;
        flex: 1;
        padding: 24px;
        padding-top: 0;
        margin-right: 16px;
        background: #fff;
    }

    .sidebar {
        width: 320px;
    }
}
.title {
    font-weight: bold;
    font-size: 36px;
    margin: 24px 0;
    text-align: center;
}

.info {
    text-align: center;
    margin: 24px 0 32px;
}

.info span {
    color: #808080;
    font-size: 14px;
    display: inline-block;
    margin: 0 10px;
}

.copyright {
    padding: 32px 0;
    color: #9199a1;
    margin-top: 32px;
    font-size: 13px;
    text-align: center;
    background: #f8f8f8;
}

.text {
    color: #f0f0f0;
}

.content {
    box-sizing: border-box;
    line-height: 2.5;
    font-size: 16px;
    text-align: justify;
}
</style>
