import pizza1sm from '../assets/img/pizzaes/1sm.png'
import pizza1md from '../assets/img/pizzaes/1md.png'
import pizza1lg from '../assets/img/pizzaes/1lg.png'
import pizza12md from '../assets/img/pizzaes/12md.png'
import pizza12lg from '../assets/img/pizzaes/12lg.png'
import pizza2md from '../assets/img/pizzaes/2md.png'
import pizza2sm from '../assets/img/pizzaes/2sm.png'
import pizza2lg from '../assets/img/pizzaes/2lg.png'
import pizza21lg from '../assets/img/pizzaes/21lg.png'
import pizza21md from '../assets/img/pizzaes/21md.png'
import pizza3 from '../assets/img/pizzaes/3.png'
import ingrediente1 from '../assets/img/ingredientes/1.png'
import ingrediente2 from '../assets/img/ingredientes/2.png'
import ingrediente3 from '../assets/img/ingredientes/3.png'
import ingrediente4 from '../assets/img/ingredientes/4.png'
import ingrediente5 from '../assets/img/ingredientes/5.png'
import ingrediente6 from '../assets/img/ingredientes/6.png'
import ingrediente7 from '../assets/img/ingredientes/7.png'
import ingrediente8 from '../assets/img/ingredientes/8.png'
import ingrediente9 from '../assets/img/ingredientes/9.png'
import ingrediente10 from '../assets/img/ingredientes/10.png'

export const pizzaes = [
    {
        id: 1,
        name: 'Цыплёнок ранч',
        description: 'Сочный цыплёнок с соусом чили, луком и красным луковым чиликом',
        filling_dough: 'Цыпленок, ветчина из цыпленка, томаты, чеснок',
        mandatory_filling_dough: 'соус ранч, сыр моцарелла',
        weights: {
            traditional: {
                sm: 440,
                md: 660,
                lg: 910
            },
            thin: {
                md: 550,
                lg: 790
            },
        },
        pizzaSizes: ["Маленькая", "Средная", "Большая"],
        pizzaTypes: [
            { label: "Традиционное", value: "традиционное" },
            {
                label: "Тонкое",
                value: "тонкое",
            },
        ],
        imgs: {
            traditional: {
                sm: pizza1sm,
                md: pizza1md,
                lg: pizza1lg,
            },
            thin: {
                md: pizza12md,
                lg: pizza12lg,
            }
        },
        prices: {
            sm: 57,
            md: 83,
            lg: 100
        },
        diameters: {
            sm: 25, md: 30, lg: 35,
            // thin: { md: 30, lg: 33 },
        },
        ingredientes: [
            {
                id: 1,
                name: 'Острый халапеньо',
                img: ingrediente1,
                pizza_id: 1,
                prices: {
                    sm: 5,
                    md: 8,
                    lg: 10
                },
            },
            {
                id: 2,
                name: 'Ветчина из цыпленка',
                img: ingrediente2,
                pizza_id: 2,
                prices: {
                    sm: 7,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 3,
                name: 'Смесь сыров Чеддер и Пармезан',
                img: ingrediente3,
                prices: {
                    sm: 7,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 4,
                name: 'Красный лук',
                img: ingrediente4,
                prices: {
                    sm: 5,
                    md: 7,
                    lg: 9
                },
            },
            {
                id: 5,
                name: 'Цыплёнок',
                img: ingrediente5,
                prices: {
                    sm: 8,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 6,
                name: 'Пикантная пепперони',
                img: ingrediente6,
                prices: {
                    sm: 7,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 7,
                name: 'Сыр моцарелла',
                img: ingrediente7,
                prices: {
                    sm: 8,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 8,
                name: 'Томаты',
                img: ingrediente8,
                prices: {
                    sm: 5,
                    md: 7,
                    lg: 10
                },
            },
            {
                id: 9,
                name: 'Италианские травы',
                img: ingrediente9,
                prices: {
                    sm: 5,
                    md: 7,
                    lg: 10
                },
            },
            {
                id: 10,
                name: 'Шампиньоны',
                img: ingrediente10,
                prices: {
                    sm: 8,
                    md: 10,
                    lg: 13
                },
            },

        ]
    },

    {
        id: 2,
        name: 'Колбаски барбекю',
        description: 'Острая чоризо, соусб барбекю, томаты, красный лук, моцарелла, фирменный томатный соус',
        filling_dough: '',
        pizzaSizes: ["Маленькая", "Средная", "Большая"],
        pizzaTypes: [
            { label: "Традиционное", value: "традиционное" },
            {
                label: "Тонкое",
                value: "тонкое",
            },
        ],
        mandatory_filling_dough: 'Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус',
        weights: {
            traditional: {
                sm: 0,
                md: 0,
                lg: 0
            },
            thin: {
                md: 0,
                lg: 0
            },
        },
        imgs: {
            traditional: {
                sm: pizza2sm,
                md: pizza2md,
                lg: pizza2lg,
            },
            thin: {
                md: pizza21md,
                lg: pizza21lg,
            }
        },
        prices: {
            sm: 57,
            md: 83,
            lg: 100
        },
        diameters: {
            sm: 25,
            md: 30,
            lg: 35
        },
        ingredientes: [
            {
                id: 1,
                name: 'Цыплёнок',
                img: ingrediente5,
                prices: {
                    sm: 5,
                    md: 8,
                    lg: 10
                },
            },
            {
                id: 2,
                name: 'Пикантная пепперони',
                img: ingrediente6,
                prices: {
                    sm: 7,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 3,
                name: 'Сыр моцарелла',
                img: ingrediente7,
                prices: {
                    sm: 7,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 4,
                name: 'Томаты',
                img: ingrediente8,
                prices: {
                    sm: 5,
                    md: 7,
                    lg: 9
                },
            },
            {
                id: 5,
                name: 'Италианские травы',
                img: ingrediente9,
                prices: {
                    sm: 8,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 6,
                name: 'Острый халапеньо',
                img: ingrediente1,
                prices: {
                    sm: 5,
                    md: 8,
                    lg: 10
                },
            },
            {
                id: 7,
                name: 'Сыр моцарелла',
                img: ingrediente7,
                prices: {
                    sm: 8,
                    md: 10,
                    lg: 13
                },
            },
            {
                id: 8,
                name: 'Томаты',
                img: ingrediente8,
                prices: {
                    sm: 5,
                    md: 7,
                    lg: 10
                },
            },
            {
                id: 9,
                name: 'Италианские травы',
                img: ingrediente9,
                prices: {
                    sm: 5,
                    md: 7,
                    lg: 10
                },
            },
            {
                id: 10,
                name: 'Шампиньоны',
                img: ingrediente10,
                prices: {
                    sm: 8,
                    md: 10,
                    lg: 13
                },
            },

        ]
    },

    {
        id: 3,
        name: 'Пицца Мишка',
        description: 'Цыплёнок, картофель из печи, моцарелла, томатный соус,',
        filling_dough: 'Сыр моцарелла, томатный соус,',
        pizzaSizes: ["Маленькая"],
        pizzaTypes: [
            { label: "Традиционное", value: "традиционное" },
        ],
        mandatory_filling_dough: 'цыпленок, томаты , картофель из печи ',
        weights: {
            traditional: {
                sm: 450,
            }
        },
        imgs: {
            traditional: {
                md: pizza3,
            }
        },
        prices: {
            sm: 57,
        },
        diameters: {
            sm: 25,
        },
        ingredientes: [
            {
                id: 1,
                name: 'Острый халапеньо',
                img: ingrediente1,
                prices: {
                    sm: 5,
                },
            },
            {
                id: 2,
                name: 'Ветчина из цыпленка',
                img: ingrediente2,
                prices: {
                    sm: 7,
                },
            },
            {
                id: 3,
                name: 'Смесь сыров Чеддер и Пармезан',
                img: ingrediente3,
                prices: {
                    sm: 7,
                },
            },
            {
                id: 4,
                name: 'Красный лук',
                img: ingrediente4,
                prices: {
                    sm: 5,
                },
            },
            {
                id: 5,
                name: 'Цыплёнок',
                img: ingrediente5,
                prices: {
                    sm: 8,
                },
            },
            {
                id: 6,
                name: 'Пикантная пепперони',
                img: ingrediente6,
                prices: {
                    sm: 7,
                },
            },
            {
                id: 7,
                name: 'Сыр моцарелла',
                img: ingrediente7,
                prices: {
                    sm: 8,
                },
            },
            {
                id: 8,
                name: 'Томаты',
                img: ingrediente8,
                prices: {
                    sm: 5,
                },
            },
            {
                id: 9,
                name: 'Италианские травы',
                img: ingrediente9,
                prices: {
                    sm: 5,
                },
            },
            {
                id: 10,
                name: 'Шампиньоны',
                img: ingrediente10,
                prices: {
                    sm: 8,
                },
            },

        ]
    },

]