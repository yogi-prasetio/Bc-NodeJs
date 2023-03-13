import { Router } from "express";
import indexCtrl from "../controllers/indexController";

const router = Router()

router.get('/',indexCtrl.JobHisCtrl.findAll)
router.get('/:id',indexCtrl.JobHisCtrl.findOne)
router.post('/',indexCtrl.JobHisCtrl.create)
router.put('/:id',indexCtrl.JobHisCtrl.update)
router.delete('/:id',indexCtrl.JobHisCtrl.deleted)
router.get('/sql/:id',indexCtrl.JobHisCtrl.qureySQL)

export default router