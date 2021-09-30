import React from 'react'
import {
    Tab,
    Tabs,
} from '@material-ui/core'
import { useRouter } from 'next/router'

export interface TabData {
    readonly link: string;
    readonly id: string;
    readonly title: JSX.Element
    readonly disabled?: boolean
}

export interface Props {
    readonly data: TabData[]
}

export const TabsView: React.FC<Props> = ({ data }) => {
    const router = useRouter()
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>
        router.push(data[newValue].link)

    return (
        <Tabs value={false}
            variant={'fullWidth'}
            centered={true}
            aria-label="lobby tabs example"
            onChange={handleChange}
        >
            {data.map(({
                id, title, disabled,
            }) => (
                <Tab label={title}
                    key={`lobby-tab-${id}`}
                    id={`lobby-tab-${id}`}
                    aria-controls={`simple-tabpanel-${id}`}
                    disabled={disabled}
                />
            ))}
        </Tabs>
    )
}
