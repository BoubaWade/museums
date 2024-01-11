import { expect, describe, it, vi, afterEach } from "vitest";
import {
  setBasket,
  setDatePicked,
  setHourPicked,
  setIsReserved,
} from "./basketSlice";
import { fakeBasketToTest } from "../../config/config";

describe("basket reducers", () => {
  describe("basket", () => {
    it("should return default state", () => {
      const newState = setBasket([]).payload;
      expect(newState).toEqual([]);
    });
    it("should return new state", () => {
      const basket = fakeBasketToTest;
      const newState = setBasket(basket).payload;
      expect(newState).toEqual(fakeBasketToTest);
    });
  });
  describe("setDatePicked", () => {
    it("should return default state", () => {
      const newState = setDatePicked("").payload;
      expect(newState).toEqual("");
    });
    it("should return new state", () => {
      const datePicked = "12/01/2000";
      const newState = setDatePicked(datePicked).payload;
      expect(newState).toEqual("12/01/2000");
    });
  });
  describe("setHourPicked", () => {
    it("should return default state", () => {
      const newState = setHourPicked("").payload;
      expect(newState).toEqual("");
    });
    it("should return new state", () => {
      const datePicked = "10:30";
      const newState = setHourPicked(datePicked).payload;
      expect(newState).toEqual("10:30");
    });
  });
  describe("setIsReserved", () => {
    it("should return default state", () => {
      const newState = setIsReserved(false).payload;
      expect(newState).toEqual(false);
    });
    it("should return new state", () => {
      const isReserved = true;
      const newState = setIsReserved(isReserved).payload;
      expect(newState).toEqual(true);
    });
  });
});
