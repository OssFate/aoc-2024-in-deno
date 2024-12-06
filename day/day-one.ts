import { toNumber } from "../utils/convert.util.ts";
import {
  InputFiles,
  InputType,
  readInputFile,
} from "../utils/fileReader.util.ts";

async function one() {
  const firstList: number[] = [];
  const secondList: number[] = [];

  // first I'm going to read the input file
  const inputFile = await readInputFile(InputFiles.day_one, InputType.Lines);
  for (const line of inputFile) {
    const values = line.split("   ");
    firstList.push(toNumber(values[0]));
    secondList.push(toNumber(values[1]));
  }

  const firstSorted = firstList.sort();
  const secondSorted = secondList.sort();
  let endNum = 0;

  for (let i = 0; i < firstSorted.length; i++) {
    const newVal = Math.abs(firstSorted[i] - secondSorted[i]);
    endNum += newVal;
  }

  return endNum;
}

async function two() {
  const firstList: number[] = [];
  const secondList: number[] = [];

  // first I'm going to read the input file
  const inputFile = await readInputFile("day-one", InputType.Lines);
  for (const line of inputFile) {
    const values = line.split("   ");
    firstList.push(toNumber(values[0]));
    secondList.push(toNumber(values[1]));
  }

  const secondMap: Map<number, number> = new Map();
  for (const val of secondList) {
    const currentVal = secondMap.get(val);
    secondMap.set(val, currentVal ? currentVal + 1 : 1);
  }

  let endNum = 0;
  for (const item of firstList) {
    const value = secondMap.get(item) ?? 0;
    endNum += item * value;
  }

  return endNum;
}

export const day_one = {
  one,
  two,
};
