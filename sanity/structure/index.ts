import type {StructureResolver} from 'sanity/structure'
import {HomeIcon, LemonIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('recipe').title('Rezepte').icon(LemonIcon),
      S.divider(),
      // Sorgt dafür, dass bereits eine Startseite festgelegt wird, die geändert werden kann
      S.listItem()
        .title('Startseite')
        .icon(HomeIcon)
        .child(S.document().schemaType('homepage')),
    ])
