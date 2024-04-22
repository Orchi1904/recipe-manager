import {defineField, defineType} from 'sanity'

export const noRecipeFoundType = defineType({
  name: 'no_recipe_found',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
      title: 'Überschrift',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
  ],
})
