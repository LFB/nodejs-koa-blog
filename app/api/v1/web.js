/**
 * @description 处理前端网站 ejs 模板渲染
 * @author 梁凤波
 */

const Router = require('koa-router')
const marked = require('marked')

const {ArticleDao} = require('../../dao/article')

const {PositiveIdParamsValidator} = require('../../validators/article')

const router = new Router()

/**
 * 首页 - 文章列表页
 */
router.get('/', async (ctx) => {
    const article = await ArticleDao.list(ctx.query)

    // 响应返回页面
    ctx.response.status = 200
    ctx.response.set('Content-Type', 'text/html charset=utf-8')
    ctx.response.set('Cache-Control', 'max-age=60, s-maxage=90')
    const LAST_MODIFIED_TIME = '123'
    ctx.response.set('Last-Modified', LAST_MODIFIED_TIME)
    await ctx.render('article-list', article)
})

/**
 * 文章详情页面
 */
router.get('/article/detail/:id', async (ctx) => {
    // 通过验证器校验参数是否通过
    const v = await new PositiveIdParamsValidator().validate(ctx)
    // 获取文章ID参数
    const id = v.get('path.id')
    // 查询文章
    const article = await ArticleDao.detail(id)

    // 通过 marked 工具解析 markdown 语法
    const content = marked(article.content.toString())

    // 合并数据
    const data = {article, content,}

    // 响应返回页面
    ctx.response.status = 200;
    ctx.response.set('Content-Type', 'text/html charset=utf-8')
    // 返回结果
    await ctx.render('article-detail', data)

})

// 404 页面
router.get('*', async ctx => {
  ctx.response.status = 200
  ctx.response.set('Content-Type', 'text/html charset=utf-8')
  await ctx.render('404')
})

module.exports = router
