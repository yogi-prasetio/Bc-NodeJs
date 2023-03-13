import { sequelize } from "../models/init-models"

const findAll = async(req,res)=> {
    try {
        const location = await req.context.models.locations.findAll()
        return res.send(location)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const findOne = async(req,res)=> {
    try {
        const location = await req.context.models.locations.findOne({
            where:{location_id : req.params.id}
        })
        return res.send(location)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const create = async(req,res)=>{
    try {
        const location = await req.context.models.locations.create({
            street_address : req.body.street_address,
            postal_code : req.body.postal_code,
            city : req.body.city,
            state_province : req.body.state_province
        })
        return res.send(location)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const update = async(req,res)=> {
    try {
        const location = await req.context.models.locations.update({
            street_address : req.body.street_address,
            postal_code : req.body.postal_code,
            city : req.body.city,
            state_province : req.body.state_province
        },{returning : true, where: {location_id : req.params.id}})
        return res.send(location)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleted = async(req,res)=>{
    try {
        const location = await req.context.models.locations.destroy({
            where:{location_id : req.params.id}
        })
        return res.send(`DELETE ${location} ROWS`)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const qureySQL = async(req,res)=> {
    try {
        const query = await sequelize.query('SELECT * FROM locations WHERE location_id = :id',
        {replacements : {id : req.params.id},type : sequelize.QueryTypes.SELECT})
        return res.send(query)
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted,
    qureySQL
}