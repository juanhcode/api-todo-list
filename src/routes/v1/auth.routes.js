const {Router} = require('express');
const userController = require('../../controllers/user.controller');
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *          required:
 *              - username
 *              - password
 *          example:
 *              username: juan
 *              password: $2a$10$bEqiCtsGDHGUTYfsdfgyIUPcioQedPcvq8TSm29qZDhzknUYq9mfZWMEaz
 */
/**
 * @swagger
 * /v1/register/:
 *  post:
 *      summary: Registrar
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      username:
 *                       type: string
 *                      password:
 *                       type: string
 *      responses:
 *          201:
 *              description: Registro de sesión Exitoso.
 *              content:
 *                  application/json:
 *                      schema:
 *                          example:
 *                              message: Usuario Registrado
 */

/**
 * @swagger
 * /v1/login/:
 *  post:
 *      summary: Iniciar sesión
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      user:
 *                       type: string
 *                      password:
 *                       type: string
 *      responses:
 *          200:
 *              description: Inicio de sesion Exitoso.
 *              content:
 *                  application/json:
 *                      schema:
 *                          example:
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiRW1wbGVhZG8iLCJuYW1lIjoiU2ViYXN0aWFuIiwiZW1haWwiOiJzZWJhc0BlY29wZXRyb2wuY29tLmNvIiwiaWF0IjoxNjY4NDA3ODM0LCJleHAiOjE2Njg0MTUwMzR9.LGGEMX7nPhPrcMfdvooc8q4O8rwWHDPYqZka4FAsQEg
 *          401:
 *              description: Inicio de sesión fallido.
 *              content:
 *                  application/json:
 *                      schema:
 *                          example:
 *                              error: Datos incorrectos
 */
router.post('/register',userController.register);
router.post('/login', userController.login);

module.exports = router