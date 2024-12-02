import { assertEquals } from "jsr:@std/assert";
import { getSafeReportCount } from "./02.ts";

Deno.test("02 - getSafeReportCount", async () => {
  const reports = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];

  assertEquals(
    getSafeReportCount(reports),
    2,
  );
});
