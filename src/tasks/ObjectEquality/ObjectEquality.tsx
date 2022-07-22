import React from 'react';
import { Select, Button } from '../../components';
import { compareMethods } from '../../utils/compare';
import {
  generateRandomObject,
  generateEqualObjects,
} from '../../utils/randomObject';
import styles from './object.module.scss';

const ObjectEquality = () => {
  const [currentMethod, setCurrentMethod] = React.useState('deepEqual');
  const [objects, setObjects] = React.useState(() =>
    generateEqualObjects(4, 2)
  );

  const compareOnClick = () => {
    const result = compareMethods[currentMethod](objects[0], objects[1]);
    const msg = result ? 'Objects are equal.' : 'Objects are NOT equal';
    alert(msg);
  };

  const updateObjectByIndex = (idx: number) => {
    let currentObjects = [...objects];
    currentObjects[idx] = generateRandomObject(4, 2);

    setObjects(currentObjects);
  };

  const makeObjectEqual = () => {
    setObjects(generateEqualObjects(4, 2));
  };

  const handleSelect = (method: string) => {
    setCurrentMethod(method);
  };

  return (
    <>
      <Select
        label="Choose equality method"
        options={['deepEqual', 'shallowCompare', 'deepEqualWithJSON']}
        handleSelect={handleSelect}
      />
      <div className={styles.jsonContainer}>
        <div className={styles.panel}>
          <Button onClick={() => updateObjectByIndex(0)}>
            Generate the new one
          </Button>
          <Button onClick={makeObjectEqual}>Generate equal objects</Button>
          <Button onClick={() => updateObjectByIndex(1)}>
            Generate the new one
          </Button>
          <Button className={styles.placeCenter} onClick={compareOnClick}>
            Compare
          </Button>
        </div>
        <div className={styles.row}>
          <div className={styles.jsonWrapper}>
            <pre>{JSON.stringify(objects[0], undefined, 2)}</pre>
          </div>
          <div className={styles.jsonWrapper}>
            <pre>{JSON.stringify(objects[1], undefined, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default ObjectEquality;
