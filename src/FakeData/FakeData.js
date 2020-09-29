const hotelDetails = [
    {
        "id": "1",
        "name": "Cox's Bazar",
        "description": "Cox's Bazar is a town, a fishing port and district headquarters in Bangladesh.",
        "img": "http://1.bp.blogspot.com/-eZf2toR7tPs/UUm2BBpajoI/AAAAAAAACDo/PT0JtBXnDHc/s1600/Cox%27_Bazar_Sea_Beach2.JPG",
        "roomDetails": [{

            "hotelRoomId": "1",
            "hotelRoomTitle": "Apartment in Lost Panorama",
            "hotelRoomImage": "https://www.gannett-cdn.com/presto/2020/05/18/USAT/9ae54ef7-217d-4877-a614-4760325f9a9b-Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom.jpg?width=2560",
            "hotelRoomType": "2 guest | 1 bed | 1 bath",
            "hotelKitchen": "Wif Air Conditioning Kitchen",
            "cancellation": "Cancellation fexibility avaiable",
            "roomRent": "$50",
            "roomRatings": "4.5"
            },

            {
                "hotelRoomId": "2",
                "hotelRoomTitle": "AR Lounge & Pool ( r&r + b&b)",
                "hotelRoomImage": "https://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
                "hotelRoomType": "4 guest | 2 bed | 2 bath",
                "hotelKitchen": "Wif Air Conditioning Kitchen",
                "cancellation": "Cancellation fexibility avaiable",
                "roomRent": "$40",
                "roomRatings": "5"
            },

                {
                    "hotelRoomId": "3",
                    "hotelRoomTitle": "Small Family pAR Lounge & Pool ( r&r + b&b)",
                    "hotelRoomImage": "https://pix10.agoda.net/hotelImages/642/6429894/6429894_19010916340071180658.jpg?s=1024x768",
                    "hotelRoomType": "3 guest | 2 bed | 1 bath",
                    "hotelKitchen": "Wif Air Conditioning Kitchen",
                    "cancellation": "Cancellation fexibility avaiable",
                    "roomRent": "$30",
                    "roomRatings": "4"
                    }

        ]


    },
    
    {
        "id": "2",
        "name": "Sreemangal",
        "description": "Sreemangal has been nicknamed the tea capital of Bangladesh, due to the number of tea gardens in the area.",
        "img": "https://c1.staticflickr.com/3/2867/9879684044_a7cee87fcb_b.jpg",
        "roomDetails": [{

            "hotelRoomId": "1",
            "hotelRoomTitle": "King Deluxe room",
            "hotelRoomImage": "https://cf.bstatic.com/images/hotel/max1024x768/131/131703031.jpg",
            "hotelRoomType": "2 guest | 1 bed | 1 bath",
            "hotelKitchen": "Wif Air Conditioning Kitchen",
            "cancellation": "Cancellation fexibility avaiable",
            "roomRent": "$50",
            "roomRatings": "4.5"
            },

            {
                "hotelRoomId": "2",
                "hotelRoomTitle": "Show pricesQuadruple Room with Balcony",
                "hotelRoomImage": "data:image/jpeg;base64,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",
                "hotelRoomType": "4 guest | 2 bed | 1 bath",
                "hotelKitchen": "Wif Air Conditioning Kitchen",
                "cancellation": "Cancellation fexibility avaiable",
                "roomRent": "$50",
                "roomRatings": "5"
            },

                {
                    "hotelRoomId": "3",
                    "hotelRoomTitle": " Family Room with Mountain View",
                    "hotelRoomImage": "https://cf.bstatic.com/images/hotel/max1024x768/124/124033028.jpg",
                    "hotelRoomType": "2 guest | 1 bed | 1 bath",
                    "hotelKitchen": "Wif Air Conditioning Kitchen",
                    "cancellation": "Cancellation fexibility avaiable",
                    "roomRent": "$50",
                    "roomRatings": "4"
                    }

        ]

    },
    
    {
        "id": "3",
        "name": "Sundarbans",
        "description": "The Sundarbans is a cluster of low-lying islands in the Bay of Bengal, spread across India and Bangladesh.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/1200px-Sundarban_Tiger.jpg",
        "roomDetails": [{

            "hotelRoomId": "1",
            "hotelRoomTitle": "Apartment in Lost Panorama",
            "hotelRoomImage": "https://media.nomadicmatt.com/hotelreview1a.jpg",
            "hotelRoomType": "2 guest | 1 bed | 1 bath",
            "hotelKitchen": "Wif Air Conditioning Kitchen",
            "cancellation": "Cancellation fexibility avaiable",
            "roomRent": "$50",
            "roomRatings": "4.5"
            },

            {
                "hotelRoomId": "2",
                "hotelRoomTitle": "Standard Family Room",
                "hotelRoomImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7IwgR5mTOVaoFldmgoCWTYneKqxaMp51aVw&usqp=CAU",
                "hotelRoomType": "3 guest | 2 bed | 1 bath",
                "hotelKitchen": "Wif Air Conditioning Kitchen",
                "cancellation": "Cancellation fexibility avaiable",
                "roomRent": "$50",
                "roomRatings": "5"
            },

                {
                    "hotelRoomId": "3",
                    "hotelRoomTitle": "Apartment in Lost Panorama",
                    "hotelRoomImage": "https://media-cdn.tripadvisor.com/media/photo-s/02/2e/4b/56/inside-hotel-room-with.jpg",
                    "hotelRoomType": "6 guest | 3 bed | 3 bath",
                    "hotelKitchen": "Wif Air Conditioning Kitchen",
                    "cancellation": "Cancellation fexibility avaiable",
                    "roomRent": "$50",
                    "roomRatings": "4"
                    }

        ]

    }
    // ,{
    //     "id": "4",
    //     "name": "Sajek",
    //     "description": "Sajek is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Rangamati District",
    //     "img": "../Image/Sajek.png",
    //     "hotelImage": "",
    //     "hotelRoomType": "2 guest | 1 bed | 1 bath",
    //     "hotelKitchen": "Wif Air Conditioning Kitchen",
    //      "cancellation": "Cancellation fexibility avaiable",
    //     "roomRent": "$50",
    //     "roomRatings": "4.5"

    // }
]

export default hotelDetails;