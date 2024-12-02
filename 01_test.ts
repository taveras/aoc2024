import { assertEquals } from "jsr:@std/assert";
import { getListTotalDistance, getListSimilarityScore } from "./01.ts";

Deno.test("01 - getListTotalDistance", async () => {
  const leftList = [3, 4, 2, 1, 3, 3];
  const rightList = [4, 3, 5, 3, 9, 3];

  assertEquals(
    getListTotalDistance(leftList, rightList),
    11,
  );
});

Deno.test("01 - getListSimilarityScore", async () => {
  const leftList = [3, 4, 2, 1, 3, 3];
  const rightList = [4, 3, 5, 3, 9, 3];

  assertEquals(
    getListSimilarityScore(leftList, rightList),
    31,
  );
});
