import { expect, test } from "@playwright/test";

test("types into input", async ({ page }) => {
  await page.goto("/");

  const h1 = page.getByRole("heading");
  await expect(h1).toHaveText("Hello :)");

  const input = page.locator(".e2e-input");
  input.fill("Chuck Norris");
  expect(input).toHaveValue("Chuck Norris");
});
