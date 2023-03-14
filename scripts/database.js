let database = {
    sections:[
        {
            id: 1,
            section: "Northeast",
            attraction: "Chamfort River"
        },
        {
            id: 2,
            section: "Northern",
            attraction: "Lost Wolf Hiking Trail"
        },
        {
            id: 3,
            section: "Northwest",
            attraction:"Lodge"
        },
        {
            id: 4,
            section: "Southwest",
            attraction: "Gander River"
        },
        {
            id: 5,
            section: "Southern",
            attraction:"Campgrounds"
        },
        {
            id: 6,
            section: "Southeast",
            attraction:"Pine Bluff Trails"
        }
    ],
    services:[
        {
            id:1,
            service: "Rafting"
        },
        {
            id:2,
            service: "Canoeing"
        },
        {
            id:3,
            service: "Fishing"
        },
        {
            id:4,
            service: "Hiking"
        },
        {
            id:5,
            service: "Picnicking"
        },
        {
            id:6,
            service: "Rock Climbing"
        },
        {
            id:7,
            service: "Lodging"
        },
        {
            id:8,
            service: "Information"
        },
        {
            id:9,
            service: "Zip Lines"
        },
        {
            id: 10,
            service: "Parking"
        }
    ],
    guests:[
        {
            id:1,
            firstName: "Leonard",
            lastName: "Baldwin",
            sectionId: 2
        },
        {
            id:2,
            firstName:"Ethel",
            lastName:"Henderson",
            sectionId:1
        },
        {
            id:3,
            firstName: "Sabrina",
            lastName: "Kennedy",
            sectionId:5
        },
        {
            id:4,
            firstName:"Charlene",
            lastName:"Evans",
            sectionId:4
        },
        {
            id:5,
            firstName:"Doug",
            lastName: "Garcia",
            sectionId:6
        },
        {
            id:6,
            firstName:"Dexter",
            lastName: "Harrington",
            sectionId:1
        },
        {
            id:7,
            firstName:"Slim",
            lastName:"Shady",
            sectionId:2
        },
        {
            id:8,
            firstName:"Lynda",
            lastName:"Hodges",
            sectionId:5
        },
        {
            id:9,
            firstName:"Jacquelyn",
            lastName:"Quinn",
            sectionId:3
        },
        {
            id:10,
            firstName:"Jeannetta",
            lastName:"Diamond",
            sectionId:2
        },
        {
            id:11,
            firstName:"Mattie",
            lastName:"Alexander",
            sectionId:1
        },
        {
            id:12,
            firstName:"Refugia",
            lastName: "Maas",
            sectionId:3
        },
        {
            id:13,
            firstName:"Freeman",
            lastName:"Lombardo",
            sectionId:6
        },
        {
            id:14,
            firstName:"Octavio",
            lastName:"Boland",
            sectionId: 4
        }
    ],
    sectionServices:[
        { id:1,   sectionId:1,    serviceId:1},
        { id:2,   sectionId:1,    serviceId:2},
        { id:3,   sectionId:1,    serviceId:3},
        { id:4,   sectionId:2,    serviceId:4},
        { id:5,   sectionId:2,    serviceId:5},
        { id:6,   sectionId:2,    serviceId:6},
        { id:7,   sectionId:3,    serviceId:7},
        { id:8,   sectionId:3,    serviceId:8},
        { id:9,   sectionId:3,    serviceId:10},
        { id:10,   sectionId:3,    serviceId:5},
        { id:11,   sectionId:4,    serviceId:3},
        { id:12,   sectionId:4,    serviceId:4},
        { id:13,   sectionId:5,    serviceId:8},
        { id:14,   sectionId:5,    serviceId:7},
        { id:15,   sectionId:5,    serviceId:10},
        { id:16,   sectionId:6,    serviceId:4},
        { id:17,   sectionId:6,    serviceId:5},
        { id:18,   sectionId:6,    serviceId:9},
    ]
}


export const getSections = ( )=>{
    return database.sections.map(sections =>({...sections}))
}
export const getServices = ( )=>{
   return database.services.map(services =>({...services}))
}
export const getSectionServices = ( )=>{
    return database.sectionServices.map(sectionServices =>({...sectionServices}))
}
export const getGuests = ( )=>{
    return database.guests.map(guests =>({...guests}))
}