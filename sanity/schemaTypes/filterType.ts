import {defineField, defineType} from 'sanity'

export const filterType = defineType({
  name: 'filter',
  title: 'Filter',
  type: 'object',
  fields: [
    defineField({
      name: 'filter_title',
      type: 'string',
      title: 'Name des Filters',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'filter_value',
      type: 'string',
      title: 'Name des Filters auf englisch, nur Kleinbuchstaben, Leerzeichen mit _ ersetzen!',
      validation: (rule) =>
        rule.required().custom((value) => {
          const regex = /^[a-z]+$/ //Erlaubt nur Kleinbuchstaben
          if (value && regex.test(value)) {
            return true
          }
          return 'Nur Kleinbuchstaben ohne Leerzeichen sind erlaubt!'
        }),
    }),
  ],
})
