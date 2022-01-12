const restoreSimpsonJson = async () => {
  fs.writeFile('./Simpsons.json', JSON.stringify(restoreSimpsons))
}