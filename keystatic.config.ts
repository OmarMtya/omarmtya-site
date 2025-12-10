import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'OmarMtya/omarmtya-site',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.datetime({ 
          label: 'Published Date',
          defaultValue: { kind: 'now' }
        }),
        description: fields.text({ 
          label: 'Description',
          validation: { isRequired: true }
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Omar Montoya' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        lang: fields.select({
          label: 'Language',
          options: [
            { label: 'English', value: 'en' },
            { label: 'Spanish', value: 'es' },
          ],
          defaultValue: 'en',
        }),
        image: fields.image({ 
          label: 'Cover Image',
          directory: 'src/assets/blog',
          publicPath: '/src/assets/blog/'
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/assets/blog',
              publicPath: '/src/assets/blog/'
            }
          }
        }),
      },
    }),
    site: collection({
      label: 'Site Data',
      slugField: 'language',
      path: 'src/content/site/*',
      format: 'json',
      schema: {
        language: fields.slug({ name: { label: 'Language Code (en/es)' } }),
        hero: fields.object({
          status: fields.text({ label: 'Status' }),
          location: fields.text({ label: 'Location' }),
          id: fields.text({ label: 'ID' }),
          label: fields.text({ label: 'Label' }),
          title: fields.text({ label: 'Title' }),
          role: fields.text({ label: 'Role' }),
          description: fields.text({ label: 'Description', multiline: true }),
          btn_modules: fields.text({ label: 'Button Modules' }),
          btn_github: fields.text({ label: 'Button GitHub' }),
        }, { label: 'Hero Section' }),
        about: fields.object({
          id: fields.text({ label: 'ID' }),
          auth: fields.text({ label: 'Auth Level' }),
          title: fields.text({ label: 'Title' }),
          p1_strong: fields.text({ label: 'P1 Strong' }),
          p1: fields.text({ label: 'Paragraph 1', multiline: true }),
          p2: fields.text({ label: 'Paragraph 2', multiline: true }),
          stack_title: fields.text({ label: 'Stack Title' }),
          stack: fields.array(fields.text({ label: 'Item' }), { label: 'Stack Items' }),
          method_title: fields.text({ label: 'Methodology Title' }),
          method: fields.array(fields.text({ label: 'Item' }), { label: 'Methodology Items' }),
          certs_title: fields.text({ label: 'Certs Title' }),
          certs: fields.array(fields.text({ label: 'Item' }), { label: 'Certifications' }),
          viewAllPosts: fields.text({ label: 'View All Posts Button' }),
        }, { label: 'About Section' }),
        projects: fields.object({
          title: fields.text({ label: 'Title' }),
          version: fields.text({ label: 'Version' }),
          empty_message: fields.text({ label: 'Empty Message' }),
          list: fields.array(
            fields.object({
              title: fields.text({ label: 'Title' }),
              type: fields.text({ label: 'Type' }),
              description: fields.text({ label: 'Description', multiline: true }),
              tech: fields.array(fields.text({ label: 'Tech' }), { label: 'Technologies' }),
              link: fields.text({ label: 'Link' }),
              cta: fields.text({ label: 'CTA Text' }),
            }),
            { label: 'Projects List' }
          ),
        }, { label: 'Projects Section' }),
        footer: fields.object({
          brand: fields.text({ label: 'Brand' }),
          description: fields.text({ label: 'Description', multiline: true }),
          connect_title: fields.text({ label: 'Connect Title' }),
          status_title: fields.text({ label: 'Status Title' }),
          status_avail_label: fields.text({ label: 'Avail Label' }),
          status_avail_value: fields.text({ label: 'Avail Value' }),
          status_update_label: fields.text({ label: 'Update Label' }),
          status_update_value: fields.text({ label: 'Update Value' }),
          status_version_label: fields.text({ label: 'Version Label' }),
          status_version_value: fields.text({ label: 'Version Value' }),
          copyright: fields.text({ label: 'Copyright' }),
        }, { label: 'Footer Section' }),
      },
    }),
  },
});
