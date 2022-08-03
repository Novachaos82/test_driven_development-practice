const analyzer = (Arr) => {
  Arr.sort();
  if (Arr.length === 0) {
    return;
  }

  const ArrLength = Arr.length;
  const maximum = Arr[ArrLength - 1];
  const avg = Arr.reduce((acc, val) => acc + val, 0) / ArrLength;
  const minimum = Arr[0];

  return {
    average: avg,
    min: minimum,
    max: maximum,
    length: ArrLength,
  };
};

export { analyzer };
