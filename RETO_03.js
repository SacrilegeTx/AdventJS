function findNaughtyStep (original, modified) {
  // Score: 250
  // TO-DO: get better score
  if (original === modified) return
  let pos = 0
  while (original[pos] === modified[pos]) {
    pos++
  }
  let or = original.slice(pos)
  let mo = modified.slice(pos)
  return or.length > mo.length ? or[0] : mo[0]
}
