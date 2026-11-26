import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Championing Education Images
import champ1 from '../../assets/championing/champ1.jpeg';
import champ2 from '../../assets/championing/champ2.jpeg';
import champ3 from '../../assets/championing/champ3.jpeg';
import champ4 from '../../assets/championing/champ4.jpeg';
import champ5 from '../../assets/championing/champ5.jpeg';
import champ6 from '../../assets/championing/champ6.jpeg';

// Strategic Planning 2026 Images
import strategic1 from '../../assets/UPDATES/strategic/922192117_1176525105329703_835978522534242313_n.jfif';
import strategic2 from '../../assets/UPDATES/strategic/913660942_1123049850438511_6316038229026412393_n.jfif';
import strategic3 from '../../assets/UPDATES/strategic/914679401_2531482180711202_5601056938431422789_n.jfif';
import strategic4 from '../../assets/UPDATES/strategic/914967208_1839025783806931_4431996292983859273_n.jfif';
import strategic5 from '../../assets/UPDATES/strategic/915329174_1454584612759654_4967653154105806371_n.jfif';
import strategic6 from '../../assets/UPDATES/strategic/915591929_2102381977076350_4675681465048945915_n.jfif';
import strategic7 from '../../assets/UPDATES/strategic/916080028_989985687037778_5605783246621112534_n.jfif';
import strategic8 from '../../assets/UPDATES/strategic/916897328_1456259143147290_6643291917485609960_n.jfif';
import strategic9 from '../../assets/UPDATES/strategic/916944057_1147696184322481_7283033096335450333_n.jfif';

// SMPC Environmental Research Images
import smpc1 from '../../assets/UPDATES/envi/9.jfif';
import smpc2 from '../../assets/UPDATES/envi/10.jfif';
import smpc3 from '../../assets/UPDATES/envi/11.jfif';
import smpc4 from '../../assets/UPDATES/envi/12.jfif';

// School Safety and Security Images
import safety1 from '../../assets/UPDATES/safety/13.jfif';
import safety2 from '../../assets/UPDATES/safety/14.jfif';
import safety3 from '../../assets/UPDATES/safety/15.jfif';

// Pillars of the Game Images
import pillars1 from '../../assets/UPDATES/pillars/891882129_1471624105071445_5099204305690715607_n.jfif';
import pillars2 from '../../assets/UPDATES/pillars/854470445_1495500875774496_7371358592536719349_n.jfif';
import pillars3 from '../../assets/UPDATES/pillars/890102090_2117510449638421_7289962536889829975_n.jfif';
import pillars4 from '../../assets/UPDATES/pillars/891210025_1802366924404696_8476854874983671286_n.jfif';
import pillars5 from '../../assets/UPDATES/pillars/891789594_1107750735354057_2481403397309793036_n.jfif';

// Knowledge Within Everyone's Reach Images
import knowledge1 from '../../assets/UPDATES/knowledge/736396596_2152011945360091_6740629590808931665_n.jfif';
import knowledge2 from '../../assets/UPDATES/knowledge/735595173_870756946106593_3458431047415457898_n.jfif';
import knowledge3 from '../../assets/UPDATES/knowledge/735734952_1571936794372945_708644449083107103_n.jfif';

// Healthy Smiles Happy Learners Images
import healthy1 from '../../assets/UPDATES/smiles/888792702_1782421576307834_843591029695129985_n.jfif';
import healthy2 from '../../assets/UPDATES/smiles/886948971_1655808209320763_8106607198060642292_n.jfif';
import healthy3 from '../../assets/UPDATES/smiles/888089652_1566973801854677_5124230406515529788_n.jfif';

// Happening Now PLC Images
import plc1 from '../../assets/UPDATES/plc/3.jfif';
import plc2 from '../../assets/UPDATES/plc/4.jfif';
import plc3 from '../../assets/UPDATES/plc/5.jfif';
import plc4 from '../../assets/UPDATES/plc/6.jfif';
import plc5 from '../../assets/UPDATES/plc/7.jfif';
import plc6 from '../../assets/UPDATES/plc/8.jfif';
import plc7 from '../../assets/UPDATES/plc/9.jfif';
import plc8 from '../../assets/UPDATES/plc/10.jfif';
import plc9 from '../../assets/UPDATES/plc/11.jfif';
import plc10 from '../../assets/UPDATES/plc/12.jfif';
import plc11 from '../../assets/UPDATES/plc/13.jfif';
import plc12 from '../../assets/UPDATES/plc/14.jfif';
import plc13 from '../../assets/UPDATES/plc/1.jfif';

// From Data to Heart Images
import dataheart1 from '../../assets/UPDATES/dataheart/905619101_2354457135317468_1771192013144225760_n.jfif';
import dataheart2 from '../../assets/UPDATES/dataheart/895369543_1733097382157712_4256283637865441095_n.jfif';
import dataheart3 from '../../assets/UPDATES/dataheart/897508004_29081302638146923_2171739652610320482_n.jfif';
import dataheart4 from '../../assets/UPDATES/dataheart/901336353_2286495728586338_4268227889449830647_n.jfif';
import dataheart5 from '../../assets/UPDATES/dataheart/901637655_2222297125331423_8908179266006409329_n.jfif';
import dataheart6 from '../../assets/UPDATES/dataheart/903305482_1097833879961320_6448118852122068186_n.jfif';
import dataheart7 from '../../assets/UPDATES/dataheart/903797566_2282962582248143_6407514315146020073_n.jfif';
import dataheart8 from '../../assets/UPDATES/dataheart/903799164_2217035535884719_8253442282231744776_n.jfif';
import dataheart9 from '../../assets/UPDATES/dataheart/903833532_1465107549073422_5898925081291231881_n.jfif';
import dataheart10 from '../../assets/UPDATES/dataheart/903852058_1230094516642305_4038216220054561579_n.jfif';
import dataheart11 from '../../assets/UPDATES/dataheart/903874832_1743142700111252_3486382208728486788_n.jfif';
import dataheart12 from '../../assets/UPDATES/dataheart/904002474_2227541057797432_4758894826607010777_n.jfif';
import dataheart13 from '../../assets/UPDATES/dataheart/904453136_1017968251346496_257230672753215204_n.jfif';
import dataheart14 from '../../assets/UPDATES/dataheart/904472668_2209561319906039_2353540957151903311_n.jfif';
import dataheart15 from '../../assets/UPDATES/dataheart/905202150_1895507034822794_6889095092780243583_n.jfif';
import dataheart16 from '../../assets/UPDATES/dataheart/905390141_1178142011525997_1594971664796374579_n.jfif';

// Empowering Semiraranhon Educators Images
import empower1 from '../../assets/UPDATES/empowering/738472770_1327606099580083_1032152066063425701_n.jfif';
import empower2 from '../../assets/UPDATES/empowering/734384679_1553457446415512_5886310898364561072_n.jfif';
import empower3 from '../../assets/UPDATES/empowering/735982141_1501760824482111_6405159482695492033_n.jfif';
import empower4 from '../../assets/UPDATES/empowering/736045278_1551154339817644_3161902277854535571_n.jfif';
import empower5 from '../../assets/UPDATES/empowering/736142182_1654085192349352_7841134053871629094_n.jfif';
import empower6 from '../../assets/UPDATES/empowering/736778499_4094780063998642_7460647971596174276_n.jfif';
import empower7 from '../../assets/UPDATES/empowering/737569052_1686417765959341_241057186617105410_n.jfif';

// AECON 2026 Images
import aecon1 from '../../assets/UPDATES/aecon/873734086_1923640992347899_2759356049487431109_.jfif';
import aecon2 from '../../assets/UPDATES/aecon/856844254_2177128480345780_9093259482799910963_.jfif';
import aecon3 from '../../assets/UPDATES/aecon/857747826_1432441285510202_5629707691122338359_.jfif';
import aecon4 from '../../assets/UPDATES/aecon/862552420_1428285886121253_2028811111363830007_.jfif';
import aecon5 from '../../assets/UPDATES/aecon/862785473_3028409537504039_70881.jfif';
import aecon6 from '../../assets/UPDATES/aecon/864869678_2997761500559381_6054243004194196145_.jfif';
import aecon7 from '../../assets/UPDATES/aecon/866025366_1009030528887511_8977460370422330701_.jfif';
import aecon8 from '../../assets/UPDATES/aecon/867424522_997132496070725_5991005786565308670_n.jfif';
import aecon9 from '../../assets/UPDATES/aecon/868946093_2020736758885595_3265603800289871380_.jfif';
import aecon10 from '../../assets/UPDATES/aecon/869213003_1097985553067184_2957846366471780608_.jfif';

// Research Webinar Images
import webinar1 from '../../assets/UPDATES/researchpractice/795321871_1689384938804144_1866084151194342511.jfif';
import webinar2 from '../../assets/UPDATES/researchpractice/790318409_1606071737624584_1004435223619210802_n.jfif';
import webinar3 from '../../assets/UPDATES/researchpractice/790756060_2286753185395041_4520591477392397069.jfif';
import webinar4 from '../../assets/UPDATES/researchpractice/790993662_1591272519304757_927086801988315689_.jfif';
import webinar5 from '../../assets/UPDATES/researchpractice/791388732_1225570793085784_1055373564112234405.jfif';

// RoboTitans Images
import robo1 from '../../assets/UPDATES/robo/838951204_1108490428810707_22.jfif';
import robo2 from '../../assets/UPDATES/robo/825351359_163345442176406.jfif';
import robo3 from '../../assets/UPDATES/robo/834902824_1602763784732499_23.jfif';

// BLGU Chairs Images
import chairs1 from '../../assets/UPDATES/monobloc/787557710_2027227444827309_9113616855540248766_n.jfif';
import chairs2 from '../../assets/UPDATES/monobloc/781630583_2123842921860199_5396530800326581536_n.jfif';
import chairs3 from '../../assets/UPDATES/monobloc/784541596_1664730925663123_6700340888816676232_n.jfif';

// New Hires Tour Images
import newlyhired1 from '../../assets/UPDATES/newlyhired/784352429_465740952790597.jfif';
import newlyhired2 from '../../assets/UPDATES/newlyhired/777447952_1856272115342041_20.jfif';
import newlyhired3 from '../../assets/UPDATES/newlyhired/778899146_1272997214839253_46.jfif';
import newlyhired4 from '../../assets/UPDATES/newlyhired/778957659_1095069099597233_55.jfif';
import newlyhired5 from '../../assets/UPDATES/newlyhired/778972267_1628867265472476_53.jfif';
import newlyhired6 from '../../assets/UPDATES/newlyhired/778988956_937385699414955_548.jfif';
import newlyhired7 from '../../assets/UPDATES/newlyhired/780981845_881545298168736_187.jfif';
import newlyhired8 from '../../assets/UPDATES/newlyhired/782252976_2587318441719070_58.jfif';
import newlyhired9 from '../../assets/UPDATES/newlyhired/782492699_2324143238424433_47.jfif';
import newlyhired10 from '../../assets/UPDATES/newlyhired/783672156_1659680419496277_83.jfif';

// Kindergarten Day Images
import kinder1 from '../../assets/UPDATES/kindergarten/915351611_1552599243352992_942080727101009227_n.jfif';
import kinder2 from '../../assets/UPDATES/kindergarten/910465936_4943838519188020_314632561134501245_n.jfif';
import kinder3 from '../../assets/UPDATES/kindergarten/910884353_1137300222404980_4811443438107585934_n.jfif';
import kinder4 from '../../assets/UPDATES/kindergarten/910981174_1196661109706397_1064552657946191927_n.jfif';
import kinder5 from '../../assets/UPDATES/kindergarten/912408308_29141274458834523_9061350045167309067_n.jfif';
import kinder6 from '../../assets/UPDATES/kindergarten/912661841_1632859664500680_1766453220048473565_n.jfif';
import kinder7 from '../../assets/UPDATES/kindergarten/912842892_1611807030695365_5611143901772299632_n.jfif';
import kinder8 from '../../assets/UPDATES/kindergarten/913052739_1753263829100061_1636374356607770782_n.jfif';
import kinder9 from '../../assets/UPDATES/kindergarten/914250734_29330658983235089_379729661710936880_n.jfif';
import kinder10 from '../../assets/UPDATES/kindergarten/915140646_1942575763387879_8697095281585059434_n.jfif';
import kinder11 from '../../assets/UPDATES/kindergarten/915350720_2140997360123966_8911790125513193710_n.jfif'; 

// CEAP Convention Images
import ceap1 from '../../assets/UPDATES/delegation/796788093_1085323567476341_59128.jfif';
import ceap2 from '../../assets/UPDATES/delegation/817540878_1427084892851491_16033.jfif';
import ceap3 from '../../assets/UPDATES/delegation/818553873_1861957108108556_68322.jfif';

// Principals Circle Images
import principals1 from '../../assets/UPDATES/adminfuture/817329456_1642105017700941_2708923580965555941_n.jfif';
import principals2 from '../../assets/UPDATES/adminfuture/797784520_1406748194945894_2623907384421335188_n.jfif';
import principals3 from '../../assets/UPDATES/adminfuture/799958504_1986337662057802_34801.jfif';
import principals4 from '../../assets/UPDATES/adminfuture/814034504_1090521996961174_7704492755594937975_n.jfif';
import principals5 from '../../assets/UPDATES/adminfuture/814560975_4717007248624708_1797123277251489460_n.jfif';
import principals6 from '../../assets/UPDATES/adminfuture/814971280_2226435048088257_7500881748557492102_n.jfif';

// Grade 10 Career Exploration Images
import g10_1 from '../../assets/UPDATES/g10/1.jpg';
import g10_2 from '../../assets/UPDATES/g10/2.jpg';
import g10_3 from '../../assets/UPDATES/g10/3.jpg';
import g10_4 from '../../assets/UPDATES/g10/4.jpg';
import g10_5 from '../../assets/UPDATES/g10/5.jpg';
import g10_6 from '../../assets/UPDATES/g10/6.jpg';
import g10_7 from '../../assets/UPDATES/g10/7.jpg';
import g10_8 from '../../assets/UPDATES/g10/8.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

// Centralized News & Updates Data - Sorted by date (latest first)
const newsUpdates = [
 
  {
    id: 2,
    date: 'November 2026',
    location: 'Boracay Island',
    category: 'Strategic Planning',
    title: 'Strategic Planning 2026: Reflecting, Reassessing, and Preparing for What Lies Ahead',
    paragraphs: [
      'The DWSSII Administrators\' Strategic Planning Activity provided an avenue to evaluate existing school programs, review the implementation of institutional initiatives and activities, and establish strategic directions as the institution prepares for possible transitions and emerging challenges ahead.',
      'The activity also offered an opportunity to meet and express appreciation to our valued partners and major suppliers, the REX Education Team (REX Book Store, Inc.) and ByteLift Learning and Technologies, Inc., for their continued partnership and support.',
      'We likewise extend our sincere gratitude to Hon. Catherine "Kap Kikai" Lim, RN, Punong Barangay of Semirara, for her generous personal financial assistance in support of this activity.',
      'Finally, we recognize and appreciate our seasoned administrators whose years of dedicated service, leadership, and commitment have helped shape DWSSII\'s institutional journey and legacy.',
      'As we move forward, we remain committed to thoughtful leadership, responsible planning, and preparing the institution for the opportunities and challenges ahead.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1KuNrHCcf4/',
    photos: [
      { src: strategic1, caption: 'Strategic Planning Session' },
      { src: strategic2, caption: 'Administrators during planning activity' },
      { src: strategic3, caption: 'Review of institutional initiatives' },
      { src: strategic4, caption: 'Discussion of strategic directions' },
      { src: strategic5, caption: 'Partnership appreciation ceremony' },
      { src: strategic6, caption: 'Recognition of seasoned administrators' },
      { src: strategic7, caption: 'Group photo with REX Education Team' },
      { src: strategic8, caption: 'Group photo with ByteLift Team' },
      { src: strategic9, caption: 'Closing remarks and commitments' }
    ]
  },

   {
    id: 18,
    date: 'November 14, 2026',
    location: 'DWSSII Campus',
    category: 'Early Childhood Education',
    title: 'DWSSII Kindergarten Day 2026',
    paragraphs: [
      'Little Heroes, Bright Futures: Learning, Serving, and Growing Together!',
      'Our hearts are filled with joy and pride!',
      'Our little Divinians shined brightly as our Toddler, Nursery, and Kindergarten pupils showcased their confidence and talents through the Community Helpers Costume Parade, storytelling, poetry recitation, Guessing Game, Numeracy Quiz Bee, and Memory Verse Challenge.',
      'From their cheerful smiles to their brave steps on stage, every moment was a celebration of learning, creativity, and self-expression.',
      'Our heartfelt thanks to our dear parents, dedicated teachers, and everyone who made this celebration possible. You are the heroes behind our little heroes!',
      'Here\'s to nurturing young minds, building good values, and growing together toward a brighter future, one little step at a time!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1AAgL',
    photos: [
      { src: kinder1, caption: 'Costume parade highlight' },
      { src: kinder2, caption: 'Storytelling performance' },
      { src: kinder3, caption: 'Poetry recitation' },
      { src: kinder4, caption: 'Guessing game activity' },
      { src: kinder5, caption: 'Numeracy quiz bee' },
      { src: kinder6, caption: 'Memory verse challenge' },
      { src: kinder7, caption: 'Stage performance' },
      { src: kinder8, caption: 'Parent participation' },
      { src: kinder9, caption: 'Teacher facilitation' },
      { src: kinder10, caption: 'Group celebration' },
      { src: kinder11, caption: 'Closing ceremony' }
    ]
  },

   {
    id: 1,
    date: 'November 2026',
    location: 'Office of the Punong Barangay, Semirara',
    category: 'Community Relations',
    title: 'Championing Education Through Leadership and Generosity',
    paragraphs: [
      'The DWSSII administrators paid a courtesy visit to the Office of the Punong Barangay of Semirara, Hon. Catherine Lim, RN, to present a Certificate of Appreciation in recognition of the Barangay Council\'s invaluable contributions to the institution.',
      'The administrators likewise conveyed their heartfelt appreciation to Kap Kikai for her personal financial assistance in support of the upcoming Administrators\' Strategic Planning Activity, a generous gesture that underscores her continued commitment to strengthening educational leadership and institutional development.',
      'The visit likewise provided an opportunity to proudly introduce DWSSII\'s student achievers who recently brought honor to Semirara through their outstanding performance at the International Robotics Competition in Bangkok, Thailand.',
      'DWSSII remains grateful for leaders whose generosity and commitment help create meaningful opportunities for education and excellence.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1FirqDPuHw/',
    photos: [
      { src: champ1, caption: 'Courtesy visit to Hon. Catherine Lim, RN' },
      { src: champ2, caption: 'Presentation of the Certificate of Appreciation' },
      { src: champ3, caption: 'DWSSII administrators with Kap Kikai' },
      { src: champ4, caption: 'Introducing the student achievers' },
      { src: champ5, caption: 'Recognizing the International Robotics Competition winners' },
      { src: champ6, caption: 'A moment of gratitude and unity' }
    ]
  },

  {
    id: 3,
    date: 'November 2026',
    location: 'Sitio Himalian, Semirara',
    category: 'Environmental Research',
    title: 'SMPC Supports Environmental Research Initiatives in Sitio Himalian',
    paragraphs: [
      'Strengthening its commitment to environmental stewardship and research collaboration, Semirara Mining and Power Corporation (SMPC), through Semirara Materials and Resources, Inc. (SMRI), in partnership with the Department of Environment and Natural Resources (DENR), provided financial assistance amounting to ₱15,000 each to two research groups undertaking studies in Sitio Himalian.',
      'The supported research initiatives are:',
      '1. AI-Assisted Floral Biodiversity Survey of Phanerogams (Seed-Bearing Plants) in Sitio Himalian',
      '2. Mapping Water Sources in Himalian: A Geographic Information System (GIS)-Based Geographic Inventory',
      'The financial assistance was personally turned over by Engr. Justine Balbin, ESG/Community Relations Officer to support the implementation of these research endeavors.',
      'Through continued collaboration with government agencies and research groups, SMPC reinforces the importance of science-based initiatives in promoting environmental awareness and sustainable resource management.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/19rL2',
    photos: [
      { src: smpc1, caption: 'Turnover of financial assistance' },
      { src: smpc2, caption: 'Research group presentation' },
      { src: smpc3, caption: 'Engr. Justine Balbin with researchers' },
      { src: smpc4, caption: 'Documentation of the turnover ceremony' }
    ]
  },
  {
    id: 4,
    date: 'November 2026',
    location: 'DWSSII Campus',
    category: 'School Safety',
    title: 'School Safety and Security',
    paragraphs: [
      'DWSSII extends its sincere thanks to the PNP Semirara COMPAC, SMPC SCAA, and Blue Guards for their continued presence and efforts in keeping our school community safe.',
      'We also thank the Caluya Municipal Police Station, under PCPT Harry Jhun F. Amar, OIC, for the school visitation and police presence.',
      'Together, we help keep DWSSII a safe and secure place for learning.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1DDHsKNp',
    photos: [
      { src: safety1, caption: 'PNP Semirara COMPAC visit' },
      { src: safety2, caption: 'SMPC SCAA security personnel' },
      { src: safety3, caption: 'Blue Guards on duty' }
    ]
  },
  {
    id: 5,
    date: 'November 2026',
    location: 'DWSSII AVR',
    category: 'Sports Recognition',
    title: 'Pillars of the Game: Celebrating Our Athletes and Coaches',
    paragraphs: [
      'Great achievements deserve recognition, and behind every remarkable performance are athletes who give their best and coaches who dedicate their time, knowledge, and passion to developing their potential.',
      'Pillars of the Game: Recognition Ceremony served as a tribute to their commitment, discipline, perseverance, and accomplishments, acknowledging not only the victories earned but also the dedication and sacrifices that made them possible.',
      'We extend our heartfelt congratulations and gratitude to our athletes and coaches. You have carried the name of DWSSII with pride and demonstrated that excellence in sports goes beyond medals and recognition. It is also about character, teamwork, sportsmanship, and the courage to rise to every challenge.',
      'To our athletes and coaches, you are indeed the pillars of the game. Your contributions make our Divine Word community proud!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1Fu1U',
    photos: [
      { src: pillars1, caption: 'Athletes receiving awards' },
      { src: pillars2, caption: 'Coaches being recognized' },
      { src: pillars3, caption: 'Team photo with administrators' },
      { src: pillars4, caption: 'Medal ceremony' },
      { src: pillars5, caption: 'Celebration of athletic achievements' }
    ]
  },
  {
    id: 6,
    date: 'November 2026',
    location: 'DWSSII AVR',
    category: 'Professional Development',
    title: 'Happening Now | DWSSII Professional Learning Community',
    paragraphs: [
      'DWSSII teachers and academic leaders are currently gathered for a School-Based Professional Development Seminar on Curriculum Planning, Instructional Intervention, and Formation Activities.',
      'Today\'s sessions focus on strengthening curriculum implementation, analyzing assessment data, identifying learning gaps, and developing strategies that respond to the evolving needs of our learners.',
      'Building Capacity, Strengthening Resilience!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1A7sdi7',
    photos: [
      { src: plc1, caption: 'PLC Session opening' },
      { src: plc2, caption: 'Curriculum planning workshop' },
      { src: plc3, caption: 'Assessment data analysis' },
      { src: plc4, caption: 'Group discussions' },
      { src: plc5, caption: 'Presenter sharing insights' },
      { src: plc6, caption: 'Participants engaged in activities' },
      { src: plc7, caption: 'Collaborative learning session' },
      { src: plc8, caption: 'Strategy development workshop' },
      { src: plc9, caption: 'Faculty members in session' },
      { src: plc10, caption: 'Interactive discussion' },
      { src: plc11, caption: 'Breakout group activity' },
      { src: plc12, caption: 'Sharing of best practices' },
      { src: plc13, caption: 'Closing remarks' }
    ]
  },
  {
    id: 7,
    date: 'November 2026',
    location: 'DWSSII AVR',
    category: 'Professional Development',
    title: 'From Data to Heart: Closing Gaps, Nurturing Learners, Growing Together',
    paragraphs: [
      'What a meaningful day of learning and sharing for our DWSSII family!',
      'Our Professional Learning Community Session was more than just a series of presentations. It was an opportunity to reflect on our learners\' progress, understand their challenges through data, and discover better ways to support their learning and growth.',
      'From recognizing learning gaps to exploring effective teaching strategies, each discussion reminded us that behind every score is a learner with unique needs, strengths, and potential.',
      'At the heart of teaching is understanding, and with patience, compassion, and teamwork, we can make a difference in every learner\'s journey.',
      'Together, let us continue learning, growing, and making every learning experience count!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1EBJiXx',
    photos: [
      { src: dataheart1, caption: 'PLC Session overview' },
      { src: dataheart2, caption: 'Data-driven discussions' },
      { src: dataheart3, caption: 'Teacher reflections' },
      { src: dataheart4, caption: 'Group presentations' },
      { src: dataheart5, caption: 'Analysis of learner progress' },
      { src: dataheart6, caption: 'Strategy formulation' },
      { src: dataheart7, caption: 'Collaborative planning' },
      { src: dataheart8, caption: 'Insight sharing session' },
      { src: dataheart9, caption: 'Workshop activities' },
      { src: dataheart10, caption: 'Peer learning exchange' },
      { src: dataheart11, caption: 'Session highlights' },
      { src: dataheart12, caption: 'Action planning' },
      { src: dataheart13, caption: 'Commitment statements' },
      { src: dataheart14, caption: 'Closing circle' },
      { src: dataheart15, caption: 'Group photo' },
      { src: dataheart16, caption: 'Appreciation moment' }
    ]
  },
  {
    id: 8,
    date: 'November 2026',
    location: 'Semirara Island',
    category: 'Literacy Initiative',
    title: 'Knowledge Within Everyone\'s Reach',
    paragraphs: [
      'The DWSSII Community InfoLearning Boards have been successfully installed in strategic locations across the three barangays of Semirara Island, bringing learning resources, important announcements, and educational information closer to the community.',
      'This initiative aims to promote literacy, lifelong learning, and informed citizenship by making knowledge accessible to every resident; because learning should extend beyond the four walls of the classroom.',
      'Building informed communities, one board at a time.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1DeDkEs',
    photos: [
      { src: knowledge1, caption: 'InfoLearning Board installation' },
      { src: knowledge2, caption: 'Community engagement' },
      { src: knowledge3, caption: 'Board unveiling ceremony' }
    ]
  },
  {
    id: 9,
    date: 'October 2026',
    location: 'DWSSII Elementary Department',
    category: 'Health Program',
    title: 'Healthy Smiles, Happy Learners!',
    paragraphs: [
      'Our Kindergarten pupils are currently enjoying FREE DENTAL CHECK-UPS through the initiative of Semirara Mining and Power Corporation (SMPC).',
      'We thank the SMPC Safety and Health Department for its continued support in promoting the health and well-being of our young learners.',
      'Every healthy smile counts!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1511xLX8',
    photos: [
      { src: healthy1, caption: 'Dental check-up activity' },
      { src: healthy2, caption: 'Kindergarten pupils during screening' },
      { src: healthy3, caption: 'SMPC Health team assisting' }
    ]
  },
  {
    id: 10,
    date: 'October 2026',
    location: 'Bangkok, Thailand',
    category: 'Robotics Competition',
    title: 'DWSSII RoboTitans Earn Silver at MakeX 2026 Asia Intercontinental Tournament',
    paragraphs: [
      'Divine Word School of Semirara Island Inc. proudly celebrates the achievement of its RoboTitans at the 2026 MakeX Robotics Competition – Asia Intercontinental Tournament, held in Bangkok, Thailand, from October 2 to 4, 2026.',
      'Representing DWSSII, Mark Jacob O. Antonio and Gwen Astrid C. Lozada each secured a Skills Quest Silver Award in the Inspire Category, contributing two medals to the Philippines\' overall haul of 18 medals in the international competition.',
      'The RoboTitans were accompanied by their teacher, Ma\'am Apple Grace Ysug, who supported and guided the students throughout their participation in the competition.',
      'The DWSSII community congratulates Mark Jacob, Gwen Astrid, and Ma\'am Apple Grace for proudly representing the school and the island of Semirara. Their accomplishment stands as an inspiration to fellow students to pursue excellence in science, technology, engineering, and innovation.',
      'Congratulations, DWSSII RoboTitans!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1CGu',
    photos: [
      { src: robo1, caption: 'RoboTitans with silver medals' },
      { src: robo2, caption: 'Competition arena' },
      { src: robo3, caption: 'Team celebration' }
    ]
  },
  {
    id: 11,
    date: 'October 2026',
    location: 'Marquis Events Place, BGC',
    category: 'Educators Congress',
    title: 'DWSSII at AECON 2026: Learning Today, Shaping the Future of Education',
    paragraphs: [
      'The recently concluded Annual Educators\' Congress (AECON) 2026, organized by REX Education on October 22–23 at Marquis Events Place, Bonifacio Global City, was a meaningful opportunity for the Divine Word School of Semirara Island, Inc. (DWSSII) administrators to learn, connect, and envision the future of education together.',
      'Anchored on the theme "Navigating Our Education Futures Together," the two-day congress offered valuable insights into the evolving educational landscape and the challenges and opportunities that come with it.',
      'Beyond the sessions and discussions, AECON 2026 reminded us of the importance of embracing innovation, strengthening collaboration, remaining responsive to change, and keeping learners at the heart of every educational decision. It reinforced the value of continuous professional growth and the need for school leaders to remain open to new perspectives and approaches that can make learning more relevant, meaningful, and future-ready.',
      'More than a professional learning experience, the congress was also an opportunity to exchange ideas with fellow educators and school leaders, build meaningful connections, and bring home fresh perspectives that can help us continuously improve our practices and better serve our learners.',
      'Our heartfelt gratitude to the REX Education family, especially Ma\'am Amera Lyn Cañares and Sir Roger Ledesma of REX Education Visayas, for making this enriching experience possible. Thank you for your warm support, thoughtful assistance, and for bringing educators together in a space where meaningful conversations, collaboration, and professional growth can flourish.',
      'As we return to our respective schools, may the knowledge gained, connections made, and experiences shared at AECON 2026 inspire us to turn insights into action and continue creating learning experiences that empower every learner.',
      'Together, let us keep learning, innovating, and moving forward for the future of education!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1',
    photos: [
      { src: aecon1, caption: 'AECON 2026 opening ceremony' },
      { src: aecon2, caption: 'Keynote session' },
      { src: aecon3, caption: 'Breakout discussions' },
      { src: aecon4, caption: 'Networking event' },
      { src: aecon5, caption: 'Panel discussion' },
      { src: aecon6, caption: 'Workshop session' },
      { src: aecon7, caption: 'Exhibition area' },
      { src: aecon8, caption: 'Certificate awarding' },
      { src: aecon9, caption: 'Group photo with REX team' },
      { src: aecon10, caption: 'Closing remarks' }
    ]
  },
  {
    id: 12,
    date: 'September 2026',
    location: 'DWSSII Auditorium',
    category: 'Technology Integration',
    title: 'Empowering Semiraranhon Educators for the Future of Learning',
    paragraphs: [
      'Divine Word School of Semirara Island, Inc. (DWSSII) successfully conducted the Seminar on Integrating Technology and Artificial Intelligence Literacy in Modern Education, bringing together DWSSII faculty members, Child Development Workers from the BLGU and LGU, and representatives from the SK Alegria Youth Council.',
      'The seminar strengthened participants\' knowledge and skills in leveraging technology and artificial intelligence to create more engaging, innovative, and future-ready learning experiences for every learner.',
      'This meaningful initiative was made possible through the invaluable support and collaboration of Semirara Mining and Power Corporation (SMPC), REX Education, and Resources for Education and Academic Professionals, Inc. (REAP).',
      'Together, we continue to champion quality education by equipping educators and community partners with the competencies needed to thrive in the digital age.',
      'Building digitally empowered educators. Shaping future-ready learners.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1CvPj',
    photos: [
      { src: empower1, caption: 'Seminar opening' },
      { src: empower2, caption: 'AI integration demonstration' },
      { src: empower3, caption: 'Hands-on workshop' },
      { src: empower4, caption: 'Participant engagement' },
      { src: empower5, caption: 'Tech tools exploration' },
      { src: empower6, caption: 'Group activity' },
      { src: empower7, caption: 'Certificate presentation' }
    ]
  },
  {
    id: 13,
    date: 'September 2026',
    location: 'Waterfront Hotel Cebu',
    category: 'Catholic Education',
    title: 'DWSSII Delegation Embarks on Journey to CEAP National Convention SUGBU 2026',
    paragraphs: [
      'The DWSSII delegation is on its way to Cebu! As anticipation builds for the CEAP National Convention SUGBU 2026, our school administrators are set to join fellow Catholic educators from across the country for this significant gathering on September 22–25, 2026 at the Waterfront Hotel Cebu.',
      'Representing DWSSII are Rev. Fr. Rico Glenn C. Deuna, SVD, School Director, together with Fr. Jerome A. Ormita, SVD, Spiritual Enrichment and Development Officer; Mrs. Grace A. Arguelles, Principal; Mrs. Joy P. Sanico, Assistant Principal for Senior High School; Mr. Ronald C. Ledda, HRD Officer; and Mrs. Czarina Z. Choco, Community Extension Services Officer.',
      'Carrying the theme "Newness in Catholic Education: Charting a Constellation of Hope," the convention offers an exciting opportunity to discover fresh perspectives, exchange meaningful practices, and deepen the shared mission of Catholic education.',
      'As our administrators journey from Semirara to Cebu, we look forward to the insights, experiences, and renewed inspiration they will bring home to the DWSSII community, strengthening our collective commitment to forming learners through faith, excellence, service, and integrity.',
      'The journey begins, and a new constellation of hope awaits!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/18v82',
    photos: [
      { src: ceap1, caption: 'Delegation departure' },
      { src: ceap2, caption: 'Travel documentation' },
      { src: ceap3, caption: 'Arrival in Cebu' }
    ]
  },
  {
    id: 14,
    date: 'September 2026',
    location: 'Bayview Park Hotel Manila',
    category: 'Leadership Development',
    title: 'DWSSII Administrators Step Into the Future of School Leadership',
    paragraphs: [
      'Our administrators, headed by Rev. Fr. Rico Glenn C. Deuna, SVD, together with Mrs. Doreen E Morgado - Research Planning and Development Officer, Mrs. Sarah Jane R. Canabo - Student Support Services Officer, and Mrs. Marilyn A. Lim - Admissions, Guidance and Testing Center Officer joined school leaders from across the country at the Principals Circle of the Philippines Annual Convention 2026, held September 16–17 at Bayview Park Hotel Manila.',
      'With the theme "Leading Future-Ready Schools: Building Safe, Caring, and Resilient Learning Communities," the convention explored innovative approaches to school management, assessment, leadership, and student well-being.',
      'The learning experience offered our administrators fresh insights, meaningful connections, and new perspectives that can help further strengthen the DWSSII learning community.',
      'Learning today. Leading tomorrow. Building a future-ready DWSSII.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1D1hvm',
    photos: [
      { src: principals1, caption: 'Convention opening' },
      { src: principals2, caption: 'Keynote address' },
      { src: principals3, caption: 'Panel discussion' },
      { src: principals4, caption: 'Networking session' },
      { src: principals5, caption: 'Workshop activity' },
      { src: principals6, caption: 'Group photo' }
    ]
  },
  {
    id: 15,
    date: 'August 2026',
    location: 'Zoom Platform',
    category: 'Research Development',
    title: 'DWSSII Strengthens Research Practices Through Professional Webinar',
    paragraphs: [
      'Administrators and Practical Research teachers of Divine Word School of Semirara Island, Inc. (DWSSII) participated in the Webinar on Trends and Best Practices in Research Teaching and Thesis Advising held on August 19–20, 2026 via Zoom.',
      'Representing DWSSII were Ma\'am Doreen Morgado, Research Planning and Development Officer, Ms. Ana Marie Felipe-Villanueva, and Mr. Johnie L. Taday.',
      'The two-day webinar focused on innovative research pedagogy, smart technologies, Generative AI, research ethics, and effective research advising.',
      'Photo credit: ASTR Inc.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1Jt8JP',
    photos: [
      { src: webinar1, caption: 'Webinar session' },
      { src: webinar2, caption: 'Virtual participation' },
      { src: webinar3, caption: 'Research discussion' },
      { src: webinar4, caption: 'Expert speaker' },
      { src: webinar5, caption: 'Q&A segment' }
    ]
  },
  {
    id: 16,
    date: 'August 2026',
    location: 'DWSSII Campus',
    category: 'Donation',
    title: 'DWSSII Receives 100 Monobloc Chairs and Laptop from BLGU Semirara',
    paragraphs: [
      'AUGUST 26, 2026 - A meaningful gesture of support for education took place this afternoon as the BLGU Semirara, through the leadership of Hon. Catherine "Kap Kikai" Lim, RN, together with the members of the Sangguniang Barangay, officially turned over 100 pieces of monobloc chairs and one unit laptop to the Divine Word School of Semirara Island, Inc. (DWSSII).',
      'The chairs will be used by SEM-TEP/DWSSII students, while the laptop will provide additional support for the school\'s academic and administrative activities.',
      'DWSSII sincerely thanks the entire BLGU Semirara Council for this generous support and continued commitment to education.',
      'Together, we continue to create better learning opportunities for our students and a stronger future for Semirara.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1A6HBM',
    photos: [
      { src: chairs1, caption: 'Turnover ceremony' },
      { src: chairs2, caption: 'Hon. Catherine Lim with administrators' },
      { src: chairs3, caption: 'Monobloc chairs and laptop display' }
    ]
  },
  {
    id: 17,
    date: 'August 2026',
    location: 'Semirara Island',
    category: 'Employee Onboarding',
    title: 'DWSSII Newly Hired Employees Explore Semirara Island Through Onboarding Tour',
    paragraphs: [
      'As part of DWSSII\'s mandatory onboarding initiatives, our newly hired employees recently went on a Semirara Island Tour to get to know the community and appreciate the island\'s natural beauty and richness.',
      'The tour also introduced them to the various environmental programs and initiatives of Semirara Mining and Power Corporation, emphasizing the importance of environmental stewardship and sustainable development.',
      'More than a tour, it was a meaningful first step in becoming part of the Semirara community and the DWSSII family.',
      'Welcome to Semirara. Welcome to DWSSII!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1Et4z8',
    photos: [
      { src: newlyhired1, caption: 'Island tour start' },
      { src: newlyhired2, caption: 'Natural landmarks visit' },
      { src: newlyhired3, caption: 'SMPC environmental program site' },
      { src: newlyhired4, caption: 'Group photo at scenic spot' },
      { src: newlyhired5, caption: 'Community interaction' },
      { src: newlyhired6, caption: 'Educational stop' },
      { src: newlyhired7, caption: 'Tour continuation' },
      { src: newlyhired8, caption: 'Nature appreciation' },
      { src: newlyhired9, caption: 'Team bonding' },
      { src: newlyhired10, caption: 'Closing remarks' }
    ]
  },
 
  {
    id: 19,
    date: 'September 7, 2026',
    location: 'SMPC Food Court',
    category: 'Career Guidance',
    title: 'Grade 10 Career Exploration Day 2026',
    paragraphs: [
      '"Discovering Strengths, Shaping Futures – Living the Word with Integrity"'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1CcV4j5DZS/',
    photos: [
      { src: g10_1, caption: 'Career fair booths' },
      { src: g10_2, caption: 'Student engagement' },
      { src: g10_3, caption: 'Career counselor interaction' },
      { src: g10_4, caption: 'Information dissemination' },
      { src: g10_5, caption: 'Group activity' },
      { src: g10_6, caption: 'Presentation session' },
      { src: g10_7, caption: 'Hands-on experience' },
      { src: g10_8, caption: 'Reflection activity' }
    ]
  }
];

function PhotoMosaic({ photos, onOpen }) {
  const preview = photos.slice(0, 3);
  const extra = photos.length - preview.length;

  return (
    <div className={`lit-mosaic lit-mosaic-${preview.length}`}>
      {preview.map((photo, i) => (
        <button
          key={i}
          type="button"
          className="lit-mosaic-item"
          onClick={() => onOpen(i)}
          aria-label={`View photo ${i + 1} of ${photos.length}`}
        >
          <img src={photo.src} alt={photo.caption} loading="lazy" decoding="async" />
          {i === preview.length - 1 && extra > 0 && (
            <span className="lit-mosaic-more">+{extra}</span>
          )}
          <span className="lit-mosaic-hint" aria-hidden="true">View</span>
        </button>
      ))}
    </div>
  );
}

function Lightbox({ photos, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev]);

  const photo = photos[index];

  return (
    <motion.div
      className="lit-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
    >
      <button className="lit-lb-close" onClick={onClose} aria-label="Close gallery">&times;</button>

      <button className="lit-lb-nav lit-lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous photo">&#10094;</button>

      <motion.figure
        className="lit-lb-figure"
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.src} alt={photo.caption} className="lit-lb-image" />
        <figcaption className="lit-lb-caption">
          <span className="lit-lb-counter">{index + 1} / {photos.length}</span>
          {photo.caption}
        </figcaption>
      </motion.figure>

      <button className="lit-lb-nav lit-lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next photo">&#10095;</button>

      <div className="lit-lb-thumbs" onClick={(e) => e.stopPropagation()}>
        {photos.map((p, i) => (
          <button key={i} className={`lit-lb-thumb ${i === index ? 'active' : ''}`} onClick={() => onNext(i)} aria-label={`Go to photo ${i + 1}`}>
            <img src={p.src} alt="" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function News() {
  const [lightbox, setLightbox] = useState({ open: false, post: 0, index: 0 });
  const heroRef = useRef(null);

  // Scroll-linked shrink: writes a 0 -> 1 progress value (--p) straight to the
  // hero's CSS. No React state, no re-renders, no class toggling, so no flicker.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const update = () => {
      const shrink =
        parseFloat(getComputedStyle(hero).getPropertyValue('--hero-shrink')) || 180;
      const p = Math.min(Math.max(window.scrollY / shrink, 0), 1);
      hero.style.setProperty('--p', p.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  const openLightbox = (post, index) => setLightbox({ open: true, post, index });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  const currentPhotos = newsUpdates[lightbox.post]?.photos || [];

  const nextPhoto = useCallback((direct) => {
    setLightbox((s) => {
      const total = newsUpdates[s.post].photos.length;
      const idx = typeof direct === 'number' ? direct : (s.index + 1) % total;
      return { ...s, index: idx };
    });
  }, []);

  const prevPhoto = useCallback(() => {
    setLightbox((s) => {
      const total = newsUpdates[s.post].photos.length;
      return { ...s, index: (s.index - 1 + total) % total };
    });
  }, []);

  return (
    <main className="subpage">
      {/* Hero: shrinks as you scroll; the title stays pinned under the navbar */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>News & Updates</h1>
            <p className="tagline">Stay informed with the latest happenings in the Divinian community</p>
          </motion.div>
        </div>
      </section>

      <section className="seminars-section" style={{ padding: '80px 0' }}>
        <div className="container">
          {newsUpdates.map((post, pIndex) => {
            const isEven = pIndex % 2 === 0;
            return (
              <motion.article
                key={post.id}
                className={`news-item lit-article ${isEven ? '' : 'reverse'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <div className="lit-gallery-col">
                  <PhotoMosaic photos={post.photos} onOpen={(i) => openLightbox(pIndex, i)} />
                  <p className="lit-gallery-note">{post.photos.length} photos — click any photo to view the gallery</p>
                </div>

                <div className="news-content">
                  <div className="lit-meta">
                    <span className="lit-category">{post.category}</span>
                    <span className="lit-dot" aria-hidden="true">•</span>
                    <span className="lit-date">{post.date}</span>
                  </div>

                  <h3 className="news-title lit-title">{post.title}</h3>
                  <span className="news-location">{post.location}</span>

                  {post.paragraphs.map((p, i) => (
                    <p key={i} className="news-description lit-paragraph">{p}</p>
                  ))}

                  <span className="lit-hashtag">{post.hashtag}</span>

                  {post.fbLink && (
                    <a href={post.fbLink} target="_blank" rel="noopener noreferrer" className="lit-fb-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '8px' }}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      View Full Post on Facebook
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {lightbox.open && (
          <Lightbox photos={currentPhotos} index={lightbox.index} onClose={closeLightbox} onNext={nextPhoto} onPrev={prevPhoto} />
        )}
      </AnimatePresence>
    </main>
  );
}