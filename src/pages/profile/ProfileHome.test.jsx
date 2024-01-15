import { render, screen, waitFor } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import NavBarProfile from "../../components/navBarProfile/NavBarProfile";
import { createStore } from "../../app/store";
import { MemoryRouter } from "react-router-dom";
import Logo from "../../components/reusable-ui/Logo";
import NavProfileRightSide from "../../components/navBarProfile/navRightSide/NavProfileRightSide";
import ImageOrUserIcon from "../../components/navBarProfile/navRightSide/ImageOrUserIcon";
import PopupUserProfile from "../../components/navBarProfile/popupUserProfil/PopupUserProfile";
import SearchForm from "../../components/reusable-ui/SearchForm";
import MainProfile from "../../components/mainProfile/MainProfile";
import Basket from "../../components/mainProfile/basket/Basket";

describe("NavBarProfile", () => {
  it("should display NavBarProfile ", () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <NavBarProfile />
        </MemoryRouter>
      </Provider>
    );
    const welcome = screen.getByText(/bienvenue :/i);
    const navBar = screen.getByRole("navigation");

    expect(navBar).toBeInTheDocument();
    expect(welcome).toBeInTheDocument();
  });
  it("should display Logo", () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <Logo />
        </MemoryRouter>
      </Provider>
    );
    const title = screen.getByRole("heading", { name: /museums/i });
    expect(title).toBeInTheDocument();
  });
  it("should display SearchForm", () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <SearchForm />
        </MemoryRouter>
      </Provider>
    );
    const inputSearch = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button");

    expect(inputSearch).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it("should display switchButton", () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <NavProfileRightSide />
        </MemoryRouter>
      </Provider>
    );
    const switchButton = screen.getByText(/activer mode admin/i);
    expect(switchButton).toBeInTheDocument();
  });
  it("should display ImageOrUserIcon", () => {
    render(
      <Provider store={createStore()}>
        <ImageOrUserIcon />
      </Provider>
    );
    const iconProfile = screen.getByTestId("image-or-icon");
    expect(iconProfile).toBeInTheDocument();
  });
  it("should display PopupUserProfile", async () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <NavProfileRightSide />
        </MemoryRouter>
      </Provider>
    );

    const iconProfile = screen.getByTestId("image-or-icon");
    userEvent.click(iconProfile);
    const popUp = await screen.findByTestId("pop-up");
    expect(popUp).toBeInTheDocument();
  });
});

// describe("MainProfile", () => {
//   it("should display Basket", () => {
//     render(
//       <Provider store={createStore()}>
//         <MemoryRouter>
//           <Basket />
//         </MemoryRouter>
//       </Provider>
//     );
//     screen.logTestingPlaygroundURL();
//   });
// });
