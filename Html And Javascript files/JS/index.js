// <!--                        <i>"Then shall ye call upon me, and ye shall go and pray unto me, and I will hearken unto you."</i><br><br><span style="color: yellow">- Jeremiah 29:12</span>-->
// <!--                        <i>"He hath blinded their eyes, and hardened their hearts; that they should not see with their eyes, nor understand with their hearts, and be converted, and i should heal them."</i><br><br><span style="color: yellow">- John 12:40</span>-->


// var text = document.querySelector('.animation-3').textContent
// var con = document.querySelector('.animate')
// var split = text.split('')
// // console.log(split)
// // console.log(text)
//
// split.forEach((split) => {
//         var divs = document.createElement('i')
//
//                divs.textContent = split
//   con.appendChild(divs)
//   // console.log(divs.textContent)
//          text = ""
//                })
const verses = document.querySelectorAll('.v-verses > li')

verses.forEach(function (verse){
    verse.addEventListener('click', function (){
        document.querySelector('.v-verses').classList.remove('show')
    });
});

verses.forEach(function (item){
    item.addEventListener('click', function (event){
        document.querySelectorAll('.verses').forEach(ver => {ver.style.display = 'grid'})
        event.stopPropagation();
    document.querySelectorAll('.num').forEach(no => {no.classList.add('show')})
    });
});
document.addEventListener('DOMContentLoaded', function (event) {
    document.body.addEventListener('click', function (event) {
        document.querySelectorAll('.num').forEach(no => {no.classList.remove('show')})

    });

});



const forloop = function forloop(int) {
    let first = document.querySelectorAll('.verses');
    first.forEach(fir => {fir.innerHTML = ''})
    const carousel_div = document.querySelector('.carousel-inner')
    carousel_div.innerHTML = ''

    for (let i = 1; i <= int; i++) {
        // Create tags for each .verses container
        first.forEach(fir => {
            const tags = document.createElement('b');
            tags.classList.add('chapters')
            tags.textContent = i;
            fir.appendChild(tags)
        })

        // Create carousel item
        const divs = document.createElement('div')
        divs.textContent = i;
        divs.classList.add('carousel-item', 'carousel-index')
        carousel_div.appendChild(divs)
    }
}

function Chapters(txt, chp) {
    document.addEventListener('DOMContentLoaded', () => {
        const numbers = document.querySelectorAll(txt)
        numbers.forEach(num => {
            num.removeEventListener('click', runloop)
            num.addEventListener('click', runloop)
        })

        function runloop(e) {
            e.stopPropagation();
            forloop(chp);
        }
    });
}


 const ul = document.createElement('ul')
ul.classList.add('dropdown-menu', 'v-verses', 'second_menu')
ul.innerHTML = `
                <i class="dropdown-header text-black">Select Your Verse</i>
                <div class="dropdown-divider"></div>
                       <li class="dropdown-item GE">Genesis


                </li>
                <li class="dropdown-item EX">Exodus</li>
                <li class="dropdown-item LE">Leviticus</li>
                <li class="dropdown-item NU">Numbers</li>
                <li class="dropdown-item DE">Deuteronomy</li>
                <li class="dropdown-item JO">Joshua</li>
                <li class="dropdown-item JU">Judges</li>
                <li class="dropdown-item RU">Ruth</li>
                <li class="dropdown-item S_1">1 Samuel</li>
                <li class="dropdown-item S_2">2 Samuel</li>
                <li class="dropdown-item K_1">1 Kings</li>
                <li class="dropdown-item K_2">2 Kings</li>
                <li class="dropdown-item C_1">1 Chronicles</li>
                <li class="dropdown-item C_2">2 Chronicles</li>
                <li class="dropdown-item EZ">Ezra</li>
                <li class="dropdown-item NE">Nehemiah</li>
                <li class="dropdown-item ES">Esther</li>
                <li class="dropdown-item JOB">Job</li>
                <li class="dropdown-item PS">Psalms</li>
                <li class="dropdown-item PRO">Proverbs</li>
                <li class="dropdown-item ECCL">Ecclesiastes</li>
                <li class="dropdown-item SNG">Songs Of Solomon</li>
                <li class="dropdown-item ISA">Isaiah</li>
                <li class="dropdown-item JER">Jeremiah</li>
                <li class="dropdown-item LAM">Lamentations</li>
                <li class="dropdown-item EZE">Ezekiel</li>
                <li class="dropdown-item DAN">Daniel</li>
                <li class="dropdown-item HOS">Hosea</li>
                <li class="dropdown-item JOEL">Joel</li>
                <li class="dropdown-item AMOS">Amos</li>
                <li class="dropdown-item OBA">Obadiah</li>
                <li class="dropdown-item JONAH">Jonah</li>
                <li class="dropdown-item MIC">Micah</li>
                <li class="dropdown-item NAH">Nahum</li>
                <li class="dropdown-item HAB">Habakkuk</li>
                <li class="dropdown-item ZEPH">Zephaniah</li>
                <li class="dropdown-item HAG">Haggai</li>
                <li class="dropdown-item ZECH">Zechariah</li>
                <li class="dropdown-item MAL">Malachi</li>
                <div class="dropdown-divider"></div>
                <i class="dropdown-header">New Testament</i>

                <li class="dropdown-item MAT">Matthew</li>
                <li class="dropdown-item MRK">Mark</li>
                <li class="dropdown-item LUK">Luke</li>
                <li class="dropdown-item JHN">John</li>
                <li class="dropdown-item ACTS">Acts</li>
                <li class="dropdown-item ROM">Romans</li>
                <li class="dropdown-item COR_1">1 Corinthians</li>
                <li class="dropdown-item COR_2">2 Corinthians</li>
                <li class="dropdown-item GAL">Galatians</li>
                <li class="dropdown-item EPH">Ephesians</li>
                <li class="dropdown-item PHIL">Philippians</li>
                <li class="dropdown-item COL">Colossians</li>
                <li class="dropdown-item THESS_1">1 Thessalonians</li>
                <li class="dropdown-item THESS_2">2 Thessalonians</li>
                <li class="dropdown-item TIM_1">1 Timothy</li>
                <li class="dropdown-item TIM_2">2 Timothy</li>
                <li class="dropdown-item TITUS">Titus</li>
                <li class="dropdown-item PHI">Philemon</li>
                <li class="dropdown-item HEB">Hebrews</li>
                <li class="dropdown-item JAM">James</li>
                <li class="dropdown-item PET_1">1 Peter</li>
                <li class="dropdown-item PET_2">2 Peter</li>
                <li class="dropdown-item JHN_1">1 John</li>
                <li class="dropdown-item JHN_2">2 John</li>
                <li class="dropdown-item JHN_3">3 John</li>
                <li class="dropdown-item JUDE">Jude</li>
                <li class="dropdown-item REV" >Revelation</li>
`

// const bg_4 = document.querySelector('.bg-4')
// bg_4.addEventListener('click', function () {
//     document.querySelector('.num').remove()
// });

// const button_1 = document.querySelector('.custom-bg');
// const button_2 = document.querySelector('.bg-2');

// button_1.addEventListener('click', function () {
//     document.querySelector('.first_menu').innerHTML = `
//         <li class="dropdown-header text-black">Select Your Bible Verse</li>
//                 <div class="dropdown-divider"></div>
//                 <li class="dropdown-item" id="ASV">American Standard Version <span class="abbv">ASV</span></li>
//                 <li class="dropdown-item" id="BSB">Berean Standard Bible <span class="abbv">BSB</span></li>
//                 <li class="dropdown-item" id="KJV">King James Version <span class="abbv">KJV</span></li>
//                 <li class="dropdown-item" id="LSV">Literal Standard Version <span class="abbv">LSV</span></li>
//                 <li class="dropdown-item" id="RV">Revised Version (1885) <span class="abbv">RV</span></li>
//                 <li class="dropdown-item" id="WEB">World English Bible <span class="abbv">WEB</span></li>
//                 <li class="dropdown-item" id="WMB">World Messianic Bible <span class="abbv">WMB</span></li>
//                 <li class="dropdown-item" id="ESV">English Standard Version <span class="abbv">ESV</span></li>
//                 <li class="dropdown-item" id="NLT">New Living Translation <span class="abbv">NLV</span></li>
//                 <li class="dropdown-item" id="NET">New English Translation <span class="abbv">NET</span></li>
//                 <li class="dropdown-item" id="YLT">Young Literal Translation <span class="abbv">YLT</span></li>
//                 <li class="dropdown-item" id="LEB">Lexham English Bible <span class="abbv">LEB</span></li>
//                 <li class="dropdown-item" id="YCB">Yoruba Contemporary Bible</li>
//                 <li class="dropdown-item" id="ICB">Igbo Contemporary Bible</li>
//                 <li class="dropdown-item" id="HCB">Hausa Contemporary Bible</li>
//                 <li class="dropdown-item" id="ISV">International Standard Version <span class="abbv">ISV</span></li>
//     `
// });



const dropdown_menu_text= document.querySelectorAll('.c_second_menu > .dropdown-item');
dropdown_menu_text.forEach( (item) => {
    item.addEventListener('click', (event) => {
        const text = event.target.textContent
        const custom_bg_2 = document.querySelector('.custom-bg-2');
        custom_bg_2.textContent = text
        custom_bg_2.innerHTML += `<i class="ms-5 bx bx-chevron-down"></i>`
    });
});


const dropdown_menu_text1= document.querySelectorAll('.cfirst_menu > .dropdown-item');
dropdown_menu_text1.forEach( (item) => {
    item.addEventListener('click', (event) => {
        const text = event.target.textContent
        const custom_bg_1 = document.querySelector('.custom-bg-1');
        custom_bg_1.textContent = text
        custom_bg_1.innerHTML += `<i class="ms-5 bx bx-chevron-down"></i>`
    });
});
const sec_6 = document.querySelector('.sec-6')
document.querySelector('.close-button').addEventListener('click', () => {
    sec_6.style.display = 'none'
})

//navbar
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.link_1');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});




Chapters('.GE',50);

Chapters('.EX',40);

Chapters('.LE',27);

Chapters('.NU',36);

Chapters('.DE',34);

Chapters('.JO',24);

Chapters('.JU',21);

Chapters('.RU',4);

Chapters('.S_1',31);

Chapters('.S_2',24);

Chapters('.K_1',22);

Chapters('.K_2',25);

Chapters('.C_1',29);

Chapters('.C_2',36);

Chapters('.EZ',10);

Chapters('.NE',13);

Chapters('.ES',10);

Chapters('.JOB',42);

Chapters('.PS',150);

Chapters('.PRO',31);

Chapters('.ECCL',12);

Chapters('.SNG',8);

Chapters('.ISA',66);

Chapters('.JER',52);

Chapters('.LAM',5);

Chapters('.EZE',48);

Chapters('.DAN',12);

Chapters('.HOS',14);

Chapters('.JOEL',3);

Chapters('.AMOS',9);

Chapters('.OBA',1);

Chapters('.JONAH',4);

Chapters('.MIC',7);

Chapters('.NAH',3);

Chapters('.HAB',3);

Chapters('.ZEPH',3);

Chapters('.HAG',2);

Chapters('.ZECH',14);

Chapters('.MAL',4);
//New Testament
Chapters('.MAT',28);

Chapters('.MRK', 16);

Chapters('.LUK', 24);

Chapters('.JHN', 21);

Chapters('.ACTS', 28);

Chapters('.ROM', 16);

Chapters('.COR_1', 16);

Chapters('.COR_2', 13);

Chapters('.GAL', 6);

Chapters('.EPH', 6);

Chapters('.PHIL', 4);

Chapters('.COL', 4);

Chapters('.THESS_1', 5);

Chapters('.THESS_2', 3);

Chapters('.TIM_1', 6);

Chapters('.TIM_2', 4);

Chapters('.TITUS', 3);

Chapters('.PHI', 1);

Chapters('.HEB', 13);

Chapters('.JAM', 5);

Chapters('.PET_1', 5);

Chapters('.PET_2', 3);

Chapters('.JHN_1', 5);

Chapters('.JHN_2', 1);

Chapters('.JHN_3', 1);

Chapters('.JUDE', 1);

Chapters('.REV', 22);






