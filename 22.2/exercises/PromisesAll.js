const fs = require('fs').promises;

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  const createFiles = strings.map((string, i) => {
    fs.writeFile(`file${i}.txt`, string);
  })

  await Promise.all(createFiles);
  const fileNames = [
    'file0.txt',
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
  ];
  const fileContents = await Promise.all(
    fileNames.map((files) => {
      fs.readFile(files, 'utf-8')
    }));
}

arrayToFile();