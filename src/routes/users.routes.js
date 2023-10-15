/*A RESPONSABILIDADE DE CONHECER AS ROTAS DOS USUÁRIOS É DO USER.ROUTES.JS*/
const { Router } = require("express"); /* ROUTER FOI RETIRADO DO PRÓPRIO EXPRESS*/

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router(); /* INICIAMOS O ROUTER*/

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;