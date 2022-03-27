const express = require( 'express')
const helmet = require("helmet");

const nftGenerator = require( './src/generators/image')
const metadataGenerator = require( './src/generators/metadata')
const hashManager = require( './src/generators/hash')
const crypt = require( './src/crypt')

const port = 8080
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(helmet());

app.get("/generate-hash/:metaHash", async function(req, res) {
  try {
    const metaHash = req.params.metaHash;
  const hash = hashManager.hashToObject(metaHash);

  return res.status(200).send(hash);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Error. Hash not found.");
  }
})

app.get("/encrypt-hash/:hash", async function(req, res) {
  try {
    const hash = req.params.hash;
    const result = crypt.encrypt(hash);

  return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Error. Hash not found.");
  }
})

app.get('/meta-images/*', async function(req, res) {
  try {
    const hash = req.params?.[0]
    const metaHash = hashManager.hashToObject(hash);
    
    res.setHeader("Content-Type", "image/png");
    const result = await nftGenerator(metaHash);
    
    //@ts-ignore
    return result.pipe(res);
  } catch(e) {
    console.log(e)
    // @ts-ignore
    return res.status(404).send("Error. Image not found.");
  }
});

app.get('/metadata/:hash', async function(req, res) {
  const hash = req.params.hash
  res.setHeader("Content-Type", "application/json");

  try {
    const result = await NFTGenerator();
    console.log(result);
    console.log(hash);
    
    //@ts-ignore
    return result.pipe(res);
  } catch(e) {
    console.log(e)
    // @ts-ignore
    return res.status(404).send("Error. Metadata not found.");
  }
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
	console.log(new Date().toString())
})