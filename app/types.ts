export interface AllEntries {
  sys: Sys
  total: number
  skip: number
  limit: number
  items: Item[]
  includes: Includes
}

export interface Sys {
  type: string
}

export interface Item {
  metadata: Metadata
  sys: Sys2
  fields: Fields
}

export interface Metadata {
  tags: any[]
}

export interface Sys2 {
  space: Space
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment
  revision: number
  contentType: ContentType
  locale: string
}

export interface Space {
  sys: Sys3
}

export interface Sys3 {
  type: string
  linkType: string
  id: string
}

export interface Environment {
  sys: Sys4
}

export interface Sys4 {
  id: string
  type: string
  linkType: string
}

export interface ContentType {
  sys: Sys5
}

export interface Sys5 {
  type: string
  linkType: string
  id: string
}

export interface Fields {
  title: string
  description?: string
  images: Image[]
  slug: string
}

export interface Image {
  metadata: Metadata2
  sys: Sys6
  fields: Fields2
}

export interface Metadata2 {
  tags: any[]
}

export interface Sys6 {
  space: Space2
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment2
  revision: number
  locale: string
}

export interface Space2 {
  sys: Sys7
}

export interface Sys7 {
  type: string
  linkType: string
  id: string
}

export interface Environment2 {
  sys: Sys8
}

export interface Sys8 {
  id: string
  type: string
  linkType: string
}

export interface Fields2 {
  title: string
  description: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image2
}

export interface Image2 {
  width: number
  height: number
}

export interface Includes {
  Asset: Asset[]
}

export interface Asset {
  metadata: Metadata3
  sys: Sys9
  fields: Fields3
}

export interface Metadata3 {
  tags: any[]
}

export interface Sys9 {
  space: Space3
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment3
  revision: number
  locale: string
}

export interface Space3 {
  sys: Sys10
}

export interface Sys10 {
  type: string
  linkType: string
  id: string
}

export interface Environment3 {
  sys: Sys11
}

export interface Sys11 {
  id: string
  type: string
  linkType: string
}

export interface Fields3 {
  title: string
  description: string
  file: File2
}

export interface File2 {
  url: string
  details: Details2
  fileName: string
  contentType: string
}

export interface Details2 {
  size: number
  image: Image3
}

export interface Image3 {
  width: number
  height: number
}
