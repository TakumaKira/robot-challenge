import { TEST_DATA_DIR, TEST_DATA_FLAG } from './config.json';
import dirReader from './functions/dirReader';
import logTestData from './functions/testDataLogger';
import run from './run';

if (process.argv[2] !== TEST_DATA_FLAG) {
  run();
} else {
  dirReader(TEST_DATA_DIR, (fileName: string) => {
    run(`${TEST_DATA_DIR}/${fileName}`)
      .then((result) => {
        if (!result) return;
        logTestData(fileName, result);
      });
  });
}
