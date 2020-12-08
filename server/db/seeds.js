use fruits;
db.dropDatabase();

db.fruits.insertMany([
    {
        "genus": "Malus",
        "name": "Apple",
        "emoji": "🍎",
        "family": "Rosaceae",
        "order": "Rosales",
        "origin": {
            "country": "Kazakhstan",
            "latitude": 48.0196,
            "longitude": 66.9237
        },
        "nutritions": {
            "carbohydrates": 11.4,
            "protein": 0.3,
            "fat": 0.4,
            "calories": 52,
            "sugar": 10.3
        }
    }, {
        "genus": "Prunus",
        "name": "Apricot",
        "emoji": "🍑",
        "family": "Rosaceae",
        "order": "Rosales",
        "origin": {
            "country": "China",
            "latitude": 35.8617,
            "longitude": 104.1954
        },
        "nutritions": {
            "carbohydrates": 3.9,
            "protein": 0.5,
            "fat": 0.1,
            "calories": 15,
            "sugar": 3.2
        }
    }, {
        "genus": "Musa",
        "name": "Banana",
        "emoji": "🍌",
        "family": "Musaceae",
        "order": "Zingiberales",
        "origin": {
            "country": "Indonesia",
            "latitude": 0.7893,
            "longitude": 113.9213 
        },
        "nutritions": {
            "carbohydrates": 22,
            "protein": 1,
            "fat": 0.2,
            "calories": 96,
            "sugar": 17.2
        }
    }, {
        "genus": "Actinidia",
        "name": "Kiwi",
        "emoji": "🥝",
        "family": "Actinidiaceae",
        "order": "Ericales",
        "origin": {
            "country": "China",
            "latitude": 35.8617,
            "longitude": 104.1954
        },
        "nutritions": {
            "carbohydrates": 15,
            "protein": 1.1,
            "fat": 0.5,
            "calories": 61,
            "sugar": 9
        }
    }, {
        "genus": "Prunus",
        "name": "Cherry",
        "emoji": "🍒",
        "family": "Rosaceae",
        "order": "None",
        "origin": {
            "country": "Turkey",
            "latitude": 38.9637,
            "longitude": 35.2433
        },
        "nutritions": {
            "carbohydrates": 12,
            "protein": 1,
            "fat": 0.3,
            "calories": 50,
            "sugar": 8
        }
    }, {
        "genus": "Citrus",
        "name": "Lemon",
        "emoji": "🍋",
        "family": "Rutaceae",
        "order": "Sapindales",
        "origin": {
            "country": "India",
            "latitude": 20.5937,
            "longitude": 78.9629
        },
        "nutritions": {
            "carbohydrates": 9,
            "protein": 1.1,
            "fat": 0.3,
            "calories": 29,
            "sugar": 2.5
        }
    }, {
        "genus": "Mangifera",
        "name": "Mango",
        "emoji": "🥭",
        "family": "Anacardiaceae",
        "order": "Sapindales",
        "origin": {
            "country": "India",
            "latitude": 20.5937,
            "longitude": 78.9629
        },
        "nutritions": {
            "carbohydrates": 15,
            "protein": 0.82,
            "fat": 0.38,
            "calories": 60,
            "sugar": 13.7
        }
    }, {
        "genus": "Citrus",
        "name": "Orange",
        "emoji": "🍊",
        "family": "Rutaceae",
        "order": "Sapindales",
        "origin": {
            "country": "China",
            "latitude": 35.8617,
            "longitude": 104.1954
        },
        "nutritions": {
            "carbohydrates": 8.3,
            "protein": 1,
            "fat": 0.2,
            "calories": 43,
            "sugar": 8.2
        }
    }, {
        "genus": "Pyrus",
        "name": "Pear",
        "emoji": "🍐",
        "family": "Rosaceae",
        "order": "Rosales",
        "origin": {
            "country": "China",
            "latitude": 35.8617,
            "longitude": 104.1954
        },
        "nutritions": {
            "carbohydrates": 15,
            "protein": 0.4,
            "fat": 0.1,
            "calories": 57,
            "sugar": 10
        }
    }, {
        "genus": "Ananas",
        "name": "Pineapple",
        "emoji": "🍍",
        "family": "Bromeliaceae",
        "order": "Poales",
        "origin": {
            "country": "Brazil",
            "latitude": 14.2350,
            "longitude": 51.9253
        },
        "nutritions": {
            "carbohydrates": 13.12,
            "protein": 0.54,
            "fat": 0.12,
            "calories": 50,
            "sugar": 9.85
        }
    }, {
        "genus": "Vitis",
        "name": "Grapes",
        "emoji": "🍇",
        "family": "Vitaceae",
        "order": "Vitales",
        "origin": {
            "country": "Greece",
            "latitude": 39.0742,
            "longitude": 21.8243
        },
        "nutritions": {
            "carbohydrates": 18.1,
            "protein": 0.7,
            "fat": 0.1,
            "calories": 69,
            "sugar": 15.5
        }
    }, {
        "genus": "Fragaria",
        "name": "Strawberry",
        "emoji": "🍓",
        "family": "Rosaceae",
        "order": "Rosales",
        "origin": {
            "country": "North America",
            "latitude": 54.5260,
            "longitude": 105.2551
        },
        "nutritions": {
            "carbohydrates": 5.5,
            "protein": 0.8,
            "fat": 0.4,
            "calories": 29,
            "sugar": 5.4
        }
    }, {
        "genus": "Solanum",
        "name": "Tomato",
        "emoji": "🍅",
        "family": "Solanaceae",
        "order": "Solanales",
        "origin": {
            "country": "The Andes Mountains",
            "latitude": 21.1608,
            "longitude": 66.7752
        },
        "nutritions": {
            "carbohydrates": 3.9,
            "protein": 0.9,
            "fat": 0.2,
            "calories": 74,
            "sugar": 2.6
        }
    }, {
        "genus": "Citrullus",
        "name": "Watermelon",
        "emoji": "🍉",
        "family": "Cucurbitaceae",
        "order": "Cucurbitales",
        "origin": {
            "country": "South Africa",
            "latitude": 30.5595,
            "longitude": 22.9375
        },
        "nutritions": {
            "carbohydrates": 8,
            "protein": 0.6,
            "fat": 0.2,
            "calories": 30,
            "sugar": 6
        }
    }
])