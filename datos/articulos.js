const articulos = [
  {
    id: 1,
    titulo: "El amanecer",
    fechaPublicacion: new Date(),
    autor: "Giliany Moreno",
    contenido: "lorem hfhfiriirf f f f ",
    imagenes:
      "https://ivanreebok.com/wp-content/uploads/2020/10/amanecer-captura.jpg",
    comentarios: [
      {
        id: 1,
        nombre: "Gini",
        fecha: new Date(),
        texto: "que chulo",
      },
    ],
  },
  {
    id: 2,
    titulo: "La noche estrellada",
    fechaPublicacion: "2025-06-29T21:45:00.000Z",
    autor: "Carlos Rivera",
    contenido: "Explorando la belleza del cielo nocturno.",
    imagenes:
      "https://www.nationalgeographic.com.es/medio/2023/07/01/noche-estrellada_00000000.jpg",
    comentarios: [
      {
        id: 1,
        nombre: "Ana",
        fecha: "2025-06-29T22:00:00.000Z",
        texto: "Me encanta esta foto",
      },
    ],
  },
  {
    id: 3,
    titulo: "Lluvia de verano",
    fechaPublicacion: "2025-06-28T10:20:00.000Z",
    autor: "Lucía Torres",
    contenido: "Una historia bajo la lluvia y la magia del verano.",
    imagenes: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    comentarios: [
      {
        id: 1,
        nombre: "Mario",
        fecha: "2025-06-28T11:00:00.000Z",
        texto: "Me trae buenos recuerdos",
      },
    ],
  },
  {
    id: 4,
    titulo: "Tardes en el campo",
    fechaPublicacion: "2025-06-27T17:00:00.000Z",
    autor: "Fernando López",
    contenido: "El campo ofrece una paz difícil de encontrar en la ciudad.",
    imagenes:
      "https://cdn.pixabay.com/photo/2015/09/18/19/03/farm-944445_960_720.jpg",
    comentarios: [
      {
        id: 1,
        nombre: "Sara",
        fecha: "2025-06-27T18:30:00.000Z",
        texto: "Se siente la tranquilidad",
      },
    ],
  },
  {
    id: 5,
    titulo: "Viaje al bosque",
    fechaPublicacion: "2025-06-26T09:00:00.000Z",
    autor: "Manuel Díaz",
    contenido:
      "Relato de una caminata entre árboles y sonidos de la naturaleza.",
    imagenes:
      "https://cdn.pixabay.com/photo/2017/03/20/01/40/forest-2159120_960_720.jpg",
    comentarios: [
      {
        id: 1,
        nombre: "Laura",
        fecha: "2025-06-26T09:45:00.000Z",
        texto: "Muy inspirador",
      },
    ],
  },
];


module.exports = articulos;