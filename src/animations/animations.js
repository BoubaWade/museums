import { css, keyframes } from "styled-components";

export const modalCalendarAnimation = css`
  .modal-calendar-appear {
    opacity: 0%;
    transform: translateY(100%);
  }
  .modal-calendar-appear-active {
    opacity: 100%;
    transform: translateY(0px);
    transition: 500ms;
  }
`;
export const modalAdminAnimation = css`
  .modal-admin-appear {
    transform: translateY(100vh);
  }
  .modal-admin-appear-active {
    transform: translateY(0);
    transition: all 500ms;
  }
`;
export const buttonDeleteMuseumAnimation = css`
  .delete-button-appear {
    opacity: 0%;
    transform: translateY(100%);
  }
  .delete-button-appear-active {
    opacity: 100%;
    transform: translateY(0px);
    transition: 500ms;
  }
`;

export const modalUpdateCardAnimation = css`
  .modal-update-card-appear {
    transform: translateY(100vh);
  }
  .modal-update-card-appear-active {
    transform: translateY(0);
    transition: all 500ms;
  }
`;
export const modalSignUpAnimation = keyframes`
  0%{
    transform: translateY(100vh);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 100%;
    transition: all 500ms;
  }
`;
