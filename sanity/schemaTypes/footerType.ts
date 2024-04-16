/*Schema um Footer anzupassen*/

import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  /* Ist ein Object, weil es sonst bei dem "+ Create" Button auswählbar wäre und man dann immer wieder
  neue Footer erstellen würde, anstatt den festgelegten Footer zu ändern */
  type: 'object',
  fields: [
    defineField({
      name: 'contact_options_title',
      type: 'string',
      title: 'Kontaktmöglichkeiten Überschrift',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contact_options',
      type: 'array',
      of: [{type: 'social_media'}],
      title: 'Kontaktmöglichkeiten',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
