import { Router } from "express";
import indexCtrl from "../controllers/indexController";

const router = Router()

router.get('/',indexCtrl.CounCtrl.findAll)
router.get('/:id',indexCtrl.CounCtrl.findOne)
router.post('/',indexCtrl.CounCtrl.create)
router.put('/:id',indexCtrl.CounCtrl.update)
router.delete('/:id',indexCtrl.CounCtrl.deleted)
router.get('/sql/:id',indexCtrl.CounCtrl.qureySQL)

export default router