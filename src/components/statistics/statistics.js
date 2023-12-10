import './statistics.scss';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const Statistics = ({ type, period, data }) => {
    const width = 1000;
    const height = 500;

    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Y axis
    const [min, max] = d3.extent(data, (d) => d[type]);
    const yScale = d3
        .scaleLinear()
        .domain([0, max || 0])
        .range([boundsHeight, 0]);

    // X axis
    const xScale = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date))
        .range([ 0, boundsWidth ]);

    // Render the X and Y axis using d3.js
    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll("*").remove();
        const xAxisGenerator = d3.axisBottom(xScale);
        svgElement
            .append("g")
            .attr("transform", "translate(0," + boundsHeight + ")")
            .call(xAxisGenerator);

        const yAxisGenerator = d3.axisLeft(yScale);
        svgElement.append("g").call(yAxisGenerator);
    }, [xScale, yScale, boundsHeight, type, period, data]);

    // Build the line
    const lineBuilder = d3
        .line()
        .x((d) => xScale(d.date))
        .y((d) => yScale(d[type]));
    const linePath = lineBuilder(data);
    if (!linePath) {
        return null;
    }

    return (
        <div id={'chart'}>
            <h2>{type.toUpperCase()} chart for the {period.toUpperCase()}</h2>
            <svg width={width} height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                >
                    <path
                        d={linePath}
                        opacity={1}
                        stroke="#9a6fb0"
                        fill="none"
                        strokeWidth={3}
                    />
                </g>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    ref={axesRef}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                />
            </svg>
        </div>
    )
}

export default Statistics;