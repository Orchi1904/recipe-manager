import {defineField, defineType} from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Rezept',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titel des Rezepts',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug des Rezepts',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Bild des Rezepts',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro_description',
      type: 'string',
      title: 'Kurzbeschreibung',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Bewertungszahl (1-10)',
      validation: (rule) => rule.required().min(1).max(10),
    }),
    defineField({
      name: 'prep_time',
      type: 'number',
      title: 'Zubereitungszeit (min)',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'ingredients',
      type: 'array',
      of: [{type: 'ingredient'}],
      title: 'Zutaten',
      validation: (rule) => rule.required(),
    }),
  ],
})
