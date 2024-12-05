const inputDir = "./input/";
const inputExt = ".txt";

export const InputFiles = {
  day_one: "day-one",
  day_two: "day-two",
} as const;

type InputFile = keyof typeof InputFiles;

export async function readInputFile<IT extends InputType>(
  file: InputFile,
  type: IT,
): Promise<ExpectedType[IT]> {
  const data = await Deno.readTextFile(
    `${inputDir}${InputFiles[file]}${inputExt}`,
  );
  let result;
  switch (type) {
    case InputType.Lines:
      result = data.split("\n");
      break;
    case InputType.Whole:
    default:
      result = data;
      break;
  }

  return result as ExpectedType[IT];
}

export const enum InputType {
  Lines,
  Whole,
}

type ExpectedType = {
  [InputType.Lines]: string[];
  [InputType.Whole]: string;
};
