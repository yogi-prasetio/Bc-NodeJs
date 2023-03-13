import { Router } from "express";
import indexCtrl from "../controllers/indexController";

const router = Router()

router.get('/',indexCtrl.EmpCtrl.findAll)
router.get('/:id',indexCtrl.EmpCtrl.findOne)
router.post('/',indexCtrl.EmpCtrl.create)
router.put('/:id',indexCtrl.EmpCtrl.update)
router.delete('/:id',indexCtrl.EmpCtrl.deleted)
router.get('/sql/:id',indexCtrl.EmpCtrl.qureySQL)

export default router