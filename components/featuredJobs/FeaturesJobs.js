import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import FeatureJob from './FeatureJob'; // Nhập lại Component FeatureJob đã sửa ở trên

const FeaturesJobs = (props) => {
    return (
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
                    Featured Jobs
                </Text>
                <Text style={{ textAlign: 'center', marginBottom: 20 }}>
                    Explore thousands of job opportunities with all the information you need. It's your future.
                </Text>
            </View>

            {/* Scroll view for mobile, grid layout for desktop */}
            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {props.dataFeature.map((data) => (
                    <TouchableOpacity key={data.id} onPress={() => navigation.navigate('JobDetails', { jobId: data.id })}>
                        <FeatureJob data={data} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default FeaturesJobs;
