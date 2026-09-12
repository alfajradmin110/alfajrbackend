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
          },
        },

        "blocks.swiper": {
          populate: {
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

            highlights: {
              populate: {
                frontImage: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },
                tags: true,
              },
              fields: ["title", "slug"],
            },
          },
        },

        "blocks.message": {
          populate: {
            messages: {
              populate: {
                image: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },
              },
              fields: [
                "name",
                "slug",
                "jobtitle",
                "organization",
                "messagetitle",
                "messagesubtitle",
                "message",
              ],
            },
          },
        },

        // Short Courses
        "blocks.short-courses": {
          populate: {
            short_courses: {
              populate: {
                bannerImage: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },

                tags: true,

                education_levels: {
                  fields: ["title"],
                },

                LucideIcon: {
                  fields: ["title", "lucideClass"],
                },
              },

              fields: [
                "title",
                "summary",
                "duration",
                "isFeatured",
                "themeColor",
              ],
            },
          },
        },
        //SHORT COURSES END

        // Main Highlights section
        "blocks.highlights": {
          populate: {
            highlights: {
              populate: {
                frontImage: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },

                tags: true,

                imageGallery: {
                  fields: [
                    "url",
                    "alternativeText",
                    "name",
                    "width",
                    "height",
                  ],
                },
              },

              fields: [
                "title",
                "slug",
                "summary",
                "createdAt",
                "themeColor",
              ],
            },
          },

          // heading, subheading, summary are plain fields on the component itself,
          // so they come back automatically — no need to list them explicitly
          // unless you're restricting fields elsewhere in the query.
        },
        "blocks.announcement": {
          populate: {
            announcements: "*",
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