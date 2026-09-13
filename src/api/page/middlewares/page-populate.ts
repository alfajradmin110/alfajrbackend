/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  const myPopulate = {
    blocks: {
      on: {
        'blocks.hero-section': {
          populate: {
            Hero: {
              populate: {
                icon: {
                  fields: ['url', 'alternativeText', 'name'],
                },
                backgroundImage: {
                  fields: ['url', 'alternativeText', 'name'],
                },
                image: {
                  fields: ['url', 'alternativeText', 'name'],
                },
                images: {
                  fields: ['url', 'alternativeText', 'name'],
                },
              },
            },
          },
        },

        'blocks.services': {
          populate: {
            services: {
              populate: {
                serviceIcon: {
                  fields: ['url', 'alternativeText', 'name', 'width', 'height'],
                },
                images: {
                  fields: ['url', 'alternativeText', 'name', 'width', 'height'],
                },
                frontImage: {
                  fields: ['url', 'alternativeText', 'name', 'width', 'height'],
                },
              },
            },
          },
        },

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
                'page_url',
              ],
            },
          },
        },

        'shared.seo': {
          populate: {
            metaImage: {
              fields: ['url', 'alternativeText', 'name'],
            },
            openGraph: {
              populate: {
                ogImage: {
                  fields: ['url', 'alternativeText', 'name'],
                },
              },
            },
          },
        },

        'blocks.contact': '*',
        'blocks.textbox': '*',
        'blocks.map': '*',
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