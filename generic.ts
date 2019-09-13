// generic  泛型 ;使用any 会丢失返回信息

function identity<T>(arg: T): T {
  return arg
}

// 泛型函数接口, 这里会制定返回类型？？
interface GenericIdentityFn<T> {
  (arg: T): T
}

const genericIdentityFn: GenericIdentityFn<number> = identity