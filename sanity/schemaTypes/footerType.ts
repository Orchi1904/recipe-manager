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
      type: 'string',
      title: 'Social Media Links',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'GitHub', value: 'github'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedIn'},
          {title: 'Pinterest', value: 'pinterest'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'YouTube', value: 'youTube'},
        ],
      },
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
