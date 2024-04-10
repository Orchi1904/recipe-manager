import type {StructureResolver} from 'sanity/structure'
import {LemonIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([S.documentTypeListItem('recipe').title('Rezepte').icon(LemonIcon)])
