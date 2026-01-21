Ejercicio A: Comparación de estructuras
Diferencias en los IDs: En PostgreSQL los IDs eran números simples (1, 2, 3...), lo cual era fácil de leer. En cambio, en MongoDB el ID es una cadena larga y extraña de letras y números (ObjectId) que se ve más compleja.

Manejo de Timestamps: En ambos casos veo las fechas de creación, pero en Mongo siento que es más automático. Los campos createdAt y updatedAt se agregan solos al documento JSON sin tener que configurar columnas estrictas.

Reflexión sobre el cambio (Parte 6.2)
Flexibilidad (Agregar campo "edad"): Es mucho más fácil en MongoDB. Solo agrego el campo en mi código y listo, los nuevos datos se guardan con edad. En SQL tendría que alterar la tabla antes.

Relaciones: Para este caso de usuarios y posts, SQL se siente más sólido porque las claves foráneas "amarran" los datos de verdad. En Mongo funciona bien con referencias, pero se siente un poco más "manual".

Consultas complejas (4 tablas): Definitivamente preferiría SQL. SQL está hecho para cruzar tablas. Intentar unir 4 colecciones en Mongo suena a que sería un código muy enredado.

Escalabilidad: Sería clave si mi aplicación se vuelve gigante (tipo red social mundial). Si tuviera tantos datos que no caben en una sola computadora, Mongo facilita dividir esos datos en varios servidores.

Evaluación Final (Parte 9)
1. ¿Diferencia entre ORM y ODM? El ORM (Sequelize) sirve para tablas y filas, como un Excel rígido. El ODM (Mongoose) sirve para documentos, que son básicamente objetos JSON. Uno organiza cuadros y el otro organiza objetos.

2. ¿Por qué MongoDB usa ObjectIds en lugar de números? Porque si tengo la base de datos repartida en muchas computadoras, usar números como 1, 2, 3 causaría repetidos. El código largo del ObjectId asegura que sea único globalmente sin llevar una cuenta centralizada.

3. ¿Qué hace el método .populate()? Es un truco que cambia el ID por la información real. Si un post tiene el ID del autor, .populate() busca al autor y me trae sus datos para verlos juntos, simulando un JOIN.

4. ¿Cuándo usar documentos embebidos vs referencias? Usaría embebidos si la información es poca y siempre va junta (ej: direcciones de un usuario). Usaría referencias si la lista puede crecer muchísimo (ej: comentarios en un post viral).

5. ¿Ventajas de MongoDB aquí? Se siente más natural programar. Como uso JavaScript en el frontend y backend, enviar y guardar JSON en Mongo es directo, no tengo que transformar los datos a tablas.

6. ¿Ventajas de PostgreSQL aquí? El orden y la seguridad. Postgres no me deja cometer errores tontos, como guardar una letra donde va un número o dejar datos huérfanos.

7. ¿Transacciones en MongoDB? Investigué que sí existen (para asegurar que varias cosas pasen a la vez o ninguna pase), pero son más complejas de configurar que en SQL y requieren réplicas.

8. ¿Qué es un índice? Es como el índice de un libro. Sirve para que la base de datos encuentre un dato saltando directo a él, en lugar de leer todos los documentos uno por uno. Hace que las búsquedas sean rápidas.