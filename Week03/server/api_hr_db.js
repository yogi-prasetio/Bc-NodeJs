import dotenv from "dotenv";
import express from "express";

dotenv.config()

const port = process.env.PORT || 6661
const Pool = require("pg").Pool;
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    port: 5432,
    database: 'hr-db'
});
const app = express()
app.use(express.urlencoded())
// app.use(express.json())

app.listen(port, ()=> console.log(`Server listening on post ${port}`))

//API COUNTRIES TABLE
app.get('/api/countries', (req,res) => {
    pool.query('SELECT * FROM countries',
    [],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.get('/api/countries/:id', (req,res) => {
    const {id} = req.params
    pool.query('SELECT * FROM countries WHERE country_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.post('/api/countries/', (req,res) => {
    const {country_id} = req.body
    const {name} = req.body
    pool.query('INSERT INTO countries (country_id,country_name) VALUES ($1,$2)',[country_id,name],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data added successfully')
    })
})
app.put('/api/countries/:id', (req,res) => {
    const {id} = req.params
    const {name} = req.body
    pool.query('UPDATE countries SET country_name = $1 WHERE country_id = $2',[name,id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data updated successfully')
    })
})
app.delete('/api/countries/:id', (req,res) => {
    const {id} = req.params
    pool.query('DELETE FROM countries WHERE country_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data deleted successfully')
    })
})

//API LOCATIONS TABLE
app.get('/api/locations', (req,res) => {
    pool.query('SELECT * FROM locations',
    [],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.get('/api/locations/:id', (req,res) => {
    const {id} = req.params
    pool.query('SELECT * FROM locations WHERE location_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.post('/api/locations/', (req,res) => {
    const {street} = req.body
    const {postal} = req.body
    const {city} = req.body
    const {province} = req.body
    pool.query('INSERT INTO locations (street_address,postal_code,city,state_province) VALUES ($1,$2,$3,$4)',[street,postal,city,province],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data added successfully')
    })
})
app.put('/api/locations/:id', (req,res) => {
    const {id} = req.params
    const {street} = req.body
    const {postal} = req.body
    const {city} = req.body
    const {province} = req.body
    pool.query('UPDATE locations SET street_address=$2, postal_code=$3, city=$4, state_province=$5 WHERE location_id=$1',[id,street,postal,city,province],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data updated successfully')
    })
})
app.delete('/api/locations/:id', (req,res) => {
    const {id} = req.params
    pool.query('DELETE FROM locations WHERE location_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data deleted successfully')
    })
})


//API DEPARTMENTS TABLE
app.get('/api/departments', (req,res) => {
    pool.query('SELECT * FROM departments',
    [],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.get('/api/departments/:id', (req,res) => {
    const {id} = req.params
    pool.query('SELECT * FROM departments WHERE department_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.post('/api/departments/', (req,res) => {
    const {name} = req.body
    pool.query('INSERT INTO departments (department_name) VALUES ($1)',[name],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data added successfully')
    })
})
app.put('/api/departments/:id', (req,res) => {
    const {id} = req.params
    const {name} = req.body
    pool.query('UPDATE departments SET department_name = $1 WHERE department_id = $2',[name,id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data updated successfully')
    })
})
app.delete('/api/departments/:id', (req,res) => {
    const {id} = req.params
    pool.query('DELETE FROM departments WHERE department_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data deleted successfully')
    })
})

//API EMPLOYEES TABLE
app.get('/api/employees', (req,res) => {
    pool.query('SELECT * FROM employees',
    [],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.get('/api/employees/:id', (req,res) => {
    const {id} = req.params
    pool.query('SELECT * FROM employees WHERE employee_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.post('/api/employees/', (req,res) => {
    const {first_name} = req.body
    const {last_name} = req.body
    const {email} = req.body
    const {phone} = req.body
    const {hire_date} = req.body
    const {salary} = req.body
    pool.query('INSERT INTO employees (first_name,last_name,email,phone_number,hire_date,salary)'+ 
    'VALUES ($1,$2,$3,$4,$5,$6)',[first_name,last_name,email,phone,hire_date,salary],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data added successfully')
    })
})
app.put('/api/employees/:id', (req,res) => {
    const {id} = req.params
    const {first_name} = req.body
    const {last_name} = req.body
    const {email} = req.body
    const {phone} = req.body
    const {hire_date} = req.body
    const {salary} = req.body
    pool.query('UPDATE employees SET first_name=$2, last_name=$3, email=$4, phone_number=$5, hire_date=$6, salary=$7 '+
    'WHERE employee_id = $1',[id,first_name,last_name,email,phone,hire_date,salary],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data updated successfully')
    })
})
app.delete('/api/employees/:id', (req,res) => {
    const {id} = req.params
    pool.query('DELETE FROM employees WHERE employee_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data deleted successfully')
    })
})


//API JOBS TABLE
app.get('/api/jobs', (req,res) => {
    pool.query('SELECT * FROM jobs',
    [],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.get('/api/jobs/:id', (req,res) => {
    const {id} = req.params
    pool.query('SELECT * FROM jobs WHERE job_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
})
app.post('/api/jobs/', (req,res) => {
    const {id} = req.body
    const {title} = req.body
    const {min_salary} = req.body
    const {max_salary} = req.body
    pool.query('INSERT INTO jobs (job_id,job_title,min_salary,max_salary) VALUES ($1,$2,$3,$4)',[id,title,min_salary,max_salary],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data added successfully')
    })
})
app.put('/api/jobs/:id', (req,res) => {
    const {id} = req.params
    const {title} = req.body
    const {min_salary} = req.body
    const {max_salary} = req.body
    pool.query('UPDATE jobs SET job_title=$2, min_salary=$3, max_salary=$4 WHERE job_id=$1',[id,title,min_salary,max_salary],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data updated successfully')
    })
})
app.delete('/api/jobs/:id', (req,res) => {
    const {id} = req.params
    pool.query('DELETE FROM jobs WHERE job_id = $1',[id],
    (error,result) => {
        if(error){
            throw error
        }
        res.status(200).end('Data deleted successfully')
    })
})