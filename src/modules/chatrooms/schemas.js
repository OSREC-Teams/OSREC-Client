import { schema } from 'normalizr';

export const chatroomsSchema = new schema.Entity(
  'chatrooms',
  {},
  { idAttribute: 'name' },
);
export const chatroomsListSchema = new schema.Array(chatroomsSchema);
