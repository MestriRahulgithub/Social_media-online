import express from 'express'
import hbs from'hbs'
import {readcinema, insertcinema} from './operation.js'

const app = express()

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render("booking")
})



app.listen(3000,()=>{
    console.log("Successfully Running!!!!.....");
})