function findFirstRepeated(gifts) {
  // Score: 260
  const setGifts = new Set(gifts)
  const idx = gifts.findIndex((gift, i) => gift !== [...setGifts][i])
  return gifts[idx] ?? -1
}