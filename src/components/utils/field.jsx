import React, { forwardRef, useId, useRef, useState } from 'react'
import classNames from 'classnames'
import { Cancel, Warning } from '../icons'

const Field = forwardRef(
  (
    {
      variant,
      title = 'موضوع ورودی',
      guide = '',
      type = 'text',
      placeholder = 'یک متن آزمایشی',
      className,
      field = 'input',
      isDisabled = false,
      error = '',
      ...props
    },
    ref
  ) => {
    const id = useId()
    const boxRef = useRef(null)
    const [clearStatus, setClearStatus] = useState(false)
    const [focusStatus, setFocusStatus] = useState(false)

    // handle toggle clear btn,
    // handle border in success state
    const handleInput = (focus) => {
      const input = boxRef?.current.querySelector('.field-box__item')
      if (input.value && (focusStatus || focus)) {
        setClearStatus(true)
      } else {
        setClearStatus(false)
      }
      if (boxRef?.current.classList.contains('field-box--success')) {
        boxRef?.current.classList.remove('field-box--success')
      }
      if (focus) {
        setFocusStatus(true)
      }
    }

    // handle clear action for remove value
    const handleClear = (e) => {
      e.preventDefault()
      const input = boxRef?.current.querySelector('.field-box__item')
      if (input) {
        input.value = ''
        input.focus()
        setClearStatus(false)
      }
    }

    // handle input box style when it has valid value
    const handleBlur = (e) => {
      const btn = e.relatedTarget
      console.log(btn)
      const input = boxRef?.current.querySelector('.field-box__item')
      if (input.value && !error) {
        boxRef?.current.classList.add('field-box--success')
      }
      if (input.value && !btn?.classList.contains('field-box__clear')) {
        setClearStatus(false)
      }
      setFocusStatus(false)
    }

    const classes = classNames(
      'field',
      { [`field-${variant}`]: variant },
      { ['field--disable']: isDisabled },
      className
    )

    const boxClasses = classNames(
      'field-box',
      { ['field-box--error']: error },
      { ['field-box--disable']: isDisabled }
    )

    const errorBoxClasses = classNames('field-error', {
      ['field-error--disable']: isDisabled,
    })
    const fieldClasses = classNames('field-box__item', {
      ['field-box__item--disable']: isDisabled,
    })

    return (
      <div className={classes}>
        <div className='field-header'>
          <label htmlFor={id}>{title}</label>
          {guide ? guide : ''}
        </div>
        <label htmlFor={id} ref={boxRef} className={boxClasses}>
          {field === 'input' ? (
            <input
              {...props}
              className={fieldClasses}
              autoComplete='off'
              placeholder='یک متن آزمایشی'
              ref={ref}
              id={id}
              type={type}
              onInput={() => {
                handleInput(false)
              }}
              onFocus={() => {
                handleInput(true)
              }}
              onBlur={handleBlur}
              disabled={isDisabled}
            />
          ) : (
            <textarea
              {...props}
              className={fieldClasses}
              autoComplete='off'
              placeholder='یک متن آزمایشی'
              ref={ref}
              id={id}
              type={type}
              onInput={() => {
                handleInput(false)
              }}
              onFocus={() => {
                handleInput(true)
              }}
              onBlur={handleBlur}
              disabled={isDisabled}
              rows='6'
              maxLength={240}
            ></textarea>
          )}
          <button
            tabIndex={-1}
            onClick={handleClear}
            className={`field-box__clear ${clearStatus ? '' : 'invisible'}`}
          >
            {clearStatus ? <Cancel className='animate-fade-in w-4' /> : ''}
          </button>
        </label>
        {error ? (
          <div className={errorBoxClasses}>
            {Warning()}
            {error}
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
)

export default Field
