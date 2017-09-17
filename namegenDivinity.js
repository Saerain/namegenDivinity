function namegenDwarfFemale(){
  var part1 = ["Abi", "Aifric", "Aileas", "Aileen", "Alisa", "Ainsley", "Annag", "Athol", "Barabal", "Beathag", "Beileag", "Beitris", "Caitriona", "Catrina", "Catriona", "Dorige", "Donella", "Ealasa", "Edna", "Effie", "Eilige", "Eleanor", "Emerie", "Enye", "Elspa", "Finella", "Finola", "Fiona", "Glenna", "Griselda", "Innes", "Iona", "Iseabail", "Isla", "Isobel", "Jamina", "Jamie", "Jessie", "Kevy", "Ketha", "Kenna", "Kenina", "Kirstal", "Lileas", "Lillias", "Lusha", "Mairi", "Maisie", "Malina", "Malvina", "Maura", "Moira", "Morna", "Morven", "Moyna", "Moyra", "Mysie", "Peigi", "Rhona", "Rodina", "Saundra", "SEnga", "Seona", "Sheena", "Sheona", "Shaney", "Amanda", "Amarma", "Amaya", "Andis", "Anlin", "Anrima", "Anritte", "Ansten", "Arlina", "Armilla", "Arna", "Arnelda", "Arnelena", "Arnelsa", "Arneren", "Arnerma", "Arnerny", "Arnethera", "Arnevild", "Berly", "Birlina", "Birne", "Birsten", "Birvild", "Breldis", "Bresha", "Brethe", "Brilga", "Brilly", "Bririt", "Brirthe", "Brivild", "Camihild", "Camilga", "Camithe", "Daldis", "Dalena", "Dalla", "Dalthine", "Disne", "Disness", "Disry", "Dorda", "Dorlis", "Dormilla", "Dorny", "Elilena", "Elilla", "Elna", "Elne", "Elnora", "Elrey", "Falda", "Faldis", "Falena", "Farie", "Farma", "Faya", "Ferda", "Ferlie", "Fjorlie", "Fjorrit", "Fjorvild", "Fralene", "Fraren", "Frarie", "Frarit", "Frarny", "Fravild", "Frella", "Frelsa", "Frenda", "Frenlif", "Frenlis", "Frenmilla", "Frerie", "Frethera", "Frewa", "Geiyah", "Gilnora", "Gilvil", "Gjalsa", "Gjarine", "Gjathe", "Grarthe", "Grendis", "Grenne", "Grenny", "Grenritte", "Grenry", "Grenvild", "Grinnel", "Grinnora", "Grinrey", "Grinrima", "Grinthine", "Grintrud", "Grinwen", "Grinya", "Haborg", "Harda", "Harine", "Harit", "Harnora", "Harwyn", "Herga", "Herlis", "Herly", "Herne", "Herny", "Herrit", "Herya", "Hilrin", "Hilritte", "Hilry", "Hilwen", "Histin", "Hithera", "Holma", "Holnora", "Holrima", "Holvild", "Hrelena", "Hrelga", "Igrine", "Inehild", "Ineren", "Ineritte", "Inewa", "Ingilly", "Inginya", "Ingirma", "Jenlin", "Jenlis", "Jennel", "Jenra", "Jenrima", "Jentrud", "Jorgin", "Jorlie", "Jornel", "Jorra", "Jorsten", "Jorvil", "Jorwen", "Kalena", "Kanda", "Karen", "Karla", "Karlina", "Karna", "Karrima", "Karritte", "Kavild", "Krilga", "Krirna", "Krisha", "Lennel", "Lenrey", "Mahild", "Manya", "Marthe", "Masha", "Mihild", "Milga", "Mirie", "Mirthe", "Miwa", "Munrin", "Nehild", "Nelda", "Neldis", "Nelga", "Nella", "Nellin", "Nelra", "Nelthine", "Nevild", "Nodis", "Noldis", "Nolga", "Nonda", "Nonhild", "Nothe", "Olifinna", "Olilene", "Olirma", "Olithe", "Oliwa", "Rowda", "Rowna", "Rownel", "Rowrima", "Rowrine", "Rowvild", "Srafinna", "Sranda", "Srarit", "Sraritte", "Srarna", "Srayah", "Sredis", "Srenna", "Sreya", "Steifinna", "Steilly", "Steilsa", "Steinya", "Steiritte", "Steistin", "Steithe", "Svafinna", "Svahild", "Svalene", "Svannora", "Svanrin", "Svanvil", "Svanya", "Svarny", "Thoborg", "Tholla", "Tholly", "Thoren", "Thothe", "Thoyah", "Ulelly", "Ulenda", "Ulerie", "Ulerit", "Ulesa", "Ulethe", "Ulewa", "Valdis", "Valvil", "Velmilla", "Vigma", "Vigya", "Vrella", "Vrenya", "Vresa", "Ygrine", "Ygritte", "Ynda", "Ynly", "Ynna", "Ynne", "Ynya", "Yrma", "Yrrine", "Yrwyn", "Marynn", "Herinda", "Mirinda", "Ferina", "Arinda", "Judeline", "Maraline", "Saraline", "Judessa", "Maressa", "Saressa", "Victessa", "Victaline", "Elizabessa", "Lizbessa", "Lizabine", "Adraline", "Avaline", "Evaline", "Tarabessa", "Maribessa", "Anabessa", "Mathildine", "Mathilde", "Calabessa", "Victine", "Dierdre", "Dierdrine"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var name = part1[randomNumber1];          

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenDwarfMale(){
  var part1 = ["Gormley", "Greer", "Adan", "Edan", "Eadan", "Alean", "Alsdar", "Angus", "Edh", "Arran", "Artair", "Athol", "Archibald", "Ercan", "Aulay", "Ollie", "Olly", "Boyd", "Blair", "Baltar", "Bethan", "Barclay", "Bruce", "Calen", "Callum", "Carbrey", "Carson", "Cenned", "Colan", "Craid", "Cormag", "Cormac", "Conall", "Dermid", "Dorge", "Devon", "Jevon", "Dogal", "Dugal", "Duff", "Dugald", "Ealair", "Ellar", "Eoin", "Eoghan", "Euan", "Evander", "Farquar", "Fearchar", "Fargus", "Fearghas", "Fergus", "Filib", "Findlay", "Fingall", "Fintan", "Fenton", "Frang", "Gavin", "Gawain", "Gilvine", "Gilroy", "Glenn", "Gorash", "Gorey", "Gordon", "Graeme", "Grimm", "Grant", "Gregor", "Greig", "Grier", "Gus", "Heck", "Hendry", "Iagan", "Iomhar", "Irving", "Ivor", "Jock", "Kerr", "Kentigern", "Kester", "Lavran", "Labhran", "Lennon", "Lennock", "Logan", "Malcolm", "Marcas", "Monroe", "Murray", "Mor", "Murdo", "Novan", "Niven", "Pedar", "Pol", "Rab", "Ragnvald", "Ramsay", "Ranald", "Ranulf", "Roddy", "Rory", "Roy", "Radden", "Sorley", "Tasgall", "Taskill", "Tavish", "Torquil", "Ualan", "Uilleam", "Wallace", "Abban", "Adhamh", "Aengus", "Aidan", "Andr", "Onrey", "Ardal", "Ardghal", "Bairre", "Berach", "Bradach", "Braden", "Brendan", "Brennan", "Cahal", "Cadogan", "Brogan", "Cairbre", "Calbhach", "Calvagh", "Caolan", "Carthach", "Cathar", "Cathal", "Cathan", "Ceallagh", "Ciar", "Cinaed", "Clance", "Clancar", "Colman", "Comgall", "Conan", "Conley", "Conrey", "Cowal", "Cuan", "Damhan", "Darach", "Daragh", "Darragh", "Deasun", "Desmond", "Declan", "Devin", "Donall", "Doran", "Doyle", "Duncan", "Eamon", "Eamonn", "Duvall", "Eann", "Eoghan", "Erskin", "Fechin", "Faolan", "Fergall", "Fearghal", "Fiachr", "Finbarr", "Garvan", "Gearalt", "Gilroy", "Goban", "Grady", "Greagor", "Hebber", "Jarlath", "Kane", "Kean", "Collan", "Leyamm", "Lorcan", "Lomman", "Mahon", "Maghnus", "Loras", "Mannix", "Maddox", "Lorccan", "Mollan", "Oghran", "Nollaig", "Orrin", "Oran", "Ovan", "Padrac", "Peadar", "Felan", "Paras", "Quinn", "Raghnall", "Reagan", "Rordan", "Riordan", "Rodri", "Seffr", "Shain", "Tadhg", "Tol", "Tal", "Torin", "Toron", "Loklaf", "Jarmyr", "Jorrad", "Varnalder", "Arulas", "Grerigg", "Dogrim", "Ararrand", "Grelner", "Balran", "Jorarun", "Thormir", "Baland", "Balamyr", "Braval", "Joraval", "Steimun", "Grarigg", "Horrrand", "Gunwynd", "Gjarrik", "Varnik", "Balorn", "Isamun", "Daragard", "Baedill", "Grelner", "Gjagrim", "Bjagir", "Moramun", "Ismyr", "Fjaror", "Bardel", "Vormir", "Olmoval", "Sverigg", "Baerand", "Gronarr", "Arakmar", "Noramyr", "Baramun", "Rogvir", "Biorigar", "Bolrad", "Grarik", "Skanir", "Joradol", "Ruagard", "Sverald", "Aragr", "Aramun", "Aranarr", "Ararald", "Ardel", "Armir", "Arryn", "Aryger", "Baegeir", "Baegvar", "Baekmar", "Baernir", "Baldar", "Baleigr", "Balgrim", "Balik", "Ballaf", "Balold", "Balrand", "Balrik", "Barigar", "Barmyr", "Barodarr", "Baror", "Biadill", "Biageir", "Biagir", "Biakul", "Biamun", "Biaregg", "Biarik", "Biarnir", "Biarolf", "Biaval", "Biorald", "Bioramyr", "Biorleck", "Bioror", "Bjadill", "Bjagni", "Bjalaf", "Bjamyr", "Bjordel", "Bjorgrim", "Bjormir", "Bjorrik", "Bjorulas", "Bolalder", "Bolegg", "Bolik", "Bolkar", "Boragir", "Boragvar", "Borakmar", "Borakul", "Boralaf", "Boramund", "Boranir", "Borarrand", "Boraval", "Bradill", "Bragard", "Bragr", "Bramun", "Braneigr", "Branik", "Branmund", "Branoll", "Branrik", "Branyger", "Daradir", "Daragr", "Daramir", "Daranarr", "Dararald", "Dararand", "Dararigg", "Daregg", "Darmyr", "Daror", "Dogr", "Dogrim", "Dolner", "Domun", "Dorald", "Doramyr", "Dormir", "Dormyr", "Dornor", "Dorolf", "Dorran", "Dorrik", "Dramir", "Drarigg", "Drylner", "Drynodr", "Drynryn", "Dryregg", "Fjarald", "Fjarigar", "Fjarkar", "Geirleck", "Genald", "Genalder", "Genamyr", "Genand", "Genmir", "Genor", "Godir", "Gogeir", "Golaf", "Gomyr", "Gonarr", "Gonir", "Gorald", "Goregg", "Gornalder", "Gorngrim", "Gornik", "Gornorn", "Gornulas", "Gorodr", "Goror", "Gorrand", "Gorrik", "Gorulas", "Gradill", "Gragvar", "Gralner", "Grarnir", "Grarolf", "Grarrand", "Gredir", "Gredol", "Gregvar", "Gremund", "Grerne", "Grodill", "Grodir", "Grogni", "Grogr", "Gromir", "Gronarr", "Grorand", "Grungrim", "Grunryn", "Gunmir", "Gunmodr", "Gunmyr", "Gunold", "Gunoll", "Gunrand", "Gunund", "Haragard", "Harakul", "Haramun", "Haraval", "Harmodr", "Harryn", "Hranald", "Hranamun", "Hranegg", "Hranlaf", "Hranwynd", "Hrogard", "Hrogvar", "Hromir", "Ismund", "Isulas", "Jaragard", "Jarakul", "Jaralaf", "Jarald", "Jaralner", "Jardar", "Jarran", "Joragr", "Joragvar", "Jorakmar", "Joralner", "Jorand", "Jorarand", "Joraregg", "Jorarolf", "Jorarrand", "Joraval", "Jornor", "Joroll", "Lokgrim", "Lokor", "Maregg", "Marell", "Marigar", "Marik", "Marmodr", "Marnor", "Marran", "Morlaf", "Morrik", "Narand", "Narik", "Narleck", "Narmund", "Narrad", "Norleck", "Norolf", "Noror", "Norrand", "Olmogeir", "Olmogir", "Olmokmar", "Olmonir", "Olmorald", "Olmorigg", "Olmorne", "Oredir", "Oregeir", "Orenir", "Orerigg", "Orgrim", "Orkar", "Ormund", "Orngrim", "Ornik", "Ornnor", "Ornodol", "Ornodr", "Ornogir", "Ornokul", "Ornolf", "Ornomir", "Ornomyr", "Ornorolf", "Ornwynd", "Orulas", "Ragalder", "Ragmodr", "Ragvir", "Raumun", "Rogald", "Rogamyr", "Rogmir", "Rogmund", "Rogorn", "Rogrand", "Skadol", "Skagard", "Skagvar", "Skalaf", "Skamir", "Skaregg", "Skarne", "Sragard", "Sragir", "Sragvar", "Sramun", "Sranir", "Srarand", "Srarik", "Steigr", "Steikul", "Steilner", "Steinir", "Steirand", "Steirrand", "Stygard", "Stynir", "Styrand", "Styregg", "Styrik", "Styrnir", "Styror", "Styrran", "Styrrand", "Surmir", "Suryger", "Svegard", "Svelner", "Sverand", "Thomir", "Thomun", "Thomyr", "Thorald", "Thorarun", "Thorigar", "Thorkar", "Thorne", "Thornor", "Thorolf", "Thoroll", "Thorwynd", "Torand", "Toregard", "Toremun", "Torerald", "Torkar", "Tormir", "Torodarr", "Torold", "Toroll", "Toror", "Toryger", "Valdar", "Valell", "Valleck", "Varageir", "Varakul", "Varalaf", "Varanir", "Vararand", "Vararegg", "Vararigg", "Vararne", "Vararnir", "Vararolf", "Vararr", "Varnkar", "Varnleck", "Varnmodr", "Varnran", "Varnwynd", "Vigamyr", "Vigorn", "Vigran", "Voregg", "Vorigar", "Vornor", "Vorolf", "Voroll", "Vorran", "Vorund", "Vorvir", "Lorean"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var name = part1[randomNumber1];          

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenElfFemale(){
  var part1 = ["Ad","Ael","Ak","Al","Ar","B","D","Ed","Ek","El","Er","G","K","Kr","L","M","N","Od","Ok","Ol","Or","P","Ph","R","S","T"]
  var part2 = ["ah","al","as","eb","el","en","es","il","in","is"]
  var part3 = ["ella","ille","odi","adi","ine","ene","ephe","ophe"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var randomNumber2 = parseInt(Math.random() * part2.length);
  var randomNumber3 = parseInt(Math.random() * part3.length);
  var name = part1[randomNumber1] + part2[randomNumber2] + part3[randomNumber3];          

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenElfMale(){
  var part1 = ["Ad","Ael","Ak","Al","Ar","B","D","Ed","Ek","El","Er","G","K","Kr","L","M","N","Od","Ok","Ol","Or","P","Ph","R","S","T"]
  var part2 = ["ab","ad","ah","al","an","as","el","en","oh","ol","on","os"]
  var part3 = ["ad","aer","ain","an","aph","eph","is","on","or","sen","so","sin","ten","to"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var randomNumber2 = parseInt(Math.random() * part2.length);
  var randomNumber3 = parseInt(Math.random() * part3.length);
  var name = part1[randomNumber1] + part2[randomNumber2] + part3[randomNumber3];          

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenLizardFemale(){
  var part1 = ["A", "Ba", "Be", "Da", "Di", "E", "Fa", "Fe", "Fi", "Ga", "Gu", "He", "Ja", "Je", "Ka", "Ki", "Ko", "La", "Ma", "Mi", "Mo", "Na", "Ni", "No", "O", "Pa", "Pai", "Ra", "Ro", "Sa", "Sha", "Shi", "Sho"]
  var part2 = ["na", "mi", "ra", "rda", "re", "rma", "ba", "ha", "hma", "hra", "hna", "hrou", "spe", "rie", "riu", "la", "ste", "ru", "ri", "spa", "lba", "lza", "hi", "lu", "rva", "rvi", "vi", "ya", "xa", "sa", "sha", "na", "hre", "tu", "", "", "", ""]
  var part3 = ["ta", "sa", "zu", "zar", "har", "nu", "h", "r", "sta", "ri", "za", "zeh", "ti", "leh", "shan", "far", "ma", "sha", "na", "neh", "naz", "di", "deh", "rin", "ya"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var randomNumber2 = parseInt(Math.random() * part2.length);
  var randomNumber3 = parseInt(Math.random() * part3.length);
  var name = part1[randomNumber1] + part2[randomNumber2] + part3[randomNumber3];          

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenLizardMale(){
  var part1 = ["A", "Ba", "Be", "Da", "Di", "E", "Fa", "Fe", "Fi", "Ga", "Gu", "He", "Ja", "Je", "Ka", "Ki", "Ko", "La", "Ma", "Mi", "Mo", "Na", "Ni", "No", "O", "Pa", "Pai", "Ra", "Ro", "Sa", "Sha", "Shi", "Sho"]
  var part2 = ["na", "mi", "ra", "rda", "re", "rma", "ba", "ha", "hma", "hra", "hna", "hrou", "spe", "rie", "riu", "la", "ste", "ru", "ri", "spa", "lba", "lza", "hi", "lu", "rva", "rvi", "vi", "ya", "xa", "sa", "sha", "na", "hre", "tu", "", "", "", ""]
  var part3 = ["n", "d", "z", "m", "r", "nd", "sh", "shir", "k", "dur", "s", "nir"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var randomNumber2 = parseInt(Math.random() * part2.length);
  var randomNumber3 = parseInt(Math.random() * part3.length);
  var name = part1[randomNumber1] + part2[randomNumber2] + part3[randomNumber3];          

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenHumanFemale(){
  var part1 = ["Millicent", "Alys", "Ayleth", "Cedany", "Ellyn", "Malkyn", "Peronell", "Esme", "Eliose", "Thea", "Jacquelyn", "Amelia", "Gloriana", "Arabella", "Adelaide", "Alice", "Beatrix", "Eleanor", "Emeline", "Isabel", "Juliana", "Matilda", "Mirabelle", "Rose", "Isolde", "Muriel", "Godiva", "Catrain", "Jasmine", "Josselyn", "Maria", "Victoria", "Vanessa", "Krea", "Athena", "Aleida", "Ariana", "Katelyn", "Loryna", "Kaylein", "Seraphina", "Ryia", "Abagal", "Abrey", "Addysen", "Adrielle", "Adrya", "Adryana", "Aiana", "Aianna", "Alara", "Alarina", "Alaysha", "Alenis", "Alerah", "Alessa", "Alexes", "Alia", "Aliana", "Aline", "Alisha", "Alissa", "Aliza", "Almia", "Alora", "Alysia", "Amelira", "Amie", "Anaris", "Anera", "Ania", "Anicia", "Aniga", "Annalys", "Annila", "Anrea", "Anya", "Anysa", "Aobrey", "Arecel", "Arenna", "Arice", "Arika", "Ariyana", "Arlenna", "Arlis", "Arrei", "Aryana", "Ashlei", "Astris", "Aurola", "Avelley", "Avia", "Avya", "Ayara", "Ayleen", "Aymee", "Bancey", "Baylee", "Bellin", "Bernyce", "Bethally", "Brannelle", "Brealla", "Breannei", "Bredgit", "Breniell", "Breonna", "Brianel", "Brienna", "Brigot", "Brinna", "Brise", "Briyenn", "Bryeana", "Bryna", "Camyla", "Camylle", "Carlys", "Carmin", "Carynne", "Caryss", "Catlina", "Catryn", "Cayra", "Celesse", "Celia", "Cemrin", "Ceria", "Charlyse", "Christys", "Chrysha", "Chyanne", "Cira", "Cladine", "Claere", "Clara", "Clarysse", "Cliara", "Cliera", "Dainis", "Dania", "Dannya", "Darlyne", "Darna", "Dayana", "Delylah", "Deranna", "Dyanna", "Dyanne", "Edeline", "Elayna", "Elayne", "Eleana", "Eleanah", "Elison", "Elize", "Ellena", "Ellisha", "Ellya", "Elna", "Elyana", "Elyse", "Emely", "Emilee", "Emilya", "Enith", "Ensley", "Esthis", "Evelyne", "Eyva", "Fiyona", "Fryda", "Gabielle", "Gabrelle", "Gianas", "Gillis", "Giyana", "Glorina", "Grayce", "Graycie", "Haleigh", "Hayana", "Haylise", "Heiley", "Helna", "Heyley", "Ireyne", "Jacline", "Jaelyn", "Jaeneth", "Jaenis", "Jaide", "Jaidyn", "Jaslin", "Jasline", "Jenifire", "Jesmyn", "Jeyla", "Jilliyan", "Jocey", "Joenne", "Josey", "Julienna", "Julina", "Juline", "Kaela", "Kaelys", "Kaenna", "Kailsey", "Kailyn", "Kaina", "Kari", "Kathlyn", "Katlyn", "Katryna", "Kaylee", "Kaysie", "Keira", "Kendris", "Kenyse", "Keynna", "Khailee", "Khailey", "Kiannne", "Kiara", "Kina", "Kiyana", "Klissa", "Kristyne", "Kylis", "Kyra", "Laenah", "Laerra", "Laina", "Laisa", "Lannia", "Lauryn", "Lenda", "Lendsey", "Lenneya", "Lexia", "Lexise", "Leyanna", "Liliyana", "Lilliyan", "Liya", "Lorenah", "Lusia", "MAedalyn", "Madeleine", "Madysen", "Maecy", "Maellery", "Maianae", "Malina", "Mansy", "Maralynn", "Mariela", "Marilla", "Marinah", "Mariya", "Mariyam", "Mariyanna", "Marleigh", "Marleina", "Marleya", "Marya", "Maryana", "Maycey", "Maygen", "Mayra", "Melahnie", "Melinsa", "Melleah", "Mellinna", "Meralith", "Mertha", "Meya", "Milah", "Minella", "Mira", "Miranna", "Monira", "Myra", "Mysa", "Natari", "Nathaleya", "Nera", "Nira", "Nyla", "Nyra", "Nysa", "Nysah", "Olira", "Palina", "Railey", "Raina", "Reila", "Renei", "Reyanna", "Rila", "Rosyn", "Saede", "Salna", "Sanah", "Sanda", "Sanira", "Sanya", "Sarisa", "Sava", "Selira", "Selsa", "Sesa", "Shana", "Sharley", "Shela", "Shennen", "Soniya", "Sophey", "Suesane", "Sylvina", "Tacy", "Taila", "Taliya", "Tanea", "Taniya", "Tayla", "Teena", "Tesha", "Teya", "Thalina", "Tiffally", "Tila", "Tiyana", "Trinny", "Trysta", "Valeris", "Vanesha", "Vivienne", "Ada", "Adela", "Agatha", "Alida", "Amalia", "Andrea", "Angela", "Angelica", "Aurelia", "Bernadette", "Brigitta", "Cecilia", "Delia", "Diana", "Dorothy", "Emilia", "Erika", "Edith", "Editha", "Esthera", "Evelina", "Felicia", "Florina", "Gabrielle", "Giselle", "Ilona", "Isidora", "Lydia", "Lynda", "Madalyne", "Nicolette", "Olyvia", "Valeria", "Wynda"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var name = part1[randomNumber1];

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenHumanMale(){
  var part1 = ["Aden", "Adian", "Adrew", "Aeron", "Alavin", "Alberet", "Aldo", "Alecor", "Alfered", "Alix", "Alon", "Alren", "Alvar", "Ammett", "Andaren", "Ando", "Anron", "Anthor", "Antorn", "Arin", "Arnol", "Arrel", "Arren", "Arton", "Arvin", "Ascar", "Ashter", "Asten", "Athen", "Auster", "Bailin", "Bander", "Banneth", "Barden", "Barret", "Barrock", "Benam", "Billon", "Blane", "Brack", "Bracks", "Braddish", "Bradeon", "Braedon", "Brandeth", "Brayan", "Brenn", "Brennard", "Briden", "Brod", "Broden", "Brodin", "Bron", "Bronden", "Brunn", "Bruze", "Brydan", "Bryen", "Brynnan", "Byrant", "Callith", "Callor", "Calrin", "Camern", "Camren", "Carden", "Carn", "Carron", "Carth", "Cason", "Cayde", "Cayle", "Cedrick", "Cerran", "Chandren", "Channer", "Charad", "Charlin", "Chass", "Chrestan", "Clarreth", "Clarton", "Clatton", "Clayse", "Codin", "Colbat", "Colren", "Colton", "Conin", "Contar", "Corbus", "Coren", "Corlin", "Corrad", "Crodell", "Croll", "Culler", "Curtass", "Cyrus", "Dallar", "Dallen", "Dalran", "Daltis", "Daman", "Dander", "Dannis", "Dannys", "Dantis", "Darick", "Daris", "Dariss", "Darne", "Darren", "Darreth", "Darrok", "Darron", "Darvin", "Davios", "Davis", "Dayron", "Decran", "Dennas", "Denzin", "Deonte", "Deran", "Dercin", "Derren", "Deston", "Devron", "Dextran", "Donovar", "Dontar", "Dontin", "Dorin", "Dougas", "Dovan", "Drack", "Drak", "Dramen", "Drannyl", "Dravor", "Dromen", "Dromin", "Duran", "Dustran", "Dwan", "Dwigher", "Dyron", "Edam", "Edder", "Eddin", "Edgarth", "Efran", "Elden", "Eliar", "Ellion", "Elmar", "Elras", "Elrin", "Emannar", "Emersen", "Emilar", "Entan", "Erac", "Erner", "Erock", "Everan", "Evin", "Eyan", "Fabiar", "Felir", "Fernar", "Gabrin", "Gannon", "Garrat", "Garrel", "Gerrar", "Gidden", "Gilbar", "Gordar", "Graffin", "Grag", "Graige", "Grandin", "Grandon", "Grasson", "Gurner", "Harald", "Harlik", "Harrin", "Hectar", "Horden", "Howar", "Inan", "Jackar", "Jacke", "Jacor", "Jaddon", "Jaesse", "Jakor", "Jallen", "Jami", "Jarad", "Jarak", "Jardan", "Jaremy", "Jares", "Jarger", "Jaron", "Jarvas", "Jasim", "Javer", "Javor", "Jaxar", "Jayse", "Jaze", "Jeffary", "Jeran", "Jessar", "Jevan", "Jimmer", "Jorgan", "Jorge", "Jorran", "Jorrel", "Josian", "Jovarn", "Julan", "Jullen", "Kaegan", "Karne", "Karsan", "Kartis", "Kavvin", "Kayl", "Kean", "Keren", "Kerith", "Kevven", "Kierat", "Kiran", "Kivan", "Kober", "Kollion", "Korb", "Kyllan", "Lanard", "Lanner", "Lawren", "Lawsen", "Layn", "Lerris", "Levir", "Liram", "Lorgan", "Lucan", "Lucas", "Luras", "Lurs", "Malrik", "Manrel", "Marak", "Marcyl", "Marthew", "Marvion", "Mateo", "Mavrock", "Maxar", "Maxir", "Mikal", "Miltar", "Mitchar", "Mithcar", "Morsan", "Morsh", "Mortin", "Mykal", "Myle", "Narmen", "Nathar", "Neral", "Nestar", "Niclas", "Nithan", "Olivar", "Orwen", "Patrack", "Paxtan", "Payten", "Portar", "Pranar", "Preytan", "Ragnar", "Randar", "Reben", "Rechar", "Rendal", "Rewan", "Rickar", "Riler", "Robart", "Roberd", "Rodner", "Rody", "Rohar", "Rolan", "Ronard", "Ronas", "Rud", "Rydan", "Rylen", "Rylon", "Saloman", "Samurel", "Sandor", "Sarrac", "Seamas", "Seban", "Seldan", "Serion", "Shale", "Sharun", "Sibas", "Sowyer", "Stanler", "Stefon", "Stephas", "Sterlan", "Stuar", "Sulvan", "Tadd", "Tarik", "Tarner", "Thomos", "Timos", "Tirius", "Tobas", "Tobin", "Toman", "Tranis", "Trentan", "Trevas", "Trevyr", "Trytas", "Tylan", "Tyral", "Tyron", "Varn", "Vernan", "Warne", "Warrek", "Weslar", "Wyllam", "Xanner", "Zakar", "Zane", "Zarin", "Zyre", "Merek", "Carac", "Tybalt", "Borin", "Sadon", "Fendrel", "Brom", "Hadrian", "Symon", "Edmon", "Leofric", "Asher", "Destrian", "Destran", "Todor", "Tibor", "Vencel", "Vilmos", "Tamas", "Odon", "Marcell", "Lazar", "Kolos", "Ivan", "Gaspar", "Jasper", "Edwin", "Arthur", "Ambrose", "Adam", "Matthias", "Nicholas", "Olivan", "Roland", "Sebastian", "Sylvast", "Theodran", "Zoltan", "Vincent"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var name = part1[randomNumber1];

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenAncientFemale(){
  var part1 = ["Athy", "Angsi", "Ysma", "Bana", "Bemoa", "Ontra", "Minal", "Deca", "Dama", "Lora", "Depri", "Ive", "Despi", "Espi", "Detri", "Vel", "Disma", "Ress", "Drea", "Enra", "Erodi", "Vil", "Fai", "Ailure", "Ilure", "Fea", "Rue", "Horri", "Orri", "Ostil", "Nore", "Imma", "Nane", "Inel", "Nele", "Jure", "Juri", "Insa", "Ane", "Insi", "Insidi", "Sidi", "Malici", "Alici", "Missha", "Missi", "Moa", "Mol", "Aive", "Gati", "Neve", "Ense", "Noxi", "Odi", "Fensi", "Ressi", "Pessi", "Pessimi", "Udice", "Judice", "Questi", "Nege", "Nega", "Pella", "Ulsi", "Sava", "Scara", "Screma", "Vere", "Imy", "Tress", "Erri", "Ermine", "Vora", "Illain", "Vindi", "Idola", "Paga", "Secra", "Viola", "Mise", "Lamine", "Thallia", "Nomia", "Versa", "Teria", "Terica", "Narci", "Derline", "Zotypa", "Lustera", "Ordeline", "Ness", "Gless", "Etheless", "Plora", "Corda", "Aderyn", "Aerona", "Avanen", "Alis", "Angara", "Anuen", "Aryanra", "Arianra", "Bethan", "Briallen", "Bronuen", "Carys", "Ceriduen", "Delyth", "Diluen", "Dylis", "Eiluned", "Eluned", "Eiluen", "Eira", "Eirian", "Eirlys", "Elain", "Eleri", "Elin", "Envisa", "Esyllt", "Euruen", "Viona", "Geladys", "Glenda", "Glenice", "Glynis", "Guenda", "Guendolyn", "Gyneira", "Evina", "Leuella", "Louri", "Mabyn", "Mair", "Mairuen", "Meinir", "Meinuen", "Meiriona", "Moruen", "Myve", "Moruennia", "Nerys", "Nesta", "Nia", "Oluen", "Ouena", "Rian", "Rosyn", "Seren", "Shan", "Siana", "Siani", "Sioned", "Teguen", "Tesni", "Wynne"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var name = part1[randomNumber1];

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}

function namegenAncientMale(){
  var part1 = ["Mal", "Adver", "Larm", "Ang", "Noy", "Cious", "Apath", "Pall", "Atro", "Afal", "Nal", "Neath", "Arbed", "Bellig", "Gerent", "Bor", "Roken", "Roke", "Rake", "Brak", "Allous", "Col", "Sive", "Corros", "Cor", "Raze", "Cree", "Rime", "Ruel", "Crue", "Ecay", "Cay", "Dast", "Astar", "Lorab", "Rive", "Prive", "Orm", "Den", "Ial", "Icab", "Detrim", "Imen", "Trimen", "Etrim", "Etrimen", "Dis", "Veled", "Vel", "Ag", "Agon", "Gon", "Erod", "Vil", "Faul", "Aul", "Oul", "Rave", "Reed", "Gree", "Rimm", "Mace", "Rimace", "Grue", "Aggar", "Gard", "Deous", "Orren", "Orrend", "Horren", "Norant", "Immat", "Fect", "Inan", "Legant", "Eleg", "Jurious", "Ealous", "Los", "Malic", "Alic", "Menac", "Hapen", "Misund", "Derst", "Sunderst", "Oan", "Onst", "Ast", "Naugh", "Ver", "Nond", "Nox", "Ject", "Fen", "Ress", "Ain", "Tur", "Essim", "Lain", "Oison", "Oor", "Estion", "Quir", "Rej", "Ellant", "Rept", "Venge", "Ance", "Vol", "Rev", "Evolt", "Vage", "Ock", "Nister", "Sor", "Torm", "Terr", "Reath", "Thrane", "Kane", "Rane", "Rath", "Ven", "Venos", "Nom", "Enom", "Set", "Satis", "Factor", "Towar", "Vind", "Indic", "Ked", "Orth", "Wor", "Ound", "Zer", "Ero", "Erro", "Rone", "Grune", "Grale", "Ulgar", "Athen", "Agan", "Raun", "Empor", "Wick", "Revill", "Iniquo", "Vish", "Thical", "Torian", "Shen", "Geddon", "Sain", "Nishain", "Alkar", "Nishane", "Gress", "Vince", "Vost", "Voke", "Voker", "Rade", "Fage", "Fetic", "Tagon", "Gnost", "Gnomos", "Hast", "Grige", "Ector", "Streck", "Orment", "Verlor", "Arken", "Aiten", "Ator", "Teric", "Ikal", "Disor", "Ordan", "Ordant", "Istral", "Ino", "Acker", "Aeron", "Aled", "Alun", "Andras", "Aneirin", "Aneurin", "Arvel", "Bran", "Brynmor", "Cadan", "Cadfael", "Cadfane", "Cadoc", "Cadogan", "Cadvigan", "Caven", "Caradoc", "Caradog", "Celyn", "Dai", "Deinol", "Delven", "Dresden", "Drystan", "Evion", "Ennion", "Eirian", "Emrys", "Emyr", "Envis", "Euric", "Volant", "Gareth", "Gethin", "Glyndor", "Goronai", "Gravan", "Gavaltor", "Haull", "Iantor", "Idris", "Ilar", "Leolon", "Mabon", "Mavon", "Madox", "Cadox", "Meical", "Meirion", "Neirin", "Sion", "Sior", "Siorus", "Talfryn", "Taliesin", "Treiron", "Urien", "Vauhan", "Iale", "Yorath"]

  var randomNumber1 = parseInt(Math.random() * part1.length);
  var name = part1[randomNumber1];

  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
  document.getElementById("placeholder").appendChild(element);
}