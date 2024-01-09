import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import {
  validateConfirmPassword,
  validateEmail,
  validatePasswordLength,
} from "./user";

describe("Email validation ", () => {
  let email = "test@tester.fr";
  it("an empty input should not be valid", () => {
    let email = "";
    expect(validateEmail(email)).toBeFalsy();
  });
  it("it should have an @ symbol", () => {
    expect(email.includes("@")).toBe(true);
  });
  it("it should have an . symbol", () => {
    expect(email.includes(".")).toBe(true);
  });

  it("an email should be pass validation", () => {
    expect(validateEmail(email)).toBe(true);
  });
});

describe("Password validation ", () => {
  it("an empty password should not be valid", () => {
    let password = "";
    expect(validatePasswordLength(password)).toBeFalsy();
  });
  it("an password should be pass validation", () => {
    let password = "tester";
    expect(validatePasswordLength(password)).toBe(true);
  });

  it("an empty confirmPassword should not be valid", () => {
    let password = "tester";
    let confirmPassword = "";
    expect(validateConfirmPassword(password, confirmPassword)).toBeFalsy();
  });
  it("an confirmPassword should be not match with password", () => {
    let password = "tester";
    let confirmPassword = "test";
    expect(validateConfirmPassword(password, confirmPassword)).toBeFalsy();
  });
  it("an confirmPassword should be match with password", () => {
    let password = "tester";
    let confirmPassword = "tester";
    expect(validateConfirmPassword(password, confirmPassword)).toBe(true);
  });
});
