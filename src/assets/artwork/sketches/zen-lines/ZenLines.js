import React from 'react';
import styled, { withTheme } from 'styled-components';
import * as p5 from 'p5';

const Frame = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

class ZenLines extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    const { theme } = this.props;

    let dots = [];
    let lines = [];
    const numDots = 5;
    const gridSpacing = 32;
    const colors = ["#3A4276", "#6457A6", "#C4A7E7"];

    class Dot {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = p.color(color);
      }

      display() {
        p.fill(this.color);
        p.noStroke();
        p.circle(this.x, this.y, 4);
      }
    }

    class Line {
      constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.length = 0;
        this.color = p.color(color);
        this.speed = p.random(0.2, 3);
      }

      update() {
        this.length += this.speed;
      }

      display() {
        p.stroke(this.color);
        p.strokeWeight(1);
        if (this.direction === 'right') {
          p.line(this.x, this.y, this.x + this.length, this.y);
        } else if (this.direction === 'left') {
          p.line(this.x, this.y, this.x - this.length, this.y);
        } else if (this.direction === 'down') {
          p.line(this.x, this.y, this.x, this.y + this.length);
        } else if (this.direction === 'up') {
          p.line(this.x, this.y, this.x, this.y - this.length);
        }
      }
    }

    function addIntersection(x, y) {
      if (!dots.some(dot => dot.x === x && dot.y === y)) {
        let newDot = new Dot(x, y, p.random(colors));
        dots.push(newDot);
        lines.push(new Line(x, y, 'right', p.random(colors)));
        lines.push(new Line(x, y, 'left', p.random(colors)));
        lines.push(new Line(x, y, 'down', p.random(colors)));
        lines.push(new Line(x, y, 'up', p.random(colors)));
      }
    }

    function resetCanvas() {
      dots = [];
      lines = [];
      let usedX = new Set();
      let usedY = new Set();

      for (let i = 0; i < numDots; i++) {
        let x, y;

        // Ensure unique x coordinate
        do {
          x = Math.round(p.random(p.width) / gridSpacing) * gridSpacing;
        } while (usedX.has(x));

        // Ensure unique y coordinate
        do {
          y = Math.round(p.random(p.height) / gridSpacing) * gridSpacing;
        } while (usedY.has(y));

        usedX.add(x);
        usedY.add(y);

        let color = p.random(colors);
        let dot = new Dot(x, y, color);
        dots.push(dot);
        lines.push(new Line(x, y, 'right', color));
        lines.push(new Line(x, y, 'left', color));
        lines.push(new Line(x, y, 'down', color));
        lines.push(new Line(x, y, 'up', color));
      }
    }

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      resetCanvas();
    };

    p.draw = () => {
      p.background(255, 255, 255);

      // Draw background grid
      p.stroke('rgba(0, 0, 0, 0.05)');
      p.strokeWeight(1);
      for (let x = 0; x < p.width; x += gridSpacing) {
        p.line(x, 0, x, p.height);
      }
      for (let y = 0; y < p.height; y += gridSpacing) {
        p.line(0, y, p.width, y);
      }

      lines.forEach(line => {
        line.update();
        line.display();
      });

      dots.forEach(dot => {
        dot.display();
      });

      // Check for intersections
      lines.forEach(line1 => {
        lines.forEach(line2 => {
          if (line1 !== line2 && line1.direction !== line2.direction) {
            if (line1.direction === 'right' && line2.direction === 'down') {
              if (
                line1.x + line1.length >= line2.x &&
                line1.x <= line2.x &&
                line2.y + line2.length >= line1.y &&
                line2.y <= line1.y
              ) {
                addIntersection(line2.x, line1.y);
              }
            } else if (line1.direction === 'right' && line2.direction === 'up') {
              if (
                line1.x + line1.length >= line2.x &&
                line1.x <= line2.x &&
                line2.y - line2.length <= line1.y &&
                line2.y >= line1.y
              ) {
                addIntersection(line2.x, line1.y);
              }
            } else if (line1.direction === 'left' && line2.direction === 'down') {
              if (
                line1.x - line1.length <= line2.x &&
                line1.x >= line2.x &&
                line2.y + line2.length >= line1.y &&
                line2.y <= line1.y
              ) {
                addIntersection(line2.x, line1.y);
              }
            } else if (line1.direction === 'left' && line2.direction === 'up') {
              if (
                line1.x - line1.length <= line2.x &&
                line1.x >= line2.x &&
                line2.y - line2.length <= line1.y &&
                line2.y >= line1.y
              ) {
                addIntersection(line2.x, line1.y);
              }
            } else if (line1.direction === 'down' && line2.direction === 'right') {
              if (
                line2.x + line2.length >= line1.x &&
                line2.x <= line1.x &&
                line1.y + line1.length >= line2.y &&
                line1.y <= line2.y
              ) {
                addIntersection(line1.x, line2.y);
              }
            } else if (line1.direction === 'down' && line2.direction === 'left') {
              if (
                line2.x - line2.length <= line1.x &&
                line2.x >= line1.x &&
                line1.y + line1.length >= line2.y &&
                line1.y <= line2.y
              ) {
                addIntersection(line1.x, line2.y);
              }
            } else if (line1.direction === 'up' && line2.direction === 'right') {
              if (
                line2.x + line2.length >= line1.x &&
                line2.x <= line1.x &&
                line1.y - line1.length <= line2.y &&
                line1.y >= line2.y
              ) {
                addIntersection(line1.x, line2.y);
              }
            } else if (line1.direction === 'up' && line2.direction === 'left') {
              if (
                line2.x - line2.length <= line1.x &&
                line2.x >= line1.x &&
                line1.y - line1.length <= line2.y &&
                line1.y >= line2.y
              ) {
                addIntersection(line1.x, line2.y);
              }
            }
          }
        });
      });
    };

    p.mousePressed = () => {
      resetCanvas();
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      resetCanvas();
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  componentDidUpdate() {
    this.myP5.remove();
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  componentWillUnmount() {
    this.myP5.remove();
  }

  render() {
    return (
      <Frame className="p5Canvas" ref={this.myRef} />
    );
  }
}

export default withTheme(ZenLines);