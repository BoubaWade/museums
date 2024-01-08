import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { Provider } from "react-redux";
import { createStore } from "../../app/store.jsx";
import NavBarHome from "./NavBarHome";
import SignUpModal from "../mainHome/signUp/SignUpModal.jsx";
import * as mocksSignReducers from "../../features/sign/signSlice";

describe("NavBarHome", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore()}>
        <NavBarHome />
        <SignUpModal />
      </Provider>
    );
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the NavBarHome", () => {
    expect(screen.getByTestId("button-sign-up")).toBeInTheDocument();
  });

  it("should call toggleSignUpForm() if isToggleSignUpForm change ", () => {
    let isToggleSignUpForm = false;
    const spy = vi
      .spyOn(mocksSignReducers, "toggleSignUpForm")
      .mockImplementation(() => isToggleSignUpForm);

    isToggleSignUpForm = true;
   
    expect(mocksSignReducers.toggleSignUpForm()).toBe(true);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(true);
  });
  it("should display signUpModal after click", async () => {
    const button = screen.getByTestId("button-sign-up");
    fireEvent.click(button);
    expect(await screen.findByText("CRÉER UN COMPTE")).toBeInTheDocument();
  });
});
