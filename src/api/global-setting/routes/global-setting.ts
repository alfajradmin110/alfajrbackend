"use strict";

/**
 * landing-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::global-setting.global-setting",
  {
    config: {
      find: {
        middlewares: ["api::global-setting.global-setting-populate"],
      },
    },
  }
);