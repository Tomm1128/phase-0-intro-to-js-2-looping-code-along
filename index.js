// Code your solutions in this file
const writeCards = (names, event) => {
  const cards = []
  for (let i = 0; i < names.length; i++ ){
      cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }

  return cards
}

