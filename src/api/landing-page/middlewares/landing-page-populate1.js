"use strict";

const { version } = require("node:process");

/**
 * `landging-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
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
        },
      },
    },
  },
};
  return async (ctx, next) => {
    // Ensure we don't overwrite other query params
    ctx.query = ctx.query || {};

    // Assign populate only to populate
    ctx.query.populate = myPopulate;

    // Assign status and locale at top-level (not inside populate)
    if (ctx.query.status == null) ctx.query.status = "published";
    if (ctx.query.locale == null) ctx.query.locale = ["en"];

    strapi.log.info("In landging-page-populate middleware.");
    await next();
  };
};
