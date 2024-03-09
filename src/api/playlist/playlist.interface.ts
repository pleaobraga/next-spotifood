export interface PlaylistItem {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: [
    {
      height: null | number
      url: string
      width: null | number
    },
  ]
  name: string
  owner: {
    display_name: string
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  primary_color: string
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    total: number
  }
  type: string
  uri: string
}

export interface Playlist {
  href: string
  items: PlaylistItem[]
  limit: number
  next: null | string
  offset: number
  previous: null | string
  total: number
}
