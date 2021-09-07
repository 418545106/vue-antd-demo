import { dictChildren } from '@/api/dict'

/**
 * 通过父级id获取子集字典
 * @param {Long} dictId 父级字典id
 * @param {*}} variable list变量
 */
export const getDict = (dictId, variable) => {
  if (!dictId) {
    return
  }
  dictChildren(dictId).then(res => {
    variable.push.apply(variable, res.data)
  })
}
