// Base de datos unificada LMI Temporada 10

var INITIAL_LMI_DATA = {
  "season": "Temporada 13",
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
      "budget": 3791000000,
      "initialBudget": 2121000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 11,
      "logo": "Logos Equipos/intermilan.webp",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Inter de Milan",
        "teamId": "interdemilan",
        "season": "TEMP 13",
        "presupuestoAnterior": 3589,
        "gastosRenovaciones": 321,
        "ingresos": {
          "liga": {
            "posicion": 8,
            "premio": 250,
            "goleadores": 0,
            "asistidores": 73
          },
          "champions": {
            "fase": "4tos",
            "premio": 200,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 523,
        "presupuestoFinal": 3791
      }
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
      "budget": 798000000,
      "initialBudget": 300000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 20,
      "logo": "Logos Equipos/liverpool.png",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Liverpool",
        "teamId": "liverpool",
        "season": "TEMP 13",
        "presupuestoAnterior": 650,
        "gastosRenovaciones": 262,
        "ingresos": {
          "liga": {
            "posicion": 6,
            "premio": 270,
            "goleadores": 40,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 100
        },
        "balanceTemporada": 410,
        "presupuestoFinal": 798
      }
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
      "budget": 1438000000,
      "initialBudget": 759000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 5,
      "logo": "Logos Equipos/boca.png",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Boca Juniors",
        "teamId": "bocajuniors",
        "season": "TEMP 13",
        "presupuestoAnterior": 1241,
        "gastosRenovaciones": 505,
        "ingresos": {
          "liga": {
            "posicion": 4,
            "premio": 300,
            "goleadores": 112,
            "asistidores": 135
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 5,
          "adicionales": 0
        },
        "balanceTemporada": 702,
        "presupuestoFinal": 1438
      }
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
      "budget": 1953000000,
      "initialBudget": 2569000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 4,
      "logo": "Logos Equipos/fcbarcelona.png",
      "division": "plata",
      "budgetDetails": {
        "excelName": "FC Barcelona",
        "teamId": "fcbarcelona",
        "season": "TEMP 13",
        "presupuestoAnterior": 2135,
        "gastosRenovaciones": 407,
        "ingresos": {
          "liga": {
            "posicion": 3,
            "premio": 0,
            "goleadores": 30,
            "asistidores": 30
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 15,
          "adicionales": 0
        },
        "balanceTemporada": 225,
        "presupuestoFinal": 1953
      }
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
      "budget": 671000000,
      "initialBudget": 357000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 13,
      "logo": "Logos Equipos/staderennais.png",
      "division": "plata",
      "budgetDetails": {
        "excelName": "Stade Rennais",
        "teamId": "staderennais",
        "season": "TEMP 13",
        "presupuestoAnterior": 400,
        "gastosRenovaciones": 287,
        "ingresos": {
          "liga": {
            "posicion": 1,
            "premio": 360,
            "goleadores": 98,
            "asistidores": 100
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 558,
        "presupuestoFinal": 671
      }
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
      "budget": -151000000,
      "initialBudget": 11000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 9,
      "logo": "Logos Equipos/atleticomadrid.webp",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Atletico de Madrid",
        "teamId": "atleticodemadrid",
        "season": "TEMP 13",
        "presupuestoAnterior": 397,
        "gastosRenovaciones": 298,
        "ingresos": {
          "liga": {
            "posicion": 11,
            "premio": -250,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": -250,
        "presupuestoFinal": -151
      }
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
      "budget": 691000000,
      "initialBudget": 181000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 16,
      "logo": "Logos Equipos/borussia.webp",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Borussia Dortmund",
        "teamId": "borussiadortmund",
        "season": "TEMP 13",
        "presupuestoAnterior": 479,
        "gastosRenovaciones": 236,
        "ingresos": {
          "liga": {
            "posicion": 7,
            "premio": 260,
            "goleadores": 38,
            "asistidores": 0
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 448,
        "presupuestoFinal": 691
      }
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
      "budget": 3505000000,
      "initialBudget": 2154000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 7,
      "logo": "Logos Equipos/bayernleverkusen.png",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Bayern Leverkusen",
        "teamId": "bayernleverkusen",
        "season": "TEMP 13",
        "presupuestoAnterior": 2895,
        "gastosRenovaciones": 250,
        "ingresos": {
          "liga": {
            "posicion": 1,
            "premio": 360,
            "goleadores": 70,
            "asistidores": 70
          },
          "champions": {
            "fase": "CAMPEON",
            "premio": 350,
            "goleadorAsistidor": 0
          },
          "pretemporada": 10,
          "adicionales": 0
        },
        "balanceTemporada": 860,
        "presupuestoFinal": 3505
      }
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
      "budget": 1186000000,
      "initialBudget": 810000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 3,
      "logo": "Logos Equipos/psg.png",
      "division": "oro",
      "budgetDetails": {
        "excelName": "PSG",
        "teamId": "psg",
        "season": "TEMP 13",
        "presupuestoAnterior": 931,
        "gastosRenovaciones": 265,
        "ingresos": {
          "liga": {
            "posicion": 3,
            "premio": 320,
            "goleadores": 50,
            "asistidores": 0
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 520,
        "presupuestoFinal": 1186
      }
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
      "budget": 767000000,
      "initialBudget": 223000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 8,
      "logo": "Logos Equipos/realmadrid.webp",
      "division": "plata",
      "budgetDetails": {
        "excelName": "Real Madrid",
        "teamId": "realmadrid",
        "season": "TEMP 13",
        "presupuestoAnterior": 1016,
        "gastosRenovaciones": 309,
        "ingresos": {
          "liga": {
            "posicion": 12,
            "premio": -140,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": "4tos",
            "premio": 200,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 60,
        "presupuestoFinal": 767
      }
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
      "budget": 2779000000,
      "initialBudget": 2575000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 1,
      "logo": "Logos Equipos/como.webp",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Como 1907",
        "teamId": "como1907",
        "season": "TEMP 13",
        "presupuestoAnterior": 2660,
        "gastosRenovaciones": 266,
        "ingresos": {
          "liga": {
            "posicion": 2,
            "premio": 340,
            "goleadores": 45,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 385,
        "presupuestoFinal": 2779
      }
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
      "budget": 860000000,
      "initialBudget": 119000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 10,
      "logo": "Logos Equipos/galatasaray.png",
      "division": "oro",
      "budgetDetails": {
        "excelName": "Galatasaray",
        "teamId": "galatasaray",
        "season": "TEMP 13",
        "presupuestoAnterior": 404,
        "gastosRenovaciones": 256,
        "ingresos": {
          "liga": {
            "posicion": 5,
            "premio": 280,
            "goleadores": 95,
            "asistidores": 132
          },
          "champions": {
            "fase": "4tos",
            "premio": 200,
            "goleadorAsistidor": 0
          },
          "pretemporada": 5,
          "adicionales": 0
        },
        "balanceTemporada": 712,
        "presupuestoFinal": 860
      }
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
      "budget": 96000000,
      "initialBudget": 300000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 19,
      "logo": "Logos Equipos/lille.png",
      "division": "plata",
      "budgetDetails": {
        "excelName": "LOSC Lille",
        "teamId": "losclille",
        "season": "TEMP 13",
        "presupuestoAnterior": 630,
        "gastosRenovaciones": 344,
        "ingresos": {
          "liga": {
            "posicion": 13,
            "premio": -190,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": -190,
        "presupuestoFinal": 96
      }
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
      "budget": 973000000,
      "initialBudget": 211000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 2,
      "logo": "Logos Equipos/arsenal.png",
      "division": "plata",
      "budgetDetails": {
        "excelName": "Arsenal",
        "teamId": "arsenal",
        "season": "TEMP 13",
        "presupuestoAnterior": 368,
        "gastosRenovaciones": 325,
        "ingresos": {
          "liga": {
            "posicion": 4,
            "premio": 300,
            "goleadores": 55,
            "asistidores": 55
          },
          "champions": {
            "fase": "SUBCAMPEON",
            "premio": 300,
            "goleadorAsistidor": 120
          },
          "pretemporada": 0,
          "adicionales": 100
        },
        "balanceTemporada": 930,
        "presupuestoFinal": 973
      }
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
      "budget": 149000000,
      "initialBudget": 440000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 15,
      "logo": "Logos Equipos/acmilan.webp",
      "division": "plata",
      "budgetDetails": {
        "excelName": "AC Milan",
        "teamId": "acmiln",
        "season": "TEMP 13",
        "presupuestoAnterior": 221,
        "gastosRenovaciones": 449,
        "ingresos": {
          "liga": {
            "posicion": 8,
            "premio": 250,
            "goleadores": 50,
            "asistidores": 77
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 377,
        "presupuestoFinal": 149
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
      "budget": 157000000,
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
      },
      "budgetDetails": {
        "excelName": "Manchester United",
        "teamId": "manchesterunited",
        "season": "TEMP 13",
        "presupuestoAnterior": 143,
        "gastosRenovaciones": 446,
        "ingresos": {
          "liga": {
            "posicion": 9,
            "premio": 150,
            "goleadores": 45,
            "asistidores": 0
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 15,
          "adicionales": 100
        },
        "balanceTemporada": 460,
        "presupuestoFinal": 157
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
      "budget": 450000000,
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
      },
      "budgetDetails": {
        "excelName": "Ajax de Ámsterdam",
        "teamId": "ajaxdeamsterdam",
        "season": "TEMP 13",
        "presupuestoAnterior": 250,
        "gastosRenovaciones": 413,
        "ingresos": {
          "liga": {
            "posicion": 6,
            "premio": 270,
            "goleadores": 70,
            "asistidores": 73
          },
          "champions": {
            "fase": "4tos",
            "premio": 200,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 613,
        "presupuestoFinal": 450
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
      "budget": 772000000,
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
      },
      "budgetDetails": {
        "excelName": "Chelsea FC",
        "teamId": "chelseafc",
        "season": "TEMP 13",
        "presupuestoAnterior": 807,
        "gastosRenovaciones": 295,
        "ingresos": {
          "liga": {
            "posicion": 7,
            "premio": 260,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 260,
        "presupuestoFinal": 772
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
      "division": "inactivo",
      "stats": {
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "goalDiff": 0,
        "points": 0
      },
      "hidden": true
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
      "budget": 1091000000,
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
      },
      "budgetDetails": {
        "excelName": "ACF Fiorentina",
        "teamId": "acffiorentina",
        "season": "TEMP 13",
        "presupuestoAnterior": 573,
        "gastosRenovaciones": 289,
        "ingresos": {
          "liga": {
            "posicion": 2,
            "premio": 340,
            "goleadores": 102,
            "asistidores": 115
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 100
        },
        "balanceTemporada": 807,
        "presupuestoFinal": 1091
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
      "budget": 137000000,
      "initialBudget": 300000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 18,
      "logo": "Logos Equipos/riverplate.webp",
      "division": "oro",
      "budgetDetails": {
        "excelName": "River Plate",
        "teamId": "riverplate",
        "season": "TEMP 13",
        "presupuestoAnterior": 103,
        "gastosRenovaciones": 141,
        "ingresos": {
          "liga": {
            "posicion": 9,
            "premio": 0,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": "8vos",
            "premio": 150,
            "goleadorAsistidor": 0
          },
          "pretemporada": 25,
          "adicionales": 0
        },
        "balanceTemporada": 175,
        "presupuestoFinal": 137
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
      "budget": 111000000,
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
      },
      "hidden": false,
      "budgetDetails": {
        "excelName": "Rangers Football Club",
        "teamId": "rangersfootballclub",
        "season": "TEMP 13",
        "presupuestoAnterior": 500,
        "gastosRenovaciones": 289,
        "ingresos": {
          "liga": {
            "posicion": 11,
            "premio": -100,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": -100,
        "presupuestoFinal": 111
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
      "budget": 487000000,
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
      },
      "hidden": false,
      "budgetDetails": {
        "excelName": "Carabobo Fútbol Club",
        "teamId": "carabobofutbolclub",
        "season": "TEMP 13",
        "presupuestoAnterior": 500,
        "gastosRenovaciones": 293,
        "ingresos": {
          "liga": {
            "posicion": 5,
            "premio": 280,
            "goleadores": 0,
            "asistidores": 0
          },
          "champions": {
            "fase": null,
            "premio": 0,
            "goleadorAsistidor": 0
          },
          "pretemporada": 0,
          "adicionales": 0
        },
        "balanceTemporada": 280,
        "presupuestoFinal": 487
      }
    },
    {
      "id": "sportingclubedeportugal",
      "name": "Sporting Clube de Portugal",
      "shortName": "SCP",
      "colors": {
        "primary": "#038c5a",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #038c5a 0%, #000000 100%)"
      },
      "stadium": "Estádio José Alvalade",
      "manager": "David",
      "budget": 800000000,
      "initialBudget": 800000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 27,
      "logo": "Logos Equipos/lisboa.png",
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
      "id": "clubuniversidaddechile",
      "name": "Club Universidad de Chile",
      "shortName": "CUC",
      "colors": {
        "primary": "#0a2473",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #0a2473 0%, #000000 100%)"
      },
      "stadium": "Nacional Julio Martínez Prádanos",
      "manager": "Mandio",
      "budget": 800000000,
      "initialBudget": 800000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 28,
      "logo": "Logos Equipos/uchile.png",
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
      "id": "clubnacional",
      "name": "Club Nacional",
      "shortName": "CNU",
      "colors": {
        "primary": "#033e8c",
        "secondary": "#ffffff",
        "bgGradient": "linear-gradient(135deg, #033e8c 0%, #000000 100%)"
      },
      "stadium": "Gran Parque Central",
      "manager": "Eduardo",
      "budget": 800000000,
      "initialBudget": 800000000,
      "legendChangeNote": "",
      "legendRemoveNote": "",
      "leagueRank": 26,
      "logo": "Logos Equipos/nacional.webp",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_7",
      "name": "Piotr Zieliński",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_8",
      "name": "Wayne Rooney",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 5,
          "assists": 5,
          "goals_liga": 5,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_9",
      "name": "Barış Alper Yılmaz",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 3,
          "assists": 3,
          "goals_liga": 3,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_14",
      "name": "Dávinson Sánchez",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_21",
      "name": "Hugo Ekitiké (P)",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_23",
      "name": "Raúl Jiménez",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 4,
          "assists": 1,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_22",
      "name": "Victor Osimhen (P)",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 4,
          "assists": 0,
          "goals_liga": 4,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 4,
          "assists": 1,
          "goals_liga": 4,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_1",
      "name": "Pervis Estupiñán",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 4,
          "goals_liga": 0,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_2",
      "name": "Stephen Eustaquio",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_3",
      "name": "Orlando Gill",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_4",
      "name": "Lee Kang-In",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 10,
          "assists": 3,
          "goals_liga": 10,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039523671_18",
      "name": "Ibrahim Maza",
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 2,
          "assists": 3,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039523671_19",
      "name": "Lazar Samardzic",
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 2,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039523671_20",
      "name": "Brennan Johnson",
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 2,
          "assists": 3,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_22",
      "name": "Gonçalo Ramos",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 3,
          "assists": 1,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_17",
      "name": "Curtis Jones",
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_7",
      "name": "Matteo Darmian",
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_4",
      "name": "Steven Gerrard",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_6",
      "name": "Thiago Alcántara",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_7",
      "name": "Malo Gusto",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_14",
      "name": "Mohamed Salah",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 2,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_16",
      "name": "Kylian Mbappé",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 16,
          "assists": 5,
          "goals_liga": 15,
          "assists_liga": 4,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_19",
      "name": "Donyell Malen",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 6,
          "assists": 5,
          "goals_liga": 5,
          "assists_liga": 5,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_22",
      "name": "Lionel Messi",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 9,
          "assists": 4,
          "goals_liga": 7,
          "assists_liga": 2,
          "goals_champions": 2,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_23",
      "name": "Sergio Agüero",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 11,
          "assists": 6,
          "goals_liga": 8,
          "assists_liga": 5,
          "goals_champions": 3,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_21",
      "name": "Enzo Fernández (P)",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_20",
      "name": "Rayan Cherki (P)",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_18",
      "name": "Moisés Caicedo (P)",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_12",
      "name": "Emiliano Martínez",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_6",
      "name": "N'Golo Kanté",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_9",
      "name": "Orkun Kökçü",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 4,
          "assists": 4,
          "goals_liga": 3,
          "assists_liga": 4,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_10",
      "name": "Jamal Musiala",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 2,
          "assists": 4,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_20",
      "name": "Pedri",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 4,
          "assists": 6,
          "goals_liga": 4,
          "assists_liga": 6,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_21",
      "name": "Fermín López",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 8,
          "assists": 8,
          "goals_liga": 7,
          "assists_liga": 7,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_23",
      "name": "Ferran Torres",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 10,
          "assists": 5,
          "goals_liga": 8,
          "assists_liga": 4,
          "goals_champions": 2,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_10",
      "name": "Khvicha Kvaratskhelia",
      "position": "EI",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 2,
          "assists": 3,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 5,
          "assists": 3,
          "goals_liga": 5,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_6",
      "name": "Scott McTominay",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_11",
      "name": "Andriy Shevchenko",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 7,
          "assists": 6,
          "goals_liga": 7,
          "assists_liga": 5,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 2,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_11",
      "name": "Rodrigo De Paul (P)",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 2,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_8",
      "name": "Christopher Nkunku",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 3,
          "assists": 4,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_9",
      "name": "George Best",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 27,
          "assists": 9,
          "goals_liga": 26,
          "assists_liga": 8,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_11",
      "name": "Eden Hazard",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 15,
          "assists": 14,
          "goals_liga": 14,
          "assists_liga": 12,
          "goals_champions": 1,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_12",
      "name": "Junya Ito",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 2,
          "assists": 3,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 1,
          "assists": 4,
          "goals_liga": 1,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_18",
      "name": "Petar Sučić",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_21",
      "name": "Valentín Barco",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 3,
          "assists": 3,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_22",
      "name": "Douglas Luiz",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_2",
      "name": "Rizky Ridnho",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040339328_23",
      "name": "Marc ter Stegen",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792465873774_15",
      "name": "Denis Zakaria",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_8",
      "name": "Yunus Akgün",
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
      "isLegend": false,
      "statsByTeam": {
        "staderennais": {
          "teamId": "staderennais",
          "teamName": "Stade Rennais",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_2",
      "name": "Matheus Cunha",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_8",
      "name": "Toti Gómes",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_20",
      "name": "Martín Terrier",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_10",
      "name": "Ruud van Nistelrooij",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 3,
          "assists": 1,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_19",
      "name": "Brian Rodríguez",
      "position": "MC",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_20",
      "name": "Phil Foden",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_14",
      "name": "Achraf Hakimi",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_7",
      "name": "Khéphren Thuram",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_8",
      "name": "Isco",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_9",
      "name": "Iliman Ndiaye",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_10",
      "name": "Paulo Dybala",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 5,
          "assists": 3,
          "goals_liga": 4,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_11",
      "name": "Ismael Saibari",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 13,
          "assists": 1,
          "goals_liga": 10,
          "assists_liga": 1,
          "goals_champions": 3,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 1,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_18",
      "name": "Tijjani Reijnders",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_19",
      "name": "Dani Olmo",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040410030_22",
      "name": "Romelu Lukaku",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 3,
          "assists": 2,
          "goals_liga": 3,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_9",
      "name": "Suzuki Zion",
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_2",
      "name": "Nuno Mendes",
      "position": "LI",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 1,
          "assists": 5,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 1,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_6",
      "name": "Nicolò Barella",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_7",
      "name": "Youri Tielemans",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 1,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_8",
      "name": "Nico Paz",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 6,
          "assists": 15,
          "goals_liga": 4,
          "assists_liga": 11,
          "goals_champions": 2,
          "assists_champions": 4,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_9",
      "name": "Ousmane Dembélé",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 8,
          "assists": 2,
          "goals_liga": 5,
          "assists_liga": 2,
          "goals_champions": 3,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_10",
      "name": "Karim Adeyemi",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 7,
          "assists": 4,
          "goals_liga": 5,
          "assists_liga": 2,
          "goals_champions": 2,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_11",
      "name": "Lautaro Martínez",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 28,
          "assists": 0,
          "goals_liga": 22,
          "assists_liga": 0,
          "goals_champions": 6,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_15",
      "name": "Warren Zaïre-Emery",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_17",
      "name": "James Rodríguez",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 5,
          "assists": 6,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 4,
          "assists_champions": 3,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_18",
      "name": "Brahim Díaz",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 3,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_19",
      "name": "James Maddison",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 4,
          "assists": 7,
          "goals_liga": 3,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 5,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 1,
          "assists": 6,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 4,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_22",
      "name": "Gabriel Jesus",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 11,
          "assists": 1,
          "goals_liga": 5,
          "assists_liga": 1,
          "goals_champions": 6,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039977160_23",
      "name": "Pio Esposito (P)",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "bayernleverkusen": {
          "teamId": "bayernleverkusen",
          "teamName": "Bayern Leverkusen",
          "goals": 3,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_4",
      "name": "Théo Hernández",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_6",
      "name": "Joāo Palhinha",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_19",
      "name": "Pablo Barrios",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 4,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_9",
      "name": "Raphinha",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 8,
          "assists": 2,
          "goals_liga": 6,
          "assists_liga": 2,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_10",
      "name": "Luis Díaz",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 3,
          "assists": 3,
          "goals_liga": 3,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_11",
      "name": "Diego Costa",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 17,
          "assists": 2,
          "goals_liga": 13,
          "assists_liga": 2,
          "goals_champions": 4,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 2,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 3,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040197583_23",
      "name": "Christian Pulišić",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_10",
      "name": "Giuliano Simeone",
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
      "isLegend": false,
      "statsByTeam": {
        "psg": {
          "teamId": "psg",
          "teamName": "PSG",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_7",
      "name": "Jude Bellingham",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 2,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_8",
      "name": "Désiré Doué",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 5,
          "goals_liga": 0,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_9",
      "name": "Kingsley Coman",
      "position": "EI",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 1,
          "assists": 4,
          "goals_liga": 1,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_10",
      "name": "Francisco Conceição",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 6,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 4,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_11",
      "name": "Omar Marmoush",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 9,
          "assists": 1,
          "goals_liga": 7,
          "assists_liga": 0,
          "goals_champions": 2,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_16",
      "name": "João Pedro",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 2,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 1,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_19",
      "name": "Franco Mastantuono",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 2,
          "assists": 3,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 2,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 2,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_1",
      "name": "Anatolii Trubin",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792466085252_3",
      "name": "Dejan Kulusevski",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_7",
      "name": "Federico Valverde",
      "position": "MC",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 4,
          "goals_liga": 0,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 2,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_11",
      "name": "Julián Álvarez",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 3,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_2",
      "name": "Ronald Araújo",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_4",
      "name": "Riccardo Calafiori",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 3,
          "assists": 2,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_10",
      "name": "Lamine Yamal",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 5,
          "assists": 1,
          "goals_liga": 5,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_11",
      "name": "Jamie Vardy",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 12,
          "assists": 2,
          "goals_liga": 11,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_12",
      "name": "Vózinha",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_18",
      "name": "Morgan Rogers",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_20",
      "name": "Maghnes Akliouche",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_22",
      "name": "Ademola Lookman",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 2,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040014502_9",
      "name": "Kenan Yildiz",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 3,
          "assists": 2,
          "goals_liga": 3,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_11",
      "name": "Leonardo Bonucci",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039523671_15",
      "name": "Wesley",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_12",
      "name": "Lucas Torreira",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_13",
      "name": "Ricardo Quaresma",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_14",
      "name": "Mitchell Baker",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "como1907": {
          "teamId": "como1907",
          "teamName": "Como 1907",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_6",
      "name": "Martin Zubimendi",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_7",
      "name": "Weston McKennie",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 4,
          "assists": 5,
          "goals_liga": 1,
          "assists_liga": 4,
          "goals_champions": 3,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_8",
      "name": "Vinícius Júnior",
      "position": "EI",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 11,
          "assists": 8,
          "goals_liga": 10,
          "assists_liga": 7,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 1,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_10",
      "name": "Viktor Gyökeres",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 11,
          "assists": 3,
          "goals_liga": 7,
          "assists_liga": 3,
          "goals_champions": 4,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_11",
      "name": "Semih Kılıçsoy",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 18,
          "assists": 5,
          "goals_liga": 16,
          "assists_liga": 5,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_12",
      "name": "Paul Scholes",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 1,
          "assists": 6,
          "goals_liga": 1,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 1,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 3,
          "assists": 5,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 2,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_16",
      "name": "Mikel Merino",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 1,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039794983_19",
      "name": "Julio Enciso",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 3,
          "assists": 4,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_15",
      "name": "Morgan Gibbs-White",
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
      "isLegend": false,
      "statsByTeam": {
        "galatasaray": {
          "teamId": "galatasaray",
          "teamName": "Galatasaray",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_2",
      "name": "Sidny Cabral",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_6",
      "name": "Samuele Ricci",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 2,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_7",
      "name": "Ibrahim Sangaré",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_8",
      "name": "Talisca",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 4,
          "assists": 9,
          "goals_liga": 3,
          "assists_liga": 6,
          "goals_champions": 1,
          "assists_champions": 3,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_9",
      "name": "Memphis Depay",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 5,
          "assists": 22,
          "goals_liga": 2,
          "assists_liga": 12,
          "goals_champions": 3,
          "assists_champions": 10,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_10",
      "name": "Gareth Bale",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 35,
          "assists": 9,
          "goals_liga": 25,
          "assists_liga": 4,
          "goals_champions": 10,
          "assists_champions": 5,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_18",
      "name": "Lucas Paquetá",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_22",
      "name": "Jarrod Bowen",
      "position": "ID",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 3,
          "assists": 5,
          "goals_liga": 3,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_23",
      "name": "Vedat Muriqi",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 4,
          "assists": 3,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 3,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 3,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_18",
      "name": "Federico Dimarco",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 1,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_22",
      "name": "Darwin Núñez",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 18,
          "assists": 7,
          "goals_liga": 3,
          "assists_liga": 4,
          "goals_champions": 15,
          "assists_champions": 3,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 4,
          "assists": 4,
          "goals_liga": 2,
          "assists_liga": 3,
          "goals_champions": 2,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_16",
      "name": "Marcel Desailly",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_17",
      "name": "Morten Hjulmand",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "arsenal": {
          "teamId": "arsenal",
          "teamName": "Arsenal",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_4",
      "name": "Joško Gvardiol",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 4,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_8",
      "name": "Park Ji-Sung",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 2,
          "assists": 9,
          "goals_liga": 2,
          "assists_liga": 6,
          "goals_champions": 0,
          "assists_champions": 3,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 3,
          "assists": 3,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 2,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_10",
      "name": "Erling Haaland",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 10,
          "assists": 7,
          "goals_liga": 7,
          "assists_liga": 7,
          "goals_champions": 3,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_11",
      "name": "Cristiano Ronaldo",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 25,
          "assists": 11,
          "goals_liga": 23,
          "assists_liga": 10,
          "goals_champions": 2,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_13",
      "name": "Antonio Silva",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_15",
      "name": "Aurélien Tchouaméni",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_16",
      "name": "Ayyoub Bouaddi",
      "position": "MC",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 6,
          "assists": 0,
          "goals_liga": 6,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_17",
      "name": "Rodrygo",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_22",
      "name": "Yan Diomande",
      "position": "EI",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 1,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040438881_23",
      "name": "Endrick",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 3,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040371541_17",
      "name": "Cole Palmer",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "realmadrid": {
          "teamId": "realmadrid",
          "teamName": "Real Madrid",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040054246_20",
      "name": "Malik Tillman",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_23",
      "name": "Carlos Espí",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "acmiln": {
          "teamId": "acmiln",
          "teamName": "AC Milan",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_1",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_2",
      "name": "Konstantinos Mavropano",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_3",
      "name": "Frank Bekenbauer",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_4",
      "name": "Erick Dier",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_5",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_6",
      "name": "Reece James",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_7",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_8",
      "name": "Ben Chilwell",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_9",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_10",
      "name": "Manuel Ugarte",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_11",
      "name": "Rubén Neves",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_13",
      "name": "León Goretzka",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_15",
      "name": "Joey Veerman",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_16",
      "name": "Lovro Majer",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_17",
      "name": "Thiago Almada",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_19",
      "name": "Joao Félix",
      "position": "EI",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 5,
          "assists": 10,
          "goals_liga": 5,
          "assists_liga": 9,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_20",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_21",
      "name": "Diego Forlán",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 22,
          "assists": 2,
          "goals_liga": 21,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_22",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_23",
      "name": "Tiquinho Soares",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_2",
      "name": "Kalidou Koulibaly",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_6",
      "name": "İlkay Gündoğan",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 2,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_8",
      "name": "Martin Ødegaard",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 5,
          "assists": 13,
          "goals_liga": 4,
          "assists_liga": 8,
          "goals_champions": 1,
          "assists_champions": 5,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_9",
      "name": "Johan Manzambi",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 4,
          "assists": 11,
          "goals_liga": 3,
          "assists_liga": 8,
          "goals_champions": 1,
          "assists_champions": 3,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_10",
      "name": "Samuel Lino",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 4,
          "assists": 1,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_11",
      "name": "Adriano",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 39,
          "assists": 6,
          "goals_liga": 27,
          "assists_liga": 5,
          "goals_champions": 12,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_21",
      "name": "Tyler Dibling",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 3,
          "assists": 0,
          "goals_liga": 3,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_22",
      "name": "Serhou Guirassy",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_5",
      "name": "Markk Van Bommel",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_7",
      "name": "Lucas Vásquez",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 1,
          "assists": 7,
          "goals_liga": 1,
          "assists_liga": 6,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_15",
      "name": "Luka Modrić (P)",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_20",
      "name": "Leandro Trossard",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_18",
      "name": "Justin Kluivert",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "ajaxdeamsterdam": {
          "teamId": "ajaxdeamsterdam",
          "teamName": "Ajax de Ámsterdam",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_2",
      "name": "Luciano Juba",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_4",
      "name": "Fabricio Bruno",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_6",
      "name": "Jordan Henderson",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 2,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_9",
      "name": "Luiz Araújo",
      "position": "ID",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_10",
      "name": "Yuri Alberto",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 3,
          "assists": 1,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_11",
      "name": "Vitor Roque",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 3,
          "assists": 2,
          "goals_liga": 3,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_13",
      "name": "Lucas Moura",
      "position": "ID",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_15",
      "name": "Damian Bobadilla",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_18",
      "name": "Rodrigo Garro",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_19",
      "name": "Ganso",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_21",
      "name": "Flaco López",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 4,
          "assists": 1,
          "goals_liga": 4,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_7",
      "name": "G. De Arrascaeta",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_19",
      "name": "A. Costacurta",
      "position": "LD",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040586949_23",
      "name": "Mikel Oyarzabal",
      "position": "EI",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_20",
      "name": "Óscar",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_21",
      "name": "Marcos Antônio",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_22",
      "name": "Richard Rios",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_6",
      "name": "Granit Xhaka",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_9",
      "name": "Atep",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_10",
      "name": "Romário",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 5,
          "assists": 1,
          "goals_liga": 5,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_12",
      "name": "Randal Kolo Muani",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_14",
      "name": "Riyad Mahrez",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_15",
      "name": "Geovany Quenda",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_18",
      "name": "Zico",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
    },
    {
      "id": "p_1792040623974_19",
      "name": "Frank Lampard",
      "position": "MC",
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "brightonhovealbion": {
          "teamId": "brightonhovealbion",
          "teamName": "Brighton & Hove Albion",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      },
      "hidden": true
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_5",
      "name": "Archie Brown",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_6",
      "name": "Aleksandar Pavlovic",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_7",
      "name": "Leandro Paredes",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_8",
      "name": "Kevin De Bruyne",
      "position": "MP",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 10,
          "assists": 10,
          "goals_liga": 8,
          "assists_liga": 9,
          "goals_champions": 2,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_9",
      "name": "Estêvão",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_11",
      "name": "Michael Owen",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 7,
          "assists": 6,
          "goals_liga": 6,
          "assists_liga": 5,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_15",
      "name": "Rayan Aït Nouri",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_17",
      "name": "Seksan Ratree",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_20",
      "name": "Facundo Torres",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 3,
          "assists": 14,
          "goals_liga": 2,
          "assists_liga": 13,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_21",
      "name": "Rasmus Højlund",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_23",
      "name": "Ivan Provedel",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_24",
      "name": "Víctor Múñoz",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 4,
          "goals_liga": 1,
          "assists_liga": 4,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_25",
      "name": "Carney Chukwuemeka",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_2",
      "name": "Luis Henrique",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_5",
      "name": "Nico O'Reilly",
      "position": "LI",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_22",
      "name": "João Neves",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_18",
      "name": "Giovani Lo Celso",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 1,
          "assists": 4,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_7",
      "name": "Matías Soulé",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 3,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_12",
      "name": "Harry Kane",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 7,
          "assists": 0,
          "goals_liga": 4,
          "assists_liga": 0,
          "goals_champions": 3,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_10",
      "name": "Neymar Jr",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 4,
          "assists": 2,
          "goals_liga": 4,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_13",
      "name": "Matthijs De Ligt",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_6",
      "name": "Alejandro Garnacho",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_17",
      "name": "Son Heung-Min",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 2,
          "assists": 1,
          "goals_liga": 2,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_11",
      "name": "Dušan Vlahović",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_16",
      "name": "Nicolás Jackson",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_12",
      "name": "Thiago Silva",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_26",
      "name": "Pep Guardiola",
      "position": "MCD",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 1,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039864584_10",
      "name": "Leroy Sané",
      "position": "ED",
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
      "isLegend": false,
      "statsByTeam": {
        "bocajuniors": {
          "teamId": "bocajuniors",
          "teamName": "Boca Juniors",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_11",
      "name": "Marcus Thuram",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 6,
          "assists": 1,
          "goals_liga": 6,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_16",
      "name": "P. E. Aubameyang",
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
      "isLegend": false,
      "fromTeamId": "chelseafc",
      "fromTeamName": "Chelsea FC",
      "key": "pierreemerickaubameyang",
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 2,
          "assists": 0,
          "goals_liga": 2,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 4,
          "assists": 1,
          "goals_liga": 4,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 1,
          "assists": 2,
          "goals_liga": 1,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 2,
          "assists": 2,
          "goals_liga": 2,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 1,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039904071_23",
      "name": "Robert Arboleda",
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
      "isLegend": false,
      "statsByTeam": {
        "rangersfootballclub": {
          "teamId": "rangersfootballclub",
          "teamName": "Rangers Football Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792466085252_4",
      "name": "Viktor Tsygankov",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 10,
          "assists": 8,
          "goals_liga": 7,
          "assists_liga": 6,
          "goals_champions": 3,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792466085252_6",
      "name": "Ángel Di María",
      "position": "SD",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 6,
          "assists": 1,
          "goals_liga": 3,
          "assists_liga": 0,
          "goals_champions": 3,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 4,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 4,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792466085252_14",
      "name": "Yangel Herrera",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 6,
          "assists": 3,
          "goals_liga": 5,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 2,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 1,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 1,
          "assists_champions": 3,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792466085252_8",
      "name": "Dani Rodríguez",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792466085252_11",
      "name": "Issac Babadi",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792468026850_14",
      "name": "Eduardo Camavinga",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 1,
          "assists": 3,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_27",
      "name": "Tomiyasu Takehiro",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_28",
      "name": "Guglielmo Vicario",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793076042031_29",
      "name": "Alexander Barnes",
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
      "isLegend": false,
      "statsByTeam": {
        "carabobofutbolclub": {
          "teamId": "carabobofutbolclub",
          "teamName": "Carabobo Fútbol Club",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 4,
          "assists": 1,
          "goals_liga": 4,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "liverpool": {
          "teamId": "liverpool",
          "teamName": "Liverpool",
          "goals": 0,
          "assists": 2,
          "goals_liga": 0,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040483217_22",
      "name": "Rafael Leão",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "interdemilan": {
          "teamId": "interdemilan",
          "teamName": "Inter de Milan",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 1,
          "assists": 3,
          "goals_liga": 1,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040515606_12",
      "name": "Álex Baena",
      "position": "II",
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
      "isLegend": false,
      "statsByTeam": {
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 1,
          "assists": 1,
          "goals_liga": 1,
          "assists_liga": 1,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_8",
      "name": "Gavi",
      "position": "MC",
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
      "isLegend": false,
      "statsByTeam": {
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 1,
          "assists": 0,
          "goals_liga": 1,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "atleticodemadrid": {
          "teamId": "atleticodemadrid",
          "teamName": "Atletico de Madrid",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040551310_10",
      "name": "Samuel Eto'o",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 23,
          "assists": 8,
          "goals_liga": 20,
          "assists_liga": 6,
          "goals_champions": 3,
          "assists_champions": 2,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 6,
          "assists": 3,
          "goals_liga": 5,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040239414_11",
      "name": "Luis Suárez",
      "position": "DC",
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
      "isLegend": false,
      "statsByTeam": {
        "acffiorentina": {
          "teamId": "acffiorentina",
          "teamName": "ACF Fiorentina",
          "goals": 13,
          "assists": 2,
          "goals_liga": 12,
          "assists_liga": 2,
          "goals_champions": 1,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        },
        "fcbarcelona": {
          "teamId": "fcbarcelona",
          "teamName": "FC Barcelona",
          "goals": 3,
          "assists": 2,
          "goals_liga": 3,
          "assists_liga": 2,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_14",
      "name": "Frenkie de Jong",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_18",
      "name": "Xavi Simons (P)",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 3,
          "goals_liga": 0,
          "assists_liga": 3,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792992249049_12",
      "name": "Calvin Bassey",
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
      "isLegend": false,
      "statsByTeam": {
        "manchesterunited": {
          "teamId": "manchesterunited",
          "teamName": "Manchester United",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1791780792740_1",
      "name": "Jan Oblak",
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
      "isLegend": false,
      "statsByTeam": {
        "losclille": {
          "teamId": "losclille",
          "teamName": "LOSC Lille",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792040288950_1",
      "name": "Unai Simón",
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
      "isLegend": false,
      "statsByTeam": {
        "chelseafc": {
          "teamId": "chelseafc",
          "teamName": "Chelsea FC",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1792039948207_22",
      "name": "Kai Havertz",
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
      "isLegend": false,
      "statsByTeam": {
        "riverplate": {
          "teamId": "riverplate",
          "teamName": "River Plate",
          "goals": 0,
          "assists": 1,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 1,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
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
      "isLegend": false,
      "statsByTeam": {
        "borussiadortmund": {
          "teamId": "borussiadortmund",
          "teamName": "Borussia Dortmund",
          "goals": 0,
          "assists": 0,
          "goals_liga": 0,
          "assists_liga": 0,
          "goals_champions": 0,
          "assists_champions": 0,
          "goals_estelar": 0,
          "assists_estelar": 0
        }
      }
    },
    {
      "id": "p_1793798388244_1",
      "name": "Ansu Fati",
      "position": "DC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_2",
      "name": "Jhon Durán",
      "position": "DC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_3",
      "name": "Pablo Fornals",
      "position": "MP",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_4",
      "name": "Shinji Ono",
      "position": "MP",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_5",
      "name": "Marcel Sabitzer",
      "position": "MC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_6",
      "name": "Sergio Busquets",
      "position": "MCD",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_7",
      "name": "Karim Hafez",
      "position": "LI",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_8",
      "name": "Emre Can",
      "position": "CT",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_9",
      "name": "Abdulelah Al-Amri",
      "position": "CT",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_10",
      "name": "Nahuel Molina",
      "position": "LD",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_11",
      "name": "Jean Butez",
      "position": "PT",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_12",
      "name": "Saud Abdulhamid",
      "position": "LD",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_13",
      "name": "Johnny Cardoso",
      "position": "MCD",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_14",
      "name": "Nicolás Otamendi",
      "position": "CT",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_15",
      "name": "Shea Charles",
      "position": "MC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_16",
      "name": "Tommaso Baldanzi",
      "position": "MC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_17",
      "name": "Eliesse Ben Seghir",
      "position": "MC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_18",
      "name": "Thierno Barry",
      "position": "DC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_19",
      "name": "Pablo Torre",
      "position": "MC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_20",
      "name": "Senny Mayulu",
      "position": "DC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_21",
      "name": "Bart Verbruggen",
      "position": "PT",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_22",
      "name": "Pelé",
      "position": "DC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793798388244_23",
      "name": "David Villa",
      "position": "DC",
      "teamId": "sportingclubedeportugal",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_1",
      "name": "Mostafa Shobeir",
      "position": "PT",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_2",
      "name": "Caoimhín Kelleher",
      "position": "PT",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_3",
      "name": "Lucas Beraldo",
      "position": "CT",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_4",
      "name": "Lilian Thuram",
      "position": "CT",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_5",
      "name": "Matty Cash",
      "position": "LD",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_6",
      "name": "Lucas Digne",
      "position": "LI",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_7",
      "name": "Nikola Milenković",
      "position": "CT",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_8",
      "name": "Diogo Dalot",
      "position": "LD",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_9",
      "name": "Stanislav Lobotka",
      "position": "MCD",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_10",
      "name": "Nicolás de la Cruz",
      "position": "MC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_11",
      "name": "Fredrik Aursnes",
      "position": "MC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_12",
      "name": "Florian Thauvin",
      "position": "ED",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_13",
      "name": "Franck Ribéry",
      "position": "EI",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_14",
      "name": "Cody Gakpo",
      "position": "EI",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_15",
      "name": "Loïc Badé",
      "position": "CT",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_16",
      "name": "Mathías Olivera",
      "position": "LI",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_17",
      "name": "Sergi Roberto",
      "position": "LD",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_18",
      "name": "Pascal Groß",
      "position": "MC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_19",
      "name": "Alex Scott",
      "position": "MC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_20",
      "name": "Alexander Sørloth",
      "position": "DC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_21",
      "name": "Ollie Watkins",
      "position": "DC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_22",
      "name": "Nabil Fekir",
      "position": "MP",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
      "assists": 0,
      "goals_liga": 0,
      "assists_liga": 0,
      "goals_champions": 0,
      "assists_champions": 0,
      "goals_estelar": 0,
      "assists_estelar": 0,
      "cardType": "Normal",
      "isLegend": false
    },
    {
      "id": "p_1793851937709_23",
      "name": "Bebeto",
      "position": "DC",
      "teamId": "clubuniversidaddechile",
      "goals": 0,
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
  "championsLeagueMatches": [
    {
      "fase": "Octavos 1 (Ida)",
      "team1": "Carabobo Fútbol Club",
      "score1": null,
      "team2": "Manchester United",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 1 (Vuelta)",
      "team1": "Manchester United",
      "score1": null,
      "team2": "Carabobo Fútbol Club",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 2 (Ida)",
      "team1": "Borussia Dortmund",
      "score1": null,
      "team2": "Inter de Milan",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 2 (Vuelta)",
      "team1": "Inter de Milan",
      "score1": null,
      "team2": "Borussia Dortmund",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 3 (Ida)",
      "team1": "Ajax de Ámsterdam",
      "score1": null,
      "team2": "Boca Juniors",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 3 (Vuelta)",
      "team1": "Boca Juniors",
      "score1": null,
      "team2": "Ajax de Ámsterdam",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 4 (Ida)",
      "team1": "Manchester City",
      "score1": null,
      "team2": "Arsenal",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 4 (Vuelta)",
      "team1": "Arsenal",
      "score1": null,
      "team2": "Manchester City",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 5 (Ida)",
      "team1": "Bayern Leverkusen",
      "score1": null,
      "team2": "River Plate",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 5 (Vuelta)",
      "team1": "River Plate",
      "score1": null,
      "team2": "Bayern Leverkusen",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 6 (Ida)",
      "team1": "FC Barcelona",
      "score1": null,
      "team2": "Galatasaray",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 6 (Vuelta)",
      "team1": "Galatasaray",
      "score1": null,
      "team2": "FC Barcelona",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 7 (Ida)",
      "team1": "Real Madrid",
      "score1": null,
      "team2": "PSG",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 7 (Vuelta)",
      "team1": "PSG",
      "score1": null,
      "team2": "Real Madrid",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 8 (Ida)",
      "team1": "AC Milan",
      "score1": null,
      "team2": "ACF Fiorentina",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Octavos 8 (Vuelta)",
      "team1": "ACF Fiorentina",
      "score1": null,
      "team2": "AC Milan",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 1 (Ida)",
      "team1": "Carabobo Fútbol Club",
      "score1": null,
      "team2": "Inter de Milan",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 1 (Vuelta)",
      "team1": "Inter de Milan",
      "score1": null,
      "team2": "Carabobo Fútbol Club",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 2 (Ida)",
      "team1": "Ajax de Ámsterdam",
      "score1": null,
      "team2": "Arsenal",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 2 (Vuelta)",
      "team1": "Arsenal",
      "score1": null,
      "team2": "Ajax de Ámsterdam",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 3 (Ida)",
      "team1": "Bayern Leverkusen",
      "score1": null,
      "team2": "Galatasaray",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 3 (Vuelta)",
      "team1": "Galatasaray",
      "score1": null,
      "team2": "Bayern Leverkusen",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 4 (Ida)",
      "team1": "Real Madrid",
      "score1": null,
      "team2": "AC Milan",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Cuartos 4 (Vuelta)",
      "team1": "AC Milan",
      "score1": null,
      "team2": "Real Madrid",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Semifinal 1 (Ida)",
      "team1": "Carabobo Fútbol Club",
      "score1": null,
      "team2": "Arsenal",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Semifinal 1 (Vuelta)",
      "team1": "Arsenal",
      "score1": null,
      "team2": "Carabobo Fútbol Club",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Semifinal 2 (Ida)",
      "team1": "Bayern Leverkusen",
      "score1": null,
      "team2": "AC Milan",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Semifinal 2 (Vuelta)",
      "team1": "AC Milan",
      "score1": null,
      "team2": "Bayern Leverkusen",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    },
    {
      "fase": "Final",
      "team1": "Arsenal",
      "score1": null,
      "team2": "Bayern Leverkusen",
      "score2": null,
      "estado": "Pendiente",
      "events": [],
      "winner": null,
      "played": false
    }
  ],
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
      "player": "Rafael Leão",
      "type": "Intercambio",
      "fromTeamId": "interdemilan",
      "fromTeamName": "Inter de Milan",
      "toTeamId": "acffiorentina",
      "toTeamName": "ACF Fiorentina",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Estêvão. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Estêvão",
      "type": "Intercambio",
      "fromTeamId": "acffiorentina",
      "fromTeamName": "ACF Fiorentina",
      "toTeamId": "interdemilan",
      "toTeamName": "Inter de Milan",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Rafael Leão. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Álex Baena",
      "type": "Intercambio",
      "fromTeamId": "atleticodemadrid",
      "fromTeamName": "Atletico de Madrid",
      "toTeamId": "fcbarcelona",
      "toTeamName": "FC Barcelona",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Gavi. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Gavi",
      "type": "Intercambio",
      "fromTeamId": "fcbarcelona",
      "fromTeamName": "FC Barcelona",
      "toTeamId": "atleticodemadrid",
      "toTeamName": "Atletico de Madrid",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Álex Baena. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Samuel Eto'o",
      "type": "Intercambio",
      "fromTeamId": "acffiorentina",
      "fromTeamName": "ACF Fiorentina",
      "toTeamId": "fcbarcelona",
      "toTeamName": "FC Barcelona",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Luis Suárez. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Luis Suárez",
      "type": "Intercambio",
      "fromTeamId": "fcbarcelona",
      "fromTeamName": "FC Barcelona",
      "toTeamId": "acffiorentina",
      "toTeamName": "ACF Fiorentina",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Samuel Eto'o. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Frenkie de Jong",
      "type": "Fichaje",
      "fromTeamId": "fcbarcelona",
      "fromTeamName": "FC Barcelona",
      "toTeamId": "manchesterunited",
      "toTeamName": "Manchester United",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Xavi Simons",
      "type": "Prestamo",
      "fromTeamId": "psg",
      "fromTeamName": "PSG",
      "toTeamId": "manchesterunited",
      "toTeamName": "Manchester United",
      "price": 0,
      "seasons": 1,
      "details": "Préstamo hasta fin de temporada. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Calvin Bassey",
      "type": "Fichaje",
      "fromTeamId": "realmadrid",
      "fromTeamName": "Real Madrid",
      "toTeamId": "manchesterunited",
      "toTeamName": "Manchester United",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Jan Oblak",
      "type": "Intercambio",
      "fromTeamId": "chelseafc",
      "fromTeamName": "Chelsea FC",
      "toTeamId": "losclille",
      "toTeamName": "LOSC Lille",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Unai Simón. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Unai Simón",
      "type": "Intercambio",
      "fromTeamId": "losclille",
      "fromTeamName": "LOSC Lille",
      "toTeamId": "chelseafc",
      "toTeamName": "Chelsea FC",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Jan Oblak. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Trent Alexander-Arnold",
      "type": "Intercambio",
      "fromTeamId": "riverplate",
      "fromTeamName": "River Plate",
      "toTeamId": "manchestercity",
      "toTeamName": "Manchester City",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Kai Havertz. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "Kai Havertz",
      "type": "Intercambio",
      "fromTeamId": "manchestercity",
      "fromTeamName": "Manchester City",
      "toTeamId": "riverplate",
      "toTeamName": "River Plate",
      "price": 0,
      "seasons": 1,
      "details": "Intercambio por Trent Alexander-Arnold. Nota: Las estadísticas registradas de este jugador corresponden al total acumulado en los clubes donde ha militado en la temporada."
    },
    {
      "player": "P. E. Aubameyang",
      "type": "Fichaje",
      "fromTeamId": "chelseafc",
      "fromTeamName": "Chelsea FC",
      "toTeamId": "riverplate",
      "toTeamName": "River Plate",
      "price": 0,
      "seasons": 1,
      "details": "Traspaso (nombre unificado: \"Pierre-Emerick Aubameyang\" ➔ \"P. E. Aubameyang\")"
    },
    {
      "player": "Eduardo Camavinga",
      "type": "Fichaje",
      "fromTeamId": "riverplate",
      "fromTeamName": "River Plate",
      "toTeamId": "carabobofutbolclub",
      "toTeamName": "Carabobo Fútbol Club",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Robert Arboleda",
      "type": "Fichaje",
      "fromTeamId": "chelseafc",
      "fromTeamName": "Chelsea FC",
      "toTeamId": "rangersfootballclub",
      "toTeamName": "Rangers Football Club",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Marcus Thuram",
      "type": "Fichaje",
      "fromTeamId": "atleticodemadrid",
      "fromTeamName": "Atletico de Madrid",
      "toTeamId": "riverplate",
      "toTeamName": "River Plate",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Leroy Sané",
      "type": "Fichaje",
      "fromTeamId": "bocajuniors",
      "fromTeamName": "Boca Juniors",
      "toTeamId": "riverplate",
      "toTeamName": "River Plate",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Thiago Silva",
      "type": "Fichaje",
      "fromTeamId": "chelseafc",
      "fromTeamName": "Chelsea FC",
      "toTeamId": "riverplate",
      "toTeamName": "River Plate",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Mikel Oyarzabal",
      "type": "Fichaje",
      "fromTeamId": "ajaxdeamsterdam",
      "fromTeamName": "Ajax de Ámsterdam",
      "toTeamId": "chelseafc",
      "toTeamName": "Chelsea FC",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Leandro Trossard",
      "type": "Fichaje",
      "fromTeamId": "chelseafc",
      "fromTeamName": "Chelsea FC",
      "toTeamId": "ajaxdeamsterdam",
      "toTeamName": "Ajax de Ámsterdam",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Luka Modrić (P)",
      "type": "Fichaje",
      "fromTeamId": "bocajuniors",
      "fromTeamName": "Boca Juniors",
      "toTeamId": "ajaxdeamsterdam",
      "toTeamName": "Ajax de Ámsterdam",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Carlos Espí",
      "type": "Fichaje",
      "fromTeamId": "acffiorentina",
      "fromTeamName": "ACF Fiorentina",
      "toTeamId": "acmiln",
      "toTeamName": "AC Milan",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Malik Tillman",
      "type": "Fichaje",
      "fromTeamId": "arsenal",
      "fromTeamName": "Arsenal",
      "toTeamId": "acmiln",
      "toTeamName": "AC Milan",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Cole Palmer",
      "type": "Fichaje",
      "fromTeamId": "realmadrid",
      "fromTeamName": "Real Madrid",
      "toTeamId": "acmiln",
      "toTeamName": "AC Milan",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Darwin Núñez",
      "type": "Fichaje",
      "fromTeamId": "acffiorentina",
      "fromTeamName": "ACF Fiorentina",
      "toTeamId": "arsenal",
      "toTeamName": "Arsenal",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Federico Dimarco",
      "type": "Fichaje",
      "fromTeamId": "acmiln",
      "fromTeamName": "AC Milan",
      "toTeamId": "arsenal",
      "toTeamName": "Arsenal",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Wesley",
      "type": "Fichaje",
      "fromTeamId": "liverpool",
      "fromTeamName": "Liverpool",
      "toTeamId": "como1907",
      "toTeamName": "Como 1907",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Julián Álvarez",
      "type": "Fichaje",
      "fromTeamId": "interdemilan",
      "fromTeamName": "Inter de Milan",
      "toTeamId": "realmadrid",
      "toTeamName": "Real Madrid",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Federico Valverde",
      "type": "Fichaje",
      "fromTeamId": "acmiln",
      "fromTeamName": "AC Milan",
      "toTeamId": "realmadrid",
      "toTeamName": "Real Madrid",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Dejan Kulusevski",
      "type": "Fichaje",
      "fromTeamId": "carabobofutbolclub",
      "fromTeamName": "Carabobo Fútbol Club",
      "toTeamId": "realmadrid",
      "toTeamName": "Real Madrid",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Phil Foden",
      "type": "Fichaje",
      "fromTeamId": "acmiln",
      "fromTeamName": "AC Milan",
      "toTeamId": "atleticodemadrid",
      "toTeamName": "Atletico de Madrid",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Denis Zakaria",
      "type": "Fichaje",
      "fromTeamId": "rangersfootballclub",
      "fromTeamName": "Rangers Football Club",
      "toTeamId": "staderennais",
      "toTeamName": "Stade Rennais",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Rodrigo De Paul (P)",
      "type": "Fichaje",
      "fromTeamId": "bocajuniors",
      "fromTeamName": "Boca Juniors",
      "toTeamId": "fcbarcelona",
      "toTeamName": "FC Barcelona",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Andriy Shevchenko",
      "type": "Fichaje",
      "fromTeamId": "arsenal",
      "fromTeamName": "Arsenal",
      "toTeamId": "fcbarcelona",
      "toTeamName": "FC Barcelona",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Scott McTominay",
      "type": "Fichaje",
      "fromTeamId": "interdemilan",
      "fromTeamName": "Inter de Milan",
      "toTeamId": "fcbarcelona",
      "toTeamName": "FC Barcelona",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Khvicha Kvaratskhelia",
      "type": "Fichaje",
      "fromTeamId": "interdemilan",
      "fromTeamName": "Inter de Milan",
      "toTeamId": "fcbarcelona",
      "toTeamName": "FC Barcelona",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Emiliano Martínez",
      "type": "Fichaje",
      "fromTeamId": "interdemilan",
      "fromTeamName": "Inter de Milan",
      "toTeamId": "bocajuniors",
      "toTeamName": "Boca Juniors",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Moisés Caicedo (P)",
      "type": "Fichaje",
      "fromTeamId": "fcbarcelona",
      "fromTeamName": "FC Barcelona",
      "toTeamId": "bocajuniors",
      "toTeamName": "Boca Juniors",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Rayan Cherki (P)",
      "type": "Fichaje",
      "fromTeamId": "ajaxdeamsterdam",
      "fromTeamName": "Ajax de Ámsterdam",
      "toTeamId": "bocajuniors",
      "toTeamName": "Boca Juniors",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Enzo Fernández (P)",
      "type": "Fichaje",
      "fromTeamId": "riverplate",
      "fromTeamName": "River Plate",
      "toTeamId": "bocajuniors",
      "toTeamName": "Boca Juniors",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Curtis Jones",
      "type": "Fichaje",
      "fromTeamId": "ajaxdeamsterdam",
      "fromTeamName": "Ajax de Ámsterdam",
      "toTeamId": "liverpool",
      "toTeamName": "Liverpool",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Gonçalo Ramos",
      "type": "Fichaje",
      "fromTeamId": "fcbarcelona",
      "fromTeamName": "FC Barcelona",
      "toTeamId": "liverpool",
      "toTeamName": "Liverpool",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Victor Osimhen (P)",
      "type": "Fichaje",
      "fromTeamId": "realmadrid",
      "fromTeamName": "Real Madrid",
      "toTeamId": "interdemilan",
      "toTeamName": "Inter de Milan",
      "price": 0,
      "seasons": 1,
      "details": "Movimiento de mercado de mitad de temporada"
    },
    {
      "player": "Martin Ødegaard",
      "type": "Prestamo",
      "fromTeamId": "losclille",
      "fromTeamName": "LOSC Lille",
      "toTeamId": "ajaxdeamsterdam",
      "toTeamName": "Ajax de Ámsterdam",
      "price": 0,
      "seasons": 1,
      "details": ""
    },
    {
      "player": "Ronaldinho",
      "type": "Prestamo",
      "fromTeamId": "ajaxdeamsterdam",
      "fromTeamName": "Ajax de Ámsterdam",
      "toTeamId": "losclille",
      "toTeamName": "LOSC Lille",
      "price": 0,
      "seasons": 1,
      "details": ""
    },
    {
      "player": "Neymar JR",
      "type": "Prestamo",
      "fromTeamId": "como1907",
      "fromTeamName": "Como 1907",
      "toTeamId": "riverplate",
      "toTeamName": "River Plate",
      "price": 50,
      "seasons": 1,
      "details": ""
    },
    {
      "player": "Rodri",
      "type": "Prestamo",
      "fromTeamId": "como1907",
      "fromTeamName": "Como 1907",
      "toTeamId": "borussiadortmund",
      "toTeamName": "Borussia Dortmund",
      "price": 30,
      "seasons": 1,
      "details": ""
    },
    {
      "player": "Raphinha",
      "type": "Prestamo",
      "fromTeamId": "bocajuniors",
      "fromTeamName": "Boca Juniors",
      "toTeamId": "psg",
      "toTeamName": "PSG",
      "price": 0,
      "seasons": 1,
      "details": ""
    },
    {
      "player": "Mohamed Salah",
      "type": "Prestamo",
      "fromTeamId": "psg",
      "fromTeamName": "PSG",
      "toTeamId": "bocajuniors",
      "toTeamName": "Boca Juniors",
      "price": 0,
      "seasons": 1,
      "details": ""
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
      "cantidad": 2
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
    },
    {
      "torneo": "Liga LMI",
      "ganador": "Santiago Encinas",
      "cantidad": 1
    },
    {
      "torneo": "Liga LMI",
      "ganador": "Daniel Herrera",
      "cantidad": 1
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
    },
    {
      "id": "bdo-1793935216067",
      "season": "Temporada 12",
      "temporada": "Temporada 12",
      "player": "Lautaro Martínez",
      "jugador": "Lautaro Martínez",
      "team": "Bayern Leverkusen",
      "club": "Bayern Leverkusen",
      "teamLogo": "Logos Equipos/bayernleverkusen.png",
      "manager": "Santiago Encinas",
      "dt": "Santiago Encinas",
      "image": "Balon de oro/lautaro_balon_oro_t12.jpg",
      "imagen": "Balon de oro/lautaro_balon_oro_t12.jpg",
      "goals": 28,
      "goles": 28,
      "assists": 0,
      "asistencias": 0,
      "trophies": "Campeon de Division Oro y Champions League siendo figura en las eliminatorias y la final",
      "titulos": "Campeon de Division Oro y Champions League siendo figura en las eliminatorias y la final",
      "description": "El delantero argentino Lautaro Martínez fue una pieza fundamental para que el Bayern Leverkusen consiguiera el doblete. Además, a nivel individual, cerró una temporada espectacular sumando un total de 28 goles, consolidándose como un verdadero killer del área.",
      "descripcion": "El delantero argentino Lautaro Martínez fue una pieza fundamental para que el Bayern Leverkusen consiguiera el doblete. Además, a nivel individual, cerró una temporada espectacular sumando un total de 28 goles, consolidándose como un verdadero killer del área."
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j1_m3",
            "jornada": 1,
            "team1Id": "galatasaray",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j1_m4",
            "jornada": 1,
            "team1Id": "borussiadortmund",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j1_m5",
            "jornada": 1,
            "team1Id": "psg",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j2_m2",
            "jornada": 2,
            "team1Id": "galatasaray",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j2_m3",
            "jornada": 2,
            "team1Id": "bocajuniors",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j3_m2",
            "jornada": 3,
            "team1Id": "galatasaray",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j4_m2",
            "jornada": 4,
            "team1Id": "manchestercity",
            "team2Id": "como1907",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j4_m3",
            "jornada": 4,
            "team1Id": "psg",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j4_m4",
            "jornada": 4,
            "team1Id": "borussiadortmund",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j4_m5",
            "jornada": 4,
            "team1Id": "bocajuniors",
            "team2Id": "atleticodemadrid",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j5_m2",
            "jornada": 5,
            "team1Id": "psg",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j5_m3",
            "jornada": 5,
            "team1Id": "manchestercity",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j5_m4",
            "jornada": 5,
            "team1Id": "borussiadortmund",
            "team2Id": "riverplate",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j5_m5",
            "jornada": 5,
            "team1Id": "bocajuniors",
            "team2Id": "liverpool",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j6_m2",
            "jornada": 6,
            "team1Id": "como1907",
            "team2Id": "bayernleverkusen",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j6_m3",
            "jornada": 6,
            "team1Id": "borussiadortmund",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j9_m5",
            "jornada": 9,
            "team1Id": "manchestercity",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j10_m4",
            "jornada": 10,
            "team1Id": "manchestercity",
            "team2Id": "psg",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "oro_j10_m5",
            "jornada": 10,
            "team1Id": "como1907",
            "team2Id": "galatasaray",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j1_m2",
            "jornada": 1,
            "team1Id": "realmadrid",
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "id": "plata_j1_m5",
            "jornada": 1,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j1_m6",
            "jornada": 1,
            "team1Id": "fctwente",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j1_m7",
            "jornada": 1,
            "team1Id": "fcbarcelona",
            "team2Id": "rangersfootballclub",
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
        "matches": [
          {
            "id": "plata_j2_m1",
            "jornada": 2,
            "team1Id": "acffiorentina",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j2_m2",
            "jornada": 2,
            "team1Id": "chelseafc",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j2_m4",
            "jornada": 2,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j2_m5",
            "jornada": 2,
            "team1Id": "arsenal",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j2_m6",
            "jornada": 2,
            "team1Id": "fctwente",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j2_m7",
            "jornada": 2,
            "team1Id": "rangersfootballclub",
            "team2Id": "carabobofutbolclub",
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
        "matches": [
          {
            "id": "plata_j3_m1",
            "jornada": 3,
            "team1Id": "fcbarcelona",
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j3_m2",
            "jornada": 3,
            "team1Id": "chelseafc",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j3_m3",
            "jornada": 3,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j3_m4",
            "jornada": 3,
            "team1Id": "realmadrid",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j3_m5",
            "jornada": 3,
            "team1Id": "fctwente",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j3_m6",
            "jornada": 3,
            "team1Id": "arsenal",
            "team2Id": "acmiln",
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
        "matches": [
          {
            "id": "plata_j4_m1",
            "jornada": 4,
            "team1Id": "chelseafc",
            "team2Id": "fcbarcelona",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j4_m3",
            "jornada": 4,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j4_m4",
            "jornada": 4,
            "team1Id": "fctwente",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j4_m5",
            "jornada": 4,
            "team1Id": "realmadrid",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "team1Id": "rangersfootballclub",
            "team2Id": "manchesterunited",
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
        "matches": [
          {
            "id": "plata_j5_m2",
            "jornada": 5,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j5_m3",
            "jornada": 5,
            "team1Id": "carabobofutbolclub",
            "team2Id": "manchesterunited",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j5_m4",
            "jornada": 5,
            "team1Id": "fctwente",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j5_m5",
            "jornada": 5,
            "team1Id": "arsenal",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j5_m6",
            "jornada": 5,
            "team1Id": "realmadrid",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j5_m7",
            "jornada": 5,
            "team1Id": "rangersfootballclub",
            "team2Id": "acmiln",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "team1Id": "carabobofutbolclub",
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j6_m6",
            "jornada": 6,
            "team1Id": "realmadrid",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j6_m7",
            "jornada": 6,
            "team1Id": "rangersfootballclub",
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j7_m5",
            "jornada": 7,
            "team1Id": "carabobofutbolclub",
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j7_m7",
            "jornada": 7,
            "team1Id": "rangersfootballclub",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j8_m3",
            "jornada": 8,
            "team1Id": "arsenal",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j8_m5",
            "jornada": 8,
            "team1Id": "realmadrid",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j8_m6",
            "jornada": 8,
            "team1Id": "carabobofutbolclub",
            "team2Id": "staderennais",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j8_m7",
            "jornada": 8,
            "team1Id": "rangersfootballclub",
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j9_m2",
            "jornada": 9,
            "team1Id": "arsenal",
            "team2Id": "fctwente",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j9_m6",
            "jornada": 9,
            "team1Id": "carabobofutbolclub",
            "team2Id": "acffiorentina",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j9_m7",
            "jornada": 9,
            "team1Id": "rangersfootballclub",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j10_m2",
            "jornada": 10,
            "team1Id": "acmiln",
            "team2Id": "losclille",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j10_m6",
            "jornada": 10,
            "team1Id": "carabobofutbolclub",
            "team2Id": "chelseafc",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j10_m7",
            "jornada": 10,
            "team1Id": "rangersfootballclub",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
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
            "team1Id": "carabobofutbolclub",
            "team2Id": "ajaxdeamsterdam",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j11_m7",
            "jornada": 11,
            "team1Id": "rangersfootballclub",
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
            "team1Id": "carabobofutbolclub",
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
            "team1Id": "rangersfootballclub",
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
            "team1Id": "carabobofutbolclub",
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
            "team1Id": "rangersfootballclub",
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
            "team1Id": "carabobofutbolclub",
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
            "team1Id": "rangersfootballclub",
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
            "team1Id": "carabobofutbolclub",
            "team2Id": "rangersfootballclub",
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
            "team1Id": "carabobofutbolclub",
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
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
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
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
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
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
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
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j21_m7",
            "jornada": 21,
            "team1Id": "acffiorentina",
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j22_m7",
            "jornada": 22,
            "team1Id": "chelseafc",
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j23_m7",
            "jornada": 23,
            "team1Id": "ajaxdeamsterdam",
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
            "score1": null,
            "score2": null,
            "played": false,
            "events": []
          },
          {
            "id": "plata_j24_m7",
            "jornada": 24,
            "team1Id": "fctwente",
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
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
            "team2Id": "rangersfootballclub",
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
            "team2Id": "carabobofutbolclub",
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
            "team2Id": "rangersfootballclub",
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
  "matchHistory": [],
  "webConfig": {
    "seasonTitle": "Temporada 13",
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
        "enabled": false
      },
      {
        "id": "mercado",
        "label": "Mercado",
        "icon": "fa-arrow-right-arrow-left",
        "enabled": true
      },
      {
        "id": "renovaciones",
        "label": "Renovaciones",
        "icon": "fa-calculator",
        "enabled": false
      },
      {
        "id": "ruleta",
        "label": "Ruleta",
        "icon": "fa-dharmachakra",
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
  },
  "teamBudgets": {
    "bayernleverkusen": {
      "excelName": "Bayern Leverkusen",
      "teamId": "bayernleverkusen",
      "season": "TEMP 13",
      "presupuestoAnterior": 2895,
      "gastosRenovaciones": 250,
      "ingresos": {
        "liga": {
          "posicion": 1,
          "premio": 360,
          "goleadores": 70,
          "asistidores": 70
        },
        "champions": {
          "fase": "CAMPEON",
          "premio": 350,
          "goleadorAsistidor": 0
        },
        "pretemporada": 10,
        "adicionales": 0
      },
      "balanceTemporada": 860,
      "presupuestoFinal": 3505
    },
    "como1907": {
      "excelName": "Como 1907",
      "teamId": "como1907",
      "season": "TEMP 13",
      "presupuestoAnterior": 2660,
      "gastosRenovaciones": 266,
      "ingresos": {
        "liga": {
          "posicion": 2,
          "premio": 340,
          "goleadores": 45,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 385,
      "presupuestoFinal": 2779
    },
    "psg": {
      "excelName": "PSG",
      "teamId": "psg",
      "season": "TEMP 13",
      "presupuestoAnterior": 931,
      "gastosRenovaciones": 265,
      "ingresos": {
        "liga": {
          "posicion": 3,
          "premio": 320,
          "goleadores": 50,
          "asistidores": 0
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 520,
      "presupuestoFinal": 1186
    },
    "bocajuniors": {
      "excelName": "Boca Juniors",
      "teamId": "bocajuniors",
      "season": "TEMP 13",
      "presupuestoAnterior": 1241,
      "gastosRenovaciones": 505,
      "ingresos": {
        "liga": {
          "posicion": 4,
          "premio": 300,
          "goleadores": 112,
          "asistidores": 135
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 5,
        "adicionales": 0
      },
      "balanceTemporada": 702,
      "presupuestoFinal": 1438
    },
    "galatasaray": {
      "excelName": "Galatasaray",
      "teamId": "galatasaray",
      "season": "TEMP 13",
      "presupuestoAnterior": 404,
      "gastosRenovaciones": 256,
      "ingresos": {
        "liga": {
          "posicion": 5,
          "premio": 280,
          "goleadores": 95,
          "asistidores": 132
        },
        "champions": {
          "fase": "4tos",
          "premio": 200,
          "goleadorAsistidor": 0
        },
        "pretemporada": 5,
        "adicionales": 0
      },
      "balanceTemporada": 712,
      "presupuestoFinal": 860
    },
    "liverpool": {
      "excelName": "Liverpool",
      "teamId": "liverpool",
      "season": "TEMP 13",
      "presupuestoAnterior": 650,
      "gastosRenovaciones": 262,
      "ingresos": {
        "liga": {
          "posicion": 6,
          "premio": 270,
          "goleadores": 40,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 100
      },
      "balanceTemporada": 410,
      "presupuestoFinal": 798
    },
    "borussiadortmund": {
      "excelName": "Borussia Dortmund",
      "teamId": "borussiadortmund",
      "season": "TEMP 13",
      "presupuestoAnterior": 479,
      "gastosRenovaciones": 236,
      "ingresos": {
        "liga": {
          "posicion": 7,
          "premio": 260,
          "goleadores": 38,
          "asistidores": 0
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 448,
      "presupuestoFinal": 691
    },
    "interdemilan": {
      "excelName": "Inter de Milan",
      "teamId": "interdemilan",
      "season": "TEMP 13",
      "presupuestoAnterior": 3589,
      "gastosRenovaciones": 321,
      "ingresos": {
        "liga": {
          "posicion": 8,
          "premio": 250,
          "goleadores": 0,
          "asistidores": 73
        },
        "champions": {
          "fase": "4tos",
          "premio": 200,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 523,
      "presupuestoFinal": 3791
    },
    "riverplate": {
      "excelName": "River Plate",
      "teamId": "riverplate",
      "season": "TEMP 13",
      "presupuestoAnterior": 103,
      "gastosRenovaciones": 141,
      "ingresos": {
        "liga": {
          "posicion": 9,
          "premio": 0,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 25,
        "adicionales": 0
      },
      "balanceTemporada": 175,
      "presupuestoFinal": 137
    },
    "manchestercity": {
      "excelName": "Manchester City",
      "teamId": "manchestercity",
      "season": "TEMP 13",
      "presupuestoAnterior": 1329,
      "gastosRenovaciones": 504,
      "ingresos": {
        "liga": {
          "posicion": 10,
          "premio": -200,
          "goleadores": 0,
          "asistidores": 40
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": -10,
      "presupuestoFinal": 815
    },
    "atleticodemadrid": {
      "excelName": "Atletico de Madrid",
      "teamId": "atleticodemadrid",
      "season": "TEMP 13",
      "presupuestoAnterior": 397,
      "gastosRenovaciones": 298,
      "ingresos": {
        "liga": {
          "posicion": 11,
          "premio": -250,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": -250,
      "presupuestoFinal": -151
    },
    "staderennais": {
      "excelName": "Stade Rennais",
      "teamId": "staderennais",
      "season": "TEMP 13",
      "presupuestoAnterior": 400,
      "gastosRenovaciones": 287,
      "ingresos": {
        "liga": {
          "posicion": 1,
          "premio": 360,
          "goleadores": 98,
          "asistidores": 100
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 558,
      "presupuestoFinal": 671
    },
    "acffiorentina": {
      "excelName": "ACF Fiorentina",
      "teamId": "acffiorentina",
      "season": "TEMP 13",
      "presupuestoAnterior": 573,
      "gastosRenovaciones": 289,
      "ingresos": {
        "liga": {
          "posicion": 2,
          "premio": 340,
          "goleadores": 102,
          "asistidores": 115
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 100
      },
      "balanceTemporada": 807,
      "presupuestoFinal": 1091
    },
    "fcbarcelona": {
      "excelName": "FC Barcelona",
      "teamId": "fcbarcelona",
      "season": "TEMP 13",
      "presupuestoAnterior": 2135,
      "gastosRenovaciones": 407,
      "ingresos": {
        "liga": {
          "posicion": 3,
          "premio": 0,
          "goleadores": 30,
          "asistidores": 30
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 15,
        "adicionales": 0
      },
      "balanceTemporada": 225,
      "presupuestoFinal": 1953
    },
    "arsenal": {
      "excelName": "Arsenal",
      "teamId": "arsenal",
      "season": "TEMP 13",
      "presupuestoAnterior": 368,
      "gastosRenovaciones": 325,
      "ingresos": {
        "liga": {
          "posicion": 4,
          "premio": 300,
          "goleadores": 55,
          "asistidores": 55
        },
        "champions": {
          "fase": "SUBCAMPEON",
          "premio": 300,
          "goleadorAsistidor": 120
        },
        "pretemporada": 0,
        "adicionales": 100
      },
      "balanceTemporada": 930,
      "presupuestoFinal": 973
    },
    "carabobofutbolclub": {
      "excelName": "Carabobo Fútbol Club",
      "teamId": "carabobofutbolclub",
      "season": "TEMP 13",
      "presupuestoAnterior": 500,
      "gastosRenovaciones": 293,
      "ingresos": {
        "liga": {
          "posicion": 5,
          "premio": 280,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 280,
      "presupuestoFinal": 487
    },
    "ajaxdeamsterdam": {
      "excelName": "Ajax de Ámsterdam",
      "teamId": "ajaxdeamsterdam",
      "season": "TEMP 13",
      "presupuestoAnterior": 250,
      "gastosRenovaciones": 413,
      "ingresos": {
        "liga": {
          "posicion": 6,
          "premio": 270,
          "goleadores": 70,
          "asistidores": 73
        },
        "champions": {
          "fase": "4tos",
          "premio": 200,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 613,
      "presupuestoFinal": 450
    },
    "chelseafc": {
      "excelName": "Chelsea FC",
      "teamId": "chelseafc",
      "season": "TEMP 13",
      "presupuestoAnterior": 807,
      "gastosRenovaciones": 295,
      "ingresos": {
        "liga": {
          "posicion": 7,
          "premio": 260,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 260,
      "presupuestoFinal": 772
    },
    "acmiln": {
      "excelName": "AC Milan",
      "teamId": "acmiln",
      "season": "TEMP 13",
      "presupuestoAnterior": 221,
      "gastosRenovaciones": 449,
      "ingresos": {
        "liga": {
          "posicion": 8,
          "premio": 250,
          "goleadores": 50,
          "asistidores": 77
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 377,
      "presupuestoFinal": 149
    },
    "manchesterunited": {
      "excelName": "Manchester United",
      "teamId": "manchesterunited",
      "season": "TEMP 13",
      "presupuestoAnterior": 143,
      "gastosRenovaciones": 446,
      "ingresos": {
        "liga": {
          "posicion": 9,
          "premio": 150,
          "goleadores": 45,
          "asistidores": 0
        },
        "champions": {
          "fase": "8vos",
          "premio": 150,
          "goleadorAsistidor": 0
        },
        "pretemporada": 15,
        "adicionales": 100
      },
      "balanceTemporada": 460,
      "presupuestoFinal": 157
    },
    "fctwente": {
      "excelName": "FC Twente",
      "teamId": "fctwente",
      "season": "TEMP 13",
      "presupuestoAnterior": 370,
      "gastosRenovaciones": 0,
      "ingresos": {
        "liga": {
          "posicion": 10,
          "premio": -80,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": -80,
      "presupuestoFinal": 290
    },
    "rangersfootballclub": {
      "excelName": "Rangers Football Club",
      "teamId": "rangersfootballclub",
      "season": "TEMP 13",
      "presupuestoAnterior": 500,
      "gastosRenovaciones": 289,
      "ingresos": {
        "liga": {
          "posicion": 11,
          "premio": -100,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": -100,
      "presupuestoFinal": 111
    },
    "realmadrid": {
      "excelName": "Real Madrid",
      "teamId": "realmadrid",
      "season": "TEMP 13",
      "presupuestoAnterior": 1016,
      "gastosRenovaciones": 309,
      "ingresos": {
        "liga": {
          "posicion": 12,
          "premio": -140,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": "4tos",
          "premio": 200,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 60,
      "presupuestoFinal": 767
    },
    "losclille": {
      "excelName": "LOSC Lille",
      "teamId": "losclille",
      "season": "TEMP 13",
      "presupuestoAnterior": 630,
      "gastosRenovaciones": 344,
      "ingresos": {
        "liga": {
          "posicion": 13,
          "premio": -190,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": -190,
      "presupuestoFinal": 96
    },
    "vascodagama": {
      "excelName": "Vasco Da Gama",
      "teamId": "vascodagama",
      "season": "TEMP 13",
      "presupuestoAnterior": 500,
      "gastosRenovaciones": 293,
      "ingresos": {
        "liga": {
          "posicion": null,
          "premio": 0,
          "goleadores": 0,
          "asistidores": 0
        },
        "champions": {
          "fase": null,
          "premio": 0,
          "goleadorAsistidor": 0
        },
        "pretemporada": 0,
        "adicionales": 0
      },
      "balanceTemporada": 0,
      "presupuestoFinal": 207
    }
  },
  "ruletaConfig": {
    "costOro": 150,
    "costPlata": 75,
    "bridgeWebhookUrl": "https://script.google.com/macros/s/AKfycbyt6qG1pRSveRt3U_lR2tqy0o_FRgEq6CAbjVsHKVbrdqW3WIHPhce4TwGW1nGBaQrJ/exec",
    "telegramBotToken": "8811462383:AAEYISyTGPH0KABupReFXbgKj1eadah4ijA",
    "telegramChatId": "1096032578",
    "itemsOro": [
      {
        "name": "Fichaje Bomba",
        "val": "+$300M",
        "delta": 150,
        "type": "premio",
        "tag": "Gran Premio",
        "color": "#10b981",
        "icon": "fa-gift",
        "desc": "Ingreso directo de $300M al presupuesto del club. ¡Ganas $150M netos!"
      },
      {
        "name": "Renovación 100%",
        "val": "100% Gratis",
        "delta": 0,
        "type": "mercado",
        "tag": "Beneficio",
        "color": "#0284c7",
        "icon": "fa-shield",
        "desc": "Descuento del 100% en la renovación total de tu plantilla para la siguiente temporada."
      },
      {
        "name": "Bono Rendimiento",
        "val": "+$180M",
        "delta": 30,
        "type": "premio",
        "tag": "Premio",
        "color": "#059669",
        "icon": "fa-coins",
        "desc": "Ingreso de $180M por méritos comerciales (Ganancia neta de +$30M)."
      },
      {
        "name": "Épico a Préstamo",
        "val": "1 Temporada",
        "delta": 0,
        "type": "mercado",
        "tag": "Mercado",
        "color": "#38bdf8",
        "icon": "fa-user-plus",
        "desc": "Si tienes carta de alguno de tus jugadores que sea épica, la puedes incluir a lo largo de toda la temporada."
      },
      {
        "name": "2 Libres Directos",
        "val": "2 Fichajes",
        "delta": 0,
        "type": "mercado",
        "tag": "Exclusivo",
        "color": "#6366f1",
        "icon": "fa-user-check",
        "desc": "Ganas 2 jugadores libres directamente sin necesidad de publicar en Facebook."
      },
      {
        "name": "Patrocinio Asiático",
        "val": "+$150M",
        "delta": 0,
        "type": "premio",
        "tag": "Reembolso",
        "color": "#34d399",
        "icon": "fa-handshake",
        "desc": "Recuperas íntegro el costo del tiro ($150M). ¡Giro gratis!"
      },
      {
        "name": "Auditoría Fair Play",
        "val": "-$120M",
        "delta": -270,
        "type": "castigo",
        "tag": "Castigo",
        "color": "#ef4444",
        "icon": "fa-scale-unbalanced",
        "desc": "Sanción económica de -$120M adicionales por exceso de masa salarial."
      },
      {
        "name": "Lesión de Estrella",
        "val": "-$80M",
        "delta": -230,
        "type": "castigo",
        "tag": "Castigo",
        "color": "#dc2626",
        "icon": "fa-user-injured",
        "desc": "Pagas -$80M en tratamientos médicos de urgencia para tu figura."
      },
      {
        "name": "Comisión de Agente",
        "val": "-$50M",
        "delta": -200,
        "type": "castigo",
        "tag": "Pérdida",
        "color": "#f87171",
        "icon": "fa-briefcase",
        "desc": "Pagas -$50M imprevistos por intermediación de representantes."
      },
      {
        "name": "Negociación Fallida",
        "val": "$0",
        "delta": -150,
        "type": "vacio",
        "tag": "Vacío",
        "color": "#64748b",
        "icon": "fa-cloud",
        "desc": "El DT se fue de vacaciones sin cerrar el acuerdo. Pierdes los $150M del tiro."
      },
      {
        "name": "Cláusula Rescisión",
        "val": "-$70M",
        "delta": -220,
        "type": "castigo",
        "tag": "Riesgo",
        "color": "#e11d48",
        "icon": "fa-receipt",
        "desc": "Un club rival activa una cláusula y debes pagar -$70M para retener a tu jugador."
      },
      {
        "name": "Veto Libres 12h",
        "val": "Bloqueo 12h",
        "delta": -150,
        "type": "mercado",
        "tag": "Sanción",
        "color": "#a855f7",
        "icon": "fa-lock",
        "desc": "Bloqueo para fichar en el mercado de jugadores libres por 12 horas desde su apertura."
      }
    ],
    "itemsPlata": [
      {
        "name": "Golpe en la Mesa",
        "val": "+$160M",
        "delta": 85,
        "type": "premio",
        "tag": "Gran Premio",
        "color": "#10b981",
        "icon": "fa-trophy",
        "desc": "Ingreso directo de +$160M al presupuesto del club. ¡Ganas $85M netos!"
      },
      {
        "name": "Beca Renovación",
        "val": "-30% Total",
        "delta": 0,
        "type": "mercado",
        "tag": "Descuento",
        "color": "#0284c7",
        "icon": "fa-tags",
        "desc": "30% de descuento en la renovación total de tu plantilla para la siguiente temporada."
      },
      {
        "name": "Bono Progreso",
        "val": "+$95M",
        "delta": 20,
        "type": "premio",
        "tag": "Premio",
        "color": "#059669",
        "icon": "fa-coins",
        "desc": "Premio al mérito deportivo en Plata de $95M (Ganancia neta de +$20M)."
      },
      {
        "name": "1 Libre Directo",
        "val": "1 Fichaje",
        "delta": 0,
        "type": "mercado",
        "tag": "Exclusivo",
        "color": "#6366f1",
        "icon": "fa-user-check",
        "desc": "Ganas 1 jugador libre directamente sin necesidad de publicar en Facebook."
      },
      {
        "name": "Taquilla Llena",
        "val": "+$75M",
        "delta": 0,
        "type": "premio",
        "tag": "Reembolso",
        "color": "#34d399",
        "icon": "fa-ticket",
        "desc": "Recuperas los $75M del tiro gracias a la taquilla del estadio. ¡Giro gratis!"
      },
      {
        "name": "Multa Federación",
        "val": "-$60M",
        "delta": -135,
        "type": "castigo",
        "tag": "Castigo",
        "color": "#ef4444",
        "icon": "fa-fire",
        "desc": "Sanción de -$60M por disturbios y bengalas en las gradas de tu estadio."
      },
      {
        "name": "Huelga de Plantilla",
        "val": "-$40M",
        "delta": -115,
        "type": "castigo",
        "tag": "Castigo",
        "color": "#dc2626",
        "icon": "fa-users-slash",
        "desc": "Debes desembolsar -$40M en concepto de primas atrasadas."
      },
      {
        "name": "Cheque Rebotado",
        "val": "$0",
        "delta": -75,
        "type": "vacio",
        "tag": "Vacío",
        "color": "#64748b",
        "icon": "fa-ban",
        "desc": "El banco no aprobó la transferencia. Pierdes los $75M del tiro."
      },
      {
        "name": "Reparación Estadio",
        "val": "-$50M",
        "delta": -125,
        "type": "castigo",
        "tag": "Castigo",
        "color": "#b91c1c",
        "icon": "fa-hammer",
        "desc": "Pagas -$50M en mantenimiento y arreglo urgente del césped del campo."
      },
      {
        "name": "Tiro Extra",
        "val": "1 Giro Gratis",
        "delta": 0,
        "type": "premio",
        "tag": "Suerte",
        "color": "#eab308",
        "icon": "fa-rotate",
        "desc": "¡La suerte te sonríe! Puedes volver a girar la ruleta gratis de inmediato."
      },
      {
        "name": "Veto Libres 12h",
        "val": "Bloqueo 12h",
        "delta": -75,
        "type": "mercado",
        "tag": "Sanción",
        "color": "#a855f7",
        "icon": "fa-lock",
        "desc": "Bloqueo para fichar en el mercado de jugadores libres por 12 horas desde su apertura."
      }
    ]
  },
  "ruletaTickets": [],
  "ruletaHistory": []
};

if (typeof window !== 'undefined') {
  window.lmiData = INITIAL_LMI_DATA;
}
