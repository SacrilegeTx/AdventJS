function findFirstRepeated(gifts) {
  // Code here
  const seen = {}
  for(id in gifts) {
    if (seen[id]) return id
    seen[id] = id
  }
  return -1
}