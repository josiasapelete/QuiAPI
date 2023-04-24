//GET Method
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const getStats = async (req, res, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, "./stats.json"));
        const stats = JSON.parse(data);

        res.json(stats);
    } catch (e) {
        next(e);
    }
};

router.route("/api").get(getStats);

module.exports = router;

const statsFilePath = path.join(__dirname, "./stats.json");
//POST Method
const createStats = async (req, res, next) => {
    try {
        const data = fs.readFileSync(statsFilePath);
        const stats = JSON.parse(data);
        const options = [req.body.A, req.body.B, req.body.C];

        const newStats = {
            id: stats.length + 1,
            question: req.body.question,
            options: options,
            answer: req.body.answer,
        };

        stats.push(newStats);
        fs.writeFileSync(statsFilePath, JSON.stringify(stats));
        res.status(201).json(newStats);
    } catch (e) {
        next(e);
    }
};

router.route("/api/v1/stats").post(createStats);

//PUT Method
const updateStats = async (req, res, next) => {
    try {
        const data = fs.readFileSync(statsFilePath);
        const stats = JSON.parse(data);
        const playerStats = stats.find(
            (player) => player.id === Number(req.params.id)
        );
        if (!playerStats) {
            const err = new Error("Question  not found");
            err.status = 404;
            throw err;
        }
        const options = [req.body.A, req.body.B, req.body.C];

        const newStatsData = {
            id: req.params.id,
            question: req.body.question,
            options: options,
            answer: req.body.answer,
        };

        const newStats = stats.map((player) => {
            if (player.id === Number(req.params.id)) {
                return newStatsData;
            } else {
                return player;
            }
        });
        fs.writeFileSync(statsFilePath, JSON.stringify(newStats));
        res.status(200).json(newStatsData);
    } catch (e) {
        next(e);
    }
};

router.route("/api:id").get(getStats).put(updateStats);

//DELETE Method
const deleteStats = async (req, res, next) => {
    try {
        const data = fs.readFileSync(statsFilePath);
        const stats = JSON.parse(data);
        const playerStats = stats.find(
            (player) => player.id === Number(req.params.id)
        );
        if (!playerStats) {
            const err = new Error("Question  not found");
            err.status = 404;
            throw err;
        }
        const newStats = stats
            .map((player) => {
                if (player.id === Number(req.params.id)) {
                    return null;
                } else {
                    return player;
                }
            })
            .filter((player) => player !== null);
        fs.writeFileSync(statsFilePath, JSON.stringify(newStats));
        res.status(200).end();
    } catch (e) {
        next(e);
    }
};

router
    .route("/api:id")
    .get(getStats)
    .put(updateStats)
    .delete(deleteStats);
