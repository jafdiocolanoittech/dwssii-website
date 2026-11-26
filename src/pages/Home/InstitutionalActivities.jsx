import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. 23rd Founding Anniversary Images (Folder: founding)
import founding1 from '../../assets/INSTITUTIONAL/23rdfounding/837739215_1602858925185309_6772344661795993019_n.jpg';
import founding2 from '../../assets/INSTITUTIONAL/23rdfounding/831210806_122121156765436524_7442056176219375196_n.jpg';
import founding3 from '../../assets/INSTITUTIONAL/23rdfounding/833392354_122121156741436524_5301589539262256309_n.jpg';
import founding4 from '../../assets/INSTITUTIONAL/23rdfounding/835511152_122121156621436524_7353268923937532739_n.jpg';
import founding5 from '../../assets/INSTITUTIONAL/23rdfounding/836299158_122121156813436524_7135222802256975280_n.jpg';
import founding6 from '../../assets/INSTITUTIONAL/23rdfounding/836666835_122121156801436524_1073452604391603553_n.jpg';
import founding7 from '../../assets/INSTITUTIONAL/23rdfounding/837462748_1602858905185311_979.jpg';

// 2. Foundation Day | Teachers' Day Images (Folder: foundation)
import foundation1 from '../../assets/INSTITUTIONAL/foundation/834529925_122121227151436524_3807377810246751119_n.jpg';
import foundation2 from '../../assets/INSTITUTIONAL/foundation/836213211_122121227271436524_8187210294307313889_n.jpg';
import foundation3 from '../../assets/INSTITUTIONAL/foundation/836438568_122121227343436524_3481395233174455002_n.jpg';
import foundation4 from '../../assets/INSTITUTIONAL/foundation/836514479_122121227247436524_4546229216169228490_n.jpg';
import foundation5 from '../../assets/INSTITUTIONAL/foundation/836547473_122121226971436524_4759707804415287191_n.jpg';
import foundation6 from '../../assets/INSTITUTIONAL/foundation/836601448_122121227091436524_4006290025669590543_n.jpg';
import foundation7 from '../../assets/INSTITUTIONAL/foundation/836666835_122121227217436524_2831108194744352246_n.jpg';
import foundation8 from '../../assets/INSTITUTIONAL/foundation/836704397_122121227175436524_3599836534420293818_n.jpg';
import foundation9 from '../../assets/INSTITUTIONAL/foundation/836930944_122121239907436524_7540122315744571832_n.jpg';
import foundation10 from '../../assets/INSTITUTIONAL/foundation/839389190_122121227163436524_3216449762346487652_n.jpg';
import foundation11 from '../../assets/INSTITUTIONAL/foundation/831961291_122121227133436524_6825419147957415675_n.jpg';
import foundation12 from '../../assets/INSTITUTIONAL/foundation/833521004_122121227283436524_762256623038548008_n.jpg';
import foundation13 from '../../assets/INSTITUTIONAL/foundation/833977999_122121227025436524_2617973467195708322_n.jpg';
import foundation14 from '../../assets/INSTITUTIONAL/foundation/834501426_122121227229436524_7851131731742350992_n.jpg';

// 3. Gift-Giving Activity Images (Folder: giving)
import giving1 from '../../assets/INSTITUTIONAL/givingwlove/911746972_1160310366961896_1753357741163494440_n.jfif';
import giving2 from '../../assets/INSTITUTIONAL/givingwlove/912093665_1690475849378862_1252301335076057894_n.jfif';
import giving3 from '../../assets/INSTITUTIONAL/givingwlove/912909655_1885236672922572_7797393708046037461_n.jfif';
import giving4 from '../../assets/INSTITUTIONAL/givingwlove/912981921_1728752795248064_1664692827210535666_n.jfif';
import giving5 from '../../assets/INSTITUTIONAL/givingwlove/913241020_2305882220252863_8818533421233029079_n.jfif';
import giving6 from '../../assets/INSTITUTIONAL/givingwlove/913488942_1723657539407868_8257872596959079192_n.jfif';
import giving7 from '../../assets/INSTITUTIONAL/givingwlove/913488960_1812633703139932_4221120489161495031_n.jfif';
import giving8 from '../../assets/INSTITUTIONAL/givingwlove/913844813_1127643580158592_7926364986369952329_n.jfif';
import giving9 from '../../assets/INSTITUTIONAL/givingwlove/915101701_1777324664200256_1033069881468862052_n.jfif';
import giving10 from '../../assets/INSTITUTIONAL/givingwlove/915351546_1150034337717726_580726329078917271_n.jfif';
import giving11 from '../../assets/INSTITUTIONAL/givingwlove/907709804_1156368520446883_8544261612526572635_n.jfif';
import giving12 from '../../assets/INSTITUTIONAL/givingwlove/910367859_2326393588174407_8659223441790348120_n.jfif';
import giving13 from '../../assets/INSTITUTIONAL/givingwlove/911035153_1779763076649933_7677380619125701680_n.jfif';
import giving14 from '../../assets/INSTITUTIONAL/givingwlove/911225946_30412329618357313_5489750043730343036_n.jfif';
import giving15 from '../../assets/INSTITUTIONAL/givingwlove/911291357_1189100693695316_1286179343165120166_n.jfif';

// 4. Honors Sir VAC Images (Folder: honors)
import honors1 from '../../assets/INSTITUTIONAL/honorsvac/773614802_2297242221087349_8417670500440651264_n.jfif';
import honors2 from '../../assets/INSTITUTIONAL/honorsvac/768372781_2595597850857975_965749569264850933_n.jfif';
import honors3 from '../../assets/INSTITUTIONAL/honorsvac/769408345_905085815988835_2177636850895033537_n.jfif';
import honors4 from '../../assets/INSTITUTIONAL/honorsvac/770617683_748567461684702_3227316253231751658_n.jfif';
import honors5 from '../../assets/INSTITUTIONAL/honorsvac/770901720_887603134172717_1962328534376037544_n.jfif';
import honors6 from '../../assets/INSTITUTIONAL/honorsvac/771968485_934717636326997_4554215473926095759_n.jfif';
import honors7 from '../../assets/INSTITUTIONAL/honorsvac/772685814_1570652458090658_37.jfif';
import honors8 from '../../assets/INSTITUTIONAL/honorsvac/772879846_1864977021131582_7143645830521405693_n.jfif';
import honors9 from '../../assets/INSTITUTIONAL/honorsvac/773403086_4668293716779244_2260679439799397559_n.jfif';

// 5. Intramurals 2026 Images (Folder: intrams)
import intrams1 from '../../assets/INSTITUTIONAL/intrams/799849096_2040415346606575_2134394997612588.jfif';
import intrams2 from '../../assets/INSTITUTIONAL/intrams/800934855_1836239970695857_7507106166599758.jfif';
import intrams3 from '../../assets/INSTITUTIONAL/intrams/802002921_4606193262984015_7087200551990176.jfif';
import intrams4 from '../../assets/INSTITUTIONAL/intrams/802030638_1806606160467268_8037338711803931.jfif';
import intrams5 from '../../assets/INSTITUTIONAL/intrams/803105904_1353903816732298_5039107329902675.jfif';
import intrams6 from '../../assets/INSTITUTIONAL/intrams/803268785_1184353750787396_4776465678982797.jfif';
import intrams7 from '../../assets/INSTITUTIONAL/intrams/803323866_896405283347006_51226093575422440.jfif';
import intrams8 from '../../assets/INSTITUTIONAL/intrams/803465681_27589388787406798_227851045795959.jfif';
import intrams9 from '../../assets/INSTITUTIONAL/intrams/803926185_1064387566568556_4813888019498944.jfif';
import intrams10 from '../../assets/INSTITUTIONAL/intrams/804959200_1456699576363809_7125142424365817783_n.jfif';
import intrams11 from '../../assets/INSTITUTIONAL/intrams/805027238_1096990932667992_5061495318689374.jfif';
import intrams12 from '../../assets/INSTITUTIONAL/intrams/805700083_1032422742955708_1075548240128102.jfif';

// 6. Kumustahan at Kapehan Images (Folder: kapehan)
import kapehan1 from '../../assets/INSTITUTIONAL/kapehan/759040664_4484271861891624_8161144169945218387_n.jfif';
import kapehan2 from '../../assets/INSTITUTIONAL/kapehan/754936249_1527023485838815_2514238737547756506_n.jfif';
import kapehan3 from '../../assets/INSTITUTIONAL/kapehan/755808257_1554868486078027_9192990271175081147_n.jfif';
import kapehan4 from '../../assets/INSTITUTIONAL/kapehan/756814531_1522243219121898_5059219519428222496_n.jfif';
import kapehan5 from '../../assets/INSTITUTIONAL/kapehan/756975331_1686597695969425_3215536891003111355_n.jfif';
import kapehan6 from '../../assets/INSTITUTIONAL/kapehan/757399048_4578600579129666_7167566022699201467_n.jfif';
import kapehan7 from '../../assets/INSTITUTIONAL/kapehan/758730996_3407259802804940_623361069869895659_n.jfif';

// 7. Pre-Advent Recollection Images (Folder: recollection)
import recollection1 from '../../assets/INSTITUTIONAL/recollection/913239956_1166567682391416_1596644045693781506_n.jfif';
import recollection2 from '../../assets/INSTITUTIONAL/recollection/907446928_1163176826244258_5930981093006738242_n.jfif';
import recollection3 from '../../assets/INSTITUTIONAL/recollection/909703336_1670898867832860_5406410130136392678_n.jfif';
import recollection4 from '../../assets/INSTITUTIONAL/recollection/910463356_2051978896189718_7620155545043786808_n.jfif';
import recollection5 from '../../assets/INSTITUTIONAL/recollection/911339189_2201519687389205_1420710821333641907_n.jfif';
import recollection6 from '../../assets/INSTITUTIONAL/recollection/911423434_1454500954418408_552060191529139908_n.jfif';
import recollection7 from '../../assets/INSTITUTIONAL/recollection/911529475_1881601743289896_5258051277422980349_n.jfif';
import recollection8 from '../../assets/INSTITUTIONAL/recollection/911709593_1466449373218615_1997973642888254989_n.jfif';
import recollection9 from '../../assets/INSTITUTIONAL/recollection/912163116_1175535651816651_3026577511971605371_n.jfif';
import recollection10 from '../../assets/INSTITUTIONAL/recollection/913090783_1152328720660640_889501654583355509_n.jfif'; 

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

const activities = [
  {
    id: 1,
    date: 'November 16, 2026',
    location: 'Our Lady of Guadalupe Parish',
    category: 'Spiritual Formation',
    title: 'Opening Hearts, Renewing Faith: DWSSII Pre-Advent Recollection 2026',
    paragraphs: [
      'DWSSII personnel came together for a meaningful day of prayer, reflection, and spiritual renewal during the Pre-Advent Recollection held on November 16, 2026, at Our Lady of Guadalupe Parish.',
      'Anchored on the theme, "Before We Close the Doors, Let Us Open Our Hearts," the recollection provided an opportunity to pause, examine our lives, reconcile, and prepare our hearts for the coming of Christ.',
      'Our heartfelt gratitude to Rev. John Rey Darryl A. Luces for facilitating the recollection and to Fr. Allan Tanoja for his valuable support in making this spiritual activity possible.',
      'May the lessons and reflections from this gathering inspire every Divinian to embrace the Advent season with renewed faith, grateful hearts, and a deeper commitment to our mission.',
      'Let us open our hearts and make room for Christ.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1Jcjq3evwm/',
    photos: [
      { src: recollection1, caption: 'Pre-Advent Recollection gathering' },
      { src: recollection2, caption: 'Moment of prayer and reflection' },
      { src: recollection3, caption: 'Facilitator Rev. John Rey Darryl A. Luces' },
      { src: recollection4, caption: 'Personnel in spiritual fellowship' },
      { src: recollection5, caption: 'Community worship' },
      { src: recollection6, caption: 'Renewing faith together' },
      { src: recollection7, caption: 'Opening hearts session' },
      { src: recollection8, caption: 'Fr. Allan Tanoja support' },
      { src: recollection9, caption: 'Group photo at the Parish' },
      { src: recollection10, caption: 'Closing blessing' }
    ]
  },
  {
    id: 2,
    date: 'November 14, 2026',
    location: 'Brgy. Alegria Proper (Plaza)',
    category: 'Community Outreach',
    title: 'Giving With Love, Sharing The Joy: DWSSII Gift-Giving Activity 2026',
    paragraphs: [
      'The true spirit of Christmas came alive through the DWSSII Gift-giving Activity 2026, held on November 14, 2026, at Brgy. Alegria Proper (Plaza), bringing together hearts and hands in a meaningful celebration of love, generosity, and community spirit.',
      'DWSSII extends its heartfelt appreciation to everyone who shared their time, resources, and generosity to make this activity possible, particularly our collaborators: All school Clubs and Organizations, SEDO, PTACB, DWSSII Alumni Association, SUFSO, and the Semuling LGBTQIA++ Community.',
      'As St. Teresa of Calcutta beautifully reminds us, "It\'s not how much we give but how much love we put into giving."',
      'May this celebration remind us that the greatest gifts are not measured by their size but by the love, kindness, and compassion behind them.',
      'Together, let us continue making the spirit of giving a meaningful part of who we are!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1C44oS5giR/',
    photos: [
      { src: giving1, caption: 'Gift-giving activity overview' },
      { src: giving2, caption: 'Community gathering at the Plaza' },
      { src: giving3, caption: 'DWSSII Clubs and Organizations' },
      { src: giving4, caption: 'SEDO and PTACB collaboration' },
      { src: giving5, caption: 'Alumni Association participation' },
      { src: giving6, caption: 'SUFSO and Semuling LGBTQIA++ Community' },
      { src: giving7, caption: 'Sharing joy with the community' },
      { src: giving8, caption: 'Distribution of gifts' },
      { src: giving9, caption: 'Smiles and gratitude' },
      { src: giving10, caption: 'Volunteers in action' },
      { src: giving11, caption: 'Group photo with beneficiaries' },
      { src: giving12, caption: 'Spirit of Christmas' },
      { src: giving13, caption: 'Love in giving' },
      { src: giving14, caption: 'Community bonding' },
      { src: giving15, caption: 'Closing remarks' }
    ]
  },
  {
    id: 3,
    date: 'November 2026',
    location: 'DWSSII Campus',
    category: 'Institutional Milestone',
    title: '23rd Founding Anniversary',
    paragraphs: [
      'The Divine Word School of Semirara Island, Inc. gathers in thanksgiving through a Eucharistic Celebration as we commemorate our 23rd Founding Anniversary.',
      'With this year’s theme, "Living the Word with Integrity" we celebrate God’s faithfulness throughout the years and renew our commitment to live out His Word through truth, service, and integrity.',
      'May this celebration remind us of the values that continue to guide our school community and inspire us to become witnesses of faith, excellence, and genuine service.',
      'Happy 23rd Founding Anniversary, DWSSII!',
      'Living the Word. Living with Integrity.'
    ],
    hashtag: '#TatakDivinian #TatakSVD #TatakSMPC #TatakSemirara',
    fbLink: 'https://www.facebook.com/share/p/1CMxewbrNh/',
    photos: [
      { src: founding1, caption: '23rd Founding Anniversary Eucharistic Celebration' },
      { src: founding2, caption: 'School community in prayer' },
      { src: founding3, caption: 'Living the Word with Integrity' },
      { src: founding4, caption: 'Celebrating God\'s faithfulness' },
      { src: founding5, caption: 'Renewing our commitment' },
      { src: founding6, caption: 'Witnesses of faith and excellence' },
      { src: founding7, caption: 'Happy 23rd Founding Anniversary' }
    ]
  },
  {
    id: 4,
    date: 'October 2026',
    location: 'DWSSII Campus',
    category: 'Appreciation',
    title: 'Foundation Day | Teachers’ Day',
    paragraphs: [
      'A celebration of 23 years of faith, excellence, and service and a heartfelt tribute to the people who continue to shape the lives of us students—our dear teachers.',
      'As we celebrate our school’s founding anniversary, we also honor our teachers whose dedication, patience, and love have helped build the DWSSII community through the years.',
      'Here’s to 23 years of living the Word with integrity and to the teachers who inspire us to learn, grow, and become better each day.',
      'Happy 23rd Founding Anniversary & Happy Teachers’ Day, DWSSII!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/19svXYRq9E/',
    photos: [
      { src: foundation1, caption: 'Foundation Day celebration' },
      { src: foundation2, caption: 'Honoring our dear teachers' },
      { src: foundation3, caption: '23 years of faith and excellence' },
      { src: foundation4, caption: 'Teachers\' Day tribute' },
      { src: foundation5, caption: 'Dedication and patience' },
      { src: foundation6, caption: 'Building the DWSSII community' },
      { src: foundation7, caption: 'Living the Word with integrity' },
      { src: foundation8, caption: 'Inspiring us to learn and grow' },
      { src: foundation9, caption: 'Celebration highlights' },
      { src: foundation10, caption: 'Student appreciation' },
      { src: foundation11, caption: 'Faculty group photo' },
      { src: foundation12, caption: 'Joyful moments' },
      { src: foundation13, caption: 'School pride' },
      { src: foundation14, caption: 'Happy Teachers\' Day' }
    ]
  },
  {
    id: 5,
    date: 'October 2026',
    location: 'DWSSII Grounds',
    category: 'Sports & Athletics',
    title: 'Beyond The Game: DWSSII Intramurals 2026 Opens With Champion Spirit',
    paragraphs: [
      'The DWSSII Intramurals 2026 officially opens with a celebration of unity, sportsmanship, talent, and school pride!',
      'Guided by the theme, "Shaping DWSSII Champions through Innovation, Cultural Excellence, and Integrity," the three-day celebration brings the community together through exciting competitions, cultural showcases, and moments that go beyond the game.',
      'Because being a champion is not only about winning; it is about excellence, integrity, teamwork, and the courage to give one’s best.',
      'One community. One champion spirit.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1DboT8x',
    photos: [
      { src: intrams1, caption: 'Intramurals 2026 Opening Ceremony' },
      { src: intrams2, caption: 'Champion spirit celebration' },
      { src: intrams3, caption: 'Unity and sportsmanship' },
      { src: intrams4, caption: 'Cultural showcase' },
      { src: intrams5, caption: 'Exciting competitions' },
      { src: intrams6, caption: 'School pride on display' },
      { src: intrams7, caption: 'Innovation and excellence' },
      { src: intrams8, caption: 'Teamwork in action' },
      { src: intrams9, caption: 'Courage to give one\'s best' },
      { src: intrams10, caption: 'One community, one champion' },
      { src: intrams11, caption: 'Athletes and supporters' },
      { src: intrams12, caption: 'Beyond the game' }
    ]
  },
  {
    id: 6,
    date: 'August 12, 2026',
    location: 'DWSSII Memorial Bust',
    category: 'Remembrance',
    title: 'Remembering A Legacy, Celebrating A Life: DWSSII Honors Sir VAC',
    paragraphs: [
      'This morning, the DWSSII Community gathered at the memorial bust of our beloved Sir Victor Almeda Consunji (VAC) to honor his life, remember his contributions, and celebrate the legacy he continues to leave in our community.',
      'A meaningful Paraliturgical Celebration was held, bringing together administrators, teachers, personnel, and students in prayer and remembrance.',
      'More than a gathering of remembrance, it was a celebration of a life that continues to inspire. Through the years, Sir VAC’s vision, generosity, and love for DWSSII remain alive in the hearts of the people he touched.',
      'Today, we remember.',
      'Today, we give thanks.',
      'And today, we celebrate a legacy that continues to live on.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1AfmDCTPDj/',
    photos: [
      { src: honors1, caption: 'Gathering at Sir VAC memorial bust' },
      { src: honors2, caption: 'Paraliturgical Celebration' },
      { src: honors3, caption: 'Community in prayer' },
      { src: honors4, caption: 'Remembering his contributions' },
      { src: honors5, caption: 'Celebrating a life of inspiration' },
      { src: honors6, caption: 'Sir VAC\'s vision and generosity' },
      { src: honors7, caption: 'Love for DWSSII' },
      { src: honors8, caption: 'We remember, we give thanks' },
      { src: honors9, caption: 'A legacy that continues to live on' }
    ]
  },
  {
    id: 7,
    date: 'July 25, 2026',
    location: 'DWSSII Campus',
    category: 'Personnel Development',
    title: 'DWSSII Kumustahan at Kapehan 2026',
    paragraphs: [
      'A meaningful morning of conversations, connection, and camaraderie as our Non Teaching Personnel gathered for this month\'s Kamustahan at Kapehan.',
      'The activity provided an opportunity to pause from our daily routines, strengthen relationships, share experiences, and reaffirm our shared commitment to serving the Divine Word School of Semirara Island, Inc. community with dedication and integrity.',
      'Thank you to everyone who participated and contributed to making the gathering warm, engaging, and memorable. Together, we continue to build a stronger workplace founded on teamwork, mutual respect, and our shared mission.',
      'Vivere Verbum Integritate!'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1A68E3v',
    photos: [
      { src: kapehan1, caption: 'Kumustahan at Kapehan gathering' },
      { src: kapehan2, caption: 'Non-Teaching Personnel bonding' },
      { src: kapehan3, caption: 'Meaningful conversations' },
      { src: kapehan4, caption: 'Strengthening relationships' },
      { src: kapehan5, caption: 'Sharing experiences' },
      { src: kapehan6, caption: 'Dedication and integrity' },
      { src: kapehan7, caption: 'Building a stronger workplace' }
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
          <button
            key={i}
            className={`lit-lb-thumb ${i === index ? 'active' : ''}`}
            onClick={() => onNext(i)}
            aria-label={`Go to photo ${i + 1}`}
          >
            <img src={p.src} alt="" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function InstitutionalActivities() {
  const [lightbox, setLightbox] = useState({ open: false, post: 0, index: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const update = () => {
      const shrink = parseFloat(getComputedStyle(hero).getPropertyValue('--hero-shrink')) || 180;
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

  const currentPhotos = activities[lightbox.post]?.photos || [];

  const nextPhoto = useCallback((direct) => {
    setLightbox((s) => {
      const total = activities[s.post].photos.length;
      const idx = typeof direct === 'number' ? direct : (s.index + 1) % total;
      return { ...s, index: idx };
    });
  }, []);

  const prevPhoto = useCallback(() => {
    setLightbox((s) => {
      const total = activities[s.post].photos.length;
      return { ...s, index: (s.index - 1 + total) % total };
    });
  }, []);

  return (
    <main className="subpage">
      {/* Hero Subpage */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Institutional Activities</h1>
            <p className="tagline">Celebrating excellence, unity, and growth through our school programs and events</p>
          </motion.div>
        </div>
      </section>

      {/* ===== NEWS / ARTICLE FEED WITH MULTI-PHOTO GALLERIES ===== */}
      <section className="seminars-section" style={{ padding: '80px 0' }}>
        <div className="container">
          {activities.map((post, pIndex) => {
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
                  <p className="lit-gallery-note">
                    {post.photos.length} photos — click any photo to view the gallery
                  </p>
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

      {/* ===== ACTIVITY CARDS ===== */}
      <section className="goals-section">
        <div className="container">
          <div className="history-section" style={{ marginBottom: '48px', borderTop: '2px solid var(--primary-green)' }}>
            <h2 style={{ marginBottom: '24px' }}>Our Activities</h2>
            <p>
              Divine Word School of Semirara Island Inc. is committed to holistic development through various institutional activities that foster academic excellence, spiritual growth, and community engagement.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-letter">AC</div>
              <h3>Academic Competitions</h3>
              <p>Quiz bees, science fairs, and academic challenges that showcase student excellence and intellectual growth.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">CO</div>
              <h3>Community Outreach</h3>
              <p>Service projects, mission trips, and social responsibility programs that extend our care beyond the campus.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">CU</div>
              <h3>Cultural Events</h3>
              <p>Foundation Day, Buwan ng Wika, and cultural showcases that celebrate our heritage and creativity.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">SP</div>
              <h3>Sports & Athletics</h3>
              <p>Intramurals, sports festivals, and athletic competitions that promote teamwork and physical wellness.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">SI</div>
              <h3>Science & Innovation</h3>
              <p>Research symposiums, innovation fairs, and STEM activities that encourage critical thinking and discovery.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">EN</div>
              <h3>Environmental Programs</h3>
              <p>Tree planting, clean-up drives, and sustainability initiatives that promote environmental stewardship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox.open && (
          <Lightbox
            photos={currentPhotos}
            index={lightbox.index}
            onClose={closeLightbox}
            onNext={nextPhoto}
            onPrev={prevPhoto}
          />
        )}
      </AnimatePresence>
    </main>
  );
}