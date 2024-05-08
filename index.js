const writeCards = (names, event) => {
  const cards = []
  for (let i = 0; i < names.length; i++ ){
      cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }

  return cards
}

const countDown = (value) => {
  while (value >= 0){
      console.log(value)
      value--;
  }
}
