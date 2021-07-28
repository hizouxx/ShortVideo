import React, {useEffect, useState, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import BottomSheet from 'reanimated-bottom-sheet';
import GlobalStyle from '../style/globalStyle';
import {tranNumber, shuffle} from '../utils';
import {video, review} from '../mock';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default Girls = ({route, navigation}) => {
  const insets = useSafeAreaInsets(); // 安全区域
  const sheetRef = useRef(null); // 评论底部弹框

  const [paused, setPaused] = useState(false); // 暂停
  const [like, setLike] = useState(true); // 点赞
  const [viewHeight, setViewHeight] = useState(0); // 高度
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // 当前页
  const [videoData, setVideoData] = useState([]); // 视频数据列表
  const [videoReviewData, setVideoReviewData] = useState([]); // 当前视频的评论数据

  /**
   * 获取当前视频的评论数据
   * @param {rids} 评论列表
   */
  const getReviewData = rids => {
    // 评论数据库
    const reviewData = review;
    setVideoReviewData(reviewData.filter(i => rids.includes(i.rid)));
  };

  useEffect(() => {
    // console.log('获取视频数据！');
    setVideoData(shuffle(video));
  }, []);

  return (
    <>
      {/* 状态栏 */}
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" />
      <View
        style={{
          position: 'absolute',
          top: insets.top,
          zIndex: 99,
          width: screenWidth,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            margin: 10,
          }}
          source={require('../assets/images/logo.png')}
        />
        <Foundation
          style={{padding: 10}}
          name="torso"
          size={30}
          color="white"
          onPress={() => {
            navigation.navigate('User', 0);
          }}
        />
      </View>

      {/* 视频列表 */}
      <FlatList
        data={videoData}
        pagingEnabled // 实现分页滚动
        bounces={false} // 如果内容范围比滚动视图本身大，在到达内容末尾的时候，可以弹性地拉动一截
        showsVerticalScrollIndicator={false} // 隐藏一个垂直方向的滚动条
        scrollsToTop={false} // 关闭【点击状态栏的时候视图会滚动到顶部】效果
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{backgroundColor: GlobalStyle.BackgroundColor}}
              activeOpacity={1}
              onPress={() => {
                setPaused(paused ? false : true);
              }}>
              <Video
                source={{uri: item.url}}
                repeat
                paused={paused || currentPageIndex !== index}
                resizeMode="cover"
                style={{height: viewHeight}}
              />
              {paused ? (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    height: viewHeight,
                    width: screenWidth,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    style={{marginTop: 20}}
                    name="play"
                    size={80}
                    color="rgba(255,255,255,0.5)"
                  />
                </View>
              ) : null}
              <View
                style={{
                  position: 'absolute',
                  top: '40%',
                  right: 10,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('User', item.uid);
                  }}>
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      borderWidth: 1,
                      borderColor: '#eee',
                    }}
                    source={{uri: item.avatar}}
                  />
                </TouchableOpacity>

                {/* 点赞 */}
                <Foundation
                  style={{marginTop: 20}}
                  name="heart"
                  size={40}
                  color={like ? GlobalStyle.ThemeColor : 'white'}
                  onPress={() => {
                    // console.log(2);
                    setLike(like ? false : true);
                  }}
                />
                <Text style={{color: 'white'}}>
                  {tranNumber(item.likeNum, 1)}
                </Text>
                {/*  评论 */}
                <AntDesign
                  style={{marginTop: 20}}
                  name="message1"
                  size={30}
                  color="white"
                  onPress={() => {
                    sheetRef.current.snapTo(0);
                    getReviewData(item.review);
                  }}
                />
                <Text style={{color: 'white'}}>
                  {tranNumber(item.review.length, 1)}
                </Text>
                {/* 分享 */}
                <Ionicons
                  style={{marginTop: 20}}
                  name="arrow-redo"
                  size={35}
                  color="white"
                  onPress={() => {
                    Alert.alert('In development');
                  }}
                />
                <Text style={{color: 'white'}}>
                  {tranNumber(item.shareNum, 1)}
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: insets.bottom + 30,
                  left: 0,
                  width: screenWidth,
                }}>
                {/* 昵称 */}
                <Text
                  numberOfLines={1}
                  style={{
                    color: 'white',
                    marginHorizontal: 10,
                    lineHeight: 36,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  @{item.nickname}
                </Text>
                {/* 标题 */}
                <Text
                  numberOfLines={2}
                  style={{
                    color: 'white',
                    marginHorizontal: 10,
                    lineHeight: 20,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          setViewHeight(height);
        }}
        onScroll={event => {
          const offsetY = event.nativeEvent.contentOffset.y;
          if (viewHeight > 0) {
            const pageIndex = Math.ceil(offsetY / viewHeight);
            if (pageIndex !== currentPageIndex) {
              setCurrentPageIndex(pageIndex);
              setPaused(false);
              // console.log('pageIndex', pageIndex);
            }
          }
        }}
      />

      {/* 评论底部划框 */}
      <BottomSheet
        ref={sheetRef}
        initialSnap={1}
        snapPoints={[screenHeight, 0]}
        borderRadius={10}
        enabledGestureInteraction={false}
        renderHeader={() => {
          return (
            <TouchableOpacity
              style={{
                height: screenHeight - 450,
              }}
              onPress={() => sheetRef.current.snapTo(1)}></TouchableOpacity>
          );
        }}
        renderContent={() => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                height: 450,
              }}>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    lineHeight: 40,
                    fontWeight: 'bold',
                  }}>
                  {videoReviewData.length}条评论
                </Text>
                <AntDesign
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: 10,
                  }}
                  name="close"
                  size={20}
                  color="#aaa"
                  onPress={() => sheetRef.current.snapTo(1)}
                />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {videoReviewData.length > 0 &&
                  videoReviewData.map((item, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          marginVertical: 10,
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{
                            height: 40,
                            width: 40,
                            marginHorizontal: 10,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#eee',
                          }}
                          source={{uri: item.avatar}}
                        />
                        <View style={{flexGrow: 1, flexShrink: 1}}>
                          <Text style={{fontSize: 12, color: '#999'}}>
                            {item.nickname}
                          </Text>
                          <Text
                            numberOfLines={3}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginTop: 5,
                            }}>
                            {item.content}
                          </Text>
                        </View>

                        <Foundation
                          style={{margin: 15}}
                          name="heart"
                          size={20}
                          color="#ccc"
                        />
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          );
        }}
      />
    </>
  );
};
