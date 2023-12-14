let partidas_map=new Map();


partidas_map.set("/!*partida|Rio de Janeiro_*!/intermedio_1|Cabinda","rio1_cabinda");
partidas_map.set("intermedio_1|Cabinda_destino|Baía","cabinda_baia");
partidas_map.set("/!*partida|Rio de Janeiro_*!/intermedio_1|Luanda","rio1_luanda2");
partidas_map.set("partida|Luanda_destino|Rio de Janeiro","luanda1_rio3");//procurar uma solução para estes 2
partidas_map.set("intermedio_1|Luanda_intermedio_2|Rio de Janeiro","luanda2_rio2");
partidas_map.set("intermedio_1|Luanda_destino|Rio de Janeiro","luanda2_rio3");
partidas_map.set("/!*partida|Rio de Janeiro_*!/intermedio_1|Benguela","rio1_benguela");
partidas_map.set("intermedio_1|Benguela_destino|Rio de Janeiro","benguela_rio3");
partidas_map.set("intermedio_1|Cabinda_destino|Rio de Janeiro","cabinda_rio3");
partidas_map.set("/!*partida|Pernambuco_*!/intermedio_1|Luanda","pernambuco1_luanda2");
partidas_map.set("/!*partida|Pernambuco_*!/intermedio_1|Badagry ","pernambuco1_badagry");
partidas_map.set("intermedio_1|Badagry _intermedio_2|Freetown","badagry_freetown");
partidas_map.set("intermedio_2|Freetown_destino|Pernambuco","freetown_pernambuco2");
partidas_map.set("/!*partida|Rio de Janeiro_*!/intermedio_1|Ambriz","rio1_ambriz");
partidas_map.set("intermedio_1|Ambriz_destino|Rio de Janeiro","ambriz_rio3");
partidas_map.set("intermedio_1|Luanda_destino|Pernambuco","luanda2_pernambuco2");
partidas_map.set("/!*partida|Pernambuco_*!/intermedio_1|Ambriz","pernambuco1_ambriz");
partidas_map.set("intermedio_1|Ambriz_destino|Maranhão","ambriz_maranhao");
partidas_map.set("intermedio_2|Rio de Janeiro_destino|Rio de Janeiro","rio2_rio3");
partidas_map.set("/!*partida|Pernambuco_*!/intermedio_1|Ambriz ","pernambuco1_ambriz");
partidas_map.set("intermedio_1|Ambriz _intermedio_2|Rio de Janeiro","ambriz_rio2");
partidas_map.set("intermedio_2|Rio de Janeiro_destino|Pernambuco","rio2_pernambuco2");
partidas_map.set("/!*partida|Rio de Janeiro_*!/intermedio_1|Lourenço Marques","rio1_marques");
partidas_map.set("intermedio_1|Lourenço Marques_destino|Rio de Janeiro","marques_rio3");

/*
partidas_map.set("partida|Rio de Janeiro_intermedio_1|Cabinda","rio1_cabinda");
partidas_map.set("intermedio_1|Cabinda_destino|Baía","cabinda_baia");
partidas_map.set("partida|Rio de Janeiro_intermedio_1|Luanda","rio1_luanda2");
partidas_map.set("partida|Luanda_destino|Rio de Janeiro","luanda1_rio3");//procurar uma solução para estes 2
partidas_map.set("intermedio_1|Luanda_intermedio_2|Rio de Janeiro","luanda2_rio2");
partidas_map.set("intermedio_1|Luanda_destino|Rio de Janeiro","luanda2_rio3");
partidas_map.set("partida|Rio de Janeiro_intermedio_1|Benguela","rio1_benguela");
partidas_map.set("intermedio_1|Benguela_destino|Rio de Janeiro","benguela_rio3");
partidas_map.set("intermedio_1|Cabinda_destino|Rio de Janeiro","cabinda_rio3");
partidas_map.set("partida|Pernambuco_intermedio_1|Luanda","pernambuco1_luanda2");
partidas_map.set("partida|Pernambuco_intermedio_1|Badagry ","pernambuco1_badagry");
partidas_map.set("intermedio_1|Badagry _intermedio_2|Freetown","badagry_freetown");
partidas_map.set("intermedio_2|Freetown_destino|Pernambuco","freetown_pernambuco2");
partidas_map.set("partida|Rio de Janeiro_intermedio_1|Ambriz","rio1_ambriz");
partidas_map.set("intermedio_1|Ambriz_destino|Rio de Janeiro","ambriz_rio3");
partidas_map.set("intermedio_1|Luanda_destino|Pernambuco","luanda2_pernambuco2");
partidas_map.set("partida|Pernambuco_intermedio_1|Ambriz","pernambuco1_ambriz");
partidas_map.set("intermedio_1|Ambriz_destino|Maranhão","ambriz_maranhao");
partidas_map.set("intermedio_2|Rio de Janeiro_destino|Rio de Janeiro","rio2_rio3");
partidas_map.set("partida|Pernambuco_intermedio_1|Ambriz ","pernambuco1_ambriz");
partidas_map.set("intermedio_1|Ambriz _intermedio_2|Rio de Janeiro","ambriz_rio2");
partidas_map.set("intermedio_2|Rio de Janeiro_destino|Pernambuco","rio2_pernambuco2");
partidas_map.set("partida|Rio de Janeiro_intermedio_1|Lourenço Marques","rio1_marques");
partidas_map.set("intermedio_1|Lourenço Marques_destino|Rio de Janeiro","marques_rio3");*/


let object=Array.from(partidas_map).reduce((obj,[key,value])=>{
    obj[key]=value;
    return obj;

},{});

console.log(object);