import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemMeta, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void
}

function ActivityList({ activities, selectActivity }: Props) {
    return (
        <Segment>
            <ItemGroup divided>
                {activities.map((activity) => (
                    <Item key={activity.id}>
                        <ItemContent>

                            <ItemHeader as='a'> {activity.title}</ItemHeader>
                            <ItemMeta> {activity.date}</ItemMeta>
                            <ItemDescription>
                                <div> {activity.description}</div>
                                <div> {activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floated="right" content='View' color="blue" onClick={() => selectActivity(activity.id)}/>
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    )
}

export default ActivityList