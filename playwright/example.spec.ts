import { expect, test } from "@playwright/test";

test("types into input", async ({ page }) => {
  page.goto("/");

  const h1 = page.getByRole("heading");
  expect(h1).toHaveText("Hello :)");

  const input = page.locator(".e2e-input");

  input.fill("Chuck Norris");
  input.fill("Tom Scott");
  input.fill("Ash Catchem");
  input.fill("James Bond");
  input.fill("Indiana Jones");
  input.fill("Luke Skywalker");
  input.fill("James O'Brian");

  await expect(input).toHaveValue("Chuck NorrisTom Scott");
  // there is more:
  // https://jadala-ajay16.medium.com/why-do-we-write-await-async-in-playwright-javascript-typescript-fa3c92f82841
});
