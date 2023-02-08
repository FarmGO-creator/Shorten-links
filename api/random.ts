const random = (num: number) => {
  const date = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const result = [];

  for (let i = 0; i < num; i++) {
    const randomStr = Math.floor(Math.random() * date.length);
    result.push(date[randomStr]);
  }

  return result.join('')
};

export default random;