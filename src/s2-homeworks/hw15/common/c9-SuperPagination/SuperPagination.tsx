import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
      page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

  const onChangeCallback = (_event: React.ChangeEvent<unknown>, page: number) => {
    // пишет студент
    onChange(page, itemsCountForPage)
  }

  const onChangeSelect = (option: number) => {
    // пишет студент
    onChange(page, option)
  }

  return (
      <div className={s.pagination}>
        <Pagination
            id={id + '-pagination'}
            sx={{
              // стили для Pagination // пишет студент
              '& .MuiPaginationItem-root': {
                color: '#000',
                fontSize: '14px',
                backgroundColor: 'transparent',
                borderRadius: '2px',
                fontFamily: '\'Roboto Variable\', sans-serif',
                '&:hover': {
                  backgroundColor: 'rgba(0,102,204, 0.1)'
                }
              },
              '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: 'rgba(0, 102, 204, 1)',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(0, 102, 204, 1)',
                }
              }
            }}
            page={page}
            count={lastPage}
            onChange={onChangeCallback}
            hideNextButton
            hidePrevButton
        />

        <span className={s.text1}>
                показать
            </span>

        <SuperSelect
            id={id + '-pagination-select'}
            value={itemsCountForPage}
            options={[
              {id: 4, value: '4'},
              {id: 7, value: '7'},
              {id: 10, value: '10'},
            ]}
            onChangeOption={onChangeSelect}
        />

        <span className={s.text2}>
                строк в таблице
            </span>
      </div>
  )
}

export default SuperPagination
