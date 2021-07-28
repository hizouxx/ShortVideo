/**
 * uid:(User Id) 用户id
 * vid:(Video Id) 短视频id
 * rid:(Review Id) 评论id
 */

// 用户数据
const user = [
  {
    uid: 0,
    nickname: 'User001',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/logo.png',
    introduction: '无',
    video: [],
  },
  {
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    introduction: '承蒙厚爱，不胜感激。越努力越幸运 爱笑的女孩运气不会太差。',
    video: [1001, 1002, 1003, 1004, 1006, 1007, 1008],
  },
  {
    uid: 2,
    nickname: '栗子🌰',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    introduction: '时间不会亏待任何一个努力的人！',
    video: [2001, 2002, 2003],
  },
  {
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    introduction:
      '愿每一个女孩都可以温柔且善良。身高165，体重90。姓名：顾亚茹。别名：太阳。微博：我的亚茹啊。一个开起来很舒服的女孩纸。无公司无团队视频均自己制作。感谢大家的关注和小红心。呈现的各种样子只因娱乐 勿喷！接推广合作～',
    video: [3001, 3002, 3003, 3005, 3006, 3007, 3008],
  },
  {
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    introduction: '一个卧虎藏龙的联通神秘组织',
    video: [4001, 4002, 4004, 4005, 4006, 4007, 4008],
  },
];

// 视频数据
const video = [
  {
    vid: 1001,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127109549-1edaa36e-2600-4fba-9fc0-040535493f8e.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title: '大数据懂你🙈@DOU+小助手 #抖音热门 #dou来跳舞',
    likeNum: 1032,
    review: [1001, 1009, 1010, 1011, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 1002,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127109691-f2273b7b-13a2-4fe2-865d-1a5450621b28.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title: '高考加油💪 姐姐等你 @DOU+小助手 #dou来跳舞 #抖音热门',
    likeNum: 1032,
    review: [1002, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 1003,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127109777-0a3317f0-7efc-4d61-b058-40b0f2f64685.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title: '哥哥，网恋吗？#抖音热门 #舞王争霸赛',
    likeNum: 1032,
    review: [1003, 1009, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 1004,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127118678-c4020776-18ca-4c59-8cae-ff0b5af33424.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title: '欢迎来到90年代……#dou来跳舞@DOU+小助手 #大风吹 #抖音热门',
    likeNum: 1032,
    review: [1004, 1009, 1010, 1011, 1014, 1015],
    shareNum: 30,
  },
  // {
  //   vid: 1005,
  //   uid: 1,
  //   nickname: '☁️汐⛅️',
  //   avatar:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
  //   url: require('../assets/videos/1005.mp4'),
  //   coverUrl:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
  //   title: '看完不艾特你的兄弟，你礼貌吗@DOU+小助手 #dou来跳舞 #抖音热门',
  //   likeNum: 1032,
  //   review: [1005, 1008, 1009, 1010, 1012, 1013, 1014, 1015],
  //   shareNum: 30,
  // },
  {
    vid: 1006,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127127051-5bf57593-215c-4c96-b741-9bc2319cd98e.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title: '',
    likeNum: 1032,
    review: [1006, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 1007,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127110791-648e8a9f-744b-4650-a8bc-70db80eba4a2.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title:
      '摸摸我的衣服看看是不是做你女朋友的料子@DOU+小助手 #抖音热门 #dou来跳舞',
    likeNum: 1032,
    review: [1007, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 1008,
    uid: 1,
    nickname: '☁️汐⛅️',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127110902-7aba1655-6147-43a0-88d5-6ce951be2573.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
    title: '音乐有点上头 @DOU+小助手 #rap版呜呼卡点舞 #抖音热门',
    likeNum: 1032,
    review: [1001, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  // {
  //   vid: 1009,
  //   uid: 1,
  //   nickname: '☁️汐⛅️',
  //   avatar:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
  //   url: require('../assets/videos/1009.mp4'),
  //   coverUrl:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
  //   title: '舞王出没🥳@抖音小助手 #抖音热门',
  //   likeNum: 1032,
  //   review: [1002, 1011, 1012, 1013, 1014, 1015],
  //   shareNum: 30,
  // },
  // {
  //   vid: 1010,
  //   uid: 1,
  //   nickname: '☁️汐⛅️',
  //   avatar:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
  //   url: require('../assets/videos/1010.mp4'),
  //   coverUrl:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_1.jpeg',
  //   title:
  //     '你会遇见很多人 我的要求不高 这一刻记住我就够了 @DOU+小助手 #dou来跳舞 #抖音热门',
  //   likeNum: 1032,
  //   review: [1012, 1013, 1014, 1015],
  //   shareNum: 30,
  // },
  {
    vid: 2001,
    uid: 2,
    nickname: '栗子🌰',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127129675-bad889f0-b864-4b28-ad94-3e061bf85e63.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    title: '快@喜欢的人给你拍#甜辣妹 #扭一扭',
    likeNum: 1442,
    review: [1004, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 2002,
    uid: 2,
    nickname: '栗子🌰',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127111814-820aabcd-0a3e-4f9b-aa53-c512f514ecf7.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    title: '#扭一扭 #扭腰 别看文案，看我',
    likeNum: 1442,
    review: [1005],
    shareNum: 30,
  },
  {
    vid: 2003,
    uid: 2,
    nickname: '栗子🌰',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127112107-2a943635-b9a9-4afd-b32b-4eff3c4aae74.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_2.jpeg',
    title: '仙人掌不是花，没办法让人捧在手心里#wink手势杀',
    likeNum: 1442,
    review: [1013, 1014, 1015],
    shareNum: 30,
  },

  {
    vid: 3001,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127129892-e9448622-9454-4d20-b539-c0a51d597899.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '到点快更新啦，谁能告诉我怎么拿捏到位！#也只是怕错过 #dou来跳舞 ',
    likeNum: 1022,
    review: [1007, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 3002,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127129223-1917c20c-742b-4f21-a634-051cae4bc62b.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '后来我们都长大了！#超a双重变装 #圆脸女孩',
    likeNum: 1022,
    review: [1001, 1009, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 3003,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127121324-15eda151-4f0c-40ec-9c0f-71b898bd725a.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '今天比昨天爱你多一点。#热爱105度的你',
    likeNum: 1022,
    review: [1002, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  // {
  //   vid: 3004,
  //   uid: 3,
  //   nickname: '顾亚茹',
  //   avatar:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
  //   url: require('../assets/videos/3004.mp4'),
  //   coverUrl:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
  //   title: '今天是带草帽的小姑娘啊～😄#rap版呜呼卡点舞',
  //   likeNum: 1022,
  //   review: [1003, 1011, 1012, 1013, 1014, 1015],
  //   shareNum: 30,
  // },
  {
    vid: 3005,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127113333-84436375-4c5e-4e29-86d6-69fd5ac7991a.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '我能有什么坏心思呢，不过是想让大家一起开心一下！#一本正经瞎跳',
    likeNum: 1022,
    review: [1004, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 3006,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127113364-4cedc45e-e90d-4dcb-8ee6-afa66a3e109f.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '依旧躲不过大数据和好兄弟的艾特#动感摆胯舞 #扭一扭 #身材',
    likeNum: 1022,
    review: [1005, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 3007,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127113471-8d68a1d2-31e1-4d78-b001-67ad3aadd9f6.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '这样的你们喜欢吗？#东南亚吊链舞 #你的眼睛像星星 #dou来跳舞',
    likeNum: 1022,
    review: [1006, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 3008,
    uid: 3,
    nickname: '顾亚茹',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127113530-995cd560-1ca3-4e01-b6fa-05deea513f42.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_3.jpeg',
    title: '最近有点胖#苏喂苏喂苏喂 ',
    likeNum: 1022,
    review: [1007, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 4001,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127113609-d6b41a16-0123-4555-92c6-388c14763149.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '不知道这波热点还能赶上不？#dou来跳舞 #戳脸哼哼挑战',
    likeNum: 107672,
    review: [1001, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 4002,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127113687-9d9ca14d-a8e2-44a2-a877-96ad1f3441a0.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '疯人版#骑上我的小骆驼 ，跳的不好就……就多看几遍就好了！#dou来跳舞',
    likeNum: 107672,
    review: [1002, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  // {
  //   vid: 4003,
  //   uid: 4,
  //   nickname: '中国联通客服',
  //   avatar:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
  //   url: require('../assets/videos/4003.mp4'),
  //   coverUrl:
  //     'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
  //   title: '今日份才艺展示～#鼓点跃动手势舞 #dou来跳舞',
  //   likeNum: 107672,
  //   review: [1003, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
  //   shareNum: 30,
  // },
  {
    vid: 4004,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127114054-8caffcee-f410-4e34-b9c8-76177ef339eb.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '今天的舞你们打几分？#奔赴星空 #丝滑变速舞',
    likeNum: 107672,
    review: [1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 4005,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127114145-190d8349-a77b-47bc-93aa-de6b5f9d6fdf.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '文案交给你们了……#dou来跳舞',
    likeNum: 107672,
    review: [1005, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 4006,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127128766-7139d328-eb64-4fbe-b5a9-faa16882c98f.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '这波舞蹈甜到你了吗？#stick甜妹舞 #dou来跳舞',
    likeNum: 107672,
    review: [1006, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 4007,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127130187-4ea92ef8-5e56-43ce-914d-ad5ec4e06399.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '这回知道选哪个套餐看客服小姐姐了嘛？#dou来跳舞 #联通5g让未来生长',
    likeNum: 107672,
    review: [1007, 1009, 1010, 1011, 1012, 1013, 1014, 1015],
    shareNum: 30,
  },
  {
    vid: 4008,
    uid: 4,
    nickname: '中国联通客服',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    url: 'https://user-images.githubusercontent.com/56338973/127114616-92c42916-116e-4f18-a4a0-91200e99b94d.mp4',
    coverUrl:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_4.jpeg',
    title: '这是哪家下凡的客服小姐姐啊～#dou来跳舞 #newboy #newboy阳光舞',
    likeNum: 107672,
    review: [1015],
    shareNum: 30,
  },
];

// 评论数据
const review = [
  {
    rid: 1001,
    nickname: '邹某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_5.jpeg',
    content: '下次一定',
  },
  {
    rid: 1002,
    nickname: '超某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_6.jpeg',
    content: '大数据真准，我刚摸了下蛋蛋就刷到了这个。',
  },
  {
    rid: 1003,
    nickname: '余某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_7.jpeg',
    content: ' 这么好看的小姐姐竟然不火，应该是因为没回我。',
  },
  {
    rid: 1004,
    nickname: '郭某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_8.jpeg',
    content:
      '刚刚遇到卖西瓜的，他说他的西瓜绝对是最甜的东西，我嗤之以鼻，怎么可能有比你还甜的东西呢？',
  },
  {
    rid: 1005,
    nickname: '奶某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_9.jpeg',
    content: '太可爱了叭。',
  },
  {
    rid: 1006,
    nickname: '月某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_10.jpeg',
    content: '来啦！',
  },
  {
    rid: 1007,
    nickname: '南某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_11.jpeg',
    content: '这婆娘迟早会火，赶紧先关注做老粉。',
  },
  {
    rid: 1008,
    nickname: '强某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_12.jpeg',
    content: '宝，我今天又去输液了，输的什么液？想你的夜～',
  },
  {
    rid: 1009,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '第一',
  },
  {
    rid: 1010,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '@超某人',
  },
  {
    rid: 1011,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '@余某人',
  },
  {
    rid: 1012,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '@邹某人',
  },
  {
    rid: 1013,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '@奶某人',
  },
  {
    rid: 1014,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '@郭某人',
  },
  {
    rid: 1015,
    nickname: '华某人',
    avatar:
      'https://raw.githubusercontent.com/hizouxx/ShortVideo/main/assets/images/avatar/avatar_13.jpeg',
    content: '@南某人',
  },
];

export {user, video, review};
