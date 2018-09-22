//const faker = require('faker'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'users',
      Array(1).fill(undefined).map(() => ({
        //name: faker.name.firsName(),
        //mail: faker.internet.email(),
        //university: "PUC"
        //password: faker.internet.password(),
        //picture_link:faker.image.imageUrl(),
        //super_admin: faker.random.number(),
        //verified: faker.random.number(),
        //status:faker.random.number() ,
        //career: "Engineering"
        name: 'Diego',
        email: 'disilva2@uc.cl',
        university: 'PUC',
        password: 'faker.internet.password()',
        picture_link:'https://www.sfu.ca/content/sfu/fhs/people/profiles/diego-silva/jcr:content/main_content/image.img.640.medium.jpg/1442879294637.jpg',
        super_admin: 1,
        verified: 1,
        createdAt: new Date(),
        updatedAt: new Date()

        //createdAt: faker.date.past(0.5, new Date(2017, 0, 1)),
        //updatedAt: faker.date.past(0.5, new Date(2018, 0, 1)),
      })),
    ),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
