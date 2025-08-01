import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
      <Slider
          sx={{ // стили для слайдера // пишет студент
            width: '147px',
            color: '#00CC22',
            '& .MuiSlider-thumb': {
              width: '18px',
              height: '18px',
              backgroundColor: '#fff',
              border: '1px solid #00CC22',
              boxSizing: 'border-box',

              '&::before': {
                content: '""',
                position: 'absolute',
                boxShadow: 'none',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#00cc22',
                zIndex: 1,
              }
            },
            '& .MuiSlider-thumb: nth-of-type(1)': {
              position: 'relative'
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#8b8b8b',
              opacity: 1
            },
            '& .MuiSlider-track': {
              backgroundColor: '#00cc22'
            }
          }}
          {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
  )
}

export default SuperRange
