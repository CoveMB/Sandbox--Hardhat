/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PausableBox,
  PausableBoxInterface,
} from "../../contracts/PausableBox";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "initialValue",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newValue",
        type: "string",
      },
    ],
    name: "ColorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newValue",
        type: "string",
      },
    ],
    name: "changeValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x0002000000000002000100000001035500000060011002700000015d0010019d000000010120018f000000000110004c000000080000c13d056f018e0000040f056f00090000040f000b0000000000020000008002000039000000400100003900000000002104350000000002000416000000000220004c000000490000c13d00000000020000310000001f03200039000000200a00008a0000000005a3016f00000000030104330000000004350019000000000554004b000000000500001900000001050040390000015e0640009c0000004b0000213d000000010550018f000000000550004c0000004b0000c13d00000000004104350000001f0420018f00000001050003670000000506200270000000000760004c0000002d0000613d000000000700001900000005087002100000000009830019000000000885034f000000000808043b00000000008904350000000107700039000000000867004b000000250000413d000000000740004c0000003c0000613d0000000506600210000000000565034f00000000066300190000000304400210000000000706043300000000074701cf000000000747022f000000000505043b0000010004400089000000000545022f00000000044501cf000000000474019f00000000004604350000015f040000410000001f0520008c000000000500001900000000050420190000015f06200197000000000760004c00000000040080190000015f0660009c000000000405c019000000000440004c000000520000c13d0000000001000019000005710001043000000000010000190000057100010430000001690100004100000000001004350000004101000039000000040200003900000000001204350000016a0100004100000571000104300000000005030433000001600450009c000000570000413d00000000010000190000057100010430000000000423001900000000023500190000001f032000390000015f05000041000000000643004b000000000600001900000000060540190000015f033001970000015f07400197000000000873004b000000000500a019000000000373013f0000015f0330009c00000000030600190000000003056019000000000330004c000000720000613d0000000003020433000001600530009c000000740000413d000001690100004100000000001004350000004101000039000000040200003900000000001204350000016a010000410000057100010430000000000100001900000571000104300000003f053000390000000005a5016f00000000080104330000000005580019000000000685004b000000000600001900000001060040390000015e0750009c000000880000213d000000010660018f000000000660004c000000880000c13d0000000000510435000000000038043500000000013200190000002001100039000000000141004b0000008f0000a13d00000000010000190000057100010430000001690100004100000000001004350000004101000039000000040200003900000000001204350000016a01000041000005710001043000040000000a001d000600000008001d0000002006800039000000000130004c0000009c0000613d000000000100001900000000041600190000002001100039000000000521001900000000050504330000000000540435000000000431004b000000950000413d000300000006001d000000000136001900000000000104350000000001000019056f056d0000040f0000000002000411000700000002001d00000008022002100000016102200197000500000001001d0000016203100197000000000132019f0000000002000019056f056b0000040f00000163010000410000000302000039000000000012041f0000000501000029000000080110027000000164011001970000000702000029000000000021041e00000006010000290000000002010433000001600120009c000000bd0000413d000001690100004100000000001004350000004101000039000000040200003900000000001204350000016a010000410000057100010430000200000002001d0000000101000039000100000001001d056f056d0000040f000000010210018f00000001011002700000007f0310018f000000000420004c000000000301c0190000001f0130008c00000000010000190000000101002039000000010110018f000000000220004c0000000002000019000000010200c039000000010220018f000000000112004b000000d70000613d000001690100004100000000001004350000002201000039000000040200003900000000001204350000016a010000410000057100010430000000200130008c000000fe0000413d000700000003001d000000010100003900000000001004350000016501000041000080100200003900000000030004150000000b0330008a00000020033000c9056f05520000040f0000000b0100035f000000ff020000390000000a0220024f000000000220004c000001520000613d00000002030000290000001f023000390000000502200270000000200330008c0000000002004019000000000101043b00000007030000290000001f03300039000000050330027000000000033100190000000002210019000000000132004b000000fe0000813d000500000003001d000700000002001d00000000010000190000000702000029056f056b0000040f000000070200002900000005030000290000000102200039000000000132004b000000f50000413d00000002040000290000001f0140008c0000013d0000a13d00000001010000290000000000100435000001650100004100008010020000390000000003000415000000090330008a00000020033000c9056f05520000040f000000090100035f000000ff02000039000000080220024f000000010220008c000001700000c13d00000004020000290000000203000029000000000523016f0000002004000039000000000301043b000000000150004c00000006010000290000012b0000613d0000002004000039000700000000001d000300000005001d000400000004001d000500000003001d0000000601000029000000000114001900000000010104330000000002030019056f056b0000040f0000000305000029000000040400002900000005030000290000002004400039000000010330003900000007010000290000002001100039000700000001001d000000000151004b0000000601000029000001190000413d0000000202000029000000000125004b0000013a0000813d0000000301200210000000f80110018f000000010200008a000000000112022f000000000121013f000000060200002900000000022400190000000002020433000000000112016f0000000002030019056f056b0000040f000000020200002900000001012002100000000102000029000001480000013d000000000140004c0000000001000019000001420000613d000000030100002900000000010104330000000302400210000000010300008a000000000223022f000000000232013f000000000121016f0000000102400210000000000121019f0000000102000039056f056b0000040f000000200100003900000100020000390000000000120439000001200100003900000000000104390000016801000041000005700001042e00000060021002700000001f0220018f00000065031002700000016603300197000000000430004c000001600000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000534004b000001590000413d000000000420004c0000016e0000613d00000003022002100000000503300210000000000403043300000000042401cf000000000424022f000000000531034f000000000505043b0000010002200089000000000525022f00000000022501cf000000000242019f00000000002304350000016701100197000005710001043000000060021002700000001f0220018f00000065031002700000016603300197000000000430004c0000017e0000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000534004b000001770000413d000000000420004c0000018c0000613d00000003022002100000000503300210000000000403043300000000042401cf000000000424022f000000000531034f000000000505043b0000010002200089000000000525022f00000000022501cf000000000242019f000000000023043500000167011001970000057100010430000a00000000000200000000050004110000000001000410000080020210008c000001a90000613d000080010250008c000001a90000613d000700000005001d0000016b020000410000000000200439000000040200003900000000001204390000016c01000041000080020200003900000000030004150000000a0330008a00000020033000c9056f05520000040f000000ff01000039000000090110024f000000000110004c0000040f0000613d0000000a0100035f000000000101043b000000000110004c0000000705000029000004110000613d0000008001000039000000400900003900000000001904350000000001000031000000030210008c000004290000a13d000800000000001d0000000102000367000000000302043b000000e0033002700000016d0430009c000300000009001d000001eb0000a13d0000016e0430009c0000021b0000a13d0000016f0430009c000002830000613d000001700330009c000004290000c13d0000000003000416000000000330004c0000042b0000c13d000000040110008a0000015f030000410000001f0410008c000000000400001900000000040320190000015f01100197000000000510004c00000000030080190000015f0110009c00000000010400190000000001036019000000000110004c0000042d0000613d0000000401200370000000000201043b0000016401200197000700000001001d000600000002001d0000017a0120009c0000042f0000813d056f05230000040f0000000701000029000000000110004c000002ff0000c13d0000000301000029000000000101043300000064021000390000017d03000041000000000032043500000044021000390000017e0300004100000000003204350000002402100039000000260300003900000000003204350000017f02000041000000000021043500000004021000390000002003000039000000000032043500000040011002100000017c0110019700000180011001c70000057100010430000001730230009c000002510000a13d000001740230009c000003f50000213d000001780230009c000004290000c13d0000000002000416000000000220004c000004310000c13d000700000005001d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c000004330000613d056f05230000040f0000000001000019056f056d0000040f000000ff0210018f000000000220004c000002d30000c13d000000030100002900000000010104330000004402100039000001870300004100000000003204350000002402100039000000140300003900000000003204350000017f02000041000000000021043500000004021000390000002003000039000000000032043500000040011002100000017c0110019700000188011001c70000057100010430000001710230009c000004130000c13d0000000002000416000000000220004c000004350000c13d000700000005001d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c000004370000613d056f05230000040f056f053b0000040f0000000001000019056f056d0000040f000001000200008a000000000121016f00000001011001bf0000000002000019056f056b0000040f000000030500002900000000010504330000000702000029000000000021043500000184020000410000018503000041000000000023041f000000210200008a000000000221004b000002cb0000213d0000002002100039000002490000013d000000000003041e0000004001100039000000000312004b000002cb0000a13d000000000412004900000000030104330000003f0440008c000002450000a13d00000020041000390000000004040433000000000043041e000002460000013d000001790230009c000004290000c13d0000000002000416000000000220004c000004390000c13d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c0000043b0000613d056f053b0000040f00000003010000290000000001010433000200000001001d0000000101000039000700000001001d056f056d0000040f000000010210018f00000001031002700000007f0430018f000000000520004c000000000503001900000000050460190000001f0350008c00000000030000190000000103002039000000010330018f000000000420004c0000000004000019000000010400c039000000010440018f000000000334004b000002ef0000613d000001690100004100000000001004350000002201000039000000040200003900000000001204350000016a0100004100000571000104300000000003000416000000000330004c0000043d0000c13d000000040310008a0000015f040000410000001f0530008c000000000500001900000000050420190000015f03300197000000000630004c00000000040080190000015f0330009c00000000030500190000000003046019000000000330004c0000043f0000613d0000000403200370000000000303043b000001600430009c000004410000813d00000023043000390000015f05000041000000000614004b000000000600001900000000060540190000015f071001970000015f04400197000000000874004b000000000500a019000000000474013f0000015f0440009c00000000040600190000000004056019000000000440004c000004430000613d0000000404300039000000000242034f000000000402043b000001600240009c000004450000813d0000002402300039000200000004001d000700000002001d0000000002420019000000000112004b000004470000213d056f053b0000040f0000000101000039000100000001001d056f056d0000040f000000010210018f00000001011002700000007f0310018f000000000420004c00000000010360190000001f0310008c00000000030000190000000103002039000000010330018f000000000220004c0000000002000019000000010200c039000000010220018f000000000232004b000003160000613d000001690100004100000000001004350000002201000039000000040200003900000000001204350000016a010000410000057100010430000000600100003900000008011001ef0000016701100197000000000205043300000040022002100000017c02200197000000000121019f000005700001042e000001000200008a000000000121016f0000000002000019056f056b0000040f000000030500002900000000010504330000000702000029000000000021043500000186020000410000018503000041000000000023041f000000210200008a000000000221004b000002fb0000213d0000002002100039000002e70000013d000000000003041e0000004001100039000000000312004b000002fb0000a13d000000000412004900000000030104330000003f0440008c000002e30000a13d00000020041000390000000004040433000000000043041e000002e40000013d00000002030000290000000000530435000000000220004c000003630000c13d000001000200008a000000000121016f00000020023000390000000000120435000000000150004c000000200300003900000000030060190000037b0000013d000000000105043300000040011002100000017c01100197000005700001042e0000000001000019056f056d0000040f000000060200002900000008022002100000016102200197000600000001001d0000017b03100197000000000123019f0000000002000019056f056b0000040f0000000301000029000000000101043300000163020000410000000303000039000000000023041f0000000602000029000000080220027000000164022001970000000703000029000000000032041e00000040011002100000017c01100197000005700001042e000000200210008c0000032f0000413d00000002040000290000001f02400039000000050220027000000181022000410000018103000041000000200440008c0000000002034019000000010300003900000000003004350000001f0110003900000005011002700000018103100041000000000132004b0000032f0000813d000500000003001d000600000002001d0000000001000019056f056b0000040f000000050300002900000006020000290000000102200039000000000132004b000003270000413d00000002040000290000001f0140008c0000039c0000a13d00000001010000290000000000100435000000200100008a000000000514016f0000018104000041000000000150004c000000000300001900000007010000290000034f0000613d00000181040000410000000003000019000400000005001d000500000003001d000600000004001d000000070100002900000000013100190000000102000367000000000112034f000000000101043b0000000002040019056f056b0000040f00000004050000290000000503000029000000060400002900000001044000390000002003300039000000000153004b00000007010000290000033e0000413d0000000202000029000000000125004b000003600000813d0000000301200210000000f80110018f000000010200008a000000000112022f000000000121013f000000070200002900000000023200190000000103000367000000000223034f000000000202043b000000000112016f0000000002040019056f056b0000040f000000020200002900000001012002100000000102000029000003a90000013d00000007010000290000000000100435000000000150004c00000000030000190000037b0000613d00000002010000290000002001100039000400000001001d00000181010000410000000003000019000500000005001d000600000001001d000700000003001d056f056d0000040f00000007030000290000000505000029000000040200002900000000023200190000000000120435000000060100002900000001011000390000002003300039000000000253004b0000036e0000413d0000003f01300039000000200200008a000000000121016f00000002020000290000000004210019000000000114004b000000000100001900000001010040390000015e0340009c000003950000213d000000010110018f000000000110004c000003950000c13d000000030100002900000000004104350000000001040019000700000004001d056f050c0000040f000000070200002900000000012100490000006001100210000001670110019700000040022002100000017c02200197000000000121019f000005700001042e000001690100004100000000001004350000004101000039000000040200003900000000001204350000016a010000410000057100010430000000000140004c0000000001000019000003a30000613d00000001010003670000000702000029000000000121034f000000000101043b0000000302400210000000010300008a000000000223022f000000000232013f000000000121016f0000000102400210000000000121019f0000000102000039056f056b0000040f00000003090000290000000001090433000000200200003900000000002104350000002002100039000000020a0000290000000000a2043500000001020003670000000703000029000000000432034f0000001f03a0018f00000040021000390000000505a00270000000000650004c000003c40000613d000000000600001900000005076002100000000008720019000000000774034f000000000707043b00000000007804350000000106600039000000000756004b000003bc0000413d000000000630004c000003d30000613d0000000505500210000000000454034f00000000055200190000000303300210000000000605043300000000063601cf000000000636022f000000000404043b0000010003300089000000000434022f00000000033401cf000000000363019f00000000003504350000000002a20019000000080300002900000000003204350000005f02a00039000000200300008a000000000232016f000000200320021000000001033001bf0000018204000041000000000043041f0000000002210019000000000312004b000003ed0000a13d000003e50000013d000000000003041e0000004001100039000000000312004b000003ed0000a13d000000000412004900000000030104330000003f0440008c000003e10000a13d00000020041000390000000004040433000000000043041e000003e20000013d000000600100003900000008011001ef0000016701100197000000000209043300000040022002100000017c02200197000000000121019f000005700001042e000001750230009c000004490000613d000001760230009c0000045d0000613d000001770230009c000004290000c13d0000000002000416000000000220004c000004730000c13d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c000004840000c13d00000000010000190000057100010430000000000100001900000571000104300000000001000019000005700001042e000001720230009c000004290000c13d0000000002000416000000000220004c000004710000c13d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c000004790000c13d00000000010000190000057100010430000000000100001900000571000104300000000001000019000005710001043000000000010000190000057100010430000000000100001900000571000104300000000001000019000005710001043000000000010000190000057100010430000000000100001900000571000104300000000001000019000005710001043000000000010000190000057100010430000000000100001900000571000104300000000001000019000005710001043000000000010000190000057100010430000000000100001900000571000104300000000001000019000005710001043000000000010000190000057100010430000000000100001900000571000104300000000002000416000000000220004c000004750000c13d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c000004970000c13d000000000100001900000571000104300000000002000416000000000220004c000004770000c13d000000040110008a000000010200008a0000015f03000041000000000221004b000000000200001900000000020320190000015f011001970000015f0410009c00000000030080190000015f011001670000015f0110009c00000000010200190000000001036019000000000110004c000004b40000c13d00000000010000190000057100010430000000000100001900000571000104300000000001000019000005710001043000000000010000190000057100010430000000000100001900000571000104300000000001000019056f056d0000040f0000000302000029000000000202043300000008011002700000016401100197000000000012043500000040012002100000017c0110019700000183011001c7000005700001042e056f05230000040f0000000001000019056f056d0000040f000700000001001d0000017b011001970000000002000019056f056b0000040f0000000301000029000000000101043300000163020000410000000303000039000000000023041f000000070200002900000008022002700000016402200197000000000002041e00000040011002100000017c01100197000005700001042e00000003010000290000000001010433000200000001001d0000000101000039000700000001001d056f056d0000040f000000010210018f00000001031002700000007f0430018f000000000520004c000000000304601900000000050300190000001f0330008c00000000030000190000000103002039000000010330018f000000000420004c0000000004000019000000010400c039000000010440018f000000000334004b000004c10000613d000001690100004100000000001004350000002201000039000000040200003900000000001204350000016a0100004100000571000104300000000001000019056f056d0000040f00000003020000290000000002020433000000ff0110018f000000000110004c0000000001000019000000010100c039000000000012043500000040012002100000017c0110019700000183011001c7000005700001042e00000002030000290000000000530435000000000220004c000004cf0000c13d000001000200008a000000000121016f000000020200002900000020022000390000000000120435000000000150004c00000020010000390000000001006019000700000001001d000004e80000013d00000007010000290000000000100435000500000005001d000000000150004c000700000000001d000004e80000613d00000002010000290000002001100039000400000001001d0000018102000041000700000000001d000600000002001d0000000001020019056f056d0000040f00000007030000290000000402000029000000000232001900000000001204350000000602000029000000010220003900000020033000390000000501000029000700000003001d000000000113004b000004da0000413d00000007010000290000003f01100039000000200200008a000000000121016f00000002020000290000000002210019000000000112004b0000000001000019000000010100403900000000030200190000015e0220009c000005050000213d000000010110018f000000000110004c000005050000c13d0000000301000029000700000003001d000000000031043500000000010300190000000202000029056f050c0000040f000000070200002900000000012100490000006001100210000001670110019700000040022002100000017c02200197000000000121019f000005700001042e000001690100004100000000001004350000004101000039000000040200003900000000001204350000016a010000410000057100010430000000200300003900000000003104350000000003020433000000200410003900000000003404350000004001100039000000000430004c0000051c0000613d000000000400001900000000054100190000002004400039000000000624001900000000060604330000000000650435000000000534004b000005150000413d000000000231001900000000000204350000001f02300039000000200300008a000000000232016f0000000001210019000000000001042d0000000001000019056f056d0000040f000000080110027000000164011001970000000002000411000000000121004b0000052b0000c13d000000000001042d000000400100003900000000010104330000004402100039000001890300004100000000003204350000017f0200004100000000002104350000002402100039000000200300003900000000003204350000000402100039000000000032043500000040011002100000017c0110019700000188011001c700000571000104300000000001000019056f056d0000040f000000ff0110018f000000000110004c000005410000c13d000000000001042d0000004001000039000000000101043300000044021000390000018a0300004100000000003204350000002402100039000000100300003900000000003204350000017f02000041000000000021043500000004021000390000002003000039000000000032043500000040011002100000017c0110019700000188011001c700000571000104300002000000000002000200000003001d0000002003300039000100000003001d00000561002104230000000203000029000000200230011a00000000020103550000015f010000410000000102000029000000200220011a00000000021201bd00000000010300190000000200000005000000000001042d0000000203000029000000200230011a00000000020103550000018b010000410000000102000029000000200220011a000000000212018d00000000010300190000000200000005000000000001042d000000000012041b000000000001042d000000000101041a000000000001042d0000056f00000432000005700001042e00000571000104300000000000000001000000000000000100000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000ffffffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffff0000000000000000000000000000000000000000008be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff020000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000007ffffffffffffff00000000000000000000000000000000ffffffff00000000000000000000000000000002000000000000000000000000000000400000010000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200020000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000000000008456cb5800000000000000000000000000000000000000000000000000000000e3a07abf00000000000000000000000000000000000000000000000000000000e3a07ac000000000000000000000000000000000000000000000000000000000f2fde38b000000000000000000000000000000000000000000000000000000008456cb59000000000000000000000000000000000000000000000000000000008da5cb5b000000000000000000000000000000000000000000000000000000003f4ba839000000000000000000000000000000000000000000000000000000003fa4f244000000000000000000000000000000000000000000000000000000003fa4f245000000000000000000000000000000000000000000000000000000005c975abb00000000000000000000000000000000000000000000000000000000715018a6000000000000000000000000000000000000000000000000000000003f4ba83a00000000000000000000000000000000000000000000000000000000209652550000000000000000000000010000000000000000000000000000000000000000ffffffffffffffffffffff0000000000000000000000000000000000000000ff0000000000000000000000000000000000000000ffffffff000000000000000064647265737300000000000000000000000000000000000000000000000000004f776e61626c653a206e6577206f776e657220697320746865207a65726f206108c379a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084000000000000000000000000b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6ea8482eb24fdcbd88250f9fd14644f201467fcaf3c5f08a0675ed9d46977ae3b000000000000000000000000000000000000002000000000000000000000000062e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25800000000000000000000000000000000000000000000000000000020000000015db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa5061757361626c653a206e6f742070617573656400000000000000000000000000000000000000000000000000000000000000640000000000000000000000004f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725061757361626c653a20706175736564000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000";

type PausableBoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableBoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PausableBox__factory extends ContractFactory {
  constructor(...args: PausableBoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialValue: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PausableBox> {
    return super.deploy(initialValue, overrides || {}) as Promise<PausableBox>;
  }
  override getDeployTransaction(
    initialValue: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialValue, overrides || {});
  }
  override attach(address: string): PausableBox {
    return super.attach(address) as PausableBox;
  }
  override connect(signer: Signer): PausableBox__factory {
    return super.connect(signer) as PausableBox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableBoxInterface {
    return new utils.Interface(_abi) as PausableBoxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PausableBox {
    return new Contract(address, _abi, signerOrProvider) as PausableBox;
  }
}
