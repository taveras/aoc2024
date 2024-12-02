export function getListTotalDistance(
  left: Array<number>,
  right: Array<number>,
): number {
  let result = 0;
  const leftSorted = left.toSorted();
  const rightSorted = right.toSorted();
  for (var i = 0; i < leftSorted.length; i++) {
    result += Math.abs(leftSorted[i] - rightSorted[i]);
  }
  return result;
}

export function getListSimilarityScore(
  left: Array<number>,
  right: Array<number>,
): number {
  const getCount = (needle: number, haystack: Array<number>): number => {
    return haystack.reduce((acc: number, cur: number) => {
      return acc + Number(cur === needle);
    }, 0);
  };

  let result = 0;
  for (const num of left) {
    let count = 0;
    for (const other of right) {
      count += Number(other === num);
    }
    result += num * count;
  }

  return result;
}

if (import.meta.main) {
  const input = await Deno.readTextFile("01_input.txt");
  let leftList = [];
  let rightList = [];
  for (const line of input.split("\n")) {
    const res = line.split(/\s/);
    leftList.push(parseInt(res.at(0) as string, 10));
    rightList.push(parseInt(res.at(-1) as string, 10));
  }

  console.log("total distance = ", getListTotalDistance(leftList, rightList));
  console.log(
    "similarity score = ",
    getListSimilarityScore(leftList, rightList),
  );
}
