const fs = require('fs');


//Leemos el archivo json y transformamos el contenido de string a jsons
const listaJson = fs.readFileSync('src/lista-tareas.json', 'utf-8');
const listaTareas = JSON.parse(listaJson);

const crearTarea = (req, res) => {
    try {
        listaTareas.push(req.tarea);
        //Convertimos el array en un string.
        const listaTareaJson = JSON.stringify(listaTareas);
        //Escribimos el archivo y guardamos la información de la lista de tareas
        fs.writeFileSync('src/lista-tareas.json', listaTareaJson, 'utf-8')
        res.json(listaTareas)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}


const eliminaTarea = (req, res) => {
    req.tarea = listaTareas
    listaTareas.splice(req.index, 1);
    //Convertimos el array en un string.
    const listaTareaJson = JSON.stringify(listaTareas);
    //Escribimos el archivo y guardamos la información de la lista de tareas
    fs.writeFileSync('src/lista-tareas.json', listaTareaJson, 'utf-8')
    res.json(listaTareas)
}




module.exports = { crearTarea, eliminaTarea }