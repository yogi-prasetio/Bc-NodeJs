import { sequelize } from "../models/init-models"

const findAll = async(req,res)=> {
    try {
        const region = await req.context.models.regions.findAll({
            include :[{
                model : req.context.models.countries,
                as : 'countries'
            }]
        })
        return res.send(region)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const findOne = async(req,res)=> {
    try {
        const region = await req.context.models.regions.findOne({
            where:{region_id : req.params.id}
        })
        return res.send(region)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const create = async(req,res)=>{
    try {
        const region = await req.context.models.regions.create({
            region_name : req.body.region_name
        })
        return res.send(region)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const update = async(req,res)=> {
    try {
        const region = await req.context.models.regions.update({
            region_name : req.body.region_name
        },{returning : true, where: {region_id : req.params.id}})
        return res.send(region)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleted = async(req,res)=>{
    try {
        const region = await req.context.models.regions.destroy({
            where:{region_id : req.params.id}
        })
        return res.send(`delete ${region} rows`)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const qureySQL = async(req,res)=> {
    try {
        const query = await sequelize.query('SELECT * from regions where region_id = :id',
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