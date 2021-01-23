import Utilizator from '../entities/Utilizator.js';

function validateUtilizator(utilizator) {
    if (!utilizator || Object.entries(utilizator).length === 0)
        return { hasErrors: true, message: "You must provide user information" };

    if (!utilizator.ParolaUser)
        return { hasErrors: true, message: "User password is mandatory" };

    if (!utilizator.NumeUser)
        return { hasErrors: true, message: "User name is mandatory" };

    if (!utilizator.TipUser)
        return { hasErrors: true, message: "User type is mandatory" };

    return { hasErrors: false, message: "" };
}

async function createUtilizator(utilizator) {
    let error = validateUtilizator(utilizator);
    if (error.hasErrors)
        return error

    return await Utilizator.create(utilizator);
}

async function getUtilizator() {
    return await Utilizator.findAll();
}

async function getUtilizatorById(idUser) {
    return await Utilizator.findByPk(idUser);
}

async function updateUtilizator(id, utilizator) {
    if (parseInt(id) !== utilizator.IdUser)
        return { hasErrors: true, message: "Entity id diff" };    

    let updateEntity = await getUtilizatorById(id);

    if (!updateEntity)
        return { hasErrors: true, message: "There isn't an user with this id" }; 
        
    let error = validateUtilizator(utilizator);
    if (error.hasErrors)
        return error

    return await updateEntity.update(utilizator);
}

async function deleteUtilizator(id) {
    let deleteEntity = await getUtilizatorById(id);

    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't an user with this id" };

    return await deleteEntity.destroy();
}

export { createUtilizator, getUtilizator, getUtilizatorById, updateUtilizator, deleteUtilizator };