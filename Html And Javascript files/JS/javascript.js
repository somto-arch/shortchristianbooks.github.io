async function KJV(bible_id,ver) {

//Genesis
const kjv_urls = Array.from({length: 50}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/gen/${i + 1}`)
);
const kjv_responses = await Promise.all(kjv_urls);

//Exodus
    const exo_urls = Array.from({length: 40}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/exo/${i + 1}`)
);
const exo_responses = await Promise.all(exo_urls);

//Leviticus
    const lev_urls = Array.from({length: 27}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/lev/${i + 1}`)
);
const lev_responses = await Promise.all(lev_urls);
//Numbers
    const num_urls = Array.from({length: 36}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/num/${i + 1}`)
);
const num_responses = await Promise.all(num_urls);

//Deuteronomy
    const deu_urls = Array.from({length: 34}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/deu/${i + 1}`)
);
const deu_responses = await Promise.all(deu_urls);

//Joshua
    const jo_urls = Array.from({length: 24}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jo/${i + 1}`)
);
const jo_responses = await Promise.all(jo_urls);

//Joshua
    const jdg_urls = Array.from({length: 21}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jdg/${i + 1}`)
);
const jdg_responses = await Promise.all(jdg_urls);

//Ruth
    const rut_urls = Array.from({length: 4}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/rut/${i + 1}`)
);
const rut_responses = await Promise.all(rut_urls);

//1 Samuel
    const _1sa_urls = Array.from({length: 31}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1sa/${i + 1}`)
);
const _1sa_responses = await Promise.all(_1sa_urls);

//2 Samuel
    const _2sa_urls = Array.from({length: 24}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2sa/${i + 1}`)
);
const _2sa_responses = await Promise.all(_2sa_urls);

//1 Kings
    const _1ki_urls = Array.from({length: 22}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1ki/${i + 1}`)
);
const _1ki_responses = await Promise.all(_1ki_urls);

//2 Kings
    const _2ki_urls = Array.from({length: 25}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2ki/${i + 1}`)
);
const _2ki_responses = await Promise.all(_2ki_urls);

//1 Chronicles
    const _1ch_urls = Array.from({length: 29}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1ch/${i + 1}`)
);
const _1ch_responses = await Promise.all(_1ch_urls);

//2 Chronicles
    const _2ch_urls = Array.from({length: 36}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2ch/${i + 1}`)
);
const _2ch_responses = await Promise.all(_2ch_urls);

//Ezra
    const ezr_urls = Array.from({length: 10}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/ezr/${i + 1}`)
);
const ezr_responses = await Promise.all(ezr_urls);

//Nehemiah
    const neh_urls = Array.from({length: 13}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/neh/${i + 1}`)
);
const neh_responses = await Promise.all(neh_urls);

//Esther
    const est_urls = Array.from({length: 10}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/est/${i + 1}`)
);
const est_responses = await Promise.all(est_urls);

//Job
    const job_urls = Array.from({length: 42}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/job/${i + 1}`)
);
const job_responses = await Promise.all(job_urls);

//Psalms
    const psm_urls = Array.from({length: 150}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/psm/${i + 1}`)
);
const psm_responses = await Promise.all(psm_urls);

//Psalms
    const pro_urls = Array.from({length: 31}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/pro/${i + 1}`)
);
const pro_responses = await Promise.all(pro_urls);

//Ecclesiastes
    const eccl_urls = Array.from({length: 12}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/eccl/${i + 1}`)
);
const eccl_responses = await Promise.all(eccl_urls);

//Ecclesiastes
    const sng_urls = Array.from({length: 8}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/sng/${i + 1}`)
);
const sng_responses = await Promise.all(sng_urls);

//Isaiah
    const isa_urls = Array.from({length: 66}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/isa/${i + 1}`)
);
const isa_responses = await Promise.all(isa_urls);

//Jeremiah
    const jer_urls = Array.from({length: 52}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jer/${i + 1}`)
);
const jer_responses = await Promise.all(jer_urls);

//Lamentations
    const lam_urls = Array.from({length: 5}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/lam/${i + 1}`)
);
const lam_responses = await Promise.all(lam_urls);

//Ezekiel
    const eze_urls = Array.from({length: 48}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/eze/${i + 1}`)
);
const eze_responses = await Promise.all(eze_urls);

//Daniel
    const dan_urls = Array.from({length: 12}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/dan/${i + 1}`)
);
const dan_responses = await Promise.all(dan_urls);

//Hosea
    const hos_urls = Array.from({length: 14}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/hos/${i + 1}`)
);
const hos_responses = await Promise.all(hos_urls);

//Joel
    const jol_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jol/${i + 1}`)
);
const jol_responses = await Promise.all(jol_urls);

//Amos
    const amo_urls = Array.from({length: 9}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/amo/${i + 1}`)
);
const amo_responses = await Promise.all(amo_urls);

//Obadiah
    const oba_urls = Array.from({length: 1}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/oba/${i + 1}`)
);
const oba_responses = await Promise.all(oba_urls);

//Jonah
    const jon_urls = Array.from({length: 4}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jon/${i + 1}`)
);
const jon_responses = await Promise.all(jon_urls);

//Micah
    const mic_urls = Array.from({length: 7}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/mic/${i + 1}`)
);
const mic_responses = await Promise.all(mic_urls);

//Nahum
    const nhm_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/nhm/${i + 1}`)
);
const nhm_responses = await Promise.all(nhm_urls);

//Nahum
    const hab_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/hab/${i + 1}`)
);
const hab_responses = await Promise.all(hab_urls);

//Zephaniah
    const zeph_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/zeph/${i + 1}`)
);
const zeph_responses = await Promise.all(zeph_urls);

//Haggai
    const hag_urls = Array.from({length: 2}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/hag/${i + 1}`)
);
const hag_responses = await Promise.all(hag_urls);

//Zechariah
    const zec_urls = Array.from({length: 14}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/zec/${i + 1}`)
);
const zec_responses = await Promise.all(zec_urls);

//Malachi
    const mal_urls = Array.from({length: 4}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/mal/${i + 1}`)
);
const mal_responses = await Promise.all(mal_urls);

// New Testament

//Matthew
    const mat_urls = Array.from({length: 28}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/mat/${i + 1}`)
);
const mat_responses = await Promise.all(mat_urls);

//Mark
    const mrk_urls = Array.from({length: 16}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/mrk/${i + 1}`)
);
const mrk_responses = await Promise.all(mrk_urls);

//Luke
    const luk_urls = Array.from({length: 24}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/luk/${i + 1}`)
);
const luk_responses = await Promise.all(luk_urls);

//John
    const jhn_urls = Array.from({length: 21}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jhn/${i + 1}`)
);
const jhn_responses = await Promise.all(jhn_urls);

//Acts
    const acts_urls = Array.from({length: 28}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/acts/${i + 1}`)
);
const acts_responses = await Promise.all(acts_urls);

//Romans
    const rom_urls = Array.from({length: 16}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/rom/${i + 1}`)
);
const rom_responses = await Promise.all(rom_urls);

//1 Corinthians
    const _1_cor_urls = Array.from({length: 16}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1co/${i + 1}`)
);
const _1_cor_responses = await Promise.all(_1_cor_urls);

//2 Corinthians
    const _2_cor_urls = Array.from({length: 13}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2co/${i + 1}`)
);
const _2_cor_responses = await Promise.all(_2_cor_urls);

//Galatians
    const gal_urls = Array.from({length: 6}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/gal/${i + 1}`)
);
const gal_responses = await Promise.all(gal_urls);

//Ephesians
    const eph_urls = Array.from({length: 6}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/eph/${i + 1}`)
);
const eph_responses = await Promise.all(eph_urls);

//Philippians
    const phil_urls = Array.from({length: 4}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/phil/${i + 1}`)
);
const phil_responses = await Promise.all(phil_urls);

//Colossians
    const col_urls = Array.from({length: 4}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/col/${i + 1}`)
);
const col_responses = await Promise.all(col_urls);

//1 Thessalonians
    const _1_thess_urls = Array.from({length: 5}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1thess/${i + 1}`)
);
const _1_thess_responses = await Promise.all(_1_thess_urls);

//2 Thessalonians
    const _2_thess_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2thess/${i + 1}`)
);
const _2_thess_responses = await Promise.all(_2_thess_urls);

//1 Timothy
    const _1_tim_urls = Array.from({length: 6}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1tim/${i + 1}`)
);
const _1_tim_responses = await Promise.all(_1_tim_urls);

//2 Timothy
    const _2_tim_urls = Array.from({length: 4}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2tim/${i + 1}`)
);
const _2_tim_responses = await Promise.all(_2_tim_urls);

//Titus
    const tit_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/tit/${i + 1}`)
);
const tit_responses = await Promise.all(tit_urls);

//Philemon
    const phi_urls = Array.from({length: 1}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/phi/${i + 1}`)
);
const phi_responses = await Promise.all(phi_urls);

//Hebrews
    const heb_urls = Array.from({length: 13}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/heb/${i + 1}`)
);
const heb_responses = await Promise.all(heb_urls);

//James
    const jam_urls = Array.from({length: 5}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jam/${i + 1}`)
);
const jam_responses = await Promise.all(jam_urls);

//1 Peter
    const _1_pe_urls = Array.from({length: 5}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1pe/${i + 1}`)
);
const _1_pe_responses = await Promise.all(_1_pe_urls);

//2 Peter
    const _2_pe_urls = Array.from({length: 3}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2pe/${i + 1}`)
);
const _2_pe_responses = await Promise.all(_2_pe_urls);

//1 John
    const _1_jhn_urls = Array.from({length: 5}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/1jhn/${i + 1}`)
);
const _1_jhn_responses = await Promise.all(_1_jhn_urls);

//2 John
    const _2_jhn_urls = Array.from({length: 1}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/2jhn/${i + 1}`)
);
const _2_jhn_responses = await Promise.all(_2_jhn_urls);

//3 John
    const _3_jhn_urls = Array.from({length: 1}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/3jhn/${i + 1}`)
);
const _3_jhn_responses = await Promise.all(_3_jhn_urls);

//Jude
    const jud_urls = Array.from({length: 1}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/jud/${i + 1}`)
);
const jud_responses = await Promise.all(jud_urls);

//Revelation
    const rev_urls = Array.from({length: 22}, (_, i) =>
    axios.get(`http://localhost:3000/${bible_id}/rev/${i + 1}`)
);
const rev_responses = await Promise.all(rev_urls);

const texts = [
    kjv_responses.map(response => String(response.data)),
    exo_responses.map(response => String(response.data)),
    lev_responses.map(response => String(response.data)),
    num_responses.map(response => String(response.data)),
    deu_responses.map(response => String(response.data)),
    jo_responses.map(response => String(response.data)),
    jdg_responses.map(response => String(response.data)),
    rut_responses.map(response => String(response.data)),
    _1sa_responses.map(response => String(response.data)),
    _2sa_responses.map(response => String(response.data)),
    _1ki_responses.map(response => String(response.data)),
    _2ki_responses.map(response => String(response.data)),
    _1ch_responses.map(response => String(response.data)),
    _2ch_responses.map(response => String(response.data)),
    ezr_responses.map(response => String(response.data)),
    neh_responses.map(response => String(response.data)),
    est_responses.map(response => String(response.data)),
    job_responses.map(response => String(response.data)),
    psm_responses.map(response => String(response.data)),
    pro_responses.map(response => String(response.data)),
    eccl_responses.map(response => String(response.data)),
    sng_responses.map(response => String(response.data)),
    isa_responses.map(response => String(response.data)),
    jer_responses.map(response => String(response.data)),
    lam_responses.map(response => String(response.data)),
    eze_responses.map(response => String(response.data)),
    dan_responses.map(response => String(response.data)),
    hos_responses.map(response => String(response.data)),
    jol_responses.map(response => String(response.data)),
    amo_responses.map(response => String(response.data)),
    oba_responses.map(response => String(response.data)),
    jon_responses.map(response => String(response.data)),
    mic_responses.map(response => String(response.data)),
    nhm_responses.map(response => String(response.data)),
    hab_responses.map(response => String(response.data)),
    zeph_responses.map(response => String(response.data)),
    hag_responses.map(response => String(response.data)),
    zec_responses.map(response => String(response.data)),
    mal_responses.map(response => String(response.data)),
    // New testament
    mat_responses.map(response => String(response.data)),
    mrk_responses.map(response => String(response.data)),
    luk_responses.map(response => String(response.data)),
    jhn_responses.map(response => String(response.data)),
    acts_responses.map(response => String(response.data)),
    rom_responses.map(response => String(response.data)),
    _1_cor_responses.map(response => String(response.data)),
    _2_cor_responses.map(response => String(response.data)),
    gal_responses.map(response => String(response.data)),
    eph_responses.map(response => String(response.data)),
    phil_responses.map(response => String(response.data)),
    col_responses.map(response => String(response.data)),
    _1_thess_responses.map(response => String(response.data)),
    _2_thess_responses.map(response => String(response.data)),
    _1_tim_responses.map(response => String(response.data)),
    _2_tim_responses.map(response => String(response.data)),
    tit_responses.map(response => String(response.data)),
    phi_responses.map(response => String(response.data)),
    heb_responses.map(response => String(response.data)),
    jam_responses.map(response => String(response.data)),
    _1_pe_responses.map(response => String(response.data)),
    _2_pe_responses.map(response => String(response.data)),
    _1_jhn_responses.map(response => String(response.data)),
    _2_jhn_responses.map(response => String(response.data)),
    _3_jhn_responses.map(response => String(response.data)),
    jud_responses.map(response => String(response.data)),
    rev_responses.map(response => String(response.data)),
];



//Exodus


const carouselElement = document.querySelector(".carousel");
const chapterTextElement = document.querySelector(".append_child");


const KJV = document.querySelectorAll(`${ver}`);
const books = document.querySelectorAll('.v-verses > li')
const verses = document.querySelector('.verses')

KJV.forEach(kjv => {
    kjv.addEventListener("click", function kjv_list(event) {
    //execute code for when Kjv clicked

console.log('KJV CLICKED')

    books.forEach((book,index) => {
        book.setAttribute('data-index', index % 66)
        book.addEventListener('click', function book_list(ev) {
            //execute code for when Bible Book clicked
const books_array = Array.from(books);
const books_click = parseInt(ev.target.getAttribute('data-index'))//[...books].indexOf(ev.target)
console.log('book clicked')




                const chapters = document.querySelectorAll('.verses > .chapters')
            const chapters_2 = document.querySelectorAll('.verses_2 > .chapters')
chapters.forEach((chapter, index) => {
   chapter.addEventListener('click', function chp_list(e) {
        // execute code for when chapter clicked

           chapter.setAttribute('data-index', index % (chapters.length/2))


          const sec_6 = document.querySelector('.sec-6')
           sec_6.style.display = 'flex'
            const chapters_array = Array.from(chapters);
          let chp_click =  parseInt(e.target.getAttribute('data-index'))//[...chapters].indexOf(e.target);
       console.log(e.target)

       // Genesis

        const carousel_element = document.querySelectorAll('.carousel-item')
       //    chapters_2.forEach((chapter) => {
       //     chapter.addEventListener('click', function (e) {
       //         const chapters_array_2 = Array.from(chapters_2);
       //         let chp_click_ =  [...chapters_2].indexOf(e.target);
       //         carousel_element[chp_click].classList.add('active')
       //     })
       // })

carousel_element[chp_click].classList.add('active')

const activeIndex = Array.from(carouselElement.querySelectorAll(".carousel-item")).indexOf(carouselElement.querySelector(".carousel-item.active"));
            chapterTextElement.textContent = texts[books_click][activeIndex];
 carouselElement.addEventListener("slid.bs.carousel", function (event) {
            const activeIndex = Array.from(carouselElement.querySelectorAll(".carousel-item")).indexOf(carouselElement.querySelector(".carousel-item.active"));
            chapterTextElement.textContent = texts[books_click][activeIndex];
 });


                    // KJV.removeEventListener('click', kjv_list);
                    // book.removeEventListener('click', book_list);
                    // chapter.removeEventListener('click', chp_list);
                });
            });
        });
    });
})
})



}
await KJV('asv','.ASV');
await KJV('icb','.ICB');
await KJV('esv','.ESV');
await KJV('web','.WEB');
await KJV('wmb','.WMB');
await KJV('bsb','.BSB');
await KJV('kjv','.KJV');
await KJV('lsv','.LSV');
await KJV('hcb','.HCB');
await KJV('ycb','.YCB');
await KJV('rv_1885','.RV');
await KJV('tst','.TST');

document.querySelector('#loading-overlay').style.display = 'none';
document.querySelectorAll('section').forEach(section => {
    section.style.display = 'block';
});
const sec_6 = document.querySelector('.sec-6')
           sec_6.style.display = 'none'
document.querySelector('footer').style.display = 'block';




// //
// // KJV  Exodus
// const kjv_urls_exo = [
//     `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/EXO.1?content-type=text`,
//         `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/EXO.2?content-type=text`,
//         `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/EXO.3?content-type=text`,
//         `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/EXO.4?content-type=text`,
//         `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/EXO.5?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/EXO.6?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.7?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.8?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.9?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.10?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.11?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.12?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.13?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.14?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.15?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.16?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.17?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.18?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.19?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.20?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.21?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.22?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.23?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.24?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.25?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.26?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.27?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.28?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.29?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.30?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.31?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.32?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.33?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.34?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.35?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.36?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.37?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.38?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.39?content-type=text`,
//         // `https://api.scripture.api.bible/v1/bibles/${bible_id}/passages/GEN.40?content-type=text`
// ]
//     const responses_exo = await Promise.all(kjv_urls_exo.map(url => axios(url, options)));
// const kjv_texts_exo = [
//     String(responses_exo[0].data.data.content),
//     String(responses_exo[1].data.data.content),
//     String(responses_exo[2].data.data.content),
//     String(responses_exo[3].data.data.content),
//     String(responses_exo[4].data.data.content),
// ]
// //
// // //GET BIBLE VERSION
// // // 01b29f4b342acc35-01
// // // ${bible_id}
// //
// //
// //
// //     axios(url, options)
// //   .then(response => {
// //     //console.log(response.data.data.content); // Handle response data
// //
// //
// //
// //
// //
// //
// //
// //
// // let string = response.data.data.content
// // let str = string.toString()
// // //console.log(str)
// //
// //
// // const texts = [
// //      str,
// //     'two,',
// //     'three'
// //
// // ]


// //
// //
// //
// //
