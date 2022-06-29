import React from 'react'
import { UserConsumer } from './userContext'

export default function ComponentC() {
  return (
    <UserConsumer>
        {
            username => {
                return <div>Hello {username} Na Gap</div>
            }
        }
    </UserConsumer>
  )
}
