import express from "express";
import cors from "cors";
import Redis from "ioredis";



const app = express();
app.use(cors());

const r_redis = new Redis('redis://default:ewGBwTePAJNGxpckVSucvVKARciLJJXc@switchyard.proxy.rlwy.net:37708');

app.get('/:ver/:book/:vers', async (req, res) => {
    const { ver, book, vers } = req.params
    const o = await r_redis.get(`${ver}-${book}-${vers}`)
    res.send(o)
});


app.listen(3000, () => console.log('running'));
