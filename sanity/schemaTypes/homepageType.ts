/*Schema um Startseite anzupassen*/

import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  /* Ist ein Object, weil es sonst bei dem "+ Create" Button auswählbar wäre und man dann immer wieder
  neue Homepages erstellen würde, anstatt die Festgelegte Homepage zu ändern */
  type: 'object',
  title: 'Startseite',
  fields: [
    defineField({
      name: 'hero',
      type: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'search_recipe_placeholder',
      type: 'string',
      title: 'Platzhalter für die Suche',
    }),
    defineField({
      name: 'no_recipe_found',
      type: 'no_recipe_found',
      title: 'Rezept nicht gefunden',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Startseite',
      }
    },
  },
})
