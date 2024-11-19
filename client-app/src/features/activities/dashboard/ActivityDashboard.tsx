import { Grid, GridColumn, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from '../detailes/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

function ActivityDashboard({ activities, selectedActivity, cancelSelectActivity, selectActivity, editMode, openForm, closeForm }: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&

                    <ActivityDetails 
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm} />
                }
                {editMode && 
                <ActivityForm closeForm={closeForm} activity={selectedActivity}/>
                }
            </GridColumn>
        </Grid>
    )
}

export default ActivityDashboard