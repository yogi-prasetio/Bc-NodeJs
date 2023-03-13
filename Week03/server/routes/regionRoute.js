import { Router } from "express";
import indexCtrl from "../controllers/indexController";

const router = Router()

router.get('/',indexCtrl.RegCtrl.findAll)
router.get('/:id',indexCtrl.RegCtrl.findOne)
router.post('/',indexCtrl.RegCtrl.create)
router.put('/:id',indexCtrl.RegCtrl.update)
router.delete('/:id',indexCtrl.RegCtrl.deleted)
router.get('/sql/:id',indexCtrl.RegCtrl.qureySQL)

export default router