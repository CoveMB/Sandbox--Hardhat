/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BoxFactory,
  BoxFactoryInterface,
} from "../../../contracts/FactoredBox.sol/BoxFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "boxes",
    outputs: [
      {
        internalType: "contract FactoredBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "createNewBox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBoxes",
    outputs: [
      {
        internalType: "contract FactoredBox[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x000300000000000200020000000103550000006003100270000000a00030019d000000a003300197000000000131034f0000006001100270000100a00010019d000000010120018f000000000110004c0000000c0000c13d027c001c0000040f027c000d0000040f0000008001000039000000400200003900000000001204350000000001000416000000000110004c0000001a0000c13d00000020010000390000010002000039000000000012043900000120010000390000000000010439000000a1010000410000027d0001042e00000000010000190000027e0001043000110000000000020000000001000410000080020210008c000000370000613d0000000002000411000080010220008c000000370000613d000000a202000041000000000020043900000004020000390000000000120439000000a30100004100008002020000390000000003000415000000110330008a00000020033000c9027c02460000040f000000ff01000039000000100110024f000000000110004c0000005b0000613d000000110100035f000000000101043b000000000110004c000000370000c13d00000000010000190000027d0001042e0000008005000039000000400b00003900000000005b04350000000002000031000000030120008c000000590000a13d000f00000000001d0000000201000367000000000301043b000000e003300270000000a40430009c0000005d0000613d000000a50430009c000000710000613d000000a60330009c000000590000c13d0000000003000416000000000330004c000000830000c13d000000040320008a000000a7040000410000001f0530008c00000000050000190000000005042019000000a703300197000000000630004c0000000004008019000000a70330009c00000000030500190000000003046019000000000330004c000000890000c13d00000000010000190000027e0001043000000000010000190000027e0001043000000000010000190000027e000104300000000001000416000000000110004c000000850000c13d000000040120008a000000010200008a000000a703000041000000000221004b00000000020000190000000002032019000000a701100197000000a70410009c0000000003008019000000a701100167000000a70110009c00000000010200190000000001036019000000000110004c0000008f0000c13d00000000010000190000027e000104300000000003000416000000000330004c000000870000c13d000000040220008a000000a7030000410000001f0420008c00000000040000190000000004032019000000a702200197000000000520004c0000000003008019000000a70220009c00000000020400190000000002036019000000000220004c000000bd0000c13d00000000010000190000027e0001043000000000010000190000027e0001043000000000010000190000027e0001043000000000010000190000027e000104300000000403100370000000000303043b000000a80430009c000000f80000413d00000000010000190000027e0001043000020000000b001d0000000001000019000100000005001d027c027a0000040f000000010400002900000000050100190000000000540435000000bf01000039000000a0020000390000000000000435000000000350004c000000dd0000613d000000b703000041000000a0010000390000000004000019000300000005001d000500000004001d000600000003001d000400000001001d0000000001030019027c027a0000040f0000000406000029000000050400002900000006030000290000000305000029000000b2011001970000000000160435000000010330003900000020016000390000000104400039000000000254004b0000009f0000413d0000003f01600039000000200200008a000000000221016f000000800320008a000000b80330009c0000000104000029000000dd0000413d000000b3010000410000000000100435000000410100003900000004020000390000000000120435000000b4010000410000027e0001043000020000000b001d0000000401100370000000000101043b000600000001001d0000000001000019027c027a0000040f0000000602000029000000000112004b000001130000813d000d00000000001d000e00000000001d00000000010004150000000e0110008a00000020011000c9027c02170000040f00000003010000390000000d011001ef000600000001001d0000000e01000029027c027a0000040f0000000602000029000000000121022f000000b201100197000000ff0220008c00000000010020190000000202000029000000000202043300000000001204350000004001200210000000ae01100197000000b6011001c70000027d0001042e00000002030000290000000000230435000000200300003900000000003204350000000003040433000000200420003900000000003404350000004004200039000000000530004c000000f10000613d000000a00500003900000000060000190000000007050433000000b2077001970000000000740435000000200550003900000020044000390000000106600039000000000736004b000000e90000413d00000000022400490000006002200210000000b1022001970000004001100210000000b901100197000000000112019f0000027d0001042e0000002304300039000000a705000041000000000624004b00000000060000190000000006054019000000a702200197000000a704400197000000000724004b000000000500a019000000000224013f000000a70220009c00000000020600190000000002056019000000000220004c000001150000613d0000000402300039000000000121034f000000000401043b000000a80140009c000001170000413d000000b3010000410000000000100435000000410100003900000004020000390000000000120435000000b4010000410000027e0001043000000000010000190000027e0001043000000000010000190000027e000104300000003f02400039000000200100008a000000000512016f00000000020b04330000000005520019000000000625004b00000000060000190000000106004039000000a90750009c0000012f0000213d000000010660018f000000000660004c0000012f0000c13d00000000005b04350000000000420435000000240330003900000000054300190000000006000031000000000565004b000001360000a13d000000a0010000410000000f0110017f000000b5211000d10000027e00010430000000b3010000410000000000100435000000410100003900000004020000390000000000120435000000b4010000410000027e000104300000000205000367000000000635034f0000001f0540018f00000020032000390000000507400270000000000870004c000001460000613d00000000080000190000000509800210000000000a930019000000000996034f000000000909043b00000000009a04350000000108800039000000000978004b0000013e0000413d000000000850004c000001550000613d0000000507700210000000000676034f00000000077300190000000305500210000000000807043300000000085801cf000000000858022f000000000606043b0000010005500089000000000656022f00000000055601cf000000000585019f000000000057043500000000044300190000000f05000029000000000054043500000000040b0433000000850500008a000000000554004b000001950000213d0000008405400039000000a80650009c000001950000813d0000002406400039000000aa070000410000000000760435000000200600003900000000006504350000000005020433000000a4024000390000000000520435000000c4074000390000000f06000029000000000256004b0000000002060019000001750000813d000000000206001900000000082700190000000009230019000000000909043300000000009804350000002002200039000000000852004b0000016d0000413d0000000f0200002900020000000b001d0000000003570019000000000063043500000044034000390000006006000039000500000006001d00000000006304350000001f03500039000000000113016f000000400310003900000064054000390000000000350435000000ab030000410000000000340435000000040340003900000000000304350000006001100210000000ac01100041000000ad011001970000004003400210000000ae03300197000000000113019f000000af011001c7000000000320004c0000019f0000c13d000080060200003900000000030004150000000c0330008a00000020033000c9000600000003001d027c022d0000040f000001a70000013d0000000f01000029000000b30200004100000000002104350000004102000039000000040300003900000000002304350000004001100210000000ae01100197000000b4011001c70000027e00010430000000b0032001c70000800902000039000080060400003900000000050004150000000a0550008a00000020055000c9000600000005001d027c025f0000040f000000ff010000390000000602000029000000200220011a000000010312025f0000000001020367000000010230008c000001c30000c13d000000000201043b000600000002001d000000000220004c000001c30000613d0000000f01000029000400000001001d027c027a0000040f0000000002010019000000a80120009c000001ed0000413d000000b3010000410000000402000029000000000012043500000041010000390000000402000039000000000012043500000002010000290000000f011001ef000000ae01100197000000b4011001c70000027e0001043000000005080000290000000f02800029000000000221034f0000004001100370000000000401043b0000001f0340018f000100000004001f000000020100002900000000010104330000000504400270000000000540004c000001d80000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000001d00000413d000000000530004c000001e70000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f00000000002404350000004001100210000000ae0110019700000001028001ff000000b102200197000000000112019f0000027e000104300000000101200039000300000002001d0000000402000029027c02780000040f000700000000001d000800000000001d0000000001000415000000080110008a00000020011000c90000000302000029027c02170000040f000000030100003900000007011001ef000300000001001d0000000801000029000400000001001d027c027a0000040f000000b202000041000000030500002900000000025201cf0000000603000029000000b203300197000000ff0450008c000000000200201900000000035301cf0000000003002019000000000323016f000000010400008a000000000242013f000000000121016f000000000131019f0000000402000029027c02780000040f00000005010000290000000f011001ef000000b101100197000000020200002900000000020204330000004002200210000000ae02200197000000000121019f0000027d0001042e0002000000000002000200000002001d000100000001001d0000000001000019027c027a0000040f0000000203000029000000000131004b000002260000a13d00000000000004350000000101000029000000200210011a000000b702300047000100000200001f0000000200000005000000000001042d000000b3010000410000000000100435000000320100003900000004020000390000000000120435000000b4010000410000027e000104300002000000000002000200000003001d0000002003300039000100000003001d0000023c002104210000000203000029000000200230011a0000000002010355000000a7010000410000000102000029000000200220011a00000000021201bd00000000010300190000000200000005000000000001042d0000000203000029000000200230011a0000000002010355000000ba010000410000000102000029000000200220011a000000000212018d00000000010300190000000200000005000000000001042d0002000000000002000200000003001d0000002003300039000100000003001d00000255002104230000000203000029000000200230011a0000000002010355000000a7010000410000000102000029000000200220011a00000000021201bd00000000010300190000000200000005000000000001042d0000000203000029000000200230011a0000000002010355000000ba010000410000000102000029000000200220011a000000000212018d00000000010300190000000200000005000000000001042d0002000000000002000200000005001d0000002005500039000100000005001d0000026e002104210000000203000029000000200230011a0000000002010355000000a7010000410000000102000029000000200220011a00000000021201bd00000000010300190000000200000005000000000001042d0000000203000029000000200230011a0000000002010355000000ba010000410000000102000029000000200220011a000000000212018d00000000010300190000000200000005000000000001042d000000000012041b000000000001042d000000000101041a000000000001042d0000027c000004320000027d0001042e0000027e00010430000000000000000100000000000000000000000000000000000000000000000000000000ffffffff00000002000000000000000000000000000000400000010000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b8302000200000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000000000000000000000006310c9d000000000000000000000000000000000000000000000000000000004ed3faf200000000000000000000000000000000000000000000000000000000b5966acb80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff01000233b943677f389a3203e9ab4347c199e9437bbcca1f2026e260d1b92cf49c4d535bdea7cd8a978f128b93471df48c7dbab89d703809115bdc118c235bfd00000000000000000000000000000000000000c400000000000000000000000000000000000000000000000000000000ffffffe40000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff4e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000010000000100000000000000000000000000000000000000000000000000000020000000000000000000000000290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563000000000000000000000000000000000000000000000000ffffffffffffff800000000000000000000000000000000000000000ffffffe000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

type BoxFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoxFactory__factory extends ContractFactory {
  constructor(...args: BoxFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoxFactory> {
    return super.deploy(overrides || {}) as Promise<BoxFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoxFactory {
    return super.attach(address) as BoxFactory;
  }
  override connect(signer: Signer): BoxFactory__factory {
    return super.connect(signer) as BoxFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxFactoryInterface {
    return new utils.Interface(_abi) as BoxFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoxFactory {
    return new Contract(address, _abi, signerOrProvider) as BoxFactory;
  }
}
