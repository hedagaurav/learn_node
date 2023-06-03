const ex = require('express');
const path = require('path');
const app = ex();
const public = path.join(__dirname,'public');

app.set('view engine','ejs')

app.get('',(req, res)=>{
    res.send('express is here.');
});

app.get('/home',(req, res)=>{
    // include header,navigation,
    res.render('home');
});

app.get('/profile',(req, res)=>{
    const data = {
        name:'gaurav',
        fullname:'gaurav heda',
        city:'bhiwandi'
    }
    res.render('profile',{data:data})
});



// app.use(ex.static(public));

app.get('/page',(_,res)=>{
    res.sendFile(`${public}/page.html`);
});

app.get('*',(_,res)=>{
    res.sendFile(`${public}/404.html`);
});
app.listen(4500);