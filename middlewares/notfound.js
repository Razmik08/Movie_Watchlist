export const notfound = (req,res) => {
    return res.status(404).send({ ok:false, message:"Route not found"})
}

export const errorHandler = (err, req, res, next) => {
    return res.status(500).send({ ok:false, message:"Something went wrong"})
}