import React, { FC, useState } from 'react';

import { IFilter } from '../../../../../interfaces/components/UI/Search/Search';

import {
  CheckboxChecked,
  CheckboxUnchecked,
  FilterContainer
} from '../../../../../styles/components/UI/Search/Filters/Filter/Filter';

const Filter: FC<IFilter> = ({
  statement,
  type,
  insertIntoSearchFilterString
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  function checkFilter(): void {
    setChecked(!checked);
    insertIntoSearchFilterString(type, statement, checked);
  }

  return (
    <FilterContainer onClick={() => checkFilter()}>
      {checked ? (
        <CheckboxChecked>
          <div />
        </CheckboxChecked>
      ) : (
        <CheckboxUnchecked />
      )}
      <p>{statement}</p>
    </FilterContainer>
  );
};

export default Filter;
