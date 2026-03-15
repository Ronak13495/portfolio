export default {
  name: 'socialLink',
  title: 'Social link',
  type: 'document',
  fields: [
    { name: 'platform', title: 'Platform (e.g. GitHub)', type: 'string' },
    { name: 'url', title: 'URL', type: 'url' },
    { name: 'order', title: 'Display order', type: 'number' },
  ],
};
