function maxDistance(movements) {
  // Score: 390
  let distance = 0

  let right = movements.match(/>/g)?.length ?? 0
  let left = movements.match(/</g)?.length ?? 0

  distance += right
  distance -= left

  let extraMov = movements.length - (right + left)

  return Math.abs(distance) + Math.abs(extraMov)
}