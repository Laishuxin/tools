import _ from 'lodash'
import Router from 'koa-router'
import apiData from '../../../mock'
import { CATEGORY } from '../../../apiTypings/LessonList'
const router = new Router()

// Swipe
router.get('/swipe', (ctx, next) => {
  ctx.body = apiData.swipeData
  return next()
})

// LessonList
router.get('/lessonlist', (ctx, next) => {
  const _category = _.get(ctx.query, 'category')
  const category =
    typeof _category === 'undefined'
      ? CATEGORY.ALL
      : parseInt(_category as string)

  ctx.body = apiData.generateLessonData(category)
  return next()
})

export default router
