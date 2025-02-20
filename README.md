![the-shrine-ng](https://github.com/svenpanel/the-shrine-ng/raw/master/static/og_image.png)

# the shrine, 21st century edition

But why?

Well, to:

- [x] save the [original shrine](http://theshrine.de) from becoming history due to technical advancements.
- [x] allow everyone to contribute to the project.
- [x] keep the authentic design (for now), but make it usable on small screens.
- [x] allow it to be used offline.

## Adding a groove

1. Make sure it's freely usable.
2. Lower the volume by roughly 11dB.
3. Encode it to a low bitrate to keep file size small
4. add it to the grooves folder
5. add it to the `static/grooves.json` file

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Docker

```bash
# Build docker image
docker build -t the-shrine .

# Run image
docker run -d -p 8080:3000 the-shrine
```