import React, {useRef, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import GlobalStyle from '../style/globalStyle';
import {tranNumber} from '../utils';
import {user, video} from '../mock';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width: screenWidth} = Dimensions.get('window');

export default Girls = ({route, navigation}) => {
  console.log('uid', route.params);
  const insets = useSafeAreaInsets(); // 安全区域
  const [refreshing, setRefreshing] = React.useState(false);
  const [info, setInfo] = React.useState({}); // 用户信息
  const [videoList, setVideoList] = useState([]); // 用户视频数据列表

  const userData = user;
  const videoData = video;

  useEffect(() => {
    // console.log('根据uid参数，获取用户基本信息数据');
    userData.forEach(item => {
      if (item.uid === route.params) {
        // console.log(item);
        setInfo(item);
      }
    });
    // console.log('根据uid参数，获取用户视频列表数据');
    let userVideoList = videoData.filter(item => item.uid === route.params);
    // console.log('userVideoList', userVideoList)
    setVideoList(userVideoList);
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyle.BackgroundColor}
      />
      <View
        style={{
          position: 'absolute',
          top: insets.top + 10,
          left: 10,
          zIndex: 9,
          padding: 10,
          borderRadius: 30,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
        <AntDesign
          name="left"
          size={20}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: GlobalStyle.BackgroundColor,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            title="Loading"
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setRefreshing(false);
            }}
          />
        }>
        {/* 横幅 */}
        <ImageBackground
          style={{width: screenWidth, height: 200, backgroundColor: '#eee'}}
          source={{uri: info.avatar}}
          resizeMode="cover"></ImageBackground>
        {/* 个人信息 */}
        <View>
          <Image
            style={{
              position: 'relative',
              top: -20,
              left: 10,
              height: 80,
              width: 80,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.1)',
              backgroundColor: 'white',
            }}
            resizeMode="cover"
            source={{uri: info.avatar}}
          />
          <Text
            style={{
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            {info.nickname}
          </Text>

          <View
            style={{
              height: 1,
              marginHorizontal: 10,
              marginVertical: 20,
              backgroundColor: '#eee',
            }}></View>

          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 20,
              fontSize: 18,
            }}>
            简介
          </Text>
          <Text style={{marginTop: 10, marginLeft: 20, fontSize: 14}}>
            {info.introduction}
          </Text>
        </View>
        {/* 作品 */}
        <View style={{marginTop: 30}}>
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
            作品
          </Text>
          <View
            style={{
              marginTop: 10,
              paddingBottom: insets.bottom,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {videoList.length > 0 ? (
              videoList.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    activeOpacity={1}
                    style={{
                      width: screenWidth / 3,
                      height: (screenWidth / 3) * 1.2,
                    }}
                    onPress={() => {}}>
                    <Image
                      style={{
                        width: '99%',
                        height: '99%',
                      }}
                      resizeMode="cover"
                      source={{uri: item.coverUrl}}
                    />
                    <View
                      style={{
                        position: 'relative',
                        bottom: 20,
                        left: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <AntDesign name="hearto" size={14} color="white" />
                      <Text style={{color: 'white', marginLeft: 2}}>
                        {tranNumber(item.likeNum, 1)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text style={{marginLeft: 20}}>无</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
