// import module
import Mock from 'mockjs'
import { SPLIT_LINE_LOG } from '../utils/logUtils'
// end import module

// import template
import swipeTemplate from './template/Swipe'
import lessonTemplateGen from './template/LessonList'
// end import template

// import interface
import { SwipeApi } from '../apiTypings/Swipe'
import { CATEGORY } from '../apiTypings/LessonList'
// end import interface

// 设置json string的空格
const space: undefined | number =
  process.env.NODE_ENV === 'development' ? 2 : undefined

// 生成json字符串
// swipe
const swipeData: SwipeApi = Mock.mock(swipeTemplate)
// const _swipeData: SwipeApi = Mock.mock(swipeTemplate)
// const swipeData = JSON.stringify(_swipeData, null, space)
// lesson
const generateLessonData = function (
  category: CATEGORY,
  count: number = 100
): any {
  let lessonTemplate = lessonTemplateGen(category, count)
  // return JSON.stringify(Mock.mock(lessonTemplate), null, space)
  return Mock.mock(lessonTemplate)
}

if (
  process.env.NODE_ENV === 'development' &&
  process.env.MOCK_DEBUG === 'true'
) {
  // log swipe data
  console.log(SPLIT_LINE_LOG)
  console.log('swipe data =')
  console.log(swipeData)
  console.log(SPLIT_LINE_LOG)

  // log lesson data
  console.log(SPLIT_LINE_LOG)
  console.log('lesson data =')
  console.log(generateLessonData(0))
  console.log(SPLIT_LINE_LOG)
}

export default {
  swipeData,
  generateLessonData
}
