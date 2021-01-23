import express from 'express';
import {createActivitateUtilizator} from '../logic/ActivitateUtilizatorLogic.js'

const router = express.Router();

router.route('/activitate-utilizator').post(async(req, res) => {
    return res.json(await createActivitateUtilizator(req.body));
})

export default router;

