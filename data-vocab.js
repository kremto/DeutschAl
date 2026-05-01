// DeutschAL — deutschal.com
// © 2026 Kremtim Selimi

// Vocabulary & Placement Data

const PLACEMENT_QS = [
  {q:'Çfarë do të thotë "Guten Morgen"?',opts:['Mirëmbrëma','Mirëmëngjes','Natën e mirë','Mirëdita'],a:1,level:'A1'},
  {q:'Plotëso: Ich ___ Anna. (quhem)',opts:['bin','heiße','habe','gehe'],a:1,level:'A1'},
  {q:'Si thuhet "vëllai" gjermanisht?',opts:['der Sohn','die Schwester','der Bruder','das Kind'],a:2,level:'A1'},
  {q:'Çfarë do të thotë "Es regnet"?',opts:['Ka diell','Po bie borë','Po bie shi','Është ngrohtë'],a:2,level:'A1'},
  {q:'Si thuhet "Kam dy vëllezër" (Perfekt)?',opts:['Ich habe zwei Brüder','Ich bin zwei Brüder','Ich hatte zwei Brüder','Zwei Brüder ich habe'],a:0,level:'A1-A2'},
  {q:'Plotëso (Perfekt): Ich ___ gestern ins Kino gegangen.',opts:['habe','bin','hatte','war'],a:1,level:'A2'},
  {q:'Si thuhet "Ndonjëherë shkoj në palestër" gjermanisht?',opts:['Ich gehe nie ins Fitnessstudio','Manchmal gehe ich ins Fitnessstudio','Ich gehe immer ins Fitnessstudio','Ich muss ins Fitnessstudio gehen'],a:1,level:'A2'},
  {q:'Çfarë do të thotë "Ich würde gern kommen"?',opts:['Dua të vij','Do të vija me dëshirë','Mund të vij','Duhet të vij'],a:1,level:'B1'},
  {q:'Si formohet fjalia relative: "Das ist der Mann, ___ ich kenne"?',opts:['der','den','dem','dessen'],a:1,level:'B1'},
  {q:'Si thuhet "Megjithëse ishte i lodhur, ai punoi" gjermanisht?',opts:['Weil er müde war, arbeitete er','Obwohl er müde war, arbeitete er','Wenn er müde war, arbeitete er','Damit er müde war, arbeitete er'],a:1,level:'B1'},
];

// ════════════════════════════════════════════════════════════════
// FJALORI I MADH — MASTER VOCABULARY EXPANSION
// ~2600 fjalë të reja të organizuara sipas temës dhe nivelit
// Formati: { de, sq, type, ex }
// ════════════════════════════════════════════════════════════════

const VOCAB_EXPANSION = {

// ════════════════════════════════════════════════════════════════
// NIVELI A1 — SHTESË (~600 fjalë të reja)
// ════════════════════════════════════════════════════════════════
A1_extra: [

  // ── Folje bazike të përditshme ──
  {de:"gehen",sq:"të shkosh",type:"Folje",ex:"Ich gehe nach Hause. — Shkoj në shtëpi."},
  {de:"kommen",sq:"të vish",type:"Folje",ex:"Kommst du heute? — Vjen sot?"},
  {de:"machen",sq:"të bësh",type:"Folje",ex:"Was machst du? — Çfarë bën?"},
  {de:"sehen",sq:"të shohësh",type:"Folje",ex:"Ich sehe das Meer. — Shoh detin."},
  {de:"hören",sq:"të dëgjosh",type:"Folje",ex:"Ich höre Musik. — Dëgjoj muzikë."},
  {de:"sprechen",sq:"të flasësh",type:"Folje",ex:"Sprichst du Deutsch? — Flet gjermanisht?"},
  {de:"lesen",sq:"të lexosh",type:"Folje",ex:"Ich lese ein Buch. — Lexoj një libër."},
  {de:"schreiben",sq:"të shkruash",type:"Folje",ex:"Ich schreibe eine E-Mail. — Shkruaj email."},
  {de:"spielen",sq:"të luash",type:"Folje",ex:"Die Kinder spielen draußen. — Fëmijët luajnë jashtë."},
  {de:"trinken",sq:"të pish",type:"Folje",ex:"Ich trinke Kaffee. — Pi kafe."},
  {de:"essen",sq:"të hash",type:"Folje",ex:"Was isst du gern? — Çfarë ha me dëshirë?"},
  {de:"schlafen",sq:"të flesh",type:"Folje",ex:"Ich schlafe acht Stunden. — Fle tetë orë."},
  {de:"wohnen",sq:"të jetosh / banosh",type:"Folje",ex:"Ich wohne in Berlin. — Jetoj në Berlin."},
  {de:"lernen",sq:"të mësosh",type:"Folje",ex:"Ich lerne jeden Tag. — Mësoj çdo ditë."},
  {de:"arbeiten",sq:"të punosh",type:"Folje",ex:"Er arbeitet viel. — Ai punon shumë."},
  {de:"kaufen",sq:"të blesh",type:"Folje",ex:"Ich kaufe Brot. — Blej bukë."},
  {de:"nehmen",sq:"të marrësh",type:"Folje",ex:"Ich nehme den Bus. — Marr autobusin."},
  {de:"geben",sq:"të japësh",type:"Folje",ex:"Gib mir das Buch! — Jepmë librin!"},
  {de:"finden",sq:"të gjesh",type:"Folje",ex:"Kannst du meinen Schlüssel finden? — Mund ta gjesh çelësin tim?"},
  {de:"helfen",sq:"të ndihmosh",type:"Folje",ex:"Kannst du mir helfen? — Mund të më ndihmosh?"},
  {de:"wissen",sq:"të dish",type:"Folje",ex:"Ich weiß es nicht. — Nuk e di."},
  {de:"denken",sq:"të mendosh",type:"Folje",ex:"Ich denke oft an dich. — Mendoj shpesh për ty."},
  {de:"verstehen",sq:"të kuptosh",type:"Folje",ex:"Ich verstehe das nicht. — Nuk e kuptoj."},
  {de:"warten",sq:"të presësh",type:"Folje",ex:"Warte bitte! — Prit ju lutem!"},
  {de:"öffnen",sq:"të hapësh",type:"Folje",ex:"Öffne das Fenster! — Hap dritaren!"},
  {de:"schließen",sq:"të mbyllësh",type:"Folje",ex:"Schließ die Tür! — Mbylle derën!"},
  {de:"stehen",sq:"të qëndrosh në këmbë",type:"Folje",ex:"Ich stehe vor dem Bahnhof. — Qëndroj para stacionit."},
  {de:"sitzen",sq:"të ulesh",type:"Folje",ex:"Sitz bitte! — Ulu ju lutem!"},
  {de:"liegen",sq:"të shtrihesh / gjendesh",type:"Folje",ex:"Das Buch liegt auf dem Tisch. — Libri gjendet mbi tavolinë."},
  {de:"laufen",sq:"të vraposh",type:"Folje",ex:"Ich laufe jeden Morgen. — Vrapoj çdo mëngjes."},

  // ── Mbiemra bazikë ──
  {de:"schön",sq:"i/e bukur",type:"Mbiemër",ex:"Das ist sehr schön! — Kjo është shumë e bukur!"},
  {de:"gut",sq:"i/e mirë",type:"Mbiemër",ex:"Das Essen ist gut. — Ushqimi është i mirë."},
  {de:"schlecht",sq:"i/e keqe",type:"Mbiemër",ex:"Das Wetter ist schlecht. — Moti është i keq."},
  {de:"neu",sq:"i/e re",type:"Mbiemër",ex:"Das ist ein neues Auto. — Kjo është makinë e re."},
  {de:"alt",sq:"i/e vjetër / i moshuar",type:"Mbiemër",ex:"Das Haus ist sehr alt. — Shtëpia është shumë e vjetër."},
  {de:"jung",sq:"i/e ri/re",type:"Mbiemër",ex:"Sie ist jung und energisch. — Ajo është e re dhe energjike."},
  {de:"lang",sq:"i/e gjatë",type:"Mbiemër",ex:"Der Weg ist sehr lang. — Rruga është shumë e gjatë."},
  {de:"kurz",sq:"i/e shkurtër",type:"Mbiemër",ex:"Das ist eine kurze Antwort. — Kjo është përgjigje e shkurtër."},
  {de:"hoch",sq:"i/e lartë",type:"Mbiemër",ex:"Der Berg ist sehr hoch. — Mali është shumë i lartë."},
  {de:"niedrig",sq:"i/e ulët",type:"Mbiemër",ex:"Die Temperatur ist niedrig. — Temperatura është e ulët."},
  {de:"schwer",sq:"i/e rëndë / i vështirë",type:"Mbiemër",ex:"Diese Aufgabe ist schwer. — Kjo detyrë është e vështirë."},
  {de:"leicht",sq:"i/e lehtë",type:"Mbiemër",ex:"Das ist leicht! — Kjo është e lehtë!"},
  {de:"schnell",sq:"i/e shpejtë",type:"Mbiemër",ex:"Das Auto ist sehr schnell. — Makina është shumë e shpejtë."},
  {de:"langsam",sq:"i/e ngadaltë",type:"Mbiemër",ex:"Bitte sprich langsam! — Ju lutem fol ngadalë!"},
  {de:"laut",sq:"i/e lartë (zë) / me zhurmë",type:"Mbiemër",ex:"Die Musik ist zu laut. — Muzika është shumë e lartë."},
  {de:"leise",sq:"i/e qetë / me zë të ulët",type:"Mbiemër",ex:"Bitte sprich leiser! — Fol më qetë!"},
  {de:"sauber",sq:"i/e pastër",type:"Mbiemër",ex:"Das Zimmer ist sauber. — Dhoma është e pastër."},
  {de:"schmutzig",sq:"i/e pistë",type:"Mbiemër",ex:"Die Hände sind schmutzig. — Duart janë të pista."},
  {de:"müde",sq:"i/e lodhur",type:"Mbiemër",ex:"Ich bin sehr müde heute. — Jam shumë i lodhur sot."},
  {de:"hungrig",sq:"i/e uritur",type:"Mbiemër",ex:"Ich bin hungrig! — Jam i uritur!"},
  {de:"durstig",sq:"i/e etur",type:"Mbiemër",ex:"Ich bin durstig. — Jam i etur."},
  {de:"glücklich",sq:"i/e lumtur",type:"Mbiemër",ex:"Ich bin sehr glücklich! — Jam shumë i lumtur!"},
  {de:"traurig",sq:"i/e trishtuar",type:"Mbiemër",ex:"Warum bist du traurig? — Pse je i trishtuar?"},
  {de:"richtig",sq:"i/e saktë / i drejtë",type:"Mbiemër",ex:"Das ist richtig! — Kjo është e saktë!"},
  {de:"falsch",sq:"i/e gabuar",type:"Mbiemër",ex:"Das ist falsch. — Kjo është e gabuar."},
  {de:"frei",sq:"i/e lirë",type:"Mbiemër",ex:"Bist du morgen frei? — Je i lirë nesër?"},
  {de:"busy / beschäftigt",sq:"i/e zënë",type:"Mbiemër",ex:"Ich bin beschäftigt. — Jam i zënë."},
  {de:"kalt",sq:"i/e ftohtë",type:"Mbiemër",ex:"Das Wasser ist kalt. — Uji është i ftohtë."},
  {de:"heiß",sq:"i nxehtë",type:"Mbiemër",ex:"Der Kaffee ist heiß. — Kafeja është e nxehtë."},
  {de:"interessant",sq:"interesant",type:"Mbiemër",ex:"Das Buch ist sehr interessant. — Libri është shumë interesant."},
  {de:"langweilig",sq:"i mërzitshëm",type:"Mbiemër",ex:"Der Film ist langweilig. — Filmi është i mërzitshëm."},

  // ── Numrat ordinalë + data ──
  {de:"erste",sq:"i/e parë",type:"Numër",ex:"Das ist mein erster Tag. — Ky është dita ime e parë."},
  {de:"zweite",sq:"i/e dytë",type:"Numër",ex:"Ich wohne im zweiten Stock. — Banoj në katin e dytë."},
  {de:"dritte",sq:"i/e tretë",type:"Numër",ex:"Der dritte April. — Tri prilli."},
  {de:"vierte",sq:"i/e katërt",type:"Numër",ex:"Im vierten Monat — Në muajin e katërt."},
  {de:"fünfzigste",sq:"i/e pesëdhjetë",type:"Numër",ex:"Sein fünfzigster Geburtstag. — Ditëlindja e tij e pesëdhjetë."},
  {de:"der Geburtstag",sq:"ditëlindja",type:"Datë",ex:"Wann ist dein Geburtstag? — Kur është ditëlindja jote?"},
  {de:"das Jahr",sq:"viti",type:"Kohë",ex:"Dieses Jahr lerne ich Deutsch. — Këtë vit mësoj gjermanisht."},
  {de:"der Monat",sq:"muaji",type:"Kohë",ex:"In diesem Monat... — Këtë muaj..."},
  {de:"die Woche",sq:"java",type:"Kohë",ex:"Diese Woche bin ich beschäftigt. — Këtë javë jam i zënë."},
  {de:"die Stunde",sq:"ora (60 min)",type:"Kohë",ex:"Eine Stunde = 60 Minuten. — Një orë = 60 minuta."},
  {de:"die Minute",sq:"minuta",type:"Kohë",ex:"Warte fünf Minuten! — Prit pesë minuta!"},
  {de:"die Sekunde",sq:"sekonda",type:"Kohë",ex:"In wenigen Sekunden... — Në pak sekonda..."},

  // ── Muajt ──
  {de:"Januar",sq:"janar",type:"Muaj",ex:"Im Januar ist es kalt. — Në janar është ftohtë."},
  {de:"Februar",sq:"shkurt",type:"Muaj",ex:"Februar hat 28 Tage. — Shkurti ka 28 ditë."},
  {de:"März",sq:"mars",type:"Muaj",ex:"Im März beginnt der Frühling. — Në mars fillon pranvera."},
  {de:"April",sq:"prill",type:"Muaj",ex:"Im April regnet es oft. — Në prill bie shpesh shi."},
  {de:"Mai",sq:"maj",type:"Muaj",ex:"Im Mai ist es schön. — Në maj është e bukur."},
  {de:"Juni",sq:"qershor",type:"Muaj",ex:"Im Juni beginnt der Sommer. — Në qershor fillon vera."},
  {de:"Juli",sq:"korrik",type:"Muaj",ex:"Juli ist der heißeste Monat. — Korriku është muaji më i nxehtë."},
  {de:"August",sq:"gusht",type:"Muaj",ex:"Im August bin ich im Urlaub. — Në gusht jam në pushime."},
  {de:"September",sq:"shtator",type:"Muaj",ex:"Im September beginnt die Schule. — Në shtator fillon shkolla."},
  {de:"Oktober",sq:"tetor",type:"Muaj",ex:"Oktober ist ein schöner Monat. — Tetori është muaj i bukur."},
  {de:"November",sq:"nëntor",type:"Muaj",ex:"Im November ist es grau. — Në nëntor është gri."},
  {de:"Dezember",sq:"dhjetor",type:"Muaj",ex:"Im Dezember gibt es Weihnachten. — Në dhjetor ka Krishtlindje."},

  // ── Vendi dhe drejtimi ──
  {de:"hier",sq:"këtu",type:"Vend",ex:"Ich bin hier. — Jam këtu."},
  {de:"dort / da",sq:"atje",type:"Vend",ex:"Das Café ist dort. — Kafeneja është atje."},
  {de:"überall",sq:"kudo",type:"Vend",ex:"Überall gibt es Touristen. — Kudo ka turistë."},
  {de:"nirgendwo",sq:"askund",type:"Vend",ex:"Er ist nirgendwo zu finden. — Ai nuk gjendet askund."},
  {de:"neben",sq:"pranë / ngjitur",type:"Vend",ex:"Das Café ist neben dem Bahnhof. — Kafeneja është pranë stacionit."},
  {de:"hinter",sq:"pas",type:"Vend",ex:"Das Auto ist hinter dem Haus. — Makina është pas shtëpisë."},
  {de:"vor",sq:"para",type:"Vend",ex:"Ich stehe vor der Tür. — Qëndroj para derës."},
  {de:"zwischen",sq:"midis",type:"Vend",ex:"Das Hotel ist zwischen zwei Straßen. — Hoteli është midis dy rrugëve."},
  {de:"gegenüber",sq:"përballë",type:"Vend",ex:"Die Bank ist gegenüber. — Banka është përballë."},
  {de:"die Straße",sq:"rruga",type:"Vend",ex:"Welche Straße ist das? — Cila rrugë është kjo?"},
  {de:"der Platz",sq:"sheshi",type:"Vend",ex:"Der Marktplatz ist groß. — Sheshi i tregut është i madh."},
  {de:"die Brücke",sq:"ura",type:"Vend",ex:"Die Brücke über den Fluss. — Ura mbi lumë."},
  {de:"der Fluss",sq:"lumi",type:"Natyrë",ex:"Der Rhein ist ein langer Fluss. — Rhini është lumë i gjatë."},
  {de:"der Berg",sq:"mali",type:"Natyrë",ex:"Die Alpen sind hohe Berge. — Alpet janë male të larta."},
  {de:"das Meer",sq:"deti",type:"Natyrë",ex:"Im Sommer fahren wir ans Meer. — Në verë shkojmë në det."},
  {de:"der See",sq:"liqeni",type:"Natyrë",ex:"Der See ist sehr schön. — Liqeni është shumë i bukur."},
  {de:"der Wald",sq:"pylli",type:"Natyrë",ex:"Ich gehe gern im Wald spazieren. — Shëtis me dëshirë në pyll."},
  {de:"das Feld",sq:"fusha",type:"Natyrë",ex:"Das grüne Feld im Frühling. — Fusha e gjelbër në pranverë."},

  // ── Shtëpia dhe orenditë ──
  {de:"die Treppe",sq:"shkallet",type:"Shtëpi",ex:"Die Treppe führt nach oben. — Shkallet çojnë lart."},
  {de:"der Aufzug / Lift",sq:"ashensori",type:"Shtëpi",ex:"Der Aufzug ist kaputt. — Ashensori është i prishur."},
  {de:"das Fenster",sq:"dritarja",type:"Shtëpi",ex:"Mach das Fenster auf! — Hap dritaren!"},
  {de:"die Tür",sq:"dera",type:"Shtëpi",ex:"Die Tür ist offen. — Dera është e hapur."},
  {de:"die Wand",sq:"muri",type:"Shtëpi",ex:"Das Bild hängt an der Wand. — Tabloja varet në mur."},
  {de:"der Boden",sq:"dyshemeja / toka",type:"Shtëpi",ex:"Der Boden ist glatt. — Dyshemeja është e lëmuar."},
  {de:"die Decke",sq:"tavani",type:"Shtëpi",ex:"Die Decke ist weiß. — Tavani është i bardhë."},
  {de:"der Herd",sq:"sobë / furra e gatimit",type:"Mobilje",ex:"Der Herd hat vier Platten. — Soba ka katër grila."},
  {de:"der Kühlschrank",sq:"frigoriferi",type:"Mobilje",ex:"Der Kühlschrank ist voll. — Frigoriferi është plot."},
  {de:"die Waschmaschine",sq:"lavatriçe",type:"Mobilje",ex:"Die Waschmaschine läuft. — Lavatriçja punon."},
  {de:"die Dusche",sq:"dushi",type:"Mobilje",ex:"Ich dusche jeden Morgen. — Marr dush çdo mëngjes."},
  {de:"die Badewanne",sq:"vaska",type:"Mobilje",ex:"Die Badewanne ist groß. — Vaska është e madhe."},
  {de:"das Regal",sq:"rafti",type:"Mobilje",ex:"Die Bücher stehen im Regal. — Librat ndodhen në raft."},
  {de:"der Teppich",sq:"qilimi",type:"Mobilje",ex:"Der Teppich ist weich. — Qilimi është i butë."},
  {de:"die Lampe",sq:"llamba",type:"Mobilje",ex:"Die Lampe gibt gutes Licht. — Llamba jep dritë të mirë."},
  {de:"der Spiegel",sq:"pasqyra",type:"Mobilje",ex:"Ich schaue in den Spiegel. — Shikoj në pasqyrë."},
  {de:"das Kissen",sq:"jastëku",type:"Mobilje",ex:"Das Kissen ist weich. — Jastëku është i butë."},
  {de:"die Decke (bett)",sq:"jorgan / batanije",type:"Mobilje",ex:"Ich brauche eine warme Decke. — Më duhet jorgan i ngrohtë."},

  // ── Ushqimi i detajuar ──
  {de:"der Apfel",sq:"molla",type:"Frut",ex:"Ein Apfel am Tag hält den Arzt fern. — Një mollë në ditë e mban mjekun larg."},
  {de:"die Banane",sq:"banana",type:"Frut",ex:"Bananen haben viel Kalium. — Bananet kanë shumë kalium."},
  {de:"die Orange",sq:"portokalli",type:"Frut",ex:"Eine frische Orange. — Portokall i freskët."},
  {de:"die Erdbeere",sq:"luleshtrydha",type:"Frut",ex:"Im Sommer gibt es viele Erdbeeren. — Në verë ka shumë luleshtrydhe."},
  {de:"die Traube",sq:"rrushi",type:"Frut",ex:"Weintrauben aus Südtirol. — Rrush nga Tiroli i Jugut."},
  {de:"die Tomate",sq:"domatja",type:"Perime",ex:"Tomaten sind rot und rund. — Domatet janë të kuqe dhe të rrumbullakëta."},
  {de:"die Kartoffel",sq:"patata",type:"Perime",ex:"Kartoffeln mit Butter. — Patate me gjalpë."},
  {de:"die Zwiebel",sq:"qepa",type:"Perime",ex:"Die Zwiebel macht die Augen nass. — Qepa bën sytë të lagësht."},
  {de:"der Knoblauch",sq:"hudhra",type:"Perime",ex:"Knoblauch gibt viel Geschmack. — Hudhra jep shumë shije."},
  {de:"der Reis",sq:"orizi",type:"Ushqim",ex:"Reis mit Hühnchen. — Oriz me pulë."},
  {de:"die Nudeln",sq:"makaronat",type:"Ushqim",ex:"Nudeln mit Tomatensoße. — Makarona me salcë domateje."},
  {de:"das Hähnchen",sq:"pula",type:"Mish",ex:"Gebratenes Hähnchen. — Pulë e skuqur."},
  {de:"das Schweinefleisch",sq:"mishi i derrit",type:"Mish",ex:"Schweinefleisch ist billig. — Mishi i derrit është i lirë."},
  {de:"das Rindfleisch",sq:"mishi i viçit",type:"Mish",ex:"Rindfleisch vom Metzger. — Mish viçi nga kasapi."},
  {de:"das Lammfleisch",sq:"mishi i qingjit",type:"Mish",ex:"Lammfleisch ist delikat. — Mishi i qingjit është delikat."},
  {de:"das Salz",sq:"kripë",type:"Erëza",ex:"Salz und Pfeffer. — Kripë dhe piper."},
  {de:"der Pfeffer",sq:"piperi",type:"Erëza",ex:"Ein bisschen Pfeffer, bitte. — Pak piper, ju lutem."},
  {de:"das Öl",sq:"vaji",type:"Erëza",ex:"Olivenöl ist gesund. — Vaji i ullirit është i shëndetshëm."},
  {de:"der Essig",sq:"uthulla",type:"Erëza",ex:"Essig und Öl für den Salat. — Uthull dhe vaj për sallate."},
  {de:"die Marmelade",sq:"reçeli",type:"Ushqim",ex:"Brot mit Marmelade. — Bukë me reçel."},
  {de:"der Honig",sq:"mjalti",type:"Ushqim",ex:"Tee mit Honig. — Çaj me mjaltë."},
  {de:"das Mehl",sq:"mielli",type:"Ushqim",ex:"Mehl für den Kuchen. — Miell për tortë."},
  {de:"der Kuchen",sq:"ëmbëlsira / keku",type:"Ushqim",ex:"Ich backe einen Kuchen. — Piqëm kek."},
  {de:"das Eis",sq:"akullore / akulli",type:"Ushqim",ex:"Ein Eis im Sommer. — Akullore në verë."},
  {de:"die Schokolade",sq:"çokollata",type:"Ushqim",ex:"Ich liebe Schokolade! — Dua çokollatën!"},
  {de:"das Frühstück",sq:"mëngjesi",type:"Vakt",ex:"Das Frühstück ist fertig. — Mëngjesi është gati."},
  {de:"das Mittagessen",sq:"dreka",type:"Vakt",ex:"Was gibt es zum Mittagessen? — Çfarë ka për drekë?"},
  {de:"das Abendessen",sq:"darka",type:"Vakt",ex:"Wir essen um 19 Uhr zu Abend. — Hamë darkë në orën 19."},
  {de:"der Snack",sq:"meze / atë çka hahet midis vakteve",type:"Vakt",ex:"Ein kleiner Snack zwischendurch. — Një meze e vogël ndërmjet."},

  // ── Veshjet e zgjeruara ──
  {de:"die Jacke",sq:"xhaketa",type:"Veshje",ex:"Eine warme Jacke für den Winter. — Xhaketa e ngrohtë për dimër."},
  {de:"der Pullover",sq:"triko / pulovër",type:"Veshje",ex:"Ein warmer Pullover. — Pulovër e ngrohtë."},
  {de:"das T-Shirt",sq:"bluzë / fanellë",type:"Veshje",ex:"Ein weißes T-Shirt. — Bluzë e bardhë."},
  {de:"der Rock",sq:"fusta",type:"Veshje",ex:"Ein kurzer Rock im Sommer. — Fust e shkurtër në verë."},
  {de:"die Socken",sq:"çorapet",type:"Veshje",ex:"Wo sind meine Socken? — Ku janë çorapet e mia?"},
  {de:"die Unterwäsche",sq:"të brendshmet",type:"Veshje",ex:"Saubere Unterwäsche jeden Tag. — Të brendshme të pastra çdo ditë."},
  {de:"der Gürtel",sq:"rripi",type:"Veshje",ex:"Ein Ledergürtel. — Rrip lëkure."},
  {de:"die Mütze",sq:"kapelë / kësulë",type:"Veshje",ex:"Eine warme Mütze im Winter. — Kësulë e ngrohtë në dimër."},
  {de:"der Schal",sq:"shall",type:"Veshje",ex:"Ein langer Schal. — Shall i gjatë."},
  {de:"die Handschuhe",sq:"dorezat",type:"Veshje",ex:"Handschuhe gegen die Kälte. — Doreza kundër të ftohtit."},
  {de:"der Anzug",sq:"kostumi",type:"Veshje",ex:"Ein eleganter Anzug. — Kostum elegant."},
  {de:"das Kleid",sq:"fustani",type:"Veshje",ex:"Ein schönes Kleid. — Fustan i bukur."},
  {de:"die Badehose",sq:"brekë banje",type:"Veshje",ex:"Die Badehose für den Strand. — Brekët e banjës për plazh."},
  {de:"der Pyjama",sq:"pijamaja",type:"Veshje",ex:"Ich trage Pyjama beim Schlafen. — Vesh pijama kur fle."},

  // ── Trupi dhe shëndeti bazik ──
  {de:"der Arm",sq:"krahu",type:"Trup",ex:"Mein Arm tut weh. — Krahut më dhemb."},
  {de:"die Hand",sq:"dora",type:"Trup",ex:"Schütteln wir uns die Hände! — Le të shtrëngojmë duart!"},
  {de:"das Bein",sq:"këmba",type:"Trup",ex:"Mein Bein ist müde. — Këmba ime është e lodhur."},
  {de:"der Fuß",sq:"këmba (pjesa e poshtme)",type:"Trup",ex:"Meine Füße schmerzen. — Këmbët e mia dhembin."},
  {de:"das Auge",sq:"syri",type:"Trup",ex:"Sie hat blaue Augen. — Ajo ka sy blu."},
  {de:"das Ohr",sq:"veshi",type:"Trup",ex:"Mein Ohr tut weh. — Veshi më dhemb."},
  {de:"die Nase",sq:"hunda",type:"Trup",ex:"Meine Nase läuft. — Hunda rrjedh."},
  {de:"der Mund",sq:"goja",type:"Trup",ex:"Öffne den Mund! — Hap gojën!"},
  {de:"der Zahn",sq:"dhëmbi",type:"Trup",ex:"Der Zahn tut weh. — Dhëmbi dhemb."},
  {de:"die Schulter",sq:"supi",type:"Trup",ex:"Meine Schulter schmerzt. — Supi më dhemb."},
  {de:"der Rücken",sq:"shpina",type:"Trup",ex:"Ich habe Rückenschmerzen. — Kam dhimbje shpine."},
  {de:"der Magen",sq:"stomaku",type:"Trup",ex:"Mein Magen tut weh. — Stomaku më dhemb."},
  {de:"das Herz",sq:"zemra",type:"Trup",ex:"Das Herz schlägt schnell. — Zemra rrah shpejt."},
  {de:"die Lunge",sq:"mushkëritë",type:"Trup",ex:"Rauchen schadet der Lunge. — Duhani dëmton mushkëritë."},
  {de:"das Blut",sq:"gjaku",type:"Trup",ex:"Die Blutgruppe ist A+. — Grupi i gjakut është A+."},

  // ── Kafshë ──
  {de:"der Hund",sq:"qeni",type:"Kafshë",ex:"Der Hund bellt laut. — Qeni leh me zë të lartë."},
  {de:"die Katze",sq:"macja",type:"Kafshë",ex:"Die Katze schläft viel. — Macja fle shumë."},
  {de:"der Vogel",sq:"zogu",type:"Kafshë",ex:"Der Vogel singt schön. — Zogu këndon bukur."},
  {de:"das Pferd",sq:"kali",type:"Kafshë",ex:"Das Pferd läuft schnell. — Kali vrapron shpejt."},
  {de:"die Kuh",sq:"lopa",type:"Kafshë",ex:"Die Kuh gibt Milch. — Lopa jep qumësht."},
  {de:"das Schwein",sq:"derri",type:"Kafshë",ex:"Das Schwein ist rosa. — Derri është rozë."},
  {de:"das Schaf",sq:"dhia / delia",type:"Kafshë",ex:"Die Schafe auf der Wiese. — Delet në livadh."},
  {de:"der Fisch",sq:"peshku",type:"Kafshë",ex:"Der Fisch schwimmt im Wasser. — Peshku noton në ujë."},
  {de:"der Bär",sq:"ariu",type:"Kafshë",ex:"Der Bär ist das Tier Berlins. — Ariu është kafsha e Berlinit."},
  {de:"der Wolf",sq:"ujku",type:"Kafshë",ex:"Der Wolf lebt im Wald. — Ujku jeton në pyll."},

  // ── Ngjyrat e zgjeruara ──
  {de:"orange",sq:"portokalli (ngjyrë)",type:"Ngjyrë",ex:"Das T-Shirt ist orange. — Fanella është portokalli."},
  {de:"lila / violett",sq:"vjollcë",type:"Ngjyrë",ex:"Sie liebt die Farbe Lila. — Ajo e do ngjyrën vjollcë."},
  {de:"rosa",sq:"rozë",type:"Ngjyrë",ex:"Das Baby trägt Rosa. — Bebja vesh rozë."},
  {de:"braun",sq:"kafe (ngjyrë)",type:"Ngjyrë",ex:"Braune Augen. — Sy kafe."},
  {de:"grau",sq:"gri",type:"Ngjyrë",ex:"Der graue Himmel im Winter. — Qielli gri në dimër."},
  {de:"golden",sq:"ari / i artë",type:"Ngjyrë",ex:"Ein goldener Ring. — Unazë ari."},
  {de:"silbern",sq:"argjend / i argjendtë",type:"Ngjyrë",ex:"Ein silbernes Armband. — Byzylyk argjendi."},
  {de:"hell",sq:"i/e çelët",type:"Ngjyrë",ex:"Ein helles Blau. — Blu i çelët."},
  {de:"dunkel",sq:"i/e errët",type:"Ngjyrë",ex:"Ein dunkles Grün. — Gjelbër i errët."},

  // ── Teknologjia e përditshme ──
  {de:"das Handy",sq:"telefoni celular",type:"Teknologji",ex:"Mein Handy hat keinen Akku. — Telefoni im nuk ka bateri."},
  {de:"der Computer",sq:"kompjuteri",type:"Teknologji",ex:"Ich arbeite am Computer. — Punoj në kompjuter."},
  {de:"das Internet",sq:"interneti",type:"Teknologji",ex:"Ohne Internet geht es nicht. — Pa internet nuk shkon."},
  {de:"die App",sq:"aplikacioni",type:"Teknologji",ex:"Welche App nutzt du? — Çfarë aplikacioni përdor?"},
  {de:"das Passwort",sq:"fjalëkalimi",type:"Teknologji",ex:"Das Passwort ist geheim. — Fjalëkalimi është sekret."},
  {de:"die E-Mail",sq:"emaili",type:"Teknologji",ex:"Ich schicke dir eine E-Mail. — Të dërgoj email."},
  {de:"der Akku / Batterie",sq:"bateria",type:"Teknologji",ex:"Der Akku ist leer. — Bateria është e zbrazët."},
  {de:"das Ladekabel",sq:"kabllo karikuese",type:"Teknologji",ex:"Hast du ein Ladekabel? — Ke kabllo karikuese?"},
  {de:"das Foto",sq:"fotografia",type:"Teknologji",ex:"Darf ich ein Foto machen? — Mund të bëj foto?"},
  {de:"die Kamera",sq:"kamera",type:"Teknologji",ex:"Eine gute Kamera ist teuer. — Kamera e mirë është e shtrenjtë."},

  // ── Transporti i zgjeruar ──
  {de:"die Straßenbahn",sq:"tramvaji",type:"Transport",ex:"Die Straßenbahn fährt alle 5 Minuten. — Tramvaji kalon çdo 5 minuta."},
  {de:"das Taxi",sq:"taksia",type:"Transport",ex:"Ich nehme ein Taxi. — Marr taksi."},
  {de:"das Motorrad",sq:"motorrreta",type:"Transport",ex:"Er fährt Motorrad. — Ai nget motorretë."},
  {de:"der Fahrschein",sq:"bileta",type:"Transport",ex:"Kaufe einen Fahrschein! — Blej biletë!"},
  {de:"die Linie",sq:"linja",type:"Transport",ex:"Welche Linie fährt zum Zentrum? — Cila linjë shkon në qendër?"},
  {de:"der Stau",sq:"bllokimi i trafikut",type:"Transport",ex:"Es gibt einen Stau. — Ka bllokimin e trafikut."},
  {de:"parken",sq:"të parkosh",type:"Transport",ex:"Wo kann ich parken? — Ku mund të parkoj?"},
  {de:"der Führerschein",sq:"patenta e makinës",type:"Transport",ex:"Ich habe den Führerschein. — Kam patentën."},
  {de:"tanken",sq:"të bësh karburant",type:"Transport",ex:"Ich muss tanken. — Duhet të bëj karburant."},
  {de:"die Tankstelle",sq:"stacioni i karburantit",type:"Transport",ex:"Die nächste Tankstelle ist 2 km. — Stacioni më i afërt i karburantit është 2 km."},

  // ── Shkolla dhe mësimi ──
  {de:"der Stift",sq:"lapsusi / stilolaps",type:"Shkollë",ex:"Hast du einen Stift? — Ke laps?"},
  {de:"das Heft",sq:"fletoret",type:"Shkollë",ex:"Ich schreibe im Heft. — Shkruaj në fletore."},
  {de:"das Buch",sq:"libri",type:"Shkollë",ex:"Das Buch ist interessant. — Libri është interesant."},
  {de:"die Tafel",sq:"dërrasa e zezë",type:"Shkollë",ex:"Der Lehrer schreibt an die Tafel. — Mësuesi shkruan në dërrasë."},
  {de:"der Radiergummi",sq:"fshirsja",type:"Shkollë",ex:"Darf ich den Radiergummi leihen? — Mund të marr fshirsen?"},
  {de:"die Hausaufgaben",sq:"detyrat e shtëpisë",type:"Shkollë",ex:"Ich mache meine Hausaufgaben. — Bëj detyrat e shtëpisë."},
  {de:"die Pause",sq:"pushimi (ndërçoi)",type:"Shkollë",ex:"In der Pause spielen die Kinder. — Gjatë pushimit fëmijët luajnë."},
  {de:"der Direktor",sq:"drejtori",type:"Shkollë",ex:"Der Direktor der Schule. — Drejtori i shkollës."},
  {de:"die Klasse",sq:"klasa",type:"Shkollë",ex:"Ich bin in Klasse 10. — Jam në klasën 10."},
  {de:"die Note",sq:"nota",type:"Shkollë",ex:"Eine gute Note bekommen. — Marr notë të mirë."},
],

// ════════════════════════════════════════════════════════════════
// NIVELI A2 — SHTESË (~900 fjalë të reja)
// ════════════════════════════════════════════════════════════════
A2_extra: [

  // ── Folje të rëndësishme A2 ──
  {de:"vorstellen",sq:"të prezantosh / imagjinosh",type:"Folje",ex:"Ich möchte mich vorstellen. — Dua të prezantohem."},
  {de:"erklären",sq:"të shpjegosh",type:"Folje",ex:"Kannst du das erklären? — Mund ta shpjegosh?"},
  {de:"beschreiben",sq:"të përshkruash",type:"Folje",ex:"Beschreib mir das Bild! — Përshkruaje fotografinë!"},
  {de:"vergleichen",sq:"të krahasosh",type:"Folje",ex:"Ich vergleiche die Preise. — Krahasoj çmimet."},
  {de:"entscheiden",sq:"të vendosësh",type:"Folje",ex:"Ich muss mich entscheiden. — Duhet të vendos."},
  {de:"erinnern",sq:"të kujtosh",type:"Folje",ex:"Ich erinnere mich an dich. — Të kujtoj."},
  {de:"vergessen",sq:"të harrosh",type:"Folje",ex:"Ich habe es vergessen. — E kam harruar."},
  {de:"sich treffen",sq:"të takohesh",type:"Folje",ex:"Wir treffen uns um 18 Uhr. — Takohemi në orën 18."},
  {de:"einladen",sq:"të ftosh",type:"Folje",ex:"Ich lade dich zum Essen ein. — Të ftoj për drekë."},
  {de:"feiern",sq:"të festosh",type:"Folje",ex:"Wir feiern heute! — Festojmë sot!"},
  {de:"aufräumen",sq:"të rregullosh / pastrosh",type:"Folje",ex:"Ich räume mein Zimmer auf. — Rregulloj dhomën time."},
  {de:"putzen",sq:"të pastrosh",type:"Folje",ex:"Ich putze das Badezimmer. — Pastroj banjon."},
  {de:"kochen",sq:"të gatuash",type:"Folje",ex:"Ich koche gern. — Gatuaj me dëshirë."},
  {de:"spülen",sq:"të lash enët",type:"Folje",ex:"Ich spüle das Geschirr. — Laj enët."},
  {de:"bügeln",sq:"të hekurosësh",type:"Folje",ex:"Ich bügle meine Hemden. — Hekuros kamishat e mia."},
  {de:"einkaufen",sq:"të bësh blerje",type:"Folje",ex:"Ich gehe einkaufen. — Shkoj të bëj blerje."},
  {de:"liefern",sq:"të dorëzosh / dërgosh",type:"Folje",ex:"Das Paket wird geliefert. — Paketa dorëzohet."},
  {de:"empfangen",sq:"të marrësh / pritësh",type:"Folje",ex:"Ich empfange ein Paket. — Marr paketën."},
  {de:"schicken",sq:"të dërgosh",type:"Folje",ex:"Ich schicke dir eine Nachricht. — Të dërgoj mesazh."},
  {de:"antworten",sq:"të përgjigjesh",type:"Folje",ex:"Antworte mir bitte! — Përgjigju ju lutem!"},
  {de:"fragen",sq:"të pyesësh",type:"Folje",ex:"Darf ich fragen? — Mund të pyes?"},
  {de:"diskutieren",sq:"të diskutosh",type:"Folje",ex:"Wir diskutieren über Politik. — Diskutojmë mbi politikë."},
  {de:"sich bewerben",sq:"të aplikosh",type:"Folje",ex:"Ich bewerbe mich für die Stelle. — Aplikoj për vendin e punës."},
  {de:"telefonieren",sq:"të telefonosh",type:"Folje",ex:"Ich telefoniere mit meiner Mutter. — Telefonoj me nënën time."},
  {de:"mieten",sq:"të marrësh me qira",type:"Folje",ex:"Ich miete eine Wohnung. — Marr me qira apartament."},
  {de:"zahlen",sq:"të paguash",type:"Folje",ex:"Ich zahle die Rechnung. — Paguaj faturën."},
  {de:"sparen",sq:"të kursesh",type:"Folje",ex:"Ich spare für das Auto. — Kursej për makinën."},
  {de:"verlieren",sq:"të humbasësh",type:"Folje",ex:"Ich habe meinen Schlüssel verloren. — Humba çelësin."},
  {de:"gewinnen",sq:"të fitosh",type:"Folje",ex:"Wir haben gewonnen! — Fituam!"},
  {de:"probieren",sq:"të provojësh",type:"Folje",ex:"Probier mal das Essen! — Provo ushqimin!"},
  {de:"aufhören",sq:"të ndalosh",type:"Folje",ex:"Hör auf! — Ndal!"},
  {de:"anfangen",sq:"të fillosh",type:"Folje",ex:"Wann fangen wir an? — Kur fillojmë?"},
  {de:"vorbereiten",sq:"të përgatitësh",type:"Folje",ex:"Ich bereite das Essen vor. — Përgatit ushqimin."},
  {de:"sich anmelden",sq:"të regjistrohesh",type:"Folje",ex:"Ich melde mich für den Kurs an. — Regjistrohem për kursin."},
  {de:"sich abmelden",sq:"të çregjistrohesh",type:"Folje",ex:"Ich melde mich vom Kurs ab. — Çregjistrohem nga kursi."},
  {de:"umziehen",sq:"të ndërrosh banesë",type:"Folje",ex:"Wir ziehen nächsten Monat um. — Muajin tjetër ndërrojmë banesë."},
  {de:"zustimmen",sq:"të pajtohesh",type:"Folje",ex:"Ich stimme dir zu. — Pajtohem me ty."},
  {de:"ablehnen",sq:"të refuzosh",type:"Folje",ex:"Er lehnt das Angebot ab. — Ai refuzon ofertën."},
  {de:"vorschlagen",sq:"të propozosh",type:"Folje",ex:"Ich schlage etwas vor. — Propozoj diçka."},
  {de:"passieren",sq:"të ndodhë",type:"Folje",ex:"Was ist passiert? — Çfarë ka ndodhur?"},

  // ── Shprehje komunikimi A2 ──
  {de:"Kannst du das wiederholen?",sq:"Mund ta përsëritësh?",type:"Komunikim",ex:"Entschuldigung, kannst du das wiederholen? — Më fal, mund ta përsëritësh?"},
  {de:"Ich verstehe nicht.",sq:"Nuk kuptoj.",type:"Komunikim",ex:"Ich verstehe nicht. Kannst du langsamer sprechen? — Nuk kuptoj. Mund të flasësh ngadalë?"},
  {de:"Was bedeutet das?",sq:"Çfarë do të thotë kjo?",type:"Komunikim",ex:"Was bedeutet dieses Wort? — Çfarë do të thotë kjo fjalë?"},
  {de:"Wie sagt man ... auf Deutsch?",sq:"Si thuhet ... gjermanisht?",type:"Komunikim",ex:"Wie sagt man 'mollë' auf Deutsch? — Si thuhet 'mollë' gjermanisht?"},
  {de:"Das weiß ich nicht.",sq:"Nuk e di.",type:"Komunikim",ex:"Das weiß ich leider nicht. — Fatkeqësisht nuk e di."},
  {de:"Ich bin nicht sicher.",sq:"Nuk jam i sigurt.",type:"Komunikim",ex:"Ich bin nicht sicher, aber ich glaube... — Nuk jam i sigurt, por besoj..."},
  {de:"Stimmt das?",sq:"A është e saktë?",type:"Komunikim",ex:"Stimmt das, was du gesagt hast? — A është e saktë çfarë ke thënë?"},
  {de:"Genau!",sq:"Saktë! / Pikërisht!",type:"Komunikim",ex:"Genau das meine ich! — Pikërisht këtë kuptoj!"},
  {de:"Klar!",sq:"Sigurisht! / Patjetër!",type:"Komunikim",ex:"Klar, kein Problem! — Sigurisht, nuk ka problem!"},
  {de:"Na ja...",sq:"Eeeh... / Nuk e di...",type:"Komunikim",ex:"Na ja, das ist kompliziert. — Nuk e di, kjo është e komplikuar."},

  // ── Shtëpia dhe fqinjësia ──
  {de:"der Nachbar",sq:"fqinji",type:"Shoqëri",ex:"Mein Nachbar ist nett. — Fqinji im është i mirë."},
  {de:"die Wohngemeinschaft (WG)",sq:"apartament i përbashkët",type:"Banim",ex:"Ich wohne in einer WG. — Jetoj në apartament të përbashkët."},
  {de:"der Keller",sq:"bodrum",type:"Shtëpi",ex:"Im Keller lagere ich Sachen. — Në bodrum ruaj gjëra."},
  {de:"der Dachboden",sq:"papafingo",type:"Shtëpi",ex:"Der Dachboden ist voller Kisten. — Papafingoja është plot kuti."},
  {de:"der Balkon",sq:"ballkoni",type:"Shtëpi",ex:"Ich sitze auf dem Balkon. — Ulem në ballkon."},
  {de:"der Garten",sq:"kopshti",type:"Shtëpi",ex:"Wir haben einen großen Garten. — Kemi kopsht të madh."},
  {de:"der Aufzug",sq:"ashensori",type:"Shtëpi",ex:"Der Aufzug ist außer Betrieb. — Ashensori është jashtë funksionit."},
  {de:"der Verbrauch",sq:"konsumi",type:"Shtëpi",ex:"Der Stromverbrauch ist hoch. — Konsumi i rrymës është i lartë."},
  {de:"der Strom",sq:"rrymë elektrike",type:"Shtëpi",ex:"Die Stromrechnung ist hoch. — Fatura e rrymës është e lartë."},
  {de:"das Gas",sq:"gazi",type:"Shtëpi",ex:"Wir heizen mit Gas. — Ngrohemi me gaz."},
  {de:"der Müll",sq:"mbeturinat",type:"Shtëpi",ex:"Bitte trenn den Müll! — Ju lutem ndaj mbeturinat!"},
  {de:"das Briefkasten",sq:"kutia postare",type:"Shtëpi",ex:"Die Post ist im Briefkasten. — Posta është në kutinë postare."},
  {de:"der Schlüssel",sq:"çelësi",type:"Shtëpi",ex:"Ich habe meinen Schlüssel verloren. — Humba çelësin tim."},
  {de:"das Schloss",sq:"brava",type:"Shtëpi",ex:"Das Schloss ist kaputt. — Brava është e prishur."},
  {de:"die Klingel",sq:"zilja",type:"Shtëpi",ex:"Klingel bitte! — Bie kembanin!"},

  // ── Puna dhe karriera e zgjeruar ──
  {de:"die Firma",sq:"firma / kompania",type:"Punë",ex:"Ich arbeite bei einer großen Firma. — Punoj në firmë të madhe."},
  {de:"die Abteilung",sq:"departamenti",type:"Punë",ex:"Ich bin in der IT-Abteilung. — Jam në departamentin IT."},
  {de:"der Kollege",sq:"kolegu",type:"Punë",ex:"Meine Kollegen sind nett. — Kolegët e mi janë të mirë."},
  {de:"die Besprechung",sq:"mbledhja / takimi",type:"Punë",ex:"Ich habe um 10 Uhr eine Besprechung. — Kam mbledhje në orën 10."},
  {de:"das Projekt",sq:"projekti",type:"Punë",ex:"Das Projekt dauert drei Monate. — Projekti zgjat tre muaj."},
  {de:"die Deadline",sq:"afati",type:"Punë",ex:"Die Deadline ist morgen. — Afati është nesër."},
  {de:"das Homeoffice",sq:"puna nga shtëpia",type:"Punë",ex:"Ich arbeite heute im Homeoffice. — Sot punoj nga shtëpia."},
  {de:"der Urlaub",sq:"pushimet",type:"Punë",ex:"Ich habe 25 Tage Urlaub pro Jahr. — Kam 25 ditë pushim në vit."},
  {de:"der Krankenstand",sq:"sëmundja (pushim mjekësor)",type:"Punë",ex:"Er ist im Krankenstand. — Ai është me pushim mjekësor."},
  {de:"die Überstunden",sq:"orët shtesë",type:"Punë",ex:"Ich mache heute Überstunden. — Sot bëj orë shtesë."},
  {de:"der Lohn",sq:"rroga / paga javore",type:"Punë",ex:"Der Lohn wird wöchentlich gezahlt. — Rroga paguhet çdo javë."},
  {de:"die Gehaltserhöhung",sq:"rritja e pagës",type:"Punë",ex:"Ich bitte um eine Gehaltserhöhung. — Kërkoj rritje page."},
  {de:"der Chef",sq:"shefi / drejtori",type:"Punë",ex:"Mein Chef ist fair. — Shefi im është i drejtë."},
  {de:"der Mitarbeiter",sq:"punonjësi",type:"Punë",ex:"Wir haben 50 Mitarbeiter. — Kemi 50 punonjës."},
  {de:"selbstständig",sq:"i pavarur / vetëpunësuar",type:"Punë",ex:"Ich bin selbstständig. — Jam vetëpunësuar."},

  // ── Shëndet dhe mjekësi e zgjeruar ──
  {de:"der Zahnarzt",sq:"dentisti",type:"Mjekësi",ex:"Ich gehe zum Zahnarzt. — Shkoj te dentisti."},
  {de:"die Apotheke",sq:"farmacia",type:"Mjekësi",ex:"Die Apotheke ist geschlossen. — Farmacia është e mbyllur."},
  {de:"das Rezept",sq:"receta mjekësore",type:"Mjekësi",ex:"Der Arzt schreibt ein Rezept. — Mjeku shkruan recetë."},
  {de:"die Impfung",sq:"vaksinimi",type:"Mjekësi",ex:"Ich brauche eine Impfung. — Kam nevojë për vaksinim."},
  {de:"das Krankenhaus",sq:"spitali",type:"Mjekësi",ex:"Er liegt im Krankenhaus. — Ai ndodhet në spital."},
  {de:"die Notaufnahme",sq:"urgjenca",type:"Mjekësi",ex:"Ich muss zur Notaufnahme. — Duhet të shkoj në urgjencë."},
  {de:"die Krankenschwester",sq:"infermierja",type:"Mjekësi",ex:"Die Krankenschwester ist nett. — Infermierja është e mirë."},
  {de:"bluten",sq:"të gjakojë",type:"Mjekësi",ex:"Die Wunde blutet. — Plaga gjakon."},
  {de:"der Verband",sq:"fashoja / mbështjellja",type:"Mjekësi",ex:"Ich brauche einen Verband. — Kam nevojë për fasho."},
  {de:"Allergie gegen",sq:"alergjia ndaj",type:"Mjekësi",ex:"Ich habe Allergie gegen Penicillin. — Kam alergjia ndaj penicilinës."},
  {de:"die Entzündung",sq:"inflamacioni / infeksioni",type:"Mjekësi",ex:"Eine Entzündung der Wunde. — Infeksion i plagës."},
  {de:"der Durchfall",sq:"diarre",type:"Mjekësi",ex:"Ich habe Durchfall. — Kam diarre."},
  {de:"der Husten",sq:"kolla",type:"Mjekësi",ex:"Ich habe starken Husten. — Kam kollë të fortë."},
  {de:"der Schnupfen",sq:"rrufeja / rrjedhja e hundës",type:"Mjekësi",ex:"Ich habe Schnupfen. — Kam rrufë."},
  {de:"brechen / erbrechen",sq:"të vjellësh",type:"Mjekësi",ex:"Mir ist schlecht und ich muss brechen. — Ndihem keq dhe do të vjell."},

  // ── Financa dhe banka ──
  {de:"die Bank",sq:"banka",type:"Financa",ex:"Ich gehe zur Bank. — Shkoj në bankë."},
  {de:"das Bargeld",sq:"paratë cash",type:"Financa",ex:"Ich zahle mit Bargeld. — Paguaj cash."},
  {de:"die Kreditkarte",sq:"kartela e kreditit",type:"Financa",ex:"Akzeptieren Sie Kreditkarten? — Pranoni kartela krediti?"},
  {de:"abheben",sq:"të tërhiqësh para",type:"Financa",ex:"Ich hebe 200 Euro ab. — Tërheq 200 euro."},
  {de:"einzahlen",sq:"të depozitosh",type:"Financa",ex:"Ich zahle Geld ein. — Depozitoj para."},
  {de:"der Geldautomat (ATM)",sq:"bankomati",type:"Financa",ex:"Wo ist der nächste Geldautomat? — Ku është bankomati më i afërt?"},
  {de:"der Kontostand",sq:"gjendja e llogarisë",type:"Financa",ex:"Was ist mein Kontostand? — Cila është gjendja e llogarisë sime?"},
  {de:"die Gebühr",sq:"tarifa / taksa bankare",type:"Financa",ex:"Die monatliche Gebühr beträgt 5 Euro. — Tarifa mujore është 5 euro."},
  {de:"der Zinssatz",sq:"norma e interesit",type:"Financa",ex:"Der Zinssatz ist niedrig. — Norma e interesit është e ulët."},
  {de:"die Rechnung",sq:"fatura",type:"Financa",ex:"Ich bezahle die Rechnung online. — Paguaj faturën online."},

  // ── Arsimi i zgjeruar ──
  {de:"der Kindergarten",sq:"kopshti i fëmijëve",type:"Arsim",ex:"Das Kind geht in den Kindergarten. — Fëmija shkon në kopsht."},
  {de:"die Grundschule",sq:"shkolla fillore",type:"Arsim",ex:"Die Grundschule dauert 4 Jahre. — Shkolla fillore zgjat 4 vjet."},
  {de:"das Gymnasium",sq:"gjimnazi",type:"Arsim",ex:"Das Gymnasium endet mit dem Abitur. — Gjimnazi mbaron me maturën."},
  {de:"das Abitur",sq:"matura shtetërore",type:"Arsim",ex:"Ich mache dieses Jahr Abitur. — Këtë vit bëj maturën."},
  {de:"die Ausbildung",sq:"trajnim / shkollim profesional",type:"Arsim",ex:"Ich mache eine Ausbildung als Koch. — Bëj trajnim si kuzhinier."},
  {de:"das Praktikum",sq:"praktika",type:"Arsim",ex:"Ich mache ein Praktikum. — Bëj praktikë."},
  {de:"der Abschluss",sq:"diplomain / certifikata",type:"Arsim",ex:"Ich habe meinen Abschluss gemacht. — Mora diplomën time."},
  {de:"das Stipendium",sq:"bursa",type:"Arsim",ex:"Ich habe ein Stipendium bekommen. — Mora bursë."},
  {de:"die Bibliothek",sq:"biblioteka",type:"Arsim",ex:"Ich leihe Bücher aus der Bibliothek. — Huazoj libra nga biblioteka."},
  {de:"das Semester",sq:"semestri",type:"Arsim",ex:"Das Wintersemester beginnt im Oktober. — Semestri i dimrit fillon në tetor."},

  // ── Shëtitja dhe aktivitetet ──
  {de:"spazieren gehen",sq:"të shëtisësh",type:"Aktivitet",ex:"Ich gehe jeden Abend spazieren. — Shëtis çdo mbrëmje."},
  {de:"wandern",sq:"të ecësh në natyrë / trekking",type:"Aktivitet",ex:"Wir wandern in den Alpen. — Bëjmë trekking në Alpe."},
  {de:"campen",sq:"të kampingosh",type:"Aktivitet",ex:"Wir campen diesen Sommer. — Kampingojmë këtë verë."},
  {de:"klettern",sq:"të ngjitësh",type:"Aktivitet",ex:"Er klettert auf den Berg. — Ai ngjitet në mal."},
  {de:"radfahren",sq:"të çikëlosh",type:"Aktivitet",ex:"Ich fahre gern Rad. — Çikëloj me dëshirë."},
  {de:"tanzen",sq:"të kërcesh",type:"Aktivitet",ex:"Sie tanzt sehr gut. — Ajo kërcen shumë mirë."},
  {de:"malen",sq:"të pikturosh",type:"Aktivitet",ex:"Ich male Bilder. — Pikturoj."},
  {de:"singen",sq:"të këngësh",type:"Aktivitet",ex:"Sie singt wunderschön. — Ajo këndon mrekullisht."},
  {de:"Gitarre spielen",sq:"të luash gitarë",type:"Aktivitet",ex:"Er spielt Gitarre. — Ai luan gitarë."},
  {de:"meditieren",sq:"të meditosh",type:"Aktivitet",ex:"Ich meditiere morgens. — Meditoj në mëngjes."},
  {de:"stricken",sq:"të thurësh",type:"Aktivitet",ex:"Sie strickt einen Pullover. — Ajo thurr pulovër."},
  {de:"backen",sq:"të piqësh (ëmbëlsira)",type:"Aktivitet",ex:"Ich backe Kuchen am Wochenende. — Piqëm tortë fundjavën."},
  {de:"angeln",sq:"të peshkosh",type:"Aktivitet",ex:"Er angelt am See. — Ai peshkon në liqen."},
  {de:"karten spielen",sq:"të luash letra",type:"Aktivitet",ex:"Wir spielen Karten. — Luajmë letra."},
  {de:"ins Kino gehen",sq:"të shkosh në kino",type:"Aktivitet",ex:"Ich gehe ins Kino. — Shkoj në kino."},
  {de:"ins Theater gehen",sq:"të shkosh në teatër",type:"Aktivitet",ex:"Heute Abend gehen wir ins Theater. — Mbrëmë shkojmë në teatër."},

  // ── Moti i zgjeruar ──
  {de:"der Sturm",sq:"stuhia",type:"Mot",ex:"Der Sturm ist gefährlich. — Stuhia është e rrezikshme."},
  {de:"der Blitz",sq:"vetëtima",type:"Mot",ex:"Der Blitz ist hell. — Vetëtima është e ndritshme."},
  {de:"der Donner",sq:"bubullima",type:"Mot",ex:"Der Donner macht Angst. — Bubullima frikëson."},
  {de:"der Nebel",sq:"mjegulla",type:"Mot",ex:"Heute gibt es viel Nebel. — Sot ka shumë mjegull."},
  {de:"der Frost",sq:"ngrica",type:"Mot",ex:"Heute Nacht gibt es Frost. — Natën ka ngrica."},
  {de:"der Grad Celsius",sq:"gradë celsius",type:"Mot",ex:"Es sind minus 5 Grad. — Janë minus 5 gradë."},
  {de:"die Hitze",sq:"vapa",type:"Mot",ex:"Die Hitze ist unerträglich. — Vapa është e padurueshme."},
  {de:"bewölkt",sq:"me re",type:"Mot",ex:"Heute ist es bewölkt. — Sot është me re."},
  {de:"sonnig",sq:"me diell",type:"Mot",ex:"Es ist schön sonnig heute. — Sot është me diell të bukur."},
  {de:"der Regenschirm",sq:"çadra",type:"Mot",ex:"Nimm den Regenschirm mit! — Merr çadrën me vete!"},

  // ── Kultura gjermane ──
  {de:"das Oktoberfest",sq:"Oktoberfesti (festival birre)",type:"Kulturë",ex:"Das Oktoberfest ist in München. — Oktoberfesti është në Minhen."},
  {de:"Weihnachten",sq:"Krishtlindjet",type:"Festë",ex:"Frohe Weihnachten! — Gëzuar Krishtlindjet!"},
  {de:"Ostern",sq:"Pashkët",type:"Festë",ex:"Frohe Ostern! — Gëzuar Pashkët!"},
  {de:"Silvester",sq:"Viti i Ri",type:"Festë",ex:"Prosit Neujahr! — Gëzuar Vitin e Ri!"},
  {de:"der Karneval",sq:"karnavali",type:"Festë",ex:"Karneval ist im Februar. — Karnavali është në shkurt."},
  {de:"das Grundgesetz",sq:"Ligji Bazë / Kushtetuta",type:"Kulturë",ex:"Das Grundgesetz gilt seit 1949. — Ligji Bazë vlen që nga viti 1949."},
  {de:"die Bundesrepublik",sq:"Republika Federale",type:"Kulturë",ex:"Die Bundesrepublik Deutschland. — Republika Federale e Gjermanisë."},
  {de:"das Bundesland",sq:"landit (shteti federal)",type:"Kulturë",ex:"Bayern ist ein Bundesland. — Baveria është lant."},
  {de:"der Bundestag",sq:"Bundestagu (parlamenti)",type:"Kulturë",ex:"Der Bundestag sitzt in Berlin. — Bundestagu ndodhet në Berlin."},
  {de:"die Hauptstadt",sq:"kryeqyteti",type:"Kulturë",ex:"Berlin ist die Hauptstadt Deutschlands. — Berlini është kryeqyteti i Gjermanisë."},

  // ── Gjuha gjermane — terma ──
  {de:"der Satz",sq:"fjalia",type:"Gjuhë",ex:"Schreib einen Satz! — Shkruaj një fjali!"},
  {de:"das Wort",sq:"fjala",type:"Gjuhë",ex:"Was bedeutet dieses Wort? — Çfarë do të thotë kjo fjalë?"},
  {de:"die Grammatik",sq:"gramatika",type:"Gjuhë",ex:"Grammatik ist wichtig. — Gramatika është e rëndësishme."},
  {de:"der Artikel",sq:"nyja",type:"Gjuhë",ex:"Der, die, das sind Artikel. — Der, die, das janë nyje."},
  {de:"das Verb",sq:"folja",type:"Gjuhë",ex:"Das Verb steht an zweiter Stelle. — Folja qëndron në vendin e dytë."},
  {de:"das Adjektiv",sq:"mbiemri",type:"Gjuhë",ex:"Das Adjektiv beschreibt das Substantiv. — Mbiemri përshkruan emrin."},
  {de:"das Substantiv / das Nomen",sq:"emri",type:"Gjuhë",ex:"Alle Substantive schreibt man groß. — Të gjithë emrat shkruhen me shkronjë të madhe."},
  {de:"der Plural",sq:"shumësi",type:"Gjuhë",ex:"Der Plural von 'Haus' ist 'Häuser'. — Shumësi i 'Haus' është 'Häuser'."},
  {de:"der Singular",sq:"njëjësi",type:"Gjuhë",ex:"Das steht im Singular. — Kjo qëndron në njëjës."},
  {de:"der Kasus",sq:"rasa",type:"Gjuhë",ex:"Es gibt vier Kasus im Deutschen. — Gjermanishtja ka katër rasa."},
  {de:"der Nominativ",sq:"rasa emërore",type:"Gjuhë",ex:"Das Subjekt steht im Nominativ. — Kryefjala qëndron në emërore."},
  {de:"der Akkusativ",sq:"rasa kallëzore",type:"Gjuhë",ex:"Das direkte Objekt steht im Akkusativ. — Objekti i drejtë qëndron në kallëzore."},
  {de:"der Dativ",sq:"rasa dhanore",type:"Gjuhë",ex:"Das indirekte Objekt steht im Dativ. — Objekti i tërthortë qëndron në dhanore."},
  {de:"der Genitiv",sq:"rasa gjenitiv",type:"Gjuhë",ex:"Der Genitiv zeigt Besitz. — Gjenitiivi tregon posesionin."},
],

// ════════════════════════════════════════════════════════════════
// NIVELI B1 — SHTESË (~1100 fjalë të reja)
// ════════════════════════════════════════════════════════════════
B1_extra: [

  // ── Folje abstrakte dhe akademike ──
  {de:"analysieren",sq:"të analizosh",type:"Folje",ex:"Ich analysiere die Daten. — Analizoj të dhënat."},
  {de:"argumentieren",sq:"të argumentosh",type:"Folje",ex:"Er argumentiert überzeugend. — Ai argumenton bindshëm."},
  {de:"behaupten",sq:"të pohosh / pretendosh",type:"Folje",ex:"Er behauptet, er sei unschuldig. — Ai pohon se është i pafajshëm."},
  {de:"belegen",sq:"të provosh / dokumentosh",type:"Folje",ex:"Können Sie das belegen? — Mund ta provoni?"},
  {de:"beurteilen",sq:"të vlerësosh / gjykosh",type:"Folje",ex:"Er beurteilt die Situation. — Ai vlerëson situatën."},
  {de:"bezweifeln",sq:"të dyshosh",type:"Folje",ex:"Ich bezweifle das. — Dyshoj rreth kësaj."},
  {de:"darstellen",sq:"të paraqitësh",type:"Folje",ex:"Bitte stellen Sie das Projekt dar! — Ju lutem paraqiteni projektin!"},
  {de:"einschätzen",sq:"të vlerësosh / çmosh",type:"Folje",ex:"Wie schätzt du die Lage ein? — Si e çmon situatën?"},
  {de:"erkennen",sq:"të njohësh / identifikosh",type:"Folje",ex:"Ich erkenne das Problem. — Njoh problemin."},
  {de:"erwähnen",sq:"të përmendësh",type:"Folje",ex:"Ich möchte kurz erwähnen... — Dua të përmend shkurtimisht..."},
  {de:"feststellen",sq:"të konstatosh",type:"Folje",ex:"Ich stelle fest, dass... — Konstatoj se..."},
  {de:"formulieren",sq:"të formulosh",type:"Folje",ex:"Bitte formuliere das anders. — Formuloje ndryshe."},
  {de:"gestalten",sq:"të organizosh / formosh",type:"Folje",ex:"Ich gestalte meinen Alltag aktiv. — Organizoj jetën time aktivisht."},
  {de:"hingegen",sq:"ndërsa / nga ana tjetër",type:"Ndajfolje",ex:"Ich mag Sport, mein Bruder hingegen nicht. — Dua sport, kurse vëllai im jo."},
  {de:"kommunizieren",sq:"të komunikosh",type:"Folje",ex:"Wir kommunizieren täglich. — Komunikojmë çdo ditë."},
  {de:"nachweisen",sq:"të demonstrosh / provojësh",type:"Folje",ex:"Er kann seine Qualifikation nachweisen. — Ai mund të provojë kualifikimin e tij."},
  {de:"überzeigen",sq:"të bindësh",type:"Folje",ex:"Er überzeugt mich nicht. — Ai nuk më bind."},
  {de:"umsetzen",sq:"të realizosh / vësh në jetë",type:"Folje",ex:"Ich setze meinen Plan um. — Realizoj planin tim."},
  {de:"untersuchen",sq:"të hetosh / ekzaminosh",type:"Folje",ex:"Der Arzt untersucht den Patienten. — Mjeku ekzaminon pacientin."},
  {de:"vergleichen",sq:"të krahasosh",type:"Folje",ex:"Ich vergleiche die zwei Methoden. — Krahasoj dy metodat."},
  {de:"verhindern",sq:"të parandalosh",type:"Folje",ex:"Wir müssen das verhindern. — Duhet ta parandalojmë."},
  {de:"vermeiden",sq:"të shmangësh",type:"Folje",ex:"Ich vermeide Konflikte. — Shmang konfliktet."},
  {de:"voraussetzen",sq:"të presupozosh",type:"Folje",ex:"Das setzt Erfahrung voraus. — Kjo presupuzon përvojë."},
  {de:"widersprechen",sq:"të kundërshtosh",type:"Folje",ex:"Ich widerspreche dir. — Të kundërshtoj."},
  {de:"zunehmen",sq:"të rritet / shtohet",type:"Folje",ex:"Die Bevölkerung nimmt zu. — Popullsia rritet."},
  {de:"abnehmen",sq:"të zvogëlohet / humbet peshë",type:"Folje",ex:"Ich möchte abnehmen. — Dua të humbas peshë."},
  {de:"aufgeben",sq:"të heqësh dorë",type:"Folje",ex:"Ich gebe nicht auf! — Nuk heq dorë!"},
  {de:"durchhalten",sq:"të qëndrosh / rezistosh",type:"Folje",ex:"Halt durch! — Qëndro! Mos dorëzohu!"},
  {de:"sich vorbereiten",sq:"të përgatitësh veten",type:"Folje",ex:"Ich bereite mich auf die Prüfung vor. — Përgatitem për provimin."},
  {de:"entspannen",sq:"të çlohesh / relaksohesh",type:"Folje",ex:"Ich entspanne nach der Arbeit. — Relaksohem pas punës."},

  // ── Emra abstraktë B1 ──
  {de:"die Auswirkung",sq:"ndikimi / pasoja",type:"Abstrakt",ex:"Die Auswirkungen des Klimawandels. — Pasojat e ndryshimit klimatik."},
  {de:"die Bedingung",sq:"kushti",type:"Abstrakt",ex:"Unter welcher Bedingung? — Nën çfarë kushti?"},
  {de:"die Begründung",sq:"arsyetimi / justifikimi",type:"Abstrakt",ex:"Bitte geben Sie eine Begründung. — Ju lutem jepni arsyetim."},
  {de:"die Bürokratie",sq:"burokracia",type:"Shoqëri",ex:"Die deutsche Bürokratie ist komplex. — Burokracia gjermane është komplekse."},
  {de:"das Bewusstsein",sq:"ndërgjegjja / vetëdija",type:"Abstrakt",ex:"Das Umweltbewusstsein wächst. — Vetëdija mjedisore rritet."},
  {de:"der Dialog",sq:"dialogu",type:"Abstrakt",ex:"Ein offener Dialog ist wichtig. — Dialogu i hapur është i rëndësishëm."},
  {de:"die Einschränkung",sq:"kufizimi",type:"Abstrakt",ex:"Es gibt Einschränkungen. — Ka kufizime."},
  {de:"die Entwicklung",sq:"zhvillimi",type:"Abstrakt",ex:"Die wirtschaftliche Entwicklung. — Zhvillimi ekonomik."},
  {de:"die Erfahrung",sq:"përvoja",type:"Abstrakt",ex:"Mit Erfahrung kommt Weisheit. — Me përvojë vjen urtësia."},
  {de:"die Grundlage",sq:"baza / themeli",type:"Abstrakt",ex:"Das ist die Grundlage unserer Arbeit. — Kjo është baza e punës sonë."},
  {de:"die Identität",sq:"identiteti",type:"Abstrakt",ex:"Kulturelle Identität ist wichtig. — Identiteti kulturor është i rëndësishëm."},
  {de:"der Konflikt",sq:"konflikti",type:"Shoqëri",ex:"Ein Konflikt muss gelöst werden. — Konflikti duhet zgjidhur."},
  {de:"die Konsequenz",sq:"pasoja",type:"Abstrakt",ex:"Die Konsequenzen sind schwer. — Pasojat janë të rënda."},
  {de:"die Kritik",sq:"kritika",type:"Abstrakt",ex:"Konstruktive Kritik ist hilfreich. — Kritika konstruktive është e dobishme."},
  {de:"die Lösung",sq:"zgjidhja",type:"Abstrakt",ex:"Wir brauchen eine Lösung. — Kemi nevojë për zgjidhje."},
  {de:"die Maßnahme",sq:"masa / hapi",type:"Abstrakt",ex:"Welche Maßnahmen ergreifen wir? — Çfarë masash marrim?"},
  {de:"der Mechanismus",sq:"mekanizmi",type:"Abstrakt",ex:"Ein komplexer Mechanismus. — Mekanizëm kompleks."},
  {de:"die Möglichkeit",sq:"mundësia",type:"Abstrakt",ex:"Es gibt viele Möglichkeiten. — Ka shumë mundësi."},
  {de:"die Perspektive",sq:"perspektiva",type:"Abstrakt",ex:"Aus einer anderen Perspektive. — Nga perspektivë tjetër."},
  {de:"der Prozess",sq:"procesi",type:"Abstrakt",ex:"Das ist ein langer Prozess. — Ky është proces i gjatë."},
  {de:"der Schwerpunkt",sq:"fokusi / theksi kryesor",type:"Abstrakt",ex:"Der Schwerpunkt liegt auf Qualität. — Fokusi është te cilësia."},
  {de:"die Situation",sq:"situata",type:"Abstrakt",ex:"Die aktuelle Situation ist schwierig. — Situata aktuale është e vështirë."},
  {de:"die Strategie",sq:"strategjia",type:"Abstrakt",ex:"Eine gute Strategie entwickeln. — Zhvilloj strategji të mirë."},
  {de:"das System",sq:"sistemi",type:"Abstrakt",ex:"Das System funktioniert gut. — Sistemi funksionon mirë."},
  {de:"die Tendenz",sq:"tendenca",type:"Abstrakt",ex:"Eine steigende Tendenz. — Tendencë në rritje."},
  {de:"die Überzeugung",sq:"bindja",type:"Abstrakt",ex:"Das ist meine feste Überzeugung. — Kjo është bindja ime e fortë."},
  {de:"die Vielfalt",sq:"diversiteti / shumëllojshmëria",type:"Abstrakt",ex:"Kulturelle Vielfalt bereichert. — Diversiteti kulturor pasuron."},
  {de:"das Vorurteil",sq:"paragjykimi",type:"Shoqëri",ex:"Vorurteile abbauen. — Eliminoj paragjykimet."},
  {de:"der Wert",sq:"vlera",type:"Abstrakt",ex:"Unsere gemeinsamen Werte. — Vlerat tona të përbashkëta."},
  {de:"die Würde",sq:"dinjiteti",type:"Abstrakt",ex:"Die Menschenwürde ist unantastbar. — Dinjiteti njerëzor është i paprekshëm."},

  // ── Ekonomia dhe biznesi ──
  {de:"das Bruttoinlandsprodukt (BIP)",sq:"prodhimi i brendshëm bruto (PBB)",type:"Ekonomi",ex:"Das BIP wächst. — PBB rritet."},
  {de:"die Inflation",sq:"inflacioni",type:"Ekonomi",ex:"Die Inflation ist gestiegen. — Inflacioni është rritur."},
  {de:"die Rezession",sq:"recesioni",type:"Ekonomi",ex:"Eine wirtschaftliche Rezession. — Recesion ekonomik."},
  {de:"der Handel",sq:"tregtia",type:"Ekonomi",ex:"Internationaler Handel. — Tregti ndërkombëtare."},
  {de:"die Börse",sq:"bursa (financiare)",type:"Ekonomi",ex:"Die Börse fällt heute. — Bursa bie sot."},
  {de:"die Aktie",sq:"aksioni",type:"Ekonomi",ex:"Ich kaufe Aktien. — Blej aksione."},
  {de:"der Markt",sq:"tregu",type:"Ekonomi",ex:"Der freie Markt. — Tregu i lirë."},
  {de:"die Nachfrage",sq:"kërkesa",type:"Ekonomi",ex:"Die Nachfrage steigt. — Kërkesa rritet."},
  {de:"das Angebot",sq:"oferta",type:"Ekonomi",ex:"Angebot und Nachfrage. — Oferta dhe kërkesa."},
  {de:"der Wettbewerb",sq:"konkurrenca",type:"Ekonomi",ex:"Harter Wettbewerb. — Konkurrencë e ashpër."},
  {de:"die Investition",sq:"investimi",type:"Ekonomi",ex:"Eine lohnende Investition. — Investim fitimprurës."},
  {de:"der Gewinn",sq:"fitimi",type:"Ekonomi",ex:"Das Unternehmen macht Gewinn. — Ndërmarrja bën fitim."},
  {de:"der Verlust",sq:"humbja",type:"Ekonomi",ex:"Wir haben Verluste gemacht. — Kemi bërë humbje."},
  {de:"die Bilanz",sq:"bilanci",type:"Ekonomi",ex:"Die Jahresbilanz ist positiv. — Bilanci vjetor është pozitiv."},
  {de:"das Budget",sq:"buxheti",type:"Ekonomi",ex:"Das Budget ist ausgeschöpft. — Buxheti është shteruar."},

  // ── Politika e zgjeruar ──
  {de:"die Koalition",sq:"koalicioni",type:"Politikë",ex:"Eine Koalitionsregierung. — Qeveri koalicioni."},
  {de:"die Opposition",sq:"opozita",type:"Politikë",ex:"Die Opposition kritisiert die Regierung. — Opozita kritikon qeverinë."},
  {de:"der Kanzler",sq:"kancelari",type:"Politikë",ex:"Der Bundeskanzler regiert Deutschland. — Kancelari Federal qeveris Gjermaninë."},
  {de:"der Präsident",sq:"presidenti",type:"Politikë",ex:"Der Bundespräsident. — Presidenti Federal."},
  {de:"das Referendum",sq:"referendumi",type:"Politikë",ex:"Ein Referendum über die Zukunft. — Referendum mbi të ardhmen."},
  {de:"die Bürgerrechte",sq:"të drejtat qytetare",type:"Politikë",ex:"Die Bürgerrechte schützen. — Mbrojmë të drejtat qytetare."},
  {de:"die Menschenrechte",sq:"të drejtat e njeriut",type:"Politikë",ex:"Menschenrechte sind universal. — Të drejtat e njeriut janë universale."},
  {de:"die Gleichstellung",sq:"barazia (gjinore etc.)",type:"Shoqëri",ex:"Gleichstellung der Geschlechter. — Barazia gjinore."},
  {de:"die Einwanderung",sq:"imigrimi",type:"Shoqëri",ex:"Die Einwanderung steigt. — Imigrimi rritet."},
  {de:"der Asylbewerber",sq:"azilkërkuesi",type:"Shoqëri",ex:"Asylbewerber brauchen Unterstützung. — Azilkërkuesit kanë nevojë për mbështetje."},
  {de:"die Integration",sq:"integrimi",type:"Shoqëri",ex:"Integration ist ein langer Prozess. — Integrimi është proces i gjatë."},
  {de:"der Kompromiss",sq:"kompromisi",type:"Politikë",ex:"Einen Kompromiss finden. — Gjejmë kompromis."},
  {de:"die Debatte",sq:"debati",type:"Politikë",ex:"Eine heiße Debatte. — Debat i nxehtë."},
  {de:"die Reform",sq:"reforma",type:"Politikë",ex:"Reformen sind notwendig. — Reformat janë të domosdoshme."},
  {de:"das Gesetz",sq:"ligji",type:"Politikë",ex:"Ein neues Gesetz verabschieden. — Miratoj ligj të ri."},

  // ── Mjedisi i zgjeruar ──
  {de:"die Biodiversität",sq:"biodiversiteti",type:"Ekologji",ex:"Die Biodiversität schwindet. — Biodiversiteti zvogëlohet."},
  {de:"der CO2-Ausstoß",sq:"emetimi i CO2",type:"Ekologji",ex:"Den CO2-Ausstoß reduzieren. — Reduktojmë emetimin e CO2."},
  {de:"fossile Brennstoffe",sq:"lëndët djegëse fosile",type:"Ekologji",ex:"Fossile Brennstoffe sind schädlich. — Lëndët djegëse fosile janë të dëmshme."},
  {de:"die Solarenergie",sq:"energjia diellore",type:"Ekologji",ex:"Solarenergie ist sauber. — Energjia diellore është e pastër."},
  {de:"die Windkraft",sq:"energjia e erës",type:"Ekologji",ex:"Windkraft ist wichtig. — Energjia e erës është e rëndësishme."},
  {de:"der ökologische Fußabdruck",sq:"gjurma ekologjike",type:"Ekologji",ex:"Meinen ökologischen Fußabdruck reduzieren. — Reduktoj gjurmën time ekologjike."},
  {de:"die Abgase",sq:"gazrat e shkarkimit",type:"Ekologji",ex:"Autoabgase verschmutzen die Luft. — Gazrat e makinave ndotin ajrin."},
  {de:"die Luftverschmutzung",sq:"ndotja e ajrit",type:"Ekologji",ex:"Luftverschmutzung ist gefährlich. — Ndotja e ajrit është e rrezikshme."},
  {de:"der Treibhauseffekt",sq:"efekti i serës",type:"Ekologji",ex:"Der Treibhauseffekt erwärmt die Erde. — Efekti i serës ngroh Tokën."},
  {de:"die Ozonschicht",sq:"shtresa e ozonit",type:"Ekologji",ex:"Die Ozonschicht schützt uns. — Shtresa e ozonit na mbron."},
  {de:"erneuerbar",sq:"i/e rinovueshëm",type:"Ekologji",ex:"Erneuerbare Energiequellen. — Burime energjie të rinovueshme."},
  {de:"die Naturkatastrophe",sq:"katastrofa natyrore",type:"Ekologji",ex:"Naturkatastrophen nehmen zu. — Katastrofat natyrore rriten."},
  {de:"die Überschwemmung",sq:"përmbytja",type:"Ekologji",ex:"Eine Überschwemmung in der Region. — Përmbytje në rajon."},
  {de:"der Waldbrand",sq:"zjarri i pyllit",type:"Ekologji",ex:"Waldbrände zerstören Ökosysteme. — Zjarret e pyjeve shkatërrojnë ekosistemet."},
  {de:"artenschutz",sq:"mbrojtja e specieve",type:"Ekologji",ex:"Artenschutz ist dringend nötig. — Mbrojtja e specieve është urgjentisht e nevojshme."},

  // ── Teknologjia e zgjeruar ──
  {de:"die Blockchain",sq:"blockchain",type:"Teknologji",ex:"Blockchain ist eine neue Technologie. — Blockchain është teknologji e re."},
  {de:"der Algorithmus",sq:"algoritmi",type:"Teknologji",ex:"Der Suchalgorithmus. — Algoritmi i kërkimit."},
  {de:"maschinelles Lernen",sq:"të mësuarit nga makina",type:"Teknologji",ex:"Maschinelles Lernen revolutioniert viele Bereiche. — Të mësuarit nga makina revolucionarizon shumë fusha."},
  {de:"die Digitalisierung",sq:"dixhitalizimi",type:"Teknologji",ex:"Die Digitalisierung verändert die Arbeit. — Dixhitalizimi ndryshon punën."},
  {de:"das Netzwerk",sq:"rrjeti",type:"Teknologji",ex:"Ein sicheres Netzwerk. — Rrjet i sigurt."},
  {de:"die Software",sq:"softueri",type:"Teknologji",ex:"Neue Software installieren. — Instaloj softuer të ri."},
  {de:"die Hardware",sq:"hardueri",type:"Teknologji",ex:"Die Hardware ist veraltet. — Hardueri është i vjetëruar."},
  {de:"das Update",sq:"përditësimi",type:"Teknologji",ex:"Ein wichtiges Update. — Përditësim i rëndësishëm."},
  {de:"der Server",sq:"serveri",type:"Teknologji",ex:"Der Server ist ausgefallen. — Serveri ka rënë."},
  {de:"die Cloud",sq:"cloud-i",type:"Teknologji",ex:"Daten in der Cloud speichern. — Ruaj të dhënat në cloud."},
  {de:"der Code",sq:"kodi",type:"Teknologji",ex:"Ich schreibe Code. — Shkruaj kod."},
  {de:"debuggen",sq:"të heqësh gabimet (debug)",type:"Teknologji",ex:"Ich debugge das Programm. — Heq gabimet nga programi."},
  {de:"die Cybersicherheit",sq:"kibernetika e sigurisë",type:"Teknologji",ex:"Cybersicherheit ist ein wachsendes Feld. — Kibernetika e sigurisë është fushë në rritje."},
  {de:"der Hacker",sq:"hakeri",type:"Teknologji",ex:"Ein Hacker hat die Daten gestohlen. — Hakeri vodhi të dhënat."},
  {de:"die App-Entwicklung",sq:"zhvillimi i aplikacioneve",type:"Teknologji",ex:"App-Entwicklung ist mein Beruf. — Zhvillimi i aplikacioneve është profesioni im."},

  // ── Shëndeti dhe psikologjia ──
  {de:"die Psychologie",sq:"psikologjia",type:"Shëndet",ex:"Ich studiere Psychologie. — Studioj psikologji."},
  {de:"die Angst",sq:"frika / ankthi",type:"Psikologji",ex:"Ich habe Angst vor dem Versagen. — Kam frikë nga dështimi."},
  {de:"die Depression",sq:"depresioni",type:"Psikologji",ex:"Depression ist eine ernste Krankheit. — Depresioni është sëmundje serioze."},
  {de:"das Burnout",sq:"burnout-i (lodhja profesionale)",type:"Psikologji",ex:"Er hat einen Burnout. — Ai ka burnout."},
  {de:"die Resilienz",sq:"rezistenca / elasticiteti psikologjik",type:"Psikologji",ex:"Resilienz hilft in schweren Zeiten. — Rezistenca ndihmon në kohë të vështira."},
  {de:"die Selbstreflexion",sq:"vetëreflektimi",type:"Psikologji",ex:"Selbstreflexion ist wichtig für das Wachstum. — Vetëreflektimi është i rëndësishëm për rritjen."},
  {de:"das Selbstvertrauen",sq:"vetëbesimi",type:"Psikologji",ex:"Ich stärke mein Selbstvertrauen. — Forcoj vetëbesimin tim."},
  {de:"die Motivation",sq:"motivimi",type:"Psikologji",ex:"Meine Motivation ist hoch. — Motivimi im është i lartë."},
  {de:"die Einsamkeit",sq:"vetmia",type:"Psikologji",ex:"Einsamkeit kann krank machen. — Vetmia mund të sëmurosë."},
  {de:"die Zufriedenheit",sq:"kënaqësia / kënaqsia",type:"Psikologji",ex:"Zufriedenheit kommt von innen. — Kënaqësia vjen nga brenda."},
  {de:"das Wohlbefinden",sq:"mirëqenia",type:"Psikologji",ex:"Mein Wohlbefinden ist wichtig. — Mirëqenia ime është e rëndësishme."},
  {de:"die Achtsamkeit",sq:"mindfulness / ndërgjegjshmëria",type:"Psikologji",ex:"Achtsamkeit reduziert Stress. — Mindfulness redukton stresin."},
  {de:"der Therapeut",sq:"terapisti",type:"Psikologji",ex:"Ich gehe zum Therapeuten. — Shkoj te terapisti."},
  {de:"die Therapie",sq:"terapia",type:"Psikologji",ex:"Eine Therapie hilft mir. — Terapia më ndihmon."},
  {de:"das Trauma",sq:"trauma",type:"Psikologji",ex:"Ein Trauma verarbeiten. — Përpunoj traumën."},

  // ── Shoqëria dhe kultura ──
  {de:"die Globalisierung",sq:"globalizimi",type:"Shoqëri",ex:"Die Globalisierung verbindet die Welt. — Globalizimi lidh botën."},
  {de:"der Individualismus",sq:"individualizmi",type:"Shoqëri",ex:"Individualismus vs. Kollektivismus. — Individualizmi vs Kolektivizmi."},
  {de:"der Kollektivismus",sq:"kolektivizmi",type:"Shoqëri",ex:"In albanischer Kultur gibt es viel Kollektivismus. — Në kulturën shqiptare ka shumë kolektivizëm."},
  {de:"die Toleranz",sq:"toleranca",type:"Shoqëri",ex:"Toleranz ist eine Tugend. — Toleranca është virtyt."},
  {de:"die Diskriminierung",sq:"diskriminimi",type:"Shoqëri",ex:"Diskriminierung ist inakzeptabel. — Diskriminimi është i papranueshëm."},
  {de:"die Inklusion",sq:"përfshirja",type:"Shoqëri",ex:"Inklusion in der Gesellschaft. — Përfshirja në shoqëri."},
  {de:"die Partizipation",sq:"pjesëmarrja",type:"Shoqëri",ex:"Politische Partizipation ist wichtig. — Pjesëmarrja politike është e rëndësishme."},
  {de:"das Ehrenamt",sq:"puna vullnetare",type:"Shoqëri",ex:"Ehrenamt stärkt die Gesellschaft. — Puna vullnetare forcon shoqërinë."},
  {de:"die Zivilgesellschaft",sq:"shoqëria civile",type:"Shoqëri",ex:"Die Zivilgesellschaft ist aktiv. — Shoqëria civile është aktive."},
  {de:"die Solidarität",sq:"solidariteti",type:"Shoqëri",ex:"Solidarität in der Krise. — Solidaritet në krizë."},
  {de:"die Gemeinnützigkeit",sq:"shërbimi publik / bamirësia",type:"Shoqëri",ex:"Gemeinnützige Arbeit. — Punë bamirëse."},
  {de:"der Wandel",sq:"ndryshimi / transformimi",type:"Shoqëri",ex:"Der gesellschaftliche Wandel. — Ndryshimi shoqëror."},
  {de:"die Generation",sq:"brezi / gjenerata",type:"Shoqëri",ex:"Die junge Generation. — Brezi i ri."},
  {de:"der Generationskonflikt",sq:"konflikti ndërgjenerat",type:"Shoqëri",ex:"Generationskonflikte sind normal. — Konfliktet ndërgjenerate janë normale."},
  {de:"das Klischee",sq:"stereotipi / klisheu",type:"Shoqëri",ex:"Klischees überwinden. — Tejkaloj stereotipet."},

  // ── Arsimi i lartë ──
  {de:"die Forschung",sq:"hulumtimi",type:"Akademik",ex:"Wissenschaftliche Forschung. — Hulumtim shkencor."},
  {de:"die Dissertation",sq:"disertata",type:"Akademik",ex:"Ich schreibe meine Dissertation. — Shkruaj disertatin tim."},
  {de:"das Labor",sq:"laboratori",type:"Akademik",ex:"Im Labor arbeiten. — Punoj në laborator."},
  {de:"die Hypothese",sq:"hipoteza",type:"Akademik",ex:"Eine Hypothese aufstellen. — Ngre hipotezë."},
  {de:"die Methodik",sq:"metodologjia",type:"Akademik",ex:"Die Forschungsmethodik. — Metodologjia e hulumtimit."},
  {de:"das Ergebnis",sq:"rezultati",type:"Akademik",ex:"Die Ergebnisse der Studie. — Rezultatet e studimit."},
  {de:"die Studie",sq:"studimi",type:"Akademik",ex:"Eine neue Studie zeigt... — Një studim i ri tregon..."},
  {de:"der Beweis",sq:"provë / evidencë",type:"Akademik",ex:"Der wissenschaftliche Beweis. — Prova shkencore."},
  {de:"die These",sq:"teza",type:"Akademik",ex:"Meine These ist folgende... — Teza ime është kjo..."},
  {de:"das Zitat",sq:"citati",type:"Akademik",ex:"Ein Zitat von Goethe. — Citat nga Goethe."},
  {de:"der Autor",sq:"autori",type:"Akademik",ex:"Der Autor des Buches. — Autori i librit."},
  {de:"die Quelle",sq:"burimi",type:"Akademik",ex:"Bitte gib die Quellen an! — Ju lutem trego burimet!"},
  {de:"das Kapitel",sq:"kreu / kapitulli",type:"Akademik",ex:"Das zweite Kapitel ist interessant. — Kreu i dytë është interesant."},
  {de:"der Absatz",sq:"paragrafi",type:"Akademik",ex:"Schreib einen neuen Absatz. — Shkruaj paragraf të ri."},
  {de:"die Einleitung",sq:"hyrja",type:"Akademik",ex:"Die Einleitung des Essays. — Hyrja e ese-së."},
  {de:"die Schlussfolgerung",sq:"përfundimi / konkluzioni",type:"Akademik",ex:"Die Schlussfolgerung des Berichts. — Konkluzioni i raportit."},

  // ── Lidhëzat dhe shprehjet e avancuara ──
  {de:"einerseits ... andererseits",sq:"nga njëra anë... nga ana tjetër",type:"Lidhëz",ex:"Einerseits ist es teuer, andererseits sehr gut. — Nga njëra anë është i shtrenjtë, nga ana tjetër shumë i mirë."},
  {de:"sowohl ... als auch",sq:"si... ashtu edhe",type:"Lidhëz",ex:"Sowohl Deutsch als auch Englisch. — Si gjermanisht ashtu edhe anglisht."},
  {de:"weder ... noch",sq:"as... as",type:"Lidhëz",ex:"Weder Fisch noch Fleisch. — As peshk as mish."},
  {de:"je ... desto",sq:"sa më shumë... aq më shumë",type:"Lidhëz",ex:"Je mehr ich lerne, desto besser werde ich. — Sa më shumë mësoj, aq më mirë bëhem."},
  {de:"zwar ... aber",sq:"vërtet... por",type:"Lidhëz",ex:"Es ist zwar teuer, aber gut. — Vërtet është i shtrenjtë, por i mirë."},
  {de:"nicht nur ... sondern auch",sq:"jo vetëm... por edhe",type:"Lidhëz",ex:"Nicht nur schön, sondern auch günstig. — Jo vetëm i bukur, por edhe me çmim të mirë."},
  {de:"anstatt",sq:"në vend të",type:"Lidhëz",ex:"Anstatt zu schlafen, arbeite ich. — Në vend të fle, punoj."},
  {de:"indem",sq:"duke...",type:"Lidhëz",ex:"Er lernt, indem er viel liest. — Ai mëson duke lexuar shumë."},
  {de:"sofern",sq:"me kusht që / nëse",type:"Lidhëz",ex:"Sofern du kommst, gehen wir. — Me kusht që të vish, shkojmë."},
  {de:"insofern",sq:"në atë masë sa",type:"Lidhëz",ex:"Das stimmt insofern, als... — Kjo është e saktë në atë masë sa..."},
  {de:"falls",sq:"në rast se",type:"Lidhëz",ex:"Falls du Hilfe brauchst, ruf an! — Në rast se ke nevojë për ndihmë, telefono!"},
  {de:"sobald",sq:"sapo / menjëherë pasi",type:"Lidhëz",ex:"Sobald ich fertig bin, komme ich. — Sapo të kem mbaruar, vij."},
  {de:"solange",sq:"për aq kohë sa / sa kohë që",type:"Lidhëz",ex:"Solange du studierst, zahle ich. — Sa kohë që studion, paguaj."},
  {de:"seitdem",sq:"që atëherë",type:"Lidhëz",ex:"Seitdem wohne ich in Berlin. — Që atëherë jetoj në Berlin."},
  {de:"nachdem",sq:"pasi",type:"Lidhëz",ex:"Nachdem ich gegessen hatte, schlief ich. — Pasi hëngra, fjeta."},
  {de:"bevor",sq:"para se",type:"Lidhëz",ex:"Bevor ich schlafe, lese ich. — Para se të fle, lexoj."},
  {de:"bis",sq:"deri / gjersa",type:"Lidhëz",ex:"Ich warte, bis du kommst. — Pres derisa të vish."},
  {de:"während",sq:"ndërkohë që / gjatë",type:"Lidhëz",ex:"Während ich esse, höre ich Musik. — Ndërkohë që ha, dëgjoj muzikë."},

  // ── Shprehje formale dhe akademike ──
  {de:"im Hinblick auf",sq:"në lidhje me / duke pasur parasysh",type:"Shprehje formale",ex:"Im Hinblick auf die Zukunft... — Duke pasur parasysh të ardhmen..."},
  {de:"im Gegensatz zu",sq:"në kundërshtim me / ndryshe nga",type:"Shprehje formale",ex:"Im Gegensatz zu früher... — Ndryshe nga më parë..."},
  {de:"in Bezug auf",sq:"në lidhje me / për sa i përket",type:"Shprehje formale",ex:"In Bezug auf Ihre Frage... — Për sa i përket pyetjes suaj..."},
  {de:"mit Blick auf",sq:"me syrin nga / duke parë",type:"Shprehje formale",ex:"Mit Blick auf die Ergebnisse... — Duke parë rezultatet..."},
  {de:"darüber hinaus",sq:"për më tepër / veç kësaj",type:"Shprehje formale",ex:"Darüber hinaus möchte ich sagen... — Veç kësaj dua të them..."},
  {de:"demzufolge",sq:"prandaj / rrjedhimisht",type:"Shprehje formale",ex:"Demzufolge müssen wir handeln. — Rrjedhimisht duhet të veprojmë."},
  {de:"hinsichtlich",sq:"për sa i përket",type:"Shprehje formale",ex:"Hinsichtlich der Kosten... — Për sa i përket kostove..."},
  {de:"infolgedessen",sq:"si pasojë e kësaj",type:"Shprehje formale",ex:"Infolgedessen kam es zu Problemen. — Si pasojë e kësaj lindën probleme."},
  {de:"nichtsdestotrotz",sq:"megjithatë",type:"Shprehje formale",ex:"Nichtsdestotrotz machen wir weiter. — Megjithatë vazhdojmë."},
  {de:"gleichwohl",sq:"megjithëkëtë",type:"Shprehje formale",ex:"Gleichwohl bleibt die Frage offen. — Megjithëkëtë pyetja mbetet e hapur."},

  // ── Profesione dhe fushë specializimi ──
  {de:"der Rechtsanwalt",sq:"avokati",type:"Profesion",ex:"Ich brauche einen Rechtsanwalt. — Kam nevojë për avokat."},
  {de:"der Steuerberater",sq:"këshilltari tatimor",type:"Profesion",ex:"Mein Steuerberater hilft mir. — Këshilltari im tatimor më ndihmon."},
  {de:"der Architekt",sq:"arkitekti",type:"Profesion",ex:"Der Architekt entwirft das Gebäude. — Arkitekti harton ndërtesën."},
  {de:"der Psychologe",sq:"psikologu",type:"Profesion",ex:"Er ist Psychologe. — Ai është psikolog."},
  {de:"der Sozialarbeiter",sq:"punëtori social",type:"Profesion",ex:"Sie ist Sozialarbeiterin. — Ajo është punëtore sociale."},
  {de:"der Journalist",sq:"gazetari",type:"Profesion",ex:"Der Journalist berichtet. — Gazetari raporton."},
  {de:"der Übersetzer",sq:"përkthyesi",type:"Profesion",ex:"Ich brauche einen Übersetzer. — Kam nevojë për përkthyes."},
  {de:"der Diplomat",sq:"diplomati",type:"Profesion",ex:"Er arbeitet als Diplomat. — Ai punon si diplomat."},
  {de:"der Wissenschaftler",sq:"shkencëtari",type:"Profesion",ex:"Die Wissenschaftler forschen. — Shkencëtarët hulumtojnë."},
  {de:"der Unternehmer",sq:"sipërmarrësi",type:"Profesion",ex:"Er ist ein erfolgreicher Unternehmer. — Ai është sipërmarrës i suksesshëm."},
  {de:"der Freiberufler",sq:"i pavarur profesional",type:"Profesion",ex:"Ich bin Freiberufler. — Jam profesionist i pavarur."},
  {de:"der Rentner",sq:"pensionisti",type:"Profesion",ex:"Er ist Rentner seit drei Jahren. — Ai është pensionist prej tre vitesh."},

  // ── Ndajfolje dhe shprehje B1 ──
  {de:"allerdings",sq:"megjithatë / sidoqoftë",type:"Ndajfolje",ex:"Das ist gut, allerdings teuer. — Kjo është mirë, megjithatë e shtrenjtë."},
  {de:"außerdem",sq:"gjithashtu / veç kësaj",type:"Ndajfolje",ex:"Außerdem habe ich noch ein Problem. — Gjithashtu kam edhe problem tjetër."},
  {de:"dagegen",sq:"kundër kësaj / nga ana tjetër",type:"Ndajfolje",ex:"Ich bin dagegen. — Jam kundër kësaj."},
  {de:"dafür",sq:"për këtë / si kompensim",type:"Ndajfolje",ex:"Ich bin dafür. — Jam për këtë."},
  {de:"dennoch",sq:"megjithatë",type:"Ndajfolje",ex:"Dennoch mache ich weiter. — Megjithatë vazhdoj."},
  {de:"deshalb",sq:"prandaj",type:"Ndajfolje",ex:"Deshalb lerne ich Deutsch. — Prandaj mësoj gjermanisht."},
  {de:"doch",sq:"megjithatë / por / po",type:"Ndajfolje",ex:"Das stimmt doch! — Kjo është e saktë megjithatë!"},
  {de:"eigentlich",sq:"në fakt / të vërtetë",type:"Ndajfolje",ex:"Eigentlich wollte ich... — Në fakt dëshiroja..."},
  {de:"ebenso",sq:"njëlloj / gjithashtu",type:"Ndajfolje",ex:"Das gilt ebenso für mich. — Kjo vlen njëlloj edhe për mua."},
  {de:"immerhin",sq:"gjithsesi / të paktën",type:"Ndajfolje",ex:"Immerhin hat er versucht. — Gjithsesi ka provuar."},
  {de:"inzwischen",sq:"ndërkohë / tashmë",type:"Ndajfolje",ex:"Inzwischen habe ich gelernt. — Ndërkohë kam mësuar."},
  {de:"jedenfalls",sq:"sidoqoftë / në çdo rast",type:"Ndajfolje",ex:"Jedenfalls komme ich. — Sidoqoftë, vij."},
  {de:"lediglich",sq:"vetëm / thjesht",type:"Ndajfolje",ex:"Ich sage lediglich die Wahrheit. — Them vetëm të vërtetën."},
  {de:"mittlerweile",sq:"ndërkohë / tani tashmë",type:"Ndajfolje",ex:"Mittlerweile spreche ich gut Deutsch. — Tani flas mirë gjermanisht."},
  {de:"ohnehin",sq:"gjithsesi / pa e thënë",type:"Ndajfolje",ex:"Das war ohnehin klar. — Kjo ishte e qartë gjithsesi."},
  {de:"schließlich",sq:"në fund / në fund të fundit",type:"Ndajfolje",ex:"Schließlich hat er eingestimmt. — Në fund ai pranoi."},
  {de:"schon",sq:"tashmë / tanimë",type:"Ndajfolje",ex:"Ich bin schon hier. — Jam tashmë këtu."},
  {de:"sicherlich",sq:"sigurisht / pa dyshim",type:"Ndajfolje",ex:"Das ist sicherlich richtig. — Kjo është sigurisht e saktë."},
  {de:"sozusagen",sq:"si të thuash",type:"Ndajfolje",ex:"Das ist sozusagen mein Hobby. — Kjo është, si të thuash, hobi im."},
  {de:"übrigens",sq:"për të treguar diçka tjetër / nga rruga",type:"Ndajfolje",ex:"Übrigens, ich habe etwas vergessen. — Nga rruga, kam harruar diçka."},
  {de:"vielmehr",sq:"më saktë / por jo, por",type:"Ndajfolje",ex:"Das ist nicht falsch, vielmehr unvollständig. — Kjo nuk është e gabuar, por jo e plotë."},
  {de:"womöglich",sq:"ndoshta / me sa duket",type:"Ndajfolje",ex:"Womöglich hat er recht. — Ndoshta ka të drejtë."},
  {de:"zweifellos",sq:"pa dyshim",type:"Ndajfolje",ex:"Das ist zweifellos richtig. — Kjo është pa dyshim e saktë."},
]
};

// Total count


// ════════════════════════════════════════════
// VOCAB BROWSER DATA
// ════════════════════════════════════════════
let ALL_VOCAB = {};


// ════════════════════════════════════════════════════════════════
// DEUTSCHAL — UPGRADE ENGINE v2.0
// Expands existing modules with:
//   - Extended dialogues with emotional depth
//   - "Think in German" moments
//   - Speaking prompts & reaction scenarios
//   - Story continuity across all levels
//   - Spaced repetition of older vocabulary
// ════════════════════════════════════════════════════════════════

const MODULE_UPGRADES = {

// ════════════════════════
// A1 UPGRADES
// ════════════════════════

'a1m1': {
  storyExtension: [
    {type:'narr', text:'Nach dem Gespräch zeigt Frau Bauer Dion sein Zimmer. Dion ist nervös, aber auch aufgeregt.'},
    {type:'line', speaker:'Znj. Bauer', de:'Ihr Zimmer ist hier — im zweiten Stock. Ist es okay für Sie?', sq:'Dhoma juaj është këtu — në katin e dytë. A është mirë për ju?'},
    {type:'line', speaker:'Dion', de:'Ja, es ist perfekt! Danke sehr. Ich bin sehr müde nach der langen Reise.', sq:'Po, është perfekte! Shumë faleminderit. Jam shumë i lodhur pas udhëtimit të gjatë.'},
    {type:'line', speaker:'Znj. Bauer', de:'Natürlich! Ruhen Sie sich aus. Das Abendessen ist um 19 Uhr. Mögen Sie Suppe?', sq:'Natyrisht! Pushoni. Darka është në orën 19. Ju pëlqen supa?'},
    {type:'line', speaker:'Dion', de:'Ja, sehr gern! In Albanien essen wir auch oft Suppe. Das ist wie zu Hause!', sq:'Po, shumë! Edhe në Shqipëri hamë shpesh supë. Kjo është si në shtëpi!'},
    {type:'line', speaker:'Hr. Bauer', de:'Woher in Kosovo kommen Sie genau?', sq:'Nga ku saktësisht në Kosovë vini?'},
    {type:'line', speaker:'Dion', de:'Aus Pristina, der Hauptstadt des Kosovo. Kennen Sie Kosovo?', sq:'Nga Prishtina, kryeqyteti i Kosovës. E njihni Kosovën?'},
    {type:'line', speaker:'Hr. Bauer', de:'Ein bisschen. Ich war einmal in Shkodra — eine wunderschöne Stadt!', sq:'Pak. Kam qenë njëherë në Shkodër — qytet i mrekullueshëm!'},
    {type:'line', speaker:'Dion', de:'Oh wirklich? Das freut mich sehr! Shkodra ist wirklich schön.', sq:'Oh vërtet? Kjo më gëzon shumë! Shkodra është vërtet e bukur.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Dion takon fqinjin për herë të parë. Si prezantohet?',
      hint: 'Ich heiße... / Ich komme aus... / Es freut mich!',
      example: 'Guten Tag! Ich heiße Dion. Ich komme aus Kosovo. Es freut mich, Sie kennenzulernen!',
      level: 'A1'
    },
    {
      prompt: 'Znj. Bauer pyet: "Wie geht es Ihnen?" — Çfarë i përgjigjeris?',
      hint: 'Gut, danke! / Sehr gut! / Es geht.',
      example: 'Gut, danke! Ich bin müde, aber sehr froh, hier zu sein.',
      level: 'A1'
    },
    {
      prompt: 'Dikush thotë "Willkommen in Deutschland!" — Si i përgjigjeris me mirësi?',
      hint: 'Danke! / Ich freue mich... / Es ist wunderschön hier.',
      example: 'Vielen Dank! Ich freue mich sehr, hier zu sein. Es ist wunderschön!',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Në bujtinë',
      situation: 'Ti mbrin në hotel dhe receptionisti ju pret. Si kryeni check-in?',
      lines: [
        {speaker:'Receptionist', de:'Guten Abend! Haben Sie eine Reservierung?', sq:'Mirëmbrëma! Keni rezervim?'},
        {speaker:'Ti (përgjigju)', de:'Ja, auf den Namen... Ich habe für zwei Nächte reserviert.', sq:'Po, në emrin... Kam rezervuar për dy netë.'},
        {speaker:'Receptionist', de:'Sehr gut. Hier ist Ihr Schlüssel — Zimmer 204. Brauchen Sie Hilfe mit dem Gepäck?', sq:'Shumë mirë. Ja çelësi — dhoma 204. Keni nevojë për ndihmë me bagazhin?'},
        {speaker:'Ti', de:'Nein danke, ich schaffe das. Um wie viel Uhr gibt es Frühstück?', sq:'Jo faleminderit, e bëj vetë. Në çfarë ore është mëngjesi?'},
      ]
    }
  ]
},

'a1m2': {
  storyExtension: [
    {type:'narr', text:'Ditën tjetër, Dion shkon me Znj. Bauer në treg. Duhet të blejë disa gjëra bazike. Por nuk di çmimet gjermane.'},
    {type:'line', speaker:'Znj. Bauer', de:'Hier ist der Markt. Was brauchen Sie?', sq:'Këtu është tregu. Çfarë ju duhet?'},
    {type:'line', speaker:'Dion', de:'Ich brauche Äpfel, Brot und Wasser. Wie viel kostet das alles ungefähr?', sq:'Më duhen mollë, bukë dhe ujë. Sa kushton gjithçka përafërsisht?'},
    {type:'line', speaker:'Znj. Bauer', de:'Etwa fünf bis sieben Euro, schätze ich. Deutsches Brot ist sehr gut!', sq:'Rreth pesë deri shtatë euro, mendoj. Buka gjermane është shumë e mirë!'},
    {type:'line', speaker:'Shitësi', de:'Guten Morgen! Was darf es sein?', sq:'Mirëmëngjes! Çfarë dëshironi?'},
    {type:'line', speaker:'Dion', de:'Guten Morgen! Ich möchte einen Kilo Äpfel, bitte. Was kosten die?', sq:'Mirëmëngjes! Dua një kilogram mollë, ju lutem. Sa kushtojnë?'},
    {type:'line', speaker:'Shitësi', de:'Die Äpfel kosten zwei Euro fünfzig das Kilo. Sehr frisch, direkt vom Bauern!', sq:'Mollët kushtojnë dy euro e pesëdhjetë kilogrami. Shumë të freskëta, direkt nga fermeri!'},
    {type:'line', speaker:'Dion', de:'Gut. Und haben Sie auch Bananen? Wie viel kosten die?', sq:'Mirë. Dhe keni edhe banane? Sa kushtojnë?'},
    {type:'line', speaker:'Shitësi', de:'Bananen kosten einen Euro neunzig. Zusammen macht das vier Euro vierzig.', sq:'Bananet kushtojnë një euro e nëntëdhjetë. Bashkë bën katër euro e dyzet.'},
    {type:'line', speaker:'Dion', de:'Ich gebe Ihnen fünf Euro. Stimmt so!', sq:'Ju jap pesë euro. Mund ta mbani kusuri!'},
    {type:'narr', text:'Dion kujton: Në Shqipëri "stimmt so" nuk ekziston — por këtu kjo tregon mirësi!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Ti je në treg. Shitësi të pyet "Was darf es sein?" — Çfarë i thua? (dëshiron: 2 kg patate, 1 kg domate)',
      hint: 'Ich möchte... / Zwei Kilo... / Was kosten die...?',
      example: 'Ich möchte zwei Kilo Kartoffeln und ein Kilo Tomaten, bitte. Was kosten die zusammen?',
      level: 'A1'
    },
    {
      prompt: 'Numëro me zë: 13, 27, 45, 68, 99 — thuaji gjermanisht',
      hint: 'dreizehn, siebenundzwanzig...',
      example: 'dreizehn — siebenundzwanzig — fünfundvierzig — achtundsechzig — neunundneunzig',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Pagesa gabim',
      situation: 'Ke dhënë 10€ por merr kusur sikur ke dhënë 5€. Si e korrigjon?',
      lines: [
        {speaker:'Shitësi', de:'Hier ist Ihr Wechselgeld — zwei Euro.', sq:'Ja kusuri juaj — dy euro.'},
        {speaker:'Ti', de:'Entschuldigung, ich glaube, es gibt einen Fehler. Ich habe zehn Euro gegeben, nicht fünf.', sq:'Më fal, besoj ka gabim. Kam dhënë dhjetë euro, jo pesë.'},
        {speaker:'Shitësi', de:'Oh! Entschuldigung! Sie haben recht. Hier ist Ihr richtiges Wechselgeld — sieben Euro.', sq:'Oh! Falje! Keni të drejtë. Ja kusuri i saktë — shtatë euro.'},
        {speaker:'Ti', de:'Danke schön! Kein Problem.', sq:'Shumë faleminderit! Nuk ka problem.'},
      ]
    }
  ]
},

'a1m3': {
  storyExtension: [
    {type:'narr', text:'Klea, kolega e Dionit, e fton të shikojnë fotografi nga Kosova. Dion emocionohet duke folur për familjen e tij.'},
    {type:'line', speaker:'Klea', de:'Ich sehe, du schaust oft auf dein Handy. Hast du Heimweh?', sq:'Shoh që shpesh shikon telefonin. A ke mall për shtëpinë?'},
    {type:'line', speaker:'Dion', de:'Ja, ein bisschen. Meine Familie ist weit weg. Ich schreibe meiner Mutter jeden Tag.', sq:'Po, pak. Familja ime është larg. I shkruaj nënës çdo ditë.'},
    {type:'line', speaker:'Klea', de:'Das ist süß! Wie groß ist deine Familie?', sq:'Kjo është e ëmbël! Sa e madhe është familja jote?'},
    {type:'line', speaker:'Dion', de:'Wir sind fünf Personen: meine Eltern, mein Bruder Ardit, meine Schwester Besa und ich.', sq:'Jemi pesë persona: prindërit e mi, vëllai im Ardit, motra ime Besa dhe unë.'},
    {type:'line', speaker:'Klea', de:'Und was machen deine Eltern beruflich?', sq:'Dhe çfarë bëjnë prindërit e tu profesionalisht?'},
    {type:'line', speaker:'Dion', de:'Mein Vater ist Ingenieur und meine Mutter ist Lehrerin. Sie unterrichtet Mathematik.', sq:'Babai im është inxhinier dhe nëna ime është mësuese. Ajo mëson matematikë.'},
    {type:'line', speaker:'Klea', de:'Interessant! Und vermisst du sie sehr?', sq:'Interesante! Dhe i mungon shumë?'},
    {type:'line', speaker:'Dion', de:'Ja, sehr. Aber ich rufe sie jeden Sonntag per Video an. Das hilft!', sq:'Po, shumë. Por i telefonoj çdo të diele me video. Kjo ndihmon!'},
    {type:'line', speaker:'Klea', de:'Das verstehe ich. Meine Familie wohnt auch weit weg — in Hamburg.', sq:'E kuptoj. Familja ime gjithashtu banon larg — në Hamburg.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Dikush të pyet "Wie groß ist deine Familie?" — Përshkruaj familjen tënde',
      hint: 'Wir sind... Personen / Mein Vater ist... / Meine Mutter ist...',
      example: 'Wir sind vier Personen: meine Eltern, meine Schwester und ich. Mein Vater ist Arzt und meine Mutter arbeitet in einer Bank.',
      level: 'A1'
    },
    {
      prompt: 'Si thuhet: "Vajza ime ka 8 vjeç dhe djali im ka 12 vjeç"?',
      hint: 'Meine Tochter ist... Jahre alt / Mein Sohn ist...',
      example: 'Meine Tochter ist acht Jahre alt und mein Sohn ist zwölf Jahre alt.',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Video-thirrje me familjen',
      situation: 'Flet me nënën tënde në video. Ajo pyet për jetën e re në Gjermani.',
      lines: [
        {speaker:'Nëna', de:'Hallo mein Schatz! Wie geht es dir? Isst du gut?', sq:'Ç\'kemi zemra ime! Si je? Ha mirë?'},
        {speaker:'Ti', de:'Hallo Mama! Mir geht es gut! Ja, Frau Bauer kocht sehr gut. Heute gab es Suppe!', sq:'Ç\'kemi nëna! Jam mirë! Po, Znj. Bauer gatuon shumë mirë. Sot kishte supë!'},
        {speaker:'Nëna', de:'Wann kommst du nach Hause? Dein Vater fragt jeden Tag!', sq:'Kur vjen në shtëpi? Babai yt pyet çdo ditë!'},
        {speaker:'Ti', de:'Im Sommer, Mama. Im Juli, ich glaube. Ich vermisse euch alle so sehr!', sq:'Në verë, nëna. Në korrik, mendoj. Ju kam shumë mall të gjithëve!'},
      ]
    }
  ]
},

'a1m4': {
  storyExtension: [
    {type:'narr', text:'Dion mëson se gjermanët janë shumë seriozë me mëngjeset. Znj. Bauer ka bërë tavolinë të plotë.'},
    {type:'line', speaker:'Znj. Bauer', de:'Guten Morgen, Dion! Haben Sie gut geschlafen?', sq:'Mirëmëngjes, Dion! Keni fjetur mirë?'},
    {type:'line', speaker:'Dion', de:'Ja, sehr gut, danke! Das Bett ist sehr bequem. Oh — was ist das alles?', sq:'Po, shumë mirë, faleminderit! Krevati është shumë i rehatshëm. Oh — çfarë janë të gjitha këto?'},
    {type:'line', speaker:'Znj. Bauer', de:'Das ist ein typisches deutsches Frühstück! Brot, Butter, Käse, Wurst, Marmelade, Müsli...', sq:'Ky është mëngjes tipik gjerman! Bukë, gjalpë, djathë, sallam, reçel, muesli...'},
    {type:'line', speaker:'Dion', de:'Das ist viel mehr als in Albanien! Bei uns gibt es morgens oft nur Kaffee und Brot.', sq:'Kjo është shumë më tepër se në Shqipëri! Tek ne shpesh ka vetëm çaj dhe bukë.'},
    {type:'line', speaker:'Znj. Bauer', de:'Frühstück ist die wichtigste Mahlzeit! Möchten Sie Rührei dazu?', sq:'Mëngjesi është vakti më i rëndësishëm! Dëshironi vezë të fërguar?'},
    {type:'line', speaker:'Dion', de:'Ja, gerne! Darf ich fragen — was ist Müsli genau?', sq:'Po, me dëshirë! Mund të pyes — çfarë është saktësisht muesli?'},
    {type:'line', speaker:'Znj. Bauer', de:'Müsli ist eine Mischung aus Haferflocken, Nüssen und Trockenfrüchten. Sehr gesund!', sq:'Muesli është përzieje e thekoneve të tërshërës, arrave dhe frutave të thata. Shumë e shëndetshme!'},
    {type:'line', speaker:'Dion', de:'Ah! Bei uns gibt es Byrek zum Frühstück. Das ist Gebäck mit Käse oder Spinat.', sq:'Ah! Tek ne ka byrek për mëngjes. Kjo është pite me djathë ose spinaq.'},
    {type:'line', speaker:'Znj. Bauer', de:'Das klingt köstlich! Sie müssen mir das Rezept geben!', sq:'Kjo tingëllon e shijshme! Duhet të më jepni recetën!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Ke alergjia ndaj arrave. Kamerieri pyet çfarë dëshiron. Çfarë i thua?',
      hint: 'Ich möchte... aber ohne... / Ich habe eine Allergie gegen Nüsse',
      example: 'Ich hätte gern das Müsli, aber bitte ohne Nüsse. Ich habe eine Allergie. Haben Sie etwas anderes?',
      level: 'A1'
    },
    {
      prompt: 'Shpjego çfarë ha zakonisht për mëngjes — në gjermanisht!',
      hint: 'Zum Frühstück esse ich... / Ich trinke... / Ich mag...',
      example: 'Zum Frühstück esse ich Brot mit Butter und Marmelade. Ich trinke immer Kaffee mit Milch, aber ohne Zucker.',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Restoranti — Porosi e komplikuar',
      situation: 'Je me miqtë. Shoku yt është vegjetarian, motra jote ka alergjia. Ti porositësh.',
      lines: [
        {speaker:'Kamerieri', de:'Guten Abend! Was darf ich Ihnen bringen?', sq:'Mirëmbrëma! Çfarë mund t\'ju sjell?'},
        {speaker:'Ti', de:'Also, für mich bitte die Suppe und danach das Hähnchen. Mein Freund hier ist Vegetarier — was empfehlen Sie?', sq:'Pra, për mua supën dhe pastaj pulën. Miku im këtu është vegjetarian — çfarë rekomandoni?'},
        {speaker:'Kamerieri', de:'Wir haben sehr gute Gemüsepasta oder Gemüserisotto. Beides ohne Fleisch.', sq:'Kemi makarona perimesh shumë të mira ose risotto perimesh. Të dyja pa mish.'},
        {speaker:'Ti', de:'Die Pasta, bitte. Und meine Schwester hat eine Allergie gegen Erdnüsse. Ist das Risotto sicher?', sq:'Makaronat, ju lutem. Dhe motra ime ka alergjia ndaj kikiriqeve. A është risotto i sigurt?'},
        {speaker:'Kamerieri', de:'Ja, absolut! Keine Erdnüsse. Darf ich noch etwas für Sie tun?', sq:'Po, absolutisht! Asnjë kikiriqe. Mund të bëj edhe diçka tjetër për ju?'},
      ]
    }
  ]
},

// A2 UPGRADES — deeper, more complex, emotional
'a2m1': {
  storyExtension: [
    {type:'narr', text:'Gjashtë muaj pas Vjenës, Dion është tani në Berlin. Jeta ka ndryshuar tërësisht — punë, apartament i ri, ritëm i ri. Por edhe sfida të reja.'},
    {type:'line', speaker:'Kolegu Jonas', de:'Dion, du siehst müde aus. Schläfst du nicht gut?', sq:'Dion, dukesh i lodhur. Nuk fle mirë?'},
    {type:'line', speaker:'Dion', de:'Nein, ehrlich gesagt nicht. Ich schlafe jetzt erst um ein Uhr, weil ich noch arbeite.', sq:'Jo, sinqerisht jo. Tani fle vetëm në orën një, sepse ende punoj.'},
    {type:'line', speaker:'Jonas', de:'Das ist nicht gesund. Du brauchst mindestens sieben Stunden Schlaf. Was machst du abends?', sq:'Kjo nuk është e shëndetshme. Të duhen të paktën shtatë orë gjumë. Çfarë bën mbrëmjeve?'},
    {type:'line', speaker:'Dion', de:'Ich schaue Nachrichten auf Albanisch, lerne Deutsch, koche — und dann ist es schon Mitternacht!', sq:'Shoh lajme në shqip, mësoj gjermanisht, gatuaj — dhe pastaj është tashmë mesnata!'},
    {type:'line', speaker:'Jonas', de:'Ich verstehe das. Als ich neu in Berlin war, hatte ich auch keinen Rhythmus. Es dauert.', sq:'E kuptoj. Kur isha i ri në Berlin, edhe unë nuk kisha ritëm. Kërkon kohë.'},
    {type:'line', speaker:'Dion', de:'Wie lange hat es bei dir gedauert, bis du dich hier zu Hause gefühlt hast?', sq:'Sa kohë të mori ty derisa u ndjeve si në shtëpi?'},
    {type:'line', speaker:'Jonas', de:'Etwa ein Jahr. Aber jetzt liebe ich Berlin! Und du wirst es auch lieben — ich verspreche das.', sq:'Rreth një vit. Por tani e dua Berlinin! Edhe ti do ta duash — ta premtoj.'},
    {type:'line', speaker:'Dion', de:'Danke, Jonas. Das gibt mir Hoffnung. Übrigens — wie sagst du "ich bin erschöpft" auf Berlinerisch?', sq:'Faleminderit, Jonas. Kjo më jep shpresë. Nga rruga — si thuhet "jam i rraskapitur" në gjermanishten e Berlinit?'},
    {type:'line', speaker:'Jonas', de:'Haha! Wir sagen: "Ich bin am Ende" oder "Ich bin platt". Das lernst du schnell!', sq:'Haha! Ne themi: "Jam i mbaruar" ose "Jam sheshëzuar". Këtë do ta mësosh shpejt!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shoku pyet: "Was machst du morgen früh?" — Përshkruaj rutinën tënde të mëngjesit',
      hint: 'Ich stehe um... auf / Zuerst... / Dann... / Danach...',
      example: 'Morgen stehe ich um sechs Uhr auf. Zuerst dusche ich, dann frühstücke ich schnell. Danach fahre ich mit der U-Bahn zur Arbeit. Um acht Uhr bin ich im Büro.',
      level: 'A2'
    },
    {
      prompt: 'Jonas thotë: "Du solltest früher schlafen gehen." — A pajtoheris? Përgjigju me argument!',
      hint: 'Ich stimme zu / Du hast recht, aber... / Das stimmt, jedoch...',
      example: 'Du hast recht, aber das ist leichter gesagt als getan! Wenn ich abends nach Hause komme, bin ich zwar müde, aber mein Kopf läuft noch. Ich versuche es trotzdem.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Takimi i parë me kolegët',
      situation: 'Dita e parë në punë të re. Duhet të prezantohesh para gjithë ekipit.',
      lines: [
        {speaker:'Shefi', de:'Darf ich vorstellen — das ist Dion, unser neuer Kollege aus Kosovo!', sq:'Mund t\'ju prezantoj — ky është Dion, kolegu ynë i ri nga Kosova!'},
        {speaker:'Ti (Dion)', de:'Hallo zusammen! Ich freue mich sehr, bei euch zu sein. Ich komme aus Tirana und bin seit sechs Monaten in Deutschland. Ich arbeite als Softwareentwickler und lerne gerade Deutsch — also bitte habt etwas Geduld mit mir!', sq:'Përshëndetje të gjithëve! Jam shumë i gëzuar të jem me ju. Vij nga Tirana dhe jam gjashtë muaj në Gjermani. Punoj si zhvillues softueri dhe po mësoj gjermanisht — prandaj ju lutem kini pak durim me mua!'},
        {speaker:'Kolegu', de:'Dein Deutsch ist schon sehr gut! Woher hast du es gelernt?', sq:'Gjermanishtja jote është tashmë shumë e mirë! Ku e ke mësuar?'},
        {speaker:'Ti', de:'Danke! Ich hatte einen Kurs in Wien und lerne seit einem Jahr. Ich übe jeden Tag.', sq:'Faleminderit! Pata kurs në Vjenë dhe mësoj prej një viti. Ushtroj çdo ditë.'},
      ]
    }
  ]
},

'a2m2': {
  storyExtension: [
    {type:'narr', text:'E hënë në mëngjes. Dion dhe Jonas hanë bashkë në menze të kompanisë. Jonas e pyet mbi fundjavën.'},
    {type:'line', speaker:'Jonas', de:'Na, wie war dein Wochenende? Hast du was Interessantes gemacht?', sq:'Eja, si ishte fudnjava jote? Ke bërë diçka interesante?'},
    {type:'line', speaker:'Dion', de:'Ja! Am Samstag bin ich zum ersten Mal in ein deutsches Museum gegangen — das Pergamonmuseum!', sq:'Po! Të shtunën shkova për herë të parë në muzeun gjerman — Muzeun Pergamon!'},
    {type:'line', speaker:'Jonas', de:'Oh wow! Was hast du gedacht? Es ist riesig, oder?', sq:'Oh wow! Çfarë mendove? Është gjigant, apo jo?'},
    {type:'line', speaker:'Dion', de:'Ich war total überfordert! So viel Geschichte auf einmal. Ich habe drei Stunden gebraucht.', sq:'Isha totalisht i mbingarkuar! Aq shumë histori menjëherë. M\'u deshën tre orë.'},
    {type:'line', speaker:'Jonas', de:'Und sonst? Bist du auch rausgegangen am Abend?', sq:'Dhe tjetër? Dole edhe mbrëmjen?'},
    {type:'line', speaker:'Dion', de:'Ja, ich bin mit zwei Albanern aus dem Kurs essen gegangen. Wir haben ein griechisches Restaurant gefunden.', sq:'Po, shkova me dy shqiptarë nga kursi për të ngrënë. Gjetëm restorant grek.'},
    {type:'line', speaker:'Jonas', de:'Habt ihr viel Albanisch gesprochen?', sq:'Keni folur shumë shqip?'},
    {type:'line', speaker:'Dion', de:'Nein! Wir haben eine Regel: im Restaurant nur Deutsch! Es war lustig und anstrengend gleichzeitig.', sq:'Jo! Kemi rregull: në restorant vetëm gjermanisht! Ishte qesharake dhe e lodhshme njëkohësisht.'},
    {type:'line', speaker:'Jonas', de:'Das ist die beste Übungsmethode! Ihr lernt schneller als ihr denkt.', sq:'Kjo është metoda më e mirë e ushtrimit! Mësoni më shpejt nga sa mendoni.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Rrëfeje fundjavën tënde të fundit — në gjermanisht, duke përdorur Perfekt',
      hint: 'Am Samstag habe ich... / Am Sonntag bin ich... / Dann habe ich...',
      example: 'Am Samstag habe ich lange geschlafen, dann habe ich eingekauft. Am Nachmittag habe ich einen Freund getroffen und wir sind in den Park gegangen. Am Abend habe ich gekocht und einen Film geschaut.',
      level: 'A2'
    },
    {
      prompt: 'Jonas thotë "Das Pergamonmuseum ist das beste Museum in Berlin!" — A pajtoheris? Jep mendimin tënd!',
      hint: 'Ich finde auch... / Meiner Meinung nach... / Ich stimme zu, aber...',
      example: 'Ich finde es auch sehr beeindruckend! Aber meiner Meinung nach ist das Jüdische Museum emotionaler. Beide sind anders — und beide sind sehenswert.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Trego ngjarje nga e kaluara',
      situation: 'Shoku nga Shqipëria të pyet si e kalon. Ti tregon diçka që ndodhi gjatë javës.',
      lines: [
        {speaker:'Shoku', de:'Hey! Was ist diese Woche passiert? Erzähl mal!', sq:'Hej! Çfarë ka ndodhur këtë javë? Trego!'},
        {speaker:'Ti', de:'Also, am Dienstag hatte ich ein Problem mit dem Computer bei der Arbeit. Ich habe zwei Stunden verloren! Mein Chef war nicht so glücklich.', sq:'Pra, të martën pata problem me kompjuterin në punë. Humba dy orë! Shefi im nuk ishte shumë i kënaqur.'},
        {speaker:'Shoku', de:'Oh nein! Und was ist passiert danach?', sq:'Oh jo! Dhe çfarë ndodhi pastaj?'},
        {speaker:'Ti', de:'Jonas hat mir geholfen. Er hat alles repariert in dreißig Minuten! Er ist wirklich ein Genie.', sq:'Jonas më ndihmoi. Riparoi gjithçka në tridhjetë minuta! Ai është vërtet gjeni.'},
      ]
    }
  ]
},

// B1 UPGRADES — real life, opinions, complexity
'b1m1': {
  storyExtension: [
    {type:'narr', text:'Dion ka jetuar dy vjet në Gjermani. Tani flet rrjedhshëm, por ende ka momente ku kultura gjermane e befason. Sot ka bisedë serioze me miken e tij Klea mbi vendimin — qëndron apo kthehet?'},
    {type:'line', speaker:'Klea', de:'Dion, ich muss dich etwas fragen. Und ich meine es ernst.', sq:'Dion, duhet të të pyes diçka. Dhe e kuptoj seriozisht.'},
    {type:'line', speaker:'Dion', de:'Natürlich. Was ist los?', sq:'Natyrisht. Çfarë ka?'},
    {type:'line', speaker:'Klea', de:'Du wirkst in letzter Zeit... zerrissen. Als würdest du irgendwo zwischen zwei Welten schweben.', sq:'Kohën e fundit dukesh... i ndarë. Sikur të lëvizësh midis dy botëve.'},
    {type:'line', speaker:'Dion', de:'Das ist... genau das richtige Wort. Zerrissen. Ich gehöre weder ganz hierher noch ganz nach Albanien mehr.', sq:'Kjo është... saktësisht fjala e drejtë. I ndarë. Nuk i takoj tërësisht as këtu as Shqipërisë më.'},
    {type:'line', speaker:'Klea', de:'Ist das schlimm? Oder ist das vielleicht eine Stärke?', sq:'A është kjo keq? Apo është ndoshta një forcë?'},
    {type:'line', speaker:'Dion', de:'Das habe ich noch nicht so gesehen. Eine Stärke... Ich spreche zwei Sprachen, denke in zwei Kulturen...', sq:'Kështu nuk e kam parë ende. Një forcë... Flas dy gjuhë, mendoj në dy kultura...'},
    {type:'line', speaker:'Klea', de:'Genau das meine ich. Du bist eine Brücke. Das ist selten und wertvoll.', sq:'Pikërisht këtë kuptoj. Ti je urë. Kjo është e rrallë dhe e çmuar.'},
    {type:'line', speaker:'Dion', de:'Weißt du was? Ich glaube, du hast recht. Ich bleibe — aber ich bleibe als ich selbst, nicht als jemand, der versucht, Deutscher zu werden.', sq:'E di çfarë? Besoj ke të drejtë. Qëndroj — por qëndroj si vetja ime, jo si dikush që përpiqet të bëhet gjerman.'},
    {type:'line', speaker:'Klea', de:'Das ist die reifste Aussage, die ich je von dir gehört habe. Prost darauf!', sq:'Kjo është deklarata më e maturë që kam dëgjuar ndonjëherë prej teje. Gëzuar për këtë!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Klea thotë: "Fühlst du dich in Deutschland wohl?" — Jep përgjigje të plotë me ndjenja dhe arsye',
      hint: 'Ich fühle mich... / Einerseits... andererseits... / Was mir gefällt ist... / Was mir manchmal fehlt...',
      example: 'Ich fühle mich meistens wohl hier. Einerseits genieße ich die Freiheit, die Ordnung und die Möglichkeiten. Andererseits fehlt mir manchmal die Wärme und Spontaneität meiner Heimat. Aber ich glaube, das ist normal für jeden Migranten.',
      level: 'B1'
    },
    {
      prompt: 'Jep mendimin tënd: "Ist es besser, in Deutschland oder in Albanien zu leben?" — Argument me dy anë',
      hint: 'In Deutschland hat man... / In Albanien hingegen... / Das Wichtigste ist jedoch...',
      example: 'Das ist schwer zu sagen, weil es von den Prioritäten abhängt. In Deutschland hat man mehr Stabilität, bessere Infrastruktur und höhere Löhne. In Albanien hingegen ist die Lebensqualität durch Familie, Klima und Kosten oft besser. Das Wichtigste ist jedoch, wo man glücklich ist.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Diskutim mbi emigrimin',
      situation: 'Jeni në kafene. Një gjerman i pyet emigrantët: "Warum kommen so viele Menschen nach Deutschland?" — Përgjigju me qetësi dhe argument.',
      lines: [
        {speaker:'Gjermani', de:'Ich frage mich manchmal — warum verlassen so viele junge Leute ihre Heimat? Ist es nur wegen des Geldes?', sq:'Ndonjëherë pyes veten — pse largohen kaq shumë të rinj nga vendlindja e tyre? A është vetëm për para?'},
        {speaker:'Ti', de:'Nicht nur. Geld ist natürlich ein Faktor, aber viele kommen auch wegen besserer Bildung, Stabilität, Sicherheit. In meinem Land ist die Situation komplex.', sq:'Jo vetëm. Paratë janë natyrisht faktor, por shumë vijnë edhe për arsim më të mirë, stabilitet, siguri. Në vendin tim situata është komplekse.'},
        {speaker:'Gjermani', de:'Aber vermisst ihr eure Länder nicht? Eure Familien?', sq:'Por a nuk keni mall për vendet tuaja? Familjet tuaja?'},
        {speaker:'Ti', de:'Sehr. Jeden Tag. Aber Heimweh und Chance können gleichzeitig existieren. Wir hoffen, eines Tages etwas zurückzugeben — entweder nach Hause oder hier.', sq:'Shumë. Çdo ditë. Por malli dhe mundësia mund të ekzistojnë njëkohësisht. Shpresojmë që një ditë të kthejmë diçka — ose në shtëpi ose këtu.'},
      ]
    }
  ]
},

'b1m2': {
  storyExtension: [
    {type:'narr', text:'Dion kujton se informacioni që sheh online nuk është gjithmonë i vërtetë. Një lajm i rremë rreth Shqipërisë e zemëron.'},
    {type:'line', speaker:'Dion', de:'Jonas, schau mal! Dieser Artikel über Albanien ist komplett falsch. Das hat mich wirklich geärgert.', sq:'Jonas, shiko! Ky artikull mbi Shqipërinë është plotësisht i gabuar. Kjo më ka zemëruar vërtet.'},
    {type:'line', speaker:'Jonas', de:'Was steht denn drin? Zeig mal.', sq:'Çfarë shkruan? Tregoni.'},
    {type:'line', speaker:'Dion', de:'Er behauptet, Albanien sei eines der gefährlichsten Länder Europas. Das stimmt einfach nicht! Das sind Vorurteile aus den Neunzigern.', sq:'Pohon se Shqipëria është një nga vendet më të rrezikshme të Europës. Kjo thjesht nuk është e saktë! Janë paragjykime nga vitet nëntëdhjetë.'},
    {type:'line', speaker:'Jonas', de:'Das ist ein klassisches Beispiel für Fake News. Weißt du, wer den Artikel geschrieben hat?', sq:'Kjo është shembull klasik i lajmeve të rreme. E di kush e ka shkruar artikullin?'},
    {type:'line', speaker:'Dion', de:'Kein Autor angegeben. Kein Datum. Keine Quellen. Drei rote Flags sofort!', sq:'Asnjë autor i shënuar. Asnjë datë. Asnjë burim. Tre flamuj të kuq menjëherë!'},
    {type:'line', speaker:'Jonas', de:'Genau! Du hast Media Literacy gelernt. Wie erkennst du normalerweise Fake News?', sq:'Saktë! Ti ke mësuar media literacy. Si i njeh zakonisht lajmet e rreme?'},
    {type:'line', speaker:'Dion', de:'Ich überprüfe immer: erstens die Quelle, zweitens andere Artikel zum selben Thema, drittens das Datum.', sq:'Kontrolloj gjithmonë: së pari burimin, së dyti artikuj të tjerë mbi të njëjtën temë, së treti datën.'},
    {type:'line', speaker:'Jonas', de:'Perfekt. Das sollte jeder tun. Die sozialen Medien haben alles komplizierter gemacht.', sq:'Perfekte. Këtë duhet ta bëjë çdonjëri. Mediat sociale e kanë bërë gjithçka më të komplikuar.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shpjego: Warum ist Medienkompetenz heute wichtiger als je zuvor?',
      hint: 'Weil... / Es gibt immer mehr... / Früher war... heute jedoch... / Deshalb ist es wichtig...',
      example: 'Medienkompetenz ist heute wichtiger als je zuvor, weil es immer mehr Informationen — und auch Fehlinformationen — gibt. Früher hatten wir wenige, kontrollierte Quellen. Heute kann jeder alles publizieren. Deshalb müssen wir kritisch denken und Quellen überprüfen.',
      level: 'B1'
    },
    {
      prompt: 'Ein Freund schickt dir eine Nachricht: "Schau, ich habe gelesen, dass Handystrahlung Krebs verursacht!" — Wie reagierst du?',
      hint: 'Das ist interessant, aber... / Hast du die Quelle überprüft? / Wissenschaftlich gesehen...',
      example: 'Das ist ein interessantes Thema, aber ich wäre vorsichtig mit dieser Information. Hast du die Quelle überprüft? Wissenschaftlich gesehen gibt es bisher keine eindeutigen Belege für diesen Zusammenhang. Ich würde mehrere seriöse Quellen lesen, bevor ich das glaube.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Debati online',
      situation: 'Dikush komenton negativisht mbi vendin tënd online. Si i përgjigjeris me maturë dhe argument?',
      lines: [
        {speaker:'User online', de:'Albanien ist doch ein Dritte-Welt-Land, oder? Warum verlassen alle das?', sq:'Shqipëria është vend i botës së tretë, apo jo? Pse të gjithë e lënë?'},
        {speaker:'Ti', de:'Diese Aussage ist unpräzise und basiert auf Stereotypen aus den 90ern. Albanien ist ein Mitglied des Europarats, hat eine wachsende Wirtschaft und ist EU-Kandidat. Natürlich gibt es Herausforderungen — aber das hat jedes Land.', sq:'Kjo deklaratë është e paprecize dhe bazohet në stereotipe nga vitet 90. Shqipëria është anëtare e Këshillit të Europës, ka ekonomi në rritje dhe është kandidate e BE-së. Natyrisht ka sfida — por çdo vend i ka.'},
        {speaker:'User online', de:'Trotzdem wandern so viele aus. Das muss einen Grund haben.', sq:'Megjithatë kaq shumë emigrojnë. Kjo duhet të ketë arsye.'},
        {speaker:'Ti', de:'Emigration ist ein globales Phänomen — Menschen verlassen auch Deutschland, Frankreich, die USA. Die Gründe sind komplex: wirtschaftliche Möglichkeiten, Familie, Abenteuer. Das macht ein Land nicht schlechter.', sq:'Emigrimi është fenomen global — njerëzit lënë edhe Gjermaninë, Francën, SHBA-në. Arsyet janë komplekse: mundësi ekonomike, familje, aventurë. Kjo nuk e bën një vend më keq.'},
      ]
    }
  ]
},

'b1m3': {
  storyExtension: [
    {type:'narr', text:'Dion merr pjesë në demonstratë klimatike në Berlin. Është i befasuar nga organizimi.'},
    {type:'line', speaker:'Klea', de:'Bist du schon mal auf einer Demo gewesen in Albanien?', sq:'Ke qenë ndonjëherë në demonstratë në Shqipëri?'},
    {type:'line', speaker:'Dion', de:'Ja, einige Male. Aber hier ist es anders — so organisiert, so friedlich, so... bunt!', sq:'Po, disa herë. Por këtu është ndryshe — kaq e organizuar, kaq paqësore, kaq... shumëngjyrëshe!'},
    {type:'line', speaker:'Klea', de:'Das gehört zur deutschen Kultur. Man protestiert, aber man bleibt zivilisiert.', sq:'Kjo i takon kulturës gjermane. Proteston, por mbetesh qytetëzuar.'},
    {type:'line', speaker:'Dion', de:'Was ich nicht verstehe: Deutschland ist schon sehr fortschrittlich im Umweltbereich. Warum protestieren die Leute noch?', sq:'Çfarë nuk kuptoj: Gjermania është tashmë shumë e avancuar në fushën mjedisore. Pse protestojnë njerëzit ende?'},
    {type:'line', speaker:'Klea', de:'Weil "gut" nicht "gut genug" ist. Wir produzieren immer noch zu viel CO₂. Die Klimaziele werden nicht erreicht.', sq:'Sepse "mirë" nuk është "mjaftueshëm mirë". Ne prodhojmë ende shumë CO₂. Qëllimet klimatike nuk arrihen.'},
    {type:'line', speaker:'Dion', de:'In Albanien ist das Umweltbewusstsein leider noch nicht so stark. Aber es wächst.', sq:'Në Shqipëri vetëdija mjedisore fatkeqësisht nuk është ende aq e fortë. Por po rritet.'},
    {type:'line', speaker:'Klea', de:'Das ist überall ein langer Prozess. Wichtig ist, dass jeder anfängt — in seinem eigenen Leben.', sq:'Kudo është proces i gjatë. E rëndësishme është që secili të fillojë — në jetën e tij.'},
    {type:'line', speaker:'Dion', de:'Stimmt. Ich habe schon aufgehört, Plastiktüten zu benutzen und trenne meinen Müll. Kleine Schritte!', sq:'E saktë. Tashmë kam ndaluar të përdor qese plastike dhe ndaj mbeturinat. Hapa të vegjël!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Was kannst DU persönlich für die Umwelt tun? Nenne mindestens 5 konkrete Maßnahmen.',
      hint: 'Ich könnte... / Erstens... / Außerdem... / Ein weiterer Schritt wäre...',
      example: 'Persönlich könnte ich erstens weniger Fleisch essen, weil die Tierhaltung viel CO₂ produziert. Außerdem könnte ich öfter mit dem Fahrrad fahren statt mit dem Auto. Ein weiterer Schritt wäre, Energie zu Hause zu sparen — kurze Duschen, LED-Lampen. Viertens würde ich mehr regional einkaufen. Und schließlich könnte ich bei lokalen Umweltinitiativen mitmachen.',
      level: 'B1'
    },
    {
      prompt: 'Argument: "Wirtschaft ist wichtiger als Umweltschutz." — Bist du einverstanden? Begründe!',
      hint: 'Ich halte diese Aussage für... / Einerseits... / Langfristig gesehen... / Meiner Meinung nach...',
      example: 'Ich halte diese Aussage für gefährlich und kurzfristig gedacht. Einerseits verstehe ich, dass wirtschaftliches Wachstum Jobs schafft. Langfristig gesehen ist eine gesunde Wirtschaft aber ohne eine gesunde Umwelt nicht möglich. Meiner Meinung nach ist das kein Entweder-oder — wir brauchen eine grüne Wirtschaft.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Diskutim me koleg skeptik',
      situation: 'Kolegu thotë: "Klimawandel ist übertrieben. Das Wetter war schon immer unbeständig." — Përgjigju me fakte dhe qetësi.',
      lines: [
        {speaker:'Kolegu', de:'Ich glaube ehrlich gesagt nicht an den menschengemachten Klimawandel. Das ist alles Panikmache.', sq:'Sinqerisht nuk besoj në ndryshimin klimatik të shkaktuar nga njeriu. Gjithçka është panik.'},
        {speaker:'Ti', de:'Das ist ein verbreitetes Missverständnis. Der wissenschaftliche Konsens ist eindeutig: 97% der Klimawissenschaftler sind sich einig, dass der Klimawandel real ist und durch menschliche Aktivitäten verursacht wird.', sq:'Ky është keqkuptim i përhapur. Konsensi shkencor është i qartë: 97% e shkencëtarëve të klimës janë dakord se ndryshimi klimatik është real dhe shkaktohet nga aktivitetet njerëzore.'},
        {speaker:'Kolegu', de:'Aber die Temperaturen haben sich doch früher auch verändert — natürlich!', sq:'Por temperaturat kanë ndryshuar edhe më parë — natyrshëm!'},
        {speaker:'Ti', de:'Das stimmt. Aber die aktuelle Erwärmung ist zehnmal schneller als jede natürliche Klimaveränderung der Geschichte. Das ist der Unterschied. Ich würde gern einige seriöse Quellen mit dir teilen, wenn du Interesse hast.', sq:'Kjo është e saktë. Por ngrohja aktuale është dhjetë herë më e shpejtë se çdo ndryshim klimatik natyror në histori. Ky është dallimi. Do të doja të ndaja me ty disa burime serioze, nëse ke interes.'},
      ]
    }
  ]
},

'b1m7': {
  storyExtension: [
    {type:'narr', text:'Dion tani është Lider i ekipës. Por roli i ri sjell sfida të papritura — menaxhimi i njerëzve është krejtësisht ndryshe nga shkrimi i kodit.'},
    {type:'line', speaker:'Dion', de:'Jonas, ich brauche deinen Rat. Ich habe ein Problem mit einem Mitarbeiter.', sq:'Jonas, kam nevojë për këshillën tënde. Kam problem me një punonjës.'},
    {type:'line', speaker:'Jonas', de:'Was ist passiert?', sq:'Çfarë ka ndodhur?'},
    {type:'line', speaker:'Dion', de:'Mark — du kennst ihn — liefert ständig zu spät. Ich habe ihn zweimal angesprochen, aber nichts ändert sich.', sq:'Mark — ti e njeh — dorëzon gjithmonë me vonesë. E kam folur dy herë, por asgjë nuk ndryshon.'},
    {type:'line', speaker:'Jonas', de:'Wie hast du es angesprochen? Öffentlich oder privat?', sq:'Si e ke folur? Publikisht apo privatisht?'},
    {type:'line', speaker:'Dion', de:'Einmal im Meeting, einmal per E-Mail.', sq:'Një herë në mbledhje, një herë me email.'},
    {type:'line', speaker:'Jonas', de:'Das ist dein erster Fehler. Solche Gespräche gehören immer unter vier Augen — niemals öffentlich. Und nie per E-Mail, wenn es um Verhalten geht.', sq:'Ky është gabimi yt i parë. Biseda të tilla gjithmonë i përkasin mes katër syve — kurrë publikisht. Dhe kurrë me email kur bëhet fjalë për sjellje.'},
    {type:'line', speaker:'Dion', de:'Oh. Das wusste ich nicht. In Albanien würde man das anders machen.', sq:'Oh. Këtë nuk e dija. Në Shqipëri do ta bënim ndryshe.'},
    {type:'line', speaker:'Jonas', de:'Genau das ist der kulturelle Unterschied. Deutsche Führungskultur ist sehr direkt, aber immer respektvoll und diskret.', sq:'Pikërisht ky është ndryshimi kulturor. Kultura gjermane e udhëheqjes është shumë direkte, por gjithmonë respektuese dhe diskrete.'},
    {type:'line', speaker:'Dion', de:'Ich muss also noch lernen, nicht nur Deutsch zu sprechen, sondern auch deutsch zu denken?', sq:'Pra duhet të mësoj ende, jo vetëm të flas gjermanisht, por edhe të mendoj gjermanisht?'},
    {type:'line', speaker:'Jonas', de:'Das ist die tiefste Form des Sprachenlernens. Und du bist schon auf dem Weg dorthin.', sq:'Kjo është forma më e thellë e të mësuarit të gjuhëve. Dhe ti je tashmë në rrugën drejt kësaj.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Du bist Team Lead. Ein Mitarbeiter fragt: "Warum wurde ich nicht befördert?" — Wie erklärst du das respektvoll?',
      hint: 'Ich schätze deine Arbeit sehr... / Das Feedback, das ich geben kann... / Konkret fehlt noch... / Ich würde vorschlagen...',
      example: 'Ich schätze deine Arbeit sehr und ich bin froh, dich im Team zu haben. Ich möchte ehrlich mit dir sein: Das Feedback, das ich geben kann, ist, dass du noch mehr Führungsverantwortung übernehmen solltest. Konkret fehlt noch Erfahrung in Kundengesprächen. Ich würde vorschlagen, dass wir gemeinsam einen Entwicklungsplan erstellen. Was meinst du?',
      level: 'B1'
    },
    {
      prompt: 'Dein Chef fragt: "Was würden Sie verbessern in unserer Abteilung?" — Gib konstruktives Feedback!',
      hint: 'Was gut funktioniert ist... / Ich würde vorschlagen... / Ein möglicher Verbesserungsbereich wäre... / Das könnte helfen, weil...',
      example: 'Was gut funktioniert ist die Kommunikation im Team — wir sind sehr offen miteinander. Ein möglicher Verbesserungsbereich wäre die Dokumentation unserer Prozesse. Ich würde vorschlagen, ein einheitliches System einzuführen. Das könnte helfen, weil neue Mitarbeiter schneller eingearbeitet werden könnten.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Biseda e vështirë me punonjës',
      situation: 'Duhet të flasësh me Mark-un privatisht mbi vonesën e tij të vazhdueshme.',
      lines: [
        {speaker:'Ti (Dion)', de:'Mark, danke, dass du dir Zeit genommen hast. Ich möchte kurz mit dir unter vier Augen sprechen — nichts Dramatisches, aber etwas Wichtiges.', sq:'Mark, faleminderit që more kohë. Dua të flas shkurt me ty mes katër syve — asgjë dramatike, por diçka e rëndësishme.'},
        {speaker:'Mark', de:'Natürlich. Was ist los?', sq:'Natyrisht. Çfarë ka?'},
        {speaker:'Ti', de:'Mir ist aufgefallen, dass die letzten drei Deliverables etwas später als geplant kamen. Ich frage mich, ob alles in Ordnung ist — gibt es etwas, das ich nicht weiß?', sq:'Kam vërejtur që tre dorëzimet e fundit erdhën pak më vonë nga sa planifikohej. Po pyes veten nëse çdo gjë është mirë — a ka diçka që nuk di?'},
        {speaker:'Mark', de:'Es tut mir leid. Ich hatte... persönliche Probleme. Ich hätte früher sprechen sollen.', sq:'Më vjen keq. Kam pasur... probleme personale. Duhet të flisja më herët.'},
        {speaker:'Ti', de:'Das verstehe ich total. Danke für deine Offenheit. Wie kann ich dich unterstützen? Und was brauchen wir, damit die Deadlines wieder klappen?', sq:'Kuptoj totalisht. Faleminderit për sinqeritetin tënd. Si mund të të mbështes? Dhe çfarë na duhet që afatet të funksionojnë sërish?'},
      ]
    }
  ]
},

'b1m8': {
  storyExtension: [
    {type:'narr', text:'Dion duhet të regjistrojë veturën e tij. Zbuloi se Gjermanishtja e zyrave është ndryshe nga Gjermanishtja e zakonshme.'},
    {type:'line', speaker:'Dion', de:'Entschuldigung, ich möchte mein Auto anmelden. Was brauche ich dafür?', sq:'Më fal, dua të regjistrojë veturën time. Çfarë kam nevojë për këtë?'},
    {type:'line', speaker:'Zyrtari', de:'Sie benötigen: Personalausweis oder Reisepass, den Fahrzeugschein, die Hauptuntersuchung — also den TÜV — und die eVB-Nummer Ihrer Versicherung.', sq:'Ju duhet: letërnjoftimi ose pasaporta, certifikatën e mjetit, kontrollin teknik — pra TÜV — dhe numrin eVB të sigurimit tuaj.'},
    {type:'line', speaker:'Dion', de:'Was ist eine eVB-Nummer? Das kenne ich nicht.', sq:'Çfarë është numri eVB? Këtë nuk e njoh.'},
    {type:'line', speaker:'Zyrtari', de:'Das ist eine elektronische Versicherungsbestätigungsnummer. Die bekommen Sie von Ihrer Kfz-Versicherung.', sq:'Ky është një numër konfirmimi elektronik i sigurimit. E merrni nga sigurimi juaj i automjetit.'},
    {type:'line', speaker:'Dion', de:'Ich habe noch keine Versicherung. Was soll ich zuerst machen?', sq:'Nuk kam ende sigurim. Çfarë duhet të bëj fillimisht?'},
    {type:'line', speaker:'Zyrtari', de:'Zuerst Versicherung abschließen, dann kommen Sie mit der eVB-Nummer zurück. Alles klar?', sq:'Fillimisht merrni sigurim, pastaj kthehuni me numrin eVB. Gjithçka e qartë?'},
    {type:'line', speaker:'Dion', de:'Ja... ich glaube schon. Darf ich eine Frage stellen — gibt es das auch online?', sq:'Po... besoj se po. Mund të pyes — a ekziston kjo edhe online?'},
    {type:'line', speaker:'Zyrtari', de:'Die Versicherung können Sie online abschließen. Die Zulassung selbst muss leider persönlich erfolgen.', sq:'Sigurimin mund ta merrni online. Regjistrimi, fatkeqësisht duhet të bëhet personalisht.'},
    {type:'narr', text:'Dion del nga zyra. Mendon: "Bürokratie auf Deutsch — das ist ein Niveau für sich!"'},
  ],
  thinkInGerman: [
    {
      prompt: 'Du rufst bei der Ausländerbehörde an. Erkläre dein Problem und was du brauchst.',
      hint: 'Guten Tag, mein Name ist... / Ich brauche einen Termin für... / Ich habe eine Frage bezüglich...',
      example: 'Guten Tag, mein Name ist Dion Kelmendi. Ich rufe an wegen meiner Aufenthaltserlaubnis. Sie läuft nächsten Monat ab und ich möchte einen Termin zur Verlängerung machen. Wann haben Sie die früheste Möglichkeit? Und welche Dokumente soll ich mitbringen?',
      level: 'B1'
    },
    {
      prompt: 'Du erhältst einen Brief vom Finanzamt — auf Deutsch! Erkläre einem Freund was drin steht.',
      hint: 'Also, der Brief ist vom... / Es geht darum, dass... / Ich muss bis... / Das bedeutet...',
      example: 'Also, der Brief ist vom Finanzamt. Es geht darum, dass ich meine Steuererklärung noch einreichen muss. Ich muss das bis zum 31. Juli tun, sonst kommt eine Mahnung. Das bedeutet, ich muss alle meine Gehaltsabrechnungen sammeln und ein Formular ausfüllen. Ich denke, ich brauche einen Steuerberater.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Ankesë zyrtare me shkrim',
      situation: 'Komuna dërgoi faturë të gabuar. Duhet të shkruash email zyrtar për korrigjim.',
      lines: [
        {speaker:'Email nga ti', de:'Sehr geehrte Damen und Herren, ich schreibe Ihnen bezüglich meiner Nebenkostenabrechnung vom 15. März. Ich habe festgestellt, dass die angegebene Quadratmeterzahl meiner Wohnung (68 m²) von der tatsächlichen Größe (55 m²) abweicht. Dementsprechend bitte ich Sie, die Abrechnung zu korrigieren und mir den Differenzbetrag zurückzuerstatten. Im Anhang finden Sie eine Kopie meines Mietvertrags als Nachweis. Für Rückfragen stehe ich jederzeit zur Verfügung. Mit freundlichen Grüßen, Dion Kelmendi', sq:'Shumë të nderuar, po ju shkruaj në lidhje me llogarinë e shpenzimeve shtesë të 15 marsit. Kam konstatuar se metrazhit të shënuara të banesës sime (68 m²) ndryshojnë nga madhësia aktuale (55 m²). Rrjedhimisht ju kërkoj të korrigjoni llogarinë dhe të rimbursoni diferencën. Bashkangjitur gjeni kopje të kontratës sime të qirasë si dëshmi. Për pyetje jam në dispozicion në çdo kohë. Me përshëndetje të sinqerta, Dion Kelmendi'},
      ]
    }
  ]
},

'b1m14': {
  storyExtension: [
    {type:'narr', text:'Dion ka marrë rezultatin e provimit B1. 87 pikë — kalim i shkëlqyeshëm. Por ai di se kjo është vetëm fillimi.'},
    {type:'line', speaker:'Klea', de:'87 Punkte! Das ist fantastisch, Dion! Ich bin so stolz auf dich!', sq:'87 pikë! Kjo është fantastike, Dion! Jam kaq krenar/e për ty!'},
    {type:'line', speaker:'Dion', de:'Danke. Weißt du, als ich in Wien angekommen bin, konnte ich nicht mal "Entschuldigung" richtig aussprechen.', sq:'Faleminderit. E di, kur mbrita në Vjenë, nuk mund ta shqiptoja as "Entschuldigung" siç duhet.'},
    {type:'line', speaker:'Klea', de:'Und jetzt führst du Meetings auf Deutsch! Die Entwicklung ist unglaublich.', sq:'Dhe tani drejton mbledhje në gjermanisht! Zhvillimi është i pabesueshëm.'},
    {type:'line', speaker:'Dion', de:'Ich merke aber, dass B1 erst der Anfang ist. Die echte Sprache — Witze, Ironie, regionale Dialekte — das fehlt noch.', sq:'Por vërej se B1 është vetëm fillimi. Gjuha e vërtetë — shakatë, ironia, dialektet rajonale — kjo ende mungon.'},
    {type:'line', speaker:'Klea', de:'Das kommt mit der Zeit. Ich kenne Leute, die seit fünf Jahren hier sind und immer noch lernen.', sq:'Kjo vjen me kohë. Njoh njerëz që janë pesë vjet këtu dhe ende mësojnë.'},
    {type:'line', speaker:'Dion', de:'Eigentlich gefällt mir das. Sprache ist wie ein Lebewesen — sie verändert sich, wächst, überrascht.', sq:'Në fakt kjo më pëlqen. Gjuha është si qenie e gjallë — ndryshon, rritet, befason.'},
    {type:'line', speaker:'Klea', de:'Und jetzt? Was ist der nächste Plan?', sq:'Dhe tani? Cili është plani tjetër?'},
    {type:'line', speaker:'Dion', de:'B2 bis Ende des Jahres. Und dann... träume ich von der deutschen Staatsbürgerschaft. Eines Tages.', sq:'B2 deri në fund të vitit. Dhe pastaj... ëndërroj për shtetësinë gjermane. Një ditë.'},
    {type:'line', speaker:'Klea', de:'Das glaube ich dir. Und ich werde bei jedem Schritt dabei sein.', sq:'Unë të besoj. Dhe do të jem pranë në çdo hap.'},
    {type:'narr', text:'Historia e Dionit nuk mbaron këtu. B2 pret. Jeta gjermane pret. Dhe gjuha — gjuha gjithmonë ka diçka të re për të dhënë.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Schreib einen kurzen Brief an dein B1-Anfänger-Ich: Was würdest du dir selbst raten?',
      hint: 'Liebe/r... / Am Anfang wird es schwer sein, aber... / Das Wichtigste ist... / Vergiss nicht...',
      example: 'Lieber Dion vom ersten Tag, am Anfang wird es schwer sein — du wirst dich manchmal lächerlich fühlen, Fehler machen, und nicht verstehen. Das ist normal. Das Wichtigste ist: Schäm dich nicht für Fehler. Jeder Fehler ist ein Fortschritt. Vergiss nicht, dass die Deutschen Geduld haben mit Menschen, die ihre Sprache lernen. Und eines Tages wirst du denken — auf Deutsch. Das ist das schönste Gefühl.',
      level: 'B1'
    },
    {
      prompt: 'Freie Diskussion: Was bedeutet es, eine Sprache wirklich zu beherrschen?',
      hint: 'Eine Sprache wirklich zu beherrschen bedeutet... / Es reicht nicht nur... / Man muss auch... / Das tiefste Niveau ist...',
      example: 'Eine Sprache wirklich zu beherrschen bedeutet nicht nur, grammatisch korrekt zu sprechen. Es reicht nicht nur, Wörter zu kennen. Man muss auch die Kultur, den Humor, die unausgesprochenen Regeln verstehen. Das tiefste Niveau ist, wenn man in der Sprache träumt — und lacht. Das ist mein Ziel.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Gjuha finale — Bisedë e lirë',
      situation: 'Tani je B1. Dikush të pyet: "Wie würdest du dein Deutsch beschreiben?" — Përgjigju i lirë, i natyrshëm, i plotë.',
      lines: [
        {speaker:'Dikush', de:'Du sprichst wirklich gut Deutsch! Wo hast du so gut gelernt?', sq:'Ti flet vërtet mirë gjermanisht! Ku e ke mësuar kaq mirë?'},
        {speaker:'Ti', de:'Danke, das ist sehr nett! Ich lerne seit zwei Jahren — zuerst in Wien, dann hier in Berlin. Ich hatte einen Kurs, aber ehrlich gesagt habe ich am meisten durch Gespräche gelernt. Fehler machen ist das Beste!', sq:'Faleminderit, kjo është shumë e mirë! Mësoj prej dy vitesh — fillimisht në Vjenë, pastaj këtu në Berlin. Pata kurs, por sinqerisht kam mësuar më shumë nëpërmjet bisedave. Të bësh gabime është gjëja më e mirë!'},
        {speaker:'Dikush', de:'Was war das Schwerste für dich?', sq:'Çfarë ishte më e vështira për ty?'},
        {speaker:'Ti', de:'Definitiv der Genitiv! Und die langen deutschen Wörter — "Kraftfahrzeughaftpflichtversicherung" zum Beispiel. Auf Albanisch würden wir drei Wörter brauchen, aber das ist so typisch deutsch — effizient!', sq:'Definitivisht gjenitiivi! Dhe fjalët e gjata gjermane — "Kraftfahrzeughaftpflichtversicherung" për shembull. Në shqip do të duheshim tre fjalë, por kjo është kaq tipike gjermane — efikase!'},
        {speaker:'Dikush', de:'Haha! Das stimmt! Und was magst du an der deutschen Sprache?', sq:'Haha! Kjo është e saktë! Dhe çfarë të pëlqen tek gjuha gjermane?'},
        {speaker:'Ti', de:'Die Präzision. Im Deutschen gibt es für fast alles das perfekte Wort — wie "Fernweh", das Verlangen nach fernen Ländern. Das gibt es auf Albanisch nicht als einzelnes Wort. Das finde ich wunderschön.', sq:'Saktësia. Në gjermanisht ka fjalën perfekte për pothuajse çdo gjë — si "Fernweh", dëshira për vende të largëta. Kjo nuk ekziston në shqip si fjalë e vetme. Këtë e gjej të mrekullueshme.'},
      ]
    }
  ]
}

}; // END MODULE_UPGRADES

// ═══════════════════════════════════════════════
// REMAINING UPGRADES — A1 m5-10, A2 m3-12, B1 m4-6, m9-m13
// ═══════════════════════════════════════════════

const REMAINING_UPGRADES = {

// ══════════════════════════
// A1 — Modulet 5 deri 10
// ══════════════════════════

'a1m5': {
  storyExtension: [
    {type:'narr', text:'Dion kërkon të kuptojë sistemin gjerman të banesave. Znj. Bauer e shpjegon çdo dhomë me durim.'},
    {type:'line', speaker:'Znj. Bauer', de:'Darf ich Ihnen die Wohnung zeigen? Kennen Sie schon alles?', sq:'Mund t\'ju tregoj apartamentin? A i dini tashmë të gjitha?'},
    {type:'line', speaker:'Dion', de:'Ich kenne mein Zimmer, aber den Rest noch nicht gut.', sq:'Dhomën time e njoh, por pjesën tjetër ende jo mirë.'},
    {type:'line', speaker:'Znj. Bauer', de:'Also — das hier ist das Wohnzimmer. Der Fernseher, das Sofa, der Tisch.', sq:'Pra, kjo është dhoma e ndenjes. Televizori, sofaja, tavolina.'},
    {type:'line', speaker:'Dion', de:'Sehr schön! Und was ist dort — die große Tür?', sq:'Shumë e bukur! Dhe çfarë është atje — dera e madhe?'},
    {type:'line', speaker:'Znj. Bauer', de:'Das ist der Keller. Dort können Sie Ihre Koffer lagern, wenn Sie möchten.', sq:'Ky është bodrumi. Atje mund t\'i vendosni valixhet, nëse dëshironi.'},
    {type:'line', speaker:'Dion', de:'Oh super! Ich habe tatsächlich zu viel Gepäck mitgebracht.', sq:'Oh super! Kam sjellë vërtet shumë bagazh.'},
    {type:'line', speaker:'Znj. Bauer', de:'Das ist kein Problem. Deutsche Wohnungen haben immer einen Keller. Das ist typisch!', sq:'Kjo nuk është problem. Banesat gjermane kanë gjithmonë bodrum. Kjo është tipike!'},
    {type:'line', speaker:'Dion', de:'Interessant! Bei uns in Albanien haben die meisten Wohnungen keinen Keller.', sq:'Interesante! Tek ne në Shqipëri shumica e banesave nuk kanë bodrum.'},
    {type:'line', speaker:'Znj. Bauer', de:'Wirklich? Was macht man dann mit den ganzen Sachen?', sq:'Vërtet? Çfarë bëhet atëherë me të gjitha sendet?'},
    {type:'line', speaker:'Dion', de:'Auf dem Balkon! Oder bei der Oma — die hat immer Platz!', sq:'Në ballkon! Ose tek gjyshja — ajo ka gjithmonë vend!'},
    {type:'narr', text:'Znj. Bauer qesh. Dion kupton: humori është gjuhë universale.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Përshkruaj shtëpinë tënde — sa dhoma ka, cilat janë, ku ndodhet çdo gjë?',
      hint: 'Meine Wohnung hat... Zimmer / Es gibt... / Das Schlafzimmer ist... / Die Küche ist...',
      example: 'Meine Wohnung in Tirana hat drei Zimmer: ein Schlafzimmer, ein Wohnzimmer und eine Küche. Das Bad ist klein aber praktisch. Es gibt auch einen Balkon mit Blick auf die Straße. Kein Keller, aber das ist kein Problem!',
      level: 'A1'
    },
    {
      prompt: 'Dikush te pyet: "Was gefällt dir an deiner Wohnung am besten?" — Çfarë i thua?',
      hint: 'Am besten gefällt mir... / Ich mag besonders... / Das Beste ist...',
      example: 'Am besten gefällt mir das große Fenster im Wohnzimmer. Von dort sehe ich den Garten. Ich mag auch die ruhige Lage — keine Autos, keine Lärm. Das Beste ist aber die Küche — sie ist neu und sehr modern!',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Kërkon banesë — telefon me qiradhënësin',
      situation: 'Ke parë njoftim për banesë 2 dhomësh. Telefono dhe pyet për detaje.',
      lines: [
        {speaker:'Qiradhënësi', de:'Müller, guten Tag!', sq:'Müller, mirëdita!'},
        {speaker:'Ti', de:'Guten Tag! Ich rufe wegen der Wohnung an — zwei Zimmer, Seestraße 14. Ist sie noch frei?', sq:'Mirëdita! Po telefonoj për banesën — dy dhoma, Seestraße 14. A është ende e lirë?'},
        {speaker:'Qiradhënësi', de:'Ja, die ist noch frei. Was möchten Sie wissen?', sq:'Po, është ende e lirë. Çfarë dëshironi të dini?'},
        {speaker:'Ti', de:'Wie groß ist die Wohnung, und was kostet sie im Monat — warm?', sq:'Sa e madhe është banesa, dhe sa kushton në muaj — me ngrohje?'},
        {speaker:'Qiradhënësi', de:'55 Quadratmeter, 750 Euro warm. Zweites Stockwerk, kein Aufzug.', sq:'55 metra katrorë, 750 euro me ngrohje. Kati i dytë, pa ashensor.'},
        {speaker:'Ti', de:'Ist eine Besichtigung möglich? Vielleicht am Samstag?', sq:'A është e mundur një vizitë? Ndoshta të shtunën?'},
      ]
    }
  ]
},

'a1m6': {
  storyExtension: [
    {type:'narr', text:'Dion ka një problem: ka blerë xhaketa e gabuar numrin. Klea e shoqëron ta ndërrojë.'},
    {type:'line', speaker:'Shitësi', de:'Kann ich Ihnen helfen?', sq:'Mund t\'ju ndihmoj?'},
    {type:'line', speaker:'Dion', de:'Ja bitte. Ich habe diese Jacke gekauft, aber sie ist zu groß. Ich möchte sie umtauschen.', sq:'Po, ju lutem. E bleva këtë xhaketë, por është shumë e madhe. Dua ta ndërroj.'},
    {type:'line', speaker:'Shitësi', de:'Kein Problem. Haben Sie den Kassenbon dabei?', sq:'Nuk ka problem. E keni kuponin e arkes me vetë?'},
    {type:'line', speaker:'Dion', de:'Ja, natürlich. Hier ist er. Ich brauche Größe Medium, nicht Large.', sq:'Po, natyrisht. Ja ku është. Më duhet numri Medium, jo Large.'},
    {type:'line', speaker:'Shitësi', de:'Moment bitte... leider haben wir diese Jacke nur noch in Blau auf Medium, nicht in Schwarz.', sq:'Një moment... fatkeqësisht e kemi këtë xhaketë vetëm në blu në Medium, jo në të zezë.'},
    {type:'line', speaker:'Dion', de:'Hm. Wie finden Sie das Blau? Passt das zu einer schwarzen Hose?', sq:'Hm. Si ju duket juve blu-ja? I shkon pantallonave të zeza?'},
    {type:'line', speaker:'Klea', de:'Ja, total! Blau und Schwarz ist ein Klassiker. Nimm die blaue!', sq:'Po, totalisht! Blu dhe e zezë është klasike. Merr atë blu!'},
    {type:'line', speaker:'Dion', de:'Okay, ich nehme die blaue dann. Wie viel kostet die — ist der Preis gleich?', sq:'Mirë, marr atë blu atëherë. Sa kushton — a është çmimi i njëjtë?'},
    {type:'line', speaker:'Shitësi', de:'Ja, gleicher Preis. Möchten Sie die Jacke anprobieren?', sq:'Po, i njëjti çmim. Dëshironi të provoni xhaketën?'},
    {type:'line', speaker:'Dion', de:'Ja gerne! Die Umkleidekabine — wo ist die?', sq:'Po, me dëshirë! Kabina e provës — ku ndodhet?'},
    {type:'narr', text:'Dion provohet xhaketën. Sheh veten në pasqyrë dhe qesh — ai është bërë pak gjerman.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Pyet shitësin: ke parë bluzë të bukur, por nuk e di nëse e kanë ngjyrën dhe numrin tënd.',
      hint: 'Haben Sie das auch in...? / Welche Größe haben Sie? / Gibt es das in...?',
      example: 'Entschuldigung! Ich habe dieses T-Shirt gesehen — sehr schön! Haben Sie das auch in Grün? Und welche Größen haben Sie noch? Ich brauche Medium. Und darf ich es anprobieren?',
      level: 'A1'
    },
    {
      prompt: 'Përshkruaj veshjet që ke sot veshur — çfarë, çfarë ngjyre, si i gjen?',
      hint: 'Ich trage heute... / Es ist... Farbe / Ich finde es...',
      example: 'Heute trage ich eine blaue Jeans, ein weißes T-Shirt und eine graue Jacke. Die Jacke ist neu — ich habe sie letzte Woche gekauft. Ich finde die Kombination gut: klassisch und praktisch!',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Dhuratë për dikë — nuk e di numrin',
      situation: 'Blen bluzë si dhuratë për nënën. Nuk di numrin e saj saktë.',
      lines: [
        {speaker:'Shitësi', de:'Was darf es sein?', sq:'Çfarë dëshironi?'},
        {speaker:'Ti', de:'Ich suche eine Bluse als Geschenk für meine Mutter. Etwas Elegantes, nicht zu teuer.', sq:'Po kërkoj bluzë si dhuratë për nënën time. Diçka elegante, jo shumë e shtrenjtë.'},
        {speaker:'Shitësi', de:'Welche Größe hat Ihre Mutter?', sq:'Çfarë numri ka nëna juaj?'},
        {speaker:'Ti', de:'Ich bin nicht sicher — sie ist etwa so groß wie ich, vielleicht ein bisschen kleiner. Medium oder Small?', sq:'Nuk jam i sigurt — ajo është afërsisht kaq e gjatë sa unë, ndoshta pak më e vogël. Medium apo Small?'},
        {speaker:'Shitësi', de:'Ich würde Small empfehlen. Wir haben auch Geschenkverpackung, wenn Sie möchten.', sq:'Do të rekomandoja Small. Kemi edhe paketim dhuratë, nëse dëshironi.'},
        {speaker:'Ti', de:'Ja, bitte! Das ist sehr praktisch. Und kann man es umtauschen, falls die Größe falsch ist?', sq:'Po, ju lutem! Kjo është shumë praktike. Dhe mund të ndërrohet, nëse numri është gabim?'},
      ]
    }
  ]
},

'a1m7': {
  storyExtension: [
    {type:'narr', text:'E mërkura në mbrëmje. Dion dhe Klea kanë bërë plan, por Dion harron. Klea e pret prej 20 minutash.'},
    {type:'line', speaker:'Klea', de:'Dion! Es ist schon Viertel nach sieben! Wir hatten uns für halb sieben verabredet!', sq:'Dion! Tashmë është shtatë e një çerek! Kishim bërë plan për gjysmë shtatë!'},
    {type:'line', speaker:'Dion', de:'Oh nein! Ich habe die Zeit komplett vergessen. Es tut mir sehr leid! Der Bus hatte auch Verspätung.', sq:'Oh jo! E harrova plotësisht kohën. Më vjen shumë keq! Edhe autobusi kishte vonesë.'},
    {type:'line', speaker:'Klea', de:'Immer der Bus! Dion, du musst eine Uhr kaufen!', sq:'Gjithmonë autobusi! Dion, duhet të blesh orë!'},
    {type:'line', speaker:'Dion', de:'Ich habe mein Handy — aber der Akku war leer. Darf ich dein Handy leihen?', sq:'Kam telefonin — por bateria ishte e zbrazët. Mund të marr hua telefonin tënd?'},
    {type:'line', speaker:'Klea', de:'Hier. Und — warum rufst du mich nicht an wenn du zu spät bist? In Deutschland ist das sehr wichtig!', sq:'Ja. Dhe — pse nuk më telefonon kur ke vonesë? Në Gjermani kjo është shumë e rëndësishme!'},
    {type:'line', speaker:'Dion', de:'Du hast recht. In Albanien ist man... flexibler mit der Zeit. Aber ich lerne!', sq:'Ke të drejtë. Në Shqipëri jemi... më fleksibël me kohën. Por po mësoj!'},
    {type:'line', speaker:'Klea', de:'Okay, okay. Kein Drama. Wir gehen jetzt essen — aber du zahlst!', sq:'Mirë, mirë. Asnjë dramë. Tani shkojmë të hamë — por ti paguan!'},
    {type:'line', speaker:'Dion', de:'Natürlich! Mit Freude! Um wie viel Uhr schließt das Restaurant?', sq:'Natyrisht! Me kënaqësi! Në çfarë ore mbyllet restoranti?'},
    {type:'line', speaker:'Klea', de:'Um elf Uhr. Wir haben also noch genug Zeit. Komm!', sq:'Në orën njëmbëdhjetë. Kemi pra kohë të mjaftueshme. Eja!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Ke arritur vonë në takim. Shpjego pse dhe kërko falje — gjermanisht!',
      hint: 'Es tut mir leid! Ich bin zu spät weil... / Der Bus... / Ich habe... vergessen / Das passiert mir nicht wieder!',
      example: 'Es tut mir wirklich leid! Ich bin zu spät, weil mein Alarm nicht geklingelt hat. Dann habe ich den Bus verpasst und musste 20 Minuten warten. Das passiert mir nicht wieder — ich kaufe mir eine Uhr!',
      level: 'A1'
    },
    {
      prompt: 'Dikush te pyet: "Was machst du normalerweise am Sonntag?" — Trego rutinën tënde të dielës.',
      hint: 'Sonntags stehe ich spät auf... / Meistens... / Manchmal... / Am Abend...',
      example: 'Sonntags stehe ich meistens spät auf — um zehn oder elf Uhr. Dann frühstücke ich langsam und lese die Nachrichten. Manchmal gehe ich spazieren oder treffe Freunde. Am Abend telefoniere ich mit meiner Familie in Albanien. Sonntag ist mein Lieblingstag!',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Bëj plan me mik — koordino orën',
      situation: 'Duhet të bësh plan me mik për të dalë të shtunën. Bisedoni për orën dhe vendin.',
      lines: [
        {speaker:'Miku', de:'Wollen wir am Samstag ins Kino gehen?', sq:'Duam të shkojmë në kino të shtunën?'},
        {speaker:'Ti', de:'Ja, gerne! Wann fängt der Film an? Und welcher Film?', sq:'Po, me dëshirë! Kur fillon filmi? Dhe cili film?'},
        {speaker:'Miku', de:'Der neue Marvel-Film. Er läuft um 18 Uhr oder um 20:30.', sq:'Filmi i ri Marvel. Ecën në orën 18 ose në 20:30.'},
        {speaker:'Ti', de:'Um 18 Uhr ist besser für mich. Wo treffen wir uns? Vor dem Kino?', sq:'Ora 18 është më mirë për mua. Ku takohemi? Para kinove?'},
        {speaker:'Miku', de:'Ja, vor dem Kino — um Viertel vor sechs. Nicht zu spät kommen!', sq:'Po, para kinove — në pesë e tre çerekë. Mos arrit vonë!'},
        {speaker:'Ti', de:'Ich verspreche es! Ich komme pünktlich — ich kaufe sogar eine neue Uhr!', sq:'E premtoj! Vij me kohë — madje blej edhe orë të re!'},
      ]
    }
  ]
},

'a1m8': {
  storyExtension: [
    {type:'narr', text:'Dion humbet në metro për herë të parë. I kërkon ndihmë një vjeneze.'},
    {type:'line', speaker:'Dion', de:'Entschuldigung! Ich glaube, ich bin falsch gefahren. Wo bin ich jetzt?', sq:'Më fal! Besoj kam marrë drejtim të gabuar. Ku ndodhem tani?'},
    {type:'line', speaker:'Vjenezja', de:'Sie sind an der Station Stephansplatz. Wo möchten Sie hin?', sq:'Ndodheni në stacionin Stephansplatz. Ku dëshironi të shkoni?'},
    {type:'line', speaker:'Dion', de:'Zum Hauptbahnhof. Ich muss um 17 Uhr dort sein!', sq:'Në stacionin kryesor. Duhet të jem atje në orën 17!'},
    {type:'line', speaker:'Vjenezja', de:'Kein Problem! Nehmen Sie die U1 in Richtung Reumannplatz — vier Stationen.', sq:'Nuk ka problem! Merrni U1 drejt Reumannplatz — katër stacione.'},
    {type:'line', speaker:'Dion', de:'U1 — Reumannplatz — vier Stationen. Und wie lange dauert das?', sq:'U1 — Reumannplatz — katër stacione. Dhe sa kohë zgjat?'},
    {type:'line', speaker:'Vjenezja', de:'Ungefähr acht Minuten. Sie schaffen das! Der nächste Zug kommt in zwei Minuten.', sq:'Rreth tetë minuta. Ia bëni! Treni tjetër vjen për dy minuta.'},
    {type:'line', speaker:'Dion', de:'Vielen Dank! Sie haben mir wirklich geholfen. Schönen Tag noch!', sq:'Shumë faleminderit! Më keni ndihmuar vërtet. Ditë të bukur!'},
    {type:'line', speaker:'Vjenezja', de:'Danke, gleichfalls! Und kaufen Sie sich eine Karte — dann passiert das nicht mehr!', sq:'Faleminderit, ju gjithashtu! Dhe bleni hartë — pastaj kjo nuk ndodh më!'},
    {type:'narr', text:'Dion mbrin në stacion dy minuta para trenit. Mëson: gjermanët janë shumë të saktë dhe gjithmonë të gatshëm të ndihmojnë.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Je i humbur në qytet të ri. Duhet të arrish në "Marienplatz" por nuk e di rrugën. Pyet dikë!',
      hint: 'Entschuldigung! / Wie komme ich zu...? / Ist das weit? / Welche U-Bahn...?',
      example: 'Entschuldigung! Können Sie mir helfen? Ich suche den Marienplatz. Wie komme ich am besten dahin? Ist das weit zu Fuß oder soll ich die U-Bahn nehmen? Welche Linie fährt dahin?',
      level: 'A1'
    },
    {
      prompt: 'Shpjego rrugën nga shtëpia jote deri në qendër të qytetit — gjermanisht!',
      hint: 'Von meiner Wohnung... / Zuerst nehme ich... / Dann... / Nach etwa... Minuten...',
      example: 'Von meiner Wohnung nehme ich zuerst den Bus Nummer 5 bis zur Haltestelle "Zentrum". Das dauert etwa zehn Minuten. Dann gehe ich zu Fuß etwa fünf Minuten geradeaus. Nach der Brücke ist der Marktplatz auf der linken Seite.',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Blen biletë treni',
      situation: 'Je në stacionin e trenit. Duhet të blesh biletë për në Minhen.',
      lines: [
        {speaker:'Kasieri', de:'Guten Tag! Was kann ich für Sie tun?', sq:'Mirëdita! Çfarë mund të bëj për ju?'},
        {speaker:'Ti', de:'Guten Tag! Ich möchte eine Fahrkarte nach München, bitte. Für heute Nachmittag.', sq:'Mirëdita! Dua biletë për Minhen, ju lutem. Për pasditen e sot.'},
        {speaker:'Kasieri', de:'Einfach oder hin und zurück?', sq:'Vetëm vajtje apo vajtje-ardhje?'},
        {speaker:'Ti', de:'Hin und zurück, bitte. Wann fährt der nächste Zug?', sq:'Vajtje-ardhje, ju lutem. Kur niset treni tjetër?'},
        {speaker:'Kasieri', de:'Um 14:32 Uhr. Ankunft München 16:58 Uhr. Das kostet 45 Euro.', sq:'Në orën 14:32. Mbrrini Minhen 16:58. Kjo kushton 45 euro.'},
        {speaker:'Ti', de:'Gut. Ich nehme das. Zahlen mit Karte, bitte. Von welchem Gleis fährt der Zug?', sq:'Mirë. E marr. Pagim me kartë, ju lutem. Nga cili binar niset treni?'},
      ]
    }
  ]
},

'a1m9': {
  storyExtension: [
    {type:'narr', text:'Dion tregon Kleas diferencat e mëdha mes motit të Vjenës dhe Tiranës. Klea nuk e beson.'},
    {type:'line', speaker:'Klea', de:'Dion, schau mal raus! Es schneit! Magst du Schnee?', sq:'Dion, shiko jashtë! Po bie borë! Të pëlqen bora?'},
    {type:'line', speaker:'Dion', de:'Oh wow! Das ist unglaublich! Bei uns schneit es kaum — vielleicht einmal im Jahr, in den Bergen.', sq:'Oh wow! Kjo është e pabesueshme! Tek ne rrallë bie borë — ndoshta një herë në vit, në male.'},
    {type:'line', speaker:'Klea', de:'Wirklich? Albanien hat also kein richtiges Winter?', sq:'Vërtet? Shqipëria nuk ka dimër të vërtetë?'},
    {type:'line', speaker:'Dion', de:'Der Winter ist mild — etwa 8 bis 12 Grad. Heute in Tirana scheint bestimmt die Sonne!', sq:'Dimri është i butë — rreth 8 deri 12 gradë. Sot në Tiranë po ndriçon patjetër dielli!'},
    {type:'line', speaker:'Klea', de:'Das klingt wunderbar! Und der Sommer? Wie heiß wird es?', sq:'Kjo tingëllon mrekullueshëm! Dhe vera? Sa nxehtë bëhet?'},
    {type:'line', speaker:'Dion', de:'Sehr heiß — 38 bis 40 Grad manchmal! Alle gehen ans Meer. Keine Arbeit, nur Strand!', sq:'Shumë nxehtë — 38 deri 40 gradë ndonjëherë! Të gjithë shkojnë në det. Asnjë punë, vetëm plazh!'},
    {type:'line', speaker:'Klea', de:'Das klingt nach Urlaub! Kannst du mir Albanien zeigen — irgendwann?', sq:'Kjo tingëllon si pushime! Mund të më tregosh Shqipërinë — ndonjëherë?'},
    {type:'line', speaker:'Dion', de:'Mit Freude! Im Sommer. Meine Mutter kocht das beste Essen der Welt und das Meer ist wunderschön.', sq:'Me kënaqësi! Në verë. Nëna ime gatuan ushqimin më të mirë në botë dhe deti është i mrekullueshëm.'},
    {type:'narr', text:'Klea shënon datën. Dion kupton: miqtë e rinj janë ura mes dy botëve.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Dikush nga Islanda pyet për motin në vendin tënd. Shpjego të katër stinët!',
      hint: 'Im Frühling ist es... / Im Sommer... / Im Herbst... / Im Winter...',
      example: 'In Albanien ist das Wetter sehr angenehm! Im Frühling ist es warm und es regnet manchmal — etwa 18 Grad. Im Sommer ist es sehr heiß, manchmal 40 Grad. Alle gehen ans Meer! Im Herbst ist es schön — nicht zu heiß, nicht zu kalt. Im Winter ist es mild, etwa 8-12 Grad. Es schneit fast nie in der Stadt.',
      level: 'A1'
    },
    {
      prompt: 'Das Wetter heute ist schrecklich — tregoje mik tënd çfarë ndodh jashtë dhe çfarë plani keni',
      hint: 'Heute ist das Wetter... / Es regnet / Es ist kalt / Ich möchte lieber... / Wollen wir...?',
      example: 'Heute ist das Wetter wirklich schrecklich! Es regnet stark und es ist sehr kalt — nur 4 Grad. Ich möchte lieber zu Hause bleiben. Wollen wir einen Film schauen? Ich habe auch Kaffee und Kuchen zu Hause. Komm vorbei!',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Rezervo pushime — konsulto agjencinë',
      situation: 'Telefono agjenci udhëtimi. Dëshiron të shkosh diku të ngrohtë në dimër.',
      lines: [
        {speaker:'Agjensia', de:'Sonnenschein Reisebüro, guten Tag!', sq:'Agjencia Sonnenschein, mirëdita!'},
        {speaker:'Ti', de:'Guten Tag! Ich möchte im Januar verreisen — irgendwohin Warmes. Was empfehlen Sie?', sq:'Mirëdita! Dua të udhëtoj në janar — diku të ngrohtë. Çfarë rekomandoni?'},
        {speaker:'Agjensia', de:'Im Januar sind Teneriffa, Ägypten oder Thailand sehr beliebt. Welches Budget haben Sie?', sq:'Në janar janë shumë të njohura Tenerifu, Egjipti ose Tailanda. Çfarë buxheti keni?'},
        {speaker:'Ti', de:'Etwa 800 bis 1000 Euro, alles inklusive. Für eine Woche. Welches ist am günstigsten?', sq:'Rreth 800 deri 1000 euro, gjithçka e përfshirë. Për një javë. Cili është më i lirë?'},
        {speaker:'Agjensia', de:'Ägypten ist am günstigsten — ab 650 Euro. Und das Wetter ist perfekt, 25 Grad.', sq:'Egjipti është më i liri — nga 650 euro. Dhe moti është perfekt, 25 gradë.'},
        {speaker:'Ti', de:'Das klingt super! Können Sie mir mehr Informationen schicken? Per E-Mail?', sq:'Kjo tingëllon super! Mund të më dërgoni më shumë informacion? Me email?'},
      ]
    }
  ]
},

'a1m10': {
  storyExtension: [
    {type:'narr', text:'Dion fillon punën e parë si kamarier part-time. Dita e parë është kaotike por argëtuese.'},
    {type:'line', speaker:'Menaxheri', de:'Also Dion, heute ist dein erster Tag. Bist du nervös?', sq:'Pra Dion, sot është dita jote e parë. Je nervoz?'},
    {type:'line', speaker:'Dion', de:'Ein bisschen, ja! Aber ich bin motiviert. Was muss ich zuerst lernen?', sq:'Pak, po! Por jam i motivuar. Çfarë duhet të mësoj fillimisht?'},
    {type:'line', speaker:'Menaxheri', de:'Zuerst die Speisekarte auswendig. Dann die Tische bedienen — immer mit einem Lächeln!', sq:'Fillimisht menunë përmendësh. Pastaj shërbej tavolina — gjithmonë me buzëqeshje!'},
    {type:'line', speaker:'Dion', de:'Und wenn ich etwas nicht verstehe? Die Kunden sprechen vielleicht zu schnell.', sq:'Dhe nëse nuk kuptoj diçka? Klientët ndoshta flasin shumë shpejt.'},
    {type:'line', speaker:'Menaxheri', de:'Sag einfach: "Entschuldigung, können Sie das wiederholen?" Das ist völlig normal!', sq:'Thuaj thjesht: "Më fal, mund ta përsërisni?" Kjo është plotësisht normale!'},
    {type:'line', speaker:'Dion', de:'Das ist ein guter Tipp! Und was verdiene ich pro Stunde?', sq:'Kjo është këshillë e mirë! Dhe sa fitoj për orë?'},
    {type:'line', speaker:'Menaxheri', de:'12 Euro die Stunde plus Trinkgeld. Am Wochenende gibt es mehr Trinkgeld — die Leute sind großzügiger.', sq:'12 euro për orë plus bakshish. Fundjavën ka bakshish më shumë — njerëzit janë më bujarë.'},
    {type:'line', speaker:'Dion', de:'Super! Ich fange an. Mein Deutsch übe ich dann praktisch — das ist die beste Methode!', sq:'Super! Filloj. Gjermanishten e ushtroj praktikisht — kjo është metoda më e mirë!'},
    {type:'narr', text:'Dita e parë e punës. Dion bën disa gabime — por buzëqesh gjithmonë. Klientët e duan.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Intervistë pune — shefi pyet: "Warum wollen Sie bei uns arbeiten?" Çfarë thua?',
      hint: 'Ich möchte... weil... / Ich habe Erfahrung in... / Ich bin... und... / Mein Ziel ist...',
      example: 'Ich möchte bei Ihnen arbeiten, weil das Restaurant einen sehr guten Ruf hat. Ich lerne schnell und bin sehr zuverlässig. Außerdem möchte ich mein Deutsch durch den Kontakt mit Kunden verbessern. Mein Ziel ist es, in einem professionellen Umfeld zu wachsen.',
      level: 'A1'
    },
    {
      prompt: 'Kolegu te pyet: "Was ist dein Traumjob?" — Çfarë dëshiron të bësh në të ardhmen?',
      hint: 'Mein Traumjob ist... / Ich möchte... werden / Ich interessiere mich für... / Eines Tages...',
      example: 'Mein Traumjob ist Softwareentwickler in einem internationalen Unternehmen. Ich interessiere mich sehr für Technologie und Programmierung. Eines Tages möchte ich meine eigene Firma gründen — in Deutschland oder vielleicht zurück in Albanien. Wir werden sehen!',
      level: 'A1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Problem në punë — klient i pakënaqur',
      situation: 'Klienti ankohet: porosia ka ardhur gabim. Si e trajton si kamarier?',
      lines: [
        {speaker:'Klienti', de:'Entschuldigung! Ich habe Pasta bestellt, nicht Suppe!', sq:'Më fal! Kam porositur makarona, jo supë!'},
        {speaker:'Ti', de:'Oh! Das tut mir sehr leid! Das war mein Fehler. Ich bringe Ihnen sofort die richtige Bestellung.', sq:'Oh! Më vjen shumë keq! Kjo ishte gabimi im. Ju sjell menjëherë porosinë e saktë.'},
        {speaker:'Klienti', de:'Ich habe wenig Zeit. Wie lange dauert das?', sq:'Kam pak kohë. Sa kohë zgjat?'},
        {speaker:'Ti', de:'Etwa fünf Minuten, versprochen! Und als Entschuldigung bekommen Sie ein Dessert — kostenlos, von uns.', sq:'Rreth pesë minuta, e premtoj! Dhe si falje merrni ëmbëlsirë — falas, nga ne.'},
        {speaker:'Klienti', de:'Na gut. Aber bitte schnell!', sq:'Mirë pra. Por ju lutem shpejt!'},
        {speaker:'Ti', de:'Natürlich! Nochmals Entschuldigung, es passiert nicht wieder.', sq:'Natyrisht! Edhe njëherë falje, nuk ndodh sërish.'},
      ]
    }
  ]
},

// ══════════════════════════
// A2 — Modulet 3 deri 12
// ══════════════════════════

'a2m3': {
  storyExtension: [
    {type:'narr', text:'Dion sëmuret për herë të parë në Gjermani. Sistemi mjekësor është krejtësisht i ndryshëm.'},
    {type:'line', speaker:'Jonas', de:'Dion, du siehst wirklich schlecht aus. Hast du Fieber?', sq:'Dion, dukesh vërtet keq. Ke temperaturë?'},
    {type:'line', speaker:'Dion', de:'Ja, ich glaube schon. Mir tut der Kopf weh und ich habe Halsschmerzen seit gestern.', sq:'Po, besoj. Më dhemb koka dhe kam dhimbje fyti që dje.'},
    {type:'line', speaker:'Jonas', de:'Du musst zum Arzt. Hast du eine Krankenversicherung?', sq:'Duhet të shkosh te mjeku. Ke sigurim shëndetësor?'},
    {type:'line', speaker:'Dion', de:'Ja, über den Arbeitgeber. Aber wie funktioniert das hier? In Albanien geht man einfach zum Arzt.', sq:'Po, nëpërmjet punëdhënësit. Por si funksionon kjo këtu? Në Shqipëri shkon thjesht te mjeku.'},
    {type:'line', speaker:'Jonas', de:'Hier brauchst du einen Termin — außer in der Notaufnahme. Ich helfe dir einen Termin zu buchen.', sq:'Këtu duhet takim — përveç urgjencës. Të ndihmoj të rezervosh takim.'},
    {type:'line', speaker:'Dion', de:'So kompliziert! In Albanien wartet man eine Stunde und dann ist man dran.', sq:'Kaq e komplikuar! Në Kosovë pret një orë dhe pastaj ke radhën.'},
    {type:'line', speaker:'Jonas', de:'Dafür ist es hier kostenlos mit Versicherung. Medikamente bezahlt auch größtenteils die Kasse.', sq:'Til gjen këtu falas me sigurim. Edhe ilaçet paguhen kryesisht nga arka.'},
    {type:'line', speaker:'Dion', de:'Ah, das ist gut! Okay, buch mir bitte einen Termin für heute Nachmittag wenn möglich.', sq:'Ah, kjo është mirë! Mirë, rezervomë takim për pasditen e sotme nëse është e mundur.'},
    {type:'narr', text:'Jonas rezervon takim online — në 3 minuta. Dion mendon: Gjermania ka sistem, Kosova ka njerëz të ngrohtë. Të dyja kanë vlera.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Je te mjeku. Ai pyet: "Wo tut es weh und seit wann?" — Shpjego simptomat!',
      hint: 'Mir tut... weh / Ich habe... seit... / Außerdem... / Ich glaube ich habe...',
      example: 'Also, mir tut der Hals sehr weh, seit gestern Abend. Außerdem habe ich Kopfschmerzen und ein bisschen Fieber — etwa 38 Grad. Ich glaube, ich habe eine Erkältung oder vielleicht Grippe. Ich bin auch sehr müde und esse nichts.',
      level: 'A2'
    },
    {
      prompt: 'Miku thotë: "Ich mache jeden Tag Sport, esse gesund und schlafe 8 Stunden." — Reago dhe trego rutinën tënde shëndetësore',
      hint: 'Das ist super! Ich hingegen... / Ich versuche... aber... / Ich sollte mehr...',
      example: 'Das ist super — ich bewundere das! Ich hingegen schlafe leider nur sechs Stunden und mache zu wenig Sport. Ich versuche gesund zu essen, aber manchmal esse ich auch Fast Food nach der Arbeit. Ich sollte mehr auf meinen Körper achten. Du inspirierst mich!',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Telefono mjekun — Termin',
      situation: 'Ke dhimbje fyti prej 3 ditësh. Telefono ordinancën të marrësh takim.',
      lines: [
        {speaker:'Recepsionistja', de:'Praxis Dr. Schneider, guten Morgen!', sq:'Ordinanca Dr. Schneider, mirëmëngjes!'},
        {speaker:'Ti', de:'Guten Morgen! Ich brauche einen Termin so bald wie möglich. Ich habe seit drei Tagen Halsschmerzen.', sq:'Mirëmëngjes! Kam nevojë për takim sa më shpejt. Kam dhimbje fyti prej tre ditësh.'},
        {speaker:'Recepsionistja', de:'Haben Sie auch Fieber?', sq:'Keni edhe temperaturë?'},
        {speaker:'Ti', de:'Ja, gestern Abend hatte ich 38,5. Heute morgen etwas weniger.', sq:'Po, mbrëmë kisha 38,5. Sot mëngjes pak më pak.'},
        {speaker:'Recepsionistja', de:'Sind Sie Patient bei uns?', sq:'Jeni pacient tek ne?'},
        {speaker:'Ti', de:'Ja, mein Name ist Dion Kelmendi. Ich bin seit einem Jahr Patient hier.', sq:'Po, emri im është Dion Kelmendi. Jam pacient prej një viti këtu.'},
        {speaker:'Recepsionistja', de:'Dann kann ich Ihnen heute um 15:30 Uhr anbieten. Geht das?', sq:'Atëherë mund t\'ju ofroj sot në orën 15:30. A shkon?'},
        {speaker:'Ti', de:'Ja, perfekt! Danke sehr. Soll ich etwas mitbringen?', sq:'Po, perfekte! Shumë faleminderit. Duhet të sjell diçka?'},
      ]
    }
  ]
},

'a2m4': {
  storyExtension: [
    {type:'narr', text:'Dion dëshiron t\'i dërgojë dhuratë nënës por paratë janë të kufizuara. Duhet të gjejë ofertën më të mirë.'},
    {type:'line', speaker:'Dion', de:'Ich suche ein Geschenk für meine Mutter — etwas Typisch-Deutsches. Budget: 30 Euro.', sq:'Po kërkoj dhuratë për nënën time — diçka tipike gjermane. Buxheti: 30 euro.'},
    {type:'line', speaker:'Klea', de:'Was mag sie? Kleidung, Kosmetik, Essen?', sq:'Çfarë i pëlqen? Veshje, kozmetikë, ushqim?'},
    {type:'line', speaker:'Dion', de:'Sie kocht gerne. Vielleicht etwas für die Küche? Oder typisch deutsche Lebensmittel?', sq:'E do gatimin. Ndoshta diçka për kuzhinë? Ose ushqime tipike gjermane?'},
    {type:'line', speaker:'Klea', de:'Oh! Ein Adventskalender mit deutschen Schokoladen oder ein Kochbuch mit deutschen Rezepten!', sq:'Oh! Kalendar Adventi me çokolata gjermane ose libër gatimi me receta gjermane!'},
    {type:'line', speaker:'Dion', de:'Das Kochbuch ist eine super Idee! Aber — gibt es eins auf Albanisch oder Englisch?', sq:'Libri i gatimit është ide super! Por — ka ndonjë në shqip ose anglisht?'},
    {type:'line', speaker:'Klea', de:'Wahrscheinlich auf Englisch. Online bei Amazon schau mal — da findest du alles.', sq:'Ndoshta në anglisht. Kërko online tek Amazon — atje gjen gjithçka.'},
    {type:'line', speaker:'Dion', de:'Gute Idee. Ich bestelle es heute und schicke es direkt nach Albanien. Geht das?', sq:'Ide e mirë. E porosis sot dhe e dërgoj direkt në Shqipëri. A shkon?'},
    {type:'line', speaker:'Klea', de:'Ja, Amazon liefert international. Achte auf die Versandkosten — die können hoch sein.', sq:'Po, Amazon dërgon ndërkombëtarisht. Kujdes me shpenzimet e dërgimit — mund të jenë të larta.'},
    {type:'narr', text:'Dion blen librin e gatimit. Nëna e tij e merr pas dhjetë ditësh dhe qan nga gëzimi.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Ke blerë diçka online dhe produkti ka ardhur i dëmtuar. Si ankoheris tek shërbimi i klientit?',
      hint: 'Ich habe am... bestellt / Das Produkt ist... / Ich möchte... / Können Sie...?',
      example: 'Guten Tag! Ich habe am 15. März eine Kamera bei Ihnen bestellt. Das Produkt ist leider beschädigt angekommen — das Display hat einen Riss. Ich habe Fotos gemacht. Ich möchte entweder einen Ersatz oder eine Rückerstattung. Können Sie mir sagen, wie ich vorgehen soll?',
      level: 'A2'
    },
    {
      prompt: 'Duhet të bësh blerje javore me 50 euro. Listo çfarë blen dhe pse — gjermanisht!',
      hint: 'Ich kaufe... für... Euro / Das brauche ich weil... / Insgesamt...',
      example: 'Mit 50 Euro kaufe ich: Brot, Milch und Käse für etwa 8 Euro — das sind die Grundlagen. Dann Hähnchen und Gemüse für 12 Euro — für das Mittagessen. Nudeln und Tomatensoße für 5 Euro — schnell und günstig. Obst für 6 Euro — für die Gesundheit. Kaffee für 7 Euro — absolut notwendig! Insgesamt 38 Euro, also spare ich 12 Euro.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Treg i dytë dorës — Kauf und Verkauf',
      situation: 'Shkon në treg të dytë dorës. Sheh xhaketa të mirë por çmimi është shumë i lartë.',
      lines: [
        {speaker:'Shitësi', de:'Kann ich helfen? Diese Jacke ist wirklich schön, oder?', sq:'Mund të ndihmoj? Kjo xhaketë është vërtet e bukur, apo jo?'},
        {speaker:'Ti', de:'Ja, sehr schön! Aber 45 Euro ist viel für einen Secondhand-Markt. Gibt es einen Rabatt?', sq:'Po, shumë e bukur! Por 45 euro është shumë për treg të dytë dorës. Ka zbritje?'},
        {speaker:'Shitësi', de:'Die Jacke ist kaum getragen — fast neu! Aber... für Sie mache ich 38 Euro.', sq:'Xhaketa është pothuajse e paveshur — gati e re! Por... për ju bëj 38 euro.'},
        {speaker:'Ti', de:'Ich gebe Ihnen 30 Euro — cash sofort. Das ist mein letztes Angebot.', sq:'Ju jap 30 euro — cash menjëherë. Kjo është oferta ime e fundit.'},
        {speaker:'Shitësi', de:'Hm... 35 Euro und wir sind einig!', sq:'Hm... 35 euro dhe jemi dakord!'},
        {speaker:'Ti', de:'Deal! 35 Euro. Darf ich mit Karte zahlen?', sq:'Marrëveshje! 35 euro. Mund të paguaj me kartë?'},
      ]
    }
  ]
},

'a2m5': {
  storyExtension: [
    {type:'narr', text:'Dion organizon darkën e parë tek apartamenti i tij i ri. Fton Jonas, Klea, dhe dy kolegë. Është nervoz por i entuziazmuar.'},
    {type:'line', speaker:'Jonas', de:'Dion! Was hast du alles gekocht? Es riecht fantastisch!', sq:'Dion! Çfarë ke gatuar? Era është fantastike!'},
    {type:'line', speaker:'Dion', de:'Tavë Kosi — das albanische Nationalgericht! Und Byrek als Vorspeise. Alles selbst gemacht!', sq:'Tavë Kosi — gjella kombëtare shqiptare! Dhe byrek si antipastë. Gjithçka e bërë vetë!'},
    {type:'line', speaker:'Klea', de:'Ich bin so gespannt! Ich habe noch nie albanisch gegessen.', sq:'Jam kaq kurioz! Kurrë nuk kam ngrënë ushqim shqiptar.'},
    {type:'line', speaker:'Dion', de:'Dann wird das heute eure Entdeckung sein! Setzt euch bitte. Wein oder Raki?', sq:'Atëherë kjo sot do të jetë zbulimi juaj! Uluni ju lutem. Verë ose raki?'},
    {type:'line', speaker:'Jonas', de:'Was ist Raki?', sq:'Çfarë është raki?'},
    {type:'line', speaker:'Dion', de:'Ein albanischer Schnaps — sehr stark! Aber nur ein kleines Glas, als Tradition.', sq:'Një raki shqiptare — shumë e fortë! Por vetëm një gotë e vogël, si traditë.'},
    {type:'line', speaker:'Klea', de:'Ich probiere alles! Das ist doch der Sinn des Abends — neue Kulturen kennenlernen!', sq:'I provoj të gjitha! Kjo është kuptimi i mbrëmjes — njohja e kulturave të reja!'},
    {type:'line', speaker:'Dion', de:'Genauso! Guten Appetit — oder wie wir sagen: "Ju bëftë mirë!"', sq:'Pikërisht! Ju bëftë mirë — ose si themi ne: "Ju bëftë mirë!"'},
    {type:'narr', text:'Darka zgjat deri në orën dy të natës. Dion kupton: shtëpia nuk është vetëm ndërtesë — është njerëzit brenda saj.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Ti je kamerier. Klienti pyet: "Was empfehlen Sie heute?" — Rekomando gjellën e ditës me entuziazëm!',
      hint: 'Ich empfehle besonders... / Das ist unser Spezialität... / Das Fleisch ist... / Dazu passt...',
      example: 'Ich empfehle besonders unser Tagesgericht — Hähnchen mit Kräutern und Ofenkartoffeln. Das Hähnchen ist heute frisch und sehr zart. Dazu passt hervorragend unser Hauswein. Als Vorspeise würde ich die Tomatensuppe vorschlagen — cremig und aromatisch. Möchten Sie das probieren?',
      level: 'A2'
    },
    {
      prompt: 'Ke ngrënë darkë në restorant. Ishte shumë mirë por fatura duket e gabuar. Si i bën vërejtje kamerierit?',
      hint: 'Entschuldigung, ich glaube hier ist ein Fehler / Ich habe... bestellt aber... / Könnten Sie...?',
      example: 'Entschuldigung! Ich glaube, hier ist ein kleiner Fehler in der Rechnung. Ich habe nur ein Glas Wein bestellt, aber hier stehen zwei. Und der Nachtisch — den haben wir nicht bestellt. Könnten Sie das bitte überprüfen? Danke!',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Rezervo tavolinë — darkë speciale',
      situation: 'Dëshiron të rezervosh tavolinë për ditëlindjen e shokut — 6 persona, të shtunën në mbrëmje.',
      lines: [
        {speaker:'Restoranti', de:'Restaurant Bellavista, guten Tag!', sq:'Restoranti Bellavista, mirëdita!'},
        {speaker:'Ti', de:'Guten Tag! Ich möchte einen Tisch für Samstag Abend reservieren. Für sechs Personen.', sq:'Mirëdita! Dua të rezervoj tavolinë për të shtunën në mbrëmje. Për gjashtë persona.'},
        {speaker:'Restoranti', de:'Um wie viel Uhr? Wir haben 19 Uhr oder 21 Uhr frei.', sq:'Në çfarë ore? Kemi lirë orën 19 ose 21.'},
        {speaker:'Ti', de:'Um 19 Uhr, bitte. Es ist ein Geburtstag — können Sie eine kleine Überraschung machen? Eine Torte vielleicht?', sq:'Orën 19, ju lutem. Është ditëlindje — mund të bëni surprizë të vogël? Ndoshta tortë?'},
        {speaker:'Restoranti', de:'Natürlich! Wir können eine Torte vorbereiten für 15 Euro extra. Auf welchen Namen?', sq:'Natyrisht! Mund të përgatisim tortë për 15 euro shtesë. Në çfarë emri?'},
        {speaker:'Ti', de:'Auf den Namen Kelmendi, bitte. Und gibt es Parkplätze in der Nähe?', sq:'Në emrin Kelmendi, ju lutem. Dhe ka parkim afër?'},
      ]
    }
  ]
},

'a2m6': {
  storyExtension: [
    {type:'narr', text:'Dion vëren se qiradhënësi ka hyrë në apartamentin e tij pa leje ndërkohë që ai ishte në punë. Duhet të flasë.'},
    {type:'line', speaker:'Dion', de:'Herr Vogel, ich muss kurz mit Ihnen sprechen. Es ist etwas passiert.', sq:'Z. Vogel, duhet të flas shkurt me ju. Ka ndodhur diçka.'},
    {type:'line', speaker:'Hr. Vogel', de:'Natürlich! Was ist denn los?', sq:'Natyrisht! Çfarë ka?'},
    {type:'line', speaker:'Dion', de:'Ich habe gemerkt, dass jemand in meiner Wohnung war, während ich bei der Arbeit war. Die Möbel standen anders.', sq:'Kam vërejtur se dikush ka qenë në banesën time ndërkohë që isha në punë. Mobiljet ishin ndryshe.'},
    {type:'line', speaker:'Hr. Vogel', de:'Ah ja — ich war da. Ich musste die Heizung überprüfen. Es gab einen Defekt.', sq:'Ah po — unë isha atje. Duhej të kontrolloja ngrohjen. Kishte defekt.'},
    {type:'line', speaker:'Dion', de:'Ich verstehe das, aber ich bitte Sie, mich vorher zu informieren. Das ist meine Privatsphäre.', sq:'E kuptoj, por ju kërkoj të më informoni paraprakisht. Kjo është privatësia ime.'},
    {type:'line', speaker:'Hr. Vogel', de:'Sie haben recht. In Deutschland ist das Gesetz sehr klar: der Vermieter muss 24 Stunden vorher ankündigen.', sq:'Keni të drejtë. Në Gjermani ligji është shumë i qartë: qiradhënësi duhet të njoftojë 24 orë paraprakisht.'},
    {type:'line', speaker:'Dion', de:'Genau. Ich weiß das aus dem Mietrecht. Ich möchte keine Probleme, aber ich möchte, dass wir das respektieren.', sq:'Saktë. E di nga e drejta e qirasë. Nuk dua probleme, por dua ta respektojmë këtë.'},
    {type:'line', speaker:'Hr. Vogel', de:'Absolut. Das passiert nicht wieder. Entschuldigung.', sq:'Absolutisht. Kjo nuk ndodh sërish. Kërkoj falje.'},
    {type:'narr', text:'Dion mëson: në Gjermani të drejtat janë të qarta. Duhet t\'i njohësh dhe t\'i mbrosh me qetësi.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shpjego: Cilat janë të drejtat dhe detyrimet e qiramarrësit në Gjermani?',
      hint: 'Als Mieter hat man das Recht... / Man ist verpflichtet... / Der Vermieter darf nicht... / Im Mietvertrag steht...',
      example: 'Als Mieter hat man das Recht auf Privatsphäre — der Vermieter darf nicht ohne Vorankündigung eintreten. Man ist verpflichtet, die Miete pünktlich zu zahlen und die Wohnung pfleglich zu behandeln. Reparaturen muss meistens der Vermieter übernehmen. Im Mietvertrag steht alles genau — man sollte ihn immer sorgfältig lesen.',
      level: 'A2'
    },
    {
      prompt: 'Duhet të lësh banesën tënde pas 2 vitesh. Shkruaj mesazh qiradhënësit duke dhënë njoftim.',
      hint: 'Sehr geehrter Herr... / Ich möchte Ihnen mitteilen... / Die Kündigung gilt zum... / Ich bitte...',
      example: 'Sehr geehrter Herr Vogel, ich möchte Ihnen mitteilen, dass ich die Wohnung kündige. Die Kündigung gilt zum 31. März. Ich bitte Sie, die Kaution nach meinem Auszug zurückzuerstatten. Ich werde die Wohnung ordentlich hinterlassen. Mit freundlichen Grüßen, Dion Kelmendi.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Kontroj apartamentin — para firmosjes',
      situation: 'Para se të firmosësh kontratën e qirasë, kontrollo çdo detaj me qiradhënësin.',
      lines: [
        {speaker:'Ti', de:'Bevor ich unterschreibe — darf ich noch ein paar Fragen stellen?', sq:'Para se të firmós — mund të bëj edhe disa pyetje?'},
        {speaker:'Qiradhënësi', de:'Natürlich! Was möchten Sie wissen?', sq:'Natyrisht! Çfarë dëshironi të dini?'},
        {speaker:'Ti', de:'Was ist in den Nebenkosten enthalten? Gas, Strom, Wasser?', sq:'Çfarë përfshihet në shpenzimet shtesë? Gaz, rrymë, ujë?'},
        {speaker:'Qiradhënësi', de:'Heizung und Wasser sind inklusive. Strom zahlen Sie selbst.', sq:'Ngrohja dhe uji janë të përfshirë. Rrymën paguani vetë.'},
        {speaker:'Ti', de:'Verstehe. Und wie hoch ist die Kaution? Und wann bekomme ich sie zurück?', sq:'Kuptoj. Dhe sa është depozita? Dhe kur e marr mbrapsht?'},
        {speaker:'Qiradhënësi', de:'Zwei Monatsmieten — 1.400 Euro. Nach dem Auszug, wenn alles in Ordnung ist, innerhalb von drei Monaten.', sq:'Dy qira mujore — 1.400 euro. Pas largimit, nëse gjithçka është në rregull, brenda tre muajsh.'},
      ]
    }
  ]
},

'a2m7': {
  storyExtension: [
    {type:'narr', text:'Dion merr emailin: pranohet për intervistë në kompaninë më të madhe teknologjike në Berlin. Është shumë i emocionuar por edhe i frikësuar.'},
    {type:'line', speaker:'Dion', de:'Jonas! Ich habe eine Einladung zur Bewerbung bei TechBerlin bekommen! Was soll ich jetzt machen?', sq:'Jonas! Kam marrë ftesë për intervistë në TechBerlin! Çfarë duhet të bëj tani?'},
    {type:'line', speaker:'Jonas', de:'Wow! Glückwunsch! Zuerst — recherchiere das Unternehmen gründlich. Was machen die genau?', sq:'Wow! Urime! Fillimisht — hulumto kompaninë tërësisht. Çfarë bëjnë saktësisht?'},
    {type:'line', speaker:'Dion', de:'Software für Logistik. Ich habe schon ihre Website durchgelesen. Sehr innovativ.', sq:'Softuer për logjistikë. Tashmë e kam lexuar faqen e tyre. Shumë inovative.'},
    {type:'line', speaker:'Jonas', de:'Gut. Bereite dich auf die typischen Fragen vor: Stärken, Schwächen, Warum wir, Wo siehst du dich in fünf Jahren.', sq:'Mirë. Përgatitu për pyetjet tipike: pikat e forta, të dobëta, pse ne, ku e sheh veten pas pesë vitesh.'},
    {type:'line', speaker:'Dion', de:'Die Schwächen-Frage ist schwierig. Was soll ich sagen?', sq:'Pyetja mbi dobësitë është e vështirë. Çfarë duhet të them?'},
    {type:'line', speaker:'Jonas', de:'Sei ehrlich — aber wähle eine Schwäche, die gleichzeitig eine Stärke ist. Zum Beispiel: "Ich bin manchmal zu perfektionistisch."', sq:'Bëhu i sinqertë — por zgjidh dobësi që njëkohësisht është forcë. Për shembull: "Ndonjëherë jam shumë perfeksionist."'},
    {type:'line', speaker:'Dion', de:'Clever! Und wegen meinem Deutsch — soll ich das ansprechen oder besser nicht?', sq:'I zgjuar! Dhe lidhur me gjermanishten time — duhet ta trajtoj apo jo?'},
    {type:'line', speaker:'Jonas', de:'Sprich es an! Sag: "Ich lerne noch Deutsch, aber ich verbessere mich täglich." Das zeigt Selbstbewusstsein.', sq:'Trajtoje! Thuaj: "Ende po mësoj gjermanisht, por përmirësohem çdo ditë." Kjo tregon vetëbesim.'},
    {type:'narr', text:'Dion kalon intervistën. Dy javë më vonë, TechBerlin i ofron punën.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Intervistë pune — pyetja klasike: "Erzählen Sie uns etwas über sich!" Çfarë thua — 1 minutë?',
      hint: 'Ich bin... aus... / Ich habe... studiert / Ich habe Erfahrung in... / Ich bin besonders gut in... / Mein Ziel ist...',
      example: 'Sehr gerne! Ich bin Dion, 29 Jahre alt, und komme aus Tirana, Albanien. Ich habe Informatik studiert und arbeite seit zwei Jahren als Softwareentwickler. Ich habe Erfahrung in Python, JavaScript und Datenbankmanagement. Ich bin besonders gut in der Zusammenarbeit mit Teams und beim Lösen komplexer Probleme. Mein Ziel ist es, in einem innovativen Unternehmen zu wachsen und gleichzeitig mein Deutsch zu verbessern. Ich glaube, dass Ihre Firma perfekt zu meinen Zielen passt.',
      level: 'A2'
    },
    {
      prompt: 'Intervistë — "Was sind Ihre Schwächen?" — Jep përgjigje inteligjente dhe të sinqertë!',
      hint: 'Manchmal bin ich zu... / Das arbeite ich aktiv daran, indem ich... / Ich habe gelernt...',
      example: 'Manchmal bin ich zu selbstkritisch — ich überprüfe meine Arbeit sehr oft und das kostet Zeit. Ich arbeite aktiv daran, indem ich Deadlines strenger einhalte und lerne, auch bei 90% gutem Ergebnis abzuschließen. Ich habe gelernt, dass manchmal "gut genug" besser ist als "perfekt aber zu spät".',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Negocio pagën',
      situation: 'Kompania të ofron punën por paga është nën pritshmëritë tuaja. Negocioje me respekt.',
      lines: [
        {speaker:'HR', de:'Wir würden Ihnen gerne ein Angebot machen: 3.200 Euro brutto im Monat.', sq:'Do t\'ju donim të bënim ofertë: 3.200 euro bruto në muaj.'},
        {speaker:'Ti', de:'Vielen Dank für das Angebot! Ich bin sehr interessiert an der Stelle. Darf ich eine Frage stellen?', sq:'Shumë faleminderit për ofertën! Jam shumë i interesuar për vendin. Mund të bëj pyetje?'},
        {speaker:'HR', de:'Natürlich! Was möchten Sie wissen?', sq:'Natyrisht! Çfarë dëshironi të dini?'},
        {speaker:'Ti', de:'Basierend auf meiner Erfahrung und dem Marktvergleich hatte ich an etwa 3.600 Euro gedacht. Ist da Spielraum?', sq:'Bazuar në përvojën time dhe krahasimin e tregut, kisha menduar rreth 3.600 euro. Ka hapësirë?'},
        {speaker:'HR', de:'Wir können auf 3.400 Euro gehen. Plus Bonuszahlungen am Ende des Jahres.', sq:'Mund të shkojmë deri 3.400 euro. Plus bonus në fund të vitit.'},
        {speaker:'Ti', de:'Das klingt fair. Ich nehme das Angebot an. Wann kann ich anfangen?', sq:'Kjo tingëllon e drejtë. E pranoj ofertën. Kur mund të filloj?'},
      ]
    }
  ]
},

'a2m8': {
  storyExtension: [
    {type:'narr', text:'Dion zbulon hobi të ri: fotografinë. Berlini i jep mijëra motive. Jonas e shoqëron në ekspeditat e tij.'},
    {type:'line', speaker:'Jonas', de:'Dion, diese Fotos von dir auf Instagram sind unglaublich. Wann hast du das gelernt?', sq:'Dion, këto fotografi të tua në Instagram janë të pabesueshme. Kur e ke mësuar?'},
    {type:'line', speaker:'Dion', de:'Ich habe angefangen, als ich nach Wien kam. Die Stadt war so schön — ich wollte sie festhalten.', sq:'Fillova kur erdha në Vjenë. Qyteti ishte kaq i bukur — dëshiroja ta fiksoja.'},
    {type:'line', speaker:'Jonas', de:'Hast du einen Kurs gemacht oder selbst gelernt?', sq:'Ke bërë kurs apo ke mësuar vetë?'},
    {type:'line', speaker:'Dion', de:'YouTube, hauptsächlich! Und viel Üben. Ich gehe jeden Sonntag morgens raus, bevor die Stadt aufwacht.', sq:'YouTube, kryesisht! Dhe shumë ushtrim. Dal çdo të diele mëngjes, para se qyteti të zgjohet.'},
    {type:'line', speaker:'Jonas', de:'Das ist dein Geheimnis! Das frühe Licht ist das Beste für Fotos.', sq:'Ky është sekreti yt! Drita e hershme është më e mira për fotografi.'},
    {type:'line', speaker:'Dion', de:'Genau! Und in Berlin gibt es überall Geschichte zu sehen. Jede Wand erzählt etwas.', sq:'Saktë! Dhe në Berlin ka histori kudo. Çdo mur tregon diçka.'},
    {type:'line', speaker:'Jonas', de:'Hast du schon daran gedacht, eine Ausstellung zu machen? Deine Bilder sind wirklich gut!', sq:'Ke menduar të bësh ekspozitë? Fotot e tua janë vërtet të mira!'},
    {type:'line', speaker:'Dion', de:'Eine Ausstellung? Das ist ein großer Traum... aber vielleicht eines Tages. Zuerst B1!', sq:'Ekspozitë? Kjo është ëndërr e madhe... por ndoshta një ditë. Fillimisht B1!'},
  ],
  thinkInGerman: [
    {
      prompt: 'Dikush te pyet: "Was machst du in deiner Freizeit?" — Trego hobitë me detaje dhe entuziazëm!',
      hint: 'In meiner Freizeit... / Am liebsten... / Ich interessiere mich besonders für... / Das entspannt mich weil...',
      example: 'In meiner Freizeit fotografiere ich am liebsten. Ich gehe früh morgens raus und suche interessante Motive in der Stadt — alte Gebäude, Menschen, Licht und Schatten. Außerdem lerne ich Deutsch — das ist auch eine Art Hobby für mich! Manchmal koche ich albanische Gerichte für Freunde. Das entspannt mich, weil es mich an die Heimat erinnert.',
      level: 'A2'
    },
    {
      prompt: 'Trego: Was ist besser — ein aktives Hobby oder ein ruhiges Hobby? Jep argumente për të dyja anët!',
      hint: 'Einerseits sind aktive Hobbys... / Andererseits haben ruhige Hobbys... / Ich persönlich finde...',
      example: 'Einerseits sind aktive Hobbys wie Sport gut für die Gesundheit und geben Energie. Man trifft Menschen und verlässt die Wohnung. Andererseits haben ruhige Hobbys wie Lesen oder Fotografieren auch viele Vorteile: man entspannt sich, lernt etwas und braucht keine Ausrüstung. Ich persönlich finde, das Beste ist eine Kombination — Sport für den Körper, kreative Hobbys für den Geist.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Rekomando aktivitet miku tënd',
      situation: 'Miku tënd ka stres shumë dhe pyet çfarë hobije të nisë. Jep rekomandime konkrete.',
      lines: [
        {speaker:'Miku', de:'Ich habe so viel Stress bei der Arbeit. Ich brauche ein Hobby. Was empfiehlst du mir?', sq:'Kam kaq shumë stres në punë. Kam nevojë për hobi. Çfarë më rekomandon?'},
        {speaker:'Ti', de:'Das kommt darauf an — willst du etwas Aktives oder lieber etwas Ruhiges?', sq:'Varet — dëshiron diçka aktive apo diçka të qetë?'},
        {speaker:'Miku', de:'Beides wäre gut! Ich sitze den ganzen Tag im Büro.', sq:'Të dyja do të ishin mirë! Rri gjithë ditën në zyrë.'},
        {speaker:'Ti', de:'Dann würde ich Fotografieren empfehlen! Du gehst raus, du bewegst dich, und du siehst die Stadt mit anderen Augen.', sq:'Atëherë do të rekomandoja fotografi! Del jashtë, lëvizësh, dhe e sheh qytetin me sy të tjerë.'},
        {speaker:'Miku', de:'Interessant! Brauche ich eine teure Kamera?', sq:'Interesante! Kam nevojë për kamerë të shtrenjtë?'},
        {speaker:'Ti', de:'Gar nicht! Das Handy reicht am Anfang völlig. Komm am Sonntag mit mir — ich zeige dir alles!', sq:'Aspak! Telefoni mjafton plotësisht në fillim. Eja të dielën me mua — të tregoj gjithçka!'},
      ]
    }
  ]
},

'a2m9': {
  storyExtension: [
    {type:'narr', text:'Dion ka keqkuptim serioz me kolegun gjerman. Fjalë të thjeshta po keqinterpretohen ndërkulturalisht.'},
    {type:'line', speaker:'Mark', de:'Dion, ich muss ehrlich mit dir sein. Du unterbrichst mich oft in Meetings. Das ist nicht okay.', sq:'Dion, duhet të jem i sinqertë me ty. Shpesh më ndërpret në mbledhje. Kjo nuk është mirë.'},
    {type:'line', speaker:'Dion', de:'Ehrlich gesagt — das habe ich nicht gemerkt. Bei uns ist das normal: man zeigt Interesse indem man reagiert.', sq:'Sinqerisht — nuk e kam vërejtur. Tek ne kjo është normale: tregon interes duke reaguar.'},
    {type:'line', speaker:'Mark', de:'Ich verstehe den kulturellen Unterschied, aber hier in Deutschland gilt: man wartet bis der andere fertig ist.', sq:'Kuptoj ndryshimin kulturor, por këtu në Gjermani vlen: pret derisa tjetri të mbarojë.'},
    {type:'line', speaker:'Dion', de:'Das nehme ich mir zu Herzen. Es tut mir leid — das war keine Absicht.', sq:'Këtë e marr seriozisht. Më vjen keq — nuk ishte me qëllim.'},
    {type:'line', speaker:'Mark', de:'Ich weiß! Deswegen sage ich es dir — damit wir besser zusammenarbeiten können.', sq:'E di! Prandaj po ta them — që të mund të bashkëpunojmë më mirë.'},
    {type:'line', speaker:'Dion', de:'Ich schätze die Direktheit. Bei uns sagt man das nie so offen — man schweigt und ärgert sich innerlich.', sq:'E vlerësoj drejtpërdrejtshmërinë. Tek ne nuk thuhet kurrë kaq hapur — hesht dhe zemërohesh përbrenda.'},
    {type:'line', speaker:'Mark', de:'Das klingt anstrengend! Hier ist es einfacher: sagen was man denkt, freundlich aber klar.', sq:'Kjo tingëllon e lodhshme! Këtu është më e thjeshtë: thuaj çfarë mendon, me mirësjellje por qartë.'},
    {type:'narr', text:'Dion dhe Mark bëhen miq të mirë. Ndryshimi kulturor, kur shpjegohet, bëhet urë dhe jo mur.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Ke pasur mosmarrëveshje me mik. Tani dëshiron të pajtohesh. Si e bën? Shkruaj mesazh!',
      hint: 'Ich möchte mich entschuldigen / Ich denke, es war ein Missverständnis / Ich hoffe, wir können...',
      example: 'Hey Jonas, ich möchte mich für unser Gespräch gestern entschuldigen. Ich war zu direkt und das war nicht fair. Ich denke, es war ein Missverständnis auf beiden Seiten. Ich schätze unsere Freundschaft sehr und hoffe, wir können darüber reden. Wann hast du Zeit für einen Kaffee?',
      level: 'A2'
    },
    {
      prompt: 'Dikush thotë: "Albaner sind sehr emotional und dramatisch." — Si reagon me qetësi dhe argument?',
      hint: 'Das ist ein Stereotyp... / Ich verstehe, woher das kommt, aber... / In meiner Erfahrung...',
      example: 'Das ist ein Stereotyp, das ich oft höre, aber es ist sehr vereinfacht. Ich verstehe, woher das kommt — in albanischer Kultur drückt man Gefühle offener aus als hier. Aber "emotional" ist nicht dasselbe wie "dramatisch". In meiner Erfahrung sind Albaner herzlich, direkt und leidenschaftlich — das ist eine Stärke, keine Schwäche.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Jep feedback konstruktiv kolegut',
      situation: 'Kolegu ka bërë prezantim të dobët. Duhet t\'i japësh feedback të ndershëm por mbështetës.',
      lines: [
        {speaker:'Ti', de:'Hey, darf ich kurz ehrliches Feedback geben? Ich meine es gut.', sq:'Hej, mund të jap feedback të ndershëm shkurt? E kuptoj mirë.'},
        {speaker:'Kolegu', de:'Ja natürlich! Was denkst du?', sq:'Po natyrisht! Çfarë mendon?'},
        {speaker:'Ti', de:'Der Inhalt war wirklich gut — die Daten waren überzeugend. Aber ich fand, das Tempo war etwas zu schnell. Die Leute konnten nicht immer folgen.', sq:'Përmbajtja ishte vërtet e mirë — të dhënat ishin bindëse. Por gjeta se ritmi ishte pak shumë i shpejtë. Njerëzit nuk mund të ndiqnin gjithmonë.'},
        {speaker:'Kolegu', de:'Ah, das habe ich auch gefühlt. Was würdest du ändern?', sq:'Ah, edhe unë e ndija. Çfarë do të ndryshoje?'},
        {speaker:'Ti', de:'Mehr Pausen zwischen den Folien, und vielleicht eine kurze Zusammenfassung am Ende. Du hast wirklich gutes Material — zeig es mehr!', sq:'Më shumë pauza midis sllajdëve, dhe ndoshta përmbledhje të shkurtër në fund. Ke material vërtet të mirë — trego atë më shumë!'},
      ]
    }
  ]
},

'a2m10': {
  storyExtension: [
    {type:'narr', text:'Dion regjistrohet në një kurs gjuhe, niveli B1. Mësonjësi i pyet studentët pse mësojnë gjermanisht. Dion ka përgjigjen më interesante.'},
    {type:'line', speaker:'Mësuesi', de:'Warum lernen Sie alle Deutsch? Fangen wir mit Ihnen an, Dion.', sq:'Pse mësoni të gjithë gjermanisht? Fillojmë me ju, Dion.'},
    {type:'line', speaker:'Dion', de:'Ich lerne Deutsch aus drei Gründen: wegen meiner Arbeit, wegen meinen deutschen Freunden — und weil mir die Sprache gefällt.', sq:'Mësoj gjermanisht për tre arsye: për shkak të punës, për shkak të miqve të mi gjermanë — dhe sepse gjuha më pëlqen.'},
    {type:'line', speaker:'Mësuesi', de:'Interessant! Was gefällt Ihnen an der Sprache?', sq:'Interesante! Çfarë ju pëlqen tek gjuha?'},
    {type:'line', speaker:'Dion', de:'Die Präzision. Es gibt Wörter im Deutschen, die es in keiner anderen Sprache gibt — wie "Weltschmerz" oder "Fernweh".', sq:'Saktësia. Ka fjalë në gjermanisht që nuk ekzistojnë në asnjë gjuhë tjetër — si "Weltschmerz" ose "Fernweh".'},
    {type:'line', speaker:'Studenti2', de:'Was bedeutet "Fernweh"?', sq:'Çfarë do të thotë "Fernweh"?'},
    {type:'line', speaker:'Dion', de:'Das Verlangen nach fernen Ländern und Reisen. Auf Albanisch würde man drei Wörter brauchen!', sq:'Dëshira për vende dhe udhëtime të largëta. Në shqip do të duheshin tre fjalë!'},
    {type:'line', speaker:'Mësuesi', de:'Perfekt! Das ist genau die Denkweise, die man zum Sprachenlernen braucht — Neugier!', sq:'Perfekte! Kjo është pikërisht mendësia që nevojitet për të mësuar gjuhë — kurioziteti!'},
    {type:'narr', text:'Pas kursit, tre studente pyesin Dionin nëse mund të ushtrojnë bashkë. Dion bëhet i pari studenti i klasës.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Mësuesi pyet: "Was ist Ihre größte Herausforderung beim Deutschlernen?" — Përgjigju sinqerisht!',
      hint: 'Meine größte Herausforderung ist... / Besonders schwierig finde ich... / Ich kämpfe manchmal mit... / Was mir hilft ist...',
      example: 'Meine größte Herausforderung ist der Genitiv — ich vergesse immer, wann ich ihn benutzen soll! Besonders schwierig finde ich auch die Trennverben, weil das Präfix ans Ende geht. Ich kämpfe manchmal auch mit dem Sprechen — ich denke zu lange nach. Was mir hilft ist, einfach zu reden und Fehler zu akzeptieren.',
      level: 'A2'
    },
    {
      prompt: 'Si ndihmon teknologjia në mësimin e gjuhëve? Jep mendimin tënd me shembuj konkretë!',
      hint: 'Mit Hilfe von... kann man... / Apps wie... / YouTube hat mir geholfen zu... / Allerdings...',
      example: 'Technologie hilft enorm beim Sprachenlernen! Mit Hilfe von Apps wie Duolingo oder Anki kann man täglich üben, auch in der U-Bahn. YouTube hat mir geholfen, natürliches Deutsch zu hören und die Aussprache zu verstehen. Allerdings ersetzt kein Computer echte Gespräche — das ist immer noch das Beste.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Diskutim në klasë — Sprache und Kultur',
      situation: 'Mësuesi bën pyetje: "Kann man eine Sprache ohne die Kultur verstehen?" — Ti jep mendim të fortë.',
      lines: [
        {speaker:'Mësuesi', de:'Was denken Sie alle — kann man eine Sprache ohne ihre Kultur wirklich lernen?', sq:'Çfarë mendoni të gjithë — mund të mësohet gjuhë pa kulturën e saj vërtet?'},
        {speaker:'Ti', de:'Ich glaube nein. Grammatik kann man lernen, aber die Sprache "fühlen" — das geht nicht ohne Kultur.', sq:'Besoj jo. Gramatikën mund ta mësosh, por gjuhën ta "ndijosh" — kjo nuk shkon pa kulturë.'},
        {speaker:'Mësuesi', de:'Können Sie das mit einem Beispiel erklären?', sq:'Mund ta shpjegoni me shembull?'},
        {speaker:'Ti', de:'Ja. Das Wort "gemütlich" zum Beispiel. Man kann es als "gemütlich = bequem" übersetzen, aber das Gefühl dahinter — das deutsche Lebensgefühl — versteht man nur, wenn man in Deutschland lebt.', sq:'Po. Fjala "gemütlich" për shembull. Mund ta përkthesh si "gemütlich = rehat", por ndjesia pas saj — ndjesia e jetesës gjermane — e kupton vetëm kur jeton në Gjermani.'},
        {speaker:'Studenti2', de:'Das stimmt! Deswegen ist Austausch so wichtig.', sq:'Kjo është e saktë! Prandaj shkëmbimi është kaq i rëndësishëm.'},
      ]
    }
  ]
},

'a2m11': {
  storyExtension: [
    {type:'narr', text:'Dion planifikon pushimet e para me Klea — një javë në Kroaci. Ky është udhëtimi i tyre i parë si miq të mirë.'},
    {type:'line', speaker:'Klea', de:'Okay, ich habe alles organisiert! Hotel, Fähre, Mietwagen. Du musst nur koffer packen!', sq:'Mirë, e kam organizuar gjithçka! Hotel, anija, makinë me qira. Ti duhet vetëm të paketosh valixhen!'},
    {type:'line', speaker:'Dion', de:'Du bist unglaublich organisiert! Ich wäre nie so weit gekommen alleine.', sq:'Ti je pabesueshëm e organizuar! Kurrë nuk do të kisha arritur kaq larg vetëm.'},
    {type:'line', speaker:'Klea', de:'Das ist Deutsch in mir! Wir planen alles. Manchmal zu viel vielleicht.', sq:'Kjo është gjermanja brenda meje! Ne planifikojmë gjithçka. Ndoshta ndonjëherë shumë.'},
    {type:'line', speaker:'Dion', de:'Bei uns in Albanien plant man weniger — und dann improviert man viel!', sq:'Tek ne në Shqipëri planifikohet më pak — dhe pastaj improvizojmë shumë!'},
    {type:'line', speaker:'Klea', de:'Das klingt nach Abenteuer! Vielleicht lehre ich dir Planung und du lehrst mir Improvisation.', sq:'Kjo tingëllon aventureshëm! Ndoshta të mësoj planifikim dhe ti mëson mua improvizim.'},
    {type:'line', speaker:'Dion', de:'Deal! Das perfekte Team. Weißt du — dieses Gespräch, dieses Reisen, diese Freundschaft — das ist Deutsch lernen auf die schönste Art.', sq:'Marrëveshje! Ekipi perfekt. E di — kjo bisedë, kjo udhëtim, kjo miqësi — kjo është mësimi i gjermanishtes në mënyrën më të bukur.'},
    {type:'narr', text:'Dion shënon datën e nisjes: 14 Korrik. Mëson fjalën e re: Vorfreude — gëzimi i pritjes.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Planifiko udhëtim ideal me mik — ku shkoni, çfarë bëni, sa kushton? Trego planin!',
      hint: 'Wir würden gerne... / Zuerst fliegen wir... / Dort können wir... / Das Budget wäre etwa...',
      example: 'Mein idealer Urlaub wäre eine Woche in Portugal — Lissabon und die Algarve. Zuerst fliegen wir nach Lissabon und erkunden drei Tage die Stadt — Museen, Fado-Musik, Pasteis de Nata! Dann mieten wir ein Auto und fahren an die Algarve. Das Budget wäre etwa 800 Euro pro Person, alles inklusive. Der perfekte Mix aus Kultur und Strand!',
      level: 'A2'
    },
    {
      prompt: 'Ke humbur valixhen në aeroport. Raporto problemin tek personeli — gjermanisht!',
      hint: 'Mein Koffer ist nicht angekommen / Ich habe gewartet aber... / Er ist... Farbe / Können Sie...?',
      example: 'Entschuldigung! Mein Koffer ist nicht angekommen. Ich habe 40 Minuten am Gepäckband gewartet, aber er ist nicht da. Er ist ein großer schwarzer Koffer mit einem roten Band. Mein Name ist Dion Kelmendi, Flug LH456 aus Berlin. Können Sie nachschauen? Und was passiert jetzt?',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Problem me rezervimin e hotelit',
      situation: 'Ke mbrrirë në hotel. Rezervimi nuk gjendet në sistem. Zgjidhe situatën me qetësi.',
      lines: [
        {speaker:'Recepsionisti', de:'Ich finde Ihre Reservierung leider nicht im System. Auf welchen Namen?', sq:'Fatkeqësisht nuk gjej rezervimin tuaj në sistem. Në çfarë emri?'},
        {speaker:'Ti', de:'Kelmendi — K-E-L-M-E-N-D-I. Ich habe eine Bestätigung per E-Mail bekommen. Einen Moment — ich zeige Ihnen die E-Mail.', sq:'Kelmendi — K-E-L-M-E-N-D-I. Kam marrë konfirmim me email. Një moment — po ju tregoj emailin.'},
        {speaker:'Recepsionisti', de:'Ah, ich sehe — die Buchung ist für nächste Woche, nicht für heute.', sq:'Ah, shoh — rezervimi është për javën e ardhshme, jo sot.'},
        {speaker:'Ti', de:'Oh nein! Das ist mein Fehler. Tut mir leid. Haben Sie ein Zimmer frei für heute Nacht?', sq:'Oh jo! Kjo është gabimi im. Falje. Keni dhomë të lirë për sonte?'},
        {speaker:'Recepsionisti', de:'Ja, wir haben noch ein Einzelzimmer. Es kostet 89 Euro — etwas mehr als Ihre Reservierung.', sq:'Po, kemi akoma dhomë tek. Kushton 89 euro — pak më shumë se rezervimi juaj.'},
        {speaker:'Ti', de:'Das ist okay. Ich nehme es. Und die nächste Woche — kann ich die Reservierung ändern auf morgen?', sq:'Kjo është mirë. E marr. Dhe javën tjetër — mund ta ndryshoj rezervimin nga nesër?'},
      ]
    }
  ]
},

'a2m12': {
  storyExtension: [
    {type:'narr', text:'Dion po shkruan letrën e fundit nga niveli A2 — jo për mësuesen, por për veten e tij të ardhshme.'},
    {type:'line', speaker:'Jonas', de:'Was schreibst du da so konzentriert?', sq:'Çfarë po shkruan aty kaq i përqendruar?'},
    {type:'line', speaker:'Dion', de:'Einen Brief an mich selbst — in einem Jahr zu lesen. Ich schreibe was ich erreicht habe und was ich noch will.', sq:'Letër vetes sime — për ta lexuar pas një viti. Po shkruaj çfarë kam arritur dhe çfarë dua akoma.'},
    {type:'line', speaker:'Jonas', de:'Das ist eine tolle Idee! Was schreibst du denn?', sq:'Kjo është ide e shkëlqyer! Çfarë shkruan atëherë?'},
    {type:'line', speaker:'Dion', de:'Dass ich stolz auf mich bin. Vor einem Jahr kannte ich kaum ein deutsches Wort. Jetzt kann ich arbeiten, Freundschaften schließen, Probleme lösen — auf Deutsch!', sq:'Se jam krenar me veten. Para një viti pothuajse nuk dija fjalë gjermane. Tani mund të punoj, të bëj miq, të zgjidh probleme — gjermanisht!'},
    {type:'line', speaker:'Jonas', de:'Und was willst du noch?', sq:'Dhe çfarë dëshiron akoma?'},
    {type:'line', speaker:'Dion', de:'B1 und dann B2. Einen deutschen Pass irgendwann. Und vielleicht — meine eigene kleine Softwarefirma, die Deutschland und Albanien verbindet.', sq:'B1 dhe pastaj B2. Pasaportë gjermane ndonjëherë. Dhe ndoshta — firmën time të vogël softuerësh, që lidh Gjermaninë dhe Kosovën.'},
    {type:'line', speaker:'Jonas', de:'Das glaube ich dir. Und ich werde bei jeder Stufe dabei sein. Als Freund.', sq:'Këtë të besoj. Dhe do të jem pranë në çdo hap. Si mik.'},
    {type:'narr', text:'Dion mbyll letrën. E vulos. Shkruan jashtë: "Dion, 2026 — mos harro nga ke ardhur dhe ku po shkon."'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shkruaj planin tënd për B1 — çfarë do të bësh ndryshe, çfarë do të mësosh, kur synon ta kalosh provimin?',
      hint: 'Mein Plan für B1 ist... / Ich werde täglich... / Bis Ende... / Am wichtigsten ist...',
      example: 'Mein Plan für B1 ist konkret: Ich werde täglich 45 Minuten lernen — morgens Vokabeln, abends lesen oder schauen. Ich möchte mehr deutsche Podcasts hören und einmal pro Woche mit einem Muttersprachler sprechen. Bis Ende des Jahres möchte ich den B1-Test ablegen. Am wichtigsten ist aber: keine Angst vor Fehlern!',
      level: 'A2'
    },
    {
      prompt: 'Dikush te pyet: "Wenn du zurück nach Albanien gehst, was nimmst du von Deutschland mit?" — Përgjigju thellë!',
      hint: 'Ich nehme mit... / Die wichtigste Lektion ist... / Deutschland hat mir gezeigt... / Aber ich bringe auch...',
      example: 'Ich nehme viel mit — nicht nur Sprache, sondern Denkweise. Die wichtigste Lektion ist Pünktlichkeit und Verlässlichkeit: wenn ich etwas sage, meine ich es auch. Deutschland hat mir gezeigt, dass Planung und Struktur das Leben einfacher machen. Aber ich bringe auch etwas nach Deutschland: Wärme, Spontaneität und die Überzeugung, dass Familie wichtiger ist als Effizienz.',
      level: 'A2'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Bisedë finale — A2 të B1',
      situation: 'Mësuesi i kursit A2 të kërkon të flasësh para klasës: çfarë ke mësuar dhe çfarë planifikon.',
      lines: [
        {speaker:'Mësuesi', de:'Dion, du warst unser aktivster Student. Was nimmst du aus diesem Kurs mit?', sq:'Dion, ti ishe studenti ynë më aktiv. Çfarë merr nga ky kurs?'},
        {speaker:'Ti', de:'Ich nehme vor allem Selbstvertrauen mit. Am Anfang hatte ich Angst, Fehler zu machen. Jetzt akzeptiere ich sie als Teil des Lernens.', sq:'Marr kryesisht vetëbesim. Në fillim kisha frikë të bëj gabime. Tani i pranoj si pjesë të mësimit.'},
        {speaker:'Mësuesi', de:'Was war das Schwerste für Sie?', sq:'Çfarë ishte më e vështira për ju?'},
        {speaker:'Ti', de:'Die Perfekt-Formen der unregelmäßigen Verben! Und der Unterschied zwischen "als" und "wenn". Das kämpfe ich immer noch.', sq:'Format e Perfektit të foljeve të parregullta! Dhe dallimi midis "als" dhe "wenn". Me këtë po luftoj ende.'},
        {speaker:'Mësuesi', de:'Was sind Ihre Pläne jetzt?', sq:'Cilat janë planet tuaja tani?'},
        {speaker:'Ti', de:'B1 — sofort! Ich habe schon den Kurs reserviert. Bis Ende des Jahres will ich B1 haben. Ich arbeite jeden Tag daran.', sq:'B1 — menjëherë! Tashmë e kam rezervuar kursin. Deri në fund të vitit dua të kem B1. Po punoj çdo ditë për këtë.'},
      ]
    }
  ]
},

// ══════════════════════════
// B1 — Modulet 4, 5, 6, 9, 10, 11, 12, 13
// ══════════════════════════

'b1m4': {
  storyExtension: [
    {type:'narr', text:'Dion viziton muzeun Pergamon dhe është i goditur. Shoqëruesi zbulon se ai ka background historik.'},
    {type:'line', speaker:'Shoqëruesi', de:'Sie schauen sehr intensiv. Haben Sie Interesse an der antiken Geschichte?', sq:'Po shikoni shumë intensivisht. Keni interes për historinë antike?'},
    {type:'line', speaker:'Dion', de:'Ja! Kosova war auch Teil der antiken Welt — Illyrien, Ulpiana. Wir haben alte Städte wie Butrint, die UNESCO-Weltkulturerbe sind.', sq:'Po! Kosova ishte gjithashtu pjesë e botës antike — Iliria, Ulpiana. Kemi qytete të vjetra si Ulpiana, që janë trashëgimi botërore UNESCO.'},
    {type:'line', speaker:'Shoqëruesi', de:'Das wusste ich nicht! Das ist beeindruckend. Und wie ist die albanische Archäologie?', sq:'Këtë nuk e dija! Kjo është mbresëlënëse. Dhe si është arkeologjia shqiptare?'},
    {type:'line', speaker:'Dion', de:'Viele Schätze sind noch nicht ausgegraben. Es fehlt an Geld und internationaler Aufmerksamkeit. Aber das Potenzial ist riesig.', sq:'Shumë thesare ende nuk janë gërmuar. Mungojnë paratë dhe vëmendja ndërkombëtare. Por potenciali është i madh.'},
    {type:'line', speaker:'Shoqëruesi', de:'Das klingt nach einer Einladung — ich sollte Kosova besuchen!', sq:'Kjo tingëllon si ftesë — duhet ta vizitoj Kosovën!'},
    {type:'line', speaker:'Dion', de:'Unbedingt! Butrint, Gjirokastër, Berat — alles UNESCO, alles wunderschön, und noch nicht übertouristisiert!', sq:'Patjetër! Butrint, Gjirokastra, Berati nga Shqipëria — janë në UNESCO, gjithçka e mrekullueshme, dhe ende nuk është e mbushur me turistë!'},
    {type:'narr', text:'Dion shënohet nga shoqëruesi si "ambasador i parë zyrtar i Kosovës dhe Shqipërisë në Berlin."'},
  ],
  thinkInGerman: [
    {
      prompt: 'Debat: "Kunst und Kultur sollten mehr staatlich finanziert werden." — Bist du dafür oder dagegen? Begründe!',
      hint: 'Ich bin dafür/dagegen, weil... / Ohne staatliche Förderung würde... / Allerdings sollte man bedenken...',
      example: 'Ich bin klar dafür! Ohne staatliche Förderung würden viele Kunstprojekte nicht existieren, weil sie kommerziell nicht rentabel sind. Theater, Museen, Konzerthallen — das sind Güter, die alle brauchen, nicht nur die Reichen. Allerdings sollte man bedenken, dass Kunst auch unabhängig bleiben muss — staatliche Kontrolle kann gefährlich sein.',
      level: 'B1'
    },
    {
      prompt: 'Shpjego dikujt çfarë është "Weltschmerz" dhe kur e ndjen ti këtë ndjesi.',
      hint: 'Weltschmerz bedeutet... / Man fühlt es wenn... / Ich persönlich... / Es hilft...',
      example: 'Weltschmerz ist das Gefühl, dass die Welt nicht so ist, wie sie sein sollte — eine tiefe Traurigkeit angesichts des Leidens in der Welt. Man fühlt es, wenn man Nachrichten schaut und Krieg, Armut und Ungerechtigkeit sieht. Ich persönlich fühle es manchmal, wenn ich sehe, wie viel Potenzial verschwendet wird. Es hilft mir, mich zu engagieren — kleine Dinge zu tun, die die Welt ein bisschen besser machen.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Prezanto vendin tënd si turist-guide',
      situation: 'Gjermani dëshiron të vizitojë Shqipërinë. Ti jep rekomandime si ekspert.',
      lines: [
        {speaker:'Gjermani', de:'Du hast mir erzählt, Albanien sei wunderschön. Was sollte ich unbedingt sehen?', sq:'Më ke treguar se Shqipëria është e mrekullueshme. Çfarë duhet të shoh patjetër?'},
        {speaker:'Ti', de:'Also — fang mit Tirana an, der Hauptstadt. Sehr lebhaft, großartiges Essen, tolle Kaffeehauskultur. Dann Berat — die Stadt der tausend Fenster, UNESCO-Weltkulturerbe.', sq:'Pra — fillo me Tiranën, kryeqytetin. Shumë e gjallë, ushqim i mrekullueshëm, kulturë e shkëlqyer kafenesh. Pastaj Berati — qyteti i njëmijë dritareve, trashëgimi botërore UNESCO.'},
        {speaker:'Gjermani', de:'Und das Meer? Ich liebe das Meer.', sq:'Dhe deti? E dua detin.'},
        {speaker:'Ti', de:'Die albanische Riviera ist unberührt und wunderschön — nicht so überlaufen wie Kroatien oder Griechenland. Ksamil ist besonders schön. Das Wasser ist kristallklar!', sq:'Riviera shqiptare është e paprekur dhe e mrekullueshme — jo aq e mbushur sa Kroacia ose Greqia. Ksamili është veçanërisht i bukur. Uji është kristali!'},
        {speaker:'Gjermani', de:'Wann ist die beste Reisezeit?', sq:'Kur është koha më e mirë e udhëtimit?'},
        {speaker:'Ti', de:'Mai bis September. Im Juli und August ist es sehr heiß an der Küste — 35 bis 38 Grad. Aber im Landesinnern ist es immer angenehm.', sq:'Maji deri shtatori. Në korrik dhe gusht është shumë nxehtë në bregdet — 35 deri 38 gradë. Por brenda vendit është gjithmonë i këndshëm.'},
      ]
    }
  ]
},

'b1m5': {
  storyExtension: [
    {type:'narr', text:'Dion merr mesazh befasues nga banka: debiti tjetër mujor është dy herë më i lartë se zakonisht. Duhet ta investigojë.'},
    {type:'line', speaker:'Banka (automatik)', de:'Hallo Herr Kelmendi, wir haben ungewöhnliche Aktivitäten auf Ihrem Konto festgestellt.', sq:'Përshëndetje Z. Kelmendi, kemi konstatuar aktivitete të pazakonta në llogarinë tuaj.'},
    {type:'line', speaker:'Dion', de:'Was? Das kann nicht sein. Jonas — kannst du mir helfen? Ich verstehe den Brief nicht ganz.', sq:'Çfarë? Kjo nuk mund të jetë. Jonas — mund të më ndihmosh? Nuk e kuptoj plotësisht letrën.'},
    {type:'line', speaker:'Jonas', de:'Lass mich sehen. Ah — das ist standard. Sie haben verdächtige Aktivitäten gesehen und deine Karte temporär gesperrt.', sq:'Lërmë të shoh. Ah — kjo është standarde. Kanë parë aktivitete të dyshimta dhe kartën e kanë bllokuar përkohësisht.'},
    {type:'line', speaker:'Dion', de:'Aber warum? Ich habe nichts Verdächtiges gemacht!', sq:'Por pse? Nuk kam bërë asgjë të dyshimtë!'},
    {type:'line', speaker:'Jonas', de:'Wahrscheinlich weil du in drei verschiedenen Ländern in einer Woche bezahlt hast — Deutschland, Kroatien, Albanien. Das sieht für die Bank verdächtig aus.', sq:'Ndoshta sepse ke paguar në tre vende të ndryshme brenda një jave — Gjermani, Kroaci, Shqipëri. Kjo duket e dyshimtë për bankën.'},
    {type:'line', speaker:'Dion', de:'Das ist absurd! Was muss ich jetzt tun?', sq:'Kjo është absurde! Çfarë duhet të bëj tani?'},
    {type:'line', speaker:'Jonas', de:'Ruf die Bank an, erkläre die Situation, und bitte um die Entsperrung. Auf Deutsch natürlich!', sq:'Telefono bankën, shpjego situatën, dhe kërko zhbllokimin. Gjermanisht natyrisht!'},
    {type:'narr', text:'Dion telefonon. Kalojnë 20 minuta, dhe karta zhbllokohet. Mëson: sistemi ka rregulla logjike — nëse i kupton, mund t\'i kalosh.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shpjego konceptin "Steuererklärung" (deklarata tatimore) — pse duhet bërë dhe si?',
      hint: 'Die Steuererklärung ist... / Man gibt sie ab, weil... / Meistens bekommt man... / Man braucht dazu...',
      example: 'Die Steuererklärung ist ein Formular, das man jährlich beim Finanzamt einreicht, um die eigenen Einnahmen und Ausgaben zu erklären. Man gibt sie ab, weil der Staat prüft, ob man zu viel oder zu wenig Steuern gezahlt hat. Meistens bekommt man Geld zurück — das nennt man "Steuererstattung". Man braucht dazu alle Gehaltsabrechnungen des Jahres und Nachweise über Ausgaben.',
      level: 'B1'
    },
    {
      prompt: 'Argument: "Man sollte mehr Geld ausgeben statt sparen — man lebt nur einmal." Bist du einverstanden?',
      hint: 'Einerseits stimme ich zu... / Aber auf der anderen Seite... / Ich glaube, das Wichtigste ist...',
      example: 'Einerseits stimme ich zu — man sollte das Leben genießen und nicht alles für die Zukunft aufsparen. Erlebnisse sind wichtiger als Dinge. Aber auf der anderen Seite ist ein finanzielles Polster wichtig für Notfälle und für die Freiheit, Entscheidungen zu treffen. Ich glaube, das Wichtigste ist Balance: genießen und gleichzeitig verantwortungsvoll sein.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Telefon me bankën — karta e bllokuar',
      situation: 'Karta jote është bllokuar gabimisht. Telefono bankën dhe zgjidhe problemin.',
      lines: [
        {speaker:'Banka', de:'Kundenservice Deutsche Bank, guten Tag!', sq:'Shërbimi i klientit Deutsche Bank, mirëdita!'},
        {speaker:'Ti', de:'Guten Tag! Ich heiße Dion Kelmendi, Kundennummer 4471289. Meine Karte wurde gesperrt — ich weiß nicht warum.', sq:'Mirëdita! Quhem Dion Kelmendi, numër klienti 4471289. Karta ime u bllokua — nuk di pse.'},
        {speaker:'Banka', de:'Einen Moment, ich schaue nach. Ah ja — ungewöhnliche Auslandstransaktionen. Können Sie das erklären?', sq:'Një moment, po shikoj. Ah po — transaksione të pazakonta jashtë vendit. Mund ta shpjegoni?'},
        {speaker:'Ti', de:'Ja, natürlich. Ich war auf Urlaub — erste Woche Kroatien, dann Besuch bei der Familie in Albanien, dann zurück nach Deutschland. Alles normale Zahlungen.', sq:'Po, natyrisht. Isha në pushime — java e parë Kroaci, pastaj vizitë tek familja në Shqipëri, pastaj kthim në Gjermani. Të gjitha pagesa normale.'},
        {speaker:'Banka', de:'Verstanden. Ich entsperre die Karte sofort. In Zukunft können Sie uns vor Reisen informieren — dann passiert das nicht.', sq:'Kuptuar. Zhbllokojë kartën menjëherë. Në të ardhmen mund të na informoni para udhëtimeve — pastaj kjo nuk ndodh.'},
        {speaker:'Ti', de:'Das wusste ich nicht! Danke für den Hinweis. Und danke für die schnelle Hilfe.', sq:'Këtë nuk e dija! Faleminderit për sugjestimin. Dhe faleminderit për ndihmën e shpejtë.'},
      ]
    }
  ]
},

'b1m6': {
  storyExtension: [
    {type:'narr', text:'Dion merr diagnozë: ka stres të lartë. Mjekja ia rekomandon pushimin dhe ndryshimin e zakoneve. Kjo e befason.'},
    {type:'line', speaker:'Mjekja', de:'Herr Kelmendi, Ihre Werte sind okay, aber ich sehe klare Zeichen von chronischem Stress. Wie schlafen Sie?', sq:'Z. Kelmendi, vlerat tuaja janë mirë, por shoh shenja të qarta të stresit kronik. Si flini?'},
    {type:'line', speaker:'Dion', de:'Nicht gut. Ich schlafe spät ein und wache früh auf. Mein Kopf läuft immer.', sq:'Jo mirë. Fle vonë dhe zgjohem herët. Koka ime punon gjithmonë.'},
    {type:'line', speaker:'Mjekja', de:'Das ist ein klassisches Bild von "Burnout-Vorstufe". Wie viel Urlaub nehmen Sie pro Jahr?', sq:'Kjo është figurë klasike e "para-burnout". Sa pushime merrni në vit?'},
    {type:'line', speaker:'Dion', de:'Ich habe 25 Tage — aber ich habe nur 10 genommen. Die Arbeit... ich konnte nicht weg.', sq:'Kam 25 ditë — por kam marrë vetëm 10. Puna... nuk mundsha të largoja.'},
    {type:'line', speaker:'Mjekja', de:'Das ist ein Problem. Urlaub ist keine Schwäche, sondern Medizin. Ihr Körper braucht Erholung, um zu funktionieren.', sq:'Kjo është problem. Pushimet nuk janë dobësi, por ilaç. Trupi juaj ka nevojë për çlodhje për të funksionuar.'},
    {type:'line', speaker:'Dion', de:'In Albanien sagt man: "Wer rastet, der rostet." Aber hier scheint das anders zu sein.', sq:'Në Kosovë thuhet: "Kush pushon, ndryshket." Por këtu duket se është ndryshe.'},
    {type:'line', speaker:'Mjekja', de:'In Deutschland sagen wir: "Wer nicht pausiert, der bricht." Bitte nehmen Sie die restlichen Urlaubstage. Das ist keine Empfehlung — das ist eine Verschreibung.', sq:'Në Gjermani themi: "Kush nuk bën pauzë, thyet." Ju lutem merrni ditët e pushimit të mbetura. Kjo nuk është rekomandim — është recetë mjekësore.'},
    {type:'narr', text:'Dion merr dy javë pushim. Shkruan në ditar: "Pushimi nuk është humbje kohe — është investim."'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shpjego: Si ndikon stresi në trup dhe mendjen? Çfarë mund të bëjmë?',
      hint: 'Stress beeinflusst... / Körperlich kann es... / Psychisch führt es zu... / Um Stress zu reduzieren...',
      example: 'Stress beeinflusst sowohl Körper als auch Geist. Körperlich kann es zu Schlafproblemen, Kopfschmerzen und Herzproblemen führen. Psychisch führt es zu Konzentrationsproblemen, Reizbarkeit und im schlimmsten Fall zu Depression. Um Stress zu reduzieren, empfehle ich regelmäßige Bewegung, ausreichend Schlaf und bewusste Pausen. Meditation und digitale Detox-Zeiten helfen ebenfalls.',
      level: 'B1'
    },
    {
      prompt: 'Argument: "Work-Life-Balance ist ein Luxus — wer erfolgreich sein will, muss hart arbeiten." Dein Standpunkt?',
      hint: 'Ich halte diese Aussage für... / Langfristig gesehen... / Forschung zeigt... / Meiner Erfahrung nach...',
      example: 'Ich halte diese Aussage für einen gefährlichen Mythos. Langfristig gesehen arbeiten Menschen mit guter Work-Life-Balance effizienter und kreativer. Forschung zeigt, dass chronische Überlastung die Produktivität senkt, nicht erhöht. Meiner Erfahrung nach sind die besten Ideen nicht im Büro entstanden, sondern beim Spazierengehen oder nach einer guten Nacht Schlaf.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Bisedë me shefin — kërko pushim',
      situation: 'Ke nevojë urgjente për pushim. Shpjego situatën me shefin dhe kërko mirëkuptim.',
      lines: [
        {speaker:'Ti', de:'Darf ich kurz mit Ihnen sprechen? Es geht um meine Gesundheit.', sq:'Mund të flas shkurt me ju? Bëhet fjalë për shëndetin tim.'},
        {speaker:'Shefi', de:'Natürlich! Was ist los?', sq:'Natyrisht! Çfarë ka?'},
        {speaker:'Ti', de:'Meine Ärztin hat festgestellt, dass ich unter starkem Stress leide. Sie hat mir empfohlen, die restlichen Urlaubstage zu nehmen. Ich weiß, das kommt kurzfristig, aber es ist medizinisch notwendig.', sq:'Mjekja ime ka konstatuar se vuaj nga stres i fortë. Më ka rekomanduar të marr ditët e pushimit të mbetura. E di, kjo vjen afatshkurtër, por është e nevojshme mjekësisht.'},
        {speaker:'Shefi', de:'Das nehme ich ernst. Wann möchten Sie anfangen?', sq:'Këtë e marr seriozisht. Kur dëshironi të filloni?'},
        {speaker:'Ti', de:'Wenn möglich nächste Woche — für zwei Wochen. Ich kann alles vorher übergeben und bin per E-Mail im Notfall erreichbar.', sq:'Nëse është e mundur javën tjetër — për dy javë. Mund të dorëzoj gjithçka paraprakisht dhe jam i arritshëm me email në rast urgjence.'},
        {speaker:'Shefi', de:'Kein Problem. Ihre Gesundheit ist wichtiger. Erholen Sie sich gut!', sq:'Nuk ka problem. Shëndeti juaj është më i rëndësishëm. Çlodhu mirë!'},
      ]
    }
  ]
},

'b1m9': {
  storyExtension: [
    {type:'narr', text:'Dion sjell Klea dhe Jonas në Kosovë për dy javë. Ky është testi i vërtetë — mund të jetojnë si shqiptarë?'},
    {type:'line', speaker:'Klea', de:'Dion — es ist 22 Uhr und deine Mutter kocht noch! Essen wir immer so spät?', sq:'Dion — është ora 22 dhe nëna jote po gatuon ende! Hamë gjithmonë kaq vonë?'},
    {type:'line', speaker:'Dion', de:'In Albanien ist das normal! Die Hauptmahlzeit ist abends, wenn alle zuhause sind. Und Mama kocht seit 14 Jahren nur für mich — heute kocht sie für fünf!', sq:'Në Kosovë kjo është normale! Vakti kryesor është në mbrëmje, kur të gjithë janë në shtëpi. Dhe nëna ka gatuar prej 14 vitesh vetëm për mua — sot gatuan për pesë!'},
    {type:'line', speaker:'Jonas', de:'Die Gastfreundschaft hier ist unglaublich. Wir sind seit zwei Stunden hier und haben schon dreimal Kaffee, Raki und Baklava bekommen!', sq:'Mikëpritja këtu është e pabesueshme. Jemi dy orë këtu dhe kemi marrë tashmë tre herë kafe, raki dhe baklava!'},
    {type:'line', speaker:'Nëna', de:'Esst! Esst! Ihr seid zu dünn! In Kosova macht man so.', sq:'Hani! Hani! Jeni shumë të hollë! Në Kosovë bëhet kështu.'},
    {type:'line', speaker:'Klea', de:'Deine Mutter sagt das auf Deutsch! Sie hat extra für uns gelernt!', sq:'Nëna jote flet gjermanisht! Ka mësuar posaqërisht për ne!'},
    {type:'line', speaker:'Dion', de:'Ich weiß! Sie hat sechs Monate lang "Hallo, Willkommen, Esst" geübt. Das ist albanische Liebe!', sq:'E di! Ka ushtruar gjashtë muaj "Hallo, Willkommen, Esst". Kjo është dashuria shqiptare!'},
    {type:'narr', text:'Klea qan pak. Jonas fotografon çdo moment. Dion kupton: shtëpia nuk është koordinata gjeografike — është ndjesia kur njerëzit e tu takojnë njerëzit e tu.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shpjego ndryshimet kulturore midis Gjermanisë dhe Shqipërisë — pa gjykuar, vetëm duke vëzhguar',
      hint: 'Was ich beobachtet habe ist... / In Deutschland ist es üblich... / In Albanien hingegen... / Keines ist besser...',
      example: 'Was ich beobachtet habe ist sehr interessant. In Deutschland ist es üblich, pünktlich zu sein, Termine im Voraus zu planen und persönliche Grenzen zu respektieren. In Albanien hingegen ist die Zeit flexibler, spontane Einladungen sind normal, und Familie hat absoluten Vorrang. Keines ist besser — beide Systeme funktionieren, aber sie funktionieren anders. Das Schöne ist, wenn man beides kennt und das Beste von beiden nimmt.',
      level: 'B1'
    },
    {
      prompt: 'Argument: "Globalisierung zerstört lokale Kulturen." Bist du einverstanden? Albanien und Deutschland als Beispiele.',
      hint: 'Ich sehe das differenziert / Einerseits stimmt es, dass... / Andererseits... / In Albanien sehe ich...',
      example: 'Ich sehe das differenziert. Einerseits stimmt es, dass Globalisierung manche Traditionen verdrängt — in Albanien sehe ich, wie junge Leute amerikanische Popkultur über albanische Volksmusik stellen. Andererseits gibt es eine Gegenbewegung: Menschen entdecken ihre Wurzeln neu, weil die Globalisierung ihnen zeigt, was einzigartig an ihrer Kultur ist. In Deutschland sehe ich dasselbe — regionale Dialekte und Traditionen werden wieder wertgeschätzt.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Udhëzim turistik — Tirana',
      situation: 'Klea dhe Jonas dëshirojnë të shohin më të mirën e Tiranës. Ti je guide-i.',
      lines: [
        {speaker:'Jonas', de:'Okay Dion, wir haben nur einen Tag für Tirana. Was zeigst du uns?', sq:'Mirë Dion, kemi vetëm një ditë për Tiranën. Çfarë na tregon?'},
        {speaker:'Ti', de:'Wir beginnen am Skanderbeg-Platz — das Herz der Stadt. Dann das Bunkart-Museum — das erklärt Albaniens Geschichte sehr gut.', sq:'Fillojmë te Sheshi Skënderbej — zemra e qytetit. Pastaj Muzeu Bunkart — kjo shpjegon shumë mirë historinë e Shqipërisë.'},
        {speaker:'Klea', de:'Was ist das Bunkart?', sq:'Çfarë është Bunkart?'},
        {speaker:'Ti', de:'Ein altes Atombunker aus der kommunistischen Zeit — jetzt ein Museum. Enver Hoxha hat 700.000 Bunker bauen lassen! In ganz Albanien. Das muss man gesehen haben.', sq:'Bunker atomik i vjetër nga koha komuniste — tani muze. Enver Hoxha ka urdhëruar të ndërtohen 700.000 bunkerë! Në të gjithë Shqipërinë. Këtë duhet ta ketë parë.'},
        {speaker:'Jonas', de:'Unglaublich! Und zum Essen?', sq:'E pabesueshme! Dhe për të ngrënë?'},
        {speaker:'Ti', de:'Das Blloku-Viertel — früher nur für die Kommunisten-Elite, heute das hippste Viertel mit den besten Cafés und Restaurants. Absolute Pflicht!', sq:'Lagjja Bllok — dikur vetëm për elitën komuniste, sot lagjja më trendy me kafetë dhe restorantet më të mira. Absolut e detyrueshme!'},
      ]
    }
  ]
},

'b1m10': {
  storyExtension: [
    {type:'narr', text:'Dion regjistrohet në organizatën që ndihmon refugjatët me gjuhën gjermane. Takimi i parë është emocionues.'},
    {type:'line', speaker:'Koordinatorja', de:'Dion, warum wollen Sie gerade mit Flüchtlingen arbeiten?', sq:'Dion, pse doni të punoni pikërisht me refugjatë?'},
    {type:'line', speaker:'Dion', de:'Weil ich weiß, wie es sich anfühlt — in ein neues Land zu kommen, die Sprache nicht zu kennen, sich verloren zu fühlen.', sq:'Sepse e di si ndjehet — të vish në vend të ri, të mos njohësh gjuhën, të ndihesh i humbur.'},
    {type:'line', speaker:'Koordinatorja', de:'Das ist genau das, was unsere Schüler brauchen — jemanden, der das aus eigener Erfahrung kennt.', sq:'Kjo është pikërisht çfarë nxënësve tanë u duhet — dikush që e njeh nga pervoja e vet.'},
    {type:'line', speaker:'Dion', de:'Ich war privilegiert — ich kam freiwillig und hatte Qualifikationen. Viele hier sind geflohen, haben alles verloren.', sq:'Unë isha i privilegjuar — erdha vullnetarisht dhe kisha kualifikime. Shumë këtu kanë ikur, kanë humbur gjithçka.'},
    {type:'line', speaker:'Koordinatorja', de:'Und trotzdem: das Gefühl der Fremdheit ist ähnlich. Das verbindet Sie mit ihnen.', sq:'Dhe megjithatë: ndjesia e huajësisë është e ngjashme. Kjo ju lidh me ta.'},
    {type:'line', speaker:'Dion', de:'Das stimmt. Wenn ich auf Albanisch spreche, fühlen die Schüler, die Arabisch oder Farsi sprechen, dass jemand sie versteht.', sq:'Kjo është e saktë. Kur flas shqip, nxënësit që flasin arabisht ose farsi, ndiejnë se dikush i kupton.'},
    {type:'narr', text:'Dion jep mësim çdo të hënë. Nxënësit e tij mësojnë gjermanisht. Dion mëson humanitetin.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Argument: "Jeder, der in Deutschland lebt, sollte Deutsch lernen." Bist du einverstanden?',
      hint: 'Grundsätzlich stimme ich zu... / Allerdings muss man bedenken... / Integration ist ein zweiseitiger Prozess...',
      example: 'Grundsätzlich stimme ich zu — Deutsch lernen hilft enorm beim Alltag, bei der Arbeit und bei der Integration. Allerdings muss man bedenken, dass das Lernen Zeit braucht und nicht für jeden gleich schnell geht — ältere Menschen, traumatisierte Flüchtlinge, Menschen mit wenig Bildung. Integration ist ein zweiseitiger Prozess: die Gesellschaft muss auch auf die Menschen zugehen, nicht nur umgekehrt.',
      level: 'B1'
    },
    {
      prompt: 'Was ist der Unterschied zwischen "Toleranz" und "Akzeptanz"? Erkläre anhand von Beispielen.',
      hint: 'Toleranz bedeutet... / Akzeptanz geht weiter: / Ein Beispiel für Toleranz ist... / Akzeptanz hingegen...',
      example: 'Toleranz bedeutet, dass man etwas duldet, auch wenn man es nicht mag — man lässt es zu, aber man billigt es nicht wirklich. Akzeptanz geht weiter: man nimmt etwas als gültig und gleichwertig an. Ein Beispiel für Toleranz ist: "Ich dulde, dass mein Nachbar eine andere Religion hat." Akzeptanz hingegen wäre: "Ich respektiere seine Religion als genauso wertvoll wie meine." Für eine echte Gesellschaft brauchen wir Akzeptanz, nicht nur Toleranz.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Mëso gjermanisht — si vullnetar',
      situation: 'Jep mësim gjermanisht refugjati nga Siria. Ai nuk flet asnjë gjuhë europiane. Si fillon?',
      lines: [
        {speaker:'Ti', de:'Hallo! Ich heiße Dion. Wie heißt du?', sq:'Hej! Unë quhem Dion. Si quhesh?'},
        {speaker:'Nxënësi', de:'Ich... Ahmad. Ich bin Ahmad.', sq:'Unë... Ahmad. Jam Ahmad.'},
        {speaker:'Ti', de:'Ahmad! Sehr gut! Ich bin Dion. Bitte wiederhol: Ich bin Dion.', sq:'Ahmad! Shumë mirë! Unë jam Dion. Ju lutem përsërit: Unë jam Dion.'},
        {speaker:'Nxënësi', de:'Ich bin Dion. Nein — Ich bin Ahmad! Ich bin Ahmad!', sq:'Unë jam Dion. Jo — Unë jam Ahmad! Unë jam Ahmad!'},
        {speaker:'Ti', de:'Perfekt! Das war ein Test und du hast bestanden! Sehr gut Ahmad!', sq:'Perfekte! Ky ishte test dhe e kalove! Shumë mirë Ahmad!'},
        {speaker:'Nxënësi', de:'Deutsch... schwer. Aber ich lerne. Jeden Tag ich lerne.', sq:'Gjermanisht... vështirë. Por unë mësoj. Çdo ditë unë mësoj.'},
        {speaker:'Ti', de:'Das ist genau richtig. Ich lerne auch noch jeden Tag. Wir lernen zusammen!', sq:'Kjo është saktësisht e drejtë. Edhe unë ende mësoj çdo ditë. Ne mësojmë bashkë!'},
      ]
    }
  ]
},

'b1m11': {
  storyExtension: [
    {type:'narr', text:'Dion organizon "Albanian Night" në punë — një mbrëmje ku kolegët gjermanë provojnë kuzhinën shqiptare.'},
    {type:'line', speaker:'Shefi', de:'Das riecht unglaublich! Was kochst du da alles?', sq:'Era është e pabesueshme! Çfarë po gatuan?'},
    {type:'line', speaker:'Dion', de:'Byrek — das ist Blätterteiggebäck gefüllt mit Spinat und Feta-Käse. Und Tavë Kosi — Lamm mit Joghurt im Ofen.', sq:'Byrek — kjo është pite me shtresa të mbushura me spinaq dhe djathë feta. Dhe Tavë Kosi — mish qingji me kos në furrë.'},
    {type:'line', speaker:'Shefi', de:'Und das? Das sieht wie ein Pudding aus.', sq:'Dhe kjo? Duket si puding.'},
    {type:'line', speaker:'Dion', de:'Das ist Trilece — ein albanisches Dessert. Sehr süß, sehr reichhaltig. Meine Mutter hat mir das Rezept geschickt.', sq:'Kjo është trilece — ëmbëlsirë shqiptare. Shumë e ëmbël, shumë e pasur. Nëna ime ma ka dërguar recetën.'},
    {type:'line', speaker:'Jonas', de:'Dion, du solltest ein Restaurant eröffnen! Ich würde jeden Tag kommen.', sq:'Dion, duhet të hapësh restorant! Do të vija çdo ditë.'},
    {type:'line', speaker:'Dion', de:'Vielleicht eines Tages! Jetzt erst mal B1 — dann B2 — dann wer weiß!', sq:'Ndoshta një ditë! Tani fillimisht B1 — pastaj B2 — pastaj kush e di!'},
    {type:'narr', text:'Kolegët hanë të gjithën. Tavë Kosi mbaroi e para. Dion fotografon tavolinën bosh — ia dërgon nënës. Nëna i shkruan: "Ju bëftë mirë!"'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shpjego një recetë tradicionale nga vendi yt — si ta bëjë dikush që nuk di asgjë rreth kuzhinës tënde.',
      hint: 'Zuerst braucht man... / Man beginnt damit, dass... / Dann... / Das Geheimnis ist...',
      example: 'Byrek ist eigentlich ganz einfach! Zuerst braucht man Blätterteig — fertigen aus dem Laden ist okay. Man beginnt damit, den Spinat zu waschen, zu kochen und gut auszudrücken. Dann vermischt man ihn mit Feta-Käse und Ei. Das Geheimnis ist: der Spinat muss wirklich trocken sein, sonst wird der Teig weich. Dann legt man den Teig, füllt ihn und rollt ihn auf — in der Baking form, 30 Minuten bei 180 Grad. Fertig!',
      level: 'B1'
    },
    {
      prompt: 'Debat: "Fast Food zerstört die Esskultur." Bist du einverstanden? Was ist die Lösung?',
      hint: 'Es stimmt, dass... / Aber ich glaube auch... / Die Lösung könnte sein... / Wichtig ist...',
      example: 'Es stimmt, dass Fast Food die traditionelle Esskultur unter Druck setzt — man isst schnell, allein, ohne Qualität zu schätzen. Aber ich glaube auch, dass Menschen immer noch kochen, wenn sie Zeit haben und es wertschätzen. Die Lösung könnte sein, Kochen in der Schule zu unterrichten und traditionelle Rezepte zu bewahren. Wichtig ist: Essen ist Kultur, Geschichte und Liebe — das sollte man nicht verlieren.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Recetë me sfidë — klienti ka alergjia',
      situation: 'Ti po shpjegon recetën e Bylrekut. Klienti ka alergjia ndaj vezëve dhe bulmetit.',
      lines: [
        {speaker:'Klienti', de:'Das klingt lecker! Aber ich bin allergisch gegen Eier und Milchprodukte. Kann ich das essen?', sq:'Kjo tingëllon e shijshme! Por jam alergj ndaj vezëve dhe qumështit. Mund ta ha?'},
        {speaker:'Ti', de:'Gute Frage! Das traditionelle Byrek hat Ei und Feta. Aber wir können es anpassen.', sq:'Pyetje e mirë! Bylreku tradicional ka vezë dhe feta. Por mund ta përshtatim.'},
        {speaker:'Klienti', de:'Wie?', sq:'Si?'},
        {speaker:'Ti', de:'Statt Feta nehmen Sie Tofu — er hat eine ähnliche Textur. Und das Ei kann man durch Leinsamen mit Wasser ersetzen — zwei Esslöffel Leinsamen gemahlen mit sechs Esslöffel Wasser.', sq:'Në vend të fetës merrni tofu — ka teksturë të ngjashme. Dhe vezën mund ta zëvendësoni me fara liri me ujë — dy lugë gjelle fara liri të bluara me gjashtë lugë ujë.'},
        {speaker:'Klienti', de:'Das probiere ich! Schmeckt das genauso?', sq:'Këtë e provoj! Ka të njëjtën shije?'},
        {speaker:'Ti', de:'Fast! Es ist etwas anders, aber sehr gut. Die albanische Küche ist eigentlich sehr flexibel — man nimmt was man hat.', sq:'Gati! Është pak ndryshe, por shumë mirë. Kuzhina shqiptare është në fakt shumë fleksibël — merr çfarë ke.'},
      ]
    }
  ]
},

'b1m12': {
  storyExtension: [
    {type:'narr', text:'Kompania e Dionit ka problem me liferuesin. Kontrata nuk po respektohet. Dion duhet të menaxhojë situatën.'},
    {type:'line', speaker:'Dion', de:'Guten Morgen Herr Fischer. Ich rufe wegen unserer Bestellung vom März an. Wir warten jetzt seit sechs Wochen.', sq:'Mirëmëngjes Z. Fischer. Po telefonoj lidhur me porosinë tonë të marsit. Jemi duke pritur tani gjashtë javë.'},
    {type:'line', speaker:'Fischer', de:'Ja, ich weiß. Es gibt leider Lieferschwierigkeiten. Ich kann Ihnen keine genaue Zeit nennen.', sq:'Po, e di. Fatkeqësisht ka vështirësi furnizimi. Nuk mund t\'ju jap kohë të saktë.'},
    {type:'line', speaker:'Dion', de:'Das ist für uns nicht akzeptabel. In unserem Vertrag steht: maximale Lieferzeit sechs Wochen. Diese Frist ist abgelaufen.', sq:'Kjo për ne nuk është e pranueshme. Në kontratën tonë shkruan: koha maksimale e furnizimit gjashtë javë. Ky afat ka skaduar.'},
    {type:'line', speaker:'Fischer', de:'Ich verstehe Ihre Frustration, aber—', sq:'Kuptoj frustrimin tuaj, por—'},
    {type:'line', speaker:'Dion', de:'Herr Fischer, ich möchte Ihnen zwei Optionen geben: Entweder die Lieferung innerhalb einer Woche, oder wir lösen den Vertrag und fordern eine Entschädigung.', sq:'Z. Fischer, dua t\'ju jap dy opsione: Ose dërgesa brenda një jave, ose zgjidhim kontratën dhe kërkojmë dëmshpërblim.'},
    {type:'line', speaker:'Fischer', de:'Das ist ein harter Standpunkt.', sq:'Ky është qëndrim i ashpër.'},
    {type:'line', speaker:'Dion', de:'Es ist ein klarer Standpunkt. Wir respektieren Verträge und erwarten dasselbe. Wann kann ich eine Antwort erwarten?', sq:'Është qëndrim i qartë. Ne respektojmë kontratat dhe presim të njëjtën gjë. Kur mund të pres përgjigje?'},
    {type:'narr', text:'Fischer dërgon porosinë brenda pesë ditësh. Shefi i Dionit i thotë: "Sehr professionell." Kjo është gjermanishtja e vërtetë.'},
  ],
  thinkInGerman: [
    {
      prompt: 'Shkruaj email ankese profesionale — produkti nuk ka ardhur, kontrata nuk është respektuar.',
      hint: 'Sehr geehrte(r)... / Ich schreibe Ihnen bezüglich... / Leider müssen wir feststellen... / Wir erwarten...',
      example: 'Sehr geehrter Herr Fischer, ich schreibe Ihnen bezüglich unserer Bestellung Nr. 4471 vom 15. März. Gemäß unserem Vertrag sollte die Lieferung innerhalb von sechs Wochen erfolgen. Leider müssen wir feststellen, dass diese Frist nun seit zwei Wochen überschritten ist, ohne dass wir eine Lieferung oder Erklärung erhalten haben. Wir erwarten entweder die Lieferung bis zum 30. Juni oder eine schriftliche Erklärung mit einem verbindlichen Termin. Andernfalls sind wir gezwungen, rechtliche Schritte einzuleiten. Mit freundlichen Grüßen, Dion Kelmendi.',
      level: 'B1'
    },
    {
      prompt: 'Dikush thotë: "In Deutschland ist alles Bürokratie — zu viele Regeln und Formulare." A pajtoheris si i huaj?',
      hint: 'Als Ausländer habe ich erlebt... / Einerseits stimmt es, dass... / Aber ich sehe auch... / Im Vergleich...',
      example: 'Als Ausländer habe ich das sehr direkt erlebt — die erste Anmeldung, die Steuernummer, die Krankenversicherung: alles Formulare und Wartezeiten! Einerseits stimmt es, dass die Bürokratie manchmal überwältigend ist. Aber ich sehe auch, dass sie Gerechtigkeit und Transparenz schafft. Im Vergleich zu Albanien, wo vieles durch persönliche Beziehungen geregelt wird, ist das deutsche System zwar langsam, aber fair.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Ankesë te autoriteti — gjoba e padrejtë',
      situation: 'Ke marrë gjobë parkim që beson është e padrejtë. Bën ankesë zyrtare.',
      lines: [
        {speaker:'Ti', de:'Guten Tag! Ich möchte eine Parkstrafe anfechten. Ich habe am 12. Juni in der Goethestraße geparkt.', sq:'Mirëdita! Dua të kundërshtoj gjobën e parkimit. Kam parkuar më 12 qershor në Goethestraße.'},
        {speaker:'Zyrtari', de:'Und was war das Problem?', sq:'Dhe çfarë ishte problemi?'},
        {speaker:'Ti', de:'Das Schild war verdeckt durch einen LKW. Ich konnte das Halteverbotschild nicht sehen. Ich habe Fotos gemacht.', sq:'Shenja ishte mbuluar nga një kamion. Nuk mund ta shikoja shenjën e ndalimit të qëndrimit. Kam bërë foto.'},
        {speaker:'Zyrtari', de:'Das müssen Sie schriftlich einreichen mit den Fotos als Beweis.', sq:'Duhet ta dorëzoni me shkrim me fotot si dëshmi.'},
        {speaker:'Ti', de:'Kann ich das Formular hier ausfüllen oder muss ich es online einreichen?', sq:'Mund ta plotësoj formularin këtu apo duhet ta dorëzoj online?'},
        {speaker:'Zyrtari', de:'Beides ist möglich. Hier ist das Formular. Füllen Sie es aus und geben Sie es mit den Fotos ab.', sq:'Të dyja janë të mundura. Ja formulari. Plotësojeni dhe dorëzojeni bashkë me fotot.'},
      ]
    }
  ]
},

'b1m13': {
  storyExtension: [
    {type:'narr', text:'TechBerlin i ofron Dionit të drejtojë projektin e ri të IA — por kërkon vendim brenda 48 orësh. Kjo do të thotë: më shumë përgjegjësi, udhëtime, presion.'},
    {type:'line', speaker:'Shefi', de:'Dion, ich mache Ihnen ein ernsthaftes Angebot: Sie leiten unser neues KI-Projekt. Budget: 2 Millionen Euro. Team: 8 Personen.', sq:'Dion, po ju bëj ofertë serioze: Ju drejtoni projektin tonë të ri IA. Buxheti: 2 milion euro. Ekipi: 8 persona.'},
    {type:'line', speaker:'Dion', de:'Das ist... unerwartet. Darf ich fragen, warum ich? Es gibt erfahrenere Entwickler im Team.', sq:'Kjo është... e papritur. Mund të pyes, pse unë? Ka zhvillues më me përvojë në ekip.'},
    {type:'line', speaker:'Shefi', de:'Weil Sie nicht nur technisch gut sind — Sie denken kulturell flexibel, Sie kommunizieren klar und Sie haben Hunger. Das ist seltener als man denkt.', sq:'Sepse ju nuk jeni vetëm teknikisht i mirë — mendoni kulturalisht fleksibël, komunikoni qartë dhe jeni të etur. Kjo është më e rrallë nga sa mendohet.'},
    {type:'line', speaker:'Dion', de:'Ich bin geehrt. Aber ich muss ehrlich sein — mein Deutsch ist noch nicht perfekt und das Thema KI-Ethik ist neu für mich.', sq:'Jam i nderuar. Por duhet të jem i sinqertë — gjermanishtja ime ende nuk është perfekte dhe tema e etikës së IA është e re për mua.'},
    {type:'line', speaker:'Shefi', de:'Das Deutsch wird perfekt in sechs Monaten, wenn Sie täglich auf diesem Level arbeiten. Und KI-Ethik — dafür schicken wir Sie zu einer Konferenz.', sq:'Gjermanishtja do të jetë perfekte brenda gjashtë muajsh, nëse punoni çdo ditë në këtë nivel. Dhe etika e IA — për këtë ju dërgojmë në konferencë.'},
    {type:'line', speaker:'Dion', de:'Dann sage ich Ja. Mit einer Bedingung: Wenn ich Fehler mache, sagen Sie mir das direkt. Ich brauche ehrliches Feedback, um zu wachsen.', sq:'Atëherë them Po. Me një kusht: Nëse bëj gabime, ma tregoni direkt. Kam nevojë për feedback të ndershëm për të rritur.'},
    {type:'narr', text:'Dion firmos kontratën. Në mbrëmje ia dërgon nënës foton: "Mama, Unë drejtoj projektin e parë. Gjermanisht." Nëna i përgjigjet: "Ti gjithmonë ke mundur. Unë e dija."'},
  ],
  thinkInGerman: [
    {
      prompt: 'Çfarë është "Ethik in der Künstlichen Intelligenz"? Shpjego problemet kryesore.',
      hint: 'KI-Ethik beschäftigt sich mit... / Eines der größten Probleme ist... / Außerdem muss man... / Die Frage ist...',
      example: 'KI-Ethik beschäftigt sich mit den moralischen Fragen rund um künstliche Intelligenz. Eines der größten Probleme ist Bias — wenn KI-Systeme diskriminieren, weil sie mit unausgewogenen Daten trainiert wurden. Außerdem muss man fragen: Wer haftet, wenn ein KI-System einen Fehler macht? Die Frage ist auch, wie viel Privatsphäre wir opfern, damit KI funktioniert. Es gibt keine einfachen Antworten, aber wir brauchen Regeln.',
      level: 'B1'
    },
    {
      prompt: 'Argument: "Künstliche Intelligenz wird die meisten Jobs vernichten." Bist du einverstanden?',
      hint: 'Das ist eine berechtigte Sorge... / Historisch gesehen hat Technologie... / Was verschwinden wird... / Was bleibt...',
      example: 'Das ist eine berechtigte Sorge, die ich ernst nehme. Historisch gesehen hat Technologie zwar Jobs vernichtet, aber auch neue geschaffen — die Industrialisierung zum Beispiel. Was verschwinden wird, sind Routineaufgaben: Dateneingabe, einfache Analysen, standardisierte Texte. Was bleibt, sind Kreativität, Empathie, komplexe Entscheidungen und menschliche Verbindung. Die Herausforderung ist die Umschulung: wir müssen Menschen für die Jobs der Zukunft vorbereiten.',
      level: 'B1'
    }
  ],
  scenarios: [
    {
      title: 'Scenario: Prezantim projekti para bordit',
      situation: 'Dion prezanton projektin e IA para bordit drejtues. Duhet të jetë i qartë, i bindës dhe profesional.',
      lines: [
        {speaker:'Ti', de:'Sehr geehrte Damen und Herren, ich möchte Ihnen heute das KI-Optimierungsprojekt vorstellen, das wir in den nächsten 18 Monaten umsetzen werden.', sq:'Shumë të nderuar, dua t\'ju prezantoj sot projektin e optimizimit me IA, që do ta realizojmë brenda 18 muajve.'},
        {speaker:'Bordi', de:'Was ist das Ziel des Projekts in einem Satz?', sq:'Cili është qëllimi i projektit në një fjali?'},
        {speaker:'Ti', de:'Unser Ziel ist es, durch KI die Lieferzeiten um 30% zu reduzieren und die Fehlerquote um 50%. Das bedeutet: mehr Umsatz, weniger Kosten.', sq:'Qëllimi ynë është të reduktojmë nëpërmjet IA kohën e furnizimit me 30% dhe shkallën e gabimeve me 50%. Kjo do të thotë: më shumë të ardhura, më pak kosto.'},
        {speaker:'Bordi', de:'Was sind die Risiken?', sq:'Cilat janë rreziqet?'},
        {speaker:'Ti', de:'Drei Hauptrisiken: Datenschutz, Akzeptanz beim Personal und technische Integration. Für alle drei haben wir konkrete Maßnahmen vorbereitet, die ich gerne erläutern kann.', sq:'Tre rreziqe kryesore: mbrojtja e të dhënave, pranimi nga personeli dhe integrimi teknik. Për të tria kemi përgatitur masa konkrete, të cilat mund t\'i shpjegoj me dëshirë.'},
        {speaker:'Bordi', de:'Überzeugende Antwort. Wir stimmen dem Projekt zu. Viel Erfolg, Herr Kelmendi!', sq:'Përgjigje bindëse. Ne pranojmë projektin. Shumë suksese, Z. Kelmendi!'},
      ]
    }
  ]
}

}; // END REMAINING_UPGRADES


// Merge remaining upgrades into MODULE_UPGRADES
Object.assign(MODULE_UPGRADES, REMAINING_UPGRADES);




// ════════════════════════════════════════════════
// EXTENDED VOCABULARY — ~2000 additional words
// Organized by level, integrated into ALL_VOCAB
// ════════════════════════════════════════════════
const EXTENDED_VOCAB = {

A1_ext: [
// Foljet e para — actions
{de:"aufwachen",sq:"të zgjohesh",type:"Folje",ex:"Ich wache um 7 Uhr auf. — Zgjohem në orën 7."},
{de:"einschlafen",sq:"të flesh / zë gjumi",type:"Folje",ex:"Ich schlafe schnell ein. — Fle shpejt."},
{de:"anziehen",sq:"të vishesh",type:"Folje",ex:"Ich ziehe mich an. — Vishem."},
{de:"ausziehen",sq:"të zhvishesh",type:"Folje",ex:"Ich ziehe die Jacke aus. — Heq xhaketën."},
{de:"waschen",sq:"të lash",type:"Folje",ex:"Ich wasche die Wäsche. — Laj rrobat."},
{de:"kochen",sq:"të gatuash",type:"Folje",ex:"Ich koche jeden Tag. — Gatuaj çdo ditë."},
{de:"aufräumen",sq:"të rregullosh",type:"Folje",ex:"Ich räume das Zimmer auf. — Rregulloj dhomën."},
{de:"putzen",sq:"të pastrosh",type:"Folje",ex:"Ich putze das Bad. — Pastroj banjon."},
{de:"einkaufen",sq:"të bësh blerje",type:"Folje",ex:"Ich gehe einkaufen. — Shkoj të bëj blerje."},
{de:"bezahlen",sq:"të paguash",type:"Folje",ex:"Ich bezahle mit Karte. — Paguaj me kartë."},
{de:"bestellen",sq:"të porosisësh",type:"Folje",ex:"Ich bestelle einen Kaffee. — Porosis kafe."},
{de:"reservieren",sq:"të rezervosh",type:"Folje",ex:"Ich reserviere einen Tisch. — Rezervoj tavolinë."},
{de:"fragen",sq:"të pyesësh",type:"Folje",ex:"Ich frage den Lehrer. — Pyes mësuesen."},
{de:"antworten",sq:"të përgjigjesh",type:"Folje",ex:"Ich antworte auf Deutsch. — Përgjigjem gjermanisht."},
{de:"erklären",sq:"të shpjegosh",type:"Folje",ex:"Der Lehrer erklärt die Regel. — Mësuesi shpjegon rregullin."},
{de:"wiederholen",sq:"të përsëritësh",type:"Folje",ex:"Kannst du das wiederholen? — Mund ta përsëritësh?"},
{de:"üben",sq:"të ushtrosh",type:"Folje",ex:"Ich übe jeden Tag Deutsch. — Ushtroj gjermanisht çdo ditë."},
{de:"verbessern",sq:"të përmirësosh",type:"Folje",ex:"Ich möchte mein Deutsch verbessern. — Dua të përmirësoj gjermanishten."},
{de:"kennenlernen",sq:"të njohësh dikë",type:"Folje",ex:"Ich möchte dich kennenlernen. — Dua të të njoh."},
{de:"treffen",sq:"të takosh",type:"Folje",ex:"Ich treffe meine Freunde am Sonntag. — Takoj miqtë të dielën."},
{de:"einladen",sq:"të ftosh",type:"Folje",ex:"Ich lade dich zum Essen ein. — Të ftoj për darkë."},
{de:"feiern",sq:"të festosh",type:"Folje",ex:"Wir feiern heute meinen Geburtstag. — Festojmë sot ditëlindjen time."},
{de:"schenken",sq:"të dhurosh",type:"Folje",ex:"Ich schenke dir ein Buch. — Të dhuroj libër."},
{de:"besuchen",sq:"të vizitosh",type:"Folje",ex:"Ich besuche meine Familie. — Vizitoj familjen time."},
{de:"reisen",sq:"të udhëtosh",type:"Folje",ex:"Ich reise gern. — Udhëtoj me dëshirë."},
{de:"schwimmen",sq:"të notosh",type:"Folje",ex:"Im Sommer schwimme ich täglich. — Në verë not çdo ditë."},
{de:"tanzen",sq:"të kërcesh",type:"Folje",ex:"Ich tanze gern. — Kërcej me dëshirë."},
{de:"singen",sq:"të këngësh",type:"Folje",ex:"Sie singt sehr schön. — Ajo këndon shumë bukur."},
{de:"malen",sq:"të pikturosh",type:"Folje",ex:"Das Kind malt ein Bild. — Fëmija pikturon."},
{de:"zeichnen",sq:"të vizatosh",type:"Folje",ex:"Ich zeichne ein Haus. — Vizatoj shtëpi."},
// Numrat dhe shifrat
{de:"elf",sq:"njëmbëdhjetë (11)",type:"Numër",ex:"Elf Uhr morgens. — Ora njëmbëdhjetë e mëngjesit."},
{de:"zwölf",sq:"dymbëdhjetë (12)",type:"Numër",ex:"Zwölf Monate hat ein Jahr. — Viti ka dymbëdhjetë muaj."},
{de:"dreizehn",sq:"trembëdhjetë (13)",type:"Numër",ex:"Er ist dreizehn Jahre alt. — Ai është trembëdhjetë vjeç."},
{de:"vierzig",sq:"dyzet (40)",type:"Numër",ex:"Sie ist vierzig Jahre alt. — Ajo është dyzet vjeç."},
{de:"fünfzig",sq:"pesëdhjetë (50)",type:"Numër",ex:"Fünfzig Kilometer weit. — Pesëdhjetë kilometra larg."},
{de:"sechzig",sq:"gjashtëdhjetë (60)",type:"Numër",ex:"Sechzig Minuten — eine Stunde. — Gjashtëdhjetë minuta — një orë."},
{de:"siebzig",sq:"shtatëdhjetë (70)",type:"Numër",ex:"Er ist siebzig Jahre alt. — Ai është shtatëdhjetë vjeç."},
{de:"achtzig",sq:"tetëdhjetë (80)",type:"Numër",ex:"Achtzig Prozent der Menschen. — Tetëdhjetë përqind e njerëzve."},
{de:"neunzig",sq:"nëntëdhjetë (90)",type:"Numër",ex:"Neunzig Kilometer pro Stunde. — Nëntëdhjetë km në orë."},
{de:"tausend",sq:"njëmijë (1000)",type:"Numër",ex:"Das kostet tausend Euro. — Kjo kushton njëmijë euro."},
{de:"million",sq:"milion",type:"Numër",ex:"Eine Million Menschen. — Një milion njerëz."},
// Shkolla dhe arsimi bazë
{de:"der Bleistift",sq:"lapsusi",type:"Shkollë",ex:"Hast du einen Bleistift? — Ke laps?"},
{de:"der Kugelschreiber",sq:"stilolapsi",type:"Shkollë",ex:"Ich brauche einen Kugelschreiber. — Kam nevojë për stilolaps."},
{de:"das Papier",sq:"letra",type:"Shkollë",ex:"Ich brauche Papier. — Kam nevojë për letër."},
{de:"der Computer",sq:"kompjuteri",type:"Shkollë",ex:"Der Computer ist neu. — Kompjuteri është i ri."},
{de:"die Tafel",sq:"dërrasa",type:"Shkollë",ex:"Der Lehrer schreibt an die Tafel. — Mësuesi shkruan në dërrasë."},
{de:"die Aufgabe",sq:"detyra",type:"Shkollë",ex:"Die Aufgabe ist schwer. — Detyra është e vështirë."},
{de:"die Prüfung",sq:"provimi",type:"Shkollë",ex:"Ich habe morgen eine Prüfung. — Nesër kam provim."},
{de:"bestehen",sq:"të kalosh (provimin)",type:"Shkollë",ex:"Ich habe die Prüfung bestanden! — E kalova provimin!"},
{de:"durchfallen",sq:"të rrëzohesh (provim)",type:"Shkollë",ex:"Er ist durch die Prüfung gefallen. — Ai u rrëzua nga provimi."},
{de:"wiederholen",sq:"të përsëritësh",type:"Shkollë",ex:"Ich wiederhole die Vokabeln. — Përsërit fjalët."},
// Shtëpia dhe ambiente
{de:"der Eingang",sq:"hyrja",type:"Shtëpi",ex:"Der Eingang ist vorne. — Hyrja është para."},
{de:"der Ausgang",sq:"dalja",type:"Shtëpi",ex:"Wo ist der Ausgang? — Ku është dalja?"},
{de:"die Garage",sq:"garazhi",type:"Shtëpi",ex:"Das Auto steht in der Garage. — Makina ndodhet në garazh."},
{de:"der Hof",sq:"oborri",type:"Shtëpi",ex:"Die Kinder spielen im Hof. — Fëmijët luajnë në oborr."},
{de:"der Weg",sq:"rruga / shtegtimi",type:"Vend",ex:"Der Weg ist weit. — Rruga është e gjatë."},
{de:"die Ecke",sq:"këndi",type:"Vend",ex:"An der Ecke links! — Në kënd majtas!"},
{de:"das Zentrum",sq:"qendra",type:"Vend",ex:"Das Zentrum ist weit. — Qendra është larg."},
{de:"der Markt",sq:"tregu",type:"Vend",ex:"Ich gehe zum Markt. — Shkoj në treg."},
{de:"das Geschäft",sq:"dyqani",type:"Vend",ex:"Das Geschäft ist zu. — Dyqani është i mbyllur."},
{de:"die Apotheke",sq:"farmacia",type:"Vend",ex:"Die Apotheke ist in der Nähe. — Farmacia është afër."},
{de:"die Post",sq:"posta",type:"Vend",ex:"Ich gehe zur Post. — Shkoj te posta."},
{de:"die Bank",sq:"banka",type:"Vend",ex:"Die Bank öffnet um 9. — Banka hapet në orën 9."},
{de:"das Krankenhaus",sq:"spitali",type:"Vend",ex:"Er liegt im Krankenhaus. — Ai ndodhet në spital."},
{de:"die Kirche",sq:"kisha",type:"Vend",ex:"Die Kirche ist alt. — Kisha është e vjetër."},
{de:"das Museum",sq:"muzeu",type:"Vend",ex:"Wir besuchen das Museum. — Vizitojmë muzeun."},
{de:"der Park",sq:"parku",type:"Vend",ex:"Ich gehe in den Park. — Shkoj në park."},
{de:"der Strand",sq:"plazhi",type:"Vend",ex:"Am Strand ist es schön. — Në plazh është bukur."},
{de:"das Gebirge",sq:"malet",type:"Natyrë",ex:"Wir fahren ins Gebirge. — Shkojmë në male."},
{de:"der Baum",sq:"pema",type:"Natyrë",ex:"Der Baum ist groß. — Pema është e madhe."},
{de:"die Blume",sq:"lule",type:"Natyrë",ex:"Die Blumen sind schön. — Lulet janë të bukura."},
{de:"das Gras",sq:"bari",type:"Natyrë",ex:"Das Gras ist grün. — Bari është i gjelbër."},
// Ushqimet dhe gatimi bazë
{de:"kochen",sq:"të gatuash",type:"Gatim",ex:"Ich koche Suppe. — Gatuaj supë."},
{de:"braten",sq:"të skuqësh",type:"Gatim",ex:"Ich brate das Fleisch. — Skuq mishin."},
{de:"backen",sq:"të piqësh",type:"Gatim",ex:"Ich backe einen Kuchen. — Piqëm tortë."},
{de:"schneiden",sq:"të presësh",type:"Gatim",ex:"Ich schneide das Gemüse. — Pres perimet."},
{de:"kosten",sq:"të provosh (shijen)",type:"Gatim",ex:"Kostet mal! — Provojeni!"},
{de:"der Topf",sq:"tenxherja",type:"Gatim",ex:"Der Topf ist heiß. — Tenxherja është e nxehtë."},
{de:"die Pfanne",sq:"tigani",type:"Gatim",ex:"Ich brate in der Pfanne. — Skuq në tigan."},
{de:"der Teller",sq:"pjata",type:"Gatim",ex:"Der Teller ist sauber. — Pjata është e pastër."},
{de:"die Tasse",sq:"filxhani",type:"Gatim",ex:"Eine Tasse Kaffee. — Një filxhan kafe."},
{de:"das Glas",sq:"gota",type:"Gatim",ex:"Ein Glas Wasser. — Një gotë ujë."},
{de:"die Gabel",sq:"pirunin",type:"Gatim",ex:"Gabel und Messer. — Piruni dhe thika."},
{de:"das Messer",sq:"thika",type:"Gatim",ex:"Das Messer ist scharf. — Thika është e mprehtë."},
{de:"der Löffel",sq:"luga",type:"Gatim",ex:"Ich esse mit dem Löffel. — Ha me lugë."},
// Kohë dhe data
{de:"vorgestern",sq:"pardje",type:"Kohë",ex:"Vorgestern war Montag. — Pardje ishte e hënë."},
{de:"übermorgen",sq:"pasnesër",type:"Kohë",ex:"Übermorgen kommt er. — Pasnesër ai vjen."},
{de:"jeden Tag",sq:"çdo ditë",type:"Kohë",ex:"Ich lerne jeden Tag. — Mësoj çdo ditë."},
{de:"einmal pro Woche",sq:"një herë në javë",type:"Kohë",ex:"Ich gehe einmal pro Woche ins Gym. — Shkoj një herë në javë në palestër."},
{de:"früher",sq:"më parë",type:"Kohë",ex:"Früher lebte ich in Albanien. — Më parë jetoja në Shqipëri."},
{de:"jetzt",sq:"tani",type:"Kohë",ex:"Jetzt wohne ich in Berlin. — Tani jetoj në Berlin."},
{de:"bald",sq:"shpejt",type:"Kohë",ex:"Ich komme bald. — Vij shpejt."},
{de:"schon",sq:"tashmë",type:"Kohë",ex:"Er ist schon da. — Ai është tashmë."},
{de:"noch",sq:"ende / akoma",type:"Kohë",ex:"Ich bin noch hier. — Ende jam këtu."},
{de:"nie",sq:"kurrë",type:"Kohë",ex:"Ich rauche nie. — Kurrë nuk pi duhan."},
],

A2_ext: [
// Folje të avancuara A2
{de:"sich vorstellen",sq:"të prezantohesh / imagjinosh",type:"Folje",ex:"Darf ich mich vorstellen? — Mund të prezantohem?"},
{de:"sich bewerben",sq:"të aplikosh",type:"Folje",ex:"Ich bewerbe mich für die Stelle. — Aplikoj për vendin e punës."},
{de:"sich anmelden",sq:"të regjistrohesh",type:"Folje",ex:"Ich melde mich für den Kurs an. — Regjistrohem për kursin."},
{de:"sich abmelden",sq:"të çregjistrohesh",type:"Folje",ex:"Ich melde mich vom Kurs ab. — Çregjistrohem."},
{de:"sich erkundigen",sq:"të informohesh",type:"Folje",ex:"Ich erkundige mich über die Preise. — Informohem rreth çmimeve."},
{de:"beschreiben",sq:"të përshkruash",type:"Folje",ex:"Beschreib das Bild! — Përshkruaj foton!"},
{de:"vergleichen",sq:"të krahasosh",type:"Folje",ex:"Ich vergleiche die Angebote. — Krahasoj ofertat."},
{de:"empfehlen",sq:"të rekomandosh",type:"Folje",ex:"Ich empfehle dieses Hotel. — Rekomandoj këtë hotel."},
{de:"planen",sq:"të planifikosh",type:"Folje",ex:"Wir planen einen Ausflug. — Planifikojmë një ekskursion."},
{de:"organisieren",sq:"të organizosh",type:"Folje",ex:"Ich organisiere die Party. — Organizoj festën."},
{de:"sich treffen",sq:"të takohesh",type:"Folje",ex:"Wir treffen uns um 18 Uhr. — Takohemi në orën 18."},
{de:"telefonieren",sq:"të telefonosh",type:"Folje",ex:"Ich telefoniere mit meiner Mutter. — Telefonoj me nënën."},
{de:"mailen",sq:"të dërgosh email",type:"Folje",ex:"Ich maile dir die Infos. — Të dërgoj me email informacionet."},
{de:"schicken",sq:"të dërgosh",type:"Folje",ex:"Ich schicke dir ein Paket. — Të dërgoj paketë."},
{de:"liefern",sq:"të dërgosh / furnizosh",type:"Folje",ex:"Das Paket wird geliefert. — Paketa dërgohet."},
{de:"umziehen",sq:"të ndërrosh banesë",type:"Folje",ex:"Ich ziehe nächsten Monat um. — Ndërroj banesë muajin tjetër."},
{de:"renovieren",sq:"të rinovosh",type:"Folje",ex:"Wir renovieren die Wohnung. — Rinovojmë banesën."},
{de:"reparieren",sq:"të riparosh",type:"Folje",ex:"Er repariert das Auto. — Ai riparon makinën."},
{de:"funktionieren",sq:"të funksionojë",type:"Folje",ex:"Das Gerät funktioniert nicht. — Aparati nuk funksionon."},
{de:"ausfüllen",sq:"të plotësosh (formular)",type:"Folje",ex:"Ich fülle das Formular aus. — Plotësoj formularin."},
{de:"unterschreiben",sq:"të nënshkruash",type:"Folje",ex:"Bitte unterschreiben Sie hier. — Nënshkruani ju lutem këtu."},
{de:"erlauben",sq:"të lejosh",type:"Folje",ex:"Ist das erlaubt? — A lejohet kjo?"},
{de:"verbieten",sq:"të ndalosh",type:"Folje",ex:"Das ist verboten. — Kjo ndalohet."},
{de:"sich beschweren",sq:"të ankohesh",type:"Folje",ex:"Ich möchte mich beschweren. — Dua të ankohem."},
{de:"entschuldigen",sq:"të falje / fale",type:"Folje",ex:"Entschuldige bitte! — Fal ju lutem!"},
{de:"zustimmen",sq:"të pajtohesh",type:"Folje",ex:"Ich stimme zu. — Pajtohem."},
{de:"ablehnen",sq:"të refuzosh",type:"Folje",ex:"Er lehnt das Angebot ab. — Ai refuzon ofertën."},
{de:"vorschlagen",sq:"të propozosh",type:"Folje",ex:"Ich schlage vor, dass wir... — Propozoj që ne..."},
{de:"diskutieren",sq:"të diskutosh",type:"Folje",ex:"Wir diskutieren das Problem. — Diskutojmë problemin."},
{de:"entscheiden",sq:"të vendosësh",type:"Folje",ex:"Ich muss mich entscheiden. — Duhet të vendos."},
// Komunikimi dhe shprehjet A2
{de:"Ich bin einverstanden.",sq:"Jam dakord.",type:"Shprehje",ex:"Ich bin einverstanden mit deinem Vorschlag. — Jam dakord me propozimin tënd."},
{de:"Das kommt darauf an.",sq:"Varet.",type:"Shprehje",ex:"Das kommt darauf an, wann du kommst. — Varet kur vjen."},
{de:"Es tut mir wirklich leid.",sq:"Vërtet më vjen keq.",type:"Shprehje",ex:"Es tut mir wirklich leid, das war mein Fehler. — Vërtet më vjen keq, ky ishte gabimi im."},
{de:"Das geht nicht.",sq:"Kjo nuk shkon.",type:"Shprehje",ex:"Das geht leider nicht. — Kjo fatkeqësisht nuk shkon."},
{de:"Das ist mir egal.",sq:"Nuk më intereson / Nuk ka rëndësi.",type:"Shprehje",ex:"Das ist mir egal — mach wie du willst. — Nuk ka rëndësi — bëj si dëshiron."},
{de:"Auf keinen Fall!",sq:"Asnjëherë! / Kurrsesi!",type:"Shprehje",ex:"Auf keinen Fall komme ich! — Kurrsesi nuk vij!"},
{de:"Das wäre super!",sq:"Kjo do të ishte super!",type:"Shprehje",ex:"Das wäre super, wenn du kommen könntest! — Do të ishte super nëse mund të vije!"},
{de:"Was denkst du?",sq:"Çfarë mendon?",type:"Shprehje",ex:"Was denkst du darüber? — Çfarë mendon rreth kësaj?"},
{de:"Ich habe keine Ahnung.",sq:"Nuk kam ide.",type:"Shprehje",ex:"Ich habe keine Ahnung, was passiert ist. — Nuk kam ide çfarë ka ndodhur."},
{de:"Das habe ich nicht gewusst.",sq:"Këtë nuk e dija.",type:"Shprehje",ex:"Das habe ich wirklich nicht gewusst. — Vërtet nuk e dija këtë."},
// Bota e punës A2
{de:"die Stellenanzeige",sq:"shpallja e vendit të punës",type:"Punë",ex:"Ich habe eine Stellenanzeige gesehen. — Pashë shpallje vendi pune."},
{de:"das Vorstellungsgespräch",sq:"intervista e punës",type:"Punë",ex:"Ich habe ein Vorstellungsgespräch. — Kam intervistë pune."},
{de:"das Arbeitsamt",sq:"zyra e punësimit",type:"Punë",ex:"Ich gehe zum Arbeitsamt. — Shkoj te zyra e punësimit."},
{de:"arbeitslos",sq:"i/e papunë",type:"Punë",ex:"Er ist arbeitslos. — Ai është i papunë."},
{de:"die Stelle",sq:"vendi i punës",type:"Punë",ex:"Ich suche eine neue Stelle. — Po kërkoj vend pune të ri."},
{de:"die Firma",sq:"firma",type:"Punë",ex:"Die Firma hat 100 Mitarbeiter. — Firma ka 100 punonjës."},
{de:"der Chef",sq:"shefi",type:"Punë",ex:"Mein Chef ist fair. — Shefi im është i drejtë."},
{de:"der Kollege",sq:"kolegu",type:"Punë",ex:"Mein Kollege heißt Jonas. — Kolegu im quhet Jonas."},
{de:"die Pause",sq:"pushimi (ndërmjet punës)",type:"Punë",ex:"Wir machen eine Pause. — Bëjmë pushim."},
{de:"das Gehalt",sq:"paga mujore",type:"Punë",ex:"Das Gehalt ist gut. — Paga është e mirë."},
{de:"der Urlaub",sq:"pushimet",type:"Punë",ex:"Ich nehme Urlaub. — Marr pushime."},
{de:"die Überstunden",sq:"orë shtesë",type:"Punë",ex:"Ich mache Überstunden. — Bëj orë shtesë."},
{de:"kündigen",sq:"të japësh dorëheqjen",type:"Punë",ex:"Er hat gekündigt. — Ai ka dhënë dorëheqjen."},
{de:"entlassen",sq:"të pushohet nga puna",type:"Punë",ex:"Er wurde entlassen. — Ai u pushua nga puna."},
{de:"die Gehaltserhöhung",sq:"rritja e pagës",type:"Punë",ex:"Ich bitte um eine Gehaltserhöhung. — Kërkoj rritje page."},
// Shëndeti dhe trupi A2
{de:"der Schmerz",sq:"dhimbja",type:"Shëndet",ex:"Ich habe starke Schmerzen. — Kam dhimbje të forta."},
{de:"das Rezept",sq:"receta mjekësore",type:"Shëndet",ex:"Der Arzt schreibt ein Rezept. — Mjeku shkruan recetë."},
{de:"die Tablette",sq:"tableta",type:"Shëndet",ex:"Ich nehme Tabletten. — Marr tableta."},
{de:"die Salbe",sq:"pomada",type:"Shëndet",ex:"Diese Salbe hilft gegen Schmerzen. — Kjo pomadë ndihmon kundër dhimbjeve."},
{de:"das Pflaster",sq:"fashoja vetëngjitëse",type:"Shëndet",ex:"Ich brauche ein Pflaster. — Kam nevojë për fashoja."},
{de:"operieren",sq:"të operosh",type:"Shëndet",ex:"Der Arzt muss ihn operieren. — Mjeku duhet ta operojë."},
{de:"sich erholen",sq:"të çlodheris",type:"Shëndet",ex:"Ich erhole mich im Urlaub. — Çlodhem gjatë pushimeve."},
{de:"gesund werden",sq:"të shërohesh",type:"Shëndet",ex:"Ich hoffe, du wirst schnell gesund. — Shpresoj të shërohesh shpejt."},
{de:"Fieber haben",sq:"të kesh temperaturë",type:"Shëndet",ex:"Das Kind hat Fieber. — Fëmija ka temperaturë."},
{de:"husten",sq:"të kollitesh",type:"Shëndet",ex:"Er hustet viel. — Ai kollitet shumë."},
{de:"niesen",sq:"të teshtish",type:"Shëndet",ex:"Ich niese wegen der Allergie. — Teshtij nga alergjia."},
{de:"schwitzen",sq:"të djersitest",type:"Shëndet",ex:"Ich schwitze beim Sport. — Djersiset gjatë sportit."},
{de:"sich übergeben",sq:"të vjellësh",type:"Shëndet",ex:"Mir ist schlecht und ich muss mich übergeben. — Ndihem keq dhe do të vjell."},
{de:"bewusstlos",sq:"pa ndjenja",type:"Shëndet",ex:"Er ist bewusstlos. — Ai është pa ndjenja."},
{de:"die Wunde",sq:"plaga",type:"Shëndet",ex:"Die Wunde muss verbunden werden. — Plaga duhet të lidhet."},
// Mjedisi i jetesës A2
{de:"der Lärm",sq:"zhurma",type:"Mjedis",ex:"Der Lärm ist unerträglich. — Zhurma është e padurueshme."},
{de:"die Ruhe",sq:"qetësia",type:"Mjedis",ex:"Ich brauche Ruhe. — Kam nevojë për qetësi."},
{de:"stören",sq:"të shqetësosh",type:"Mjedis",ex:"Stör mich nicht! — Mos më shqetëso!"},
{de:"nerven",sq:"të nervozojë",type:"Mjedis",ex:"Das nervt mich. — Kjo më nervoz."},
{de:"sich ärgern",sq:"të mërzitesh",type:"Mjedis",ex:"Ich ärgere mich über den Verkehr. — Mërzitem nga trafiku."},
{de:"der Abfall",sq:"mbeturinat",type:"Mjedis",ex:"Wirf den Abfall in den Mülleimer. — Hidhe mbeturinën në kosh."},
{de:"der Mülleimer",sq:"koshi i plehrave",type:"Mjedis",ex:"Der Mülleimer ist voll. — Koshi është plot."},
{de:"recyceln",sq:"të riciklosh",type:"Mjedis",ex:"Wir recyceln Glas und Papier. — Riciklojmë qelq dhe letër."},
{de:"die Umwelt",sq:"mjedisi",type:"Mjedis",ex:"Wir müssen die Umwelt schützen. — Duhet të mbrojmë mjedisin."},
{de:"umweltfreundlich",sq:"ekologjik / miqësor me mjedisin",type:"Mjedis",ex:"Dieses Produkt ist umweltfreundlich. — Ky produkt është ekologjik."},
// Udhetimet dhe transport A2 i zgjeruar
{de:"der Flughafen",sq:"aeroporti",type:"Transport",ex:"Ich fahre zum Flughafen. — Shkoj në aeroport."},
{de:"abfliegen",sq:"të fluturosh (nisesh)",type:"Transport",ex:"Das Flugzeug fliegt um 10 Uhr ab. — Aeroplani niset në orën 10."},
{de:"landen",sq:"të ulesh (avioni)",type:"Transport",ex:"Wir landen in Wien. — Ulemi në Vjenë."},
{de:"verpassen",sq:"të humbash (trenin/autobusin)",type:"Transport",ex:"Ich habe den Zug verpasst. — Humbëa trenin."},
{de:"umsteigen",sq:"të ndërrosh (linjë)",type:"Transport",ex:"Hier müssen Sie umsteigen. — Këtu duhet të ndërroni."},
{de:"die Verspätung",sq:"vonesa",type:"Transport",ex:"Der Zug hat Verspätung. — Treni ka vonesë."},
{de:"die Abfahrt",sq:"nisja",type:"Transport",ex:"Die Abfahrt ist um 9 Uhr. — Nisja është në orën 9."},
{de:"die Ankunft",sq:"mbrrinia",type:"Transport",ex:"Die Ankunft ist um 12 Uhr. — Mbrrinia është në orën 12."},
{de:"das Gleis",sq:"binari (trenit)",type:"Transport",ex:"Der Zug fährt von Gleis 3. — Treni niset nga binari 3."},
{de:"die Auskunft",sq:"informacioni",type:"Transport",ex:"Ich frage bei der Auskunft. — Pyes te informacioni."},
],

B1_ext: [
// Gjuhë akademike dhe abstrakte
{de:"analysieren",sq:"të analizosh",type:"Folje",ex:"Ich analysiere die Situation. — Analizoj situatën."},
{de:"argumentieren",sq:"të argumentosh",type:"Folje",ex:"Er argumentiert überzeugend. — Ai argumenton bindshëm."},
{de:"begründen",sq:"të arsyetosh",type:"Folje",ex:"Bitte begründen Sie Ihre Meinung. — Arsyetoni mendimin tuaj."},
{de:"behaupten",sq:"të pohosh",type:"Folje",ex:"Er behauptet, er sei unschuldig. — Ai pohon se është i pafajshëm."},
{de:"belegen",sq:"të dëshmosh",type:"Folje",ex:"Können Sie das belegen? — Mund ta dëshmoni?"},
{de:"betonen",sq:"të theksosh",type:"Folje",ex:"Ich möchte betonen, dass... — Dua të theksoj që..."},
{de:"beurteilen",sq:"të gjykosh",type:"Folje",ex:"Wie beurteilen Sie die Situation? — Si e gjykoni situatën?"},
{de:"darstellen",sq:"të paraqitësh",type:"Folje",ex:"Ich stelle das Problem dar. — Paraqit problemin."},
{de:"erkennen",sq:"të njohësh",type:"Folje",ex:"Ich erkenne das Problem. — Njoh problemin."},
{de:"feststellen",sq:"të konstatosh",type:"Folje",ex:"Ich stelle fest, dass... — Konstatoj që..."},
{de:"formulieren",sq:"të formulosh",type:"Folje",ex:"Formuliere das klarer! — Formuloje më qartë!"},
{de:"interpretieren",sq:"të interpretosh",type:"Folje",ex:"Wie interpretieren Sie das? — Si e interpretoni?"},
{de:"kritisieren",sq:"të kritikosh",type:"Folje",ex:"Ich kritisiere das System. — Kritikojë sistemin."},
{de:"nachweisen",sq:"të provojësh",type:"Folje",ex:"Er kann das nachweisen. — Ai mund ta provojë."},
{de:"überzeigen",sq:"të bindësh",type:"Folje",ex:"Er überzeugt mich. — Ai më bind."},
{de:"vergleichen",sq:"të krahasosh",type:"Folje",ex:"Ich vergleiche die Methoden. — Krahasoj metodat."},
{de:"verhindern",sq:"të parandalosh",type:"Folje",ex:"Wir müssen das verhindern. — Duhet ta parandalojmë."},
{de:"vermeiden",sq:"të shmangësh",type:"Folje",ex:"Ich vermeide Konflikte. — Shmang konfliktet."},
{de:"widersprechen",sq:"të kundërshtosh",type:"Folje",ex:"Ich widerspreche dir. — Të kundërshtoj."},
{de:"zusammenfassen",sq:"të përmbledhësh",type:"Folje",ex:"Können Sie das zusammenfassen? — Mund ta përmbledhni?"},
// Shoqëria dhe politika B1
{de:"die Demokratie",sq:"demokracia",type:"Politikë",ex:"Deutschland ist eine Demokratie. — Gjermani është demokraci."},
{de:"die Diktatur",sq:"diktatura",type:"Politikë",ex:"Eine Diktatur unterdrückt die Freiheit. — Diktatura shtyp lirinë."},
{de:"die Freiheit",sq:"liria",type:"Politikë",ex:"Freiheit ist ein Grundrecht. — Liria është e drejtë themelore."},
{de:"die Gerechtigkeit",sq:"drejtësia",type:"Politikë",ex:"Ich kämpfe für Gerechtigkeit. — Luftoj për drejtësi."},
{de:"die Gleichheit",sq:"barazia",type:"Politikë",ex:"Gleichheit vor dem Gesetz. — Barazi para ligjit."},
{de:"die Menschenwürde",sq:"dinjiteti njerëzor",type:"Politikë",ex:"Die Menschenwürde ist unantastbar. — Dinjiteti njerëzor është i paprekshëm."},
{de:"die Verantwortung",sq:"përgjegjësia",type:"Politikë",ex:"Jeder trägt Verantwortung. — Secili mban përgjegjësi."},
{de:"die Transparenz",sq:"transparenca",type:"Politikë",ex:"Transparenz ist wichtig in der Politik. — Transparenca është e rëndësishme në politikë."},
{de:"die Korruption",sq:"korrupsioni",type:"Politikë",ex:"Korruption schadet der Gesellschaft. — Korrupsioni dëmton shoqërinë."},
{de:"das Engagement",sq:"angazhimi",type:"Politikë",ex:"Zivilgesellschaftliches Engagement. — Angazhimi qytetar."},
{de:"die Petition",sq:"petita",type:"Politikë",ex:"Ich unterschreibe die Petition. — Nënshkruaj petitën."},
{de:"protestieren",sq:"të protestosh",type:"Politikë",ex:"Die Bürger protestieren. — Qytetarët protestojnë."},
{de:"demonstrieren",sq:"të demonstrosh",type:"Politikë",ex:"Sie demonstrieren für Klimaschutz. — Ata demonstrojnë për mbrojtjen e klimës."},
{de:"das Parlament",sq:"parlamenti",type:"Politikë",ex:"Das Parlament stimmt ab. — Parlamenti voton."},
{de:"der Abgeordnete",sq:"deputeti",type:"Politikë",ex:"Der Abgeordnete vertritt die Wähler. — Deputeti përfaqëson votuesit."},
// Ekonomia B1
{de:"die Wirtschaft",sq:"ekonomia",type:"Ekonomi",ex:"Die Wirtschaft wächst. — Ekonomia rritet."},
{de:"das Wachstum",sq:"rritja",type:"Ekonomi",ex:"Wirtschaftliches Wachstum ist wichtig. — Rritja ekonomike është e rëndësishme."},
{de:"die Krise",sq:"kriza",type:"Ekonomi",ex:"In der Krise helfen wir einander. — Në krizë ndihmojmë njëri-tjetrin."},
{de:"die Globalisierung",sq:"globalizimi",type:"Ekonomi",ex:"Globalisierung verbindet die Welt. — Globalizimi lidh botën."},
{de:"der Export",sq:"eksporti",type:"Ekonomi",ex:"Deutschland exportiert viel. — Gjermani eksporton shumë."},
{de:"der Import",sq:"importi",type:"Ekonomi",ex:"Wir importieren Öl. — Importojmë naftë."},
{de:"die Steuer",sq:"taksa",type:"Ekonomi",ex:"Ich zahle Steuern. — Paguaj taksa."},
{de:"das Einkommen",sq:"të ardhurat",type:"Ekonomi",ex:"Das Einkommen reicht nicht. — Të ardhurat nuk mjaftojnë."},
{de:"die Rente",sq:"pensioni",type:"Ekonomi",ex:"Er bekommt Rente. — Ai merr pension."},
{de:"die Sozialleistung",sq:"ndihma sociale",type:"Ekonomi",ex:"Sozialleistungen unterstützen Bedürftige. — Ndihmat sociale mbështesin ata në nevojë."},
{de:"der Mindestlohn",sq:"paga minimale",type:"Ekonomi",ex:"Der Mindestlohn ist gesetzlich festgelegt. — Paga minimale është e caktuar me ligj."},
{de:"die Arbeitslosigkeit",sq:"papunësia",type:"Ekonomi",ex:"Die Arbeitslosigkeit steigt. — Papunësia rritet."},
{de:"die Inflation",sq:"inflacioni",type:"Ekonomi",ex:"Die Inflation ist hoch. — Inflacioni është i lartë."},
{de:"investieren",sq:"të investosh",type:"Ekonomi",ex:"Er investiert in Aktien. — Ai investon në aksione."},
{de:"das Risiko",sq:"rreziku",type:"Ekonomi",ex:"Das Risiko ist hoch. — Rreziku është i lartë."},
// Teknologjia B1
{de:"die Digitalisierung",sq:"dixhitalizimi",type:"Teknologji",ex:"Digitalisierung verändert die Arbeit. — Dixhitalizimi ndryshon punën."},
{de:"die künstliche Intelligenz",sq:"inteligjenca artificiale",type:"Teknologji",ex:"KI verändert alles. — IA ndryshon gjithçka."},
{de:"der Algorithmus",sq:"algoritmi",type:"Teknologji",ex:"Der Algorithmus entscheidet. — Algoritmi vendos."},
{de:"die Daten",sq:"të dhënat",type:"Teknologji",ex:"Meine Daten sind privat. — Të dhënat e mia janë private."},
{de:"der Datenschutz",sq:"mbrojtja e të dhënave",type:"Teknologji",ex:"Datenschutz ist ein Grundrecht. — Mbrojtja e të dhënave është e drejtë themelore."},
{de:"die Cloud",sq:"cloud-i",type:"Teknologji",ex:"Die Daten liegen in der Cloud. — Të dhënat janë në cloud."},
{de:"das Netzwerk",sq:"rrjeti",type:"Teknologji",ex:"Das Netzwerk ist sicher. — Rrjeti është i sigurt."},
{de:"programmieren",sq:"të programosh",type:"Teknologji",ex:"Ich programmiere in Python. — Programoj në Python."},
{de:"entwickeln",sq:"të zhvillosh",type:"Teknologji",ex:"Wir entwickeln eine neue App. — Zhvillojmë aplikacion të ri."},
{de:"testen",sq:"të testosh",type:"Teknologji",ex:"Ich teste das Programm. — Testoj programin."},
{de:"aktualisieren",sq:"të përditësosh",type:"Teknologji",ex:"Bitte aktualisiere die Software. — Ju lutem përditëso softuerin."},
{de:"speichern",sq:"të ruash",type:"Teknologji",ex:"Ich speichere die Datei. — Ruaj skedarin."},
{de:"löschen",sq:"të fshish",type:"Teknologji",ex:"Ich lösche alte Dateien. — Fshij skedarë të vjetër."},
{de:"herunterladen",sq:"të shkarkosh",type:"Teknologji",ex:"Ich lade die App herunter. — Shkarkojë aplikacionin."},
{de:"hochladen",sq:"të ngarkosh",type:"Teknologji",ex:"Ich lade das Foto hoch. — Ngarkojë foton."},
// Shëndeti dhe psikologjia B1
{de:"die psychische Gesundheit",sq:"shëndeti mendor",type:"Shëndet",ex:"Psychische Gesundheit ist wichtig. — Shëndeti mendor është i rëndësishëm."},
{de:"der Stress",sq:"stresi",type:"Shëndet",ex:"Ich habe zu viel Stress. — Kam shumë stres."},
{de:"das Burnout",sq:"burnout-i",type:"Shëndet",ex:"Er hat einen Burnout. — Ai ka burnout."},
{de:"die Depression",sq:"depresioni",type:"Shëndet",ex:"Depression ist eine ernste Krankheit. — Depresioni është sëmundje serioze."},
{de:"die Angststörung",sq:"çrregullimi i ankthit",type:"Shëndet",ex:"Angststörungen sind häufig. — Çrregullimet e ankthit janë të shpeshta."},
{de:"die Therapie",sq:"terapia",type:"Shëndet",ex:"Ich gehe zur Therapie. — Shkoj në terapi."},
{de:"der Therapeut",sq:"terapisti",type:"Shëndet",ex:"Mein Therapeut hilft mir. — Terapisti im më ndihmon."},
{de:"meditieren",sq:"të meditosh",type:"Shëndet",ex:"Ich meditiere täglich. — Meditoj çdo ditë."},
{de:"sich entspannen",sq:"të relaksohesh",type:"Shëndet",ex:"Ich entspanne mich am Abend. — Relaksohem mbrëmjen."},
{de:"die Achtsamkeit",sq:"mindfulness / ndërgjegjshmëria",type:"Shëndet",ex:"Achtsamkeit reduziert Stress. — Mindfulness redukton stresin."},
{de:"das Wohlbefinden",sq:"mirëqenia",type:"Shëndet",ex:"Mein Wohlbefinden ist mir wichtig. — Mirëqenia ime është e rëndësishme."},
{de:"das Selbstbewusstsein",sq:"vetëbesimi",type:"Shëndet",ex:"Er hat viel Selbstbewusstsein. — Ai ka shumë vetëbesim."},
{de:"die Resilienz",sq:"rezistenca psikologjike",type:"Shëndet",ex:"Resilienz hilft in Krisen. — Rezistenca ndihmon në kriza."},
// Lidhëzat dhe shprehjet e avancuara B1
{de:"einerseits",sq:"nga njëra anë",type:"Lidhëz",ex:"Einerseits ist es gut... — Nga njëra anë është mirë..."},
{de:"andererseits",sq:"nga ana tjetër",type:"Lidhëz",ex:"Andererseits ist es teuer. — Nga ana tjetër është i shtrenjtë."},
{de:"trotzdem",sq:"megjithatë",type:"Lidhëz",ex:"Es regnet, trotzdem gehe ich raus. — Bie shi, megjithatë dal jashtë."},
{de:"deshalb",sq:"prandaj",type:"Lidhëz",ex:"Er war krank, deshalb kam er nicht. — Ishte i sëmurë, prandaj nuk erdhi."},
{de:"deswegen",sq:"për këtë arsye",type:"Lidhëz",ex:"Deswegen lerne ich Deutsch. — Për këtë arsye mësoj gjermanisht."},
{de:"dennoch",sq:"megjithatë",type:"Lidhëz",ex:"Es ist schwer, dennoch mache ich weiter. — Është e vështirë, megjithatë vazhdoj."},
{de:"obwohl",sq:"megjithëse",type:"Lidhëz",ex:"Obwohl er müde war, arbeitete er. — Megjithëse ishte i lodhur, punoi."},
{de:"während",sq:"ndërkohë që",type:"Lidhëz",ex:"Während ich esse, lese ich. — Ndërkohë që ha, lexojë."},
{de:"seitdem",sq:"që atëherë",type:"Lidhëz",ex:"Seitdem wohne ich in Berlin. — Që atëherë jetoj në Berlin."},
{de:"nachdem",sq:"pasi",type:"Lidhëz",ex:"Nachdem er gegessen hatte, schlief er. — Pasi hëngri, fjeti."},
{de:"bevor",sq:"para se",type:"Lidhëz",ex:"Bevor ich schlafe, lese ich. — Para se të fle, lexoj."},
{de:"damit",sq:"që të",type:"Lidhëz",ex:"Ich lerne, damit ich bestehe. — Mësoj që të kaloj provimin."},
{de:"falls",sq:"nëse / në rast se",type:"Lidhëz",ex:"Falls du kommst, ruf an. — Nëse vjen, telefono."},
{de:"sobald",sq:"sapo",type:"Lidhëz",ex:"Sobald ich fertig bin, komme ich. — Sapo të mbaroj, vij."},
{de:"solange",sq:"sa kohë që",type:"Lidhëz",ex:"Solange du hier bist, bin ich glücklich. — Sa kohë që je këtu, jam i lumtur."},
// Emra abstrakt B1
{de:"die Herausforderung",sq:"sfida",type:"Abstrakt",ex:"Das ist eine große Herausforderung. — Kjo është sfidë e madhe."},
{de:"die Möglichkeit",sq:"mundësia",type:"Abstrakt",ex:"Es gibt viele Möglichkeiten. — Ka shumë mundësi."},
{de:"die Lösung",sq:"zgjidhja",type:"Abstrakt",ex:"Wir brauchen eine Lösung. — Kemi nevojë për zgjidhje."},
{de:"der Fortschritt",sq:"përparimi",type:"Abstrakt",ex:"Fortschritt ist wichtig. — Përparimi është i rëndësishëm."},
{de:"die Erfahrung",sq:"përvoja",type:"Abstrakt",ex:"Mit Erfahrung kommt Weisheit. — Me përvojë vjen urtësia."},
{de:"das Ziel",sq:"qëllimi",type:"Abstrakt",ex:"Mein Ziel ist B1. — Qëllimi im është B1."},
{de:"der Erfolg",sq:"suksesi",type:"Abstrakt",ex:"Erfolg kommt durch Arbeit. — Suksesi vjen me punë."},
{de:"das Scheitern",sq:"dështimi",type:"Abstrakt",ex:"Scheitern ist Teil des Lernens. — Dështimi është pjesë e të mësuarit."},
{de:"die Chance",sq:"mundësia / rasti",type:"Abstrakt",ex:"Das ist eine große Chance. — Ky është rast i madh."},
{de:"die Entscheidung",sq:"vendimi",type:"Abstrakt",ex:"Das ist eine schwere Entscheidung. — Ky është vendim i vështirë."},
{de:"das Vertrauen",sq:"besimi",type:"Abstrakt",ex:"Vertrauen ist die Basis. — Besimi është baza."},
{de:"die Geduld",sq:"durimi",type:"Abstrakt",ex:"Geduld ist eine Tugend. — Durimi është virtyt."},
{de:"die Neugier",sq:"kurioziteti",type:"Abstrakt",ex:"Neugier fördert das Lernen. — Kurioziteti nxit të mësuarit."},
{de:"die Leidenschaft",sq:"pasioni",type:"Abstrakt",ex:"Mit Leidenschaft lernt man besser. — Me pasion mësohet më mirë."},
{de:"das Engagement",sq:"angazhimi / përkushtimi",type:"Abstrakt",ex:"Sein Engagement ist bewundernswert. — Angazhimi i tij është i admirueshëm."},
]
};

// ═══════════════════════════════════════════════════════════════════
// DEUTSCHAL — VOCAB_3000 EXTENSION
// ~1800 new words to reach 3000 total
// Organized by: Level → Skill Area → Topic
// Every word: { de, sq, type, ex } — natural sentences only
// ═══════════════════════════════════════════════════════════════════

const VOCAB_3000 = {

// ═══════════════════════════
// A1 EXTENSION — 500 words
// For: absolute beginners
// Focus: survival, daily life, simple communication
// ═══════════════════════════

A1: [

// ── VERBS: Core actions every beginner needs ──
{de:"hören",sq:"të dëgjosh",type:"Folje",ex:"Hörst du Musik? — Po dëgjon muzikë?"},
{de:"sehen",sq:"të shohësh",type:"Folje",ex:"Siehst du das? — E sheh këtë?"},
{de:"sprechen",sq:"të flasësh",type:"Folje",ex:"Sprechen Sie Englisch? — Flisni anglisht?"},
{de:"sagen",sq:"të thuash",type:"Folje",ex:"Was hast du gesagt? — Çfarë ke thënë?"},
{de:"fragen",sq:"të pyesësh",type:"Folje",ex:"Darf ich fragen? — Mund të pyes?"},
{de:"antworten",sq:"të përgjigjesh",type:"Folje",ex:"Bitte antworte! — Ju lutem përgjigju!"},
{de:"lachen",sq:"të qeshësh",type:"Folje",ex:"Wir lachen zusammen. — Qeshim bashkë."},
{de:"weinen",sq:"të qajësh",type:"Folje",ex:"Das Kind weint. — Fëmija qan."},
{de:"denken",sq:"të mendosh",type:"Folje",ex:"Ich denke an dich. — Mendoj për ty."},
{de:"vergessen",sq:"të harrosh",type:"Folje",ex:"Ich vergesse immer! — Gjithmonë harroj!"},
{de:"erinnern",sq:"të kujtosh",type:"Folje",ex:"Ich erinnere mich nicht. — Nuk kujtoj."},
{de:"zeigen",sq:"të tregosh",type:"Folje",ex:"Zeig mir das bitte. — Më trego ju lutem."},
{de:"bringen",sq:"të sjellësh",type:"Folje",ex:"Bring mir Wasser. — Sjellmë ujë."},
{de:"holen",sq:"të marrësh / sjellësh",type:"Folje",ex:"Ich hole ein Taxi. — Marr taksi."},
{de:"suchen",sq:"të kërkosh",type:"Folje",ex:"Ich suche meinen Schlüssel. — Po kërkoj çelësin tim."},
{de:"finden",sq:"të gjesh",type:"Folje",ex:"Hast du es gefunden? — E ke gjetur?"},
{de:"verlieren",sq:"të humbasësh",type:"Folje",ex:"Ich habe mein Handy verloren. — Humba telefonin."},
{de:"beginnen",sq:"të fillosh",type:"Folje",ex:"Wann beginnt der Kurs? — Kur fillon kursi?"},
{de:"enden",sq:"të mbarosh",type:"Folje",ex:"Wann endet der Film? — Kur mbaron filmi?"},
{de:"aufhören",sq:"të ndalësh",type:"Folje",ex:"Hör auf! — Ndal!"},
{de:"weitermachen",sq:"të vazhdosh",type:"Folje",ex:"Mach weiter! — Vazhdo!"},
{de:"versuchen",sq:"të provosh",type:"Folje",ex:"Ich versuche es. — Po e provoj."},
{de:"schaffen",sq:"të arrish",type:"Folje",ex:"Du schaffst das! — Do ta arrish!"},
{de:"brauchen",sq:"të kesh nevojë",type:"Folje",ex:"Ich brauche Hilfe. — Kam nevojë për ndihmë."},
{de:"mögen",sq:"të duash / ta pëlqesh",type:"Folje",ex:"Ich mag Musik. — Më pëlqen muzika."},
{de:"lieben",sq:"të duash",type:"Folje",ex:"Ich liebe meine Familie. — E dua familjen time."},
{de:"hassen",sq:"të urresh",type:"Folje",ex:"Ich hasse Montage. — I urrej të hënat."},
{de:"kennen",sq:"të njohësh (dikë/diçka)",type:"Folje",ex:"Kennst du ihn? — E njeh atë?"},
{de:"wissen",sq:"të dish",type:"Folje",ex:"Weißt du das? — E di?"},
{de:"können",sq:"të mundësh",type:"Folje",ex:"Kannst du schwimmen? — Mund të notosh?"},
{de:"müssen",sq:"të duhet",type:"Folje",ex:"Ich muss gehen. — Duhet të shkoj."},
{de:"dürfen",sq:"të lejoheris",type:"Folje",ex:"Darf ich hier parken? — Lejohet të parkoj këtu?"},
{de:"sollen",sq:"duhet (sipas dikujt)",type:"Folje",ex:"Du sollst das tun. — Duhet ta bësh këtë."},
{de:"wollen",sq:"të dëshirosh fort",type:"Folje",ex:"Ich will nach Deutschland. — Dua të shkoj në Gjermani."},

// ── ADJECTIVES: Describing the world ──
{de:"groß",sq:"i madh",type:"Mbiemër",ex:"Das ist ein großes Haus. — Kjo është shtëpi e madhe."},
{de:"klein",sq:"i vogël",type:"Mbiemër",ex:"Das ist ein kleines Kind. — Kjo është fëmijë i vogël."},
{de:"lang",sq:"i gjatë",type:"Mbiemër",ex:"Der Weg ist lang. — Rruga është e gjatë."},
{de:"kurz",sq:"i shkurtër",type:"Mbiemër",ex:"Das ist eine kurze Geschichte. — Kjo është histori e shkurtër."},
{de:"breit",sq:"i gjerë",type:"Mbiemër",ex:"Die Straße ist breit. — Rruga është e gjerë."},
{de:"eng",sq:"i ngushtë",type:"Mbiemër",ex:"Der Korridor ist eng. — Korridori është i ngushtë."},
{de:"schwer",sq:"i rëndë",type:"Mbiemër",ex:"Der Koffer ist schwer. — Valixhja është e rëndë."},
{de:"leicht",sq:"i lehtë",type:"Mbiemër",ex:"Das ist leicht zu machen. — Kjo është e lehtë të bëhet."},
{de:"warm",sq:"i ngrohtë",type:"Mbiemër",ex:"Das Wasser ist warm. — Uji është i ngrohtë."},
{de:"kalt",sq:"i ftohtë",type:"Mbiemër",ex:"Es ist kalt heute. — Është ftohtë sot."},
{de:"heiß",sq:"shumë i nxehtë",type:"Mbiemër",ex:"Der Kaffee ist heiß. — Kafeja është e nxehtë."},
{de:"kühl",sq:"i freskët",type:"Mbiemër",ex:"Das Bier ist kühl. — Birra është e freskët."},
{de:"laut",sq:"me zhurmë",type:"Mbiemër",ex:"Die Musik ist zu laut. — Muzika është shumë e lartë."},
{de:"leise",sq:"i qetë",type:"Mbiemër",ex:"Sprich leiser! — Fol më qetë!"},
{de:"schnell",sq:"i shpejtë",type:"Mbiemër",ex:"Das Auto fährt schnell. — Makina shkon shpejt."},
{de:"langsam",sq:"i ngadaltë",type:"Mbiemër",ex:"Er isst sehr langsam. — Ai ha shumë ngadalë."},
{de:"früh",sq:"herët",type:"Mbiemër",ex:"Ich stehe früh auf. — Çohem herët."},
{de:"spät",sq:"vonë",type:"Mbiemër",ex:"Es ist schon spät. — Është tashmë vonë."},
{de:"nah",sq:"afër",type:"Mbiemër",ex:"Das Café ist nah. — Kafeneja është afër."},
{de:"weit",sq:"larg",type:"Mbiemër",ex:"Der Bahnhof ist weit. — Stacioni është larg."},
{de:"voll",sq:"plot",type:"Mbiemër",ex:"Das Glas ist voll. — Gota është e plotë."},
{de:"leer",sq:"bosh",type:"Mbiemër",ex:"Der Kühlschrank ist leer. — Frigoriferi është bosh."},
{de:"teuer",sq:"i shtrenjtë",type:"Mbiemër",ex:"Das ist zu teuer! — Kjo është shumë e shtrenjtë!"},
{de:"billig",sq:"i lirë",type:"Mbiemër",ex:"Das ist sehr billig. — Kjo është shumë e lirë."},
{de:"einfach",sq:"i thjeshtë",type:"Mbiemër",ex:"Das ist einfach! — Kjo është e thjeshtë!"},
{de:"kompliziert",sq:"i komplikuar",type:"Mbiemër",ex:"Das ist kompliziert. — Kjo është e komplikuar."},
{de:"wichtig",sq:"i rëndësishëm",type:"Mbiemër",ex:"Das ist sehr wichtig. — Kjo është shumë e rëndësishme."},
{de:"unwichtig",sq:"i parëndësishëm",type:"Mbiemër",ex:"Das ist unwichtig. — Kjo është e parëndësishme."},
{de:"möglich",sq:"i mundshëm",type:"Mbiemër",ex:"Ist das möglich? — A është kjo e mundshme?"},
{de:"unmöglich",sq:"i pamundshëm",type:"Mbiemër",ex:"Das ist unmöglich! — Kjo është e pamundshme!"},
{de:"richtig",sq:"i saktë",type:"Mbiemër",ex:"Das ist richtig! — Kjo është e saktë!"},
{de:"falsch",sq:"i gabuar",type:"Mbiemër",ex:"Das ist falsch. — Kjo është e gabuar."},
{de:"offen",sq:"i hapur",type:"Mbiemër",ex:"Die Tür ist offen. — Dera është e hapur."},
{de:"geschlossen",sq:"i mbyllur",type:"Mbiemër",ex:"Das Geschäft ist geschlossen. — Dyqani është i mbyllur."},
{de:"fertig",sq:"gati / i mbaruar",type:"Mbiemër",ex:"Ich bin fertig! — Mbarova!"},
{de:"bereit",sq:"i gatshëm",type:"Mbiemër",ex:"Bist du bereit? — Je i gatshëm?"},
{de:"müde",sq:"i lodhur",type:"Mbiemër",ex:"Ich bin so müde. — Jam kaq i lodhur."},
{de:"wach",sq:"zgjuar",type:"Mbiemër",ex:"Ich bin nicht wach. — Nuk jam zgjuar."},
{de:"krank",sq:"i sëmurë",type:"Mbiemër",ex:"Er ist krank. — Ai është i sëmurë."},
{de:"gesund",sq:"i shëndetshëm",type:"Mbiemër",ex:"Bleib gesund! — Qëndro i shëndetshëm!"},
{de:"sauber",sq:"i pastër",type:"Mbiemër",ex:"Das Zimmer ist sauber. — Dhoma është e pastër."},
{de:"schmutzig",sq:"i pistë",type:"Mbiemër",ex:"Die Hände sind schmutzig. — Duart janë të pista."},
{de:"lecker",sq:"i shijshëm",type:"Mbiemër",ex:"Das ist so lecker! — Kjo është kaq e shijshme!"},
{de:"ekelig",sq:"i neveritshëm",type:"Mbiemër",ex:"Das ist ekelig! — Kjo është e neveritshme!"},
{de:"süß",sq:"i ëmbël",type:"Mbiemër",ex:"Das Kind ist so süß! — Fëmija është kaq i ëmbël!"},
{de:"sauer",sq:"i thartë / i zemëruar",type:"Mbiemër",ex:"Der Apfel ist sauer. — Molla është e thartë."},
{de:"bitter",sq:"i hidhur",type:"Mbiemër",ex:"Der Kaffee ist bitter. — Kafeja është e hidhur."},
{de:"salzig",sq:"i kripur",type:"Mbiemër",ex:"Das Essen ist zu salzig. — Ushqimi është shumë i kripur."},

// ── NUMBERS, TIME & DATES ──
{de:"das Datum",sq:"data",type:"Kohë",ex:"Was ist das Datum heute? — Cila është data sot?"},
{de:"der Wochentag",sq:"dita e javës",type:"Kohë",ex:"Welcher Wochentag ist heute? — Cila ditë e javës është sot?"},
{de:"das Wochenende",sq:"fudnjava",type:"Kohë",ex:"Am Wochenende schlafe ich lange. — Fundjavën fle gjatë."},
{de:"die Uhrzeit",sq:"ora (si shprehje)",type:"Kohë",ex:"Wie ist die Uhrzeit? — Sa është ora?"},
{de:"die Hälfte",sq:"gjysma",type:"Numër",ex:"Die Hälfte des Kuchens. — Gjysma e tortës."},
{de:"das Viertel",sq:"çereku",type:"Numër",ex:"Ein Viertel nach drei. — Tre e çerek."},
{de:"gerade",sq:"tani / saktësisht",type:"Kohë",ex:"Ich bin gerade beschäftigt. — Jam i zënë tani."},
{de:"gleich",sq:"menjëherë / njësoj",type:"Kohë",ex:"Ich komme gleich! — Vij menjëherë!"},
{de:"sofort",sq:"menjëherë",type:"Kohë",ex:"Komm sofort! — Eja menjëherë!"},
{de:"später",sq:"më vonë",type:"Kohë",ex:"Bis später! — Deri më vonë!"},
{de:"zuerst",sq:"fillimisht",type:"Kohë",ex:"Zuerst esse ich. — Fillimisht ha."},
{de:"dann",sq:"pastaj",type:"Kohë",ex:"Dann gehe ich. — Pastaj shkoj."},
{de:"danach",sq:"pas kësaj",type:"Kohë",ex:"Danach schlafe ich. — Pas kësaj fle."},
{de:"zuletzt",sq:"në fund",type:"Kohë",ex:"Zuletzt trinke ich Kaffee. — Në fund pi kafe."},
{de:"immer",sq:"gjithmonë",type:"Kohë",ex:"Ich dusche immer morgens. — Gjithmonë marr dush mëngjesit."},
{de:"oft",sq:"shpesh",type:"Kohë",ex:"Ich esse oft Pizza. — Shpesh ha picë."},
{de:"manchmal",sq:"ndonjëherë",type:"Kohë",ex:"Manchmal tanze ich. — Ndonjëherë kërcej."},
{de:"selten",sq:"rrallë",type:"Kohë",ex:"Ich gehe selten ins Kino. — Rrallë shkoj në kino."},
{de:"nie",sq:"kurrë",type:"Kohë",ex:"Ich rauche nie. — Kurrë nuk pi duhan."},
{de:"zweimal",sq:"dy herë",type:"Numër",ex:"Ich gehe zweimal pro Woche. — Shkoj dy herë në javë."},
{de:"einmal",sq:"një herë",type:"Numër",ex:"Ich war einmal in Paris. — Kam qenë një herë në Paris."},

// ── BODY & HEALTH (basic) ──
{de:"der Kopf",sq:"koka",type:"Trup",ex:"Mir tut der Kopf weh. — Më dhemb koka."},
{de:"das Gesicht",sq:"fytyra",type:"Trup",ex:"Er hat ein freundliches Gesicht. — Ai ka fytyrë të mirë."},
{de:"das Haar",sq:"floku",type:"Trup",ex:"Dein Haar ist schön. — Floku yt është i bukur."},
{de:"der Hals",sq:"fyti / qafa",type:"Trup",ex:"Mir tut der Hals weh. — Më dhemb fyti."},
{de:"die Schulter",sq:"supi",type:"Trup",ex:"Die Schulter schmerzt. — Supi dhemb."},
{de:"der Arm",sq:"krahu",type:"Trup",ex:"Ich habe den Arm gebrochen. — E kam thyer krahun."},
{de:"die Hand",sq:"dora",type:"Trup",ex:"Gib mir deine Hand! — Jepmë dorën!"},
{de:"der Finger",sq:"gishti",type:"Trup",ex:"Mein Finger blutet. — Gishti im gjakon."},
{de:"der Rücken",sq:"shpina",type:"Trup",ex:"Ich habe Rückenschmerzen. — Kam dhimbje shpine."},
{de:"der Bauch",sq:"barku",type:"Trup",ex:"Mir tut der Bauch weh. — Më dhemb barku."},
{de:"das Bein",sq:"këmba",type:"Trup",ex:"Das Bein ist gebrochen. — Këmba është thyer."},
{de:"der Fuß",sq:"këmba (poshtë)",type:"Trup",ex:"Mein Fuß tut weh. — Këmba ime dhemb."},
{de:"das Knie",sq:"gjuri",type:"Trup",ex:"Das Knie ist geschwollen. — Gjuri është i ënjtur."},
{de:"das Herz",sq:"zemra",type:"Trup",ex:"Das Herz schlägt schnell. — Zemra rrah shpejt."},
{de:"das Blut",sq:"gjaku",type:"Trup",ex:"Er hat Blut verloren. — Ai ka humbur gjak."},
{de:"der Zahnarzt",sq:"dentisti",type:"Shëndet",ex:"Ich gehe zum Zahnarzt. — Shkoj te dentisti."},
{de:"die Apotheke",sq:"farmacia",type:"Shëndet",ex:"Die Apotheke ist offen. — Farmacia është e hapur."},
{de:"das Medikament",sq:"ilaçi",type:"Shëndet",ex:"Ich nehme Medikamente. — Marr ilaçe."},
{de:"die Spritze",sq:"injeksioni / shiringa",type:"Shëndet",ex:"Die Ärztin gibt eine Spritze. — Mjekja jep injeksion."},
{de:"das Fieber",sq:"temperatura / ethet",type:"Shëndet",ex:"Ich habe 38 Grad Fieber. — Kam 38 gradë temperaturë."},

// ── HOME & SURROUNDINGS ──
{de:"die Adresse",sq:"adresa",type:"Vend",ex:"Wie ist Ihre Adresse? — Cila është adresa juaj?"},
{de:"die Postleitzahl",sq:"kodi postar",type:"Vend",ex:"Die Postleitzahl ist 10115. — Kodi postar është 10115."},
{de:"die Stadt",sq:"qyteti",type:"Vend",ex:"Ich wohne in einer großen Stadt. — Jetoj në qytet të madh."},
{de:"das Dorf",sq:"fshati",type:"Vend",ex:"Er kommt aus einem kleinen Dorf. — Ai vjen nga fshat i vogël."},
{de:"das Land",sq:"vendi / fshati (jo qyteti)",type:"Vend",ex:"Auf dem Land ist es ruhig. — Në fshat është e qetë."},
{de:"die Hauptstadt",sq:"kryeqyteti",type:"Vend",ex:"Berlin ist die Hauptstadt. — Berlini është kryeqyteti."},
{de:"das Ausland",sq:"jashtë vendit",type:"Vend",ex:"Ich lebe im Ausland. — Jetoj jashtë vendit."},
{de:"die Heimat",sq:"atdheu / vendlindja",type:"Vend",ex:"Meine Heimat ist Albanien. — Atdheu im është Shqipëria."},
{de:"die Nachbarschaft",sq:"fqinjësia",type:"Vend",ex:"Die Nachbarschaft ist ruhig. — Fqinjësia është e qetë."},
{de:"das Stockwerk",sq:"kati",type:"Shtëpi",ex:"Ich wohne im dritten Stockwerk. — Jetoj në katin e tretë."},
{de:"der Aufzug",sq:"ashensori",type:"Shtëpi",ex:"Der Aufzug ist kaputt. — Ashensori është i prishur."},
{de:"der Eingang",sq:"hyrja",type:"Shtëpi",ex:"Der Eingang ist vorne. — Hyrja është para."},
{de:"der Ausgang",sq:"dalja",type:"Shtëpi",ex:"Wo ist der Ausgang? — Ku është dalja?"},
{de:"das Erdgeschoss",sq:"kati i parë / përdhes",type:"Shtëpi",ex:"Ich wohne im Erdgeschoss. — Jetoj në katin e parë."},
{de:"der Keller",sq:"bodrumin",type:"Shtëpi",ex:"Im Keller ist es kühl. — Në bodrum është i freskët."},

// ── FOOD & SHOPPING ──
{de:"die Bäckerei",sq:"furra e bukës",type:"Vend",ex:"Ich kaufe Brot in der Bäckerei. — Blej bukë në furrë."},
{de:"die Metzgerei",sq:"kasapi",type:"Vend",ex:"An der Metzgerei kaufe ich Fleisch. — Tek kasapi blej mish."},
{de:"der Supermarkt",sq:"supermarketi",type:"Vend",ex:"Ich gehe in den Supermarkt. — Shkoj në supermarket."},
{de:"die Kasse",sq:"arka",type:"Blerje",ex:"An der Kasse zahle ich. — Te arka paguaj."},
{de:"das Sonderangebot",sq:"oferta speciale",type:"Blerje",ex:"Das ist ein Sonderangebot! — Kjo është ofertë speciale!"},
{de:"der Rabatt",sq:"zbritja",type:"Blerje",ex:"Gibt es einen Rabatt? — Ka zbritje?"},
{de:"das Kleingeld",sq:"monedhat / kusuri",type:"Blerje",ex:"Haben Sie Kleingeld? — Keni monedha?"},
{de:"die Quittung",sq:"fatura / kuponi",type:"Blerje",ex:"Darf ich die Quittung haben? — Mund ta kem faturën?"},
{de:"umtauschen",sq:"të ndërrosh (mall)",type:"Blerje",ex:"Ich möchte das umtauschen. — Dua ta ndërroj."},
{de:"zurückgeben",sq:"të kthesh (mall)",type:"Blerje",ex:"Ich möchte das zurückgeben. — Dua ta kthej."},
{de:"das Pfund",sq:"gjysmë kilogram",type:"Sasi",ex:"Ein Pfund Tomaten. — Gjysmë kile domate."},
{de:"das Gramm",sq:"gram",type:"Sasi",ex:"200 Gramm Käse. — 200 gram djathë."},
{de:"die Flasche",sq:"shishja",type:"Enë",ex:"Eine Flasche Wasser. — Një shishe ujë."},
{de:"die Dose",sq:"kanaçe / kutia",type:"Enë",ex:"Eine Dose Cola. — Një kanaçe Cola."},
{de:"der Becher",sq:"kupa / gotat e plastikës",type:"Enë",ex:"Ein Becher Joghurt. — Një kupë kos."},
{de:"die Packung",sq:"paketa",type:"Enë",ex:"Eine Packung Nudeln. — Një paketë makarona."},

// ── TRANSPORT & TRAVEL (basic) ──
{de:"der Führerschein",sq:"patenta",type:"Dokument",ex:"Ich habe einen Führerschein. — Kam patentë."},
{de:"die Tankstelle",sq:"stacioni i karburantit",type:"Transport",ex:"Ich tanke an der Tankstelle. — Mbush karburant."},
{de:"der Stau",sq:"bllokimi i trafikut",type:"Transport",ex:"Es gibt einen Stau. — Ka bllokade trafiku."},
{de:"das Navi",sq:"navigacioni (GPS)",type:"Transport",ex:"Das Navi sagt: links abbiegen. — Navigacioni thotë: kthehu majtas."},
{de:"die Haltestelle",sq:"stacioni i autobusit",type:"Transport",ex:"Die Haltestelle ist hier. — Stacioni është këtu."},
{de:"die Endstation",sq:"stacioni final",type:"Transport",ex:"Wir fahren bis zur Endstation. — Udhëtojmë deri në stacionin final."},
{de:"der Fahrplan",sq:"orari i trenave/autobusit",type:"Transport",ex:"Ich schaue den Fahrplan an. — Shikoj orarin."},
{de:"die Abfahrt",sq:"nisja",type:"Transport",ex:"Die Abfahrt ist um 10 Uhr. — Nisja është në orën 10."},
{de:"die Ankunft",sq:"mbrrinia",type:"Transport",ex:"Die Ankunft ist um 12 Uhr. — Mbrrinia është në orën 12."},
{de:"der Fahrgast",sq:"udhëtari",type:"Transport",ex:"Die Fahrgäste warten. — Udhëtarët presin."},
{de:"der Fahrer",sq:"shoferi",type:"Transport",ex:"Der Fahrer ist freundlich. — Shoferi është i mirë."},
{de:"der Fußgänger",sq:"këmbësori",type:"Transport",ex:"Achtung Fußgänger! — Kujdes këmbësorë!"},
{de:"die Ampel",sq:"semafori",type:"Transport",ex:"Die Ampel ist rot. — Semafori është i kuq."},
{de:"der Zebrastreifen",sq:"kalimi i këmbësorëve",type:"Transport",ex:"Geh über den Zebrastreifen! — Kalo mbi vijat e këmbësorëve!"},
{de:"abbiegen",sq:"të kthehesh",type:"Transport",ex:"Hier rechts abbiegen! — Këtu kthehu djathtas!"},
{de:"geradeaus",sq:"drejt",type:"Drejtim",ex:"Gehen Sie geradeaus! — Ecni drejt!"},
{de:"die Kurve",sq:"kthesa",type:"Transport",ex:"Vorsicht bei der Kurve! — Kujdes në kthesë!"},

// ── SCHOOL & LEARNING ──
{de:"die Grundschule",sq:"shkolla fillore",type:"Arsim",ex:"Ich war vier Jahre in der Grundschule. — Isha katër vjet në shkollë fillore."},
{de:"das Gymnasium",sq:"gjimnazi",type:"Arsim",ex:"Er geht ins Gymnasium. — Ai shkon në gjimnaz."},
{de:"der Unterricht",sq:"mësimi / ora",type:"Arsim",ex:"Der Unterricht beginnt um 8 Uhr. — Mësimi fillon në orën 8."},
{de:"die Pause",sq:"pushimi (shkollor)",type:"Arsim",ex:"In der Pause spielen die Kinder. — Gjatë pushimit fëmijët luajnë."},
{de:"das Fach",sq:"lënda",type:"Arsim",ex:"Mein Lieblingsfach ist Mathematik. — Lënda ime e preferuar është matematika."},
{de:"die Mathematik",sq:"matematika",type:"Lëndë",ex:"Mathematik ist schwer. — Matematika është e vështirë."},
{de:"die Geschichte",sq:"historia",type:"Lëndë",ex:"Ich mag Geschichte. — Më pëlqen historia."},
{de:"die Biologie",sq:"biologjia",type:"Lëndë",ex:"Wir lernen über Pflanzen in Biologie. — Mësojmë mbi bimët në biologji."},
{de:"die Chemie",sq:"kimia",type:"Lëndë",ex:"Chemie ist mein schwächstes Fach. — Kimia është lënda ime më e dobët."},
{de:"die Physik",sq:"fizika",type:"Lëndë",ex:"Physik macht mir Spaß. — Fizika më pëlqen."},
{de:"die Kunst",sq:"arti",type:"Lëndë",ex:"Im Kunstunterricht malen wir. — Në orën e artit pikturojmë."},
{de:"die Musik",sq:"muzika (lënda)",type:"Lëndë",ex:"Musik macht glücklich. — Muzika bën të lumtur."},
{de:"der Direktor",sq:"drejtori",type:"Shkollë",ex:"Der Direktor kommt. — Drejtori vjen."},
{de:"die Klasse",sq:"klasa",type:"Shkollë",ex:"Ich bin in Klasse 10. — Jam në klasën 10."},
{de:"der Schüler",sq:"nxënësi",type:"Shkollë",ex:"Die Schüler lernen fleißig. — Nxënësit mësojnë me zell."},
{de:"der Zeugnis",sq:"dëftesa",type:"Shkollë",ex:"Mein Zeugnis ist gut. — Dëftesa ime është e mirë."},
{de:"die Note",sq:"nota",type:"Shkollë",ex:"Eine gute Note bekommen. — Marr notë të mirë."},
{de:"abschreiben",sq:"të kopjosh",type:"Shkollë",ex:"Abschreiben ist verboten! — Kopjimi ndalohet!"},

// ── WEATHER & NATURE ──
{de:"das Gewitter",sq:"stuhia me rrufeja",type:"Mot",ex:"Ein Gewitter zieht auf. — Po vjen stuhi."},
{de:"der Blitz",sq:"vetëtima",type:"Mot",ex:"Ein Blitz! — Vetëtimë!"},
{de:"der Donner",sq:"bubullima",type:"Mot",ex:"Donner und Blitz. — Bubullima dhe vetëtima."},
{de:"der Nebel",sq:"mjegulla",type:"Mot",ex:"Heute ist viel Nebel. — Sot ka shumë mjegull."},
{de:"der Frost",sq:"ngrica",type:"Mot",ex:"Heute Nacht gibt es Frost. — Sonte ka ngrica."},
{de:"das Eis",sq:"akulli / ngrica",type:"Mot",ex:"Vorsicht, Eis auf der Straße! — Kujdes, akull në rrugë!"},
{de:"tauen",sq:"të shkrihet (bora/akulli)",type:"Mot",ex:"Der Schnee taut. — Bora shkrihet."},
{de:"scheinen",sq:"të ndriçojë (dielli)",type:"Mot",ex:"Die Sonne scheint. — Dielli ndriçon."},
{de:"bewölkt",sq:"me re",type:"Mot",ex:"Es ist bewölkt. — Është me re."},
{de:"das Klima",sq:"klima",type:"Mot",ex:"Das Klima ändert sich. — Klima po ndryshon."},
{de:"der Bach",sq:"përroqi",type:"Natyrë",ex:"Ein kleiner Bach fließt hier. — Një përua i vogël rrjedh këtu."},
{de:"der Wald",sq:"pylli",type:"Natyrë",ex:"Im Wald ist es ruhig. — Në pyll është e qetë."},
{de:"die Wiese",sq:"livadhi",type:"Natyrë",ex:"Die Kühe grasen auf der Wiese. — Lopët kullosin në livadh."},
{de:"der Hügel",sq:"kodrina",type:"Natyrë",ex:"Auf dem Hügel gibt es eine Kirche. — Në kodrinë ka kishë."},
{de:"die Küste",sq:"bregu i detit",type:"Natyrë",ex:"Wir fahren an die Küste. — Shkojmë në bregdet."},
{de:"die Insel",sq:"ishulli",type:"Natyrë",ex:"Ich träume von einer Insel. — Ëndërroj një ishull."},

// ── FEELINGS & EMOTIONS ──
{de:"die Freude",sq:"gëzimi",type:"Emocion",ex:"Das macht mir Freude. — Kjo më gëzon."},
{de:"die Trauer",sq:"trishtimi",type:"Emocion",ex:"Die Trauer ist groß. — Trishtimi është i madh."},
{de:"die Angst",sq:"frika",type:"Emocion",ex:"Ich habe Angst. — Kam frikë."},
{de:"die Wut",sq:"zemërimi",type:"Emocion",ex:"Die Wut ist zu groß. — Zemërimi është shumë i madh."},
{de:"die Überraschung",sq:"befasia",type:"Emocion",ex:"Was für eine Überraschung! — Çfarë befasie!"},
{de:"die Enttäuschung",sq:"zhgënjimi",type:"Emocion",ex:"Das ist eine Enttäuschung. — Kjo është zhgënjim."},
{de:"die Hoffnung",sq:"shpresa",type:"Emocion",ex:"Ich habe Hoffnung. — Kam shpresë."},
{de:"die Liebe",sq:"dashuria",type:"Emocion",ex:"Liebe macht blind. — Dashuria verbëron."},
{de:"der Hass",sq:"urrejtja",type:"Emocion",ex:"Hass ist destruktiv. — Urrejtja është destruktive."},
{de:"die Einsamkeit",sq:"vetmia",type:"Emocion",ex:"Einsamkeit schmerzt. — Vetmia dhemb."},
{de:"die Eifersucht",sq:"xhelozia",type:"Emocion",ex:"Eifersucht ist ein Problem. — Xhelozia është problem."},
{de:"die Zufriedenheit",sq:"kënaqësia",type:"Emocion",ex:"Ich fühle Zufriedenheit. — Ndihem i kënaqur."},
{de:"sich freuen über",sq:"të gëzohesh për",type:"Emocion",ex:"Ich freue mich über dich. — Gëzohem për ty."},
{de:"sich ärgern über",sq:"të mërzitesh për",type:"Emocion",ex:"Ich ärgere mich über den Lärm. — Mërzitem nga zhurma."},
{de:"sich sorgen um",sq:"të shqetësohesh për",type:"Emocion",ex:"Ich sorge mich um dich. — Shqetësohem për ty."},
{de:"sich schämen",sq:"të kesh turp",type:"Emocion",ex:"Ich schäme mich. — Kam turp."},
{de:"stolz sein auf",sq:"të jesh krenar për",type:"Emocion",ex:"Ich bin stolz auf dich! — Jam krenar për ty!"},
{de:"neidisch sein",sq:"të jesh i ziliqar",type:"Emocion",ex:"Er ist neidisch. — Ai është i ziliqar."},

// ── SOCIAL LIFE ──
{de:"der Freund",sq:"shoku / i dashuri",type:"Marrëdhënie",ex:"Das ist mein Freund. — Ky është shoku im."},
{de:"die Freundin",sq:"shoqja / e dashura",type:"Marrëdhënie",ex:"Das ist meine Freundin. — Kjo është shoqja ime."},
{de:"der Bekannte",sq:"i njohuri",type:"Marrëdhënie",ex:"Das ist ein Bekannter. — Ky është i njohur."},
{de:"der Nachbar",sq:"fqinji",type:"Marrëdhënie",ex:"Mein Nachbar ist nett. — Fqinji im është i mirë."},
{de:"das Paar",sq:"çifti",type:"Marrëdhënie",ex:"Das Paar tanzt schön. — Çifti kërcon bukur."},
{de:"die Hochzeit",sq:"dasma",type:"Event",ex:"Ich gehe zu einer Hochzeit. — Shkoj në dasmë."},
{de:"die Geburt",sq:"lindja",type:"Event",ex:"Die Geburt eines Kindes. — Lindja e një fëmije."},
{de:"der Tod",sq:"vdekja",type:"Event",ex:"Der Tod ist unvermeidlich. — Vdekja është e pashmangshme."},
{de:"das Fest",sq:"festa",type:"Event",ex:"Wir feiern ein großes Fest. — Festojmë festë të madhe."},
{de:"die Party",sq:"festa (informale)",type:"Event",ex:"Kommst du zur Party? — Vjen në festë?"},
{de:"die Einladung",sq:"ftesa",type:"Event",ex:"Ich habe eine Einladung. — Kam ftesë."},
{de:"das Geschenk",sq:"dhurata",type:"Event",ex:"Was für ein schönes Geschenk! — Çfarë dhuraje e bukur!"},
{de:"der Glückwunsch",sq:"urimet",type:"Event",ex:"Herzlichen Glückwunsch! — Urime të sinqerta!"},
{de:"die Feier",sq:"ceremonia / festimi",type:"Event",ex:"Eine kleine Feier. — Festim i vogël."},

// ── COMMUNICATION PHRASES ──
{de:"Wie bitte?",sq:"Si? (nuk dëgjova)",type:"Komunikim",ex:"Wie bitte? Ich habe das nicht verstanden. — Si? Nuk e kuptova."},
{de:"Können Sie das wiederholen?",sq:"Mund ta përsërisni?",type:"Komunikim",ex:"Können Sie das bitte wiederholen? — Mund ta përsërisni ju lutem?"},
{de:"Was bedeutet das?",sq:"Çfarë do të thotë kjo?",type:"Komunikim",ex:"Was bedeutet dieses Wort? — Çfarë do të thotë kjo fjalë?"},
{de:"Wie schreibt man das?",sq:"Si shkruhet kjo?",type:"Komunikim",ex:"Wie schreibt man Ihren Namen? — Si shkruhet emri juaj?"},
{de:"Ich verstehe nicht.",sq:"Nuk kuptoj.",type:"Komunikim",ex:"Es tut mir leid, ich verstehe nicht. — Më vjen keq, nuk kuptoj."},
{de:"Ich spreche wenig Deutsch.",sq:"Flas pak gjermanisht.",type:"Komunikim",ex:"Ich spreche leider wenig Deutsch. — Fatkeqësisht flas pak gjermanisht."},
{de:"Sprechen Sie bitte langsamer!",sq:"Flisni ju lutem më ngadalë!",type:"Komunikim",ex:"Können Sie bitte langsamer sprechen? — Mund të flisni ju lutem më ngadalë?"},
{de:"Das stimmt.",sq:"Kjo është e saktë.",type:"Komunikim",ex:"Ja, das stimmt. — Po, kjo është e saktë."},
{de:"Das stimmt nicht.",sq:"Kjo nuk është e saktë.",type:"Komunikim",ex:"Nein, das stimmt nicht. — Jo, kjo nuk është e saktë."},
{de:"Keine Ahnung.",sq:"Nuk kam ide.",type:"Komunikim",ex:"Keine Ahnung! — Nuk kam ide!"},
{de:"Das weiß ich nicht.",sq:"Nuk e di.",type:"Komunikim",ex:"Das weiß ich leider nicht. — Fatkeqësisht nuk e di."},
{de:"Gern geschehen!",sq:"S'ka gjë! / Me kënaqësi!",type:"Komunikim",ex:"Danke! — Gern geschehen! — Faleminderit! — S'ka gjë!"},
{de:"Macht nichts!",sq:"Nuk ka gjë!",type:"Komunikim",ex:"Entschuldigung! — Macht nichts! — Falje! — Nuk ka gjë!"},
{de:"Alles klar!",sq:"Gjithçka e qartë!",type:"Komunikim",ex:"Alles klar, bis morgen! — Gjithçka e qartë, deri nesër!"},
{de:"Na ja...",sq:"Hmm / Nuk e di...",type:"Komunikim",ex:"Na ja, das ist kompliziert. — Hmm, kjo është e komplikuar."},
{de:"Genau!",sq:"Pikërisht!",type:"Komunikim",ex:"Genau das meine ich! — Pikërisht këtë kuptoj!"},
{de:"Gar nicht!",sq:"Aspak!",type:"Komunikim",ex:"Nicht schlimm? — Gar nicht! — Nuk është keq? — Aspak!"},
{de:"Auf jeden Fall!",sq:"Patjetër!",type:"Komunikim",ex:"Kommst du? — Auf jeden Fall! — Vjen? — Patjetër!"},
{de:"Vielleicht.",sq:"Ndoshta.",type:"Komunikim",ex:"Kommst du? — Vielleicht. — Vjen? — Ndoshta."},
{de:"Das kommt drauf an.",sq:"Varet.",type:"Komunikim",ex:"Ist das gut? — Das kommt drauf an. — A është mirë? — Varet."},
],

// ═══════════════════════════
// A2 EXTENSION — 650 words
// For: basic communicators
// Focus: work, health, housing, past, opinions
// ═══════════════════════════

A2: [

// ── VERBS: More complex actions ──
{de:"ausdrücken",sq:"të shprehësh",type:"Folje",ex:"Ich kann meine Gedanken nicht ausdrücken. — Nuk mund t'i shpreh mendimet e mia."},
{de:"erklären",sq:"të shpjegosh",type:"Folje",ex:"Kannst du das erklären? — Mund ta shpjegosh?"},
{de:"beschreiben",sq:"të përshkruash",type:"Folje",ex:"Beschreib mir das Bild. — Përshkruaje figurën."},
{de:"vorlesen",sq:"të lexosh me zë",type:"Folje",ex:"Er liest der Klasse vor. — Ai lexon me zë para klasës."},
{de:"nachschlagen",sq:"të kërkosh (në fjalor)",type:"Folje",ex:"Ich schlage das Wort nach. — Kërkoj fjalën."},
{de:"übersetzen",sq:"të përkthesh",type:"Folje",ex:"Kannst du das übersetzen? — Mund ta përkthesh?"},
{de:"unterschreiben",sq:"të nënshkruash",type:"Folje",ex:"Bitte unterschreiben Sie hier. — Nënshkruani këtu."},
{de:"ausfüllen",sq:"të plotësosh",type:"Folje",ex:"Fülle das Formular aus! — Plotëso formularin!"},
{de:"beantragen",sq:"të aplikosh / kërkosh zyrtarisht",type:"Folje",ex:"Ich beantrage ein Visum. — Aplikoj për vizë."},
{de:"genehmigen",sq:"të miratosh",type:"Folje",ex:"Der Antrag wurde genehmigt. — Aplikimi u miratua."},
{de:"ablehnen",sq:"të refuzosh",type:"Folje",ex:"Der Antrag wurde abgelehnt. — Aplikimi u refuzua."},
{de:"beschweren",sq:"të ankohesh",type:"Folje",ex:"Ich möchte mich beschweren. — Dua të ankohem."},
{de:"entschuldigen",sq:"të fajte / falë",type:"Folje",ex:"Ich entschuldige mich. — Kërkoj falje."},
{de:"gratulieren",sq:"të urojësh",type:"Folje",ex:"Ich gratuliere dir! — Të uroj!"},
{de:"einladen",sq:"të ftosh",type:"Folje",ex:"Ich lade dich ein. — Të ftoj."},
{de:"sich verabschieden",sq:"të thuash lamtumirë",type:"Folje",ex:"Ich verabschiede mich. — Ndahem."},
{de:"begrüßen",sq:"të përshëndesësh",type:"Folje",ex:"Ich begrüße die Gäste. — Përshëndes mysafirët."},
{de:"sich treffen",sq:"të takohesh",type:"Folje",ex:"Wir treffen uns morgen. — Takohemi nesër."},
{de:"verabreden",sq:"të caktosh takim",type:"Folje",ex:"Wir haben uns verabredet. — Kemi caktuar takim."},
{de:"absagen",sq:"të anulosh",type:"Folje",ex:"Ich muss leider absagen. — Fatkeqësisht duhet të anullo."},
{de:"zusagen",sq:"të konfirmosh / pranosh",type:"Folje",ex:"Ich sage zu! — Pranoj!"},
{de:"sich erkundigen",sq:"të informohesh",type:"Folje",ex:"Ich erkundige mich. — Informohem."},
{de:"nachfragen",sq:"të pyesësh sërish",type:"Folje",ex:"Darf ich nachfragen? — Mund të ripys?"},
{de:"wiederholen",sq:"të përsëritësh",type:"Folje",ex:"Kannst du das wiederholen? — Mund ta përsëritësh?"},
{de:"zusammenfassen",sq:"të përmbledhësh",type:"Folje",ex:"Kannst du das zusammenfassen? — Mund ta përmbledhësh?"},
{de:"betonen",sq:"të theksosh",type:"Folje",ex:"Ich möchte betonen, dass... — Dua të theksoj se..."},
{de:"ergänzen",sq:"të plotësosh / shtosh",type:"Folje",ex:"Darf ich ergänzen? — Mund të shtoj?"},
{de:"korrigieren",sq:"të korrigjosh",type:"Folje",ex:"Korrigiere meine Fehler! — Korrigjo gabimet e mia!"},
{de:"verbessern",sq:"të përmirësosh",type:"Folje",ex:"Ich möchte mein Deutsch verbessern. — Dua të përmirësoj gjermanishten."},
{de:"zunehmen",sq:"të shtosh peshë",type:"Folje",ex:"Ich habe zugenommen. — Kam shtuar peshë."},
{de:"abnehmen",sq:"të humbësh peshë",type:"Folje",ex:"Ich möchte abnehmen. — Dua të humbas peshë."},
{de:"sich bewegen",sq:"të lëvizësh",type:"Folje",ex:"Ich muss mich mehr bewegen. — Duhet të lëviz më shumë."},
{de:"trainieren",sq:"të stërvitësh",type:"Folje",ex:"Ich trainiere dreimal pro Woche. — Stërvitem tre herë në javë."},
{de:"schonen",sq:"të kursesh / kujdesesh",type:"Folje",ex:"Schone deinen Rücken! — Kujdesu për shpinën!"},
{de:"erholen",sq:"të çlodheris",type:"Folje",ex:"Ich erhole mich am Wochenende. — Çlodhem fundjavën."},
{de:"einschlafen",sq:"të flesh / zë gjumi",type:"Folje",ex:"Ich schlafe schnell ein. — Fle shpejt."},
{de:"aufwachen",sq:"të zgjohesh",type:"Folje",ex:"Ich wache früh auf. — Zgjohem herët."},
{de:"verbringen",sq:"të kalosh (kohën)",type:"Folje",ex:"Ich verbringe viel Zeit zu Hause. — Kaloj shumë kohë në shtëpi."},
{de:"ausgeben",sq:"të shpenzosh",type:"Folje",ex:"Ich gebe zu viel Geld aus. — Shpenzoj shumë para."},
{de:"einsparen",sq:"të kursesh",type:"Folje",ex:"Ich muss Geld einsparen. — Duhet të kursej para."},
{de:"leihen",sq:"të huazosh",type:"Folje",ex:"Kannst du mir Geld leihen? — Mund të ma huazosh para?"},
{de:"borgen",sq:"të marrësh hua",type:"Folje",ex:"Ich habe Geld geborgt. — Kam marrë hua para."},
{de:"zurückzahlen",sq:"të kthesh (borxhin)",type:"Folje",ex:"Ich zahle das Geld zurück. — Kthej paratë."},
{de:"mieten",sq:"të marrësh me qira",type:"Folje",ex:"Ich miete eine Wohnung. — Marr banesë me qira."},
{de:"vermieten",sq:"të japësh me qira",type:"Folje",ex:"Er vermietet Zimmer. — Ai jep dhoma me qira."},
{de:"renovieren",sq:"të rinovosh",type:"Folje",ex:"Wir renovieren die Küche. — Rinovojmë kuzhinën."},
{de:"umziehen",sq:"të ndërrosh banesë",type:"Folje",ex:"Ich ziehe nächsten Monat um. — Ndërroj banesë muajin tjetër."},
{de:"streiten",sq:"të grindësh",type:"Folje",ex:"Wir streiten manchmal. — Ndonjëherë grindhemi."},
{de:"versöhnen",sq:"të pajtohesh",type:"Folje",ex:"Wir haben uns versöhnt. — U pajtëm."},
{de:"ärgern",sq:"të zemërojë / mërzisë",type:"Folje",ex:"Das ärgert mich. — Kjo më zemëron."},
{de:"überraschen",sq:"të befasojë",type:"Folje",ex:"Das hat mich überrascht. — Kjo më ka befasuar."},
{de:"enttäuschen",sq:"të zhgënjejë",type:"Folje",ex:"Du hast mich enttäuscht. — Më ke zhgënjyer."},
{de:"beeindrucken",sq:"të bëjë mbresë",type:"Folje",ex:"Das hat mich beeindruckt. — Kjo më ka bërë mbresë."},

// ── COMMUNICATION at A2 level ──
{de:"Ich bin anderer Meinung.",sq:"Jam i mendimit tjetër.",type:"Komunikim A2",ex:"Ich bin anderer Meinung als du. — Jam i mendimit tjetër nga ti."},
{de:"Das sehe ich anders.",sq:"Unë e shoh ndryshe.",type:"Komunikim A2",ex:"Das sehe ich ein bisschen anders. — Unë e shoh pak ndryshe."},
{de:"Ich glaube, dass...",sq:"Besoj se...",type:"Komunikim A2",ex:"Ich glaube, dass das falsch ist. — Besoj se kjo është e gabuar."},
{de:"Meiner Meinung nach...",sq:"Sipas mendimit tim...",type:"Komunikim A2",ex:"Meiner Meinung nach ist das zu teuer. — Sipas mendimit tim kjo është shumë e shtrenjtë."},
{de:"Ich finde, dass...",sq:"Mendoj se...",type:"Komunikim A2",ex:"Ich finde, dass wir reden sollten. — Mendoj se duhet të flasim."},
{de:"Ich bin sicher, dass...",sq:"Jam i sigurt se...",type:"Komunikim A2",ex:"Ich bin sicher, dass du das schaffst. — Jam i sigurt se do ta arrish."},
{de:"Ich bezweifle, dass...",sq:"Dyshoj se...",type:"Komunikim A2",ex:"Ich bezweifle, dass das stimmt. — Dyshoj nëse kjo është e saktë."},
{de:"Einerseits... andererseits...",sq:"Nga njëra anë... nga ana tjetër...",type:"Komunikim A2",ex:"Einerseits ist es gut, andererseits teuer. — Nga njëra anë është mirë, nga ana tjetër e shtrenjtë."},
{de:"Außerdem...",sq:"Veç kësaj...",type:"Komunikim A2",ex:"Außerdem ist es zu weit. — Veç kësaj është shumë larg."},
{de:"Deshalb...",sq:"Prandaj...",type:"Komunikim A2",ex:"Deshalb mache ich das. — Prandaj e bëj këtë."},
{de:"Trotzdem...",sq:"Megjithatë...",type:"Komunikim A2",ex:"Trotzdem gehe ich. — Megjithatë shkoj."},
{de:"Obwohl...",sq:"Megjithëse...",type:"Komunikim A2",ex:"Obwohl es regnet, gehe ich spazieren. — Megjithëse bie shi, shëtis."},
{de:"Weil...",sq:"Sepse...",type:"Komunikim A2",ex:"Ich lerne Deutsch, weil ich hier lebe. — Mësoj gjermanisht sepse jetoj këtu."},
{de:"Damit...",sq:"Që të...",type:"Komunikim A2",ex:"Ich lerne, damit ich bestehe. — Mësoj që të kaloj."},
{de:"Wenn...",sq:"Nëse / Kur...",type:"Komunikim A2",ex:"Wenn du Zeit hast, ruf mich an. — Nëse ke kohë, telefononi."},
{de:"Falls...",sq:"Nëse (kushtëzim)...",type:"Komunikim A2",ex:"Falls du Probleme hast, frag mich. — Nëse ke probleme, pyesni."},
{de:"Sobald...",sq:"Sapo...",type:"Komunikim A2",ex:"Sobald ich fertig bin, komme ich. — Sapo të mbaroj, vij."},
{de:"Bevor...",sq:"Para se...",type:"Komunikim A2",ex:"Bevor du gehst, ruf mich an. — Para se të shkosh, telefononi."},
{de:"Nachdem...",sq:"Pasi...",type:"Komunikim A2",ex:"Nachdem ich gegessen habe, schlafe ich. — Pasi hëngra, fle."},
{de:"Während...",sq:"Ndërkohë që...",type:"Komunikim A2",ex:"Während ich koche, höre ich Musik. — Ndërkohë që gatuaj, dëgjoj muzikë."},

// ── WORK & CAREER ──
{de:"die Karriere",sq:"karriera",type:"Punë",ex:"Ich mache Karriere. — Po ndërtoj karrierë."},
{de:"die Ausbildung",sq:"shkollimi profesional",type:"Punë",ex:"Ich mache eine Ausbildung. — Bëj shkollim profesional."},
{de:"das Praktikum",sq:"praktika",type:"Punë",ex:"Ich mache ein Praktikum. — Bëj praktikë."},
{de:"der Lebenslauf",sq:"CV",type:"Punë",ex:"Mein Lebenslauf ist aktuell. — CV-ja ime është e azhurnuar."},
{de:"das Anschreiben",sq:"letra e motivimit",type:"Punë",ex:"Das Anschreiben ist wichtig. — Letra e motivimit është e rëndësishme."},
{de:"das Vorstellungsgespräch",sq:"intervista",type:"Punë",ex:"Ich habe ein Vorstellungsgespräch. — Kam intervistë."},
{de:"die Stellenanzeige",sq:"shpallja e punës",type:"Punë",ex:"Ich lese Stellenanzeigen. — Lexoj shpallje pune."},
{de:"der Arbeitsvertrag",sq:"kontrata e punës",type:"Punë",ex:"Ich unterschreibe den Arbeitsvertrag. — Nënshkruaj kontratën e punës."},
{de:"die Probezeit",sq:"periudha provuese",type:"Punë",ex:"Ich bin noch in der Probezeit. — Jam ende në periudhën provuese."},
{de:"die Kündigung",sq:"largimi / dorëheqja",type:"Punë",ex:"Er hat eine Kündigung bekommen. — Ai ka marrë largim nga puna."},
{de:"das Arbeitszeugnis",sq:"referenca e punës",type:"Punë",ex:"Ich brauche ein Arbeitszeugnis. — Kam nevojë për referencë pune."},
{de:"die Beförderung",sq:"promovimi",type:"Punë",ex:"Ich habe eine Beförderung. — Kam promovim."},
{de:"die Abteilung",sq:"departamenti",type:"Punë",ex:"Ich bin in der IT-Abteilung. — Jam në departamentin IT."},
{de:"die Besprechung",sq:"mbledhja",type:"Punë",ex:"Ich habe um 10 Uhr eine Besprechung. — Në orën 10 kam mbledhje."},
{de:"das Protokoll",sq:"procesverbali",type:"Punë",ex:"Wer schreibt das Protokoll? — Kush shkruan procesverbal?"},
{de:"die Präsentation",sq:"prezantimi",type:"Punë",ex:"Ich halte eine Präsentation. — Mbaj prezantim."},
{de:"der Auftrag",sq:"porosia / detyra",type:"Punë",ex:"Ich habe einen Auftrag. — Kam detyrë."},
{de:"die Deadline",sq:"afati",type:"Punë",ex:"Die Deadline ist morgen. — Afati është nesër."},
{de:"der Kunde",sq:"klienti",type:"Punë",ex:"Der Kunde hat Beschwerden. — Klienti ka ankesa."},
{de:"das Angebot",sq:"oferta",type:"Punë",ex:"Wir machen ein Angebot. — Bëjmë ofertë."},

// ── HOUSING & BUREAUCRACY ──
{de:"die Wohngemeinschaft",sq:"apartamenti i përbashkët (WG)",type:"Banim",ex:"Ich wohne in einer WG. — Jetoj në apartament të përbashkët."},
{de:"der Mitbewohner",sq:"bashkëbanori",type:"Banim",ex:"Mein Mitbewohner ist nett. — Bashkëbanori im është i mirë."},
{de:"die Einzimmerwohnung",sq:"apartamenti me 1 dhomë",type:"Banim",ex:"Ich suche eine Einzimmerwohnung. — Po kërkoj apartament me 1 dhomë."},
{de:"die Zweizimmerwohnung",sq:"apartamenti me 2 dhoma",type:"Banim",ex:"Die Zweizimmerwohnung kostet 800 Euro. — Apartamenti me 2 dhoma kushton 800 euro."},
{de:"die Kaution",sq:"depozita",type:"Banim",ex:"Die Kaution beträgt 2 Monatsmieten. — Depozita është 2 qira mujore."},
{de:"die Nebenkosten",sq:"shpenzimet shtesë",type:"Banim",ex:"Nebenkosten: Strom, Wasser, Heizung. — Shpenzime: rrymë, ujë, ngrohje."},
{de:"der Vermieter",sq:"qiradhënësi",type:"Banim",ex:"Mein Vermieter ist fair. — Qiradhënësi im është i drejtë."},
{de:"der Mieter",sq:"qiramarrësi",type:"Banim",ex:"Ich bin Mieter. — Jam qiramarrës."},
{de:"die Abrechnung",sq:"llogaria / fatura",type:"Banim",ex:"Die Jahresabrechnung ist da. — Llogaria vjetore ka ardhur."},
{de:"der Aufzug",sq:"ashensori",type:"Banim",ex:"Der Aufzug funktioniert nicht. — Ashensori nuk funksionon."},
{de:"die Hausordnung",sq:"rregullorja e shtëpisë",type:"Banim",ex:"Bitte beachten Sie die Hausordnung. — Ju lutem respektoni rregulloren."},
{de:"der Briefkasten",sq:"kutia postare",type:"Banim",ex:"Die Post ist im Briefkasten. — Posta është në kuti."},
{de:"das Einwohnermeldeamt",sq:"zyra e regjistrimit",type:"Burokraci",ex:"Ich gehe zum Einwohnermeldeamt. — Shkoj te zyra e regjistrimit."},
{de:"die Anmeldung",sq:"regjistrimi",type:"Burokraci",ex:"Die Anmeldung ist Pflicht. — Regjistrimi është i detyrueshëm."},
{de:"die Abmeldung",sq:"çregjistrimi",type:"Burokraci",ex:"Ich muss mich abmelden. — Duhet të çregjistrohem."},
{de:"der Personalausweis",sq:"karta e identitetit",type:"Dokument",ex:"Haben Sie Ihren Personalausweis? — E keni kartën e identitetit?"},
{de:"der Reisepass",sq:"pasaporta",type:"Dokument",ex:"Ich brauche meinen Reisepass. — Kam nevojë për pasaportë."},
{de:"die Aufenthaltserlaubnis",sq:"leja e qëndrimit",type:"Dokument",ex:"Meine Aufenthaltserlaubnis läuft ab. — Leja ime e qëndrimit po skadon."},
{de:"das Visum",sq:"viza",type:"Dokument",ex:"Ich brauche ein Visum. — Kam nevojë për vizë."},
{de:"der Antrag",sq:"aplikimi / kërkesa",type:"Burokraci",ex:"Ich stelle einen Antrag. — Bëj aplikim."},
{de:"das Formular",sq:"formulari",type:"Burokraci",ex:"Bitte füllen Sie das Formular aus. — Ju lutem plotësoni formularin."},
{de:"der Stempel",sq:"vula",type:"Burokraci",ex:"Der Brief braucht einen Stempel. — Letra nevojë për vulë."},
{de:"beglaubigt",sq:"i noterizuar",type:"Burokraci",ex:"Das Dokument muss beglaubigt sein. — Dokumenti duhet të jetë i noterizuar."},
{de:"das Original",sq:"origjinali",type:"Burokraci",ex:"Ich brauche das Original. — Kam nevojë për origjinalin."},
{de:"die Kopie",sq:"kopja",type:"Burokraci",ex:"Bitte machen Sie eine Kopie. — Ju lutem bëni kopje."},

// ── HEALTH & BODY (A2) ──
{de:"die Krankmeldung",sq:"lajmërimi i sëmundjes",type:"Shëndet",ex:"Ich schicke eine Krankmeldung. — Dërgoj lajmërim sëmundjeje."},
{de:"das Attest",sq:"vërtëtimi mjekësor",type:"Shëndet",ex:"Ich brauche ein Attest. — Kam nevojë për vërtëtim mjekësor."},
{de:"die Überweisung",sq:"referimi (te specialist)",type:"Shëndet",ex:"Ich habe eine Überweisung zum Spezialisten. — Kam referim te specialisti."},
{de:"die Krankenkasse",sq:"kasa e shëndetit",type:"Shëndet",ex:"Meine Krankenkasse zahlt das. — Kasa ime e shëndetit e paguan."},
{de:"der Zuzahlung",sq:"bashkëpagesa",type:"Shëndet",ex:"Ich zahle einen Eigenanteil. — Paguaj bashkëpagesë."},
{de:"allergisch gegen",sq:"alergj ndaj",type:"Shëndet",ex:"Ich bin allergisch gegen Penicillin. — Jam alergj ndaj penicilinës."},
{de:"unverträglich",sq:"intolerant (ushqim)",type:"Shëndet",ex:"Ich bin laktoseunverträglich. — Kam intolerancë ndaj laktozës."},
{de:"chronisch",sq:"kronik",type:"Shëndet",ex:"Eine chronische Krankheit. — Sëmundje kronike."},
{de:"der Blutdruck",sq:"presioni i gjakut",type:"Shëndet",ex:"Mein Blutdruck ist zu hoch. — Presioni im i gjakut është shumë i lartë."},
{de:"der Blutzucker",sq:"sheqeri në gjak",type:"Shëndet",ex:"Ich messe meinen Blutzucker. — Mat sheqerin në gjak."},
{de:"das Übergewicht",sq:"mbipeshja",type:"Shëndet",ex:"Übergewicht ist ungesund. — Mbipesha është e pashëndetshme."},
{de:"die Ernährung",sq:"ushqyerja",type:"Shëndet",ex:"Eine gesunde Ernährung ist wichtig. — Ushqyerja e shëndetshme është e rëndësishme."},
{de:"der Vegetarier",sq:"vegjetariani",type:"Ushqim",ex:"Ich bin Vegetarier. — Jam vegjetarian."},
{de:"der Veganer",sq:"vegani",type:"Ushqim",ex:"Er ist Veganer. — Ai është vegan."},

// ── MEDIA & TECHNOLOGY (A2) ──
{de:"das Smartphone",sq:"telefoni inteligjent",type:"Teknologji",ex:"Ich habe ein neues Smartphone. — Kam telefon të ri inteligjent."},
{de:"das Tablet",sq:"tableti",type:"Teknologji",ex:"Ich lese auf dem Tablet. — Lexoj në tablet."},
{de:"der Laptop",sq:"laptopin",type:"Teknologji",ex:"Mein Laptop ist kaputt. — Laptopi im është i prishur."},
{de:"der Drucker",sq:"printeri",type:"Teknologji",ex:"Der Drucker druckt nicht. — Printeri nuk printou."},
{de:"der Bildschirm",sq:"ekrani",type:"Teknologji",ex:"Der Bildschirm ist zu klein. — Ekrani është shumë i vogël."},
{de:"die Tastatur",sq:"tastiera",type:"Teknologji",ex:"Die Tastatur ist kaputt. — Tastiera është e prishur."},
{de:"die Maus",sq:"miu (kompjuterit)",type:"Teknologji",ex:"Die Maus funktioniert nicht. — Miu nuk funksionon."},
{de:"das WLAN",sq:"Wi-Fi",type:"Teknologji",ex:"Gibt es hier WLAN? — Ka Wi-Fi këtu?"},
{de:"das Passwort",sq:"fjalëkalimi",type:"Teknologji",ex:"Das Passwort ist falsch. — Fjalëkalimi është i gabuar."},
{de:"der Nutzername",sq:"emri i përdoruesit",type:"Teknologji",ex:"Gib deinen Nutzernamen ein. — Fut emrin e përdoruesit."},
{de:"einloggen",sq:"të identifikohesh",type:"Teknologji",ex:"Ich logge mich ein. — Identifikohem."},
{de:"ausloggen",sq:"të dalësh (nga llogaria)",type:"Teknologji",ex:"Vergiss nicht auszuloggen! — Mos harro të dalësh!"},
{de:"herunterladen",sq:"të shkarkosh",type:"Teknologji",ex:"Ich lade die App herunter. — Shkarkojë aplikacionin."},
{de:"hochladen",sq:"të ngarkosh",type:"Teknologji",ex:"Ich lade das Foto hoch. — Ngarkojë foton."},
{de:"löschen",sq:"të fshish",type:"Teknologji",ex:"Soll ich das löschen? — Duhet ta fshij?"},
{de:"die Nachricht",sq:"mesazhi",type:"Teknologji",ex:"Ich habe eine Nachricht bekommen. — Mora mesazh."},
{de:"die E-Mail",sq:"emaili",type:"Teknologji",ex:"Ich schreibe eine E-Mail. — Shkruaj email."},
{de:"der Anhang",sq:"bashkëngjitura",type:"Teknologji",ex:"Der Anhang ist zu groß. — Bashkëngjitura është shumë e madhe."},
{de:"das Konto",sq:"llogaria (online)",type:"Teknologji",ex:"Mein Konto ist gesperrt. — Llogaria ime është bllokuar."},
{de:"der Kommentar",sq:"komenti",type:"Media",ex:"Ich hinterlasse einen Kommentar. — Lë koment."},
{de:"teilen",sq:"të ndash (postim)",type:"Media",ex:"Ich teile diesen Artikel. — E ndaj këtë artikull."},
{de:"liken",sq:"të likosh",type:"Media",ex:"Ich like dein Foto. — Likojë foton tënde."},
{de:"folgen",sq:"të ndiqësh",type:"Media",ex:"Ich folge dir auf Instagram. — Të ndjek në Instagram."},
{de:"abonnieren",sq:"të abonohesh",type:"Media",ex:"Ich abonniere deinen Kanal. — Abonohem në kanalin tënd."},

// ── ENVIRONMENT & SOCIETY ──
{de:"der Klimawandel",sq:"ndryshimi klimatik",type:"Mjedis",ex:"Der Klimawandel ist real. — Ndryshimi klimatik është real."},
{de:"die Erderwärmung",sq:"ngrohja globale",type:"Mjedis",ex:"Die Erderwärmung steigt. — Ngrohja globale rritet."},
{de:"die Umweltverschmutzung",sq:"ndotja e mjedisit",type:"Mjedis",ex:"Die Umweltverschmutzung ist ein Problem. — Ndotja e mjedisit është problem."},
{de:"das Treibhausgas",sq:"gazi serrë",type:"Mjedis",ex:"Treibhausgase schaden dem Klima. — Gazrat serrë dëmtojnë klimën."},
{de:"erneuerbar",sq:"i rinovueshëm",type:"Mjedis",ex:"Erneuerbare Energien sind die Zukunft. — Energjitë e rinovueshme janë e ardhmja."},
{de:"die Solarenergie",sq:"energjia diellore",type:"Mjedis",ex:"Solarenergie ist günstig. — Energjia diellore është e lirë."},
{de:"die Windenergie",sq:"energjia e erës",type:"Mjedis",ex:"Windenergie ist sauber. — Energjia e erës është e pastër."},
{de:"der Plastikmüll",sq:"mbeturinat plastike",type:"Mjedis",ex:"Plastikmüll ist ein globales Problem. — Mbeturinat plastike janë problem global."},
{de:"biologisch",sq:"biologjik / organik",type:"Mjedis",ex:"Ich kaufe biologische Produkte. — Blej produkte organike."},
{de:"fair trade",sq:"tregti e drejtë",type:"Shoqëri",ex:"Ich kaufe fair-trade-Kaffee. — Blej kafe fair trade."},
{de:"nachhaltig",sq:"i qëndrueshëm",type:"Mjedis",ex:"Ich lebe nachhaltig. — Jetoj qëndrueshëm."},
{de:"spenden",sq:"të dhurosh (para)",type:"Shoqëri",ex:"Ich spende für Obdachlose. — Dhuroj për të pastrehët."},
{de:"ehrenamtlich",sq:"vullnetar",type:"Shoqëri",ex:"Ich arbeite ehrenamtlich. — Punoj vullnetarisht."},
{de:"die Flüchtlingshilfe",sq:"ndihma për refugjatët",type:"Shoqëri",ex:"Ich helfe in der Flüchtlingshilfe. — Ndihmoj refugjatët."},

// ── CULTURE & LEISURE ──
{de:"das Konzert",sq:"koncerti",type:"Kulturë",ex:"Ich gehe ins Konzert. — Shkoj në koncert."},
{de:"die Ausstellung",sq:"ekspozita",type:"Kulturë",ex:"Ich besuche die Ausstellung. — Vizitoj ekspozitën."},
{de:"das Theater",sq:"teatri",type:"Kulturë",ex:"Wir gehen ins Theater. — Shkojmë në teatër."},
{de:"die Oper",sq:"opera",type:"Kulturë",ex:"Die Oper ist wunderschön. — Opera është e mrekullueshme."},
{de:"das Kino",sq:"kinoja",type:"Kulturë",ex:"Ich gehe gern ins Kino. — Shkoj me dëshirë në kino."},
{de:"der Roman",sq:"romani",type:"Kulturë",ex:"Ich lese einen Roman. — Lexoj roman."},
{de:"die Zeitschrift",sq:"revista",type:"Media",ex:"Ich lese eine Zeitschrift. — Lexoj revistë."},
{de:"die Zeitung",sq:"gazeta",type:"Media",ex:"Ich lese täglich Zeitung. — Lexoj gazetë çdo ditë."},
{de:"der Podcast",sq:"podcasti",type:"Media",ex:"Ich höre Podcasts. — Dëgjoj podcaste."},
{de:"die Serie",sq:"serialin (TV)",type:"Media",ex:"Ich schaue eine deutsche Serie. — Shikoj serial gjerman."},
{de:"der Dokumentarfilm",sq:"filmi dokumentar",type:"Media",ex:"Der Dokumentarfilm ist interessant. — Filmi dokumentar është interesant."},
{de:"die Handlung",sq:"fabula / tregimi",type:"Kulturë",ex:"Die Handlung ist spannend. — Fabula është emocionante."},
{de:"der Held",sq:"heroi",type:"Kulturë",ex:"Der Held des Romans. — Heroi i romanit."},
{de:"die Figur",sq:"personazhi",type:"Kulturë",ex:"Die Figur ist sympathisch. — Personazhi është simpatik."},

// ── EDUCATION & PROFESSIONAL ──
{de:"das Stipendium",sq:"bursa",type:"Arsim",ex:"Ich habe ein Stipendium. — Kam bursë."},
{de:"die Bewerbung",sq:"aplikimi",type:"Arsim",ex:"Ich schreibe eine Bewerbung. — Shkruaj aplikim."},
{de:"das Abitur",sq:"matura",type:"Arsim",ex:"Ich mache das Abitur. — Bëj maturën."},
{de:"das Studium",sq:"studimet",type:"Arsim",ex:"Mein Studium dauert vier Jahre. — Studimet e mia zgjatin katër vjet."},
{de:"der Abschluss",sq:"diploma",type:"Arsim",ex:"Ich habe meinen Abschluss gemacht. — Mora diplomën."},
{de:"die Forschung",sq:"hulumtimi",type:"Arsim",ex:"Ich mache Forschung. — Bëj hulumtim."},
{de:"das Experiment",sq:"eksperimenti",type:"Arsim",ex:"Das Experiment ist gelungen. — Eksperimenti ka dëshmi."},
{de:"die These",sq:"teza",type:"Arsim",ex:"Meine These ist richtig. — Teza ime është e saktë."},
{de:"das Seminar",sq:"seminari",type:"Arsim",ex:"Ich besuche ein Seminar. — Marr pjesë në seminar."},
{de:"die Vorlesung",sq:"leksioni (universitar)",type:"Arsim",ex:"Die Vorlesung beginnt um 10 Uhr. — Leksioni fillon në orën 10."},
{de:"der Professor",sq:"profesori",type:"Arsim",ex:"Der Professor erklärt gut. — Profesori shpjegon mirë."},
{de:"das Labor",sq:"laboratori",type:"Arsim",ex:"Im Labor arbeiten wir praktisch. — Në laborator punojmë praktikisht."},
],

// ═══════════════════════════
// B1 EXTENSION — 650 words
// For: independent users
// Focus: opinions, arguments, complex topics, fluency
// ═══════════════════════════

B1: [

// ── ARGUMENTATION & OPINION ──
{de:"behaupten",sq:"të pohosh",type:"Argumentim",ex:"Er behauptet, er sei unschuldig. — Pohon se është i pafajshëm."},
{de:"bestreiten",sq:"të mohosh / kundërshtosh",type:"Argumentim",ex:"Ich bestreite das. — Këtë e mohoj."},
{de:"zustimmen",sq:"të pajtohesh",type:"Argumentim",ex:"Ich stimme vollständig zu. — Pajtohem plotësisht."},
{de:"widersprechen",sq:"të kundërshtosh",type:"Argumentim",ex:"Ich widerspreche dir. — Të kundërshtoj."},
{de:"zweifeln",sq:"të dyshosh",type:"Argumentim",ex:"Ich zweifle daran. — Dyshojë rreth kësaj."},
{de:"überzeugen",sq:"të bindësh",type:"Argumentim",ex:"Das überzeugt mich nicht. — Kjo nuk më bind."},
{de:"einräumen",sq:"të pranosh (me hezitim)",type:"Argumentim",ex:"Ich räume ein, dass... — Pranoj se..."},
{de:"relativieren",sq:"të relativizosh",type:"Argumentim",ex:"Man muss das relativieren. — Duhet ta relativizojmë."},
{de:"nuancieren",sq:"të bësh nuanca",type:"Argumentim",ex:"Ich möchte das nuancieren. — Dua të bëj nuanca."},
{de:"differenzieren",sq:"të dallosh",type:"Argumentim",ex:"Man muss hier differenzieren. — Duhet të dallojmë."},
{de:"verallgemeinern",sq:"të gjeneralizosh",type:"Argumentim",ex:"Man darf nicht verallgemeinern. — Nuk duhet të gjeneralizojmë."},
{de:"belegen",sq:"të dëshmosh me fakt",type:"Argumentim",ex:"Können Sie das belegen? — Mund ta dëshmoni me fakt?"},
{de:"schlussfolgernd",sq:"si përfundim",type:"Argumentim",ex:"Schlussfolgernd kann man sagen... — Si përfundim mund të thuhet..."},
{de:"im Gegensatz dazu",sq:"ndryshe nga kjo",type:"Argumentim",ex:"Im Gegensatz dazu... — Ndryshe nga kjo..."},
{de:"darüber hinaus",sq:"veç kësaj / për më tepër",type:"Argumentim",ex:"Darüber hinaus ist es teuer. — Veç kësaj është i shtrenjtë."},
{de:"im Hinblick auf",sq:"duke pasur parasysh",type:"Argumentim",ex:"Im Hinblick auf die Kosten... — Duke pasur parasysh kostot..."},
{de:"meines Erachtens",sq:"sipas mendimit tim",type:"Argumentim",ex:"Meines Erachtens ist das falsch. — Sipas mendimit tim kjo është e gabuar."},
{de:"soweit ich weiß",sq:"sa di unë",type:"Argumentim",ex:"Soweit ich weiß, stimmt das. — Sa di unë, kjo është e saktë."},
{de:"im Großen und Ganzen",sq:"në tërësi",type:"Argumentim",ex:"Im Großen und Ganzen ist es gut. — Në tërësi është mirë."},
{de:"grundsätzlich",sq:"në parim / fundamentalisht",type:"Argumentim",ex:"Grundsätzlich stimme ich zu. — Në parim pajtohem."},
{de:"prinzipiell",sq:"si parim",type:"Argumentim",ex:"Prinzipiell ist das möglich. — Si parim kjo është e mundshme."},
{de:"im Wesentlichen",sq:"në thelb",type:"Argumentim",ex:"Im Wesentlichen ist es richtig. — Në thelb është e saktë."},
{de:"letzten Endes",sq:"në fund të fundit",type:"Argumentim",ex:"Letzten Endes ist es egal. — Në fund të fundit është pa rëndësi."},
{de:"tatsächlich",sq:"në fakt / me të vërtetë",type:"Ndajfolje",ex:"Das ist tatsächlich wahr. — Kjo është në fakt e vërtetë."},
{de:"angeblich",sq:"pretendohet se / thuhet se",type:"Ndajfolje",ex:"Er ist angeblich reich. — Thuhet se është i pasur."},
{de:"anscheinend",sq:"me sa duket",type:"Ndajfolje",ex:"Anscheinend hat er recht. — Me sa duket ai ka të drejtë."},
{de:"offensichtlich",sq:"haptazi / dukshëm",type:"Ndajfolje",ex:"Das ist offensichtlich falsch. — Haptazi kjo është e gabuar."},
{de:"vermutlich",sq:"me gjasë",type:"Ndajfolje",ex:"Er kommt vermutlich spät. — Me gjasë ai vjen vonë."},
{de:"möglicherweise",sq:"ndoshta / me mundësi",type:"Ndajfolje",ex:"Möglicherweise hat er recht. — Ndoshta ai ka të drejtë."},

// ── SOCIETY & POLITICS ──
{de:"die Zivilgesellschaft",sq:"shoqëria civile",type:"Shoqëri",ex:"Die Zivilgesellschaft engagiert sich. — Shoqëria civile angazhohet."},
{de:"die Meinungsfreiheit",sq:"liria e shprehjes",type:"E drejtë",ex:"Meinungsfreiheit ist ein Grundrecht. — Liria e shprehjes është e drejtë themelore."},
{de:"die Pressefreiheit",sq:"liria e shtypit",type:"E drejtë",ex:"Pressefreiheit ist wichtig. — Liria e shtypit është e rëndësishme."},
{de:"die Versammlungsfreiheit",sq:"liria e tubimit",type:"E drejtë",ex:"Das Recht auf Versammlungsfreiheit. — E drejta e lirisë së tubimit."},
{de:"das Grundrecht",sq:"e drejta themelore",type:"E drejtë",ex:"Das ist ein Grundrecht. — Kjo është e drejtë themelore."},
{de:"das Wahlrecht",sq:"e drejta e votës",type:"Politikë",ex:"Jeder Bürger hat Wahlrecht. — Çdo qytetar ka të drejtë vote."},
{de:"die Abstimmung",sq:"votimi",type:"Politikë",ex:"Die Abstimmung ist morgen. — Votimi është nesër."},
{de:"das Ergebnis",sq:"rezultati",type:"Politikë",ex:"Das Ergebnis ist überraschend. — Rezultati është befasues."},
{de:"die Mehrheit",sq:"shumica",type:"Politikë",ex:"Die Mehrheit hat gewählt. — Shumica ka votuar."},
{de:"die Minderheit",sq:"pakica",type:"Politikë",ex:"Die Minderheit wird geschützt. — Pakica mbrohet."},
{de:"der Kompromiss",sq:"kompromisi",type:"Politikë",ex:"Wir brauchen einen Kompromiss. — Kemi nevojë për kompromis."},
{de:"die Verhandlung",sq:"negocimi",type:"Politikë",ex:"Die Verhandlungen dauern an. — Negociatat vazhdojnë."},
{de:"der Vertrag",sq:"traktati / marrëveshja",type:"Politikë",ex:"Ein internationaler Vertrag. — Traktat ndërkombëtar."},
{de:"sanktionieren",sq:"të sanksionosh",type:"Politikë",ex:"Das Land wird sanktioniert. — Shteti sanksionohet."},
{de:"die Sanktion",sq:"sanksioni",type:"Politikë",ex:"Sanktionen gegen das Land. — Sanksione kundër shtetit."},
{de:"das Bündnis",sq:"aleanca",type:"Politikë",ex:"Ein militärisches Bündnis. — Aleancë ushtarake."},
{de:"die Außenpolitik",sq:"politika e jashtme",type:"Politikë",ex:"Die Außenpolitik ist wichtig. — Politika e jashtme është e rëndësishme."},
{de:"die Innenpolitik",sq:"politika e brendshme",type:"Politikë",ex:"Die Innenpolitik ist komplex. — Politika e brendshme është komplekse."},
{de:"regieren",sq:"të qeverisësh",type:"Politikë",ex:"Die Partei regiert seit vier Jahren. — Partia qeveris prej katër vitesh."},
{de:"die Bürokratie",sq:"burokracia",type:"Shoqëri",ex:"Die deutsche Bürokratie ist komplex. — Burokracia gjermane është komplekse."},

// ── ECONOMICS & FINANCE B1 ──
{de:"die Volkswirtschaft",sq:"ekonomia kombëtare",type:"Ekonomi",ex:"Die Volkswirtschaft wächst. — Ekonomia kombëtare rritet."},
{de:"das Bruttoinlandsprodukt",sq:"prodhimi i brendshëm bruto",type:"Ekonomi",ex:"Das BIP steigt. — PBB rritet."},
{de:"die Konjunktur",sq:"konjuktura ekonomike",type:"Ekonomi",ex:"Die Konjunktur ist gut. — Konjuktura ekonomike është e mirë."},
{de:"die Rezession",sq:"recesioni",type:"Ekonomi",ex:"Eine wirtschaftliche Rezession. — Recesion ekonomik."},
{de:"die Inflation",sq:"inflacioni",type:"Ekonomi",ex:"Die Inflation steigt. — Inflacioni rritet."},
{de:"die Deflation",sq:"deflacioni",type:"Ekonomi",ex:"Deflation ist auch gefährlich. — Deflacioni është gjithashtu i rrezikshëm."},
{de:"der Zinssatz",sq:"norma e interesit",type:"Ekonomi",ex:"Der Zinssatz ist niedrig. — Norma e interesit është e ulët."},
{de:"der Aktienmarkt",sq:"tregu i aksioneve",type:"Ekonomi",ex:"Der Aktienmarkt schwankt. — Tregu i aksioneve luhatet."},
{de:"das Portfolio",sq:"portofoli",type:"Ekonomi",ex:"Mein Portfolio ist diversifiziert. — Portofoli im është i diversifikuar."},
{de:"die Dividende",sq:"dividendi",type:"Ekonomi",ex:"Ich bekomme Dividenden. — Marr dividendë."},
{de:"der Haushalt",sq:"buxheti shtetëror",type:"Ekonomi",ex:"Der Staatshaushalt ist ausgeglichen. — Buxheti shtetëror është i balancuar."},
{de:"die Subvention",sq:"subvencioni",type:"Ekonomi",ex:"Die Landwirtschaft bekommt Subventionen. — Bujqësia merr subvencione."},
{de:"exportieren",sq:"të eksportosh",type:"Ekonomi",ex:"Deutschland exportiert Autos. — Gjermani eksporton makina."},
{de:"importieren",sq:"të importosh",type:"Ekonomi",ex:"Wir importieren Öl. — Importojmë naftë."},
{de:"der Handelsüberschuss",sq:"teprica tregtare",type:"Ekonomi",ex:"Deutschland hat einen Handelsüberschuss. — Gjermani ka tepricë tregtare."},

// ── TECHNOLOGY & INNOVATION ──
{de:"die Automatisierung",sq:"automatizimi",type:"Teknologji",ex:"Automatisierung verändert die Arbeit. — Automatizimi ndryshon punën."},
{de:"die Robotik",sq:"robotika",type:"Teknologji",ex:"Robotik ist die Zukunft. — Robotika është e ardhmja."},
{de:"maschinelles Lernen",sq:"të mësuarit i makinave",type:"Teknologji",ex:"Maschinelles Lernen ist komplex. — Të mësuarit i makinave është kompleks."},
{de:"das neuronale Netz",sq:"rrjeti nervor artificial",type:"Teknologji",ex:"Neuronale Netze lernen selbst. — Rrjetet nervore mësojnë vetë."},
{de:"die Cybersicherheit",sq:"siguria kibernetike",type:"Teknologji",ex:"Cybersicherheit ist wichtig. — Siguria kibernetike është e rëndësishme."},
{de:"hacken",sq:"të hakosh",type:"Teknologji",ex:"Das System wurde gehackt. — Sistemi u hakua."},
{de:"die Verschlüsselung",sq:"enkriptimi",type:"Teknologji",ex:"Verschlüsselung schützt Daten. — Enkriptimi mbron të dhënat."},
{de:"die Blockchain",sq:"blockchain",type:"Teknologji",ex:"Blockchain ist transparent. — Blockchain është transparent."},
{de:"die Kryptowährung",sq:"kriptovaluta",type:"Teknologji",ex:"Bitcoin ist eine Kryptowährung. — Bitcoin është kriptovalutë."},
{de:"das Internet der Dinge",sq:"interneti i gjërave (IoT)",type:"Teknologji",ex:"Das Internet der Dinge verbindet alles. — Interneti i gjërave lidh gjithçka."},
{de:"die Plattform",sq:"platforma",type:"Teknologji",ex:"Eine digitale Plattform. — Platformë digjitale."},
{de:"der Algorithmus",sq:"algoritmi",type:"Teknologji",ex:"Der Algorithmus entscheidet. — Algoritmi vendos."},
{de:"Big Data",sq:"big data / të dhënat e mëdha",type:"Teknologji",ex:"Big Data verändert alles. — Big data ndryshon gjithçka."},
{de:"die Cloud-Computing",sq:"kompjutimi në cloud",type:"Teknologji",ex:"Cloud-Computing ist flexibel. — Kompjutimi në cloud është fleksibël."},
{de:"virtuell",sq:"virtual",type:"Teknologji",ex:"Eine virtuelle Besprechung. — Mbledhje virtuale."},
{de:"digital",sq:"digjital",type:"Teknologji",ex:"Die digitale Transformation. — Transformimi digjital."},
{de:"analog",sq:"analog",type:"Teknologji",ex:"Ich bevorzuge analoge Bücher. — Preferojë libra analogë."},

// ── ENVIRONMENT & CLIMATE B1 ──
{de:"die Biodiversität",sq:"biodiversiteti",type:"Mjedis",ex:"Die Biodiversität schwindet. — Biodiversiteti zvogëlohet."},
{de:"das Artensterben",sq:"zhdukja e specieve",type:"Mjedis",ex:"Das Artensterben ist eine Katastrophe. — Zhdukja e specieve është katastrofë."},
{de:"nachhaltig",sq:"i qëndrueshëm (mjedisit)",type:"Mjedis",ex:"Nachhaltig wirtschaften. — Ekonomizojmë qëndrueshëm."},
{de:"der ökologische Fußabdruck",sq:"gjurma ekologjike",type:"Mjedis",ex:"Mein ökologischer Fußabdruck. — Gjurma ime ekologjike."},
{de:"CO2-Ausstoß",sq:"emetimi i CO2",type:"Mjedis",ex:"Den CO2-Ausstoß reduzieren. — Reduktojmë emetimin e CO2."},
{de:"fossile Brennstoffe",sq:"lëndët djegëse fosile",type:"Mjedis",ex:"Fossile Brennstoffe sind schädlich. — Lëndët djegëse fosile janë të dëmshme."},
{de:"die Abgase",sq:"gazrat e shkarkimit",type:"Mjedis",ex:"Autoabgase verschmutzen die Luft. — Gazrat e makinave ndotin ajrin."},
{de:"emittieren",sq:"të emetojë",type:"Mjedis",ex:"Das Auto emittiert CO2. — Makina emeton CO2."},
{de:"kompensieren",sq:"të kompensosh",type:"Mjedis",ex:"Ich kompensiere meinen Flug. — Kompensojë fluturimin tim."},
{de:"die Energiewende",sq:"tranzicioni energjetik",type:"Mjedis",ex:"Die Energiewende ist notwendig. — Tranzicioni energjetik është i nevojshëm."},
{de:"regenerativ",sq:"i rigjeneruar",type:"Mjedis",ex:"Regenerative Energien nutzen. — Përdorim energji të rigjeneruara."},
{de:"ökologisch",sq:"ekologjik",type:"Mjedis",ex:"Ein ökologisches Produkt. — Produkt ekologjik."},
{de:"die Wasserknappheit",sq:"mungesa e ujit",type:"Mjedis",ex:"Wasserknappheit ist ein globales Problem. — Mungesa e ujit është problem global."},
{de:"die Dürre",sq:"thatësira",type:"Mjedis",ex:"Eine schlimme Dürre. — Thatësi e rëndë."},
{de:"die Überschwemmung",sq:"përmbytja",type:"Mjedis",ex:"Eine Überschwemmung zerstört alles. — Përmbytja shkatërron gjithçka."},
{de:"der Hitzewelle",sq:"vala e të nxehtit",type:"Mjedis",ex:"Eine Hitzewelle kommt. — Po vjen valë të nxehti."},
{de:"die Naturkatastrophe",sq:"katastrofa natyrore",type:"Mjedis",ex:"Eine Naturkatastrophe passiert. — Ndodh katastrofë natyrore."},
{de:"das Extremwetter",sq:"moti ekstrem",type:"Mjedis",ex:"Extremwetter wird häufiger. — Moti ekstrem bëhet më i shpeshtë."},

// ── HEALTH & PSYCHOLOGY B1 ──
{de:"die Lebenserwartung",sq:"jetëgjatësia",type:"Shëndet",ex:"Die Lebenserwartung steigt. — Jetëgjatësia rritet."},
{de:"die Sterblichkeit",sq:"vdekshmëria",type:"Shëndet",ex:"Die Sterblichkeitsrate sinkt. — Shkalla e vdekshmërisë zvogëlohet."},
{de:"die Prävention",sq:"parandalimi",type:"Shëndet",ex:"Prävention ist besser als Heilung. — Parandalimi është më mirë se shërimi."},
{de:"die Impfung",sq:"vaksinimi",type:"Shëndet",ex:"Die Impfung schützt uns. — Vaksinimi na mbron."},
{de:"der Impfstoff",sq:"vaksina",type:"Shëndet",ex:"Ein neuer Impfstoff wurde entwickelt. — Një vaksinë e re u zhvillua."},
{de:"die Pandemie",sq:"pandemia",type:"Shëndet",ex:"Eine Pandemie betrifft alle. — Pandemia prek të gjithë."},
{de:"die Epidemie",sq:"epidemia",type:"Shëndet",ex:"Eine lokale Epidemie. — Epidemi lokale."},
{de:"die Quarantäne",sq:"karantina",type:"Shëndet",ex:"Ich bin in Quarantäne. — Jam në karantinë."},
{de:"die psychische Störung",sq:"çrregullimi mendor",type:"Shëndet",ex:"Eine psychische Störung behandeln. — Trajtoj çrregullim mendor."},
{de:"die Sucht",sq:"varësia",type:"Shëndet",ex:"Sucht ist eine Krankheit. — Varësia është sëmundje."},
{de:"die Praxis",sq:"ordinanca / zyra e mjekut",type:"Shëndet",ex:"Die Praxis ist heute geschlossen. — Ordinanca sot është e mbyllur."},
{de:"der Facharzt",sq:"specialisti",type:"Shëndet",ex:"Ich gehe zum Facharzt. — Shkoj te specialisti."},
{de:"die Notaufnahme",sq:"urgjenca",type:"Shëndet",ex:"Ich fahre zur Notaufnahme. — Shkoj te urgjenca."},
{de:"die Rehabilitation",sq:"rehabilitimi",type:"Shëndet",ex:"Er macht Rehabilitation. — Ai bën rehabilitim."},

// ── EDUCATION B1 ──
{de:"die Weiterbildung",sq:"arsimimi i vazhdueshëm",type:"Arsim",ex:"Ich mache eine Weiterbildung. — Bëj arsimim të vazhdueshëm."},
{de:"die Umschulung",sq:"rikualifikimi profesional",type:"Arsim",ex:"Er macht eine Umschulung. — Ai bën rikualifikim."},
{de:"das lebenslanges Lernen",sq:"të mësuarit gjatë gjithë jetës",type:"Arsim",ex:"Lebenslanges Lernen ist wichtig. — Të mësuarit gjatë gjithë jetës është i rëndësishëm."},
{de:"die Lernmethode",sq:"metoda e të mësuarit",type:"Arsim",ex:"Welche Lernmethode nutzt du? — Çfarë metode mësimi përdor?"},
{de:"das kritische Denken",sq:"të menduarit kritik",type:"Arsim",ex:"Kritisches Denken ist wichtig. — Të menduarit kritik është i rëndësishëm."},
{de:"die Medienkompetenz",sq:"kompetenca mediatike",type:"Arsim",ex:"Medienkompetenz ist heute nötig. — Kompetenca mediatike sot është e nevojshme."},
{de:"das digitale Lernen",sq:"të mësuarit digjital",type:"Arsim",ex:"Digitales Lernen hat Vorteile. — Të mësuarit digjital ka avantazhe."},
{de:"die Kreativität",sq:"kreativiteti",type:"Arsim",ex:"Kreativität fördern. — Nxitim kreativitetin."},
{de:"die Problemlösung",sq:"zgjidhja e problemeve",type:"Arsim",ex:"Problemlösung ist eine Kompetenz. — Zgjidhja e problemeve është kompetencë."},
{de:"die Teamarbeit",sq:"puna ekipore",type:"Punë",ex:"Teamarbeit ist wichtig. — Puna ekipore është e rëndësishme."},
{de:"das Feedback",sq:"feedback-i",type:"Punë",ex:"Feedback ist wertvoll. — Feedback-i është i çmuar."},
{de:"die Eigeninitiative",sq:"iniciativa personale",type:"Punë",ex:"Zeig Eigeninitiative! — Trego iniciativë personale!"},

// ── CULTURE & IDENTITY B1 ──
{de:"die Muttersprache",sq:"gjuha amtare",type:"Gjuhë",ex:"Meine Muttersprache ist Albanisch. — Gjuha ime amtare është shqip."},
{de:"die Fremdsprache",sq:"gjuha e huaj",type:"Gjuhë",ex:"Deutsch ist meine Fremdsprache. — Gjermanishtja është gjuha ime e huaj."},
{de:"zweisprachig",sq:"dygjuhësh",type:"Gjuhë",ex:"Ich bin zweisprachig. — Jam dygjuhësh."},
{de:"mehrsprachig",sq:"shumëgjuhësh",type:"Gjuhë",ex:"Mehrsprachige Menschen haben Vorteile. — Njerëzit shumëgjuhësh kanë avantazhe."},
{de:"der Akzent",sq:"aksenti",type:"Gjuhë",ex:"Ich habe einen albanischen Akzent. — Kam akset shqiptar."},
{de:"das Heimweh",sq:"malli (për shtëpinë)",type:"Kulturë",ex:"Ich habe Heimweh. — Kam mall."},
{de:"das Fernweh",sq:"dëshira për të udhëtuar",type:"Kulturë",ex:"Mich packt das Fernweh. — Më kap dëshira për të udhëtuar."},
{de:"die Identität",sq:"identiteti",type:"Kulturë",ex:"Kulturelle Identität ist wichtig. — Identiteti kulturor është i rëndësishëm."},
{de:"die Integration",sq:"integrimi",type:"Kulturë",ex:"Integration braucht Zeit. — Integrimi kërkon kohë."},
{de:"die Inklusion",sq:"përfshirja",type:"Shoqëri",ex:"Inklusion in der Gesellschaft. — Përfshirja në shoqëri."},
{de:"die Diskriminierung",sq:"diskriminimi",type:"Shoqëri",ex:"Diskriminierung ist inakzeptabel. — Diskriminimi është i papranueshëm."},
{de:"das Vorurteil",sq:"paragjykimi",type:"Shoqëri",ex:"Vorurteile abbauen. — Eliminojmë paragjykimet."},
{de:"das Klischee",sq:"klisheu / stereotipi",type:"Shoqëri",ex:"Das ist ein Klischee! — Ky është stereotip!"},
{de:"die Toleranz",sq:"toleranca",type:"Shoqëri",ex:"Toleranz ist ein Wert. — Toleranca është vlerë."},
{de:"die Vielfalt",sq:"diversiteti",type:"Shoqëri",ex:"Vielfalt bereichert. — Diversiteti pasuron."},
{de:"die Solidarität",sq:"solidariteti",type:"Shoqëri",ex:"Solidarität in der Krise. — Solidaritet në krizë."},
{de:"die Gemeinschaft",sq:"bashkësia",type:"Shoqëri",ex:"Wir sind eine Gemeinschaft. — Jemi bashkësi."},
{de:"engagiert",sq:"i angazhuar",type:"Shoqëri",ex:"Er ist sehr engagiert. — Ai është shumë i angazhuar."},
{de:"der Wandel",sq:"ndryshimi shoqëror",type:"Shoqëri",ex:"Gesellschaftlicher Wandel. — Ndryshim shoqëror."},
{de:"die Generation",sq:"gjenerata",type:"Shoqëri",ex:"Die junge Generation. — Gjenerata e re."},

// ── ADVANCED WRITING PHRASES ──
{de:"Bezug nehmend auf...",sq:"Duke iu referuar...",type:"Shkrim formal",ex:"Bezug nehmend auf Ihr Schreiben vom... — Duke iu referuar shkresës suaj të..."},
{de:"im Anschluss daran",sq:"Pas kësaj / rrjedhimisht",type:"Shkrim formal",ex:"Im Anschluss daran möchte ich... — Pas kësaj dua të..."},
{de:"hiermit teile ich Ihnen mit",sq:"me anë të kësaj ju njoftoj",type:"Shkrim formal",ex:"Hiermit teile ich Ihnen mit, dass... — Me anë të kësaj ju njoftoj se..."},
{de:"ich beziehe mich auf",sq:"po i referohem",type:"Shkrim formal",ex:"Ich beziehe mich auf Ihr Angebot. — Po i referohem ofertës suaj."},
{de:"wie vereinbart",sq:"siç u ra dakord",type:"Shkrim formal",ex:"Wie vereinbart, sende ich... — Siç u ra dakord, po dërgoj..."},
{de:"mit der Bitte um",sq:"me lutjen për",type:"Shkrim formal",ex:"Mit der Bitte um schnelle Antwort. — Me lutjen për përgjigje të shpejtë."},
{de:"für Rückfragen stehe ich zur Verfügung",sq:"jam në dispozicion për pyetje",type:"Shkrim formal",ex:"Für Rückfragen stehe ich zur Verfügung. — Jam në dispozicion për pyetje."},
{de:"hochachtungsvoll",sq:"me shumë respekt",type:"Shkrim formal",ex:"Hochachtungsvoll, Dion Kelmendi. — Me shumë respekt, Dion Kelmendi."},
{de:"in Erwartung Ihrer Antwort",sq:"duke pritur përgjigjen tuaj",type:"Shkrim formal",ex:"In Erwartung Ihrer Antwort... — Duke pritur përgjigjen tuaj..."},
{de:"vielen Dank im Voraus",sq:"shumë faleminderit paraprakisht",type:"Shkrim formal",ex:"Vielen Dank im Voraus! — Shumë faleminderit paraprakisht!"},

// ── SPEAKING FLUENCY PHRASES ──
{de:"Wie soll ich das sagen...",sq:"Si ta them...",type:"Të folur fluent",ex:"Wie soll ich das sagen... es ist kompliziert. — Si ta them... është e komplikuar."},
{de:"Ich meine damit...",sq:"Dua të them me këtë...",type:"Të folur fluent",ex:"Ich meine damit, dass... — Dua të them me këtë se..."},
{de:"Wenn ich das richtig verstehe...",sq:"Nëse e kuptoj drejt...",type:"Të folur fluent",ex:"Wenn ich das richtig verstehe, dann... — Nëse e kuptoj drejt, atëherë..."},
{de:"Das heißt mit anderen Worten...",sq:"Me fjalë të tjera...",type:"Të folur fluent",ex:"Das heißt mit anderen Worten... — Me fjalë të tjera..."},
{de:"Ich bin mir nicht sicher, aber...",sq:"Nuk jam i sigurt, por...",type:"Të folur fluent",ex:"Ich bin mir nicht sicher, aber ich denke... — Nuk jam i sigurt, por mendoj..."},
{de:"Das ist eine gute Frage.",sq:"Kjo është pyetje e mirë.",type:"Të folur fluent",ex:"Das ist eine gute Frage! Ich denke... — Kjo është pyetje e mirë! Mendoj..."},
{de:"Lass mich kurz überlegen.",sq:"Lëm të mendohem shkurt.",type:"Të folur fluent",ex:"Lass mich kurz überlegen... — Lëm të mendohem shkurt..."},
{de:"Das kommt ganz darauf an.",sq:"Varet krejt nga rrethanat.",type:"Të folur fluent",ex:"Das kommt ganz darauf an, wie... — Varet krejt nga mënyra si..."},
{de:"Im Prinzip...",sq:"Në parim...",type:"Të folur fluent",ex:"Im Prinzip ist das richtig, aber... — Në parim kjo është e saktë, por..."},
{de:"Ehrlich gesagt...",sq:"Sinqerisht...",type:"Të folur fluent",ex:"Ehrlich gesagt weiß ich das nicht. — Sinqerisht nuk e di."},
{de:"Ich würde sagen...",sq:"Do të thosha...",type:"Të folur fluent",ex:"Ich würde sagen, dass... — Do të thosha se..."},
{de:"Das ist schwer zu sagen.",sq:"Kjo është e vështirë të thuhet.",type:"Të folur fluent",ex:"Das ist schwer zu sagen — es hängt davon ab. — Kjo është e vështirë të thuhet — varet."},
{de:"Ich tendiere dazu zu glauben...",sq:"Priren të besoj se...",type:"Të folur fluent",ex:"Ich tendiere dazu zu glauben, dass... — Priren të besoj se..."},
{de:"Was ich damit sagen möchte ist...",sq:"Çfarë dua të them me këtë është...",type:"Të folur fluent",ex:"Was ich damit sagen möchte ist... — Çfarë dua të them me këtë është..."},
{de:"Wenn man das so sieht...",sq:"Nëse e shikon kështu...",type:"Të folur fluent",ex:"Wenn man das so sieht, dann... — Nëse e shikon kështu, atëherë..."},

// ── READING COMPREHENSION AIDS ──
{de:"der Abschnitt",sq:"paragrafi / seksioni",type:"Lexim",ex:"Im zweiten Abschnitt steht... — Në paragrafin e dytë shkruan..."},
{de:"der Hauptgedanke",sq:"ideja kryesore",type:"Lexim",ex:"Der Hauptgedanke des Textes ist... — Ideja kryesore e tekstit është..."},
{de:"der Autor",sq:"autori",type:"Lexim",ex:"Der Autor meint, dass... — Autori mendon se..."},
{de:"der Begriff",sq:"termi / koncepti",type:"Lexim",ex:"Was bedeutet dieser Begriff? — Çfarë do të thotë ky term?"},
{de:"die Schlussfolgerung",sq:"përfundimi",type:"Lexim",ex:"Die Schlussfolgerung ist... — Përfundimi është..."},
{de:"das Fazit",sq:"konkluzio",type:"Lexim",ex:"Das Fazit des Textes ist... — Konkluzio i tekstit është..."},
{de:"der Standpunkt",sq:"qëndrimi / pikëpamja",type:"Lexim",ex:"Der Standpunkt des Autors. — Qëndrimi i autorit."},
{de:"die Kernaussage",sq:"pohimi kryesor",type:"Lexim",ex:"Die Kernaussage ist klar. — Pohimi kryesor është i qartë."},
{de:"belegen",sq:"të mbështesësh me dëshmi",type:"Lexim",ex:"Der Autor belegt das mit Beispielen. — Autori e mbështet me shembuj."},
{de:"das Argument",sq:"argumenti",type:"Lexim",ex:"Das Argument ist überzeugend. — Argumenti është bindës."},
{de:"das Gegenargument",sq:"kundërargumenti",type:"Lexim",ex:"Das Gegenargument ist auch stark. — Kundërargumenti është gjithashtu i fortë."},
{de:"die Schlussfolgerung",sq:"konkluzioni",type:"Lexim",ex:"Welche Schlussfolgerung zieht der Autor? — Çfarë konkluzioni nxjerr autori?"},
]
};



// Build merged ALL_VOCAB with EXTENDED_VOCAB
function buildAllVocab() {
  function tag(arr, src) {
    return (arr||[]).map(function(w){ return Object.assign({}, w, {source: src}); });
  }
  ALL_VOCAB = {
    A1: [].concat(
      MODULES.A1.flatMap(function(m){ return tag(m.vocab, m.title); }),
      tag(VOCAB_EXPANSION.A1_extra,    'Zgjerim I'),
      tag(EXTENDED_VOCAB.A1_ext,       'Zgjerim II'),
      tag(VOCAB_3000.A1,               'Fjalori 3000'),
      tag(NEW_VOCAB_1400.A1_new,       'Fjalori i Ri')
    ),
    A2: [].concat(
      MODULES.A2.flatMap(function(m){ return tag(m.vocab, m.title); }),
      tag(VOCAB_EXPANSION.A2_extra,    'Zgjerim I'),
      tag(EXTENDED_VOCAB.A2_ext,       'Zgjerim II'),
      tag(VOCAB_3000.A2,               'Fjalori 3000'),
      tag(NEW_VOCAB_1400.A2_new,       'Fjalori i Ri')
    ),
    B1: [].concat(
      MODULES.B1.flatMap(function(m){ return tag(m.vocab, m.title); }),
      tag(VOCAB_EXPANSION.B1_extra,    'Zgjerim I'),
      tag(EXTENDED_VOCAB.B1_ext,       'Zgjerim II'),
      tag(VOCAB_3000.B1,               'Fjalori 3000'),
      tag(NEW_VOCAB_1400.B1_new,       'Fjalori i Ri')
    )
  };
}


// ════════════════════════════════════════════════════════════════
// DEUTSCHAL — GRAMMAR SYSTEM A1 → B1
// Full CEFR grammar + 1400 new vocabulary words
// All explanations in Albanian, examples bilingual DE↔SQ
// ════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// SECTION 1: COMPLETE GRAMMAR DATABASE
// ─────────────────────────────────────────────