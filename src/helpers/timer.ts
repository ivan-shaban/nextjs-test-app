export const delay = async (ms: number) => {
    return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
    })
}
