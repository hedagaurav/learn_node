const ex = require('express');
const path = require('path');
const app = ex();
const age_middle = require('./age_middleware');
const route = ex.Router();

const middle = (req,res,next)=>{
    if(!req.query.age)
        res.send('age is not set.');
    else if(req.query.age < 18)
        res.send('minors cannot access.');
    else
        next();
}
// application level middleware. applied on all routes.
// app.use(middle);

app.get('',(req, res)=>{
    res.send('homepage is here.');
});

// route level middleware. applied on selected route.
app.get('/middle',middle,(req, res)=>{
    res.send('this is using route level middleware.');
});

app.get('/age',age_middle,(req, res)=>{
    res.send('age middleware is using file middleware.');
});

// for file middleware
route.use(age_middle);

route.get('/route1',(req, res)=>{
    res.send('age middleware is using file middleware.');
});

route.get('/route2',(req, res)=>{
    res.send('age middleware is using file middleware.');
});

app.use('/',route);

app.listen(4500);