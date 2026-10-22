// Base de datos unificada LMI Temporada 10

var INITIAL_LMI_DATA = {
  "season": "Temporada 12",
  "teams": [
    {
      "id": "interdemilan",
      "name": "Inter de Milan",
      "shortName": "INT",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Stadio Giuseppe Meazza",
      "manager": "Alejandro Salgado",
      "budget": 3212000000,
      "initialBudget": 2121000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 11,
      "logo": "Logos Equipos/intermilan.webp",
      "division": "oro"
    },
    {
      "id": "liverpool",
      "name": "Liverpool",
      "shortName": "LVP",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Anfield",
      "manager": "Esteban Arturo",
      "budget": 831000000,
      "initialBudget": 300000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 20,
      "logo": "Logos Equipos/liverpool.png",
      "division": "oro"
    },
    {
      "id": "bocajuniors",
      "name": "Boca Juniors",
      "shortName": "BOC",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Alberto J. Armando",
      "manager": "Luis Fajardo",
      "budget": 1241000000,
      "initialBudget": 759000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 5,
      "logo": "Logos Equipos/boca.png",
      "division": "oro"
    },
    {
      "id": "fcbarcelona",
      "name": "FC Barcelona",
      "shortName": "FC",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Spotify Camp Nou",
      "manager": "Robert Salve",
      "budget": 2725000000,
      "initialBudget": 2569000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 4,
      "logo": "Logos Equipos/fcbarcelona.png",
      "division": "plata"
    },
    {
      "id": "staderennais",
      "name": "Stade Rennais",
      "shortName": "REN",
      "colors": {
        "primary": "#e30613",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #120304 0%, #850c12 55%, #141414 100%)"
      },
      "stadium": "Roazhon Park",
      "manager": "Daniel Herrera",
      "budget": 500000000,
      "initialBudget": 357000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 13,
      "logo": "Logos Equipos/staderennais.png",
      "division": "plata"
    },
    {
      "id": "atleticodemadrid",
      "name": "Atletico de Madrid",
      "shortName": "ATM",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Cívitas Metropolitano",
      "manager": "Fernando",
      "budget": 397000000,
      "initialBudget": 11000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 9,
      "logo": "Logos Equipos/atleticomadrid.webp",
      "division": "oro"
    },
    {
      "id": "borussiadortmund",
      "name": "Borussia Dortmund",
      "shortName": "BVB",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Signal Iduna Park",
      "manager": "Eseba",
      "budget": 514000000,
      "initialBudget": 181000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 16,
      "logo": "Logos Equipos/borussia.webp",
      "division": "oro"
    },
    {
      "id": "bayernleverkusen",
      "name": "Bayern Leverkusen",
      "shortName": "BAY",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "BayArena",
      "manager": "Santiago Encinas",
      "budget": 385000000,
      "initialBudget": 2154000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 7,
      "logo": "Logos Equipos/bayernleverkusen.png",
      "division": "oro"
    },
    {
      "id": "psg",
      "name": "PSG",
      "shortName": "PSG",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Parc des Princes",
      "manager": "Alvaro Castro",
      "budget": 1071000000,
      "initialBudget": 810000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 3,
      "logo": "Logos Equipos/psg.png",
      "division": "oro"
    },
    {
      "id": "realmadrid",
      "name": "Real Madrid",
      "shortName": "REA",
      "colors": {
        "primary": "#000000",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Santiago Bernabéu",
      "manager": "Duvan Ardila",
      "budget": 996000000,
      "initialBudget": 223000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 8,
      "logo": "Logos Equipos/realmadrid.webp",
      "division": "plata"
    },
    {
      "id": "como1907",
      "name": "Como 1907",
      "shortName": "COM",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Stadio Giuseppe Sinigaglia",
      "manager": "Jose Encinas",
      "budget": 2865000000,
      "initialBudget": 2575000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 1,
      "logo": "Logos Equipos/como.webp",
      "division": "oro"
    },
    {
      "id": "galatasaray",
      "name": "Galatasaray",
      "shortName": "GAL",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Rams Park",
      "manager": "Jesus Parra",
      "budget": 404000000,
      "initialBudget": 119000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 10,
      "logo": "Logos Equipos/galatasaray.png",
      "division": "oro"
    },
    {
      "id": "losclille",
      "name": "LOSC Lille",
      "shortName": "LIL",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Stade Pierre-Mauroy",
      "manager": "J Alvarez",
      "budget": 630000000,
      "initialBudget": 300000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 19,
      "logo": "Logos Equipos/lille.png",
      "division": "plata"
    },
    {
      "id": "manchestercity",
      "name": "Manchester City",
      "shortName": "CYT",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Etihad Stadium",
      "manager": "Director Técnico",
      "budget": 1328000000,
      "initialBudget": 280000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 6,
      "logo": "Logos Equipos/manchestercity.png",
      "division": "oro"
    },
    {
      "id": "arsenal",
      "name": "Arsenal",
      "shortName": "ARS",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Emirates Stadium",
      "manager": "Ronald Acosta",
      "budget": 438000000,
      "initialBudget": 211000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 2,
      "logo": "Logos Equipos/arsenal.png",
      "division": "plata"
    },
    {
      "id": "acmiln",
      "name": "AC Milan",
      "shortName": "AC",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Stadio Giuseppe Meazza",
      "manager": "Daniel Ugarte",
      "budget": 221000000,
      "initialBudget": 440000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 15,
      "logo": "Logos Equipos/acmilan.webp",
      "division": "plata"
    },
    {
      "id": "fctwente",
      "name": "FC Twente",
      "shortName": "TWN",
      "colors": {
        "primary": "#ff2424",
        "secondary": "#000000",
        "bgGradient": "linear-gradient(135deg, #ff2424 0%, #000000 100%)"
      },
      "stadium": "De Grolsch Veste",
      "manager": "Altas Mexico",
      "budget": 370000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 19,
      "logo": "Logos Equipos/fctwente.png",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "manchesterunited",
      "name": "Manchester United",
      "shortName": "MAN",
      "colors": {
        "primary": "#ff0000",
        "secondary": "#000000",
        "bgGradient": "linear-gradient(135deg, #ff0000 0%, #000000 100%)"
      },
      "stadium": "Old Trafford",
      "manager": "Jlservicehvac",
      "budget": 389000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 20,
      "logo": "Logos Equipos/manchesterunited.png",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "ajaxdeamsterdam",
      "name": "Ajax de Ámsterdam",
      "shortName": "AJX",
      "colors": {
        "primary": "#3b82f6",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #3b82f6 0%, #000000 100%)"
      },
      "stadium": "Johan Cruyff Arena",
      "manager": "J Castillo",
      "budget": 183000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 21,
      "logo": "Logos Equipos/ajax.png",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "chelseafc",
      "name": "Chelsea FC",
      "shortName": "CHE",
      "colors": {
        "primary": "#071b8c",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #071b8c 0%, #000000 100%)"
      },
      "stadium": "Stamford Bridge",
      "manager": "RogerSu",
      "budget": 500000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 25,
      "logo": "Logos Equipos/chelsea.webp",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "brightonhovealbion",
      "name": "Brighton & Hove Albion",
      "shortName": "BRG",
      "colors": {
        "primary": "#035aa6",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #035aa6 0%, #000000 100%)"
      },
      "stadium": "The Amex Stadium",
      "manager": "J",
      "budget": 500000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 26,
      "logo": "Logos Equipos/brighton.png",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "acffiorentina",
      "name": "ACF Fiorentina",
      "shortName": "FIO",
      "colors": {
        "primary": "#5a378c",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #5a378c 0%, #000000 100%)"
      },
      "stadium": "Estadio Artemio Franchi",
      "manager": "David",
      "budget": 473000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 23,
      "logo": "Logos Equipos/fiorentina.webp",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "riverplate",
      "name": "River Plate",
      "shortName": "RVP",
      "colors": {
        "primary": "#004789",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
      },
      "stadium": "Estadio Monumental",
      "manager": "Da Niel",
      "budget": 411000000,
      "initialBudget": 300000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 18,
      "logo": "Logos Equipos/riverplate.webp",
      "division": "oro"
    },
    {
      "id": "vascodagama",
      "name": "Vasco da Gama",
      "shortName": "VDG",
      "colors": {
        "primary": "#000000",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #000000 0%, #000000 100%)"
      },
      "stadium": "São Januário",
      "manager": "Dzyuba",
      "budget": 500000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 25,
      "logo": "Logos Equipos/vasco.png",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "rangersfootballclub",
      "name": "Rangers Football Club",
      "shortName": "RFC",
      "colors": {
        "primary": "#0339a6",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0339a6 0%, #000000 100%)"
      },
      "stadium": "Ibrox Stadium",
      "manager": "Jose M Bello V",
      "budget": 500000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 25,
      "logo": "Logos Equipos/rangers.webp",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    },
    {
      "id": "carabobofutbolclub",
      "name": "Carabobo Fútbol Club",
      "shortName": "CFC",
      "colors": {
        "primary": "#591212",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #591212 0%, #000000 100%)"
      },
      "stadium": "Polideportivo Misael Delgado",
      "manager": "Jesus",
      "budget": 500000000,
      "initialBudget": 500000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 26,
      "logo": "Logos Equipos/carabobo.webp",
      "division": "plata",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      }
    }
  ],
  "players": [
    {
      "id": "p_1791780792740_1",
      "name": "Jan Oblak",
      "position": "PT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_1",
      "name": "Christian Abbiati",
      "position": "PT",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_2",
      "name": "Matteo Gabbia",
      "position": "CT",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_3",
      "name": "Francesco Acerbi",
      "position": "CT",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_4",
      "name": "Kieran Trippier",
      "position": "LD",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_5",
      "name": "Antonee Robinson",
      "position": "LI",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_6",
      "name": "Christian Ordóñez",
      "position": "MCD",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_7",
      "name": "Fabio Miretti",
      "position": "MP",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_8",
      "name": "Daniel Maldini",
      "position": "MP",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_9",
      "name": "Takumi Minamino",
      "position": "II",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_10",
      "name": "Takuma Asano",
      "position": "II",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_11",
      "name": "Eric Cantona",
      "position": "DC",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_12",
      "name": "Diego Carlos",
      "position": "CT",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_13",
      "name": "Vitor Reis",
      "position": "CT",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_14",
      "name": "Davide Bartesaghi",
      "position": "LI",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_15",
      "name": "Wesley",
      "position": "II",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_16",
      "name": "Pablo Maia",
      "position": "MCD",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_17",
      "name": "Sho Inagaki",
      "position": "MC",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_18",
      "name": "Ibrahim Maza",
      "position": "MC",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_19",
      "name": "Lazar Samardžić",
      "position": "MP",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_20",
      "name": "Brennan Johnson",
      "position": "ED",
      "teamId": "liverpool",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_21",
      "name": "Gonzalo Plata",
      "position": "ED",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_22",
      "name": "Brian Brobbey",
      "position": "DC",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039523671_23",
      "name": "Niclas Füllkrug",
      "position": "DC",
      "teamId": "liverpool",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_1",
      "name": "Oliver Kahn",
      "position": "PT",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_2",
      "name": "Joshua Kimmich",
      "position": "LD",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_3",
      "name": "Stefan Savić",
      "position": "CT",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_4",
      "name": "Levi Colwill",
      "position": "CT",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_5",
      "name": "Alex Sandro",
      "position": "LI",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_6",
      "name": "Mateo Kovačić",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_7",
      "name": "Toni Kroos",
      "position": "MCD",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_8",
      "name": "Jack Grealish",
      "position": "EI",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_9",
      "name": "Takefusa Kubo",
      "position": "ED",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_10",
      "name": "Michel Platini",
      "position": "MP",
      "teamId": "fctwente",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_11",
      "name": "Johan Cruyff",
      "position": "DC",
      "teamId": "fctwente",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_12",
      "name": "DEC Lothar Matthäus",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_13",
      "name": "DEC Lisandro Martínez",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_14",
      "name": "Yoane Wissa",
      "position": "DC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_15",
      "name": "DEC Antonio Rüdiger",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_16",
      "name": "Ruud Gullit",
      "position": "MP",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_17",
      "name": "MDI Nicolás Tagliafico",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_18",
      "name": "MDD Jeremie Frimpong",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_19",
      "name": "Andrés Iniesta",
      "position": "MC",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_20",
      "name": "Diogo Jota",
      "position": "EI",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_21",
      "name": "Iñaki Williams",
      "position": "ED",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_22",
      "name": "Thomas Müller",
      "position": "MP",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039636832_23",
      "name": "Diego Maradona",
      "position": "SD",
      "teamId": "fctwente",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_1",
      "name": "Vítor Baía",
      "position": "PT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_2",
      "name": "Konstantinos Mavropanos",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_3",
      "name": "Franz Beckenbauer",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_4",
      "name": "Nehuén Pérez",
      "position": "LD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_5",
      "name": "Ben Chilwell",
      "position": "LI",
      "teamId": "manchesterunited",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_6",
      "name": "Manuel Ugarte",
      "position": "MCD",
      "teamId": "manchesterunited",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_7",
      "name": "Leon Goretzka",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_8",
      "name": "Luis Alberto",
      "position": "MC",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_9",
      "name": "João Félix",
      "position": "EI",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 5,
      "goals_liga": 0,
      "assists_liga": 5,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_10",
      "name": "Federico Chiesa",
      "position": "ED",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_11",
      "name": "Diego Forlán",
      "position": "DC",
      "teamId": "manchesterunited",
      "goals": 11,
      "assists": 0,
      "goals_liga": 11,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_12",
      "name": "Guglielmo Vicario",
      "position": "PT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_13",
      "name": "Eric Dier",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_14",
      "name": "Gianluca Mancini",
      "position": "CT",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_15",
      "name": "Miguel Gutiérrez",
      "position": "LI",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_16",
      "name": "Juan Cuadrado",
      "position": "LD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_17",
      "name": "Konrad Laimer",
      "position": "LD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_18",
      "name": "Rúben Neves",
      "position": "MCD",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_19",
      "name": "Lovro Majer",
      "position": "MP",
      "teamId": "manchesterunited",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_20",
      "name": "Thiago Almada",
      "position": "MP",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 4,
      "goals_liga": 0,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_21",
      "name": "Rafa Silva",
      "position": "MP",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_22",
      "name": "Leozinho",
      "position": "ED",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039745455_23",
      "name": "Terem Moffi",
      "position": "DC",
      "teamId": "manchesterunited",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_1",
      "name": "David Raya",
      "position": "PT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_2",
      "name": "Noussair Mazraoui",
      "position": "LI",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_3",
      "name": "Marquinhos",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_4",
      "name": "Manuel Akanji",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_5",
      "name": "Djed Spence",
      "position": "LD",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_6",
      "name": "Martín Zubimendi",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_7",
      "name": "Weston McKennie",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 4,
      "goals_liga": 0,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_8",
      "name": "Vinícius Júnior",
      "position": "EI",
      "teamId": "galatasaray",
      "goals": 5,
      "assists": 3,
      "goals_liga": 5,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_9",
      "name": "Antoine Semenyo",
      "position": "ED",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_10",
      "name": "Viktor Gyökeres",
      "position": "DC",
      "teamId": "galatasaray",
      "goals": 4,
      "assists": 1,
      "goals_liga": 4,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_11",
      "name": "Semih Kılıçsoy",
      "position": "DC",
      "teamId": "galatasaray",
      "goals": 11,
      "assists": 2,
      "goals_liga": 11,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_12",
      "name": "Paul Scholes",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_13",
      "name": "Eberechi Eze",
      "position": "MP",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_14",
      "name": "Alexander Isak",
      "position": "DC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_15",
      "name": "Charles De Ketelaere",
      "position": "DC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_16",
      "name": "Mikel Merino",
      "position": "MP",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_17",
      "name": "Pierre Kalulu",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_18",
      "name": "Giorgi Mamardashvili",
      "position": "PT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_19",
      "name": "Julio Enciso",
      "position": "SD",
      "teamId": "galatasaray",
      "goals": 2,
      "assists": 3,
      "goals_liga": 2,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_20",
      "name": "Nico González",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_21",
      "name": "Marcos Senesi",
      "position": "CT",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_22",
      "name": "Mateus Fernandes",
      "position": "MC",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039794983_23",
      "name": "Myles Lewis-Skelly",
      "position": "MCD",
      "teamId": "galatasaray",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_1",
      "name": "Alisson Becker",
      "position": "PT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_2",
      "name": "Gabriel Magalhães",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_3",
      "name": "Jules Koundé",
      "position": "LD",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_4",
      "name": "Steven Gerrard",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_5",
      "name": "Paolo Maldini",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_6",
      "name": "Thiago Alcântara",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_7",
      "name": "Malo Gusto",
      "position": "LD",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_8",
      "name": "Alphonso Davies",
      "position": "LI",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_9",
      "name": "Bryan Mbeumo",
      "position": "DC",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_10",
      "name": "Leroy Sané",
      "position": "ED",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_11",
      "name": "Rodrigo De Paul",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_12",
      "name": "Marc Bernal",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_13",
      "name": "Keylor Navas",
      "position": "PT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_14",
      "name": "Mohamed Salah",
      "position": "SD",
      "teamId": "bocajuniors",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_15",
      "name": "Luka Modrić",
      "position": "MC",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_16",
      "name": "Kylian Mbappé",
      "position": "DC",
      "teamId": "bocajuniors",
      "goals": 11,
      "assists": 2,
      "goals_liga": 11,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_17",
      "name": "Éder Militão",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_18",
      "name": "Nicolás Otamendi",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_19",
      "name": "Donyell Malen",
      "position": "ED",
      "teamId": "bocajuniors",
      "goals": 3,
      "assists": 5,
      "goals_liga": 3,
      "assists_liga": 5,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_20",
      "name": "Manuel Locatelli",
      "position": "MCD",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_21",
      "name": "Dean Huijsen",
      "position": "CT",
      "teamId": "bocajuniors",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_22",
      "name": "Lionel Messi",
      "position": "SD",
      "teamId": "bocajuniors",
      "goals": 6,
      "assists": 2,
      "goals_liga": 6,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039864584_23",
      "name": "Sergio Agüero",
      "position": "DC",
      "teamId": "bocajuniors",
      "goals": 3,
      "assists": 4,
      "goals_liga": 3,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_1",
      "name": "Weverton",
      "position": "PT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_2",
      "name": "Luciano Juba",
      "position": "LI",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_3",
      "name": "Daniel Van Buyten",
      "position": "CT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_4",
      "name": "Fabrício Bruno",
      "position": "CT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_6",
      "name": "Jordan Henderson",
      "position": "MCD",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_7",
      "name": "Giorgian de Arrascaeta",
      "position": "MP",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_8",
      "name": "Alan Patrick",
      "position": "MP",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_9",
      "name": "Luiz Araújo",
      "position": "ID",
      "teamId": "chelseafc",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_10",
      "name": "Yuri Alberto",
      "position": "DC",
      "teamId": "chelseafc",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_11",
      "name": "Vitor Roque",
      "position": "DC",
      "teamId": "chelseafc",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_12",
      "name": "Thiago Silva",
      "position": "CT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_13",
      "name": "Lucas Moura",
      "position": "ID",
      "teamId": "chelseafc",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_14",
      "name": "Juninho Capixaba",
      "position": "LI",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_15",
      "name": "Damián Bobadilla",
      "position": "MC",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_16",
      "name": "Pierre-Emerick Aubameyang",
      "position": "DC",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_17",
      "name": "Cássio",
      "position": "PT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_18",
      "name": "Rodrigo Garro",
      "position": "MP",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_19",
      "name": "Ganso",
      "position": "MP",
      "teamId": "chelseafc",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_20",
      "name": "Leandro Trossard",
      "position": "EI",
      "teamId": "chelseafc",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_21",
      "name": "Flaco López",
      "position": "DC",
      "teamId": "chelseafc",
      "goals": 3,
      "assists": 0,
      "goals_liga": 3,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_22",
      "name": "Gustavo Gómez",
      "position": "CT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039904071_23",
      "name": "Robert Arboleda",
      "position": "CT",
      "teamId": "chelseafc",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_1",
      "name": "Jordan Pickford",
      "position": "PT",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_2",
      "name": "Cristian Romero",
      "position": "CT",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_3",
      "name": "Franco Baresi",
      "position": "CT",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_4",
      "name": "Aymeric Laporte",
      "position": "LI",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_5",
      "name": "Cafú",
      "position": "LD",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_6",
      "name": "Ryan Gravenberch",
      "position": "MCD",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_7",
      "name": "Renato Veiga",
      "position": "MP",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_8",
      "name": "Michael Olise",
      "position": "ED",
      "teamId": "manchestercity",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_9",
      "name": "Marcus Rashford",
      "position": "EI",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_10",
      "name": "Robert Lewandowski",
      "position": "DC",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_11",
      "name": "Antoine Griezmann",
      "position": "DC",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_12",
      "name": "Noni Madueke",
      "position": "ED",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_13",
      "name": "Declan Rice",
      "position": "MC",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_14",
      "name": "MDD Serge Gnabry",
      "position": "MC",
      "teamId": "manchestercity",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_15",
      "name": "Andrew Robertson",
      "position": "LI",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_16",
      "name": "Fabinho",
      "position": "MCD",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_17",
      "name": "Jorginho",
      "position": "MCD",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_18",
      "name": "Bruno Fernandes",
      "position": "MP",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_19",
      "name": "Bradley Barcola",
      "position": "EI",
      "teamId": "manchestercity",
      "goals": 3,
      "assists": 1,
      "goals_liga": 3,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_20",
      "name": "Bukayo Saka",
      "position": "ED",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_21",
      "name": "Alexander Sørloth",
      "position": "DC",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_22",
      "name": "Kai Havertz",
      "position": "DC",
      "teamId": "manchestercity",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039948207_23",
      "name": "Edinson Cavani",
      "position": "DC",
      "teamId": "manchestercity",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_1",
      "name": "Gianluigi Donnarumma",
      "position": "PT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_2",
      "name": "Nuno Mendes",
      "position": "LI",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_3",
      "name": "Pepe",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_4",
      "name": "Virgil van Dijk",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_5",
      "name": "João Cancelo",
      "position": "LD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_6",
      "name": "Nicolò Barella",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_7",
      "name": "Youri Tielemans",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_8",
      "name": "Nico Paz",
      "position": "MP",
      "teamId": "bayernleverkusen",
      "goals": 4,
      "assists": 2,
      "goals_liga": 4,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_9",
      "name": "Ousmane Dembélé",
      "position": "EI",
      "teamId": "bayernleverkusen",
      "goals": 3,
      "assists": 0,
      "goals_liga": 3,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_10",
      "name": "Karim Adeyemi",
      "position": "ED",
      "teamId": "bayernleverkusen",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_11",
      "name": "Lautaro Martínez",
      "position": "DC",
      "teamId": "bayernleverkusen",
      "goals": 4,
      "assists": 0,
      "goals_liga": 4,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_12",
      "name": "Gregor Kobel",
      "position": "PT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_13",
      "name": "John Stones",
      "position": "CT",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_14",
      "name": "Vitinha",
      "position": "MC",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_15",
      "name": "Warren Zaïre-Emery",
      "position": "MC",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_16",
      "name": "Hakan Çalhanoğlu",
      "position": "MCD",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_17",
      "name": "James Rodríguez",
      "position": "MP",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_18",
      "name": "Brahim Díaz",
      "position": "MP",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_19",
      "name": "James Maddison",
      "position": "MP",
      "teamId": "bayernleverkusen",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_20",
      "name": "Jérémy Doku",
      "position": "EI",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_21",
      "name": "Savinho",
      "position": "ID",
      "teamId": "bayernleverkusen",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_22",
      "name": "Gabriel Jesus",
      "position": "DC",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792039977160_23",
      "name": "Pio Esposito (P)",
      "position": "DC",
      "teamId": "bayernleverkusen",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_1",
      "name": "Thibaut Courtois",
      "position": "PT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_2",
      "name": "Ronald Araújo",
      "position": "CT",
      "teamId": "como1907",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_3",
      "name": "Jan Paul van Hecke",
      "position": "CT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_4",
      "name": "Riccardo Calafiori",
      "position": "LI",
      "teamId": "como1907",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_5",
      "name": "Kyle Walker",
      "position": "LD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_6",
      "name": "Felix Nmecha",
      "position": "MCD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_7",
      "name": "Andrea Pirlo",
      "position": "MCD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_8",
      "name": "Florian Wirtz",
      "position": "MP",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_9",
      "name": "Kenan Yıldız",
      "position": "SD",
      "teamId": "como1907",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_10",
      "name": "Lamine Yamal",
      "position": "ED",
      "teamId": "como1907",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_11",
      "name": "Jamie Vardy",
      "position": "DC",
      "teamId": "como1907",
      "goals": 6,
      "assists": 0,
      "goals_liga": 6,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_12",
      "name": "Vozinha",
      "position": "PT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_13",
      "name": "Takehiro Tomiyasu",
      "position": "CT",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_14",
      "name": "Sergi Cardona",
      "position": "LI",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_15",
      "name": "Giovanni Di Lorenzo",
      "position": "LD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_16",
      "name": "Casemiro",
      "position": "MCD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_17",
      "name": "Bruno Guimarães",
      "position": "MCD",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_18",
      "name": "Morgan Rogers",
      "position": "MP",
      "teamId": "como1907",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_19",
      "name": "Dominik Szoboszlai",
      "position": "MC",
      "teamId": "como1907",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_20",
      "name": "Maghnes Akliouche",
      "position": "SD",
      "teamId": "como1907",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_21",
      "name": "Lorenzo Insigne",
      "position": "EI",
      "teamId": "como1907",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_22",
      "name": "Ademola Lookman",
      "position": "MP",
      "teamId": "como1907",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040014502_23",
      "name": "Sadio Mané",
      "position": "EI",
      "teamId": "como1907",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_1",
      "name": "Dominik Livaković",
      "position": "PT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_2",
      "name": "Sidny Cabral",
      "position": "LI",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_3",
      "name": "Sven Botman",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_4",
      "name": "Enzo Boyomo",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_5",
      "name": "Pedro Porro",
      "position": "LD",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_6",
      "name": "Samuele Ricci",
      "position": "MCD",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_7",
      "name": "Ibrahim Sangaré",
      "position": "MCD",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_8",
      "name": "Talisca",
      "position": "MP",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 4,
      "goals_liga": 1,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_9",
      "name": "Memphis Depay",
      "position": "SD",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 5,
      "goals_liga": 0,
      "assists_liga": 5,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_10",
      "name": "Gareth Bale",
      "position": "SD",
      "teamId": "arsenal",
      "goals": 10,
      "assists": 1,
      "goals_liga": 10,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_11",
      "name": "Andriy Shevchenko",
      "position": "DC",
      "teamId": "arsenal",
      "goals": 6,
      "assists": 4,
      "goals_liga": 6,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_12",
      "name": "Aaron Ramsdale",
      "position": "PT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_13",
      "name": "Ezri Konsa",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_14",
      "name": "Mario Gila",
      "position": "CT",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_15",
      "name": "Reinildo Mandava",
      "position": "LI",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_17",
      "name": "Daichi Kamada",
      "position": "MC",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_18",
      "name": "Lucas Paquetá",
      "position": "MC",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_19",
      "name": "Manu Koné",
      "position": "MC",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_20",
      "name": "Malik Tillman",
      "position": "MP",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_21",
      "name": "Eldor Shomurodov",
      "position": "MP",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_22",
      "name": "Jarrod Bowen",
      "position": "ID",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 3,
      "goals_liga": 1,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_23",
      "name": "Vedat Muriqi",
      "position": "DC",
      "teamId": "arsenal",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040054246_24",
      "name": "Álvaro Morata",
      "position": "DC",
      "teamId": "arsenal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_1",
      "name": "Mike Maignan",
      "position": "PT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_2",
      "name": "Emmanuel Agbadou",
      "position": "CT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_3",
      "name": "Nico Schlotterbeck",
      "position": "CT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_4",
      "name": "Théo Hernandez",
      "position": "LI",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_5",
      "name": "Stefan Posch",
      "position": "LD",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_6",
      "name": "João Palhinha",
      "position": "MCD",
      "teamId": "psg",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_7",
      "name": "Alexis Mac Allister",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_8",
      "name": "Xavi Simons",
      "position": "MP",
      "teamId": "psg",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_9",
      "name": "Raphinha",
      "position": "ED",
      "teamId": "psg",
      "goals": 4,
      "assists": 0,
      "goals_liga": 4,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_10",
      "name": "Luis Díaz",
      "position": "EI",
      "teamId": "psg",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_11",
      "name": "Diego Costa",
      "position": "DC",
      "teamId": "psg",
      "goals": 4,
      "assists": 0,
      "goals_liga": 4,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_12",
      "name": "Diogo Costa (P)",
      "position": "PT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_13",
      "name": "Marc Guéhi",
      "position": "CT",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_14",
      "name": "Gerard Martín",
      "position": "LI",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_15",
      "name": "Dodô",
      "position": "LD",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_16",
      "name": "Sandro Tonali",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_17",
      "name": "Thomas Partey",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_18",
      "name": "Marco Asensio",
      "position": "MP",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_19",
      "name": "Pablo Barrios",
      "position": "MC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_20",
      "name": "Ritsu Doan",
      "position": "ID",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_21",
      "name": "Gabriel Martinelli",
      "position": "EI",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_22",
      "name": "Adama Traoré",
      "position": "ED",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040197583_23",
      "name": "Christian Pulisic",
      "position": "DC",
      "teamId": "psg",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_1",
      "name": "Yassine Bounou",
      "position": "PT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_2",
      "name": "David Alaba",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_3",
      "name": "William Saliba",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_4",
      "name": "Jurriën Timber",
      "position": "LD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_5",
      "name": "Ferdi Kadıoğlu",
      "position": "LI",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_6",
      "name": "N'Golo Kanté",
      "position": "MCD",
      "teamId": "fcbarcelona",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_7",
      "name": "Daniele De Rossi",
      "position": "MCD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_8",
      "name": "Gavi",
      "position": "MC",
      "teamId": "fcbarcelona",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_9",
      "name": "Orkun Kökçü",
      "position": "MC",
      "teamId": "fcbarcelona",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_10",
      "name": "Jamal Musiala",
      "position": "MP",
      "teamId": "fcbarcelona",
      "goals": 1,
      "assists": 2,
      "goals_liga": 1,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_11",
      "name": "Luis Suárez",
      "position": "DC",
      "teamId": "fcbarcelona",
      "goals": 3,
      "assists": 2,
      "goals_liga": 3,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_12",
      "name": "Joan García",
      "position": "PT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_13",
      "name": "Pau Cubarsí",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_14",
      "name": "Eric García",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_15",
      "name": "Edmond Tapsoba",
      "position": "CT",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_16",
      "name": "Dani Carvajal",
      "position": "LD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_17",
      "name": "Marc Cucurella",
      "position": "LI",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_18",
      "name": "Moisés Caicedo",
      "position": "MCD",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_19",
      "name": "Frenkie de Jong",
      "position": "MC",
      "teamId": "fcbarcelona",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_20",
      "name": "Pedri",
      "position": "MC",
      "teamId": "fcbarcelona",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_21",
      "name": "Fermín López",
      "position": "MP",
      "teamId": "fcbarcelona",
      "goals": 4,
      "assists": 2,
      "goals_liga": 4,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_22",
      "name": "Gonçalo Ramos",
      "position": "DC",
      "teamId": "fcbarcelona",
      "goals": 3,
      "assists": 1,
      "goals_liga": 3,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040239414_23",
      "name": "Ferran Torres",
      "position": "DC",
      "teamId": "fcbarcelona",
      "goals": 2,
      "assists": 3,
      "goals_liga": 2,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_1",
      "name": "Unai Simón",
      "position": "PT",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_2",
      "name": "Hiroki Ito",
      "position": "LI",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_3",
      "name": "Axel Witsel",
      "position": "CT",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_4",
      "name": "Micky van de Ven",
      "position": "CT",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_5",
      "name": "Marcos Llorente",
      "position": "LD",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_6",
      "name": "Marc Casadó",
      "position": "MCD",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_7",
      "name": "Fabián Ruiz",
      "position": "MC",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_8",
      "name": "Anthony Gordon",
      "position": "EI",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_9",
      "name": "Nico Williams",
      "position": "EI",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_10",
      "name": "Ronaldinho Gaúcho (P)",
      "position": "EI",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_11",
      "name": "Liam Delap",
      "position": "DC",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_12",
      "name": "Franck Kessié",
      "position": "MC",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_13",
      "name": "Carles Puyol",
      "position": "CT",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_14",
      "name": "Josip Šutalo",
      "position": "CT",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_15",
      "name": "Xavi Espart",
      "position": "LD",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_16",
      "name": "Hamza Abdelkarim",
      "position": "DC",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_17",
      "name": "Dani Alves",
      "position": "LD",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_18",
      "name": "Benjamin Šeško",
      "position": "DC",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_19",
      "name": "Ivan Rakitić",
      "position": "MP",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_20",
      "name": "Andreas Schjelderup",
      "position": "EI",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_21",
      "name": "Sergi Roberto",
      "position": "LD",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_22",
      "name": "Ethan Nwaneri",
      "position": "MP",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040288950_23",
      "name": "Allan Saint-Maximin",
      "position": "DC",
      "teamId": "losclille",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_1",
      "name": "Yann Sommer",
      "position": "PT",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_2",
      "name": "Rizky Ridho",
      "position": "CT",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_3",
      "name": "Murillo",
      "position": "CT",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_4",
      "name": "Renato Veiga",
      "position": "CT",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_5",
      "name": "Jorrel Hato",
      "position": "LI",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_6",
      "name": "Roméo Lavia",
      "position": "MCD",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_7",
      "name": "Ao Tanaka",
      "position": "MCD",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_8",
      "name": "Christopher Nkunku",
      "position": "MC",
      "teamId": "staderennais",
      "goals": 2,
      "assists": 2,
      "goals_liga": 2,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_9",
      "name": "George Best",
      "position": "ED",
      "teamId": "staderennais",
      "goals": 14,
      "assists": 3,
      "goals_liga": 14,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_10",
      "name": "Ayase Ueda",
      "position": "DC",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_11",
      "name": "Eden Hazard",
      "position": "SD",
      "teamId": "staderennais",
      "goals": 5,
      "assists": 8,
      "goals_liga": 5,
      "assists_liga": 8,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_12",
      "name": "Junya Ito",
      "position": "MP",
      "teamId": "staderennais",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_13",
      "name": "Kento Shiogai",
      "position": "DC",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_14",
      "name": "Emile Smith Rowe",
      "position": "MP",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_15",
      "name": "Patrick Dorgu",
      "position": "LI",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_16",
      "name": "Jay Idzes",
      "position": "CT",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_17",
      "name": "Marselino Ferdinan",
      "position": "MP",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_18",
      "name": "Petar Sučić",
      "position": "MCD",
      "teamId": "staderennais",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_19",
      "name": "Keito Nakamura",
      "position": "II",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_20",
      "name": "Benjamin Cremaschi",
      "position": "MC",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_21",
      "name": "Valentín Barco",
      "position": "MC",
      "teamId": "staderennais",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_22",
      "name": "Douglas Luiz",
      "position": "MC",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040339328_23",
      "name": "Marc-André ter Stegen",
      "position": "PT",
      "teamId": "staderennais",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_1",
      "name": "Anatoliy Trubin",
      "position": "PT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_2",
      "name": "Alejandro Balde",
      "position": "LI",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_3",
      "name": "Alessandro Bastoni",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_4",
      "name": "Dayot Upamecano",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_5",
      "name": "Lutsharel Geertruida",
      "position": "LD",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_6",
      "name": "Edgar Davids",
      "position": "MCD",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_7",
      "name": "Jude Bellingham",
      "position": "MP",
      "teamId": "realmadrid",
      "goals": 2,
      "assists": 2,
      "goals_liga": 2,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_8",
      "name": "Désiré Doué",
      "position": "ED",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 4,
      "goals_liga": 0,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_9",
      "name": "Kingsley Coman",
      "position": "EI",
      "teamId": "realmadrid",
      "goals": 1,
      "assists": 3,
      "goals_liga": 1,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_10",
      "name": "Francisco Conceição",
      "position": "ED",
      "teamId": "realmadrid",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_11",
      "name": "Omar Marmoush",
      "position": "DC",
      "teamId": "realmadrid",
      "goals": 7,
      "assists": 0,
      "goals_liga": 7,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_12",
      "name": "Calvin Bassey",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_13",
      "name": "Abdukodir Khusanov",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_14",
      "name": "Malick Thiaw",
      "position": "CT",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_15",
      "name": "Piero Hincapié",
      "position": "LI",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_16",
      "name": "João Pedro",
      "position": "MP",
      "teamId": "realmadrid",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_17",
      "name": "Cole Palmer",
      "position": "MP",
      "teamId": "realmadrid",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_18",
      "name": "Kerem Aktürkoğlu",
      "position": "II",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_19",
      "name": "Franco Mastantuono",
      "position": "ED",
      "teamId": "realmadrid",
      "goals": 1,
      "assists": 2,
      "goals_liga": 1,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_20",
      "name": "Mohammed Kudus",
      "position": "ID",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_21",
      "name": "Moise Kean",
      "position": "DC",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_22",
      "name": "Victor Osimhen",
      "position": "DC",
      "teamId": "realmadrid",
      "goals": 3,
      "assists": 0,
      "goals_liga": 3,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040371541_23",
      "name": "Jonathan David",
      "position": "DC",
      "teamId": "realmadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_1",
      "name": "David de Gea",
      "position": "PT",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_2",
      "name": "Fabio Cannavaro",
      "position": "CT",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_3",
      "name": "Ibrahima Konaté",
      "position": "CT",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_4",
      "name": "Renan Lodi",
      "position": "LI",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_5",
      "name": "Óscar Mingueza",
      "position": "LD",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_6",
      "name": "Rodri",
      "position": "MCD",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_7",
      "name": "Khéphren Thuram",
      "position": "MC",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_8",
      "name": "Isco",
      "position": "MP",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_9",
      "name": "Iliman Ndiaye",
      "position": "EI",
      "teamId": "borussiadortmund",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_10",
      "name": "Paulo Dybala",
      "position": "ED",
      "teamId": "borussiadortmund",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_11",
      "name": "Ismael Saibari",
      "position": "DC",
      "teamId": "borussiadortmund",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_12",
      "name": "Senne Lammens",
      "position": "PT",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_13",
      "name": "Jonathan Tah",
      "position": "CT",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_14",
      "name": "Achraf Hakimi",
      "position": "LD",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_15",
      "name": "Benjamin Pavard",
      "position": "LD",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_16",
      "name": "Amadou Onana",
      "position": "MCD",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_17",
      "name": "Adrien Rabiot",
      "position": "MC",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_18",
      "name": "Tijjani Reijnders",
      "position": "MC",
      "teamId": "borussiadortmund",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_19",
      "name": "Dani Olmo",
      "position": "MP",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_20",
      "name": "Pedro Neto",
      "position": "MP",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_21",
      "name": "Christos Tzolis",
      "position": "EI",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_22",
      "name": "Romelu Lukaku",
      "position": "DC",
      "teamId": "borussiadortmund",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040410030_23",
      "name": "Mateo Retegui",
      "position": "DC",
      "teamId": "borussiadortmund",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_1",
      "name": "Ederson Moraes",
      "position": "PT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_2",
      "name": "Pau Torres",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_3",
      "name": "Frank Rijkaard",
      "position": "MCD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_4",
      "name": "Joško Gvardiol",
      "position": "LI",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_5",
      "name": "Ben White",
      "position": "LD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_6",
      "name": "Patrick Vieira",
      "position": "MCD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_7",
      "name": "Federico Valverde",
      "position": "MC",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 3,
      "goals_liga": 0,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_8",
      "name": "Park Ji-sung",
      "position": "II",
      "teamId": "acmiln",
      "goals": 2,
      "assists": 6,
      "goals_liga": 2,
      "assists_liga": 6,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_9",
      "name": "Arda Güler",
      "position": "ID",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_10",
      "name": "Erling Haaland",
      "position": "DC",
      "teamId": "acmiln",
      "goals": 5,
      "assists": 5,
      "goals_liga": 5,
      "assists_liga": 5,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_11",
      "name": "Cristiano Ronaldo",
      "position": "DC",
      "teamId": "acmiln",
      "goals": 14,
      "assists": 9,
      "goals_liga": 14,
      "assists_liga": 9,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_12",
      "name": "Álvaro Carreras",
      "position": "LI",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_13",
      "name": "António Silva",
      "position": "CT",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_14",
      "name": "Elliot Anderson",
      "position": "MCD",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_15",
      "name": "Aurélien Tchouaméni",
      "position": "MCD",
      "teamId": "acmiln",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_16",
      "name": "Ayyoub Bouaddi",
      "position": "MC",
      "teamId": "acmiln",
      "goals": 6,
      "assists": 0,
      "goals_liga": 6,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_17",
      "name": "Rodrygo",
      "position": "II",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_18",
      "name": "Federico Dimarco",
      "position": "II",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_19",
      "name": "Mason Greenwood",
      "position": "ID",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_20",
      "name": "Phil Foden",
      "position": "ID",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_21",
      "name": "Denzel Dumfries",
      "position": "ID",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_22",
      "name": "Yan Diomande",
      "position": "EI",
      "teamId": "acmiln",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040438881_23",
      "name": "Endrick",
      "position": "DC",
      "teamId": "acmiln",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_1",
      "name": "Marco Carnesecchi",
      "position": "PT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_2",
      "name": "Cristhian Mosquera",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_3",
      "name": "Tony Adams",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_4",
      "name": "Marco Palestra",
      "position": "ID",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_5",
      "name": "Alejandro Grimaldo",
      "position": "LI",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_6",
      "name": "Scott McTominay",
      "position": "MC",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_7",
      "name": "Piotr Zieliński",
      "position": "MC",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_8",
      "name": "Wayne Rooney",
      "position": "SD",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 3,
      "goals_liga": 1,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_9",
      "name": "Barış Alper Yılmaz",
      "position": "DC",
      "teamId": "interdemilan",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_10",
      "name": "Khvicha Kvaratskhelia",
      "position": "EI",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_11",
      "name": "Julián Álvarez",
      "position": "DC",
      "teamId": "interdemilan",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_12",
      "name": "Emiliano Martínez",
      "position": "PT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_13",
      "name": "Jarell Quansah",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_14",
      "name": "Davinson Sánchez",
      "position": "CT",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_15",
      "name": "Milos Kerkez",
      "position": "LI",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_16",
      "name": "Julian Ryerson",
      "position": "ID",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_17",
      "name": "Kobbie Mainoo",
      "position": "MC",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_18",
      "name": "Lamine Camara",
      "position": "MC",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_19",
      "name": "Bernardo Silva",
      "position": "MP",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_20",
      "name": "Ismaïla Sarr",
      "position": "MP",
      "teamId": "interdemilan",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_21",
      "name": "Hugo Ekitiké (P)",
      "position": "DC",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_22",
      "name": "Rafael Leão",
      "position": "DC",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040483217_23",
      "name": "Raúl Jiménez",
      "position": "DC",
      "teamId": "interdemilan",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_1",
      "name": "Luis Malagón",
      "position": "PT",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_2",
      "name": "Matheus Cunha",
      "position": "SD",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_3",
      "name": "Jesús Orozco",
      "position": "CT",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_4",
      "name": "Jack Hinshelwood",
      "position": "MCD",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_5",
      "name": "Salvador Reyes",
      "position": "LI",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_6",
      "name": "Rafael Márquez",
      "position": "CT",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_7",
      "name": "Noah Okafor",
      "position": "MP",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_8",
      "name": "Toti Gomes",
      "position": "CT",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_9",
      "name": "Roberto Alvarado",
      "position": "ED",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_10",
      "name": "Ruud van Nistelrooy",
      "position": "DC",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_11",
      "name": "Marcus Thuram",
      "position": "DC",
      "teamId": "atleticodemadrid",
      "goals": 6,
      "assists": 0,
      "goals_liga": 6,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_12",
      "name": "Álex Baena",
      "position": "II",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_13",
      "name": "Anthony Elanga",
      "position": "ED",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_14",
      "name": "Perr Schuurs",
      "position": "CT",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_15",
      "name": "Artem Dovbyk",
      "position": "DC",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_16",
      "name": "Calvin Stengs",
      "position": "MP",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_17",
      "name": "Samuel Chukwueze",
      "position": "ID",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_18",
      "name": "Patrick Beach",
      "position": "PT",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_19",
      "name": "Brian Rodríguez",
      "position": "EI",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_20",
      "name": "Martin Terrier",
      "position": "DC",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_21",
      "name": "Lewis Hall",
      "position": "LI",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_22",
      "name": "Alex Zendejas",
      "position": "II",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040515606_23",
      "name": "Jonathan Clauss",
      "position": "LD",
      "teamId": "atleticodemadrid",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_1",
      "name": "Bart Verbruggen",
      "position": "PT",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_2",
      "name": "Lewis Dunk",
      "position": "CT",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_3",
      "name": "Luka Vušković",
      "position": "CT",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_4",
      "name": "Albert Ferrer",
      "position": "LD",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_5",
      "name": "Archie Brown",
      "position": "LI",
      "teamId": "acffiorentina",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_6",
      "name": "Aleksandar Pavlović",
      "position": "MCD",
      "teamId": "acffiorentina",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_7",
      "name": "Leandro Paredes",
      "position": "MCD",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_8",
      "name": "Kevin De Bruyne",
      "position": "MP",
      "teamId": "acffiorentina",
      "goals": 2,
      "assists": 5,
      "goals_liga": 2,
      "assists_liga": 5,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_9",
      "name": "Estêvão",
      "position": "ID",
      "teamId": "acffiorentina",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_10",
      "name": "Samuel Eto'o",
      "position": "DC",
      "teamId": "acffiorentina",
      "goals": 14,
      "assists": 4,
      "goals_liga": 14,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_11",
      "name": "Michael Owen",
      "position": "DC",
      "teamId": "acffiorentina",
      "goals": 4,
      "assists": 2,
      "goals_liga": 4,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_12",
      "name": "Zion Suzuki",
      "position": "PT",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_13",
      "name": "Maxence Lacroix",
      "position": "CT",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_14",
      "name": "Jérémy Jacquet",
      "position": "CT",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_15",
      "name": "Rayan Aït-Nouri",
      "position": "LI",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_16",
      "name": "Nordi Mukiele",
      "position": "LD",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_17",
      "name": "Seksan Ratree",
      "position": "MC",
      "teamId": "acffiorentina",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_18",
      "name": "Andrey Santos",
      "position": "MC",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_19",
      "name": "Carlos Soler",
      "position": "MC",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_20",
      "name": "Facundo Torres",
      "position": "ED",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 5,
      "goals_liga": 0,
      "assists_liga": 5,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_21",
      "name": "Rasmus Højlund",
      "position": "DC",
      "teamId": "acffiorentina",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_22",
      "name": "Darwin Núñez",
      "position": "DC",
      "teamId": "acffiorentina",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040551310_23",
      "name": "Carlos Espí",
      "position": "DC",
      "teamId": "acffiorentina",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_1",
      "name": "Lucas Chevalier",
      "position": "PT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_2",
      "name": "Kalidou Koulibaly",
      "position": "CT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_3",
      "name": "Mario Hermoso",
      "position": "CT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_4",
      "name": "Rúben Dias",
      "position": "CT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_5",
      "name": "Mark van Bommel",
      "position": "MCD",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_6",
      "name": "İlkay Gündoğan",
      "position": "MCD",
      "teamId": "ajaxdeamsterdam",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_7",
      "name": "Lucas Vázquez",
      "position": "LD",
      "teamId": "ajaxdeamsterdam",
      "goals": 1,
      "assists": 3,
      "goals_liga": 1,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_8",
      "name": "Martin Ødegaard",
      "position": "MP",
      "teamId": "ajaxdeamsterdam",
      "goals": 3,
      "assists": 4,
      "goals_liga": 3,
      "assists_liga": 4,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_9",
      "name": "Johan Manzambi",
      "position": "MP",
      "teamId": "ajaxdeamsterdam",
      "goals": 2,
      "assists": 3,
      "goals_liga": 2,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_10",
      "name": "Samuel Lino",
      "position": "II",
      "teamId": "ajaxdeamsterdam",
      "goals": 2,
      "assists": 1,
      "goals_liga": 2,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_11",
      "name": "Adriano",
      "position": "DC",
      "teamId": "ajaxdeamsterdam",
      "goals": 9,
      "assists": 3,
      "goals_liga": 9,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_12",
      "name": "Dani Vivian",
      "position": "CT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_13",
      "name": "Bremer",
      "position": "CT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_14",
      "name": "Gonçalo Inácio",
      "position": "CT",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_15",
      "name": "Robert Andrich",
      "position": "MCD",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_16",
      "name": "Pascal Groß",
      "position": "MC",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_17",
      "name": "Curtis Jones",
      "position": "MC",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_18",
      "name": "Matheus Nunes",
      "position": "LD",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_19",
      "name": "Nicola Zalewski",
      "position": "II",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_20",
      "name": "Rayan Cherki",
      "position": "MP",
      "teamId": "ajaxdeamsterdam",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_21",
      "name": "Tyler Dibling",
      "position": "ED",
      "teamId": "ajaxdeamsterdam",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_22",
      "name": "Serhou Guirassy",
      "position": "DC",
      "teamId": "ajaxdeamsterdam",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040586949_23",
      "name": "Mikel Oyarzabal",
      "position": "DC",
      "teamId": "ajaxdeamsterdam",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_1",
      "name": "Iker Casillas",
      "position": "PT",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_2",
      "name": "Andrea Cambiaso",
      "position": "LI",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_3",
      "name": "Chris Richards",
      "position": "CT",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_4",
      "name": "Giorgio Chiellini",
      "position": "CT",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_5",
      "name": "Timothy Weah",
      "position": "LD",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_6",
      "name": "Granit Xhaka",
      "position": "MCD",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_7",
      "name": "Tomoya Miki",
      "position": "MP",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_8",
      "name": "Rivaldo",
      "position": "MP",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_9",
      "name": "Atep",
      "position": "EI",
      "teamId": "brightonhovealbion",
      "goals": 1,
      "assists": 2,
      "goals_liga": 1,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_10",
      "name": "Romário",
      "position": "DC",
      "teamId": "brightonhovealbion",
      "goals": 5,
      "assists": 1,
      "goals_liga": 5,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_11",
      "name": "Antony",
      "position": "ED",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_12",
      "name": "Randal Kolo Muani",
      "position": "DC",
      "teamId": "brightonhovealbion",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_13",
      "name": "Jonathan Burkardt",
      "position": "DC",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_14",
      "name": "Riyad Mahrez",
      "position": "ED",
      "teamId": "brightonhovealbion",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_15",
      "name": "Geovany Quenda",
      "position": "ED",
      "teamId": "brightonhovealbion",
      "goals": 1,
      "assists": 2,
      "goals_liga": 1,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_16",
      "name": "Cody Gakpo",
      "position": "EI",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_17",
      "name": "Assane Diao",
      "position": "ID",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_18",
      "name": "Zico",
      "position": "MP",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_19",
      "name": "Frank Lampard",
      "position": "MC",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 3,
      "goals_liga": 0,
      "assists_liga": 3,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_20",
      "name": "Mauro Arambarri",
      "position": "MCD",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_21",
      "name": "Marc Pubill",
      "position": "LD",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_22",
      "name": "Kevin Danso",
      "position": "CT",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792040623974_23",
      "name": "Yarek Gasiorowski",
      "position": "CT",
      "teamId": "brightonhovealbion",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_1",
      "name": "Petr Čech",
      "position": "PT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_2",
      "name": "Javier Zanetti",
      "position": "LI",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_3",
      "name": "Jayden Oosterwolde",
      "position": "CT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_4",
      "name": "Youri Baas",
      "position": "CT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_5",
      "name": "Aaron Wan-Bissaka",
      "position": "LD",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_6",
      "name": "Gennaro Gattuso",
      "position": "MCD",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_7",
      "name": "Yasin Ayari",
      "position": "MCD",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_8",
      "name": "Pape Matar Sarr",
      "position": "MP",
      "teamId": "vascodagama",
      "goals": 1,
      "assists": 1,
      "goals_liga": 1,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_9",
      "name": "MDD Eduardo Salvio",
      "position": "MC",
      "teamId": "vascodagama",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_10",
      "name": "MDI Kamaldeen Sulemana",
      "position": "MC",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_11",
      "name": "Elye Wahi",
      "position": "DC",
      "teamId": "vascodagama",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_12",
      "name": "Édouard Mendy",
      "position": "PT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_13",
      "name": "Joakim Mæhle",
      "position": "LI",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_14",
      "name": "Illia Zabarnyi",
      "position": "CT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_15",
      "name": "Raúl Asencio",
      "position": "CT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_16",
      "name": "Wilfried Singo",
      "position": "CT",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_17",
      "name": "Edson Álvarez",
      "position": "MCD",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_18",
      "name": "Conor Gallagher",
      "position": "MC",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_19",
      "name": "Gabriel Sara",
      "position": "MC",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 2,
      "goals_liga": 0,
      "assists_liga": 2,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_20",
      "name": "Nicolò Fagioli",
      "position": "MC",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_21",
      "name": "MDI Marcelo Flores",
      "position": "MC",
      "teamId": "vascodagama",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_22",
      "name": "Illian Hernández",
      "position": "DC",
      "teamId": "vascodagama",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792126304381_23",
      "name": "Julián Quiñones",
      "position": "DC",
      "teamId": "vascodagama",
      "goals": 5,
      "assists": 0,
      "goals_liga": 5,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_1",
      "name": "Karl-Heinz Rummenigge",
      "position": "DC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_2",
      "name": "Yuma Suzuki",
      "position": "DC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_3",
      "name": "Felipe Anderson",
      "position": "DC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_4",
      "name": "Dan Ndoye",
      "position": "MP",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_5",
      "name": "Crysencio Summerville",
      "position": "MP",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_6",
      "name": "Gonçalo Guedes",
      "position": "MP",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_7",
      "name": "Jonas Hofmann",
      "position": "MP",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_8",
      "name": "Alphadjo Cissè",
      "position": "MP",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_9",
      "name": "Alexis Saelemaekers",
      "position": "MC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_10",
      "name": "Joelinton",
      "position": "MC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_11",
      "name": "Andreas Pereira",
      "position": "MC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_12",
      "name": "Martin Baturina",
      "position": "MC",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_13",
      "name": "Máximo Perrone",
      "position": "MCD",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_14",
      "name": "Dário Essugo",
      "position": "MCD",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_15",
      "name": "Denis Zakaria",
      "position": "MCD",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_16",
      "name": "Philipp Lahm",
      "position": "LI",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_17",
      "name": "Jordan Teze",
      "position": "LD",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_18",
      "name": "Cédric Soares",
      "position": "LD",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_19",
      "name": "Léo Ortiz",
      "position": "CT",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_20",
      "name": "David Bates",
      "position": "CT",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_21",
      "name": "Ayden Heaven",
      "position": "CT",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_22",
      "name": "Léo Pereira",
      "position": "CT",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792465873774_23",
      "name": "Hugo Souza",
      "position": "PT",
      "teamId": "rangersfootballclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_1",
      "name": "Amine Gouiri",
      "position": "DC",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_2",
      "name": "Fikayo Tomori",
      "position": "CT",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_3",
      "name": "Dejan Kulusevski",
      "position": "ED",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_4",
      "name": "Viktor Tsygankov",
      "position": "ED",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_5",
      "name": "Guilherme Bissoli",
      "position": "DC",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_6",
      "name": "Ángel Di María",
      "position": "ED",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_7",
      "name": "Harvey Barnes",
      "position": "EI",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_8",
      "name": "Dani Rodríguez",
      "position": "ED",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_9",
      "name": "Wout Weghorst",
      "position": "DC",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_10",
      "name": "Jørgen Strand Larsen",
      "position": "DC",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_11",
      "name": "Isaac Babadi",
      "position": "MP",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_12",
      "name": "Oihan Sancet",
      "position": "MP",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_13",
      "name": "Wataru Endo",
      "position": "MCD",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_14",
      "name": "Yangel Herrera",
      "position": "MC",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_15",
      "name": "Bryan Cristante",
      "position": "MCD",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_16",
      "name": "Jakub Kiwior",
      "position": "CT",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_17",
      "name": "José María Giménez",
      "position": "CT",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_18",
      "name": "Alessandro Nesta",
      "position": "CT",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_19",
      "name": "Javi Guerra",
      "position": "MC",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_20",
      "name": "Florian Lejeune",
      "position": "CT",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_21",
      "name": "Alexander Bah",
      "position": "LD",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_22",
      "name": "Riku Handa",
      "position": "LD",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792466085252_23",
      "name": "Hugo Lloris",
      "position": "PT",
      "teamId": "carabobofutbolclub",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_1",
      "name": "Manuel Neuer",
      "position": "PT",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_2",
      "name": "Luis Henrique",
      "position": "LD",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_3",
      "name": "Jarrad Branthwaite",
      "position": "CT",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_4",
      "name": "Willian Pacho",
      "position": "CT",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_5",
      "name": "Nico O'Reilly",
      "position": "LI",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_6",
      "name": "Alejandro Garnacho",
      "position": "EI",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_7",
      "name": "Matías Soulé",
      "position": "MP",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_8",
      "name": "Ivan Perišić",
      "position": "ID",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_9",
      "name": "Serginho",
      "position": "II",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_10",
      "name": "Neymar Jr.",
      "position": "DC",
      "teamId": "riverplate",
      "goals": 2,
      "assists": 0,
      "goals_liga": 2,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_11",
      "name": "Dušan Vlahović",
      "position": "DC",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_12",
      "name": "Harry Kane",
      "position": "DC",
      "teamId": "riverplate",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_13",
      "name": "Matthijs de Ligt",
      "position": "CT",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_14",
      "name": "Eduardo Camavinga",
      "position": "MC",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_15",
      "name": "Stanis Idumbo",
      "position": "II",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_16",
      "name": "Nicolas Jackson",
      "position": "DC",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_17",
      "name": "Son Heung-min",
      "position": "EI",
      "teamId": "riverplate",
      "goals": 1,
      "assists": 0,
      "goals_liga": 1,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_18",
      "name": "Giovani Lo Celso",
      "position": "MP",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 1,
      "goals_liga": 0,
      "assists_liga": 1,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_19",
      "name": "Davide Frattesi",
      "position": "MC",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_20",
      "name": "Giacomo Raspadori",
      "position": "SD",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_21",
      "name": "Enzo Fernández",
      "position": "MC",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_22",
      "name": "João Neves",
      "position": "MC",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1792468026850_23",
      "name": "Trent Alexander-Arnold",
      "position": "LD",
      "teamId": "riverplate",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    }
  ],
  "copaEstelarMatches": [
    {
      "fase": "Ronda Previa 1",
      "team1": "Galatasaray",
      "score1": null,
      "team2": "Como 1907",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Ronda Previa 2",
      "team1": "Boca Juniors",
      "score1": null,
      "team2": "Bayern Leverkusen",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 1",
      "team1": "Como 1907",
      "score1": null,
      "team2": "FC Barcelona",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 2",
      "team1": "Bayern Leverkusen",
      "score1": null,
      "team2": "Atletico de Madrid",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 3",
      "team1": "Arsenal",
      "score1": null,
      "team2": "Casa Pia AC",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 4",
      "team1": "PSG",
      "score1": null,
      "team2": "Manchester City",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 5",
      "team1": "Liverpool",
      "score1": null,
      "team2": "Real Madrid",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 6",
      "team1": "River Plate",
      "score1": null,
      "team2": "LOSC Lille",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 7",
      "team1": "AC Milan",
      "score1": null,
      "team2": "Borussia Dortmund",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Octavos 8",
      "team1": "Inter de Milan",
      "score1": null,
      "team2": "Brighton",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Cuartos 1",
      "team1": "Como 1907",
      "score1": null,
      "team2": "Bayern Leverkusen",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Cuartos 2",
      "team1": "Arsenal",
      "score1": null,
      "team2": "Manchester City",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Cuartos 3",
      "team1": "Liverpool",
      "score1": null,
      "team2": "LOSC Lille",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Cuartos 4",
      "team1": "Borussia Dortmund",
      "score1": null,
      "team2": "Inter de Milan",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Semifinal 1",
      "team1": "Bayern Leverkusen",
      "score1": null,
      "team2": "Manchester City",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Semifinal 2",
      "team1": "Liverpool",
      "score1": null,
      "team2": "Inter de Milan",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    },
    {
      "fase": "Final",
      "team1": "Bayern Leverkusen",
      "score1": null,
      "team2": "Inter de Milan",
      "score2": null,
      "estado": "Pendiente",
      "winner": null,
      "played": false,
      "events": []
    }
  ],
  "championsLeagueMatches": [],
  "rules": [
    {
      "category": "Reglamento de Renovaciones Temporada 10",
      "items": [
        "Posiciones 1 a 5 en Liga: Pagan el 50% de la suma total de su renovación.",
        "Posiciones 6 a 10 en Liga: Pagan el 75% de la suma total de su renovación.",
        "Posiciones 11 a 17 en Liga: Pagan el 100% de la suma total de su renovación.",
        "El costo se consulta en fichajes.com (sueldo/estrellas). Sueldos de 600k o menores se cuentan como 1M.",
        "Jugadores no renovados: Si no deseas renovar a un jugador, ingresa 0 en su sueldo/valor de renovación.",
        "Jugadores Leyendas/Épicos/Big Time: Se mide según el Valor Global Máximo (ej. Pelé 108 = 108M). Maximum 1 Leyenda o Épico por club.",
        "Si deseas cambiar o eliminar tu leyenda/épico/Big Time, debes pagar su renovación y anotar 'Cambio leyenda por ----' o 'Elimino mi leyenda ----'."
      ]
    }
  ],
  "nonRenewedPlayers": [],
  "marketMovements": [
    {
      "player": "Dean Huijsen",
      "type": "Prestamo",
      "fromTeamId": "realmadrid",
      "fromTeamName": "Real Madrid",
      "toTeamId": "como1907",
      "toTeamName": "Como 1907",
      "price": 40,
      "seasons": 1,
      "details": "Prestamo de jugadores"
    },
    {
      "player": "Thibaut Courtois",
      "type": "Prestamo",
      "fromTeamId": "realmadrid",
      "fromTeamName": "Real Madrid",
      "toTeamId": "como1907",
      "toTeamName": "Como 1907",
      "price": 15,
      "seasons": 1,
      "details": "Prestamo de jugadores"
    },
    {
      "player": "Trent Alexander Arnold",
      "type": "Prestamo",
      "fromTeamId": "como1907",
      "fromTeamName": "Como 1907",
      "toTeamId": "urawareddiamonds",
      "toTeamName": "Urawa Red Diamonds",
      "price": 0,
      "seasons": 1,
      "details": "Mercado de mitad de temporada"
    },
    {
      "player": "Julian Alvarez",
      "type": "Prestamo",
      "fromTeamId": "bayernleverkusen",
      "fromTeamName": "Bayern Leverkusen",
      "toTeamId": "interdemilan",
      "toTeamName": "Inter de Milan",
      "price": 0,
      "seasons": 1,
      "details": "Mercado de mitad de temporada"
    },
    {
      "player": "Ousmane Dembele",
      "type": "Prestamo",
      "fromTeamId": "interdemilan",
      "fromTeamName": "Inter de Milan",
      "toTeamId": "bayernleverkusen",
      "toTeamName": "Bayern Leverkusen",
      "price": 0,
      "seasons": 1,
      "details": "Mercado de mitad de temporada"
    }
  ],
  "champions": [
    {
      "torneo": "Liga LMI",
      "ganador": "Robert Salve",
      "cantidad": 1
    },
    {
      "torneo": "Liga LMI",
      "ganador": "Santiago Perez",
      "cantidad": 1
    },
    {
      "torneo": "Liga LMI",
      "ganador": "Artez10",
      "cantidad": 1
    },
    {
      "torneo": "Liga LMI",
      "ganador": "Jorge Mtz",
      "cantidad": 1
    },
    {
      "torneo": "Liga LMI",
      "ganador": "Jose Encinas",
      "cantidad": 6
    },
    {
      "torneo": "Champions League",
      "ganador": "RogerSu",
      "cantidad": 1
    },
    {
      "torneo": "Champions League",
      "ganador": "AlejandroSalgado",
      "cantidad": 1
    },
    {
      "torneo": "Champions League",
      "ganador": "Jose Encinas",
      "cantidad": 3
    },
    {
      "torneo": "Champions League",
      "ganador": "Robert Salve",
      "cantidad": 1
    },
    {
      "torneo": "Champions League",
      "ganador": "Santiago Encinas",
      "cantidad": 1
    },
    {
      "torneo": "Copa Estelar",
      "ganador": "Jorge Mtz",
      "cantidad": 2
    },
    {
      "torneo": "Copa Estelar",
      "ganador": "Jose Encinas",
      "cantidad": 2
    },
    {
      "torneo": "Copa Estelar",
      "ganador": "Santiago Encinas",
      "cantidad": 3
    }
  ],
  "balonOro": [
    {
      "id": "bdo-1",
      "season": "Temporada 10",
      "player": "Jamie Vardy",
      "manager": "Jose Encinas",
      "team": "Como 1907",
      "teamLogo": "Logos Equipos/como.webp",
      "image": "Balon de oro/vardybalonoro.jpg",
      "goals": 23,
      "assists": 2,
      "trophies": "Campeon Liga LMI & Champions League",
      "description": "Máximo goleador y referente del Como 1907, ganador indiscutible del Balón de Oro tras una temporada histórica."
    },
    {
      "id": "bdo-2",
      "season": "Temporada 11",
      "player": "Jamie Vardy",
      "manager": "Jose Encinas",
      "team": "Como 1907",
      "teamLogo": "Logos Equipos/como.webp",
      "image": "Balon de oro/vardy_balon_oro_t12.jpg",
      "goals": 18,
      "assists": 0,
      "trophies": "Campeón de Liga LMI & UEFA Champions League",
      "description": "Ganador del Balón de Oro de la Temporada 12 con el Como 1907 tras una campaña estelar con 18 goles.",
      "temporada": "Temporada 11",
      "jugador": "Jamie Vardy",
      "club": "Como 1907",
      "dt": "Jose Encinas",
      "imagen": "Balon de oro/vardy_balon_oro_t12.jpg",
      "goles": 18,
      "asistencias": 0,
      "titulos": "Campeón de Liga LMI & UEFA Champions League",
      "descripcion": "Ganador del Balón de Oro de la Temporada 12 con el Como 1907 tras una campaña estelar con 18 goles."
    }
  ],
  "fixtures": {
    "oro": [
      {
        "jornada": 1,
        "name": "Jornada 1",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j1_m1",
            "jornada": 1,
            "team1Id": "riverplate",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j1_m2",
            "jornada": 1,
            "team1Id": "bocajuniors",
            "team2Id": "manchestercity",
            "score1": 2,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_10",
                "playerName": "Leroy Sané",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j1_m3",
            "jornada": 1,
            "team1Id": "galatasaray",
            "team2Id": "atleticodemadrid",
            "score1": 4,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039794983_8",
                "playerName": "Vinícius Júnior",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 4
              },
              {
                "playerId": "p_1792039794983_7",
                "playerName": "Weston McKennie",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_10",
                "playerName": "Viktor Gyökeres",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_16",
                "playerName": "Mikel Merino",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j1_m4",
            "jornada": 1,
            "team1Id": "borussiadortmund",
            "team2Id": "como1907",
            "score1": 0,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040014502_11",
                "playerName": "Jamie Vardy",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_21",
                "playerName": "Lorenzo Insigne",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j1_m5",
            "jornada": 1,
            "team1Id": "psg",
            "team2Id": "bayernleverkusen",
            "score1": 0,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039977160_9",
                "playerName": "Ousmane Dembélé",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_8",
                "playerName": "Nico Paz",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_8",
                "playerName": "Nico Paz",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_2",
                "playerName": "Nuno Mendes",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "interdemilan"
      },
      {
        "jornada": 2,
        "name": "Jornada 2",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j2_m1",
            "jornada": 2,
            "team1Id": "riverplate",
            "team2Id": "interdemilan",
            "score1": 1,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040483217_9",
                "playerName": "Barış Alper Yılmaz",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_9",
                "playerName": "Barış Alper Yılmaz",
                "teamId": "interdemilan",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_8",
                "playerName": "Wayne Rooney",
                "teamId": "interdemilan",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040163150_9",
                "playerName": "Morgan Gibbs-White",
                "teamId": "riverplate",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_21",
                "playerName": "Hugo Ekitiké (P)",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j2_m2",
            "jornada": 2,
            "team1Id": "galatasaray",
            "team2Id": "liverpool",
            "score1": 0,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039523671_20",
                "playerName": "Brennan Johnson",
                "teamId": "liverpool",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039523671_18",
                "playerName": "Ibrahim Maza",
                "teamId": "liverpool",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j2_m3",
            "jornada": 2,
            "team1Id": "bocajuniors",
            "team2Id": "como1907",
            "score1": 1,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040014502_11",
                "playerName": "Jamie Vardy",
                "teamId": "como1907",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j2_m4",
            "jornada": 2,
            "team1Id": "psg",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j2_m5",
            "jornada": 2,
            "team1Id": "borussiadortmund",
            "team2Id": "bayernleverkusen",
            "score1": 0,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039977160_18",
                "playerName": "Brahim Díaz",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_11",
                "playerName": "Lautaro Martínez",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_7",
                "playerName": "Youri Tielemans",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_19",
                "playerName": "James Maddison",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "manchestercity"
      },
      {
        "jornada": 3,
        "name": "Jornada 3",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j3_m1",
            "jornada": 3,
            "team1Id": "interdemilan",
            "team2Id": "manchestercity",
            "score1": 1,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039948207_19",
                "playerName": "Bradley Barcola",
                "teamId": "manchestercity",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_9",
                "playerName": "Marcus Rashford",
                "teamId": "manchestercity",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_23",
                "playerName": "Raúl Jiménez",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_8",
                "playerName": "Wayne Rooney",
                "teamId": "interdemilan",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j3_m2",
            "jornada": 3,
            "team1Id": "galatasaray",
            "team2Id": "riverplate",
            "score1": 2,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039794983_7",
                "playerName": "Weston McKennie",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040163150_12",
                "playerName": "Nicolas Jackson",
                "teamId": "riverplate",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j3_m3",
            "jornada": 3,
            "team1Id": "psg",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j3_m4",
            "jornada": 3,
            "team1Id": "bocajuniors",
            "team2Id": "bayernleverkusen",
            "score1": 1,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039977160_8",
                "playerName": "Nico Paz",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_22",
                "playerName": "Gabriel Jesus",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_9",
                "playerName": "Ousmane Dembélé",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_19",
                "playerName": "Donyell Malen",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j3_m5",
            "jornada": 3,
            "team1Id": "borussiadortmund",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "como1907"
      },
      {
        "jornada": 4,
        "name": "Jornada 4",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j4_m1",
            "jornada": 4,
            "team1Id": "galatasaray",
            "team2Id": "interdemilan",
            "score1": 5,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039794983_8",
                "playerName": "Vinícius Júnior",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 4
              },
              {
                "playerId": "p_1792039794983_7",
                "playerName": "Weston McKennie",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_10",
                "playerName": "Viktor Gyökeres",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_19",
                "playerName": "Julio Enciso",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 2
              }
            ]
          },
          {
            "id": "oro_j4_m2",
            "jornada": 4,
            "team1Id": "manchestercity",
            "team2Id": "como1907",
            "score1": 0,
            "score2": 4,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040014502_18",
                "playerName": "Morgan Rogers",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_18",
                "playerName": "Morgan Rogers",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_4",
                "playerName": "Riccardo Calafiori",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_11",
                "playerName": "Jamie Vardy",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_10",
                "playerName": "Lamine Yamal",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_9",
                "playerName": "Kenan Yıldız",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_21",
                "playerName": "Lorenzo Insigne",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j4_m3",
            "jornada": 4,
            "team1Id": "psg",
            "team2Id": "riverplate",
            "score1": 0,
            "score2": 0,
            "played": true,
            "events": []
          },
          {
            "id": "oro_j4_m4",
            "jornada": 4,
            "team1Id": "borussiadortmund",
            "team2Id": "liverpool",
            "score1": 0,
            "score2": 1,
            "played": true,
            "events": []
          },
          {
            "id": "oro_j4_m5",
            "jornada": 4,
            "team1Id": "bocajuniors",
            "team2Id": "atleticodemadrid",
            "score1": 6,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040515606_11",
                "playerName": "Marcus Thuram",
                "teamId": "atleticodemadrid",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792040515606_2",
                "playerName": "Matheus Cunha",
                "teamId": "atleticodemadrid",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_22",
                "playerName": "Lionel Messi",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792039864584_7",
                "playerName": "Malo Gusto",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_11",
                "playerName": "Rodrigo De Paul",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_19",
                "playerName": "Donyell Malen",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 2
              }
            ]
          }
        ],
        "restingTeamId": "bayernleverkusen"
      },
      {
        "jornada": 5,
        "name": "Jornada 5",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j5_m1",
            "jornada": 5,
            "team1Id": "interdemilan",
            "team2Id": "como1907",
            "score1": 2,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040483217_10",
                "playerName": "Khvicha Kvaratskhelia",
                "teamId": "interdemilan",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040483217_11",
                "playerName": "Julián Álvarez",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040014502_11",
                "playerName": "Jamie Vardy",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_4",
                "playerName": "Riccardo Calafiori",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j5_m2",
            "jornada": 5,
            "team1Id": "psg",
            "team2Id": "galatasaray",
            "score1": 2,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040197583_11",
                "playerName": "Diego Costa",
                "teamId": "psg",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040197583_8",
                "playerName": "Xavi Simons",
                "teamId": "psg",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_10",
                "playerName": "Viktor Gyökeres",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040197583_10",
                "playerName": "Luis Díaz",
                "teamId": "psg",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_12",
                "playerName": "Paul Scholes",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j5_m3",
            "jornada": 5,
            "team1Id": "manchestercity",
            "team2Id": "bayernleverkusen",
            "score1": 0,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039977160_8",
                "playerName": "Nico Paz",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_8",
                "playerName": "Nico Paz",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_9",
                "playerName": "Ousmane Dembélé",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_10",
                "playerName": "Karim Adeyemi",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j5_m4",
            "jornada": 5,
            "team1Id": "borussiadortmund",
            "team2Id": "riverplate",
            "score1": 0,
            "score2": 0,
            "played": true,
            "events": []
          },
          {
            "id": "oro_j5_m5",
            "jornada": 5,
            "team1Id": "bocajuniors",
            "team2Id": "liverpool",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039864584_11",
                "playerName": "Rodrigo De Paul",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "atleticodemadrid"
      },
      {
        "jornada": 6,
        "name": "Jornada 6",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j6_m1",
            "jornada": 6,
            "team1Id": "psg",
            "team2Id": "interdemilan",
            "score1": 2,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040197583_11",
                "playerName": "Diego Costa",
                "teamId": "psg",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040197583_6",
                "playerName": "João Palhinha",
                "teamId": "psg",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_8",
                "playerName": "Wayne Rooney",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_7",
                "playerName": "Piotr Zieliński",
                "teamId": "interdemilan",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040197583_9",
                "playerName": "Raphinha",
                "teamId": "psg",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j6_m2",
            "jornada": 6,
            "team1Id": "como1907",
            "team2Id": "bayernleverkusen",
            "score1": 0,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039977160_19",
                "playerName": "James Maddison",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_23",
                "playerName": "Pio Esposito (P)",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_23",
                "playerName": "Pio Esposito (P)",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_6",
                "playerName": "Nicolò Barella",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j6_m3",
            "jornada": 6,
            "team1Id": "borussiadortmund",
            "team2Id": "galatasaray",
            "score1": 1,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039794983_12",
                "playerName": "Paul Scholes",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_19",
                "playerName": "Julio Enciso",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_22",
                "playerName": "Romelu Lukaku",
                "teamId": "borussiadortmund",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_10",
                "playerName": "Viktor Gyökeres",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_19",
                "playerName": "Dani Olmo",
                "teamId": "borussiadortmund",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j6_m4",
            "jornada": 6,
            "team1Id": "manchestercity",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j6_m5",
            "jornada": 6,
            "team1Id": "bocajuniors",
            "team2Id": "riverplate",
            "score1": 4,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039864584_19",
                "playerName": "Donyell Malen",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_19",
                "playerName": "Donyell Malen",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_22",
                "playerName": "Lionel Messi",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_14",
                "playerName": "Mohamed Salah",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040163150_13",
                "playerName": "Nikola Vlašić",
                "teamId": "riverplate",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040163150_11",
                "playerName": "Harry Kane",
                "teamId": "riverplate",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040163150_10",
                "playerName": "Dimitar Berbatov",
                "teamId": "riverplate",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040163150_9",
                "playerName": "Morgan Gibbs-White",
                "teamId": "riverplate",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "liverpool"
      },
      {
        "jornada": 7,
        "name": "Jornada 7",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j7_m1",
            "jornada": 7,
            "team1Id": "interdemilan",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j7_m2",
            "jornada": 7,
            "team1Id": "borussiadortmund",
            "team2Id": "psg",
            "score1": 1,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040197583_11",
                "playerName": "Diego Costa",
                "teamId": "psg",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040197583_10",
                "playerName": "Luis Díaz",
                "teamId": "psg",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_18",
                "playerName": "Tijjani Reijnders",
                "teamId": "borussiadortmund",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_22",
                "playerName": "Romelu Lukaku",
                "teamId": "borussiadortmund",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j7_m3",
            "jornada": 7,
            "team1Id": "como1907",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j7_m4",
            "jornada": 7,
            "team1Id": "bocajuniors",
            "team2Id": "galatasaray",
            "score1": 0,
            "score2": 4,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039794983_7",
                "playerName": "Weston McKennie",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039794983_19",
                "playerName": "Julio Enciso",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_19",
                "playerName": "Julio Enciso",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_8",
                "playerName": "Vinícius Júnior",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_10",
                "playerName": "Viktor Gyökeres",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j7_m5",
            "jornada": 7,
            "team1Id": "manchestercity",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "riverplate"
      },
      {
        "jornada": 8,
        "name": "Jornada 8",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j8_m1",
            "jornada": 8,
            "team1Id": "borussiadortmund",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j8_m2",
            "jornada": 8,
            "team1Id": "bayernleverkusen",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j8_m3",
            "jornada": 8,
            "team1Id": "bocajuniors",
            "team2Id": "psg",
            "score1": 1,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039864584_19",
                "playerName": "Donyell Malen",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040197583_9",
                "playerName": "Raphinha",
                "teamId": "psg",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040197583_8",
                "playerName": "Xavi Simons",
                "teamId": "psg",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j8_m4",
            "jornada": 8,
            "team1Id": "como1907",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j8_m5",
            "jornada": 8,
            "team1Id": "manchestercity",
            "team2Id": "riverplate",
            "score1": 2,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039948207_14",
                "playerName": "MDD Serge Gnabry",
                "teamId": "manchestercity",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_19",
                "playerName": "Bradley Barcola",
                "teamId": "manchestercity",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_9",
                "playerName": "Marcus Rashford",
                "teamId": "manchestercity",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "galatasaray"
      },
      {
        "jornada": 9,
        "name": "Jornada 9",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j9_m1",
            "jornada": 9,
            "team1Id": "interdemilan",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j9_m2",
            "jornada": 9,
            "team1Id": "bocajuniors",
            "team2Id": "borussiadortmund",
            "score1": 2,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040410030_11",
                "playerName": "Ismael Saibari",
                "teamId": "borussiadortmund",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_11",
                "playerName": "Ismael Saibari",
                "teamId": "borussiadortmund",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_8",
                "playerName": "Isco",
                "teamId": "borussiadortmund",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_9",
                "playerName": "Iliman Ndiaye",
                "teamId": "borussiadortmund",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_7",
                "playerName": "Khéphren Thuram",
                "teamId": "borussiadortmund",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040410030_10",
                "playerName": "Paulo Dybala",
                "teamId": "borussiadortmund",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_6",
                "playerName": "Thiago Alcântara",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j9_m3",
            "jornada": 9,
            "team1Id": "bayernleverkusen",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j9_m4",
            "jornada": 9,
            "team1Id": "como1907",
            "team2Id": "riverplate",
            "score1": 3,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040014502_2",
                "playerName": "Ronald Araújo",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_10",
                "playerName": "Lamine Yamal",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_9",
                "playerName": "Kenan Yıldız",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792468026850_10",
                "playerName": "Neymar Jr.",
                "teamId": "riverplate",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792468026850_11",
                "playerName": "Dušan Vlahović",
                "teamId": "riverplate",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_11",
                "playerName": "Jamie Vardy",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_22",
                "playerName": "Ademola Lookman",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792468026850_5",
                "playerName": "Nico O'Reilly",
                "teamId": "riverplate",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792468026850_12",
                "playerName": "Harry Kane",
                "teamId": "riverplate",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792468026850_18",
                "playerName": "Giovani Lo Celso",
                "teamId": "riverplate",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j9_m5",
            "jornada": 9,
            "team1Id": "manchestercity",
            "team2Id": "galatasaray",
            "score1": 2,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039794983_8",
                "playerName": "Vinícius Júnior",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_8",
                "playerName": "Vinícius Júnior",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039794983_11",
                "playerName": "Semih Kılıçsoy",
                "teamId": "galatasaray",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_19",
                "playerName": "Bradley Barcola",
                "teamId": "manchestercity",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_11",
                "playerName": "Antoine Griezmann",
                "teamId": "manchestercity",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_23",
                "playerName": "Edinson Cavani",
                "teamId": "manchestercity",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_20",
                "playerName": "Bukayo Saka",
                "teamId": "manchestercity",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "psg"
      },
      {
        "jornada": 10,
        "name": "Jornada 10",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j10_m1",
            "jornada": 10,
            "team1Id": "bocajuniors",
            "team2Id": "interdemilan",
            "score1": 3,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039864584_16",
                "playerName": "Kylian Mbappé",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_23",
                "playerName": "Sergio Agüero",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_9",
                "playerName": "Barış Alper Yılmaz",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_8",
                "playerName": "Wayne Rooney",
                "teamId": "interdemilan",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_4",
                "playerName": "Steven Gerrard",
                "teamId": "bocajuniors",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039864584_22",
                "playerName": "Lionel Messi",
                "teamId": "bocajuniors",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040483217_22",
                "playerName": "Rafael Leão",
                "teamId": "interdemilan",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j10_m2",
            "jornada": 10,
            "team1Id": "atleticodemadrid",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j10_m3",
            "jornada": 10,
            "team1Id": "bayernleverkusen",
            "team2Id": "riverplate",
            "score1": 5,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039977160_11",
                "playerName": "Lautaro Martínez",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792039977160_15",
                "playerName": "Warren Zaïre-Emery",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792039977160_17",
                "playerName": "James Rodríguez",
                "teamId": "bayernleverkusen",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_10",
                "playerName": "Karim Adeyemi",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792468026850_17",
                "playerName": "Son Heung-min",
                "teamId": "riverplate",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792468026850_2",
                "playerName": "Luis Henrique",
                "teamId": "riverplate",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039977160_8",
                "playerName": "Nico Paz",
                "teamId": "bayernleverkusen",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j10_m4",
            "jornada": 10,
            "team1Id": "manchestercity",
            "team2Id": "psg",
            "score1": 1,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040197583_9",
                "playerName": "Raphinha",
                "teamId": "psg",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039948207_8",
                "playerName": "Michael Olise",
                "teamId": "manchestercity",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039948207_19",
                "playerName": "Bradley Barcola",
                "teamId": "manchestercity",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "oro_j10_m5",
            "jornada": 10,
            "team1Id": "como1907",
            "team2Id": "galatasaray",
            "score1": 3,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040014502_10",
                "playerName": "Lamine Yamal",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_23",
                "playerName": "Sadio Mané",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_22",
                "playerName": "Ademola Lookman",
                "teamId": "como1907",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040014502_20",
                "playerName": "Maghnes Akliouche",
                "teamId": "como1907",
                "type": "gol",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "borussiadortmund"
      },
      {
        "jornada": 11,
        "name": "Jornada 11",
        "type": "ida",
        "matches": [
          {
            "id": "oro_j11_m1",
            "jornada": 11,
            "team1Id": "interdemilan",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j11_m2",
            "jornada": 11,
            "team1Id": "atleticodemadrid",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j11_m3",
            "jornada": 11,
            "team1Id": "manchestercity",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j11_m4",
            "jornada": 11,
            "team1Id": "bayernleverkusen",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j11_m5",
            "jornada": 11,
            "team1Id": "como1907",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "bocajuniors"
      },
      {
        "jornada": 12,
        "name": "Jornada 12",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j12_m1",
            "jornada": 12,
            "team1Id": "liverpool",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j12_m2",
            "jornada": 12,
            "team1Id": "manchestercity",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j12_m3",
            "jornada": 12,
            "team1Id": "atleticodemadrid",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j12_m4",
            "jornada": 12,
            "team1Id": "como1907",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j12_m5",
            "jornada": 12,
            "team1Id": "bayernleverkusen",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "interdemilan"
      },
      {
        "jornada": 13,
        "name": "Jornada 13",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j13_m1",
            "jornada": 13,
            "team1Id": "interdemilan",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j13_m2",
            "jornada": 13,
            "team1Id": "liverpool",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j13_m3",
            "jornada": 13,
            "team1Id": "como1907",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j13_m4",
            "jornada": 13,
            "team1Id": "atleticodemadrid",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j13_m5",
            "jornada": 13,
            "team1Id": "bayernleverkusen",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "manchestercity"
      },
      {
        "jornada": 14,
        "name": "Jornada 14",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j14_m1",
            "jornada": 14,
            "team1Id": "manchestercity",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j14_m2",
            "jornada": 14,
            "team1Id": "riverplate",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j14_m3",
            "jornada": 14,
            "team1Id": "liverpool",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j14_m4",
            "jornada": 14,
            "team1Id": "bayernleverkusen",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j14_m5",
            "jornada": 14,
            "team1Id": "atleticodemadrid",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "como1907"
      },
      {
        "jornada": 15,
        "name": "Jornada 15",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j15_m1",
            "jornada": 15,
            "team1Id": "interdemilan",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j15_m2",
            "jornada": 15,
            "team1Id": "como1907",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j15_m3",
            "jornada": 15,
            "team1Id": "riverplate",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j15_m4",
            "jornada": 15,
            "team1Id": "liverpool",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j15_m5",
            "jornada": 15,
            "team1Id": "atleticodemadrid",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "bayernleverkusen"
      },
      {
        "jornada": 16,
        "name": "Jornada 16",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j16_m1",
            "jornada": 16,
            "team1Id": "como1907",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j16_m2",
            "jornada": 16,
            "team1Id": "galatasaray",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j16_m3",
            "jornada": 16,
            "team1Id": "bayernleverkusen",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j16_m4",
            "jornada": 16,
            "team1Id": "riverplate",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j16_m5",
            "jornada": 16,
            "team1Id": "liverpool",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "atleticodemadrid"
      },
      {
        "jornada": 17,
        "name": "Jornada 17",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j17_m1",
            "jornada": 17,
            "team1Id": "interdemilan",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j17_m2",
            "jornada": 17,
            "team1Id": "bayernleverkusen",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j17_m3",
            "jornada": 17,
            "team1Id": "galatasaray",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j17_m4",
            "jornada": 17,
            "team1Id": "atleticodemadrid",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j17_m5",
            "jornada": 17,
            "team1Id": "riverplate",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "liverpool"
      },
      {
        "jornada": 18,
        "name": "Jornada 18",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j18_m1",
            "jornada": 18,
            "team1Id": "bayernleverkusen",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j18_m2",
            "jornada": 18,
            "team1Id": "psg",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j18_m3",
            "jornada": 18,
            "team1Id": "atleticodemadrid",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j18_m4",
            "jornada": 18,
            "team1Id": "galatasaray",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j18_m5",
            "jornada": 18,
            "team1Id": "liverpool",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "riverplate"
      },
      {
        "jornada": 19,
        "name": "Jornada 19",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j19_m1",
            "jornada": 19,
            "team1Id": "interdemilan",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j19_m2",
            "jornada": 19,
            "team1Id": "atleticodemadrid",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j19_m3",
            "jornada": 19,
            "team1Id": "psg",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j19_m4",
            "jornada": 19,
            "team1Id": "liverpool",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j19_m5",
            "jornada": 19,
            "team1Id": "riverplate",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "galatasaray"
      },
      {
        "jornada": 20,
        "name": "Jornada 20",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j20_m1",
            "jornada": 20,
            "team1Id": "atleticodemadrid",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j20_m2",
            "jornada": 20,
            "team1Id": "borussiadortmund",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j20_m3",
            "jornada": 20,
            "team1Id": "liverpool",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j20_m4",
            "jornada": 20,
            "team1Id": "riverplate",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j20_m5",
            "jornada": 20,
            "team1Id": "galatasaray",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "psg"
      },
      {
        "jornada": 21,
        "name": "Jornada 21",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j21_m1",
            "jornada": 21,
            "team1Id": "interdemilan",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j21_m2",
            "jornada": 21,
            "team1Id": "liverpool",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j21_m3",
            "jornada": 21,
            "team1Id": "riverplate",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j21_m4",
            "jornada": 21,
            "team1Id": "psg",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j21_m5",
            "jornada": 21,
            "team1Id": "galatasaray",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "borussiadortmund"
      },
      {
        "jornada": 22,
        "name": "Jornada 22",
        "type": "vuelta",
        "matches": [
          {
            "id": "oro_j22_m1",
            "jornada": 22,
            "team1Id": "liverpool",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j22_m2",
            "jornada": 22,
            "team1Id": "riverplate",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j22_m3",
            "jornada": 22,
            "team1Id": "borussiadortmund",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j22_m4",
            "jornada": 22,
            "team1Id": "galatasaray",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j22_m5",
            "jornada": 22,
            "team1Id": "psg",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "bocajuniors"
      }
    ],
    "plata": [
      {
        "jornada": 1,
        "name": "Jornada 1",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j1_m1",
            "jornada": 1,
            "team1Id": "acffiorentina",
            "team2Id": "staderennais",
            "score1": 1,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_5",
                "playerName": "Archie Brown",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j1_m2",
            "jornada": 1,
            "team1Id": "realmadrid",
            "team2Id": "brightonhovealbion",
            "score1": 4,
            "score2": 5,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040623974_10",
                "playerName": "Romário",
                "teamId": "brightonhovealbion",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_18",
                "playerName": "Zico",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_15",
                "playerName": "Geovany Quenda",
                "teamId": "brightonhovealbion",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_19",
                "playerName": "Frank Lampard",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_11",
                "playerName": "Omar Marmoush",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_8",
                "playerName": "Désiré Doué",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_7",
                "playerName": "Jude Bellingham",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_7",
                "playerName": "Jude Bellingham",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_17",
                "playerName": "Cole Palmer",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_17",
                "playerName": "Cole Palmer",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_9",
                "playerName": "Kingsley Coman",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j1_m3",
            "jornada": 1,
            "team1Id": "chelseafc",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j1_m4",
            "jornada": 1,
            "team1Id": "arsenal",
            "team2Id": "feyenoordrotterdam",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j1_m5",
            "jornada": 1,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "acmiln",
            "score1": 2,
            "score2": 5,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040438881_8",
                "playerName": "Park Ji-sung",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "gol",
                "count": 5
              },
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_4",
                "playerName": "Joško Gvardiol",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_7",
                "playerName": "Federico Valverde",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_20",
                "playerName": "Rayan Cherki",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j1_m6",
            "jornada": 1,
            "team1Id": "fctwente",
            "team2Id": "manchesterunited",
            "score1": 4,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039745455_11",
                "playerName": "Diego Forlán",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039745455_9",
                "playerName": "João Félix",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_6",
                "playerName": "Manuel Ugarte",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j1_m7",
            "jornada": 1,
            "team1Id": "fcbarcelona",
            "team2Id": "vascodagama",
            "score1": 1,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792126304381_19",
                "playerName": "Gabriel Sara",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_18",
                "playerName": "Conor Gallagher",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_23",
                "playerName": "Julián Quiñones",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792126304381_2",
                "playerName": "Javier Zanetti",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ]
      },
      {
        "jornada": 2,
        "name": "Jornada 2",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j2_m1",
            "jornada": 2,
            "team1Id": "acffiorentina",
            "team2Id": "fcbarcelona",
            "score1": 2,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040551310_7",
                "playerName": "Leandro Paredes",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_11",
                "playerName": "Michael Owen",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_8",
                "playerName": "Kevin De Bruyne",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j2_m2",
            "jornada": 2,
            "team1Id": "chelseafc",
            "team2Id": "staderennais",
            "score1": 1,
            "score2": 4,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040339328_21",
                "playerName": "Valentín Barco",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040339328_22",
                "playerName": "Douglas Luiz",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_21",
                "playerName": "Flaco López",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_9",
                "playerName": "Luiz Araújo",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j2_m3",
            "jornada": 2,
            "team1Id": "realmadrid",
            "team2Id": "feyenoordrotterdam",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j2_m4",
            "jornada": 2,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "losclille",
            "score1": 7,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_8",
                "playerName": "Martin Ødegaard",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 3
              },
              {
                "playerId": "p_1792040586949_9",
                "playerName": "Johan Manzambi",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040586949_9",
                "playerName": "Johan Manzambi",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_7",
                "playerName": "Lucas Vázquez",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_22",
                "playerName": "Serhou Guirassy",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j2_m5",
            "jornada": 2,
            "team1Id": "arsenal",
            "team2Id": "manchesterunited",
            "score1": 4,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_9",
                "playerName": "Memphis Depay",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 2
              }
            ]
          },
          {
            "id": "plata_j2_m6",
            "jornada": 2,
            "team1Id": "fctwente",
            "team2Id": "acmiln",
            "score1": 3,
            "score2": 2,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j2_m7",
            "jornada": 2,
            "team1Id": "vascodagama",
            "team2Id": "brightonhovealbion",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792126304381_8",
                "playerName": "Pape Matar Sarr",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_22",
                "playerName": "Illian Hernández",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 1
              }
            ]
          }
        ]
      },
      {
        "jornada": 3,
        "name": "Jornada 3",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j3_m1",
            "jornada": 3,
            "team1Id": "fcbarcelona",
            "team2Id": "brightonhovealbion",
            "score1": 2,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040239414_21",
                "playerName": "Fermín López",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040239414_9",
                "playerName": "Orkun Kökçü",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_9",
                "playerName": "Atep",
                "teamId": "brightonhovealbion",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_23",
                "playerName": "Ferran Torres",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_10",
                "playerName": "Romário",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j3_m2",
            "jornada": 3,
            "team1Id": "chelseafc",
            "team2Id": "acffiorentina",
            "score1": 5,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039904071_10",
                "playerName": "Yuri Alberto",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_10",
                "playerName": "Yuri Alberto",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_13",
                "playerName": "Lucas Moura",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039904071_13",
                "playerName": "Lucas Moura",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_20",
                "playerName": "Leandro Trossard",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_11",
                "playerName": "Michael Owen",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_11",
                "playerName": "Michael Owen",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_21",
                "playerName": "Rasmus Højlund",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j3_m3",
            "jornada": 3,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "staderennais",
            "score1": 3,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040586949_6",
                "playerName": "İlkay Gündoğan",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_6",
                "playerName": "İlkay Gündoğan",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_9",
                "playerName": "Johan Manzambi",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_10",
                "playerName": "Samuel Lino",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_8",
                "playerName": "Martin Ødegaard",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j3_m4",
            "jornada": 3,
            "team1Id": "realmadrid",
            "team2Id": "manchesterunited",
            "score1": 1,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039745455_19",
                "playerName": "Lovro Majer",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_20",
                "playerName": "Thiago Almada",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792039745455_11",
                "playerName": "Diego Forlán",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040371541_11",
                "playerName": "Omar Marmoush",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_8",
                "playerName": "Désiré Doué",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j3_m5",
            "jornada": 3,
            "team1Id": "fctwente",
            "team2Id": "losclille",
            "score1": 3,
            "score2": 1,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j3_m6",
            "jornada": 3,
            "team1Id": "arsenal",
            "team2Id": "acmiln",
            "score1": 2,
            "score2": 5,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 3
              },
              {
                "playerId": "p_1792040438881_16",
                "playerName": "Ayyoub Bouaddi",
                "teamId": "acmiln",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792040438881_8",
                "playerName": "Park Ji-sung",
                "teamId": "acmiln",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_8",
                "playerName": "Park Ji-sung",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040054246_22",
                "playerName": "Jarrod Bowen",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_8",
                "playerName": "Talisca",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j3_m7",
            "jornada": 3,
            "team1Id": "vascodagama",
            "team2Id": "feyenoordrotterdam",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": []
          }
        ]
      },
      {
        "jornada": 4,
        "name": "Jornada 4",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j4_m1",
            "jornada": 4,
            "team1Id": "chelseafc",
            "team2Id": "fcbarcelona",
            "score1": 0,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040239414_21",
                "playerName": "Fermín López",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_7",
                "playerName": "Daniele De Rossi",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j4_m2",
            "jornada": 4,
            "team1Id": "brightonhovealbion",
            "team2Id": "feyenoordrotterdam",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j4_m3",
            "jornada": 4,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "acffiorentina",
            "score1": 3,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040586949_8",
                "playerName": "Martin Ødegaard",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040586949_10",
                "playerName": "Samuel Lino",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_22",
                "playerName": "Darwin Núñez",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_8",
                "playerName": "Kevin De Bruyne",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_22",
                "playerName": "Serhou Guirassy",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_9",
                "playerName": "Estêvão",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_20",
                "playerName": "Facundo Torres",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j4_m4",
            "jornada": 4,
            "team1Id": "fctwente",
            "team2Id": "staderennais",
            "score1": 1,
            "score2": 5,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_12",
                "playerName": "Junya Ito",
                "teamId": "staderennais",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040339328_12",
                "playerName": "Junya Ito",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039636832_10",
                "playerName": "Michel Platini",
                "teamId": "fctwente",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039636832_11",
                "playerName": "Johan Cruyff",
                "teamId": "fctwente",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j4_m5",
            "jornada": 4,
            "team1Id": "realmadrid",
            "team2Id": "acmiln",
            "score1": 4,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040371541_11",
                "playerName": "Omar Marmoush",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040371541_8",
                "playerName": "Désiré Doué",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040371541_22",
                "playerName": "Victor Osimhen",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_19",
                "playerName": "Franco Mastantuono",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_19",
                "playerName": "Franco Mastantuono",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_23",
                "playerName": "Endrick",
                "teamId": "acmiln",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_20",
                "playerName": "Phil Foden",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j4_m6",
            "jornada": 4,
            "team1Id": "arsenal",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j4_m7",
            "jornada": 4,
            "team1Id": "vascodagama",
            "team2Id": "manchesterunited",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792126304381_23",
                "playerName": "Julián Quiñones",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_19",
                "playerName": "Gabriel Sara",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ]
      },
      {
        "jornada": 5,
        "name": "Jornada 5",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j5_m1",
            "jornada": 5,
            "team1Id": "fcbarcelona",
            "team2Id": "feyenoordrotterdam",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j5_m2",
            "jornada": 5,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "chelseafc",
            "score1": 1,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040586949_7",
                "playerName": "Lucas Vázquez",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j5_m3",
            "jornada": 5,
            "team1Id": "brightonhovealbion",
            "team2Id": "manchesterunited",
            "score1": 4,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040623974_10",
                "playerName": "Romário",
                "teamId": "brightonhovealbion",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040623974_9",
                "playerName": "Atep",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_14",
                "playerName": "Riyad Mahrez",
                "teamId": "brightonhovealbion",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_19",
                "playerName": "Frank Lampard",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_11",
                "playerName": "Diego Forlán",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792039745455_9",
                "playerName": "João Félix",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_20",
                "playerName": "Thiago Almada",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_6",
                "playerName": "Granit Xhaka",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_12",
                "playerName": "Randal Kolo Muani",
                "teamId": "brightonhovealbion",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040623974_15",
                "playerName": "Geovany Quenda",
                "teamId": "brightonhovealbion",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j5_m4",
            "jornada": 5,
            "team1Id": "fctwente",
            "team2Id": "acffiorentina",
            "score1": 2,
            "score2": 5,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 4
              },
              {
                "playerId": "p_1792040551310_8",
                "playerName": "Kevin De Bruyne",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 3
              },
              {
                "playerId": "p_1792040551310_6",
                "playerName": "Aleksandar Pavlović",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_20",
                "playerName": "Facundo Torres",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039636832_11",
                "playerName": "Johan Cruyff",
                "teamId": "fctwente",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792039636832_8",
                "playerName": "Jack Grealish",
                "teamId": "fctwente",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039636832_6",
                "playerName": "Mateo Kovačić",
                "teamId": "fctwente",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j5_m5",
            "jornada": 5,
            "team1Id": "arsenal",
            "team2Id": "staderennais",
            "score1": 1,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_6",
                "playerName": "Samuele Ricci",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_8",
                "playerName": "Talisca",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j5_m6",
            "jornada": 5,
            "team1Id": "realmadrid",
            "team2Id": "losclille",
            "score1": 4,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040371541_7",
                "playerName": "Jude Bellingham",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_7",
                "playerName": "Jude Bellingham",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_11",
                "playerName": "Omar Marmoush",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040371541_9",
                "playerName": "Kingsley Coman",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040371541_22",
                "playerName": "Victor Osimhen",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j5_m7",
            "jornada": 5,
            "team1Id": "vascodagama",
            "team2Id": "acmiln",
            "score1": 0,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040438881_7",
                "playerName": "Federico Valverde",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_22",
                "playerName": "Yan Diomande",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_15",
                "playerName": "Aurélien Tchouaméni",
                "teamId": "acmiln",
                "type": "gol",
                "count": 1
              }
            ]
          }
        ]
      },
      {
        "jornada": 6,
        "name": "Jornada 6",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j6_m1",
            "jornada": 6,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "fcbarcelona",
            "score1": 2,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040239414_21",
                "playerName": "Fermín López",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_22",
                "playerName": "Gonçalo Ramos",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040239414_9",
                "playerName": "Orkun Kökçü",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_8",
                "playerName": "Martin Ødegaard",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_10",
                "playerName": "Samuel Lino",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_2",
                "playerName": "Kalidou Koulibaly",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j6_m3",
            "jornada": 6,
            "team1Id": "fctwente",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j6_m4",
            "jornada": 6,
            "team1Id": "brightonhovealbion",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j6_m5",
            "jornada": 6,
            "team1Id": "arsenal",
            "team2Id": "acffiorentina",
            "score1": 2,
            "score2": 4,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792040551310_20",
                "playerName": "Facundo Torres",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 3
              },
              {
                "playerId": "p_1792040551310_11",
                "playerName": "Michael Owen",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_11",
                "playerName": "Michael Owen",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_8",
                "playerName": "Talisca",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j6_m6",
            "jornada": 6,
            "team1Id": "realmadrid",
            "team2Id": "staderennais",
            "score1": 2,
            "score2": 4,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040339328_8",
                "playerName": "Christopher Nkunku",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_8",
                "playerName": "Christopher Nkunku",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_11",
                "playerName": "Omar Marmoush",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_10",
                "playerName": "Francisco Conceição",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_21",
                "playerName": "Valentín Barco",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j6_m7",
            "jornada": 6,
            "team1Id": "vascodagama",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "manchesterunited"
      },
      {
        "jornada": 7,
        "name": "Jornada 7",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j7_m1",
            "jornada": 7,
            "team1Id": "fcbarcelona",
            "team2Id": "manchesterunited",
            "score1": 6,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040239414_21",
                "playerName": "Fermín López",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_10",
                "playerName": "Jamal Musiala",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040239414_23",
                "playerName": "Ferran Torres",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040239414_18",
                "playerName": "Moisés Caicedo",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_5",
                "playerName": "Ben Chilwell",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_11",
                "playerName": "Diego Forlán",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_9",
                "playerName": "João Félix",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_6",
                "playerName": "N'Golo Kanté",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_11",
                "playerName": "Luis Suárez",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_11",
                "playerName": "Luis Suárez",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_22",
                "playerName": "Gonçalo Ramos",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_22",
                "playerName": "Gonçalo Ramos",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j7_m2",
            "jornada": 7,
            "team1Id": "fctwente",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j7_m4",
            "jornada": 7,
            "team1Id": "arsenal",
            "team2Id": "chelseafc",
            "score1": 3,
            "score2": 4,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039904071_19",
                "playerName": "Ganso",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_11",
                "playerName": "Vitor Roque",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_11",
                "playerName": "Vitor Roque",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_2",
                "playerName": "Luciano Juba",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_21",
                "playerName": "Flaco López",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_7",
                "playerName": "Ibrahim Sangaré",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_18",
                "playerName": "Rodrigo Garro",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_9",
                "playerName": "Luiz Araújo",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j7_m5",
            "jornada": 7,
            "team1Id": "brightonhovealbion",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j7_m6",
            "jornada": 7,
            "team1Id": "realmadrid",
            "team2Id": "acffiorentina",
            "score1": 1,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_23",
                "playerName": "Carlos Espí",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_23",
                "playerName": "Carlos Espí",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_5",
                "playerName": "Archie Brown",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_16",
                "playerName": "João Pedro",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_19",
                "playerName": "Franco Mastantuono",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j7_m7",
            "jornada": 7,
            "team1Id": "vascodagama",
            "team2Id": "staderennais",
            "score1": 2,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792126304381_11",
                "playerName": "Elye Wahi",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_6",
                "playerName": "Gennaro Gattuso",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792126304381_23",
                "playerName": "Julián Quiñones",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "acmiln"
      },
      {
        "jornada": 8,
        "name": "Jornada 8",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j8_m1",
            "jornada": 8,
            "team1Id": "fctwente",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j8_m2",
            "jornada": 8,
            "team1Id": "manchesterunited",
            "team2Id": "acmiln",
            "score1": 2,
            "score2": 6,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792039745455_19",
                "playerName": "Lovro Majer",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_11",
                "playerName": "Diego Forlán",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_9",
                "playerName": "João Félix",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j8_m3",
            "jornada": 8,
            "team1Id": "arsenal",
            "team2Id": "ajaxdeamsterdam",
            "score1": 0,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 4
              },
              {
                "playerId": "p_1792040586949_7",
                "playerName": "Lucas Vázquez",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 2
              }
            ]
          },
          {
            "id": "plata_j8_m5",
            "jornada": 8,
            "team1Id": "realmadrid",
            "team2Id": "chelseafc",
            "score1": 0,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792039904071_19",
                "playerName": "Ganso",
                "teamId": "chelseafc",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039904071_6",
                "playerName": "Jordan Henderson",
                "teamId": "chelseafc",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j8_m6",
            "jornada": 8,
            "team1Id": "brightonhovealbion",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j8_m7",
            "jornada": 8,
            "team1Id": "vascodagama",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "losclille"
      },
      {
        "jornada": 9,
        "name": "Jornada 9",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j9_m1",
            "jornada": 9,
            "team1Id": "fcbarcelona",
            "team2Id": "acmiln",
            "score1": 3,
            "score2": 3,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040239414_8",
                "playerName": "Gavi",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_23",
                "playerName": "Ferran Torres",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_7",
                "playerName": "Federico Valverde",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_20",
                "playerName": "Pedri",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_11",
                "playerName": "Luis Suárez",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_21",
                "playerName": "Fermín López",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_17",
                "playerName": "Rodrygo",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j9_m2",
            "jornada": 9,
            "team1Id": "arsenal",
            "team2Id": "fctwente",
            "score1": 5,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_9",
                "playerName": "Memphis Depay",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 3
              },
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_8",
                "playerName": "Talisca",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039636832_10",
                "playerName": "Michel Platini",
                "teamId": "fctwente",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039636832_9",
                "playerName": "Takefusa Kubo",
                "teamId": "fctwente",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_22",
                "playerName": "Jarrod Bowen",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_23",
                "playerName": "Vedat Muriqi",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_18",
                "playerName": "Lucas Paquetá",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j9_m3",
            "jornada": 9,
            "team1Id": "manchesterunited",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j9_m4",
            "jornada": 9,
            "team1Id": "realmadrid",
            "team2Id": "ajaxdeamsterdam",
            "score1": 1,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040586949_21",
                "playerName": "Tyler Dibling",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_22",
                "playerName": "Victor Osimhen",
                "teamId": "realmadrid",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040371541_9",
                "playerName": "Kingsley Coman",
                "teamId": "realmadrid",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j9_m6",
            "jornada": 9,
            "team1Id": "brightonhovealbion",
            "team2Id": "acffiorentina",
            "score1": 1,
            "score2": 7,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_10",
                "playerName": "Samuel Eto'o",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_8",
                "playerName": "Kevin De Bruyne",
                "teamId": "acffiorentina",
                "type": "asistencia",
                "count": 2
              },
              {
                "playerId": "p_1792040551310_23",
                "playerName": "Carlos Espí",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_9",
                "playerName": "Estêvão",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_11",
                "playerName": "Michael Owen",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040551310_17",
                "playerName": "Seksan Ratree",
                "teamId": "acffiorentina",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j9_m7",
            "jornada": 9,
            "team1Id": "vascodagama",
            "team2Id": "chelseafc",
            "score1": 0,
            "score2": 1,
            "played": true,
            "events": []
          }
        ],
        "restingTeamId": "staderennais"
      },
      {
        "jornada": 10,
        "name": "Jornada 10",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j10_m1",
            "jornada": 10,
            "team1Id": "arsenal",
            "team2Id": "fcbarcelona",
            "score1": 4,
            "score2": 2,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040054246_2",
                "playerName": "Sidny Cabral",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_10",
                "playerName": "Gareth Bale",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_11",
                "playerName": "Andriy Shevchenko",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_8",
                "playerName": "Talisca",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_10",
                "playerName": "Jamal Musiala",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_11",
                "playerName": "Luis Suárez",
                "teamId": "fcbarcelona",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_11",
                "playerName": "Luis Suárez",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_23",
                "playerName": "Vedat Muriqi",
                "teamId": "arsenal",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040054246_22",
                "playerName": "Jarrod Bowen",
                "teamId": "arsenal",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040239414_20",
                "playerName": "Pedri",
                "teamId": "fcbarcelona",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j10_m2",
            "jornada": 10,
            "team1Id": "acmiln",
            "team2Id": "losclille",
            "score1": 2,
            "score2": 0,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040438881_10",
                "playerName": "Erling Haaland",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040438881_11",
                "playerName": "Cristiano Ronaldo",
                "teamId": "acmiln",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040438881_8",
                "playerName": "Park Ji-sung",
                "teamId": "acmiln",
                "type": "asistencia",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j10_m3",
            "jornada": 10,
            "team1Id": "realmadrid",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j10_m4",
            "jornada": 10,
            "team1Id": "manchesterunited",
            "team2Id": "staderennais",
            "score1": 1,
            "score2": 5,
            "played": true,
            "events": [
              {
                "playerId": "p_1792040339328_8",
                "playerName": "Christopher Nkunku",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_8",
                "playerName": "Christopher Nkunku",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_11",
                "playerName": "Eden Hazard",
                "teamId": "staderennais",
                "type": "asistencia",
                "count": 4
              },
              {
                "playerId": "p_1792040339328_9",
                "playerName": "George Best",
                "teamId": "staderennais",
                "type": "gol",
                "count": 3
              },
              {
                "playerId": "p_1792039745455_6",
                "playerName": "Manuel Ugarte",
                "teamId": "manchesterunited",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792039745455_19",
                "playerName": "Lovro Majer",
                "teamId": "manchesterunited",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792040339328_18",
                "playerName": "Petar Sučić",
                "teamId": "staderennais",
                "type": "gol",
                "count": 1
              }
            ]
          },
          {
            "id": "plata_j10_m6",
            "jornada": 10,
            "team1Id": "brightonhovealbion",
            "team2Id": "chelseafc",
            "score1": 4,
            "score2": 4,
            "played": true,
            "events": []
          },
          {
            "id": "plata_j10_m7",
            "jornada": 10,
            "team1Id": "vascodagama",
            "team2Id": "ajaxdeamsterdam",
            "score1": 3,
            "score2": 1,
            "played": true,
            "events": [
              {
                "playerId": "p_1792126304381_8",
                "playerName": "Pape Matar Sarr",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_10",
                "playerName": "MDI Kamaldeen Sulemana",
                "teamId": "vascodagama",
                "type": "asistencia",
                "count": 1
              },
              {
                "playerId": "p_1792126304381_9",
                "playerName": "MDD Eduardo Salvio",
                "teamId": "vascodagama",
                "type": "gol",
                "count": 2
              },
              {
                "playerId": "p_1792040586949_11",
                "playerName": "Adriano",
                "teamId": "ajaxdeamsterdam",
                "type": "gol",
                "count": 1
              },
              {
                "playerId": "p_1792040586949_9",
                "playerName": "Johan Manzambi",
                "teamId": "ajaxdeamsterdam",
                "type": "asistencia",
                "count": 1
              }
            ]
          }
        ],
        "restingTeamId": "acffiorentina"
      },
      {
        "jornada": 11,
        "name": "Jornada 11",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j11_m1",
            "jornada": 11,
            "team1Id": "fcbarcelona",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j11_m2",
            "jornada": 11,
            "team1Id": "realmadrid",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j11_m3",
            "jornada": 11,
            "team1Id": "acmiln",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j11_m4",
            "jornada": 11,
            "team1Id": "manchesterunited",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j11_m5",
            "jornada": 11,
            "team1Id": "brightonhovealbion",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j11_m7",
            "jornada": 11,
            "team1Id": "vascodagama",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "chelseafc"
      },
      {
        "jornada": 12,
        "name": "Jornada 12",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j12_m1",
            "jornada": 12,
            "team1Id": "realmadrid",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j12_m2",
            "jornada": 12,
            "team1Id": "losclille",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j12_m3",
            "jornada": 12,
            "team1Id": "acmiln",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j12_m4",
            "jornada": 12,
            "team1Id": "brightonhovealbion",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j12_m5",
            "jornada": 12,
            "team1Id": "manchesterunited",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j12_m7",
            "jornada": 12,
            "team1Id": "vascodagama",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "ajaxdeamsterdam"
      },
      {
        "jornada": 13,
        "name": "Jornada 13",
        "type": "ida",
        "matches": [
          {
            "id": "plata_j13_m1",
            "jornada": 13,
            "team1Id": "fcbarcelona",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j13_m2",
            "jornada": 13,
            "team1Id": "losclille",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j13_m3",
            "jornada": 13,
            "team1Id": "brightonhovealbion",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j13_m4",
            "jornada": 13,
            "team1Id": "acmiln",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j13_m6",
            "jornada": 13,
            "team1Id": "manchesterunited",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j13_m7",
            "jornada": 13,
            "team1Id": "vascodagama",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "fctwente"
      },
      {
        "jornada": 14,
        "name": "Jornada 14",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j14_m1",
            "jornada": 14,
            "team1Id": "staderennais",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j14_m2",
            "jornada": 14,
            "team1Id": "brightonhovealbion",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j14_m3",
            "jornada": 14,
            "team1Id": "losclille",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j14_m5",
            "jornada": 14,
            "team1Id": "acmiln",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j14_m6",
            "jornada": 14,
            "team1Id": "manchesterunited",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j14_m7",
            "jornada": 14,
            "team1Id": "vascodagama",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "arsenal"
      },
      {
        "jornada": 15,
        "name": "Jornada 15",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j15_m1",
            "jornada": 15,
            "team1Id": "fcbarcelona",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j15_m2",
            "jornada": 15,
            "team1Id": "staderennais",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j15_m4",
            "jornada": 15,
            "team1Id": "losclille",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j15_m5",
            "jornada": 15,
            "team1Id": "manchesterunited",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j15_m6",
            "jornada": 15,
            "team1Id": "acmiln",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j15_m7",
            "jornada": 15,
            "team1Id": "brightonhovealbion",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "realmadrid"
      },
      {
        "jornada": 16,
        "name": "Jornada 16",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j16_m1",
            "jornada": 16,
            "team1Id": "brightonhovealbion",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j16_m2",
            "jornada": 16,
            "team1Id": "acffiorentina",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j16_m3",
            "jornada": 16,
            "team1Id": "staderennais",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j16_m4",
            "jornada": 16,
            "team1Id": "manchesterunited",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j16_m5",
            "jornada": 16,
            "team1Id": "losclille",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j16_m6",
            "jornada": 16,
            "team1Id": "acmiln",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "vascodagama"
      },
      {
        "jornada": 17,
        "name": "Jornada 17",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j17_m1",
            "jornada": 17,
            "team1Id": "fcbarcelona",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j17_m3",
            "jornada": 17,
            "team1Id": "acffiorentina",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j17_m4",
            "jornada": 17,
            "team1Id": "staderennais",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j17_m5",
            "jornada": 17,
            "team1Id": "acmiln",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j17_m6",
            "jornada": 17,
            "team1Id": "losclille",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j17_m7",
            "jornada": 17,
            "team1Id": "manchesterunited",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "brightonhovealbion"
      },
      {
        "jornada": 18,
        "name": "Jornada 18",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j18_m2",
            "jornada": 18,
            "team1Id": "chelseafc",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j18_m3",
            "jornada": 18,
            "team1Id": "manchesterunited",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j18_m4",
            "jornada": 18,
            "team1Id": "acffiorentina",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j18_m5",
            "jornada": 18,
            "team1Id": "staderennais",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j18_m6",
            "jornada": 18,
            "team1Id": "losclille",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j18_m7",
            "jornada": 18,
            "team1Id": "acmiln",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "fcbarcelona"
      },
      {
        "jornada": 19,
        "name": "Jornada 19",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j19_m1",
            "jornada": 19,
            "team1Id": "fcbarcelona",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j19_m3",
            "jornada": 19,
            "team1Id": "chelseafc",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j19_m4",
            "jornada": 19,
            "team1Id": "acmiln",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j19_m5",
            "jornada": 19,
            "team1Id": "acffiorentina",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j19_m6",
            "jornada": 19,
            "team1Id": "staderennais",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j19_m7",
            "jornada": 19,
            "team1Id": "losclille",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "manchesterunited"
      },
      {
        "jornada": 20,
        "name": "Jornada 20",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j20_m1",
            "jornada": 20,
            "team1Id": "manchesterunited",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j20_m2",
            "jornada": 20,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j20_m4",
            "jornada": 20,
            "team1Id": "chelseafc",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j20_m5",
            "jornada": 20,
            "team1Id": "losclille",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j20_m6",
            "jornada": 20,
            "team1Id": "acffiorentina",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j20_m7",
            "jornada": 20,
            "team1Id": "staderennais",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "acmiln"
      },
      {
        "jornada": 21,
        "name": "Jornada 21",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j21_m1",
            "jornada": 21,
            "team1Id": "fcbarcelona",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j21_m2",
            "jornada": 21,
            "team1Id": "acmiln",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j21_m3",
            "jornada": 21,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j21_m5",
            "jornada": 21,
            "team1Id": "chelseafc",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j21_m6",
            "jornada": 21,
            "team1Id": "staderennais",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j21_m7",
            "jornada": 21,
            "team1Id": "acffiorentina",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "losclille"
      },
      {
        "jornada": 22,
        "name": "Jornada 22",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j22_m1",
            "jornada": 22,
            "team1Id": "acmiln",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j22_m2",
            "jornada": 22,
            "team1Id": "fctwente",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j22_m3",
            "jornada": 22,
            "team1Id": "losclille",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j22_m4",
            "jornada": 22,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j22_m6",
            "jornada": 22,
            "team1Id": "acffiorentina",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j22_m7",
            "jornada": 22,
            "team1Id": "chelseafc",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "staderennais"
      },
      {
        "jornada": 23,
        "name": "Jornada 23",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j23_m1",
            "jornada": 23,
            "team1Id": "fcbarcelona",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j23_m2",
            "jornada": 23,
            "team1Id": "losclille",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j23_m3",
            "jornada": 23,
            "team1Id": "fctwente",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j23_m4",
            "jornada": 23,
            "team1Id": "staderennais",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j23_m6",
            "jornada": 23,
            "team1Id": "chelseafc",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j23_m7",
            "jornada": 23,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "acffiorentina"
      },
      {
        "jornada": 24,
        "name": "Jornada 24",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j24_m1",
            "jornada": 24,
            "team1Id": "losclille",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j24_m2",
            "jornada": 24,
            "team1Id": "arsenal",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j24_m3",
            "jornada": 24,
            "team1Id": "staderennais",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j24_m4",
            "jornada": 24,
            "team1Id": "acffiorentina",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j24_m5",
            "jornada": 24,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j24_m7",
            "jornada": 24,
            "team1Id": "fctwente",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "chelseafc"
      },
      {
        "jornada": 25,
        "name": "Jornada 25",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j25_m1",
            "jornada": 25,
            "team1Id": "fcbarcelona",
            "team2Id": "realmadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j25_m2",
            "jornada": 25,
            "team1Id": "staderennais",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j25_m3",
            "jornada": 25,
            "team1Id": "acffiorentina",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j25_m4",
            "jornada": 25,
            "team1Id": "fctwente",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j25_m5",
            "jornada": 25,
            "team1Id": "chelseafc",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j25_m7",
            "jornada": 25,
            "team1Id": "arsenal",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "ajaxdeamsterdam"
      },
      {
        "jornada": 26,
        "name": "Jornada 26",
        "type": "vuelta",
        "matches": [
          {
            "id": "plata_j26_m1",
            "jornada": 26,
            "team1Id": "staderennais",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j26_m2",
            "jornada": 26,
            "team1Id": "acffiorentina",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j26_m3",
            "jornada": 26,
            "team1Id": "arsenal",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j26_m4",
            "jornada": 26,
            "team1Id": "chelseafc",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j26_m6",
            "jornada": 26,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j26_m7",
            "jornada": 26,
            "team1Id": "realmadrid",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ],
        "restingTeamId": "fctwente"
      }
    ],
    "champions": [
      {
        "jornada": 1,
        "name": "Jornada 1",
        "type": "ida",
        "restingTeams": [
          {
            "group": "Grupo A",
            "teamId": "fctwente"
          },
          {
            "group": "Grupo B",
            "teamId": "borussiadortmund"
          }
        ],
        "restingTeamId": "fctwente",
        "matches": [
          {
            "id": "champions_j1_m1",
            "jornada": 1,
            "group": "Grupo A",
            "team1Id": "chelseafc",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m2",
            "jornada": 1,
            "group": "Grupo A",
            "team1Id": "realmadrid",
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m3",
            "jornada": 1,
            "group": "Grupo B",
            "team1Id": "riverplate",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m4",
            "jornada": 1,
            "group": "Grupo B",
            "team1Id": "como1907",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m5",
            "jornada": 1,
            "group": "Grupo C",
            "team1Id": "galatasaray",
            "team2Id": "arsenal",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m6",
            "jornada": 1,
            "group": "Grupo C",
            "team1Id": "liverpool",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m7",
            "jornada": 1,
            "group": "Grupo D",
            "team1Id": "vascodagama",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j1_m8",
            "jornada": 1,
            "group": "Grupo D",
            "team1Id": "bocajuniors",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ]
      },
      {
        "jornada": 2,
        "name": "Jornada 2",
        "type": "ida",
        "restingTeams": [
          {
            "group": "Grupo A",
            "teamId": "carabobofutbolclub"
          },
          {
            "group": "Grupo B",
            "teamId": "acmiln"
          }
        ],
        "restingTeamId": "carabobofutbolclub",
        "matches": [
          {
            "id": "champions_j2_m1",
            "jornada": 2,
            "group": "Grupo A",
            "team1Id": "chelseafc",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m2",
            "jornada": 2,
            "group": "Grupo A",
            "team1Id": "realmadrid",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m3",
            "jornada": 2,
            "group": "Grupo B",
            "team1Id": "riverplate",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m4",
            "jornada": 2,
            "group": "Grupo B",
            "team1Id": "como1907",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m5",
            "jornada": 2,
            "group": "Grupo E",
            "team1Id": "rangersfootballclub",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m6",
            "jornada": 2,
            "group": "Grupo E",
            "team1Id": "acffiorentina",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m7",
            "jornada": 2,
            "group": "Grupo F",
            "team1Id": "psg",
            "team2Id": "brightonhovealbion",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j2_m8",
            "jornada": 2,
            "group": "Grupo F",
            "team1Id": "fcbarcelona",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ]
      },
      {
        "jornada": 3,
        "name": "Jornada 3",
        "type": "ida",
        "restingTeams": [
          {
            "group": "Grupo A",
            "teamId": "losclille"
          },
          {
            "group": "Grupo B",
            "teamId": "atleticodemadrid"
          }
        ],
        "restingTeamId": "losclille",
        "matches": [
          {
            "id": "champions_j3_m1",
            "jornada": 3,
            "group": "Grupo A",
            "team1Id": "fctwente",
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m2",
            "jornada": 3,
            "group": "Grupo A",
            "team1Id": "realmadrid",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m3",
            "jornada": 3,
            "group": "Grupo B",
            "team1Id": "borussiadortmund",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m4",
            "jornada": 3,
            "group": "Grupo B",
            "team1Id": "como1907",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m5",
            "jornada": 3,
            "group": "Grupo C",
            "team1Id": "liverpool",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m6",
            "jornada": 3,
            "group": "Grupo C",
            "team1Id": "arsenal",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m7",
            "jornada": 3,
            "group": "Grupo E",
            "team1Id": "acffiorentina",
            "team2Id": "rangersfootballclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j3_m8",
            "jornada": 3,
            "group": "Grupo E",
            "team1Id": "bayernleverkusen",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ]
      },
      {
        "jornada": 4,
        "name": "Jornada 4",
        "type": "ida",
        "restingTeams": [
          {
            "group": "Grupo A",
            "teamId": "chelseafc"
          },
          {
            "group": "Grupo B",
            "teamId": "riverplate"
          }
        ],
        "restingTeamId": "chelseafc",
        "matches": [
          {
            "id": "champions_j4_m1",
            "jornada": 4,
            "group": "Grupo A",
            "team1Id": "realmadrid",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m2",
            "jornada": 4,
            "group": "Grupo A",
            "team1Id": "carabobofutbolclub",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m3",
            "jornada": 4,
            "group": "Grupo B",
            "team1Id": "como1907",
            "team2Id": "borussiadortmund",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m4",
            "jornada": 4,
            "group": "Grupo B",
            "team1Id": "acmiln",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m5",
            "jornada": 4,
            "group": "Grupo D",
            "team1Id": "bocajuniors",
            "team2Id": "vascodagama",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m6",
            "jornada": 4,
            "group": "Grupo D",
            "team1Id": "manchesterunited",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m7",
            "jornada": 4,
            "group": "Grupo F",
            "team1Id": "fcbarcelona",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j4_m8",
            "jornada": 4,
            "group": "Grupo F",
            "team1Id": "brightonhovealbion",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ]
      },
      {
        "jornada": 5,
        "name": "Jornada 5",
        "type": "ida",
        "restingTeams": [
          {
            "group": "Grupo A",
            "teamId": "realmadrid"
          },
          {
            "group": "Grupo B",
            "teamId": "como1907"
          }
        ],
        "restingTeamId": "realmadrid",
        "matches": [
          {
            "id": "champions_j5_m1",
            "jornada": 5,
            "group": "Grupo A",
            "team1Id": "fctwente",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m2",
            "jornada": 5,
            "group": "Grupo A",
            "team1Id": "carabobofutbolclub",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m3",
            "jornada": 5,
            "group": "Grupo B",
            "team1Id": "borussiadortmund",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m4",
            "jornada": 5,
            "group": "Grupo B",
            "team1Id": "acmiln",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m5",
            "jornada": 5,
            "group": "Grupo C",
            "team1Id": "galatasaray",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m6",
            "jornada": 5,
            "group": "Grupo C",
            "team1Id": "arsenal",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m7",
            "jornada": 5,
            "group": "Grupo D",
            "team1Id": "vascodagama",
            "team2Id": "manchestercity",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m8",
            "jornada": 5,
            "group": "Grupo D",
            "team1Id": "manchesterunited",
            "team2Id": "bocajuniors",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m9",
            "jornada": 5,
            "group": "Grupo E",
            "team1Id": "rangersfootballclub",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m10",
            "jornada": 5,
            "group": "Grupo E",
            "team1Id": "bayernleverkusen",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m11",
            "jornada": 5,
            "group": "Grupo F",
            "team1Id": "psg",
            "team2Id": "interdemilan",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "champions_j5_m12",
            "jornada": 5,
            "group": "Grupo F",
            "team1Id": "brightonhovealbion",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          }
        ]
      }
    ]
  },
  "matchHistory": [
    {
      "id": "match_1792640949756",
      "timestamp": 1792640949756,
      "date": "21 oct 2026, 09:49 p.m.",
      "competition": "plata",
      "jornada": 10,
      "fixtureMatchId": "plata_j10_m2",
      "phase": "Jornada 10",
      "team1Id": "acmiln",
      "team1Name": "AC Milan",
      "team1Logo": "Logos Equipos/acmilan.webp",
      "score1": 2,
      "team2Id": "losclille",
      "team2Name": "LOSC Lille",
      "team2Logo": "Logos Equipos/lille.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_8",
          "playerName": "Park Ji-sung",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792640900111",
      "timestamp": 1792640900111,
      "date": "21 oct 2026, 09:48 p.m.",
      "competition": "plata",
      "jornada": 10,
      "fixtureMatchId": "plata_j10_m7",
      "phase": "Jornada 10",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 3,
      "team2Id": "ajaxdeamsterdam",
      "team2Name": "Ajax de Ámsterdam",
      "team2Logo": "Logos Equipos/ajax.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792126304381_8",
          "playerName": "Pape Matar Sarr",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_10",
          "playerName": "MDI Kamaldeen Sulemana",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_9",
          "playerName": "MDD Eduardo Salvio",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_9",
          "playerName": "Johan Manzambi",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792640723074",
      "timestamp": 1792640723074,
      "date": "21 oct 2026, 09:45 p.m.",
      "competition": "plata",
      "jornada": 9,
      "fixtureMatchId": "plata_j9_m2",
      "phase": "Jornada 9",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 5,
      "team2Id": "fctwente",
      "team2Name": "FC Twente",
      "team2Logo": "Logos Equipos/fctwente.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_9",
          "playerName": "Memphis Depay",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 3
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_8",
          "playerName": "Talisca",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039636832_10",
          "playerName": "Michel Platini",
          "teamId": "fctwente",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039636832_9",
          "playerName": "Takefusa Kubo",
          "teamId": "fctwente",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_22",
          "playerName": "Jarrod Bowen",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_23",
          "playerName": "Vedat Muriqi",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_18",
          "playerName": "Lucas Paquetá",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792640595938",
      "timestamp": 1792640595938,
      "date": "21 oct 2026, 09:43 p.m.",
      "competition": "plata",
      "jornada": 9,
      "fixtureMatchId": "plata_j9_m7",
      "phase": "Jornada 9",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 0,
      "team2Id": "chelseafc",
      "team2Name": "Chelsea FC",
      "team2Logo": "Logos Equipos/chelsea.webp",
      "score2": 1,
      "events": []
    },
    {
      "id": "match_1792640564156",
      "timestamp": 1792640564156,
      "date": "21 oct 2026, 09:42 p.m.",
      "competition": "plata",
      "jornada": 7,
      "fixtureMatchId": "plata_j7_m7",
      "phase": "Jornada 7",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 2,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792126304381_11",
          "playerName": "Elye Wahi",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_6",
          "playerName": "Gennaro Gattuso",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792126304381_23",
          "playerName": "Julián Quiñones",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792640477637",
      "timestamp": 1792640477637,
      "date": "21 oct 2026, 09:41 p.m.",
      "competition": "plata",
      "jornada": 6,
      "fixtureMatchId": "plata_j6_m6",
      "phase": "Jornada 6",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 2,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 4,
      "events": [
        {
          "playerId": "p_1792040339328_8",
          "playerName": "Christopher Nkunku",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_8",
          "playerName": "Christopher Nkunku",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_11",
          "playerName": "Omar Marmoush",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_10",
          "playerName": "Francisco Conceição",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_21",
          "playerName": "Valentín Barco",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792640222098",
      "timestamp": 1792640222098,
      "date": "21 oct 2026, 09:37 p.m.",
      "competition": "oro",
      "jornada": 4,
      "fixtureMatchId": "oro_j4_m2",
      "phase": "Jornada 4",
      "team1Id": "manchestercity",
      "team1Name": "Manchester City",
      "team1Logo": "Logos Equipos/manchestercity.png",
      "score1": 0,
      "team2Id": "como1907",
      "team2Name": "Como 1907",
      "team2Logo": "Logos Equipos/como.webp",
      "score2": 4,
      "events": [
        {
          "playerId": "p_1792040014502_18",
          "playerName": "Morgan Rogers",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_18",
          "playerName": "Morgan Rogers",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_4",
          "playerName": "Riccardo Calafiori",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_11",
          "playerName": "Jamie Vardy",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_10",
          "playerName": "Lamine Yamal",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_9",
          "playerName": "Kenan Yıldız",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_21",
          "playerName": "Lorenzo Insigne",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792640127208",
      "timestamp": 1792640127208,
      "date": "21 oct 2026, 09:35 p.m.",
      "competition": "oro",
      "jornada": 3,
      "fixtureMatchId": "oro_j3_m1",
      "phase": "Jornada 3",
      "team1Id": "interdemilan",
      "team1Name": "Inter de Milan",
      "team1Logo": "Logos Equipos/intermilan.webp",
      "score1": 1,
      "team2Id": "manchestercity",
      "team2Name": "Manchester City",
      "team2Logo": "Logos Equipos/manchestercity.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039948207_19",
          "playerName": "Bradley Barcola",
          "teamId": "manchestercity",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_9",
          "playerName": "Marcus Rashford",
          "teamId": "manchestercity",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_23",
          "playerName": "Raúl Jiménez",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_8",
          "playerName": "Wayne Rooney",
          "teamId": "interdemilan",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639964706",
      "timestamp": 1792639964706,
      "date": "21 oct 2026, 09:32 p.m.",
      "competition": "oro",
      "jornada": 10,
      "fixtureMatchId": "oro_j10_m5",
      "phase": "Jornada 10",
      "team1Id": "como1907",
      "team1Name": "Como 1907",
      "team1Logo": "Logos Equipos/como.webp",
      "score1": 3,
      "team2Id": "galatasaray",
      "team2Name": "Galatasaray",
      "team2Logo": "Logos Equipos/galatasaray.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040014502_10",
          "playerName": "Lamine Yamal",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_23",
          "playerName": "Sadio Mané",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_22",
          "playerName": "Ademola Lookman",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_20",
          "playerName": "Maghnes Akliouche",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639912309",
      "timestamp": 1792639912309,
      "date": "21 oct 2026, 09:31 p.m.",
      "competition": "oro",
      "jornada": 10,
      "fixtureMatchId": "oro_j10_m4",
      "phase": "Jornada 10",
      "team1Id": "manchestercity",
      "team1Name": "Manchester City",
      "team1Logo": "Logos Equipos/manchestercity.png",
      "score1": 1,
      "team2Id": "psg",
      "team2Name": "PSG",
      "team2Logo": "Logos Equipos/psg.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040197583_9",
          "playerName": "Raphinha",
          "teamId": "psg",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039948207_8",
          "playerName": "Michael Olise",
          "teamId": "manchestercity",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_19",
          "playerName": "Bradley Barcola",
          "teamId": "manchestercity",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639856204",
      "timestamp": 1792639856204,
      "date": "21 oct 2026, 09:30 p.m.",
      "competition": "oro",
      "jornada": 10,
      "fixtureMatchId": "oro_j10_m3",
      "phase": "Jornada 10",
      "team1Id": "bayernleverkusen",
      "team1Name": "Bayern Leverkusen",
      "team1Logo": "Logos Equipos/bayernleverkusen.png",
      "score1": 5,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039977160_11",
          "playerName": "Lautaro Martínez",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792039977160_15",
          "playerName": "Warren Zaïre-Emery",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792039977160_17",
          "playerName": "James Rodríguez",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_10",
          "playerName": "Karim Adeyemi",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792468026850_17",
          "playerName": "Son Heung-min",
          "teamId": "riverplate",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792468026850_2",
          "playerName": "Luis Henrique",
          "teamId": "riverplate",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_8",
          "playerName": "Nico Paz",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639730431",
      "timestamp": 1792639730431,
      "date": "21 oct 2026, 09:28 p.m.",
      "competition": "oro",
      "jornada": 9,
      "fixtureMatchId": "oro_j9_m4",
      "phase": "Jornada 9",
      "team1Id": "como1907",
      "team1Name": "Como 1907",
      "team1Logo": "Logos Equipos/como.webp",
      "score1": 3,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040014502_2",
          "playerName": "Ronald Araújo",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_10",
          "playerName": "Lamine Yamal",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_9",
          "playerName": "Kenan Yıldız",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792468026850_10",
          "playerName": "Neymar Jr.",
          "teamId": "riverplate",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792468026850_11",
          "playerName": "Dušan Vlahović",
          "teamId": "riverplate",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_11",
          "playerName": "Jamie Vardy",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_22",
          "playerName": "Ademola Lookman",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792468026850_5",
          "playerName": "Nico O'Reilly",
          "teamId": "riverplate",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792468026850_12",
          "playerName": "Harry Kane",
          "teamId": "riverplate",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792468026850_18",
          "playerName": "Giovani Lo Celso",
          "teamId": "riverplate",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639547631",
      "timestamp": 1792639547631,
      "date": "21 oct 2026, 09:25 p.m.",
      "competition": "oro",
      "jornada": 9,
      "fixtureMatchId": "oro_j9_m2",
      "phase": "Jornada 9",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 2,
      "team2Id": "borussiadortmund",
      "team2Name": "Borussia Dortmund",
      "team2Logo": "Logos Equipos/borussia.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040410030_11",
          "playerName": "Ismael Saibari",
          "teamId": "borussiadortmund",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_11",
          "playerName": "Ismael Saibari",
          "teamId": "borussiadortmund",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_8",
          "playerName": "Isco",
          "teamId": "borussiadortmund",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_9",
          "playerName": "Iliman Ndiaye",
          "teamId": "borussiadortmund",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_7",
          "playerName": "Khéphren Thuram",
          "teamId": "borussiadortmund",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_10",
          "playerName": "Paulo Dybala",
          "teamId": "borussiadortmund",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_6",
          "playerName": "Thiago Alcântara",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639422319",
      "timestamp": 1792639422319,
      "date": "21 oct 2026, 09:23 p.m.",
      "competition": "oro",
      "jornada": 9,
      "fixtureMatchId": "oro_j9_m5",
      "phase": "Jornada 9",
      "team1Id": "manchestercity",
      "team1Name": "Manchester City",
      "team1Logo": "Logos Equipos/manchestercity.png",
      "score1": 2,
      "team2Id": "galatasaray",
      "team2Name": "Galatasaray",
      "team2Logo": "Logos Equipos/galatasaray.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039794983_8",
          "playerName": "Vinícius Júnior",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_8",
          "playerName": "Vinícius Júnior",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_19",
          "playerName": "Bradley Barcola",
          "teamId": "manchestercity",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_11",
          "playerName": "Antoine Griezmann",
          "teamId": "manchestercity",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_23",
          "playerName": "Edinson Cavani",
          "teamId": "manchestercity",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_20",
          "playerName": "Bukayo Saka",
          "teamId": "manchestercity",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639312867",
      "timestamp": 1792639312867,
      "date": "21 oct 2026, 09:21 p.m.",
      "competition": "oro",
      "jornada": 8,
      "fixtureMatchId": "oro_j8_m3",
      "phase": "Jornada 8",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 1,
      "team2Id": "psg",
      "team2Name": "PSG",
      "team2Logo": "Logos Equipos/psg.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039864584_19",
          "playerName": "Donyell Malen",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040197583_9",
          "playerName": "Raphinha",
          "teamId": "psg",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040197583_8",
          "playerName": "Xavi Simons",
          "teamId": "psg",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639187626",
      "timestamp": 1792639187626,
      "date": "21 oct 2026, 09:19 p.m.",
      "competition": "oro",
      "jornada": 8,
      "fixtureMatchId": "oro_j8_m5",
      "phase": "Jornada 8",
      "team1Id": "manchestercity",
      "team1Name": "Manchester City",
      "team1Logo": "Logos Equipos/manchestercity.png",
      "score1": 2,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039948207_14",
          "playerName": "MDD Serge Gnabry",
          "teamId": "manchestercity",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_19",
          "playerName": "Bradley Barcola",
          "teamId": "manchestercity",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039948207_9",
          "playerName": "Marcus Rashford",
          "teamId": "manchestercity",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639107075",
      "timestamp": 1792639107075,
      "date": "21 oct 2026, 09:18 p.m.",
      "competition": "oro",
      "jornada": 7,
      "fixtureMatchId": "oro_j7_m2",
      "phase": "Jornada 7",
      "team1Id": "borussiadortmund",
      "team1Name": "Borussia Dortmund",
      "team1Logo": "Logos Equipos/borussia.webp",
      "score1": 1,
      "team2Id": "psg",
      "team2Name": "PSG",
      "team2Logo": "Logos Equipos/psg.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040197583_11",
          "playerName": "Diego Costa",
          "teamId": "psg",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040197583_10",
          "playerName": "Luis Díaz",
          "teamId": "psg",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_18",
          "playerName": "Tijjani Reijnders",
          "teamId": "borussiadortmund",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_22",
          "playerName": "Romelu Lukaku",
          "teamId": "borussiadortmund",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792639048114",
      "timestamp": 1792639048114,
      "date": "21 oct 2026, 09:17 p.m.",
      "competition": "oro",
      "jornada": 6,
      "fixtureMatchId": "oro_j6_m3",
      "phase": "Jornada 6",
      "team1Id": "borussiadortmund",
      "team1Name": "Borussia Dortmund",
      "team1Logo": "Logos Equipos/borussia.webp",
      "score1": 1,
      "team2Id": "galatasaray",
      "team2Name": "Galatasaray",
      "team2Logo": "Logos Equipos/galatasaray.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039794983_12",
          "playerName": "Paul Scholes",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_19",
          "playerName": "Julio Enciso",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_22",
          "playerName": "Romelu Lukaku",
          "teamId": "borussiadortmund",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_10",
          "playerName": "Viktor Gyökeres",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040410030_19",
          "playerName": "Dani Olmo",
          "teamId": "borussiadortmund",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792638970523",
      "timestamp": 1792638970523,
      "date": "21 oct 2026, 09:16 p.m.",
      "competition": "oro",
      "jornada": 6,
      "fixtureMatchId": "oro_j6_m2",
      "phase": "Jornada 6",
      "team1Id": "como1907",
      "team1Name": "Como 1907",
      "team1Logo": "Logos Equipos/como.webp",
      "score1": 0,
      "team2Id": "bayernleverkusen",
      "team2Name": "Bayern Leverkusen",
      "team2Logo": "Logos Equipos/bayernleverkusen.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792039977160_19",
          "playerName": "James Maddison",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_23",
          "playerName": "Pio Esposito (P)",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_23",
          "playerName": "Pio Esposito (P)",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_6",
          "playerName": "Nicolò Barella",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792638913384",
      "timestamp": 1792638913384,
      "date": "21 oct 2026, 09:15 p.m.",
      "competition": "oro",
      "jornada": 6,
      "fixtureMatchId": "oro_j6_m1",
      "phase": "Jornada 6",
      "team1Id": "psg",
      "team1Name": "PSG",
      "team1Logo": "Logos Equipos/psg.png",
      "score1": 2,
      "team2Id": "interdemilan",
      "team2Name": "Inter de Milan",
      "team2Logo": "Logos Equipos/intermilan.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040197583_11",
          "playerName": "Diego Costa",
          "teamId": "psg",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040197583_6",
          "playerName": "João Palhinha",
          "teamId": "psg",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_8",
          "playerName": "Wayne Rooney",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_7",
          "playerName": "Piotr Zieliński",
          "teamId": "interdemilan",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040197583_9",
          "playerName": "Raphinha",
          "teamId": "psg",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792466913088",
      "timestamp": 1792466913088,
      "date": "19 oct 2026, 09:28 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m7",
      "phase": "Jornada 5",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 0,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040438881_7",
          "playerName": "Federico Valverde",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_22",
          "playerName": "Yan Diomande",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_15",
          "playerName": "Aurélien Tchouaméni",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792466828800",
      "timestamp": 1792466828800,
      "date": "19 oct 2026, 09:27 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m7",
      "phase": "Jornada 2",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 1,
      "team2Id": "brightonhovealbion",
      "team2Name": "Brighton & Hove Albion",
      "team2Logo": "Logos Equipos/brighton.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792126304381_8",
          "playerName": "Pape Matar Sarr",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_22",
          "playerName": "Illian Hernández",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792466755228",
      "timestamp": 1792466755228,
      "date": "19 oct 2026, 09:25 p.m.",
      "competition": "oro",
      "jornada": 5,
      "fixtureMatchId": "oro_j5_m3",
      "phase": "Jornada 5",
      "team1Id": "manchestercity",
      "team1Name": "Manchester City",
      "team1Logo": "Logos Equipos/manchestercity.png",
      "score1": 0,
      "team2Id": "bayernleverkusen",
      "team2Name": "Bayern Leverkusen",
      "team2Logo": "Logos Equipos/bayernleverkusen.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039977160_8",
          "playerName": "Nico Paz",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_8",
          "playerName": "Nico Paz",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_9",
          "playerName": "Ousmane Dembélé",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_10",
          "playerName": "Karim Adeyemi",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792465598370",
      "timestamp": 1792465598370,
      "date": "19 oct 2026, 09:06 p.m.",
      "competition": "plata",
      "jornada": 6,
      "fixtureMatchId": "plata_j6_m1",
      "phase": "Jornada 6",
      "team1Id": "ajaxdeamsterdam",
      "team1Name": "Ajax de Ámsterdam",
      "team1Logo": "Logos Equipos/ajax.png",
      "score1": 2,
      "team2Id": "fcbarcelona",
      "team2Name": "FC Barcelona",
      "team2Logo": "Logos Equipos/fcbarcelona.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040239414_21",
          "playerName": "Fermín López",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_22",
          "playerName": "Gonçalo Ramos",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040239414_9",
          "playerName": "Orkun Kökçü",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_8",
          "playerName": "Martin Ødegaard",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_10",
          "playerName": "Samuel Lino",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_2",
          "playerName": "Kalidou Koulibaly",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792465511549",
      "timestamp": 1792465511549,
      "date": "19 oct 2026, 09:05 p.m.",
      "competition": "plata",
      "jornada": 10,
      "fixtureMatchId": "plata_j10_m4",
      "phase": "Jornada 10",
      "team1Id": "manchesterunited",
      "team1Name": "Manchester United",
      "team1Logo": "Logos Equipos/manchesterunited.png",
      "score1": 1,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040339328_8",
          "playerName": "Christopher Nkunku",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_8",
          "playerName": "Christopher Nkunku",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 4
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792039745455_6",
          "playerName": "Manuel Ugarte",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_19",
          "playerName": "Lovro Majer",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_18",
          "playerName": "Petar Sučić",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792465425561",
      "timestamp": 1792465425561,
      "date": "19 oct 2026, 09:03 p.m.",
      "competition": "plata",
      "jornada": 10,
      "fixtureMatchId": "plata_j10_m1",
      "phase": "Jornada 10",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 4,
      "team2Id": "fcbarcelona",
      "team2Name": "FC Barcelona",
      "team2Logo": "Logos Equipos/fcbarcelona.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040054246_2",
          "playerName": "Sidny Cabral",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_8",
          "playerName": "Talisca",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_10",
          "playerName": "Jamal Musiala",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_11",
          "playerName": "Luis Suárez",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_11",
          "playerName": "Luis Suárez",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_23",
          "playerName": "Vedat Muriqi",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_22",
          "playerName": "Jarrod Bowen",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_20",
          "playerName": "Pedri",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792465336050",
      "timestamp": 1792465336050,
      "date": "19 oct 2026, 09:02 p.m.",
      "competition": "plata",
      "jornada": 10,
      "fixtureMatchId": "plata_j10_m6",
      "phase": "Jornada 10",
      "team1Id": "brightonhovealbion",
      "team1Name": "Brighton & Hove Albion",
      "team1Logo": "Logos Equipos/brighton.png",
      "score1": 4,
      "team2Id": "chelseafc",
      "team2Name": "Chelsea FC",
      "team2Logo": "Logos Equipos/chelsea.webp",
      "score2": 4,
      "events": []
    },
    {
      "id": "match_1792465313385",
      "timestamp": 1792465313385,
      "date": "19 oct 2026, 09:01 p.m.",
      "competition": "plata",
      "jornada": 9,
      "fixtureMatchId": "plata_j9_m4",
      "phase": "Jornada 9",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 1,
      "team2Id": "ajaxdeamsterdam",
      "team2Name": "Ajax de Ámsterdam",
      "team2Logo": "Logos Equipos/ajax.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040586949_21",
          "playerName": "Tyler Dibling",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_22",
          "playerName": "Victor Osimhen",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_9",
          "playerName": "Kingsley Coman",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792465273706",
      "timestamp": 1792465273706,
      "date": "19 oct 2026, 09:01 p.m.",
      "competition": "plata",
      "jornada": 9,
      "fixtureMatchId": "plata_j9_m6",
      "phase": "Jornada 9",
      "team1Id": "brightonhovealbion",
      "team1Name": "Brighton & Hove Albion",
      "team1Logo": "Logos Equipos/brighton.png",
      "score1": 1,
      "team2Id": "acffiorentina",
      "team2Name": "ACF Fiorentina",
      "team2Logo": "Logos Equipos/fiorentina.webp",
      "score2": 7,
      "events": [
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_8",
          "playerName": "Kevin De Bruyne",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_23",
          "playerName": "Carlos Espí",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_9",
          "playerName": "Estêvão",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_11",
          "playerName": "Michael Owen",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_17",
          "playerName": "Seksan Ratree",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792465191511",
      "timestamp": 1792465191511,
      "date": "19 oct 2026, 08:59 p.m.",
      "competition": "plata",
      "jornada": 9,
      "fixtureMatchId": "plata_j9_m1",
      "phase": "Jornada 9",
      "team1Id": "fcbarcelona",
      "team1Name": "FC Barcelona",
      "team1Logo": "Logos Equipos/fcbarcelona.png",
      "score1": 3,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040239414_8",
          "playerName": "Gavi",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_23",
          "playerName": "Ferran Torres",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_7",
          "playerName": "Federico Valverde",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_20",
          "playerName": "Pedri",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_11",
          "playerName": "Luis Suárez",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_21",
          "playerName": "Fermín López",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_17",
          "playerName": "Rodrygo",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464985215",
      "timestamp": 1792464985215,
      "date": "19 oct 2026, 08:56 p.m.",
      "competition": "plata",
      "jornada": 8,
      "fixtureMatchId": "plata_j8_m2",
      "phase": "Jornada 8",
      "team1Id": "manchesterunited",
      "team1Name": "Manchester United",
      "team1Logo": "Logos Equipos/manchesterunited.png",
      "score1": 2,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 6,
      "events": [
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792039745455_19",
          "playerName": "Lovro Majer",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_11",
          "playerName": "Diego Forlán",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_9",
          "playerName": "João Félix",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464889934",
      "timestamp": 1792464889934,
      "date": "19 oct 2026, 08:54 p.m.",
      "competition": "plata",
      "jornada": 8,
      "fixtureMatchId": "plata_j8_m5",
      "phase": "Jornada 8",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 0,
      "team2Id": "chelseafc",
      "team2Name": "Chelsea FC",
      "team2Logo": "Logos Equipos/chelsea.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039904071_19",
          "playerName": "Ganso",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_6",
          "playerName": "Jordan Henderson",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464855303",
      "timestamp": 1792464855303,
      "date": "19 oct 2026, 08:54 p.m.",
      "competition": "plata",
      "jornada": 8,
      "fixtureMatchId": "plata_j8_m3",
      "phase": "Jornada 8",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 0,
      "team2Id": "ajaxdeamsterdam",
      "team2Name": "Ajax de Ámsterdam",
      "team2Logo": "Logos Equipos/ajax.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 4
        },
        {
          "playerId": "p_1792040586949_7",
          "playerName": "Lucas Vázquez",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 2
        }
      ]
    },
    {
      "id": "match_1792464804363",
      "timestamp": 1792464804363,
      "date": "19 oct 2026, 08:53 p.m.",
      "competition": "plata",
      "jornada": 7,
      "fixtureMatchId": "plata_j7_m1",
      "phase": "Jornada 7",
      "team1Id": "fcbarcelona",
      "team1Name": "FC Barcelona",
      "team1Logo": "Logos Equipos/fcbarcelona.png",
      "score1": 6,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040239414_21",
          "playerName": "Fermín López",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_10",
          "playerName": "Jamal Musiala",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040239414_23",
          "playerName": "Ferran Torres",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040239414_18",
          "playerName": "Moisés Caicedo",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_5",
          "playerName": "Ben Chilwell",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_11",
          "playerName": "Diego Forlán",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_9",
          "playerName": "João Félix",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_6",
          "playerName": "N'Golo Kanté",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_11",
          "playerName": "Luis Suárez",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_11",
          "playerName": "Luis Suárez",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_22",
          "playerName": "Gonçalo Ramos",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_22",
          "playerName": "Gonçalo Ramos",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464666056",
      "timestamp": 1792464666056,
      "date": "19 oct 2026, 08:51 p.m.",
      "competition": "plata",
      "jornada": 7,
      "fixtureMatchId": "plata_j7_m4",
      "phase": "Jornada 7",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 3,
      "team2Id": "chelseafc",
      "team2Name": "Chelsea FC",
      "team2Logo": "Logos Equipos/chelsea.webp",
      "score2": 4,
      "events": [
        {
          "playerId": "p_1792039904071_19",
          "playerName": "Ganso",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_11",
          "playerName": "Vitor Roque",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_11",
          "playerName": "Vitor Roque",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_2",
          "playerName": "Luciano Juba",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_21",
          "playerName": "Flaco López",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_7",
          "playerName": "Ibrahim Sangaré",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_18",
          "playerName": "Rodrigo Garro",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_9",
          "playerName": "Luiz Araújo",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464499807",
      "timestamp": 1792464499807,
      "date": "19 oct 2026, 08:48 p.m.",
      "competition": "plata",
      "jornada": 7,
      "fixtureMatchId": "plata_j7_m6",
      "phase": "Jornada 7",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 1,
      "team2Id": "acffiorentina",
      "team2Name": "ACF Fiorentina",
      "team2Logo": "Logos Equipos/fiorentina.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_23",
          "playerName": "Carlos Espí",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_23",
          "playerName": "Carlos Espí",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_5",
          "playerName": "Archie Brown",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_16",
          "playerName": "João Pedro",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_19",
          "playerName": "Franco Mastantuono",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464429355",
      "timestamp": 1792464429355,
      "date": "19 oct 2026, 08:47 p.m.",
      "competition": "plata",
      "jornada": 6,
      "fixtureMatchId": "plata_j6_m5",
      "phase": "Jornada 6",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 2,
      "team2Id": "acffiorentina",
      "team2Name": "ACF Fiorentina",
      "team2Logo": "Logos Equipos/fiorentina.webp",
      "score2": 4,
      "events": [
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040551310_20",
          "playerName": "Facundo Torres",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 3
        },
        {
          "playerId": "p_1792040551310_11",
          "playerName": "Michael Owen",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_11",
          "playerName": "Michael Owen",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_8",
          "playerName": "Talisca",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792464321347",
      "timestamp": 1792464321347,
      "date": "19 oct 2026, 08:45 p.m.",
      "competition": "oro",
      "jornada": 10,
      "fixtureMatchId": "oro_j10_m1",
      "phase": "Jornada 10",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 3,
      "team2Id": "interdemilan",
      "team2Name": "Inter de Milan",
      "team2Logo": "Logos Equipos/intermilan.webp",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_9",
          "playerName": "Barış Alper Yılmaz",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_8",
          "playerName": "Wayne Rooney",
          "teamId": "interdemilan",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_4",
          "playerName": "Steven Gerrard",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_22",
          "playerName": "Lionel Messi",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_22",
          "playerName": "Rafael Leão",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792463908306",
      "timestamp": 1792463908306,
      "date": "19 oct 2026, 08:38 p.m.",
      "competition": "oro",
      "jornada": 7,
      "fixtureMatchId": "oro_j7_m4",
      "phase": "Jornada 7",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 0,
      "team2Id": "galatasaray",
      "team2Name": "Galatasaray",
      "team2Logo": "Logos Equipos/galatasaray.png",
      "score2": 4,
      "events": [
        {
          "playerId": "p_1792039794983_7",
          "playerName": "Weston McKennie",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039794983_19",
          "playerName": "Julio Enciso",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_19",
          "playerName": "Julio Enciso",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_8",
          "playerName": "Vinícius Júnior",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_10",
          "playerName": "Viktor Gyökeres",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792463843987",
      "timestamp": 1792463843987,
      "date": "19 oct 2026, 08:37 p.m.",
      "competition": "oro",
      "jornada": 6,
      "fixtureMatchId": "oro_j6_m5",
      "phase": "Jornada 6",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 4,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792039864584_19",
          "playerName": "Donyell Malen",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_19",
          "playerName": "Donyell Malen",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_22",
          "playerName": "Lionel Messi",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_14",
          "playerName": "Mohamed Salah",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040163150_13",
          "playerName": "Nikola Vlašić",
          "teamId": "riverplate",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040163150_11",
          "playerName": "Harry Kane",
          "teamId": "riverplate",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040163150_10",
          "playerName": "Dimitar Berbatov",
          "teamId": "riverplate",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040163150_9",
          "playerName": "Morgan Gibbs-White",
          "teamId": "riverplate",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792379860154",
      "timestamp": 1792379860154,
      "date": "18 oct 2026, 09:17 p.m.",
      "competition": "oro",
      "jornada": 4,
      "fixtureMatchId": "oro_j4_m4",
      "phase": "Jornada 4",
      "team1Id": "borussiadortmund",
      "team1Name": "Borussia Dortmund",
      "team1Logo": "Logos Equipos/borussia.webp",
      "score1": 0,
      "team2Id": "liverpool",
      "team2Name": "Liverpool",
      "team2Logo": "Logos Equipos/liverpool.png",
      "score2": 1,
      "events": []
    },
    {
      "id": "match_1792376370490",
      "timestamp": 1792376370490,
      "date": "18 oct 2026, 08:19 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m7",
      "phase": "Jornada 3",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 1,
      "team2Id": "feyenoordrotterdam",
      "team2Name": "Feyenoord Rotterdam",
      "team2Logo": "Logos Equipos/feyenoord.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792375525016",
      "timestamp": 1792375525016,
      "date": "18 oct 2026, 08:05 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m7",
      "phase": "Jornada 5",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 0,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792375517221",
      "timestamp": 1792375517221,
      "date": "18 oct 2026, 08:05 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m1",
      "phase": "Jornada 5",
      "team1Id": "fcbarcelona",
      "team1Name": "FC Barcelona",
      "team1Logo": "Logos Equipos/fcbarcelona.png",
      "score1": 1,
      "team2Id": "feyenoordrotterdam",
      "team2Name": "Feyenoord Rotterdam",
      "team2Logo": "Logos Equipos/feyenoord.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792375505827",
      "timestamp": 1792375505827,
      "date": "18 oct 2026, 08:05 p.m.",
      "competition": "plata",
      "jornada": 4,
      "fixtureMatchId": "plata_j4_m2",
      "phase": "Jornada 4",
      "team1Id": "brightonhovealbion",
      "team1Name": "Brighton & Hove Albion",
      "team1Logo": "Logos Equipos/brighton.png",
      "score1": 1,
      "team2Id": "feyenoordrotterdam",
      "team2Name": "Feyenoord Rotterdam",
      "team2Logo": "Logos Equipos/feyenoord.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792375489426",
      "timestamp": 1792375489426,
      "date": "18 oct 2026, 08:04 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m7",
      "phase": "Jornada 2",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 0,
      "team2Id": "brightonhovealbion",
      "team2Name": "Brighton & Hove Albion",
      "team2Logo": "Logos Equipos/brighton.png",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792375411860",
      "timestamp": 1792375411860,
      "date": "18 oct 2026, 08:03 p.m.",
      "competition": "oro",
      "jornada": 3,
      "fixtureMatchId": "oro_j3_m2",
      "phase": "Jornada 3",
      "team1Id": "galatasaray",
      "team1Name": "Galatasaray",
      "team1Logo": "Logos Equipos/galatasaray.png",
      "score1": 2,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039794983_7",
          "playerName": "Weston McKennie",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040163150_12",
          "playerName": "Nicolas Jackson",
          "teamId": "riverplate",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792371313973",
      "timestamp": 1792371313973,
      "date": "18 oct 2026, 06:55 p.m.",
      "competition": "oro",
      "jornada": 5,
      "fixtureMatchId": "oro_j5_m4",
      "phase": "Jornada 5",
      "team1Id": "borussiadortmund",
      "team1Name": "Borussia Dortmund",
      "team1Logo": "Logos Equipos/borussia.webp",
      "score1": 0,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792371220990",
      "timestamp": 1792371220990,
      "date": "18 oct 2026, 06:53 p.m.",
      "competition": "oro",
      "jornada": 4,
      "fixtureMatchId": "oro_j4_m3",
      "phase": "Jornada 4",
      "team1Id": "psg",
      "team1Name": "PSG",
      "team1Logo": "Logos Equipos/psg.png",
      "score1": 0,
      "team2Id": "riverplate",
      "team2Name": "River Plate",
      "team2Logo": "Logos Equipos/riverplate.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792369487531",
      "timestamp": 1792369487531,
      "date": "18 oct 2026, 06:24 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m2",
      "phase": "Jornada 5",
      "team1Id": "ajaxdeamsterdam",
      "team1Name": "Ajax de Ámsterdam",
      "team1Logo": "Logos Equipos/ajax.png",
      "score1": 1,
      "team2Id": "chelseafc",
      "team2Name": "Chelsea FC",
      "team2Logo": "Logos Equipos/chelsea.webp",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040586949_7",
          "playerName": "Lucas Vázquez",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792369444119",
      "timestamp": 1792369444119,
      "date": "18 oct 2026, 06:24 p.m.",
      "competition": "plata",
      "jornada": 4,
      "fixtureMatchId": "plata_j4_m3",
      "phase": "Jornada 4",
      "team1Id": "ajaxdeamsterdam",
      "team1Name": "Ajax de Ámsterdam",
      "team1Logo": "Logos Equipos/ajax.png",
      "score1": 3,
      "team2Id": "acffiorentina",
      "team2Name": "ACF Fiorentina",
      "team2Logo": "Logos Equipos/fiorentina.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040586949_8",
          "playerName": "Martin Ødegaard",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040586949_10",
          "playerName": "Samuel Lino",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_22",
          "playerName": "Darwin Núñez",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_8",
          "playerName": "Kevin De Bruyne",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_22",
          "playerName": "Serhou Guirassy",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_9",
          "playerName": "Estêvão",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_20",
          "playerName": "Facundo Torres",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792369301685",
      "timestamp": 1792369301685,
      "date": "18 oct 2026, 06:21 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m1",
      "phase": "Jornada 3",
      "team1Id": "fcbarcelona",
      "team1Name": "FC Barcelona",
      "team1Logo": "Logos Equipos/fcbarcelona.png",
      "score1": 2,
      "team2Id": "brightonhovealbion",
      "team2Name": "Brighton & Hove Albion",
      "team2Logo": "Logos Equipos/brighton.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040239414_21",
          "playerName": "Fermín López",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040239414_9",
          "playerName": "Orkun Kökçü",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_9",
          "playerName": "Atep",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_23",
          "playerName": "Ferran Torres",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_10",
          "playerName": "Romário",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792369217038",
      "timestamp": 1792369217038,
      "date": "18 oct 2026, 06:20 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m4",
      "phase": "Jornada 2",
      "team1Id": "ajaxdeamsterdam",
      "team1Name": "Ajax de Ámsterdam",
      "team1Logo": "Logos Equipos/ajax.png",
      "score1": 7,
      "team2Id": "losclille",
      "team2Name": "LOSC Lille",
      "team2Logo": "Logos Equipos/lille.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_8",
          "playerName": "Martin Ødegaard",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 3
        },
        {
          "playerId": "p_1792040586949_9",
          "playerName": "Johan Manzambi",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040586949_9",
          "playerName": "Johan Manzambi",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_7",
          "playerName": "Lucas Vázquez",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_22",
          "playerName": "Serhou Guirassy",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792369103721",
      "timestamp": 1792369103721,
      "date": "18 oct 2026, 06:18 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m6",
      "phase": "Jornada 2",
      "team1Id": "fctwente",
      "team1Name": "FC Twente",
      "team1Logo": "Logos Equipos/fctwente.png",
      "score1": 3,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 2,
      "events": []
    },
    {
      "id": "match_1792369071484",
      "timestamp": 1792369071484,
      "date": "18 oct 2026, 06:17 p.m.",
      "competition": "plata",
      "jornada": 1,
      "fixtureMatchId": "plata_j1_m5",
      "phase": "Jornada 1",
      "team1Id": "ajaxdeamsterdam",
      "team1Name": "Ajax de Ámsterdam",
      "team1Logo": "Logos Equipos/ajax.png",
      "score1": 2,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040438881_8",
          "playerName": "Park Ji-sung",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "gol",
          "count": 5
        },
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_4",
          "playerName": "Joško Gvardiol",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_7",
          "playerName": "Federico Valverde",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_20",
          "playerName": "Rayan Cherki",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792368944052",
      "timestamp": 1792368944052,
      "date": "18 oct 2026, 06:15 p.m.",
      "competition": "plata",
      "jornada": 1,
      "fixtureMatchId": "plata_j1_m1",
      "phase": "Jornada 1",
      "team1Id": "acffiorentina",
      "team1Name": "ACF Fiorentina",
      "team1Logo": "Logos Equipos/fiorentina.webp",
      "score1": 1,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_5",
          "playerName": "Archie Brown",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792368873844",
      "timestamp": 1792368873844,
      "date": "18 oct 2026, 06:14 p.m.",
      "competition": "oro",
      "jornada": 5,
      "fixtureMatchId": "oro_j5_m2",
      "phase": "Jornada 5",
      "team1Id": "psg",
      "team1Name": "PSG",
      "team1Logo": "Logos Equipos/psg.png",
      "score1": 2,
      "team2Id": "galatasaray",
      "team2Name": "Galatasaray",
      "team2Logo": "Logos Equipos/galatasaray.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040197583_11",
          "playerName": "Diego Costa",
          "teamId": "psg",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040197583_8",
          "playerName": "Xavi Simons",
          "teamId": "psg",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_10",
          "playerName": "Viktor Gyökeres",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040197583_10",
          "playerName": "Luis Díaz",
          "teamId": "psg",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_12",
          "playerName": "Paul Scholes",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792368783077",
      "timestamp": 1792368783077,
      "date": "18 oct 2026, 06:13 p.m.",
      "competition": "oro",
      "jornada": 4,
      "fixtureMatchId": "oro_j4_m5",
      "phase": "Jornada 4",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 6,
      "team2Id": "atleticodemadrid",
      "team2Name": "Atletico de Madrid",
      "team2Logo": "Logos Equipos/atleticomadrid.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040515606_11",
          "playerName": "Marcus Thuram",
          "teamId": "atleticodemadrid",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040515606_2",
          "playerName": "Matheus Cunha",
          "teamId": "atleticodemadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_22",
          "playerName": "Lionel Messi",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792039864584_7",
          "playerName": "Malo Gusto",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_11",
          "playerName": "Rodrigo De Paul",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_19",
          "playerName": "Donyell Malen",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 2
        }
      ]
    },
    {
      "id": "match_1792368733017",
      "timestamp": 1792368733017,
      "date": "18 oct 2026, 06:12 p.m.",
      "competition": "oro",
      "jornada": 4,
      "fixtureMatchId": "oro_j4_m5",
      "phase": "Jornada 4",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 6,
      "team2Id": "atleticodemadrid",
      "team2Name": "Atletico de Madrid",
      "team2Logo": "Logos Equipos/atleticomadrid.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040515606_11",
          "playerName": "Marcus Thuram",
          "teamId": "atleticodemadrid",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040515606_2",
          "playerName": "Matheus Cunha",
          "teamId": "atleticodemadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_22",
          "playerName": "Lionel Messi",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792039864584_7",
          "playerName": "Malo Gusto",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_11",
          "playerName": "Rodrigo De Paul",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_19",
          "playerName": "Donyell Malen",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 2
        }
      ]
    },
    {
      "id": "match_1792368463430",
      "timestamp": 1792368463430,
      "date": "18 oct 2026, 06:07 p.m.",
      "competition": "oro",
      "jornada": 2,
      "fixtureMatchId": "oro_j2_m1",
      "phase": "Jornada 2",
      "team1Id": "riverplate",
      "team1Name": "River Plate",
      "team1Logo": "Logos Equipos/riverplate.webp",
      "score1": 1,
      "team2Id": "interdemilan",
      "team2Name": "Inter de Milan",
      "team2Logo": "Logos Equipos/intermilan.webp",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040483217_9",
          "playerName": "Barış Alper Yılmaz",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_9",
          "playerName": "Barış Alper Yılmaz",
          "teamId": "interdemilan",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_8",
          "playerName": "Wayne Rooney",
          "teamId": "interdemilan",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040163150_9",
          "playerName": "Morgan Gibbs-White",
          "teamId": "riverplate",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040483217_21",
          "playerName": "Hugo Ekitiké (P)",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792368406976",
      "timestamp": 1792368406976,
      "date": "18 oct 2026, 06:06 p.m.",
      "competition": "oro",
      "jornada": 2,
      "fixtureMatchId": "oro_j2_m3",
      "phase": "Jornada 2",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 1,
      "team2Id": "como1907",
      "team2Name": "Como 1907",
      "team2Logo": "Logos Equipos/como.webp",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040014502_11",
          "playerName": "Jamie Vardy",
          "teamId": "como1907",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792368374793",
      "timestamp": 1792368374793,
      "date": "18 oct 2026, 06:06 p.m.",
      "competition": "oro",
      "jornada": 1,
      "fixtureMatchId": "oro_j1_m3",
      "phase": "Jornada 1",
      "team1Id": "galatasaray",
      "team1Name": "Galatasaray",
      "team1Logo": "Logos Equipos/galatasaray.png",
      "score1": 4,
      "team2Id": "atleticodemadrid",
      "team2Name": "Atletico de Madrid",
      "team2Logo": "Logos Equipos/atleticomadrid.webp",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792039794983_8",
          "playerName": "Vinícius Júnior",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_11",
          "playerName": "Semih Kılıçsoy",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 4
        },
        {
          "playerId": "p_1792039794983_7",
          "playerName": "Weston McKennie",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_10",
          "playerName": "Viktor Gyökeres",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_16",
          "playerName": "Mikel Merino",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792368223047",
      "timestamp": 1792368223047,
      "date": "18 oct 2026, 06:03 p.m.",
      "competition": "oro",
      "jornada": 1,
      "fixtureMatchId": "oro_j1_m4",
      "phase": "Jornada 1",
      "team1Id": "borussiadortmund",
      "team1Name": "Borussia Dortmund",
      "team1Logo": "Logos Equipos/borussia.webp",
      "score1": 0,
      "team2Id": "como1907",
      "team2Name": "Como 1907",
      "team2Logo": "Logos Equipos/como.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040014502_11",
          "playerName": "Jamie Vardy",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_21",
          "playerName": "Lorenzo Insigne",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792291117920",
      "timestamp": 1792291117920,
      "date": "17 oct 2026, 08:38 p.m.",
      "competition": "oro",
      "jornada": 2,
      "fixtureMatchId": "oro_j2_m5",
      "phase": "Jornada 2",
      "team1Id": "borussiadortmund",
      "team1Name": "Borussia Dortmund",
      "team1Logo": "Logos Equipos/borussia.webp",
      "score1": 0,
      "team2Id": "bayernleverkusen",
      "team2Name": "Bayern Leverkusen",
      "team2Logo": "Logos Equipos/bayernleverkusen.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039977160_18",
          "playerName": "Brahim Díaz",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_11",
          "playerName": "Lautaro Martínez",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_7",
          "playerName": "Youri Tielemans",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_19",
          "playerName": "James Maddison",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792290984572",
      "timestamp": 1792290984572,
      "date": "17 oct 2026, 08:36 p.m.",
      "competition": "plata",
      "jornada": 1,
      "fixtureMatchId": "plata_j1_m2",
      "phase": "Jornada 1",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 4,
      "team2Id": "brightonhovealbion",
      "team2Name": "Brighton & Hove Albion",
      "team2Logo": "Logos Equipos/brighton.png",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040623974_10",
          "playerName": "Romário",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_18",
          "playerName": "Zico",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_15",
          "playerName": "Geovany Quenda",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_19",
          "playerName": "Frank Lampard",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_11",
          "playerName": "Omar Marmoush",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_8",
          "playerName": "Désiré Doué",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_7",
          "playerName": "Jude Bellingham",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_7",
          "playerName": "Jude Bellingham",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_17",
          "playerName": "Cole Palmer",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_17",
          "playerName": "Cole Palmer",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_9",
          "playerName": "Kingsley Coman",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792289792051",
      "timestamp": 1792289792051,
      "date": "17 oct 2026, 08:16 p.m.",
      "competition": "plata",
      "jornada": 1,
      "fixtureMatchId": "plata_j1_m4",
      "phase": "Jornada 1",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 1,
      "team2Id": "feyenoordrotterdam",
      "team2Name": "Feyenoord Rotterdam",
      "team2Logo": "Logos Equipos/feyenoord.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792289737290",
      "timestamp": 1792289737290,
      "date": "17 oct 2026, 08:15 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m6",
      "phase": "Jornada 3",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 2,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 3
        },
        {
          "playerId": "p_1792040438881_16",
          "playerName": "Ayyoub Bouaddi",
          "teamId": "acmiln",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040438881_8",
          "playerName": "Park Ji-sung",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_8",
          "playerName": "Park Ji-sung",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_22",
          "playerName": "Jarrod Bowen",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_8",
          "playerName": "Talisca",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792288317173",
      "timestamp": 1792288317173,
      "date": "17 oct 2026, 07:51 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m3",
      "phase": "Jornada 2",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 1,
      "team2Id": "feyenoordrotterdam",
      "team2Name": "Feyenoord Rotterdam",
      "team2Logo": "Logos Equipos/feyenoord.webp",
      "score2": 0,
      "events": []
    },
    {
      "id": "match_1792288047892",
      "timestamp": 1792288047892,
      "date": "17 oct 2026, 07:47 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m3",
      "phase": "Jornada 5",
      "team1Id": "brightonhovealbion",
      "team1Name": "Brighton & Hove Albion",
      "team1Logo": "Logos Equipos/brighton.png",
      "score1": 4,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040623974_10",
          "playerName": "Romário",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040623974_9",
          "playerName": "Atep",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_14",
          "playerName": "Riyad Mahrez",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_19",
          "playerName": "Frank Lampard",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_11",
          "playerName": "Diego Forlán",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792039745455_9",
          "playerName": "João Félix",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_20",
          "playerName": "Thiago Almada",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_6",
          "playerName": "Granit Xhaka",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_12",
          "playerName": "Randal Kolo Muani",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_15",
          "playerName": "Geovany Quenda",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287896060",
      "timestamp": 1792287896060,
      "date": "17 oct 2026, 07:44 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m4",
      "phase": "Jornada 5",
      "team1Id": "fctwente",
      "team1Name": "FC Twente",
      "team1Logo": "Logos Equipos/fctwente.png",
      "score1": 2,
      "team2Id": "acffiorentina",
      "team2Name": "ACF Fiorentina",
      "team2Logo": "Logos Equipos/fiorentina.webp",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 4
        },
        {
          "playerId": "p_1792040551310_8",
          "playerName": "Kevin De Bruyne",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 3
        },
        {
          "playerId": "p_1792040551310_6",
          "playerName": "Aleksandar Pavlović",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_20",
          "playerName": "Facundo Torres",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039636832_11",
          "playerName": "Johan Cruyff",
          "teamId": "fctwente",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039636832_8",
          "playerName": "Jack Grealish",
          "teamId": "fctwente",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039636832_6",
          "playerName": "Mateo Kovačić",
          "teamId": "fctwente",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287791194",
      "timestamp": 1792287791194,
      "date": "17 oct 2026, 07:43 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m5",
      "phase": "Jornada 5",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 1,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_6",
          "playerName": "Samuele Ricci",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_8",
          "playerName": "Talisca",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287720740",
      "timestamp": 1792287720740,
      "date": "17 oct 2026, 07:42 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m3",
      "phase": "Jornada 5",
      "team1Id": "brightonhovealbion",
      "team1Name": "Brighton & Hove Albion",
      "team1Logo": "Logos Equipos/brighton.png",
      "score1": 4,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792040623974_10",
          "playerName": "Romário",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040623974_9",
          "playerName": "Atep",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_14",
          "playerName": "Riyad Mahrez",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_19",
          "playerName": "Frank Lampard",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_11",
          "playerName": "Diego Forlán",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039745455_9",
          "playerName": "João Félix",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_20",
          "playerName": "Thiago Almada",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_6",
          "playerName": "Granit Xhaka",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_12",
          "playerName": "Randal Kolo Muani",
          "teamId": "brightonhovealbion",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040623974_15",
          "playerName": "Geovany Quenda",
          "teamId": "brightonhovealbion",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287586554",
      "timestamp": 1792287586554,
      "date": "17 oct 2026, 07:39 p.m.",
      "competition": "plata",
      "jornada": 4,
      "fixtureMatchId": "plata_j4_m4",
      "phase": "Jornada 4",
      "team1Id": "fctwente",
      "team1Name": "FC Twente",
      "team1Logo": "Logos Equipos/fctwente.png",
      "score1": 1,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_12",
          "playerName": "Junya Ito",
          "teamId": "staderennais",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040339328_12",
          "playerName": "Junya Ito",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039636832_10",
          "playerName": "Michel Platini",
          "teamId": "fctwente",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039636832_11",
          "playerName": "Johan Cruyff",
          "teamId": "fctwente",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287468500",
      "timestamp": 1792287468500,
      "date": "17 oct 2026, 07:37 p.m.",
      "competition": "plata",
      "jornada": 4,
      "fixtureMatchId": "plata_j4_m7",
      "phase": "Jornada 4",
      "team1Id": "vascodagama",
      "team1Name": "Vasco da Gama",
      "team1Logo": "Logos Equipos/vasco.png",
      "score1": 1,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792126304381_23",
          "playerName": "Julián Quiñones",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_19",
          "playerName": "Gabriel Sara",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287439500",
      "timestamp": 1792287439500,
      "date": "17 oct 2026, 07:37 p.m.",
      "competition": "plata",
      "jornada": 4,
      "fixtureMatchId": "plata_j4_m5",
      "phase": "Jornada 4",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 4,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040371541_11",
          "playerName": "Omar Marmoush",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040371541_8",
          "playerName": "Désiré Doué",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040371541_22",
          "playerName": "Victor Osimhen",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_19",
          "playerName": "Franco Mastantuono",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_19",
          "playerName": "Franco Mastantuono",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_23",
          "playerName": "Endrick",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_20",
          "playerName": "Phil Foden",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287314778",
      "timestamp": 1792287314778,
      "date": "17 oct 2026, 07:35 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m6",
      "phase": "Jornada 3",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 2,
      "team2Id": "acmiln",
      "team2Name": "AC Milan",
      "team2Logo": "Logos Equipos/acmilan.webp",
      "score2": 5,
      "events": [
        {
          "playerId": "p_1792040438881_10",
          "playerName": "Erling Haaland",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_11",
          "playerName": "Cristiano Ronaldo",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 3
        },
        {
          "playerId": "p_1792040438881_16",
          "playerName": "Ayyoub Bouaddi",
          "teamId": "acmiln",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792040438881_8",
          "playerName": "Park Ji-sung",
          "teamId": "acmiln",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040438881_8",
          "playerName": "Park Ji-sung",
          "teamId": "acmiln",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_22",
          "playerName": "Jarrod Bowen",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792287154206",
      "timestamp": 1792287154206,
      "date": "17 oct 2026, 07:32 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m5",
      "phase": "Jornada 3",
      "team1Id": "fctwente",
      "team1Name": "FC Twente",
      "team1Logo": "Logos Equipos/fctwente.png",
      "score1": 3,
      "team2Id": "losclille",
      "team2Name": "LOSC Lille",
      "team2Logo": "Logos Equipos/lille.png",
      "score2": 1,
      "events": []
    },
    {
      "id": "match_1792287135035",
      "timestamp": 1792287135035,
      "date": "17 oct 2026, 07:32 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m2",
      "phase": "Jornada 3",
      "team1Id": "chelseafc",
      "team1Name": "Chelsea FC",
      "team1Logo": "Logos Equipos/chelsea.webp",
      "score1": 5,
      "team2Id": "acffiorentina",
      "team2Name": "ACF Fiorentina",
      "team2Logo": "Logos Equipos/fiorentina.webp",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039904071_10",
          "playerName": "Yuri Alberto",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_10",
          "playerName": "Yuri Alberto",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_13",
          "playerName": "Lucas Moura",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039904071_13",
          "playerName": "Lucas Moura",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_20",
          "playerName": "Leandro Trossard",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_11",
          "playerName": "Michael Owen",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_11",
          "playerName": "Michael Owen",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_21",
          "playerName": "Rasmus Højlund",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792286961747",
      "timestamp": 1792286961747,
      "date": "17 oct 2026, 07:29 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m2",
      "phase": "Jornada 2",
      "team1Id": "chelseafc",
      "team1Name": "Chelsea FC",
      "team1Logo": "Logos Equipos/chelsea.webp",
      "score1": 1,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 4,
      "events": [
        {
          "playerId": "p_1792040339328_21",
          "playerName": "Valentín Barco",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040339328_22",
          "playerName": "Douglas Luiz",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_21",
          "playerName": "Flaco López",
          "teamId": "chelseafc",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039904071_9",
          "playerName": "Luiz Araújo",
          "teamId": "chelseafc",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792286785995",
      "timestamp": 1792286785995,
      "date": "17 oct 2026, 07:26 p.m.",
      "competition": "plata",
      "jornada": 1,
      "fixtureMatchId": "plata_j1_m6",
      "phase": "Jornada 1",
      "team1Id": "fctwente",
      "team1Name": "FC Twente",
      "team1Logo": "Logos Equipos/fctwente.png",
      "score1": 4,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792039745455_11",
          "playerName": "Diego Forlán",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792039745455_9",
          "playerName": "João Félix",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_6",
          "playerName": "Manuel Ugarte",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792286694202",
      "timestamp": 1792286694202,
      "date": "17 oct 2026, 07:24 p.m.",
      "competition": "oro",
      "jornada": 5,
      "fixtureMatchId": "oro_j5_m5",
      "phase": "Jornada 5",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 1,
      "team2Id": "liverpool",
      "team2Name": "Liverpool",
      "team2Logo": "Logos Equipos/liverpool.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792039864584_11",
          "playerName": "Rodrigo De Paul",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792286656706",
      "timestamp": 1792286656706,
      "date": "17 oct 2026, 07:24 p.m.",
      "competition": "oro",
      "jornada": 3,
      "fixtureMatchId": "oro_j3_m4",
      "phase": "Jornada 3",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 1,
      "team2Id": "bayernleverkusen",
      "team2Name": "Bayern Leverkusen",
      "team2Logo": "Logos Equipos/bayernleverkusen.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039977160_8",
          "playerName": "Nico Paz",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_22",
          "playerName": "Gabriel Jesus",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_9",
          "playerName": "Ousmane Dembélé",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_19",
          "playerName": "Donyell Malen",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792285696187",
      "timestamp": 1792285696187,
      "date": "17 oct 2026, 07:08 p.m.",
      "competition": "oro",
      "jornada": 2,
      "fixtureMatchId": "oro_j2_m2",
      "phase": "Jornada 2",
      "team1Id": "galatasaray",
      "team1Name": "Galatasaray",
      "team1Logo": "Logos Equipos/galatasaray.png",
      "score1": 0,
      "team2Id": "liverpool",
      "team2Name": "Liverpool",
      "team2Logo": "Logos Equipos/liverpool.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792039523671_20",
          "playerName": "Brennan Johnson",
          "teamId": "liverpool",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039523671_18",
          "playerName": "Ibrahim Maza",
          "teamId": "liverpool",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792127380725",
      "timestamp": 1792127380725,
      "date": "15 oct 2026, 11:09 p.m.",
      "competition": "plata",
      "jornada": 1,
      "fixtureMatchId": "plata_j1_m7",
      "phase": "Jornada 1",
      "team1Id": "fcbarcelona",
      "team1Name": "FC Barcelona",
      "team1Logo": "Logos Equipos/fcbarcelona.png",
      "score1": 1,
      "team2Id": "vascodagama",
      "team2Name": "Vasco da Gama",
      "team2Logo": "Logos Equipos/vasco.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792126304381_19",
          "playerName": "Gabriel Sara",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_18",
          "playerName": "Conor Gallagher",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792126304381_23",
          "playerName": "Julián Quiñones",
          "teamId": "vascodagama",
          "type": "gol",
          "count": 3
        },
        {
          "playerId": "p_1792126304381_2",
          "playerName": "Javier Zanetti",
          "teamId": "vascodagama",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792126067026",
      "timestamp": 1792126067026,
      "date": "15 oct 2026, 10:47 p.m.",
      "competition": "plata",
      "jornada": 5,
      "fixtureMatchId": "plata_j5_m6",
      "phase": "Jornada 5",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 4,
      "team2Id": "losclille",
      "team2Name": "LOSC Lille",
      "team2Logo": "Logos Equipos/lille.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040371541_7",
          "playerName": "Jude Bellingham",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_7",
          "playerName": "Jude Bellingham",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_11",
          "playerName": "Omar Marmoush",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040371541_9",
          "playerName": "Kingsley Coman",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040371541_22",
          "playerName": "Victor Osimhen",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125987508",
      "timestamp": 1792125987508,
      "date": "15 oct 2026, 10:46 p.m.",
      "competition": "plata",
      "jornada": 4,
      "fixtureMatchId": "plata_j4_m1",
      "phase": "Jornada 4",
      "team1Id": "chelseafc",
      "team1Name": "Chelsea FC",
      "team1Logo": "Logos Equipos/chelsea.webp",
      "score1": 0,
      "team2Id": "fcbarcelona",
      "team2Name": "FC Barcelona",
      "team2Logo": "Logos Equipos/fcbarcelona.png",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040239414_21",
          "playerName": "Fermín López",
          "teamId": "fcbarcelona",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040239414_7",
          "playerName": "Daniele De Rossi",
          "teamId": "fcbarcelona",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125931189",
      "timestamp": 1792125931189,
      "date": "15 oct 2026, 10:45 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m4",
      "phase": "Jornada 3",
      "team1Id": "realmadrid",
      "team1Name": "Real Madrid",
      "team1Logo": "Logos Equipos/realmadrid.webp",
      "score1": 1,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 3,
      "events": [
        {
          "playerId": "p_1792039745455_19",
          "playerName": "Lovro Majer",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039745455_20",
          "playerName": "Thiago Almada",
          "teamId": "manchesterunited",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792039745455_11",
          "playerName": "Diego Forlán",
          "teamId": "manchesterunited",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040371541_11",
          "playerName": "Omar Marmoush",
          "teamId": "realmadrid",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040371541_8",
          "playerName": "Désiré Doué",
          "teamId": "realmadrid",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125849883",
      "timestamp": 1792125849883,
      "date": "15 oct 2026, 10:44 p.m.",
      "competition": "plata",
      "jornada": 3,
      "fixtureMatchId": "plata_j3_m3",
      "phase": "Jornada 3",
      "team1Id": "ajaxdeamsterdam",
      "team1Name": "Ajax de Ámsterdam",
      "team1Logo": "Logos Equipos/ajax.png",
      "score1": 3,
      "team2Id": "staderennais",
      "team2Name": "Stade Rennais",
      "team2Logo": "Logos Equipos/staderennais.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792040586949_6",
          "playerName": "İlkay Gündoğan",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_6",
          "playerName": "İlkay Gündoğan",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_9",
          "playerName": "Johan Manzambi",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_10",
          "playerName": "Samuel Lino",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040339328_9",
          "playerName": "George Best",
          "teamId": "staderennais",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040339328_11",
          "playerName": "Eden Hazard",
          "teamId": "staderennais",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_8",
          "playerName": "Martin Ødegaard",
          "teamId": "ajaxdeamsterdam",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040586949_11",
          "playerName": "Adriano",
          "teamId": "ajaxdeamsterdam",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125743474",
      "timestamp": 1792125743474,
      "date": "15 oct 2026, 10:42 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m1",
      "phase": "Jornada 2",
      "team1Id": "acffiorentina",
      "team1Name": "ACF Fiorentina",
      "team1Logo": "Logos Equipos/fiorentina.webp",
      "score1": 2,
      "team2Id": "fcbarcelona",
      "team2Name": "FC Barcelona",
      "team2Logo": "Logos Equipos/fcbarcelona.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040551310_7",
          "playerName": "Leandro Paredes",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_11",
          "playerName": "Michael Owen",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_8",
          "playerName": "Kevin De Bruyne",
          "teamId": "acffiorentina",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040551310_10",
          "playerName": "Samuel Eto'o",
          "teamId": "acffiorentina",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125667298",
      "timestamp": 1792125667298,
      "date": "15 oct 2026, 10:41 p.m.",
      "competition": "plata",
      "jornada": 2,
      "fixtureMatchId": "plata_j2_m5",
      "phase": "Jornada 2",
      "team1Id": "arsenal",
      "team1Name": "Arsenal",
      "team1Logo": "Logos Equipos/arsenal.png",
      "score1": 4,
      "team2Id": "manchesterunited",
      "team2Name": "Manchester United",
      "team2Logo": "Logos Equipos/manchesterunited.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_10",
          "playerName": "Gareth Bale",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040054246_11",
          "playerName": "Andriy Shevchenko",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792040054246_9",
          "playerName": "Memphis Depay",
          "teamId": "arsenal",
          "type": "asistencia",
          "count": 2
        }
      ]
    },
    {
      "id": "match_1792125547572",
      "timestamp": 1792125547572,
      "date": "15 oct 2026, 10:39 p.m.",
      "competition": "oro",
      "jornada": 5,
      "fixtureMatchId": "oro_j5_m1",
      "phase": "Jornada 5",
      "team1Id": "interdemilan",
      "team1Name": "Inter de Milan",
      "team1Logo": "Logos Equipos/intermilan.webp",
      "score1": 2,
      "team2Id": "como1907",
      "team2Name": "Como 1907",
      "team2Logo": "Logos Equipos/como.webp",
      "score2": 1,
      "events": [
        {
          "playerId": "p_1792040483217_10",
          "playerName": "Khvicha Kvaratskhelia",
          "teamId": "interdemilan",
          "type": "asistencia",
          "count": 2
        },
        {
          "playerId": "p_1792040483217_11",
          "playerName": "Julián Álvarez",
          "teamId": "interdemilan",
          "type": "gol",
          "count": 2
        },
        {
          "playerId": "p_1792040014502_11",
          "playerName": "Jamie Vardy",
          "teamId": "como1907",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792040014502_4",
          "playerName": "Riccardo Calafiori",
          "teamId": "como1907",
          "type": "asistencia",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125452472",
      "timestamp": 1792125452472,
      "date": "15 oct 2026, 10:37 p.m.",
      "competition": "oro",
      "jornada": 4,
      "fixtureMatchId": "oro_j4_m1",
      "phase": "Jornada 4",
      "team1Id": "galatasaray",
      "team1Name": "Galatasaray",
      "team1Logo": "Logos Equipos/galatasaray.png",
      "score1": 5,
      "team2Id": "interdemilan",
      "team2Name": "Inter de Milan",
      "team2Logo": "Logos Equipos/intermilan.webp",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792039794983_8",
          "playerName": "Vinícius Júnior",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 4
        },
        {
          "playerId": "p_1792039794983_7",
          "playerName": "Weston McKennie",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_10",
          "playerName": "Viktor Gyökeres",
          "teamId": "galatasaray",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039794983_19",
          "playerName": "Julio Enciso",
          "teamId": "galatasaray",
          "type": "asistencia",
          "count": 2
        }
      ]
    },
    {
      "id": "match_1792125284462",
      "timestamp": 1792125284462,
      "date": "15 oct 2026, 10:34 p.m.",
      "competition": "oro",
      "jornada": 1,
      "fixtureMatchId": "oro_j1_m2",
      "phase": "Jornada 1",
      "team1Id": "bocajuniors",
      "team1Name": "Boca Juniors",
      "team1Logo": "Logos Equipos/boca.png",
      "score1": 2,
      "team2Id": "manchestercity",
      "team2Name": "Manchester City",
      "team2Logo": "Logos Equipos/manchestercity.png",
      "score2": 0,
      "events": [
        {
          "playerId": "p_1792039864584_23",
          "playerName": "Sergio Agüero",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_10",
          "playerName": "Leroy Sané",
          "teamId": "bocajuniors",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039864584_16",
          "playerName": "Kylian Mbappé",
          "teamId": "bocajuniors",
          "type": "gol",
          "count": 1
        }
      ]
    },
    {
      "id": "match_1792125197196",
      "timestamp": 1792125197196,
      "date": "15 oct 2026, 10:33 p.m.",
      "competition": "oro",
      "jornada": 1,
      "fixtureMatchId": "oro_j1_m5",
      "phase": "Jornada 1",
      "team1Id": "psg",
      "team1Name": "PSG",
      "team1Logo": "Logos Equipos/psg.png",
      "score1": 0,
      "team2Id": "bayernleverkusen",
      "team2Name": "Bayern Leverkusen",
      "team2Logo": "Logos Equipos/bayernleverkusen.png",
      "score2": 2,
      "events": [
        {
          "playerId": "p_1792039977160_9",
          "playerName": "Ousmane Dembélé",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_8",
          "playerName": "Nico Paz",
          "teamId": "bayernleverkusen",
          "type": "gol",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_8",
          "playerName": "Nico Paz",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        },
        {
          "playerId": "p_1792039977160_2",
          "playerName": "Nuno Mendes",
          "teamId": "bayernleverkusen",
          "type": "asistencia",
          "count": 1
        }
      ]
    }
  ],
  "webConfig": {
    "seasonTitle": "Temporada 12",
    "leagueSubtitle": "Plataforma Oficial de la Liga Master Internacional (LMI) eFootball",
    "bannerAnnouncement": {
      "enabled": false,
      "text": "¡Bienvenidos a la Temporada 11 de la Liga Master Internacional!",
      "type": "info"
    },
    "tabs": [
      {
        "id": "dashboard",
        "label": "Inicio",
        "icon": "fa-house",
        "enabled": true
      },
      {
        "id": "posiciones",
        "label": "Tabla y Partidos",
        "icon": "fa-trophy",
        "enabled": true
      },
      {
        "id": "stats",
        "label": "Estadísticas",
        "icon": "fa-chart-line",
        "enabled": true
      },
      {
        "id": "teams",
        "label": "Equipos",
        "icon": "fa-shield-halved",
        "enabled": true
      },
      {
        "id": "sala-campeones",
        "label": "Sala de Trofeos",
        "icon": "fa-award",
        "enabled": true
      },
      {
        "id": "copa-estelar",
        "label": "Copa Estelar",
        "icon": "fa-star",
        "enabled": false
      },
      {
        "id": "uefa-champions",
        "label": "Champions League",
        "icon": "fa-shield-halved",
        "enabled": true
      },
      {
        "id": "mercado",
        "label": "Mercado",
        "icon": "fa-arrow-right-arrow-left",
        "enabled": true
      },
      {
        "id": "renovaciones",
        "label": "Calculadora Renovaciones",
        "icon": "fa-calculator",
        "enabled": false
      },
      {
        "id": "buscador",
        "label": "Buscar Jugadores",
        "icon": "fa-magnifying-glass",
        "enabled": true
      },
      {
        "id": "rules",
        "label": "Reglamento",
        "icon": "fa-book",
        "enabled": false
      }
    ],
    "calculatorSettings": {
      "defaultRenewalPrice": 5,
      "allowNotes": true
    }
  },
  "championsGroups": {
    "Grupo A": {
      "name": "Grupo A",
      "size": 5,
      "teams": [
        "fctwente",
        "losclille",
        "realmadrid",
        "carabobofutbolclub",
        "chelseafc"
      ]
    },
    "Grupo B": {
      "name": "Grupo B",
      "size": 5,
      "teams": [
        "borussiadortmund",
        "atleticodemadrid",
        "como1907",
        "acmiln",
        "riverplate"
      ]
    },
    "Grupo C": {
      "name": "Grupo C",
      "size": 4,
      "teams": [
        "galatasaray",
        "ajaxdeamsterdam",
        "liverpool",
        "arsenal"
      ]
    },
    "Grupo D": {
      "name": "Grupo D",
      "size": 4,
      "teams": [
        "vascodagama",
        "manchestercity",
        "bocajuniors",
        "manchesterunited"
      ]
    },
    "Grupo E": {
      "name": "Grupo E",
      "size": 4,
      "teams": [
        "rangersfootballclub",
        "staderennais",
        "acffiorentina",
        "bayernleverkusen"
      ]
    },
    "Grupo F": {
      "name": "Grupo F",
      "size": 4,
      "teams": [
        "psg",
        "interdemilan",
        "fcbarcelona",
        "brightonhovealbion"
      ]
    }
  }
};

if (typeof window !== 'undefined') {
  window.lmiData = INITIAL_LMI_DATA;
}
