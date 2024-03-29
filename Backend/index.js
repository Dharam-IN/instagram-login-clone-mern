import app from './app.js';

const port = 5001;

app.listen(port, function(req, res){
    console.log(`Server Running On ${port}`);
})
