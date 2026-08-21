import type { Schema, Struct } from '@strapi/strapi';

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
    subtitle: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
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

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.programs': BlocksPrograms;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.menu': LayoutMenu;
      'shared.accordion': SharedAccordion;
      'shared.hero': SharedHero;
      'shared.link': SharedLink;
    }
  }
}
