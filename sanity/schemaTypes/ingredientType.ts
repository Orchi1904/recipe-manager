import {defineField, defineType} from 'sanity'

export const ingredientType = defineType({
  name: 'ingredient',
  title: 'Zutat',
  type: 'object',
  fields: [
    defineField({
      name: 'ingredient_name',
      type: 'string',
      title: 'Name der Zutat',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'amount',
      type: 'number',
      title: 'Menge',
    }),
    defineField({
      name: 'unit',
      type: 'string',
      title: 'Einheit',
      options: {
        list: [
          {title: 'Stück', value: 'Stück'},
          {title: 'Gramm', value: 'g'},
          {title: 'Kilogramm', value: 'kg'},
          {title: 'Mililiter', value: 'ml'},
          {title: 'Liter', value: 'l'},
          {title: 'Esslöffel', value: 'EL'},
          {title: 'Teelöffel', value: 'TL'},
          {title: 'Prise', value: 'Prise'},
        ],
      },
    }),
  ],
})
