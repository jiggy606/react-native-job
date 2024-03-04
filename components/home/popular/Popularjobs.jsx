import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import PopularJobCard from '@/components/common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '@/constants'
// import { useFilterScreenChildren } from 'expo-router/build/layouts/withLayoutContext'

import apiStuff from '../../../hook/useFetch'

// import useFar from '../../../hook/useFar'

const Popularjobs = () => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  const { error, isLoading, data } = apiStuff(
    'search', {
      query: 'React Developer',
      num_pages: 1
    }
  )

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  // console.log(data);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={{paddingTop: 20}}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error  ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data ={data}
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs