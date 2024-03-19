import express from 'express'
const users = [
    { id: 1, username: 'Mario', job: 'developer' },
    { id: 2, username: 'Bowser', job: 'designer' },
    { id: 3, username: 'Luigi', job: 'manager' },
    { id: 4, username: 'Peach', job: 'engineer' },
    { id: 5, username: 'Toad', job: 'analyst' }
];
const app= express()
app.use(express.json())
const port= 3000
app.get("/users",(req,res)=>{
    try{
        res.status(200).json(users)
    }catch(error){
        console.log(error.message)
    }
})
app.get("user/:id"(req,res)
app.listen(3000,()=>{
    console.log(`server run at http://localhost:${port}`)
})