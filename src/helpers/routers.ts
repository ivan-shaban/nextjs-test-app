import { compile  } from 'path-to-regexp'

import {
    Routes,
    SUB_SECTIONS,
} from '../constants/routes'

export const reservePath = (pathname: Routes, params?: { readonly subSection: SUB_SECTIONS}) => {
    return compile(pathname)(params)
}
