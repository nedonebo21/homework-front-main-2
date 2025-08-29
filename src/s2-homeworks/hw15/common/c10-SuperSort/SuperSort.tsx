import React from 'react'
import downIcon from '../../../../assets/down-icon.svg'
import upIcon from '../../../../assets/up-icon.svg'
import noneIcon from '../../../../assets/none-icon.svg'

// добавить в проект иконки и импортировать

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === down) {
    return up
  } else if (sort === up) {
    return ''
  } else {
    return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
      sort, value, onChange, id = 'hw15',
    }
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
      ? downIcon
      : sort === up
          ? upIcon
          : noneIcon

  return (
      <span id={id + '-sort-' + value} onClick={onChangeCallback}>
        <img id={id + '-icon-' + sort} src={icon}/>
      </span>
  )
}

export default SuperSort
