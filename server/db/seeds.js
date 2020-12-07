use fruits;
db.dropDatabase();

db.fruits.insertMany([
    {
        "genus": "Malus",
        "name": "Apple",

        "family": "Rosaceae",
        "order": "Rosales",
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

        "family": "Rosaceae",
        "order": "Rosales",
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

        "family": "Musaceae",
        "order": "Zingiberales",
        "nutritions": {
            "carbohydrates": 22,
            "protein": 1,
            "fat": 0.2,
            "calories": 96,
            "sugar": 17.2
        }
    }, {
        "genus": "Fragaria",
        "name": "Blueberry",

        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 5.5,
            "protein": 0,
            "fat": 0.4,
            "calories": 29,
            "sugar": 5.4
        }
    }, {
        "genus": "Prunus",
        "name": "Cherry",

        "family": "Rosaceae",
        "order": "None",
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

        "family": "Rutaceae",
        "order": "Sapindales",
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

        "family": "Anacardiaceae",
        "order": "Sapindales",
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

        "family": "Rutaceae",
        "order": "Sapindales",
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

        "family": "Rosaceae",
        "order": "Rosales",
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

        "family": "Bromeliaceae",
        "order": "Poales",
        "nutritions": {
            "carbohydrates": 13.12,
            "protein": 0.54,
            "fat": 0.12,
            "calories": 50,
            "sugar": 9.85
        }
    }, {
        "genus": "Rubus",
        "name": "Raspberry",

        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 12,
            "protein": 1.2,
            "fat": 0.7,
            "calories": 53,
            "sugar": 4.4
        }
    }, {
        "genus": "Fragaria",
        "name": "Strawberry",

        "family": "Rosaceae",
        "order": "Rosales",
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

        "family": "Solanaceae",
        "order": "Solanales",
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

        "family": "Cucurbitaceae",
        "order": "Cucurbitales",
        "nutritions": {
            "carbohydrates": 8,
            "protein": 0.6,
            "fat": 0.2,
            "calories": 30,
            "sugar": 6
        }
    }
])