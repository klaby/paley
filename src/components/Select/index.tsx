import React, { useState } from 'react'

import { Header, List } from './styles'

import { ISelectProps, TData } from './types'

const Select: React.FC<ISelectProps> = ({
  data = [],
  onGetValue = () => {},
  defaultValue = '',
}) => {
  const [enabled, setEnabled] = useState(false)

  /**
   * @function getData
   *
   * Get selected data.
   *
   * @param {TData} data
   */
  const getData = (data: TData) => {
    onGetValue(data)
    setEnabled(false)
  }

  return (
    <>
      <Header onClick={() => setEnabled(!enabled)}>
        {data.find(({ value }) => value === defaultValue).label || 'Select'}
      </Header>
      <List.Wrapper>
        {enabled && (
          <List.Container>
            {data?.map(({ label, value }) => (
              <List.Item key={value} onClick={() => getData({ label, value })}>
                {label}
              </List.Item>
            ))}
          </List.Container>
        )}
      </List.Wrapper>
    </>
  )
}

export default Select
