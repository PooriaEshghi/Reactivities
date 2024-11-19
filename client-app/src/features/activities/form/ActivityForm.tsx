import React from 'react'
import { Button, Form, FormInput, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}

function ActivityForm({ closeForm, activity }: Props) {
    return (
        <Segment clearing>
            <Form>
                <FormInput placeholder={activity?.title} />
                <FormInput placeholder={activity?.description} />
                <FormInput placeholder='Category' />
                <FormInput placeholder='Date' />
                <FormInput placeholder='City' />
                <FormInput placeholder='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' onClick={closeForm} />
            </Form>
        </Segment>
    )
}

export default ActivityForm