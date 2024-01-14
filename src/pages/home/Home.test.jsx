import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import Home from "./Home";
import { Provider } from "react-redux";
import { createStore } from "../../app/store";
import Carrousel from "../../components/mainHome/carrousel/Carrousel";
import ClassicLoginForm from "../../components/mainHome/login/classicLoginForm/ClassicLoginForm";
import { MemoryRouter } from "react-router-dom";
import NavBarHome from "../../components/navBarHome/NavBarHome";
import SignUpForm from "../../components/mainHome/signUp/signUpForm/SignUpForm";
import SignUpModal from "../../components/mainHome/signUp/SignUpModal";
import Overlay from "../../components/reusable-ui/Overlay";

describe("Home", () => {
  it("should display NavBarHome", () => {
    render(
      <Provider store={createStore()}>
        <NavBarHome />
      </Provider>
    );
    const signUpButton = screen.getByRole("button", { name: /s'inscrire/i });
    expect(signUpButton).toBeInTheDocument();
  });
  it("should display Carrousel", () => {
    render(
      <Provider store={createStore()}>
        <Carrousel />
      </Provider>
    );
    const carrousel = screen.getByTestId("carrousel");
    const button = screen.getByRole("button", {
      name: /connexion/i,
    });
    const imagesList = screen.getAllByRole("img");
    expect(carrousel).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(imagesList).toHaveLength(10);
  });
  it("should display ClassicLoginForm", () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <ClassicLoginForm />
        </MemoryRouter>
      </Provider>
    );
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByPlaceholderText(/mot de passe/i);
    const button = screen.getByRole("button", {
      name: /connexion/i,
    });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("should display SignUpModal", () => {
    render(
      <Provider store={createStore()}>
        <SignUpModal />
      </Provider>
    );
    const signUp = screen.getByTestId("sign-up-form");
    expect(signUp).toBeInTheDocument();
  });
  it("should display SignUpForm", () => {
    render(
      <Provider store={createStore()}>
        <SignUpForm />
      </Provider>
    );
    const title = screen.getByRole("heading", {
      name: /créer un compte/i,
    });
    const email = screen.getByRole("textbox");
    // const password = screen.getByPlaceholderText(/mot de passe/i);
    // const password = container.querySelector(
    //   '#sandbox > div > form > div:nth-child(3) > input[type="password"]'
    // );
    const confirmPassword = screen.getByPlaceholderText(
      /confirmation mot de passe/i
    );
    const button = screen.getByRole("button", {
      name: /valider/i,
    });
    expect(title).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    // expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
