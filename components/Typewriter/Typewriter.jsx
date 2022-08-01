import TypeAnimation from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
    cursor={true}
    sequence={[
        " Calvin Donaldson",4000," Web Developer", 4000," Self-taught", 4000
    ]}
      wrapper="span"
      repeat={Infinity}
      className={"colorTheme"}
    />
  );
};

export default Typewriter