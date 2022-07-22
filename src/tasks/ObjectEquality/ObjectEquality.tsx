import React from 'react';
import { Select, Button, Tooltip } from '../../components';
import { compareMethods } from '../../utils/compare';
import {
  generateRandomObject,
  generateEqualObjects,
} from '../../utils/randomObject';
import { CompareIcon } from '../../assets/icons';
import styles from './object.module.scss';

enum EFilterActions {
  INCREMENT_FIELDS = 'INCREMENT_FIELDS',
  DECREMENT_FIELDS = 'DECREMENT_FIELDS',
  INCREMENT_DEPTH = 'INCREMENT_DEPTH',
  DECREMENT_DEPTH = 'DECREMENT_DEPTH',
}

interface IFilters {
  fields: number;
  depth: number;
}

const initialState: IFilters = {
  fields: 5,
  depth: 2,
};

type TFiltersAction = { type: EFilterActions };

function reducer(state: IFilters, action: TFiltersAction) {
  switch (action.type) {
    case EFilterActions.INCREMENT_FIELDS:
      return { ...state, fields: state.fields + 1 };
    case EFilterActions.DECREMENT_FIELDS:
      return { ...state, fields: state.fields - 1 };
    case EFilterActions.INCREMENT_DEPTH:
      return { ...state, depth: state.depth + 1 };
    case EFilterActions.DECREMENT_DEPTH:
      return { ...state, depth: state.depth - 1 };
    default:
      return state;
  }
}

const ObjectEquality = () => {
  const [currentMethod, setCurrentMethod] = React.useState('deepEqual');
  const [{ fields, depth }, dispatch] = React.useReducer(reducer, initialState);
  const [objects, setObjects] = React.useState(() =>
    generateEqualObjects(fields, depth)
  );

  const increaseObjectFields = () => {
    dispatch({ type: EFilterActions.INCREMENT_FIELDS });
  };
  const decreaseObjectFields = () => {
    if (fields === 1) return;
    dispatch({ type: EFilterActions.DECREMENT_FIELDS });
  };
  const increaseObjectDepth = () => {
    dispatch({ type: EFilterActions.INCREMENT_DEPTH });
  };
  const decreaseObjectDepth = () => {
    if (depth === 1) return;
    dispatch({ type: EFilterActions.DECREMENT_DEPTH });
  };

  const compareOnClick = () => {
    const result = compareMethods[currentMethod](objects[0], objects[1]);
    const msg = result ? 'Objects are equal.' : 'Objects are NOT equal';
    alert(msg);
  };

  const updateObjectByIndex = (idx: number) => {
    let currentObjects = [...objects];
    currentObjects[idx] = generateRandomObject(fields, depth);

    setObjects(currentObjects);
  };

  const makeObjectEqual = () => {
    setObjects(generateEqualObjects(fields, depth));
  };

  const handleSelect = (method: string) => {
    setCurrentMethod(method);
  };

  return (
    <>
      <div className={styles.jsonContainer}>
        <Tooltip title="Choose method to comparence">
          <Select
            label="Choose equality method"
            options={['deepEqual', 'shallowCompare', 'deepEqualWithJSON']}
            handleSelect={handleSelect}
          />
        </Tooltip>
        <div className={styles.filtersWrapper}>
          <div className={styles.filters}>
            <p>Fields:</p>
            <Button onClick={increaseObjectFields}>+</Button>
            <Button onClick={decreaseObjectFields}>-</Button>
          </div>
          <p>{fields}</p>

          <div className={styles.filters}>
            <p>Depth:</p>
            <Button onClick={increaseObjectDepth}>+</Button>
            <Button onClick={decreaseObjectDepth}>-</Button>
          </div>
          <p>{depth}</p>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.panel}>
          <Button onClick={() => updateObjectByIndex(0)}>
            Generate the new one
          </Button>
          <Button onClick={makeObjectEqual}>Generate equal objects</Button>
          <Button onClick={() => updateObjectByIndex(1)}>
            Generate the new one
          </Button>
          <Button className={styles.compareBtn} onClick={compareOnClick}>
            Compare <CompareIcon />
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
