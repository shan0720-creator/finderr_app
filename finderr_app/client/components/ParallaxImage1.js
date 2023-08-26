import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Angrish',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://res.cloudinary.com/dxwk1owoq/image/upload/v1688313410/Angrish_inwtw5.png',
  },
  {
    title: 'Bunaai',
   
    illustration: 'https://res.cloudinary.com/dxwk1owoq/image/upload/v1688313403/Bunaii_wyksee.png',
  },
  {
    title: 'Chrisalis',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://res.cloudinary.com/dxwk1owoq/image/upload/v1688313403/Chrisalis_2_gpxyfo.png',
  },
  {
    title: 'Cottons',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://res.cloudinary.com/dxwk1owoq/image/upload/v1688313405/Cottons_2_rccd00.png',
  },
  {
    title: 'Daabu',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://res.cloudinary.com/dxwk1owoq/image/upload/v1688313405/Daabu_g4dfig.png',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
          
          
        />
          <Text className="font-base mt-3 font-semibold text-cyan-500" numberOfLines={2}>
          {item.title}
        </Text>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
       
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 30
  },
  item: {
    width: 275,
    height: 275
  },
  imageContainer: {
    flex: 1,
    // Prevent a random Android rendering issue
    backgroundColor: 'black',
    borderRadius: 8,
    opacity:0.7,
    marginRight:10
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
     
  },

  title:{
     
  }
});
