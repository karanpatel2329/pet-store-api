const express = require('express')
const multer = require("multer")
const app = express()
require('./dbConnection');
const Pet = require('./model/pet');
const addPet = require('./routes/pet/addPet');
const fetchAllPet = require('./routes/pet/fetchAllPet');
const editPet = require('./routes/pet/editPet');
const fetchPetById = require('./routes/pet/fetchPetById');
const deletePet = require('./routes/pet/deletePet');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'upload/'});


app.use('/api/pet/',upload.single("recfile"),addPet)

app.use('/api/pet/',fetchAllPet)

app.use('/api/pet/:id',fetchPetById)

app.use('/api/pet/:id',editPet)

app.use('/api/pet/:id',deletePet)




app.listen(3000, () => {
    console.log(`Pet Store app listening on port 3000`)
  })