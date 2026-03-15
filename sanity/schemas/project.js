export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project title', type: 'string' },
    { name: 'description', title: 'Short description', type: 'string' },
    { name: 'url', title: 'Live URL', type: 'url' },
    { name: 'repo', title: 'GitHub repo URL', type: 'url' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'order', title: 'Display order', type: 'number' },
    {
      name: 'tags',
      title: 'Tech stack tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Featured project?',
      type: 'boolean',
    },
  ],
};
