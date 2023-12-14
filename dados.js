
//DADOS SOBRE DESTINO DA FORTUNA------------------------------------
//criação das bolas dos locais

var pontos_escolas_ex = [
    //NORTE
    {lat:41.27675348213806, long:-7.473818005345157, id:"alijo"}, // Alijó
    {lat:41.26993541955083, long:-8.081381543377775,id:"amarante"}, // Amarante
    {lat:41.844822094478886,long:-8.422537387301832,id:"arcos"}, // Arcos de Valdevez
    {lat:40.931694629116144, long:-8.235608937281777,id:"arouca"}, //O posto de arouca mudou
    {lat:41.16383415460722, long:-8.031546797871716,id:"baiao"}, // Baião
    {lat:41.63569422784684, long:-8.695368855978003,id:"durraes"}, // Tregosa e Durrães
    {lat:41.04035791758591, long:-8.273375141464511,id:"cast_paiva"}, // Castelo de Paiva
    {lat:41.007298020865306,long:-8.642626753558815,id:"espinho"}, // Espinho
    {lat:41.4538397827423, long:-8.169759745966537,id:"fafe"}, // Fafe
    {lat:41.58372135391738, long:-6.529751515341209,id:"vimioso"}, //Vimioso
    {lat:41.13861262479617,long: -8.476037565906738,id:"gondomar"}, // Gondomar
    {lat:41.18645599978867, long:-8.148564538635167,id:"marco"}, //Marco de Canaveses
    {lat:41.339641617202396, long:-6.7187744237909675,id:"mogadouro"}, //Mogadouro
    {lat:40.83829743861792, long:-8.47375123686382,id:"oli_azemeis"}, // Oliveira de Azeméis
    {lat:41.28072389514278, long:-8.506623158466802,id:"paredes"}, // Paredes
    {lat:41.9104810318538, long:-8.561192822111668,id:"pa_coura"}, //Paredes de Coura
    {lat:41.20603697599216, long:-8.287705074985565,id:"penafiel"}, //Penafiel (ainda não encontrei a localização exata)
    {lat:41.434207929757235, long:-8.7642352096025,id:"povoa"}, // Póvoa de Varzim
    {lat:41.26626746061251, long:-7.624968424213737,id:"sabrosa"}, // Sabrosa
    {lat:40.927507059381526, long:-8.54816949707565,id:"santa"}, // Santa Maria da Feira (s/loc. exata)
    {lat:40.90025749887792, long:-8.456050076320452,id:"sao_joao"}, // São João da Madeira (s/loc. exata)
    {lat:41.11717745701181, long:-7.566891219472967,id:"tabuaco"}, // Tabuaço
    {lat:41.21545465622415, long:-8.50502097836972,id:"valongo"}, // Valongo
    {lat:41.35382689855833, long:-8.747253558181976,id:"conde"}, // Vila do Conde
    {lat:41.08186409754861, long:-7.141856784425805,id:"foz_coa"}, // Vila Nova de Foz Côa

    //Centro
    {lat:40.574201095983106, long:-8.447183266745515,id:"agueda"}, // Águeda
    {lat:40.69146344829819, long:-8.4807273,id:"albergaria"}, // Albergaria-a-Velha
    {lat:39.82493381963638, long:-8.382400851305015,id:"alvaiazare"}, //Alvaiázere
    {lat:40.217522676481146, long:-8.053949896069758,id:"arganil"}, // Arganil (s/loc. exata)
    {lat:40.34996198024073, long:-8.590857993445319,id:"cantanhede"}, // Cantanhede
    {lat:40.43825744622295, long:-7.994875560357614,id:"carregal"}, // Carregal do Sal
    {lat:39.81948505894287, long:-7.492412457553502,id:"cas_branco"}, // Castelo Branco
    {lat:40.899682499669, long:-7.931315182076298,id:"daire"}, // Castro Daire
    {lat:40.63437731937786, long:-7.393354874479589,id:"celorico"}, // Celorico da Beira
    {lat:40.111496983111905, long:-8.497661524760382,id:"condeixa"}, // Condeixa-a-Nova
    {lat:40.75565288288559, long:-8.567971698670787,id:"estarreja"}, // Estarreja
    {lat:40.15292478990476, long:-8.857247666627606,id:"figueira"}, // Figueira da Foz
    {lat:40.13882931998871, long:-7.501114601892736,id:"fundao"}, // Fundão
    {lat:40.15483217199485, long:-8.108933732383505,id:"gois"}, // Góis
    {lat:40.11496147149494, long:-8.248464645879322,id:"lousa"}, // Lousã
    {lat:40.17454805071533, long:-8.680424837288069,id:"montemor"}, // Montemor-o-Velho (s/loc. exata)
    {lat:40.717786274480936, long:-8.197671160134789,id:"oli_frades"}, // Oliveira de Frades
    {lat:40.5141131410964, long:-8.492253147708773,id:"oli_bairro"}, // Oliveira do Bairro
    {lat:40.77380737045861, long:-7.0667597035206695,id:"pinhel"}, // Pinhel
    {lat:40.399221612885846, long:-8.126757932532735,id:"comba_dao"}, // Santa Comba Dão (s/loc. exata)
    {lat:39.802191444504, long:-8.095569930101437,id:"serta"}, // Sertã (s/loc. exata)
    {lat:40.36058857145402, long:-8.03007837470379,id:"tabua"}, // Tábua
    {lat:40.5209814614832, long:-8.077540774696683,id:"tondela"}, // Tondela
    {lat:40.723735334095664, long:-8.111574846641675,id:"vouzela"}, // Vouzela

    //Lisboa
    {lat:38.837631079986416, long:-8.864204034118417,id:"alcochete"}, // Alcochete
    {lat:39.09461996640536, long:-9.061488852699277,id:"alenquer"}, // Alenquer
    {lat:38.72836030069945, long:-9.12766040787968,id:"almada"}, // Almada
    {lat:38.984974071710994, long:-9.07591860359907,id:"arruda"}, // Arruda dos Vinhos
    {lat:38.66057996736149, long:-9.01947995299275,id:"barreiro"}, // Barreiro
    {lat:39.35703469849914, long:-8.484162213191917,id:"chamusca"}, // Chamusca
    {lat:38.69624273992771, long:-9.422118431089206,id:"cascais"}, // Cascais
    {lat:39.69313229423191, long:-8.29306270356845,id:"ferreira"}, // Ferreira do Zêzere
    {lat:38.66847038833129, long:-8.8937292616959,id:"moita"}, // Moita (s/loc. exata)
    {lat:38.77294369495684, long:-8.87727950107568,id:"montijo"}, // Montijo
    {lat:38.64374800169508, long:-9.104717204229905,id:"seixal"}, // Seixal
    {lat:38.444184405955525, long:-9.101275200000002,id:"sesimbra"}, // Sesimbra
    {lat:38.52142500354063, long:-8.928598215648437,id:"setubal"}, // Setúbal
    {lat:38.79892026657125, long:-9.38754126438849,id:"sintra"}, // Sintra
    {lat:39.478475440801304, long:-8.542842696581806,id:"torres"}, // Torres Novas

    //Alentejo
    {lat:38.26021469882063, long:-7.9925850901358455,id:"alvito"}, // Alvito
    {lat:38.16782529217511, long:-7.8909024564495045,id:"cuba"}, // Cuba
    {lat:38.64900352030983, long:-8.217377448747895,id:"mont_novo"}, // Montemor-o-Novo (s/loc. exata)
    {lat:38.13684775811373, long:-7.449779159996398,id:"moura"}, // Moura
    {lat:38.01654246097458, long:-8.6953118437303,id:"cacem"}, // Santiago do Cacém

    //Algarve
    {lat:37.09839310015586, long:-8.67349494127345,id:"lagos"}, // Lagos

];
console.log(pontos_escolas_ex);

var hospital = [

    {lat:41.17032998092142, long:-8.589624545832242,id:"hospital"}, // Hospital Conde de Ferreira
];

var pontos_escolas_dem = [
    //Norte
    {lat:41.86335664606371, long:-8.83541339360432,id:"caminha"}, // Caminha
    {lat:41.36599727357564, long:-8.197854558723716,id:"felgueiras"}, // Felgueiras
    {lat:41.237656828319594, long:-8.711450265681469,id:"matosinhos"}, // Matosinhos
    {lat:42.11375854243722, long:-8.260627609536412,id:"melgaco"}, // Melgaço
    {lat:41.82929241638569, long:-7.009138305109186,id:"vinhais"}, // Vinhais
    {lat:41.15683674967291, long:-8.675856099332599,id:"porto"}, //Porto
    {lat:41.57831955346377, long:-8.269012974071277,id:"lanhoso"}, // Póvoa de Lanhoso

    //Centro
    {lat:40.96588053534274, long:-7.260706986966092,id:"meda"}, // Mêda
    {lat:40.35975112379853, long:-7.8581184239235515,id:"oli_hospital"}, // Oliveira do Hospital
    {lat:40.85967252049979, long:-8.626315818412795,id:"ovar"}, // Ovar
    {lat:40.67686098490839, long:-7.694019440491584,id:"penalva"}, // Penalva do Castelo
    {lat:40.76056209420494, long:-8.063919704241687,id:"sao_sul"}, // São Pedro do Sul
    {lat:40.77690169431429, long:-7.351670428276074,id:"trancoso"}, //Trancoso
    {lat:39.677621551967334, long:-8.140671340918738,id:"vila_rei"}, // Vila de Rei
    {lat:40.209920709011776, long:-8.259501284673831,id:"poiares"}, // Vila Nova de Poiares

    //Lisboa
    {lat:38.69651549655333, long:-9.314439973179974,id:"oeiras"}, // Oeiras
    {lat:39.65682749241892, long:-8.576231016337822,id:"ourem"}, // Ourém
    {lat:39.60514767296924, long:-8.40425037968987,id:"tomar"}, // Tomar

    //Alentejo
    {lat:38.37278836021734, long:-8.505899533105888,id:"sal"}, // Alcacer do Sal
    {lat:37.60881884807792, long:-8.624870768645183,id:"odemira"}, // Odemira

    //Algarve
    {lat:37.13836602976285, long:-8.022690294995593,id:"loule"}, // Loulé
];


/*
let textos = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(textos);
console.log(textos);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);*/
