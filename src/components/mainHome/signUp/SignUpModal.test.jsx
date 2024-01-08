import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { Provider } from "react-redux";
import { createStore } from "../../../app/store";
// import mocksToggleSignUpForm from "../../../../tests/mocks";
import * as mocksSignReducers from "../../../features/sign/signSlice";
import SignUpModal from "./SignUpModal";
import Overlay from "../../reusable-ui/Overlay";
import SignUpForm from "./signUpForm/SignUpForm";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

describe("SignUpmodal", () => {
    // beforeEach(() => {
    //     render(
    //       <Provider store={createStore()}>
    //         <SignUpModal >
    //             <SignUpForm>
    //                 <PrimaryButton/>
    //             </SignUpForm>
    //         </SignUpModal >
    //       </Provider>
    //     );
    //   });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the SignUpmodal", () => {
    let isToggleSignUpForm;
    const toggleSignUpFormSpy = vi
      .spyOn(mocksSignReducers, "toggleSignUpForm")
      .mockImplementation(() => isToggleSignUpForm);

    isToggleSignUpForm = true;
    render(
      <Provider store={createStore()}>
        <SignUpModal />
      </Provider>
    );

    expect(mocksSignReducers.toggleSignUpForm()).toBe(true);
    expect(toggleSignUpFormSpy).toHaveBeenCalled();
  });

  it("should call toggleSignUpForm() if isToggleSignUpForm change ", () => {
    // const handleCloseModal = vi.fn().mockImplementation(isToggleSignUpForm => !isToggleSignUpForm);
    const toggleSignUpFormSpy = vi.spyOn(mocksSignReducers, "toggleSignUpForm");
    render(
      <Provider store={createStore()}>
        <SignUpModal/>
      </Provider>
    );
    const divElement = screen.getByTestId("overlay-signUp_modal");

    expect(toggleSignUpFormSpy).not.toHaveBeenCalled();

    mocksSignReducers.toggleSignUpForm();

    expect(divElement).toBeInTheDocument();
    expect(toggleSignUpFormSpy).toHaveBeenCalled();
  });

  it("should render the SignUpmodal", async () => {
    // render(
    //   <Provider store={createStore()}>
    //     <SignUpModal >
    //         <SignUpForm/>
    //     </SignUpModal >
    //   </Provider>
    // );
    let isRegistered = false;
    const toggleSignUpFormSpy = vi
      .spyOn(mocksSignReducers, "setIsRegistered")
      .mockImplementation(() => true);

    // expect(mocksSignReducers.setIsRegistered()).not.toBe(true);

    // isRegistered = true;
    expect(mocksSignReducers.setIsRegistered()).toBe(true);
    
    expect(toggleSignUpFormSpy).toHaveBeenCalled();
    // const button = screen.getByTestId("submit-signUp-form-button");
    // fireEvent.click(button);
    // expect(await screen.findByText("INSCRIPTION VALIDÉ !")).toBeInTheDocument();
  });
});
