import { compile  } from 'path-to-regexp'

import { Routes } from '../constants/routes'

export const reservePath = (pathname: Routes, params?: any) => {
    return compile(pathname)(params)
}
