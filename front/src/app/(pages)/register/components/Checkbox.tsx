import React from 'react';
import { FormControlLabel, FormGroup, Checkbox } from '@mui/material';

type checkboxData = {
    name: string,
    label: string,
    required: boolean
}


export default function Checkboxes({ name, label, required }: checkboxData) {
    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };

    return (

        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        required={required}
                        name={name}
                        value={true}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}

                    />
                }
                label={label}
            />
        </FormGroup>

    );
}