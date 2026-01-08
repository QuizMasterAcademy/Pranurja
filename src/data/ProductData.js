import IA1 from "../assets/Products/Cultural/IA1.webp"
import IA2 from "../assets/Products/Cultural/IA2.webp"
import IA3 from "../assets/Products/Cultural/IA3.webp"
import OS1 from "../assets/Products/Cultural/OS1.webp"
import OS2 from "../assets/Products/Cultural/OS2.webp"
import SE1 from "../assets/Products/Cultural/SE1.webp"
import SE2 from "../assets/Products/Cultural/SE2.png"
import SE3 from "../assets/Products/Cultural/SE3.png"


import HR1 from "../assets/Products/Spritual/HR1.png"
import HR2 from "../assets/Products/Spritual/HR2.png"
import HR3 from "../assets/Products/Spritual/HR3.png"
import NM1 from "../assets/Products/Spritual/NM1.png"
import NM2 from "../assets/Products/Spritual/NM2.png"
import IP0 from "../assets/Products/Emotion/IP0.png"
import IP1 from "../assets/Products/Emotion/IP1.png"

import IP2 from "../assets/Products/Emotion/IP2.png"
import MF1 from "../assets/Products/Emotion/MF1.png"

import MF2 from "../assets/Products/Emotion/MF2.png"
import MM1 from "../assets/Products/Travel/MM1.png"
import MM2 from "../assets/Products/Travel/MM2.png"
import MM3 from "../assets/Products/Travel/MM3.png"

import RM1 from "../assets/Products/Travel/RM1.png"
import RM2 from "../assets/Products/Travel/RM2.png"
import LV1 from "../assets/Products/Travel/LV1.png"
import LV2 from "../assets/Products/Travel/LV2.png"

import LV1_1 from "../assets/Products/Travel/LV1_1.png"

import CE1 from "../assets/Products/Food/CE1.png"
import CE2 from "../assets/Products/Food/CE2.png"

import HOR1 from "../assets/Products/Food/HOR1.png"

import HOR2 from "../assets/Products/Food/HOR2.png"

import HOR3 from "../assets/Products/Food/HOR3.png"

import SB1 from "../assets/Products/Food/SB1.png"
import SB2 from "../assets/Products/Food/SB2.png"

import SB3 from "../assets/Products/Food/SB3.png"
import AN1 from "../assets/Products/Food/AN1.png"
import AN2 from "../assets/Products/Food/AM2.png"

import Howtouse from "../assets/images/use.webp"



























const productData = [
    {
        productType: "Solid Perfume",
        categories: [
            {
                categoryName: "Cultural",
                products: [
                    {
                        id: 1,
                        name: "Imperial Amber",
                        price: 399,
                        discountPrice: 1,
                        description: "(Red Magic)A luxurious blend inspired by ancient royal fragrances with deep amber warmth.",
                        fragrance: "Sweet + smoky + sensual",
                        images: [
                            IA2, IA3, IA1, Howtouse
                        ]
                    },
                    {

                        id: 2,
                        name: "Scarlet Ember",
                        price: 399,
                        discountPrice: 249,

                        description: "(Kamasutra)A luxurious blend inspired by ancient royal fragrances with deep amber warmth.",
                        fragrance: "Soft vanilla + spicy romance",
                        images: [
                            SE1, SE2, SE3, Howtouse
                        ]

                    },
                    {

                        id: 3,
                        name: "Obsedian Saffron",
                        price: 399,
                        discountPrice: 249,
                        description: "(Black Magic)A luxurious blend inspired by ancient royal fragrances with deep amber warmth.",
                        fragrance: "Sweet + Smoky + Spicy + Woody + Sexy + Dark Luxury",
                        images: [
                            OS1, OS2, Howtouse
                        ]

                    }
                ]
            },
            {
                categoryName: "Spritual",
                products: [
                    {
                        id: 1,
                        name: "Himalayan Resin",
                        price: 399,
                        discountPrice: 249,
                        description: " (Sandalwood) A calming, meditative fragrance crafted for inner peace and relaxation.",
                        fragrance: "Sweet + Sandalwood",
                        images: [
                            HR1, HR2, HR3, Howtouse
                        ]
                    },
                    {
                        id: 2,
                        name: "Nirvana Mist",
                        price: 399,
                        discountPrice: 249,
                        description: "(Budha Delight )A calming, meditative fragrance crafted for inner peace and relaxation.",

                        fragrance: "Fresh + Calm + Spiritual + Healing + Luxury Clean",
                        images: [
                            NM1, NM2, Howtouse
                        ]
                    }
                ]
            },
            {
                categoryName: "Emotion",
                products: [


                    {
                        id: 1,
                        name: "Mind Filter",
                        price: 399,
                        discountPrice: 249,
                        description: "(White Musk ) A refreshing emotional balance scent for mental clarity and positivity.",
                        fragrance: "Clean + Powdery + Skin-Soft + Warm",
                        images: [
                            MF1, MF2, Howtouse
                        ]
                    },
                    {
                        id: 2,
                        name: "Inner Peace",
                        price: 399,
                        discountPrice: 249,
                        description: "(Silver Moon) A refreshing emotional balance scent for mental clarity and positivity.",

                        fragrance: "Soft + Romantic + Night Luxury",
                        images: [
                            IP0, IP1, IP2, Howtouse
                        ]
                    }

                ]
            },
            {
                categoryName: "Travel",
                products: [
                    {
                        id: 1,
                        name: "Mountain Mist",
                        price: 399,
                        discountPrice: 249,
                        description: "(Muscat) An energizing fragrance inspired by mountain air and open landscapes.",
                        fragrance: "Royal + Airy + Lightly Spicy + Modern Arabian Luxury",
                        images: [
                            MM1, MM2, MM3, Howtouse
                        ]
                    },
                    {
                        id: 2,
                        name: "Roadside Mint",
                        price: 399,
                        discountPrice: 249,
                        description: "(Ocean) An energizing fragrance inspired by mountain air and open landscapes.",
                        fragrance: "Cool +  Fresh + Sporty + Energetic + Modern",
                        images: [
                            RM1, RM2, Howtouse
                        ]
                    },
                    {
                        id: 3,
                        name: "Leh Vally",
                        price: 399,
                        discountPrice: 249,
                        description: " (Blue de) An energizing fragrance inspired by mountain air and open landscapes.",
                        fragrance: "Woody + Masculine + Premium",
                        images: [
                            LV1_1, LV1, LV2, Howtouse
                        ]
                    }
                ]
            },
            {
                categoryName: "Food Inspired",
                products: [
                    {
                        id: 1,
                        name: "Honey Reverie",
                        price: 399,
                        discountPrice: 249,
                        description: "(Golden Eve) A deliciously warm gourmand fragrance inspired by rich natural flavors.",
                        fragrance: "Warm + Sweet + Floral + Musky + Golden + Elegant",
                        images: [
                            HOR1, HOR2, HOR3, Howtouse
                        ]
                    },
                    {
                        id: 2,
                        name: "Cocoa Eclipse",
                        price: 399,
                        discountPrice: 249,
                        description: "(Black Star) A deliciously warm gourmand fragrance inspired by rich natural flavors.",

                        fragrance: "Fresh + fruity + spicy sparkle",
                        images: [
                            CE1, CE2, Howtouse
                        ]
                    },
                    {
                        id: 3,
                        name: "Saffron Bloom",
                        price: 399,
                        discountPrice: 249,
                        description: " (Glood Wood) A deliciously warm gourmand fragrance inspired by rich natural flavors.",

                        fragrance: "Golden + Soft sweet + Royal + Comforting",
                        images: [
                            SB1, SB2, SB3, Howtouse
                        ]
                    },
                    {
                        id: 4,
                        name: "Amber Nector",
                        price: 399,
                        discountPrice: 249,
                        description: " (Palo Santo )A deliciously warm gourmand fragrance inspired by rich natural flavors.",

                        fragrance: "Creamy wood + peaceful smoke",
                        images: [
                            AN1, AN2, Howtouse
                        ]
                    }
                ]




            }
        ]
    },

    // {
    //     productType: "Roll On",
    //     categories: [
    //         {
    //             categoryName: "Travel",
    //             products: [
    //                 {
    //                     id: 3,
    //                     name: "Ocean Drive",
    //                     price: 399,
    //                     discountPrice: 349,
    //                     fragrance: "Cool Marine",
    //                     images: [
    //                         "/images/rollon/travel1-1.jpg",
    //                         "/images/rollon/travel1-2.jpg",
    //                         "/images/rollon/travel1-3.jpg"
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             categoryName: "Emotion",
    //             products: [
    //                 {
    //                     id: 4,
    //                     name: "Calm Soul",
    //                     price: 429,
    //                     discountPrice: 379,
    //                     fragrance: "Lavender & Musk",
    //                     images: [
    //                         "/images/rollon/emotion1-1.jpg",
    //                         "/images/rollon/emotion1-2.jpg",
    //                         "/images/rollon/emotion1-3.jpg"
    //                     ]
    //                 }
    //             ]
    //         },
    //         { categoryName: "Food", products: [] },
    //         { categoryName: "Cultural", products: [] },
    //         { categoryName: "Spiritual", products: [] }
    //     ]
    // },

    // {
    //     productType: "Perfume",
    //     categories: [
    //         { categoryName: "Travel", products: [] },
    //         { categoryName: "Food", products: [] },
    //         { categoryName: "Emotion", products: [] },
    //         {
    //             categoryName: "Cultural",
    //             products: [
    //                 {
    //                     id: 5,
    //                     name: "Royal Oud",
    //                     price: 1299,
    //                     discountPrice: 1099,
    //                     fragrance: "Oud & Spice",
    //                     images: [
    //                         "/images/perfume/cultural1-1.jpg",
    //                         "/images/perfume/cultural1-2.jpg",
    //                         "/images/perfume/cultural1-3.jpg"
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             categoryName: "Spiritual",
    //             products: [
    //                 {
    //                     id: 6,
    //                     name: "Temple Mist",
    //                     price: 999,
    //                     discountPrice: 849,
    //                     fragrance: "Sandalwood & Dhoop",
    //                     images: [
    //                         "/images/perfume/spiritual1-1.jpg",
    //                         "/images/perfume/spiritual1-2.jpg",
    //                         "/images/perfume/spiritual1-3.jpg"
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // }
];
export default productData;  