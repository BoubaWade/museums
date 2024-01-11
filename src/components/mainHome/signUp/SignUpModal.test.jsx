import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { Provider, useSelector } from "react-redux";
import { createStore } from "../../../app/store";
import * as mocksSignReducers from "../../../features/sign/signSlice";
import SignUpModal from "./SignUpModal";
import SignUpForm from "./signUpForm/SignUpForm";
import InputSignUp from "./signUpForm/InputSignUp";
import userEvent from "@testing-library/user-event";

vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useSelector: vi.fn(),
  };
});

describe("SignUpmodal", () => {
  it("should render SignUpmodal", () => {
    const { getByText } = render(
      <Provider store={createStore()}>
        <SignUpForm />
      </Provider>
    );
    const titleElement = getByText("CRÉER UN COMPTE");
    const buttonLabel = getByText("VALIDER");

    expect(titleElement).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();
  });

  it("should render Overlay  ", () => {
    const mockState = { isToggleSignUpForm: false };
    vi.mocked(useSelector).mockReturnValue(mockState);

    render(
      <Provider store={createStore()}>
        <SignUpModal />
      </Provider>
    );

    const divElement = screen.getByTestId("overlay-signUp_modal");
    expect(divElement).toBeInTheDocument();
  });

  it("should render sumbit success message", async () => {
    const mockState = { isRegistered: true };
    vi.mocked(useSelector).mockReturnValue(mockState);
    render(
      <Provider store={createStore()}>
        <SignUpModal />
      </Provider>
    );

    const messageSuccess = screen.getByTestId("success");
    expect(messageSuccess).toBeInTheDocument();
  });
  it("should render SignUpForm  ", () => {
    const mockState = { isRegistered: false };
    vi.mocked(useSelector).mockReturnValue(mockState);

    render(
      <Provider store={createStore()}>
        <SignUpModal />
      </Provider>
    );

    const divElement = screen.getByTestId("sign-up-form");
    expect(divElement).toBeInTheDocument();
  });

  describe("InputSignUp", () => {
    it("displays email input and verify the type of", () => {
      const field = {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        value: "",
        onChange: vi.fn(),
        error: "",
        autoFocus: false,
      };
      render(
        <Provider store={createStore()}>
          <InputSignUp field={field} />
        </Provider>
      );
      const email = screen.getByPlaceholderText("Enter your email");
      expect(email).toBeInTheDocument();
      expect(email).toHaveAttribute("type", "email");
      userEvent.type(email, "dada");
      expect(email.value).not.toMatch("test@tester.fr");
    });

    it("updates email value on change", async () => {
      const onChangeMock = vi.fn();
      const field = {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        value: null,
        onChange: onChangeMock,
        error: "",
        autoFocus: false,
      };
      render(
        <Provider store={createStore()}>
          <InputSignUp field={field} />
        </Provider>
      );
      const email = screen.getByPlaceholderText("Enter your email");
      fireEvent.change(email, { target: { value: "test@tester.fr" } });
      await waitFor(() => {
        expect(onChangeMock).toHaveBeenCalled();
        expect(email.value).toBe("test@tester.fr");
      });
    });

    it("should display error message", () => {
      const field = {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        value: "",
        onChange: vi.fn(),
        error: "email is required",
        autoFocus: false,
      };

      render(
        <Provider store={createStore()}>
          <InputSignUp field={field} />
        </Provider>
      );
      const errorMessage = screen.getByText("email is required");
      expect(errorMessage).toBeInTheDocument();
    });

    it("displays password input and verify the type of", () => {
      const field = {
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        value: "",
        onChange: vi.fn(),
        error: "password is required",
        autoFocus: false,
      };

      render(
        <Provider store={createStore()}>
          <InputSignUp field={field} />
        </Provider>
      );
      const password = screen.getByPlaceholderText("Enter your password");
      expect(password).toBeInTheDocument();
      expect(password).toHaveAttribute("type", "password");
    });

    it("updates password value on change", async () => {
      const onChangeMock = vi.fn();
      const field = {
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        value: null,
        onChange: onChangeMock,
        error: "",
        autoFocus: false,
      };
      render(
        <Provider store={createStore()}>
          <InputSignUp field={field} />
        </Provider>
      );
      const password = screen.getByPlaceholderText("Enter your password");
      fireEvent.change(password, { target: { value: "password-value" } });
      await waitFor(() => {
        expect(onChangeMock).toHaveBeenCalled();
        expect(password.value).toBe("password-value");
      });
    });
    it("displays error message", () => {
      const field = {
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        value: "",
        onChange: vi.fn(),
        error: "password is required",
        autoFocus: false,
      };

      render(
        <Provider store={createStore()}>
          <InputSignUp field={field} />
        </Provider>
      );
      const errorMessage = screen.getByText("password is required");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
