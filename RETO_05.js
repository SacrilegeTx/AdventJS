function cyberReindeer(road, time) {
  // Score: 160 
  // TO-DO: get better score
  let currentRoad = road;
  const result = [road];
  let charBeforeSanta = ".";
  let nextPosition = 1;
  for (let i = 1; i < time; i++) {
    if (i == 5) {
      currentRoad = currentRoad.replaceAll("|", "*");
    }
    if (currentRoad[nextPosition] != "|") {
      currentRoad = currentRoad.split("");
      currentRoad.splice(nextPosition - 1, 1, charBeforeSanta);
      charBeforeSanta = currentRoad[nextPosition];
      currentRoad.splice(nextPosition, 1, "S");
      currentRoad = currentRoad.join("");
      nextPosition++;
    }
    result.push(currentRoad);
  }
  return result;
}