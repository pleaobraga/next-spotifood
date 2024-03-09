export const cardMock = {
  id: 'test',
  name: 'test',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR',
  },
  images: [
    {
      url: 'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b',
    },
  ],
}

export const cardListMockFactory = (number = 6) => {
  const list = []

  for (let i = 0; i < number; i++) {
    const id = cardMock.id + i

    list.push({ ...cardMock, id })
  }

  return list
}
