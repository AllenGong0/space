export default {
  type: "object",
  labelWidth: 120,
  displayType: "row",
  properties: {
    primary: {
      title: "小学",
      type: "array",
      items: {
        type: "object",
        properties: {
          math: {
            title: "数学",
            type: "object",
            properties: {
              videoUrl: {
                title: "视频链接",
                type: "string",
                props: {},
              },
              audioUrl: {
                title: "音频链接",
                type: "string",
                props: {},
              },
            },
          },
          chinese: {
            title: "语文",
            type: "object",
            properties: {
              videoUrl: {
                title: "视频链接",
                type: "string",
                props: {},
              },
              audioUrl: {
                title: "音频链接",
                type: "string",
                props: {},
              },
            },
          },
          english: {
            title: "英语",
            type: "object",
            properties: {
              videoUrl: {
                title: "视频链接",
                type: "string",
                props: {},
              },
              audioUrl: {
                title: "音频链接",
                type: "string",
                props: {},
              },
            },
          },
        },
      },
      hidden: false,
      props: {
        foldable: true,
      },
      default: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    },
  },
}
