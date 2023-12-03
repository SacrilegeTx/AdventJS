function manufacture(gifts, materials) {
  // Score: 370
  const result = gifts.filter(gift => gift
    .split('')
    .every(material => materials.includes(material))
  );
  return result ?? []
}