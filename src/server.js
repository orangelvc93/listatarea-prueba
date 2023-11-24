const app = require("./app")

const PORT = 3000;


app.listen(app.get("PORT"), () => {
    console.log(`Servidor respondiendo en el puerto http://localhost:${app.get("PORT")}`);
})







