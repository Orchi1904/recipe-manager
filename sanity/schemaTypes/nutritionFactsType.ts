import {defineField, defineType} from 'sanity'

export const nutritionFactsType = defineType({
  name: 'nutritionFacts',
  type: 'object',
  title: 'Nährwerte (pro Portion)',
  fields: [
    defineField({
      name: 'calories',
      type: 'number',
      title: 'Kalorien (kcal)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fat',
      type: 'number',
      title: 'Fett (g)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'saturated_fat',
      type: 'number',
      title: 'Gesättigte Fettsäuren (g)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'carbohydrates',
      type: 'number',
      title: 'Kohlenhydrate (g)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sugar',
      type: 'number',
      title: 'Zucker (g)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'protein',
      type: 'number',
      title: 'Eiweiß (g)',
      validation: (rule) => rule.required(),
    }),
  ],
})
