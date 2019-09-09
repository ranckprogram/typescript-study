interface SearchFunc {
  (source: string, id: string): boolean
}

let mySearch: SearchFunc

mySearch = function (src, id) {
  return src.search(id) > -1;
}