import React from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'

function NavBar() {
  return (
    <Menu>
        <Container inverted fixed='top'>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activities' />
            <Menu.Item>
                <Button positive content='Create Activity' />
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default NavBar