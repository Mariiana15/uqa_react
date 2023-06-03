import {
    PROTOCOL,
    TOKEN,
    VALIDATE,
} from "../actions/types";
import axios from "axios";
import config from '../appsettings.json';
import { GetToken } from '../components/utils'

export const GetHackToken = (id, email) => async (dispatch) => {

    let token = GetToken();
    let currentTimestamp = Date.now()
    if (Number(token.AtExpires) * 1000 < currentTimestamp) {

        const response = await axios.post(config.asana.serverBack + config.back.token, { id, email }, {
            headers: {
                // "Authorization": config.back.userBasic,
            }
        }).then(({ data }) => { return data });
        sessionStorage.setItem("token", response.AccessToken)
        sessionStorage.setItem("refToken", response.RefreshToken)
        sessionStorage.setItem("atExpires", response.AtExpires)
       // let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Number(response.AtExpires) * 1000)
        dispatch({ type: TOKEN, payload: response });

    }
    else {
        console.log("ttoken")
        console.log(token)
        dispatch({ type: TOKEN, payload: token });
    }

}

export const RefreshToken = (refresh_token) => async (dispatch) => {

    const response = await axios.post(config.asana.serverBack + config.back.refreshToken, { refresh_token }, {
        headers: {
            //"Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log("Refresh")
   // let date = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Number(response.AtExpires) * 1000)
    // console.log(date)

    dispatch({ type: TOKEN, payload: response });

}

export const DeleteToken = (token) => async (dispatch) => {

    const response = await axios.post(config.asana.serverBack +config.back.deleteToken, {}, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
}

export const GetProtocol = (token, query) => async (dispatch) => {

    const response = await axios.get(config.asana.serverBack + config.webSocket.protocol, {
        headers: {
            "Authorization": "Bearer " + token,
        },
        params: { q: query }
    }).then(({ data }) => { return data });
    //  console.log(response)
    dispatch({ type: PROTOCOL, payload: response });
}

export const AddRequirementTech = (that, token, bbdd,infrastructure, language, requirement, id, us) => {

    const response = axios.post(config.asana.serverBack + config.back.paramsTech, { bbdd, infrastructure, language, requirement, id, us }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { console.log(data); that.props.setContextSituational(data); return data });
    
    return response
}

export const SetParamsTech = (token, technologies, architecture, requirement, id) => {

    const response = axios.post(config.asana.serverBack + config.back.paramsTech, { technologies, architecture, requirement, id }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
    return response
}

export const SetStateUserStory = (token, state, id) => {

    const response = axios.post(config.asana.serverBack + config.back.changeState, { state, id }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
    return response
}

export const SetStateTest = (token,  testId) => {

    const response = axios.post(config.asana.serverBack + config.back.startTest, { testId }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
    return response
}

export const GetStateUserStory = (token,  id, that) => {

    const response = axios.get(config.asana.serverBack + config.back.stateUserStory,  {
        headers: {
            "Authorization": "Bearer " + token,
        },
        params: { id }
    }).then(({ data }) => { console.log("nuevo servicio");  console.log(data);  that.props.setContextSituational(data); return data });
   
    return response
}

export const SetStateSection = (token, state, id) => {

    const response = axios.post(config.asana.serverBack + config.back.changeStateSection, { state, id }, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
    return response
}


export const GetValidateSync = (token) => async (dispatch) => {

    const response = await axios.get(config.asana.serverBack + config.back.validate, {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }).then(({ data }) => { return data });
    console.log(response)
    if (response.error === undefined)
        dispatch({ type: VALIDATE, payload: response });
}