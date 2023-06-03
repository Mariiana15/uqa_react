import {
    ASANA_OAUTH,
    ASANA_TOKEN,
    ASANA_PROJECTS,
    ASANA_SESCTIONS,
} from "../actions/types";
import axios from "axios";

import config from '../appsettings.json';

export const Code = (token) => async (dispatch) => {
console.log(token)
    const response = await axios.get(config.asana.serverBack + config.asana.oauthAsanaCode, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    dispatch({ type: ASANA_OAUTH, payload: response });
}


export const Oauth = (code, code_verifier, token) => async (dispatch) => {
    const response = await axios.post(config.asana.serverBack + config.asana.oauth2Asana, { code, code_verifier }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    dispatch({ type: ASANA_TOKEN, payload: response.token });
}

export const Projects = (token, token_) => async (dispatch) => {

    const response = await axios.get(config.asana.serverBack + config.asana.asanaProjects, {
        headers: {
            "Authorization": "Bearer " + token_,
            token
        }
    }).then(({ data }) => { return data });

    dispatch({ type: ASANA_PROJECTS, payload: response });
}

export const Sections = (token, projectId, token_) => async (dispatch) => {

    const response = await axios.get(config.asana.serverBack + config.asana.asanaSections, {
        headers: {
            "Authorization": "Bearer " + token_,
            token,
            projectId
        }
    }).then(({ data }) => { return data });
    dispatch({ type: ASANA_SESCTIONS, payload: response });
}

export const CodeVerifier = (token) => async (dispatch) => {

    const response = await axios.get(config.asana.serverBack + config.asana.asanaCodeDB, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => {
        return data
    });
    console.log(response)
    dispatch({ type: ASANA_OAUTH, payload: response });
}