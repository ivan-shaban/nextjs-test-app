export enum SECTIONS {
    LOGIN = 'login',
    LOBBY = 'lobby',
    SETTINGS = 'settings',
    ARENA = 'arena',
}

export enum SUB_SECTIONS {
    MAIN = 'main',
    PROFILE = 'profile',
    HEROES = 'heroes',
    STORE = 'store',
    LEARN = 'learn',
    WAITING = 'waiting',
}

export enum Routes {
    LOGIN = '/login',
    LOBBY = '/lobby/:subSection?',
    HEROES = '/lobby/heroes/:heroId?',
    SETTINGS = '/settings',
    ARENA = '/arena',
}
