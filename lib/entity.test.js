import test from 'ava';
import { utc } from 'moment';
import Entity from './entity';

test('should instantiate an entity with user provided data', (t) => {
  const attributes = {
    id: 20,
    createdAt: utc('2015-10-05 20:15:10'),
    updatedAt: utc('2015-10-05 10:15:20'),
  };

  const entity = new Entity(attributes);

  t.true(entity instanceof Entity);
  t.deepEqual(entity.attributes, {
    id: 20,
    created_at: '2015-10-05 20:15:10',
    updated_at: '2015-10-05 10:15:20',
  });
});

test('should instantiate an entity with database provided data', (t) => {
  const attributes = {
    id: 20,
    created_at: '2015-10-05 20:15:10',
    updated_at: '2015-10-05 10:15:20',
  };

  const entity = Entity.of(attributes);

  t.true(entity instanceof Entity);
  t.deepEqual(entity.attributes, attributes);
});
