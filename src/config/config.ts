export const config: any = {

    slides: [
        // {
        //     id: 'players',
        //     title: 'scoring.players',
        //     type: 'players',
        //     icon: 'contacts',
        //     inputType: 'none'
        // },
        {
            id: 'money',
            title: 'scoring.money',
            type: 'money',
            icon: 'logo-usd',
            inputType: 'number'
        },
        {
            id: 'popularity',
            title: 'scoring.popularity',
            type: 'popularity',
            icon: 'heart',
            inputType: 'number'
        },
        {
            id: 'stars',
            title: 'scoring.stars',
            type: 'stars',
            icon: 'star',
            inputType: 'number'
        },
        {
            id: 'territories',
            title: 'scoring.territories',
            type: 'territories',
            icon: 'flag',
            inputType: 'number'

        },
        {
            id: 'resources',
            title: 'scoring.resources',
            type: 'resources',
            icon: 'cube',
            inputType: 'number'

        },
        {
            id: 'buildings',
            title: 'scoring.buildings',
            type: 'buildings',
            icon: 'home',
            inputType: 'number'

        },
        {
            id: 'total',
            title: 'scoring.total',
            type: 'total',
            icon: 'trophy',
            inputType: 'static',
            min: 0,
            max: 6
        }
    ],
    rules: {
        points: {
            stars: {
                0: 3,
                1: 3,
                2: 3,
                3: 3,
                4: 3,
                5: 3,
                6: 3,
                7: 4,
                8: 4,
                9: 4,
                10: 4,
                11: 4,
                12: 4,
                13: 5,
                14: 5,
                15: 5,
                16: 5,
                17: 5,
                18: 5,


            },
            territories: {
                0: 2,
                1: 2,
                2: 2,
                3: 2,
                4: 2,
                5: 2,
                6: 2,
                7: 3,
                8: 3,
                9: 3,
                10: 3,
                11: 3,
                12: 3,
                13: 4,
                14: 4,
                15: 4,
                16: 4,
                17: 4,
                18: 4,
            },
            resources: {
                0: 1,
                1: 1,
                2: 1,
                3: 1,
                4: 1,
                5: 1,
                6: 1,
                7: 2,
                8: 2,
                9: 2,
                10: 2,
                11: 2,
                12: 2,
                13: 3,
                14: 3,
                15: 3,
                16: 3,
                17: 3,
                18: 3,
            }
        }
    },
    factions: {
        red: {},
        green: {}
    }
}