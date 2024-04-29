import {defineField, defineType} from 'sanity'
import {LemonIcon} from '@sanity/icons'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Rezept',
  type: 'document',
  icon: LemonIcon,
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
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternativtext',
          validation: (rule) => rule.required(),
        }),
      ],
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
      title: 'Zutaten für eine Portion',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'preparation',
      type: 'array',
      title: 'Anleitung',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Frühstück', value: 'breakfast'},
          {title: 'Mittagessen', value: 'lunch'},
          {title: 'Abendessen', value: 'dinner'},
          {title: 'Desserts', value: 'desserts'},
          {title: 'Getränke', value: 'drinks'},
          {title: 'Fleischfrei', value: 'meat_free'},
          {title: 'Glutenfrei', value: 'gluten_free'},
          {title: 'Vegan', value: 'vegan'},
          {title: 'Vegetarisch', value: 'vegetarian'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'intro_description',
      media: 'image',
    },
  },
})
