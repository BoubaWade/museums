import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "../../app/store.jsx";
import NavBarHome from "./NavBarHome";
import SignUpModal from "../mainHome/signUp/SignUpModal.jsx";
import * as mocksSignReducers from "../../features/sign/signSlice";

vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useDispatch: vi.fn(),
  };
});

describe("NavBarHome", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore()}>
        <NavBarHome />
        <SignUpModal />
      </Provider>
    );
  });

  it("should render the NavBarHome", () => {
    expect(screen.getByTestId("button-sign-up")).toBeInTheDocument();
  });

  it("should call toggleSignUpForm() ", () => {
    const toggleSignUpFormSpy = vi.spyOn(mocksSignReducers, "toggleSignUpForm");
    expect(toggleSignUpFormSpy).toBeCalledTimes(0);

    const mockReducer = mocksSignReducers.toggleSignUpForm();
    vi.mocked(useDispatch).mockReturnValue(mockReducer);
    expect(toggleSignUpFormSpy).toBeCalledTimes(1);
  });

  it("should display signUpModal after click", async () => {
    const button = screen.getByTestId("button-sign-up");
    fireEvent.click(button);
    expect(await screen.findByText("CRÉER UN COMPTE")).toBeInTheDocument();
  });
});
