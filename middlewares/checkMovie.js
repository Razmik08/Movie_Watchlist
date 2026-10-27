export const checkMovies = (req, res, next) => {
    const { title, year, rating } = req.body;

    if (!title || !year || !rating) {
        return res.status(400).send({ ok: false, message: "title, year and rating are required" });
    }

    if (year < 1900 || year > 2026) {
        return res.status(400).send({ ok: false, message: "year must be between 1900 and 2026" });
    }

    if (rating < 1 || rating > 10) {
        return res.status(400).send({ ok: false, message: "rating must be between 1 and 10" });
    }

    next();
}