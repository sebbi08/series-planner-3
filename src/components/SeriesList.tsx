'use client';
import React, { useEffect, useState } from 'react'
import { ISeries } from '../../models/series';

export const SeriesList = () => {

    const [allSeries, setAllSeries] = useState<Array<ISeries>>([]);

    const fetchSeries = async () => {
        const res = await fetch("/api/series");
        const data = await res.json();

        setAllSeries(data);
    }

    useEffect(() => {
        fetchSeries();
    },[])

    return (
        <div>

            {allSeries.map(series => {
                return (<div>
                    {series.name}
                </div>)
            })}
        </div>
    )
}
