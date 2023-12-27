import { css } from "styled-components";

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
  /* .modal-calendar-enter{
    opacity: 0%;
    transform: translateY(100%);
  }
  .modal-calendar-enter-active {
    opacity: 100%;
    transform: translateY(0px);
    transition: 500ms;
  }
  .modal-calendar-exit {
    opacity: 100%;
    transform: translateY(0px);
  }
  .modal-calendar-exit-active {
    opacity: 0%;
    transform: translateY(-100%);
    transition: 500ms;
  } */
`;
export const modalAdminAnimation = css`
  .modal-admin-appear {
    transform: translateY(100vh);
  }
  .modal-admin-appear-active {
    transform: translateY(0);
    transition: all 500ms;
  }
  /* .modal-admin-enter{
    opacity: 0;
    transform: translateY(100%);
  }
  .modal-admin-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: 500ms;
  }
  .modal-admin-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .modal-admin-exit-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: 500ms;
  } */
`;


 /* .animation-basket-appear {
    .item {
      transform: translateX(200px);
      opacity: 0;
    }
  }
  .animation-basket-appear-active {
    .item {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-enter {
    .item {
      transform: translateX(200px);
      opacity: 0;
    }
  }
  .animation-basket-enter-active {
    .item {
      transition: 0.3s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit {
    .item {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .item {
      transition: 0.3s;
      transform: translateX(-200px);
      opacity: 0;
    }
  } */