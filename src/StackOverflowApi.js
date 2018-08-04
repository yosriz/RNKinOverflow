/* @flow */
import React, { PureComponent } from 'react';

const STACKOVERFLOW_API = "https://api.stackexchange.com/2.2/"

export const getQuestions = async (tags: string) => {

    const params = { order: "desc", pagesize: 20, sort: 'activity', tagged: tags, site: 'stackoverflow', filter: 'unsafe' }
    const url = STACKOVERFLOW_API + 'search/' + `?${encodeAsURI(params)}`

    const response = await fetch(url)
    return await response.json()
}

export const encodeAsURI = (params: Object): string =>
    Object.keys(params)
        .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
