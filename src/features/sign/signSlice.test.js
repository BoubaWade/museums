import { expect, describe, it, vi, afterEach } from "vitest";
import {
  setCurrentUser,
  setErrorLogIn,
  setIsRegistered,
  setUserEmail,
  toggleLoginForm,
  toggleSignUpForm,
} from "./signSlice";

describe("sign reducers", () => {
  describe("setUserEmail", () => {
    it("should return default state", () => {
      const action = setUserEmail("");
      const newState = action.payload;
      expect(newState).toEqual("");
    });
    it("should return new state", () => {
      const userEmail = "test@tester.fr";
      const action = setUserEmail(userEmail);
      const newState = action.payload;
      expect(newState).toEqual("test@tester.fr");
    });
  });
  describe("setCurrentUser", () => {
    it("should return default state", () => {
      const action = setCurrentUser(null);
      const newState = action.payload;
      expect(newState).toEqual(null);
    });
    it("should return new state", () => {
      const currentUser = {
        email: "test@tester.fr",
        userId: "azerZO12dr",
        photoURL: "https://picture.jpeg",
      };
      const action = setCurrentUser(currentUser);
      const newState = action.payload;
      expect(newState).toEqual({
        email: "test@tester.fr",
        userId: "azerZO12dr",
        photoURL: "https://picture.jpeg",
      });
    });
  });
  describe("setErrorLogIn", () => {
    it("should return default state", () => {
      const action = setErrorLogIn("");
      const newState = action.payload;
      expect(newState).toEqual("");
    });
    it("should return new state", () => {
      const errorLogin = "error login";
      const action = setErrorLogIn(errorLogin);
      const newState = action.payload;
      expect(newState).toEqual("error login");
    });
  });
  describe("toggleSignUpForm", () => {
    it("should return default state", () => {
      const action = toggleSignUpForm(true);
      const newState = action.payload;
      expect(newState).toEqual(true);
    });
    it("should return new state", () => {
      const isToggleSignUpForm = false;
      const action = toggleSignUpForm(isToggleSignUpForm);
      const newState = action.payload;
      expect(newState).toEqual(false);
    });
  });
  describe("toggleLoginForm", () => {
    it("should return default state", () => {
      const action = toggleLoginForm(false);
      const newState = action.payload;
      expect(newState).toEqual(false);
    });
    it("should return new state", () => {
      const isToggleLoginForm = true;
      const action = toggleLoginForm(isToggleLoginForm);
      const newState = action.payload;
      expect(newState).toEqual(true);
    });
  });
  describe("setIsRegistered", () => {
    it("should return default state", () => {
      const action = setIsRegistered(false);
      const newState = action.payload;
      expect(newState).toEqual(false);
    });
    it("should return new state", () => {
      const isRegistered = true;
      const action = setIsRegistered(isRegistered);
      const newState = action.payload;
      expect(newState).toEqual(true);
    });
  });
});
