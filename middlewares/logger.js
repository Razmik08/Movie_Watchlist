export const logger = (req, res, next) => {
    const time = new Date().toLocaleTimeString()
    console.log(`[${time}] ${req.method} ${req.url}`)

    next()
}