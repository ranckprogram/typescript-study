interface Point {
  readonly x: number,
  readonly y: number,
}

let c: Point = { x: 5, y: 2 }

c.x

const arr: number[] = [1, 65, 23, 6]

let ro: ReadonlyArray<number> = arr

