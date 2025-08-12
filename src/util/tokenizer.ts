export const tokenizer = (input: string) => {
  input.split("").forEach((char) => {
    console.log(char.codePointAt(0));
  });
};

