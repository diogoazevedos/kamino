/* eslint-disable no-new */

import { lorem } from 'faker';
import test from 'ava';
import User from './user';

test('should instantiate an user with name', (t) => {
  const attributes = {
    name: 'Vinícius Herbstrith',
  };

  const user = new User(attributes);

  t.is(user.name, attributes.name);
});

test('should throw an error when name is not a string', (t) => {
  try {
    new User({ name: 1000 });
  } catch (error) {
    t.true(error instanceof TypeError);
  }
});

test('should throw an error when name has more than 255 characters', (t) => {
  try {
    new User({ name: lorem.words(50) });
  } catch (error) {
    t.true(error instanceof RangeError);
  }
});
