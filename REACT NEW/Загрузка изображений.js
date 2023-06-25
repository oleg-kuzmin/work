<Card
  style={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
  onload={() => {
    setImageLoaded(true);
  }}
></Card>;
