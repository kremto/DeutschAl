// DeutschAL — deutschal.com
// © 2026 Kremtim Selimi

// Grammar Reference Database

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