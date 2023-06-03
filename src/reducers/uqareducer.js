import {
  MAIN_CARD,
  PAGE_DASH,
  ASANA_OAUTH,
  ASANA_TOKEN,
  ASANA_PROJECTS,
  ASANA_PROJECT,
  ASANA_SESCTIONS,
  ASANA_SESCTION,
  TOKEN,
  PROTOCOL,
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


} from "../actions/types";

const INTIAL_STATE = {
  card: null,
  page: null,
  asanaOauth: null,
  asanaToken: null,
  asanaProjects: null,
  asanaProjectId: null,
  asanaSections: null,
  asanaSectionId: null,
  token: null,
  protocol: null,
  uss: null,
  menu: null,
  flagMenu: null,
  filter: null,
  filterSprings: null,
  order: [],
  indexProject: 0,
  validate: null,
  modalOpen: null,
  text: null,
  type_modal: null,
  context_situational: null,
  sel_card: null
};

const uqaReducer = (state = { INTIAL_STATE }, action) => {
  switch (action.type) {



    case MAIN_CARD:
      return { ...state, card: action.payload };
    case PAGE_DASH:
      return { ...state, page: action.payload };
    case ASANA_OAUTH:
      return { ...state, asanaOauth: action.payload };
    case ASANA_TOKEN:
      return { ...state, asanaToken: action.payload };
    case ASANA_PROJECTS:
      return { ...state, asanaProjects: action.payload };
    case ASANA_PROJECT:
      return { ...state, asanaProjectId: action.payload };
    case ASANA_SESCTIONS:
      return { ...state, asanaSections: action.payload };
    case ASANA_SESCTION:
      return { ...state, asanaSectionId: action.payload };
    case PROTOCOL:
      return { ...state, protocol: action.payload };
    case TOKEN:
      return { ...state, token: action.payload };
    case US:
      return { ...state, uss: action.payload };
    case MENU:
      return { ...state, menu: action.payload };
    case OPENMENU:
      return { ...state, flagMenu: action.payload };
    case FILTER:
      return { ...state, filter: action.payload };
    case FILTERSPRING:
      return { ...state, filterSprings: action.payload };
    case ORDER:
      return { ...state, order: action.payload };
    case INDEXPROJECT:
      return { ...state, indexProject: action.payload };
    case VALIDATE:
      return { ...state, validate: action.payload };
    case MODAL_OPEN:
      return { ...state, modalOpen: action.payload };
    case TEXT_INFORMATION:
      return { ...state, text: action.payload };
    case TYPE_MODAL:
      return { ...state, type_modal: action.payload };
    case CONTEXT_SITUATIONAL:
      return { ...state, context_situational: action.payload };
    case SEL_CARD:
      return { ...state, sel_card: action.payload };

    default:
      return state;
  }
};
export default uqaReducer;
