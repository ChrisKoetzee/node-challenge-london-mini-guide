const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// require the json files from data
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json')

app.get('/', (req, res)=>{
    console.log(Harrow, Heathrow, Stratford)
    res.send(
        {
            SupportedRoutes : [
                '/Pharmacies',
                '/Colleges',
                '/Hospitals', 
                '/Doctors'
            ],
            Version : '0.0.0.0.1',
            Authors : 'Tersia and Chris Koetzee'
        }
    )
})

app.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`);
})