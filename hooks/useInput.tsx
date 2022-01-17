import { useState, useCallback, useRef } from 'react';
import { removeNonNumeric } from '@utils/StringUtils';

interface Options {
  initialValue?: string;
  maxValue?: number;
  minValue?: number;
  maxLength?: number;
  minLength?: number;
  autoFix?: boolean;
  type?: 'number' | 'string';
}

type returnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void, boolean];

function useInput(options?: Options): returnType {
  const { maxValue, minValue, initialValue, maxLength, minLength = 0, autoFix = true, type = 'string' } = options || {};
  const [value, setValue] = useState<string>(initialValue || '');
  const isValid = useRef<boolean>(true);

  const handleNumber = useCallback(
    (receivedValue: string) => {
      let result: string = receivedValue;

      if (maxLength) {
        result = result.substr(0, maxLength);
      }

      const returnValue: string = autoFix ? result : receivedValue;
      isValid.current =
        result === receivedValue &&
        returnValue.length >= minLength &&
        (minValue ? minValue <= parseInt(returnValue, 10) : true);
      setValue(returnValue);
    },
    [maxLength, minLength, maxValue, minValue, autoFix],
  );

  const handleString = useCallback(
    (receivedValue: string) => {
      let result: string = receivedValue;

      if (maxLength) {
        result = result.substr(0, maxLength);
      }

      const returnValue: string = autoFix ? result : receivedValue;
      isValid.current = result === receivedValue && returnValue.length >= minLength;
      setValue(returnValue);
    },
    [maxLength, minLength, autoFix],
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue: string = e.target.value || '';
      if (type === 'number') {
        handleNumber(removeNonNumeric(targetValue));
      } else {
        handleString(targetValue);
      }
    },
    [type, handleNumber, handleString],
  );

  return [value, onChangeInput, isValid.current];
}

export default useInput;
