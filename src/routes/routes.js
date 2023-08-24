import { Router, } from "express";
import UserController from "../controllers/user/UserController";

const userControllers = new UserController();
const router = Router();

// Rotas User Web

//- Método Get
router.get('/usuarios', (req, res)=>{
    userControllers.findAllUsers(req, res)
});

// - Método POST
router.post('/criar-usuario', (req, res)=>{
    userControllers.criarUsuario(req, res);
});

//- Método PUT
router.put('/usuarios', (req, res)=>{
    userControllers.updateUsuario(req, res)
});

//   - Método delet
router.delete('/usuarios', (req, res)=>{
    userControllers.deleteUser(req, res)
});

export { router };
