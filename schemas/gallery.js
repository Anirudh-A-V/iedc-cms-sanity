export default {
    name: 'gallery_iedc',
    title: 'IEDC Gallery',
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
            name: 'description',
            title: 'Description',
            type: 'text'
        },
    ]
}