const RandomId = (count: number, max: number): number[] => {
  const ids = new Set<number>();
  while (ids.size < count) {
    const randomId = Math.floor(Math.random() * max) + 1;
    ids.add(randomId);
  }
  return Array.from(ids);
};

export default RandomId;
