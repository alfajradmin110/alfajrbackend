"use strict";

/**
 * `landing-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

export default (
  config: Record<string, unknown>,
  { strapi }: { strapi: Core.Strapi }
) => {
  const myPopulate: Record<string, any> = {
    Header: {
      on: {
        "layout.header": {
          populate: {
            logo: {
              fields: ["url", "alternativeText", "name"],
            },
          },
        },

        "layout.menu": {
          populate: {
            sections: {
              populate: {
                dropdown: {
                  populate: "*",
                },
              },
            },
          },
        },

        // Populate the shared.seo component
        // "shared.seo": {
        //   populate: {
        //     metaImage: {
        //       fields: ["url", "alternativeText", "name"],
        //     },

        //     openGraph: {
        //       populate: {
        //         ogImage: {
        //           fields: ["url", "alternativeText", "name"],
        //         },
        //       },
        //     },
        //   },
        // },

        "layout.footer": {
          populate: {
            Menulinks: {
              populate: {
                image: {
                  fields: ["url", "alternativeText", "name"],
                },
              },
            },

            Sociallinks: {
              populate: {
                image: {
                  fields: ["url", "alternativeText", "name"],
                },
              },
            },
          },
        },
      },
    },
  };

  return async (ctx: any, next: () => Promise<void>) => {
    // Ensure we don't overwrite other query params
    ctx.query = ctx.query || {};

    // Assign populate
    ctx.query.populate = myPopulate;

    // Assign status and locale at top-level
    if (ctx.query.status == null) {
      ctx.query.status = "published";
    }

    if (ctx.query.locale == null) {
      ctx.query.locale = ["en"];
    }

    strapi.log.info("In global-populate middleware.");

    await next();
  };
};