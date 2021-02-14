const Router = require('koa-router');

const {
    ArticleValidator,
    PositiveIdParamsValidator
} = require('../../validators/article');

const {Auth} = require('../../../middlewares/auth');
const {ArticleDao} = require('../../dao/article');

const {Resolve} = require('../../lib/helper');
const res = new Resolve();

const AUTH_ADMIN = 16;

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 创建文章
 */
router.post('/article', new Auth(AUTH_ADMIN).m, async (ctx) => {

    // 通过验证器校验参数是否通过
    const v = await new ArticleValidator().validate(ctx);

    // 创建文章
    await ArticleDao.create(v);

    // 返回结果
    ctx.response.status = 200;
    ctx.body = res.success('创建文章成功');
});

/**
 * 删除文章
 */
router.delete('/article/:id', new Auth(AUTH_ADMIN).m, async (ctx) => {

    // 通过验证器校验参数是否通过
    const v = await new PositiveIdParamsValidator().validate(ctx);

    // 获取文章ID参数
    const id = v.get('path.id');
    // 删除文章
    await ArticleDao.destroy(id);

    ctx.response.status = 200;
    ctx.body = res.success('删除文章成功');
})

/**
 * 更新文章
 */
router.put('/article/:id', new Auth(AUTH_ADMIN).m, async (ctx) => {

    // 通过验证器校验参数是否通过
    const v = await new PositiveIdParamsValidator().validate(ctx);

    // 获取文章ID参数
    const id = v.get('path.id');
    // 更新文章
    await ArticleDao.update(id, v);

    ctx.response.status = 200;
    ctx.body = res.success('更新文章成功');
})


/**
 * 获取文章列表
 */
router.get('/article', async (ctx) => {
    // 没有缓存，则读取数据库
    const articleList = await ArticleDao.list(ctx.query);
    ctx.response.status = 200;
    ctx.body = res.json(articleList)
});

/**
 * 查询文章详情
 */
router.get('/article/:id', async (ctx) => {
    // 通过验证器校验参数是否通过
    const v = await new PositiveIdParamsValidator().validate(ctx);

    // 获取文章ID参数
    const id = v.get('path.id');
    // 查询文章
    const article = await ArticleDao.detail(id);
    // 返回结果
    ctx.response.status = 200;
    ctx.body = res.json(article);
})

module.exports = router
