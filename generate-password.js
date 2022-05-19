function generatePassword(length, level) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  let newPassword = '';

  for (let i = 0; i < length; i++) {
    if (level === 'easy') {
      const easy = alphabet[Math.floor(Math.random() * alphabet.length)]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
      newPassword += easy;
    } if (level === 'medium') {
      const easyMedium = digits + alphabet
      const medium = easyMedium[Math.floor(Math.random() * easyMedium.length)];
      newPassword += medium;
    } else if (level === 'hard') {
      const easyMediumHard = digits + alphabet + symbols
      const hard = easyMediumHard[Math.floor(Math.random() * easyMediumHard.length)];
      newPassword += hard;
    }


  }

  return newPassword;
}
