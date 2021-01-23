import express from 'express';
import { createFeedback, getFeedback, getFeedbackById, updateFeedback, deleteFeedback } from '../logic/FeedbackLogic.js'

const router = express.Router();

router.route('/feedback').post(async (req, res) => {
    try {
        let feedback = await createFeedback(req.body);

        if (feedback.hasErrors)
            res.status(400).json(feedback);
        else
            res.status(200).json(feedback);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/feedback').get(async (req, res) => {
    try {
        res.status(200).json(await getFeedback());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/feedback/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getFeedbackById(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/feedback/:id').put(async (req, res) => {
    try {
        let feedback = await updateFeedback(req.params.id, req.body);

        if (feedback.hasErrors)
            res.status(400).json(feedback);
        else
            res.status(200).json(feedback);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/feedback/:id').delete(async (req, res) => {
    try {
        let feedback = await deleteFeedback(req.params.id);

        if (feedback.hasErrors)
            res.status(400).json(feedback);
        else
            res.status(200).json(feedback);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

export default router;