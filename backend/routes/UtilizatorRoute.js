import express from 'express';
import { createUtilizator, getUtilizator, getUtilizatorById, updateUtilizator, deleteUtilizator } from '../logic/UtilizatorLogic.js'

const router = express.Router();

router.route('/utilizator').post(async (req, res) => {
    try {
        let user = await createUtilizator(req.body);

        if (user.hasErrors)
            res.status(400).json(user);
        else
            res.status(200).json(user);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/utilizator').get(async (req, res) => {
    try {
        res.status(200).json(await getUtilizator());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/utilizator/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getUtilizatorById(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/utilizator/:id').put(async (req, res) => {
    try {
        let user = await updateUtilizator(req.params.id, req.body);

        if (user.hasErrors)
            res.status(400).json(user);
        else
            res.status(200).json(user);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/utilizator/:id').delete(async (req, res) => {
    try {
        let user = await deleteUtilizator(req.params.id);

        if (user.hasErrors)
            res.status(400).json(user);
        else
            res.status(200).json(user);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

export default router;