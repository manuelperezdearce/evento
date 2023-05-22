import { Container } from "@mui/material"
import { ReactNode } from "react"

type Custom = {
    children: ReactNode,
    sliderTitle: string
}
export default function SliderContainer({ children, sliderTitle }: Custom) {
    return (
        <article>
            <h2>{sliderTitle}</h2>
            <Container sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 15rem),1fr))",
                gap: "1rem"
            }}>
                {children}
            </Container>
        </article>


    )
}