
const fs = require('fs');


//Leemos el archivo json y transformamos el contenido de string a jsons
const listaJson = fs.readFileSync('src/lista-tareas.json', 'utf-8');
const listaTareas = JSON.parse(listaJson);


//Valida que los campos ID y DESCRIPTION no estén vacíos.
const validarCampos = (req, res, next) => {
    const { id, description } = req.body;
    if (!id || !description) {
        return res.status(400).json({ error: "Los campos deben tener un id y una descripción" });
    }
    next();
}

//valida que el ID ya se encuentre agregado en la base de datos.
const validarDuplicados = (req, res, next) => {
    const { id, description } = req.body;
    const nuevaTarea = {
        id,
        isCompleted: false,
        description
    }
    const existe = listaTareas.some(tarea => tarea.id === nuevaTarea.id)
    if (existe) {
        return res.status(400).json({ error: `El id ${nuevaTarea.id} ya se encuentra en uso.` })
    }
    req.tarea = nuevaTarea;
    next();
}

//Valida que el index sea igual que el elemento body
const validaIndex = (req, res, next) => {
    const taskId = req.body.id;
    const index = listaTareas.findIndex(task => task.id === taskId);
    if (index === -1) {
        return res.status(404).json({ error: 'La tarea no existe' });
    }
    req.index = index
    next();
}


module.exports = { validarCampos, validarDuplicados, validaIndex }