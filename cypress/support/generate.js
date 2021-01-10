import faker from "faker";

faker.locale = "en_GB";

const buildEnquiry = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phone(),
  message: faker.lorem.sentences(5),
});

export { buildEnquiry };
