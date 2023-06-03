
import {
  SIGN_IN,
  SIGN_OUT,
 

  MAIN_CARD,
  PAGE_DASH,
  TOKEN,
  ASANA_PROJECT,
  ASANA_SESCTION,
  US, 
  MENU,
  OPENMENU,
  FILTER,
  FILTERSPRING,
  ORDER,
  INDEXPROJECT,
  VALIDATE,
  MODAL_OPEN,
  TEXT_INFORMATION, 
  TYPE_MODAL,
  CONTEXT_SITUATIONAL,
  SEL_CARD
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};


export const mainCard = (card) => {
  return {
    type: MAIN_CARD,
    payload: card,
  };
};

export const pageDash = (page) => {
  return {
    type: PAGE_DASH,
    payload: page,
  };
};

export const asanaSetProjectId = (id) => {
  return {
    type: ASANA_PROJECT,
    payload: id,
  };
};

export const asanaSetSectionId = (id) => {
  return {
    type: ASANA_SESCTION,
    payload: id,
  };
};

export const setUS = (uss) => {
  return {
    type: US,
    payload: uss,
  };
};


export const setTokenHack = (token) => {
  return {
    type: TOKEN,
    payload: token,
  };
};

export const setMenu = (menu) => {
  return {
    type: MENU,
    payload: menu,
  };
};

export const openMenu = (open) => {
  return {
    type: OPENMENU,
    payload: open,
  };
};

export const filterSearch = (filter) => {
  return {
    type: FILTER,
    payload: filter,
  };
};

export const filterSpring = (filter) => {
  return {
    type: FILTERSPRING,
    payload: filter,
  };
};

export const orderStory = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setIndexProject = (index) => {
  return {
    type: INDEXPROJECT,
    payload: index,
  };
};

export const setValidateSyncAsana = (v) => {
  return {
    type: VALIDATE,
    payload: v,
  };
};

export const setModalOpen = (v) => {
  return {
    type: MODAL_OPEN,
    payload: v,
  };
};

export const setTextInformation = (v) => {
  return {
    type: TEXT_INFORMATION,
    payload: v,
  };
};

export const setTypeModal = (v) => {
  return {
    type: TYPE_MODAL,
    payload: v,
  };
};

export const setContextSituational = (v) => {
  return {
    type: CONTEXT_SITUATIONAL,
    payload: v,
  };
};

export const setSelCard = (v) => {
  return {
    type: SEL_CARD,
    payload: v,
  };
};
