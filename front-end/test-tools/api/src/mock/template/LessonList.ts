import { Random as random } from 'mockjs'
import { CATEGORY } from '../../apiTypings/LessonList'

/**
 * 根据传入参数生成对应的课程模板
 * @param category 商品分类
 * @param count 商品的数量
 */
export default function generateLessonTemplate(
  category: CATEGORY = 0,
  count: number = 100
) {
  return {
    err: count > 0 ? 0 : 1,
    data: {
      [`list|${count}`]: [
        {
          title: random.ctitle(8, 20),
          video: random.image('720x360', random.hex(), 'video'),
          poster: random.image('720x360', random.hex(), 'poster'),
          'price|1-1000.2': 1,
          category
        }
      ]
    }
  }
}
