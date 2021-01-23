import ActivitateUtilizator from '../entities/ActivitateUtilizator.js'

async function createActivitateUtilizator(activitateUtilizator){
    return await ActivitateUtilizator.create(activitateUtilizator);
}

export {createActivitateUtilizator};