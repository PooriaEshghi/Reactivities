import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemMeta, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


function ActivityList() {
    const { activityStore } = useStore();
    const { selectActivity, deleteActivity, loading, activitiesByDate} = activityStore;
    const [target, setTarget] = useState('');
    function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteActivity(id)
    }
    return (
        <Segment>
            <ItemGroup divided>
                {activitiesByDate.map((activity, index) => (
                    <Item key={index}>
                        <ItemContent>

                            <ItemHeader as='a'> {activity.title}</ItemHeader>
                            <ItemMeta> {activity.date}</ItemMeta>
                            <ItemDescription>
                                <div> {activity.description}</div>
                                <div> {activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floated="right" content='View' color="blue" onClick={() => selectActivity(activity.id)}/>
                                <Button name={activity.id} loading={loading && target === activity.id} floated="right" content='Delete' color="red" onClick={(e) => handleActivityDelete(e, activity.id)}/>
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    )
}

export default observer(ActivityList)