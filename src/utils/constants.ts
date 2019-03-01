export const DATA_TYPE_ENUM = {
  '1': 'number',
  '2': 'string',
  '3': 'date',
  '4': 'boolean',
};

export enum WIDGET_TYPE_ENUM {
  INPUT = '1',
  INPUTNUMBER = '2',
  DATEPICKER = '3',
  TIMEPICKER = '4',
  SELECT = '5',
  RADIO = '6',
  CHECKBOX = '7',
  UPLOAD = '8',
  SWITCH = '9',
  TEXTAREA = '10',
  FACT = '20', // 自由裁量
  FILE = '21', // 相关附件
  ADDRESS = '22', // 受理地址
}

export enum CATEGORY_OPTION {
  ENABLE = 1,
  SUSPEND = 2,
  CANCEL = 3,
}

export enum CATEGORY_STATUS {
  ENABLE = '1',
  SUSPEND = '2',
  CANCEL = '3',
  NEW = '4',
}

export enum CATEGORY_DRAFT_STATUS {
  APPROVING = '2', // 审批中
  APPROVED = '3', // 审批通过
  CANCELLED = '4', // 审批取消
  REJECTED = '5', // 审批不通过
}

export enum IMPLE_STATUS {
  ENABLE = '1',
  SUSPEND = '2',
  CANCEL = '3',
  NEW = '4',
}

export enum DRAFT_STATUS {
  NEW = '1',
  APPROVING = '2',
  APPROVED = '3',
  CANCELLED = '4',
  REJECTED = '5',
}

export enum TAB_CONFIG_ENUM {
  BASE_INFO = '1',
  EXTEND_INFO = '2',
  MATERIAL_LIST = '3',
  CHARGE_LIST = '4',
  QA_LIST = '5',
  FLOW_INFO = '6',
}

// 流程图版本
export enum FLOW_VERSION {
  ONLINE = 2, // 正式版
  DRAFT = 0, // 草稿版
}

export const CATEGORY_STATUS_TAGS = {
  '1': {
    text: '在用',
    color: 'green',
    status: 'success',
  },
  '2': {
    text: '挂起',
    color: 'orange',
    status: 'warning',
  },
  '3': {
    text: '取消',
    color: 'volcano',
    status: 'error',
  },
  '4': {
    text: '草稿',
    color: '',
    status: 'default',
  },
};

export const IMPLE_STATUS_TAGS = {
  '1': {
    text: '在用',
    color: 'green',
    status: 'success',
  },
  '2': {
    text: '挂起',
    color: 'orange',
    status: 'warning',
  },
  '3': {
    text: '取消',
    color: 'volcano',
    status: 'error',
  },
  '4': {
    text: '草稿',
    color: '',
    status: 'default',
  },
};

export const DRAFT_STATUS_TAGS = {
  '1': {
    text: '待提交审批',
    status: 'default',
  },
  '2': {
    text: '审批中',
    status: 'processing',
  },
  '3': {
    text: '审批通过',
    status: 'success',
  },
  '4': {
    text: '审批取消',
    status: 'error',
  },
  '5': {
    text: '审批不通过',
    status: 'error',
  },
};

export const FACT_COLUMNS = [
  {
    title: '情节描述',
    dataIndex: 'fact',
    value: 'fact',
    required: true,
  },
  {
    title: '处罚措施',
    dataIndex: 'penalty',
    value: 'penalty',
    required: true,
  },
];

export const FILE_COLUMNS = [
  {
    title: '相关附件文件名称',
    dataIndex: 'fileName',
    value: 'fileName',
    required: true,
  },
  {
    title: '附件链接地址',
    dataIndex: 'fileUrl',
    value: 'fileUrl',
    required: true,
  },
];

export const ADDRESS_COLUMNS = [
  {
    title: '受理地点',
    dataIndex: 'address',
    value: 'address',
    required: true,
  },
  {
    title: '受理地点分类',
    dataIndex: 'type',
    value: 'type',
    width: 140,
    required: true,
    enum: [
      {
        value: '1',
        text: '行政服务中心',
      },
      {
        value: '2',
        text: '部门服务窗口',
      },
      {
        value: '3',
        text: '单位办公室',
      },
      {
        value: '4',
        text: '案件发生地',
      },
      {
        value: '5',
        text: '代办点',
      },
      {
        value: '6',
        text: '便民服务中心',
      },
    ],
  },
  {
    title: '受理接待时间',
    dataIndex: 'openHourDesc',
    value: 'openHourDesc',
    required: true,
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    value: 'phone',
    width: 140,
    required: true,
  },
  // {
  //   title: '测绘局地址ID',
  //   dataIndex: 'mapId',
  //   value: 'mapId',
  //   width: 120,
  //   required: false,
  // },
];

export const DOWNLOAD_LIST = ['blankForm', 'sampleForm'];

export const MATERIAL_LABELS = {
  mtName: '材料名称',
  mtType: '材料类型',
  mtForm: '材料形式',
  mtNec: '是否为必须材料',
  mtDetailReq: '材料详细要求',
  blankForm: '空白表格',
  sampleForm: '示例样表',
  srcChannel: '来源渠道',
  srcChannelDesc: '来源渠道说明',
  // null1: '材料出具单位',
  // null2: '是否对外显示',
  paperMtNums: '纸质材料份数',
  paperMtSpec: '纸质材料规格',
  instructions: '填报须知',
  acceptCriteria: '受理标准',
  reqMtBasis: '要求提代材料依据',
  memo: '备注',
};

export const MATERIAL_ENUM = {
  mtType: [
    {
      value: '1',
      text: '原件',
    },
    {
      value: '2',
      text: '复印件',
    },
    {
      value: '3',
      text: '原件或复印件',
    },
  ],
  mtForm: [
    {
      value: '1',
      text: '原件',
    },
    {
      value: '2',
      text: '电子复印件',
    },
    {
      value: '3',
      text: '原件或复印件',
    },
    {
      value: '4',
      text: '纸质表格',
    },
    {
      value: '5',
      text: '普通电子文件',
    },
    {
      value: '6',
      text: '系统自动获取，无需申请者提交',
    },
    {
      value: '7',
      text: '系统自动获取，如数据不全则需申请者提交',
    },
    {
      value: '8',
      text: '原件扫描件',
    },
    {
      value: '9',
      text: 'PDF格式电子文件',
    },
  ],
  mtNec: [
    {
      value: '1',
      text: '必要',
    },
    {
      value: '2',
      text: '非必要',
    },
    {
      value: '3',
      text: '容缺后补',
    },
  ],
  null2: [
    {
      value: '1',
      text: '是',
    },
    {
      value: '0',
      text: '否',
    },
  ],
  srcChannel: [
    {
      value: '10',
      text: '申请人自备',
    },
    {
      value: '20',
      text: '政府部门核发',
    },
    {
      value: '99',
      text: '其他',
    },
  ],
  paperMtSpec: [
    {
      value: '1',
      text: 'A4',
    },
    {
      value: '2',
      text: 'A3',
    },
  ],
};

export const CHARGE_LABELS = {
  itemName: '收费项目名称',
  standard: '收费标准',
  chargeBasis: '收费依据',
  relief: '是否允许减免',
  reliefBasis: '允许减免依据',
  memo: '备注',
};

export const CHARGE_ENUM = {
  relief: [
    {
      value: '1',
      text: '是',
    },
    {
      value: '0',
      text: '否',
    },
  ],
};

export const QA_LABELS = {
  question: '问题名称',
  answer: '答案',
};

export const QA_ENUM = {};

// 权力属性 basicAttr
export const RIGHT_ATTRIBUTE_ENUM = [
  {
    value: '0',
    text: '无',
  },
  {
    value: '1',
    text: '属地保留',
  },
  {
    value: '2',
    text: '本级保留',
  },
  {
    value: '3',
    text: '共性权力',
  },
  {
    value: '4',
    text: '法定权力',
  },
  {
    value: '5',
    text: '驻场办理',
  },
  {
    value: '6',
    text: '承接委托下放',
  },
  {
    value: '7',
    text: '审核转报',
  },
];
// 事项状态
export const CATEGORY_STATUS_ENUM = [
  {
    value: '1',
    text: '在用',
  },
  {
    value: '2',
    text: '挂起',
  },
  {
    value: '3',
    text: '取消',
  },
  {
    value: '4',
    text: '草稿',
  },
];

// 实施状态
export const IMPLE_STATUS_ENUM = [
  {
    value: '1',
    text: '在用',
  },
  {
    value: '2',
    text: '挂起',
  },
  {
    value: '3',
    text: '取消',
  },
  {
    value: '4',
    text: '草稿',
  },
];

export const MAT_LEVEL = [
  {
    value: '1',
    text: '国家',
  },
  {
    value: '2',
    text: '省级',
  },
  {
    value: '3',
    text: '市级',
  },
  {
    value: '4',
    text: '县级',
  },
  {
    value: '5',
    text: '镇（乡、街道）级',
  },
  {
    value: '6',
    text: '村（社区）级',
  },
];

/****************** user constants *******************/
export enum USER_TYPE {
  YIHE = 'YIHE',
  INNER = 'INNER',
}
// 约束维度
export const RESTRICT_DIM = [
  {
    value: '1',
    text: '全局维度',
  },
  {
    value: '2',
    text: '事项类型维度',
  },
  {
    value: '3',
    text: '事项编码维度',
  },
  {
    value: '4',
    text: '业务条线维度',
  },
  {
    value: '5',
    text: '地区维度',
  },
  {
    value: '6',
    text: '层级维度',
  },
  {
    value: '7',
    text: '部门维度',
  },
  {
    value: '8',
    text: '实施维度',
  },
];
// 约束类型
export const RESTRICT_TYPE = [
  {
    value: '1',
    text: '等于',
  },
  {
    value: '2',
    text: '属于',
  },
  {
    value: '3',
    text: '预设',
  },
  {
    value: '4',
    text: '自定义',
  },
];
// 控件类型
export const WIDGET_TYPE = [
  {
    value: '1',
    text: '文本输入框',
  },
  {
    value: '2',
    text: '数字输入框',
  },
  {
    value: '3',
    text: '日期输入框',
  },
  {
    value: '4',
    text: '日期时间输入框',
  },
  {
    value: '5',
    text: '下拉选择框',
  },
  {
    value: '6',
    text: '单选框',
  },
  {
    value: '7',
    text: '复选框（多选）',
  },
  {
    value: '8',
    text: '文件上传',
  },
  {
    value: '9',
    text: '开关',
  },
  {
    value: '10',
    text: '文本域',
  },
  {
    value: '20',
    text: '自由裁量列表',
  },
  {
    value: '21',
    text: '相关附件列表',
  },
  {
    value: '22',
    text: '受理地点列表',
  },
];

// 数据类型
export const DATA_TYPE = [
  {
    value: '1',
    text: '整数',
  },
  {
    value: '2',
    text: '字符串',
  },
  {
    value: '3',
    text: '日期时间',
  },
  {
    value: '4',
    text: '布尔',
  },
  {
    value: '20',
    text: '自由裁量列表',
  },
  {
    value: '21',
    text: '相关附件列表',
  },
  {
    value: '22',
    text: '受理地点列表',
  },
];

// 提交渠道
export const APPLYORIGIN_TYPE = [
  {
    value: '0',
    text: '部门业务系统窗口收件',
  },
  {
    value: '1',
    text: 'pc端网上申报',
  },
  {
    value: '2',
    text: '移动端网上申报',
  },
  {
    value: '3',
    text: '上级交办',
  },
  {
    value: '4',
    text: '下级报送',
  },
  {
    value: '5',
    text: '同级转办',
  },
  {
    value: '8',
    text: '线下一窗收件',
  },
  {
    value: '9',
    text: '线上一窗收件',
  },
];

// 证件类型
export const CERTIFICATES_TYPE = [
  {
    value: '',
    text: '全部',
  },
  {
    value: '31',
    text: '身份证',
  },
  {
    value: '32',
    text: '军官证',
  },
  {
    value: '33',
    text: '护照',
  },
  {
    value: '34',
    text: '律师执业证',
  },
  {
    value: '35',
    text: '港澳居民来往内地通行证',
  },
  {
    value: '36',
    text: '台湾居民来往大陆通行证',
  },
  {
    value: '37',
    text: '港澳台居民居住证',
  },
  {
    value: '38',
    text: '外国人永久居留身份证（中国绿卡）',
  },
  {
    value: '49',
    text: '其他个人证件',
  },
  {
    value: '51',
    text: '营业执照',
  },
  {
    value: '53',
    text: '机关群团统一社会信用代码证书',
  },
  {
    value: '54',
    text: '医疗机构执业许可证登记号',
  },
  {
    value: '55',
    text: '宗教活动场所登记证',
  },
  {
    value: '56',
    text: '民办非企业单位登记证书',
  },
  {
    value: '57',
    text: '社会团体法人登记证书"',
  },
  {
    value: '58',
    text: '基金会法人登记证书',
  },
  {
    value: '59',
    text: '事业单位法人证书',
  },
  {
    value: '79',
    text: '其他法人证件',
  },
  {
    value: '81',
    text: '驾驶证',
  },
  {
    value: '82',
    text: '行驶证',
  },
  {
    value: '83',
    text: '车牌号',
  },
  {
    value: '84',
    text: '船牌号',
  },
];
// 办件状态
export const AFFCORE_STATUS = [
  {
    value: '',
    text: '全部',
  },
  {
    value: '02',
    text: '收件',
  },
  {
    value: '05',
    text: '受理',
  },
  {
    value: '06',
    text: '补齐补正',
  },
  {
    value: '07',
    text: '不予受理',
  },
  {
    value: '10',
    text: '办结',
  },
  {
    value: '11',
    text: '挂起',
  },
  {
    value: '12',
    text: '在办',
  },
  {
    value: '13',
    text: '退件',
  },
];
