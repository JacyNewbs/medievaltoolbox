// Fontes data: one entry per record type. Edit this file to add or change sources; no build step needed.
// Fields: id, branch (chancery | exchequer | courts | sc), group (optional sub-heading), order (optional sort position),
// title, tnaCode/tnaUrl, extraTna [{code,url}], tnaSearch (series or list of series), tnaSearchLabel, mdrSearch, desc,
// volumes: [{ range, editor, note?, tnaCode?, tnaUrl?, links: [{ type: ia|hathi|google|bho|umich|mmc|web|buy|aalt, label, url }] }]
window.FONTES_RECORDS = [
  {
    "id": "early-chancery-proceedings",
    "branch": "chancery",
    "tnaSearch": "C 1",
    "title": "Early Chancery Proceedings",
    "tnaCode": "C 1",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3564",
    "desc": "Bills, answers and other pleadings in suits before the chancellor's equity court: disputes over uses and feoffments, debts, title deeds, and inheritance that the common law could not resolve. Every petition is described individually in TNA's catalogue, which you can search below.",
    "volumes": [
      {"range":"c.1386–1558","editor":"List of Early Chancery Proceedings, Vols. 1–10 (PRO Lists and Indexes 12, 16, 20, 29, 38, 48, 50, 51, 54, 55; reprinted 1963)","links":[{"type":"ia","label":"Vol. 1","url":"https://archive.org/details/listofearlychanc112newy"},{"type":"ia","label":"Vol. 2","url":"https://archive.org/details/listofearlychanc216newy"},{"type":"ia","label":"Vol. 3","url":"https://archive.org/details/listofearlychanc320newy"},{"type":"ia","label":"Vol. 4","url":"https://archive.org/details/listofearlychanc429newy"},{"type":"ia","label":"Vol. 5","url":"https://archive.org/details/listofearlychanc538newy"},{"type":"ia","label":"Vol. 6","url":"https://archive.org/details/listofearlychanc648newy"},{"type":"ia","label":"Vol. 7","url":"https://archive.org/details/listofearlychanc750newy"},{"type":"ia","label":"Vol. 8","url":"https://archive.org/details/listofearlychanc851newy"},{"type":"ia","label":"Vol. 9","url":"https://archive.org/details/listofearlychanc954newy"},{"type":"ia","label":"Vol. 10","url":"https://archive.org/details/listofearlychanc1055newy"}]},
      {"range":"c.1386–1558","editor":"Images of the original bills and answers on AALT, by bundle","links":[{"type":"aalt","label":"AALT images","url":"http://aalt.law.uh.edu/ChanPro.html"}]}
    ]
  },
  {
    "id": "charter-rolls",
    "branch": "chancery",
    "title": "Charter Rolls",
    "tnaCode": "C 53",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3613",
    "desc": "Enrolments of formal royal charters granting solemn privileges, lands, markets, fairs, and rights of free warren.",
    "volumes": [
      {"range":"1199–1216","editor":"T. D. Hardy, Rotuli Chartarum in Turri Londinensi Asservati, Vol. 1 pt 1 (1837)","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=-9UsAQAAMAAJ"}]},
      {"range":"1226–1257","editor":"Calendar of Charter Rolls, Vol. 1, Henry III (1903)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarcharter00stamgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000086172628"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=rrsKAAAAYAAJ"}]},
      {"range":"1257–1300","editor":"Calendar of Charter Rolls, Vol. 2, Henry III–Edward I (1906)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarcharter01cunngoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/hvd.32044058276767"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=QtILAQAAIAAJ"}]},
      {"range":"1300–1326","editor":"Calendar of Charter Rolls, Vol. 3, Edward I–Edward II (1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarcharter00cunngoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000086172602"}]},
      {"range":"1327–1341","editor":"Calendar of Charter Rolls, Vol. 4, 1–14 Edward III (1912)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000086172677"}]},
      {"range":"1341–1417","editor":"Calendar of Charter Rolls, Vol. 5, 15 Edward III–5 Henry V (1916)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofcharte05greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000086172743"}]},
      {"range":"1427–1516","editor":"Calendar of Charter Rolls, Vol. 6, 5 Henry VI–8 Henry VIII (1927)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015011338087"}]},
      {"range":"1199–1483","editor":"J. Caley, Calendarium Rotulorum Chartarum et Inquisitionum ad Quod Damnum (1803)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015081946298"}]},
      {"range":"1226–1272","editor":"The Royal Charter Witness Lists of Henry III, Parts 1 and 2 (List and Index Society 291–292)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/291.html"}]},
      {"range":"1272–1307","editor":"Royal Charter Witness Lists of Edward I (List and Index Society 279)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/279.html"}]},
      {"range":"1307–1326","editor":"The Royal Charter Witness Lists of Edward II (List and Index Society 288)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/288.html"}]},
      {"range":"1399–1417","editor":"D. Biggs, Royal Charter Witness Lists, 1399 to 1417 (List and Index Society 357)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/357.html"}]},
      {"range":"1426–1516","editor":"J. Ross, The Royal Charter Witness Lists, 1426 to 1516 (List and Index Society 346)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/346.html"}]},
      {"range":"to 1516","editor":"S. Letters, Gazetteer of Markets and Fairs in England and Wales to 1516 (List and Index Society S032–S033)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/9032.html"}]}
    ]
  },
  {
    "id": "close-rolls",
    "branch": "chancery",
    "title": "Close Rolls",
    "tnaCode": "C 54",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3614",
    "desc": "Mandates and letters close issued folded shut to crown officers (sheriffs, escheators), plus private deeds and indentures enrolled for safekeeping.",
    "volumes": [
      {"range":"1204–1224","editor":"T. D. Hardy, Rotuli Litterarum Clausarum, Vol. 1 (1833)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotuli-litterarum-clausarum-vol-1"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=EFg4x7z5MYsC"}]},
      {"range":"1224–1227","editor":"T. D. Hardy, Rotuli Litterarum Clausarum, Vol. 2 (1844)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotuli-litterarum-clausarum-vol-2"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=vEJNAAAAcAAJ"}]},
      {"range":"1227–1231","editor":"Close Rolls, Henry III, Vol. 1 (1902)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/closerollsreign00stamgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127215"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol1"}]},
      {"range":"1231–1234","editor":"Close Rolls, Henry III, Vol. 2 (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/closerollsofreig02grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127207"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol2"}]},
      {"range":"1234–1237","editor":"Close Rolls, Henry III, Vol. 3 (1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/closerollsofreig03grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127199"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol3"}]},
      {"range":"1237–1242","editor":"Close Rolls, Henry III, Vol. 4 (1911)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/closerollsofreig04grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127181"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol4"}]},
      {"range":"1242–1247","editor":"Close Rolls, Henry III, Vol. 5 (1916)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/closerollsofreig05grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127124"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol5"}]},
      {"range":"1247–1251","editor":"Close Rolls, Henry III, Vol. 6 (1922)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/closerollsofreig06grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127132"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol6"}]},
      {"range":"1251–1253","editor":"Close Rolls, Henry III, Vol. 7 (1927)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127140"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol7"}]},
      {"range":"1253–1254","editor":"Close Rolls, Henry III, Vol. 8 (1929)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127157"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol8"}]},
      {"range":"1254–1256","editor":"Close Rolls, Henry III, Vol. 9 (1931)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127165"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol9"}]},
      {"range":"1256–1259","editor":"Close Rolls, Henry III, Vol. 10 (1932)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127173"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol10"}]},
      {"range":"1259–1261","editor":"Close Rolls, Henry III, Vol. 11 (1934)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127116"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol11"}]},
      {"range":"1261–1264","editor":"Close Rolls, Henry III, Vol. 12 (1936)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127108"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol12"}]},
      {"range":"1264–1268","editor":"Close Rolls, Henry III, Vol. 13 (1937)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127090"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol13"}]},
      {"range":"1268–1272","editor":"Close Rolls, Henry III, Vol. 14 (1938)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103127082"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen3/vol14"}]},
      {"range":"1272–1279","editor":"Calendar of Close Rolls, Edward I, Vol. 1 (1900)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924028042475"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529824"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw1/vol1"}]},
      {"range":"1279–1288","editor":"Calendar of Close Rolls, Edward I, Vol. 2 (1902)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924096297969"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529832"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw1/vol2"}]},
      {"range":"1288–1296","editor":"Calendar of Close Rolls, Edward I, Vol. 3 (1904)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091069868"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw1/vol3"}]},
      {"range":"1296–1302","editor":"Calendar of Close Rolls, Edward I, Vol. 4 (1906)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924081297990"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw1/vol4"}]},
      {"range":"1302–1307","editor":"Calendar of Close Rolls, Edward I, Vol. 5 (1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarclosero00changoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529865"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw1/vol5"}]},
      {"range":"1307–1313","editor":"Calendar of Close Rolls, Edward II, Vol. 1 (1892)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/CalendarOfCloseRolls_1307-1313"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/coo.31924091068415"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw2/vol1"}]},
      {"range":"1313–1318","editor":"Calendar of Close Rolls, Edward II, Vol. 2 (1893)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091068993"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529881"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw2/vol2"}]},
      {"range":"1318–1323","editor":"Calendar of Close Rolls, Edward II, Vol. 3 (1895)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091068985"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529899"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw2/vol3"}]},
      {"range":"1323–1327","editor":"Calendar of Close Rolls, Edward II, Vol. 4 (1898)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091068977"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103524957"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw2/vol4"}]},
      {"range":"1327–1330","editor":"Calendar of Close Rolls, Edward III, Vol. 1 (1896)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767859"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103524965"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol1"}]},
      {"range":"1330–1333","editor":"Calendar of Close Rolls, Edward III, Vol. 2 (1898)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767867"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103524973"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol2"}]},
      {"range":"1333–1337","editor":"Calendar of Close Rolls, Edward III, Vol. 3 (1898)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767875"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103524981"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol3"}]},
      {"range":"1337–1339","editor":"Calendar of Close Rolls, Edward III, Vol. 4 (1900)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767883"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103524999"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol4"}]},
      {"range":"1339–1341","editor":"Calendar of Close Rolls, Edward III, Vol. 5 (1901)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767891"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525004"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol5"}]},
      {"range":"1341–1343","editor":"Calendar of Close Rolls, Edward III, Vol. 6 (1902)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarclosero05offigoog"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol6"}]},
      {"range":"1343–1346","editor":"Calendar of Close Rolls, Edward III, Vol. 7 (1904)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767917"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol7"}]},
      {"range":"1346–1349","editor":"Calendar of Close Rolls, Edward III, Vol. 8 (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767925"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol8"}]},
      {"range":"1349–1354","editor":"Calendar of Close Rolls, Edward III, Vol. 9 (1906)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767933"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525046"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol9"}]},
      {"range":"1354–1360","editor":"Calendar of Close Rolls, Edward III, Vol. 10 (1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767941"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525053"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol10"}]},
      {"range":"1360–1364","editor":"Calendar of Close Rolls, Edward III, Vol. 11 (1909)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525061"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol11"}]},
      {"range":"1364–1368","editor":"Calendar of Close Rolls, Edward III, Vol. 12 (1910)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525079"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol12"}]},
      {"range":"1369–1374","editor":"Calendar of Close Rolls, Edward III, Vol. 13 (1911)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525087"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol13"}]},
      {"range":"1374–1377","editor":"Calendar of Close Rolls, Edward III, Vol. 14 (1913)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091767982"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103525095"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw3/vol14"}]},
      {"range":"1377–1381","editor":"Calendar of Close Rolls, Richard II, Vol. 1 (1914)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofclos01grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529907"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/ric2/vol1"}]},
      {"range":"1381–1385","editor":"Calendar of Close Rolls, Richard II, Vol. 2 (1914)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofclos02grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529915"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/ric2/vol2"}]},
      {"range":"1385–1389","editor":"Calendar of Close Rolls, Richard II, Vol. 3 (1914)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofclo03grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529923"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/ric2/vol3"}]},
      {"range":"1389–1392","editor":"Calendar of Close Rolls, Richard II, Vol. 4 (1922)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofclo04grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529931"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/ric2/vol4"}]},
      {"range":"1392–1396","editor":"Calendar of Close Rolls, Richard II, Vol. 5 (1925)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529949"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/ric2/vol5"}]},
      {"range":"1396–1399","editor":"Calendar of Close Rolls, Richard II, Vol. 6 (1927)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529956"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/ric2/vol6"}]},
      {"range":"1399–1402","editor":"Calendar of Close Rolls, Henry IV, Vol. 1 (1927)","links":[{"type":"web","label":"FamilySearch (free login)","url":"https://www.familysearch.org/library/books/records/item/581522-calendar-of-the-close-rolls-preserved-in-the-public-record-office-henry-iv-vol-1-1399-1402"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen4/vol1"}]},
      {"range":"1402–1405","editor":"Calendar of Close Rolls, Henry IV, Vol. 2 (1929)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529972"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen4/vol2"}]},
      {"range":"1405–1409","editor":"Calendar of Close Rolls, Henry IV, Vol. 3 (1931)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529980"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen4/vol3"}]},
      {"range":"1409–1413","editor":"Calendar of Close Rolls, Henry IV, Vol. 4 (1932)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103529998"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen4/vol4"}]},
      {"range":"1399–1413","editor":"Calendar of Close Rolls, Henry IV, Index (1938)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530004"}]},
      {"range":"1413–1419","editor":"Calendar of Close Rolls, Henry V, Vol. 1 (1929)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530012"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen5/vol1"}]},
      {"range":"1419–1422","editor":"Calendar of Close Rolls, Henry V, Vol. 2 (1932)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530020"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen5/vol2"}]},
      {"range":"1422–1429","editor":"Calendar of Close Rolls, Henry VI, Vol. 1 (1933)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530038"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen6/vol1"}]},
      {"range":"1429–1435","editor":"Calendar of Close Rolls, Henry VI, Vol. 2 (1933)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530046"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen6/vol2"}]},
      {"range":"1435–1441","editor":"Calendar of Close Rolls, Henry VI, Vol. 3 (1937)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530053"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen6/vol3"}]},
      {"range":"1441–1447","editor":"Calendar of Close Rolls, Henry VI, Vol. 4 (1937)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530061"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen6/vol4"}]},
      {"range":"1447–1454","editor":"Calendar of Close Rolls, Henry VI, Vol. 5 (1941)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/coo.31924111042143"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen6/vol5"}]},
      {"range":"1454–1461","editor":"Calendar of Close Rolls, Henry VI, Vol. 6 (1947)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530087"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen6/vol6"}]},
      {"range":"1461–1468","editor":"Calendar of Close Rolls, Edward IV, Vol. 1 (1949)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530095"},{"type":"web","label":"FamilySearch (free login)","url":"https://www.familysearch.org/library/books/records/item/116122-calendar-of-the-close-rolls-preserved-in-the-public-record-office-edward-iv-vol-1"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw4/vol1"}]},
      {"range":"1468–1476","editor":"Calendar of Close Rolls, Edward IV and Henry VI, Vol. 2 (1953)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530103"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/edw4/vol2"}]},
      {"range":"1476–1485","editor":"Calendar of Close Rolls, Edward IV, Edward V, Richard III (1954)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530111"}]},
      {"range":"1485–1500","editor":"Calendar of Close Rolls, Henry VII, Vol. 1 (1955)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112103530129"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen7/vol1"}]},
      {"range":"1500–1509","editor":"Calendar of Close Rolls, Henry VII, Vol. 2 (1963)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/msu.31293017956230"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-close-rolls/hen7/vol2"}]}
    ]
  },
  {
    "id": "fine-rolls",
    "branch": "chancery",
    "title": "Fine Rolls",
    "tnaCode": "C 60",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3620",
    "desc": "Enrolments of agreements and payments made to the Crown for grants of land, liberties, wardships, marriages, and writs of diem clausit extremum.",
    "volumes": [
      {"range":"1199–1216","editor":"T. D. Hardy, Rotuli de Oblatis et Finibus, tempore Regis Johannis (1835)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotulideoblatse00johngoog"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=RqEUAAAAQAAJ"}]},
      {"range":"1216–1246","editor":"C. Roberts, Excerpta e Rotulis Finium, Henry III, Vol. 1 (1835)","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=PP09AAAAcAAJ"}]},
      {"range":"1246–1272","editor":"C. Roberts, Excerpta e Rotulis Finium, Henry III, Vol. 2 (1836)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/excerptarotulis00changoog"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=QulOAAAAcAAJ"}]},
      {"range":"1216–1272","editor":"Henry III Fine Rolls Project: translations and images","links":[{"type":"web","label":"Henry III Fine Rolls Project","url":"https://finerollshenry3.org.uk/"}]},
      {"range":"1272–1307","editor":"Calendar of Fine Rolls, Vol. 1, Edward I (1911)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero01lond"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344980"}]},
      {"range":"1307–1319","editor":"Calendar of Fine Rolls, Vol. 2, Edward II (1912)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero02greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344840"}]},
      {"range":"1319–1327","editor":"Calendar of Fine Rolls, Vol. 3, Edward II (1912)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero03greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344998"}]},
      {"range":"1327–1337","editor":"Calendar of Fine Rolls, Vol. 4, Edward III (1913)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero04greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344691"}]},
      {"range":"1337–1347","editor":"Calendar of Fine Rolls, Vol. 5, Edward III (1915)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero05lond"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/njp.32101077283602"}]},
      {"range":"1347–1356","editor":"Calendar of Fine Rolls, Vol. 6, Edward III (1921)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/CalendarOfFineRolls_Vol6_1347-1356"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015017688956"}]},
      {"range":"1356–1368","editor":"Calendar of Fine Rolls, Vol. 7, Edward III (1923)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffiner07greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344709"}]},
      {"range":"1368–1377","editor":"Calendar of Fine Rolls, Vol. 8, Edward III (1924)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344857"}]},
      {"range":"1377–1383","editor":"Calendar of Fine Rolls, Vol. 9, Richard II (1926)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009382964"}]},
      {"range":"1383–1391","editor":"Calendar of Fine Rolls, Vol. 10, Richard II (1929)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero10greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009382766"}]},
      {"range":"1391–1399","editor":"Calendar of Fine Rolls, Vol. 11, Richard II (1929)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero11greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009382956"}]},
      {"range":"1399–1405","editor":"Calendar of Fine Rolls, Vol. 12, Henry IV (1931)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffiner12greauoft"}]},
      {"range":"1405–1413","editor":"Calendar of Fine Rolls, Vol. 13, Henry IV (1933)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero13greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344717"}]},
      {"range":"1413–1422","editor":"Calendar of Fine Rolls, Vol. 14, Henry V (1934)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffiner14greauoft"}]},
      {"range":"1422–1430","editor":"Calendar of Fine Rolls, Vol. 15, Henry VI (1935)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffine15greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066345011"}]},
      {"range":"1430–1437","editor":"Calendar of Fine Rolls, Vol. 16, Henry VI (1936)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero16greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344725"}]},
      {"range":"1437–1445","editor":"Calendar of Fine Rolls, Vol. 17, Henry VI (1937)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffine17greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015008370549"}]},
      {"range":"1445–1452","editor":"Calendar of Fine Rolls, Vol. 18, Henry VI (1939)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero18greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015008370556"}]},
      {"range":"1452–1461","editor":"Calendar of Fine Rolls, Vol. 19, Henry VI (1939)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroffinero19greauoft"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015008370523"}]},
      {"range":"1461–1471","editor":"Calendar of Fine Rolls, Vol. 20, Edward IV (1949)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/msu.31293400201285"}]},
      {"range":"1471–1485","editor":"Calendar of Fine Rolls, Vol. 21, Edward IV–Richard III (1961)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/msu.31293400201293"}]},
      {"range":"1485–1509","editor":"Calendar of Fine Rolls, Vol. 22, Henry VII (1962)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/msu.31293024017927"}]}
    ]
  },
  {
    "id": "liberate-rolls",
    "branch": "chancery",
    "title": "Liberate Rolls",
    "tnaCode": "C 62",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3622",
    "desc": "Enrolled writs of liberate ordering payments out of the Exchequer, together with writs of allocate and computate; a key source for royal household spending, building works, and wages.",
    "volumes": [
      {"range":"1199–1216","editor":"T. D. Hardy, Rotuli de Liberate ac de Misis et Praestitis, regnante Johanne","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotulideliberate00grea"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=yKEUAAAAQAAJ"}]},
      {"range":"1226–1240","editor":"Calendar of Liberate Rolls, Henry III (Vol. 1)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendaroflibera01grea"}]},
      {"range":"1240–1245","editor":"Calendar of Liberate Rolls, Henry III (Vol. 2)","links":[{"type":"umich","label":"Michigan Digital Collection","url":"https://quod.lib.umich.edu/g/genpub/ABH6499.0002.001"}]},
      {"range":"1245–1251","editor":"Calendar of Liberate Rolls, Henry III (Vol. 3)","links":[{"type":"umich","label":"Michigan Digital Collection","url":"https://quod.lib.umich.edu/g/genpub/ABH6499.0003.001"}]},
      {"range":"1251–1260","editor":"Calendar of Liberate Rolls, Henry III (Vol. 4)","links":[{"type":"umich","label":"Michigan Digital Collection","url":"https://quod.lib.umich.edu/g/genpub/ABH6499.0004.001"}]},
      {"range":"1260–1267","editor":"Calendar of Liberate Rolls, Henry III (Vol. 5)","links":[{"type":"umich","label":"Michigan Digital Collection","url":"https://quod.lib.umich.edu/g/genpub/ABH6499.0005.001"}]},
      {"range":"1267–1272","editor":"Calendar of Liberate Rolls, Henry III (Vol. 6), with appendices 1220–1267","links":[{"type":"umich","label":"Michigan Digital Collection","url":"https://quod.lib.umich.edu/g/genpub/ABH6499.0006.001"}]},
      {"range":"Original rolls","editor":"Images of C 62 on AALT, by reign (TNA piece numbers)","links":[{"type":"aalt","label":"Edw I · 49–83, 149","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 84–103","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 104–125","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 126–144","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 145","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 146","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 147","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 148","url":"http://aalt.law.uh.edu/HenryVI.html"}]}
    ]
  },
  {
    "id": "patent-rolls",
    "branch": "chancery",
    "title": "Patent Rolls",
    "tnaCode": "C 66",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3626",
    "desc": "Public letters patent issuing royal grants of land, offices, commissions of the peace and array, pardons, and licenses to alienate.",
    "volumes": [
      {"range":"1201–1216","editor":"T. D. Hardy, Rotuli Litterarum Patentium, Vol. 1 pt 1 (1835)","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=uk4MAQAAMAAJ"}]},
      {"range":"1216–1225","editor":"Patent Rolls, Henry III, Vol. 1 (1901)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/patentrollsreig00sirgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081055"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/hen3/vol1"}]},
      {"range":"1225–1232","editor":"Patent Rolls, Henry III, Vol. 2 (1903)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/patentrollsreig03lytegoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031080123"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=_OMLAQAAIAAJ"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/hen3/vol2"}]},
      {"range":"1232–1247","editor":"Calendar of Patent Rolls, Henry III, Vol. 3 (1906)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/patentrollsreig01lytegoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031080107"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/hen3/vol3"}]},
      {"range":"1247–1258","editor":"Calendar of Patent Rolls, Henry III, Vol. 4 (1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/patentrollsreig00offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031080115"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/hen3/vol4"}]},
      {"range":"1258–1266","editor":"Calendar of Patent Rolls, Henry III, Vol. 5 (1910)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081048"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/hen3/vol5"}]},
      {"range":"1266–1272","editor":"Calendar of Patent Rolls, Henry III, Vol. 6 (1913)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031080131"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/hen3/vol6"}]},
      {"range":"1272–1281","editor":"Calendar of Patent Rolls, Edward I, Vol. 1 (1901)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpatent01grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081063"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/edw1/vol1"}]},
      {"range":"1281–1292","editor":"Calendar of Patent Rolls, Edward I, Vol. 2 (1893)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpatent02grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081162"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/edw1/vol2"}]},
      {"range":"1292–1301","editor":"Calendar of Patent Rolls, Edward I, Vol. 3 (1895)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpatent03grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081154"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/edw1/vol3"}]},
      {"range":"1301–1307","editor":"Calendar of Patent Rolls, Edward I, Vol. 4 (1898)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpatent04grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009161343"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/cal-pat-rolls/edw1/vol4"}]},
      {"range":"1307–1313","editor":"Calendar of Patent Rolls, Edward II, Vol. 1 (1894)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpaten01grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015008359732"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-ii/vol1"}]},
      {"range":"1313–1317","editor":"Calendar of Patent Rolls, Edward II, Vol. 2 (1898)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpaten02grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/gri.ark:/13960/t0wq2kg62"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-ii/vol2"}]},
      {"range":"1317–1321","editor":"Calendar of Patent Rolls, Edward II, Vol. 3 (1903)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpaten03grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081139"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-ii/vol3"}]},
      {"range":"1321–1324","editor":"Calendar of Patent Rolls, Edward II, Vol. 4 (1904)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpaten04grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081147"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-ii/vol4"}]},
      {"range":"1324–1327","editor":"Calendar of Patent Rolls, Edward II, Vol. 5 (1904)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpatent05grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009163380"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-ii/vol5"}]},
      {"range":"1327–1330","editor":"Calendar of Patent Rolls, Edward III, Vol. 1 (1891)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpate01grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081071"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-iii/vol1"}]},
      {"range":"1330–1334","editor":"Calendar of Patent Rolls, Edward III, Vol. 2 (1893)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr17offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015023267001"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-iii/vol2"}]},
      {"range":"1334–1338","editor":"Calendar of Patent Rolls, Edward III, Vol. 3 (1895)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015011275826"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-iii/vol3"}]},
      {"range":"1338–1340","editor":"Calendar of Patent Rolls, Edward III, Vol. 4 (1898)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079406"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-iii/vol4"}]},
      {"range":"1340–1343","editor":"Calendar of Patent Rolls, Edward III, Vol. 5 (1900)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr01offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079299"},{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/series/calendar-of-patent-rolls-edward-iii/vol5"}]},
      {"range":"1343–1345","editor":"Calendar of Patent Rolls, Edward III, Vol. 6 (1902)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079281"}]},
      {"range":"1345–1348","editor":"Calendar of Patent Rolls, Edward III, Vol. 7 (1903)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079307"}]},
      {"range":"1348–1350","editor":"Calendar of Patent Rolls, Edward III, Vol. 8 (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr06offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015007019998"}]},
      {"range":"1350–1354","editor":"Calendar of Patent Rolls, Edward III, Vol. 9 (1907)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr03offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079315"}]},
      {"range":"1354–1358","editor":"Calendar of Patent Rolls, Edward III, Vol. 10 (1909)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079323"}]},
      {"range":"1358–1361","editor":"Calendar of Patent Rolls, Edward III, Vol. 11 (1911)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079414"}]},
      {"range":"1361–1364","editor":"Calendar of Patent Rolls, Edward III, Vol. 12 (1912)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081089"}]},
      {"range":"1364–1367","editor":"Calendar of Patent Rolls, Edward III, Vol. 13 (1912)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081097"}]},
      {"range":"1367–1370","editor":"Calendar of Patent Rolls, Edward III, Vol. 14 (1913)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081105"}]},
      {"range":"1370–1374","editor":"Calendar of Patent Rolls, Edward III, Vol. 15 (1914)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031081113"}]},
      {"range":"1374–1377","editor":"Calendar of Patent Rolls, Edward III, Vol. 16 (1916)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066345060"}]},
      {"range":"1377–1381","editor":"Calendar of Patent Rolls, Richard II, Vol. 1 (1895)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofpatent06grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009337620"}]},
      {"range":"1381–1385","editor":"Calendar of Patent Rolls, Richard II, Vol. 2 (1897)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009337612"}]},
      {"range":"1385–1389","editor":"Calendar of Patent Rolls, Richard II, Vol. 3 (1900)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr02offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009141402"}]},
      {"range":"1388–1392","editor":"Calendar of Patent Rolls, Richard II, Vol. 4 (1902)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr02blacgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015008969282"}]},
      {"range":"1391–1396","editor":"Calendar of Patent Rolls, Richard II, Vol. 5 (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr04blacgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015008966072"}]},
      {"range":"1396–1399","editor":"Calendar of Patent Rolls, Richard II, Vol. 6 (1909)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015009337604"}]},
      {"range":"1399–1401","editor":"Calendar of Patent Rolls, Henry IV, Vol. 1 (1903)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr16offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079463"}]},
      {"range":"1401–1405","editor":"Calendar of Patent Rolls, Henry IV, Vol. 2 (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr00britgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079455"}]},
      {"range":"1405–1408","editor":"Calendar of Patent Rolls, Henry IV, Vol. 3 (1907)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079588"}]},
      {"range":"1408–1413","editor":"Calendar of Patent Rolls, Henry IV, Vol. 4 (1909)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079570"}]},
      {"range":"1413–1416","editor":"Calendar of Patent Rolls, Henry V, Vol. 1 (1910)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079596"}]},
      {"range":"1416–1422","editor":"Calendar of Patent Rolls, Henry V, Vol. 2 (1911)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079505"}]},
      {"range":"1422–1429","editor":"Calendar of Patent Rolls, Henry VI, Vol. 1 (1901)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079513"}]},
      {"range":"1429–1436","editor":"Calendar of Patent Rolls, Henry VI, Vol. 2 (1907)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr01blacgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079521"}]},
      {"range":"1436–1441","editor":"Calendar of Patent Rolls, Henry VI, Vol. 3 (1907)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr15offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079612"}]},
      {"range":"1441–1446","editor":"Calendar of Patent Rolls, Henry VI, Vol. 4 (1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr00blacgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079604"}]},
      {"range":"1446–1452","editor":"Calendar of Patent Rolls, Henry VI, Vol. 5 (1909)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079539"}]},
      {"range":"1452–1461","editor":"Calendar of Patent Rolls, Henry VI, Vol. 6 (1910)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079547"}]},
      {"range":"1461–1467","editor":"Calendar of Patent Rolls, Edward IV, Vol. 1 (1897)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr14offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079562"}]},
      {"range":"1467–1477","editor":"Calendar of Patent Rolls, Edward IV and Henry VI, Vol. 2 (1900)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr05blacgoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079687"}]},
      {"range":"1476–1485","editor":"Calendar of Patent Rolls, Edward IV, Edward V, Richard III (1901)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarpatentr12offigoog"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015031079554"}]},
      {"range":"1485–1494","editor":"Calendar of Patent Rolls, Henry VII, Vol. 1 (1914)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066345219"}]},
      {"range":"1494–1509","editor":"Calendar of Patent Rolls, Henry VII, Vol. 2 (1916)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066345367"}]},
      {"range":"1201–1483","editor":"Calendarium Rotulorum Patentium in Turri Londinensi (1802)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015024467360"}]}
    ]
  },
  {
    "id": "inquisitions-post-mortem",
    "branch": "chancery",
    "tnaSearch": [
      "C 132",
      "C 133",
      "C 134",
      "C 135",
      "C 136",
      "C 137",
      "C 138",
      "C 139",
      "C 140",
      "C 141",
      "C 142",
      "E 149",
      "E 150"
    ],
    "tnaSearchLabel": "Chancery (C 132–C 142) and Exchequer (E 149, E 150) IPM",
    "title": "Inquisitions Post Mortem",
    "tnaCode": "C 132–C 142",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3690",
    "desc": "Inquests held on the death of tenants-in-chief to establish what lands they held of the Crown, by what service, and who was their heir and of what age. Each volume shows its own TNA series. The search also covers the Exchequer’s copies (E 149, E 150), which sometimes survive where the Chancery return is lost.",
    "volumes": [
      {"range":"1236–1272","editor":"Calendar of Inquisitions Post Mortem, Henry III (Vol. 1)","tnaCode":"C 132","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3690","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol1"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387796"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=mgYRAAAAYAAJ"}]},
      {"range":"1272–1291","editor":"Calendar of Inquisitions Post Mortem, Edward I (Vol. 2)","tnaCode":"C 133","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3691","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol2"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387804"}]},
      {"range":"1291–1300","editor":"Calendar of Inquisitions Post Mortem, Edward I (Vol. 3)","tnaCode":"C 133","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3691","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol3"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387812"}]},
      {"range":"1300–1307","editor":"Calendar of Inquisitions Post Mortem, Edward I (Vol. 4)","tnaCode":"C 133","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3691","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol4"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387820"}]},
      {"range":"1307–1316","editor":"Calendar of Inquisitions Post Mortem, Edward II (Vol. 5)","tnaCode":"C 134","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3692","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol5"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387838"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=t81CAAAAYAAJ"}]},
      {"range":"1316–1327","editor":"Calendar of Inquisitions Post Mortem, Edward II (Vol. 6)","tnaCode":"C 134","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3692","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol6"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924099427845"}]},
      {"range":"1327–1336","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 7)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol7"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387853"}]},
      {"range":"1336–1347","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 8)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol8"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387861"}]},
      {"range":"1347–1352","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 9)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol9"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387879"}]},
      {"range":"1352–1361","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 10)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol10"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/uc1.l0066756867"}]},
      {"range":"1361–1365","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 11)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol11"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387895"}]},
      {"range":"1365–1370","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 12)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol12"},{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924011387903"}]},
      {"range":"1370–1373","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 13)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol13"}]},
      {"range":"1374–1377","editor":"Calendar of Inquisitions Post Mortem, Edward III (Vol. 14)","tnaCode":"C 135","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3693","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol14"}]},
      {"range":"1377–1384","editor":"Calendar of Inquisitions Post Mortem, Richard II (Vol. 15)","tnaCode":"C 136","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3694","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol15"}]},
      {"range":"1384–1392","editor":"Calendar of Inquisitions Post Mortem, Richard II (Vol. 16)","tnaCode":"C 136","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3694","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol16"}]},
      {"range":"1392–1399","editor":"Calendar of Inquisitions Post Mortem, Richard II (Vol. 17)","tnaCode":"C 136","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3694","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol17"}]},
      {"range":"1399–1405","editor":"Calendar of Inquisitions Post Mortem, Henry IV (Vol. 18)","tnaCode":"C 137","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3695","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol18"},{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1405–1413","editor":"Calendar of Inquisitions Post Mortem, Henry IV (Vol. 19)","tnaCode":"C 137","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3695","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol19"},{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1413–1418","editor":"Calendar of Inquisitions Post Mortem, Henry V (Vol. 20)","tnaCode":"C 138","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3696","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/inquis-post-mortem/vol20"},{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1418–1422","editor":"Calendar of Inquisitions Post Mortem, Henry V (Vol. 21)","tnaCode":"C 138","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3696","links":[{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1422–1427","editor":"Calendar of Inquisitions Post Mortem, Henry VI (Vol. 22)","tnaCode":"C 139","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3697","links":[{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1427–1432","editor":"Calendar of Inquisitions Post Mortem, Henry VI (Vol. 23)","tnaCode":"C 139","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3697","links":[{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1432–1437","editor":"Calendar of Inquisitions Post Mortem, Henry VI (Vol. 24)","tnaCode":"C 139","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3697","links":[{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1437–1442","editor":"Calendar of Inquisitions Post Mortem, Henry VI (Vol. 25)","tnaCode":"C 139","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3697","links":[{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1442–1447","editor":"Calendar of Inquisitions Post Mortem, Henry VI (Vol. 26)","tnaCode":"C 139","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3697","links":[{"type":"mmc","label":"Mapping the Medieval Countryside","url":"https://inquisitionspostmortem.ac.uk/"}]},
      {"range":"1447–1483","editor":"Calendar of Inquisitions Post Mortem, Henry VI–Edward IV (Vols. 27–34)","note":"Not yet published","links":[]},
      {"range":"1483–1485","editor":"Calendar of Inquisitions Post Mortem, Edward V–Richard III (Vol. 35), ed. G. McKelvie","tnaCode":"C 141","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3699","links":[{"type":"buy","label":"Buy from Boydell & Brewer","url":"https://boydellandbrewer.com/book/calendar-of-inquisitions-post-mortem-and-other-analogous-documents-preserved-in-the-national-archives-xxxv-1-edward-v-to-richard-iii-1483-1485-9781783275595/"}]},
      {"range":"Henry VII (Vol. 1)","editor":"Calendar of Inquisitions Post Mortem, Henry VII, Series II (Vol. 1)","tnaCode":"C 142","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3700","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendar-ipm-henry-vii-vol-1"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/umn.31951p00185763j"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=xPMLAQAAMAAJ"}]},
      {"range":"Henry VII (Vol. 2)","editor":"Calendar of Inquisitions Post Mortem, Henry VII, Series II (Vol. 2)","tnaCode":"C 142","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3700","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofinquis02grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015005603918"}]},
      {"range":"Henry VII (Vol. 3)","editor":"Calendar of Inquisitions Post Mortem, Henry VII, Series II (Vol. 3)","tnaCode":"C 142","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C3700","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofinquis03great"}]},
      {"range":"1413–1485","editor":"Inquisitions Post Mortem, Henry V–Richard III (C 138–C 142), with name index (List and Index Society 268–269)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/268.html"}]}
    ]
  },
  {
    "id": "inquisitions-miscellaneous",
    "branch": "chancery",
    "tnaSearch": "C 145",
    "title": "Inquisitions Miscellaneous",
    "tnaCode": "C 145",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3703",
    "desc": "Inquisitions ad quod damnum and other inquests on forfeitures, escheats, liberties, petitions, and disputed rights that fall outside the post mortem series.",
    "volumes": [
      {"range":"1219–1307","editor":"Calendar of Inquisitions Miscellaneous, Henry III–Edward I (Vol. 1)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofinquis01lond"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/pst.000023992122"}]},
      {"range":"1307–1349","editor":"Calendar of Inquisitions Miscellaneous, Edward II–22 Edward III (Vol. 2)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarofinqu02grea"}]},
      {"range":"1348–1377","editor":"Calendar of Inquisitions Miscellaneous, 22–51 Edward III (Vol. 3)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000095331645"}]},
      {"range":"1377–1388","editor":"Calendar of Inquisitions Miscellaneous, Richard II (Vol. 4)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000095331652"}]},
      {"range":"1387–1393","editor":"Calendar of Inquisitions Miscellaneous, Richard II (Vol. 5)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000095331660"}]},
      {"range":"1392–1399","editor":"Calendar of Inquisitions Miscellaneous, Richard II (Vol. 6)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000047592476"}]},
      {"range":"1399–1422","editor":"Calendar of Inquisitions Miscellaneous, Henry IV–Henry V (Vol. 7)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000095331678"}]},
      {"range":"1422–1485","editor":"Calendar of Inquisitions Miscellaneous, Henry VI–Richard III (Vol. 8)","note":"No free online copy; out of print (Boydell, 2003)","links":[]}
    ]
  },
  {
    "id": "various-chancery-rolls",
    "branch": "chancery",
    "title": "Various Chancery Rolls",
    "tnaCode": "C 55",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3615",
    "extraTna": [
      {
        "code": "C 72",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C3632"
      },
      {
        "code": "C 77",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C3637"
      }
    ],
    "desc": "Supplementary Close Rolls, Welsh Rolls, and Scutage Rolls (with rolls of summons for knight service), calendared together in a single volume.",
    "volumes": [
      {"range":"1277–1326","editor":"Calendar of Various Chancery Rolls: Supplementary Close Rolls, Welsh Rolls, Scutage Rolls","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924026113880"}]}
    ]
  },
  {
    "id": "gascon-rolls",
    "branch": "chancery",
    "title": "Gascon Rolls",
    "tnaCode": "C 61",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3621",
    "desc": "Enrolments of royal letters and grants concerning the duchy of Aquitaine: appointments, licences, protections, and the administration of English Gascony.",
    "volumes": [
      {"range":"1241–1422","editor":"T. Carte, Catalogue des Rolles Gascons, Normans et François (Tome 1, 1743)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/RollesGasconsNormansEtFrancois1"}]},
      {"range":"1242–1254","editor":"F. Michel, Rôles Gascons (Vol. 1)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rlesgascony01michuoft"}]},
      {"range":"1254–1255","editor":"C. Bémont, Rôles Gascons, Supplement to Vol. 1","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rlesgasc01supll01michuoft"}]},
      {"range":"1273–1290","editor":"C. Bémont, Rôles Gascons (Vol. 2)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rlesgasc02michuoft"}]},
      {"range":"1290–1307","editor":"C. Bémont, Rôles Gascons (Vol. 3)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rlesgascons03mich"}]},
      {"range":"1317–1468","editor":"The Gascon Rolls Project: calendar, images and indexes","links":[{"type":"web","label":"Gascon Rolls Project","url":"https://www.gasconrolls.org/index.html"}]}
    ]
  },
  {
    "id": "norman-rolls",
    "branch": "chancery",
    "title": "Norman Rolls",
    "tnaCode": "C 64",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3624",
    "desc": "Enrolments of letters relating to the duchy of Normandy, under John and again during the Lancastrian conquest and occupation.",
    "volumes": [
      {"range":"1200–1205, 1417","editor":"T. D. Hardy, Rotuli Normanniae in Turri Londinensi Asservati","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=_DkLAAAAYAAJ"}]},
      {"range":"1418–1419","editor":"Calendar of the Norman Rolls, Henry V, Part 1 (41st Report of the Deputy Keeper, 1880)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/41stAnnualReportOfTheDeputyKeeperOfThePublicRecords/page/n685"}]},
      {"range":"1419–1422","editor":"Calendar of the Norman Rolls, Henry V, Part 2 (42nd Report of the Deputy Keeper, 1881)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/42ndAnnualReportOfTheDeputyKeeperOfThePublicRecords/page/n331"}]}
    ]
  },
  {
    "id": "parliament-rolls",
    "branch": "chancery",
    "title": "Parliament Rolls",
    "tnaCode": "C 65",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3625",
    "desc": "The official record of parliamentary business: pleas, petitions and answers, grants of taxation, and statutes agreed in parliament.",
    "volumes": [
      {"range":"1275–1504","editor":"C. Given-Wilson et al., The Parliament Rolls of Medieval England (PROME)","links":[{"type":"bho","label":"British History Online (subscription)","url":"https://www.british-history.ac.uk/no-series/parliament-rolls-medieval"}]},
      {"range":"1278–1327","editor":"Rotuli Parliamentorum (Vol. 1)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/10213329bsb"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/pst.000020573621"}]},
      {"range":"1327–1377","editor":"Rotuli Parliamentorum (Vol. 2)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/10213330bsb"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/pst.000020573638"}]},
      {"range":"1377–1399","editor":"Rotuli Parliamentorum (Vol. 3)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/10213331bsb"}]},
      {"range":"1399–1439","editor":"Rotuli Parliamentorum (Vol. 4)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/pst.000013403898"}]},
      {"range":"1439–1472","editor":"Rotuli Parliamentorum (Vol. 5)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/10213333bsb"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/pst.000020573652"}]},
      {"range":"1472–1504","editor":"Rotuli Parliamentorum (Vol. 6)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/10213334bsb"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/pst.000014729249"}]},
      {"range":"Index","editor":"Index to the Rolls of Parliament, 1278–1503 (1832)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015046417377"}]}
    ]
  },
  {
    "id": "scotch-rolls",
    "branch": "chancery",
    "title": "Scotch Rolls",
    "tnaCode": "C 71",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3631",
    "desc": "Enrolments of letters concerning Scotland and the Anglo-Scottish border: safe conducts, truces, garrisons, and the English administration in Scotland.",
    "volumes": [
      {"range":"1291–1377","editor":"Rotuli Scotiae (Vol. 1), Edward I–Edward III","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=Ty5KAQAAMAAJ"}]},
      {"range":"1377–1516","editor":"Rotuli Scotiae (Vol. 2), Richard II–Henry VIII","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/in.ernet.dli.2015.478156"}]}
    ]
  },
  {
    "id": "treaty-rolls",
    "branch": "chancery",
    "title": "Treaty and French Rolls",
    "tnaCode": "C 76",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3636",
    "desc": "Enrolments of diplomatic letters, treaties, safe conducts and, from the fourteenth century, the French Rolls of letters concerning English France.",
    "volumes": [
      {"range":"1234–1325","editor":"Calendar of Treaty Rolls (1955)","note":"No free online copy; out of print (HMSO)","links":[]},
      {"range":"1413–1422","editor":"Calendar of the French Rolls, Henry V (44th Report of the Deputy Keeper, 1884)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/annualreportdep06offigoog/page/n578"}]},
      {"range":"1422–1461","editor":"Calendar of the French Rolls, Henry VI (48th Report of the Deputy Keeper, 1887)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/annualreportdep05offigoog/page/n247"}]}
    ]
  },
  {
    "id": "chancery-warrants",
    "branch": "chancery",
    "title": "Chancery Warrants",
    "tnaCode": "C 81",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3641",
    "desc": "Warrants under the privy seal, signet and other seals instructing the chancellor to issue letters under the great seal.",
    "volumes": [
      {"range":"1244–1326","editor":"Calendar of Chancery Warrants (1927)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066345177"}]}
    ]
  },
  {
    "id": "inquisitions-ad-quod-damnum",
    "branch": "chancery",
    "tnaSearch": "C 143",
    "title": "Inquisitions ad quod Damnum",
    "tnaCode": "C 143",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3701",
    "desc": "Inquests into whether a proposed grant, such as an alienation into mortmain, a market, or a road diversion, would damage the Crown or others.",
    "volumes": [
      {"range":"1244–1344","editor":"List of Inquisitions ad quod Damnum, Part 1: 28 Henry III–18 Edward III (PRO Lists and Indexes 17)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listofinquisitio117newy"}]},
      {"range":"1345–1485","editor":"List of Inquisitions ad quod Damnum, Part 2: 19 Edward III–2 Richard III (PRO Lists and Indexes 22)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listofinquisitio222newy"}]}
    ]
  },
  {
    "id": "pipe-rolls",
    "branch": "exchequer",
    "title": "Pipe Rolls",
    "tnaCode": "E 372",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6749",
    "desc": "The great annual audit of sheriffs’ and other accountants’ debts to the Crown: farms of counties, scutages, aids, fines, amercements, and the issues of escheated lands.",
    "volumes": [
      {"range":"1129–1130","editor":"J. Hunter, Magnum Rotulum Scaccarii, 31 Henry I (1833)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/magnumrotulumsc00huntgoog"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=uu9OAAAAcAAJ"}]},
      {"range":"1129–1130","editor":"J. A. Green, The Great Roll of the Pipe for 31 Henry I (Pipe Roll Society, 2012)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"1155–1158","editor":"J. Hunter, The Great Rolls of the Pipe, 2–4 Henry II (1844)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924028014920"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=udd3MVLYkXkC"}]},
      {"range":"1158–1159","editor":"The Great Roll of the Pipe, 5 Henry II (Pipe Roll Society 1)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety01pipeuoft"}]},
      {"range":"1159–1160","editor":"The Great Roll of the Pipe, 6 Henry II (Pipe Roll Society 2)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety02pipeuoft"}]},
      {"range":"1160–1161","editor":"The Great Roll of the Pipe, 7 Henry II (Pipe Roll Society 4)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety04pipeuoft"}]},
      {"range":"1161–1162","editor":"The Great Roll of the Pipe, 8 Henry II (Pipe Roll Society 5)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety05pipeuoft"}]},
      {"range":"1162–1163","editor":"The Great Roll of the Pipe, 9 Henry II (Pipe Roll Society 6)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety06pipeuoft"}]},
      {"range":"1163–1164","editor":"The Great Roll of the Pipe, 10 Henry II (Pipe Roll Society 7)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety07pipeuoft"}]},
      {"range":"1164–1165","editor":"The Great Roll of the Pipe, 11 Henry II (Pipe Roll Society 8)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety08pipeuoft"}]},
      {"range":"1165–1166","editor":"The Great Roll of the Pipe, 12 Henry II (Pipe Roll Society 9)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety09pipeuoft"}]},
      {"range":"1166–1167","editor":"The Great Roll of the Pipe, 13 Henry II (Pipe Roll Society 11)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety11pipeuoft"}]},
      {"range":"1167–1168","editor":"The Great Roll of the Pipe, 14 Henry II (Pipe Roll Society 12)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/greatrollofpipef1218grea"}]},
      {"range":"1168–1169","editor":"The Great Roll of the Pipe, 15 Henry II (Pipe Roll Society 13)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety13pipeuoft"}]},
      {"range":"1169–1170","editor":"The Great Roll of the Pipe, 16 Henry II (Pipe Roll Society 15)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety15pipeuoft"}]},
      {"range":"1170–1171","editor":"The Great Roll of the Pipe, 17 Henry II (Pipe Roll Society 16)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety16pipeuoft"}]},
      {"range":"1171–1172","editor":"The Great Roll of the Pipe, 18 Henry II (Pipe Roll Society 18)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety18pipeuoft"}]},
      {"range":"1172–1173","editor":"The Great Roll of the Pipe, 19 Henry II (Pipe Roll Society 19)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety19pipeuoft"}]},
      {"range":"1173–1174","editor":"The Great Roll of the Pipe, 20 Henry II (Pipe Roll Society 21)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety21pipeuoft"}]},
      {"range":"1174–1175","editor":"The Great Roll of the Pipe, 21 Henry II (Pipe Roll Society 22)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety22pipeuoft"}]},
      {"range":"1175–1176","editor":"The Great Roll of the Pipe, 22 Henry II (Pipe Roll Society 25)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety25pipeuoft"}]},
      {"range":"1176–1177","editor":"The Great Roll of the Pipe, 23 Henry II (Pipe Roll Society 26)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety26pipeuoft"}]},
      {"range":"1177–1178","editor":"The Great Roll of the Pipe, 24 Henry II (Pipe Roll Society 27)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety27pipeuoft"}]},
      {"range":"1178–1179","editor":"The Great Roll of the Pipe, 25 Henry II (Pipe Roll Society 28)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety28pipeuoft"}]},
      {"range":"1179–1180","editor":"The Great Roll of the Pipe, 26 Henry II (Pipe Roll Society 29)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety29pipeuoft"}]},
      {"range":"1180–1181","editor":"The Great Roll of the Pipe, 27 Henry II (Pipe Roll Society 30)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety30pipeuoft"}]},
      {"range":"1181–1182","editor":"The Great Roll of the Pipe, 28 Henry II (Pipe Roll Society 31)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety31pipeuoft"}]},
      {"range":"1182–1183","editor":"The Great Roll of the Pipe, 29 Henry II (Pipe Roll Society 32)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety32pipeuoft"}]},
      {"range":"1183–1184","editor":"The Great Roll of the Pipe, 30 Henry II (Pipe Roll Society 33)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety33pipeuoft"}]},
      {"range":"1184–1185","editor":"The Great Roll of the Pipe, 31 Henry II (Pipe Roll Society 34)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety34pipeuoft"}]},
      {"range":"1185–1186","editor":"The Great Roll of the Pipe, 32 Henry II (Pipe Roll Society 36)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/hists59413167"}]},
      {"range":"1186–1187","editor":"The Great Roll of the Pipe, 33 Henry II (Pipe Roll Society 37)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety37pipeuoft"}]},
      {"range":"1189–1190","editor":"J. Hunter, The Great Roll of the Pipe, 1 Richard I (1844)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924028014946"}]},
      {"range":"1200–1201","editor":"J. Hunter, Rotulus Cancellarii, 3 John (Chancellor’s Roll, 1833)","tnaCode":"E 352","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C6729","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotuluscancella00commgoog"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=njwLAAAAYAAJ"}]},
      {"range":"1214–1215","editor":"Pipe Roll 17 John and Praestita Roll 14–18 John (Pipe Roll Society NS 37, 1964)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"1217–1224","editor":"Pipe Rolls 2–8 Henry III (Pipe Roll Society, 1972–2007)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"1241–1242","editor":"H. L. Cannon, The Great Roll of the Pipe for 26 Henry III (1918)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/greatrollpipefo00canngoog"}]},
      {"range":"Other years","editor":"Further Pipe Roll Society editions (Richard I–Henry III)","links":[{"type":"web","label":"Pipe Roll Society publications","url":"https://piperollsociety.co.uk/full-list-of-publications"}]},
      {"range":"Original rolls","editor":"Images of E 372 on AALT, by reign (TNA piece numbers)","links":[{"type":"aalt","label":"Hen III · 69–116","url":"http://aalt.law.uh.edu/HenryIII.html"},{"type":"aalt","label":"Edw I · 117–153","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 153–171","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 172–194","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 194–222","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 223–244","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 245–258","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 258–267","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 268–306","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 306–328","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Ric III · 328–330","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 331–354","url":"http://aalt.law.uh.edu/HenryVII.html"}]}
    ]
  },
  {
    "id": "originalia-rolls",
    "branch": "exchequer",
    "title": "Originalia Rolls",
    "tnaCode": "E 371",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6748",
    "desc": "Exchequer copies of Chancery enrolments (fines, grants, and commitments) sent so that the sums due to the Crown could be levied.",
    "volumes": [
      {"range":"1216–1327","editor":"Rotulorum Originalium in Curia Scaccarii Abbreviatio (Vol. 1, 1805)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/umn.31951002359935i"}]},
      {"range":"1327–1377","editor":"Rotulorum Originalium in Curia Scaccarii Abbreviatio (Vol. 2, 1810)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/nyp.33433004875518"}]}
    ]
  },
  {
    "id": "receipt-issue-rolls",
    "branch": "exchequer",
    "title": "Receipt and Issue Rolls",
    "tnaCode": "E 401",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6767",
    "desc": "Day-by-day records of money received into and paid out of the Exchequer of Receipt, recording payments to royal servants, creditors, and suppliers. The warrants authorising payments (E 404) are described individually in TNA’s catalogue.",
    "extraTna": [
      {
        "code": "E 404",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6770"
      }
    ],
    "tnaSearch": "E 404",
    "tnaSearchLabel": "E 404 (Warrants for Issues)",
    "volumes": [
      {"range":"1219–1222","editor":"Receipt Rolls 4, 5 and 6 Henry III (Pipe Roll Society NS 52, 2003)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"1223–1224","editor":"Receipt Rolls 7 and 8 Henry III (Pipe Roll Society NS 55)","note":"No free online copy; out of print","links":[]},
      {"range":"1241–1242","editor":"Receipt and Issue Rolls 26 Henry III (Pipe Roll Society NS 49)","note":"No free online copy; out of print","links":[]},
      {"range":"1216–1461","editor":"F. Devon, Issues of the Exchequer, Henry III–Henry VI (1837)","tnaCode":"E 403","tnaUrl":"https://discovery.nationalarchives.gov.uk/details/r/C6769","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/issuesexchequer00exchgoog"}]}
    ]
  },
  {
    "id": "red-book",
    "branch": "exchequer",
    "title": "Red and Black Books of the Exchequer",
    "tnaCode": "E 164",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6609",
    "desc": "Exchequer registers of precedents. The Red Book (thirteenth century) includes the Cartae Baronum of 1166, scutage lists, and serjeanties; the Black Book (Liber Niger Scaccarii) also preserves the 1166 returns.",
    "volumes": [
      {"range":"Red Book, Part 1","editor":"H. Hall, The Red Book of the Exchequer (Rolls Series 99, 1896)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112105152195"}]},
      {"range":"Red Book, Part 2","editor":"H. Hall, The Red Book of the Exchequer (Rolls Series 99, 1896)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.35112105152203"}]},
      {"range":"Red Book, Part 3","editor":"H. Hall, The Red Book of the Exchequer (Rolls Series 99, 1896)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/hvd.32044014618128"}]},
      {"range":"Liber Niger, Vol. 1","editor":"T. Hearne, Liber Niger Scaccarii (1774)","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=5xMwAAAAYAAJ"}]},
      {"range":"Liber Niger, Vol. 2","editor":"T. Hearne, Liber Niger Scaccarii (1774)","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=cdBIAAAAcAAJ"}]}
    ]
  },
  {
    "id": "book-of-fees",
    "branch": "exchequer",
    "title": "Book of Fees (Testa de Nevill)",
    "tnaCode": "E 164",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6609",
    "desc": "Returns of inquiries into knights’ fees, serjeanties, and tenures in chief made for the Crown in the thirteenth century.",
    "volumes": [
      {"range":"Henry III–Edward I","editor":"Testa de Nevill sive Liber Feodorum (Record Commission, 1807)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015039388007"}]},
      {"range":"1198–1242","editor":"Liber Feodorum: The Book of Fees, Part 1 (1920)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/liberfeodorumboo01grea"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015011272922"}]},
      {"range":"1242–1293","editor":"Liber Feodorum: The Book of Fees, Part 2 (1923)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/dul1.ark:/13960/t2t527n72"}]},
      {"range":"Index","editor":"Liber Feodorum: The Book of Fees, Part 3: Index (1931)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066343503"}]}
    ]
  },
  {
    "id": "taxation",
    "branch": "exchequer",
    "title": "Lay and Clerical Taxation",
    "tnaCode": "E 179",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6624",
    "desc": "Assessments and accounts for direct taxes on moveables, incomes, and persons, with the national valuations of clerical income.",
    "volumes": [
      {"range":"1188–1688","editor":"The National Archives, E 179 database of tax records","links":[{"type":"web","label":"E 179 database","url":"https://www.nationalarchives.gov.uk/e179/"}]},
      {"range":"1225, 1232","editor":"Lay Subsidy Rolls 1225 and 1232 (Pipe Roll Society NS 45, 1983)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"1291–1292","editor":"Taxatio Ecclesiastica Angliae et Walliae auctoritate P. Nicholai IV (Record Commission, 1802)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/10213244bsb"},{"type":"web","label":"Taxatio database","url":"https://hridigital.shef.ac.uk/taxatio/"}]},
      {"range":"1340–1341","editor":"Nonarum Inquisitiones in Curia Scaccarii, Edward III (Record Commission, 1807)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/india.history.resource.105840"}]},
      {"range":"1377–1381","editor":"C. C. Fenwick, The Poll Taxes of 1377, 1379 and 1381 (3 vols, British Academy, 1998–2005)","note":"No free online copy","links":[]}
    ]
  },
  {
    "id": "exchequer-of-the-jews",
    "branch": "exchequer",
    "title": "Exchequer of the Jews",
    "tnaCode": "E 9",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6509",
    "desc": "Plea rolls of the court that handled Jewish debts, bonds, tallages, and litigation between Jews and Christians until the Expulsion of 1290.",
    "volumes": [
      {"range":"1220–1284","editor":"J. M. Rigg, Select Pleas, Starrs and Other Records from the Rolls of the Exchequer of the Jews (Selden Society 15, 1902)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/b24874954"},{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/hvd.32044020413092"}]},
      {"range":"1218–1272","editor":"J. M. Rigg, Calendar of the Plea Rolls of the Exchequer of the Jews, Vol. 1, Henry III (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/calendarplearol00britgoog"},{"type":"web","label":"Frankfurt University Library (Vols. 1–3)","url":"https://sammlungen.ub.uni-frankfurt.de/freimann/885146"}]},
      {"range":"1273–1275","editor":"J. M. Rigg, Calendar of the Plea Rolls of the Exchequer of the Jews, Vol. 2, Edward I (1910)","links":[{"type":"web","label":"Frankfurt University Library (Vols. 1–3)","url":"https://sammlungen.ub.uni-frankfurt.de/freimann/885146"}]},
      {"range":"1275–1277","editor":"H. Jenkinson, Calendar of the Plea Rolls of the Exchequer of the Jews, Vol. 3, Edward I (1929)","links":[{"type":"web","label":"Frankfurt University Library (Vols. 1–3)","url":"https://sammlungen.ub.uni-frankfurt.de/freimann/885146"}]},
      {"range":"1272, 1275–1277","editor":"H. G. Richardson, Calendar of the Plea Rolls of the Exchequer of the Jews, Vol. 4, Henry III and Edward I (Jewish Historical Society of England, 1972)","note":"No free online copy","links":[]},
      {"range":"1277–1279","editor":"S. Cohen, Plea Rolls of the Exchequer of the Jews, Vol. 5, Edward I (Jewish Historical Society of England, 1992)","note":"No free online copy","links":[]},
      {"range":"1279–1281","editor":"P. Brand, Plea Rolls of the Exchequer of the Jews, Vol. 6, Edward I (Jewish Historical Society of England, 2005)","note":"No free online copy","links":[]}
    ]
  },
  {
    "id": "domesday",
    "branch": "exchequer",
    "title": "Domesday Book",
    "tnaCode": "E 31",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6530",
    "desc": "The great survey of 1086, recording landholders, resources, and values for most of England, kept in the Exchequer’s Treasury of the Receipt.",
    "volumes": [
      {"range":"1086","editor":"Open Domesday: searchable map and folio images","links":[{"type":"web","label":"Open Domesday","url":"https://opendomesday.org/"}]},
      {"range":"1086","editor":"The National Archives research guide, with online access to Domesday","links":[{"type":"web","label":"TNA Domesday guide","url":"https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/domesday-book/"}]}
    ]
  },
  {
    "id": "feudal-aids",
    "branch": "exchequer",
    "title": "Feudal Aids",
    "desc": "Inquisitions and Assessments relating to Feudal Aids, 1284–1431: county-by-county returns of fees and holders drawn from several Exchequer series, including Kirkby’s Quest (1284–5), the Nomina Villarum (1316) and the aid of 1346.",
    "volumes": [
      {"range":"1284–1431","editor":"Inquisitions and Assessments relating to Feudal Aids (Vol. 1, 1899)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/inquisitionsasse01grea"}]},
      {"range":"1284–1431","editor":"Inquisitions and Assessments relating to Feudal Aids (Vol. 2, 1900)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/inquisitionsasse02grea"}]},
      {"range":"1284–1431","editor":"Inquisitions and Assessments relating to Feudal Aids (Vol. 3, 1904)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/inquisitionsasse03grea"}]},
      {"range":"1284–1431","editor":"Inquisitions and Assessments relating to Feudal Aids (Vol. 4, 1906)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/inquisitionsasse04grea"}]},
      {"range":"1284–1431","editor":"Inquisitions and Assessments relating to Feudal Aids (Vol. 5, 1908)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/cu31924091765945"}]},
      {"range":"1284–1431","editor":"Inquisitions and Assessments relating to Feudal Aids (Vol. 6, 1920)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/inquisitionsasse06grea"}]}
    ]
  },
  {
    "id": "cartae-antiquae",
    "branch": "chancery",
    "title": "Cartae Antiquae",
    "tnaCode": "C 52",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3612",
    "desc": "Rolls of copies of royal charters, mostly of the twelfth and early thirteenth centuries, compiled in the Chancery and Exchequer as a register of earlier grants.",
    "volumes": [
      {"range":"Rolls 1–10","editor":"The Cartae Antiquae Rolls 1–10 (Pipe Roll Society NS 17)","note":"No free online copy; out of print","links":[]},
      {"range":"Rolls 11–20","editor":"The Cartae Antiquae Rolls 11–20 (Pipe Roll Society NS 33)","note":"No free online copy; out of print","links":[]}
    ]
  },
  {
    "id": "chancery-miscellanea",
    "branch": "chancery",
    "title": "Chancery Miscellanea",
    "tnaCode": "C 47",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3608",
    "tnaSearch": "C 47",
    "desc": "An artificial collection of loose Chancery documents: diplomatic papers, household and wardrobe material, files of writs and inquisitions, ecclesiastical returns, and much else separated from their original series.",
    "volumes": [
      {"range":"c.1216–1702","editor":"No published calendar; items are described individually in TNA’s catalogue (search above)","links":[]}
    ]
  },
  {
    "id": "statute-rolls",
    "branch": "chancery",
    "title": "Statute Rolls",
    "tnaCode": "C 74",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3634",
    "desc": "The Chancery’s enrolments of statutes agreed in parliament. The texts themselves are printed in Statutes of the Realm.",
    "volumes": [
      {"range":"1277–1469","editor":"Statutes of the Realm (Record Commission, 1810–28)","links":[]}
    ]
  },
  {
    "id": "extents-for-debts",
    "branch": "chancery",
    "title": "Extents for Debts",
    "tnaCode": "C 131",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3689",
    "tnaSearch": "C 131",
    "desc": "Inquisitions and extents of the lands and goods of debtors under the statutes merchant and staple, valuing property seized to satisfy recognizances of debt.",
    "volumes": [
      {"range":"1316–c.1660","editor":"No published calendar; items are described individually in TNA’s catalogue (search above)","links":[]}
    ]
  },
  {
    "id": "ancient-deeds",
    "branch": "chancery",
    "title": "Ancient Deeds",
    "tnaCode": "C 146",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3704",
    "extraTna": [
      {
        "code": "E 40",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6539"
      },
      {
        "code": "E 326",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6705"
      },
      {
        "code": "E 210",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6655"
      }
    ],
    "tnaSearch": [
      "C 146",
      "E 40",
      "E 326",
      "E 210"
    ],
    "tnaSearchLabel": "Ancient Deed (series A–D)",
    "desc": "Private charters, leases, bonds, and other deeds that came into royal hands through forfeiture, escheat, purchase, and the Dissolution: series A (E 40), B (E 326), C (C 146), and D (E 210).",
    "volumes": [
      {"range":"Series A–D","editor":"A Descriptive Catalogue of Ancient Deeds, Vols. 1–6 (1890–1915), searchable text on British History Online (free)","links":[{"type":"bho","label":"Vol. 1","url":"https://www.british-history.ac.uk/ancient-deeds/vol1"},{"type":"bho","label":"Vol. 2","url":"https://www.british-history.ac.uk/ancient-deeds/vol2"},{"type":"bho","label":"Vol. 3","url":"https://www.british-history.ac.uk/ancient-deeds/vol3"},{"type":"bho","label":"Vol. 4","url":"https://www.british-history.ac.uk/ancient-deeds/vol4"},{"type":"bho","label":"Vol. 5","url":"https://www.british-history.ac.uk/ancient-deeds/vol5"},{"type":"bho","label":"Vol. 6","url":"https://www.british-history.ac.uk/ancient-deeds/vol6"}]},
      {"range":"Series A–D","editor":"A Descriptive Catalogue of Ancient Deeds, Vols. 1–6, page scans","links":[{"type":"ia","label":"Vol. 1","url":"https://archive.org/details/descriptivecatal01greauoft"},{"type":"ia","label":"Vol. 2","url":"https://archive.org/details/descriptivecatal02greauoft"},{"type":"ia","label":"Vol. 3","url":"https://archive.org/details/descriptivecatal03greauoft"},{"type":"ia","label":"Vol. 4","url":"https://archive.org/details/descriptivecatal04greauoft"},{"type":"ia","label":"Vol. 5","url":"https://archive.org/details/descriptivecatal05greauoft"},{"type":"ia","label":"Vol. 6","url":"https://archive.org/details/descriptivecatal06greauoft"}]}
    ]
  },
  {
    "id": "parliamentary-writs",
    "branch": "chancery",
    "title": "Parliamentary Writs and Returns",
    "tnaCode": "C 219",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3751",
    "desc": "Writs summoning parliament and military service, with the sheriffs’ returns naming the knights of the shire and burgesses elected.",
    "volumes": [
      {"range":"1272–1307","editor":"F. Palgrave, The Parliamentary Writs and Writs of Military Summons, Vol. 1, Edward I (1827)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/parliamentary-writs-1"}]},
      {"range":"1307–1327","editor":"F. Palgrave, The Parliamentary Writs, Vol. 2, Division 1: abstract and calendar of returns, Edward II (1830)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/parliamentary-writs-2-1"}]},
      {"range":"1307–1327","editor":"F. Palgrave, The Parliamentary Writs, Vol. 2, Division 2: transcripts and appendix, Edward II (1830)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/parliamentary-writs-2-2"}]},
      {"range":"1272–1327","editor":"F. Palgrave, The Parliamentary Writs, Vol. 2, Division 3: alphabetical digest and index (1834)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/india.history.resource.75390"}]},
      {"range":"1213–1702","editor":"Members of Parliament: Return to Two Orders of the House of Commons, Part 1, Parliaments of England 1213–1702 (1878)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015027611063"}]}
    ]
  },
  {
    "id": "memoranda-rolls",
    "branch": "exchequer",
    "title": "Memoranda Rolls",
    "tnaCode": "E 159",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6604",
    "extraTna": [
      {
        "code": "E 368",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6745"
      }
    ],
    "desc": "The working records of the King’s Remembrancer (E 159) and Lord Treasurer’s Remembrancer (E 368): enrolled writs, accounts, recognizances, and process against Crown debtors.",
    "volumes": [
      {"range":"1199–1200","editor":"The Memoranda Roll for Michaelmas 1 John (Pipe Roll Society NS 21)","note":"No free online copy; out of print","links":[]},
      {"range":"1207–1208","editor":"The Memoranda Roll of 10 John (Pipe Roll Society NS 31)","note":"No free online copy; out of print","links":[]},
      {"range":"1230–1231","editor":"The Memoranda Roll of the King’s Remembrancer, Michaelmas 1230–Trinity 1231 (Pipe Roll Society NS 11)","note":"No free online copy; out of print","links":[]},
      {"range":"1326–1327","editor":"Calendar of Memoranda Rolls (Exchequer), Michaelmas 1326–Michaelmas 1327 (HMSO, 1968)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015081365713"}]},
      {"range":"Original rolls","editor":"Images of E 159 (King’s Remembrancer) on AALT, by reign (TNA piece numbers)","links":[{"type":"aalt","label":"Hen III · 1, 3–12, 15–47","url":"http://aalt.law.uh.edu/HenryIII.html"},{"type":"aalt","label":"Edw I · 47–80","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 81–103","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 103–125","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 125–153","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 153–175","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 176–189","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 189–199","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 199–237","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 238–259","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Ric III · 260–261","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 262–288","url":"http://aalt.law.uh.edu/HenryVII.html"}]},
      {"range":"Original rolls","editor":"Images of E 368 (Lord Treasurer’s Remembrancer) on AALT, by reign (TNA piece numbers)","links":[{"type":"aalt","label":"Hen III · 1–46","url":"http://aalt.law.uh.edu/HenryIII.html"},{"type":"aalt","label":"Edw I · 46–77","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 78–99","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 99–121","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 121–149","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 149–171","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 172–185","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 185–194","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 195–203, 205–233","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 234–256","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Ric III · 256–258","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 259–282","url":"http://aalt.law.uh.edu/HenryVII.html"}]}
    ]
  },
  {
    "id": "accounts-various",
    "branch": "exchequer",
    "title": "Accounts Various",
    "tnaCode": "E 101",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6548",
    "tnaSearch": "E 101",
    "desc": "Particulars of account submitted to the Exchequer: wardrobe and household books, building works, armies and navies, purveyance, and the Great Wardrobe. Items are described individually in TNA’s catalogue.",
    "volumes": [
      {"range":"Henry III","editor":"Roll of Divers Accounts for the Early Years of Henry III, with escheat and wardrobe rolls (Pipe Roll Society NS 44)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"Henry III","editor":"Wardrobe Accounts of Henry III (Pipe Roll Society NS 58)","links":[{"type":"buy","label":"Buy from the Pipe Roll Society","url":"https://piperollsociety.co.uk/available-volumes"}]},
      {"range":"Selected categories","editor":"Images of E 101 on AALT: butlerage, the Jews, works, and thirteenth-century wardrobe and household","links":[{"type":"aalt","label":"AALT E 101","url":"http://aalt.law.uh.edu/E101.html"}]},
      {"range":"1299–1300","editor":"Liber Quotidianus Contrarotulatoris Garderobae, 28 Edward I (Society of Antiquaries, 1787)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/liberquotidianu00tophgoog"}]},
      {"range":"1285–1289","editor":"B. F. and C. R. Byerly, Records of the Wardrobe and Household, 1285–1286 and 1286–1289 (HMSO)","note":"No free online copy","links":[]},
      {"range":"1272–1345","editor":"A. R. Bell, C. Brooks and T. K. Moore, Accounts of the English Crown with the Italian Merchant Societies (List and Index Society 331)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/331.html"}]}
    ]
  },
  {
    "id": "rotuli-de-dominabus",
    "branch": "exchequer",
    "title": "Rotuli de Dominabus",
    "tnaCode": "E 198",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6643",
    "desc": "The 1185 inquest into widows, heirs, and heiresses in the king’s gift across twelve counties, recording ages, children, and the value of their lands.",
    "volumes": [
      {"range":"1185","editor":"S. Grimaldi, Rotuli de Dominabus et Pueris et Puellis (1830)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotulidedominab00offigoog"}]},
      {"range":"1185","editor":"J. H. Round, Rotuli de Dominabus et Pueris et Puellis de XII Comitatibus (Pipe Roll Society 35, 1913)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety35pipeuoft"}]}
    ]
  },
  {
    "id": "exchequer-of-pleas",
    "branch": "exchequer",
    "title": "Exchequer of Pleas",
    "tnaCode": "E 13",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6512",
    "desc": "Plea rolls of the Exchequer acting as a court: suits over Crown debts and revenue, actions by Exchequer officials and their privileged litigants, and recognizances enrolled for security.",
    "volumes": [
      {"range":"Original rolls","editor":"Images of E 13 on AALT, by reign (TNA piece numbers)","links":[{"type":"aalt","label":"Hen III · 1","url":"http://aalt.law.uh.edu/HenryIII.html"},{"type":"aalt","label":"Edw I · 2–29","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 30–53","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 54–74","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 74–96","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 97–115","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 116–128","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 128–135","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 136–146","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 147–167","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Edw V · 168","url":"http://aalt.law.uh.edu/EdwardV.html"},{"type":"aalt","label":"Ric III · 169–170","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 171–185","url":"http://aalt.law.uh.edu/HenryVII.html"}]}
    ]
  },
  {
    "id": "foreign-accounts",
    "branch": "exchequer",
    "title": "Foreign Accounts",
    "tnaCode": "E 364",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6741",
    "desc": "Accounts audited by the Exchequer but kept off the Pipe Rolls: customs collectors, keepers of works, and royal officials abroad (E 364), with the enrolled wardrobe and household accounts in their own series (E 361).",
    "extraTna": [
      {
        "code": "E 361",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6738"
      }
    ],
    "volumes": [
      {"range":"Original rolls","editor":"Images of E 364 on AALT, by reign (TNA piece numbers)","links":[{"type":"aalt","label":"Edw III (1327–48) · 123","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 2–11, 123","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 12–34","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 34–47","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 47–56","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 57–94","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 95–116, 119","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Ric III · 117–120","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 119–120","url":"http://aalt.law.uh.edu/HenryVII.html"}]}
    ]
  },
  {
    "id": "customs-accounts",
    "branch": "exchequer",
    "title": "Customs Accounts",
    "tnaCode": "E 122",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6568",
    "extraTna": [
      {
        "code": "E 356",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6733"
      }
    ],
    "tnaSearch": "E 122",
    "desc": "Particulars of account from the collectors of customs in each port (E 122), and the enrolled customs accounts (E 356): wool, cloth, wine, and general merchandise, often naming merchants and ships.",
    "volumes": [
      {"range":"1279–1509","editor":"S. Jenks, The Enrolled Customs Accounts (E 356, E 372, E 364), Parts 1–14 (List and Index Society; Part 12 is the calendar)","links":[{"type":"buy","label":"Part 1","url":"https://www.listandindexsociety.org.uk/publications/303.html"},{"type":"buy","label":"Part 2","url":"https://www.listandindexsociety.org.uk/publications/306.html"},{"type":"buy","label":"Part 3","url":"https://www.listandindexsociety.org.uk/publications/307.html"},{"type":"buy","label":"Part 4","url":"https://www.listandindexsociety.org.uk/publications/313.html"},{"type":"buy","label":"Part 5","url":"https://www.listandindexsociety.org.uk/publications/314.html"},{"type":"buy","label":"Part 6","url":"https://www.listandindexsociety.org.uk/publications/319.html"},{"type":"buy","label":"Part 7","url":"https://www.listandindexsociety.org.uk/publications/324.html"},{"type":"buy","label":"Part 8","url":"https://www.listandindexsociety.org.uk/publications/334.html"},{"type":"buy","label":"Part 9","url":"https://www.listandindexsociety.org.uk/publications/341.html"},{"type":"buy","label":"Part 10","url":"https://www.listandindexsociety.org.uk/publications/344.html"},{"type":"buy","label":"Part 11","url":"https://www.listandindexsociety.org.uk/publications/345.html"},{"type":"buy","label":"Part 12","url":"https://www.listandindexsociety.org.uk/publications/348.html"},{"type":"buy","label":"Part 13","url":"https://www.listandindexsociety.org.uk/publications/370.html"},{"type":"buy","label":"Part 14","url":"https://www.listandindexsociety.org.uk/publications/371.html"}]},
      {"range":"1480–1481","editor":"H. S. Cobb, The Overseas Trade of London: Exchequer Customs Accounts, 1480–1 (London Record Society 27)","links":[{"type":"bho","label":"British History Online","url":"https://www.british-history.ac.uk/london-record-soc/vol27"}]},
      {"range":"c.1200–1327","editor":"A. Bell, C. Brooks and P. Dryburgh, Advance Contracts for the Sale of Wool (List and Index Society 315)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/315.html"}]}
    ]
  },
  {
    "id": "escheators-accounts",
    "branch": "exchequer",
    "title": "Escheators’ Accounts",
    "tnaCode": "E 136",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6582",
    "extraTna": [
      {
        "code": "E 357",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C6734"
      }
    ],
    "tnaSearch": [
      "E 136",
      "E 357"
    ],
    "tnaSearchLabel": "E 136 and E 357",
    "desc": "Particulars (E 136) and enrolled accounts (E 357) of the escheators who took custody of lands and goods falling to the Crown by death, minority, or forfeiture: the financial counterpart of the inquisitions post mortem.",
    "volumes": [
      {"range":"c.1216–1625","editor":"No published calendar; items are described individually in TNA’s catalogue (search above)","links":[]}
    ]
  },
  {
    "id": "sheriffs-accounts",
    "branch": "exchequer",
    "title": "Sheriffs’ Accounts",
    "tnaCode": "E 199",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6644",
    "tnaSearch": "E 199",
    "desc": "Particulars of sheriffs’ accounts, petitions, and related papers supporting the county farms and debts audited on the Pipe Rolls.",
    "volumes": [
      {"range":"c.1216–1509","editor":"No published calendar; items are described individually in TNA’s catalogue (search above)","links":[]}
    ]
  },
  {
    "id": "extents-and-inquisitions",
    "branch": "exchequer",
    "title": "Extents and Inquisitions",
    "tnaCode": "E 143",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6588",
    "tnaSearch": "E 143",
    "desc": "Exchequer inquisitions and extents of lands and goods: forfeitures, debts to the Crown, alien priories, and other valuations returned into the King’s Remembrancer’s office.",
    "volumes": [
      {"range":"c.1216–1509","editor":"No published calendar; items are described individually in TNA’s catalogue (search above)","links":[]}
    ]
  },
  {
    "id": "diplomatic-documents",
    "branch": "exchequer",
    "title": "Diplomatic Documents",
    "tnaCode": "E 30",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6529",
    "tnaSearch": "E 30",
    "desc": "Treaties, letters, and instruments exchanged with foreign rulers and the papacy, kept in the Treasury of the Receipt.",
    "volumes": [
      {"range":"c.1100–1625","editor":"List of Diplomatic Documents, Scottish Documents and Papal Bulls (PRO Lists and Indexes 49; reprinted 1963)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listofdiplomatic00newy_1"}]},
      {"range":"1101–1272","editor":"P. Chaplais, Diplomatic Documents preserved in the Public Record Office, Vol. 1 (HMSO, 1964)","note":"No free online copy","links":[]}
    ]
  },
  {
    "id": "pardon-rolls",
    "branch": "chancery",
    "title": "Pardon Rolls",
    "tnaCode": "C 67",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3627",
    "tnaSearch": "C 67",
    "desc": "Supplementary Patent Rolls, chiefly the rolls of general and individual pardons issued under the great seal, naming thousands of recipients with their places and occupations.",
    "volumes": [
      {"range":"1437–1447","editor":"H. Kleineke, Pardon Rolls of Henry VI, Part 1 (List and Index Society 373)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/373.html"}]},
      {"range":"1462–1467","editor":"H. Kleineke, Pardon Rolls of Edward IV, 1462–67 (List and Index Society 364)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/364.html"}]},
      {"range":"1468–1471","editor":"H. Kleineke, Pardon Rolls of Edward IV and Henry VI, 1468–71 (List and Index Society 360)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/360.html"}]},
      {"range":"1471–1483","editor":"H. Kleineke, Pardon Rolls of Edward IV, 1471–83 (List and Index Society 361)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/361.html"}]},
      {"range":"1484–1485","editor":"H. Kleineke, Pardon Rolls of Richard III (List and Index Society 365)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/365.html"}]},
      {"range":"1485–1509","editor":"H. Kleineke, Pardon Rolls of Henry VII (List and Index Society 368)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/368.html"}]}
    ]
  },
  {
    "id": "statute-merchant",
    "branch": "chancery",
    "title": "Statute Merchant and Staple Certificates",
    "tnaCode": "C 241",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C3773",
    "tnaSearch": "C 241",
    "desc": "Certificates sent into Chancery when a debtor defaulted on a loan recognised under the statutes merchant or staple, naming creditor, debtor, sum, and date. They lead to the extents in C 131 and are a key source for credit among merchants and gentry.",
    "volumes": [
      {"range":"1284–1509","editor":"No published calendar; items are described individually in TNA’s catalogue (search above)","links":[]}
    ]
  },
  {
    "id": "council-privy-seal",
    "branch": "exchequer",
    "title": "Council and Privy Seal Records",
    "tnaCode": "E 28",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6527",
    "tnaSearch": "E 28",
    "desc": "Warrants, minutes, petitions, and papers of the king’s council and privy seal office, preserved in the Treasury of the Receipt. Nicolas’s edition draws largely on this series together with British Library manuscripts.",
    "volumes": [
      {"range":"1386–1461","editor":"N. H. Nicolas, Proceedings and Ordinances of the Privy Council of England, Vols. 1–6 (Record Commission, 1834–37)","links":[{"type":"ia","label":"1386–1410","url":"https://archive.org/details/10281416bsb"},{"type":"ia","label":"1410–1422","url":"https://archive.org/details/10281417bsb"},{"type":"ia","label":"1422–1429","url":"https://archive.org/details/proceedingsando00commgoog"},{"type":"ia","label":"1429–1436","url":"https://archive.org/details/10281419bsb"},{"type":"ia","label":"1436–1443","url":"https://archive.org/details/10281420bsb"},{"type":"ia","label":"1443–1461","url":"https://archive.org/details/10281421bsb"}]}
    ]
  },
  {
    "id": "curia-regis-rolls",
    "branch": "courts",
    "title": "Curia Regis Rolls",
    "tnaCode": "KB 26",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C10030",
    "desc": "The early plea rolls of the king’s court, before the separate series of Common Pleas and King’s Bench: civil litigation over land, dower, and advowsons, and crown pleas, 1194–1272.",
    "order": 1,
    "volumes": [
      {"range":"Original rolls","editor":"Images of KB 26 on AALT, by reign (TNA piece numbers; some rolls missing)","links":[{"type":"aalt","label":"John · 60–61","url":"http://aalt.law.uh.edu/John.html"},{"type":"aalt","label":"Hen III · 114–234","url":"http://aalt.law.uh.edu/HenryIII.html"}]},
      {"range":"1194–1195","editor":"Three Rolls of the King’s Court in the Reign of Richard I (Pipe Roll Society 14, 1891)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/threerollsofking1418grea"}]},
      {"range":"1194–1199","editor":"F. Palgrave, Rotuli Curiae Regis, Vol. 1 (1835)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotulicuriregis06commgoog"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=AasDAAAAQAAJ"}]},
      {"range":"1199–1200","editor":"F. Palgrave, Rotuli Curiae Regis, Vol. 2 (1835)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/rotulicuriregis01commgoog"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=7P09AAAAcAAJ"}]},
      {"range":"Ric I–John","editor":"Curia Regis Rolls, Vol. 1 (1922)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015010565995"}]},
      {"range":"3–5 John","editor":"Curia Regis Rolls, Vol. 2 (1925)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344766"}]},
      {"range":"5–7 John","editor":"Curia Regis Rolls, Vol. 3 (1926)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344618"}]},
      {"range":"7–8 John","editor":"Curia Regis Rolls, Vol. 4 (1929)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/inu.30000006590693"}]},
      {"range":"8–10 John","editor":"Curia Regis Rolls, Vol. 5 (1931)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344923"}]},
      {"range":"11–14 John","editor":"Curia Regis Rolls, Vol. 6 (1932)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344774"}]},
      {"range":"15–16 John","editor":"Curia Regis Rolls, Vol. 7 (1935)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344626"}]},
      {"range":"3–4 Hen III","editor":"Curia Regis Rolls, Vol. 8 (1938)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344782"}]},
      {"range":"4–5 Hen III","editor":"Curia Regis Rolls, Vol. 9 (1952)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344931"}]},
      {"range":"5–6 Hen III","editor":"Curia Regis Rolls, Vol. 10 (1949)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066344634"}]},
      {"range":"7–9 Hen III","editor":"Curia Regis Rolls, Vol. 11 (1955)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066389803"}]},
      {"range":"9–10 Hen III","editor":"Curia Regis Rolls, Vol. 12 (1957)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066389811"}]},
      {"range":"1227–1230","editor":"Curia Regis Rolls, Vol. 13 (1959)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066389829"}]},
      {"range":"1230–1232","editor":"Curia Regis Rolls, Vol. 14 (1961)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066389837"}]},
      {"range":"1233–1237","editor":"Curia Regis Rolls, Vol. 15 (1972)","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015066389845"}]},
      {"range":"1237–1242","editor":"Curia Regis Rolls, Vol. 16 (HMSO, 1979)","note":"No free online copy","links":[]},
      {"range":"1242–1243","editor":"Curia Regis Rolls, Vol. 17 (HMSO, 1991)","note":"No free online copy","links":[]},
      {"range":"1243–1245","editor":"Curia Regis Rolls, Vol. 18","links":[{"type":"buy","label":"Buy from Boydell & Brewer","url":"https://boydellandbrewer.com/book/curia-regis-rolls-xviii-27-henry-iii-to-30-henry-iii-1243-45-hb/"}]},
      {"range":"1249–1250","editor":"Curia Regis Rolls, Vol. 19","links":[{"type":"buy","label":"Buy from Boydell & Brewer","url":"https://boydellandbrewer.com/book/curia-regis-rolls-preserved-in-the-public-record-office-xix-33-34-henry-iii-1249-1250-9780851159010/"}]},
      {"range":"1250","editor":"Curia Regis Rolls, Vol. 20","links":[{"type":"buy","label":"Buy from Boydell & Brewer","url":"https://boydellandbrewer.com/book/curia-regis-rolls-preserved-in-the-public-record-office-xx-34-35-henry-iii-1250-pdf/"}]},
      {"range":"1200–1225","editor":"F. W. Maitland, Select Pleas of the Crown, Vol. 1 (Selden Society 1, 1888)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/publicationssel01socigoog"}]},
      {"range":"1200–1203","editor":"W. P. Baildon, Select Civil Pleas, Vol. 1 (Selden Society 3, 1890)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectcivilpleas0003engl"}]},
      {"range":"1217–1239","editor":"F. W. Maitland, Bracton’s Note Book, Vols. 1–3 (1887)","links":[{"type":"ia","label":"Vol. 1","url":"https://archive.org/details/notebook01bracuoft"},{"type":"ia","label":"Vol. 2","url":"https://archive.org/details/notebook02bracuoft"},{"type":"ia","label":"Vol. 3","url":"https://archive.org/details/notebook03bracuoft"}]}
    ]
  },
  {
    "id": "common-pleas",
    "branch": "courts",
    "title": "Common Pleas Plea Rolls",
    "tnaCode": "CP 40",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C5417",
    "desc": "The plea rolls of the Court of Common Pleas at Westminster: the largest series of civil litigation, covering land, debt, trespass, and the enrolment of deeds and final concords.",
    "order": 2,
    "volumes": [
      {"range":"Original rolls","editor":"Images of CP 40 on AALT, by reign (TNA piece numbers; some rolls missing)","links":[{"type":"aalt","label":"Edw I · 1–164","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 169–264","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 268–356","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 357–466","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 466–554","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 555–608","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 609–646","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 647–800","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 801–883","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Edw V · 884–885","url":"http://aalt.law.uh.edu/EdwardV.html"},{"type":"aalt","label":"Ric III · 885–893","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 894–987","url":"http://aalt.law.uh.edu/HenryVII.html"}]},
      {"range":"Indexes","editor":"Modern indexes to CP 40 (in progress) and a name search of the rolls, 1349–1596","links":[{"type":"aalt","label":"AALT CP 40 indexes","url":"http://aalt.law.uh.edu/Indices/CP40Indices/CP40_Indices.html"},{"type":"web","label":"Medieval Genealogy CP 40 search","url":"https://www.medievalgenealogy.org.uk/aalt/cp40_search.php"}]},
      {"range":"1327–1328","editor":"Index of Placita de Banco, Parts 1–2 (PRO Lists and Indexes 32; reprinted 1963)","links":[{"type":"ia","label":"Part 1","url":"https://archive.org/details/indexofplacitade01newy"},{"type":"ia","label":"Part 2","url":"https://archive.org/details/indexofplacitade02newy"}]},
      {"range":"Ric I–Edw II","editor":"Placitorum Abbreviatio (Record Commission, 1811): abstracts from the plea rolls","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015014113313"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=f04MAQAAMAAJ"}]},
      {"range":"1200–1500","editor":"G. Wrottesley, Pedigrees from the Plea Rolls (1905)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/pedigreesfromple00wrotrich"}]}
    ]
  },
  {
    "id": "kings-bench",
    "branch": "courts",
    "title": "King’s Bench Plea Rolls",
    "tnaCode": "KB 27",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C10031",
    "desc": "The coram rege rolls of King’s Bench: civil pleas, crown pleas and appeals, error from lower courts, and proceedings on indictments sent up from the counties.",
    "order": 4,
    "volumes": [
      {"range":"Original rolls","editor":"Images of KB 27 on AALT, by reign (TNA piece numbers; some rolls missing)","links":[{"type":"aalt","label":"Edw I · 1–189","url":"http://aalt.law.uh.edu/EdwardI.html"},{"type":"aalt","label":"Edw II · 190–266","url":"http://aalt.law.uh.edu/EdwardII.html"},{"type":"aalt","label":"Edw III (1327–48) · 267–354","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 355–466","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 467–553","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 554–607","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 608–645","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 646–799","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 800–885","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Edw V · 886–887","url":"http://aalt.law.uh.edu/EdwardV.html"},{"type":"aalt","label":"Ric III · 888–896","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 897–990","url":"http://aalt.law.uh.edu/HenryVII.html"}]},
      {"range":"Indexes","editor":"Modern indexes to KB 27 (in progress), with the Medieval Genealogy index search","links":[{"type":"web","label":"KB 27 indexes","url":"https://www.medievalgenealogy.org.uk/aalt/aalt_contents.shtml#kb27"},{"type":"web","label":"AALT index search","url":"https://www.medievalgenealogy.org.uk/aalt/aalt_search.php"}]},
      {"range":"Ric I–Edw II","editor":"Placitorum Abbreviatio (Record Commission, 1811): abstracts from the plea rolls","links":[{"type":"hathi","label":"HathiTrust","url":"https://hdl.handle.net/2027/mdp.39015014113313"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=f04MAQAAMAAJ"}]}
    ]
  },
  {
    "id": "controlment-rolls",
    "branch": "courts",
    "title": "King’s Bench Controlment Rolls",
    "tnaCode": "KB 29",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C10033",
    "desc": "The Clerk of the Crown’s memoranda of process on indictments in King’s Bench: a running index to criminal business, appearances, and outcomes.",
    "order": 5,
    "volumes": [
      {"range":"Original rolls","editor":"Images of KB 29 on AALT, by reign (TNA piece numbers; some rolls missing)","links":[{"type":"aalt","label":"Edw III (1327–48) · 1–9","url":"http://aalt.law.uh.edu/EdwardIII.html"},{"type":"aalt","label":"Edw III (1349–77) · 11–29","url":"http://aalt.law.uh.edu/EdwardIIIB.html"},{"type":"aalt","label":"Ric II · 30–43","url":"http://aalt.law.uh.edu/RichardII.html"},{"type":"aalt","label":"Hen IV · 44–52","url":"http://aalt.law.uh.edu/HenryIV.html"},{"type":"aalt","label":"Hen V · 55, 63","url":"http://aalt.law.uh.edu/HenryV.html"},{"type":"aalt","label":"Hen VI · 56–91","url":"http://aalt.law.uh.edu/HenryVI.html"},{"type":"aalt","label":"Edw IV · 92–113","url":"http://aalt.law.uh.edu/EdwardIV.html"},{"type":"aalt","label":"Ric III · 114–115","url":"http://aalt.law.uh.edu/RichardIII.html"},{"type":"aalt","label":"Hen VII · 116–138","url":"http://aalt.law.uh.edu/HenryVII.html"}]}
    ]
  },
  {
    "id": "crown-pleas",
    "branch": "courts",
    "title": "Indictments, Coroners’ and Gaol Delivery Rolls",
    "tnaCode": "KB 9",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C10013",
    "extraTna": [
      {
        "code": "JUST 2",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C9978"
      },
      {
        "code": "JUST 3",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C9979"
      }
    ],
    "tnaSearch": [
      "KB 9",
      "JUST 2",
      "JUST 3"
    ],
    "tnaSearchLabel": "KB 9, JUST 2 and JUST 3",
    "desc": "The criminal records of medieval justice: indictment files sent into King’s Bench (KB 9), coroners’ inquests on sudden deaths (JUST 2), and the rolls of justices delivering county gaols (JUST 3).",
    "order": 6,
    "volumes": [
      {"range":"Original rolls","editor":"Images of KB 9, JUST 2 and JUST 3 on AALT, by reign","links":[{"type":"aalt","label":"Hen III","url":"http://aalt.law.uh.edu/Crim/crimH3.html"},{"type":"aalt","label":"Edw I","url":"http://aalt.law.uh.edu/Crim/crimE1.html"},{"type":"aalt","label":"Edw II","url":"http://aalt.law.uh.edu/Crim/crimE2.html"},{"type":"aalt","label":"Edw III","url":"http://aalt.law.uh.edu/Crim/crimE3.html"},{"type":"aalt","label":"Ric II","url":"http://aalt.law.uh.edu/Crim/crimR2.html"},{"type":"aalt","label":"Hen IV","url":"http://aalt.law.uh.edu/Crim/crimH4.html"},{"type":"aalt","label":"Hen V","url":"http://aalt.law.uh.edu/Crim/crimH5.html"},{"type":"aalt","label":"Hen VI","url":"http://aalt.law.uh.edu/Crim/crimH6.html"},{"type":"aalt","label":"Edw IV","url":"http://aalt.law.uh.edu/Crim/crimE4.html"},{"type":"aalt","label":"Hen VII","url":"http://aalt.law.uh.edu/Crim/crimH7.html"}]},
      {"range":"1265–1413","editor":"C. Gross, Select Cases from the Coroners’ Rolls (Selden Society 9, 1896)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectcasesfromc00seldrich"}]}
    ]
  },
  {
    "id": "justices-itinerant",
    "branch": "courts",
    "title": "Eyre, Assize and Other Justices’ Rolls",
    "tnaCode": "JUST 1",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C9977",
    "tnaSearch": "JUST 1",
    "desc": "Rolls of the justices in eyre, of assize, of oyer and terminer, and of trailbaston, arranged by county: civil and crown pleas, novel disseisin, and presentments of the hundreds.",
    "order": 7,
    "volumes": [
      {"range":"Original rolls","editor":"Images of JUST 1 on AALT, by reign and county","links":[{"type":"aalt","label":"Hen III","url":"http://aalt.law.uh.edu/JUST1/JUST1_H3b.html"},{"type":"aalt","label":"Edw I","url":"http://aalt.law.uh.edu/JUST1/JUST1_E1b.html"},{"type":"aalt","label":"Edw II","url":"http://aalt.law.uh.edu/JUST1/JUST1_E2b.html"},{"type":"aalt","label":"Edw III","url":"http://aalt.law.uh.edu/JUST1/JUST1_E3b.html"},{"type":"aalt","label":"Ric II","url":"http://aalt.law.uh.edu/JUST1/JUST1_R2b.html"},{"type":"aalt","label":"Hen IV","url":"http://aalt.law.uh.edu/JUST1/JUST1_H4b.html"},{"type":"aalt","label":"Hen V","url":"http://aalt.law.uh.edu/JUST1/JUST1_H5b.html"},{"type":"aalt","label":"Hen VI","url":"http://aalt.law.uh.edu/JUST1/JUST1_H6b.html"},{"type":"aalt","label":"Edw IV","url":"http://aalt.law.uh.edu/JUST1/JUST1_E4b.html"},{"type":"aalt","label":"Ric III","url":"http://aalt.law.uh.edu/JUST1/JUST1_R3b.html"},{"type":"aalt","label":"Hen VII","url":"http://aalt.law.uh.edu/JUST1/JUST1_H7b.html"},{"type":"aalt","label":"All rolls by number","url":"http://aalt.law.uh.edu/finder2.html"}]},
      {"range":"Edw I–Edw III","editor":"Placita de Quo Warranto (Record Commission, 1818)","links":[{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=2R9DAAAAcAAJ"}]},
      {"range":"1292–1333","editor":"W. C. Bolland, Select Bills in Eyre (Selden Society 30, 1914)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectbillsineyr00grearich"}]}
    ]
  },
  {
    "id": "feet-of-fines",
    "branch": "courts",
    "order": 3,
    "title": "Feet of Fines",
    "tnaCode": "CP 25/1",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C5391",
    "desc": "The court’s copies of final concords: fictitious suits used to convey land and settle titles, recording the parties, the property, and often the descent of an estate. Arranged by county.",
    "volumes": [
      {"range":"Original rolls","editor":"Images of CP 25/1 on AALT, by county and reign","links":[{"type":"aalt","label":"Ric I–Ric II","url":"http://aalt.law.uh.edu/CP25(1)a.html"},{"type":"aalt","label":"Hen IV–Hen VII","url":"http://aalt.law.uh.edu/CP25(1)b.html"}]},
      {"range":"1272–1509","editor":"Medieval Genealogy: free abstracts of published county editions, with links to the images","links":[{"type":"web","label":"Feet of Fines by county","url":"https://www.medievalgenealogy.org.uk/fines/counties.shtml"},{"type":"web","label":"About the project","url":"https://www.medievalgenealogy.org.uk/fines/index.shtml"}]},
      {"range":"1182–1196","editor":"Feet of Fines of the Reign of Henry II and of the First Seven Years of Richard I (Pipe Roll Society 17)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety17pipeuoft"}]},
      {"range":"1196–1197","editor":"Feet of Fines of the Seventh and Eighth Years of Richard I (Pipe Roll Society 20)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety20pipeuoft"}]},
      {"range":"1197–1198","editor":"Feet of Fines of the Ninth Year of Richard I (Pipe Roll Society 23)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety23pipeuoft"}]},
      {"range":"1198–1199","editor":"Feet of Fines of the Tenth Year of Richard I (Pipe Roll Society 24)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/piperollsociety24pipeuoft"}]}
    ]
  },
  {
    "id": "forest-eyres",
    "branch": "courts",
    "order": 8,
    "title": "Forest Eyres",
    "tnaCode": "E 32",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C6531",
    "tnaSearch": "E 32",
    "desc": "Rolls of the justices of the forest: pleas of vert and venison, regards, assarts and purprestures, and the administration of the royal forests.",
    "volumes": [
      {"range":"13th–14th c.","editor":"G. J. Turner, Select Pleas of the Forest (Selden Society 13, 1901)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectpleasoffor00grearich"}]}
    ]
  },
  {
    "id": "star-chamber",
    "branch": "courts",
    "order": 9,
    "title": "Star Chamber",
    "tnaCode": "STAC 1",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13670",
    "tnaSearch": "STAC 1",
    "desc": "Bills, answers, and depositions before the king’s council sitting in the Star Chamber under Henry VII: riots, forcible entries, maintenance, and abuses by local officers.",
    "volumes": [
      {"range":"1477–1509","editor":"I. S. Leadam, Select Cases before the King’s Council in the Star Chamber, Vol. 1 (Selden Society 16, 1903)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectcasesbefor0016engl"}]},
      {"range":"1243–1482","editor":"I. S. Leadam and J. F. Baldwin, Select Cases before the King’s Council (Selden Society 35, 1918)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectcasesbefor00englrich"}]}
    ]
  },
  {
    "id": "court-of-requests",
    "branch": "courts",
    "order": 10,
    "title": "Court of Requests",
    "tnaCode": "REQ 1",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13322",
    "extraTna": [
      {
        "code": "REQ 2",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C13323"
      }
    ],
    "tnaSearch": [
      "REQ 1",
      "REQ 2"
    ],
    "tnaSearchLabel": "REQ 1 and REQ 2",
    "desc": "The conciliar court for ‘poor men’s causes’ from 1493: order and decree books (REQ 1) and pleadings (REQ 2) in disputes over land, debts, and inheritance.",
    "volumes": [
      {"range":"1493–1538","editor":"L. Flannigan, Hearings of the Court of Requests (List and Index Society 366–367, 2023)","links":[{"type":"buy","label":"Buy from the List and Index Society","url":"https://www.listandindexsociety.org.uk/publications/366.html"}]},
      {"range":"1497–1569","editor":"I. S. Leadam, Select Cases in the Court of Requests (Selden Society 12, 1898)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/selectcasesinco00requgoog"}]}
    ]
  },
  {
    "id": "manorial-documents-register",
    "branch": "sc",
    "group": "Estate Records",
    "order": 1,
    "title": "Manorial Documents Register",
    "mdrSearch": true,
    "desc": "The national register of surviving manorial records (court rolls, accounts, surveys, maps) held in archives across England and Wales, not just at TNA. Search by manor name, with an optional county or parish.",
    "volumes": [
      {"range":"All periods","editor":"TNA’s guide to manorial documents and how to use the register","links":[{"type":"web","label":"TNA guide","url":"https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/manorial-documents-lordships-how-to-use-manorial-document-register/"},{"type":"web","label":"Full MDR search page","url":"https://discovery.nationalarchives.gov.uk/manor-search"}]}
    ]
  },
  {
    "id": "ministers-accounts",
    "branch": "sc",
    "group": "Estate Records",
    "order": 2,
    "title": "Ministers’ and Receivers’ Accounts",
    "tnaCode": "SC 6",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13524",
    "tnaSearch": "SC 6",
    "desc": "Annual accounts of reeves, bailiffs, and receivers for manors and estates in Crown hands through forfeiture, wardship, escheat, or vacancy, and for the lands of alien priories and the duchy of Cornwall.",
    "volumes": [
      {"range":"c.1200–1509","editor":"Described individually in TNA’s catalogue, usually by manor or place and date (search above)","links":[]}
    ]
  },
  {
    "id": "court-rolls",
    "branch": "sc",
    "group": "Estate Records",
    "order": 3,
    "title": "Court Rolls",
    "tnaCode": "SC 2",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13520",
    "tnaSearch": "SC 2",
    "desc": "Records of manorial courts and courts of hundreds and honours: tenancies and surrenders, heriots, fines, and the regulation of the manor’s agrarian life.",
    "volumes": [
      {"range":"All periods","editor":"List and Index of Court Rolls preserved in the Public Record Office (PRO Lists and Indexes; reprinted 1963)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listindexofcourt00newy"}]}
    ]
  },
  {
    "id": "rentals-and-surveys",
    "branch": "sc",
    "group": "Estate Records",
    "order": 4,
    "title": "Rentals and Surveys",
    "tnaCode": "SC 11",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13529",
    "extraTna": [
      {
        "code": "SC 12",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C13530"
      }
    ],
    "tnaSearch": [
      "SC 11",
      "SC 12"
    ],
    "tnaSearchLabel": "SC 11 and SC 12",
    "desc": "Extents, custumals, rentals, and surveys of individual manors and estates, kept as rolls (SC 11) and in portfolios (SC 12).",
    "volumes": [
      {"range":"All periods","editor":"List of Rentals and Surveys and Other Analogous Documents (PRO Lists and Indexes; reprinted 1963)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listofrentalssur00newy"}]}
    ]
  },
  {
    "id": "duchy-of-lancaster",
    "branch": "sc",
    "group": "Estate Records",
    "order": 5,
    "title": "Duchy of Lancaster Estate Records",
    "tnaCode": "DL 29",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C5983",
    "extraTna": [
      {
        "code": "DL 30",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C5984"
      }
    ],
    "tnaSearch": [
      "DL 29",
      "DL 30"
    ],
    "tnaSearchLabel": "DL 29 and DL 30",
    "desc": "Accounts of the duchy’s auditors, receivers, feodaries, and ministers (DL 29) and the court rolls of its manors and honours (DL 30), across the duchy’s estates in many counties.",
    "volumes": [
      {"range":"All periods","editor":"List of the Records of the Duchy of Lancaster (PRO Lists and Indexes; reprinted 1963)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listofrecordsofd00newy_1"}]}
    ]
  },
  {
    "id": "ancient-petitions",
    "branch": "sc",
    "group": "Petitions and Letters",
    "order": 6,
    "title": "Ancient Petitions",
    "tnaCode": "SC 8",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13526",
    "tnaSearch": "SC 8",
    "desc": "About 17,000 petitions to the king, council, and parliament from individuals, towns, and communities, with endorsed answers. A companion to the Parliament Rolls.",
    "volumes": [
      {"range":"Henry III–James I","editor":"Every petition is catalogued individually, and most have free downloadable images on Discovery (search above)","links":[]}
    ]
  },
  {
    "id": "ancient-correspondence",
    "branch": "sc",
    "group": "Petitions and Letters",
    "order": 7,
    "title": "Ancient Correspondence",
    "tnaCode": "SC 1",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13519",
    "tnaSearch": "SC 1",
    "desc": "Letters to and from the king, Chancery, and Exchequer: royal and official correspondence, newsletters, and reports, chiefly thirteenth to fifteenth century.",
    "volumes": [
      {"range":"1216–1272","editor":"W. W. Shirley, Royal and Other Historical Letters Illustrative of the Reign of Henry III, Vols. 1–2 (Rolls Series 27, 1862–66)","links":[{"type":"ia","label":"Vol. 1","url":"https://archive.org/details/royalotherhistor01shir"},{"type":"ia","label":"Vol. 2","url":"https://archive.org/details/royalandotherhi00shirgoog"}]},
      {"range":"1399–1404","editor":"F. C. Hingeston, Royal and Historical Letters during the Reign of Henry IV, Vol. 1 (Rolls Series 18, 1860)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/royalhistoricall01hing"}]}
    ]
  },
  {
    "id": "papal-bulls",
    "branch": "sc",
    "group": "Petitions and Letters",
    "order": 8,
    "title": "Papal Bulls",
    "tnaCode": "SC 7",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13525",
    "tnaSearch": "SC 7",
    "desc": "Bulls and other letters of the popes received by the English Crown: dispensations, confirmations, provisions, and diplomatic business.",
    "volumes": [
      {"range":"1131–1533","editor":"List of Diplomatic Documents, Scottish Documents and Papal Bulls (PRO Lists and Indexes 49; reprinted 1963)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/listofdiplomatic00newy_1"}]}
    ]
  },
  {
    "id": "parliament-proxies",
    "branch": "sc",
    "group": "Petitions and Letters",
    "order": 9,
    "title": "Exchequer Parliament Rolls and Proxies",
    "tnaCode": "SC 9",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13527",
    "extraTna": [
      {
        "code": "SC 10",
        "url": "https://discovery.nationalarchives.gov.uk/details/r/C13528"
      }
    ],
    "tnaSearch": [
      "SC 9",
      "SC 10"
    ],
    "tnaSearchLabel": "SC 9 and SC 10",
    "desc": "The Exchequer’s series of parliament rolls (1289–1322) and the letters by which lords and clergy appointed proxies to attend parliament in their absence (1263–1536).",
    "volumes": [
      {"range":"1263–1536","editor":"Described individually in TNA’s catalogue (search above); see also the Parliament Rolls on the Chancery tab","links":[]}
    ]
  },
  {
    "id": "hundred-rolls",
    "branch": "sc",
    "group": "Surveys",
    "order": 10,
    "title": "Hundred Rolls",
    "tnaCode": "SC 5",
    "tnaUrl": "https://discovery.nationalarchives.gov.uk/details/r/C13523",
    "tnaSearch": "SC 5",
    "desc": "Returns of the great royal inquests of 1255 and 1274–5 into royal rights and abuses, and the survey of 1279–80 recording landholding and tenants manor by manor.",
    "volumes": [
      {"range":"Henry III–Edward I","editor":"W. Illingworth, Rotuli Hundredorum, Vol. 1 (Record Commission, 1812)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/india.history.resource.74536"},{"type":"google","label":"Google Books","url":"https://books.google.com/books?id=_BtDAAAAcAAJ"}]},
      {"range":"Henry III–Edward I","editor":"W. Illingworth, Rotuli Hundredorum, Vol. 2 (Record Commission, 1818)","links":[{"type":"ia","label":"Internet Archive","url":"https://archive.org/details/india.history.resource.74668"}]},
      {"range":"County editions","editor":"Medieval Genealogy’s list of published county editions of the Hundred Rolls","links":[{"type":"web","label":"Medieval Genealogy","url":"https://www.medievalgenealogy.org.uk/sources/feudal.shtml"}]}
    ]
  }
];
