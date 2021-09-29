export async function getLocaleMessages(locale: string) {
    const fullPath = await import(`../../public/translations/${locale}.json`)

    return fullPath
}
