import { sequelize } from "../models/init-models"

const findAll = async(req,res)=> {
    try {
        const employee = await req.context.models.employees.findAll()
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const findOne = async(req,res)=> {
    try {
        const employee = await req.context.models.employees.findOne({
            where:{employee_id : req.params.id}
        })
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const create = async(req,res)=>{
    try {
        const employee = await req.context.models.employees.create({
            employee_id : req.body.employee_id,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            phone_number : req.body.phone_number,
            hire_date : req.body.hire_date,
            salary : req.body.salary,
            commission_pct : req.body.commission_pct
        })
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const update = async(req,res)=> {
    try {
        const employee = await req.context.models.employees.update({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            phone_number : req.body.phone_number,
            hire_date : req.body.hire_date,
            salary : req.body.salary,
            commission_pct : req.body.commission_pct
        },{returning : true, where: {employee_id : req.params.id}})
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleted = async(req,res)=>{
    try {
        const employee = await req.context.models.employees.destroy({
            where:{employee_id : req.params.id}
        })
        return res.send(`DELETE ${employee} ROWS`)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const qureySQL = async(req,res)=> {
    try {
        const query = await sequelize.query('SELECT * FROM employees WHERE employee_id = :id',
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