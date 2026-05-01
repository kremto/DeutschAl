// DeutschAL — Data

// ════════════════════════════════════════════
// DATA — All content
// ════════════════════════════════════════════

const MODULES = {
  A1: [
    {
      id:'a1m1', num:1, title:'Përshëndetjet', sub:'Greetings & Introductions',
      story: {
        ep:'Episodi 1', title:'Dita e parë në Wien',
        lines:[
          {type:'narr', text:'Dion vjen nga Kosova, nga Prishtina. Ai mbrin në Wien për herë të parë. I bie ziles së familjes Bauer.'},
          {type:'line', speaker:'Znj. Bauer', de:'Hallo! Sie sind Dion, oder?', sq:'Përshëndetje! Ju jeni Dion, apo jo?'},
          {type:'line', speaker:'Dion', de:'Ja, guten Tag! Ich heiße Dion. Ich komme aus Kosovo.', sq:'Po, mirëdita! Unë quhem Dion. Vij nga Kosova.'},
          {type:'line', speaker:'Znj. Bauer', de:'Willkommen! Kommen Sie herein. Mein Name ist Bauer.', sq:'Mirë se vini! Hyni brenda. Emri im është Bauer.'},
          {type:'line', speaker:'Dion', de:'Danke schön! Es freut mich!', sq:'Shumë faleminderit! Gëzohem!'},
          {type:'line', speaker:'Hr. Bauer', de:'Guten Tag! Wie geht es Ihnen?', sq:'Mirëdita! Si jeni?'},
          {type:'line', speaker:'Dion', de:'Gut, danke! Und Ihnen?', sq:'Mirë, faleminderit! Por ju?'},
        ]
      },
      vocab: [
        {de:'Hallo',sq:'Përshëndetje',type:'Përshëndetje',ex:'Hallo! Ich bin Max! — Përshëndetje! Jam Max!'},
        {de:'Guten Morgen',sq:'Mirëmëngjes',type:'Përshëndetje',ex:'Guten Morgen! Wie geht es dir? — Mirëmëngjes! Si je?'},
        {de:'Guten Tag',sq:'Mirëdita',type:'Përshëndetje',ex:'Guten Tag, Herr Müller! — Mirëdita, z. Müller!'},
        {de:'Guten Abend',sq:'Mirëmbrëma',type:'Përshëndetje',ex:'Guten Abend! Willkommen! — Mirëmbrëma! Mirë se vini!'},
        {de:'Gute Nacht',sq:'Natën e mirë',type:'Lamtumirë',ex:'Gute Nacht! Schlaf gut! — Natën e mirë! Fli mirë!'},
        {de:'Tschüss',sq:'Çao / Mirëupafshim',type:'Lamtumirë',ex:'Tschüss! Bis morgen! — Çao! Deri nesër!'},
        {de:'Auf Wiedersehen',sq:'Mirëupafshim (formale)',type:'Lamtumirë',ex:'Auf Wiedersehen, Frau Schmidt! — Mirëupafshim, znj. Schmidt!'},
        {de:'Ich heiße',sq:'Unë quhem',type:'Prezantim',ex:'Ich heiße Anna. — Unë quhem Anna.'},
        {de:'Mein Name ist',sq:'Emri im është',type:'Prezantim',ex:'Mein Name ist Klaus. — Emri im është Klaus.'},
        {de:'Wie heißt du?',sq:'Si quhesh?',type:'Pyetje',ex:'Hallo! Wie heißt du? — Përshëndetje! Si quhesh?'},
        {de:'Wie geht es dir?',sq:'Si je? (joformale)',type:'Pyetje',ex:'Hallo! Wie geht es dir? — Si je?'},
        {de:'Gut, danke!',sq:'Mirë, faleminderit!',type:'Përgjigje',ex:'Wie geht es dir? — Gut, danke! — Si je? — Mirë!'},
        {de:'Danke',sq:'Faleminderit',type:'Mirësjellje',ex:'Danke sehr! — Shumë faleminderit!'},
        {de:'Bitte',sq:'Ju lutem / S\'ka gjë',type:'Mirësjellje',ex:'Danke! — Bitte! — Faleminderit! — S\'ka gjë!'},
        {de:'Entschuldigung',sq:'Më fal',type:'Mirësjellje',ex:'Entschuldigung! Wie spät ist es? — Më fal! Sa është ora?'},
        {de:'Willkommen',sq:'Mirë se vini',type:'Bazë',ex:'Willkommen in Deutschland! — Mirë se vini në Gjermani!'},
        {de:'Ja',sq:'Po',type:'Bazë',ex:'Bist du Student? — Ja! — A je student? — Po!'},
        {de:'Nein',sq:'Jo',type:'Bazë',ex:'Bist du müde? — Nein! — A je i lodhur? — Jo!'},
        {de:'Herr',sq:'Zotëri (Z.)',type:'Titull',ex:'Guten Tag, Herr Müller!'},
        {de:'Frau',sq:'Zonjë (Znj.)',type:'Titull',ex:'Guten Morgen, Frau Schmidt!'},
      ],
      grammar: [
        {title:'Formale vs Joformale', body:'Gjermanishtja ka dy mënyra për t\'u drejtuar dikujt. Kjo është shumë e rëndësishme!',
         table:{heads:['Lloji','Kur','Shembull'],rows:[
           ['Joformale (du)','Me miqtë, familjen, fëmijët','Wie heißt du?'],
           ['Formale (Sie)','Me të panjohur, shefin, doktorin','Wie heißen Sie?'],
         ]}},
        {title:'Prezantimi — Ich heiße / Ich bin', body:'Dy mënyra për të thënë emrin tënd:',
         table:{heads:['Gjermanisht','Shqip','Shënim'],rows:[
           ['Ich heiße Anna.','Unë quhem Anna.','Më natyrale'],
           ['Ich bin Anna.','Unë jam Anna.','Shumë e zakonshme'],
           ['Mein Name ist Anna.','Emri im është Anna.','Pak formale'],
         ]}},
        {title:'Përshëndetjet sipas kohës', body:'Gjermanët janë shumë të saktë me kohën e përshëndetjeve:',
         table:{heads:['Gjermanisht','Shqip','Koha'],rows:[
           ['Guten Morgen','Mirëmëngjes','06:00–11:00'],
           ['Guten Tag','Mirëdita','11:00–18:00'],
           ['Guten Abend','Mirëmbrëma','18:00–22:00'],
           ['Gute Nacht','Natën e mirë','Para gjumit'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Mirëmëngjes" në gjermanisht?',opts:['Guten Abend','Guten Morgen','Gute Nacht','Hallo'],a:1},
        {type:'Zgjedh përgjigjen',q:'Cila është formale: "Si quheni?"',opts:['Wie heißt du?','Wie bist du?','Wie heißen Sie?','Wer bist du?'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "Bitte" kur dikush thotë "Danke"?',opts:['Faleminderit','S\'ka gjë','Mirëmëngjes','Ju lutem'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Mirupafshim" (joformale)?',opts:['Auf Wiedersehen','Guten Tag','Tschüss','Bis bald'],a:2},
      ],
      quiz:[
        {q:'Çfarë do të thotë "Guten Morgen"?',opts:['Mirëmbrëma','Mirëmëngjes','Natën e mirë','Mirëdita'],a:1,exp:'Guten Morgen = Mirëmëngjes (fjalë për fjalë: "mëngjes i mirë"). Krahaso: Guten Tag (Mirëdita), Guten Abend (Mirëmbrëma), Gute Nacht (Natën e mirë).'},
        {q:'Si thuhet "Mirupafshim" formale?',opts:['Tschüss','Bis bald','Auf Wiedersehen','Bis später'],a:2,exp:'Forma e saktë është: "Auf Wiedersehen".'},
        {q:'Cila fjali është joformale?',opts:['Wie heißen Sie?','Wie geht es Ihnen?','Wie heißt du?','Guten Tag, Herr Müller'],a:2,exp:'"Wie heißt du?" është forma joformale e saktë.'},
        {q:'Çfarë do të thotë "Willkommen"?',opts:['Mirupafshim','Mirë se vini','Faleminderit','Shihemi'],a:1,exp:'Willkommen = Mirë se vini! Shprehje e plotë: Herzlich willkommen! (Mirë se erdhët me zemër!). Folja: jemanden willkommen heißen = të mirëpresësh dikë.'},
        {q:'Si prezantohesh?',opts:['Wie heißt du?','Ich heiße...','Guten Tag!','Es geht mir gut.'],a:1,exp:'"Ich heiße..." është formula standarde e prezantimit në gjermanisht.'},
      ]
    },
    {
      id:'a1m2', num:2, title:'Numrat', sub:'Zahlen 1–100',
      story:{ep:'Episodi 2',title:'Sa kushton?',lines:[
        {type:'narr',text:'Dion shkon në markë për herë të parë. Ai nuk e di mirë çmimin.'},
        {type:'line',speaker:'Dion',de:'Entschuldigung! Was kostet das Brot?',sq:'Më fal! Sa kushton buka?'},
        {type:'line',speaker:'Shitësi',de:'Das kostet zwei Euro fünfzig.',sq:'Kjo kushton dy euro e pesëdhjetë.'},
        {type:'line',speaker:'Dion',de:'Und die Milch?',sq:'Dhe qumështi?'},
        {type:'line',speaker:'Shitësi',de:'Die Milch kostet einen Euro neunzig.',sq:'Qumështi kushton një euro e nëntëdhjetë.'},
        {type:'line',speaker:'Dion',de:'Okay, ich nehme beides. Zusammen?',sq:'Mirë, marr të dyja. Bashkë?'},
        {type:'line',speaker:'Shitësi',de:'Zusammen vier Euro vierzig, bitte.',sq:'Bashkë katër euro e dyzet, ju lutem.'},
      ]},
      vocab:[
        {de:'eins',sq:'një (1)',type:'Numër',ex:'Ich habe einen Bruder. — Kam një vëlla.'},
        {de:'zwei',sq:'dy (2)',type:'Numër',ex:'Das kostet zwei Euro. — Kjo kushton dy euro.'},
        {de:'drei',sq:'tre (3)',type:'Numër',ex:'Wir sind drei Personen. — Jemi tre persona.'},
        {de:'vier',sq:'katër (4)',type:'Numër',ex:'Vier plus eins ist fünf. — Katër plus një është pesë.'},
        {de:'fünf',sq:'pesë (5)',type:'Numër',ex:'Es ist fünf Uhr. — Është ora pesë.'},
        {de:'sechs',sq:'gjashtë (6)',type:'Numër',ex:'Ich bin sechs Minuten zu spät. — Jam gjashtë minuta me vonesë.'},
        {de:'sieben',sq:'shtatë (7)',type:'Numër',ex:'Sieben Tage hat eine Woche. — Java ka shtatë ditë.'},
        {de:'acht',sq:'tetë (8)',type:'Numër',ex:'Es ist acht Uhr morgens. — Është ora tetë e mëngjesit.'},
        {de:'neun',sq:'nëntë (9)',type:'Numër',ex:'Ich bin neun Jahre alt. — Jam nëntë vjeç.'},
        {de:'zehn',sq:'dhjetë (10)',type:'Numër',ex:'Zehn Minuten, bitte! — Dhjetë minuta, ju lutem!'},
        {de:'zwanzig',sq:'njëzet (20)',type:'Numër',ex:'Ich bin zwanzig Jahre alt. — Jam njëzet vjeç.'},
        {de:'dreißig',sq:'tridhjetë (30)',type:'Numër',ex:'Es kostet dreißig Euro. — Kushton tridhjetë euro.'},
        {de:'hundert',sq:'njëqind (100)',type:'Numër',ex:'Hundert Prozent! — Njëqind për qind!'},
        {de:'null',sq:'zero (0)',type:'Numër',ex:'Null Probleme! — Zero probleme!'},
        {de:'Was kostet...?',sq:'Sa kushton...?',type:'Shprehje',ex:'Was kostet das? — Sa kushton kjo?'},
        {de:'Euro',sq:'Euro (monedha)',type:'Shprehje',ex:'Das kostet fünf Euro. — Kjo kushton pesë euro.'},
        {de:'Wie alt bist du?',sq:'Sa vjeç je?',type:'Pyetje',ex:'Wie alt bist du? — Ich bin 25. — Sa vjeç je? — Jam 25.'},
        {de:'Ich bin ... Jahre alt.',sq:'Jam ... vjeç.',type:'Shprehje',ex:'Ich bin dreißig Jahre alt. — Jam tridhjetë vjeç.'},
      ],
      grammar:[
        {title:'Numrat 1–19',body:'Mëso me zemër: 1-12 janë unike. 13-19 formësohen me prapashtesën "-zehn":',
         table:{heads:['Nr','Gjermanisht','Nr','Gjermanisht'],rows:[
           ['1','eins','11','elf'],['2','zwei','12','zwölf'],['3','drei','13','dreizehn'],
           ['4','vier','14','vierzehn'],['5','fünf','15','fünfzehn'],['6','sechs','16','sechzehn'],
           ['7','sieben','17','siebzehn'],['8','acht','18','achtzehn'],['9','neun','19','neunzehn'],['10','zehn','20','zwanzig'],
         ]}},
        {title:'Numrat 20–100 — Rregulli i madh',body:'Nga 21-99 gjermanishtja thotë FILLIMISHT Njëshet, pastaj dhjetëshet. Rregulli: njëshi + "und" + dhjetëshi:',
         table:{heads:['Nr','Gjermanisht','Si ndërtohet'],rows:[
           ['21','einundzwanzig','eins + und + zwanzig'],
           ['35','fünfunddreißig','fünf + und + dreißig'],
           ['47','siebenundvierzig','sieben + und + vierzig'],
           ['99','neunundneunzig','neun + und + neunzig'],
         ]}},
        {title:'Mosha — Wie alt bist du?',body:'Për të thënë moshën gjermanishtja përdor strukturën: Ich bin + numër + Jahre alt.',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich bin 25 Jahre alt.','Jam 25 vjeç.'],
           ['Wie alt bist du?','Sa vjeç je? (joformale)'],
           ['Wie alt sind Sie?','Sa vjeç jeni? (formale)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "njëzet e pesë" në gjermanisht?',opts:['zwanzigjahr','fünfundzwanzig','zwanzig fünf','dreißig'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si pyesim moshën (joformale)?',opts:['Wie heißt du?','Was kostet das?','Wie alt bist du?','Wo wohnst du?'],a:2},
        {type:'Zgjedh përgjigjen',q:'Sa është: sieben + acht?',opts:['vierzehn','fünfzehn','sechzehn','dreizehn'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "99" në gjermanisht?',opts:['neunzig neun','neunundneunzig','neunzehnundneunzig','neun neun'],a:1},
      ],
      quiz:[
        {q:'Si thuhet "dhjetë" në gjermanisht?',opts:['neun','elf','zehn','zwölf'],a:2,exp:'Forma e saktë është: "zehn".'},
        {q:'Si ndërtohet "31" në gjermanisht?',opts:['dreißig-eins','einunddreißig','dreißigeins','einedreißig'],a:1,exp:'Forma e saktë e shkrimit është: "einunddreißig".'},
        {q:'Çfarë do të thotë "Was kostet das?"',opts:['Ku është kjo?','Sa kushton kjo?','Çfarë është kjo?','Kur vjen kjo?'],a:1,exp:'Was kostet das? = Sa kushton kjo? Alternativa: Wie viel kostet es? Kosto zakonisht pyet me "kostet" + Nominativ, jo Akkusativ.'},
        {q:'Si thuhet "Jam 28 vjeç"?',opts:['Ich habe 28 Jahre','Ich bin 28 Jahr','Ich bin 28 Jahre alt','Ich heißt 28'],a:2,exp:'Mosha: Ich bin + numër + Jahre alt. "Jahre alt" nuk mund të hiqet. Gabim i shpeshtë: "Ich habe 28 Jahre" — kjo nuk është gjermanisht e saktë!'},
        {q:'Cili numër vjen pas "neunzehn"?',opts:['einundzwanzig','neunzig','zwanzig','dreißig'],a:2,exp:'Numri i saktë në gjermanisht është: "zwanzig".'},
      ]
    },
    {
      id:'a1m3', num:3, title:'Familja', sub:'Familie & Verwandtschaft',
      story:{ep:'Episodi 3',title:'Familja ime në Kosovë',lines:[
        {type:'narr',text:'Dion i tregon Kleas për familjen e tij në Kosovë, duke parë fotografi.'},
        {type:'line',speaker:'Klea',de:'Hast du Fotos von deiner Familie?',sq:'Ke foto të familjes tënde?'},
        {type:'line',speaker:'Dion',de:'Ja! Das ist meine Mutter. Sie heißt Elona.',sq:'Po! Kjo është nëna ime. Ajo quhet Elona.'},
        {type:'line',speaker:'Klea',de:'Und wer ist das?',sq:'Dhe kush është kjo?'},
        {type:'line',speaker:'Dion',de:'Das ist mein Vater. Er heißt Arben. Er ist Ingenieur.',sq:'Ky është babai im. Ai quhet Arben. Ai është inxhinier.'},
        {type:'line',speaker:'Klea',de:'Hast du Geschwister?',sq:'Ke vëllezër ose motra?'},
        {type:'line',speaker:'Dion',de:'Ja, ich habe eine Schwester. Sie ist 24 Jahre alt.',sq:'Po, kam një motër. Ajo është 24 vjeç.'},
      ]},
      vocab:[
        {de:'die Mutter',sq:'nëna',type:'Familje',ex:'Meine Mutter heißt Elona. — Nëna ime quhet Elona.'},
        {de:'der Vater',sq:'babai',type:'Familje',ex:'Mein Vater ist Arzt. — Babai im është mjek.'},
        {de:'die Eltern',sq:'prindërit',type:'Familje',ex:'Meine Eltern wohnen in Tirana. — Prindërit e mi jetojnë në Tiranë.'},
        {de:'der Bruder',sq:'vëllai',type:'Familje',ex:'Mein Bruder ist 20 Jahre alt. — Vëllai im është 20 vjeç.'},
        {de:'die Schwester',sq:'motra',type:'Familje',ex:'Ich habe eine Schwester. — Kam një motër.'},
        {de:'die Geschwister',sq:'vëllezërit/motrat',type:'Familje',ex:'Hast du Geschwister? — Ke vëllezër ose motra?'},
        {de:'der Sohn',sq:'djali',type:'Familje',ex:'Mein Sohn heißt Max. — Djali im quhet Max.'},
        {de:'die Tochter',sq:'vajza',type:'Familje',ex:'Meine Tochter ist 5 Jahre alt. — Vajza ime është 5 vjeç.'},
        {de:'der Großvater',sq:'gjyshi',type:'Familje',ex:'Mein Großvater ist 75 Jahre alt. — Gjyshi im është 75 vjeç.'},
        {de:'die Großmutter',sq:'gjyshja',type:'Familje',ex:'Meine Großmutter kocht sehr gut. — Gjyshja ime gatuaj shumë mirë.'},
        {de:'der Mann',sq:'burri / njeriu',type:'Familje',ex:'Mein Mann ist Arzt. — Burri im është mjek.'},
        {de:'die Frau',sq:'gruaja',type:'Familje',ex:'Meine Frau heißt Ana. — Gruaja ime quhet Ana.'},
        {de:'das Kind',sq:'fëmija',type:'Familje',ex:'Das Kind spielt gern. — Fëmija luan me dëshirë.'},
        {de:'ledig',sq:'beqar/e',type:'Status',ex:'Ich bin ledig. — Jam beqar.'},
        {de:'verheiratet',sq:'i/e martuar',type:'Status',ex:'Ich bin verheiratet. — Jam i martuar.'},
        {de:'Hast du Kinder?',sq:'Ke fëmijë?',type:'Pyetje',ex:'Hast du Kinder? — Nein, noch nicht. — Ke fëmijë? — Jo, jo ende.'},
      ],
      grammar:[
        {title:'Posesivat — mein / meine / dein / deine',body:'Gjermanishtja ndryshon pronoren sipas gjinisë së emrit:',
         table:{heads:['Unë (mein-)','Ti (dein-)','Shqip','Gjinia'],rows:[
           ['mein Vater','dein Vater','baba(i im/yt)','Mashkullore'],
           ['meine Mutter','deine Mutter','nëna (ime/jote)','Femërore'],
           ['mein Kind','dein Kind','fëmija (im/yt)','Asnjanëse'],
         ]}},
        {title:'Folja "haben" — të kesh',body:'Folja haben (kam) është shumë e rëndësishme. Mëso bashkëngjitjen e saj:',
         table:{heads:['Person','Gjermanisht','Shqip'],rows:[
           ['ich','ich habe','unë kam'],
           ['du','du hast','ti ke'],
           ['er/sie/es','er/sie hat','ai/ajo ka'],
           ['wir','wir haben','ne kemi'],
           ['ihr','ihr habt','ju keni'],
           ['sie/Sie','sie haben','ata/Ju keni'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "nëna ime" në gjermanisht?',opts:['deine Mutter','meine Mutter','mein Mutter','meine Vater'],a:1},
        {type:'Zgjedh përgjigjen',q:'Plotëso: Ich ___ eine Schwester.',opts:['bin','ist','habe','hat'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "vëllai" në gjermanisht?',opts:['der Sohn','die Schwester','der Bruder','das Kind'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "Hast du Geschwister?"',opts:['Ke fëmijë?','Ke vëllezër/motra?','Ke prindër?','Sa vjeç je?'],a:1},
      ],
      quiz:[
        {q:'Si thuhet "babai im" gjermanisht?',opts:['meine Vater','mein Vater','dein Vater','sein Vater'],a:1,exp:'Forma e saktë është: "mein Vater".'},
        {q:'Çfarë do të thotë "die Großmutter"?',opts:['Nëna','Motra','Gjyshja','Vajza'],a:2,exp:'die Großmutter = gjyshja (nëna e nënës ose babait). Gjermanishtja ndan: Großmutter (gjyshe) vs Oma (gjyshe — joformale). Mashkullori: der Großvater / Opa.'},
        {q:'Plotëso: Er ___ zwei Kinder.',opts:['bin','habe','hat','hast'],a:2,exp:'haben (kam) zgjedhohet: ich habe, du hast, er/sie/es HAT. Forma e 3-të njëjës ndryshon! Er HAT — jo "er habe" ose "er haben".'},
        {q:'Si thuhet "i martuar" gjermanisht?',opts:['ledig','verheiratet','geschieden','single'],a:1,exp:'Forma e saktë është: "verheiratet".'},
        {q:'Cila është femërorja e "der Bruder"?',opts:['die Mutter','die Tochter','die Schwester','die Frau'],a:2,exp:'Gjermanisht, shumë emra nuk kanë femërore automatike. Bruder (vëlla) ↔ Schwester (motër) janë fjalë krejtësisht të ndryshme. Sic Vater ↔ Mutter, Sohn ↔ Tochter.'},
      ]
    },
    {
      id:'a1m4', num:4, title:'Ushqimi & Pijet', sub:'Essen & Trinken',
      story:{ep:'Episodi 4',title:'Mëngjesi i parë',lines:[
        {type:'narr',text:'Mëngjesi i parë me familjen Bauer. Znj. Bauer ka bërë mëngjes të pasur.'},
        {type:'line',speaker:'Znj. Bauer',de:'Möchten Sie Kaffee oder Tee?',sq:'Dëshironi kafe ose çaj?'},
        {type:'line',speaker:'Dion',de:'Kaffee, bitte! Mit Milch, aber ohne Zucker.',sq:'Kafe, ju lutem! Me qumësht, por pa sheqer.'},
        {type:'line',speaker:'Znj. Bauer',de:'Und was essen Sie? Brot mit Butter und Marmelade?',sq:'Dhe çfarë hani? Bukë me gjalpë dhe reçel?'},
        {type:'line',speaker:'Dion',de:'Sehr gern! Das sieht lecker aus!',sq:'Me shumë kënaqësi! Kjo duket shumë e shijshme!'},
        {type:'line',speaker:'Hr. Bauer',de:'Bitte sehr! Guten Appetit!',sq:'Ja ku e keni! Ju bëftë mirë!'},
        {type:'line',speaker:'Dion',de:'Danke! Es schmeckt sehr gut!',sq:'Faleminderit! Ka shije shumë të mirë!'},
      ]},
      vocab:[
        {de:'das Brot',sq:'buka',type:'Ushqim',ex:'Das Brot kostet zwei Euro. — Buka kushton dy euro.'},
        {de:'die Butter',sq:'gjalpi',type:'Ushqim',ex:'Ich esse Brot mit Butter. — Ha bukë me gjalpë.'},
        {de:'das Ei',sq:'veza',type:'Ushqim',ex:'Ich esse zwei Eier zum Frühstück. — Ha dy vezë në mëngjes.'},
        {de:'der Käse',sq:'djathi',type:'Ushqim',ex:'Ich mag Käse sehr. — Djathin e dua shumë.'},
        {de:'das Fleisch',sq:'mishi',type:'Ushqim',ex:'Ich esse kein Fleisch. — Nuk ha mish.'},
        {de:'der Fisch',sq:'peshku',type:'Ushqim',ex:'Fisch ist gesund. — Peshku është i shëndetshëm.'},
        {de:'das Gemüse',sq:'perimet',type:'Ushqim',ex:'Ich esse gern Gemüse. — Ha me dëshirë perime.'},
        {de:'die Suppe',sq:'supa',type:'Ushqim',ex:'Die Suppe ist heiß. — Supa është e nxehtë.'},
        {de:'der Kaffee',sq:'kafeja',type:'Pije',ex:'Ein Kaffee, bitte! — Një kafe, ju lutem!'},
        {de:'der Tee',sq:'çaji',type:'Pije',ex:'Möchten Sie Tee? — Dëshironi çaj?'},
        {de:'das Wasser',sq:'uji',type:'Pije',ex:'Ein Glas Wasser, bitte. — Një gotë ujë, ju lutem.'},
        {de:'das Bier',sq:'birra',type:'Pije',ex:'In Deutschland trinkt man viel Bier. — Në Gjermani pihet shumë birrë.'},
        {de:'der Wein',sq:'vera',type:'Pije',ex:'Ein Glas Wein, bitte. — Një gotë verë, ju lutem.'},
        {de:'die Milch',sq:'qumështi',type:'Pije',ex:'Kaffee mit Milch. — Kafe me qumësht.'},
        {de:'der Zucker',sq:'sheqeri',type:'Ushqim',ex:'Ohne Zucker, bitte. — Pa sheqer, ju lutem.'},
        {de:'Möchten Sie...?',sq:'Dëshironi...?',type:'Shprehje',ex:'Möchten Sie Kaffee? — Dëshironi kafe?'},
        {de:'Ich möchte...',sq:'Unë dua / dëshiroj...',type:'Shprehje',ex:'Ich möchte ein Wasser, bitte. — Dua një ujë, ju lutem.'},
        {de:'lecker',sq:'i/e shijshëm',type:'Mbiemër',ex:'Das ist sehr lecker! — Kjo është shumë e shijshme!'},
        {de:'Guten Appetit!',sq:'Ju bëftë mirë!',type:'Shprehje',ex:'Guten Appetit! — Ju bëftë mirë!'},
        {de:'Es schmeckt gut.',sq:'Ka shije të mirë.',type:'Shprehje',ex:'Mmm, es schmeckt sehr gut! — Ka shije shumë të mirë!'},
      ],
      grammar:[
        {title:'Folja "möchten" — dua/dëshiroj',body:'"Möchten" është folje modale dhe përdoret shumë për të porositur ose shprehur dëshirën. Është shumë e sjellshme!',
         table:{heads:['Person','Gjermanisht','Shqip'],rows:[
           ['ich','ich möchte','unë dua/dëshiroj'],
           ['du','du möchtest','ti do'],
           ['er/sie','er/sie möchte','ai/ajo do'],
           ['wir','wir möchten','ne duam'],
         ]}},
        {title:'Nyja e pashquar: ein / eine',body:'Gjermanishtja ka 3 gjini. Nyja ndryshon sipas gjinisë:',
         table:{heads:['Gjinia','Nyja','Shembull','Shqip'],rows:[
           ['Mashkullore','ein','ein Kaffee','një kafe'],
           ['Femërore','eine','eine Suppe','një supë'],
           ['Asnjanëse','ein','ein Bier','një birrë'],
         ]}},
        {title:'mit / ohne — me / pa',body:'Dy fjalë shumë të dobishme për porosi:',
         table:{heads:['Gjermanisht','Shqip','Shembull'],rows:[
           ['mit','me','Kaffee mit Milch — kafe me qumësht'],
           ['ohne','pa','Tee ohne Zucker — çaj pa sheqer'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Unë dua një kafe" gjermanisht?',opts:['Ich habe einen Kaffee','Ich möchte einen Kaffee','Ich bin Kaffee','Ich esse Kaffee'],a:1},
        {type:'Zgjedh përgjigjen',q:'Cila nyje përdoret me "Suppe" (femërore)?',opts:['ein','einen','eine','einem'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "pa sheqer" gjermanisht?',opts:['mit Zucker','ohne Zucker','kein Zucker','nicht Zucker'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "Es schmeckt gut"?',opts:['Duket mirë','Ka shije të mirë','Është mirë','Është i ngrohtë'],a:1},
      ],
      quiz:[
        {q:'Si thuhet "buka" gjermanisht?',opts:['das Bier','das Brot','die Butter','das Ei'],a:1,exp:'Forma e saktë është: "das Brot".'},
        {q:'Çfarë do të thotë "Guten Appetit"?',opts:['Faleminderit','Mirupafshim','Ju bëftë mirë','Mirëmëngjes'],a:2,exp:'Guten Appetit! thuhet PARA ngrënies, jo pas. Ekuivalenti shqip: "Ju bëftë mirë!" Përgjigja: Danke, gleichfalls! (Faleminderit, po ashtu!).'},
        {q:'Si thuhet "Dëshironi kafe?" (formale)?',opts:['Willst du Kaffee?','Möchten Sie Kaffee?','Hast du Kaffee?','Kannst du Kaffee?'],a:1,exp:'Forma e saktë është: "Möchten Sie Kaffee?".'},
        {q:'Cila është pija: "das Wasser"?',opts:['Birra','Vera','Uji','Qumështi'],a:2,exp:'das Wasser = uji (ASNJANËS). Krahaso: der Kaffee (mashkullor), die Milch (femëror), das Bier (asnjanës). Gjinia e emrit nuk lidhet me gjininë biologjike!'},
        {q:'Si thuhet "me qumësht" gjermanisht?',opts:['ohne Milch','mit Milch','kein Milch','von Milch'],a:1,exp:'Forma e saktë është: "mit Milch".'},
      ]
    },
    {
      id:'a1m5', num:5, title:'Shtëpia', sub:'Wohnung & Möbel',
      story:{ep:'Episodi 5',title:'Dhoma e re',lines:[
        {type:'narr',text:'Znj. Bauer tregon dhomën e Dionit. Dion është i befasuar nga madhësia.'},
        {type:'line',speaker:'Znj. Bauer',de:'Hier ist Ihr Zimmer! Es ist nicht groß, aber gemütlich.',sq:'Ja dhoma juaj! Nuk është e madhe, por është e rehatshme.'},
        {type:'line',speaker:'Dion',de:'Oh, es ist wunderbar! Das Bett ist sehr groß!',sq:'Oh, është mrekulluese! Krevati është shumë i madh!'},
        {type:'line',speaker:'Znj. Bauer',de:'Das Bad ist nebenan. Die Küche ist unten.',sq:'Banjo është pranë. Kuzhina është poshtë.'},
        {type:'line',speaker:'Dion',de:'Gibt es hier WLAN?',sq:'Ka WiFi këtu?'},
        {type:'line',speaker:'Znj. Bauer',de:'Ja, natürlich! Das Passwort ist auf dem Tisch.',sq:'Po, natyrisht! Fjalëkalimi është mbi tryezë.'},
      ]},
      vocab:[
        {de:'das Zimmer',sq:'dhoma',type:'Shtëpi',ex:'Mein Zimmer ist groß. — Dhoma ime është e madhe.'},
        {de:'die Küche',sq:'kuzhina',type:'Shtëpi',ex:'Die Küche ist modern. — Kuzhina është moderne.'},
        {de:'das Bad / Badezimmer',sq:'banjo',type:'Shtëpi',ex:'Das Bad ist sauber. — Banjo është e pastër.'},
        {de:'das Wohnzimmer',sq:'dhoma e ndenjies',type:'Shtëpi',ex:'Das Wohnzimmer ist groß. — Dhoma e ndenjies është e madhe.'},
        {de:'das Schlafzimmer',sq:'dhoma e gjumit',type:'Shtëpi',ex:'Mein Schlafzimmer ist klein. — Dhoma e gjumit është e vogël.'},
        {de:'der Tisch',sq:'tavolina',type:'Mobilje',ex:'Das Buch liegt auf dem Tisch. — Libri është mbi tavolinë.'},
        {de:'der Stuhl',sq:'karrigia',type:'Mobilje',ex:'Der Stuhl ist kaputt. — Karrigia është e prishur.'},
        {de:'das Bett',sq:'krevati',type:'Mobilje',ex:'Das Bett ist sehr weich. — Krevati është shumë i butë.'},
        {de:'der Schrank',sq:'dollapi',type:'Mobilje',ex:'Meine Kleider sind im Schrank. — Rrobat e mia janë në dollap.'},
        {de:'das Sofa',sq:'sofaja',type:'Mobilje',ex:'Ich sitze gern auf dem Sofa. — Rri me dëshirë në sofa.'},
        {de:'groß',sq:'i/e madh',type:'Mbiemër',ex:'Die Wohnung ist sehr groß. — Apartamenti është shumë i madh.'},
        {de:'klein',sq:'i/e vogël',type:'Mbiemër',ex:'Mein Zimmer ist klein. — Dhoma ime është e vogël.'},
        {de:'Es gibt...',sq:'Ka... / Ekziston...',type:'Shprehje',ex:'Es gibt eine Küche. — Ka një kuzhinë.'},
        {de:'oben / unten',sq:'lart / poshtë',type:'Vendndodhje',ex:'Das Bad ist oben, die Küche ist unten. — Banjo është lart, kuzhina poshtë.'},
        {de:'die Wohnung',sq:'apartamenti',type:'Shtëpi',ex:'Ich wohne in einer kleinen Wohnung. — Jetoj në një apartament të vogël.'},
      ],
      grammar:[
        {title:'"Es gibt" — Ka / Ekziston',body:'"Es gibt" është shprehja për të treguar ekzistencën e diçkaje. Përdoret gjithmonë e njëjtë — nuk ndryshon!',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Es gibt eine Küche.','Ka (një) kuzhinë.'],
           ['Es gibt kein Wasser.','Nuk ka ujë.'],
           ['Gibt es hier WLAN?','Ka WiFi këtu?'],
         ]}},
        {title:'Mbiemrat si cilësi',body:'Mbiemri vjen gjithmonë pas foljes "sein" (jam):',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Das Zimmer ist groß.','Dhoma është e madhe.'],
           ['Die Küche ist klein.','Kuzhina është e vogël.'],
           ['Das Bett ist weich.','Krevati është i butë.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "banjo" gjermanisht?',opts:['das Zimmer','das Bad','die Küche','das Wohnzimmer'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Ka një kuzhinë" gjermanisht?',opts:['Das ist eine Küche','Ich habe eine Küche','Es gibt eine Küche','Die Küche ist da'],a:2},
        {type:'Zgjedh përgjigjen',q:'Cila fjalë do të thotë "i/e madh" gjermanisht?',opts:['klein','schön','groß','neu'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "dollapi" gjermanisht?',opts:['das Bett','der Stuhl','der Schrank','das Sofa'],a:2},
      ],
      quiz:[
        {q:'Si thuhet "kuzhina" gjermanisht?',opts:['das Bad','das Zimmer','die Küche','das Schlafzimmer'],a:2,exp:'Forma e saktë është: "die Küche".'},
        {q:'Çfarë do të thotë "Es gibt kein Wasser"?',opts:['Ka shumë ujë','Nuk ka ujë','Ka pak ujë','Ujë i ftohtë'],a:1,exp:'es gibt + Akkusativ = ka/ekziston. "kein" mohon emrat: kein Wasser (nuk ka ujë), keine Milch, keinen Kaffee. Kein = mohimi i ein/eine.'},
        {q:'Si thuhet "dhoma e gjumit"?',opts:['das Wohnzimmer','das Schlafzimmer','das Badezimmer','das Esszimmer'],a:1,exp:'Gjermanisht ndan fjalët: Schlaf (gjumë) + Zimmer (dhomë) = Schlafzimmer. Krahaso: Badezimmer (banjë), Wohnzimmer (ndenjëse), Küche (kuzhinë).'},
        {q:'Cila fjalë do të thotë "i/e vogël"?',opts:['groß','schön','alt','klein'],a:3,exp:'klein (i/e vogël) ↔ groß (i/e madh/e). Kujto: groß (madh, me ß) — ndryshe nga "gross" anglisht. Shkalla krahasuese: kleiner, am kleinsten.'},
        {q:'Si thuhet "tavolina" gjermanisht?',opts:['der Stuhl','das Bett','der Tisch','das Sofa'],a:2,exp:'Forma e saktë është: "der Tisch".'},
      ]
    },
    {
      id:'a1m6', num:6, title:'Ngjyrat & Veshjet', sub:'Farben & Kleidung',
      story:{ep:'Episodi 6',title:'Blerjet e para',lines:[
        {type:'narr',text:'Dion ka nevojë për rroba për dimrin. Klea e shoqëron në qendër tregtare.'},
        {type:'line',speaker:'Klea',de:'Was suchst du?',sq:'Çfarë po kërkon?'},
        {type:'line',speaker:'Dion',de:'Ich brauche einen warmen Mantel. Es ist sehr kalt hier!',sq:'Më duhet një pallto e ngrohtë. Është shumë ftohtë këtu!'},
        {type:'line',speaker:'Klea',de:'Was ist deine Lieblingsfarbe?',sq:'Cila është ngjyra jote e preferuar?'},
        {type:'line',speaker:'Dion',de:'Blau oder schwarz. Nicht rot — das ist zu auffällig!',sq:'Blu ose e zezë. Jo e kuqe — kjo është shumë e dukshme!'},
        {type:'line',speaker:'Klea',de:'Schau mal! Dieser blaue Mantel ist sehr schön.',sq:'Shiko! Kjo pallto blu është shumë e bukur.'},
        {type:'line',speaker:'Dion',de:'Perfekt! Wie viel kostet er?',sq:'Perfekte! Sa kushton?'},
      ]},
      vocab:[
        {de:'rot',sq:'e kuqe',type:'Ngjyrë',ex:'Das Auto ist rot. — Makina është e kuqe.'},
        {de:'blau',sq:'blu / e kaltër',type:'Ngjyrë',ex:'Der Himmel ist blau. — Qielli është i kaltër.'},
        {de:'grün',sq:'e gjelbër',type:'Ngjyrë',ex:'Das Gras ist grün. — Bari është i gjelbër.'},
        {de:'gelb',sq:'e verdhë',type:'Ngjyrë',ex:'Die Sonne ist gelb. — Dielli është i verdhë.'},
        {de:'schwarz',sq:'e zezë',type:'Ngjyrë',ex:'Die Nacht ist schwarz. — Nata është e zezë.'},
        {de:'weiß',sq:'e bardhë',type:'Ngjyrë',ex:'Der Schnee ist weiß. — Bora është e bardhë.'},
        {de:'der Mantel',sq:'pallto',type:'Veshje',ex:'Ich brauche einen Mantel. — Më duhet një pallto.'},
        {de:'das Hemd',sq:'kemisha',type:'Veshje',ex:'Das blaue Hemd ist schön. — Kemisha blu është e bukur.'},
        {de:'die Hose',sq:'pantallona',type:'Veshje',ex:'Ich trage eine schwarze Hose. — Vesh pantallona të zeza.'},
        {de:'das Kleid',sq:'fustani',type:'Veshje',ex:'Das rote Kleid ist teuer. — Fustani i kuq është i shtrenjtë.'},
        {de:'die Schuhe',sq:'këpucët',type:'Veshje',ex:'Meine Schuhe sind neu. — Këpucët e mia janë të reja.'},
        {de:'Was ist deine Lieblingsfarbe?',sq:'Cila është ngjyra jote e preferuar?',type:'Pyetje',ex:'Was ist deine Lieblingsfarbe? — Blau! — Ngjyra jote? — Blu!'},
        {de:'Ich brauche...',sq:'Më duhet / Kam nevojë për...',type:'Shprehje',ex:'Ich brauche neue Schuhe. — Më duhen këpucë të reja.'},
        {de:'teuer / billig',sq:'i shtrenjtë / i lirë',type:'Mbiemër',ex:'Das ist zu teuer! — Kjo është shumë e shtrenjtë!'},
      ],
      grammar:[
        {title:'Mbiemrat e ngjyrave',body:'Ngjyrat janë mbiemra dhe nuk ndryshojnë kur vijnë pas foljes "sein":',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Das Hemd ist blau.','Kemisha është blu.'],['Die Hose ist schwarz.','Pantallona është e zezë.'],
           ['Der Mantel ist rot.','Pallto është e kuqe.'],
         ]}},
        {title:'Folja "brauchen" — të kesh nevojë',body:'"Brauchen" do të thotë "kam nevojë për" ose "më duhet":',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich brauche einen Mantel.','Më duhet një pallto.'],
           ['Du brauchst Hilfe.','Ty të duhet ndihmë.'],
           ['Er braucht Geld.','Atij i duhen para.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "e gjelbër" gjermanisht?',opts:['gelb','blau','grün','rot'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "teuer"?',opts:['i bukur','i shtrenjtë','i lirë','i ri'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Më duhet..." gjermanisht?',opts:['Ich möchte...','Ich brauche...','Ich habe...','Ich bin...'],a:1},
        {type:'Zgjedh përgjigjen',q:'Cila ngjyrë është "gelb"?',opts:['E kaltër','E kuqe','E verdhë','E gjelbër'],a:2},
      ],
      quiz:[
        {q:'Si thuhet "e zezë" gjermanisht?',opts:['weiß','grau','schwarz','braun'],a:2,exp:'Forma e saktë është: "schwarz".'},
        {q:'Çfarë do të thotë "das Kleid"?',opts:['Kemisha','Fustani','Pallto','Pantallona'],a:1,exp:'das Kleid = fustani (ASNJANËS). Krahaso: die Hose (pantallonat — FEMËROR!), der Rock (fundi), die Jacke (xhaketa). Kujdes me gjininë e rrobave!'},
        {q:'Plotëso: Das Hemd ___ blau.',opts:['haben','sein','ist','bist'],a:2,exp:'sein (jam/është): ich BIN, du BIST, er/sie/es IST, wir SIND. Das Hemd IST blau. Folja sein lidh emrin me mbiemrin pa ndryshime të mbiemrit.'},
        {q:'Si thuhet "i lirë (çmim)" gjermanisht?',opts:['teuer','neu','alt','billig'],a:3,exp:'Forma e saktë është: "billig".'},
        {q:'Cila ngjyrë është "rot"?',opts:['E kaltër','E kuqe','E verdhë','E gjelbër'],a:1,exp:'rot = e kuqe. Kujto: rot-gelb-grün (kuq-verdhë-gjelbër) = ngjyrat e semaforit! Shkalla: röter, am rötesten (kuqer, më e kuqja).'},
      ]
    },
    {
      id:'a1m7', num:7, title:'Ditët & Ora', sub:'Tage, Monate & Uhrzeit',
      story:{ep:'Episodi 7',title:'Vonë si gjithmonë',lines:[
        {type:'narr',text:'Dion ka harruar takimin e tij. Klea e pret në kafene prej 30 minutash.'},
        {type:'line',speaker:'Klea',de:'Endlich! Es ist schon halb zwei! Wir hatten um ein Uhr verabredet!',sq:'Më në fund! Është tashmë një e gjysmë! Kishim takim në orën një!'},
        {type:'line',speaker:'Dion',de:'Entschuldigung! Der Bus hatte Verspätung!',sq:'Më fal! Autobusi kishte vonesë!'},
        {type:'line',speaker:'Klea',de:'Kein Problem. Welcher Tag ist heute?',sq:'Nuk ka problem. Çfarë ditë është sot?'},
        {type:'line',speaker:'Dion',de:'Heute ist Donnerstag, der fünfte März.',sq:'Sot është e enjte, pesë mars.'},
        {type:'line',speaker:'Klea',de:'Richtig! Und morgen haben wir frei!',sq:'Saktë! Dhe nesër kemi pushim!'},
      ]},
      vocab:[
        {de:'Montag',sq:'e hënë',type:'Ditë',ex:'Am Montag gehe ich zur Arbeit. — Të hënën shkoj në punë.'},
        {de:'Dienstag',sq:'e martë',type:'Ditë',ex:'Am Dienstag habe ich Zeit. — Të martën kam kohë.'},
        {de:'Mittwoch',sq:'e mërkurë',type:'Ditë',ex:'Mittwoch ist die Mitte der Woche. — E mërkura është mesi i javës.'},
        {de:'Donnerstag',sq:'e enjte',type:'Ditë',ex:'Am Donnerstag treffe ich Klea. — Të enjten takoj Sarën.'},
        {de:'Freitag',sq:'e premte',type:'Ditë',ex:'Freitag ist mein Lieblingstag! — E premtja është dita ime e preferuar!'},
        {de:'Samstag',sq:'e shtunë',type:'Ditë',ex:'Am Samstag schlafe ich lange. — Të shtunën fle gjatë.'},
        {de:'Sonntag',sq:'e diel',type:'Ditë',ex:'Sonntag ist ein Ruhetag. — E diela është ditë pushimi.'},
        {de:'heute',sq:'sot',type:'Kohë',ex:'Was machen wir heute? — Çfarë bëjmë sot?'},
        {de:'morgen',sq:'nesër',type:'Kohë',ex:'Bis morgen! — Deri nesër!'},
        {de:'gestern',sq:'dje',type:'Kohë',ex:'Gestern war ich müde. — Dje isha i lodhur.'},
        {de:'Es ist ... Uhr.',sq:'Është ora ...',type:'Ora',ex:'Es ist drei Uhr. — Është ora tre.'},
        {de:'Um wie viel Uhr?',sq:'Në çfarë ore?',type:'Pyetje',ex:'Um wie viel Uhr beginnt der Film? — Në çfarë ore fillon filmi?'},
        {de:'Januar / Februar',sq:'Janar / Shkurt',type:'Muaj',ex:'Im Januar ist es kalt. — Në janar është ftohtë.'},
        {de:'früh / spät',sq:'herët / vonë',type:'Kohë',ex:'Es ist zu spät! — Është shumë vonë!'},
      ],
      grammar:[
        {title:'Ora — Wie spät ist es?',body:'Mëso si të thuash orën në gjermanisht:',
         table:{heads:['Gjermanisht','Shqip','Shënim'],rows:[
           ['Es ist ein Uhr.','Është ora një.','Thjesht'],
           ['Es ist halb zwei.','Është një e gjysmë.','Gjysma = 30 min PARA orës!'],
           ['Es ist Viertel nach drei.','Është tre e një çerek.','Çereku pas'],
           ['Es ist Viertel vor vier.','Është pa çerek katër.','Çereku para'],
         ]}},
        {title:'Ditët — me prepozicat "am"',body:'Kur thua "ditën e enjte" etj., gjermanishtja përdor "am":',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['am Montag','të hënën'],['am Dienstag','të martën'],
           ['am Wochenende','fundjavën'],['heute','sot (pa am)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "e premte" gjermanisht?',opts:['Montag','Donnerstag','Freitag','Samstag'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "halb zwei"?',opts:['Dy e gjysmë','Dy e çerek','Një e gjysmë','Pa gjysmë dy'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "sot" gjermanisht?',opts:['morgen','gestern','heute','jetzt'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si pyesim orën gjermanisht?',opts:['Was ist Uhr?','Wie spät ist es?','Was Zeit ist?','Wann ist Uhr?'],a:1},
      ],
      quiz:[
        {q:'Cila ditë vjen pas "Mittwoch"?',opts:['Dienstag','Freitag','Donnerstag','Samstag'],a:2,exp:'Mittwoch (e mërkurë) = mesi i javës (Mitte = mes, Woche = javë). Renditja: Mo-Di-Mi-DO-Fr-Sa-So. Donnerstag = e enjte (dita e Thorit).'},
        {q:'Çfarë do të thotë "morgen"?',opts:['Mëngjes','Nesër','Sot','Dje'],a:1,exp:'morgen (shkruar me të vogël) = nesër. Krahaso: der Morgen (mëngjesi, me të madhe). Shumë gabim: "Ich komme morgen Morgen" = Vij nesër mëngjes.'},
        {q:'Si thuhet "Është ora pesë" gjermanisht?',opts:['Es gibt fünf Uhr','Es ist fünf Uhr','Wir haben fünf Uhr','Um fünf Uhr'],a:1,exp:'Forma e saktë është: "Es ist fünf Uhr".'},
        {q:'Çfarë do të thotë "gestern"?',opts:['Nesër','Sot','Dje','Tani'],a:2,exp:'gestern = dje. Trekëndëshi kohor: gestern (dje) — heute (sot) — morgen (nesër). Perfekt me gestern: Gestern HABE ich gearbeitet.'},
        {q:'Cila ditë është "Sonntag"?',opts:['E shtunë','E hënë','E diel','E premte'],a:2,exp:'Sonntag = e diel (Sun-tag = dita e diellit). Krahaso: Montag (e hënë, Moon-tag). Gjermanisht, java fillon të HËNËN, jo të dielën si anglisht.'},
      ]
    },
    {
      id:'a1m8', num:8, title:'Transporti', sub:'Verkehr & Mobilität',
      story:{ep:'Episodi 8',title:'Metro e parë',lines:[
        {type:'narr',text:'Dion duhet të shkojë vetëm me metro për herë të parë. Klea i jep udhëzime.'},
        {type:'line',speaker:'Klea',de:'Du nimmst die U-Bahn Linie U2, Richtung Schottenring.',sq:'Merr metron linjë U2, drejtim Schottenring.'},
        {type:'line',speaker:'Dion',de:'Und wo steige ich aus?',sq:'Dhe ku zbres?'},
        {type:'line',speaker:'Klea',de:'Du steigst an der Station Karlsplatz aus. Das sind vier Stationen.',sq:'Ti zbret në stacionin, në Karlsplatz. Janë katër stacione.'},
        {type:'line',speaker:'Dion',de:'Muss ich umsteigen?',sq:'Duhet të ndërroj linjë?'},
        {type:'line',speaker:'Klea',de:'Nein, direkt! Kein Umsteigen nötig.',sq:'Jo, direkt! Nuk ka nevojë të ndërrosh.'},
        {type:'line',speaker:'Dion',de:'Wie lange dauert die Fahrt?',sq:'Sa kohë zgjat udhëtimi?'},
        {type:'line',speaker:'Klea',de:'Ungefähr zehn Minuten.',sq:'Rreth dhjetë minuta.'},
      ]},
      vocab:[
        {de:'der Zug',sq:'treni',type:'Transport',ex:'Der Zug fährt nach Berlin. — Treni shkon në Berlin.'},
        {de:'der Bus',sq:'autobusi',type:'Transport',ex:'Ich nehme den Bus. — Marr autobusin.'},
        {de:'die U-Bahn',sq:'metro',type:'Transport',ex:'Die U-Bahn ist schnell. — Metro është e shpejtë.'},
        {de:'das Auto',sq:'makina',type:'Transport',ex:'Ich fahre mit dem Auto. — Udhëtoj me makinë.'},
        {de:'das Fahrrad',sq:'biçikleta',type:'Transport',ex:'Ich fahre gern Fahrrad. — Çikloj me dëshirë.'},
        {de:'das Flugzeug',sq:'aeroplani',type:'Transport',ex:'Das Flugzeug fliegt nach Wien. — Aeroplani fluturon drejt Vjenës.'},
        {de:'der Bahnhof',sq:'stacioni i trenit',type:'Vend',ex:'Der Bahnhof ist groß. — Stacioni i trenit është i madh.'},
        {de:'die Haltestelle',sq:'stacioni (bus/metro)',type:'Vend',ex:'Die Haltestelle ist nah. — Stacioni është afër.'},
        {de:'fahren',sq:'të udhëtosh (me mjet)',type:'Folje',ex:'Ich fahre mit dem Bus. — Udhëtoj me autobus.'},
        {de:'einsteigen / aussteigen',sq:'hipur / zbret (mjetin)',type:'Folje',ex:'Ich steige hier aus. — Zbres këtu.'},
        {de:'Wie komme ich zu...?',sq:'Si arrihem tek...?',type:'Pyetje',ex:'Wie komme ich zum Bahnhof? — Si arrijem në stacion?'},
        {de:'links / rechts / geradeaus',sq:'majtas / djathtas / drejt',type:'Drejtim',ex:'Gehen Sie geradeaus! — Ecni drejt!'},
        {de:'nah / weit',sq:'afër / larg',type:'Mbiemër',ex:'Ist das Zentrum weit? — Është qendra larg?'},
        {de:'ungefähr ... Minuten',sq:'rreth ... minuta',type:'Kohë',ex:'Das dauert ungefähr 10 Minuten. — Zgjat rreth 10 minuta.'},
      ],
      grammar:[
        {title:'Folja "fahren" — të udhëtosh',body:'"Fahren" është folje e parregullt. Mëso format:',
         table:{heads:['Person','Gjermanisht','Shqip'],rows:[
           ['ich','ich fahre','unë udhëtoj'],['du','du fährst','ti udhëton'],
           ['er/sie','er/sie fährt','ai/ajo udhëton'],['wir','wir fahren','ne udhëtojmë'],
         ]}},
        {title:'Transporti — me prepozicat "mit"',body:'Kur thuash me çfarë mjeti udhëton, përdor "mit + dem/der":',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['mit dem Zug','me tren'],['mit dem Bus','me autobus'],
           ['mit dem Auto','me makinë'],['mit der U-Bahn','me metro'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "aeroplani" gjermanisht?',opts:['das Auto','der Zug','das Flugzeug','der Bus'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "me autobus" gjermanisht?',opts:['mit der Bus','mit dem Auto','mit dem Bus','in Bus'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "geradeaus"?',opts:['Majtas','Djathtas','Drejt (drejtpërdrejt)','Prapa'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Si arrihem tek stacioni?"',opts:['Wo ist der Bahnhof?','Wie komme ich zum Bahnhof?','Was ist der Bahnhof?','Wann fährt der Zug?'],a:1},
      ],
      quiz:[
        {q:'Çfarë do të thotë "die U-Bahn"?',opts:['Autobusi','Tramvaji','Metro','Taksia'],a:2,exp:'U-Bahn = Untergrundbahn = metro. U = Untergrund (nëntokë). Krahaso: S-Bahn (Stadtbahn = tren urban), Straßenbahn (tramvaj), Bus.'},
        {q:'Si thuhet "Zbres këtu" gjermanisht?',opts:['Ich steige hier ein','Ich fahre hier','Ich steige hier aus','Ich gehe hier'],a:2,exp:'Forma e saktë është: "Ich steige hier aus".'},
        {q:'Cila është fjala për "stacioni i trenit"?',opts:['die Haltestelle','der Flughafen','der Bahnhof','das Auto'],a:2,exp:'der Bahnhof = stacioni i trenit. Bahn (tren/rrugë hekurudhore) + Hof (oborr/sallë). Krahaso: Bushaltestelle (stacion autobusi), Flughafen (aeroport).'},
        {q:'Si thuhet "afër" gjermanisht?',opts:['weit','schnell','nah','langsam'],a:2,exp:'Forma e saktë është: "nah".'},
        {q:'Plotëso: Er ___ mit dem Auto.',opts:['geht','fliegt','nimmt','fährt'],a:3,exp:'fahren (udhëtoj me mjet) zgjedhohet: ich fahre, du FÄHRST, er FÄHRT. Kujdes: folje parregullte! e→ä në 2-të dhe 3-të njëjës. Krahaso: gehen (me këmbë).'},
      ]
    },
    {
      id:'a1m9', num:9, title:'Moti & Stinët', sub:'Wetter & Jahreszeiten',
      story:{ep:'Episodi 9',title:'Moti i keq i Vjenës',lines:[
        {type:'narr',text:'Dion shikon jashtë dritares. Po bie shi. Ai habitet — në Shqipëri ky muaj është i ngrohtë.'},
        {type:'line',speaker:'Dion',de:'Oh nein! Es regnet schon wieder!',sq:'Oh jo! Po bie shi sërish!'},
        {type:'line',speaker:'Hr. Bauer',de:'Ja, der November in Wien ist immer grau und kalt.',sq:'Po, nëntori në Vjenë është gjithmonë gri dhe i ftohtë.'},
        {type:'line',speaker:'Dion',de:'In Albanien ist es im November noch warm. Circa 18 Grad.',sq:'Në Shqipëri në nëntor është ende ngrohtë. Rreth 18 gradë.'},
        {type:'line',speaker:'Hr. Bauer',de:'Wirklich? Hier haben wir jetzt nur 5 Grad!',sq:'Të vërtetë? Këtu kemi tani vetëm 5 gradë!'},
        {type:'line',speaker:'Dion',de:'Ich muss einen Regenschirm kaufen!',sq:'Duhet të blej një çadër!'},
      ]},
      vocab:[
        {de:'die Sonne',sq:'dielli',type:'Mot',ex:'Die Sonne scheint heute. — Dielli ndriçon sot.'},
        {de:'der Regen',sq:'shiu',type:'Mot',ex:'Es gibt viel Regen im Herbst. — Ka shumë shi në vjeshtë.'},
        {de:'der Schnee',sq:'bora',type:'Mot',ex:'Es schneit! — Po bie borë!'},
        {de:'der Wind',sq:'era',type:'Mot',ex:'Der Wind ist stark heute. — Era është e fortë sot.'},
        {de:'Es regnet.',sq:'Po bie shi.',type:'Shprehje',ex:'Es regnet den ganzen Tag. — Bie shi gjithë ditën.'},
        {de:'Es schneit.',sq:'Po bie borë.',type:'Shprehje',ex:'Es schneit in den Bergen. — Bie borë në male.'},
        {de:'Es ist warm/kalt.',sq:'Është ngrohtë/ftohtë.',type:'Shprehje',ex:'Es ist sehr kalt heute! — Është shumë ftohtë sot!'},
        {de:'der Frühling',sq:'pranvera',type:'Stinë',ex:'Im Frühling blühen die Blumen. — Në pranverë lulëzojnë lulet.'},
        {de:'der Sommer',sq:'vera',type:'Stinë',ex:'Im Sommer fahre ich ans Meer. — Në verë shkoj në det.'},
        {de:'der Herbst',sq:'vjeshta',type:'Stinë',ex:'Im Herbst fallen die Blätter. — Në vjeshtë bien gjethet.'},
        {de:'der Winter',sq:'dimri',type:'Stinë',ex:'Der Winter in Wien ist lang. — Dimri në Vjenë është i gjatë.'},
        {de:'Wie ist das Wetter?',sq:'Si është moti?',type:'Pyetje',ex:'Wie ist das Wetter heute? — Si është moti sot?'},
        {de:'Grad',sq:'gradë (°C)',type:'Shprehje',ex:'Es sind 20 Grad. — Janë 20 gradë.'},
        {de:'der Regenschirm',sq:'çadra (shiu)',type:'Objekt',ex:'Ich brauche einen Regenschirm! — Më duhet një çadër!'},
      ],
      grammar:[
        {title:'Shprehjet e motit — me "Es"',body:'Shumica e shprehjeve të motit fillojnë me "Es" (kjo):',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Es regnet.','Po bie shi.'],['Es schneit.','Po bie borë.'],
           ['Es ist sonnig.','Është me diell.'],['Es ist bewölkt.','Është me re.'],
           ['Es ist windig.','Është me erë.'],['Es ist heiß/kalt.','Është nxehtë/ftohtë.'],
         ]}},
        {title:'Stinët — me prepozicat "im"',body:'Kur thuash "në pranverë" etj., gjermanishtja përdor "im":',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['im Frühling','në pranverë'],['im Sommer','në verë'],
           ['im Herbst','në vjeshtë'],['im Winter','në dimër'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Po bie shi" gjermanisht?',opts:['Es ist Regen','Es regnet','Der Regen kommt','Regen ist da'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "vjeshta" gjermanisht?',opts:['der Frühling','der Sommer','der Herbst','der Winter'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si pyesim "Si është moti?"?',opts:['Was ist Wetter?','Wie ist das Wetter?','Wann ist gut?','Was macht Sonne?'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "në verë" gjermanisht?',opts:['in Sommer','am Sommer','im Sommer','beim Sommer'],a:2},
      ],
      quiz:[
        {q:'Çfarë do të thotë "Es schneit"?',opts:['Po fryn era','Po bie shi','Po bie borë','Ka diell'],a:2,exp:'Es schneit = po bie borë. Motit gjithmonë me "es": Es regnet (shi), Es schneit (borë), Es hagelt (breshër), Es ist sonnig (me diell).'},
        {q:'Cila stinë është "der Frühling"?',opts:['Vera','Vjeshta','Dimri','Pranvera'],a:3,exp:'der Frühling = pranvera (früh = herët — sezona e "hershme"). Stinët: Frühling→Sommer→Herbst→Winter. Të gjitha MASHKULLORË: der!'},
        {q:'Si thuhet "Është ngrohtë" gjermanisht?',opts:['Es ist kalt','Es ist heiß','Es regnet','Es ist gut'],a:1,exp:'Forma e saktë është: "Es ist heiß".'},
        {q:'Si thuhet "çadra" gjermanisht?',opts:['der Mantel','der Schirm','der Regenschirm','das Dach'],a:2,exp:'Forma e saktë është: "der Regenschirm".'},
        {q:'Çfarë do të thotë "Wie ist das Wetter?"',opts:['Ku është moti?','Kur ndryshon moti?','Si është moti?','Çfarë është moti?'],a:2,exp:'Wie ist das Wetter? = Si është moti? Mos ngatërro: das Wetter (moti sot) ↔ das Klima (klima si fenomen i përgjithshëm).'},
      ]
    },
    {
      id:'a1m10', num:10, title:'Puna & Profesionet', sub:'Arbeit & Berufe',
      story:{ep:'Episodi 10',title:'Dion kërkon punë',lines:[
        {type:'narr',text:'Dion ka gjetur një shpallje për punë part-time. Ai bën intervistën e parë.'},
        {type:'line',speaker:'Menaxheri',de:'Guten Tag! Bitte setzen Sie sich. Was sind Sie von Beruf?',sq:'Mirëdita! Ju lutem uluni. Çfarë profesioni keni?'},
        {type:'line',speaker:'Dion',de:'Ich bin Student. Ich studiere Informatik.',sq:'Jam student. Studioj informatikë.'},
        {type:'line',speaker:'Menaxheri',de:'Sehr gut. Haben Sie Erfahrung als Kellner?',opts:['Jo, por dua të mësoj shpejt.']},
        {type:'line',speaker:'Menaxheri',de:'',sq:'Shumë mirë. Keni përvojë si kamarier?'},
        {type:'line',speaker:'Dion',de:'Nein, aber ich lerne schnell und bin sehr motiviert!',sq:'Jo, por mësoj shpejt dhe jam shumë i motivuar!'},
        {type:'line',speaker:'Menaxheri',de:'Wann können Sie anfangen?',sq:'Kur mund të filloni?'},
        {type:'line',speaker:'Dion',de:'Ab nächste Woche! Ich freue mich sehr auf die Arbeit!',sq:'Nga java e ardhshme! Pres me shumë entuziazëm punën!'},
      ]},
      vocab:[
        {de:'der Arzt / die Ärztin',sq:'mjeku / mjekja',type:'Profesion',ex:'Mein Vater ist Arzt. — Babai im është mjek.'},
        {de:'der Lehrer / die Lehrerin',sq:'mësuesi / mësuesja',type:'Profesion',ex:'Meine Mutter ist Lehrerin. — Nëna ime është mësuese.'},
        {de:'der Ingenieur',sq:'inxhinieri',type:'Profesion',ex:'Er arbeitet als Ingenieur. — Ai punon si inxhinier.'},
        {de:'der Koch / die Köchin',sq:'kuzhinieri/a',type:'Profesion',ex:'Der Koch arbeitet im Restaurant. — Kuzhinieri punon në restorant.'},
        {de:'der Student / die Studentin',sq:'studenti/studentja',type:'Profesion',ex:'Ich bin Student. — Jam student.'},
        {de:'arbeiten',sq:'të punosh',type:'Folje',ex:'Ich arbeite in einem Büro. — Punoj në zyrë.'},
        {de:'Was machen Sie beruflich?',sq:'Çfarë bëni profesionalisht?',type:'Pyetje',ex:'Was machen Sie beruflich? — Ich bin Arzt.'},
        {de:'Ich arbeite als...',sq:'Punoj si...',type:'Shprehje',ex:'Ich arbeite als Kellner. — Punoj si kamarier.'},
        {de:'das Büro',sq:'zyra',type:'Vend pune',ex:'Mein Büro ist im dritten Stock. — Zyra ime është në katin e tretë.'},
        {de:'Vollzeit / Teilzeit',sq:'orar i plotë / i pjesshëm',type:'Punë',ex:'Ich arbeite Teilzeit. — Punoj me orar të pjesshëm.'},
        {de:'das Gehalt',sq:'rroga / paga',type:'Punë',ex:'Das Gehalt ist gut. — Paga është e mirë.'},
        {de:'die Erfahrung',sq:'përvoja',type:'Punë',ex:'Haben Sie Erfahrung? — Ke përvojë?'},
        {de:'Wann können Sie anfangen?',sq:'Kur mund të filloni?',type:'Pyetje',ex:'Wann können Sie anfangen? — Nächste Woche! — Kur filloni? — Javën tjetër!'},
      ],
      grammar:[
        {title:'Folja "können" — të mundesh',body:'"Können" shpreh aftësinë ose mundësinë. Është folje modale:',
         table:{heads:['Person','Gjermanisht','Shqip'],rows:[
           ['ich','ich kann','unë mund'],['du','du kannst','ti mund'],
           ['er/sie','er/sie kann','ai/ajo mund'],['wir','wir können','ne mund'],
         ]}},
        {title:'Profesioni — "sein" ose "als"',body:'Dy mënyra për të thënë profesionin:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich bin Arzt.','Jam mjek.'],
           ['Ich arbeite als Arzt.','Punoj si mjek.'],
           ['Was sind Sie von Beruf?','Çfarë profesioni keni? (formale)'],
           ['Was bist du von Beruf?','Çfarë profesioni ke? (joformale)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Punoj si mësuese"?',opts:['Ich bin eine Lehrerin','Ich arbeite als Lehrerin','Ich mache Lehrerin','Ich lerne als Lehrerin'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "das Gehalt"?',opts:['Puna','Zyra','Paga/rroga','Përvoja'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Unë mund" gjermanisht?',opts:['ich will','ich muss','ich kann','ich darf'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si pyesim profesionin (joformale)?',opts:['Was machen Sie?','Was bist du von Beruf?','Wo arbeitest Sie?','Wie ist dein Beruf?'],a:1},
      ],
      quiz:[
        {q:'Si thuhet "mjeku" (mashkull) gjermanisht?',opts:['der Lehrer','der Arzt','der Koch','der Ingenieur'],a:1,exp:'Forma e saktë është: "der Arzt".'},
        {q:'Çfarë do të thotë "Ich arbeite Teilzeit"?',opts:['Punoj gjithë kohën','Punoj me orar të pjesshëm','Nuk punoj','Punoj natën'],a:1,exp:'Teilzeit = orar i pjesshëm (Teil = pjesë, Zeit = kohë). Krahaso: Vollzeit (orar i plotë). Tipike në Gjermani: 20-30 orë/javë = Teilzeit.'},
        {q:'Plotëso: ___ du hier arbeiten?',opts:['Willst','Möchtest','Kannst','Musst'],a:2,exp:'Folje modale + folje kryesore: KÖNNEN (mundësi) + Infinitiv. Zgjedhimi: ich kann, du KANNST, er kann. Pyetja: Kannst du...? = A mund të...?'},
        {q:'Çfarë do të thotë "die Erfahrung"?',opts:['Puna','Zyra','Rroga','Përvoja'],a:3,exp:'die Erfahrung = përvoja (profesionale). Folja: erfahren (të mësosh nga eksperienca). Krahaso: die Kenntnisse (njohuritë teorike), die Fähigkeit (aftësia).'},
        {q:'Si thuhet "Punoj në zyrë" gjermanisht?',opts:['Ich gehe zum Büro','Ich bin im Büro','Ich arbeite in einem Büro','Ich lerne im Büro'],a:2,exp:'Forma e saktë është: "Ich arbeite in einem Büro".'},
      ]
    },
  ],
  A2: [
    {
      id:'a2m1', num:1, title:'Rutina Ditore', sub:'Tagesablauf & Gewohnheiten',
      story:{ep:'Episodi 1',title:'Jeta e re në Berlin',lines:[
        {type:'narr',text:'Dion tani jeton në Berlin. Ka punë dhe apartamentin e tij. Dita e tij tipike ka ndryshuar.'},
        {type:'line',speaker:'Kolegu',de:'Wie sieht dein Alltag aus?',sq:'Si duket rutina jote e përditshme?'},
        {type:'line',speaker:'Dion',de:'Ich stehe um sieben Uhr auf, dann frühstücke ich schnell.',sq:'Çohem në orën shtatë, pastaj ha mëngjesin shpejt.'},
        {type:'line',speaker:'Kolegu',de:'Fährst du mit der U-Bahn zur Arbeit?',sq:'Shkon me metro në punë?'},
        {type:'line',speaker:'Dion',de:'Ja, die Fahrt dauert zwanzig Minuten. Nach der Arbeit gehe ich ins Fitnessstudio.',sq:'Po, udhëtimi zgjat njëzet minuta. Pas punës shkoj në palestër.'},
      ]},
      vocab:[
        {de:'aufstehen',sq:'të çohesh (nga gjumi)',type:'Folje',ex:'Ich stehe um 6 Uhr auf. — Çohem në orën 6.'},
        {de:'frühstücken',sq:'të hash mëngjes',type:'Folje',ex:'Ich frühstücke jeden Morgen. — Ha mëngjes çdo mëngjes.'},
        {de:'zur Arbeit gehen',sq:'të shkosh në punë',type:'Shprehje',ex:'Ich gehe um 8 Uhr zur Arbeit. — Shkoj në punë në orën 8.'},
        {de:'schlafen gehen',sq:'të shkosh të flesh',type:'Folje',ex:'Ich gehe um 23 Uhr schlafen. — Shkoj të fle në orën 23.'},
        {de:'sich waschen',sq:'të lahesh',type:'Folje',ex:'Ich wasche mich morgens. — Lahem në mëngjes.'},
        {de:'das Fitnessstudio',sq:'palestra',type:'Vend',ex:'Ich gehe dreimal pro Woche ins Fitnessstudio. — Shkoj 3 herë në javë në palestër.'},
        {de:'die Routine',sq:'rutina',type:'Shprehje',ex:'Meine Routine beginnt um 6 Uhr. — Rutina ime fillon në orën 6.'},
        {de:'täglich / jeden Tag',sq:'çdo ditë',type:'Kohë',ex:'Ich lerne täglich Deutsch. — Mësoj gjermanisht çdo ditë.'},
        {de:'meistens',sq:'zakonisht / kryesisht',type:'Kohë',ex:'Ich esse meistens zu Hause. — Zakonisht ha në shtëpi.'},
        {de:'manchmal',sq:'ndonjëherë',type:'Kohë',ex:'Manchmal gehe ich ins Kino. — Ndonjëherë shkoj në kino.'},
        {de:'nie',sq:'kurrë',type:'Kohë',ex:'Ich trinke nie Alkohol. — Kurrë nuk pi alkool.'},
      ],
      grammar:[
        {title:'Foljet me ndajshtesë — Trennbare Verben',body:'Shumë folje gjermane kanë pjesë që "ndahet" dhe shkon në fund të fjalisë. Kjo është shumë e rëndësishme!',
         table:{heads:['Infinitiv','Fjalia','Shqip'],rows:[
           ['aufstehen','Ich stehe um 7 Uhr auf.','Çohem në orën 7.'],
           ['anrufen','Ich rufe dich an.','Të telefonoj.'],
           ['aufmachen','Er macht das Fenster auf.','Ai hap dritaren.'],
           ['einschlafen','Ich schlafe schnell ein.','Fle shpejt.'],
         ]}},
        {title:'Shpeshtësia — Sa shpesh?',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['immer','gjithmonë'],['meistens','zakonisht'],['oft','shpesh'],
           ['manchmal','ndonjëherë'],['selten','rrallë'],['nie','kurrë'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Çohem në orën shtatë" gjermanisht?',opts:['Ich stehe um sieben Uhr auf','Ich schlafe um sieben Uhr','Ich gehe um sieben auf','Ich bin um sieben Uhr auf'],a:0},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "manchmal"?',opts:['Kurrë','Gjithmonë','Ndonjëherë','Shpesh'],a:2},
        {type:'Zgjedh përgjigjen',q:'Cila folje do të thotë "të hash mëngjes"?',opts:['schlafen','aufstehen','frühstücken','arbeiten'],a:2},
        {type:'Zgjedh përgjigjen',q:'Ku shkon ndajshtesha e foljes "aufstehen" në fjali?',opts:['Në fillim','Pas subjektit','Pas foljes','Në fund'],a:3},
      ],
      quiz:[
        {q:'Si thuhet "Shkoj çdo ditë në punë"?',opts:['Ich gehe manchmal zur Arbeit','Ich gehe täglich zur Arbeit','Ich fahre zur Arbeit heute','Ich bin täglich Arbeit'],a:1,exp:'täglich = çdo ditë. Krahaso: täglich (çdo ditë), wöchentlich (çdo javë), monatlich (çdo muaj). "gehe zur Arbeit" — zur = zu + der (Dativ femëror).'},
        {q:'Çfarë do të thotë "nie"?',opts:['Ndonjëherë','Shpesh','Kurrë','Gjithmonë'],a:2,exp:'nie = kurrë. Shkalla e shpeshtësisë: immer (gjithmonë) → oft (shpesh) → manchmal (ndonjëherë) → selten (rrallë) → nie (kurrë). Mos ngatërro: nie (kurrë) vs nein (jo).'},
        {q:'Plotëso (folja me ndajshtesë): Ich rufe dich ___.',opts:['auf','an','aus','ein'],a:1,exp:'Forma e saktë: "an". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "meistens"?',opts:['Kurrë','Rrallë','Ndonjëherë','Zakonisht'],a:3,exp:'"meistens" = Zakonisht. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "palestra" gjermanisht?',opts:['das Schwimmbad','das Fitnessstudio','die Schule','das Büro'],a:1,exp:'Forma e saktë është: "das Fitnessstudio".'},
      ]
    },
    {
      id:'a2m2', num:2, title:'E Kaluara', sub:'Perfekt & Vergangenes',
      story:{ep:'Episodi 2',title:'Si kalove fundjavën?',lines:[
        {type:'narr',text:'Dion dhe kolegu i tij flasin të hënën mëngjes mbi fundjavën.'},
        {type:'line',speaker:'Kolegu',de:'Wie war dein Wochenende?',sq:'Si ishte fudnjava jote?'},
        {type:'line',speaker:'Dion',de:'Super! Ich habe das Brandenburger Tor besucht und am Abend bin ich ins Kino gegangen.',sq:'Super! Vizitova Portën e Brandenburgut dhe mbrëmjen shkova në kino.'},
        {type:'line',speaker:'Kolegu',de:'Was hast du im Kino gesehen?',sq:'Çfarë shike në kino?'},
        {type:'line',speaker:'Dion',de:'Einen deutschen Film. Ich habe nicht alles verstanden, aber es war interessant!',sq:'Një film gjerman. Nuk kuptova gjithçka, por ishte interesant!'},
      ]},
      vocab:[
        {de:'besuchen',sq:'të vizitosh',type:'Folje',ex:'Ich habe das Museum besucht. — Vizitova muzeun.'},
        {de:'sehen',sq:'të shohësh',type:'Folje',ex:'Ich habe einen Film gesehen. — Pashë një film.'},
        {de:'essen (gegessen)',sq:'të hash (hëngra)',type:'Folje',ex:'Ich habe Pizza gegessen. — Hëngra picë.'},
        {de:'trinken (getrunken)',sq:'të pish (piva)',type:'Folje',ex:'Ich habe Wasser getrunken. — Piva ujë.'},
        {de:'gehen (gegangen)',sq:'të shkosh (shkova)',type:'Folje',ex:'Ich bin ins Kino gegangen. — Shkova në kino.'},
        {de:'fahren (gefahren)',sq:'të udhëtosh (udhëtova)',type:'Folje',ex:'Ich bin nach Berlin gefahren. — Udhëtova drejt Berlinit.'},
        {de:'gestern',sq:'dje',type:'Kohë',ex:'Gestern war ich müde. — Dje isha i lodhur.'},
        {de:'letzte Woche',sq:'javën e kaluar',type:'Kohë',ex:'Letzte Woche war ich krank. — Javën e kaluar isha i sëmurë.'},
        {de:'letztes Jahr',sq:'vitin e kaluar',type:'Kohë',ex:'Letztes Jahr bin ich nach Albanien gefahren. — Vitin e kaluar shkova në Shqipëri.'},
        {de:'Wie war...?',sq:'Si ishte...?',type:'Pyetje',ex:'Wie war das Konzert? — Si ishte koncert?'},
      ],
      grammar:[
        {title:'Perfekti — E kaluara me "haben" dhe "sein"',body:'Gjermanishtja e folur përdor Perfektin për të kaluarën. Ndërtohet me "haben" ose "sein" + particip:',
         table:{heads:['Tipi','Kur','Shembull'],rows:[
           ['haben + particip','Shumica e foljeve','Ich habe gegessen — hëngra'],
           ['sein + particip','Lëvizja & ndryshimi','Ich bin gefahren — udhëtova'],
         ]}},
        {title:'Si formohet participi (ge-...-(e)t / ge-...-en)',body:'',
         table:{heads:['Folje','Particip','Shembull'],rows:[
           ['machen','gemacht','Ich habe das gemacht.'],
           ['spielen','gespielt','Ich habe Fußball gespielt.'],
           ['essen','gegessen','Ich habe gegessen.'],
           ['fahren','gefahren','Ich bin gefahren.'],
           ['gehen','gegangen','Ich bin gegangen.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Hëngra picë" gjermanisht (Perfekt)?',opts:['Ich esse Pizza','Ich habe Pizza gegessen','Ich bin Pizza gegessen','Ich hatte Pizza gegessen'],a:1},
        {type:'Zgjedh përgjigjen',q:'Cila folje ndihmëse përdoret me "gehen" në Perfekt?',opts:['haben','sein','werden','können'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si formohet participi i "machen"?',opts:['mached','gemacht','macht','gemaking'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "javën e kaluar" gjermanisht?',opts:['nächste Woche','diese Woche','letzte Woche','jede Woche'],a:2},
      ],
      quiz:[
        {q:'Plotëso: Ich ___ ins Kino gegangen.',opts:['habe','bin','hatte','war'],a:1,exp:'Forma e saktë: "bin". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Cili është participi i "trinken"?',opts:['getrinkt','trinkt','getrunken','trinkend'],a:2,exp:'Përgjigja e saktë: "getrunken". Krahasoji opsionet: getrinkt / trinkt / getrunken — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "Wie war dein Wochenende?"',opts:['Si do të jetë fudnjava?','Si ishte fudnjava jote?','Çfarë bën fundjavën?','Sa zgjat fudnjava?'],a:1,exp:'"Wie war dein Wochenende?" = Si ishte fudnjava jote?. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Vizitova Vjenën" (Perfekt)?',opts:['Ich bin Wien besucht','Ich habe Wien besucht','Ich besuche Wien','Ich war Wien besucht'],a:1,exp:'Forma e kohës së kaluar është: "Ich habe Wien besucht".'},
        {q:'Plotëso: Er ___ nach Hause gefahren.',opts:['hat','habe','ist','war'],a:2,exp:'Forma e saktë: "ist". Praktiko duke shkruar 3 fjali të ngjashme!'},
      ]
    },
{
      id:'a2m3', num:3, title:'Shëndeti & Trupi', sub:'Gesundheit & Körper',
      story:{ep:'Episodi 3',title:'Dion është i sëmurë',lines:[
        {type:'narr',text:'Dion zgjohet me dhimbje koke dhe temperaturë të lartë. Kolegu i tij e çon te mjeku.'},
        {type:'line',speaker:'Mjeku',de:'Guten Tag! Was fehlt Ihnen?',sq:'Mirëdita! Çfarë ju dhemb?'},
        {type:'line',speaker:'Dion',de:'Ich habe Kopfschmerzen und Fieber. Mir ist auch schlecht.',sq:'Kam dhimbje koke dhe temperaturë. Edhe më vjen keq.'},
        {type:'line',speaker:'Mjeku',de:'Seit wann haben Sie diese Beschwerden?',sq:'Që kur i keni këto ankesa?'},
        {type:'line',speaker:'Dion',de:'Seit gestern Abend. Ich habe auch Halsschmerzen.',sq:'Që mbrëmë. Kam edhe dhimbje fyti.'},
        {type:'line',speaker:'Mjeku',de:'Sie haben eine Erkältung. Ich verschreibe Ihnen Medikamente. Bleiben Sie zu Hause!',sq:'Keni grip. Ju jap ilaçe. Qëndroni në shtëpi!'},
      ]},
      vocab:[
        {de:'der Kopf',sq:'koka',type:'Trup',ex:'Mir tut der Kopf weh. — Më dhemb koka.'},
        {de:'der Bauch',sq:'barku',type:'Trup',ex:'Ich habe Bauchschmerzen. — Kam dhimbje barku.'},
        {de:'der Hals',sq:'fyti / qafa',type:'Trup',ex:'Mein Hals tut weh. — Më dhemb fyti.'},
        {de:'das Fieber',sq:'temperatura / ethja',type:'Sëmundje',ex:'Ich habe Fieber — 39 Grad! — Kam temperaturë — 39 gradë!'},
        {de:'die Erkältung',sq:'gripi / ftohja',type:'Sëmundje',ex:'Ich habe eine Erkältung. — Kam grip.'},
        {de:'die Kopfschmerzen',sq:'dhimbje koke',type:'Sëmundje',ex:'Ich habe starke Kopfschmerzen. — Kam dhimbje të forta koke.'},
        {de:'das Medikament',sq:'ilaçi / barna',type:'Shëndet',ex:'Nehmen Sie diese Medikamente! — Merrni këto ilaçe!'},
        {de:'der Arzttermin',sq:'takimi me mjek',type:'Shëndet',ex:'Ich brauche einen Arzttermin. — Më duhet takim me mjek.'},
        {de:'krank',sq:'i/e sëmurë',type:'Mbiemër',ex:'Ich bin krank und bleibe zu Hause. — Jam i sëmurë dhe qëndroj në shtëpi.'},
        {de:'gesund',sq:'i/e shëndetshëm',type:'Mbiemër',ex:'Bleib gesund! — Qëndro i shëndetshëm!'},
        {de:'Was fehlt Ihnen?',sq:'Çfarë ju dhemb?',type:'Pyetje',ex:'Was fehlt Ihnen? — Mir tut der Rücken weh. — Çfarë ju dhemb? — Më dhemb shpina.'},
        {de:'Mir tut ... weh.',sq:'Më dhemb ...',type:'Shprehje',ex:'Mir tut der Kopf weh. — Mir tut der Bauch weh.'},
        {de:'sich ausruhen',sq:'të pushosh',type:'Folje',ex:'Ich muss mich ausruhen. — Duhet të pusho.'},
        {de:'die Tablette',sq:'tableta',type:'Shëndet',ex:'Nehmen Sie zwei Tabletten täglich! — Merrni dy tableta në ditë!'},
        {de:'die Krankenversicherung',sq:'sigurimi shëndetësor',type:'Shëndet',ex:'Haben Sie eine Krankenversicherung? — Keni sigurim shëndetësor?'},
      ],
      grammar:[
        {title:'Foljet modale: dürfen, sollen, müssen',body:'Tre folje të rëndësishme modale për situata shëndetësore:',
         table:{heads:['Folje','Kuptim','Shembull'],rows:[
           ['müssen','duhet (domosdoshmëri)','Ich muss Tabletten nehmen. — Duhet të marr tableta.'],
           ['dürfen','lejohem / mund (me leje)','Sie dürfen nicht arbeiten. — Nuk lejohet të punoni.'],
           ['sollen','duhet (sipas dikujt)','Sie sollen viel trinken. — Duhet të pini shumë ujë.'],
         ]}},
        {title:'Dhimbja — "Mir tut ... weh"',body:'Shprehja standarde për dhimbje:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Mir tut der Kopf weh.','Më dhemb koka.'],
           ['Mir tut der Rücken weh.','Më dhemb shpina.'],
           ['Mir tut der Bauch weh.','Më dhemb barku.'],
           ['Ich habe Kopfschmerzen.','Kam dhimbje koke. (alternativa)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Më dhemb koka" gjermanisht?',opts:['Ich habe Kopf','Mir tut der Kopf weh','Der Kopf ist krank','Ich bin Kopfschmerzen'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "krank"?',opts:['i shëndetshëm','i lodhur','i sëmurë','i trishtueshëm'],a:2},
        {type:'Zgjedh përgjigjen',q:'Cila folje do të thotë "lejohem"?',opts:['müssen','sollen','dürfen','können'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "sigurimi shëndetësor"?',opts:['die Tablette','das Medikament','die Krankenversicherung','der Arzt'],a:2},
      ],
      quiz:[
        {q:'Si thuhet "Kam grip" gjermanisht?',opts:['Ich habe Fieber','Ich bin krank','Ich habe eine Erkältung','Mir tut alles weh'],a:2,exp:'Forma e saktë është: "Ich habe eine Erkältung".'},
        {q:'Çfarë do të thotë "Sie dürfen nicht arbeiten"?',opts:['Duhet të punoni','Nuk lejohet të punoni','Doni të punoni','Mund të punoni'],a:1,exp:'"Sie dürfen nicht arbeiten" = Nuk lejohet të punoni. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "tableta" gjermanisht?',opts:['das Medikament','die Tablette','die Spritze','der Arzt'],a:1,exp:'Forma e saktë është: "die Tablette".'},
        {q:'Çfarë do të thotë "sich ausruhen"?',opts:['Të sëmurësh','Të pushosh','Të punosh','Të mjekohesh'],a:1,exp:'"sich ausruhen" = Të pushosh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Plotëso: Ich ___ viel Wasser trinken.',opts:['darf','soll','müssen','kann'],a:1,exp:'Forma e saktë: "soll". Praktiko duke shkruar 3 fjali të ngjashme!'},
      ]
    },
    {
      id:'a2m4', num:4, title:'Blerjet', sub:'Einkaufen & Preise',
      story:{ep:'Episodi 4',title:'Në qendër tregtare',lines:[
        {type:'narr',text:'Dion dhe Klea bëjnë blerje të shtunën. Dion dëshiron të blejë dhurata për familjen.'},
        {type:'line',speaker:'Klea',de:'Was suchst du für deine Mutter?',sq:'Çfarë po kërkon për nënën tënde?'},
        {type:'line',speaker:'Dion',de:'Ich möchte eine Handtasche kaufen, aber nicht zu teuer.',sq:'Dua të blej një çantë, por jo shumë e shtrenjtë.'},
        {type:'line',speaker:'Shitësi',de:'Kann ich Ihnen helfen?',sq:'Mund t\'ju ndihmoj?'},
        {type:'line',speaker:'Dion',de:'Ja, bitte. Wie viel kostet diese Tasche hier?',sq:'Po, ju lutem. Sa kushton kjo çantë këtu?'},
        {type:'line',speaker:'Shitësi',de:'Die kostet 45 Euro. Wir haben gerade Sale — 20% Rabatt!',sq:'Kjo kushton 45 euro. Kemi aksion tani — 20% zbritje!'},
        {type:'line',speaker:'Dion',de:'Super! Das ist ein guter Preis. Ich nehme sie!',sq:'Shkëlqyeshëm! Ky është çmim i mirë. E marr!'},
      ]},
      vocab:[
        {de:'kaufen',sq:'të blesh',type:'Folje',ex:'Ich kaufe ein neues Handy. — Blej telefon të ri.'},
        {de:'bezahlen',sq:'të paguash',type:'Folje',ex:'Ich bezahle mit Karte. — Paguaj me kartë.'},
        {de:'der Preis',sq:'çmimi',type:'Blerje',ex:'Der Preis ist zu hoch. — Çmimi është shumë i lartë.'},
        {de:'der Rabatt',sq:'zbritja / zbriti',type:'Blerje',ex:'Es gibt 30% Rabatt! — Ka 30% zbritje!'},
        {de:'die Kasse',sq:'arka / kasa',type:'Blerje',ex:'Ich gehe zur Kasse. — Shkoj te arka.'},
        {de:'die Rechnung',sq:'fatura / llogaria',type:'Blerje',ex:'Kann ich die Rechnung haben? — Mund ta kem faturën?'},
        {de:'umtauschen',sq:'të kthesh / ndërrosh',type:'Folje',ex:'Ich möchte das umtauschen. — Dua ta ndërroj.'},
        {de:'die Größe',sq:'numri / madhësia',type:'Blerje',ex:'Welche Größe haben Sie? — Çfarë numri keni?'},
        {de:'anprobieren',sq:'të provojsh (rroba)',type:'Folje',ex:'Darf ich das anprobieren? — Mund ta provoj?'},
        {de:'Kann ich Ihnen helfen?',sq:'Mund t\'ju ndihmoj?',type:'Shprehje',ex:'Kann ich Ihnen helfen? — Ja, bitte! — Mund t\'ju ndihmoj? — Po, faleminderit!'},
        {de:'Ich schaue mich nur um.',sq:'Thjesht po shikoj.',type:'Shprehje',ex:'Kann ich Ihnen helfen? — Danke, ich schaue mich nur um.'},
        {de:'günstig',sq:'i lirë / me çmim të mirë',type:'Mbiemër',ex:'Das ist günstig! — Ky është me çmim të mirë!'},
        {de:'die Umkleidekabine',sq:'kabina e provës',type:'Dyqan',ex:'Die Umkleidekabine ist dort drüben. — Kabina e provës është atje.'},
      ],
      grammar:[
        {title:'Rasa Akkusativ — Objekti i drejtë',body:'Kur blejmë diçka, emri bëhet objekt dhe meri rasën Akkusativ. Nyjat ndryshojnë:',
         table:{heads:['Gjinia','Nominativ','Akkusativ','Shembull'],rows:[
           ['Mashkullore','der','den','Ich kaufe den Mantel.'],
           ['Femërore','die','die','Ich kaufe die Tasche.'],
           ['Asnjanëse','das','das','Ich kaufe das Buch.'],
           ['Shumës','die','die','Ich kaufe die Schuhe.'],
         ]}},
        {title:'Pyetjet në dyqan',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Was kostet das?','Sa kushton kjo?'],
           ['Gibt es das in Größe 42?','A ka numrin 42?'],
           ['Darf ich das anprobieren?','Mund ta provoj?'],
           ['Haben Sie das auch in Blau?','E keni edhe në blu?'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Dua ta ndërroj" gjermanisht?',opts:['Ich möchte kaufen','Ich möchte bezahlen','Ich möchte umtauschen','Ich möchte anprobieren'],a:2},
        {type:'Zgjedh përgjigjen',q:'Akkusativ i "der Mantel" (mashkullore) është?',opts:['der Mantel','den Mantel','dem Mantel','des Mantels'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Thjesht po shikoj" gjermanisht?',opts:['Ich kaufe nichts','Ich schaue mich nur um','Ich brauche nichts','Ich suche nicht'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "der Rabatt"?',opts:['Çmimi','Fatura','Zbritja','Arka'],a:2},
      ],
      quiz:[
        {q:'Çfarë do të thotë "Darf ich das anprobieren?"',opts:['Mund ta blej?','Mund ta provoj?','Sa kushton?','Keni numrin tim?'],a:1,exp:'"Darf ich das anprobieren?" = Mund ta provoj?. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Akkusativ i "die Tasche" (femërore) është?',opts:['der Tasche','den Tasche','die Tasche','dem Tasche'],a:2,exp:'Rasa e saktë kërkon: "die Tasche".'},
        {q:'Si thuhet "i lirë / me çmim të mirë"?',opts:['teuer','billig','günstig','preiswert'],a:2,exp:'Përgjigja e saktë: "günstig". Krahasoji opsionet: teuer / billig / günstig — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Kasse"?',opts:['Çmimi','Arka/kasa','Fatura','Dyqani'],a:1,exp:'"die Kasse" = Arka/kasa. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Paguaj me kartë"?',opts:['Ich kaufe mit Karte','Ich bezahle mit Karte','Ich nehme Karte','Ich gebe Karte'],a:1,exp:'Përgjigja e saktë: "Ich bezahle mit Karte". Krahasoji opsionet: Ich kaufe mit Karte / Ich bezahle mit Karte / Ich nehme Karte — çfarë bën ndryshimin?'},
      ]
    },
    {
      id:'a2m5', num:5, title:'Restoranti & Kafja', sub:'Im Restaurant & Café',
      story:{ep:'Episodi 5',title:'Darka e parë me kolegët',lines:[
        {type:'narr',text:'Dion dhe kolegët shkojnë në restorant italian pas punës.'},
        {type:'line',speaker:'Kamerieri',de:'Guten Abend! Haben Sie reserviert?',sq:'Mirëmbrëma! Keni rezervuar?'},
        {type:'line',speaker:'Dion',de:'Ja, auf den Namen Schmidt. Für vier Personen.',sq:'Po, në emrin Schmidt. Për katër persona.'},
        {type:'line',speaker:'Kamerieri',de:'Sehr gut. Bitte folgen Sie mir. Hier ist Ihre Speisekarte.',sq:'Shumë mirë. Ju lutem ndiqni mua. Ja menuja juaj.'},
        {type:'line',speaker:'Kolegu',de:'Was empfehlen Sie heute?',sq:'Çfarë rekomandon sot?'},
        {type:'line',speaker:'Kamerieri',de:'Unser Tagesgericht ist Spaghetti Carbonara — sehr lecker!',sq:'Gjella e ditës është Spaghetti Carbonara — shumë e shijshme!'},
        {type:'line',speaker:'Dion',de:'Das nehme ich! Und ein Glas Wasser, bitte.',sq:'Këtë marr! Dhe një gotë ujë, ju lutem.'},
      ]},
      vocab:[
        {de:'die Speisekarte',sq:'menuja',type:'Restorant',ex:'Kann ich die Speisekarte haben? — Mund ta kem menunë?'},
        {de:'bestellen',sq:'të porosisësh',type:'Folje',ex:'Ich möchte bestellen. — Dua të porosit.'},
        {de:'das Tagesgericht',sq:'gjella e ditës',type:'Restorant',ex:'Was ist das Tagesgericht? — Çfarë është gjella e ditës?'},
        {de:'empfehlen',sq:'të rekomandosh',type:'Folje',ex:'Was empfehlen Sie? — Çfarë rekomandon?'},
        {de:'die Rechnung, bitte!',sq:'Faturën, ju lutem!',type:'Shprehje',ex:'Entschuldigung! Die Rechnung, bitte! — Faturën, ju lutem!'},
        {de:'getrennt / zusammen',sq:'veç / bashkë (pagesa)',type:'Shprehje',ex:'Getrennt oder zusammen? — Veç apo bashkë?'},
        {de:'der Kellner / die Kellnerin',sq:'kamerieri/a',type:'Restorant',ex:'Der Kellner kommt gleich. — Kamerieri vjen tani.'},
        {de:'reservieren',sq:'të rezervosh',type:'Folje',ex:'Ich möchte einen Tisch reservieren. — Dua të rezervoj tavolinë.'},
        {de:'Ich hätte gern...',sq:'Do të dëshiroja...',type:'Shprehje',ex:'Ich hätte gern ein Steak, bitte. — Do të dëshiroja biftek, ju lutem.'},
        {de:'das Trinkgeld',sq:'bakshishi',type:'Restorant',ex:'Das Trinkgeld ist freiwillig. — Bakshishi është vullnetar.'},
        {de:'Guten Appetit!',sq:'Ju bëftë mirë!',type:'Shprehje',ex:'Guten Appetit! — Danke, gleichfalls! — Ju bëftë mirë! — Faleminderit, ju gjithashtu!'},
        {de:'vegetarisch / vegan',sq:'vegjetarian / vegan',type:'Ushqim',ex:'Haben Sie vegetarische Gerichte? — Keni gjella vegjetariane?'},
        {de:'die Allergie',sq:'alergjia',type:'Shëndet',ex:'Ich habe eine Allergie gegen Nüsse. — Kam alergjia ndaj arrave.'},
      ],
      grammar:[
        {title:'"Ich hätte gern" — forma e sjellshme',body:'"Ich hätte gern" është forma shumë e sjellshme dhe e zakonshme në restorant. Është Konjunktiv II i "haben":',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich hätte gern eine Suppe.','Do të dëshiroja supë.'],
           ['Ich möchte eine Pizza.','Dua një picë.'],
           ['Bringen Sie mir bitte...','Më sillni ju lutem...'],
         ]}},
        {title:'Pyetjet e zakonshme në restorant',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Haben Sie reserviert?','Keni rezervuar?'],
           ['Was empfehlen Sie?','Çfarë rekomandon?'],
           ['Was darf es sein?','Çfarë dëshironi?'],
           ['Noch etwas?','Diçka tjetër?'],
           ['Hat es geschmeckt?','Ju pëlqeu ushqimi?'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Do të dëshiroja supë" (sjellje)?',opts:['Ich will Suppe','Ich möchte Suppe','Ich hätte gern eine Suppe','Ich esse Suppe'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "getrennt"?',opts:['Bashkë','Veç-veç','Shpejt','Lirë'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Faturën, ju lutem"?',opts:['Die Speisekarte, bitte','Die Rechnung, bitte','Das Essen, bitte','Das Trinkgeld, bitte'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "empfehlen"?',opts:['Të porosisësh','Të gatuash','Të rekomandosh','Të paguash'],a:2},
      ],
      quiz:[
        {q:'Si thuhet "menuja" gjermanisht?',opts:['die Rechnung','die Speisekarte','das Gericht','der Kellner'],a:1,exp:'Forma e saktë është: "die Speisekarte".'},
        {q:'Çfarë do të thotë "Guten Appetit"?',opts:['Mirëmëngjes','Ju bëftë mirë','Faleminderit','Mirupafshim'],a:1,exp:'Guten Appetit! thuhet PARA ngrënies, jo pas. Ekuivalenti shqip: "Ju bëftë mirë!" Përgjigja: Danke, gleichfalls! (Faleminderit, po ashtu!).'},
        {q:'Si thuhet "Dua të rezervoj tavolinë"?',opts:['Ich möchte einen Tisch reservieren','Ich nehme einen Tisch','Ich brauche Tisch','Ich kaufe Tisch'],a:0,exp:'Përgjigja e saktë: "Ich möchte einen Tisch reservieren". Krahasoji opsionet: Ich möchte einen Tisch reservieren / Ich nehme einen Tisch / Ich brauche Tisch — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "das Trinkgeld"?',opts:['Çmimi','Fatura','Bakshishi','Menuja'],a:2,exp:'"das Trinkgeld" = Bakshishi. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "vegetarian" gjermanisht?',opts:['biologisch','vegetarisch','gesund','natürlich'],a:1,exp:'Forma e saktë është: "vegetarisch".'},
      ]
    },
    {
      id:'a2m6', num:6, title:'Shtëpia & Qiraja', sub:'Wohnung & Miete',
      story:{ep:'Episodi 6',title:'Apartamenti i ri',lines:[
        {type:'narr',text:'Dion gjen apartamentin e tij të parë në Berlin. Takohet me qiradhënësin.'},
        {type:'line',speaker:'Qiradhënësi',de:'Die Wohnung hat 55 Quadratmeter, zwei Zimmer, Küche und Bad.',sq:'Apartamenti ka 55 metra katrorë, dy dhoma, kuzhinë dhe banjo.'},
        {type:'line',speaker:'Dion',de:'Wie hoch ist die Miete?',sq:'Sa është qiraja?'},
        {type:'line',speaker:'Qiradhënësi',de:'800 Euro warm, inklusive Heizung und Wasser.',sq:'800 euro me ngrohje, duke përfshirë ngrohjen dhe ujin.'},
        {type:'line',speaker:'Dion',de:'Ist die Wohnung möbliert?',sq:'Është apartamenti i mobiluar?'},
        {type:'line',speaker:'Qiradhënësi',de:'Teilmöbliert. Bett und Schrank sind vorhanden.',sq:'Pjesërisht i mobiluar. Krevati dhe dollapi janë.'},
        {type:'line',speaker:'Dion',de:'Wann kann ich einziehen?',sq:'Kur mund të hyj?'},
      ]},
      vocab:[
        {de:'die Miete',sq:'qiraja',type:'Banim',ex:'Die Miete beträgt 900 Euro. — Qiraja është 900 euro.'},
        {de:'der Vermieter',sq:'qiradhënësi',type:'Banim',ex:'Mein Vermieter ist nett. — Qiradhënësi im është i mirë.'},
        {de:'der Mieter',sq:'qiramarrësi',type:'Banim',ex:'Ich bin Mieter. — Jam qiramarrës.'},
        {de:'der Mietvertrag',sq:'kontrata e qirasë',type:'Banim',ex:'Ich unterschreibe den Mietvertrag. — Nënshkruaj kontratën e qirasë.'},
        {de:'die Kaution',sq:'depozita',type:'Banim',ex:'Die Kaution beträgt zwei Monatsmieten. — Depozita është dy qira mujore.'},
        {de:'einziehen / ausziehen',sq:'të hysh / dalësh (banim)',type:'Folje',ex:'Ich ziehe am ersten Mai ein. — Hyj më 1 maj.'},
        {de:'die Nebenkosten',sq:'shpenzimet shtesë',type:'Banim',ex:'Nebenkosten: Strom, Heizung, Wasser. — Shpenzime: rrymë, ngrohje, ujë.'},
        {de:'möbliert',sq:'i mobiluar',type:'Mbiemër',ex:'Die Wohnung ist möbliert. — Apartamenti është i mobiluar.'},
        {de:'der Quadratmeter (m²)',sq:'metra katrorë',type:'Matje',ex:'Die Wohnung hat 60 m². — Apartamenti ka 60 m².'},
        {de:'die Heizung',sq:'ngrohja',type:'Shpenzim',ex:'Die Heizung ist inklusive. — Ngrohja është e përfshirë.'},
        {de:'renoviert / neu',sq:'i rinovuar / i ri',type:'Mbiemër',ex:'Die Wohnung ist frisch renoviert. — Apartamenti është sapo rinovuar.'},
        {de:'Wann kann ich einziehen?',sq:'Kur mund të hyj?',type:'Pyetje',ex:'Wann kann ich einziehen? — Ab dem ersten. — Kur mund të hyj? — Nga e para.'},
      ],
      grammar:[
        {title:'Prepozicat me Dativ — in, an, auf, bei, mit, von, zu',body:'Këto prepozicione krkojnë gjithmonë rasën Dativ:',
         table:{heads:['Prepozicion','Shembull','Shqip'],rows:[
           ['in + dem = im','Ich wohne im dritten Stock.','Jetoj në katin e tretë.'],
           ['bei + dem = beim','Ich wohne beim Bahnhof.','Jetoj pranë stacionit.'],
           ['zu + dem = zum','Ich gehe zum Supermarkt.','Shkoj te supermarketi.'],
           ['von + dem = vom','Ich komme vom Arzt.','Vij nga mjeku.'],
         ]}},
        {title:'Kontrata e qirasë — fjalët kyçe',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Die Miete beträgt...','Qiraja është/arrin...'],
           ['inklusive Nebenkosten','duke përfshirë shpenzimet'],
           ['ab dem ersten','nga i pari (i muajit)'],
           ['unbefristet','pa afat (kontratë e hapur)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "qiraja" gjermanisht?',opts:['die Kaution','der Mietvertrag','die Miete','die Wohnung'],a:2},
        {type:'Zgjedh përgjigjen',q:'"in + dem" bashkë bëhen?',opts:['inem','im','an','beim'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "einziehen"?',opts:['Të dalësh nga banesa','Të hysh të banosh','Të paguash qiranë','Të nënshkruash kontratën'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "depozita" gjermanisht?',opts:['die Miete','die Kaution','die Nebenkosten','die Heizung'],a:1},
      ],
      quiz:[
        {q:'Çfarë do të thotë "möbliert"?',opts:['I lirë','I ri','I mobiluar','I pastër'],a:2,exp:'"möbliert" = I mobiluar. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Qiraja është 750 euro"?',opts:['Die Miete kostet 750 Euro','Die Miete beträgt 750 Euro','Ich zahle 750 Euro','Die Wohnung ist 750 Euro'],a:1,exp:'Përgjigja e saktë: "Die Miete beträgt 750 Euro". Krahasoji opsionet: Die Miete kostet 750 Euro / Die Miete beträgt 750 Euro / Ich zahle 750 Euro — çfarë bën ndryshimin?'},
        {q:'"zu + dem" bashkë bëhen?',opts:['zum','zum','zudem','zudiem'],a:0,exp:'Përgjigja e saktë: "zum". Krahasoji opsionet: zum / zum / zudem — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Nebenkosten"?',opts:['Qiraja','Depozita','Shpenzimet shtesë','Kontrata'],a:2,exp:'"die Nebenkosten" = Shpenzimet shtesë. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Kur mund të hyj?" gjermanisht?',opts:['Wann kann ich ausziehen?','Wann kann ich einziehen?','Wie kann ich wohnen?','Wo kann ich einziehen?'],a:1,exp:'Forma e saktë është: "Wann kann ich einziehen?".'},
      ]
    },
    {
      id:'a2m7', num:7, title:'Puna & Intervista', sub:'Arbeit & Vorstellungsgespräch',
      story:{ep:'Episodi 7',title:'Intervista e madhe',lines:[
        {type:'narr',text:'Dion aplikon për punë të rregullt si programues. Sot është intervista.'},
        {type:'line',speaker:'HR',de:'Erzählen Sie uns etwas über sich!',sq:'Na tregoni diçka rreth jush!'},
        {type:'line',speaker:'Dion',de:'Ich bin 29 Jahre alt und komme aus Albanien. Ich habe Informatik studiert.',sq:'Jam 29 vjeç dhe vij nga Shqipëria. Kam studiuar informatikë.'},
        {type:'line',speaker:'HR',de:'Warum möchten Sie bei uns arbeiten?',sq:'Pse doni të punoni tek ne?'},
        {type:'line',speaker:'Dion',de:'Ihr Unternehmen ist innovativ und ich möchte meine Fähigkeiten weiterentwickeln.',sq:'Kompania juaj është inovative dhe dua të zhvilloj aftësitë e mia.'},
        {type:'line',speaker:'HR',de:'Welche Stärken haben Sie?',sq:'Cilat janë pikat tuaja të forta?'},
        {type:'line',speaker:'Dion',de:'Ich bin teamfähig, lernbereit und sehr motiviert.',sq:'Jam punëtor ekipi, i gatshëm të mësoj dhe shumë i motivuar.'},
      ]},
      vocab:[
        {de:'die Bewerbung',sq:'aplikimi / kërkesa',type:'Punë',ex:'Ich schicke meine Bewerbung ab. — Dërgoj aplikimin tim.'},
        {de:'der Lebenslauf (CV)',sq:'CV / jeta profesionale',type:'Punë',ex:'Mein Lebenslauf ist aktualisiert. — CV-ja ime është e azhurnuar.'},
        {de:'die Stelle / der Job',sq:'vendi i punës / puna',type:'Punë',ex:'Ich suche eine neue Stelle. — Po kërkoj vend pune të ri.'},
        {de:'die Fähigkeit',sq:'aftësia',type:'Punë',ex:'Ich habe viele Fähigkeiten. — Kam shumë aftësi.'},
        {de:'die Stärke / Schwäche',sq:'pika e fortë / e dobët',type:'Punë',ex:'Was sind Ihre Stärken? — Cilat janë pikat tuaja të forta?'},
        {de:'teamfähig',sq:'punëtor ekipi',type:'Cilësi',ex:'Ich bin teamfähig und kommunikativ. — Jam punëtor ekipi dhe komunikues.'},
        {de:'das Gehalt / der Lohn',sq:'paga / rroga',type:'Punë',ex:'Was ist das Gehalt? — Sa është paga?'},
        {de:'die Erfahrung',sq:'përvoja',type:'Punë',ex:'Ich habe drei Jahre Erfahrung. — Kam tre vjet përvojë.'},
        {de:'der Vertrag',sq:'kontrata',type:'Punë',ex:'Ich unterschreibe den Vertrag morgen. — Nënshkruaj kontratën nesër.'},
        {de:'kündigen',sq:'të japësh dorëheqjen',type:'Folje',ex:'Er hat gekündigt. — Ai ka dhënë dorëheqjen.'},
        {de:'Erzählen Sie über sich!',sq:'Na tregoni rreth jush!',type:'Intervistë',ex:'Erzählen Sie uns etwas über sich! — Na tregoni diçka rreth jush!'},
        {de:'Warum möchten Sie hier arbeiten?',sq:'Pse doni të punoni këtu?',type:'Intervistë',ex:'Warum möchten Sie bei uns arbeiten? — Pse doni të punoni tek ne?'},
      ],
      grammar:[
        {title:'Preteriti i "sein" dhe "haben"',body:'Në gjuhën e shkruar dhe narrative, "sein" dhe "haben" shpesh përdoren në formën e tyre Preterit (jo Perfekt):',
         table:{heads:['Person','sein (ishte)','haben (kishte)'],rows:[
           ['ich','war','hatte'],['du','warst','hattest'],
           ['er/sie','war','hatte'],['wir','waren','hatten'],['sie/Sie','waren','hatten'],
         ]}},
        {title:'Fraza të dobishme interviste',body:'',
         table:{heads:['Pyetja','Përgjigja model'],rows:[
           ['Warum bewerben Sie sich?','Weil ich meine Karriere weiterentwickeln möchte.'],
           ['Was sind Ihre Schwächen?','Manchmal bin ich zu perfektionistisch.'],
           ['Wann können Sie anfangen?','Ab sofort / Ab dem ersten Oktober.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Preteriti i "sein" (ich) është?',opts:['hatte','haben','war','ist'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Bewerbung"?',opts:['Kontrata','Aplikimi','Paga','Intervista'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Dua të zhvilloj aftësitë e mia"?',opts:['Ich möchte meine Fähigkeiten nutzen','Ich möchte meine Fähigkeiten weiterentwickeln','Ich habe viele Fähigkeiten','Ich brauche Fähigkeiten'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "kündigen"?',opts:['Të aplikosh','Të punosh','Të nënshkruash','Të japësh dorëheqjen'],a:3},
      ],
      quiz:[
        {q:'Preteriti i "haben" (wir) është?',opts:['haben','hatten','hatte','hattet'],a:1,exp:'Përgjigja e saktë: "hatten". Krahasoji opsionet: haben / hatten / hatte — çfarë bën ndryshimin?'},
        {q:'Si thuhet "vendi i punës" gjermanisht?',opts:['die Firma','die Stelle','der Chef','das Büro'],a:1,exp:'Forma e saktë është: "die Stelle".'},
        {q:'Çfarë do të thotë "teamfähig"?',opts:['I/e zgjuar','Punëtor/e ekipi','I/e shpejtë','I/e motivuar'],a:1,exp:'"teamfähig" = Punëtor/e ekipi. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "CV" gjermanisht?',opts:['die Bewerbung','der Brief','der Lebenslauf','die Stelle'],a:2,exp:'Forma e saktë është: "der Lebenslauf".'},
        {q:'Çfarë do të thotë "Warum möchten Sie hier arbeiten?"',opts:['Kur filloni punën?','Sa është paga?','Pse doni të punoni këtu?','Çfarë aftësi keni?'],a:2,exp:'"Warum möchten Sie hier arbeiten?" = Pse doni të punoni këtu?. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'a2m8', num:8, title:'Hobit & Koha e Lirë', sub:'Hobbys & Freizeit',
      story:{ep:'Episodi 8',title:'Fundjavë aktive',lines:[
        {type:'narr',text:'Kolegët pyesin Dionin çfarë bën fundjavën. Ai ka zbuluar hobi të reja në Berlin.'},
        {type:'line',speaker:'Kolegu',de:'Was machst du in deiner Freizeit?',sq:'Çfarë bën në kohën e lirë?'},
        {type:'line',speaker:'Dion',de:'Ich spiele Gitarre und gehe oft laufen. Und du?',sq:'Luaj gitarë dhe shpesh vrapoj. Po ti?'},
        {type:'line',speaker:'Kolegu',de:'Ich fotografiere gern und koche manchmal für Freunde.',sq:'Fotografoj me dëshirë dhe ndonjëherë gatuaj për miqtë.'},
        {type:'line',speaker:'Dion',de:'Cool! Ich möchte auch Kochen lernen. Kannst du mir beibringen?',sq:'Bukur! Edhe unë dua të mësoj të gatuaj. Mund të më mësosh?'},
        {type:'line',speaker:'Kolegu',de:'Natürlich! Am Samstag machen wir zusammen eine albanische Spezialität!',sq:'Natyrisht! Të shtunën bëjmë bashkë një specialitet shqiptar!'},
      ]},
      vocab:[
        {de:'das Hobby',sq:'hobi',type:'Kohë e lirë',ex:'Was ist dein Hobby? — Cili është hobi yt?'},
        {de:'lesen',sq:'të lexosh',type:'Hobi',ex:'Ich lese gern Romane. — Lexoj me dëshirë romane.'},
        {de:'reisen',sq:'të udhëtosh',type:'Hobi',ex:'Ich reise gern ins Ausland. — Udhëtoj me dëshirë jashtë.'},
        {de:'Musik hören',sq:'të dëgjosh muzikë',type:'Hobi',ex:'Ich höre gern Jazz. — Dëgjoj me dëshirë jazz.'},
        {de:'Sport treiben',sq:'të bësh sport',type:'Hobi',ex:'Ich treibe dreimal pro Woche Sport. — Bëj sport tre herë në javë.'},
        {de:'fotografieren',sq:'të fotografosh',type:'Hobi',ex:'Ich fotografiere gern Stadtlandschaften. — Fotografoj me dëshirë peizazhe urbane.'},
        {de:'kochen',sq:'të gatuash',type:'Hobi',ex:'Ich koche gern albanisches Essen. — Gatuaj me dëshirë ushqim shqiptar.'},
        {de:'zeichnen',sq:'të vizatosh',type:'Hobi',ex:'Als Kind habe ich viel gezeichnet. — Si fëmijë kam vizatuar shumë.'},
        {de:'schwimmen',sq:'të notosh',type:'Sport',ex:'Im Sommer schwimme ich täglich. — Në verë not çdo ditë.'},
        {de:'das Konzert',sq:'koncerti',type:'Kulturë',ex:'Ich gehe gern ins Konzert. — Shkoj me dëshirë në koncert.'},
        {de:'gern / lieber / am liebsten',sq:'me dëshirë / më shumë / mbi të gjitha',type:'Shprehje',ex:'Ich lese gern, aber ich reise lieber. — Lexoj me dëshirë, por preferoj të udhëtoj.'},
        {de:'Wie oft...?',sq:'Sa shpesh...?',type:'Pyetje',ex:'Wie oft gehst du ins Fitnessstudio? — Sa shpesh shkon në palestër?'},
      ],
      grammar:[
        {title:'Komparativ — Krahasimi',body:'Për të krahasuar gjëra: mbiemri + -er (komparativ), am + mbiemri + -sten (superlativ):',
         table:{heads:['Bazë','Komparativ','Superlativ','Shembull'],rows:[
           ['schnell','schneller','am schnellsten','Er läuft schneller als ich.'],
           ['gut','besser','am besten','Das ist besser!'],
           ['gern','lieber','am liebsten','Ich reise am liebsten.'],
           ['viel','mehr','am meisten','Ich lese mehr als du.'],
         ]}},
        {title:'"als" vs "wie" — Krahasimi',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Er ist größer als ich.','Ai është më i gjatë se unë. (ndryshim)'],
           ['Er ist so groß wie ich.','Ai është po aq i gjatë sa unë. (barabartësi)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Komparativ i "gut" (mirë) është?',opts:['guter','gutier','besser','mehr gut'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Sa shpesh...?" gjermanisht?',opts:['Wie viel?','Wie oft?','Wie lange?','Wie schnell?'],a:1},
        {type:'Zgjedh përgjigjen',q:'Cila fjalë do të thotë "preferoj" (krahasim)?',opts:['gern','am liebsten','lieber','mehr'],a:2},
        {type:'Zgjedh përgjigjen',q:'Krahasim barazie: Er ist ___ groß ___ ich.',opts:['mehr...als','so...wie','größer...als','am...liebsten'],a:1},
      ],
      quiz:[
        {q:'Superlativ i "schnell" është?',opts:['schneller','sehr schnell','am schnellsten','schnellsten'],a:2,exp:'Përgjigja e saktë: "am schnellsten". Krahasoji opsionet: schneller / sehr schnell / am schnellsten — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "lieber"?',opts:['Më shumë (kohë)','Preferoj / më shumë','Me dëshirë','Mbi të gjitha'],a:1,exp:'"lieber" = Preferoj / më shumë. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "fotografoj" gjermanisht?',opts:['zeichnen','lesen','fotografieren','schwimmen'],a:2,exp:'Forma e saktë është: "fotografieren".'},
        {q:'Si krahason: "Ai vrapron më shpejt se unë"?',opts:['Er läuft so schnell wie ich','Er läuft schneller als ich','Er läuft am schnellsten','Er ist schnell'],a:1,exp:'Përgjigja e saktë: "Er läuft schneller als ich". Krahasoji opsionet: Er läuft so schnell wie ich / Er läuft schneller als ich / Er läuft am schnellsten — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "Sport treiben"?',opts:['Të shikosh sport','Të bësh sport','Të dëgjosh muzikë','Të udhëtosh'],a:1,exp:'"Sport treiben" = Të bësh sport. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'a2m9', num:9, title:'Ndjenjat & Opinionet', sub:'Gefühle & Meinungen',
      story:{ep:'Episodi 9',title:'Keqkuptim me qiradhënësin',lines:[
        {type:'narr',text:'Dion ka një problem me qiradhënësin — muzika e tij shqetëson fqinjët.'},
        {type:'line',speaker:'Qiradhënësi',de:'Herr Dion, ich muss offen mit Ihnen reden.',sq:'Z. Dion, duhet të flas hapur me ju.'},
        {type:'line',speaker:'Dion',de:'Was ist passiert? Ich bin besorgt.',sq:'Çfarë ka ndodhur? Jam i shqetësuar.'},
        {type:'line',speaker:'Qiradhënësi',de:'Ihre Musik ist manchmal sehr laut. Die Nachbarn beschweren sich.',sq:'Muzika juaj ndonjëherë është shumë e lartë. Fqinjët ankohen.'},
        {type:'line',speaker:'Dion',de:'Es tut mir wirklich leid! Das war nicht meine Absicht.',sq:'Më vjen vërtet keq! Kjo nuk ishte qëllimi im.'},
        {type:'line',speaker:'Qiradhënësi',de:'Ich denke, dass wir eine Lösung finden können.',sq:'Mendoj që mund të gjejmë zgjidhje.'},
        {type:'line',speaker:'Dion',de:'Natürlich! Ich werde die Musik leiser machen. Das verspreche ich.',sq:'Natyrisht! Do ta ul muzikën. Këtë premtoj.'},
      ]},
      vocab:[
        {de:'glücklich',sq:'i/e lumtur',type:'Ndjenjë',ex:'Ich bin sehr glücklich heute. — Jam shumë i lumtur sot.'},
        {de:'traurig',sq:'i/e trishtuar',type:'Ndjenjë',ex:'Warum bist du so traurig? — Pse je kaq i trishtuar?'},
        {de:'wütend',sq:'i/e zemëruar',type:'Ndjenjë',ex:'Ich bin wütend auf ihn. — Jam i zemëruar me të.'},
        {de:'besorgt',sq:'i/e shqetësuar',type:'Ndjenjë',ex:'Ich bin wegen der Prüfung besorgt. — Jam i shqetësuar për provimin.'},
        {de:'sich ärgern',sq:'të mërzitesh / xhindosesh',type:'Folje',ex:'Ich ärgere mich über die Verspätung. — Mërzitem nga vonesa.'},
        {de:'sich freuen',sq:'të gëzohesh',type:'Folje',ex:'Ich freue mich über das Geschenk. — Gëzohem nga dhurata.'},
        {de:'meinen / denken',sq:'të mendosh / besosh',type:'Folje',ex:'Ich meine, dass das falsch ist. — Mendoj se kjo është gabim.'},
        {de:'Ich denke, dass...',sq:'Mendoj që...',type:'Shprehje',ex:'Ich denke, dass wir recht haben. — Mendoj që kemi të drejtë.'},
        {de:'Ich finde, dass...',sq:'Gjej/besoj që...',type:'Shprehje',ex:'Ich finde, dass das zu teuer ist. — Besoj se kjo është shumë e shtrenjtë.'},
        {de:'Meiner Meinung nach...',sq:'Sipas mendimit tim...',type:'Shprehje',ex:'Meiner Meinung nach ist das falsch. — Sipas mendimit tim kjo është gabim.'},
        {de:'zustimmen / ablehnen',sq:'të pranosh / refuzosh',type:'Folje',ex:'Ich stimme dir zu. — Pajtohem me ty.'},
        {de:'sich beschweren',sq:'të ankohesh',type:'Folje',ex:'Er beschwert sich über den Lärm. — Ai ankohet për zhurmën.'},
      ],
      grammar:[
        {title:'Fjalia me "dass" — fjalia varëse',body:'"Dass" (që) fut fjali varëse. Kujdes: folja shkon në FUND të fjalisë varëse!',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich denke, dass er recht hat.','Mendoj që ai ka të drejtë.'],
           ['Ich glaube, dass das falsch ist.','Besoj se kjo është gabim.'],
           ['Er sagt, dass er kommt.','Ai thotë që do të vijë.'],
         ]}},
        {title:'Foljet refleksive — "sich"',body:'Foljet refleksive kanë "sich" (vete) si pjesë të tyre:',
         table:{heads:['Folje','Shembull','Shqip'],rows:[
           ['sich freuen','Ich freue mich.','Gëzohem.'],
           ['sich ärgern','Er ärgert sich.','Ai mërzitet.'],
           ['sich beschweren','Sie beschwert sich.','Ajo ankohet.'],
           ['sich fühlen','Ich fühle mich gut.','Ndihem mirë.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Ku shkon folja në fjali me "dass"?',opts:['Në fillim','Pas subjektit','Pas "dass"','Në fund'],a:3},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Mendoj që..." gjermanisht?',opts:['Ich sage, dass...','Ich denke, dass...','Ich weiß, dass...','Ich glaube, dass...'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "sich freuen"?',opts:['Të mërzitesh','Të ankohesh','Të gëzohesh','Të zemërohesh'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "wütend"?',opts:['I lumtur','I trishtuar','I zemëruar','I lodhur'],a:2},
      ],
      quiz:[
        {q:'Plotëso: Ich denke, dass er morgen ___.',opts:['kommt','kommen','komme','kam'],a:0,exp:'Forma e saktë: "kommt". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "besorgt"?',opts:['I lumtur','I shqetësuar','I zemëruar','I trishtuar'],a:1,exp:'"besorgt" = I shqetësuar. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Sipas mendimit tim" gjermanisht?',opts:['Ich denke','Meiner Meinung nach','Ich finde','Ich glaube'],a:1,exp:'Forma e saktë është: "Meiner Meinung nach".'},
        {q:'Cili është kuptimi i "sich ärgern"?',opts:['Të gëzohesh','Të ankohesh','Të mërzitesh/xhindosesh','Të frikësohesh'],a:2,exp:'Kuptimi i saktë është: "Të mërzitesh/xhindosesh".'},
        {q:'Plotëso: Ich freue mich ___ das Geschenk.',opts:['mit','über','an','auf'],a:1,exp:'"über" — kujdes me zgjedhimin! Gjermanisht ndryshon mbaresën për çdo person. Mëso zgjedhimin si sistem, jo forma izolare.'},
      ]
    },
    {
      id:'a2m10', num:10, title:'Shkolla & Arsimi', sub:'Schule & Bildung',
      story:{ep:'Episodi 10',title:'Kursi i gjuhës',lines:[
        {type:'narr',text:'Dion regjistrohet në kurs gjuhe gjermane për të përmirësuar nivelin e tij.'},
        {type:'line',speaker:'Mësuesja',de:'Willkommen im Deutschkurs B1! Warum lernen Sie Deutsch?',sq:'Mirë se vini në kursin e gjermanishtes B1! Pse mësoni gjermanisht?'},
        {type:'line',speaker:'Dion',de:'Wegen meiner Arbeit und weil ich hier leben möchte.',sq:'Për shkak të punës dhe sepse dua të jetoj këtu.'},
        {type:'line',speaker:'Mësuesja',de:'Sehr gut. Wie lange lernen Sie schon Deutsch?',sq:'Shumë mirë. Që kur po mësoni gjermanisht?'},
        {type:'line',speaker:'Dion',de:'Seit einem Jahr. Ich habe in Wien angefangen.',sq:'Prej një viti. Kam filluar në Vjenë.'},
        {type:'line',speaker:'Mësuesja',de:'Prima! Dann fangen wir mit der Prüfungsvorbereitung an!',sq:'Shkëlqyeshëm! Atëherë fillojmë me përgatitjen për provim!'},
      ]},
      vocab:[
        {de:'die Schule',sq:'shkolla',type:'Arsim',ex:'Ich gehe in die Schule. — Shkoj në shkollë.'},
        {de:'die Universität',sq:'universiteti',type:'Arsim',ex:'Ich studiere an der Universität. — Studioj në universitet.'},
        {de:'die Prüfung',sq:'provimi',type:'Arsim',ex:'Ich habe morgen eine Prüfung. — Kam provim nesër.'},
        {de:'lernen / studieren',sq:'të mësosh / studiosh',type:'Folje',ex:'Ich lerne Deutsch. Ich studiere Informatik. — Mësoj gjermanisht. Studioj informatikë.'},
        {de:'bestehen / durchfallen',sq:'të kalosh / rrëzohesh (provim)',type:'Folje',ex:'Ich habe die Prüfung bestanden! — E kalova provimin!'},
        {de:'das Zeugnis',sq:'dëftesa',type:'Arsim',ex:'Mein Zeugnis ist gut. — Dëftesa ime është e mirë.'},
        {de:'das Fach',sq:'lënda (shkollore)',type:'Arsim',ex:'Mein Lieblingsfach ist Mathematik. — Lënda ime e preferuar është matematika.'},
        {de:'der Unterricht',sq:'mësimi / ora e mësimit',type:'Arsim',ex:'Der Unterricht beginnt um 8 Uhr. — Mësimi fillon në orën 8.'},
        {de:'die Hausaufgabe',sq:'detyra e shtëpisë',type:'Arsim',ex:'Ich mache meine Hausaufgaben. — Bëj detyrat e shtëpisë.'},
        {de:'seit + Dat.',sq:'prej / që nga (koha)',type:'Gramatikë',ex:'Ich lerne seit einem Jahr Deutsch. — Mësoj gjermanisht prej një viti.'},
        {de:'wegen + Gen.',sq:'për shkak të',type:'Gramatikë',ex:'Wegen der Arbeit lerne ich Deutsch. — Mësoj gjermanisht për shkak të punës.'},
        {de:'die Note',sq:'nota',type:'Arsim',ex:'Ich habe eine 1 bekommen! — Mora notën 1! (nota më e lartë)'},
      ],
      grammar:[
        {title:'"seit" — prej / që kur (kohëzgjatja)',body:'"Seit" shpreh kohën që ka nisur diçka dhe vazhdon ende. Përdoret me Prezentin (jo të kaluarën!):',
         table:{heads:['Gjermanisht','Shqip','Kujdes'],rows:[
           ['Ich lerne seit einem Jahr Deutsch.','Mësoj gjermanisht prej një viti.','Prezent, jo e kaluar!'],
           ['Ich wohne seit 2023 in Berlin.','Jetoj në Berlin që nga 2023.','Vazhdon ende'],
           ['Seit wann lernst du Deutsch?','Që kur mëson gjermanisht?','Pyetja'],
         ]}},
        {title:'Sistemet e notave gjermane',body:'Notat në Gjermani janë të kundërta me shumë vende:',
         table:{heads:['Notë','Kuptimi','Ekuiv. shqip'],rows:[
           ['1 (sehr gut)','Shumë mirë','10'],['2 (gut)','Mirë','8-9'],
           ['3 (befriedigend)','Kënaqshëm','6-7'],['4 (ausreichend)','Mjaftueshëm','5'],
           ['5 (mangelhaft)','Mangët','4'],['6 (ungenügend)','Papërfillshëm','Rrëzim'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Plotëso: Ich lerne ___ zwei Jahren Deutsch.',opts:['vor','für','seit','nach'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "bestehen"?',opts:['Të fillosh provimin','Të kalosh provimin','Të rrëzohesh','Të anulosh'],a:1},
        {type:'Zgjedh përgjigjen',q:'Cila është nota më e mirë në Gjermani?',opts:['6','4','1','10'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Hausaufgabe"?',opts:['Ora e mësimit','Detyra e shtëpisë','Provimi','Dëftesa'],a:1},
      ],
      quiz:[
        {q:'Si thuhet "Mësoj gjermanisht prej dy vitesh"?',opts:['Ich lerne vor zwei Jahren Deutsch','Ich lerne seit zwei Jahren Deutsch','Ich habe zwei Jahre Deutsch gelernt','Ich lerne für zwei Jahre'],a:1,exp:'Forma e saktë është: "Ich lerne seit zwei Jahren Deutsch".'},
        {q:'Çfarë do të thotë "durchfallen"?',opts:['Të kalosh provimin','Të rrëzohesh (provim)','Të mësosh shpejt','Të bësh detyra'],a:1,exp:'"durchfallen" = Të rrëzohesh (provim). Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'"lernen" vs "studieren" — dallimi?',opts:['Të dyja janë njëlloj','lernen=mësoj gjëra, studieren=studioj në uni','lernen=uni, studieren=shkollë','Asnjë dallim'],a:1,exp:'Përgjigja e saktë: "lernen=mësoj gjëra, studieren=studioj në uni". Krahasoji opsionet: Të dyja janë njëlloj / lernen=mësoj gjëra, studieren=studioj në uni / lernen=uni, studieren=shkollë — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "das Fach"?',opts:['Shkolla','Provimi','Lënda shkollore','Mësuesi'],a:2,exp:'"das Fach" = Lënda shkollore. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si pyesim "Që kur...?" gjermanisht?',opts:['Wie lange?','Seit wann?','Warum?','Wann?'],a:1,exp:'Përgjigja e saktë: "Seit wann?". Krahasoji opsionet: Wie lange? / Seit wann? / Warum? — çfarë bën ndryshimin?'},
      ]
    },
    {
      id:'a2m11', num:11, title:'Udhëtimet', sub:'Reisen & Urlaub',
      story:{ep:'Episodi 11',title:'Pushimet e para',lines:[
        {type:'narr',text:'Dion ka dy javë pushim. Vendos të vizitojë Mynikun dhe Alpet.'},
        {type:'line',speaker:'Dion',de:'Ich möchte nach München fahren und dann weiter in die Alpen.',sq:'Dua të shkoj në Mynih dhe pastaj drejt Alpeve.'},
        {type:'line',speaker:'Klea',de:'Hast du schon ein Hotel gebucht?',sq:'Ke rezervuar hotel?'},
        {type:'line',speaker:'Dion',de:'Nein, noch nicht. Soll ich ein Hostel nehmen? Das ist günstiger.',sq:'Jo, ende jo. Duhet të marr hostel? Kjo është më e lirë.'},
        {type:'line',speaker:'Klea',de:'Für München empfehle ich ein Hostel im Zentrum. Aber für die Alpen — ein Berggasthof!',sq:'Për Mynikun rekomandoj hostel në qendër. Por për Alpet — një bujtinë malore!'},
        {type:'line',speaker:'Dion',de:'Was soll ich unbedingt in München sehen?',opts:['Gjithçka!']},
        {type:'line',speaker:'Dion',de:'Was soll ich unbedingt in München sehen?',sq:'Çfarë duhet patjetër të shoh në Mynih?'},
        {type:'line',speaker:'Klea',de:'Das Hofbräuhaus, den Englischen Garten und natürlich das Deutsche Museum!',sq:'Hofbräuhaus, Kopshtin Anglez dhe natyrisht Muzeun Gjerman!'},
      ]},
      vocab:[
        {de:'der Urlaub',sq:'pushimet',type:'Udhëtim',ex:'Ich mache drei Wochen Urlaub. — Bëj tre javë pushim.'},
        {de:'die Unterkunft',sq:'akomodimi / vendqëndrimi',type:'Udhëtim',ex:'Ich suche eine günstige Unterkunft. — Po kërkoj akomodie të lirë.'},
        {de:'buchen',sq:'të rezervosh / porosisësh',type:'Folje',ex:'Ich habe das Hotel online gebucht. — E rezervova hotelin online.'},
        {de:'der Koffer',sq:'valixhja',type:'Udhëtim',ex:'Ich packe meinen Koffer. — Mbësh valixhen.'},
        {de:'die Sehenswürdigkeit',sq:'vendi i vizitës / atraksioni',type:'Udhëtim',ex:'Was sind die Sehenswürdigkeiten von Wien? — Cilat janë atraksionet e Vjenës?'},
        {de:'der Reisepass',sq:'pasaporta',type:'Dokument',ex:'Vergiss nicht den Reisepass! — Mos harro pasaportën!'},
        {de:'die Versicherung',sq:'sigurimi',type:'Udhëtim',ex:'Ich brauche eine Reiseversicherung. — Më duhet sigurim udhëtimi.'},
        {de:'die Währung',sq:'monedha',type:'Udhëtim',ex:'Die Währung in Deutschland ist der Euro. — Monedha në Gjermani është Euroja.'},
        {de:'Haben Sie noch Zimmer frei?',sq:'Keni dhoma të lira?',type:'Hotel',ex:'Entschuldigung! Haben Sie noch Zimmer frei? — Keni dhoma të lira?'},
        {de:'hin und zurück',sq:'vajtje-ardhje',type:'Biletë',ex:'Eine Fahrkarte hin und zurück, bitte. — Biletë vajtje-ardhje, ju lutem.'},
        {de:'der Flug',sq:'fluturimi',type:'Udhëtim',ex:'Der Flug dauert zwei Stunden. — Fluturimi zgjat dy orë.'},
      ],
      grammar:[
        {title:'E ardhmja me "werden"',body:'"Werden + infinitiv" shpreh të ardhmen ose planet e sigurta:',
         table:{heads:['Person','werden','Shembull'],rows:[
           ['ich','werde','Ich werde nach München fahren.'],
           ['du','wirst','Du wirst das lieben!'],
           ['er/sie','wird','Es wird schön sein.'],
           ['wir','werden','Wir werden viel sehen.'],
         ]}},
        {title:'Alternativa — Prezenti për të ardhmen',body:'Në gjermanishten e folur, shpesh Prezenti + shprehje kohe zëvendëson të ardhmen:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich fahre morgen nach München.','Nesër shkoj në Mynih.'],
           ['Nächste Woche fliege ich nach Albanien.','Javën tjetër fluturoj në Shqipëri.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Nesër do të shkoj në Mynih" (werden)?',opts:['Ich fahre morgen nach München','Ich werde morgen nach München fahren','Ich bin morgen nach München gefahren','Ich muss morgen fahren'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "biletë vajtje-ardhje" gjermanisht?',opts:['nur hin','hin und zurück','einfach','direkt'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Unterkunft"?',opts:['Hoteli','Akomodimi','Bileta','Udhëtimi'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Paketoj valixhen" gjermanisht?',opts:['Ich kaufe den Koffer','Ich öffne den Koffer','Ich packe meinen Koffer','Ich nehme den Koffer'],a:2},
      ],
      quiz:[
        {q:'Si formohet e ardhmja gjermanisht?',opts:['haben + particip','sein + infinitiv','werden + infinitiv','können + particip'],a:2,exp:'Përgjigja e saktë: "werden + infinitiv". Krahasoji opsionet: haben + particip / sein + infinitiv / werden + infinitiv — çfarë bën ndryshimin?'},
        {q:'Si thuhet "pushimet" gjermanisht?',opts:['die Reise','der Urlaub','der Flug','die Fahrt'],a:1,exp:'Forma e saktë është: "der Urlaub".'},
        {q:'"werden" për "wir" është?',opts:['werdet','wird','werden','werde'],a:2,exp:'Përgjigja e saktë: "werden". Krahasoji opsionet: werdet / wird / werden — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Sehenswürdigkeit"?',opts:['Pasaporta','Vendi i vizitës','Hoteli','Monedha'],a:1,exp:'"die Sehenswürdigkeit" = Vendi i vizitës. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Keni dhoma të lira?" gjermanisht?',opts:['Haben Sie freie Zimmer?','Haben Sie noch Zimmer frei?','Gibt es Zimmer?','Ist Zimmer frei?'],a:1,exp:'Forma e saktë është: "Haben Sie noch Zimmer frei?".'},
      ]
    },
    {
      id:'a2m12', num:12, title:'Plani për të Ardhmen', sub:'Zukunftspläne & Ziele',
      story:{ep:'Episodi 12',title:'Vendimi final',lines:[
        {type:'narr',text:'Dion ka kaluar A2 dhe tani planifikon hapat e ardhshëm. Ai tregon planin e tij mikes Klea.'},
        {type:'line',speaker:'Klea',de:'Du hast jetzt A2 abgeschlossen. Was sind deine nächsten Pläne?',sq:'Tani ke përfunduar A2. Cilat janë planet e tua të ardhshme?'},
        {type:'line',speaker:'Dion',de:'Ich werde B1 machen und dann die offizielle Prüfung ablegen.',sq:'Do të bëj B1 dhe pastaj do të jap provimin zyrtar.'},
        {type:'line',speaker:'Klea',de:'Und danach? Was möchtest du langfristig machen?',sq:'Dhe pastaj? Çfarë dëshiron të bësh afatgjatë?'},
        {type:'line',speaker:'Dion',de:'Ich träume davon, hier eine Firma zu gründen. Albanische und deutsche Zusammenarbeit!',sq:'Ëndërroj të themeloj këtu një firmë. Bashkëpunim shqiptar-gjerman!'},
        {type:'line',speaker:'Klea',de:'Das klingt fantastisch! Ich glaube an dich, Dion!',sq:'Kjo tingëllon fantastike! Besoj tek ti, Dion!'},
      ]},
      vocab:[
        {de:'der Plan',sq:'plani',type:'E ardhme',ex:'Was ist dein Plan? — Cili është plani yt?'},
        {de:'das Ziel',sq:'qëllimi / synimi',type:'E ardhme',ex:'Mein Ziel ist es, B1 zu schaffen. — Qëllimi im është të arrij B1.'},
        {de:'träumen von',sq:'të ëndërrosh për',type:'Folje',ex:'Ich träume von einer eigenen Firma. — Ëndërroj për firmën time.'},
        {de:'vorhaben',sq:'të planifikosh / kesh ndërmend',type:'Folje',ex:'Was hast du vor? — Çfarë planifikon?'},
        {de:'schaffen',sq:'të arrish / realizosh',type:'Folje',ex:'Ich werde das schaffen! — Do ta arrij!'},
        {de:'die Herausforderung',sq:'sfida',type:'Abstrakt',ex:'Das ist eine große Herausforderung. — Kjo është sfidë e madhe.'},
        {de:'erfolgreich',sq:'i/e suksesshëm',type:'Mbiemër',ex:'Er ist sehr erfolgreich. — Ai është shumë i suksesshëm.'},
        {de:'langfristig / kurzfristig',sq:'afatgjatë / afatshkurtër',type:'Kohë',ex:'Was sind deine langfristigen Ziele? — Cilat janë qëllimet tuaja afatgjata?'},
        {de:'die Zusammenarbeit',sq:'bashkëpunimi',type:'Punë',ex:'Die Zusammenarbeit war toll. — Bashkëpunimi ishte i mrekullueshëm.'},
        {de:'Infinitiv me "zu"',sq:'infinitiv me "zu"',type:'Gramatikë',ex:'Es ist wichtig, Deutsch zu lernen. — Është e rëndësishme të mësosh gjermanisht.'},
        {de:'hoffen',sq:'të shpresosh',type:'Folje',ex:'Ich hoffe, bald nach Hause zu fahren. — Shpresoj të shkoj shpejt në shtëpi.'},
        {de:'planen',sq:'të planifikosh',type:'Folje',ex:'Ich plane, eine Firma zu gründen. — Planifikoj të themeloj firmë.'},
      ],
      grammar:[
        {title:'Infinitiv me "zu" — të bësh diçka',body:'Shumë folje, mbiemra dhe emra kërkojnë infinitivin me "zu":',
         table:{heads:['Struktura','Shembull','Shqip'],rows:[
           ['Es ist + mbiemër + zu + inf.','Es ist wichtig, Deutsch zu lernen.','Është e rëndësishme të mësosh gjermanisht.'],
           ['Folje + zu + inf.','Ich hoffe, zu gewinnen.','Shpresoj të fitoj.'],
           ['plan/vorhaben + zu + inf.','Ich plane, zu reisen.','Planifikoj të udhëtoj.'],
         ]}},
        {title:'Permbledhje A2 — Çfarë arritëm',body:'',
         table:{heads:['Tema','Gramatika','Niveli'],rows:[
           ['Rutina, Shëndeti, Blerjet','Perfekt, Preterit, Modale','A2'],
           ['Shtëpia, Puna, Arsimi','Dativ, Akkusativ, seit','A2'],
           ['Hobit, Ndjenjat, Udhëtimet','Komparativ, dass, werden','A2'],
           ['E ardhmja, Opinionet','Infinitiv me zu, Konjunktiv II','A2→B1'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Plotëso: Es ist wichtig, Deutsch ___ lernen.',opts:['zu','um','für','von'],a:0},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Planifikoj të udhëtoj" gjermanisht?',opts:['Ich plane, zu reisen','Ich reise','Ich will reisen','Ich muss reisen'],a:0},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Herausforderung"?',opts:['Mundësia','Suksesi','Sfida','Qëllimi'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "afatgjatë" gjermanisht?',opts:['kurzfristig','sofort','langfristig','bald'],a:2},
      ],
      quiz:[
        {q:'Plotëso: Ich hoffe, bald nach Hause ___ fahren.',opts:['um','zu','für','von'],a:1,exp:'Forma e saktë: "zu". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "schaffen"?',opts:['Të humbasësh','Të arrish/realizosh','Të planifikosh','Të ëndërrosh'],a:1,exp:'"schaffen" = Të arrish/realizosh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "bashkëpunimi" gjermanisht?',opts:['die Herausforderung','das Ziel','die Zusammenarbeit','der Plan'],a:2,exp:'Forma e saktë është: "die Zusammenarbeit".'},
        {q:'Çfarë do të thotë "vorhaben"?',opts:['Të kesh ndërmend/planifikosh','Të kesh frikë','Të jesh gati','Të bësh gati'],a:0,exp:'"vorhaben" = Të kesh ndërmend/planifikosh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Plotëso: Mein Ziel ist es, B1 ___ schaffen.',opts:['um','für','von','zu'],a:3,exp:'Forma e saktë: "zu". Praktiko duke shkruar 3 fjali të ngjashme!'},
      ]
    },
  ],
  B1: [
    {
      id:'b1m1', num:1, title:'Shoqëria & Marrëdhëniet', sub:'Gesellschaft & Beziehungen',
      story:{ep:'Episodi 1',title:'Vendimi i madh',lines:[
        {type:'narr',text:'Dion ka qenë një vit në Gjermani. Tani duhet të vendosë: qëndron apo kthehet?'},
        {type:'line',speaker:'Miku',de:'Dion, was würdest du tun, wenn du nach Albanien zurückkehrst?',sq:'Dion, çfarë do të bëje nëse kthehesh në Shqipëri?'},
        {type:'line',speaker:'Dion',de:'Ich würde wahrscheinlich als Informatiker arbeiten. Aber ich fühle mich hier wohl.',sq:'Ndoshta do të punoja si informatician. Por këtu ndihem mirë.'},
        {type:'line',speaker:'Miku',de:'Die Entscheidung ist schwer, oder?',sq:'Vendimi është i vështirë, apo jo?'},
        {type:'line',speaker:'Dion',de:'Ja, aber ich glaube, ich bleibe noch ein Jahr. Ich möchte mein Deutsch noch verbessern.',sq:'Po, por mendoj që qëndroj edhe një vit. Dua të përmirësoj gjermanishten time.'},
      ]},
      vocab:[
        {de:'die Entscheidung',sq:'vendimi',type:'Abstrakt',ex:'Das ist eine schwere Entscheidung. — Ky është një vendim i vështirë.'},
        {de:'sich fühlen',sq:'të ndihesh',type:'Folje',ex:'Ich fühle mich wohl hier. — Ndihem mirë këtu.'},
        {de:'verbessern',sq:'të përmirësosh',type:'Folje',ex:'Ich möchte mein Deutsch verbessern. — Dua të përmirësoj gjermanishten.'},
        {de:'wahrscheinlich',sq:'ndoshta / me gjasë',type:'Ndajfolje',ex:'Er kommt wahrscheinlich später. — Ai ndoshta vjen më vonë.'},
        {de:'die Freundschaft',sq:'miqësia',type:'Abstrakt',ex:'Unsere Freundschaft ist wichtig. — Miqësia jonë është e rëndësishme.'},
        {de:'vertrauen',sq:'të besosh (dikë)',type:'Folje',ex:'Ich vertraue dir. — Të besoj.'},
        {de:'streiten',sq:'të grindesh',type:'Folje',ex:'Wir streiten manchmal, aber wir vertragen uns. — Grindhemi ndonjëherë, por pajtohemi.'},
        {de:'sich entschuldigen',sq:'të kërkosh falje',type:'Folje',ex:'Ich entschuldige mich für den Fehler. — Kërkoj falje për gabimin.'},
        {de:'würde + Infinitiv',sq:'do të + folja',type:'Gramatikë',ex:'Ich würde gern kommen. — Do të vija me dëshirë.'},
      ],
      grammar:[
        {title:'Konjunktiv II — Kushtet dhe Dëshirat',body:'"Würde + infinitiv" shpreh kushtet, dëshirat, dhe mundësitë hipotetike. Është ekuivalenti i "do të" shqipes:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich würde gern kommen.','Do të vija me dëshirë.'],
           ['Was würdest du tun?','Çfarë do të bëje?'],
           ['Er würde bleiben.','Ai do të qëndronte.'],
           ['Könntest du mir helfen?','A do të mund të më ndihmoje?'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Do të vija me dëshirë" gjermanisht?',opts:['Ich will gern kommen','Ich würde gern kommen','Ich komme gern','Ich möchte gern kommen'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "sich fühlen"?',opts:['Të largohesh','Të ndihesh','Të largosh','Të gjesh'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "wahrscheinlich"?',opts:['Patjetër','Kurrë','Ndoshta/me gjasë','Menjëherë'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Çfarë do të bëje?" gjermanisht?',opts:['Was willst du tun?','Was machst du?','Was würdest du tun?','Was kannst du tun?'],a:2},
      ],
      quiz:[
        {q:'Si formohet "do të" gjermanisht?',opts:['möchte + infinitiv','würde + infinitiv','kann + infinitiv','muss + infinitiv'],a:1,exp:'Përgjigja e saktë: "würde + infinitiv". Krahasoji opsionet: möchte + infinitiv / würde + infinitiv / kann + infinitiv — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Freundschaft"?',opts:['Dashuria','Miqësia','Familja','Shoqëria'],a:1,exp:'"die Freundschaft" = Miqësia. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Ndihem mirë këtu" gjermanisht?',opts:['Ich bin wohl hier','Ich fühle mich wohl hier','Ich mag hier','Ich lebe wohl hier'],a:1,exp:'Forma e saktë është: "Ich fühle mich wohl hier".'},
        {q:'Çfarë do të thotë "sich entschuldigen"?',opts:['Të largohesh','Të kthehesh','Të kërkosh falje','Të vendosësh'],a:2,exp:'"sich entschuldigen" = Të kërkosh falje. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "vendimi" gjermanisht?',opts:['die Meinung','die Frage','die Entscheidung','die Lösung'],a:2,exp:'Forma e saktë është: "die Entscheidung".'},
      ]
    },
{
      id:'b1m2', num:2, title:'Media & Teknologjia', sub:'Medien & Technologie',
      story:{ep:'Episodi 2',title:'Bota dixhitale',lines:[
        {type:'narr',text:'Dion diskuton me kolegët mbi ndikimin e rrjeteve sociale në jetën e përditshme.'},
        {type:'line',speaker:'Kolegu',de:'Wie viel Zeit verbringst du täglich in sozialen Netzwerken?',sq:'Sa kohë kalon çdo ditë në rrjetet sociale?'},
        {type:'line',speaker:'Dion',de:'Ehrlich gesagt zu viel. Ich versuche, es auf eine Stunde zu begrenzen.',sq:'Sinqerisht shumë. Përpiqem ta kufizoj në një orë.'},
        {type:'line',speaker:'Kolegu',de:'Das ist weise. Die sozialen Netzwerke, die wir nutzen, beeinflussen uns mehr als wir denken.',sq:'Kjo është e mençur. Rrjetet sociale që përdorim na ndikojnë më shumë se mendojmë.'},
        {type:'line',speaker:'Dion',de:'Stimmt. Aber ohne Internet könnte ich auch nicht arbeiten!',sq:'Saktë. Por pa internet nuk do të mund të punoja as!'},
      ]},
      vocab:[
        {de:'die sozialen Netzwerke',sq:'rrjetet sociale',type:'Teknologji',ex:'Ich nutze soziale Netzwerke täglich. — Përdor rrjete sociale çdo ditë.'},
        {de:'beeinflussen',sq:'të ndikosh',type:'Folje',ex:'Die Werbung beeinflusst uns. — Reklama na ndikon.'},
        {de:'begrenzen',sq:'të kufizosh',type:'Folje',ex:'Ich begrenze meine Bildschirmzeit. — Kufizoj kohën e ekranit.'},
        {de:'die Privatsphäre',sq:'privatësia',type:'Teknologji',ex:'Meine Privatsphäre ist mir wichtig. — Privatësia ime është e rëndësishme për mua.'},
        {de:'der Algorithmus',sq:'algoritmi',type:'Teknologji',ex:'Der Algorithmus zeigt mir relevante Inhalte. — Algoritmi më tregon përmbajtje relevante.'},
        {de:'herunterladen / hochladen',sq:'të shkarkosh / ngarkosh',type:'Teknologji',ex:'Ich habe die App heruntergeladen. — E shkarkova aplikacionin.'},
        {de:'die Nachricht',sq:'lajmi / mesazhi',type:'Media',ex:'Ich lese täglich die Nachrichten. — Lexoj lajmet çdo ditë.'},
        {de:'fake news',sq:'lajme të rreme',type:'Media',ex:'Wie erkenne ich Fake News? — Si i njoh lajmet e rreme?'},
        {de:'der Datenschutz',sq:'mbrojtja e të dhënave',type:'Teknologji',ex:'Datenschutz ist in Deutschland sehr wichtig. — Mbrojtja e të dhënave është shumë e rëndësishme.'},
        {de:'die künstliche Intelligenz (KI)',sq:'inteligjenca artificiale (IA)',type:'Teknologji',ex:'KI verändert die Arbeitswelt. — IA po ndryshon botën e punës.'},
      ],
      grammar:[
        {title:'Fjalia relative — der/die/das + ...',body:'Fjalia relative shpjegon ose specifikon emrin. Folja shkon në fund:',
         table:{heads:['Gjinia','Gjermanisht','Shqip'],rows:[
           ['Mashk.','Das ist der Mann, der hier arbeitet.','Ky është njeriu që punon këtu.'],
           ['Femër.','Das ist die App, die ich nutze.','Ky është aplikacioni që përdor.'],
           ['Asnj.','Das ist das Buch, das ich lese.','Ky është libri që lexoj.'],
           ['Akk. m.','Das ist der Mann, den ich kenne.','Ky është njeriu që njoh.'],
         ]}},
        {title:'Foljet me prepozicat — feste Verbindungen',body:'',
         table:{heads:['Folje + prep.','Shembull','Shqip'],rows:[
           ['sich interessieren für','Ich interessiere mich für Technologie.','Interesohem për teknologji.'],
           ['nachdenken über','Ich denke darüber nach.','Mendoj rreth kësaj.'],
           ['verzichten auf','Ich verzichte auf Fleisch.','Heq dorë nga mishi.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Plotëso: Das ist die App, ___ ich täglich nutze.',opts:['der','den','die','das'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "beeinflussen"?',opts:['Të kufizosh','Të ndikosh','Të shfaqësh','Të shkarkosh'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "mbrojtja e të dhënave" gjermanisht?',opts:['die Privatsphäre','der Algorithmus','der Datenschutz','die Sicherheit'],a:2},
        {type:'Zgjedh përgjigjen',q:'Fjalia relative: Der Mann, ___ ich kenne. (Akkusativ)',opts:['der','die','das','den'],a:3},
      ],
      quiz:[
        {q:'Plotëso: Das Buch, ___ ich lese, ist interessant.',opts:['der','den','die','das'],a:3,exp:'Forma e saktë: "das". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "fake news"?',opts:['Lajme të forta','Lajme të vjetra','Lajme të rreme','Lajme të reja'],a:2,exp:'"fake news" = Lajme të rreme. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "inteligjenca artificiale" shkurtimisht gjermanisht?',opts:['IT','KI','IA','AI'],a:1,exp:'Forma e saktë është: "KI".'},
        {q:'Plotëso: Ich interessiere mich ___ Technologie.',opts:['mit','an','für','von'],a:2,exp:'Forma e saktë: "für". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "die Privatsphäre"?',opts:['Privatësia','Siguria','Teknologjia','Media'],a:0,exp:'"die Privatsphäre" = Privatësia. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m3', num:3, title:'Mjedisi & Ekologjia', sub:'Umwelt & Ökologie',
      story:{ep:'Episodi 3',title:'Gjermanët dhe mjedisi',lines:[
        {type:'narr',text:'Dion vëren se kolegët e tij janë shumë të vetëdijshëm për mjedisin.'},
        {type:'line',speaker:'Kolegu',de:'Trennst du deinen Müll zu Hause?',sq:'Ndante mbeturinat në shtëpi?'},
        {type:'line',speaker:'Dion',de:'In Albanien machen wir das nicht so streng. Hier habe ich vier verschiedene Behälter!',sq:'Në Shqipëri nuk e bëjmë kaq rreptësisht. Këtu kam katër kova të ndryshme!'},
        {type:'line',speaker:'Kolegu',de:'Das ist sehr wichtig für die Umwelt. Wir müssen unseren CO₂-Fußabdruck reduzieren.',sq:'Kjo është shumë e rëndësishme për mjedisin. Duhet të reduktojmë gjurmën tonë të CO₂.'},
        {type:'line',speaker:'Dion',de:'Ich finde, dass erneuerbare Energien die Lösung der Zukunft sind.',sq:'Mendoj se energjitë e rinovueshme janë zgjidhja e së ardhmes.'},
      ]},
      vocab:[
        {de:'die Umwelt',sq:'mjedisi',type:'Ekologji',ex:'Wir müssen die Umwelt schützen. — Duhet të mbrojmë mjedisin.'},
        {de:'der Müll',sq:'mbeturinat',type:'Ekologji',ex:'Bitte trenne deinen Müll! — Ju lutem ndaji mbeturinat!'},
        {de:'recyceln',sq:'të riciklosh',type:'Folje',ex:'Ich recycele Glas und Papier. — Ricikloj qelqin dhe letrën.'},
        {de:'der Klimawandel',sq:'ndryshimi klimatik',type:'Ekologji',ex:'Der Klimawandel ist eine globale Herausforderung. — Ndryshimi klimatik është sfidë globale.'},
        {de:'erneuerbare Energien',sq:'energjitë e rinovueshme',type:'Ekologji',ex:'Solarenergie ist erneuerbar. — Energjia diellore është e rinovueshme.'},
        {de:'der Kohlenstoff / CO₂',sq:'karboni / CO₂',type:'Ekologji',ex:'CO₂ verursacht den Klimawandel. — CO₂ shkakton ndryshimin klimatik.'},
        {de:'nachhaltig',sq:'i/e qëndrueshëm (ekologjikisht)',type:'Mbiemër',ex:'Ich versuche, nachhaltig zu leben. — Përpiqem të jetoj qëndrueshëm.'},
        {de:'der öffentliche Verkehr',sq:'transporti publik',type:'Ekologji',ex:'Ich nutze den öffentlichen Verkehr. — Përdor transportin publik.'},
        {de:'der Strom',sq:'rrymë elektrike',type:'Burime',ex:'Ich spare Strom zu Hause. — Kursej rrymë në shtëpi.'},
        {de:'schützen',sq:'të mbrosh',type:'Folje',ex:'Wir müssen die Natur schützen. — Duhet të mbrojmë natyrën.'},
      ],
      grammar:[
        {title:'Pasivi — wird + particip',body:'Pasivi shpreh veprimin pa treguar kush e bën. Formohet me "werden" + particip:',
         table:{heads:['Aktiv','Pasiv','Shqip'],rows:[
           ['Man recycelt Glas.','Glas wird recycelt.','Qelqi riciklohet.'],
           ['Man schützt die Natur.','Die Natur wird geschützt.','Natyra mbrohet.'],
           ['Man produziert Energie.','Energie wird produziert.','Energjia prodhohet.'],
         ]}},
        {title:'Pasivi në të kaluarën',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Das Gesetz wurde geändert.','Ligji u ndryshua.'],
           ['Der Müll wurde gesammelt.','Mbeturinat u mblodhën.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si formohet pasivi (prezent)?',opts:['sein + particip','werden + particip','haben + particip','können + particip'],a:1},
        {type:'Zgjedh përgjigjen',q:'Bëje pasiv: "Man recycelt Plastik."',opts:['Plastik hat recycelt','Plastik wird recycelt','Plastik ist recycelt','Plastik war recycelt'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "nachhaltig"?',opts:['I shpejtë','I lirë','I qëndrueshëm ekologjikisht','I shtrenjtë'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "ndryshimi klimatik"?',opts:['die Umwelt','der Klimawandel','die Energie','der Müll'],a:1},
      ],
      quiz:[
        {q:'Bëje pasiv (e kaluar): "Man änderte das Gesetz."',opts:['Das Gesetz hat geändert','Das Gesetz wurde geändert','Das Gesetz ist geändert','Das Gesetz wird geändert'],a:1,exp:'Përgjigja e saktë: "Das Gesetz wurde geändert". Krahasoji opsionet: Das Gesetz hat geändert / Das Gesetz wurde geändert / Das Gesetz ist geändert — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "recyceln"?',opts:['Të shkatërrosh','Të riciklosh','Të prodhosh','Të kursesh'],a:1,exp:'"recyceln" = Të riciklosh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "energjitë e rinovueshme"?',opts:['fossile Energien','erneuerbare Energien','günstige Energien','lokale Energien'],a:1,exp:'Përgjigja e saktë: "erneuerbare Energien". Krahasoji opsionet: fossile Energien / erneuerbare Energien / günstige Energien — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "der öffentliche Verkehr"?',opts:['Transporti privat','Fluturimi','Transporti publik','Autostrada'],a:2,exp:'"der öffentliche Verkehr" = Transporti publik. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Pasivi aktual: "Der Strom ___ gespart."',opts:['hat','ist','wird','war'],a:2,exp:'Përgjigja e saktë: "wird". Krahasoji opsionet: hat / ist / wird — çfarë bën ndryshimin?'},
      ]
    },
    {
      id:'b1m4', num:4, title:'Kultura & Arti', sub:'Kultur & Kunst',
      story:{ep:'Episodi 4',title:'Muzeu i madh',lines:[
        {type:'narr',text:'Dion viziton Pergamon Museun në Berlin — njërin nga muzeutet më të famshëm në botë.'},
        {type:'line',speaker:'Shoqëruesi',de:'Dieses Museum beherbergt Kunstwerke, die vor Tausenden von Jahren entstanden sind.',sq:'Ky muze strehon vepra arti që janë krijuar mijëra vjet më parë.'},
        {type:'line',speaker:'Dion',de:'Ich bin beeindruckt! Ich wusste nicht, dass Berlin so viel Kultur hat.',sq:'Jam i mbresëlënë! Nuk dija se Berlini ka kaq shumë kulturë.'},
        {type:'line',speaker:'Shoqëruesi',de:'Berlin ist eine der kulturell reichsten Städte Europas. Über 170 Museen!',sq:'Berlini është një nga qytetet kulturalisht më të pasura në Europë. Mbi 170 muze!'},
        {type:'line',speaker:'Dion',de:'Das überrascht mich wirklich. In Albanien kommen viele Touristen wegen der antiken Stätten.',sq:'Kjo më befason vërtet. Në Shqipëri shumë turistë vijnë për shkak të vendeve antike.'},
      ]},
      vocab:[
        {de:'das Kunstwerk',sq:'vepra e artit',type:'Art',ex:'Dieses Kunstwerk ist aus dem 18. Jahrhundert. — Kjo vepër arti është nga shekulli 18.'},
        {de:'die Ausstellung',sq:'ekspozita',type:'Art',ex:'Ich gehe zur Kunstausstellung. — Shkoj në ekspozitën e artit.'},
        {de:'der Künstler / die Künstlerin',sq:'artisti/artistja',type:'Art',ex:'Sie ist eine bekannte Künstlerin. — Ajo është artiste e njohur.'},
        {de:'beeindruckend',sq:'mbresëlënës',type:'Mbiemër',ex:'Die Architektur ist beeindruckend. — Arkitektura është mbresëlënëse.'},
        {de:'das Erbe',sq:'trashëgimia',type:'Kulturë',ex:'Das kulturelle Erbe ist wertvoll. — Trashëgimia kulturore është e çmuar.'},
        {de:'entstehen',sq:'të lindë / krijohet',type:'Folje',ex:'Wann ist dieses Gemälde entstanden? — Kur u krijua kjo pikturë?'},
        {de:'die Tradition',sq:'tradita',type:'Kulturë',ex:'Diese Tradition ist sehr alt. — Kjo traditë është shumë e vjetër.'},
        {de:'überraschen',sq:'të befasosh',type:'Folje',ex:'Das überrascht mich! — Kjo më befason!'},
        {de:'bedeutend',sq:'i/e rëndësishëm/e, i shquar',type:'Mbiemër',ex:'Das ist ein bedeutendes Werk. — Kjo është vepër e shquar.'},
        {de:'die Epoche',sq:'epoka',type:'Art',ex:'In welcher Epoche lebte Mozart? — Në cilën epokë jetoi Mozarti?'},
      ],
      grammar:[
        {title:'Konjunktive fjalësh lidhore: obwohl, damit, statt, ohne dass',body:'',
         table:{heads:['Lidhëz','Kuptim','Shembull'],rows:[
           ['obwohl','megjithëse','Obwohl es teuer war, kaufte ich es.'],
           ['damit','që të / me qëllim','Ich spare, damit ich reisen kann.'],
           ['statt (+ infinitiv me zu)','në vend të','Statt fernzusehen, lese ich.'],
           ['ohne dass','pa që','Er ging, ohne dass ich es wusste.'],
         ]}},
        {title:'Folja shkon në fund me lidhëzat varëse',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Obwohl er müde war, arbeitete er.','Megjithëse ishte i lodhur, ai punoi.'],
           ['Ich spare, damit ich reisen kann.','Kursej, që të mund të udhëtoj.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Plotëso: Obwohl es regnete, ___ wir spazieren gegangen.',opts:['haben','sind','war','hatten'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "megjithëse" gjermanisht?',opts:['damit','weil','obwohl','statt'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "beeindruckend"?',opts:['I lirë','Mbresëlënës','I vogël','I vjetër'],a:1},
        {type:'Zgjedh përgjigjen',q:'"damit" përdoret për të shprehur?',opts:['Shkakun','Qëllimin','Kohën','Vendin'],a:1},
      ],
      quiz:[
        {q:'Plotëso: Ich lerne Deutsch, damit ich ___ arbeiten kann.',opts:['hier','da','dort','damals'],a:0,exp:'"hier" — kujdes me zgjedhimin! Gjermanisht ndryshon mbaresën për çdo person. Mëso zgjedhimin si sistem, jo forma izolare.'},
        {q:'Çfarë do të thotë "das Erbe"?',opts:['Ekspozita','Trashëgimia','Vepra arti','Epoka'],a:1,exp:'"das Erbe" = Trashëgimia. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Plotëso: Statt fernsehen, ___ er lieber.',opts:['liest','lesen','las','gelesen'],a:0,exp:'Forma e saktë: "liest". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Si thuhet "artisti" (mashkull) gjermanisht?',opts:['der Künstler','der Maler','der Musiker','der Schauspieler'],a:0,exp:'Forma e saktë është: "der Künstler".'},
        {q:'Çfarë do të thotë "entstehen"?',opts:['Të shkatërrosh','Të krijohet/lindë','Të mbarojë','Të ndryshojë'],a:1,exp:'"entstehen" = Të krijohet/lindë. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m5', num:5, title:'Financa Personale', sub:'Finanzen & Wirtschaft',
      story:{ep:'Episodi 5',title:'Buxheti i parë',lines:[
        {type:'narr',text:'Dion tani ka rroga të rregullt. Miku i tij i jep këshilla për menaxhimin e parave.'},
        {type:'line',speaker:'Miku',de:'Hast du schon ein Konto bei einer deutschen Bank eröffnet?',sq:'Ke hapur tashmë llogari në bankë gjermane?'},
        {type:'line',speaker:'Dion',de:'Ja, bei der Sparkasse. Aber ich weiß nicht, wie ich sparen soll.',sq:'Po, tek Sparkasse. Por nuk di si të kursej.'},
        {type:'line',speaker:'Miku',de:'Die 50-30-20 Regel ist sehr hilfreich. 50% für Notwendiges, 30% für Wünsche, 20% sparen.',sq:'Rregulli 50-30-20 është shumë i dobishëm. 50% për të domosdoshmen, 30% për dëshira, 20% kursim.'},
        {type:'line',speaker:'Dion',de:'Das klingt vernünftig! Ich werde das ausprobieren.',sq:'Kjo tingëllon e arsyeshme! Do ta provoj.'},
      ]},
      vocab:[
        {de:'das Konto',sq:'llogaria bankare',type:'Financa',ex:'Ich habe ein Konto bei der Bank. — Kam llogari në bankë.'},
        {de:'sparen',sq:'të kursesh',type:'Folje',ex:'Ich spare jeden Monat 200 Euro. — Kursej 200 euro çdo muaj.'},
        {de:'die Steuer',sq:'taksa',type:'Financa',ex:'In Deutschland zahlt man hohe Steuern. — Në Gjermani paguhen taksa të larta.'},
        {de:'die Versicherung',sq:'sigurimi',type:'Financa',ex:'Eine Haftpflichtversicherung ist Pflicht. — Sigurimi i përgjegjësisë civile është i detyrueshëm.'},
        {de:'der Kredit',sq:'kredia',type:'Financa',ex:'Ich habe einen Kredit aufgenommen. — Mora kredi.'},
        {de:'die Investition',sq:'investimi',type:'Financa',ex:'Aktien sind eine gute Investition. — Aksionet janë investim i mirë.'},
        {de:'das Budget',sq:'buxheti',type:'Financa',ex:'Ich halte mich an mein Budget. — Mbaj buxhetin tim.'},
        {de:'überweisen',sq:'të transferosh (para)',type:'Folje',ex:'Ich überweise die Miete monatlich. — Transferoj qiranë çdo muaj.'},
        {de:'die Schulden',sq:'borxhet',type:'Financa',ex:'Ich habe keine Schulden. — Nuk kam borxhe.'},
        {de:'notwendig',sq:'i/e domosdoshëm/e',type:'Mbiemër',ex:'Das ist notwendig für das Leben. — Kjo është e domosdoshme për jetën.'},
      ],
      grammar:[
        {title:'Numrat ordinalë dhe thyesat',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['der erste','i pari'],['der zweite','i dyti'],['der dritte','i treti'],
           ['die Hälfte','gjysma'],['ein Drittel','një e treta'],['ein Viertel','një e katërta'],
         ]}},
        {title:'Konjunktiv II — Këshilla dhe hipoteza',body:'"Könnte, sollte, müsste" janë forma Konjunktiv II të foljeve modale — përdoren për këshilla:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Du solltest mehr sparen.','Duhet të kurseje më shumë.'],
           ['Du könntest einen Kredit nehmen.','Mund të merreshe kredi.'],
           ['Es wäre besser, zu investieren.','Do të ishte mirë të investosh.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "Duhet të kurseje" (këshillë)?',opts:['Du musst sparen','Du solltest sparen','Du kannst sparen','Du wirst sparen'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Schulden"?',opts:['Kursimet','Taksat','Borxhet','Investimet'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "gjysma" gjermanisht?',opts:['ein Drittel','ein Viertel','die Hälfte','zwei Drittel'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "überweisen"?',opts:['Të kursesh','Të transferosh','Të paguash me dorë','Të marrësh kredi'],a:1},
      ],
      quiz:[
        {q:'Konjunktiv II i "können" (du) është?',opts:['kannst','könntest','kann','könnte'],a:1,exp:'Përgjigja e saktë: "könntest". Krahasoji opsionet: kannst / könntest / kann — çfarë bën ndryshimin?'},
        {q:'Si thuhet "llogaria bankare" gjermanisht?',opts:['die Bank','das Konto','die Karte','der Kredit'],a:1,exp:'Forma e saktë është: "das Konto".'},
        {q:'Çfarë do të thotë "notwendig"?',opts:['I shtrenjtë','I dobishëm','I domosdoshëm','I vler'],a:2,exp:'"notwendig" = I domosdoshëm. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "taksa" gjermanisht?',opts:['der Kredit','die Steuer','die Schulden','die Rate'],a:1,exp:'Forma e saktë është: "die Steuer".'},
        {q:'Konjunktiv II i "sollen" (du) është?',opts:['sollst','soll','solltest','solltet'],a:2,exp:'Përgjigja e saktë: "solltest". Krahasoji opsionet: sollst / soll / solltest — çfarë bën ndryshimin?'},
      ]
    },
    {
      id:'b1m6', num:6, title:'Shëndeti & Mirëqenia', sub:'Gesundheit & Wohlbefinden',
      story:{ep:'Episodi 6',title:'Stres dhe ekuilibër',lines:[
        {type:'narr',text:'Dion ka periudhë stresore. Mjekja e tij i jep këshilla.'},
        {type:'line',speaker:'Mjekja',de:'Sie sehen erschöpft aus. Wie viel schlafen Sie pro Nacht?',sq:'Dukeni i lodhur. Sa flini natën?'},
        {type:'line',speaker:'Dion',de:'Höchstens sechs Stunden. Ich habe viel Arbeit und kann schlecht abschalten.',sq:'Maksimumi gjashtë orë. Kam shumë punë dhe nuk mund të çlikohem.'},
        {type:'line',speaker:'Mjekja',de:'Chronischer Stress ist gefährlich. Wenn Sie so weitermachen, riskieren Sie Ihre Gesundheit.',sq:'Stresi kronik është i rrezikshëm. Nëse vazhdoni kështu, rrezikoni shëndetin tuaj.'},
        {type:'line',speaker:'Dion',de:'Was empfehlen Sie mir?',sq:'Çfarë më rekomandoni?'},
        {type:'line',speaker:'Mjekja',de:'Meditation, regelmäßige Bewegung und feste Schlafzeiten. Ohne Schlaf funktioniert der Körper nicht.',sq:'Meditim, lëvizje të rregullt dhe orare fikse gjumi. Pa gjumë trupi nuk funksionon.'},
      ]},
      vocab:[
        {de:'der Stress',sq:'stresi',type:'Shëndet',ex:'Ich habe viel Stress bei der Arbeit. — Kam shumë stres në punë.'},
        {de:'sich erholen',sq:'të çlodheris',type:'Folje',ex:'Ich erhole mich am Wochenende. — Çlodhem fundjavën.'},
        {de:'die Bewegung',sq:'lëvizja / aktiviteti fizik',type:'Shëndet',ex:'Regelmäßige Bewegung ist gesund. — Lëvizja e rregullt është e shëndetshme.'},
        {de:'die Ernährung',sq:'ushqyerja',type:'Shëndet',ex:'Eine gesunde Ernährung ist wichtig. — Ushqyerja e shëndetshme është e rëndësishme.'},
        {de:'erschöpft',sq:'i/e rraskapitur',type:'Mbiemër',ex:'Ich bin total erschöpft. — Jam totalisht i rraskapitur.'},
        {de:'das Wohlbefinden',sq:'mirëqenia',type:'Shëndet',ex:'Mein Wohlbefinden ist mir wichtig. — Mirëqenia ime është e rëndësishme.'},
        {de:'die Schlafstörung',sq:'çrregullimet e gjumit',type:'Shëndet',ex:'Ich leide an Schlafstörungen. — Vuaj nga çrregullimet e gjumit.'},
        {de:'riskieren',sq:'të rrezikosh',type:'Folje',ex:'Sie riskieren Ihre Gesundheit. — Rrezikoni shëndetin tuaj.'},
        {de:'chronisch',sq:'kronik',type:'Mbiemër',ex:'Chronischer Stress ist schädlich. — Stresi kronik është i dëmshëm.'},
        {de:'die Meditation',sq:'meditimi',type:'Shëndet',ex:'Ich meditiere jeden Morgen. — Meditoj çdo mëngjes.'},
      ],
      grammar:[
        {title:'Fjalia me "wenn" dhe "als"',body:'"Wenn" dhe "als" të dyja do të thotë "kur" — por me dallim të rëndësishëm:',
         table:{heads:['Lidhëz','Kur','Shembull'],rows:[
           ['wenn','E tashme/e ardhme ose zakon i përsëritur','Wenn ich müde bin, trinke ich Kaffee.'],
           ['wenn','Kushtëzim (nëse)','Wenn du mehr schläfst, geht es dir besser.'],
           ['als','E kaluar — ngjarje e vetme','Als ich Kind war, lebte ich in Albanien.'],
         ]}},
        {title:'Dallimi "wenn" vs "als"',body:'',
         table:{heads:['Gjermanisht','Shqip','Lloji'],rows:[
           ['Wenn ich jung war, spielte ich Fußball.','Kur isha i ri, luaja futboll. (zakon)','wenn'],
           ['Als ich jung war, spielte ich Fußball.','Kur isha i ri (atëherë), luaja futboll.','als — saktë'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'"Als ich Kind war..." — pse "als" dhe jo "wenn"?',opts:['Sepse është shprehje','Sepse është e ardhme','Sepse është e kaluar — ngjarje e vetme','Sepse është zakon'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "erschöpft"?',opts:['I qetë','I gëzuar','I rraskapitur','I shëndetshëm'],a:2},
        {type:'Zgjedh përgjigjen',q:'Plotëso: ___ ich müde bin, schlafe ich früh.',opts:['Als','Weil','Wenn','Obwohl'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "mirëqenia" gjermanisht?',opts:['die Gesundheit','das Wohlbefinden','die Meditation','die Ernährung'],a:1},
      ],
      quiz:[
        {q:'Plotëso: ___ ich jung war, wohnte ich in Albanien.',opts:['Wenn','Weil','Obwohl','Als'],a:3,exp:'Forma e saktë: "Als". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "chronisch"?',opts:['I menjëhershëm','Kronik','I rëndë','I lehtë'],a:1,exp:'"chronisch" = Kronik. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Plotëso: Wenn du mehr schläfst, ___ es dir besser.',opts:['geht','ging','gegangen','gehe'],a:0,exp:'Forma e saktë: "geht". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "sich erholen"?',opts:['Të sëmurësh','Të stresohesh','Të çlodheris','Të punosh'],a:2,exp:'"sich erholen" = Të çlodheris. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Cila fjali është e saktë?',opts:['Als ich morgen komme...','Wenn ich gestern kam...','Als ich ein Kind war...','Wenn ich damals jung war...'],a:2,exp:'Përgjigja e saktë është: "Als ich ein Kind war...".'},
      ]
    },
    {
      id:'b1m7', num:7, title:'Karriera & Ambiciet', sub:'Karriere & Ambitionen',
      story:{ep:'Episodi 7',title:'Promovimi i madh',lines:[
        {type:'narr',text:'Dion merr lajmin e mrekullueshëm — u promovua si Team Lead.'},
        {type:'line',speaker:'Shefi',de:'Dion, ich möchte Ihnen zu Ihrer Beförderung gratulieren!',sq:'Dion, dua t\'ju uroj për promovimin tuaj!'},
        {type:'line',speaker:'Dion',de:'Vielen Dank! Das ist eine große Überraschung für mich.',sq:'Shumë faleminderit! Kjo është befasi e madhe për mua.'},
        {type:'line',speaker:'Shefi',de:'Sie haben hart gearbeitet und Ihre Ziele immer erreicht. Das Team schätzt Sie sehr.',sq:'Keni punuar shumë dhe gjithmonë keni arritur qëllimet tuaja. Ekipi ju vlerëson shumë.'},
        {type:'line',speaker:'Dion',de:'Ich werde mein Bestes geben, um das Team weiterzuentwickeln.',sq:'Do të jap maksimumin për të zhvilluar ekipin.'},
        {type:'line',speaker:'Shefi',de:'Das ist die Einstellung, die wir brauchen. Willkommen im Management!',sq:'Kjo është qëndrimi që na duhet. Mirë se vini në menaxhment!'},
      ]},
      vocab:[
        {de:'die Beförderung',sq:'promovimi (në punë)',type:'Karrierë',ex:'Ich habe eine Beförderung bekommen! — Mora promovim!'},
        {de:'der Vorgesetzte',sq:'eprori / shefi',type:'Punë',ex:'Mein Vorgesetzter ist sehr fair. — Eprori im është shumë i drejtë.'},
        {de:'das Team',sq:'ekipi',type:'Punë',ex:'Ich leite jetzt ein Team. — Tani drejtoj një ekip.'},
        {de:'leiten',sq:'të drejtosh / udhëheqësh',type:'Folje',ex:'Sie leitet die Abteilung seit zwei Jahren. — Ajo drejton departamentin prej dy vitesh.'},
        {de:'die Verantwortung',sq:'përgjegjësia',type:'Karrierë',ex:'Ich trage mehr Verantwortung jetzt. — Mbaj më shumë përgjegjësi tani.'},
        {de:'erreichen',sq:'të arrish (qëllim)',type:'Folje',ex:'Ich habe mein Ziel erreicht. — E arrita qëllimin tim.'},
        {de:'die Einstellung',sq:'qëndrimi / mendësia',type:'Abstrakt',ex:'Er hat eine positive Einstellung. — Ai ka qëndrim pozitiv.'},
        {de:'wertschätzen',sq:'të vlerësosh / çmosh',type:'Folje',ex:'Das Team wertschätzt meine Arbeit. — Ekipi e çmon punën time.'},
        {de:'der Erfolg',sq:'suksesi',type:'Karrierë',ex:'Erfolg kommt durch harte Arbeit. — Suksesi vjen me punë të palodhur.'},
        {de:'sich bewerben für',sq:'të aplikosh për',type:'Folje',ex:'Ich habe mich für die Stelle beworben. — Aplikova për vendin e punës.'},
      ],
      grammar:[
        {title:'Futur II — E ardhmja e kryer',body:'Futur II shpreh diçka që do të jetë kryer deri në një moment të caktuar të ardhshëm:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Bis Ende des Jahres werde ich B1 geschafft haben.','Deri në fund të vitit do ta kem arritur B1.'],
           ['In einem Jahr werde ich befördert worden sein.','Brenda një viti do të jem promovuar.'],
         ]}},
        {title:'Struktura e Futur II',body:'"werden + particip + haben/sein"',
         table:{heads:['Folje ndihmëse','Particip','Folje 2','Shembull'],rows:[
           ['werde','gemacht','haben','Ich werde das gemacht haben.'],
           ['werde','gegangen','sein','Ich werde gegangen sein.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Beförderung"?',opts:['Aplikimi','Promovimi','Kontrata','Paga'],a:1},
        {type:'Zgjedh përgjigjen',q:'Futur II: "Bis morgen werde ich das ___ haben."',opts:['machen','gemacht','macht','machte'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "të arrish qëllimin" gjermanisht?',opts:['das Ziel verlieren','das Ziel erreichen','das Ziel vergessen','das Ziel ändern'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Verantwortung"?',opts:['Suksesi','Qëndrimi','Përgjegjësia','Ekipi'],a:2},
      ],
      quiz:[
        {q:'Çfarë do të thotë "wertschätzen"?',opts:['Të humbasësh','Të vlerësosh/çmosh','Të kritikosh','Të aplikosh'],a:1,exp:'"wertschätzen" = Të vlerësosh/çmosh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Plotëso (Futur II): Bis nächstes Jahr werde ich B2 ___ haben.',opts:['lerne','gelernt','lernen','lernte'],a:1,exp:'Forma e saktë: "gelernt". Kujto: haben për folje tranzitive (me objekt), sein për lëvizje/ndryshim gjendjeje. Ky dallim është bazë e Perfektit!'},
        {q:'Si thuhet "eprori" gjermanisht?',opts:['der Mitarbeiter','der Kollege','der Vorgesetzte','der Kunde'],a:2,exp:'Forma e saktë është: "der Vorgesetzte".'},
        {q:'Çfarë do të thotë "leiten"?',opts:['Të mësosh','Të drejtosh/udhëheqësh','Të aplikosh','Të refuzosh'],a:1,exp:'"leiten" = Të drejtosh/udhëheqësh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Suksesi" gjermanisht?',opts:['die Einstellung','die Beförderung','der Erfolg','die Leistung'],a:2,exp:'Forma e saktë është: "der Erfolg".'},
      ]
    },
    {
      id:'b1m8', num:8, title:'Sistemi Politik', sub:'Politik & Gesellschaft',
      story:{ep:'Episodi 8',title:'Zgjedhjet gjermane',lines:[
        {type:'narr',text:'Dion ndjek lajmet mbi zgjedhjet gjermane. Kolegu i shpjegon sistemin.'},
        {type:'line',speaker:'Kolegu',de:'In Deutschland haben wir Bundestagswahlen alle vier Jahre.',sq:'Në Gjermani kemi zgjedhje parlamentare çdo katër vjet.'},
        {type:'line',speaker:'Dion',de:'Wie funktioniert das System? In Albanien haben wir auch ein ähnliches System.',sq:'Si funksionon sistemi? Edhe në Shqipëri kemi sistem të ngjashëm.'},
        {type:'line',speaker:'Kolegu',de:'Wir wählen Parteien und direkte Kandidaten in unserem Wahlkreis.',sq:'Zgjedhim partitë dhe kandidatë direkt në zonën tonë zgjedhore.'},
        {type:'line',speaker:'Dion',de:'Und welche Rechte haben Ausländer wie ich?',sq:'Dhe çfarë të drejtash kanë të huajt si unë?'},
        {type:'line',speaker:'Kolegu',de:'Als EU-Bürger darf man an Kommunalwahlen teilnehmen. Für Bundestagswahlen braucht man die deutsche Staatsbürgerschaft.',sq:'Si qytetar BE lejohet të marrësh pjesë në zgjedhjet komunale. Për zgjedhje parlamentare nevojitet shtetësia gjermane.'},
      ]},
      vocab:[
        {de:'die Wahl',sq:'zgjedhja',type:'Politikë',ex:'Die Wahl findet alle vier Jahre statt. — Zgjedhja bëhet çdo katër vjet.'},
        {de:'wählen',sq:'të zgjedhësh / votosh',type:'Folje',ex:'Ich wähle die Grünen. — Votoj Të Gjelbrit.'},
        {de:'die Partei',sq:'partia',type:'Politikë',ex:'Welche Partei unterstützt du? — Cilën parti mbështet?'},
        {de:'das Recht',sq:'e drejta',type:'Politikë',ex:'Ich habe das Recht zu wählen. — Kam të drejtën të votoj.'},
        {de:'die Demokratie',sq:'demokracia',type:'Politikë',ex:'Deutschland ist eine Demokratie. — Gjermani është demokraci.'},
        {de:'das Gesetz',sq:'ligji',type:'Politikë',ex:'Das Gesetz muss eingehalten werden. — Ligji duhet respektuar.'},
        {de:'die Staatsangehörigkeit',sq:'shtetësia',type:'Dokument',ex:'Ich beantrage die deutsche Staatsangehörigkeit. — Aplikoj për shtetësinë gjermane.'},
        {de:'das Grundgesetz',sq:'Ligji Bazë (Kushtetuta)',type:'Politikë',ex:'Das Grundgesetz schützt unsere Rechte. — Ligji Bazë mbron të drejtat tona.'},
        {de:'die Meinungsfreiheit',sq:'liria e mendimit/shprehjes',type:'E drejtë',ex:'Meinungsfreiheit ist ein Grundrecht. — Liria e shprehjes është e drejtë themelore.'},
        {de:'abstimmen',sq:'të votosh (për diçka specifike)',type:'Folje',ex:'Das Parlament stimmt über das Gesetz ab. — Parlamenti voton mbi ligjin.'},
      ],
      grammar:[
        {title:'Konjunktiv I — Raportimi indirekt',body:'Konjunktiv I përdoret kur raportojmë çfarë ka thënë dikush tjetër (zakonisht në media/gazeta):',
         table:{heads:['Direkt','Konjunktiv I','Shqip'],rows:[
           ['"Ich komme morgen."','Er sagt, er komme morgen.','Ai thotë të vijë nesër.'],
           ['"Wir haben gewählt."','Sie sagten, sie hätten gewählt.','Ata thanë se kishin votuar.'],
           ['"Das ist falsch."','Er behaupte, das sei falsch.','Ai pohon se kjo është e gabuar.'],
         ]}},
        {title:'Formimi i Konjunktiv I',body:'"sein" është forma më e zakonshme:',
         table:{heads:['Person','Konjunktiv I i "sein"'],rows:[
           ['ich','sei'],['du','sei(e)st'],['er/sie','sei'],['wir','seien'],['sie/Sie','seien'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Konjunktiv I i "sein" (er) është?',opts:['ist','war','sei','wäre'],a:2},
        {type:'Zgjedh përgjigjen',q:'Kur përdoret Konjunktiv I?',opts:['Dëshira','Raportim indirekt','Kushti','E ardhmja'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "demokracia" gjermanisht?',opts:['die Republik','die Demokratie','die Monarchie','die Diktatur'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Meinungsfreiheit"?',opts:['Liria e lëvizjes','Liria e shprehjes','Liria e punës','Liria e besimit'],a:1},
      ],
      quiz:[
        {q:'Plotëso (Konjunktiv I): Er sagt, er ___ morgen kommen.',opts:['kommt','komme','käme','kommen'],a:1,exp:'Forma e saktë: "komme". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "das Grundgesetz"?',opts:['Kodi Penal','Ligji i punës','Ligji Bazë/Kushtetuta','Ligji tatimor'],a:2,exp:'"das Grundgesetz" = Ligji Bazë/Kushtetuta. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "liria e shprehjes"?',opts:['die Pressefreiheit','die Meinungsfreiheit','die Religionsfreiheit','die Bewegungsfreiheit'],a:1,exp:'Përgjigja e saktë: "die Meinungsfreiheit". Krahasoji opsionet: die Pressefreiheit / die Meinungsfreiheit / die Religionsfreiheit — çfarë bën ndryshimin?'},
        {q:'Sa shpesh bëhen zgjedhjet federale në Gjermani?',opts:['Çdo 2 vjet','Çdo 4 vjet','Çdo 5 vjet','Çdo 6 vjet'],a:1,exp:'Përgjigja e saktë: "Çdo 4 vjet". Krahasoji opsionet: Çdo 2 vjet / Çdo 4 vjet / Çdo 5 vjet — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "abstimmen"?',opts:['Të zgjedhësh president','Të votosh për diçka specifike','Të bësh fushatë','Të regjistrohesh'],a:1,exp:'"abstimmen" = Të votosh për diçka specifike. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m9', num:9, title:'Udhëtim Kulturor', sub:'Interkulturelle Kompetenz',
      story:{ep:'Episodi 9',title:'Shqipëria dhe Gjermani — Dallime kulturore',lines:[
        {type:'narr',text:'Dion mban prezantim në punë mbi dallimet kulturore mes Shqipërisë dhe Gjermanisë.'},
        {type:'line',speaker:'Dion',de:'Was ich in Deutschland besonders bemerkt habe, ist die Pünktlichkeit. In Albanien ist man flexibler mit der Zeit.',sq:'Çfarë kam vërejtur veçanërisht në Gjermani është saktësia. Në Shqipëri jemi më fleksibël me kohën.'},
        {type:'line',speaker:'Kolegu',de:'Stimmt das wirklich? Erzähl uns mehr!',sq:'A është vërtet kështu? Tregoni më shumë!'},
        {type:'line',speaker:'Dion',de:'In Albanien lädt man Gäste spontan ein. Hier plant man Wochen voraus.',sq:'Në Shqipëri ftojmë mysafirë spontanisht. Këtu planifikohet javë përpara.'},
        {type:'line',speaker:'Kolegu',de:'Das ist ein interessanter Unterschied! Ich glaube, beide Kulturen haben ihre Vorteile.',sq:'Kjo është dallim interesant! Mendoj se të dyja kulturat kanë avantazhet e tyre.'},
      ]},
      vocab:[
        {de:'die Pünktlichkeit',sq:'saktësia (kohore)',type:'Kulturë',ex:'Pünktlichkeit ist in Deutschland sehr wichtig. — Saktësia është shumë e rëndësishme në Gjermani.'},
        {de:'der Unterschied',sq:'dallimi',type:'Krahasim',ex:'Was ist der Unterschied? — Cili është dallimi?'},
        {de:'die Gemeinsamkeit',sq:'ngjashmëria / pika e përbashkët',type:'Krahasim',ex:'Es gibt viele Gemeinsamkeiten zwischen uns. — Ka shumë ngjashmëri mes nesh.'},
        {de:'bemerken',sq:'të vëresh',type:'Folje',ex:'Ich habe etwas Interessantes bemerkt. — Kam vërejtur diçka interesante.'},
        {de:'der Vorteil / Nachteil',sq:'avantazhi / disavantazhi',type:'Krahasim',ex:'Jedes System hat Vor- und Nachteile. — Çdo sistem ka avantazhe dhe disavantazhe.'},
        {de:'interkulturell',sq:'ndërkulturor',type:'Kulturë',ex:'Interkulturelle Kompetenz ist wichtig. — Kompetenca ndërkulturore është e rëndësishme.'},
        {de:'die Gastfreundschaft',sq:'mikëpritja',type:'Kulturë',ex:'Albanische Gastfreundschaft ist legendär! — Mikëpritja shqiptare është legjendare!'},
        {de:'respektieren',sq:'të respektosh',type:'Folje',ex:'Ich respektiere andere Kulturen. — Respektoj kultura të tjera.'},
        {de:'spontan',sq:'spontan',type:'Mbiemër',ex:'Albanier sind sehr spontan. — Shqiptarët janë shumë spontanë.'},
        {de:'voraus planen',sq:'të planifikosh paraprakisht',type:'Shprehje',ex:'Deutsche planen gern voraus. — Gjermanët duan të planifikojnë paraprakisht.'},
      ],
      grammar:[
        {title:'Prepozicat me Genitivin: wegen, trotz, während, statt',body:'',
         table:{heads:['Prepozicion','Kuptim','Shembull'],rows:[
           ['wegen + Genit.','për shkak të','Wegen des Wetters blieb ich zu Hause.'],
           ['trotz + Genit.','megjithë','Trotz des Regens gingen wir spazieren.'],
           ['während + Genit.','gjatë','Während des Sommers reise ich.'],
           ['statt + Genit.','në vend të','Statt des Buses nahm ich die Bahn.'],
         ]}},
        {title:'Genitivin — Rasa e posesionit',body:'',
         table:{heads:['Gjinia','Nyja Genit.','Shembull'],rows:[
           ['Mashk.','des + -(e)s','das Auto des Mannes'],
           ['Femër.','der','die Tasche der Frau'],
           ['Asnj.','des + -(e)s','das Buch des Kindes'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Plotëso: ___ des Wetters blieb ich zu Hause.',opts:['Trotz','Wegen','Während','Statt'],a:1},
        {type:'Zgjedh përgjigjen',q:'Genitivin i "der Mann" (mashkull) është?',opts:['des Mannes','dem Mann','den Mann','der Mann'],a:0},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "die Pünktlichkeit"?',opts:['Mikëpritja','Saktësia kohore','Spontaniteti','Respekti'],a:1},
        {type:'Zgjedh përgjigjen',q:'Plotëso: Trotz ___ Regens gingen wir spazieren.',opts:['dem','der','des','die'],a:2},
      ],
      quiz:[
        {q:'Çfarë do të thotë "trotz"?',opts:['Për shkak të','Gjatë','Megjithë','Në vend të'],a:2,exp:'"trotz" = Megjithë. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Çfarë do të thotë "die Gastfreundschaft"?',opts:['Mikëpritja','Miqësia','Shoqëria','Bashkëpunimi'],a:0,exp:'"die Gastfreundschaft" = Mikëpritja. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Genitivin i "die Frau" (femër) është?',opts:['des Frau','dem Frau','der Frau','den Frau'],a:2,exp:'Përgjigja e saktë: "der Frau". Krahasoji opsionet: des Frau / dem Frau / der Frau — çfarë bën ndryshimin?'},
        {q:'Plotëso: Während ___ Sommers reise ich viel.',opts:['dem','des','der','die'],a:1,exp:'Forma e saktë: "des". Praktiko duke shkruar 3 fjali të ngjashme!'},
        {q:'Çfarë do të thotë "der Unterschied"?',opts:['Ngjashmëria','Avantazhi','Dallimi','Tradita'],a:2,exp:'"der Unterschied" = Dallimi. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m10', num:10, title:'Puna Sociale & Angazhimi', sub:'Ehrenamt & Engagement',
      story:{ep:'Episodi 10',title:'Vullnetari',lines:[
        {type:'narr',text:'Dion vendos të bëhet vullnetar. Regjistrohet në organizatë humanitare.'},
        {type:'line',speaker:'Koordinatorja',de:'Schön, dass Sie sich engagieren möchten! Was motiviert Sie?',sq:'Bukur që doni të angazhoheni! Çfarë ju motivon?'},
        {type:'line',speaker:'Dion',de:'Als Ausländer hat mir die Gemeinschaft hier sehr geholfen. Jetzt möchte ich etwas zurückgeben.',sq:'Si i huaj, bashkësia më ndihmoi shumë këtu. Tani dua të kthej diçka.'},
        {type:'line',speaker:'Koordinatorja',de:'Das ist eine wunderbare Einstellung. Wir brauchen Menschen, die andere unterstützen.',sq:'Kjo është qëndrim i mrekullueshëm. Kemi nevojë për njerëz që të mbështesin të tjerët.'},
        {type:'line',speaker:'Dion',de:'Ich kann Albanisch und Deutsch unterrichten und bei der Integration helfen.',sq:'Mund të mësoj shqip dhe gjermanisht dhe të ndihmoj me integrimin.'},
      ]},
      vocab:[
        {de:'das Ehrenamt',sq:'puna vullnetare',type:'Angazhim',ex:'Ich arbeite ehrenamtlich. — Punoj vullnetarisht.'},
        {de:'sich engagieren',sq:'të angazhohesh',type:'Folje',ex:'Ich engagiere mich für die Umwelt. — Angazhohem për mjedisin.'},
        {de:'unterstützen',sq:'të mbështesësh',type:'Folje',ex:'Ich unterstütze meine Kollegen. — Mbështes kolegët e mi.'},
        {de:'die Integration',sq:'integrimi',type:'Shoqëri',ex:'Integration braucht Zeit und Geduld. — Integrimi kërkon kohë dhe durim.'},
        {de:'die Gemeinschaft',sq:'bashkësia',type:'Shoqëri',ex:'Wir leben in einer starken Gemeinschaft. — Jetojmë në bashkësi të fortë.'},
        {de:'zurückgeben',sq:'të kthesh (diçka)',type:'Folje',ex:'Ich möchte der Gesellschaft etwas zurückgeben. — Dua t\'i kthej diçka shoqërisë.'},
        {de:'die Geduld',sq:'durimi',type:'Cilësi',ex:'Integration braucht viel Geduld. — Integrimi kërkon shumë durim.'},
        {de:'der Flüchtling',sq:'refugjati',type:'Shoqëri',ex:'Viele Flüchtlinge brauchen Hilfe. — Shumë refugjatë kanë nevojë për ndihmë.'},
        {de:'die Hilfsbereitschaft',sq:'gatishmëria për ndihmë',type:'Cilësi',ex:'Die Hilfsbereitschaft der Deutschen überraschte mich. — Gatishmëria e gjermanëve për ndihmë më befasoi.'},
        {de:'fördern',sq:'të ndihmosh të rritet/zhvillohet',type:'Folje',ex:'Das Projekt fördert die Integration. — Projekti nxit integrimin.'},
      ],
      grammar:[
        {title:'Ndajshteset gjermane — Prapashtesat',body:'Shpesh mund të formosh emra nga mbiemra ose folje duke shtuar prapashtesa:',
         table:{heads:['Prapashtesë','Formohet nga','Shembull'],rows:[
           ['-ung','folje','engagieren → die Engagierung (angazhimi)'],
           ['-keit','-ig mbiemra','hilfsbereit → die Hilfsbereitschaft'],
           ['-heit','mbiemra','frei → die Freiheit (liria)'],
           ['-schaft','emra','Gemein → die Gemeinschaft (bashkësia)'],
           ['-nis','folje/mbiemra','ergebnis → das Ergebnis (rezultati)'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "das Ehrenamt"?',opts:['Puna me pagesë','Puna part-time','Puna vullnetare','Puna sezonale'],a:2},
        {type:'Zgjedh përgjigjen',q:'Prapashtesa "-heit" formon?',opts:['Folje','Mbiemra','Emra abstrakt','Ndajfolje'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "fördern"?',opts:['Të pengosh','Të ndihmosh zhvillimin','Të shkatërrosh','Të refuzosh'],a:1},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "bashkësia" gjermanisht?',opts:['die Gesellschaft','die Gemeinschaft','die Integration','die Organisation'],a:1},
      ],
      quiz:[
        {q:'Çfarë do të thotë "sich engagieren"?',opts:['Të punosh','Të angazhohesh','Të largohesh','Të ankohesh'],a:1,exp:'"sich engagieren" = Të angazhohesh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Prapashtesa e "frei" → "e drejta e lirisë" është?',opts:['frei-keit','frei-heit','frei-schaft','frei-nis'],a:1,exp:'Përgjigja e saktë: "frei-heit". Krahasoji opsionet: frei-keit / frei-heit / frei-schaft — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Geduld"?',opts:['Guximi','Durimi','Krenaria','Dashamirësia'],a:1,exp:'"die Geduld" = Durimi. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "refugjati" gjermanisht?',opts:['der Ausländer','der Migrant','der Flüchtling','der Einwanderer'],a:2,exp:'Forma e saktë është: "der Flüchtling".'},
        {q:'Çfarë do të thotë "zurückgeben"?',opts:['Të marrësh','Të kthesh diçka','Të japësh sërish','Të humbasësh'],a:1,exp:'"zurückgeben" = Të kthesh diçka. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m11', num:11, title:'Gastronomia & Traditat', sub:'Kulinarik & Traditionen',
      story:{ep:'Episodi 11',title:'Gatim shqiptar në Berlin',lines:[
        {type:'narr',text:'Dion organizon darkë shqiptare për kolegët e tij gjermanë.'},
        {type:'line',speaker:'Kolegu',de:'Was kochst du heute für uns?',sq:'Çfarë gatuan sot për ne?'},
        {type:'line',speaker:'Dion',de:'Ich mache Tavë Kosi — ein albanisches Nationalgericht mit Joghurt und Lamm.',sq:'Bëj Tavë Kosi — gjellë kombëtare shqiptare me kos dhe mish qingji.'},
        {type:'line',speaker:'Kolegu',de:'Wie lange braucht man dafür?',sq:'Sa kohë duhet për këtë?'},
        {type:'line',speaker:'Dion',de:'Ungefähr zwei Stunden. Aber das Geheimnis ist die Qualität der Zutaten!',sq:'Rreth dy orë. Por sekreti është cilësia e ingredientëve!'},
        {type:'line',speaker:'Kolegu',de:'Ich bin gespannt! Albanische Küche kenne ich gar nicht.',sq:'Jam kurioz! Kuzhinën shqiptare nuk e njoh fare.'},
        {type:'line',speaker:'Dion',de:'Dann wird das eine Entdeckungsreise für dich! Die albanische Küche ist mediterran und sehr reichhaltig.',sq:'Atëherë kjo do të jetë udhëtim zbulimi për ty! Kuzhina shqiptare është mesdhetare dhe shumë e pasur.'},
      ]},
      vocab:[
        {de:'das Rezept',sq:'receta',type:'Gatim',ex:'Hast du das Rezept von deiner Mutter? — E ke recetën nga nëna jote?'},
        {de:'die Zutaten',sq:'ingredientët',type:'Gatim',ex:'Alle Zutaten sind frisch. — Të gjithë ingredientët janë të freskët.'},
        {de:'kochen / braten / backen',sq:'të gatuash / skuqësh / piqësh',type:'Folje',ex:'Ich koche Suppe, brate Fleisch und backe Kuchen. — Gatuaj supë, skuq mish dhe piqësh tortë.'},
        {de:'die Portion',sq:'porcioni',type:'Gatim',ex:'Eine große Portion, bitte! — Porcion të madh, ju lutem!'},
        {de:'die Küche',sq:'kuzhina (tradita gastronomike)',type:'Kulturë',ex:'Die albanische Küche ist mediterran. — Kuzhina shqiptare është mesdhetare.'},
        {de:'das Nationalgericht',sq:'gjella kombëtare',type:'Kulturë',ex:'Tavë Kosi ist das Nationalgericht Albaniens. — Tavë Kosi është gjella kombëtare e Shqipërisë.'},
        {de:'würzen',sq:'të aromatizosh / shtosh erëza',type:'Folje',ex:'Ich würze das Fleisch mit Knoblauch. — Aromatizon mishin me hudër.'},
        {de:'das Geheimnis',sq:'sekreti',type:'Abstrakt',ex:'Das ist das Geheimnis meiner Oma! — Ky është sekreti i gjyshes sime!'},
        {de:'gespannt sein',sq:'të jesh kurioz/e / i/e padurueshëm',type:'Shprehje',ex:'Ich bin gespannt auf das Essen! — Jam i padurueshëm për ushqimin!'},
        {de:'die Entdeckung',sq:'zbulimi',type:'Abstrakt',ex:'Das war eine Entdeckung für mich! — Kjo ishte zbulim për mua!'},
      ],
      grammar:[
        {title:'Imperativit — Urdherorja',body:'Imperativit shpreh urdhëra, udhëzime, dhe këshilla. Ka tre forma:',
         table:{heads:['Forma','Gjermanisht','Shqip'],rows:[
           ['Joformale (du)','Komm her! / Iss das!','Eja! / Ha këtë!'],
           ['Grup (ihr)','Kommt her! / Esst das!','Ejani! / Hani!'],
           ['Formale (Sie)','Kommen Sie! / Essen Sie!','Ejani ju lutem! / Hani!'],
         ]}},
        {title:'Imperativit i foljeve të parregullta',body:'',
         table:{heads:['Folje','du-form','Shembull'],rows:[
           ['sein','sei','Sei ruhig! — Bëhu i qetë!'],
           ['haben','hab','Hab Geduld! — Ki durim!'],
           ['nehmen','nimm','Nimm das Salz! — Merre kripën!'],
           ['geben','gib','Gib mir das Buch! — Jepmë librin!'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Imperativit i "kommen" (du) është?',opts:['Kommen!','Komm!','Komme!','Kommst!'],a:1},
        {type:'Zgjedh përgjigjen',q:'Imperativit formal i "essen" (Sie) është?',opts:['Ess!','Essen!','Esst!','Essen Sie!'],a:3},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "gespannt sein"?',opts:['Të jesh i lodhur','Të jesh kurioz/i padurueshëm','Të jesh i frikësuar','Të jesh i lumtur'],a:1},
        {type:'Zgjedh përgjigjen',q:'Imperativit i "nehmen" (du) është?',opts:['Nehm!','Nimmst!','Nimm!','Nehme!'],a:2},
      ],
      quiz:[
        {q:'Imperativit i "sein" (du) është?',opts:['Bist!','Sei!','Bin!','Seid!'],a:1,exp:'Përgjigja e saktë: "Sei!". Krahasoji opsionet: Bist! / Sei! / Bin! — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Zutaten"?',opts:['Recetat','Porcionet','Ingredientët','Erëzat'],a:2,exp:'"die Zutaten" = Ingredientët. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Imperativit i "geben" (du) është?',opts:['Geben!','Gibst!','Gebt!','Gib!'],a:3,exp:'Përgjigja e saktë: "Gib!". Krahasoji opsionet: Geben! / Gibst! / Gebt! — çfarë bën ndryshimin?'},
        {q:'Si thuhet "gjella kombëtare" gjermanisht?',opts:['das Nationalgericht','die Nationalkuche','das Nationalessen','die Nationalrezept'],a:0,exp:'Forma e saktë është: "das Nationalgericht".'},
        {q:'Çfarë do të thotë "würzen"?',opts:['Të gatuash','Të piqësh','Të shtosh erëza','Të skuqësh'],a:2,exp:'"würzen" = Të shtosh erëza. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m12', num:12, title:'Ankesa & Zgjidhja e Konflikteve', sub:'Beschwerden & Konfliktlösung',
      story:{ep:'Episodi 12',title:'Produkt me defekt',lines:[
        {type:'narr',text:'Dion ka blerë laptop të ri por ka defekt. Shkon tek dyqani.'},
        {type:'line',speaker:'Dion',de:'Ich möchte mich beschweren. Ich habe diesen Laptop vor zwei Wochen gekauft, und er funktioniert nicht.',sq:'Dua të ankohem. E bleva këtë laptop para dy javësh dhe nuk funksionon.'},
        {type:'line',speaker:'Shitësi',de:'Das tut mir leid. Was genau ist das Problem?',sq:'Më vjen keq. Cili është saktësisht problemi?'},
        {type:'line',speaker:'Dion',de:'Der Bildschirm flackert ständig und manchmal schaltet er sich aus.',sq:'Ekrani lëkundett vazhdimisht dhe ndonjëherë fiket vetë.'},
        {type:'line',speaker:'Shitësi',de:'Wir werden das untersuchen. Sie haben Anspruch auf Reparatur oder Ersatz.',sq:'Do ta shqyrtojmë. Keni të drejtë për riparim ose zëvendësim.'},
        {type:'line',speaker:'Dion',de:'Ich möchte lieber einen Ersatz. Das Gerät ist seit dem ersten Tag defekt.',sq:'Preferoj zëvendësim. Pajisja ka pasur defekt që nga dita e parë.'},
      ]},
      vocab:[
        {de:'sich beschweren',sq:'të ankohesh',type:'Ankesë',ex:'Ich möchte mich beschweren. — Dua të ankohem.'},
        {de:'der Mangel / der Defekt',sq:'defekti / mangësia',type:'Ankesë',ex:'Das Produkt hat einen Defekt. — Produkti ka defekt.'},
        {de:'die Reklamation',sq:'reklamacioni / ankesa',type:'Ankesë',ex:'Ich mache eine Reklamation. — Bëj reklamacion.'},
        {de:'die Garantie',sq:'garancia',type:'Blerje',ex:'Das Produkt hat zwei Jahre Garantie. — Produkti ka dy vjet garanci.'},
        {de:'erstatten',sq:'të rimbursosh',type:'Folje',ex:'Ich möchte mein Geld erstattet bekommen. — Dua rimbursimin e parave.'},
        {de:'reparieren',sq:'të riparosh',type:'Folje',ex:'Können Sie das reparieren? — Mund ta riparoni?'},
        {de:'der Ersatz',sq:'zëvendësimi',type:'Ankesë',ex:'Ich möchte einen Ersatz. — Dua zëvendësim.'},
        {de:'der Anspruch',sq:'e drejta / pretendimi',type:'Juridik',ex:'Sie haben Anspruch auf Reparatur. — Keni të drejtë për riparim.'},
        {de:'zufrieden',sq:'i/e kënaqur',type:'Mbiemër',ex:'Ich bin nicht zufrieden. — Nuk jam i kënaqur.'},
        {de:'die Lösung',sq:'zgjidhja',type:'Abstrakt',ex:'Wir finden eine Lösung. — Gjejmë zgjidhje.'},
      ],
      grammar:[
        {title:'Shprehja e ankesës — Stil formal dhe joformal',body:'',
         table:{heads:['Nivel','Gjermanisht','Shqip'],rows:[
           ['Formal','Ich möchte mich beschweren über...','Dua të ankohem për...'],
           ['Formal','Leider muss ich Ihnen mitteilen, dass...','Fatkeqësisht duhet t\'ju njoftoj se...'],
           ['Joformal','Das geht so nicht!','Kjo nuk shkon kështu!'],
           ['Neutrale','Gibt es eine Lösung für das Problem?','Ka ndonjë zgjidhje për problemin?'],
         ]}},
        {title:'Negocimi — Shprehje kyçe',body:'',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Ich bestehe darauf, dass...','Insistoj që...'],
           ['Wäre es möglich,...?','Do të ishte e mundur...?'],
           ['Das ist inakzeptabel.','Kjo është e papranueshme.'],
           ['Ich erwarte eine Lösung bis...','Pres zgjidhje deri më...'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si thuhet "garancia" gjermanisht?',opts:['die Reklamation','der Defekt','die Garantie','der Ersatz'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si nis ankesa formale?',opts:['Das geht nicht!','Ich möchte mich beschweren','Hey!','Das ist schlecht!'],a:1},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "erstatten"?',opts:['Të riparosh','Të zëvendësosh','Të rimbursosh','Të ankohesh'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "i kënaqur" gjermanisht?',opts:['glücklich','zufrieden','froh','begeistert'],a:1},
      ],
      quiz:[
        {q:'Çfarë do të thotë "die Reklamation"?',opts:['Garancia','Reklamacioni/ankesa','Zëvendësimi','Riparimi'],a:1,exp:'"die Reklamation" = Reklamacioni/ankesa. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Insistoj që..." gjermanisht?',opts:['Ich hoffe, dass...','Ich denke, dass...','Ich bestehe darauf, dass...','Ich glaube, dass...'],a:2,exp:'Forma e saktë është: "Ich bestehe darauf, dass...".'},
        {q:'Çfarë do të thotë "der Anspruch"?',opts:['Problemi','E drejta/pretendimi','Zgjidhja','Defekti'],a:1,exp:'"der Anspruch" = E drejta/pretendimi. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Si thuhet "Kjo nuk shkon kështu!" gjermanisht?',opts:['Das ist gut!','Das geht so nicht!','Das ist okay!','Das kann sein!'],a:1,exp:'Forma e saktë është: "Das geht so nicht!".'},
        {q:'Çfarë do të thotë "zufrieden"?',opts:['I zemëruar','I trishtuar','I kënaqur','I shqetësuar'],a:2,exp:'"zufrieden" = I kënaqur. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m13', num:13, title:'Shkenca & Inovacioni', sub:'Wissenschaft & Innovation',
      story:{ep:'Episodi 13',title:'Dion dhe IA',lines:[
        {type:'narr',text:'Dion prezanton projekt IA të kompanisë para klientëve.'},
        {type:'line',speaker:'Dion',de:'Unser System nutzt künstliche Intelligenz, um Prozesse zu automatisieren.',sq:'Sistemi ynë përdor inteligjencë artificiale për të automatizuar proceset.'},
        {type:'line',speaker:'Klienti',de:'Wie sicher sind unsere Daten dabei?',sq:'Sa të sigurta janë të dhënat tona gjatë kësaj?'},
        {type:'line',speaker:'Dion',de:'Datensicherheit hat für uns höchste Priorität. Alle Daten werden verschlüsselt.',sq:'Siguria e të dhënave ka prioritet maksimal për ne. Të gjitha të dhënat kriptohen.'},
        {type:'line',speaker:'Klienti',de:'Beeindruckend! Wie lange hat die Entwicklung gedauert?',sq:'Mbresëlënëse! Sa kohë zgjati zhvillimi?'},
        {type:'line',speaker:'Dion',de:'Achtzehn Monate. Das Team hat rund um die Uhr gearbeitet.',sq:'Tetëmbëdhjetë muaj. Ekipi ka punuar gjatë gjithë orëve.'},
      ]},
      vocab:[
        {de:'die Forschung',sq:'hulumtimi / kërkimi shkencor',type:'Shkencë',ex:'Die Forschung braucht Zeit. — Hulumtimi kërkon kohë.'},
        {de:'die Erfindung',sq:'shpikja',type:'Shkencë',ex:'Das ist eine revolutionäre Erfindung. — Kjo është shpikje revolucionare.'},
        {de:'entwickeln',sq:'të zhvillosh',type:'Folje',ex:'Wir entwickeln neue Software. — Zhvillojmë softuer të ri.'},
        {de:'automatisieren',sq:'të automatizosh',type:'Folje',ex:'Die Fabrik wurde automatisiert. — Fabrika u automatizua.'},
        {de:'die Datensicherheit',sq:'siguria e të dhënave',type:'Teknologji',ex:'Datensicherheit ist sehr wichtig. — Siguria e të dhënave është shumë e rëndësishme.'},
        {de:'verschlüsseln',sq:'të kriptosh / enkriptosh',type:'Teknologji',ex:'Die Daten werden verschlüsselt. — Të dhënat kriptohen.'},
        {de:'der Fortschritt',sq:'përparimi',type:'Shkencë',ex:'Der technologische Fortschritt ist schnell. — Përparimi teknologjik është i shpejtë.'},
        {de:'rund um die Uhr',sq:'gjatë gjithë orëve / 24/7',type:'Shprehje',ex:'Wir arbeiten rund um die Uhr. — Punojmë 24/7.'},
        {de:'die Priorität',sq:'prioriteti',type:'Punë',ex:'Das hat höchste Priorität. — Kjo ka prioritet maksimal.'},
        {de:'revolutionär',sq:'revolucionar',type:'Mbiemër',ex:'Das ist eine revolutionäre Idee. — Kjo është ide revolucionare.'},
      ],
      grammar:[
        {title:'Ndajshteset — Parashtesa dhe kuptimi',body:'Parashtesa ndryshojnë kuptimin e fjalës:',
         table:{heads:['Parashtesë','Kuptim','Shembull'],rows:[
           ['un-','mohim/kundërtare','möglich → unmöglich (e pamundur)'],
           ['ver-','ndryshim/gabim','kaufen → verkaufen (të shesësh)'],
           ['be-','kryerje','arbeiten → bearbeiten (të përpunosh)'],
           ['ent-','shkëputje/largim','wickeln → entwickeln (të zhvillosh)'],
           ['er-','rezultat/arritje','finden → erfinden (të shpiksësh)'],
         ]}},
        {title:'Pasivi me modalë',body:'Pasivi + folje modale:',
         table:{heads:['Gjermanisht','Shqip'],rows:[
           ['Das muss gemacht werden.','Kjo duhet të bëhet.'],
           ['Die Daten sollten gespeichert werden.','Të dhënat duhet të ruhen.'],
           ['Das kann automatisiert werden.','Kjo mund të automatizohej.'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë parashtesa "un-"?',opts:['Mundësi','Mohim/kundërtare','Ndryshim','Arritje'],a:1},
        {type:'Zgjedh përgjigjen',q:'Pasivi me modal: "Das ___ gemacht werden."',opts:['hat','ist','muss','wird'],a:2},
        {type:'Zgjedh përgjigjen',q:'Çfarë do të thotë "der Fortschritt"?',opts:['Shpikja','Hulumtimi','Përparimi','Teknologjia'],a:2},
        {type:'Zgjedh përgjigjen',q:'"erfinden" formohet me parashtesë?',opts:['un-','ver-','er-','be-'],a:2},
      ],
      quiz:[
        {q:'Çfarë do të thotë "entwickeln"?',opts:['Të shpiksësh','Të zhvillosh','Të automatizosh','Të kriptosh'],a:1,exp:'"entwickeln" = Të zhvillosh. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Pasivi modal: "Die Daten ___ verschlüsselt werden."',opts:['haben','sein','sollten','wurden'],a:2,exp:'Përgjigja e saktë: "sollten". Krahasoji opsionet: haben / sein / sollten — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "rund um die Uhr"?',opts:['Çdo javë','Gjatë gjithë orëve/24/7','Herë pas here','Nganjëherë'],a:1,exp:'"rund um die Uhr" = Gjatë gjithë orëve/24/7. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
        {q:'Parashtesa "ver-" + "kaufen" bëhet?',opts:['unkaufen','erkaufen','verkaufen','bekaufen'],a:2,exp:'Përgjigja e saktë: "verkaufen". Krahasoji opsionet: unkaufen / erkaufen / verkaufen — çfarë bën ndryshimin?'},
        {q:'Çfarë do të thotë "die Erfindung"?',opts:['Hulumtimi','Përparimi','Shpikja','Zhvillimi'],a:2,exp:'"die Erfindung" = Shpikja. Mëso fjalën në kontekst me shembuj — fjaloria bëhet aktive vetëm duke e dëgjuar dhe folur, jo duke e memorizuar!'},
      ]
    },
    {
      id:'b1m14', num:14, title:'Rishikim B1 & Çertifikata', sub:'Wiederholung & Abschluss',
      story:{ep:'Episodi Final',title:'Dion — Rruga nga A1 në B1',lines:[
        {type:'narr',text:'Dion ka arritur B1. Tani shkruan letër mirënjohje për mësuesen e tij të parë të gjermanishtes.'},
        {type:'line',speaker:'Dion',de:'Sehr geehrte Frau Müller, ich schreibe Ihnen, um mich zu bedanken.',sq:'Shumë e nderuar Znj. Müller, po ju shkruaj për t\'ju falënderuar.'},
        {type:'line',speaker:'Dion',de:'Als ich vor zwei Jahren nach Wien kam, konnte ich kein einziges Wort Deutsch.',sq:'Kur erdha në Vjenë para dy vitesh, nuk dija asnjë fjalë gjermanisht.'},
        {type:'line',speaker:'Dion',de:'Dank Ihres Unterrichts habe ich heute das B1-Zertifikat bestanden.',sq:'Falë mësimit tuaj, sot e kalova çertifikatën B1.'},
        {type:'line',speaker:'Dion',de:'Deutsch hat mir Türen geöffnet — beruflich und persönlich. Ich plane nun, B2 zu beginnen.',sq:'Gjermanishtja m\'ka hapur dyer — profesionalisht dhe personalisht. Tani planifikoj të filloj B2.'},
        {type:'line',speaker:'Dion',de:'Mit freundlichen Grüßen, Dion Kelmendi',sq:'Me përshëndetje të sinqerta, Dion Kelmendi'},
      ]},
      vocab:[
        {de:'das Zertifikat',sq:'çertifikata',type:'Arsim',ex:'Ich habe das B1-Zertifikat bestanden! — E kalova çertifikatën B1!'},
        {de:'Sehr geehrte/r...',sq:'Shumë i/e nderuar...',type:'Letër formale',ex:'Sehr geehrte Frau Müller, — Shumë e nderuar Znj. Müller,'},
        {de:'Mit freundlichen Grüßen',sq:'Me përshëndetje të sinqerta',type:'Letër formale',ex:'Mit freundlichen Grüßen, Max Müller — Me përshëndetje, Max Müller'},
        {de:'sich bedanken für',sq:'të falënderosh për',type:'Shprehje',ex:'Ich bedanke mich für Ihre Hilfe. — Ju falënderoj për ndihmën tuaj.'},
        {de:'dank + Genit.',sq:'falë (diçkaje)',type:'Prepozicion',ex:'Dank Ihres Unterrichts habe ich bestanden. — Falë mësimit tuaj kalova.'},
        {de:'Türen öffnen',sq:'të hapësh dyer (fig.)',type:'Shprehje',ex:'Deutsch hat mir viele Türen geöffnet. — Gjermanishtja m\'ka hapur shumë dyer.'},
        {de:'beruflich / persönlich',sq:'profesionalisht / personalisht',type:'Ndajfolje',ex:'Ich habe mich beruflich und persönlich entwickelt. — Jam zhvilluar profesionalisht dhe personalisht.'},
        {de:'der Abschluss',sq:'mbyllja / përfundimi',type:'Arsim',ex:'Das ist mein Abschluss. — Ky është mbyllja ime.'},
        {de:'die Leistung',sq:'arritja / performanca',type:'Arsim',ex:'Das ist eine große Leistung! — Kjo është arritje e madhe!'},
        {de:'weitermachen',sq:'të vazhdosh',type:'Folje',ex:'Ich werde mit B2 weitermachen. — Do të vazhdoj me B2.'},
      ],
      grammar:[
        {title:'Rishikim i plotë B1 — Gramatika',body:'Struktura kryesore të B1:',
         table:{heads:['Tema','Struktura','Shembull'],rows:[
           ['Konjunktiv II','würde + inf. / Könntest du...?','Ich würde gern kommen.'],
           ['Pasiv','wird/wurde + particip','Das wird gemacht.'],
           ['Fjalia relative','der/die/das + folje në fund','Das ist der Mann, den ich kenne.'],
           ['Fjalia me dass','...dass + folje në fund','Ich denke, dass er kommt.'],
           ['Futur II','werde + particip + haben/sein','Ich werde gelernt haben.'],
           ['Konjunktiv I','Raportim: er komme, sei','Er sagt, er komme morgen.'],
           ['Genitivin','wegen/trotz des...','Wegen des Wetters blieb ich.'],
           ['Imperativit','Komm! Kommt! Kommen Sie!','Komm bitte hierher!'],
         ]}},
        {title:'Letër formale — Struktura',body:'',
         table:{heads:['Pjesa','Gjermanisht'],rows:[
           ['Hyrja','Sehr geehrte/r Frau/Herr...'],
           ['Qëllimi','Ich schreibe Ihnen, um...'],
           ['Falënderimi','Ich bedanke mich herzlich für...'],
           ['Mbyllja','Mit freundlichen Grüßen,'],
         ]}},
      ],
      exercises:[
        {type:'Zgjedh përgjigjen',q:'Si fillon letër formale gjermanisht?',opts:['Hallo!','Liebe...','Sehr geehrte/r...','Hey...'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si mbyllet letër formale gjermanisht?',opts:['Tschüss!','Bis bald!','Mit freundlichen Grüßen','Viele Grüße'],a:2},
        {type:'Zgjedh përgjigjen',q:'Pasivi: "Das Zertifikat ___ bestanden."',opts:['hat','ist','wurde','sein'],a:2},
        {type:'Zgjedh përgjigjen',q:'Si thuhet "falë mësimit tuaj" gjermanisht?',opts:['Wegen Ihres Unterrichts','Dank Ihres Unterrichts','Trotz Ihres Unterrichts','Während Ihres Unterrichts'],a:1},
      ],
      quiz:[
        {q:'Cila është forma e saktë e Konjunktiv I (er)?',opts:['ist','war','sei','wäre'],a:2,exp:'Përgjigja e saktë është: "sei".'},
        {q:'Si thuhet "arritja / performanca" gjermanisht?',opts:['der Erfolg','die Leistung','das Zertifikat','der Abschluss'],a:1,exp:'Forma e saktë është: "die Leistung".'},
        {q:'Plotëso (Futur II): Bis Dezember werde ich B1 ___ haben.',opts:['lerne','lernen','gelernt','lernte'],a:2,exp:'Forma e saktë: "gelernt". Kujto: haben për folje tranzitive (me objekt), sein për lëvizje/ndryshim gjendjeje. Ky dallim është bazë e Perfektit!'},
        {q:'Fjalia relative (Akkusativ mask.): Das ist der Mann, ___ ich sehe.',opts:['der','die','das','den'],a:3,exp:'Rasa e saktë kërkon: "den".'},
        {q:'Plotëso (Pasiv): Das Gesetz ___ geändert worden.',opts:['hat','ist','war','wurde'],a:1,exp:'Forma e saktë: "ist". Praktiko duke shkruar 3 fjali të ngjashme!'},
      ]
    },,
    {
      id:'b1m15', num:15, title:'Pronomen — 7 Llojet',
      sub:'Personalpronomen bis Indefinitpronomen',
      story:{
        ep:'Episodi 15', title:'Klea mëson Pronomen',
        narr:'Klea po përgatitet për provimin Goethe B1. Ajo i kërkon Dion-it të shpjegojë llojet e ndryshme të Pronomenave. Dioni kënaqet t\'i ndihmojë — edhe ai i ka rishikuar kohët e fundit.',
        lines:[
          {speaker:'Klea', de:'Dion, kannst du mir die Pronomen erklären? Ich verstehe den Unterschied nicht immer.', sq:'Dion, a mund të ma shpjegosh Pronomenat? Nuk e kuptoj gjithmonë ndryshimin.'},
          {speaker:'Dion', de:'Natürlich! Es gibt sieben Arten. Fangen wir mit den Personalpronomen an.', sq:'Sigurisht! Ka shtatë lloje. Le të fillojmë me Personalpronomen.'},
          {speaker:'Klea', de:'Ich, du, er, sie, es... Das kenne ich schon.', sq:'Ich, du, er, sie, es... Këto i di tashmë.'},
          {speaker:'Dion', de:'Gut! Aber weißt du, dass sie sich je nach Kasus ändern?', sq:'Mirë! Por a e di që ato ndryshojnë sipas rasës?'},
          {speaker:'Klea', de:'Ah, du meinst Nominativ, Akkusativ und Dativ?', sq:'Ah, do të thuash Nominativ, Akkusativ dhe Dativ?'},
          {speaker:'Dion', de:'Genau! "Ich helfe dir" — ich ist Nominativ, dir ist Dativ.', sq:'Saktë! "Ich helfe dir" — ich është Nominativ, dir është Dativ.'},
          {speaker:'Klea', de:'Und die Possessivpronomen? Mein, dein, sein...', sq:'Po Possessivpronomenat? Mein, dein, sein...'},
          {speaker:'Dion', de:'Die zeigen Besitz. "Das ist mein Buch" — mein gehört zu ich.', sq:'Ato tregojnë pronësi. "Das ist mein Buch" — mein i përket ich.'},
          {speaker:'Klea', de:'Und Reflexivpronomen? Ich wasche mich?', sq:'Po Reflexivpronomenat? Ich wasche mich?'},
          {speaker:'Dion', de:'Richtig! Die Handlung fällt auf das Subjekt zurück. Ich→mich, du→dich, er→sich.', sq:'Saktë! Veprimi kthehet te Subjekti. Ich→mich, du→dich, er→sich.'},
          {speaker:'Klea', de:'Das macht Sinn! Und die anderen vier Arten?', sq:'Kjo ka kuptim! Po katër llojet e tjera?'},
          {speaker:'Dion', de:'Relativpronomen verbinden Sätze: "Der Mann, der hier steht..." Demonstrativpronomen zeigen: dieser, jener...', sq:'Relativpronomen bashkojnë fjali: "Der Mann, der hier steht..." Demonstrativpronomen tregojnë: dieser, jener...'},
          {speaker:'Klea', de:'Interrogativpronomen sind die Fragewörter: wer, was, welcher?', sq:'Interrogativpronomen janë fjalët pyetëse: wer, was, welcher?'},
          {speaker:'Dion', de:'Perfekt! Und Indefinitpronomen: jemand, niemand, alles, nichts...', sq:'Perfekt! Dhe Indefinitpronomen: jemand, niemand, alles, nichts...'},
          {speaker:'Klea', de:'Jetzt verstehe ich das System! Danke, Dion!', sq:'Tani e kuptoj sistemin! Faleminderit, Dion!'},
          {speaker:'Dion', de:'Übung macht den Meister! Lass uns Übungen machen.', sq:'Praktika bën mësuesin! Le të bëjmë ushtrime.'}
        ]
      },
      vocab:[
        {de:'das Pronomen', sq:'pronomi', ex:'Das Pronomen ersetzt das Nomen.'},
        {de:'das Personalpronomen', sq:'pronomi personal', ex:'ich, du, er, sie, es, wir, ihr, sie, Sie'},
        {de:'das Possessivpronomen', sq:'pronomi pronësor', ex:'mein, dein, sein, ihr, unser, euer'},
        {de:'das Reflexivpronomen', sq:'pronomi vetëveprues', ex:'mich, dich, sich, uns, euch'},
        {de:'das Relativpronomen', sq:'pronomi lidhës', ex:'der, die, das, den, dem, deren, dessen'},
        {de:'das Demonstrativpronomen', sq:'pronomi dëftues', ex:'dieser, diese, dieses, jener, jene'},
        {de:'das Interrogativpronomen', sq:'pronomi pyetës', ex:'wer, wen, wem, wessen, was, welcher'},
        {de:'das Indefinitpronomen', sq:'pronomi i pacaktuar', ex:'jemand, niemand, etwas, nichts, alle, jeder'},
        {de:'der Kasus', sq:'rasa gramatikore', ex:'Nominativ, Akkusativ, Dativ, Genitiv'},
        {de:'der Nominativ', sq:'emërorja', ex:'Ich lese. (Ich = Nominativ)'},
        {de:'der Akkusativ', sq:'kallëzorja', ex:'Ich sehe ihn. (ihn = Akkusativ)'},
        {de:'der Dativ', sq:'dhanorja', ex:'Ich helfe dir. (dir = Dativ)'},
        {de:'ersetzen', sq:'zëvendësoj', ex:'Ein Pronomen ersetzt ein Nomen.'},
        {de:'die Handlung', sq:'veprimi', ex:'Die Handlung fällt auf das Subjekt zurück.'},
        {de:'verbinden', sq:'bashkoj, lidh', ex:'Relativpronomen verbinden zwei Sätze.'}
      ],
      grammar:[
        {title:'1. Personalpronomen — Pronomi Personal',
         body:'Zëvendësojnë persona ose gjëra. Ndryshojnë sipas rasës (Kasus): Nominativ, Akkusativ, Dativ.',
         table:{heads:['Kasus','ich','du','er','sie','es','wir','ihr','sie/Sie'],
                rows:[['Nom.','ich','du','er','sie','es','wir','ihr','sie/Sie'],
                      ['Akk.','mich','dich','ihn','sie','es','uns','euch','sie/Sie'],
                      ['Dat.','mir','dir','ihm','ihr','ihm','uns','euch','ihnen/Ihnen']]},
         examples:['Ich helfe dir. — Unë të ndihmoj ty.','Er sieht mich. — Ai më sheh mua.']},
        {title:'2. Possessivpronomen — Pronomi Pronësor',
         body:'Tregojnë pronësi. Para emrit: mein Buch. I pavarur: Das Buch ist meins.',
         table:{heads:['Person','Pronom','Shembull'],
                rows:[['ich','mein','Das ist mein Buch.'],['du','dein','Ist das dein Auto?'],['er','sein','Sein Hund ist groß.'],['sie','ihr','Ihre Tasche ist neu.'],['wir','unser','Unser Haus ist alt.'],['ihr','euer','Euer Kind ist süß.'],['sie/Sie','ihr/Ihr','Ihr Auto ist schön.']]},
         examples:['Das Buch ist meins. (i pavarur)','Das ist dein Stift. (para emrit)']},
        {title:'3. Reflexivpronomen — Pronomi Vetëveprues',
         body:'Veprimi kthehet te vetë kryefjala. Akkusativ: mich/dich/sich/uns/euch/sich. Dativ: mir/dir/sich/uns/euch/sich.',
         examples:['Ich wasche mich. — Lahem.','Du kämmst dir die Haare. — Ti krehesh flokët.','Er interessiert sich für Musik. — Ai interesohet për muzikë.','Wir freuen uns. — Gëzohemi.']},
        {title:'4. Relativpronomen — Pronomi Lidhës',
         body:'Lidhin dy fjali. Ndryshojnë sipas gjinisë (Genus) dhe rasës (Kasus).',
         table:{heads:['Kasus','mask.','fem.','neut.','plural'],
                rows:[['Nom.','der','die','das','die'],['Akk.','den','die','das','die'],['Dat.','dem','der','dem','denen'],['Gen.','dessen','deren','dessen','deren']]},
         examples:['Der Mann, der hier steht, ist mein Lehrer.','Die Frau, die ich kenne, heißt Anna.','Das Buch, das ich lese, ist interessant.']},
        {title:'5. Demonstrativpronomen — Pronomi Dëftues',
         body:'Tregojnë diçka specifike. dieser/diese/dieses = ky/kjo KËTU. jener/jene/jenes = ai/ajo ATJE.',
         examples:['Dieser Stift ist neu. — Ky laps (këtu) është i ri.','Jenes Auto ist alt. — Ajo makinë (atje) është e vjetër.','Ich mag dieses Buch. — Më pëlqen ky libër.']},
        {title:'6. Interrogativpronomen — Pronomi Pyetës',
         body:'Përdoren për pyetje. Wer = kush (person). Was = çfarë (gjë). Welcher/e/es = cili/cila/cili.',
         table:{heads:['Pronom','Kuptimi','Shembull'],
                rows:[['wer','kush','Wer hilft dir?'],['wen','kë (Akk.)','Wen siehst du?'],['wem','kujt (Dat.)','Wem gibst du das?'],['wessen','i kujt (Gen.)','Wessen Tasche ist das?'],['was','çfarë','Was ist das?'],['welcher/e/es','cili/cila','Welches Buch liest du?']]},
         examples:['Wer hilft dir? — Kush të ndihmon?','Was machst du? — Çfarë po bën?']},
        {title:'7. Indefinitpronomen — Pronomi i Pacaktuar',
         body:'Tregojnë persona ose gjëra të pacaktuara. Nuk referohen te dikush/diçka specifike.',
         table:{heads:['Pronom','Kuptimi','Shembull'],
                rows:[['jemand','dikush','Jemand hat angerufen.'],['niemand','askush','Niemand war zu Hause.'],['etwas','diçka','Etwas stimmt nicht.'],['nichts','asgjë','Ich habe nichts gesagt.'],['alles','gjithçka','Ich habe alles verstanden.'],['alle','të gjithë','Alle sind hier.'],['jeder','secili','Jeder macht Fehler.'],['manche','disa','Manche Menschen...'],['viele','shumë','Viele Leute...'],['wenige','pak','Wenige kommen.']]},
         examples:['Jemand hat angerufen. — Dikush ka telefonuar.','Nichts ist unmöglich. — Asgjë nuk është e pamundur.']}
      ],
      exercises:[
        {type:'mc', q:'Cili është Personalpronomen i saktë për "Akkusativ" i "ich"?', opts:['ich','mir','mich','wir'], a:2, exp:'"mich" është forma Akkusativ e "ich". ich→mich, du→dich, er→ihn, sie→sie'},
        {type:'mc', q:'Plotëso: "Ich wasche ___ die Hände." (Reflexivpronomen Dativ)', opts:['mich','mir','sich','uns'], a:1, exp:'"mir" është Dativ Reflexiv i "ich". Dativ: mir, dir, sich, uns, euch, sich'},
        {type:'mc', q:'Cili pronom lidh dy fjali? "Der Mann, ___ hier steht, ist mein Freund."', opts:['was','wer','der','dieser'], a:2, exp:'"der" është Relativpronomen për "der Mann" (mashkullor, Nominativ)'},
        {type:'mc', q:'"Das ist ___ Buch." — Pronomi pronësor i "wir":', opts:['ihr','unser','euer','sein'], a:1, exp:'"unser" i përket "wir". mein=ich, dein=du, sein=er, ihr=sie, sein=es, unser=wir, euer=ihr'},
        {type:'mc', q:'Cili Demonstrativpronomen tregon diçka AFËR folësit?', opts:['jener','jene','dieser','deren'], a:2, exp:'"dieser/diese/dieses" tregon diçka AFËR (ky/kjo/kjo këtu). "jener" tregon diçka LARG (ai/ajo atje)'},
        {type:'mc', q:'Plotëso: "___ hat mein Handy genommen?" (Interrogativpronomen)', opts:['Was','Wessen','Welcher','Wer'], a:3, exp:'"Wer" pyet për person (kush). "Was" për gjë. "Welcher" për zgjedhje. "Wessen" për pronësi'},
        {type:'mc', q:'"___ hat angerufen, aber ich weiß nicht wer." (Indefinitpronomen)', opts:['Niemand','Jemand','Jeder','Alles'], a:1, exp:'"Jemand" = dikush (i pacaktuar pozitiv). "Niemand" = askush (negativ)'},
        {type:'mc', q:'Cila formë është e saktë? "Der Mann, ___ ich kenne, heißt Karl."', opts:['der','den','dem','dessen'], a:1, exp:'"den" është Relativpronomen Akkusativ i mashkullores. "ich kenne" kërkon Akkusativ (kën = wen?)'},
        {type:'mc', q:'Possessivpronomen si pronom i pavarur: "Das Buch ist ___." (für: ich)', opts:['mein','meine','meins','meinem'], a:2, exp:'"meins" është forma e pavarur e "mein". Das Buch ist meins/deins/seins/ihres/unsers'},
        {type:'mc', q:'Cili është Reflexivpronomen i "er/sie/es/sie(Pl.)/Sie"?', opts:['sich','euch','uns','ihr'], a:0, exp:'"sich" përdoret për er, sie, es, sie(Pl.) dhe Sie. Unike — ndryshon vetëm für ich(mich/mir) dhe du(dich/dir)'}
      ],
      quiz:[
        {q:'Cili është Personalpronomen i saktë për "Akkusativ" i "ich"?', opts:['ich','mir','mich','wir'], a:2},
        {q:'Plotëso: "Ich wasche ___ die Hände." (Reflexivpronomen Dativ)', opts:['mich','mir','sich','uns'], a:1},
        {q:'Cili pronom lidh dy fjali? "Der Mann, ___ hier steht, ist mein Freund."', opts:['was','wer','der','dieser'], a:2},
        {q:'"Das ist ___ Buch." — Possessivpronomen i "wir":', opts:['ihr','unser','euer','sein'], a:1},
        {q:'Cili Demonstrativpronomen tregon diçka AFËR folësit?', opts:['jener','jene','dieser','deren'], a:2},
        {q:'Plotëso: "___ hat mein Handy genommen?" (Interrogativpronomen)', opts:['Was','Wessen','Welcher','Wer'], a:3},
        {q:'"___ hat angerufen, aber ich weiß nicht wer." (Indefinitpronomen)', opts:['Niemand','Jemand','Jeder','Alles'], a:1},
        {q:'Cila formë është e saktë? "Der Mann, ___ ich kenne, heißt Karl."', opts:['der','den','dem','dessen'], a:1},
        {q:'Possessivpronomen i pavarur: "Das Buch ist ___." (für: ich)', opts:['mein','meine','meins','meinem'], a:2},
        {q:'Cili është Reflexivpronomen i "er/sie/es/Sie"?', opts:['sich','euch','uns','ihr'], a:0}
      ]
    }
  ]
};

// Sanitize — remove undefined slots
MODULES.A1 = MODULES.A1.filter(function(m){ return m && m.id; });
MODULES.A2 = MODULES.A2.filter(function(m){ return m && m.id; });
MODULES.B1 = MODULES.B1.filter(function(m){ return m && m.id; });
// ════════════════════════════════════════════
// A2 MODULES 3–12
// ════════════════════════════════════════════

// ════════════════════════════════════════════
// B1 MODULES 2–14
// ════════════════════════════════════════════

// Placement test questions
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
  {de:"das Oktoberfest",sq:"Oktoberfesti (festival birre)",type:"Kulturë",ex:"Das Oktoberfest ist in München. — Oktoberfesti është në Mynih."},
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
    {type:'line', speaker:'Dion', de:'Wie lange hat es bei dir gedauert, bis du dich hier zu Hause gefühlt hast?', sq:'Sa kohë të zuri ty derisa u ndeve si në shtëpi?'},
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
    {type:'narr', text:'E hëna mëngjes. Dion dhe Jonas hanë bashkë në mensa të kompanisë. Jonas e pyet mbi fundjavën.'},
    {type:'line', speaker:'Jonas', de:'Na, wie war dein Wochenende? Hast du was Interessantes gemacht?', sq:'Eja, si ishte fudnjava jote? Ke bërë diçka interesante?'},
    {type:'line', speaker:'Dion', de:'Ja! Am Samstag bin ich zum ersten Mal in ein deutsches Museum gegangen — das Pergamonmuseum!', sq:'Po! Të shtunën shkova për herë të parë në muze gjerman — Muzeun Pergamon!'},
    {type:'line', speaker:'Jonas', de:'Oh wow! Was hast du gedacht? Es ist riesig, oder?', sq:'Oh wow! Çfarë mendove? Është gjigant, apo jo?'},
    {type:'line', speaker:'Dion', de:'Ich war total überfordert! So viel Geschichte auf einmal. Ich habe drei Stunden gebraucht.', sq:'Isha totalisht i mbingarkuar! Aq shumë histori menjëherë. Më duhën tre orë.'},
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
    {type:'line', speaker:'Klea', de:'Du wirkst in letzter Zeit... zerrissen. Als würdest du irgendwo zwischen zwei Welten schweben.', sq:'Kohën e fundit duket... i ndarë. Sikur të lëvizësh midis dy botëve.'},
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
    {type:'line', speaker:'Dion', de:'Kein Autor angegeben. Kein Datum. Keine Quellen. Drei rote Flags sofort!', sq:'Asnjë autor i shënuar. Asnjë datë. Asnjë burim. Tre flamure të kuq menjëherë!'},
    {type:'line', speaker:'Jonas', de:'Genau! Du hast Media Literacy gelernt. Wie erkennst du normalerweise Fake News?', sq:'Saktë! Ti ke mësuar media literacy. Si i njeh zakonisht lajmet e rreme?'},
    {type:'line', speaker:'Dion', de:'Ich überprüfe immer: erstens die Quelle, zweitens andere Artikel zum selben Thema, drittens das Datum.', sq:'Kontrolloj gjithmonë: së pari burimin, së dyti artikuj të tjerë mbi të njëjtën temë, së treti datën.'},
    {type:'line', speaker:'Jonas', de:'Perfekt. Das sollte jeder tun. Die sozialen Medien haben alles komplizierter gemacht.', sq:'Perfekte. Kjo duhet ta bëjë çdokush. Mediat sociale e kanë bërë gjithçka më të komplikuar.'},
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
    {type:'line', speaker:'Dion', de:'Was ich nicht verstehe: Deutschland ist schon sehr fortschrittlich im Umweltbereich. Warum protestieren die Leute noch?', sq:'Çfarë nuk kuptoj: Gjermani është tashmë shumë e avancuar në fushën mjedisore. Pse protestojnë njerëzit ende?'},
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
    {type:'narr', text:'Dion tani është Team Lead. Por roli i ri sjell sfida të papritura — menaxhimi i njerëzve është krejtësisht ndryshe nga shkrimi i kodit.'},
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
    {type:'line', speaker:'Zyrtari', de:'Sie benötigen: Personalausweis oder Reisepass, den Fahrzeugschein, die Hauptuntersuchung — also den TÜV — und die eVB-Nummer Ihrer Versicherung.', sq:'Ju duhen: letërnjoftime ose pasaportë, certifikatën e mjetit, kontrollin teknik — pra TÜV — dhe numrin eVB të sigurimit tuaj.'},
    {type:'line', speaker:'Dion', de:'Was ist eine eVB-Nummer? Das kenne ich nicht.', sq:'Çfarë është numri eVB? Këtë nuk e njoh.'},
    {type:'line', speaker:'Zyrtari', de:'Das ist eine elektronische Versicherungsbestätigungsnummer. Die bekommen Sie von Ihrer Kfz-Versicherung.', sq:'Kjo është numër konfirmimi elektronik sigurimor. E merrni nga sigurimi juaj i automjetit.'},
    {type:'line', speaker:'Dion', de:'Ich habe noch keine Versicherung. Was soll ich zuerst machen?', sq:'Nuk kam ende sigurim. Çfarë duhet të bëj fillimisht?'},
    {type:'line', speaker:'Zyrtari', de:'Zuerst Versicherung abschließen, dann kommen Sie mit der eVB-Nummer zurück. Alles klar?', sq:'Fillimisht merrni sigurim, pastaj kthehuni me numrin eVB. Gjithçka e qartë?'},
    {type:'line', speaker:'Dion', de:'Ja... ich glaube schon. Darf ich eine Frage stellen — gibt es das auch online?', sq:'Po... besoj se po. Mund të pyes — a ekziston kjo edhe online?'},
    {type:'line', speaker:'Zyrtari', de:'Die Versicherung können Sie online abschließen. Die Zulassung selbst muss leider persönlich erfolgen.', sq:'Sigurimin mund ta merrni online. Regjistrimi vetë duhet fatkeqësisht të bëhet personalisht.'},
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
    {type:'line', speaker:'Klea', de:'Das glaube ich dir. Und ich werde bei jedem Schritt dabei sein.', sq:'Kë të besoj. Dhe unë do të jem pranë në çdo hap.'},
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
      situation: 'Je në stacionin e trenit. Duhet të blesh biletë për në Mynih.',
      lines: [
        {speaker:'Kasieri', de:'Guten Tag! Was kann ich für Sie tun?', sq:'Mirëdita! Çfarë mund të bëj për ju?'},
        {speaker:'Ti', de:'Guten Tag! Ich möchte eine Fahrkarte nach München, bitte. Für heute Nachmittag.', sq:'Mirëdita! Dua biletë për Mynih, ju lutem. Për pasditen e sot.'},
        {speaker:'Kasieri', de:'Einfach oder hin und zurück?', sq:'Vetëm vajtje apo vajtje-ardhje?'},
        {speaker:'Ti', de:'Hin und zurück, bitte. Wann fährt der nächste Zug?', sq:'Vajtje-ardhje, ju lutem. Kur niset treni tjetër?'},
        {speaker:'Kasieri', de:'Um 14:32 Uhr. Ankunft München 16:58 Uhr. Das kostet 45 Euro.', sq:'Në orën 14:32. Mbrrini Mynih 16:58. Kjo kushton 45 euro.'},
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
    {type:'line', speaker:'Dion', de:'So kompliziert! In Albanien wartet man eine Stunde und dann ist man dran.', sq:'Kaq e komplikuar! Në Shqipëri pret një orë dhe pastaj je radhën.'},
    {type:'line', speaker:'Jonas', de:'Dafür ist es hier kostenlos mit Versicherung. Medikamente bezahlt auch größtenteils die Kasse.', sq:'Til gjen këtu falas me sigurim. Edhe ilaçet paguhen kryesisht nga arka.'},
    {type:'line', speaker:'Dion', de:'Ah, das ist gut! Okay, buch mir bitte einen Termin für heute Nachmittag wenn möglich.', sq:'Ah, kjo është mirë! Mirë, rezervomë takim për pasditen e sot nëse është e mundur.'},
    {type:'narr', text:'Jonas rezervon takim online — në 3 minuta. Dion mendon: Gjermani ka sistem, Shqipëria ka njerëzi të ngrohtë. Të dyja kanë vlera.'},
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
    {type:'line', speaker:'Jonas', de:'Dion! Was hast du alles gekocht? Es riecht fantastisch!', sq:'Dion! Çfarë ke gatuar gjithçka? Era është fantastike!'},
    {type:'line', speaker:'Dion', de:'Tavë Kosi — das albanische Nationalgericht! Und Byrek als Vorspeise. Alles selbst gemacht!', sq:'Tavë Kosi — gjella kombëtare shqiptare! Dhe byrek si antipastë. Gjithçka e bërë vetë!'},
    {type:'line', speaker:'Klea', de:'Ich bin so gespannt! Ich habe noch nie albanisch gegessen.', sq:'Jam kaq kurioz! Kurrë nuk kam ngrënë shqip.'},
    {type:'line', speaker:'Dion', de:'Dann wird das heute eure Entdeckung sein! Setzt euch bitte. Wein oder Raki?', sq:'Atëherë kjo sot do të jetë zbulimi juaj! Uluni ju lutem. Verë ose raki?'},
    {type:'line', speaker:'Jonas', de:'Was ist Raki?', sq:'Çfarë është raki?'},
    {type:'line', speaker:'Dion', de:'Ein albanischer Schnaps — sehr stark! Aber nur ein kleines Glas, als Tradition.', sq:'Një raki shqiptare — shumë e fortë! Por vetëm gotë e vogël, si traditë.'},
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
    {type:'line', speaker:'Hr. Vogel', de:'Absolut. Das passiert nicht wieder. Entschuldigung.', sq:'Absolutisht. Kjo nuk ndodh sërish. Falje.'},
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
    {type:'narr', text:'Dion zbulon hobinë e re: fotografia. Berlini i jep mijëra motive. Jonas e shoqëron në ekspeditat e tij.'},
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
    {type:'narr', text:'Dion ka keqkuptim serioz me kolegun gjerman. Fjalë të thjeshta po keqinterpretohen ndërskulturalisht.'},
    {type:'line', speaker:'Mark', de:'Dion, ich muss ehrlich mit dir sein. Du unterbrichst mich oft in Meetings. Das ist nicht okay.', sq:'Dion, duhet të jem i sinqertë me ty. Shpesh më ndërpret në mbledhje. Kjo nuk është mirë.'},
    {type:'line', speaker:'Dion', de:'Ehrlich gesagt — das habe ich nicht gemerkt. Bei uns ist das normal: man zeigt Interesse indem man reagiert.', sq:'Sinqerisht — nuk e kam vërejtur. Tek ne kjo është normale: tregon interes duke reaguar.'},
    {type:'line', speaker:'Mark', de:'Ich verstehe den kulturellen Unterschied, aber hier in Deutschland gilt: man wartet bis der andere fertig ist.', sq:'Kuptoj ndryshimin kulturor, por këtu në Gjermani vlen: pret derisa tjetri të mbarojë.'},
    {type:'line', speaker:'Dion', de:'Das nehme ich mir zu Herzen. Es tut mir leid — das war keine Absicht.', sq:'Këtë e marr seriozisht. Më vjen keq — nuk ishte qëllim.'},
    {type:'line', speaker:'Mark', de:'Ich weiß! Deswegen sage ich es dir — damit wir besser zusammenarbeiten können.', sq:'E di! Prandaj po ta them — që të mund të bashkëpunojmë më mirë.'},
    {type:'line', speaker:'Dion', de:'Ich schätze die Direktheit. Bei uns sagt man das nie so offen — man schweigt und ärgert sich innerlich.', sq:'E vlerësoj drejtpërdrejtshmërinë. Tek ne nuk thuhet kurrë kaq hapur — hesht dhe zemëroheris brenda.'},
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
    {type:'narr', text:'Dion regjistrohet në kurs gjuhe B1. Mësonjësi i pyet studentët pse mësojnë gjermanisht. Dion ka përgjigjen më interesante.'},
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
    {type:'line', speaker:'Dion', de:'B1 und dann B2. Einen deutschen Pass irgendwann. Und vielleicht — meine eigene kleine Softwarefirma, die Deutschland und Albanien verbindet.', sq:'B1 dhe pastaj B2. Pasaportë gjermane ndonjëherë. Dhe ndoshta — firmën time të vogël softuerësh, që lidh Gjermaninë dhe Shqipërinë.'},
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
    {type:'narr', text:'Dion viziton Pergamon Museun dhe është i goditur. Shoqëruesi zbulon se ai ka background historik.'},
    {type:'line', speaker:'Shoqëruesi', de:'Sie schauen sehr intensiv. Haben Sie Interesse an der antiken Geschichte?', sq:'Po shikoni shumë intensivisht. Keni interes për historinë antike?'},
    {type:'line', speaker:'Dion', de:'Ja! Albanien war auch Teil der antiken Welt — Illyrien. Wir haben alte Städte wie Butrint, die UNESCO-Weltkulturerbe sind.', sq:'Po! Shqipëria ishte gjithashtu pjesë e botës antike — Iliria. Kemi qytete të vjetra si Butrint, që janë trashëgimi botërore UNESCO.'},
    {type:'line', speaker:'Shoqëruesi', de:'Das wusste ich nicht! Das ist beeindruckend. Und wie ist die albanische Archäologie?', sq:'Këtë nuk e dija! Kjo është mbresëlënëse. Dhe si është arkeologjia shqiptare?'},
    {type:'line', speaker:'Dion', de:'Viele Schätze sind noch nicht ausgegraben. Es fehlt an Geld und internationaler Aufmerksamkeit. Aber das Potenzial ist riesig.', sq:'Shumë thesare ende nuk janë gërmuar. Mungojnë paratë dhe vëmendja ndërkombëtare. Por potenciali është i madh.'},
    {type:'line', speaker:'Shoqëruesi', de:'Das klingt nach einer Einladung — ich sollte Albanien besuchen!', sq:'Kjo tingëllon si ftesë — duhet ta vizitoj Shqipërinë!'},
    {type:'line', speaker:'Dion', de:'Unbedingt! Butrint, Gjirokastër, Berat — alles UNESCO, alles wunderschön, und noch nicht übertouristisiert!', sq:'Patjetër! Butrint, Gjirokastra, Berati — gjithçka UNESCO, gjithçka e mrekullueshme, dhe ende jo e mbushur me turistë!'},
    {type:'narr', text:'Dion shënohet nga shoqëruesi si "ambasador i pazyrtari i Shqipërisë në Berlin."'},
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
    {type:'narr', text:'Dion telefonon. Kalon 20 minuta, por karta zhbllokohet. Mëson: sistemi ka rregulla logjike — nëse i kupton, mund t\'i kalosh.'},
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
    {type:'line', speaker:'Dion', de:'In Albanien sagt man: "Wer rastet, der rostet." Aber hier scheint das anders zu sein.', sq:'Në Shqipëri thuhet: "Kush pushon, ndryshket." Por këtu duket se është ndryshe.'},
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
    {type:'narr', text:'Dion sjell Klea dhe Jonas në Shqipëri për dy javë. Ky është testi i vërtetë — mund të jetojnë si shqiptarë?'},
    {type:'line', speaker:'Klea', de:'Dion — es ist 22 Uhr und deine Mutter kocht noch! Essen wir immer so spät?', sq:'Dion — është ora 22 dhe nëna jote po gatuon ende! Hamë gjithmonë kaq vonë?'},
    {type:'line', speaker:'Dion', de:'In Albanien ist das normal! Die Hauptmahlzeit ist abends, wenn alle zuhause sind. Und Mama kocht seit 14 Jahren nur für mich — heute kocht sie für fünf!', sq:'Në Shqipëri kjo është normale! Vakti kryesor është mbrëmjen, kur të gjithë janë në shtëpi. Dhe nëna ka gatuar prej 14 vitesh vetëm për mua — sot gatuan për pesë!'},
    {type:'line', speaker:'Jonas', de:'Die Gastfreundschaft hier ist unglaublich. Wir sind seit zwei Stunden hier und haben schon dreimal Kaffee, Raki und Baklava bekommen!', sq:'Mikëpritja këtu është e pabesueshme. Jemi dy orë këtu dhe kemi marrë tashmë tre herë kafe, raki dhe baklava!'},
    {type:'line', speaker:'Nëna', de:'Esst! Esst! Ihr seid zu dünn! In Albanien macht man so.', sq:'Hani! Hani! Jeni shumë të hollë! Në Shqipëri bëhet kështu.'},
    {type:'line', speaker:'Klea', de:'Deine Mutter sagt das auf Deutsch! Sie hat extra für uns gelernt!', sq:'Nëna jote flet gjermanisht! Ka mësuar enë e vetë për ne!'},
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
    {type:'narr', text:'Dion i regjistrohet organizatës që ndihmon refugjatët me gjuhën gjermane. Takimi i parë e emocionon.'},
    {type:'line', speaker:'Koordinatorja', de:'Dion, warum wollen Sie gerade mit Flüchtlingen arbeiten?', sq:'Dion, pse doni të punoni pikërisht me refugjatë?'},
    {type:'line', speaker:'Dion', de:'Weil ich weiß, wie es sich anfühlt — in ein neues Land zu kommen, die Sprache nicht zu kennen, sich verloren zu fühlen.', sq:'Sepse e di si ndjehet — të vish në vend të ri, të mos njohësh gjuhën, të ndihesh i humbur.'},
    {type:'line', speaker:'Koordinatorja', de:'Das ist genau das, was unsere Schüler brauchen — jemanden, der das aus eigener Erfahrung kennt.', sq:'Kjo është pikërisht çfarë nxënësve tanë u duhet — dikush që e njeh nga pervoja e vet.'},
    {type:'line', speaker:'Dion', de:'Ich war privilegiert — ich kam freiwillig und hatte Qualifikationen. Viele hier sind geflohen, haben alles verloren.', sq:'Unë isha privilegjuar — erdha vullnetarisht dhe kisha kualifikime. Shumë këtu kanë ikur, kanë humbur gjithçka.'},
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
    {type:'line', speaker:'Shefi', de:'Das riecht unglaublich! Was kochst du da alles?', sq:'Era është e pabesueshme! Çfarë po gatuan gjithçka?'},
    {type:'line', speaker:'Dion', de:'Byrek — das ist Blätterteiggebäck gefüllt mit Spinat und Feta-Käse. Und Tavë Kosi — Lamm mit Joghurt im Ofen.', sq:'Byrek — kjo është pite me shtresa të mbushura me spinaq dhe djathë feta. Dhe Tavë Kosi — mish qingji me kos në furrë.'},
    {type:'line', speaker:'Shefi', de:'Und das? Das sieht wie ein Pudding aus.', sq:'Dhe kjo? Duket si puding.'},
    {type:'line', speaker:'Dion', de:'Das ist Trilece — ein albanisches Dessert. Sehr süß, sehr reichhaltig. Meine Mutter hat mir das Rezept geschickt.', sq:'Kjo është trilece — ëmbëlsirë shqiptare. Shumë e ëmbël, shumë e pasur. Nëna ime ma ka dërguar recetën.'},
    {type:'line', speaker:'Jonas', de:'Dion, du solltest ein Restaurant eröffnen! Ich würde jeden Tag kommen.', sq:'Dion, duhet të hapësh restorant! Do të vija çdo ditë.'},
    {type:'line', speaker:'Dion', de:'Vielleicht eines Tages! Jetzt erst mal B1 — dann B2 — dann wer weiß!', sq:'Ndoshta një ditë! Tani fillimisht B1 — pastaj B2 — pastaj kush e di!'},
    {type:'narr', text:'Kolegët hanë gjithçka. Tavë Kosi mbaron i pari. Dion fotografon tavolinën bosh — e dërgon nënës. Nëna shkruan: "Mir bën shpirtin mirë."'},
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
    {type:'line', speaker:'Shefi', de:'Weil Sie nicht nur technisch gut sind — Sie denken kulturell flexibel, Sie kommunizieren klar und Sie haben Hunger. Das ist seltener als man denkt.', sq:'Sepse ju nuk jeni vetëm teknlikisht të mirë — mendoni kulturalisht fleksibël, komunikoni qartë dhe keni uri. Kjo është më e rrallë nga sa mendohet.'},
    {type:'line', speaker:'Dion', de:'Ich bin geehrt. Aber ich muss ehrlich sein — mein Deutsch ist noch nicht perfekt und das Thema KI-Ethik ist neu für mich.', sq:'Jam i nderuar. Por duhet të jem i sinqertë — gjermanishtja ime ende nuk është perfekte dhe tema e etikës së IA është e re për mua.'},
    {type:'line', speaker:'Shefi', de:'Das Deutsch wird perfekt in sechs Monaten, wenn Sie täglich auf diesem Level arbeiten. Und KI-Ethik — dafür schicken wir Sie zu einer Konferenz.', sq:'Gjermanishtja do të jetë perfekte brenda gjashtë muajsh, nëse punoni çdo ditë në këtë nivel. Dhe etika e IA — për këtë ju dërgojmë në konferencë.'},
    {type:'line', speaker:'Dion', de:'Dann sage ich Ja. Mit einer Bedingung: Wenn ich Fehler mache, sagen Sie mir das direkt. Ich brauche ehrliches Feedback, um zu wachsen.', sq:'Atëherë them Po. Me një kusht: Nëse bëj gabime, ma tregoni direkt. Kam nevojë për feedback të ndershëm për të rritur.'},
    {type:'narr', text:'Dion firmos kontratën. Mbrëmjen ia dërgon nënës foto: "Mama, Unë drejtoj projektin e parë. Gjermanisht." Nëna i përgjigjet: "Ti gjithmonë ke mundur. Unë e dija."'},
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

const GRAMMAR_DB = {

A1: [
  // ── G1: Pershendetjet & prezantimi ──
  {
    id:'a1g1', title:'Prezantimi — ich heiße / ich bin',
    icon:'👋', level:'A1', order:1,
    explanation:'Dy mënyra kryesore për të thënë emrin tënd. Të dyja janë të sakta dhe shumë të zakonshme.',
    rules:[
      {rule:'ich heiße + [emri]',  note:'Fjalë për fjalë: "Unë quhem". Shumë natyrale.'},
      {rule:'ich bin + [emri]',    note:'Fjalë për fjalë: "Unë jam". Gjithashtu shumë e zakonshme.'},
      {rule:'mein Name ist + [emri]', note:'Pak më formale. Përdoret në dokumente dhe email.'}
    ],
    examples:[
      {de:'Ich heiße Dion. Ich komme aus Kosovo.', sq:'Unë quhem Dion. Vij nga Kosova.'},
      {de:'Ich bin Anna. Und du? Wie heißt du?', sq:'Unë jam Anna. Dhe ti? Si quhesh?'},
      {de:'Mein Name ist Thomas Müller.', sq:'Emri im është Thomas Müller.'}
    ],
    exercises:[
      {type:'fill', q:'___ heiße Maria. (Unë)',                ans:'Ich',    opts:['Ich','Du','Er','Sie']},
      {type:'fill', q:'Wie ___ du? (quhesh)',                   ans:'heißt',  opts:['heißt','heiße','heißen','heißt']},
      {type:'fill', q:'Mein ___ ist Klaus. (emri)',             ans:'Name',   opts:['Name','Vorname','Nachname','Titel']},
      {type:'translate', q:'Si thuhet: "Unë quhem Arben"?',    ans:'Ich heiße Arben.'},
      {type:'translate', q:'Si thuhet: "Si quhesh?" (joformale)?', ans:'Wie heißt du?'}
    ]
  },

  // ── G2: Foljet — Prezenti ──
  {
    id:'a1g2', title:'Foljet rregullta — Prezenti (Präsens)',
    icon:'🔤', level:'A1', order:2,
    explanation:'Foljet rregullta marrin mbaresa të ndryshme sipas personit. Mbaresën gjeje duke hequr -en nga infinitivi.',
    rules:[
      {rule:'ich → -e',    note:'ich lerne, ich komme, ich arbeite'},
      {rule:'du → -st',    note:'du lernst, du kommst, du arbeitest'},
      {rule:'er/sie/es → -t', note:'er lernt, sie kommt, es arbeitet'},
      {rule:'wir → -en',  note:'wir lernen, wir kommen, wir arbeiten'},
      {rule:'ihr → -t',   note:'ihr lernt, ihr kommt, ihr arbeitet'},
      {rule:'sie/Sie → -en', note:'sie lernen, Sie kommen (formale)'}
    ],
    examples:[
      {de:'Ich lerne Deutsch jeden Tag.', sq:'Mësoj gjermanisht çdo ditë.'},
      {de:'Du arbeitest viel. Bist du müde?', sq:'Punon shumë. Je i lodhur?'},
      {de:'Wir wohnen in Berlin seit einem Jahr.', sq:'Jetojmë në Berlin prej një viti.'}
    ],
    exercises:[
      {type:'fill', q:'Er ___ in München. (wohnen)',              ans:'wohnt',    opts:['wohnt','wohne','wohnen','wohnst']},
      {type:'fill', q:'Wir ___ Deutsch. (lernen)',                ans:'lernen',   opts:['lernen','lerne','lernst','lernt']},
      {type:'fill', q:'Du ___ sehr gut. (arbeiten)',              ans:'arbeitest',opts:['arbeitest','arbeitet','arbeite','arbeiten']},
      {type:'fill', q:'Ich ___ aus Albanien. (kommen)',           ans:'komme',    opts:['komme','kommt','kommst','kommen']},
      {type:'translate', q:'Ata mësojnë gjermanisht.',            ans:'Sie lernen Deutsch.'}
    ]
  },

  // ── G3: Foljet e parregullta ──
  {
    id:'a1g3', title:'Foljet e parregullta — sein, haben, werden',
    icon:'⚡', level:'A1', order:3,
    explanation:'Tre foljet më të rëndësishme gjermane janë të parregullta — duhen mësuar përmendsh!',
    rules:[
      {rule:'sein (jam): ich bin / du bist / er ist / wir sind / ihr seid / sie sind', note:'Ndryshon plotësisht'},
      {rule:'haben (kam): ich habe / du hast / er hat / wir haben / ihr habt / sie haben', note:'Ndryshon trungu'},
      {rule:'werden (bëhem/do të): ich werde / du wirst / er wird / wir werden', note:'Për të ardhmen dhe pasiv'}
    ],
    examples:[
      {de:'Ich bin müde, aber ich habe noch viel Arbeit.', sq:'Jam i lodhur, por kam akoma shumë punë.'},
      {de:'Er ist Arzt. Er hat viel Erfahrung.', sq:'Ai është mjek. Ai ka shumë përvojë.'},
      {de:'Wir werden morgen nach Berlin fahren.', sq:'Nesër do të shkojmë në Berlin.'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ 25 Jahre alt. (sein)',              ans:'bin',  opts:['bin','bist','ist','sind']},
      {type:'fill', q:'Du ___ einen Bruder. (haben)',              ans:'hast', opts:['habe','hast','hat','haben']},
      {type:'fill', q:'Er ___ morgen kommen. (werden)',            ans:'wird', opts:['werde','wirst','wird','werden']},
      {type:'fill', q:'Wir ___ in Wien. (sein)',                   ans:'sind', opts:['bin','bist','ist','sind']},
      {type:'translate', q:'Ajo ka dy motra.',                     ans:'Sie hat zwei Schwestern.'}
    ]
  },

  // ── G4: Nyjet ──
  {
    id:'a1g4', title:'Nyjet — der, die, das / ein, eine, ein',
    icon:'📌', level:'A1', order:4,
    explanation:'Gjermanishtja ka 3 gjini: mashkullore (der), femërore (die), asnjanëse (das). Çdo emër ka gjininë e vet — duhet mësuar bashkë me emrin!',
    rules:[
      {rule:'Gjinia mashkullore → der / ein', note:'der Mann, der Tag, ein Kaffee'},
      {rule:'Gjinia femërore → die / eine',   note:'die Frau, die Stadt, eine Flasche'},
      {rule:'Gjinia asnjanëse → das / ein',   note:'das Kind, das Buch, ein Haus'},
      {rule:'Shumësi gjithmonë → die',         note:'die Männer, die Frauen, die Kinder'},
      {rule:'Mohimi → kein/keine/kein',       note:'kein Mann, keine Frau, kein Kind'}
    ],
    examples:[
      {de:'Der Mann trinkt einen Kaffee. Die Frau liest ein Buch.', sq:'Njeriu pi kafe. Gruaja lexon libër.'},
      {de:'Das Kind spielt im Garten. Kein Problem!', sq:'Fëmija luan në kopsht. Asnjë problem!'},
      {de:'Ich habe einen Bruder und eine Schwester.', sq:'Kam një vëlla dhe një motër.'}
    ],
    exercises:[
      {type:'fill', q:'___ Tisch ist groß. (der/die/das)',          ans:'Der',   opts:['Der','Die','Das','Ein']},
      {type:'fill', q:'Ich kaufe ___ Buch. (ein/eine/einen)',       ans:'ein',   opts:['ein','eine','einen','kein']},
      {type:'fill', q:'___ Kinder spielen. (der/die/das)',          ans:'Die',   opts:['Der','Die','Das','Eine']},
      {type:'fill', q:'Er hat ___ Auto. (kein/keine/keinen)',       ans:'kein',  opts:['kein','keine','keinen','nicht']},
      {type:'translate', q:'Gruaja ka një qen.',                     ans:'Die Frau hat einen Hund.'}
    ]
  },

  // ── G5: Rasa Akkusativ ──
  {
    id:'a1g5', title:'Rasa Akkusativ — Objekti i drejtë',
    icon:'🎯', level:'A1', order:5,
    explanation:'Akkusativi tregon CILIN/CFARË preket nga veprimi. Ndryshon vetëm nyja mashkullore: der → den, ein → einen.',
    rules:[
      {rule:'Mashkullore: der → den / ein → einen', note:'Ich sehe DEN Mann. Ich kaufe EINEN Kaffee.'},
      {rule:'Femërore: die → die / eine → eine',    note:'Nuk ndryshon: Ich sehe DIE Frau.'},
      {rule:'Asnjanëse: das → das / ein → ein',     note:'Nuk ndryshon: Ich kaufe DAS Buch.'},
      {rule:'Shumësi: die → die',                    note:'Nuk ndryshon: Ich esse DIE Äpfel.'}
    ],
    examples:[
      {de:'Ich kaufe einen Kaffee und ein Brot.', sq:'Blej një kafe dhe një bukë.'},
      {de:'Er sieht den Mann und die Frau.', sq:'Ai sheh njeriun dhe gruan.'},
      {de:'Hast du keinen Hunger? — Doch, ich esse das Sandwich.', sq:'Nuk ke uri? — Po, ha sandwichen.'}
    ],
    exercises:[
      {type:'fill', q:'Ich kaufe ___ Apfel. (ein/eine/einen)',      ans:'einen', opts:['ein','eine','einen','dem']},
      {type:'fill', q:'Er sieht ___ Hund. (der/die/den)',           ans:'den',   opts:['der','die','den','dem']},
      {type:'fill', q:'Ich esse ___ Pizza. (ein/eine/einen)',        ans:'eine',  opts:['ein','eine','einen','keinen']},
      {type:'fill', q:'Wir kaufen ___ Auto. (das/den/ein)',          ans:'ein',   opts:['das','den','ein','einen']},
      {type:'translate', q:'Unë shoh gruan.',                        ans:'Ich sehe die Frau.'}
    ]
  },

  // ── G6: Rasa Dativ ──
  {
    id:'a1g6', title:'Rasa Dativ — Objekti i tërthortë',
    icon:'↗️', level:'A1', order:6,
    explanation:'Dativit tregon KUJT i jepet/bëhet diçka. Ndryshon nyja: dem (mask/asnj), der (fem), den (shumës).',
    rules:[
      {rule:'Mashkullore: dem / einem',   note:'Ich gebe DEM Mann das Buch.'},
      {rule:'Femërore: der / einer',      note:'Ich helfe DER Frau.'},
      {rule:'Asnjanëse: dem / einem',     note:'Er gibt DEM Kind das Spielzeug.'},
      {rule:'Prepozicat me Dativ gjithmonë: mit, bei, nach, seit, von, zu, aus, gegenüber', note:'MIT dem Bus, BEI der Arbeit'}
    ],
    examples:[
      {de:'Ich gebe dem Mann das Buch.', sq:'Ia jap njeriut librin.'},
      {de:'Sie hilft der Frau mit dem Koffer.', sq:'Ajo i ndihmon gruas me valixhen.'},
      {de:'Ich fahre mit dem Bus zur Arbeit.', sq:'Shkoj me autobus në punë.'}
    ],
    exercises:[
      {type:'fill', q:'Ich gebe ___ Kind das Spielzeug. (dem/der/den)', ans:'dem',  opts:['dem','der','den','die']},
      {type:'fill', q:'Sie hilft ___ Frau. (dem/der/den)',              ans:'der',  opts:['dem','der','den','die']},
      {type:'fill', q:'Er fährt mit ___ Auto. (dem/der/den)',           ans:'dem',  opts:['dem','der','den','die']},
      {type:'fill', q:'Ich wohne bei ___ Eltern. (meine/meinen/meiner)',ans:'meinen',opts:['meine','meinen','meiner','meinem']},
      {type:'translate', q:'Ai i jep gruas librin.',                    ans:'Er gibt der Frau das Buch.'}
    ]
  },

  // ── G7: Peremirat personale ──
  {
    id:'a1g7', title:'Peremirat personale — ich, du, er, sie...',
    icon:'👥', level:'A1', order:7,
    explanation:'Peremirat zëvendësojnë emrat. Duhen mësuar të gjitha format — Nominativ (kryefjala) dhe Akkusativ (objekti).',
    rules:[
      {rule:'Nominativ: ich / du / er / sie / es / wir / ihr / sie / Sie', note:'Kryefjala e fjalisë'},
      {rule:'Akkusativ: mich / dich / ihn / sie / es / uns / euch / sie / Sie', note:'Objekti i drejtë'},
      {rule:'Dativ: mir / dir / ihm / ihr / ihm / uns / euch / ihnen / Ihnen', note:'Objekti i tërthortë'}
    ],
    examples:[
      {de:'Ich liebe dich! — Ich liebe dich auch!', sq:'Të dua! — Edhe unë të dua!'},
      {de:'Er sieht sie. Sie sieht ihn nicht.', sq:'Ai e sheh atë. Ajo nuk e sheh atë.'},
      {de:'Kannst du mir helfen? — Ja, ich helfe dir!', sq:'Mund të më ndihmosh? — Po, të ndihmoj!'}
    ],
    exercises:[
      {type:'fill', q:'Ich sehe ___. (ti, Akkusativ)',                  ans:'dich', opts:['du','dich','dir','dein']},
      {type:'fill', q:'Er gibt ___ das Buch. (mua, Dativ)',             ans:'mir',  opts:['mich','mir','ich','me']},
      {type:'fill', q:'Wir lieben ___. (ju/ata, Akkusativ)',             ans:'sie',  opts:['ihr','sie','ihnen','euch']},
      {type:'fill', q:'Kannst du ___ helfen? (atij, Dativ)',             ans:'ihm',  opts:['ihn','ihm','er','sein']},
      {type:'translate', q:'Ajo nuk e sheh atë.',                        ans:'Sie sieht ihn nicht.'}
    ]
  },

  // ── G8: Foljet modale A1 ──
  {
    id:'a1g8', title:'Foljet modale — können, müssen, wollen, möchten',
    icon:'🔧', level:'A1', order:8,
    explanation:'Foljet modale shprehin mundësi, domosdoshmëri, dëshirë. Vijnë në pozicion 2 dhe dërgojnë foljen kryesore në FUND si infinitiv.',
    rules:[
      {rule:'können (mund): ich kann / du kannst / er kann / wir können',    note:'Ich KANN Deutsch SPRECHEN.'},
      {rule:'müssen (duhet): ich muss / du musst / er muss / wir müssen',    note:'Ich MUSS jetzt GEHEN.'},
      {rule:'wollen (dua fort): ich will / du willst / er will / wir wollen', note:'Ich WILL nach Berlin FAHREN.'},
      {rule:'möchten (dëshiroj): ich möchte / du möchtest / er möchte',      note:'Ich MÖCHTE einen Kaffee BESTELLEN.'},
      {rule:'dürfen (lejohem): ich darf / du darfst / er darf',              note:'Man DARF hier nicht RAUCHEN.'},
      {rule:'sollen (duhet sipas dikujt): ich soll / du sollst / er soll',   note:'Du SOLLST das LERNEN.'}
    ],
    examples:[
      {de:'Ich kann Gitarre spielen, aber ich muss jetzt lernen.', sq:'Mund të luaj kitarë, por tani duhet të mësoj.'},
      {de:'Möchten Sie einen Kaffee? — Ja, ich möchte gern einen.', sq:'Dëshironi kafe? — Po, do doja.'},
      {de:'Du darfst hier nicht parken. Es ist verboten!', sq:'Nuk lejohet të parkosh këtu. Është i ndaluar!'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ Deutsch sprechen. (können)',               ans:'kann',     opts:['kann','kannst','können','musst']},
      {type:'fill', q:'Du ___ jetzt schlafen. (müssen)',                  ans:'musst',    opts:['muss','musst','müssen','soll']},
      {type:'fill', q:'Er ___ nach Berlin fahren. (wollen)',              ans:'will',     opts:['will','willst','wollen','möchte']},
      {type:'fill', q:'Wir ___ einen Tisch reservieren. (möchten)',       ans:'möchten',  opts:['möchte','möchtest','möchten','wollen']},
      {type:'translate', q:'Mund të notosh? — Po, mund.',                 ans:'Kannst du schwimmen? — Ja, ich kann.'}
    ]
  },

  // ── G9: Renditja e fjalëve ──
  {
    id:'a1g9', title:'Renditja e fjalëve — Folja në vendin 2',
    icon:'📐', level:'A1', order:9,
    explanation:'Rregulli i artë i gjermanishtes: FOLJA gjithmonë në vendin e DYTË të fjalisë. Ky rregull nuk thyhet kurrë në fjali pohore!',
    rules:[
      {rule:'Fjali normale: Kryefjala + Folja + pjesa tjetër', note:'Ich LERNE jeden Tag Deutsch.'},
      {rule:'Nëse diçka tjetër vjen para: Ajo + Folja + Kryefjala', note:'Jeden Tag LERNE ICH Deutsch.'},
      {rule:'Pyetje me fjalë pyetëse: W-Frage + Folja + Kryefjala', note:'WO WOHNST DU? — WANN KOMMT er?'},
      {rule:'Pyetje pa fjalë pyetëse: Folja + Kryefjala', note:'KOMMST DU morgen? — HAST DU Hunger?'}
    ],
    examples:[
      {de:'Ich esse gern Pizza. / Pizza esse ich gern.', sq:'Ha me dëshirë picë. / Picën e ha me dëshirë.'},
      {de:'Morgen fahre ich nach Wien. (Folja mbetet vendin 2!)', sq:'Nesër shkoj në Vjenë. (Folja mbetet vendi 2!)'},
      {de:'Wo wohnst du? — Ich wohne in Berlin.', sq:'Ku jeton? — Jetoj në Berlin.'}
    ],
    exercises:[
      {type:'reorder', q:'Rirendo: [Deutsch / lerne / Ich / gern]',            ans:'Ich lerne gern Deutsch.'},
      {type:'reorder', q:'Rirendo: [nach Wien / fahren / Morgen / wir]',        ans:'Morgen fahren wir nach Wien.'},
      {type:'fill',    q:'Wo ___ du? (wohnen)',                                 ans:'wohnst', opts:['wohne','wohnst','wohnt','wohnen']},
      {type:'translate', q:'Nesër ata shkojnë në shkollë.',                     ans:'Morgen gehen sie in die Schule.'},
      {type:'translate', q:'A vjen ti nesër?',                                  ans:'Kommst du morgen?'}
    ]
  },

  // ── G10: Mohimi ──
  {
    id:'a1g10', title:'Mohimi — nicht dhe kein/keine',
    icon:'❌', level:'A1', order:10,
    explanation:'"Nicht" mohon folje, mbiemra, ndajfolje. "Kein/keine" mohon emra (zëvendëson nyjen).',
    rules:[
      {rule:'nicht + folje/mbiemër/ndajfolje', note:'Ich komme NICHT. Er ist NICHT müde.'},
      {rule:'kein + emër mashkullor/asnjanës', note:'Ich habe KEINEN Hund. Ich trinke KEIN Bier.'},
      {rule:'keine + emër femëror/shumës',     note:'Ich habe KEINE Zeit. Ich esse KEINE Äpfel.'},
      {rule:'Pozicioni i nicht: zakonisht para asaj që mohohet, ose në fund', note:'Ich gehe NICHT. / Ich gehe morgen NICHT ins Kino.'}
    ],
    examples:[
      {de:'Ich bin nicht müde. Ich bin nicht hungrig.', sq:'Nuk jam i lodhur. Nuk jam i uritur.'},
      {de:'Ich habe keinen Hunger und keine Zeit.', sq:'Nuk kam uri dhe nuk kam kohë.'},
      {de:'Er kommt nicht, weil er krank ist.', sq:'Ai nuk vjen sepse është i sëmurë.'}
    ],
    exercises:[
      {type:'fill', q:'Ich habe ___ Auto. (kein/keine/keinen)',              ans:'kein',   opts:['kein','keine','keinen','nicht']},
      {type:'fill', q:'Sie ist ___ müde. (nicht/kein)',                      ans:'nicht',  opts:['nicht','kein','keine','keinen']},
      {type:'fill', q:'Wir haben ___ Kinder. (kein/keine/keinen)',           ans:'keine',  opts:['kein','keine','keinen','nicht']},
      {type:'fill', q:'Er kommt ___ morgen. (nicht/kein)',                   ans:'nicht',  opts:['nicht','kein','keine','keinen']},
      {type:'translate', q:'Unë nuk pi kafe.',                                ans:'Ich trinke keinen Kaffee.'}
    ]
  },

  // ── G11: Pyetjet ──
  {
    id:'a1g11', title:'Pyetjet — W-Fragen dhe Ja/Nein-Fragen',
    icon:'❓', level:'A1', order:11,
    explanation:'Dy lloje pyetjesh: me fjalë pyetëse (W-Frage) dhe pa fjalë pyetëse (Ja/Nein). Të dyja fillojnë me foljen ose fjalën pyetëse.',
    rules:[
      {rule:'Wer? (Kush?)', note:'WER ist das? — Das ist meine Schwester.'},
      {rule:'Was? (Çfarë?)', note:'WAS machst du? — Ich lerne Deutsch.'},
      {rule:'Wo? (Ku?)',     note:'WO wohnst du? — In Wien.'},
      {rule:'Wann? (Kur?)', note:'WANN kommst du? — Um 8 Uhr.'},
      {rule:'Wie? (Si?)',    note:'WIE geht es dir? — Gut, danke.'},
      {rule:'Warum? (Pse?)', note:'WARUM lernst du Deutsch? — Für die Arbeit.'},
      {rule:'Wie viel? (Sa?)', note:'WIE VIEL kostet das? — 5 Euro.'},
      {rule:'Welche/r/s? (Cili?)', note:'WELCHEN Bus nimmst du?'}
    ],
    examples:[
      {de:'Wer ist das? — Das ist mein Freund Jonas.', sq:'Kush është? — Ky është shoku im Jonas.'},
      {de:'Warum lernst du Deutsch? — Weil ich in Deutschland arbeite.', sq:'Pse mëson gjermanisht? — Sepse punoj në Gjermani.'},
      {de:'Kommst du morgen? — Nein, ich komme nicht.', sq:'Vjen nesër? — Jo, nuk vij.'}
    ],
    exercises:[
      {type:'fill', q:'___ heißt du? (Si)',                     ans:'Wie',   opts:['Wie','Was','Wer','Wo']},
      {type:'fill', q:'___ wohnst du? (Ku)',                    ans:'Wo',    opts:['Wie','Was','Wer','Wo']},
      {type:'fill', q:'___ ist das? (Kush)',                    ans:'Wer',   opts:['Was','Wer','Wo','Wann']},
      {type:'fill', q:'___ kommt er? (Kur)',                    ans:'Wann',  opts:['Warum','Wann','Wo','Wie']},
      {type:'translate', q:'Pse nuk vjen?',                     ans:'Warum kommst du nicht?'}
    ]
  },

  // ── G12: Posesivat ──
  {
    id:'a1g12', title:'Posesivat — mein, dein, sein, ihr...',
    icon:'🏠', level:'A1', order:12,
    explanation:'Posesivat tregojnë kujt i takon diçka. Ndryshojnë si nyja e pashquar (ein/eine/ein).',
    rules:[
      {rule:'mein/meine (im)',   note:'mein Vater, meine Mutter, mein Kind'},
      {rule:'dein/deine (yt)',   note:'dein Bruder, deine Schwester'},
      {rule:'sein/seine (i tij)', note:'sein Auto, seine Frau'},
      {rule:'ihr/ihre (i saj / i tyre)', note:'ihr Buch, ihre Kinder'},
      {rule:'unser/unsere (ynë)', note:'unser Haus, unsere Familie'},
      {rule:'euer/eure (juaj)', note:'euer Hund, eure Katze'},
      {rule:'ihr/ihre (i tyre/Juaj formale)', note:'ihr Garten (i tyre / Juaj)'}
    ],
    examples:[
      {de:'Mein Vater ist Arzt. Meine Mutter ist Lehrerin.', sq:'Babai im është mjek. Nëna ime është mësuese.'},
      {de:'Sein Auto ist neu. Ihre Wohnung ist groß.', sq:'Makina e tij është e re. Banesa e saj është e madhe.'},
      {de:'Unser Haus hat einen Garten. Eure Kinder sind süß!', sq:'Shtëpia jonë ka kopsht. Fëmijët tuaj janë të ëmbël!'}
    ],
    exercises:[
      {type:'fill', q:'Das ist ___ Buch. (im, asnjanës)',          ans:'mein',   opts:['mein','meine','meinen','meinem']},
      {type:'fill', q:'Das ist ___ Schwester. (e tij)',             ans:'seine',  opts:['sein','seine','seiner','seinen']},
      {type:'fill', q:'Das ist ___ Wohnung. (e saj)',               ans:'ihre',   opts:['ihr','ihre','ihren','ihrem']},
      {type:'fill', q:'Das ist ___ Auto. (ynë, asnjanës)',          ans:'unser',  opts:['unser','unsere','unseren','unserem']},
      {type:'translate', q:'Shtëpia e tyre është e madhe.',          ans:'Ihr Haus ist groß.'}
    ]
  },

  // ── G13: Prepozicat bazike ──
  {
    id:'a1g13', title:'Prepozicat e vendit — in, an, auf, bei, neben...',
    icon:'📍', level:'A1', order:13,
    explanation:'Prepozicat tregojnë ku ndodhet diçka. Disa kërkojnë Dativ (vendndodhja), disa Akkusativ (lëvizja).',
    rules:[
      {rule:'in (brenda) + Dativ: Ich bin IN der Küche.', note:'Ku? → Dativ'},
      {rule:'in + Akkusativ: Ich gehe IN die Küche.', note:'Ku shkon? → Akkusativ'},
      {rule:'an (pranë/te) — an der Wand, an der Haltestelle', note:''},
      {rule:'auf (mbi) — auf dem Tisch, auf der Straße', note:''},
      {rule:'neben (pranë/anë) — neben dem Haus', note:''},
      {rule:'vor (para) — vor der Tür', note:''},
      {rule:'hinter (pas) — hinter dem Haus', note:''}
    ],
    examples:[
      {de:'Das Buch liegt auf dem Tisch. — Ich lege das Buch auf den Tisch.', sq:'Libri ndodhet mbi tavolinë. — E vendos librin mbi tavolinë.'},
      {de:'Ich bin in der Küche. — Ich gehe in die Küche.', sq:'Jam në kuzhinë. — Shkoj në kuzhinë.'},
      {de:'Die Haltestelle ist neben der Bank.', sq:'Stacioni ndodhet pranë bankës.'}
    ],
    exercises:[
      {type:'fill', q:'Das Buch ist ___ dem Tisch. (mbi, vendndodhje)',    ans:'auf',    opts:['auf','in','an','neben']},
      {type:'fill', q:'Ich gehe ___ die Küche. (lëvizje)',                 ans:'in',     opts:['in','an','auf','hinter']},
      {type:'fill', q:'Er wartet ___ der Haltestelle. (te)',                ans:'an',     opts:['an','auf','in','vor']},
      {type:'fill', q:'Das Auto steht ___ dem Haus. (para)',                ans:'vor',    opts:['vor','hinter','neben','auf']},
      {type:'translate', q:'Libri ndodhet mbi tryezë.',                     ans:'Das Buch liegt auf dem Tisch.'}
    ]
  }
],

A2: [
  // ── G14: Perfekti ──
  {
    id:'a2g1', title:'E kaluara — Perfekt (Ich habe gemacht)',
    icon:'⏰', level:'A2', order:1,
    explanation:'Perfekti është e kaluara e gjermanishtes së folur. Formohet me folje ndihmëse (haben/sein) + participin e dytë (Partizip II). Partizipi formohet: ge- + trung + -t (rregullt) ose forma e parregullt.',
    rules:[
      {rule:'haben + Partizip II: Kryesisht foljet tranzitive', note:'Ich HABE gegessen. Er HAT gearbeitet.'},
      {rule:'sein + Partizip II: Lëvizja dhe ndryshimi i gjendjes', note:'Ich BIN gefahren. Er IST aufgewacht.'},
      {rule:'Partizip II rregullt: ge + trung + t', note:'machen → gemacht / arbeiten → gearbeitet'},
      {rule:'Partizip II parregullt: duhet mësuar', note:'essen → gegessen / fahren → gefahren / gehen → gegangen'},
      {rule:'Foljet me be-, ver-, er-, ent-: nuk marrin ge-', note:'besuchen → besucht / verstehen → verstanden'}
    ],
    examples:[
      {de:'Ich habe gestern Pizza gegessen und Wasser getrunken.', sq:'Dje hëngra picë dhe piva ujë.'},
      {de:'Er ist nach Berlin gefahren und hat das Museum besucht.', sq:'Ai shkoi në Berlin dhe vizitoi muzeun.'},
      {de:'Wir haben viel gelernt. Das Semester ist gut gegangen.', sq:'Kemi mësuar shumë. Semestri shkoi mirë.'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ gestern gegessen. (haben/sein)',           ans:'habe',   opts:['habe','bin','hatte','war']},
      {type:'fill', q:'Er ___ nach Wien gefahren. (haben/sein)',          ans:'ist',    opts:['hat','ist','habe','bin']},
      {type:'fill', q:'Partizip II i "machen" është:',                   ans:'gemacht',opts:['gemacht','gemachen','macht','makt']},
      {type:'fill', q:'Partizip II i "essen" është:',                    ans:'gegessen',opts:['gegessen','geessen','geesst','gegess']},
      {type:'translate', q:'Ai ka vizituar Berlinin.',                    ans:'Er hat Berlin besucht.'}
    ]
  },

  // ── G15: Preteriti ──
  {
    id:'a2g2', title:'E kaluara — Präteritum (Ich war / Ich hatte)',
    icon:'📜', level:'A2', order:2,
    explanation:'Preteriti përdoret kryesisht në gjuhën e shkruar dhe për "sein" dhe "haben" në të folur. Në bisedë e zakonshme preferojmë Perfektin.',
    rules:[
      {rule:'sein → war: ich war / du warst / er war / wir waren', note:'Ich WAR müde. Es WAR kalt.'},
      {rule:'haben → hatte: ich hatte / du hattest / er hatte / wir hatten', note:'Ich HATTE keine Zeit.'},
      {rule:'werden → wurde: ich wurde / er wurde / wir wurden', note:'Das Haus WURDE gebaut.'},
      {rule:'Foljet modale në Präteritum: konnte / musste / wollte / durfte', note:'Ich KONNTE nicht kommen.'}
    ],
    examples:[
      {de:'Als ich jung war, hatte ich keine Sorgen.', sq:'Kur isha i ri, nuk kisha shqetësime.'},
      {de:'Gestern war das Wetter schlecht. Ich musste zu Hause bleiben.', sq:'Dje moti ishte i keq. Duhej të qëndroja në shtëpi.'},
      {de:'Er wollte kommen, aber er konnte nicht.', sq:'Ai dëshironte të vinte, por nuk mundi.'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ gestern müde. (sein, Präteritum)',         ans:'war',    opts:['war','bin','hatte','ist']},
      {type:'fill', q:'Er ___ keine Zeit. (haben, Präteritum)',           ans:'hatte',  opts:['hatte','hat','habe','war']},
      {type:'fill', q:'Wir ___ nicht kommen. (können, Präteritum)',       ans:'konnten',opts:['konnten','konntet','konnte','können']},
      {type:'fill', q:'Das Wetter ___ schön. (sein, Präteritum)',         ans:'war',    opts:['war','ist','wurde','hatte']},
      {type:'translate', q:'Isha i lodhur dhe nuk mund të vija.',          ans:'Ich war müde und konnte nicht kommen.'}
    ]
  },

  // ── G16: Foljet me ndarje ──
  {
    id:'a2g3', title:'Foljet me ndarje — Trennbare Verben',
    icon:'✂️', level:'A2', order:3,
    explanation:'Shumë folje kanë parashtesë që NDAHET dhe shkon në FUND të fjalisë në Prezent dhe Imperativ. Kjo është karakteristikë unike e gjermanishtes!',
    rules:[
      {rule:'auf-, an-, ab-, aus-, ein-, mit-, vor-, zu- + folja', note:'aufmachen → Ich MACHE die Tür AUF.'},
      {rule:'Parashtesa shkon gjithmonë në fund të fjalisë kryesore', note:'Ich STEHE um 7 Uhr AUF.'},
      {rule:'Në fjali të varur: folja mbetet e bashkuar', note:'...weil ich früh AUFSTEHE.'},
      {rule:'Në Perfekt: ge- vjen MIDIS: aufgemacht, angerufen', note:'Ich habe die Tür AUFgemacht.'}
    ],
    examples:[
      {de:'Ich stehe um 6 Uhr auf und rufe dann meinen Freund an.', sq:'Çohem në orën 6 dhe pastaj telefonoj shokun tim.'},
      {de:'Er macht das Fenster auf, weil es zu heiß ist.', sq:'Ai hap dritaren sepse është shumë nxehtë.'},
      {de:'Sie hat gestern angerufen und abgesagt.', sq:'Ajo telefonoi dje dhe anuloi.'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ um 7 Uhr ___. (aufstehen)',               ans:'stehe...auf',  opts:['stehe...auf','aufstehe...','stehe...','aufstehe']},
      {type:'fill', q:'Er ___ die Tür ___. (aufmachen)',                  ans:'macht...auf',  opts:['macht...auf','aufmacht','macht...','aufmacht...']},
      {type:'fill', q:'Sie hat mich ___. (anrufen, Perfekt)',             ans:'angerufen',    opts:['angerufen','gerufen an','angeruft','ruft an']},
      {type:'reorder', q:'Rirendo: [früh / auf / Ich / stehe]',           ans:'Ich stehe früh auf.'},
      {type:'translate', q:'Ai hapi dritaren dje.',                        ans:'Er hat das Fenster aufgemacht.'}
    ]
  },

  // ── G17: Fjalia e varur ──
  {
    id:'a2g4', title:'Fjalia e varur — weil, dass, wenn, ob...',
    icon:'🔗', level:'A2', order:4,
    explanation:'Lidhëzat varëse dërgojnë foljen në FUND të fjalisë varëse. Ky është ndryshimi kryesor nga fjalia kryesore.',
    rules:[
      {rule:'weil (sepse): Folja në FUND', note:'Ich lerne Deutsch, WEIL ich in Deutschland ARBEITE.'},
      {rule:'dass (që): Folja në FUND',    note:'Ich denke, DASS das richtig IST.'},
      {rule:'wenn (nëse/kur): Folja në FUND', note:'WENN du kommst, RUFE mich an.'},
      {rule:'ob (nëse/a): Folja në FUND',  note:'Ich weiß nicht, OB er KOMMT.'},
      {rule:'obwohl (megjithëse): Folja në FUND', note:'Er kommt, OBWOHL er krank IST.'},
      {rule:'damit (që të): Folja në FUND', note:'Ich lerne, DAMIT ich BESTEHE.'}
    ],
    examples:[
      {de:'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', sq:'Mësoj gjermanisht sepse dua të punoj në Gjermani.'},
      {de:'Ich denke, dass das Wetter morgen besser wird.', sq:'Mendoj se moti nesër do të jetë më mirë.'},
      {de:'Wenn ich Zeit habe, gehe ich ins Kino.', sq:'Kur të kem kohë, shkoj në kino.'}
    ],
    exercises:[
      {type:'fill', q:'Ich lerne, ___ ich die Prüfung bestehe. (damit/weil/dass)', ans:'damit',  opts:['damit','weil','dass','wenn']},
      {type:'fill', q:'Er kommt nicht, ___ er krank ___. (weil, sein)', ans:'weil...ist', opts:['weil...ist','dass...ist','wenn...ist','ob...ist']},
      {type:'reorder', q:'Rirendo fjali: [er / Ich / kommt / denke / nicht / dass]', ans:'Ich denke, dass er nicht kommt.'},
      {type:'fill', q:'Ich weiß nicht, ___ er ___ kommt. (ob)',          ans:'ob...morgen', opts:['ob','weil','dass','wenn']},
      {type:'translate', q:'Ai nuk vjen megjithëse është mirë.',           ans:'Er kommt nicht, obwohl es ihm gut geht.'}
    ]
  },

  // ── G18: Mbiemri si kallëzues dhe cilësor ──
  {
    id:'a2g5', title:'Mbiemrat — Funksionet dhe mbaresimet',
    icon:'🎨', level:'A2', order:5,
    explanation:'Mbiemri pas foljes "sein" nuk ndryshon. Para emrit (si cilësor) merr mbaresë sipas gjinisë dhe rasës.',
    rules:[
      {rule:'Pas sein (kallëzues): nuk ndryshon', note:'Das Auto ist SCHÖN. Die Frau ist MÜDE.'},
      {rule:'Para emrit + nyja e shquar: -e ose -en', note:'das SCHÖNE Auto, die MÜDE Frau'},
      {rule:'Para emrit + nyja e pashquar: -er/-e/-es ose -en', note:'ein SCHÖNES Auto, eine MÜDE Frau'},
      {rule:'Komparativ: mbiemër + -er', note:'schnell → SCHNELLER / gut → BESSER / groß → GRÖSSER'},
      {rule:'Superlativ: am + mbiemër + -sten', note:'am SCHNELLSTEN / am BESTEN / am GRÖSSTEN'}
    ],
    examples:[
      {de:'Das neue Auto ist sehr schön und schneller als das alte.', sq:'Makina e re është shumë e bukur dhe më e shpejtë se e vjetra.'},
      {de:'Sie kauft einen roten Pullover und eine blaue Hose.', sq:'Ajo blen pulovër të kuqe dhe pantallona blu.'},
      {de:'Berlin ist größer als Wien, aber Paris ist am größten.', sq:'Berlini është më i madh se Vjena, por Parisi është më i madhi.'}
    ],
    exercises:[
      {type:'fill', q:'Das ist ein ___ Mann. (alt, nyja e pashquar, mashk.)', ans:'alter',  opts:['alt','alte','alter','altes']},
      {type:'fill', q:'Ich sehe den ___ Hund. (groß, nyja e shquar, Akk.)',  ans:'großen', opts:['große','großen','großer','groß']},
      {type:'fill', q:'Er ist ___ als sie. (schnell, komparativ)',             ans:'schneller', opts:['schneller','schnell','am schnellsten','schnellst']},
      {type:'fill', q:'Das ist ___ Restaurant in Berlin. (gut, superlativ)',   ans:'das beste', opts:['das beste','der beste','am besten','die besten']},
      {type:'translate', q:'Ai blen makinë të re.',                           ans:'Er kauft ein neues Auto.'}
    ]
  },

  // ── G19: Pasivi ──
  {
    id:'a2g6', title:'Pasivi — Das Passiv (wird gemacht)',
    icon:'🔄', level:'A2', order:6,
    explanation:'Pasivi vë theksin te VEPRIMI jo te kush e bën. Formohet me "werden" + Partizip II.',
    rules:[
      {rule:'Prezent pasiv: werden + Partizip II', note:'Das Auto WIRD repariert. (Makina po riparohet.)'},
      {rule:'Preterit pasiv: wurde + Partizip II', note:'Das Auto WURDE repariert. (Makina u riparua.)'},
      {rule:'Perfekt pasiv: ist + worden', note:'Das Auto IST repariert WORDEN.'},
      {rule:'Kryefjala e vërtetë me "von + Dativ"', note:'Das Auto wurde VON dem Mechaniker repariert.'}
    ],
    examples:[
      {de:'Das Haus wird gebaut. — Das Haus wurde gebaut.', sq:'Shtëpia po ndërtohet. — Shtëpia u ndërtua.'},
      {de:'Der Brief wird von mir geschrieben.', sq:'Letra shkruhet nga unë.'},
      {de:'Hier wird Deutsch gesprochen.', sq:'Këtu flitet gjermanisht.'}
    ],
    exercises:[
      {type:'fill', q:'Das Auto ___ repariert. (Präsens Passiv)',             ans:'wird',      opts:['wird','wurde','ist','hat']},
      {type:'fill', q:'Das Haus ___ gebaut. (Präteritum Passiv)',             ans:'wurde',     opts:['wird','wurde','ist','hatte']},
      {type:'reorder', q:'Bëje pasiv: "Man spricht hier Deutsch."',           ans:'Hier wird Deutsch gesprochen.'},
      {type:'fill', q:'Der Brief ___ von ihm ___. (schreiben, Präsens)',      ans:'wird...geschrieben', opts:['wird...geschrieben','wird...schreiben','ist...geschrieben','wurde...geschrieben']},
      {type:'translate', q:'Shtëpia po ndërtohet.',                           ans:'Das Haus wird gebaut.'}
    ]
  },

  // ── G20: Konjuktivi II ──
  {
    id:'a2g7', title:'Konjunktivi II — Kushtet dhe dëshirat',
    icon:'💭', level:'A2', order:7,
    explanation:'Konjunktivi II shpreh kushte hipoteze, dëshira, kërkesa të sjellshme. "Würde + infinitiv" është forma më e zakonshme.',
    rules:[
      {rule:'würde + infinitiv: forma universale', note:'Ich WÜRDE gern kommen. Was WÜRDEST du tun?'},
      {rule:'Forma e drejtpërdrejtë: hätte/wäre', note:'Ich HÄTTE Zeit. Ich WÄRE glücklich.'},
      {rule:'Foljet modale: könnte/müsste/sollte/dürfte', note:'Könntest du mir helfen? Du SOLLTEST das machen.'},
      {rule:'Kushti: Wenn...würde... / Wenn...wäre...', note:'WENN ich Zeit HÄTTE, WÜRDE ich kommen.'}
    ],
    examples:[
      {de:'Ich würde gern nach Japan reisen, aber das kostet zu viel.', sq:'Do të udhëtoja me dëshirë në Japoni, por kjo kushton shumë.'},
      {de:'Wenn ich reich wäre, würde ich ein großes Haus kaufen.', sq:'Nëse do të isha i pasur, do të blija shtëpi të madhe.'},
      {de:'Könntest du mir bitte helfen? Das wäre sehr nett!', sq:'Mund të më ndihmoje ju lutem? Kjo do të ishte shumë mirë!'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ gern kommen. (würde/wäre)',                 ans:'würde',   opts:['würde','wäre','hätte','sollte']},
      {type:'fill', q:'___ du mir helfen? (Können, Konj.II)',              ans:'Könntest', opts:['Könntest','Kannst','Könnte','Konntest']},
      {type:'fill', q:'Wenn ich Zeit ___, ___ ich kommen. (haben, würde)', ans:'hätte...würde', opts:['hätte...würde','habe...würde','hatte...würde','hätte...werde']},
      {type:'translate', q:'Çfarë do të bëje?',                             ans:'Was würdest du tun?'},
      {type:'translate', q:'Nëse do të isha i lirë, do të vija.',           ans:'Wenn ich frei wäre, würde ich kommen.'}
    ]
  },

  // ── G21: Fjalia relative ──
  {
    id:'a2g8', title:'Fjalia relative — der/die/das + folja në fund',
    icon:'🔍', level:'A2', order:8,
    explanation:'Fjalia relative shpjegon ose specifikon emrin. Fillon me që si gjermanishtja: der/die/das (sipas gjinisë dhe rasës). Folja shkon në FUND.',
    rules:[
      {rule:'Subjekt (Nom.): der/die/das që = who/that', note:'Der Mann, DER hier wohnt, ist mein Freund.'},
      {rule:'Objekt (Akk.): den/die/das + folja në fund', note:'Das Buch, DAS ich lese, ist interessant.'},
      {rule:'Dativ: dem/der/dem + folja në fund', note:'Der Mann, DEM ich helfe, ist krank.'},
      {rule:'Genitivin: dessen/deren', note:'Die Frau, DEREN Auto kaputt ist, wartet.'}
    ],
    examples:[
      {de:'Das ist der Mann, der in Berlin wohnt.', sq:'Ky është njeriu që jeton në Berlin.'},
      {de:'Das Buch, das ich gestern gekauft habe, ist sehr gut.', sq:'Libri që bleva dje është shumë i mirë.'},
      {de:'Die Frau, der ich geholfen habe, war sehr nett.', sq:'Gruaja të cilës i ndihmova ishte shumë e mirë.'}
    ],
    exercises:[
      {type:'fill', q:'Das ist der Mann, ___ hier arbeitet. (Nom.)',      ans:'der',  opts:['der','den','dem','die']},
      {type:'fill', q:'Das Buch, ___ ich lese, ist gut. (Akk., asnj.)',   ans:'das',  opts:['das','den','dem','die']},
      {type:'fill', q:'Die Frau, ___ ich helfe. (Dat., fem.)',             ans:'der',  opts:['der','die','den','dem']},
      {type:'reorder', q:'Bëj fjali relative: [wohnt / der / in Wien / Der Mann]', ans:'Der Mann, der in Wien wohnt.'},
      {type:'translate', q:'Kjo është gruaja që punon këtu.',              ans:'Das ist die Frau, die hier arbeitet.'}
    ]
  },

  // ── G22: Infinitiv me zu ──
  {
    id:'a2g9', title:'Infinitivi me "zu" — Es ist wichtig, zu...',
    icon:'→', level:'A2', order:9,
    explanation:'"Zu + infinitiv" vjen pas shumë foljeve, mbiemrave dhe emrave. Kujdes: foljet modale dhe perceptimit NUK marrin "zu".',
    rules:[
      {rule:'pas foljeve: hoffen, versuchen, beginnen, planen, vergessen...', note:'Ich hoffe, DICH zu SEHEN.'},
      {rule:'pas mbiemrave: es ist wichtig/schön/möglich + zu', note:'Es ist wichtig, DEUTSCH zu LERNEN.'},
      {rule:'pas emrave: die Möglichkeit, der Wunsch, die Zeit', note:'Ich habe keine Zeit, SPORT zu TREIBEN.'},
      {rule:'pas um...zu (me qëllim)', note:'Ich lerne, UM die Prüfung zu BESTEHEN.'},
      {rule:'Foljet me ndarje: zu + ndërmjet', note:'aufhören → Ich versuche AUFZUHÖREN.'}
    ],
    examples:[
      {de:'Es ist wichtig, täglich Deutsch zu lernen.', sq:'Është e rëndësishme të mësosh gjermanisht çdo ditë.'},
      {de:'Ich hoffe, dich bald wiederzusehen.', sq:'Shpresoj të të shihem shpejt.'},
      {de:'Ich lerne, um die Prüfung zu bestehen.', sq:'Mësoj për të kaluar provimin.'}
    ],
    exercises:[
      {type:'fill', q:'Es ist wichtig, früh ___ stehen. (aufstehen)',    ans:'aufzustehen', opts:['aufzustehen','zu aufstehen','stehen auf','aufstehen']},
      {type:'fill', q:'Ich hoffe, dich ___ sehen. (sehen)',               ans:'zu sehen',    opts:['zu sehen','sehen','gesehen','zusehen']},
      {type:'fill', q:'Ich lerne, ___ bestehen. (um + bestehen)',          ans:'um zu bestehen', opts:['um zu bestehen','damit zu bestehen','zu bestehen','um bestehen']},
      {type:'reorder', q:'Rirendo: [zu / Es / schön / ist / wandern]',    ans:'Es ist schön zu wandern.'},
      {type:'translate', q:'Ai provon të flasë gjermanisht.',              ans:'Er versucht, Deutsch zu sprechen.'}
    ]
  }
],

B1: [
  // ── G23: Konjuktivi I — Raportimi ──
  {
    id:'b1g1', title:'Konjunktivi I — Raportimi indirekt',
    icon:'📰', level:'B1', order:1,
    explanation:'Konjunktivi I përdoret kryesisht në media dhe tekste zyrtare për të raportuar çfarë ka thënë dikush, pa konfirmuar nëse është e vërtetë.',
    rules:[
      {rule:'sein → sei: er sei, sie sei, es sei', note:'"Er sagte, er SEI krank."'},
      {rule:'haben → habe: er habe, sie habe', note:'"Sie sagte, sie HABE keine Zeit."'},
      {rule:'Folje rregullta: + e: er komme, er lerne, er arbeite', note:'"Er sagte, er KOMME morgen."'},
      {rule:'Kur Konj.I = Indikativ, përdoret Konj.II', note:'wir kommen (ind.) = wir kommen → Konj.II: wir kämen'}
    ],
    examples:[
      {de:'Der Minister sagte, er sei für Veränderungen bereit.', sq:'Ministri tha se ai ishte gati për ndryshime.'},
      {de:'Die Zeitung berichtet, dass das Unternehmen Verluste habe.', sq:'Gazeta raporton se kompania ka humbje.'},
      {de:'Er behauptete, er habe das Geld nicht genommen.', sq:'Ai pohoi se nuk e kishte marrë paratë.'}
    ],
    exercises:[
      {type:'fill', q:'Er sagte, er ___ krank. (sein, Konj.I)',           ans:'sei',    opts:['sei','ist','war','wäre']},
      {type:'fill', q:'Sie sagte, sie ___ Zeit. (haben, Konj.I)',         ans:'habe',   opts:['habe','hat','hatte','hätte']},
      {type:'fill', q:'Er behauptete, er ___ morgen. (kommen, Konj.I)',   ans:'komme',  opts:['komme','kommt','käme','kommen']},
      {type:'translate', q:'Ajo tha se është e sëmurë. (Konj.I)',         ans:'Sie sagte, sie sei krank.'},
      {type:'translate', q:'Gazeta raporton se çmimet janë rritur.',       ans:'Die Zeitung berichtet, die Preise seien gestiegen.'}
    ]
  },

  // ── G24: Gjenitiivi ──
  {
    id:'b1g2', title:'Genitivin — Posesioni dhe prepozicat',
    icon:'🔑', level:'B1', order:2,
    explanation:'Gjenitiivi tregon posesionin (kujt i takon diçka) dhe vjen pas disa prepozitatave. Emri pas gjenitiv merr mbaresë.',
    rules:[
      {rule:'Emri mashkullor/asnjanës + -(e)s', note:'das Auto DES MANNES — das Buch DES KINDES'},
      {rule:'Emri femëror: pa ndryshim', note:'das Auto DER FRAU — die Tasche DER FRAU'},
      {rule:'Prepozicat me Genitivin: wegen, trotz, während, statt, aufgrund, anstatt', note:'WEGEN des Wetters / TROTZ des Regens'},
      {rule:'Alternativa me "von": e zakonshme në të folur', note:'das Auto VON dem Mann (joformale)'}
    ],
    examples:[
      {de:'Das ist das Auto meines Vaters.', sq:'Kjo është makina e babait tim.'},
      {de:'Wegen des schlechten Wetters blieben wir zu Hause.', sq:'Për shkak të motit të keq qëndruam në shtëpi.'},
      {de:'Trotz des Regens gingen wir spazieren.', sq:'Megjithë shiun, ne shëtitëm.'}
    ],
    exercises:[
      {type:'fill', q:'Das ist das Buch ___ Mannes. (Genitiv)',            ans:'des',    opts:['des','der','dem','den']},
      {type:'fill', q:'Das Auto ___ Frau ist neu. (Genitiv)',              ans:'der',    opts:['des','der','dem','den']},
      {type:'fill', q:'___ des Wetters blieben wir zu Hause. (wegen)',     ans:'Wegen',  opts:['Wegen','Trotz','Während','Statt']},
      {type:'translate', q:'Libri i profesorit është interesant.',          ans:'Das Buch des Professors ist interessant.'},
      {type:'translate', q:'Megjithë lodhjen, ai erdhi.',                   ans:'Trotz der Müdigkeit kam er.'}
    ]
  },

  // ── G25: Ndajshteset (parashtesa dhe prapashtesa) ──
  {
    id:'b1g3', title:'Fjalëformimi — Parashtesa dhe prapashtesa',
    icon:'🏗️', level:'B1', order:3,
    explanation:'Gjermanishtja formon fjalë të reja duke bashkuar rrënjë me parashtesa dhe prapashtesa. Kuptimi i tyre ndihmon të kuptosh fjalë të panjohura.',
    rules:[
      {rule:'Parashtesa negative: un- (i kundërt)', note:'möglich → UNmöglich / glücklich → UNglücklich'},
      {rule:'Parashtesa: ver- (ndryshim/devijim)', note:'kaufen → VERkaufen / stehen → VERstehen'},
      {rule:'Prapashtesa emrash: -ung (veprimi)', note:'leiten → die LEITung / arbeiten → die ARBEITung'},
      {rule:'Prapashtesa: -heit/-keit (cilësia)', note:'frei → die FREIheit / möglich → die MÖGLICHkeit'},
      {rule:'Prapashtesa: -er (personi)', note:'arbeiten → der ARBEITer / lehren → der LEHRer'},
      {rule:'Prapashtesa: -lich (si mbiemër)', note:'Freund → FREUNDlich / Kind → KINDlich'}
    ],
    examples:[
      {de:'Das ist unmöglich! Ich verstehe das nicht.', sq:'Kjo është e pamundshme! Nuk e kuptoj.'},
      {de:'Die Arbeit ist wichtig für die Gesellschaft.', sq:'Puna është e rëndësishme për shoqërinë.'},
      {de:'Er ist sehr freundlich und hilfsbereit.', sq:'Ai është shumë miqësor dhe i gatshëm të ndihmojë.'}
    ],
    exercises:[
      {type:'fill', q:'möglich → das Gegenteil ist: ___',                  ans:'unmöglich', opts:['unmöglich','nichtmöglich','niemöglich','unmöglisch']},
      {type:'fill', q:'leiten → das Nomen ist: ___',                       ans:'die Leitung', opts:['die Leitung','das Leiter','die Leitschaft','das Leitung']},
      {type:'fill', q:'frei → die Eigenschaft ist: ___',                   ans:'die Freiheit', opts:['die Freiheit','die Freikeit','die Freiwilligkeit','das Frei']},
      {type:'fill', q:'lehren → die Person ist: ___',                      ans:'der Lehrer', opts:['der Lehrer','die Lehre','das Lehr','der Lehring']},
      {type:'translate', q:'Ai është shumë miqësor.',                       ans:'Er ist sehr freundlich.'}
    ]
  },

  // ── G26: Futur I dhe II ──
  {
    id:'b1g4', title:'E ardhmja — Futur I dhe Futur II',
    icon:'🔮', level:'B1', order:4,
    explanation:'Futuri I shpreh plane dhe parashikime të ardhshme. Futuri II shpreh diçka që do të ketë ndodhur deri në një moment të ardhshëm.',
    rules:[
      {rule:'Futur I: werden + Infinitiv', note:'Ich WERDE morgen nach Berlin FAHREN.'},
      {rule:'Alternativa e zakonshme: Prezent + shprehje kohe', note:'Ich FAHRE morgen nach Berlin. (e zakonshme)'},
      {rule:'Futur II: werden + Partizip II + haben/sein', note:'Bis morgen WERDE ich das gemacht HABEN.'},
      {rule:'Futur II për supozim: Er wird gegangen sein.', note:'Ku është ai? — Er WIRD gegangen SEIN.'}
    ],
    examples:[
      {de:'Nächstes Jahr werde ich in Deutschland arbeiten.', sq:'Vitin e ardhshëm do të punoj në Gjermani.'},
      {de:'Bis Freitag werde ich den Bericht fertig haben.', sq:'Deri të premten do ta kem gati raportin.'},
      {de:'Er wird schon nach Hause gegangen sein.', sq:'Ai ka shkuar tashmë në shtëpi (supozim).'}
    ],
    exercises:[
      {type:'fill', q:'Ich ___ morgen nach Wien ___. (werden+fahren)',    ans:'werde...fahren',   opts:['werde...fahren','werde...gefahren','bin...gefahren','werde...fahrt']},
      {type:'fill', q:'Bis morgen ___ ich das gemacht ___. (Futur II)',    ans:'werde...haben',    opts:['werde...haben','werde...sein','habe...gemacht','hatte...gemacht']},
      {type:'translate', q:'Vitin e ardhshëm do të mësoj gjermanisht.',   ans:'Nächstes Jahr werde ich Deutsch lernen.'},
      {type:'translate', q:'Deri të premten do ta kem mbaruar.',           ans:'Bis Freitag werde ich fertig sein.'},
      {type:'fill', q:'Er ___ schon gegangen ___. (supozim, Futur II)',    ans:'wird...sein',      opts:['wird...sein','wird...haben','wurde...sein','wäre...sein']}
    ]
  },

  // ── G27: Prepozicat me rastë të dyfishtë ──
  {
    id:'b1g5', title:'Prepozicat me dy rastë — in, an, auf, über...',
    icon:'⚖️', level:'B1', order:5,
    explanation:'Nëntë prepozicata (in, an, auf, über, unter, vor, hinter, neben, zwischen) marrin Dativ (ku?) ose Akkusativ (ku shkon?).',
    rules:[
      {rule:'Ku? (Vendndodhja) → DATIV: Wo?', note:'Das Buch liegt AUF DEM Tisch. (Dativ)'},
      {rule:'Ku shkon? (Lëvizja) → AKKUSATIV: Wohin?', note:'Ich lege das Buch AUF DEN Tisch. (Akk.)'},
      {rule:'Bashkimet e zakonshme: in+dem=im / in+das=ins / an+dem=am / an+das=ans', note:'Ich bin IM Haus. Ich gehe INS Kino.'},
      {rule:'Ndajfoljet e vendndodhjes: hier/da, oben/unten, links/rechts', note:'Das steht OBEN. Geh LINKS.'}
    ],
    examples:[
      {de:'Das Buch liegt auf dem Tisch. — Ich lege das Buch auf den Tisch.', sq:'Libri ndodhet mbi tryezë. — Vendos librin mbi tryezë.'},
      {de:'Ich bin im Büro. — Ich gehe ins Büro.', sq:'Jam në zyrë. — Shkoj në zyrë.'},
      {de:'Er hängt das Bild an die Wand. Das Bild hängt an der Wand.', sq:'Ai varet tablo në mur. Tabloja varet në mur.'}
    ],
    exercises:[
      {type:'fill', q:'Das Buch liegt ___ Tisch. (auf, Dativ)',             ans:'auf dem', opts:['auf dem','auf den','auf das','auf der']},
      {type:'fill', q:'Ich gehe ___ Kino. (in, Akkusativ)',                 ans:'ins',     opts:['ins','im','in dem','in der']},
      {type:'fill', q:'Er stellt das Glas ___ Tisch. (auf, Akkusativ)',     ans:'auf den', opts:['auf den','auf dem','auf das','auf der']},
      {type:'fill', q:'Wir wohnen ___ Stadt. (in, Dativ)',                  ans:'in der',  opts:['in der','in die','in dem','ins']},
      {type:'translate', q:'Vendos librin mbi tryezë.',                     ans:'Ich lege das Buch auf den Tisch.'}
    ]
  },

  // ── G28: Ndajfoljet e zgjeruara ──
  {
    id:'b1g6', title:'Ndajfoljet lidhëse — deshalb, trotzdem, außerdem...',
    icon:'🔗', level:'B1', order:6,
    explanation:'Ndajfoljet lidhëse lidhin fjali dhe tregojnë marrëdhëniet logjike midis tyre. Kujdes: pas tyre folja vjen menjëherë (pozicioni 2)!',
    rules:[
      {rule:'deshalb/daher/deswegen = prandaj', note:'Ich bin krank, DESHALB komme ich nicht.'},
      {rule:'trotzdem = megjithatë', note:'Es regnet, TROTZDEM gehe ich spazieren.'},
      {rule:'außerdem = veç kësaj, për më tepër', note:'Er ist fleißig. AUSSERDEM ist er nett.'},
      {rule:'allerdings = sidoqoftë, megjithatë', note:'Das ist gut, ALLERDINGS teuer.'},
      {rule:'jedoch/dennoch = megjithatë (formal)', note:'Es war schwer, JEDOCH haben wir es geschafft.'},
      {rule:'schließlich = në fund / pasi të gjitha', note:'SCHLIESSLICH hat er zugestimmt.'}
    ],
    examples:[
      {de:'Ich bin müde, deshalb gehe ich früh schlafen.', sq:'Jam i lodhur, prandaj shkoj të fle herët.'},
      {de:'Es schneit, trotzdem fahren wir. Außerdem haben wir Schneeketten.', sq:'Bie borë, megjithatë udhëtojmë. Veç kësaj kemi zinxhirë bore.'},
      {de:'Das Angebot ist gut, allerdings ist der Preis zu hoch.', sq:'Oferta është e mirë, sidoqoftë çmimi është shumë i lartë.'}
    ],
    exercises:[
      {type:'fill', q:'Ich bin krank, ___ komme ich nicht. (prandaj)',      ans:'deshalb',    opts:['deshalb','trotzdem','außerdem','allerdings']},
      {type:'fill', q:'Es ist teuer, ___ kaufe ich es. (megjithatë)',        ans:'trotzdem',   opts:['trotzdem','deshalb','außerdem','schließlich']},
      {type:'fill', q:'Er ist nett. ___ ist er sehr klug. (veç kësaj)',      ans:'Außerdem',   opts:['Außerdem','Deshalb','Trotzdem','Schließlich']},
      {type:'reorder', q:'Rirendo: [bin / Ich / trotzdem / krank / ich / gehe / , / raus]', ans:'Ich bin krank, trotzdem gehe ich raus.'},
      {type:'translate', q:'Është i shtrenjtë, megjithatë e blej.',          ans:'Es ist teuer, trotzdem kaufe ich es.'}
    ]
  },

  // ── G29: Ndajfoljet e kohës ──
  {
    id:'b1g7', title:'Shprehjet kohore — Zeitangaben',
    icon:'📅', level:'B1', order:7,
    explanation:'Shprehjet kohore tregojnë kur, sa shpesh, si gjatë ndodhin gjërat. Pozicioni i tyre ndikon renditjen e fjalëve.',
    rules:[
      {rule:'Rendi TEK-KAR-VAR: Kohë → Shkak → Vendndodhje → Mënyrë', note:'Ich fahre MORGEN (k) MIT DEM BUS (v) SCHNELL (m).'},
      {rule:'Kohë e saktë: um (orën), am (ditën), im (muajin/stinën), vor (para)', note:'UM 8 Uhr / AM Montag / IM Januar / VOR einem Jahr'},
      {rule:'Kohë relative: vor (para), nach (pas), seit (prej), bis (deri)', note:'VOR einer Woche / NACH dem Essen / SEIT einem Jahr / BIS Freitag'},
      {rule:'Shpeshtësia: immer/oft/manchmal/selten/nie', note:'Ich IMMER dusche morgens.'}
    ],
    examples:[
      {de:'Ich treffe ihn morgen um 10 Uhr im Café.', sq:'Takohem me të nesër në orën 10 në kafene.'},
      {de:'Seit einem Jahr lerne ich Deutsch — jeden Tag.', sq:'Prej një viti mësoj gjermanisht — çdo ditë.'},
      {de:'Vor zwei Wochen war ich in Wien. Bald fahre ich wieder.', sq:'Dy javë më parë isha në Vjenë. Shpejt shkoj sërish.'}
    ],
    exercises:[
      {type:'fill', q:'Ich komme ___ 8 Uhr. (orën)',                        ans:'um',     opts:['um','am','im','an']},
      {type:'fill', q:'Er ist ___ Montag frei. (ditën)',                     ans:'am',     opts:['am','um','im','an']},
      {type:'fill', q:'___ einem Jahr lerne ich Deutsch. (prej)',            ans:'Seit',   opts:['Seit','Vor','Nach','Bis']},
      {type:'fill', q:'Wir bleiben ___ Freitag. (deri)',                     ans:'bis',    opts:['bis','seit','nach','vor']},
      {type:'translate', q:'Prej tre vitesh jetoj në Berlin.',               ans:'Seit drei Jahren wohne ich in Berlin.'}
    ]
  },

  // ── G30: Ndajfoljet e mënyrës dhe shkakut ──
  {
    id:'b1g8', title:'Lidhëzat komplekse — je...desto, sowohl...als auch',
    icon:'⚡', level:'B1', order:8,
    explanation:'Lidhëzat dyfishe janë karakteristike e gjermanishtes B1. Ato shprehin marrëdhënie komplekse midis ideve.',
    rules:[
      {rule:'je...desto (sa më shumë...aq më shumë)', note:'JE mehr ich lerne, DESTO besser werde ich.'},
      {rule:'sowohl...als auch (si...ashtu edhe)', note:'Er spricht SOWOHL Deutsch ALS AUCH Englisch.'},
      {rule:'weder...noch (as...as)', note:'Er trinkt WEDER Alkohol NOCH Kaffee.'},
      {rule:'entweder...oder (ose...ose)', note:'ENTWEDER kommst du, ODER ich komme zu dir.'},
      {rule:'nicht nur...sondern auch (jo vetëm...por edhe)', note:'Er ist NICHT NUR klug, SONDERN AUCH fleißig.'},
      {rule:'zwar...aber (vërtet...por)', note:'Das ist ZWAR teuer, ABER gut.'}
    ],
    examples:[
      {de:'Je mehr du übst, desto besser wird dein Deutsch.', sq:'Sa më shumë të ushtrojësh, aq më mirë do të bëhet gjermanishtja.'},
      {de:'Er spricht sowohl Albanisch als auch Deutsch.', sq:'Ai flet si shqip ashtu edhe gjermanisht.'},
      {de:'Das Angebot ist zwar teuer, aber die Qualität ist gut.', sq:'Oferta është vërtet e shtrenjtë, por cilësia është e mirë.'}
    ],
    exercises:[
      {type:'fill', q:'___ mehr du lernst, ___ besser wirst du.',           ans:'Je...desto', opts:['Je...desto','So...wie','Nicht nur...sondern','Entweder...oder']},
      {type:'fill', q:'Er spricht ___ Deutsch ___ Englisch.',                ans:'sowohl...als auch', opts:['sowohl...als auch','entweder...oder','weder...noch','nicht nur...sondern']},
      {type:'fill', q:'Es ist ___ teuer, ___ gut. (vërtet...por)',           ans:'zwar...aber', opts:['zwar...aber','nicht nur...sondern','je...desto','sowohl...als auch']},
      {type:'translate', q:'Sa më shumë të flas, aq më mirë kuptoj.',        ans:'Je mehr ich spreche, desto besser verstehe ich.'},
      {type:'translate', q:'As kafe as çaj — vetëm ujë.',                   ans:'Weder Kaffee noch Tee — nur Wasser.'}
    ]
  }

,
  // ── G31: Wechselpräpositionen ──
  {
    id:'b1g9', title:'Wechselpräpositionen — Akkusativ vs Dativ',
    icon:'↔️', level:'B1', order:9,
    explanation:'9 prepozicata marrin ose Dativ (WO? — ku ndodhet?) ose Akkusativ (WOHIN? — ku shkon?). Ky është ndryshimi i vetëm: gjendja VS lëvizja.',
    rules:[
      {rule:'in, an, auf, über, unter, vor, hinter, neben, zwischen', note:'Të 9-ta: Dativ=gjendje / Akkusativ=lëvizje'},
      {rule:'WO? (ku?) → DATIV: im, am, auf dem, über dem...', note:'Das Buch liegt AUF DEM Tisch. Ich bin IM Haus.'},
      {rule:'WOHIN? (ku shkon?) → AKKUSATIV: ins, ans, auf den, über den...', note:'Ich lege das Buch AUF DEN Tisch. Ich gehe INS Haus.'},
      {rule:'Bashkimet e domosdoshme: in+dem=IM / in+das=INS / an+dem=AM / an+das=ANS', note:'Ich bin IM Büro. Ich gehe INS Büro.'},
      {rule:'Shprehje fikse me Dativ: am Morgen, im Winter, an der Wand, auf dem Weg', note:'Gjithmonë Dativ — pa lëvizje'},
      {rule:'Shprehje fikse me Akkusativ: in die Schule gehen, ans Meer fahren', note:'Gjithmonë Akkusativ — lëvizje drejt'}
    ],
    examples:[
      {de:'Das Buch liegt auf dem Tisch. — Ich lege das Buch auf den Tisch.', sq:'Libri ndodhet mbi tryezë. — Vendos librin mbi tryezë. (gjendje vs lëvizje)'},
      {de:'Er ist im Büro. — Er geht ins Büro.', sq:'Ai është në zyrë. — Ai shkon në zyrë.'},
      {de:'Das Bild hängt an der Wand. — Ich hänge das Bild an die Wand.', sq:'Tabloja varet në mur. — E var tablonë në mur.'}
    ],
    exercises:[
      {type:'fill', q:'Das Heft liegt ___ Tisch. (auf, WO?)',                ans:'auf dem',  opts:['auf dem','auf den','auf das','auf der']},
      {type:'fill', q:'Ich lege das Heft ___ Tisch. (auf, WOHIN?)',           ans:'auf den',  opts:['auf den','auf dem','auf das','auf die']},
      {type:'fill', q:'Er ist ___ Zimmer. (in, WO?)',                         ans:'im',       opts:['im','ins','in dem','in den']},
      {type:'fill', q:'Er geht ___ Zimmer. (in, WOHIN?)',                     ans:'ins',      opts:['ins','im','in dem','in den']},
      {type:'fill', q:'Das Bild hängt ___ Wand. (an, WO?)',                   ans:'an der',   opts:['an der','an die','an dem','ans']},
      {type:'translate', q:'Vendos librin mbi tryezë.',                        ans:'Ich lege das Buch auf den Tisch.'},
      {type:'translate', q:'Libri ndodhet mbi tryezë.',                        ans:'Das Buch liegt auf dem Tisch.'}
    ]
  },

  // ── G32: Adjektivdeklination ──
  {
    id:'b1g10', title:'Mbiemrat — Deklination (3 tabela)',
    icon:'🎨', level:'B1', order:10,
    explanation:'Mbiemri para emrit merr mbaresë sipas gjinisë, rasës dhe llojit të nyjës. Ka 3 tabela: pas nyjës së shquar (der/die/das), pas nyjës së pashquar (ein/eine), pa nyjë.',
    rules:[
      {rule:'1. Pas der/die/das (nyja e shquar): -e ose -en', note:'der ALTE Mann / die ALTE Frau / das ALTE Haus / Akk: den ALTEN Mann'},
      {rule:'2. Pas ein/eine (nyja e pashquar): -er/-e/-es/-en', note:'ein ALTER Mann / eine ALTE Frau / ein ALTES Haus / einen ALTEN Mann'},
      {rule:'3. Pa nyjë (stark): mbaresën e merr mbiemri vetë', note:'KALTER Kaffee / FRISCHE Luft / GUTES Essen'},
      {rule:'Shkurtore: Pas nyjës së shquar gjithmonë -e (Nom.sg) ose -en (të tjerat)', note:'die GUTE Frau — der GUTEN Frau — der GUTEN Frau — die GUTE Frau'},
      {rule:'Shumësi pas çdo nyje: gjithmonë -en', note:'die ALTEN Männer / keine KLEINEN Kinder'}
    ],
    examples:[
      {de:'Der alte Mann trinkt einen kalten Kaffee.', sq:'Njeriu i moshuar pi kafe të ftohtë.'},
      {de:'Ich kaufe ein rotes Auto und eine blaue Jacke.', sq:'Blej makinë të kuqe dhe xhaketë blu.'},
      {de:'Frischer Fisch und gutes Brot — das ist mein Frühstück.', sq:'Peshk i freskët dhe bukë e mirë — ky është mëngjesi im.'}
    ],
    exercises:[
      {type:'fill', q:'Der ___ Mann kommt. (alt, nyja e shquar)',               ans:'alte',    opts:['alte','alter','alten','altem']},
      {type:'fill', q:'Ich sehe einen ___ Mann. (alt, ein+Akk)',                ans:'alten',   opts:['alten','alte','alter','altem']},
      {type:'fill', q:'___ Kaffee, bitte! (kalt, pa nyjë, Nom.)',               ans:'Kalten',  opts:['Kalten','Kalter','Kaltem','Kalt']},
      {type:'fill', q:'Die ___ Kinder spielen. (klein, shumës)',                ans:'kleinen', opts:['kleinen','kleine','kleiner','kleinem']},
      {type:'fill', q:'Er hat eine ___ Wohnung. (groß, ein+Akk)',               ans:'große',   opts:['große','groß','großen','großer']},
      {type:'translate', q:'Blej makinë të re.',                                 ans:'Ich kaufe ein neues Auto.'},
      {type:'translate', q:'Njeriu i lodhur fle.',                               ans:'Der müde Mann schläft.'}
    ]
  },

  // ── G33: Reflexive Verben ──
  {
    id:'b1g11', title:'Foljet refleksive — sich waschen, sich freuen...',
    icon:'🔁', level:'B1', order:11,
    explanation:'Foljet refleksive kanë veprimin që kthehet mbi kryefjalën. Peremirat refleksive janë: mich/dich/sich/uns/euch/sich.',
    rules:[
      {rule:'Akkusativ refleksiv: mich/dich/sich/uns/euch/sich', note:'Ich wasche MICH. Du wäschst DICH. Er/sie wäscht SICH.'},
      {rule:'Dativ refleksiv: mir/dir/sich/uns/euch/sich', note:'Ich putze MIR die Zähne. Du kämmst DIR die Haare.'},
      {rule:'Foljet gjithmonë refleksive (nuk kanë objekt tjetër):', note:'sich beeilen, sich freuen, sich irren, sich erholen, sich befinden'},
      {rule:'Foljet ndonjëherë refleksive (mund të kenë objekt):', note:'sich waschen = waschen sich (Akk.) ose waschen jemanden (tjetrin)'},
      {rule:'Ndërtimi: Kryefjala + Folja + Peremirat refleksiv', note:'Ich FREUE MICH. Du FREUST DICH. Wir FREUEN UNS.'}
    ],
    examples:[
      {de:'Ich wasche mich jeden Morgen. Er kämpft sich durch.', sq:'Lahem çdo mëngjes. Ai lufton dhe e kalon.'},
      {de:'Sie freut sich sehr über das Geschenk!', sq:'Ajo gëzohet shumë për dhuratën!'},
      {de:'Beeilt euch! Wir haben keine Zeit mehr.', sq:'Nxituni! Nuk kemi më kohë.'}
    ],
    exercises:[
      {type:'fill', q:'Ich wasche ___. (Akkusativ refleksiv)',                  ans:'mich',  opts:['mich','mir','sich','dich']},
      {type:'fill', q:'Er freut ___ sehr. (Akkusativ refleksiv)',               ans:'sich',  opts:['sich','mich','ihn','ihm']},
      {type:'fill', q:'Wir beeilen ___. (Akkusativ refleksiv)',                 ans:'uns',   opts:['uns','euch','sich','ihr']},
      {type:'fill', q:'Ich putze ___ die Zähne. (Dativ refleksiv)',            ans:'mir',   opts:['mir','mich','sich','dir']},
      {type:'fill', q:'Du irrst ___. (Akkusativ refleksiv)',                    ans:'dich',  opts:['dich','dein','dir','sich']},
      {type:'translate', q:'Ai gëzohet shumë.',                                  ans:'Er freut sich sehr.'},
      {type:'translate', q:'Nxitohemi!',                                          ans:'Wir beeilen uns!'}
    ]
  },

  // ── G34: Plusquamperfekt ──
  {
    id:'b1g12', title:'Plusquamperfekti — hatte/war + Partizip II',
    icon:'⏪', level:'B1', order:12,
    explanation:'Plusquamperfekti tregon veprimin e KRYER para një veprimi tjetër të kaluar. "E kaluara e të kaluarës." Formohet me hatte/war + Partizip II.',
    rules:[
      {rule:'hatte + Partizip II: për shumicën e foljeve', note:'Ich HATTE gegessen, bevor er kam.'},
      {rule:'war + Partizip II: për foljet e lëvizjes/ndryshimit', note:'Er WAR gegangen, bevor ich ankam.'},
      {rule:'Lidhja me Präteritum: Plusquamperfekt ndodh PARA Präteritum', note:'NACHDEM ich gegessen HATTE, ging ich schlafen.'},
      {rule:'Shprehje tipike: nachdem, bevor, als, sobald', note:'NACHDEM er gegangen WAR, rief sie an.'},
      {rule:'Nuk përdoret vetëm — gjithmonë në kontekst me kohë tjetër', note:'E kaluara → Plusquamperfekti ndodh para saj'}
    ],
    examples:[
      {de:'Nachdem ich gegessen hatte, rief ich ihn an.', sq:'Pasi hëngra, e telefonova.'},
      {de:'Er war schon gegangen, als ich ankam.', sq:'Ai kishte shkuar tashmë, kur mbrita.'},
      {de:'Ich hatte das Buch gelesen, bevor der Film begann.', sq:'E kisha lexuar librin para se të fillonte filmi.'}
    ],
    exercises:[
      {type:'fill', q:'Nachdem ich ___ (essen), rief ich an. (Plusquamperfekt)',  ans:'gegessen hatte',   opts:['gegessen hatte','gegessen habe','gegessen bin','aß']},
      {type:'fill', q:'Er ___ schon ___, als ich kam. (gehen)',                   ans:'war...gegangen',   opts:['war...gegangen','hat...gegangen','ist...gegangen','hatte...gegangen']},
      {type:'fill', q:'Nachdem sie ___ (aufwachen), duschte sie.',                ans:'aufgewacht war',   opts:['aufgewacht war','aufgewacht hatte','aufgewacht ist','aufwachte']},
      {type:'translate', q:'Pasi kishte lexuar librin, shkoi të flinte.',          ans:'Nachdem er das Buch gelesen hatte, ging er schlafen.'},
      {type:'translate', q:'Ai kishte shkuar tashmë kur mbrita.',                  ans:'Er war schon gegangen, als ich ankam.'}
    ]
  },

  // ── G35: Imperativ ──
  {
    id:'b1g13', title:'Urdhërorja — Imperativ',
    icon:'📢', level:'B1', order:13,
    explanation:'Urdhërorja (Imperativ) përdoret për të dhënë urdhëra, këshilla, lutesha. Ka 4 forma: du, ihr, wir, Sie.',
    rules:[
      {rule:'du-Form: trung i foljes (pa -e zakonisht)', note:'kommen → KOMM! / gehen → GEH! / machen → MACH!'},
      {rule:'du-Form me -e (obligative tek: atmen, arbeiten, öffnen)', note:'atmen → ATME! / öffne → ÖFFNE!'},
      {rule:'ihr-Form: = Prezenti i ihr', note:'Kinder, KOMMT her! / MACHT eure Aufgaben!'},
      {rule:'wir-Form: = Prezenti i wir (si ftesë)', note:'GEHEN wir! / MACHEN wir eine Pause!'},
      {rule:'Sie-Form: = Prezenti i Sie (formale)', note:'KOMMEN Sie bitte! / NEHMEN Sie Platz!'},
      {rule:'Foljet e parregullta: sein → SEI! / SEIEN Sie! / SEID!', note:'SEI ruhig! / SEIEN Sie bitte ruhig!'},
      {rule:'Foljet me ndarje: parashtesa shkon në fund', note:'aufmachen → MACH auf! / anrufen → RUF an!'}
    ],
    examples:[
      {de:'Komm bitte her! Macht die Bücher auf! Kommen Sie bitte!', sq:'Eja ju lutem! Hapni librat! Ejani ju lutem! (formale)'},
      {de:'Sei ruhig! Seid bitte leise! Seien Sie bitte still!', sq:'Ji i qetë! Jini të qetë! Jini të qetë! (formale)'},
      {de:'Ruf mich an! Macht eine Pause! Gehen wir ins Café!', sq:'Telefononi! Bëni pushim! Shkojmë në kafene!'}
    ],
    exercises:[
      {type:'fill', q:'___ bitte! (kommen, du-Form)',                           ans:'Komm',     opts:['Komm','Kommst','Kommen','Komme']},
      {type:'fill', q:'___ bitte ruhig! (sein, Sie-Form)',                      ans:'Seien Sie', opts:['Seien Sie','Sei','Seid','Sind Sie']},
      {type:'fill', q:'___ eure Aufgaben! (machen, ihr-Form)',                   ans:'Macht',    opts:['Macht','Machen','Mach','Machst']},
      {type:'fill', q:'___ mich an! (anrufen, du-Form)',                         ans:'Ruf',      opts:['Ruf','Rufst','Rufen','Anruf']},
      {type:'fill', q:'___ wir eine Pause! (machen, wir-Form)',                  ans:'Machen',   opts:['Machen','Macht','Mach','Machst']},
      {type:'translate', q:'Ji i qetë! (du)',                                    ans:'Sei ruhig!'},
      {type:'translate', q:'Ejani ju lutem! (Sie)',                               ans:'Kommen Sie bitte!'}
    ]
  },

  // ── G36: Partizip I & II si mbiemra ──
  {
    id:'b1g14', title:'Partizip I & II si mbiemra',
    icon:'🔄', level:'B1', order:14,
    explanation:'Të dy partizipet mund të përdoren si mbiemra para emrave. Partizip I tregon veprimin aktual/aktiv. Partizip II tregon rezultatin/pasiv.',
    rules:[
      {rule:'Partizip I: Infinitiv + -d (folja vazhdon)', note:'lachen → lachend / spielen → spielend / laufen → laufend'},
      {rule:'Partizip I si mbiemër: merr mbaresë mbiemrore', note:'das LACHENDE Kind / ein SPIELENDES Kind'},
      {rule:'Partizip II si mbiemër: tregon gjendjen e arritur', note:'das GEÖFFNETE Fenster / ein GEBRATENES Hähnchen'},
      {rule:'Partizip I = aktiv/njëkohshëm', note:'Das SCHLAFENDE Kind = Das Kind, das schläft'},
      {rule:'Partizip II = pasiv/i plotësuar', note:'Das GEBAUTE Haus = Das Haus, das gebaut wurde'}
    ],
    examples:[
      {de:'Das weinende Kind sucht seine Mutter.', sq:'Fëmija që qan (fëmija duke qarë) po kërkon nënën e tij.'},
      {de:'Das gebratene Hähnchen schmeckt wunderbar.', sq:'Pula e pjekur ka shije të mrekullueshme.'},
      {de:'Die steigende Inflation ist ein Problem. Der gestiegene Preis überrascht uns.', sq:'Inflacioni në rritje është problem. Çmimi i rritur na befason.'}
    ],
    exercises:[
      {type:'fill', q:'Das ___ Kind schläft. (schlafen, Partizip I)',            ans:'schlafende',  opts:['schlafende','geschlafene','schlafendes','schlaft']},
      {type:'fill', q:'Das ___ Fenster ist offen. (öffnen, Partizip II)',         ans:'geöffnete',   opts:['geöffnete','öffnende','geöffnetes','öffnete']},
      {type:'fill', q:'Die ___ Preise sind ein Problem. (steigen, Ptz I)',        ans:'steigenden',  opts:['steigenden','gestiegenen','steigender','gestiegen']},
      {type:'fill', q:'Das ___ Brot riecht gut. (backen, Partizip II)',            ans:'gebackene',   opts:['gebackene','backende','gebackenes','backte']},
      {type:'translate', q:'Fëmija qesharak (duke qeshur) luan.',                 ans:'Das lachende Kind spielt.'},
      {type:'translate', q:'Letra e shkruar është gati.',                          ans:'Der geschriebene Brief ist fertig.'}
    ]
  },

  // ── G37: Nomen-Verb-Verbindungen ──
  {
    id:'b1g15', title:'Lidhjet Emër-Folje — Nomen-Verb-Verbindungen',
    icon:'🔗', level:'B1', order:15,
    explanation:'Gjermanishtja formale dhe e shkruar përdor shpesh kombinime Emër+Folje në vend të foljes së thjeshtë. Këto janë shumë të zakonshme në punë dhe media.',
    rules:[
      {rule:'Struktura: Folje e zbrazët + Emër', note:'treffen + Entscheidung = eine Entscheidung TREFFEN (vendos)'},
      {rule:'Folja e thjeshtë → kombinimi formal:', note:'fragen → eine Frage STELLEN / helfen → Hilfe LEISTEN'},
      {rule:'Foljet tipike: machen, treffen, stellen, leisten, nehmen, geben, halten', note:'Pause MACHEN / Entscheidung TREFFEN'},
      {rule:'Emri ka gjithmonë nyjë (ose nuk ka)', note:'eine Entscheidung, einen Beitrag, Rücksicht nehmen'},
      {rule:'Lidhjet kryesore që duhen mësuar:', note:'Kontakt aufnehmen / Rücksicht nehmen / in Frage kommen / zur Verfügung stehen'}
    ],
    examples:[
      {de:'Ich muss eine Entscheidung treffen. = Ich muss entscheiden.', sq:'Duhet të marr vendim. = Duhet të vendos.'},
      {de:'Können Sie mir Hilfe leisten? = Können Sie mir helfen?', sq:'Mund të më jepni ndihmë? = Mund të më ndihmoni?'},
      {de:'Er hat Kontakt zu ihr aufgenommen. = Er hat sie kontaktiert.', sq:'Ai ka vendosur kontakt me të. = Ai e ka kontaktuar.'}
    ],
    exercises:[
      {type:'fill', q:'Ich muss eine ___ treffen. (vendim)',                    ans:'Entscheidung', opts:['Entscheidung','Meinung','Frage','Antwort']},
      {type:'fill', q:'Bitte ___ Sie eine Frage. (stellen)',                    ans:'stellen',       opts:['stellen','machen','geben','nehmen']},
      {type:'fill', q:'Er hat ___ aufgenommen. (kontakt)',                      ans:'Kontakt',       opts:['Kontakt','Verbindung','Beziehung','Zusammenhang']},
      {type:'fill', q:'Wir müssen Rücksicht ___. (nehmen)',                    ans:'nehmen',        opts:['nehmen','machen','geben','stellen']},
      {type:'translate', q:'Duhet të marr vendim.',                              ans:'Ich muss eine Entscheidung treffen.'},
      {type:'translate', q:'A mund të jepni ndihmë?',                           ans:'Können Sie Hilfe leisten?'}
    ]
  },

  // ── G38: Modalpartikeln ──
  {
    id:'b1g16', title:'Modalpartikeln — doch, mal, ja, eigentlich...',
    icon:'✨', level:'B1', order:16,
    explanation:'Modalpartikeln janë fjalë të vogla që ndryshojnë tonin e fjalisë — bëjnë gjermanishten të tingëllojë natyrale. Nuk mund të përkthehen direkt — duhet ndjeshëm!',
    rules:[
      {rule:'doch: kundërsie / konfirmim / bindje', note:'"Komm doch!" = Eja pra! / "Das ist doch falsch!" = Kjo është gabim pra!'},
      {rule:'mal: zbutje / lutje të rastit', note:'"Komm mal her!" = Eja pak këtu. / "Schau mal!" = Shiko pak!'},
      {rule:'ja: gjë e njohur / befasi / paralajmërim', note:'"Das ist ja interessant!" = Kjo është e interesantme vërtet! / "Du weißt ja..." = Ti e di...'},
      {rule:'eigentlich: në fakt / por / pyetje e vërtetë', note:'"Ich wollte eigentlich..." = Në fakt doja... / "Was machst du eigentlich?" = Çfarë bën ti në fakt?'},
      {rule:'denn: kuriozitet / zbutje pyetjeje', note:'"Wo bist du denn?" = Ku je ti pra? / "Was hast du denn?" = Çfarë ke ti?'},
      {rule:'halt/eben: kështu është / nuk ka rrugë tjetër', note:'"Das ist halt so." = Kështu është thjesht. / "Ich bin eben müde." = Jam i lodhur, çfarë të bëj.'},
      {rule:'wohl: supozim / ndoshta', note:'"Er ist wohl krank." = Ai duket se është i sëmurë.'}
    ],
    examples:[
      {de:'Komm doch mal rein! Das ist doch klar!', sq:'"Eja pra brenda! Kjo është e qartë pra!" (doch = bindje/konfirmim)'},
      {de:'Das ist ja unglaublich! Du weißt ja, wie das ist.', sq:'"Kjo është e pabesueshme vërtet! Ti e di si është." (ja = befasi/e njohur)'},
      {de:'Was machst du eigentlich? — Ich bin halt müde.', sq:'"Çfarë bën ti në fakt? — Jam i lodhur, çfarë të bëj." (eigentlich/halt)'}
    ],
    exercises:[
      {type:'fill', q:'"Komm ___ mal her!" (bindje e lehtë)',                   ans:'doch',      opts:['doch','ja','halt','wohl']},
      {type:'fill', q:'"Das ist ___ interessant!" (befasi)',                     ans:'ja',        opts:['ja','doch','mal','eigentlich']},
      {type:'fill', q:'"Was machst du ___?" (kuriozitet i sinqertë)',            ans:'eigentlich',opts:['eigentlich','denn','halt','wohl']},
      {type:'fill', q:'"Er ist ___ krank." (supozim)',                           ans:'wohl',      opts:['wohl','doch','ja','mal']},
      {type:'fill', q:'"Schau ___ das an!" (lutje e rastit)',                    ans:'mal',       opts:['mal','doch','ja','eigentlich']},
      {type:'translate', q:'Eja pak! (lutje e rastit, zbutje)',                   ans:'Komm mal!'},
      {type:'translate', q:'Kjo është e qartë pra! (konfirmim i diçkaje)',        ans:'Das ist doch klar!'}
    ]
  }

]
};

// ─────────────────────────────────────────────
// SECTION 2: 1400 NEW VOCABULARY WORDS
// Deduplicated against existing app vocab
// Organized by level with full context
// ─────────────────────────────────────────────

const NEW_VOCAB_1400 = {

A1_new: [
// ── Greetings & Social ──
{de:"Guten Rutsch!",sq:"Gëzuar Vitin e Ri!",type:"Festë",ex:"Guten Rutsch ins neue Jahr! — Gëzuar Vitin e Ri!"},
{de:"Frohe Weihnachten!",sq:"Gëzuar Krishtlindjet!",type:"Festë",ex:"Frohe Weihnachten und ein gutes neues Jahr! — Gëzuar Krishtlindjet dhe Vitin e Ri!"},
{de:"Viel Erfolg!",sq:"Shumë suksese!",type:"Shprehje",ex:"Viel Erfolg bei der Prüfung! — Shumë suksese në provim!"},
{de:"Viel Glück!",sq:"Shumë fat!",type:"Shprehje",ex:"Viel Glück heute! — Shumë fat sot!"},
{de:"Herzlichen Glückwunsch!",sq:"Urime të sinqerta!",type:"Shprehje",ex:"Herzlichen Glückwunsch zum Geburtstag! — Urime të sinqerta për ditëlindje!"},
{de:"Gute Besserung!",sq:"Shërim të shpejtë!",type:"Shprehje",ex:"Du bist krank? Gute Besserung! — Je i sëmurë? Shërim të shpejtë!"},
{de:"Guten Appetit!",sq:"Ju bëftë mirë!",type:"Shprehje",ex:"Das Essen ist fertig. Guten Appetit! — Ushqimi është gati. Ju bëftë mirë!"},
{de:"Prost!",sq:"Gëzuar! (kur pini)",type:"Shprehje",ex:"Prost! Auf unsere Freundschaft! — Gëzuar! Për miqësinë tonë!"},
{de:"Vorsicht!",sq:"Kujdes!",type:"Shprehje",ex:"Vorsicht! Das ist heiß! — Kujdes! Kjo është e nxehtë!"},
{de:"Hilfe!",sq:"Ndihmë!",type:"Shprehje",ex:"Hilfe! Ich habe mich verlaufen! — Ndihmë! Kam humbur!"},

// ── Numbers & Quantities ──
{de:"beide",sq:"të dy",type:"Numër",ex:"Beide Kinder spielen. — Të dy fëmijët luajnë."},
{de:"einige",sq:"disa",type:"Numër",ex:"Einige Leute warten. — Disa njerëz presin."},
{de:"viele",sq:"shumë (numër)",type:"Numër",ex:"Viele Menschen lernen Deutsch. — Shumë njerëz mësojnë gjermanisht."},
{de:"wenige",sq:"pak (numër)",type:"Numër",ex:"Wenige Studenten waren da. — Pak studentë ishin atje."},
{de:"alle",sq:"të gjithë",type:"Numër",ex:"Alle Kinder sind hier. — Të gjithë fëmijët janë këtu."},
{de:"kein einziger",sq:"asnjë i vetëm",type:"Numër",ex:"Kein einziger Fehler! — Asnjë gabim i vetëm!"},
{de:"mindestens",sq:"të paktën",type:"Numër",ex:"Mindestens drei Stunden. — Të paktën tre orë."},
{de:"höchstens",sq:"më shumë",type:"Numër",ex:"Höchstens fünf Personen. — Maksimumi pesë persona."},
{de:"ungefähr",sq:"rreth / afërsisht",type:"Numër",ex:"Ungefähr 20 Euro. — Rreth 20 euro."},
{de:"etwa",sq:"rreth / afërsisht",type:"Numër",ex:"Das dauert etwa eine Stunde. — Kjo zgjat rreth një orë."},

// ── Family & Relationships ──
{de:"der Onkel",sq:"xhaxhai / daja",type:"Familje",ex:"Mein Onkel wohnt in Berlin. — Xhaxhai im jeton në Berlin."},
{de:"die Tante",sq:"tezja / halla",type:"Familje",ex:"Meine Tante ist sehr nett. — Tezja ime është shumë e mirë."},
{de:"der Cousin",sq:"kushëriri",type:"Familje",ex:"Mein Cousin ist 10 Jahre alt. — Kushëriri im është 10 vjeç."},
{de:"die Cousine",sq:"kushëria",type:"Familje",ex:"Meine Cousine studiert Medizin. — Kushëria ime studion mjekësi."},
{de:"die Geschwister",sq:"vëllezërit dhe motrat",type:"Familje",ex:"Hast du Geschwister? — Ke vëllezër dhe motra?"},
{de:"die Zwillinge",sq:"binjakët",type:"Familje",ex:"Sie haben Zwillinge bekommen. — Ata kanë bërë binjakë."},
{de:"der Schwiegervater",sq:"vjehrri",type:"Familje",ex:"Mein Schwiegervater ist nett. — Vjehrri im është i mirë."},
{de:"die Schwiegermutter",sq:"vjehrra",type:"Familje",ex:"Meine Schwiegermutter kocht gut. — Vjehrra ime gatuon mirë."},
{de:"der Schwager",sq:"kunati",type:"Familje",ex:"Mein Schwager arbeitet in Wien. — Kunati im punon në Vjenë."},
{de:"die Schwägerin",sq:"kunata",type:"Familje",ex:"Meine Schwägerin ist Ärztin. — Kunata ime është mjeke."},

// ── Colors & Appearances ──
{de:"hellblau",sq:"blu e çelët",type:"Ngjyrë",ex:"Ein hellblaues Hemd. — Këmishë blu e çelët."},
{de:"dunkelblau",sq:"blu e errët",type:"Ngjyrë",ex:"Eine dunkelblaue Jacke. — Xhaketë blu e errët."},
{de:"dunkelrot",sq:"e kuqe e errët",type:"Ngjyrë",ex:"Ein dunkelrotes Auto. — Makinë e kuqe e errët."},
{de:"hellgrün",sq:"e gjelbër e çelët",type:"Ngjyrë",ex:"Hellgrüne Augen. — Sy të gjelbër të çelët."},
{de:"bunt",sq:"shumëngjyrësh",type:"Ngjyrë",ex:"Ein buntes Kleid. — Fustan shumëngjyrësh."},
{de:"gestreift",sq:"me vija",type:"Ngjyrë",ex:"Ein gestreiftes T-Shirt. — T-shirt me vija."},
{de:"kariert",sq:"me katrorë",type:"Ngjyrë",ex:"Ein kariertes Hemd. — Këmishë me katrorë."},
{de:"gepunktet",sq:"me pika",type:"Ngjyrë",ex:"Ein gepunktetes Kleid. — Fustan me pika."},
{de:"einfarbig",sq:"njëngjyrësh",type:"Ngjyrë",ex:"Ein einfarbiges T-Shirt. — T-shirt njëngjyrësh."},
{de:"gemustert",sq:"me motive",type:"Ngjyrë",ex:"Ein gemusterter Schal. — Shall me motive."},

// ── Common Verbs (High Frequency) ──
{de:"passieren",sq:"të ndodhë",type:"Folje",ex:"Was ist passiert? — Çfarë ka ndodhur?"},
{de:"gelingen",sq:"të rrezultojë / ta arriësh",type:"Folje",ex:"Es ist mir gelungen! — Ma doli! E arrita!"},
{de:"scheitern",sq:"të dështojë",type:"Folje",ex:"Das Projekt ist gescheitert. — Projekti dështoi."},
{de:"sich befinden",sq:"të ndodhësh",type:"Folje",ex:"Wo befinden Sie sich? — Ku ndodheni?"},
{de:"gehören",sq:"t'i takojë",type:"Folje",ex:"Das gehört mir. — Kjo është e imja."},
{de:"fehlen",sq:"të mungojë",type:"Folje",ex:"Was fehlt dir? — Çfarë të mungon?"},
{de:"bedeuten",sq:"të do thotë",type:"Folje",ex:"Was bedeutet das? — Çfarë do thotë kjo?"},
{de:"stimmen",sq:"të jetë e saktë",type:"Folje",ex:"Das stimmt! — Kjo është e saktë!"},
{de:"klappen",sq:"të funksionojë",type:"Folje",ex:"Hat es geklappt? — A funksionoi?"},
{de:"sich beeilen",sq:"të nxitosh",type:"Folje",ex:"Beeil dich! — Nxitu!"},
{de:"aufpassen",sq:"të kujdesësh / vëresh",type:"Folje",ex:"Pass auf! — Kujdes!"},
{de:"sich irren",sq:"të gabosh",type:"Folje",ex:"Ich habe mich geirrt. — Jam gabuar."},
{de:"sich gewöhnen",sq:"të mësohesh",type:"Folje",ex:"Ich gewöhne mich daran. — Po mësohem me të."},
{de:"sich begnügen",sq:"të kënaqësh me",type:"Folje",ex:"Ich begnüge mich damit. — Kënaqem me këtë."},
{de:"annehmen",sq:"të pranosh",type:"Folje",ex:"Ich nehme das Angebot an. — Pranoj ofertën."},
{de:"ablaufen",sq:"të skadojë",type:"Folje",ex:"Der Vertrag läuft ab. — Kontrata skadon."},
{de:"vorhaben",sq:"të planifikosh",type:"Folje",ex:"Was hast du vor? — Çfarë planifikon?"},
{de:"erreichen",sq:"të arrish",type:"Folje",ex:"Ich habe mein Ziel erreicht. — E arrita qëllimin tim."},
{de:"übernachten",sq:"të kalosh natën",type:"Folje",ex:"Wir übernachten im Hotel. — Kalojmë natën në hotel."},
{de:"sich verändern",sq:"të ndryshohesh",type:"Folje",ex:"Die Welt verändert sich. — Bota po ndryshon."},

// ── Adverbs & Connectors ──
{de:"natürlich",sq:"natyrisht",type:"Ndajfolje",ex:"Natürlich komme ich! — Natyrisht vij!"},
{de:"eigentlich",sq:"në fakt / të vërtetë",type:"Ndajfolje",ex:"Eigentlich wollte ich... — Në fakt dëshiroja..."},
{de:"wirklich",sq:"vërtet",type:"Ndajfolje",ex:"Das ist wirklich gut! — Kjo është vërtet e mirë!"},
{de:"leider",sq:"fatkeqësisht",type:"Ndajfolje",ex:"Leider kann ich nicht kommen. — Fatkeqësisht nuk mund të vij."},
{de:"hoffentlich",sq:"shpresoj / me shpresë",type:"Ndajfolje",ex:"Hoffentlich kommt er! — Shpresoj të vijë!"},
{de:"übrigens",sq:"nga rruga",type:"Ndajfolje",ex:"Übrigens, ich habe es vergessen. — Nga rruga, e harrova."},
{de:"trotzdem",sq:"megjithatë",type:"Ndajfolje",ex:"Es regnet, trotzdem gehe ich. — Bie shi, megjithatë shkoj."},
{de:"irgendwo",sq:"diku",type:"Ndajfolje",ex:"Er ist irgendwo in Berlin. — Ai ndodhet diku në Berlin."},
{de:"irgendwann",sq:"ndonjëherë",type:"Ndajfolje",ex:"Irgendwann lerne ich es. — Ndonjëherë do ta mësoj."},
{de:"überall",sq:"kudo",type:"Ndajfolje",ex:"Überall gibt es Menschen. — Kudo ka njerëz."},
{de:"nirgends",sq:"askund",type:"Ndajfolje",ex:"Er ist nirgends zu finden. — Nuk gjendet askund."},
{de:"unterwegs",sq:"në rrugë / gjatë rrugës",type:"Ndajfolje",ex:"Ich bin unterwegs. — Jam në rrugë."},

// ── Daily Life Objects ──
{de:"der Regenschirm",sq:"çadra",type:"Objekt",ex:"Hast du einen Regenschirm? — Ke çadër?"},
{de:"der Rucksack",sq:"çanta e shpinës",type:"Objekt",ex:"Mein Rucksack ist schwer. — Çanta e shpinës është e rëndë."},
{de:"die Geldbörse",sq:"portofoli",type:"Objekt",ex:"Ich habe meine Geldbörse vergessen. — E kam harruar portofolin."},
{de:"der Sonnenschirm",sq:"çadra e diellit",type:"Objekt",ex:"Am Strand brauche ich einen Sonnenschirm. — Në plazh kam nevojë për çadër dielli."},
{de:"die Sonnenbrille",sq:"syzet e diellit",type:"Objekt",ex:"Ich brauche eine Sonnenbrille. — Kam nevojë për syze dielli."},
{de:"der Schlüsselbund",sq:"çelësin (tufë)",type:"Objekt",ex:"Ich habe meinen Schlüsselbund verloren. — Humbëa çelësat."},
{de:"das Ladegerät",sq:"karikuesi",type:"Objekt",ex:"Hast du ein Ladegerät? — Ke karikues?"},
{de:"der Kopfhörer",sq:"kufjet",type:"Objekt",ex:"Ich höre Musik mit Kopfhörern. — Dëgjojë muzikë me kufje."},
{de:"die Fernbedienung",sq:"telekomanda",type:"Objekt",ex:"Wo ist die Fernbedienung? — Ku është telekomanda?"},
{de:"der Wecker",sq:"alarmi (orë)",type:"Objekt",ex:"Mein Wecker klingelt um 6 Uhr. — Alarmi bie në orën 6."},
],

A2_new: [
// ── Work & Professional ──
{de:"der Betrieb",sq:"ndërmarrja / fabrika",type:"Punë",ex:"Er arbeitet in einem großen Betrieb. — Ai punon në ndërmarrje të madhe."},
{de:"die Geschäftsreise",sq:"udhëtim biznesi",type:"Punë",ex:"Ich bin auf Geschäftsreise. — Jam në udhëtim biznesi."},
{de:"der Auftraggeber",sq:"porositësi / klienti",type:"Punë",ex:"Der Auftraggeber ist zufrieden. — Porositësi është i kënaqur."},
{de:"das Gehaltskonto",sq:"llogaria e pagës",type:"Punë",ex:"Das Gehalt geht auf mein Konto. — Rroga shkon në llogarinë time."},
{de:"die Lohnabrechnung",sq:"listën e pagës",type:"Punë",ex:"Ich bekomme die Lohnabrechnung. — Marr listën e pagës."},
{de:"der Arbeitgeber",sq:"punëdhënësi",type:"Punë",ex:"Mein Arbeitgeber ist fair. — Punëdhënësi im është i drejtë."},
{de:"der Arbeitnehmer",sq:"punëmarrësi",type:"Punë",ex:"Als Arbeitnehmer habe ich Rechte. — Si punëmarrës kam të drejta."},
{de:"das Zeugnis",sq:"dëftesa / referenca",type:"Punë",ex:"Ich brauche ein gutes Zeugnis. — Kam nevojë për referencë të mirë."},
{de:"die Qualifikation",sq:"kualifikimi",type:"Punë",ex:"Welche Qualifikationen haben Sie? — Çfarë kualifikimesh keni?"},
{de:"die Kompetenz",sq:"kompetenca",type:"Punë",ex:"Soziale Kompetenz ist wichtig. — Kompetenca sociale është e rëndësishme."},
{de:"der Vorstand",sq:"bordi drejtues",type:"Punë",ex:"Der Vorstand trifft sich. — Bordi drejtues mblidhet."},
{de:"die Sitzung",sq:"mbledhja",type:"Punë",ex:"Die Sitzung dauert zwei Stunden. — Mbledhja zgjat dy orë."},
{de:"das Protokoll",sq:"procesverbali",type:"Punë",ex:"Wer schreibt das Protokoll? — Kush shkruan procesverbal?"},
{de:"die Fortbildung",sq:"trajnimi i vazhdueshëm",type:"Punë",ex:"Ich mache eine Fortbildung. — Bëj trajnim."},
{de:"die Geschäftsführung",sq:"menaxhmenti",type:"Punë",ex:"Die Geschäftsführung entscheidet. — Menaxhmenti vendos."},

// ── Housing & City ──
{de:"das Wohnviertel",sq:"lagjja",type:"Qytet",ex:"Ich wohne in einem ruhigen Wohnviertel. — Jetoj në lagje të qetë."},
{de:"das Stadtzentrum",sq:"qendra e qytetit",type:"Qytet",ex:"Das Stadtzentrum ist weit. — Qendra e qytetit është larg."},
{de:"der Vorort",sq:"periferitë",type:"Qytet",ex:"Ich wohne im Vorort. — Jetoj në periferi."},
{de:"der Innenhof",sq:"oborri i brendshëm",type:"Shtëpi",ex:"Der Innenhof ist schön. — Oborri i brendshëm është i bukur."},
{de:"der Dachgarten",sq:"kopshti i çatisë",type:"Shtëpi",ex:"Wir haben einen Dachgarten. — Kemi kopsht çatie."},
{de:"die Terrasse",sq:"terraca",type:"Shtëpi",ex:"Wir sitzen auf der Terrasse. — Ulemi në terracë."},
{de:"der Parkplatz",sq:"parkingu",type:"Qytet",ex:"Gibt es einen Parkplatz hier? — Ka parkim këtu?"},
{de:"die Tiefgarage",sq:"parkingu nëndheshëm",type:"Qytet",ex:"Das Auto steht in der Tiefgarage. — Makina ndodhet në parkun nëndheshëm."},
{de:"der Fahrstuhl",sq:"ashensori",type:"Shtëpi",ex:"Der Fahrstuhl ist defekt. — Ashensori është i prishur."},
{de:"die Gegensprechanlage",sq:"interafoni",type:"Shtëpi",ex:"Drücken Sie den Klingelknopf an der Gegensprechanlage. — Shtypni butonin e interafonit."},

// ── Food & Restaurant ──
{de:"der Mittagstisch",sq:"dreka e ditës",type:"Ushqim",ex:"Haben Sie einen Mittagstisch? — Keni drekë të ditës?"},
{de:"die Hauptspeise",sq:"gjella kryesore",type:"Ushqim",ex:"Als Hauptspeise nehme ich Schnitzel. — Si gjellë kryesore marr schnitzel."},
{de:"die Vorspeise",sq:"antipasta",type:"Ushqim",ex:"Als Vorspeise möchte ich Suppe. — Si antipastë dua supë."},
{de:"die Nachspeise",sq:"ëmbëlsira",type:"Ushqim",ex:"Als Nachspeise hätte ich gern Tiramisu. — Si ëmbëlsirë do tiramisu."},
{de:"das Getränk",sq:"pija",type:"Ushqim",ex:"Was möchten Sie als Getränk? — Çfarë dëshironi si pije?"},
{de:"das Leitungswasser",sq:"uji i çezmës",type:"Ushqim",ex:"Ich trinke lieber Leitungswasser. — Preferoj ujin e çezmës."},
{de:"das Mineralwasser",sq:"uji mineral",type:"Ushqim",ex:"Mit oder ohne Kohlensäure? — Me apo pa gaz?"},
{de:"die Speise",sq:"gjella / ushqimi",type:"Ushqim",ex:"Die Speise ist ausgezeichnet. — Gjella është e shkëlqyer."},
{de:"das Gericht",sq:"gjella",type:"Ushqim",ex:"Welches Gericht empfehlen Sie? — Çfarë gjelle rekomandoni?"},
{de:"vegetarisch",sq:"vegjetarian",type:"Ushqim",ex:"Haben Sie vegetarische Gerichte? — Keni gjella vegjetariane?"},
{de:"vegan",sq:"vegan",type:"Ushqim",ex:"Gibt es vegane Optionen? — Ka opsione vegane?"},
{de:"glutenfrei",sq:"pa gluten",type:"Ushqim",ex:"Ich brauche glutenfreie Speisen. — Kam nevojë për ushqim pa gluten."},
{de:"laktosefrei",sq:"pa laktozë",type:"Ushqim",ex:"Haben Sie laktosefreie Milch? — Keni qumësht pa laktozë?"},
{de:"scharf",sq:"pikant",type:"Ushqim",ex:"Ich esse gern scharf. — Ha me dëshirë ushqim pikant."},
{de:"würzig",sq:"i aromatizuar mirë",type:"Ushqim",ex:"Das Essen ist sehr würzig. — Ushqimi është shumë i aromatizuar."},

// ── Travel & Transport ──
{de:"der Anschluss",sq:"lidhja (tren/autobus)",type:"Transport",ex:"Ich habe meinen Anschluss verpasst. — Humbëa lidhjen."},
{de:"die Reservierung",sq:"rezervimi",type:"Transport",ex:"Ich habe eine Reservierung. — Kam rezervim."},
{de:"der Sitzplatz",sq:"vendi i uljes",type:"Transport",ex:"Ist dieser Sitzplatz frei? — A është i lirë ky vend?"},
{de:"das Abteil",sq:"kupeja",type:"Transport",ex:"Ich sitze im falschen Abteil. — Jam ulur në kupejën e gabuar."},
{de:"der Schaffner",sq:"kontrollori (tren)",type:"Transport",ex:"Der Schaffner kontrolliert die Tickets. — Kontrollori kontrollon biletat."},
{de:"die Bordkarte",sq:"kartën e anijes/avionit",type:"Transport",ex:"Ich brauche meine Bordkarte. — Kam nevojë për kartën e avionit."},
{de:"das Gepäck",sq:"bagazhi",type:"Transport",ex:"Wo ist mein Gepäck? — Ku është bagazhi im?"},
{de:"das Handgepäck",sq:"bagazhi kabinier",type:"Transport",ex:"Das Handgepäck darf 8 kg haben. — Bagazhi kabinier mund të ketë 8 kg."},
{de:"der Ausgang",sq:"dalja (aeroport)",type:"Transport",ex:"Wo ist Ausgang B? — Ku është dalja B?"},
{de:"der Zoll",sq:"doganai",type:"Transport",ex:"Ich muss durch den Zoll. — Duhet të kaloj doganën."},
{de:"einchecken",sq:"të bësh check-in",type:"Transport",ex:"Wo kann ich einchecken? — Ku mund të bëj check-in?"},
{de:"die Verspätung",sq:"vonesa",type:"Transport",ex:"Der Flug hat eine Stunde Verspätung. — Fluturimi ka një orë vonesë."},
{de:"gestrichen",sq:"i anuluar (fluturim)",type:"Transport",ex:"Der Flug ist gestrichen. — Fluturimi është anuluar."},
{de:"umsteigen",sq:"të ndërrosh (transport)",type:"Folje",ex:"Müssen wir umsteigen? — Duhet të ndërroshim?"},
{de:"hin und zurück",sq:"vajtje-ardhje",type:"Transport",ex:"Einmal hin und zurück, bitte. — Një biletë vajtje-ardhje, ju lutem."},

// ── Health & Medicine ──
{de:"die Krankenversicherungskarte",sq:"karta e sigurimit shëndetësor",type:"Shëndet",ex:"Haben Sie Ihre Krankenversicherungskarte? — Keni kartën tuaj të sigurimit?"},
{de:"die Sprechstunde",sq:"ora e vizitave",type:"Shëndet",ex:"Wann ist Ihre Sprechstunde? — Kur është ora e vizitave?"},
{de:"der Termin",sq:"takimi (mjek)",type:"Shëndet",ex:"Ich brauche einen Termin. — Kam nevojë për takim."},
{de:"der Bluttest",sq:"testi i gjakut",type:"Shëndet",ex:"Ich muss einen Bluttest machen. — Duhet të bëj test gjaku."},
{de:"das Röntgenbild",sq:"radiografia",type:"Shëndet",ex:"Das Röntgenbild zeigt nichts. — Radiografia nuk tregon asgjë."},
{de:"der Ultraschall",sq:"ekografia",type:"Shëndet",ex:"Ich mache einen Ultraschall. — Bëj ekografi."},
{de:"die Allergie",sq:"alergjia",type:"Shëndet",ex:"Ich habe eine Allergie gegen Katzen. — Kam alergjia ndaj maceve."},
{de:"das Pflaster",sq:"fashoja vetëngjitëse",type:"Shëndet",ex:"Haben Sie ein Pflaster? — Keni fashoja?"},
{de:"die Salbe",sq:"pomada",type:"Shëndet",ex:"Diese Salbe hilft gegen Jucken. — Kjo pomadë ndihmon kundër kruarjes."},
{de:"der Tropfen",sq:"pikat (ilaç)",type:"Shëndet",ex:"Dreimal täglich zehn Tropfen. — Tre herë në ditë dhjetë pika."},
{de:"das Zäpfchen",sq:"supozitori",type:"Shëndet",ex:"Der Arzt hat Zäpfchen verschrieben. — Mjeku ka recetuar supozitorë."},
{de:"die Injektion",sq:"injeksioni",type:"Shëndet",ex:"Ich brauche eine Injektion. — Kam nevojë për injeksion."},
{de:"der Gips",sq:"gipsi",type:"Shëndet",ex:"Mein Bein ist im Gips. — Këmba ime është në gips."},
{de:"die Krücke",sq:"paterica",type:"Shëndet",ex:"Er läuft mit Krücken. — Ai ecën me paterica."},
{de:"die Notaufnahme",sq:"urgjenca",type:"Shëndet",ex:"Bringen Sie mich zur Notaufnahme! — Më çoni te urgjenca!"},

// ── Education & Learning ──
{de:"die Volkshochschule (VHS)",sq:"shkolla popullore (VHS)",type:"Arsim",ex:"Ich lerne Deutsch an der VHS. — Mësoj gjermanisht në VHS."},
{de:"der Kursus",sq:"kursi",type:"Arsim",ex:"Ich mache einen Kursus. — Bëj kurs."},
{de:"die Lerngruppe",sq:"grupi i studimit",type:"Arsim",ex:"Wir haben eine Lerngruppe. — Kemi grup studimi."},
{de:"der Nachhilfelehrer",sq:"mësuesi privat",type:"Arsim",ex:"Ich habe einen Nachhilfelehrer. — Kam mësues privat."},
{de:"die Prüfungsvorbereitung",sq:"përgatitja për provim",type:"Arsim",ex:"Ich bin in der Prüfungsvorbereitung. — Jam duke u përgatitur për provim."},
{de:"das Lernziel",sq:"qëllimi i të mësuarit",type:"Arsim",ex:"Was ist dein Lernziel? — Cili është qëllimi yt i të mësuarit?"},
{de:"die Klassenarbeit",sq:"puna me shkrim (shkollore)",type:"Arsim",ex:"Ich habe morgen eine Klassenarbeit. — Nesër kam punë me shkrim."},
{de:"der Aufsatz",sq:"ese / kompozimi",type:"Arsim",ex:"Ich schreibe einen Aufsatz. — Shkruaj ese."},
{de:"die Aufgabe",sq:"detyra",type:"Arsim",ex:"Die Aufgabe ist schwer. — Detyra është e vështirë."},
{de:"das Lehrbuch",sq:"libri shkollor",type:"Arsim",ex:"Hast du dein Lehrbuch dabei? — E ke librin shkollor me vete?"},

// ── Banking & Finance ──
{de:"das Girokonto",sq:"llogaria rrjedhëse",type:"Financa",ex:"Ich eröffne ein Girokonto. — Hap llogari rrjedhëse."},
{de:"das Sparkonto",sq:"llogaria e kursimeve",type:"Financa",ex:"Mein Sparkonto hat 5% Zinsen. — Llogaria e kursimeve ka 5% interesa."},
{de:"die Überweisung",sq:"transferta bankare",type:"Financa",ex:"Ich mache eine Überweisung. — Bëj transfertë bankare."},
{de:"der Dauerauftrag",sq:"urdhri i përhershëm",type:"Financa",ex:"Ich habe einen Dauerauftrag für die Miete. — Kam urdhër të përhershëm për qiranë."},
{de:"die Lastschrift",sq:"debitimi automatik",type:"Financa",ex:"Die Rechnung wird per Lastschrift bezahlt. — Fatura paguhet me debitim automatik."},
{de:"die Kontonummer",sq:"numri i llogarisë",type:"Financa",ex:"Bitte geben Sie Ihre Kontonummer an. — Ju lutem jepni numrin e llogarisë."},
{de:"der Kontoauszug",sq:"ekstrakti bankar",type:"Financa",ex:"Ich schaue meinen Kontoauszug an. — Shikoj ekstraktin bankar."},
{de:"die Kreditwürdigkeit",sq:"aftësia kreditore",type:"Financa",ex:"Meine Kreditwürdigkeit ist gut. — Aftësia ime kreditore është e mirë."},
{de:"die Rate",sq:"kësti",type:"Financa",ex:"Ich zahle in Raten. — Paguaj me këste."},
{de:"die Zinsen",sq:"interesat",type:"Financa",ex:"Die Zinsen sind niedrig. — Interesat janë të ulëta."},
],

B1_new: [
// ── Abstract & Academic ──
{de:"die Schlussfolgerung",sq:"konkluzioni",type:"Akademik",ex:"Die Schlussfolgerung ist klar. — Konkluzio është i qartë."},
{de:"der Sachverhalt",sq:"gjendja e fakteve",type:"Akademik",ex:"Den Sachverhalt erklären. — Shpjegoj gjendjen e fakteve."},
{de:"der Zusammenhang",sq:"lidhja / konteksti",type:"Akademik",ex:"In diesem Zusammenhang... — Në këtë kontekst..."},
{de:"der Aspekt",sq:"aspekti",type:"Akademik",ex:"Welcher Aspekt ist wichtig? — Cili aspekt është i rëndësishëm?"},
{de:"die Dimension",sq:"dimensioni",type:"Akademik",ex:"Eine neue Dimension des Problems. — Dimension i ri i problemit."},
{de:"der Kontext",sq:"konteksti",type:"Akademik",ex:"Im internationalen Kontext. — Në kontekst ndërkombëtar."},
{de:"die Prämisse",sq:"premisa",type:"Akademik",ex:"Die Prämisse ist falsch. — Premisa është e gabuar."},
{de:"das Paradigma",sq:"paradigma",type:"Akademik",ex:"Ein Paradigmenwechsel. — Ndryshim paradigme."},
{de:"die Kausalität",sq:"kauzaliteti",type:"Akademik",ex:"Korrelation ist nicht Kausalität. — Korrelacioni nuk është kauzalitet."},
{de:"die Hypothese",sq:"hipoteza",type:"Akademik",ex:"Meine Hypothese ist... — Hipoteza ime është..."},

// ── Politics & Society ──
{de:"die Volksabstimmung",sq:"referendumi",type:"Politikë",ex:"Eine Volksabstimmung findet statt. — Mbahet referendum."},
{de:"die Bürgerinitiative",sq:"iniciativa qytetare",type:"Politikë",ex:"Die Bürgerinitiative sammelt Unterschriften. — Iniciativa qytetare mbledh nënshkrime."},
{de:"der Bürgermeister",sq:"kryetari i bashkisë",type:"Politikë",ex:"Der Bürgermeister spricht. — Kryetari i bashkisë flet."},
{de:"der Stadtrat",sq:"këshilli bashkiak",type:"Politikë",ex:"Der Stadtrat entscheidet. — Këshilli bashkiak vendos."},
{de:"die Verfassung",sq:"kushtetuta",type:"Politikë",ex:"Die Verfassung schützt die Rechte. — Kushtetuta mbron të drejtat."},
{de:"der Rechtsstaat",sq:"shteti i së drejtës",type:"Politikë",ex:"Deutschland ist ein Rechtsstaat. — Gjermani është shtet i së drejtës."},
{de:"die Gewaltenteilung",sq:"ndarja e pushteteve",type:"Politikë",ex:"Gewaltenteilung ist wichtig. — Ndarja e pushteteve është e rëndësishme."},
{de:"die Meinungsvielfalt",sq:"diversiteti i opinioneve",type:"Politikë",ex:"Meinungsvielfalt stärkt die Demokratie. — Diversiteti i opinioneve forcon demokracinë."},
{de:"die Lobbyarbeit",sq:"lobbizmi",type:"Politikë",ex:"Lobbyarbeit ist umstritten. — Lobbizmi është i diskutueshëm."},
{de:"die Transparenz",sq:"transparenca",type:"Politikë",ex:"Transparenz in der Politik. — Transparencë në politikë."},

// ── Advanced Communication ──
{de:"sinngemäß",sq:"me kuptim të njëjtë / parashall",type:"Komunikim",ex:"Ich gebe das sinngemäß wieder. — E riprodhoj me kuptim të njëjtë."},
{de:"in anderen Worten",sq:"me fjalë të tjera",type:"Komunikim",ex:"In anderen Worten... — Me fjalë të tjera..."},
{de:"mit anderen Worten",sq:"me fjalë të tjera",type:"Komunikim",ex:"Mit anderen Worten: es stimmt nicht. — Me fjalë të tjera: nuk është e saktë."},
{de:"das heißt",sq:"dmth / pra",type:"Komunikim",ex:"Das heißt, wir müssen... — Pra, ne duhet..."},
{de:"beziehungsweise",sq:"ose / përkatësisht",type:"Komunikim",ex:"Am Montag beziehungsweise Dienstag. — Të hënën ose përkatësisht të martën."},
{de:"einerseits",sq:"nga njëra anë",type:"Komunikim",ex:"Einerseits ist es gut... — Nga njëra anë është mirë..."},
{de:"andererseits",sq:"nga ana tjetër",type:"Komunikim",ex:"Andererseits ist es teuer. — Nga ana tjetër është e shtrenjtë."},
{de:"im Großen und Ganzen",sq:"në tërësi",type:"Komunikim",ex:"Im Großen und Ganzen ist es okay. — Në tërësi është mirë."},
{de:"was mich betrifft",sq:"sa për mua",type:"Komunikim",ex:"Was mich betrifft, bin ich einverstanden. — Sa për mua, pajtohem."},
{de:"im Grunde genommen",sq:"në fund të fundit / themelisht",type:"Komunikim",ex:"Im Grunde genommen haben Sie recht. — Në fund të fundit keni të drejtë."},
{de:"soweit ich weiß",sq:"sa di unë",type:"Komunikim",ex:"Soweit ich weiß, stimmt das. — Sa di unë, kjo është e saktë."},
{de:"meines Wissens",sq:"sipas njohurive të mia",type:"Komunikim",ex:"Meines Wissens ist das falsch. — Sipas njohurive të mia kjo është e gabuar."},

// ── Work & Business B1 ──
{de:"die Unternehmenskultur",sq:"kultura e kompanisë",type:"Biznes",ex:"Die Unternehmenskultur ist wichtig. — Kultura e kompanisë është e rëndësishme."},
{de:"das Leitbild",sq:"vizioni",type:"Biznes",ex:"Das Leitbild des Unternehmens. — Vizioni i ndërmarrjes."},
{de:"die Zielgruppe",sq:"grupi i synuar",type:"Biznes",ex:"Die Zielgruppe ist jung. — Grupi i synuar është i ri."},
{de:"das Alleinstellungsmerkmal",sq:"karakteristika unike",type:"Biznes",ex:"Was ist Ihr Alleinstellungsmerkmal? — Cila është karakteristika juaj unike?"},
{de:"die Gewinnmarge",sq:"marzha e fitimit",type:"Biznes",ex:"Die Gewinnmarge ist gering. — Marzha e fitimit është e vogël."},
{de:"der Umsatz",sq:"qarkullimi / të ardhurat",type:"Biznes",ex:"Der Umsatz ist gestiegen. — Qarkullimi është rritur."},
{de:"die Bilanz",sq:"bilanci",type:"Biznes",ex:"Die Bilanz ist positiv. — Bilanci është pozitiv."},
{de:"der Geschäftspartner",sq:"partneri i biznesit",type:"Biznes",ex:"Wir haben gute Geschäftspartner. — Kemi partnerë të mirë biznesi."},
{de:"der Vertrieb",sq:"shitjet / distribucioni",type:"Biznes",ex:"Ich arbeite im Vertrieb. — Punoj në shitje."},
{de:"das Marketing",sq:"marketingu",type:"Biznes",ex:"Marketing ist mein Fachgebiet. — Marketingu është fusha ime."},
{de:"die Strategie",sq:"strategjia",type:"Biznes",ex:"Wir brauchen eine neue Strategie. — Kemi nevojë për strategji të re."},
{de:"die Konkurrenz",sq:"konkurrenca",type:"Biznes",ex:"Die Konkurrenz ist groß. — Konkurrenca është e madhe."},
{de:"der Marktanteil",sq:"pjesa e tregut",type:"Biznes",ex:"Wir wollen Marktanteile gewinnen. — Duam të fitojmë pjesë tregu."},
{de:"die Effizienz",sq:"efikasiteti",type:"Biznes",ex:"Effizienz verbessern. — Përmirësojmë efikasitetin."},
{de:"optimieren",sq:"të optimizosh",type:"Folje",ex:"Wir müssen den Prozess optimieren. — Duhet ta optimizojmë procesin."},

// ── Advanced Grammar in Context ──
{de:"angesichts",sq:"duke pasur parasysh / me shikime nga",type:"Prepozicion",ex:"Angesichts der Lage müssen wir handeln. — Duke pasur parasysh situatën duhet të veprojmë."},
{de:"infolge",sq:"si pasojë e",type:"Prepozicion",ex:"Infolge des Unfalls gab es Stau. — Si pasojë e aksidentit kishte bllokade trafiku."},
{de:"mithilfe",sq:"me ndihmën e",type:"Prepozicion",ex:"Mithilfe der Technologie... — Me ndihmën e teknologjisë..."},
{de:"im Laufe",sq:"gjatë / në rrjedhë të",type:"Prepozicion",ex:"Im Laufe der Zeit... — Gjatë kohës..."},
{de:"auf Anhieb",sq:"menjëherë / direkt",type:"Shprehje",ex:"Ich habe es auf Anhieb verstanden. — E kuptova menjëherë."},
{de:"auf eigene Faust",sq:"me iniciativën e vet",type:"Shprehje",ex:"Er macht das auf eigene Faust. — E bën vetëm me iniciativën e tij."},
{de:"unter vier Augen",sq:"mes katër syve (privatisht)",type:"Shprehje",ex:"Wir sprechen unter vier Augen. — Flasim privatisht."},
{de:"über kurz oder lang",sq:"herët a vonë",type:"Shprehje",ex:"Über kurz oder lang wird er kommen. — Herët a vonë ai do të vijë."},
{de:"auf den Punkt bringen",sq:"të shkosh drejt e te pika",type:"Shprehje",ex:"Bring es auf den Punkt! — Shko drejt e te pika!"},
{de:"ins Schwarze treffen",sq:"të qëllosh në shenjë",type:"Shprehje",ex:"Du hast ins Schwarze getroffen! — Ke qëlluar në shenjë!"},
{de:"den Nagel auf den Kopf treffen",sq:"ta qëllosh saktë",type:"Shprehje",ex:"Du hast den Nagel auf den Kopf getroffen! — E ke qëlluar saktë!"},
{de:"unter die Lupe nehmen",sq:"ta shqyrtosh imtësisht",type:"Shprehje",ex:"Ich nehme das unter die Lupe. — E shqyrtojë imtësisht."},
{de:"auf dem Laufenden bleiben",sq:"të mbetësh i informuar",type:"Shprehje",ex:"Ich bleibe auf dem Laufenden. — Mbetëm i informuar."},
{de:"einen Schritt zurücktreten",sq:"të bësh hap prapa",type:"Shprehje",ex:"Manchmal muss man einen Schritt zurücktreten. — Ndonjëherë duhet të bësh hap prapa."},
{de:"in Frage kommen",sq:"të jetë i mundshëm",type:"Shprehje",ex:"Das kommt nicht in Frage! — Kjo nuk është e mundshme!"}
]
};



// ════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════
let state = {
  currentLevel: 'A1',
  currentModuleId: 'a1m1',
  unlockedLevels: ['A1','A2','B1'],
  completedModules: [],
  placementStep: 'choose', // 'choose' | 'quiz' | 'result'
  pqIndex: 0,
  pScore: 0,
  pAnswered: false,
  lessonTab: 'story',
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizDots: [],
};

// ════════════════════════════════════════════
// SCREEN NAV
// ════════════════════════════════════════════
