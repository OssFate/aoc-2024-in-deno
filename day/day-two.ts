import { toNumber } from "../utils/convert.util.ts";
import { InputType, readInputFile } from "../utils/fileReader.util.ts";

enum upDown {
  up,
  down,
  start,
}

async function one() {
  let stables = 0;

  const inputFile = await readInputFile("day_two", InputType.Lines);
  for (const line of inputFile) {
    const values = line.split(" ").map((l) => toNumber(l));

    const res = checkIsSave(values);
    if (res) stables++;
  }

  return stables;
}

async function two() {
  let stables = 0;

  const inputFile = await readInputFile("day_two", InputType.Lines);
  for (const line of inputFile) {
    const leLine = line.split(" ").map((l) => toNumber(l));

    const res = checkIsSave(leLine);
    if (res) stables++;
    else {
      for (const values of subLines(leLine)) {
        const res = checkIsSave(values);
        if (res) {
          stables++;
          break;
        }
      }
    }
  }

  return stables;
}

function checkIsSave(values: number[]) {
  const limit = 3;
  let going = upDown.start;

  for (let i = 1; i < values.length; i++) {
    const diff = values[i] - values[i - 1];
    if (diff === 0) break;
    if (Math.abs(diff) > limit) break;

    const newDir = diff < 0 ? upDown.down : upDown.up;
    if (going === upDown.start) {
      going = newDir;
      continue;
    }

    if (going !== newDir) break;
    if (i === values.length - 1) return true;
  }
  return false;
}

function subLines(line: number[]) {
  const newArray: number[][] = [];
  for (let i = 0; i < line.length; i++) {
    newArray.push(line.toSpliced(i, 1));
  }
  return newArray;
}

export const day_two = {
  one,
  two,
};

// line
//  |- subline
//        |- sub[0]
//        |- sub[1]
//        |- sub[2]
//        |- sub[3]
//        |- sub[4]
