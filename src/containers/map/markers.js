import { pink, teal } from '../../components/colors'
export const markersData = [{
    type: 'form',
    longitude: -73.97181704026718,
    latitude: 40.760357318442715,
    name: "This marker is static",
    color: 'green',
},
{
    type: 'drag',
    longitude: - 73.97181704026718,
    latitude: 40.80,
    name: "you can drag this marker",
    color: teal,
},
{
    type: 'media',
    longitude: -73.97752525741629,
    latitude: 40.7523,
    name: "cards - can be moved",
    color: pink,
    images: [
        "https://cornerbycorner.files.wordpress.com/2012/09/grand-central.jpg",
        "https://ichef.bbci.co.uk/news/660/media/images/65736000/jpg/_65736479_grand-central-cropped-624x4.jpg",
        "https://media.timeout.com/images/100476721/630/472/image.jpg",
        "https://www.nycgo.com/images/venues/1071/grandcentral_midtown_manhattan_nyc_brittanypetronella0057__x_large.jpg",
        "http://trn.trains.com/~/media/images/railroad-news/news-wire/2016-and-prior/2015/10/grandcentral.jpg"
    ],
    videos: ["https://player.vimeo.com/video/123730837#t=29s",
        "https://player.vimeo.com/video/123730837#t=29s",
        "https://player.vimeo.com/video/123730837#t=49s",
        "https://player.vimeo.com/video/123730837#t=19s"]
},
{
    type: 'media',
    longitude: 6.4636,
    latitude: 59.6528,
    name: "Allmannajuvet Museum",
    color: pink,
    images: [
        "https://nordnorge.com/sites/n/nordnorge.com/files/570f0fc155e7b311737aa885d54880c8.jpg",
        "https://www.iconeye.com/images/2017/06/Zumthor_norway_Mine_1.jpg",
        "https://static.dezeen.com/uploads/2016/12/allmannajuvet-tourist-route-peter-zumthor-norway-arne-espeland-dezeen-sq.jpg",
        "https://images.adsttc.com/media/images/57ed/0c31/e58e/ce02/a000/011f/large_jpg/010620_Photo_Per_Berntsen.jpg?1475152917",
        'https://static.dezeen.com/uploads/2016/06/allmannajuvet-tourist-route-peter-zumthor-norway-per-berntsen-dezeen-936.jpg',
    ],
    videos: ["https://player.vimeo.com/video/239261005#t=29s"]
},
{
    type: 'media',
    longitude: 113.5767,
    latitude: 22.271,
    name: "Zhuhai Cultural Center",
    color: pink,
    images: [
        "http://www.olegmoshkovich.com/img/imgPortfolio/ribbon_realized.png"
    ],
    videos: ["https://player.vimeo.com/video/32440857#t=2s"]
},
]
