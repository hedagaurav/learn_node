module.exports = file_middleware = (req,res,next)=>{
    if(!req.query.age)
        res.send('age is not set.');
    else if(req.query.age < 18)
        res.send('minors cannot access.');
    else
        next();
}