import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { Provider, useSelector } from "react-redux";
import { createStore } from "../../../app/store";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import ClassicLoginForm from "./classicLoginForm/ClassicLoginForm";
import InputLogIn from "./classicLoginForm/InputLogIn";

vi.mock("react-router-dom", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useNavigate: vi.fn(),
  };
});
vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useSelector: vi.fn(),
  };
});

describe("LoginForm", () => {
  it("should display LoginForm ");
  render(
    <Provider store={createStore()}>
      <LoginForm />
    </Provider>
  );
  expect(screen.getByTestId("login-form")).toBeInTheDocument();

  it("should render ClassicLoginForm ");
  const mockState = { isToggleLoginForm: false };
  vi.mocked(useSelector).mockReturnValue(mockState);
  render(
    <Provider store={createStore()}>
      <ClassicLoginForm />
    </Provider>
  );
  expect(screen.getByTestId("classic-form")).toBeInTheDocument();
});

describe("InputLogIn(email)", () => {
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
  it("should render email input", () => {
    render(
      <Provider store={createStore()}>
        <InputLogIn field={field} />
      </Provider>
    );
    const email = screen.getByPlaceholderText("Enter your email");
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute("type", "email");
  });
  it("should not to match email input", () => {
    render(
      <Provider store={createStore()}>
        <InputLogIn field={field} />
      </Provider>
    );
    const email = screen.getByPlaceholderText("Enter your email");
    userEvent.type(email, "dada");
    expect(email.type).not.toMatch("test@tester.fr");
  });
  it("updates email value on change", async () => {
    render(
      <Provider store={createStore()}>
        <InputLogIn field={field} />
      </Provider>
    );
    const email = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(email, { target: { value: "test@tester.fr" } });
    await waitFor(() => {
      expect(email.value).toBe("test@tester.fr");
    });
  });
});

describe("InputLogIn(password)", () => {
  const onChangeMock = vi.fn();
  const field = {
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    value: "",
    onChange: onChangeMock,
    error: "password is required",
    autoFocus: false,
  };
  it("should render password input", () => {
    render(
      <Provider store={createStore()}>
        <InputLogIn field={field} />
      </Provider>
    );
    const password = screen.getByPlaceholderText("Enter your password");
    expect(password).toBeInTheDocument();
    expect(password).toHaveAttribute("type", "password");
  });
});
describe("ClassicLoginForm", () => {
  it("should display error credentials", () => {
    render(
      <Provider store={createStore()}>
        <ClassicLoginForm />
      </Provider>
    );
    expect();
  });
});
