const express = require( 'express')
const NFTGenerator = require( './nft-generator')

const port = 8080
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/api/images', async function(req, res) {
  res.setHeader("Content-Type", "image/png");
  // res.status(200).json({ name: 'John Doe' })
  // res.writeHead(200, { 'Content-Type': 'image/png' });
  try{
    const result = await NFTGenerator();
    console.log(result)
    
    //@ts-ignore
    result.pipe(res);
  } catch(e) {
    console.log(e)
    // @ts-ignore
    res.status(500).send(e)
  }
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
	console.log(new Date().toString())
})