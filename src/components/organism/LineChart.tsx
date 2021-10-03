import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './LineChart.css';
// eslint-disable-next-line
const LineChart = (props: {
  description: string;
  title: string;
  loggingMethod: string;
}) => {
  // eslint-disable-next-line
  const loggingMethod = props.loggingMethod;

  const d3Chart = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 0, bottom: 50, left: 60 };
    const width =
      parseInt(d3.select('#d3demo').style('width'), 10) -
      margin.left -
      margin.right;
    const height =
      parseInt(d3.select('#d3demo').style('height'), 10) -
      margin.top -
      margin.bottom;

    // const points: Array<Array<number>>= []

 // eslint-disable-next-line
    const points:Array<Array<number>>= []
     // eslint-disable-next-line
    for (let index = 0; index < 11; index++) {
      // eslint-disable-next-line
      let Xelement = document.getElementById(`root_Thinning_Diameter_${index}`);
      // eslint-disable-next-line
      // @ts-ignore
      console.log(Xelement.value);
      // eslint-disable-next-line
      let Yelement = document.getElementById(`root_Thinning_Price_${index}`);
      // eslint-disable-next-line
      // @ts-ignore
      console.log(Yelement.value);
   // eslint-disable-next-line
      // @ts-ignore
      let arr:Array<number> = [Xelement.value, Yelement.value]   // eslint-disable-line
        // eslint-disable-next-line
      points.push(arr)
    }

    // console.log(array)
    // const points: Array<Array<number>> = [
    //   [5, 2000],
    //   [6, 3000],
    //   [15, 3000],
    //   [16, 8000],
    //   [18, 8000],
    //   [20, 9500],
    //   [22, 9500],
    //   [24, 11500],
    //   [28, 11500],
    //   [30, 12500],
    //   [40, 12500],
    // ];

    const svg = d3
      // eslint-disable-next-line
      // @ts-ignore
      .select(d3Chart.current)
      .attr('width', width + margin.left + margin.right + 20)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); // eslint-disable-line

    // x axis scale
    const x = d3
      .scaleLinear()
      .domain(
        // eslint-disable-next-line
        // @ts-ignore
        d3.extent(points, (d: Array<number>) => d[0]),
      )
      .range([0, width]);

    const max = d3.max(points, (d: Array<number>) => d[1]); // eslint-disable-line

    const y = d3
      .scaleLinear()
      // eslint-disable-next-line
      // @ts-ignore
      .domain([0, max])
      .range([height, 0]);

    const xAxis = d3.axisBottom(x).ticks(30);
    const yAxis = d3.axisLeft(y);

    const line = d3
      .line()
      .x((d) => x(d[0]))
      .y((d) => y(d[1]));

    const AxisRange: Array<Array<number>> = [
      [0, 0],
      [40, 20000],
    ];

    const focus = svg.append('g');
    // eslint-disable-next-line
    // @ts-ignore
    x.domain(d3.extent(AxisRange, (d: Array<Array<number>>) => d[0]));
    // eslint-disable-next-line
    // @ts-ignore
    y.domain(d3.extent(AxisRange, (d: Array<Array<number>>) => d[1]));

    focus
      .append('path')
      .datum(points)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      // eslint-disable-next-line
      // @ts-ignore
      .attr('d', line);

    // tooltip用div要素追加
    const tooltip = d3.select('body').append('div').attr('class', 'tooltip');

    focus
      .selectAll('circle')
      .data(points)
      .enter()
      .append('circle')
      .attr('r', 5.0)
      .attr('cx', (d: Array<number>) => x(d[0]))
      .attr('cy', (d: Array<number>) => y(d[1]))
      .style('cursor', 'pointer')
      .style('fill', 'steelblue')
      .attr('id', (d, i: number): string => `id-${i}`)
      .classed('cirStyle', true)
      .on('mouseover', (e, d: Array<number>) => {
        tooltip.style('visibility', 'visible').html(
          // eslint-disable-next-line
          '胸腔直径:' +
            Math.round(d[0] * 10) / 10 + // eslint-disable-line
            'cm' +
            '<br>金額: ' +
            Math.round(d[1] / 100) * 100 + // eslint-disable-line
            '円',
        );
      })
      .on('mousemove', (e, d: Array<number>) => {
        tooltip
          // eslint-disable-next-line
          // @ts-ignore
          .style('top', event.pageY - 20 + 'px') // eslint-disable-line
          // eslint-disable-next-line
          // @ts-ignore
          .style('left', event.pageX + 10 + 'px') // eslint-disable-line
          .html(
            // eslint-disable-next-line
            '胸腔直径:' +
              Math.round(d[0] * 10) / 10 + // eslint-disable-line
              'cm' +
              '<br>金額: ' +
              Math.round(d[1] / 100) * 100 + // eslint-disable-line
              '円',
          );
      })
      //  eslint-disable-next-line
      .on('mouseout', () => {
        tooltip.style('visibility', 'hidden');
      });

    focus
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    focus.append('g').attr('class', 'axis axis--y').call(yAxis);
    //  eslint-disable-next-line
    const dragstarted = () => {};

    function dragged(e: any, d: any) {
      //   // eslint-disable-next-line
      //  console.log(props.title)
      //   // eslint-disable-next-line
      //  console.log(props.loggingMethod)
      // eslint-disable-next-line
      // @ts-ignore
      focus.select('path').attr('d', line); // eslint-disable-line

      // eslint-disable-next-line
      // @ts-ignore
      d3.select(this).classed('dragging', true);
      // eslint-disable-next-line
      // @ts-ignore
      const idAsString = this.id; // eslint-disable-line
      const id = Number(idAsString.replace(/[^0-9]/g, '')); // eslint-disable-line
      // eslint-disable-next-line
      d[0] = Math.max(
        id !== 0 ? points[id - 1][0] : 0,
        Math.min(
          x.invert(e.x), // eslint-disable-line
          id !== points.length - 1 ? points[id + 1][0] : 40,
        ),
      );

      d[1] = Math.max(0, Math.min(y.invert(e.y), 20000)); // eslint-disable-line

      // eslint-disable-next-line
      // @ts-ignore
      d3.select(this).attr('cx', x(d[0])).attr('cy', y(d[1])); // eslint-disable-line

      tooltip
        .html(
          // eslint-disable-next-line
          '胸腔直径:' +
            Math.round(d[0] * 10) / 10 + // eslint-disable-line
            'cm' +
            '<br>金額: ' +
            Math.round(d[1] / 100) * 100 + // eslint-disable-line
            '円',
        )
        .style('visibility', 'visible')
        // eslint-disable-next-line
        // @ts-ignore
        .style('top', event.pageY - 20 + 'px') // eslint-disable-line
        // eslint-disable-next-line
        // @ts-ignore
        .style('left', event.pageX + 10 + 'px'); // eslint-disable-line
    }

    // eslint-disable-next-line
    function dragended(d: any) {
      // eslint-disable-next-line
      // @ts-ignore
      d3.select(this).classed('dragging', false);

      // eslint-disable-next-line
      // @ts-ignore
      const idAsString = this.id; // eslint-disable-line
      const id = String(idAsString.replace(/[^0-9]/g, '')); // eslint-disable-line
      const logging_Diameter_ID = `root_${loggingMethod}_Diameter_` + id; // eslint-disable-line
      const logging_Price_ID = `root_${loggingMethod}_Price_` + id; // eslint-disable-line

      // eslint-disable-next-line
      const logging_Diameter_Element =
        document.getElementById(logging_Diameter_ID); // eslint-disable-line
      const logging_Price_Element = document.getElementById(logging_Price_ID); // eslint-disable-line
      // eslint-disable-next-line
      // @ts-ignore
      logging_Diameter_Element.value = Math.round(d.subject[0] * 10) / 10; // eslint-disable-line
      // eslint-disable-next-line
      // @ts-ignore
      logging_Price_Element.value = Math.round(d.subject[1] / 100) * 100; // eslint-disable-line

      //  入力フォームの変更をreactに知らせる
      // eslint-disable-next-line
      // @ts-ignore
      logging_Diameter_Element._valueTracker.setValue(''); // eslint-disable-line
      // eslint-disable-next-line
      // @ts-ignore
      logging_Price_Element._valueTracker.setValue(''); // eslint-disable-line
      // eslint-disable-next-line
      logging_Diameter_Element!.dispatchEvent(
        new Event('input', { bubbles: true }),
      );

      // eslint-disable-next-line
      logging_Price_Element!.dispatchEvent(
        new Event('input', { bubbles: true }),
      );

      tooltip.style('visibility', 'hidden');
    }

    const drag = d3
      .drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);

    // eslint-disable-next-line
    // @ts-ignore
    focus.selectAll('circle').call(drag);

    // gridlines in x axis function
    const makeXGridlines = () => d3.axisBottom(x).ticks(5);

    // gridlines in y axis function
    const makeYGridlines = () => d3.axisLeft(y).ticks(5);
    // add the X gridlines
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + height + ')') // eslint-disable-line

      .call(
        makeXGridlines()
          .tickSize(-height)
          // eslint-disable-next-line
          // @ts-ignore
          .tickFormat(''),
      );
    // add the Y gridlines
    svg
      .append('g')
      .attr('class', 'grid')

      .call(
        makeYGridlines()
          .tickSize(-width)
          // eslint-disable-next-line
          // @ts-ignore
          .tickFormat(''),
      );

    //  軸ラベルの追加
    svg
      .append('text')
      .attr('class', 'axis--x')
      .attr('y', height + 40)
      .attr('x', width / 2)
      .attr('text-anchor', 'middle')
      .text('胸腔直径[cm]');

    svg
      .append('text')
      .attr('class', 'axis--y')
      .attr('y', height / 2)
      .attr('x', -50)
      .attr('text-anchor', 'middle')
      .attr('writing-mode', 'tb')
      .text('金額【円】');
  }, [loggingMethod]);

  return (
    <div id="d3demo">
      <div className="form-group lineChart">
        <div className="lineChartText">
          {/* eslint-disable-next-line */}
          <label className="control-label lineChartTitle">{props.title}</label>
          <p
            id="root_Thinning_LoggingPitch__description"
            className="field-description lineChartDescription"
          >
            {/* eslint-disable-next-line */}
            {props.description}
          </p>
        </div>
        {/* eslint-disable-next-line */}
        {/* @ts-ignore  */}
        <svg ref={d3Chart} />
      </div>
    </div>
  );
};

export default LineChart;
