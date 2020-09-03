import React, { useState } from 'react'

import { Header, List } from './styles'

import { IDropDownProps } from './types'

const DropDown: React.FC<IDropDownProps> = ({
  data = [],
  onGetValue = () => {},
  defaultValue = '',
}) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Header onClick={() => setEnabled(!enabled)}>
        {data.find(({ value }) => value === defaultValue).label || 'Select'}
      </Header>
      <List.Wrapper>
        {enabled && (
          <List.Container>
            {data?.map(({ label, value }) => (
              <List.Item
                key={value}
                onClick={() => onGetValue({ label, value })}
              >
                {label}
              </List.Item>
            ))}
          </List.Container>
        )}
      </List.Wrapper>
    </>
  )
}

export default DropDown
