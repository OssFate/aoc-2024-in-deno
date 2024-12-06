import { toNumber } from "../utils/convert.util.ts";
import {
  InputFiles,
  InputType,
  readInputFile,
} from "../utils/fileReader.util.ts";

async function one() {
  const data = await readInputFile(InputFiles.day_three, InputType.Lines);
  let total = 0;

  for (const line of data) {
    const multOps = getOps(line);
    if (multOps == null) break;

    for (const op of multOps) {
      const justNums = op.slice(4, -1).split(",").map((str) => toNumber(str));
      total += justNums[0] * justNums[1];
    }
  }

  return total;
}

function getOps(line: string) {
  const regexp = /(mul\([0-9]{1,3},[0-9]{1,3}\))/g;
  const multOps = line.match(regexp);
  return multOps;
}

async function two() {
  const data = await readInputFile(InputFiles.day_three, InputType.Whole);
  let total = 0;
  const doT = "do()";
  const donT = "don't()";

  //   for (const line of data) {
  const doSplit = data.split(doT);

  for (const doLine of doSplit) {
    const [first] = doLine.split(donT);
    const multOps = getOps(first);
    if (multOps == null) break;

    for (const op of multOps) {
      const justNums = op.slice(4, -1).split(",").map((str) => toNumber(str));
      total += justNums[0] * justNums[1];
    }
  }
  //   }

  return total;
}

const day_three = {
  one,
  two,
};

export { day_three };
