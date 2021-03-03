export enum SECTIONS {
    LOGIN = 'login',
    LOBBY = 'lobby',
    SETTINGS = 'settings',
    ARENA = 'arena',
}

export enum SUB_SECTIONS {
    PROFILE = 'profile',
}

export enum Routes {
    LOGIN = '/login',
    LOBBY = '/lobby/:subSection?',
    SETTINGS = '/settings',
    ARENA = '/arena',
}
