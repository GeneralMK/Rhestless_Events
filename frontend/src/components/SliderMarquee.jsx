import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import shuffle from "lodash.shuffle";

const photos = [
  {
    value: 2,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 3,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 4,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 5,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 6,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 7,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 8,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 9,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 10,
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    value: 12,
    image:
      "https://images.pexels.com/photos/4073982/pexels-photo-4073982.jpeg"
  },
  {
    value: 14,
    image:
      "https://images.pexels.com/photos/3048347/pexels-photo-3048347.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    value: 15,
    image:
      "https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    value: 16,
    image:
      "https://images.pexels.com/photos/3220090/pexels-photo-3220090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    value: 18,
    image:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    value: 19,
    image:
      "https://images.pexels.com/photos/2513841/pexels-photo-2513841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    value: 20,
    image:
      "https://images.pexels.com/photos/6224705/pexels-photo-6224705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    value: 21,
    image:
      "https://images.pexels.com/photos/10953423/pexels-photo-10953423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

const HEIGHT = 500;
const WIDTH = 600;
const SPACING = 10;
const COUNT = 5;
const Photo = styled.img`
  width: ${() => `${HEIGHT}px`};
  height: ${() => `${WIDTH}px`};
  border-radius: 0px;
  object-fit: cover;
  /* object-position: top; */
  /* box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.05), */
  /* 0 0px 20px 0px rgba(0, 0, 0, 0.2); */
  background-image: -moz-linear-gradient(
    rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 95%
  );

  margin: ${() => `${SPACING}px`};
`;

const Container = styled.div`
background-image: -moz-linear-gradient(
    rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 95%
  );
  /* padding: 20px; */
  /* overflow: hidden; */
  height: ${() => `${HEIGHT + SPACING * 2}px`};
  /* padding: ${() => `${SPACING}px 0`}; */
`;

const MainApp = styled.div`
  position: relative;
  top: -10%;
  left: -10%;
  flex: 1;
  /* display: flex; */
  text-align: center;
  /* justify-content: center;
  align-items: center; */
  align-self: center;
  width: 50vw;
  height: 200vh;
opacity:.3;

  transform: ${(props) => `rotate(${props.rotation}deg)`};
`;

const Rotations = styled.div`
  position: relative
  top: 10px;
  right: 10px;
  z-index: 1;
  padding: 10px;
  border-radius: 10px;

    0 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const Paragraph = styled.p`
  font-family: monospace;
  padding: 0 10px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
`;
const Button = styled.a`
  font-family: monospace;
  text-decoration: none;
  color: ${(props) => (props.selected ? "#000" : "#666")};
  font-size: ${(props) => (props.selected ? "32px" : "22px")};
  font-weight: 700;
  padding: 5px;
  margin: 5px;
`;

// const rotations = [45, 90, 135];
const rotations = [
  {
    label: "↖",
    value: 45
  },
  {
    label: "↑",
    value: 90
  },
  {
    label: "↗",
    value: 135
  }
];
export default function App() {
  const [rotation, setRotation] = React.useState(45);
  const items = React.useMemo(
    () => [...Array(COUNT).keys()].map((key) => shuffle(photos)),
    []
  );

  return (
    <>
      {/* <Rotations>
        <Paragraph>Rotation</Paragraph>
        {rotations.map((item) => {
          return (
            <Button
              href="#"
              onClick={() => setRotation(item.value)}
              selected={rotation === item.value}
            >
              {item.label}
            </Button>
          );
        })}
      </Rotations> */}
      <MainApp rotation={rotation}>
        {[...Array(COUNT).keys()].map((key) => {
          return (
            <Container key={key} style={{ marginLeft: (-key * WIDTH) / 2 }}>
              <Marquee
                direction={key % 2 === 0 ? "ltr" : "rtl"}
                key={`marquee-${key}`}
                velocity={Math.floor(Math.random() * 5) + 35}
                scatterRandomly={false}
              >
                {items[key].map(({ image, value }) => (
                  <div
                    style={{
                      transform: "rotate(-90deg)",
                      width: 800,
                      height: 368,
                      marginRight: SPACING * 2
                

                    }}
                  >
                    <Photo src={image} key={`marquee-${value}`} />
                  </div>
                ))}
              </Marquee>
            </Container>
          );
        })}
      </MainApp>
    </>
  );
}
