import { Link } from 'react-router-dom'
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react'

function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>  
                <Header as='h2' inverted content={`Welcome back User`} />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Go to activities!
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage