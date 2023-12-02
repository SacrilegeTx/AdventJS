function findFirstRepeated (gifts) {
  // Score: 360
  return gifts.filter((item, idx) => gifts.indexOf(item) !== idx)?.[0] ?? -1
}
