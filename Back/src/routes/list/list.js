const { Router } = require("express");
const { getList, postList } = require("../../controllers/listController");
const router = Router();

router.get("/", getList);
router.post("/", postList);

module.exports = router;

// TAG

/**
 * @swagger
 * tags:
 *  name: List
 *  description: Operaciones relacionadas con las listas
 */

// SCHEMA

/**
 * @swagger
 * components:
 *   schemas:
 *     List:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - date
 *       properties:
 *         title:
 *           type: string
 *           description: Título de la lista
 *         content:
 *           type: string
 *           description: Contenido de la lista
 *         date:
 *           type: string
 *           format: date-time
 *           description: Fecha de la lista
 */

// TAGS

/**
 * @swagger
 * /list:
 *     get:
 *      summary: Obtiene la lista de 'To Do List'
 *      description: Retorna una lista de todas las 'To Do List'
 *      tags: [List]
 *      responses:
 *          200:
 *              description: Lista de 'To Do List'
 *              content:
 *                  application/json:
 *                  schema:
 *                  type: array
 *          404:
 *              description: No se encontraron 'To Do List'
 */

/**
 * @swagger
 * /list:
 *   post:
 *     summary: Agrega una nueva 'To Do List'
 *     tags: [List]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/List'
 *           example:
 *              title: Cosas para hacer 2023
 *              content: -pasear al perro -cortart el cesped
 *              date: 2023-04-22
 *     responses:
 *       200:
 *         description: Lista agregada correctamente
 *       400:
 *         description: No se pudo agregar la lista
 */
