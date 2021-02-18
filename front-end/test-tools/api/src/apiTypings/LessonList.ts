/**
 * 商品的分类
 */
export enum CATEGORY {
  ALL = 1,
  REACT,
  VUE,
  NODE
}

export interface LessonItem {
  title: string
  video: string
  poster: string
  price: number
  category: number
}

export interface LessonList {
  list: LessonItem[]
}

export interface LessonApi {
  err: number
  hasMore: boolean
  data: LessonList
}
