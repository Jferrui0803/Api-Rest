const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000


app.use(cors());

app.get('/', (req, res) => {
  const datos = {
    fruits: [
      {
        name: 'Manzana',
        calories: '23000',
    
      },
      {
        name: 'Pera',
        calories: '5000',
       
      },
      {
        name: 'Melocoton',
        calories: '25888',
      }
    ]
  }
  res.json(datos);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})