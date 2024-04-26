import {defineField, defineType} from 'sanity'

export const sortType = defineType({
  name: 'sort',
  title: 'Sortierung',
  type: 'object',
  fields: [
    defineField({
      name: 'sort_title',
      type: 'string',
      title: 'Name der Sortierung',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sort_value',
      type: 'string',
      title: 'Name der Sortierung auf englisch, nur Kleinbuchstaben, Leerzeichen mit _ ersetzen!',
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
