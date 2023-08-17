'use client';
import React, { useEffect, useState } from 'react'
import { ISeries } from '../../models/series';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const SeriesList = () => {

    const [allSeries, setAllSeries] = useState<Array<ISeries>>([]);

    const fetchSeries = async () => {
        const res = await fetch("/api/series");
        const data = await res.json();

        setAllSeries(data);
    }

    useEffect(() => {
        fetchSeries();
    }, [])

    return (
        <div>
            {allSeries.map(series => {
                return (<Card className='mt-4'>
                    <CardHeader>
                        <CardTitle>
                            {series.name}
                        </CardTitle>
                        <CardContent>
                            <div>{series.season} : {series.episode}</div>
                        </CardContent>
                    </CardHeader>
                </Card>)
            })}
        </div>
    )
}
