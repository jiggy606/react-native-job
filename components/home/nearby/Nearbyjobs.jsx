import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import NearbyJobCard from '@/components/common/cards/nearby/NearbyJobCard'

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '@/constants'
// import { useFilterScreenChildren } from 'expo-router/build/layouts/withLayoutContext'

import apiStuff from '../../../hook/useFetch'

// import useFar from '../../../hook/useFar'

const NearbyJobs = () => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  const { error, isLoading, data } = apiStuff(
    'search', {
      query: 'React Developer',
      num_pages: 1
    }
  )


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error  ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs