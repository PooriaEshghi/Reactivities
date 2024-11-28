import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, Segment, SegmentGroup } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

interface Props {
    activity: Activity
}

function ActivityListItem({ activity }: Props) {
    
    
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
                    <Icon name='clock'>{format(activity.date!, 'dd MMM yyyy h:mm aa')}</Icon>
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