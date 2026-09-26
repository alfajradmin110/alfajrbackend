/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  const myPopulate = {
    blocks: {
      on: {
        // Chairman message / any generic "message" block reused across pages
        'blocks.message': {
          populate: {
            messages: {
              populate: {
                image: {
                  fields: ['url', 'alternativeText', 'name', 'width', 'height'],
                },
              },
              fields: [
                'name',
                'slug',
                'jobtitle',
                'organization',
                'messagetitle',
                'messagesubtitle',
                'message',
              ],
            },
          },
        },

        // Contact block
        'blocks.contact': {
          fields: ['address', 'map', 'email', 'phone'],
        },

        // Hero / Introduction block
        'blocks.hero-text': {
          populate: {
            Hero: {
              populate: {
                backgroundImage: {
                  fields: ['url', 'alternativeText', 'name', 'width', 'height'],
                },
              },
              fields: ['title', 'subtitle', 'summary', 'ctaText', 'ctaUrl'],
            },
          },
          fields: ['heading', 'subheading', 'summary', 'description'],
        },
      },
    },
  };

  return async (ctx: any, next: () => Promise<void>) => {
    ctx.query = ctx.query || {};

    ctx.query.populate = myPopulate;

    if (ctx.query.status == null) ctx.query.status = 'published';
    if (ctx.query.locale == null) ctx.query.locale = ['en'];

    strapi.log.info('In page-populate middleware.');

    await next();
  };
};