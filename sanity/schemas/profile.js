export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full name', type: 'string' },
    { name: 'displayName', title: 'Display name', type: 'string' },
    { name: 'role', title: 'Job title / role', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'array', of: [{ type: 'block' }] },
    { name: 'tagline', title: 'Hero tagline (short)', type: 'string' },
    { name: 'available', title: 'Open to work?', type: 'boolean' },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value (e.g. 4+)', type: 'string' },
          { name: 'label', title: 'Label (e.g. years exp.)', type: 'string' },
        ],
      }],
    },
  ],
};
