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
      name: 'sort_recipe_placeholder',
      type: 'string',
      title: 'Platzhalter für das Sortierungs-Dropdown',
    }),
    defineField({
      name: 'sort_recipe_values',
      type: 'array',
      of: [{type: 'sort'}],
      title: 'Sortierungsmöglichkeiten',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'filter_recipe_placeholder',
      type: 'string',
      title: 'Platzhalter für das Filter-Dropdown',
    }),
    defineField({
      name: 'filter_recipe_values',
      type: 'array',
      of: [{type: 'filter'}],
      title: 'Filtermöglichkeiten',
      validation: (rule) => rule.required(),
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
