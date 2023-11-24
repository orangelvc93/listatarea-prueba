const { Router } = require('express');
const router = Router();
const fs = require('fs');
const { crearTarea, eliminaTarea } = require('../controllers/tareas');
const { validarCampos, validarDuplicados, validaIndex } = require('../middlewares/validar-errores');

//Leemos el archivo json y transformamos el contenido de string a jsons
const listaJson = fs.readFileSync('src/lista-tareas.json', 'utf-8');
let listaTareas = JSON.parse(listaJson);

router.get('/task', (req, res) => {
    res.json(listaTareas)
})

// 4. Hacer una solicitud POST a una ruta específica para crear una tarea.
router.post('/task', [validarCampos, validarDuplicados], crearTarea);

//Hacer una solicitud DELETE a una ruta específica para eliminar una tarea en especifico.
router.delete('/task', validaIndex, eliminaTarea);




module.exports = router;