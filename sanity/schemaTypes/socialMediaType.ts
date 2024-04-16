import {defineField, defineType} from 'sanity'

export const socialMediaType = defineType({
  name: 'social_media',
  title: 'Social Media',
  type: 'object',
  fields: [
    defineField({
      name: 'contact_option',
      type: 'string',
      title: 'Soziales Medium',
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
    defineField({
      name: 'contact_href',
      type: 'string',
      title: 'Link zum Profil',
      validation: (rule) => rule.required(),
    }),
  ],
})
