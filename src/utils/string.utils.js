export const toTitleCase = (sentence) => {
  if (!sentence) {
    return sentence;
  }

  const sentenceWords = sentence.split(' ');
  
  for (let i = 0; i < sentenceWords.length; i++) {
    sentenceWords[i] = sentenceWords[i].charAt(0).toUpperCase() + sentenceWords[i].slice(1);
  }

  return sentenceWords.join(' ');
}
