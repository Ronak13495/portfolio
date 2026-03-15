export default {
  name: 'skillGroup',
  title: 'Skill group',
  type: 'document',
  fields: [
    { name: 'title', title: 'Group title', type: 'string' },
    { name: 'order', title: 'Display order', type: 'number' },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'barSkill',
      title: 'Bar chart skill (for about section)',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'percent', title: 'Percent (0–100)', type: 'number' },
      ],
    },
  ],
};
