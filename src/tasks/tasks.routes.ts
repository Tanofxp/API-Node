import { Router } from "express";
import { TaskController } from "./tasks.controller";
import { TaskRepository } from "./tasks.repository";

const router = Router();

const controller = new TaskController(
    new TaskRepository()
);

//POST -> crear un recurso
//GET -> obtener un recurso
//PUT -> actualizar un recurso
//PATCH -> actualizar parcialmente un recurso
//DELETE -> remover un recurso

router.post("/tasks", controller.create.bind(controller));

router.get("/tasks", controller.list.bind(controller));

router.get("/tasks/:taskId", controller.get.bind(controller));

router.put("/tasks/:taskId", controller.update.bind(controller));

router.delete("/tasks/:taskId", controller.remove.bind(controller));

    //req   la ruta del archivo que se está enviando.
    //res  el objeto de respuesta .
    //next el statobjeto del archivo que se está enviando.



export default router