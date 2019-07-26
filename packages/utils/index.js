const hasProp = function (instance, prop) {
  const $options = instance.$options || {}
  const propsData = $options.propsData || {}
  return prop in propsData
}

const isEmptyObj = function (obj) {
  return obj === undefined || obj === null || (isObject(obj) && Object.keys(obj).length === 0)
}

const isObject = function (obj) {
  var type = typeof obj
  return type === 'function' || type === 'object' && !!obj
}

const isNumber = function (input) {
  var re = /^[0-9]+.?[0-9]*/
  return re.test(input)
}

export {
  hasProp,
  isObject,
  isEmptyObj,
  isNumber
}
