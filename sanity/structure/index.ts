import type {StructureResolver} from 'sanity/structure'
import {DashboardIcon, LemonIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('recipe').title('Rezepte').icon(LemonIcon),
      S.documentTypeListItem('page').title('Seiten').icon(DashboardIcon),
    ])
