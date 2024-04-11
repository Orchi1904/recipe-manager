/*Schema um Seiten anzupassen*/

import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Seite',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: 'Art der Seite',
      options: {
        list: [{title: 'Startseite', value: 'homepage'}],
      },
    }),
    defineField({
      name: 'hero',
      type: 'hero',
    }),
  ],
})
