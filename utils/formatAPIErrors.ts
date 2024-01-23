export default ({ message }) => {
  const error = message.split(':');
  const field = error[0].trim();
  const value = error[1].trim();

  return {
    [field]: value,
  };
};
