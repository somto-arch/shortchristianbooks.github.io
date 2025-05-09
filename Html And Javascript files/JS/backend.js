import express from "express";
import Redis from "ioredis";
import axios from "axios";
import cors from "cors";

const app = express();
 const redis = new Redis({
     'port': 6379,
     'host': '127.0.0.1'
 });
 app.use(cors())
const options = {
    headers: {//48954676891da75a8c3a7ed3fb34fc66
        'api-key': `17ef2da215e32f8e707f34a30034742d`//   Token 73858c1176341ee54f10342e6603a25ccc83284e
    }
};
//  const options = {
//      headers: {
//         'Authorization': `Token 73858c1176341ee54f10342e6603a25ccc83284e`//17ef2da215e32f8e707f34a30034742d
//     }
// };



// async function versions(ver, l_chp, u_chp,bible_id, len) {
//     // Create URLs array using Array.from
//     const kjv_urls_exo = Array.from({length: len}, (_, i) =>
//         `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/${u_chp}.${i + 1}?content-type=text`
//     );
//
//     const responses_GEN = await Promise.all(kjv_urls_exo.map(url => axios(url, options)));
//
//     // Generate an array of verse contents
//  const verses = responses_GEN.map(response => String(response.data.data.content))
// console.log(verses)
//     // Create redis key-value pairs array
//     const redisData = verses.reduce((acc, verse, index) => {
//         acc.push(`${ver}-${l_chp}-${index + 1}`, verse);
//         return acc;
//     }, []);
//
//     // Set all values in Redis at once
//     await redis.msetnx(...redisData);
//}
//
//     await versions('esv');
// console.log(await redis.get('esv-gen-1'))


 //await versions('esv', 'jud','Revelations',22);
 //await versions('asv','2pe','2PE','06125adad2d5898a-01',3);
//await versions('tst','2pe','2PE','66c22495370cdfc0-01',3);
// await versions('lsv','jud','JUD','01b29f4b342acc35-01');
// await versions('rv_1885','jud','JUD','40072c4a5aba4022-01');
// await versions('web','jud','JUD','9879dbb7cfe39e4d-04');
// await versions('wmb','jud','JUD','f72b840c855f362c-04');
// await versions('hcb','jud','JUD','0ab0c764d56a715d-02');
// await versions('icb','jud','JUD','a36fc06b086699f1-02');
// await versions('ycb','jud','JUD','b8d1feac6e94bd74-01');



app.get('/:ver/:book/:vers', async (req, res) => {
    const { ver, book, vers } = req.params
    const o = await redis.get(`${ver}-${book}-${vers}`)
    res.send(o)
})

app.listen(3000, () => console.log('running'))
//
//
// // import Redis from 'ioredis'
// //
// // const redis = new Redis({
// //     'port': 6379,
// //     'host': '127.0.0.1'
// // })
// //
// // let books = await redis.get(`gen-1`);
// // console.log(books)
//
// // import axios from "axios";
// //
// //
// //
// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'api-key': '48954676891da75a8c3a7ed3fb34fc66'
// //     }
// // };
// // let url_1 =  `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/passages/GEN.1?content-type=text`
// // let url_2 = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/passages/GEN.2?content-type=text`
// // let url_3 =  `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/passages/GEN.3?content-type=text`
// //
// //
// // const GEN_1= axios(url_1,options)
// // GEN_1.then(res => {
// //     console.log(res.data)
// // })
// //
// //
// //
// //
// //
// // // // // 01b29f4b342acc35-01
// // // // // de4e12af7f28f599-02
// // //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // //
// // //
// // // const urls = new Promise.all((resolve, reject) => {
// // //     fetch(url_1, options),
// // //     fetch(url_2, options),
// // //     fetch(url_3, options)
// // // })
// // // urls.then(results => results.json())
// // //     .then((data) => {
// // //         //  const specific_item = data.data.map((item) => ({
// // //         //  name: item.name,
// // //         //    abbv: item.abbreviation,
// // //         // name_long: item.nameLong,
// // //         //  id: item.content
// // //         //    }));
// // //           console.log(data.data.content)
// // //
// // //     })
// // //
// // //
// // //