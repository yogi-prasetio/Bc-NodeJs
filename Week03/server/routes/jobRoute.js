import { Router } from "express";
import indexCtrl from "../controllers/indexController";

const router = Router()

router.get('/',indexCtrl.JobCtrl.findAll)
router.get('/:id',indexCtrl.JobCtrl.findOne)
router.post('/',indexCtrl.JobCtrl.create)
router.put('/:id',indexCtrl.JobCtrl.update)
router.delete('/:id',indexCtrl.JobCtrl.deleted)
router.get('/sql/:id',indexCtrl.JobCtrl.qureySQL)

export default router