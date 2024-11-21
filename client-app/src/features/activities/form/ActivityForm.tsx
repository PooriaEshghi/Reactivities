import { ChangeEvent, useState } from 'react'
import { Button, Form, FormInput, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit:(activity: Activity) => void;
    submitting:boolean;
}

function ActivityForm({ closeForm, activity: selectedActivity, createOrEdit, submitting }: Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
        isCancelled: false
    }
    
    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity)

    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <FormInput placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <FormInput placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <FormInput placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <FormInput placeholder='Date' type='date' value={activity.date} name='date' onChange={handleInputChange} />
                <FormInput placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <FormInput placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' onClick={closeForm} />
            </Form>
        </Segment>
    )
}

export default ActivityForm