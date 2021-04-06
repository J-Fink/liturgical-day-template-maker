export default {
    name: 'sanctorale',
    title: 'Fixed Day',
    type: 'document',
    fields: [
        {
         name: 'date',
         title: 'Date',
         type: 'string',
        },
        {
        name: 'celebrations',
        title: 'Celebration',
        type: 'document',
        fields: [
            {
            name: 'saintName',
            title: 'Saint Name',
            type: 'string',
            },
        ],
        },
    ],
}