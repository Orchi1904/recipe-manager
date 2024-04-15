import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'slogan',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Hintergrundbild',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternativtext',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
