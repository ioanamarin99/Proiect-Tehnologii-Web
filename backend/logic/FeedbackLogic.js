import Feedback from '../entities/FeedBack.js';

function validateFeedback(feedback) {
    if (!feedback || Object.entries(feedback).length === 0)
        return { hasErrors: true, message: "You must provide feedback information" };

    if (!feedback.DenumireFeedback)
        return { hasErrors: true, message: "Feedback name is mandatory" };

    if (!feedback.MomentFeedback)
        return { hasErrors: true, message: "Feedback moment is mandatory" };

    if (!feedback.IdUser)
        return { hasErrors: true, message: "User id is mandatory" };

    if (!feedback.IdActivitate)
        return { hasErrors: true, message: "Activity id is mandatory" };

    return { hasErrors: false, message: "" };
}

async function createFeedback(feedback) {
    let error = validateFeedback(feedback);
    if (error.hasErrors)
        return error

    return await Feedback.create(feedback);
}

async function getFeedback() {
    return await Feedback.findAll();
}

async function getFeedbackById(idFeedback) {
    return await Feedback.findByPk(idFeedback);
}

async function updateFeedback(id, feedback) {
    if (parseInt(id) !== feedback.IdFeedback)
        return { hasErrors: true, message: "Entity id diff" };    

    let updateEntity = await getFeedbackById(id);

    if (!updateEntity)
        return { hasErrors: true, message: "There isn't a feedback with this id" }; 
        
    let error = validateFeedback(feedback);
    if (error.hasErrors)
        return error

    return await updateEntity.update(feedback);
}

async function deleteFeedback(id) {
    let deleteEntity = await getFeedbackById(id);

    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't a feedback with this id" };

    return await deleteEntity.destroy();
}

export { createFeedback, getFeedback, getFeedbackById, updateFeedback, deleteFeedback };