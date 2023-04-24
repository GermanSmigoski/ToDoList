const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  postUser,
  userLogin,
} = require("../../controllers/userController");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", postUser);
router.post("/login", userLogin);

module.exports = router;

// TAG //
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operaciones relacionadas con los usuarios
 */

// SCHEMA //

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - phonenumber
 *         - password
 *         - dateofbirth
 *         - email
 *         - status
 *         - gender
 *       properties:
 *         firstname:
 *           type: string
 *           description: Nombre del usuario
 *         lastname:
 *           type: string
 *           description: Apellido del usuario
 *         phonenumber:
 *           type: string
 *           description: Número de teléfono del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         dateofbirth:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del usuario
 *         image:
 *           type: string
 *           description: URL de la imagen del usuario
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del usuario
 *         gender:
 *           type: string
 *           description: Género del usuario
 */

// TAGS //

/**
 * @swagger
 *  /users:
 *   get:
 *     summary: Obtiene la lista de usuarios
 *     description: Retorna una lista de todos los usuarios registrados.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *             application/json:
 *             schema:
 *             type: array
 *       404:
 *         description: No se encontraron usuarios
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Endpoints para el manejo de usuarios
 *
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario con la información provista.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             firstname: Juan
 *             lastname: Perez
 *             phonenumber: "1234567890"
 *             password: "123456"
 *             dateofbirth: "2000-01-01"
 *             image: "https://www.example.com/image.png"
 *             email: juanperez@example.com
 *             gender: male
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *       400:
 *         description: Error en la validación de los datos del usuario
 */
