import './statistics.scss';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import {datePipe} from "../../helpers/datePipe";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const Statistics = ({ type, period, data }) => {
    const width = 1000;
    const height = 500;
    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Будуємо вісь Y (вісь температури / вологості)
    const [min, max] = d3.extent(data, (d) => d[type]);
    const yScale = d3
        .scaleLinear()
        .domain([0, max || 0])
        .range([boundsHeight, 0]);

    // Будуємо вісь X (вісь часу)
    const xScale = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date))
        .range([ 0, boundsWidth ]);

    // Рендеримо осі X та Y
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

        // Додаємо підпис осі X
        svgElement.append("text")
            .attr("text-anchor", "end")
            .attr("x", width - 70)
            .attr("y", height - 30)
            .style("fill", d => "#9a6fb0")
            .text('date'.toUpperCase() + ' axis ➜');

        // Додаємо підпис осі Y
        svgElement.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -MARGIN.left+10)
            .attr("x", -MARGIN.top + 30)
            .style("fill", d => "#9a6fb0")
            .text(type.toUpperCase() + ' axis ➜');

        // Додаємо підписи до точок на графіку
        // При кліку на точку з'являється підпис значень в цій точці
        const tooltip = svgElement.selectAll("circle")
            .data(data)
            .enter();
        tooltip.append("text")
            .attr("x", d => xScale(d.date))
            .attr("y", d => yScale(d[type]))
            .style("font-size", 14)
            .style("opacity", 0)
            .text(d => `${d[type]}${type === 'temperature' ? '°C' : '%'}; ${datePipe(d.date, period)}`)
            .on("click", e => {
                e.target.style.opacity = Number(e.target.style.opacity) === 1 ? 0 : 1;

            });

    }, [xScale, yScale, boundsHeight, type, period, data]);

    // Будуємо лінійний графік
    const lineBuilder = d3
        .line()
        .x((d) => xScale(d.date))
        .y((d) => yScale(d[type]));
    const linePath = lineBuilder(data);
    if (!linePath) {
        return null;
    }

    // Додаємо точки на лінії графіку
    const allCircles = data.map((item, i) => {
        console.log()
        return (
            <circle
                key={i}
                cx={xScale(item.date)}
                cy={yScale(item[type])}
                r={4}
                fill={"#9a6fb0"}
            />
        );
    });
  
    return (
        <div id={'chart'}>
            <h2>{type.toUpperCase()} chart for the {period.toUpperCase()}</h2>
            <svg  width={'100%'} height={'100%'}>
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
                    {allCircles}
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