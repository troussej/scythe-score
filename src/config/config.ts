import { Faction } from '../models/faction.model';
export const config: any = {

    slides: {
        players: {
            type: 'players',
            title: 'scoring.players',
            icon: 'contacts',

        },
        money: {
            type: 'money',
            title: 'scoring.money',

            icon: 'logo-usd',

        },
        popularity: {
            type: 'popularity',
            title: 'scoring.popularity',

            icon: 'heart',

            min: 0,
            max: 18
        },
        stars: {
            type: 'stars',
            title: 'scoring.stars',

            icon: 'star',

            min: 0,
            max: 6
        },
        territories: {

            title: 'scoring.territories',
            type: 'territories',
            icon: 'flag',


        },
        resources: {

            title: 'scoring.resources',
            type: 'resources',
            icon: 'cube'


        },
        buildings: {

            title: 'scoring.buildings',
            type: 'buildings',
            icon: 'home'


        },
        total: {

            title: 'scoring.total',
            type: 'total',
            icon: 'trophy'

        }
    },
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
        albion: new Faction({
            logo: 'scsc-logo-small-albion.png',
            name: 'Albion',
            color: '#437261',
            colorName: 'albion'
        }),
        crimea: new Faction({
            logo: 'scsc-logo-small-crimea.png',
            name: 'crimea',
            color: '#edae55',
            colorName: 'crimea'
        }),
        nordic: new Faction({
            logo: 'scsc-logo-small-nordic.png',
            name: 'nordic',
            color: '#02b3fd',
            colorName: 'nordic'
        }),
        polania: new Faction({
            logo: 'scsc-logo-small-polania.png',
            name: 'polania',
            color: '#fcffff',
            colorName: 'polania'
        }),
        rusviet: new Faction({
            logo: 'scsc-logo-small-rusviet.png',
            name: 'rusviet',
            color: '#f94d74',
            colorName: 'rusviet'
        }),
        saxony: new Faction({
            logo: 'scsc-logo-small-saxony.png',
            name: 'saxony',
            color: '#403d49',
            colorName: 'saxony'
        }),
        togawa: new Faction({
            logo: 'scsc-logo-small-togawa.png',
            name: 'togawa',
            color: '#925ec7',
            colorName: 'togawa'
        })
    },
    buildingCards: [
        {

            description: 'Tunnels adjacent to structures',
            rate: {
                0: 0,
                1: 2,
                2: 4,
                3: 4,
                4: 6,
                5: 6,
                6: 9
            }
        },
        {

            description: 'Lakes adjacent to structures',
            rate: {
                0: 0,
                1: 2,
                2: 4,
                3: 4,
                4: 6,
                5: 6,
                6: 9,
                7: 9
            }
        },
        {

            description: 'Encounters adjacent to structures',
            rate: {
                0: 0,
                1: 2,
                2: 4,
                3: 4,
                4: 6,
                5: 6,
                6: 9,
                7: 9
            }
        },
        {

            description: 'Tunnels with structures on them',
            rate: {
                0: 0,
                1: 2,
                2: 4,
                3: 6,
                4: 6

            }
        },
        {

            description: 'Structures in a row',
            rate: {
                0: 0,
                1: 2,
                2: 4,
                3: 6,
                4: 9

            }
        },
        {

            description: 'Farms/Tundras with structures on them',
            rate: {
                0: 0,
                1: 2,
                2: 4,
                3: 6,
                4: 9

            }
        },
    ]
}