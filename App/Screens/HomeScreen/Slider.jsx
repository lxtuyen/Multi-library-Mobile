import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

const Slider = () => {
    const [slider, setSlider] = useState();

    useEffect(()=>{
        getSliders()
    },[])
    const getSliders = () =>{
        GlobalApi.getSlider().then(res=>{
            setSlider(res?.sliders);
        })
    }
  return (
    <View>
      <Text style={styles.heading}>Slider</Text>
        <FlatList 
            data={slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>{
                <View style={{marginRight: 20}}>
                    <Image source={{uri:item?.image?.url}}
                        style={styles.sliderImage}
                    />
                </View>
            }}
        />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    heading:{
        fontSize: 20,
        marginBottom: 10,
    },
    sliderImage:{
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain'
    }
})