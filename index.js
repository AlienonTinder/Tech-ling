import express from 'express'

const app = express()

app.get('/api/deepak', (req, res) => {
  res.send('⟵⁠(⁠o⁠_⁠O⁠)')
})

app.listen(3000)

app.get('/api/level1',(req,res)=>{
    const obj={
       q1:{
         q: "Which of the following is the most professional way to greet a new client in an email?",
        option:{a: "Hey there,", b: "What's up," ,c: "Dear Mr./Ms. [Last Name],", d: "To Whom It May Concern,",}

       },
    }
    res.send(obj);
})

app.get('/level1',(req,res)=>{
    const obj={
       q1:{
         q: "Which of the following is the most professional way to greet a new client in an email?",
        option:{a: "Hey there,", b: "What's up," ,c: "Dear Mr./Ms. [Last Name],", d: "To Whom It May Concern,",}

       },
    }
    res.send(obj);
})


