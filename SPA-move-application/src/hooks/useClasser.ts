import { useCallback, useState } from 'react';
import { useClassesInterface } from './types';

export function useClasser() {
  const [listOfClasses, setListOfClasses] = useState<{ [key: string]: string }>(
    {}
  );
  const [dependenceList, setDependenceList] = useState<{
    [key: string]: boolean[];
  }>({});

  const setClasses = useCallback(
    ({ id, dependencies, classes }: useClassesInterface) => {
      if (!listOfClasses[id]) {
        return classes.join(' ');
      }
      if (dependencies && dependenceList)
        setDependenceList((prevState) => ({
          ...prevState,
          [id]: dependencies,
        }));

      const updatedClass = classes.filter((className) => className).join(' ');
      setListOfClasses((prevState) => ({ ...prevState, [id]: updatedClass }));

      return updatedClass;
    },
    [dependenceList, listOfClasses]
  );

  return setClasses;
}
