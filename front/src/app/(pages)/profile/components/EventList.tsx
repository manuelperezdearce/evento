import { Stack } from "@mui/material";
import CardEventList from "./CardEventList";

export default function EventList() {
    return (
        <Stack spacing={2}>
            {Array(8).fill(0).map((event) => {
                return (
                    <CardEventList />
                )
            })}
        </Stack >
    )
}