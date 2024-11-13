import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Sử dụng icon từ react-native-vector-icons (có thể chọn từ bất kỳ bộ icon nào, ở đây dùng Feather)
import moment from 'moment';

const FeatureJob = (props) => {
    const navigation = useNavigation();

    const handleSplitTime = (time) => {
        return moment(new Date(+time)).fromNow();
    };

    const { userPostData, postDetailData, timePost, id } = props.data;
    const company = userPostData.userCompanyData;

    return (
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15 }}>
            <Image
                source={{ uri: company.thumbnail }}
                style={{ width: 50, height: 50, marginBottom: 10 }}
                alt={postDetailData.name}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>
                {postDetailData.name}
            </Text>
            <Text style={{ color: 'gray', marginBottom: 10 }}>
                {company.name}
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={{ color: '#1D72B8', fontSize: 12, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderColor: '#1D72B8', marginRight: 5 }}>
                    {postDetailData.workTypePostData.value}
                </Text>
                <Text style={{ color: '#1D72B8', fontSize: 12, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderColor: '#1D72B8', marginRight: 5 }}>
                    {postDetailData.jobLevelPostData.value}
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ flexDirection: 'row', alignItems: 'center', color: '#6B7280', fontSize: 12, marginRight: 15 }}>
                    <Icon name="map-pin" size={20} style={{ marginRight: 5 }} /> {postDetailData.provincePostData.value}
                </Text>
                <Text style={{ flexDirection: 'row', alignItems: 'center', color: '#6B7280', fontSize: 12, marginRight: 15 }}>
                    <Icon name="dollar-sign" size={20} style={{ marginRight: 5 }} /> Salary: {postDetailData.salaryTypePostData.value}
                </Text>
                <Text style={{ flexDirection: 'row', alignItems: 'center', color: '#6B7280', fontSize: 12 }}>
                    <Icon name="clock" size={20} style={{ marginRight: 5 }} /> Time: {handleSplitTime(timePost)}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('JobDetails', { jobId: id })}
                style={{
                    marginTop: 15,
                    backgroundColor: '#9873FF',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FeatureJob;
