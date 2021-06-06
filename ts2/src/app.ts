const btn = document.querySelector("#btn");

btn?.addEventListener("click", () => {
  console.log("click");
});

function test(str: string, _?: number) {
  console.log(str);
  console.log(arguments);
}
test("qwe", 123);
