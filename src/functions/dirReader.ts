import fs from 'fs';

export default function dirReader(path: string, callback: (fileName: string) => void) {
  fs.readdir(path, function(err, files){
    if (err) throw err;
    files.forEach(callback);
  });
}