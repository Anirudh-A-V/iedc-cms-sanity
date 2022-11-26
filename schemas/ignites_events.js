export default {
    name: 'events_ignites',
    title: 'Ignites Events',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date'
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
    ]
}