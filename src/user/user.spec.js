import test from 'ava';
import User from './user';

const data = {
  name: 'Diogo',
};

const long = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.`;

test('should instantiate an user successfully', (t) => {
  const user = new User(data);

  t.is(user.name, data.name);
  t.deepEqual(user.attributes, data);
});

test('should throw an error when name is not a string', (t) => {
  try {
    new User({ name: 1000 }); // eslint-disable-line no-new
  } catch (error) {
    t.true(error instanceof TypeError);
  }
});

test('should throw an error when name has more than 255 characters', (t) => {
  try {
    new User({ name: long }); // eslint-disable-line no-new
  } catch (error) {
    t.true(error instanceof RangeError);
  }
});
