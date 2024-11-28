import { observer } from 'mobx-react-lite'
import {Segment, Header, Comment, Form, Button, CommentGroup, CommentAvatar, CommentContent, CommentMetadata, CommentAuthor} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{border: 'none'}}
            >
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached>
                <CommentGroup>
                    <Comment>
                        <CommentAvatar src='/assets/user.png'/>
                        <CommentContent>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <CommentMetadata>
                                <div>Today at 5:42PM</div>
                            </CommentMetadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </CommentContent>
                    </Comment>

                    <Comment>
                        <CommentAvatar src='/assets/user.png'/>
                        <CommentContent>
                            <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
                            <CommentMetadata>
                                <div>5 days ago</div>
                            </CommentMetadata>
                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </CommentContent>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </CommentGroup>
            </Segment>
        </>

    )
})
