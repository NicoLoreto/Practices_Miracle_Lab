export function adn(string: string): string {
  if (string === "") {
    return "";
  }

  const array = string.split("");

  const adnArray = [];

  for (const i of array) {
    switch (i) {
      case "C":
        adnArray.push(i);
        continue;
      case "T":
        adnArray.push(i);
        continue;
      case "A":
        adnArray.push(i);
        continue;
      case "G":
        adnArray.push(i);
        continue;
    }
  }

  return adnArray.join("");
}

adn("CTAGGasdQWEdGTA");
