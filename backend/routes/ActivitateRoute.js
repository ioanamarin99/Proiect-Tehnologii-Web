import express from 'express';
import { createActivitate, getActivitate, getActivitateById, updateActivitate, deleteActivitate } from '../logic/ActivitateLogic.js'

const router = express.Router();

router.route('/activitate').post(async (req, res) => {
    try {
        let activitate = await createActivitate(req.body);

        if (activitate.hasErrors)
            res.status(400).json(activitate);
        else
            res.status(200).json(activitate);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/activitate').get(async (req, res) => {
    try {
        res.status(200).json(await getActivitate());
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/activitate/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getActivitateById(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/activitate/:id').put(async (req, res) => {
    try {
        let activitate = await updateActivitate(req.params.id, req.body);

        if (activitate.hasErrors)
            res.status(400).json(activitate);
        else
            res.status(200).json(activitate);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/activitate/:id').delete(async (req, res) => {
    try {
        let activitate = await deleteActivitate(req.params.id);

        if (activitate.hasErrors)
            res.status(400).json(activitate);
        else
            res.status(200).json(activitate);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

export default router;