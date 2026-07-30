// Base de datos unificada LMI Temporada 9 desde lmi temp 9.xlsx

const INITIAL_LMI_DATA = {
  "season": "Temporada 9 en Curso",
  "teams": [
    {
      "id": "interdemilan",
      "name": "Inter de Milan",
      "shortName": "INT",
      "leagueRank": 1,
      "logo": "Logos Equipos/intermilan.webp",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Inter de Milan",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "realmadrid",
      "name": "Real Madrid",
      "shortName": "REA",
      "leagueRank": 2,
      "logo": "Logos Equipos/realmadrid.webp",
      "colors": {
        "primary": "#000000",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Real Madrid",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "fcbarcelona",
      "name": "FC Barcelona",
      "shortName": "FC ",
      "leagueRank": 3,
      "logo": "Logos Equipos/fcbarcelona.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio FC Barcelona",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "terengganufc",
      "name": "Terengganu FC",
      "shortName": "TER",
      "leagueRank": 4,
      "logo": "Logos Equipos/terengganu.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Terengganu FC",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "acmiln",
      "name": "AC Milán",
      "shortName": "AC ",
      "leagueRank": 5,
      "logo": "Logos Equipos/acmilan.webp",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio AC Milán",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "bayernleverkusen",
      "name": "Bayern Leverkusen",
      "shortName": "BAY",
      "leagueRank": 6,
      "logo": "Logos Equipos/bayernleverkusen.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Bayern Leverkusen",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "rbleipzig",
      "name": "RB Leipzig",
      "shortName": "RB ",
      "leagueRank": 7,
      "logo": "Logos Equipos/rbleipzig.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio RB Leipzig",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "bocajuniors",
      "name": "Boca Juniors",
      "shortName": "BOC",
      "leagueRank": 8,
      "logo": "Logos Equipos/boca.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Boca Juniors",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "galatasaray",
      "name": "Galatasaray",
      "shortName": "GAL",
      "leagueRank": 9,
      "logo": "Logos Equipos/galatasaray.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Galatasaray",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "psg",
      "name": "PSG",
      "shortName": "PSG",
      "leagueRank": 10,
      "logo": "Logos Equipos/psg.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio PSG",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "arsenal",
      "name": "Arsenal",
      "shortName": "ARS",
      "leagueRank": 11,
      "logo": "Logos Equipos/arsenal.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Arsenal",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "como1907",
      "name": "Como 1907",
      "shortName": "COM",
      "leagueRank": 12,
      "logo": "Logos Equipos/como.webp",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Como 1907",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "tottenhamhotspur",
      "name": "Tottenham Hotspur",
      "shortName": "TOT",
      "leagueRank": 13,
      "logo": "Logos Equipos/tottenham.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Tottenham Hotspur",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "hellasverona",
      "name": "Hellas Verona",
      "shortName": "HEL",
      "leagueRank": 14,
      "logo": "Logos Equipos/hellas.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Hellas Verona",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "bayermunich",
      "name": "Bayer Munich",
      "shortName": "BAY",
      "leagueRank": 15,
      "logo": "Logos Equipos/bayernmunich.webp",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Bayer Munich",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "manchesterunited",
      "name": "Manchester United",
      "shortName": "MAN",
      "leagueRank": 16,
      "logo": "Logos Equipos/manchesterunited.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Manchester United",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "melbournecity",
      "name": "Melbourne City",
      "shortName": "MEL",
      "leagueRank": 17,
      "logo": "Logos Equipos/melbourne.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Melbourne City",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    },
    {
      "id": "wrexham",
      "name": "Wrexham",
      "shortName": "WRE",
      "leagueRank": 18,
      "logo": "Logos Equipos/wrexham.png",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Wrexham",
      "manager": "Director Técnico",
      "budget": 100000000,
      "initialBudget": 100000000,
      "legendChangeNote": "",
      "legendRemoveNote": ""
    }
  ],
  "players": [
    {
      "id": "p_1",
      "name": "Jan Oblak",
      "position": "PT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_2",
      "name": "Yann Sommer",
      "position": "PT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_3",
      "name": "Yassine Bounou",
      "position": "PT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_4",
      "name": "David Raya",
      "position": "PT",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_5",
      "name": "Ederson Moraes",
      "position": "PT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_6",
      "name": "Gianluigi Donnarumma",
      "position": "PT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_7",
      "name": "Giorgi Mamardashvili",
      "position": "PT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_8",
      "name": "Alisson Becker",
      "position": "PT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_9",
      "name": "Christian Abbiati",
      "position": "PT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_10",
      "name": "Uğurcan Çakir",
      "position": "PT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_11",
      "name": "Lucas Chevalier",
      "position": "PT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_12",
      "name": "Diogo Costa",
      "position": "PT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_13",
      "name": "Manuel Neuer",
      "position": "PT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_14",
      "name": "Marco Carnesecchi",
      "position": "PT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_15",
      "name": "nyland",
      "position": "PT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_16",
      "name": "Fábio",
      "position": "PT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_17",
      "name": "Joan Garcia",
      "position": "PT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_18",
      "name": "Andriy Lunin",
      "position": "PT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_19",
      "name": "Alessandro Bastoni",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_20",
      "name": "Théo Hernández",
      "position": "LI",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_21",
      "name": "Pau Cubarsí",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_22",
      "name": "Denzel Dumfries",
      "position": "LD",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_23",
      "name": "Pau Torres",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_24",
      "name": "Nuno Mendes",
      "position": "LI",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_25",
      "name": "Jonathan Tah",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_26",
      "name": "Gabriel Magalhães",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_27",
      "name": "Nuno Tavares",
      "position": "LI",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_28",
      "name": "Emmanuel Agbadou",
      "position": "CT",
      "teamId": "psg",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_29",
      "name": "Kyle Walker-Peters",
      "position": "LD",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_30",
      "name": "Ronald Araújo",
      "position": "CT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_31",
      "name": "Paolo Maldini",
      "position": "LI",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_32",
      "name": "Gabriele Zappa",
      "position": "LD",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_33",
      "name": "alaba",
      "position": "CT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_34",
      "name": "Issa Diop",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_35",
      "name": "Raul Asencio",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_36",
      "name": "Victor Nelsson",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_37",
      "name": "Malick Thiaw",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_38",
      "name": "Jarrad Branthwaite",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_39",
      "name": "William Saliba",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_40",
      "name": "Antonio Rüdiger",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_41",
      "name": "Pepe",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_42",
      "name": "Murillo",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_43",
      "name": "Federico Dimarco",
      "position": "II",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_44",
      "name": "Marquinhos",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_45",
      "name": "Ezri Konsa",
      "position": "CT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_46",
      "name": "Kota Takai",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_47",
      "name": "Nico Schlotterbeck",
      "position": "CT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_48",
      "name": "Micky van de Ven",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_49",
      "name": "Jean-Clair Todibo",
      "position": "CT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_50",
      "name": "otamenndi",
      "position": "CT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_51",
      "name": "John Stones",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_52",
      "name": "Levi Colwill",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_53",
      "name": "Mario Gila",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_54",
      "name": "Julian Ryerson",
      "position": "ID",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_55",
      "name": "Aaron Wan-Bissaka",
      "position": "LD",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_56",
      "name": "Jurriën Timber",
      "position": "LD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_57",
      "name": "Gianluca Mancini",
      "position": "CT",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_58",
      "name": "Álvaro Carreras",
      "position": "LI",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_59",
      "name": "Dean Huijsen (P)",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_60",
      "name": "Joško Gvardiol",
      "position": "LI",
      "teamId": "rbleipzig",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_61",
      "name": "Alejandro Garnacho",
      "position": "II",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_62",
      "name": "Pierre Kalulu",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_63",
      "name": "Ferdi Kadioğlu",
      "position": "LI",
      "teamId": "psg",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_64",
      "name": "Marc Guéhi",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_65",
      "name": "Maximiliano Araújo",
      "position": "LI",
      "teamId": "como1907",
      "goals": 0,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_66",
      "name": "Ibrahima Konaté",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_67",
      "name": "Edmond Tapsoba",
      "position": "CT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_68",
      "name": "pavard",
      "position": "LD",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_69",
      "name": "Caio Paulista",
      "position": "LI",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_70",
      "name": "Ferland Mendy",
      "position": "LI",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_71",
      "name": "Marcos Llorente",
      "position": "LD",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_72",
      "name": "Alejandro Grimaldo",
      "position": "LI",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_73",
      "name": "Bruno Guimarães",
      "position": "MC",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_74",
      "name": "Reece James",
      "position": "LD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_75",
      "name": "Alejandro Balde",
      "position": "LI",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_76",
      "name": "Ben White",
      "position": "LD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_77",
      "name": "João Cancelo",
      "position": "LD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_78",
      "name": "Jeremie Frimpong",
      "position": "LD",
      "teamId": "rbleipzig",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_79",
      "name": "Robin Le Normand",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_80",
      "name": "Raoul Bellanova",
      "position": "LD",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_81",
      "name": "Stefan Posch",
      "position": "LD",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_82",
      "name": "Djed Spence",
      "position": "LD",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_83",
      "name": "Kyle Walker",
      "position": "LD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_84",
      "name": "Achraf Hakimi",
      "position": "LD",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_85",
      "name": "Aaron Martin",
      "position": "LI",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_86",
      "name": "dime",
      "position": "LI",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_87",
      "name": "Saud Abdulhamid",
      "position": "LD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_88",
      "name": "Matteo Darmian",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_89",
      "name": "Riccardo Calafiori",
      "position": "LI",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_90",
      "name": "Martín Zubimendi",
      "position": "MCD",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_91",
      "name": "Thomas Partey",
      "position": "MCD",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_92",
      "name": "Moisés Caicedo",
      "position": "MCD",
      "teamId": "fcbarcelona",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_93",
      "name": "Takefusa Kubo",
      "position": "ID",
      "teamId": "terengganufc",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_94",
      "name": "Aurélien Tchouaméni",
      "position": "MCD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_95",
      "name": "Nicolò Barella",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_96",
      "name": "Manu Koné",
      "position": "MC",
      "teamId": "rbleipzig",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_97",
      "name": "Boubacar Kamara",
      "position": "MCD",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_98",
      "name": "André Zambo Anguissa",
      "position": "MCD",
      "teamId": "galatasaray",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_99",
      "name": "Joāo Palhinha",
      "position": "MCD",
      "teamId": "psg",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_100",
      "name": "Bruno Fernandes",
      "position": "MP",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_101",
      "name": "Felix Nmecha",
      "position": "MCD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_102",
      "name": "Youssouf Fofana",
      "position": "MCD",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_103",
      "name": "James Garner",
      "position": "MCD",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_104",
      "name": "fabinho",
      "position": "MCD",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_105",
      "name": "Diogo Dalot",
      "position": "ID",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_106",
      "name": "Robert Andrich",
      "position": "MCD",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_107",
      "name": "Wilmar Barrios",
      "position": "MCD",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_108",
      "name": "Lamine Camara",
      "position": "MC",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_109",
      "name": "Vinícius Júnior",
      "position": "EI",
      "teamId": "realmadrid",
      "goals": 2,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_110",
      "name": "Dani Olmo",
      "position": "MP",
      "teamId": "fcbarcelona",
      "goals": 5,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_111",
      "name": "Enzo Fernández",
      "position": "MC",
      "teamId": "terengganufc",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_112",
      "name": "Joelinton",
      "position": "MC",
      "teamId": "acmiln",
      "goals": 1,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_113",
      "name": "Warren ZaÏre-Emery",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_114",
      "name": "Leandro Paredes",
      "position": "MCD",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_115",
      "name": "Malo Gusto",
      "position": "LD",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_116",
      "name": "Mikel Merino",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 3,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_117",
      "name": "Alexis Mac Allister",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_118",
      "name": "Nico O’Reilly",
      "position": "MP",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_119",
      "name": "Manuel Locatelli",
      "position": "MC",
      "teamId": "como1907",
      "goals": 0,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_120",
      "name": "Joshua Kimmich",
      "position": "MCD",
      "teamId": "tottenhamhotspur",
      "goals": 2,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_121",
      "name": "Michel Aebischer",
      "position": "MC",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_122",
      "name": "modric",
      "position": "MC",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_123",
      "name": "Kevin Castaño",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_124",
      "name": "Mandela Keita",
      "position": "MCD",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_125",
      "name": "Martín Ødegaard",
      "position": "MC",
      "teamId": "wrexham",
      "goals": 1,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_126",
      "name": "Dominik Szoboszlai",
      "position": "MP",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_127",
      "name": "Kai Havertz",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 4,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_128",
      "name": "Cole Palmer",
      "position": "MP",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_129",
      "name": "Piotr Zieliński",
      "position": "MC",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_130",
      "name": "Rodrygo",
      "position": "II",
      "teamId": "acmiln",
      "goals": 1,
      "assists": 5,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_131",
      "name": "Nico Paz (P)",
      "position": "MC",
      "teamId": "bayernleverkusen",
      "goals": 5,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_132",
      "name": "Dirk Kuyt",
      "position": "ED",
      "teamId": "rbleipzig",
      "goals": 5,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_133",
      "name": "Ademola Lookman",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_134",
      "name": "Antoine Griezmann",
      "position": "MP",
      "teamId": "galatasaray",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_135",
      "name": "Pablo Barrios",
      "position": "MC",
      "teamId": "psg",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_136",
      "name": "Gavi",
      "position": "MC",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_137",
      "name": "Florian Wirtz",
      "position": "MP",
      "teamId": "como1907",
      "goals": 6,
      "assists": 5,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_138",
      "name": "Isco",
      "position": "MC",
      "teamId": "tottenhamhotspur",
      "goals": 3,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_139",
      "name": "Andreas Schjelderup",
      "position": "MP",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_140",
      "name": "Kovacic",
      "position": "MC",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_141",
      "name": "C. Summerville",
      "position": "MP",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_142",
      "name": "Nadiem Amiri",
      "position": "MP",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_143",
      "name": "İlkay Gündoğan",
      "position": "MC",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_144",
      "name": "Rivaldo",
      "position": "MP",
      "teamId": "interdemilan",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_145",
      "name": "Orkun Kökçü",
      "position": "ID",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_146",
      "name": "Lionel Messi",
      "position": "ED",
      "teamId": "fcbarcelona",
      "goals": 6,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_147",
      "name": "Barış Alper Yılmaz",
      "position": "II",
      "teamId": "terengganufc",
      "goals": 5,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_148",
      "name": "Mason Greenwood",
      "position": "ID",
      "teamId": "acmiln",
      "goals": 1,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_149",
      "name": "Savinho",
      "position": "EI",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_150",
      "name": "Harry Kane",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 5,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_151",
      "name": "Bryan Mbeumo",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 2,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_152",
      "name": "Mattia Zaccagni",
      "position": "EI",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_153",
      "name": "Mohamed Salah",
      "position": "ED",
      "teamId": "psg",
      "goals": 4,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_154",
      "name": "Bukayo Saka",
      "position": "ED",
      "teamId": "arsenal",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_155",
      "name": "Kenan Yildiz",
      "position": "EI",
      "teamId": "como1907",
      "goals": 11,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_156",
      "name": "Jonathan David",
      "position": "SD",
      "teamId": "tottenhamhotspur",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_157",
      "name": "Julian Quiñones",
      "position": "EI",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_158",
      "name": "del Piero",
      "position": "CT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_159",
      "name": "Yunus Akgün",
      "position": "II",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_160",
      "name": "Nilson Angulo",
      "position": "ED",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_161",
      "name": "Liam Delap",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_162",
      "name": "Raphinha",
      "position": "EI",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_163",
      "name": "Ruud Gullit",
      "position": "SD",
      "teamId": "realmadrid",
      "goals": 6,
      "assists": 7,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_164",
      "name": "Julián Alvarez (p)",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 5,
      "assists": 10,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_165",
      "name": "Leandro Trossard",
      "position": "SD",
      "teamId": "terengganufc",
      "goals": 1,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_166",
      "name": "Erling Haaland",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 11,
      "assists": 5,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_167",
      "name": "Bernardo Silva",
      "position": "ED",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_168",
      "name": "Federico Chiesa",
      "position": "EI",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_169",
      "name": "Leroy Sané",
      "position": "ED",
      "teamId": "bocajuniors",
      "goals": 3,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_170",
      "name": "Iñaki Williams",
      "position": "ED",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_171",
      "name": "Luis Díaz",
      "position": "EI",
      "teamId": "psg",
      "goals": 1,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_172",
      "name": "Semih Kiliçsoy",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_173",
      "name": "Lamine Yamal",
      "position": "ED",
      "teamId": "como1907",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_174",
      "name": "Darwin Núñez",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 10,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_175",
      "name": "Antonio Nusa",
      "position": "ED",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_176",
      "name": "Watkins",
      "position": "CT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_177",
      "name": "Wayne Rooney",
      "position": "SD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_178",
      "name": "Mohammed Kudus",
      "position": "MP",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_179",
      "name": "Lee Kang-In",
      "position": "SD",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_180",
      "name": "Kylian Mbappé",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 4,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_181",
      "name": "João Pedro",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 4,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_182",
      "name": "Gabriel Batistuta",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 3,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_183",
      "name": "Andriy Shevchenko",
      "position": "CT",
      "teamId": "terengganufc",
      "goals": 9,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_184",
      "name": "Cristiano Ronaldo",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 14,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_185",
      "name": "Lautaro Martínez",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 5,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_186",
      "name": "Yoane Wissa",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_187",
      "name": "Rodrigo De Paul",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_188",
      "name": "Viktor Gyökeres",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_189",
      "name": "Paul Onuachu",
      "position": "CT",
      "teamId": "psg",
      "goals": 10,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_190",
      "name": "Umar Sadiq",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_191",
      "name": "Jamie Vardy",
      "position": "CT",
      "teamId": "como1907",
      "goals": 15,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_192",
      "name": "Loïs Openda",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 5,
      "assists": 11,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_193",
      "name": "Raúl Jiménez",
      "position": "CT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_194",
      "name": "diaby",
      "position": "CT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_195",
      "name": "Joshua Zirkzee",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_196",
      "name": "Eberechi Eze",
      "position": "MP",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_197",
      "name": "Alexander Sørloth",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_198",
      "name": "Anatolii Trubin",
      "position": "PT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_199",
      "name": "Antonio Sivera",
      "position": "PT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_200",
      "name": "Mike Maignan",
      "position": "PT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_201",
      "name": "V. Milinkovic-Savic",
      "position": "PT",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_202",
      "name": "António Silva",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_203",
      "name": "David de Gea",
      "position": "PT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_204",
      "name": "Romelu Lukaku",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_205",
      "name": "Marc Bernal",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 1,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_206",
      "name": "Francesco Acerbi",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_207",
      "name": "Gregor Kobel",
      "position": "PT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_208",
      "name": "Emiliano Martínez",
      "position": "PT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_209",
      "name": "Thibaut Courtois",
      "position": "PT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_210",
      "name": "David Soria",
      "position": "PT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_211",
      "name": "Orlando Gil",
      "position": "PT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_212",
      "name": "Mateta",
      "position": "CT",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_213",
      "name": "Angelo Peruzzi",
      "position": "PT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_214",
      "name": "Ivan Provedel",
      "position": "PT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_215",
      "name": "Aaron Ramsdale",
      "position": "PT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_216",
      "name": "Bremer",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_217",
      "name": "Tarik Muharemović",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_218",
      "name": "Eric García",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_219",
      "name": "Alireza Beiranvand",
      "position": "PT",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_220",
      "name": "Dani Carvajal",
      "position": "LD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_221",
      "name": "Matthijs de Ligt",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_222",
      "name": "Karim Benzema",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_223",
      "name": "Keylor Navas",
      "position": "PT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_224",
      "name": "Myles Lewis-Skelly",
      "position": "LI",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_225",
      "name": "Manuel Akanji",
      "position": "CT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_226",
      "name": "Illia Zabarnyi",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_227",
      "name": "Cristian Romero",
      "position": "CT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_228",
      "name": "Rayan Aït-Nouri",
      "position": "LI",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_229",
      "name": "Jhon Lucumi",
      "position": "CT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_230",
      "name": "Elmas",
      "position": "MP",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_231",
      "name": "Cacá",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_232",
      "name": "Abdukonir Khusanov",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_233",
      "name": "Fikayo Tomori",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_234",
      "name": "Federico Gatti",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_235",
      "name": "Giorgi Scalvini",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_236",
      "name": "Cristhian Mosquera",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_237",
      "name": "Thierno Barry",
      "position": "CT",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_238",
      "name": "Tomoya Miki",
      "position": "MC",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_239",
      "name": "João Neves",
      "position": "LD",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_240",
      "name": "Joselu",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_241",
      "name": "Ryan Gravenberch",
      "position": "MCD",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_242",
      "name": "Nico González",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_243",
      "name": "Gerard Martín",
      "position": "LI",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_244",
      "name": "Trevoh Chalobah",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_245",
      "name": "Andrea Cambiaso",
      "position": "II",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_246",
      "name": "Éder Militão",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_247",
      "name": "Raphael Onyedika",
      "position": "MCD",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_248",
      "name": "Almada",
      "position": "II",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_249",
      "name": "Bisseck",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_250",
      "name": "Alessandro Nesta",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_251",
      "name": "Nehuén Pérez",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_252",
      "name": "Willian Pacho",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_253",
      "name": "Archie Gray",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_254",
      "name": "Marc Cucurella",
      "position": "LI",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_255",
      "name": "Marcus Thuram",
      "position": "CT",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_256",
      "name": "Federico Valverde",
      "position": "MC",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_257",
      "name": "Rúben Neves",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_258",
      "name": "Malcom",
      "position": "ED",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_259",
      "name": "Omar Marmoush",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_260",
      "name": "Pascal Groß",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_261",
      "name": "Dodô",
      "position": "LD",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_262",
      "name": "Leny Yoro",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_263",
      "name": "Sergi Cardona",
      "position": "LI",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_264",
      "name": "Lewis Dunk",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_265",
      "name": "Yangel Herrera",
      "position": "MCD",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_266",
      "name": "Guedes",
      "position": "II",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_267",
      "name": "Koopmeiners",
      "position": "MCD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_268",
      "name": "Ivan Perisic",
      "position": "EI",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_269",
      "name": "Piero Hincapié",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_270",
      "name": "Milos Kerkez",
      "position": "LI",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_271",
      "name": "Lucas Hernández",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_272",
      "name": "Jules Koundé",
      "position": "LD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_273",
      "name": "Rafael Leão",
      "position": "EI",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_274",
      "name": "Javi Guerra",
      "position": "MC",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_275",
      "name": "Marcelo Brozović",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_276",
      "name": "Paulo Dybala",
      "position": "SD",
      "teamId": "rbleipzig",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_277",
      "name": "Ousmane Dembélé",
      "position": "EI",
      "teamId": "bocajuniors",
      "goals": 4,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_278",
      "name": "Rodrigo Mora",
      "position": "MP",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_279",
      "name": "Sandro Tonali",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_280",
      "name": "Jobe Bellingham",
      "position": "MC",
      "teamId": "arsenal",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_281",
      "name": "Pape Gueye",
      "position": "MCD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_282",
      "name": "Nordi Mukiele",
      "position": "LD",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_283",
      "name": "Qazim Laci",
      "position": "MC",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_284",
      "name": "Koman",
      "position": "EI",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_285",
      "name": "Christensen",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_286",
      "name": "Aritz Elustondo",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_287",
      "name": "Alex Freeman",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_288",
      "name": "Marco Palestra",
      "position": "ID",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_289",
      "name": "Dan Burn",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_290",
      "name": "N'Golo Kanté",
      "position": "MCD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_291",
      "name": "Son Heung-Min",
      "position": "EI",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_292",
      "name": "Malik Tillman",
      "position": "MP",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_293",
      "name": "Hakan Çalhanoğlu",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_294",
      "name": "Paul Pogba",
      "position": "MC",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_295",
      "name": "Lewis Hall",
      "position": "LI",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_296",
      "name": "Charles De Ketelaere",
      "position": "MP",
      "teamId": "galatasaray",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_297",
      "name": "Matteo Guendouzi",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_298",
      "name": "Kobbie Mainoo",
      "position": "MC",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_299",
      "name": "Rodri",
      "position": "MC",
      "teamId": "como1907",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_300",
      "name": "Morten Hjulmand",
      "position": "MCD",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_301",
      "name": "James Ward Prowse",
      "position": "MP",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_302",
      "name": "Mane",
      "position": "II",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_303",
      "name": "Fornals",
      "position": "MP",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_304",
      "name": "Youri Tielemans",
      "position": "MC",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_305",
      "name": "Lucas Torreira",
      "position": "MCD",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_306",
      "name": "Eduardo Camavinga",
      "position": "MC",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_307",
      "name": "Justin Kluivert",
      "position": "MP",
      "teamId": "realmadrid",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_308",
      "name": "Frenkie de Jong",
      "position": "MC",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_309",
      "name": "T. Alexander-Arnold",
      "position": "LD",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_310",
      "name": "Jude Bellingham",
      "position": "MP",
      "teamId": "acmiln",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_311",
      "name": "Brahim Díaz",
      "position": "MP",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 7,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_312",
      "name": "Amadou Onana",
      "position": "MCD",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_313",
      "name": "Conor Gallagher",
      "position": "II",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_314",
      "name": "Yéremy Pino",
      "position": "ID",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_315",
      "name": "Marco Asensio",
      "position": "MP",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_316",
      "name": "Simon Adringa",
      "position": "ID",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_317",
      "name": "Xavi Simons",
      "position": "MP",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_318",
      "name": "Granit Xhaka",
      "position": "MCD",
      "teamId": "tottenhamhotspur",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_319",
      "name": "Josip Stanisić",
      "position": "LD",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_320",
      "name": "Richarlison",
      "position": "EI",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_321",
      "name": "Montiel",
      "position": "LD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_322",
      "name": "Douglas Luiz",
      "position": "MC",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_323",
      "name": "Fabián Ruiz",
      "position": "MC",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_324",
      "name": "Rayan Cherki",
      "position": "MP",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_325",
      "name": "Kevin De Bruyne",
      "position": "MP",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_326",
      "name": "Vitinha",
      "position": "MC",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_327",
      "name": "James Rodríguez",
      "position": "MP",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_328",
      "name": "Arda Güler",
      "position": "ID",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_329",
      "name": "Christopher Nkunku",
      "position": "MP",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_330",
      "name": "Marco Verratti",
      "position": "MC",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_331",
      "name": "Donyell Malen",
      "position": "ED",
      "teamId": "bocajuniors",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_332",
      "name": "Serge Gnabry",
      "position": "ED",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_333",
      "name": "Tijjani Reijnders",
      "position": "MP",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_334",
      "name": "Roony Bardghji",
      "position": "ID",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_335",
      "name": "Oihan Sancet",
      "position": "MP",
      "teamId": "como1907",
      "goals": 0,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_336",
      "name": "Ismael Saibari",
      "position": "MP",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_337",
      "name": "Antonee Robinson",
      "position": "LI",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_338",
      "name": "Dani parejo",
      "position": "MC",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_339",
      "name": "Schick",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_340",
      "name": "Jhon Jhon",
      "position": "MP",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_341",
      "name": "Nicolò Zaniolo",
      "position": "MP",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_342",
      "name": "Nico Williams",
      "position": "II",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_343",
      "name": "Giuliano Simeone",
      "position": "ID",
      "teamId": "realmadrid",
      "goals": 4,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_344",
      "name": "Jamal Musiala",
      "position": "MP",
      "teamId": "fcbarcelona",
      "goals": 4,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_345",
      "name": "Mika Godts",
      "position": "EI",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_346",
      "name": "Igor Paixão",
      "position": "EI",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_347",
      "name": "Jérémy Doku",
      "position": "EI",
      "teamId": "bayernleverkusen",
      "goals": 3,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_348",
      "name": "Kim Min-Jae",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_349",
      "name": "Casemiro",
      "position": "MCD",
      "teamId": "bocajuniors",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_350",
      "name": "Harvey Barnes",
      "position": "EI",
      "teamId": "galatasaray",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_351",
      "name": "Ritsu Doan",
      "position": "ID",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_352",
      "name": "Antoine Semenyo",
      "position": "ED",
      "teamId": "arsenal",
      "goals": 4,
      "assists": 5,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_353",
      "name": "Riyad Mahrez",
      "position": "ED",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_354",
      "name": "Álexbaena",
      "position": "MP",
      "teamId": "tottenhamhotspur",
      "goals": 1,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_355",
      "name": "Bilal El Khannouss",
      "position": "MP",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_356",
      "name": "Soule",
      "position": "ED",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_357",
      "name": "Kramarić",
      "position": "MP",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_358",
      "name": "Portu",
      "position": "ED",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_359",
      "name": "Matheus Cunha",
      "position": "MP",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_360",
      "name": "Pio Esposito",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_361",
      "name": "Talisca",
      "position": "MP",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_362",
      "name": "Fermín López",
      "position": "MP",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_363",
      "name": "Yasin Ayari",
      "position": "MC",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_364",
      "name": "Franco Mastantuono",
      "position": "ED",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_365",
      "name": "Phil Foden",
      "position": "ED",
      "teamId": "bayernleverkusen",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_366",
      "name": "Roger Ibañez",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_367",
      "name": "Rubén Dias",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_368",
      "name": "Samu Aghehowa",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_369",
      "name": "Gabriel Martinelli",
      "position": "EI",
      "teamId": "psg",
      "goals": 3,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_370",
      "name": "Estêvão",
      "position": "ED",
      "teamId": "arsenal",
      "goals": 9,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_371",
      "name": "Cody Gakpo",
      "position": "EI",
      "teamId": "como1907",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_372",
      "name": "Ángel Di María",
      "position": "SD",
      "teamId": "tottenhamhotspur",
      "goals": 16,
      "assists": 7,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_373",
      "name": "Youssef En Nesyri",
      "position": "CT",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_374",
      "name": "Ugarte",
      "position": "MCD",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_375",
      "name": "Kiwior",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_376",
      "name": "Moise Kean",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_377",
      "name": "Francisco Trincão",
      "position": "ED",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_378",
      "name": "Alexander Isak",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 3,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_379",
      "name": "Noni Madueke",
      "position": "ED",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_380",
      "name": "Gonçalo Ramos",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 8,
      "assists": 5,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_381",
      "name": "Alphonso Davies",
      "position": "LI",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_382",
      "name": "Rasmus Højlund",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_383",
      "name": "Gabriel Jesus",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 8,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_384",
      "name": "Iñigo Martínez",
      "position": "CT",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_385",
      "name": "Lucas Beraldo",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_386",
      "name": "Julio Enciso",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_387",
      "name": "Christian Pulišić",
      "position": "CT",
      "teamId": "psg",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_388",
      "name": "Samuel Eto’o",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 9,
      "assists": 3,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_389",
      "name": "Karim Adeyemi",
      "position": "MP",
      "teamId": "como1907",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_390",
      "name": "Edinson Cavani",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_391",
      "name": "Václav Černy",
      "position": "ED",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_392",
      "name": "Foyth",
      "position": "LD",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_393",
      "name": "Laporte",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_394",
      "name": "Artem Dovbyk",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_395",
      "name": "Diogo Jota",
      "position": "EI",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_396",
      "name": "Mikel Oyarzabal",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_397",
      "name": "K. Kvaratskhelia",
      "position": "EI",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_398",
      "name": "Ferran Torres",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 3,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_399",
      "name": "Pierre Høbjbjerg",
      "position": "MC",
      "teamId": "terengganufc",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_400",
      "name": "Endrick",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_401",
      "name": "Hugo Ekitiké",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 7,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_402",
      "name": "Lee Tae-Seok",
      "position": "LI",
      "teamId": "rbleipzig",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_403",
      "name": "Vanderson",
      "position": "LI",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_404",
      "name": "Mateo Retegui",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 4,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_405",
      "name": "Castolo",
      "position": "CT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_406",
      "name": "Jack Grealish",
      "position": "EI",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_407",
      "name": "Serhou Guirassy",
      "position": "CT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_408",
      "name": "Pedro Neto",
      "position": "CT",
      "teamId": "tottenhamhotspur",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_409",
      "name": "Dejan Kulusevski",
      "position": "ED",
      "teamId": "hellasverona",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_410",
      "name": "Shaw",
      "position": "LI",
      "teamId": "bayermunich",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_411",
      "name": "Enner Valencia",
      "position": "CT",
      "teamId": "melbournecity",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_412",
      "name": "Jhon Durán",
      "position": "CT",
      "teamId": "wrexham",
      "goals": 0,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_413",
      "name": "Pedri",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 2,
      "assists": 4,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_414",
      "name": "K. Heinz Rummenigge",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 6,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_415",
      "name": "Zlatan Ibrahimović",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 2,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_416",
      "name": "Neymar JR",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 1,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_417",
      "name": "Désiré Doué",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 1,
      "assists": 2,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_418",
      "name": "Victor Osimhen",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 2,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_419",
      "name": "Marcus Rashford",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 1,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_420",
      "name": "Virgil Van Dijk",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 3,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_421",
      "name": "P. E. Aubameyang",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 2,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    },
    {
      "id": "p_422",
      "name": "Pierre Højbjerg",
      "position": "MC",
      "teamId": "terengganufc",
      "goals": 1,
      "assists": 0,
      "price": 5000000,
      "isLegend": false
    }
  ],
  "rules": [
    {
      "category": "Reglamento de Renovaciones Temporada 9",
      "items": [
        "Posiciones 1 a 5 en Liga: Pagan el 50% de la suma total de su renovación.",
        "Posiciones 6 a 10 en Liga: Pagan el 75% de la suma total de su renovación.",
        "Posiciones 11 a 16 en Liga: Pagan el 100% de la suma total de su renovación.",
        "El costo se consulta en fichajes.com (sueldo/estrellas). Sueldos de 600k o menores se cuentan como 1M.",
        "Jugadores Leyendas/Épicos/Big Time: Se mide según el Valor Global Máximo (ej. Pelé 108 = 108M). Maximum 1 Leyenda o Épico por club.",
        "Si deseas cambiar o eliminar tu leyenda/épico/Big Time, debes pagar su renovación y anotar 'Cambio leyenda por ----' o 'Elimino mi leyenda ----'."
      ]
    }
  ]
};
