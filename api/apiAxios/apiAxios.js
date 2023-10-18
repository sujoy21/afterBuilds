/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import axios from 'axios';

export const axiosPostCall = async(url, body) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    let response = await axios.post(url, body, {
        headers: headers,
    })

    return response.data
}

export const axiosPutCall = async(url, body , accessToken) => {
    console.log(url)
    console.log(body)
    console.log(accessToken)
    const headers = {
        'Content-Type': 'application/json',
        'token' : accessToken
    }
    let response = await axios.put(url, body, {
        headers: headers,
    })

    return response.data
}

export const axiosGetCall = async(url,accessToken) => {
    const headers = {
        'Content-Type': 'application/json',
        'token' : accessToken
    }
    let response = await axios.get(url, {
        headers: headers,
    })

    return response.data
}