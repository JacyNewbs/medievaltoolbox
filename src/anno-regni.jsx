const { useState, useMemo } = React;

const MONARCHS = [
  { name: "William I", accession: [1066, 12, 25], end: [1087, 9, 9], ordinal: "I" },
  { name: "William II", accession: [1087, 9, 26], end: [1100, 8, 2], ordinal: "II" },
  { name: "Henry I", accession: [1100, 8, 5], end: [1135, 12, 1], ordinal: "I" },
  { name: "Stephen", accession: [1135, 12, 22], end: [1154, 10, 25], ordinal: "" },
  { name: "Henry II", accession: [1154, 12, 19], end: [1189, 7, 6], ordinal: "II" },
  { name: "Richard I", accession: [1189, 9, 3], end: [1199, 4, 6], ordinal: "I" },
  { name: "John", accession: [1199, 5, 27], end: [1216, 10, 19], ordinal: "", movable: "ascension", note: "Regnal years run from Ascension Day each year, so they vary in length" },
  { name: "Henry III", accession: [1216, 10, 28], end: [1272, 11, 16], ordinal: "III" },
  { name: "Edward I", accession: [1272, 11, 20], end: [1307, 7, 7], ordinal: "I" },
  { name: "Edward II", accession: [1307, 7, 8], end: [1327, 1, 20], ordinal: "II" },
  { name: "Edward III", accession: [1327, 1, 25], end: [1377, 6, 21], ordinal: "III" },
  { name: "Richard II", accession: [1377, 6, 22], end: [1399, 9, 29], ordinal: "II" },
  { name: "Henry IV", accession: [1399, 9, 30], end: [1413, 3, 20], ordinal: "IV" },
  { name: "Henry V", accession: [1413, 3, 21], end: [1422, 8, 31], ordinal: "V" },
  { name: "Henry VI (first reign)", accession: [1422, 9, 1], end: [1461, 3, 4], ordinal: "VI", note: "Regnal years continued through readeption (49 Hen. VI, Oct 1470 – Apr 1471)" },
  { name: "Edward IV", accession: [1461, 3, 4], end: [1483, 4, 9], ordinal: "IV", note: "Regnal years counted continuously from accession despite Lancastrian readeption 1470–71" },
  { name: "Edward V", accession: [1483, 4, 9], end: [1483, 6, 25], ordinal: "V" },
  { name: "Richard III", accession: [1483, 6, 26], end: [1485, 8, 22], ordinal: "III" },
  { name: "Henry VII", accession: [1485, 8, 22], end: [1509, 4, 21], ordinal: "VII" },
  { name: "Henry VIII", accession: [1509, 4, 22], end: [1547, 1, 28], ordinal: "VIII" },
  { name: "Edward VI", accession: [1547, 1, 28], end: [1553, 7, 6], ordinal: "VI" },
  { name: "Mary I", accession: [1553, 7, 6], end: [1558, 11, 17], ordinal: "I", note: "From 25 Jul 1554, regnal years given jointly as Philip & Mary" },
  { name: "Philip & Mary", accession: [1554, 7, 25], end: [1558, 11, 17], ordinal: "", note: "Joint regnal years from marriage; Mary's own regnal year also continued in parallel" },
  { name: "Elizabeth I", accession: [1558, 11, 17], end: [1603, 3, 24], ordinal: "I" },
  { name: "James I", accession: [1603, 3, 24], end: [1625, 3, 27], ordinal: "I", note: "Also James VI of Scotland (accession 24 Jul 1567)" },
  { name: "Charles I", accession: [1625, 3, 27], end: [1649, 1, 30], ordinal: "I" },
  { name: "Charles II", accession: [1649, 1, 30], end: [1685, 2, 6], ordinal: "II", note: "Regnal years officially dated from Charles I's execution, though de facto rule began at Restoration (29 May 1660)" },
  { name: "James II", accession: [1685, 2, 6], end: [1688, 12, 11], ordinal: "II" },
  { name: "William III & Mary II", accession: [1689, 2, 13], end: [1702, 3, 8], ordinal: "", note: "Joint reign; Mary died 28 Dec 1694, William continued alone" },
  { name: "Anne", accession: [1702, 3, 8], end: [1714, 8, 1], ordinal: "" },
  { name: "George I", accession: [1714, 8, 1], end: [1727, 6, 11], ordinal: "I" },
  { name: "George II", accession: [1727, 6, 11], end: [1760, 10, 25], ordinal: "II" },
  { name: "George III", accession: [1760, 10, 25], end: [1820, 1, 29], ordinal: "III" },
  { name: "George IV", accession: [1820, 1, 29], end: [1830, 6, 26], ordinal: "IV" },
  { name: "William IV", accession: [1830, 6, 26], end: [1837, 6, 20], ordinal: "IV" },
  { name: "Victoria", accession: [1837, 6, 20], end: [1901, 1, 22], ordinal: "" },
  { name: "Edward VII", accession: [1901, 1, 22], end: [1910, 5, 6], ordinal: "VII" },
  { name: "George V", accession: [1910, 5, 6], end: [1936, 1, 20], ordinal: "V" },
  { name: "Edward VIII", accession: [1936, 1, 20], end: [1936, 12, 11], ordinal: "VIII" },
  { name: "George VI", accession: [1936, 12, 11], end: [1952, 2, 6], ordinal: "VI" },
  { name: "Elizabeth II", accession: [1952, 2, 6], end: [2022, 9, 8], ordinal: "II" },
  { name: "Charles III", accession: [2022, 9, 8], end: [2030, 12, 31], ordinal: "III" },
];

const MONTH_NAMES = [
  "", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function toDate(arr) {
  return new Date(arr[0], arr[1] - 1, arr[2]);
}

function formatDate(d) {
  const day = d.getDate();
  const month = MONTH_NAMES[d.getMonth() + 1];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

// John's regnal years began each year on Ascension Day (39 days after Julian Easter)
function ascensionDay(y) {
  const a = y % 4, b = y % 7, c = y % 19, d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7, n = d + e + 114;
  const date = new Date(y, Math.floor(n / 31) - 1, (n % 31) + 1);
  date.setDate(date.getDate() + 39);
  return date;
}

function yearStart(monarch, regnalYear) {
  const acc = toDate(monarch.accession);
  const y = acc.getFullYear() + regnalYear - 1;
  return monarch.movable === "ascension" ? ascensionDay(y) : new Date(y, acc.getMonth(), acc.getDate());
}

function getMaxRegnalYear(monarch) {
  const end = toDate(monarch.end);
  let n = 1;
  while (yearStart(monarch, n + 1) <= end) n++;
  return n;
}

function regnalToModern(monarch, regnalYear) {
  const start = yearStart(monarch, regnalYear);
  const endDate = yearStart(monarch, regnalYear + 1);
  endDate.setDate(endDate.getDate() - 1);
  
  const reignEnd = toDate(monarch.end);
  const actualEnd = endDate > reignEnd ? reignEnd : endDate;
  
  return { start, end: actualEnd };
}

function modernToRegnal(year, month, day) {
  const target = new Date(year, month - 1, day);
  const results = [];
  
  for (const monarch of MONARCHS) {
    const acc = toDate(monarch.accession);
    const end = toDate(monarch.end);
    
    if (target >= acc && target <= end) {
      let regnalYear = target.getFullYear() - acc.getFullYear() + 1;
      if (target < yearStart(monarch, regnalYear)) regnalYear--;
      
      if (regnalYear >= 1) {
        results.push({ monarch, regnalYear });
      }
    }
  }
  
  return results;
}

function ordinalSuffix(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

const DYNASTIES = [
  { label: "Norman (1066–1154)", start: 0, end: 3 },
  { label: "Plantagenet (1154–1399)", start: 4, end: 11 },
  { label: "Lancaster (1399–1461)", start: 12, end: 14 },
  { label: "York (1461–1485)", start: 15, end: 17 },
  { label: "Tudor (1485–1603)", start: 18, end: 24 },
  { label: "Stuart (1603–1714)", start: 25, end: 30 },
  { label: "Hanoverian (1714–1901)", start: 31, end: 36 },
  { label: "Modern (1901–present)", start: 37, end: MONARCHS.length - 1 },
];


// ---------- Anglo-Saxon dating ----------
const AS_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const indictionOf = y => ((y + 2) % 15 + 15) % 15 + 1;           // indiction of a year counted from 1 January
const julianJDN = (y, m, d) => { const a = Math.floor((14 - m) / 12), yy = y + 4800 - a, mm = m + 12 * a - 3; return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - 32083; };
const weekdayJulian = (y, m, d) => (julianJDN(y, m, d) + 1) % 7;   // 0 = Sunday
const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function julianEaster(y) {
  const a = y % 4, b = y % 7, c = y % 19, d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7;
  const n = d + e + 114;
  return { month: Math.floor(n / 31), day: (n % 31) + 1 };
}
const YEAR_STYLES = [
  { id: "christmas", phrase: "at Christmas", label: "Christmas (25 December)", note: "Used by Bede in his chronological works and by the Anglo-Saxon and Norman kings; usual in England until the twelfth century." },
  { id: "bedan", phrase: "on 24 September", label: "Bedan indiction (24 September)", note: "Bede's indiction began on 24 September. In his Ecclesiastical History, Bede began the year in September, following documents dated by the indiction." },
  { id: "greek", phrase: "on 1 September", label: "Greek indiction (1 September)", note: "The Greek or Constantinopolitan indiction, used by the popes until 1087." },
  { id: "jan", phrase: "on 1 January", label: "1 January", note: "The modern reckoning." },
  { id: "annunciation", phrase: "on 25 March", label: "Annunciation (25 March)", note: "Found in some annals of the Anglo-Saxon Chronicle from the mid-eleventh century, but in common English use only from the late twelfth century." },
];
function writtenToModern(style, y, m, d) {
  if (style === "christmas" && m === 12 && d >= 25) return y - 1;
  if (style === "bedan" && (m > 9 || (m === 9 && d >= 24))) return y - 1;
  if (style === "greek" && m >= 9) return y - 1;
  if (style === "annunciation" && (m < 3 || (m === 3 && d < 25))) return y + 1;
  return y;
}
function indictionsFor(y, m, d) {
  const base = indictionOf(y), next = indictionOf(y + 1);
  if (!m || !d) return null;
  return [
    ["Bedan (from 24 September)", (m > 9 || (m === 9 && d >= 24)) ? next : base],
    ["Greek (from 1 September)", m >= 9 ? next : base],
    ["Roman or Pontifical (from 25 December)", (m === 12 && d >= 25) ? next : base],
    ["Roman or Pontifical (from 1 January)", base],
  ];
}

const AS_KINGDOMS = ["Kent", "Deira", "Bernicia", "Northumbrians", "Scandinavian kingdom of York", "Mercians", "Hwicce", "Lindsey", "East Angles", "Scandinavian East Anglia", "South Saxons", "East Saxons", "West Saxons", "Kings of the English"];
// [kingdom, ruler, dates as given in Cheney, Handbook of Dates (2000), pp. 22–32, earliest year, latest year]
const AS_RULERS = [
  [0, "Hengest", "c. 455; d. ?488", 455, 488],
  [0, "Oeric (Oisc)", "488; d. ?512", 488, 512],
  [0, "Eormenric", "?512; d. c. 560", 512, 560],
  [0, "Æthelberht I", "560 or c. 585; d. 24 Feb. 616", 560, 616],
  [0, "Eadbald", "616; d. 20 Jan. 640", 616, 640],
  [0, "Earconberht", "640; d. 14 July 664", 640, 664],
  [0, "Ecgberht I", "664; d. 4 July 673", 664, 673],
  [0, "Hlothhere", "673; d. 6 Feb. 685", 673, 685],
  [0, "Eadric", "685; d. ?Aug. 686", 685, 686],
  [0, "‘Various usurpers or foreign kings’", "686–690", 686, 690],
  [0, "Wihtred", "690; d. 23 April 725", 690, 725],
  [0, "Swæfheard", "690–2 (jointly with Wihtred)", 690, 692],
  [0, "Eadberht I (West Kent)", "725; d. 748", 725, 748],
  [0, "Eardwulf (West Kent)", "?748; d. ? × 762", 748, 762],
  [0, "Sigered (West Kent)", "? × 762; d. c. 764", 760, 764],
  [0, "Ecgberht II (West Kent)", "c. 764", 764, 765],
  [0, "Æthelberht II (East Kent)", "725; d. 762", 725, 762],
  [0, "Eadberht II (East Kent)", "762; d. c. 764", 762, 764],
  [0, "Eanmund (East Kent)", "c. 764; d. ?", 764, 765],
  [0, "Heahberht (East Kent)", "?c. 765; d. ?", 765, 766],
  [0, "Ecgberht II", "d. 779 × ? (king of Kent in the late 770s)", 776, 784],
  [0, "Ealhmund", "by 784", 784, 785],
  [0, "Eadberht Præn", "796; captured 798; d. ?", 796, 798],
  [0, "Cuthred", "798; d. 807", 798, 807],
  [0, "Baldred", "821; deposed c. 825", 821, 825],
  [1, "Ælle", "560; d. 588 or 590", 560, 590],
  [1, "Æthelric", "588; d. 593", 588, 593],
  [1, "Edwin", "616; d. 12 Oct. 633", 616, 633],
  [1, "Osric", "633; d. 634", 633, 634],
  [1, "Oswald", "634; d. 5 Aug. 642", 634, 642],
  [1, "Oswine", "642/3; d. 20 Aug. 651", 642, 651],
  [1, "Oswiu", "651; d. 15 Feb. 670", 651, 670],
  [2, "Ida", "547; d. 559 or 560", 547, 560],
  [2, "Glappa", "559; d. 560", 559, 560],
  [2, "Adda", "560; d. 568", 560, 568],
  [2, "Æthelric", "568; d. 572", 568, 572],
  [2, "Theodric", "572; d. 579", 572, 579],
  [2, "Frithuwald", "579; d. 585", 579, 585],
  [2, "Hussa", "585; d. 592", 585, 592],
  [2, "Æthelfrith", "592; d. 616", 592, 616],
  [2, "Eanfrith", "633/4; d. 634", 633, 634],
  [2, "Oswald", "634; d. 5 Aug. 642", 634, 642],
  [2, "Oswiu", "642; d. 15 Feb. 670", 642, 670],
  [3, "Ecgfrith", "670; d. 20 May 685", 670, 685],
  [3, "Aldfrith", "686; d. 14 Dec. 705", 686, 705],
  [3, "Eadwulf", "705/6 (ruled for two months)", 705, 706],
  [3, "Osred I", "706; d. 716", 706, 716],
  [3, "Coenred", "716; d. 718", 716, 718],
  [3, "Osric", "718; d. 9 May 729", 718, 729],
  [3, "Ceolwulf", "729; resigned 737; d. c. 764", 729, 737],
  [3, "Eadberht", "737; resigned 758; d. 19/20 Aug. 768", 737, 758],
  [3, "Oswulf", "758; d. 24/25 July 759", 758, 759],
  [3, "Æthelwald Moll", "5 Aug. 759; deposed 30 Oct. 765; d. ?", 759, 765],
  [3, "Alhred", "765; exiled 774; d. ?", 765, 774],
  [3, "Æthelred I", "774; expelled 778 or 779; d. ?", 774, 779],
  [3, "Ælfwald I", "778 or 779; d. 23 Sept. 788", 778, 788],
  [3, "Osred II", "788 (printed as 778); expelled 790; d. 14 Sept. 792", 788, 790],
  [3, "Æthelred I (again)", "790; d. 18 April 796", 790, 796],
  [3, "Osbald", "796; expelled 796; d. 799", 796, 796],
  [3, "Eardwulf", "796; expelled ?806", 796, 806],
  [3, "Ælfwald II", "?806; d. ?808", 806, 808],
  [3, "Eardwulf (again)", "?808; d. ?810", 808, 810],
  [3, "Eanred", "?810; d. 840 or 841", 810, 841],
  [3, "Æthelred II", "840 or 841; expelled 844", 840, 844],
  [3, "Rædwulf", "844; d. ?", 844, 844],
  [3, "Æthelred II (again)", "844; d. ?848", 844, 848],
  [3, "Osberht", "848 or 849; expelled 862 or 863", 848, 863],
  [3, "Ælle", "862 or 863; d. 21 or 23 March 867", 862, 867],
  [3, "Osberht (again)", "867; d. 21 or 23 March 867", 867, 867],
  [3, "Ecgberht I", "867; expelled 872; d. 873", 867, 872],
  [3, "Ricsige", "873; d. 876", 873, 876],
  [3, "Ecgberht II", "876; d. ?878", 876, 878],
  [3, "Eadwulf of Bamburgh", "?878; d. 913", 878, 913],
  [3, "Aldred", "913; d. 927 × ?", 913, 927],
  [4, "Halfdan I", "875/6; driven out 877", 875, 877],
  [4, "Guthfrith", "883; d. 24 Aug. ?895", 883, 895],
  [4, "Sigfrith (Sievert, Sigfred)", "895–", 895, 899],
  [4, "Cnut", "fl. 895", 895, 895],
  [4, "Æthelwold", "899; d. ?902", 899, 902],
  [4, "Cnut (Knutr)", "?901–", 901, 902],
  [4, "Halfdan II", "d. 910 (jointly with Eowils)", 902, 910],
  [4, "Eowils (Ecwils)", "d. 910", 902, 910],
  [4, "Ragnald I", "914 or earlier; d. 920", 910, 920],
  [4, "Sihtric II Caech (Sigtryggr Caech)", "920/1; d. 927", 920, 927],
  [4, "Olaf I Cuaran", "?927", 927, 927],
  [4, "Guthfrith II", "927; driven out 927; d. 934", 927, 927],
  [4, "Athelstan, k. of English", "927–39", 927, 939],
  [4, "Olaf II Guthfrithson", "939; d. 941", 939, 941],
  [4, "Olaf I Cuaran (again)", "941; driven out 944", 941, 944],
  [4, "Ragnald II Guthfrithson", "943; driven out 944", 943, 944],
  [4, "Edmund, k. of English", "944–6", 944, 946],
  [4, "Eadred, k. of English", "946–7", 946, 947],
  [4, "Eric Bloodaxe", "947; deserted by supporters 948", 947, 948],
  [4, "Eadred", "948–950", 948, 950],
  [4, "Olaf I Cuaran (again)", "949/50; driven out 952", 949, 952],
  [4, "Eric Bloodaxe (second reign)", "952; driven out 954; d. 954", 952, 954],
  [5, "Cearl", "reigning c. 600", 595, 605],
  [5, "Penda", "626 or 632; d. 15 Nov. 655", 626, 655],
  [5, "Wulfhere", "658; d. 675", 658, 675],
  [5, "Æthelred", "675; resigned 704; d. ?716", 675, 704],
  [5, "Coenred", "704; resigned c. 709; d. c. 709", 704, 709],
  [5, "Ceolred", "709; d. 716", 709, 716],
  [5, "Æthelbald", "716; d. 757", 716, 757],
  [5, "Beornred", "757; driven out 757; d. 769", 757, 757],
  [5, "Offa", "757; d. 29 July 796", 757, 796],
  [5, "Ecgfrith", "796; d. 17 Dec. 796", 796, 796],
  [5, "Coenwulf", "796; d. 821", 796, 821],
  [5, "Ceolwulf I", "821; deprived 823; d. ?", 821, 823],
  [5, "Beornwulf", "823; d. 825", 823, 825],
  [5, "Ludeca", "825; d. 827", 825, 827],
  [5, "Wiglaf", "827; d. 840 (Ecgberht of the West Saxons held Mercia 829–30)", 827, 840],
  [5, "Berhtwulf", "840; d. ?852", 840, 852],
  [5, "Burgred", "?852; driven out by the Danes 873/4", 852, 874],
  [5, "Ceolwulf II", "874; d. ?879", 874, 879],
  [5, "Ealdorman Æthelred", "c. 880–911", 880, 911],
  [5, "Æthelflæd", "911–18", 911, 918],
  [5, "Ælfwyn", "918; deprived of her authority 918", 918, 918],
  [6, "Eanhere", "fl. 660s (jointly with Eanfrith)", 660, 669],
  [6, "Eanfrith", "fl. 660s", 660, 669],
  [6, "Osric", "fl. 670s × 680s", 670, 689],
  [6, "Oshere", "fl. 690s; d. by 716", 690, 716],
  [6, "Æthelheard", "fl. after 709", 709, 716],
  [6, "Æthelweard", "fl. after 706; d. 716 × ?", 706, 716],
  [6, "Æthelric", "? × 736; d. 736 × ?", 716, 736],
  [6, "Eanberht", "? × 755; not known after 759", 755, 759],
  [6, "Uhtred", "? × 755; still fl. 777 × 779", 755, 779],
  [6, "Ealdred", "? × 755; still fl. 778", 755, 778],
  [7, "Aldfrith, son of Eata", "reigning c. 786 × 796", 786, 796],
  [8, "Rædwald", "? × 616; d. 616 × 627", 600, 627],
  [8, "Earpwald", "616 × 627; d. 627 or 628", 616, 628],
  [8, "Richberht", "627 or 628", 627, 630],
  [8, "Sigeberht", "630 or 631; d. ?", 630, 640],
  [8, "Ecgric", "c. 630", 630, 640],
  [8, "Anna", "?; d. 654", 640, 654],
  [8, "Æthelhere", "654; d. ? (fought at the Winwæd, 15 Nov. 655)", 654, 655],
  [8, "Æthelwald", "?; d. ?664", 655, 664],
  [8, "Aldwulf", "663 or 664; d. 713", 663, 713],
  [8, "Ælfwald", "713; d. 749", 713, 749],
  [8, "Hun, Beonna and Æthelberht I", "reigning jointly 749", 749, 760],
  [8, "Æthelberht II", "?; d. 794", 779, 794],
  [8, "Eadwald", "c. 800", 795, 805],
  [8, "Æthelstan", "c. 830 × 845", 825, 845],
  [8, "Æthelweard", "c. 845 × 855", 845, 855],
  [8, "Edmund", "855; d. 20 Nov. 869", 855, 869],
  [8, "Æthelred", "c. 875", 870, 880],
  [8, "Oswald", "c. 875", 870, 880],
  [9, "Guthrum (Æthelstan)", "c. 879 × 880; d. 890", 879, 890],
  [9, "Eohric", "?; d. 902", 890, 902],
  [10, "Ælle", "c. 477; d. after 491", 477, 491],
  [10, "Æthelwalh", "? × 674; d. c. 682", 660, 682],
  [10, "Nothhelm (Nunna)", "? × 692; d. 714 × ?", 685, 714],
  [10, "Watt", "? × 692; d. c. 700 × ?", 685, 700],
  [10, "Æthelstan", "? × 714; d. 714 × ?", 700, 714],
  [10, "Æthelberht", "714 × 733; d. 747 × 770", 714, 770],
  [10, "Oswald", "?before 772; d. 772 × ?", 760, 772],
  [10, "Osmund", "c. 760; d. 770 × 772", 760, 772],
  [10, "Oslac", "?760s; d. 780 × ?", 760, 780],
  [10, "Ealdwulf", "?760s; d. c. 790 × ?798", 760, 798],
  [10, "Ælfwald", "?760s; d. 772 × ?", 760, 772],
  [11, "Sæberht (Saba)", "? × 604; d. 616 or 617", 600, 617],
  [11, "Seaxred", "616 or 617; d. c. 617", 616, 617],
  [11, "Sæweard", "616 or 617; d. c. 617", 616, 617],
  [11, "Their brother", "616 or 617; d. c. 617", 616, 617],
  [11, "Sigeberht I (‘parvus’)", "c. 617 × ?; d. ?", 617, 653],
  [11, "Sigeberht II (‘sanctus’)", "? × 653; d. 653 × 664", 640, 664],
  [11, "Swithelm", "653 × 664; d. c. 664", 653, 664],
  [11, "Swithfrith", "?; d. ?", 653, 664],
  [11, "Sigehere", "c. 664; d. c. 690", 664, 690],
  [11, "Sebbi", "c. 664; resigned c. 694; d. c. 694", 664, 694],
  [11, "Sigeheard", "c. 694; d. c. 705 × ?", 694, 705],
  [11, "Swæfred", "c. 694; d. 704 × ?", 694, 704],
  [11, "Offa", "c. 694 × 709; d. 709 × ?", 694, 709],
  [11, "Swæfberht", "?c. 709; d. 738", 709, 738],
  [11, "Selered", "?c. 738; d. 746", 738, 746],
  [11, "Swithred", "?c. 746; d. ?", 746, 760],
  [11, "Sigeric I", "?; resigned ?798", 760, 798],
  [11, "Sigered", "?798; d. 823 × ?", 798, 823],
  [11, "Sigeric II", "c. 825", 823, 825],
  [12, "Cerdic", "519; d. 534", 519, 534],
  [12, "Cynric", "534; d. 560", 534, 560],
  [12, "Ceawlin", "560; d. 593", 560, 593],
  [12, "Ceol", "591; d. ?597", 591, 597],
  [12, "Ceolwulf", "597; d. ?611", 597, 611],
  [12, "Cynegils", "611; d. ?642", 611, 642],
  [12, "Cenwealh", "642; d. 672", 642, 672],
  [12, "Seaxburh (queen)", "672; d. ?674", 672, 674],
  [12, "Æscwine", "674; d. 676", 674, 676],
  [12, "Centwine", "676; d. ?685", 676, 685],
  [12, "Cædwalla", "685; resigned 688; d. 20 April 689", 685, 688],
  [12, "Ine", "688; abdicated 726; d. ? 726", 688, 726],
  [12, "Æthelheard", "726; d. ?740", 726, 740],
  [12, "Cuthred", "740; d. 756", 740, 756],
  [12, "Sigeberht", "756; deprived 757; d. 757 × ?", 756, 757],
  [12, "Cynewulf", "757; d. 786", 757, 786],
  [12, "Beorhtric", "786; d. 802", 786, 802],
  [12, "Ecgberht", "802; d. 839", 802, 839],
  [12, "Æthelwulf", "839; d. 858", 839, 858],
  [12, "Æthelberht", "858; d. 865", 858, 865],
  [12, "Æthelred I", "865; d. 871", 865, 871],
  [12, "Alfred", "after 15 April 871; d. 26 Oct. 899", 871, 899],
  [12, "Edward the Elder", "after 26 Oct. 899; d. 17 July 924", 899, 924],
  [12, "Ælfweard, k. of Wessex", "17 July 924; d. 2 Aug. 924", 924, 924],
  [12, "Æthelstan", "after 17 July 924; d. 27 Oct. 939", 924, 927],
  [13, "Æthelstan", "927; d. 27 Oct. 939", 927, 939],
  [13, "Edmund", "939; d. 26 May 946", 939, 946],
  [13, "Eadred", "946; d. 23 Nov. 955", 946, 955],
  [13, "Eadwig", "955; d. 1 Oct. 959", 955, 959],
  [13, "Edgar", "959; d. 8 July 975", 959, 975],
  [13, "Edward the Martyr", "975; d. 18 March 978", 975, 978],
  [13, "Æthelred II the Unready", "978; exiled 1013", 978, 1013],
  [13, "Swein Forkbeard", "1013; d. 3 Feb. 1014", 1013, 1014],
  [13, "Æthelred II (again)", "1014; d. 23 April 1016", 1014, 1016],
  [13, "Edmund Ironside", "1016; d. 30 Nov. 1016", 1016, 1016],
  [13, "Cnut", "1016; d. 12 Nov. 1035", 1016, 1035],
  [13, "Harthacnut/Harold", "1035; 1037", 1035, 1037],
  [13, "Harold I Harefoot", "1037; d. 17 March 1040", 1037, 1040],
  [13, "Harthacnut", "1040; d. 8 June 1042", 1040, 1042],
  [13, "Edward the Confessor", "1042; d. 5 Jan. 1066", 1042, 1066],
  [13, "Harold II Godwinesson", "1066; d. 14 Oct. 1066", 1066, 1066],
  [13, "William I the Conqueror", "25 Dec. 1066; d. 9 Sep. 1087", 1066, 1087]
];

function AngloSaxonDating() {
  const [w, setW] = useState({ year: "", month: "", day: "", style: "christmas" });
  const [c, setC] = useState({ year: "", month: "", day: "" });
  const [k, setK] = useState({ year: "", ind: "" });
  const [ry, setRy] = useState("");
  const ryN = parseInt(ry);
  const reigning = ryN > 0 && ryN <= 1100
    ? AS_KINGDOMS.map((name, i) => ({ name, list: AS_RULERS.filter(r => r[0] === i && ryN >= r[3] && ryN <= r[4]) })).filter(g => g.list.length)
    : null;

  const wy = parseInt(w.year), wm = parseInt(w.month), wd = parseInt(w.day);
  const wOk = wy > 0 && wm && wd;
  const wModern = wOk ? writtenToModern(w.style, wy, wm, wd) : null;

  const cy = parseInt(c.year), cm = parseInt(c.month), cd = parseInt(c.day);
  const cOk = cy > 0 && cy < 3000;
  const golden = cOk ? (cy % 19) + 1 : null;
  const epact = cOk ? ((golden - 1) * 11) % 30 : null;
  const concurrent = cOk ? weekdayJulian(cy, 3, 24) + 1 : null;
  const easter = cOk ? julianEaster(cy) : null;
  const inds = cOk ? indictionsFor(cy, cm, cd) : null;

  const ky = parseInt(k.year), ki = parseInt(k.ind);
  const kOk = ky > 0 && ki >= 1 && ki <= 15;
  let kResult = null;
  if (kOk) {
    const base = indictionOf(ky), next = indictionOf(ky + 1);
    if (ki === base) kResult = { ok: true, text: `Consistent: AD ${ky} is indiction ${base} from January to August (and to 23 September in Bedan reckoning, or to 24 December in the Roman or Pontifical reckoning).` };
    else if (ki === next) kResult = { ok: true, text: `Consistent only if the document falls late in AD ${ky}: indiction ${next} began on 1 September (Greek), 24 September (Bedan) or 25 December (Roman or Pontifical).` };
    else {
      const near = [];
      for (let off = -7; off <= 7; off++) if (off && indictionOf(ky + off) === ki) near.push(ky + off);
      kResult = { ok: false, text: `Not consistent. AD ${ky} is indiction ${base} (${next} from September). Indiction ${ki} fits AD ${near.join(" or ")}. Scribal slips in the indiction are common, so a mismatch is a reason to look closer, not proof of forgery.` };
    }
  }

  const monthSelect = (val, on) => (
    <select className="converter-input" value={val} onChange={e => on(e.target.value)}>
      <option value="">Month</option>
      {AS_MONTHS.map((n, i) => <option key={n} value={i + 1}>{n}</option>)}
    </select>
  );
  const box = { marginBottom: 36 };
  const h3 = { fontFamily: "'EB Garamond', Georgia, serif", fontSize: 22, fontWeight: 500, color: "#2a1e0e", margin: "0 0 6px" };
  const intro = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, color: "#7a6a4a", margin: "0 0 14px", lineHeight: 1.5 };
  const row = { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 };
  const line = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 15, color: "#3a2e1e", lineHeight: 1.7 };

  return (
    <div style={{ animation: "fadeIn 0.3s ease" }}>
      <div style={box}>
        <h3 style={h3}>A year as written in a document</h3>
        <p style={intro}>Anglo-Saxon writers usually began the year at Christmas, and Bede's Ecclesiastical History in September, so a date late in the year can belong to the previous year by modern reckoning.</p>
        <div style={row}>
          <input className="converter-input number-input" style={{ width: 80 }} placeholder="Day" value={w.day} onChange={e => setW({ ...w, day: e.target.value.replace(/\D/g, "") })} />
          <div style={{ flex: 1, minWidth: 140 }}>{monthSelect(w.month, v => setW({ ...w, month: v }))}</div>
          <input className="converter-input number-input" style={{ width: 110 }} placeholder="Year AD" value={w.year} onChange={e => setW({ ...w, year: e.target.value.replace(/\D/g, "") })} />
        </div>
        <label className="small-label">Year begins at</label>
        <select className="converter-input" value={w.style} onChange={e => setW({ ...w, style: e.target.value })}>
          {YEAR_STYLES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
        {wOk && (
          <div className="result-box" style={{ marginTop: 14 }}>
            <div style={line}><strong>{wd} {AS_MONTHS[wm - 1]} {wy}</strong>, with the year beginning {YEAR_STYLES.find(s => s.id === w.style).phrase}, is <strong>{wd} {AS_MONTHS[wm - 1]} {wModern}</strong> with the year beginning on 1 January.</div>
            <div className="note-text">{YEAR_STYLES.find(s => s.id === w.style).note}</div>
          </div>
        )}
      </div>

      <div style={box}>
        <h3 style={h3}>Indiction and Easter reckoning for a year</h3>
        <p style={intro}>Enter a year AD (reckoned from 1 January). Add a day and month to see which indiction applies on that date.</p>
        <div style={row}>
          <input className="converter-input number-input" style={{ width: 80 }} placeholder="Day" value={c.day} onChange={e => setC({ ...c, day: e.target.value.replace(/\D/g, "") })} />
          <div style={{ flex: 1, minWidth: 140 }}>{monthSelect(c.month, v => setC({ ...c, month: v }))}</div>
          <input className="converter-input number-input" style={{ width: 110 }} placeholder="Year AD" value={c.year} onChange={e => setC({ ...c, year: e.target.value.replace(/\D/g, "") })} />
        </div>
        {cOk && (
          <div className="result-box">
            {inds ? inds.map(([l, v]) => <div key={l} style={line}>Indiction, {l}: <strong>{v}</strong></div>)
                  : <div style={line}>Indiction: <strong>{indictionOf(cy)}</strong> from January to August; <strong>{indictionOf(cy + 1)}</strong> from 1 or 24 September (or 25 December in the Roman or Pontifical reckoning).</div>}
            <div style={{ ...line, marginTop: 8 }}>Golden number: <strong>{golden}</strong></div>
            <div style={line}>Epact (age of the moon on 22 March): <strong>{epact === 0 ? "none (nullae)" : epact}</strong></div>
            <div style={line}>Concurrent (weekday of 24 March): <strong>{concurrent}</strong> ({WEEKDAYS[concurrent - 1]})</div>
            <div style={line}>Easter Sunday: <strong>{easter.day} {AS_MONTHS[easter.month - 1]} {cy}</strong></div>
            <div className="note-text">Julian calendar; Easter by the Dionysiac (Alexandrian) reckoning adopted in England after Whitby (664). Concurrents run 1 (Sunday) to 7 (Saturday), and in leap years follow the dominical letter for the part of the year after February. Golden number and epact are given for the year from 1 January; where a writer began the year on 1 September or 25 March, the epact probably changed then.</div>
          </div>
        )}
      </div>

      <div style={box}>
        <h3 style={h3}>Check a dating clause</h3>
        <p style={intro}>Does the indiction in a charter agree with its year of the Incarnation?</p>
        <div style={row}>
          <input className="converter-input number-input" style={{ width: 130 }} placeholder="Year AD" value={k.year} onChange={e => setK({ ...k, year: e.target.value.replace(/\D/g, "") })} />
          <input className="converter-input number-input" style={{ width: 130 }} placeholder="Indiction" value={k.ind} onChange={e => setK({ ...k, ind: e.target.value.replace(/\D/g, "") })} />
        </div>
        {kResult && (
          <div className="result-box" style={kResult.ok ? {} : { borderLeftColor: "#9a4a20" }}>
            <div style={line}>{kResult.text}</div>
          </div>
        )}
      </div>

      <div style={box}>
        <h3 style={h3}>Who was reigning</h3>
        <p style={intro}>Enter a year to see the rulers of each kingdom, with their dates as given in Cheney&rsquo;s <em>Handbook of Dates</em>. Many early dates are uncertain (marked ?, c. or &times;), so a ruler is listed if the year falls anywhere within the possible span of the reign.</p>
        <div style={row}>
          <input className="converter-input number-input" style={{ width: 130 }} placeholder="Year AD" value={ry} onChange={e => setRy(e.target.value.replace(/\D/g, ""))} />
        </div>
        {reigning && (
          <div className="result-box">
            {reigning.length ? reigning.map(g => (
              <div key={g.name} style={{ marginBottom: 10 }}>
                <div style={{ ...line, fontWeight: 600 }}>{g.name}</div>
                {g.list.map(r => <div key={r[1] + r[2]} style={line}>{r[1]} <span style={{ color: "#7a6a4a" }}>&middot; {r[2]}</span></div>)}
              </div>
            )) : <div style={line}>No ruler is listed for AD {ryN}.</div>}
          </div>
        )}
      </div>

      <div className="note-text" style={{ textAlign: "center" }}>
        Calculated from the standard rules of medieval reckoning and checked against C. R. Cheney, ed., revised M. Jones, A Handbook of Dates for Students of British History (Cambridge, 2000), from which the rulers&rsquo; dates are taken.
      </div>
    </div>
  );
}

function RegnalDateConverter() {
  const [mode, setMode] = useState("regnal"); // "regnal" or "modern"
  const [selectedMonarchIdx, setSelectedMonarchIdx] = useState(14); // Henry VI default
  const [regnalYear, setRegnalYear] = useState("");
  const [regnalDay, setRegnalDay] = useState("");
  const [regnalMonth, setRegnalMonth] = useState("");
  const [modernDate, setModernDate] = useState({ year: "", month: "", day: "" });
  const [showReference, setShowReference] = useState(false);

  const selectedMonarch = MONARCHS[selectedMonarchIdx];
  const maxRegnal = useMemo(() => getMaxRegnalYear(selectedMonarch), [selectedMonarchIdx]);

  const regnalResult = useMemo(() => {
    const yr = parseInt(regnalYear);
    if (!yr || yr < 1 || yr > maxRegnal) return null;
    const range = regnalToModern(selectedMonarch, yr);

    // If day and month are provided, resolve to an exact date
    const d = parseInt(regnalDay);
    const m = parseInt(regnalMonth);
    if (d && m && m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      // Try both calendar years the regnal year spans
      const startCalYear = range.start.getFullYear();
      const candidate1 = new Date(startCalYear, m - 1, d);
      const candidate2 = new Date(startCalYear + 1, m - 1, d);
      
      let exactDate = null;
      if (candidate1 >= range.start && candidate1 <= range.end) {
        exactDate = candidate1;
      } else if (candidate2 >= range.start && candidate2 <= range.end) {
        exactDate = candidate2;
      }
      
      return { ...range, exactDate };
    }

    return range;
  }, [selectedMonarchIdx, regnalYear, regnalDay, regnalMonth, maxRegnal]);

  const modernResult = useMemo(() => {
    const { year, month, day } = modernDate;
    const y = parseInt(year), m = parseInt(month), d = parseInt(day);
    if (!y || !m || !d || m < 1 || m > 12 || d < 1 || d > 31) return null;
    return modernToRegnal(y, m, d);
  }, [modernDate]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5ead0",
      fontFamily: "'EB Garamond', Georgia, serif",
      color: "#3a2e1e",
      padding: "0",
      margin: "0",
    }}>
      <style>{`
        
        * { box-sizing: border-box; }
        
        ::selection {
          background: #8b6914;
          color: #fff;
        }
        
        .converter-input {
          background: #fff8eb;
          border: 1px solid #c4b48a;
          color: #3a2e1e;
          padding: 10px 14px;
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 17px;
          border-radius: 3px;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
        }
        .converter-input:focus {
          border-color: #7a5c14;
          box-shadow: 0 0 0 2px rgba(122, 92, 20, 0.15);
        }
        .converter-input::placeholder {
          color: #a0906a;
        }
        
        select.converter-input {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a5c14' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }
        select.converter-input option {
          background: #fff8eb;
          color: #3a2e1e;
          padding: 8px;
        }
        select.converter-input optgroup {
          background: #ede0c4;
          color: #7a5c14;
          font-style: normal;
          font-weight: 600;
        }
        
        .mode-tab {
          padding: 10px 28px;
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid #c4b48a;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          color: #7a6a4a;
        }
        .mode-tab:first-child { border-radius: 3px 0 0 3px; }
        .mode-tab:last-child { border-radius: 0 3px 3px 0; }
        .mode-tab + .mode-tab { border-left: none; }
        .mode-tab.active {
          background: #7a5c14;
          color: #fff;
          border-color: #7a5c14;
        }
        .mode-tab:not(.active):hover {
          background: rgba(122, 92, 20, 0.1);
          color: #3a2e1e;
        }
        
        .result-box {
          background: linear-gradient(135deg, #faf3e3 0%, #f0e6cc 100%);
          border: 1px solid #d4c5a0;
          border-left: 3px solid #7a5c14;
          border-radius: 3px;
          padding: 24px 28px;
          margin-top: 28px;
          animation: fadeIn 0.4s ease;
        }
        
        .ref-toggle {
          background: none;
          border: 1px solid #c4b48a;
          color: #7a6a4a;
          padding: 8px 20px;
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 15px;
          cursor: pointer;
          border-radius: 3px;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .ref-toggle:hover {
          border-color: #7a5c14;
          color: #3a2e1e;
        }
        
        .ref-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 15px;
        }
        .ref-table th {
          text-align: left;
          padding: 8px 12px;
          border-bottom: 2px solid #c4b48a;
          color: #7a5c14;
          font-family: 'EB Garamond', Georgia, serif;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .ref-table td {
          padding: 7px 12px;
          border-bottom: 1px solid #e8dbc0;
          color: #5a4a30;
        }
        .ref-table tr:hover td {
          background: rgba(122, 92, 20, 0.06);
        }
        .ref-table .dynasty-row td {
          background: #ede0c4;
          color: #7a5c14;
          font-family: 'EB Garamond', Georgia, serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.08em;
          padding: 10px 12px 6px;
          border-bottom: 1px solid #d4c5a0;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .number-input {
          width: 90px;
        }

        .small-label {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 13px;
          color: #8a7a5a;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 6px;
          display: block;
        }

        .note-text {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 14px;
          font-style: italic;
          color: #7a6a4a;
          margin-top: 12px;
          padding-left: 16px;
          border-left: 2px solid #d4c5a0;
        }

        .divider {
          border: none;
          border-top: 1px solid #d4c5a0;
          margin: 32px 0;
        }

        @media (max-width: 600px) {
          .mode-tab { padding: 8px 16px; font-size: 14px; }
          .result-box { padding: 18px 16px; }
        }
        .tk-nav{display:flex;justify-content:center;gap:0;background:#ede0c4;border-bottom:1px solid #d4c5a0;padding:0;flex-wrap:wrap}
        .tk-nav a{display:block;padding:10px 20px;font-family:'Source Serif 4',Georgia,serif;font-size:13px;color:#7a6a4a;text-decoration:none;letter-spacing:.04em;transition:all .2s;border-bottom:2px solid transparent}
        .tk-nav a:hover{color:#3a2e1e;background:rgba(122,92,20,.06)}
        .tk-nav a.active{color:#2a1e0e;border-bottom-color:#7a5c14;font-weight:600}
      `}</style>

      <nav className="tk-nav">
        <a href="anno-regni.html" className="active">Regnal Year Converter</a>
        <a href="calendarium.html">Medieval Calendar</a>
        <a href="nummus.html">Money &amp; Units</a>
        <a href="fontes.html">Sources</a>
        <a href="about.html">About</a>
      </nav>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #d4c5a0",
        padding: "40px 24px 32px",
        textAlign: "center",
        background: "linear-gradient(180deg, #ede0c4 0%, #f5ead0 100%)",
      }}>
        <div style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.35em",
          color: "#7a5c14",
          marginBottom: "12px",
          fontWeight: 600,
        }}>
          Anno Regni
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 300,
          color: "#2a1e0e",
          margin: "0 0 8px",
          letterSpacing: "0.02em",
          lineHeight: 1.2,
        }}>
          Regnal Year Converter
        </h1>
        <p style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: "16px",
          color: "#7a6a4a",
          margin: 0,
          fontStyle: "italic",
        }}>
          Regnal years from William I to Charles III, and dating before 1066
        </p>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "32px 20px 60px" }}>
        
        {/* Mode toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <button
            className={`mode-tab ${mode === "regnal" ? "active" : ""}`}
            onClick={() => setMode("regnal")}
          >
            Regnal → Modern
          </button>
          <button
            className={`mode-tab ${mode === "modern" ? "active" : ""}`}
            onClick={() => setMode("modern")}
          >
            Modern → Regnal
          </button>
          <button
            className={`mode-tab ${mode === "anglosaxon" ? "active" : ""}`}
            onClick={() => setMode("anglosaxon")}
          >
            Before 1066
          </button>
        </div>

        {mode === "anglosaxon" ? <AngloSaxonDating /> : mode === "regnal" ? (
          <div key="regnal" style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ marginBottom: 20 }}>
              <label className="small-label">Monarch</label>
              <select
                className="converter-input"
                value={selectedMonarchIdx}
                onChange={e => { setSelectedMonarchIdx(parseInt(e.target.value)); setRegnalYear(""); setRegnalDay(""); setRegnalMonth(""); }}
              >
                {DYNASTIES.map(dynasty => (
                  <optgroup key={dynasty.label} label={dynasty.label}>
                    {MONARCHS.slice(dynasty.start, dynasty.end + 1).map((m, i) => (
                      <option key={dynasty.start + i} value={dynasty.start + i}>
                        {m.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label className="small-label">Regnal Year (1–{maxRegnal})</label>
              <input
                className="converter-input number-input"
                type="number"
                min="1"
                max={maxRegnal}
                placeholder="e.g. 3"
                value={regnalYear}
                onChange={e => setRegnalYear(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: 8 }}>
              <label className="small-label">Day &amp; Month (optional — for an exact date)</label>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ width: 90 }}>
                  <input
                    className="converter-input"
                    type="number"
                    min="1"
                    max="31"
                    placeholder="Day"
                    value={regnalDay}
                    onChange={e => setRegnalDay(e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <select
                    className="converter-input"
                    value={regnalMonth}
                    onChange={e => setRegnalMonth(e.target.value)}
                  >
                    <option value="">— Month —</option>
                    {MONTH_NAMES.slice(1).map((m, i) => (
                      <option key={i + 1} value={i + 1}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "14px",
              color: "#9a8a6a",
              marginTop: 6,
            }}>
              Accession: {formatDate(toDate(selectedMonarch.accession))}
            </div>

            {regnalResult && (
              <div className="result-box">
                <div style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#7a5c14",
                  marginBottom: 10,
                  fontWeight: 600,
                }}>
                  Result
                </div>
                <div style={{ fontSize: "22px", color: "#2a1e0e", fontWeight: 500, marginBottom: 4 }}>
                  {regnalDay && regnalMonth ? `${regnalDay} ${MONTH_NAMES[parseInt(regnalMonth)]} ` : ""}{regnalYear} {selectedMonarch.name}
                </div>
                {regnalResult.exactDate ? (
                  <div style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "18px",
                    color: "#2a1e0e",
                  }}>
                    = <strong>{formatDate(regnalResult.exactDate)}</strong>
                  </div>
                ) : regnalDay && regnalMonth && !regnalResult.exactDate ? (
                  <div style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "16px",
                    color: "#9a4a20",
                  }}>
                    That day/month does not fall within this regnal year.
                  </div>
                ) : null}
                <div style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: regnalResult.exactDate ? "15px" : "18px",
                  color: "#5a4a30",
                  marginTop: regnalResult.exactDate ? 10 : 0,
                }}>
                  {regnalResult.exactDate ? "Full regnal year: " : ""}{formatDate(regnalResult.start)} — {formatDate(regnalResult.end)}
                </div>
                {selectedMonarch.note && (
                  <div className="note-text">{selectedMonarch.note}</div>
                )}
              </div>
            )}

            {regnalYear && (parseInt(regnalYear) < 1 || parseInt(regnalYear) > maxRegnal) && (
              <div className="result-box" style={{ borderLeftColor: "#9a4a20" }}>
                <div style={{ color: "#9a4a20", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {selectedMonarch.name} reigned for {maxRegnal} regnal year{maxRegnal !== 1 ? "s" : ""}. Please enter a value between 1 and {maxRegnal}.
                </div>
              </div>
            )}
          </div>
        ) : (
          <div key="modern" style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <label className="small-label">Day</label>
                <input
                  className="converter-input"
                  type="number"
                  min="1"
                  max="31"
                  placeholder="1"
                  value={modernDate.day}
                  onChange={e => setModernDate(p => ({ ...p, day: e.target.value }))}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label className="small-label">Month</label>
                <select
                  className="converter-input"
                  value={modernDate.month}
                  onChange={e => setModernDate(p => ({ ...p, month: e.target.value }))}
                >
                  <option value="">—</option>
                  {MONTH_NAMES.slice(1).map((m, i) => (
                    <option key={i + 1} value={i + 1}>{m}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label className="small-label">Year</label>
                <input
                  className="converter-input"
                  type="number"
                  min="1066"
                  max="2030"
                  placeholder="1415"
                  value={modernDate.year}
                  onChange={e => setModernDate(p => ({ ...p, year: e.target.value }))}
                />
              </div>
            </div>

            {modernResult && modernResult.length > 0 && (
              <div className="result-box">
                <div style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#7a5c14",
                  marginBottom: 10,
                  fontWeight: 600,
                }}>
                  {modernResult.length > 1 ? "Results" : "Result"}
                </div>
                {modernResult.map((r, i) => {
                  const range = regnalToModern(r.monarch, r.regnalYear);
                  return (
                    <div key={i} style={{ marginBottom: i < modernResult.length - 1 ? 20 : 0 }}>
                      <div style={{ fontSize: "22px", color: "#2a1e0e", fontWeight: 500, marginBottom: 4 }}>
                        {r.regnalYear} {r.monarch.name}
                      </div>
                      <div style={{
                        fontFamily: "'Source Serif 4', Georgia, serif",
                        fontSize: "16px",
                        color: "#5a4a30",
                      }}>
                        Full regnal year: {formatDate(range.start)} — {formatDate(range.end)}
                      </div>
                      {r.monarch.note && (
                        <div className="note-text">{r.monarch.note}</div>
                      )}
                      {i < modernResult.length - 1 && (
                        <hr style={{ border: "none", borderTop: "1px solid #d4c5a0", margin: "16px 0 0" }} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {modernResult && modernResult.length === 0 && modernDate.year && modernDate.month && modernDate.day && (
              <div className="result-box" style={{ borderLeftColor: "#9a4a20" }}>
                <div style={{ color: "#9a4a20", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  No regnal year found for this date. Enter a date between 25 December 1066 and the present.
                </div>
              </div>
            )}
          </div>
        )}

        <hr className="divider" />

        {/* Reference table toggle */}
        <div style={{ textAlign: "center" }}>
          <button className="ref-toggle" onClick={() => setShowReference(!showReference)}>
            {showReference ? "Hide" : "Show"} Accession Date Reference
          </button>
        </div>

        {showReference && (
          <div style={{ marginTop: 24, overflowX: "auto", animation: "fadeIn 0.4s ease" }}>
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Monarch</th>
                  <th>Accession</th>
                  <th>End of Reign</th>
                  <th>Years</th>
                </tr>
              </thead>
              <tbody>
                {DYNASTIES.map(dynasty => (
                  <>
                    <tr key={dynasty.label} className="dynasty-row">
                      <td colSpan={4}>{dynasty.label}</td>
                    </tr>
                    {MONARCHS.slice(dynasty.start, dynasty.end + 1).map((m, i) => (
                      <tr key={dynasty.start + i} style={{
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }} onClick={() => {
                        setSelectedMonarchIdx(dynasty.start + i);
                        setMode("regnal");
                        setRegnalYear("");
                        setRegnalDay("");
                        setRegnalMonth("");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}>
                        <td style={{ color: "#3a2e1e", fontWeight: 500 }}>{m.name}</td>
                        <td>{formatDate(toDate(m.accession))}</td>
                        <td>{formatDate(toDate(m.end))}</td>
                        <td>{getMaxRegnalYear(m)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid #d4c5a0",
          textAlign: "center",
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: "13px",
          color: "#9a8a6a",
          lineHeight: 1.8,
        }}>
          <div>Regnal years run from the date of accession to the day before the next anniversary, except John&rsquo;s, which ran from Ascension Day each year.</div>
          <div style={{ marginTop: 4 }}>
            Note: Before the calendar reform of 1752, the English legal year began on 25 March (Lady Day).
            <br />
            Dates here use the historical calendar but with years beginning on 1 January.
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(React.createElement(RegnalDateConverter), document.getElementById("root"));
