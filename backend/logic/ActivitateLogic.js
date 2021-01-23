import Activitate from '../entities/Activitate.js';

function validateActivitate(activitate) {
    if (!activitate || Object.entries(activitate).length === 0)
        return { hasErrors: true, message: "You must provide activity information" };

    if (!activitate.DescriereActivitate)
        return { hasErrors: true, message: "Activity description is mandatory" };

    if (!activitate.DataActivitate)
        return { hasErrors: true, message: "Activity date is mandatory" };

    if (!activitate.DurataActivitate)
        return { hasErrors: true, message: "Activity duration is mandatory" };

    return { hasErrors: false, message: "" };
}

async function createActivitate(activitate) {
    let error = validateActivitate(activitate);
    if (error.hasErrors)
        return error

    return await Activitate.create(activitate);
}

async function getActivitate() {
    return await Activitate.findAll();
}

async function getActivitateById(idActivitate) {
    return await Activitate.findByPk(idActivitate);
}

async function updateActivitate(id, activitate) {
    if (parseInt(id) !== activitate.IdActivitate)
        return { hasErrors: true, message: "Entity id diff" };

    let updateEntity = await getActivitateById(id);

    if (!updateEntity)
        return { hasErrors: true, message: "There isn't an activity with this id" };

    let error = validateActivitate(activitate);
    if (error.hasErrors)
        return error

    return await updateEntity.update(activitate);
}

async function deleteActivitate(id) {
    let deleteEntity = await getActivitateById(id);

    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't an activity with this id" };

    return await deleteEntity.destroy();
}

export { createActivitate, getActivitate, getActivitateById, updateActivitate, deleteActivitate };