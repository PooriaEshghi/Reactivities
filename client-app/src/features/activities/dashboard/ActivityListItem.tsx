import { SyntheticEvent, useState } from 'react'
import { Button, Icon, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemImage, ItemMeta, Label, Segment, SegmentGroup } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { Link } from 'react-router-dom'
import { useStore } from '../../../app/stores/store'

interface Props {
    activity: Activity
}

function ActivityListItem({ activity }: Props) {
    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;
    const [target, setTarget] = useState('');
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id)
    }
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <ItemImage size="tiny" circular src='/assets/user.png' />
                        <ItemContent>
                            <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </ItemHeader>
                            <ItemDescription>Hosted By Bob</ItemDescription>
                        </ItemContent>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'>{activity.date}</Icon>
                    <Icon name='marker'>{activity.venue}</Icon>
                </span>
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                as={Link}
                to={`/activities/${activity.id}`}
                color='teal'
                floated='right'
                content='View'
                ></Button>
            </Segment>
        </SegmentGroup>
    )
}

export default ActivityListItem