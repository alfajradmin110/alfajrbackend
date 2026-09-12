import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHighlights extends Struct.ComponentSchema {
  collectionName: 'components_blocks_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlights: Schema.Attribute.Relation<
      'oneToMany',
      'api::highlight.highlight'
    >;
    subheading: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
  };
}

export interface BlocksMessage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_messages';
  info: {
    displayName: 'Message';
  };
  attributes: {
    messages: Schema.Attribute.Relation<'oneToMany', 'api::message.message'>;
  };
}

export interface BlocksPrograms extends Struct.ComponentSchema {
  collectionName: 'components_blocks_programs';
  info: {
    displayName: 'Programs';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String;
    programs: Schema.Attribute.Relation<'oneToMany', 'api::program.program'>;
    subheading: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
  };
}

export interface BlocksShortCourses extends Struct.ComponentSchema {
  collectionName: 'components_blocks_short_courses';
  info: {
    displayName: 'Short Courses';
  };
  attributes: {
    short_courses: Schema.Attribute.Relation<
      'oneToMany',
      'api::short-course.short-course'
    >;
  };
}

export interface BlocksSwiper extends Struct.ComponentSchema {
  collectionName: 'components_blocks_swipers';
  info: {
    displayName: 'Swiper';
    icon: 'chartBubble';
  };
  attributes: {
    highlights: Schema.Attribute.Relation<
      'oneToMany',
      'api::highlight.highlight'
    >;
    Swiper: Schema.Attribute.Component<'shared.hero', true>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    Menulinks: Schema.Attribute.Component<'shared.link', true>;
    Sociallinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    Sociallinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutMenu extends Struct.ComponentSchema {
  collectionName: 'components_layout_menus';
  info: {
    displayName: 'Menu';
    icon: 'apps';
  };
  attributes: {
    sections: Schema.Attribute.Relation<'oneToMany', 'api::section.section'>;
  };
}

export interface SharedAccordion extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'apps';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    highlights: Schema.Attribute.Relation<
      'oneToMany',
      'api::highlight.highlight'
    >;
    subtitle: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedIcons extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icons';
    icon: 'link';
  };
  attributes: {
    lucideClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    titleUrl: Schema.Attribute.String;
  };
}

export interface SharedTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'tags';
    icon: 'apps';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.highlights': BlocksHighlights;
      'blocks.message': BlocksMessage;
      'blocks.programs': BlocksPrograms;
      'blocks.short-courses': BlocksShortCourses;
      'blocks.swiper': BlocksSwiper;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.menu': LayoutMenu;
      'shared.accordion': SharedAccordion;
      'shared.hero': SharedHero;
      'shared.icons': SharedIcons;
      'shared.link': SharedLink;
      'shared.tags': SharedTags;
    }
  }
}
