"use strict";

export default (config: any, { strapi }: { strapi: any }) => {
  const myPopulate = {
    Programs: {
      on: {
        "blocks.programs": {
          populate: {
            programs: {
              populate: {
                images: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },
                Banner: {
                  populate: {
                    backgroundImage: {
                      fields: [
                        "url",
                        "alternativeText",
                        "name",
                        "width",
                        "height",
                      ],
                    },
                  },
                },
              },
            },
            Swiper: {
              populate: {
                backgroundImage: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },
              },
            },
          },
        },
      },
    },
  };

  return async (ctx: any, next: () => Promise<void>) => {
    ctx.query = ctx.query || {};

    ctx.query.populate = myPopulate;

    if (ctx.query.status == null) {
      ctx.query.status = "published";
    }

    if (ctx.query.locale == null) {
      ctx.query.locale = ["en"];
    }

    strapi.log.info("In landing-page-populate middleware.");

    await next();
  };
};