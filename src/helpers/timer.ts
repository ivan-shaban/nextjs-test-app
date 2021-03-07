export const delay = async (ms: number) => {
    return new Promise((resolve) => {
        globalThis.setTimeout(resolve, ms)
    })
}
