const express = require("express");
const bodyParser = require('body-parser')

const articulos = require("./datos/articulos.js")


const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get("/blogs", (req, res) => {
  res.send(articulos);
});

//Buscar artículos según su ID
app.get("/blogs/:id", function(req, res){
    /**
     * 1- Buscar el articulo con el ID
     * 2- Si el articulo existe devuelvo ese articulo en concreto
     * 3- Si no existe, doy error y status code de 404 que significa que no ha sido encontrado
     */
    const blogId = req.params.id;
    const found = articulos.find(function(elemento) {
        return elemento.id == blogId;
    });
    if(found === undefined){
        res.status(404).send('This ID is not found.');
    }
    console.log(found);
    res.send(found);

});

//Editar artículos
app.put('/blogs/:id', (req, res) => {
  const id = req.params.id; 
  if(req.body.titulo == null || req.body.contenido == null || req.body.imagenes == null){
    res.send('Error atributos')
  }
  else{
    const newArt = articulos.map(function(elemento){
        if(elemento.id == id){
            elemento.titulo = req.body.titulo;
            elemento.contenido = req.body.contenido;
            elemento.imagenes = req.body.imagenes;
            return elemento;
        }  

        return elemento;
    });
    res.send(newArt);
  }

  
});

//Añadir artículos
app.post("/blogs", function(req, res){
    

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


