// function that receives a text in lowerCamelCase and returns the text written in snake_case

const camelCase = (lowerCamelCaseText) => {
  if (lowerCamelCaseText === lowerCamelCaseText[0].toUpperCase()) {
    return "The text starts with a capital letter";
  }

  if (lowerCamelCaseText.includes("-")) {
    return "The text contains dashes";
  }

  if (lowerCamelCaseText.includes("_")) {
    return "The text contains underscores";
  }

  if (lowerCamelCaseText === "") {
    return "You must provide some text";
  }

  return lowerCamelCaseText
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
};

describe("Given a function camelCase", () => {
  describe("When it receive a lowerCamelCase text", () => {
    test("Then it should return a snake_case text", () => {
      const lowerCamelCase = "lowerCamelCase";
      const expectedSnakeCase = "lower_camel_case";

      const resultSnakeCase = camelCase(lowerCamelCase);

      expect(resultSnakeCase).toBe(expectedSnakeCase);
    });
  });
});
