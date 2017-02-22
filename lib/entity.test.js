/* eslint-disable no-new */

import test from 'ava';
import { utc } from 'moment';
import Entity from './entity';
import { isMoment } from './validator';

test('should instantiate an entity with user provided data', (t) => {
  const attributes = {
    id: 20,
    createdAt: utc('2015-10-05 20:15:10'),
    updatedAt: utc('2015-10-05 10:15:20'),
  };

  const entity = new Entity(attributes);

  t.is(entity.id, attributes.id);
  t.true(isMoment(entity.createdAt));
  t.true(isMoment(entity.updatedAt));
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

  t.is(entity.id, attributes.id);
  t.true(isMoment(entity.updatedAt));
  t.true(isMoment(entity.createdAt));
  t.deepEqual(entity.attributes, attributes);
});

test('should throw an error when id is not a string', (t) => {
  try {
    new Entity({ id: 'foo' });
  } catch (error) {
    t.true(error instanceof TypeError);
  }
});

test('should throw an error when createdAt is not a moment instance', (t) => {
  try {
    new Entity({ createdAt: 'foo' });
  } catch (error) {
    t.true(error instanceof TypeError);
  }
});

test('should throw an error when updatedAt is not a moment instance', (t) => {
  try {
    new Entity({ updatedAt: 'foo' });
  } catch (error) {
    t.true(error instanceof TypeError);
  }
});
