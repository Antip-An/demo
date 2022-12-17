import game1 from "../assets/game1.jpg";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";
import game4 from "../assets/game4.jpg";

export default {
    goods: [
        { 
            id: 1,
            name: "Ведьмак 3: Дикая Охота",
            img: game1,
            price: 1000,
            hasInStock: true,
            added: "01.11.2022",
            category:"Фантастика",
            maker: "CD Projekt",
            country: "Польша",
            model: "Расширенна версия",
            year: 2015
        },
        { 
            id: 2,
            name: "Gothic 2",
            img: game2,
            price: 1500,
            hasInStock: true,
            added: "02.11.2022",
            category:"Средневековье",
            maker: "Piranaha Bytes",
            country: "Германия",
            model: "Базовая версия",
            year: 2002
        },
        { 
            id: 3,
            name: "Prototype 2",
            img: game3,
            price: 2000,
            hasInStock: true,
            added: "03.11.2022",
            category:"Ужасы",
            maker: "Activision",
            country: "США",
            model: "Базовая версия",
            year: 2010
        },

        {
            id:4,
            name: "Prototype 1",
            img: game4,
            price: 1000,
            hasInStock: true,
            added: "10.06.2010",
            category:"Ужасы",
            maker: "Activision",
            country: "США",
            model: "Базовая версия",
            year: 2009
        }
    ]
};