export default {
  common: {
    testNet: 'TestNet',
    mainNet: 'MainNet',
    copied: 'Copied!',
    confirmPwdTips: 'Please confirm and input the password your wallet.',
    confirmTips: 'Please confirm the transfer.',
    transSentSuccess: 'Transaction has been sent successfully!',
    pwdErr: 'Password error',
    ongNoEnough: 'Transaction does not have enough ONG to process',
    transferFailed: 'Transfer failed. ',
    networkErr: 'Network error!',
    normalWallet: 'Individual wallet',
    sharedWallet: 'Shared wallet',
    hardwareWallet: 'Ledger wallet',
    export: 'Export',
    ledgerNotOpen: 'Ledger not open',
    ledgerNotSupported: 'Ledger not supported',
    pluginDevice: 'Please plugin the device and login.',
    readyToSubmit: 'Ready to submit',
    waitForSign: 'Waiting for sign',
    readyToImport: 'Ready to connect',
    existLocal: 'The wallet is already in local',
    importLedgerSuccess: 'Import ledger wallet successfully.',
    readyToLogin: 'Ready to login',
    walletAddress: 'Wallet Address',
    authentication: 'Authentication',
    confirmation: 'Confirmation',
    enterWalletPassword: 'Please enter your wallet password',
    enterIdentityPassword: 'Please enter your ONT ID password',
    password: 'Password',
    invalidLedger: 'The current ledger dose not match with the wallet.Please try with another ledger device.',
    exportDat: 'Export .dat',
    exportWIF: 'Export WIF',
    changePassword: 'Change Password',
    deleteWallet: 'Delete Wallet',
    more: 'More',
    neoCompatible: 'NEO Address Compatible',
    versionUpdate: 'You can upgrade your OWallet.',
    getLatestVersion: 'Get the latest version here.',
    changePassSuccess: 'Change password successfully',
    changePassSuccessTip: 'You have already changed the password of the wallet. We recommand you to download and backup the .dat file.(Please replace or delete the old .dat file of this wallet.)',
    download: 'Download .dat',
    balanceInsufficient: 'Sorry, your balance is insufficient.',
    exportIdentity: 'Export keystore',
    deleteIdentity: 'Delete ONT ID',
    savedbFailed: 'Save to db file failed.Please make sure you have set the path to save the keystore.db file and try again.'
  },

  TopNav: {
    new: 'New',
    edit: 'Edit'
  },

  basicInfo: {
    InvalidMnemonic: 'Invalid mnemonic.',
    errWif: 'Please enter a valid WIF.'
  },

  SetPaths: {
    name: 'Keystore File Path',
    tips: '*The keystore.db file stores your encrypted private keys. Please make sure your computer is safe and make a backup of your keystore.db file. You need to set a file path for your keystore.',
    close: 'Close',
    enter: 'Set file path'
  },

  identitys: {
    pageTit: 'ONT ID',
    createIdentity: 'Create ONT ID',
    importIdentity: 'Import ONT ID',
    identity: 'Identity',
    ontid: 'ONT ID'
  },

  createIdentity: {
    create: 'Create ONT ID',
    basicInfo: 'Basic info',
    confirmInfo: 'Confirm info',
    label: 'Name of Identity (ONT ID)',
    password: 'Password',
    rePassword: 'Repeat password',
    cancel: 'Cancel',
    next: 'Next',
    ontid: 'ONT ID',
    selectWallet: 'Select Wallet to pay for the transaction fee',
    commonWallet: 'Individual Wallet',
    ledgerWallet: 'Ledger Wallet',
    payerPassword: 'Input the password of your selected wallet',
    selectCommonWallet: 'Select local individual wallet',
    selectOneWallet: 'Please select one individual wallet',
    enterPassword: 'Please enter the password of your selected wallet',
    createSuccess: 'Create ONT ID successfully!'
  },

  importIdentity: {
    import: 'Import ONT ID',
    basicInfo: 'Basic info',
    keystore: 'ONT ID Keystore',
    ontidPassword: 'ONT ID Password',
    label: '',
    passError: 'Password error',
    ontidNotExist: 'The ONT ID to import does not exist on the blockchain',
    keystoreImport: 'ONT ID Keystore Import',
    invalidKeystore: 'The keysotre you input is invalid.'
  },

  wallets: {
    all: 'All Wallets',
    common: 'Individual Wallet',
    shared: 'Shared Wallet',
    temp: 'TEMP',
    createCommonWallet: 'Create Wallet',
    importCommonWallet: 'Import Wallet',
    createSharedWallet: 'Create Wallet',
    joinSharedWallet: 'Join Wallet',
    importLedgerWallet: 'Connect Ledger',
    ledger: 'Ledger Wallet',
    comingSoon: 'Coming soon...',
    ledgerHelpLink: 'How to use?',
    deleteSucceess: 'Delete wallet successfully.',
    deleteFailed: 'Delete wallet failed.',
    deleteingWallet: 'You are about to delete wallet with address: ',
    exportingWallet: 'You are about to export the .dat file of wallet with address: ',
    exportingWIF: 'You are about to export the private key(WIF) of wallet with address: ',
    oldPassword: 'Old password',
    newPassword: 'New password',
    reNewPassword: 'Repeat new password',
    changePassSuccess: 'Change password successfully!',
    exportOntid: 'You are about to export the keystore of identiy with ONT ID:',
    deleteIdentityFailed: 'Delete ONT ID failed',
    deleteIdentitySuccess: 'Delete ONT ID successfully'
  },

  dashboard: {
    getTransErr: 'Fetch transaction history failed. Network error.'
  },

  createJsonWallet: {
    create: 'Create Individual Wallet',
    basicInfo: 'Basic info',
    label: 'Name of Individual Wallet',
    password: 'Password',
    rePassword: 'Repeat password',
    next: 'Next',
    cancel: 'Cancel',
    back: 'Back',
    details: '',
    confirmInfo: 'Confirm info',
    labelN: 'Label',
    addressN: 'Address',
    pubKeyN: 'Public Key',
    signatureSchemeN: 'Signature Scheme',
    wif: 'WIF',
    mnemonic: 'Mnemonic phrase',
    privateKey: 'Private Key',
    backupWallet: 'Please make a backup of these data and save the .dat file.',
    createSuccess:'Create individual wallet successfully.',
    createFail: 'Create individual wallet failed. Please try again.',
    download: "Download .dat",
    privateKey64Hex: 'Private key (64 Hex)',
    priavteKeywif: 'Private key (WIF)',
    keystoreDat: 'Keystore (.dat)'
  },

  importJsonWallet: {
    datFile: 'Select file',
    invalidDatFile: 'Please select the valid keystore (.dat) file.',
    selectedDatFile: 'Selected file: ',
    dat: '.dat File',
    datImportPassword: 'Password to decrypt keystore (.dat)',
    create: 'Import Individual Wallet',
    basicInfo: 'Basic info',
    label: 'Set a new name for the wallet',
    wif: 'WIF',
    wifTip: 'Please enter 52-bit WIF',
    privateKeyTip: 'Please enter private key with 64 byte hex format',
    datPassword: 'New Password',
    datRePassword: 'Repeat New password',
    password: 'Password',
    rePassword: 'Repeat password',
    next: 'Import',
    cancel: 'Cancel',
    back: 'Back',
    details: '',
    confirmInfo: 'Confirm info',
    mnemonic: 'Please use a space to separate each of the words.',
    privateKey: 'Private Key',
    createSuccess: 'Create Individual wallet successfully!',
    confirmImport: 'Confirm Import',
    confirmImportExist: 'The wallet to import is already in your local. Still want to import it?',
    success: 'Import wallet successfully!',
    saveDbFailed: 'Save to keystore failed. Please try later.',
    invalidPrivateKey: 'Please enter valid private key.',
    setPassword: 'Set password'
  },

  createSharedWallet: {
    basicInfo: 'Basic info',
    copayers: 'Copayers',
    processing: 'Processing',
    label: 'Name of Shared Wallet',
    copayers2_12: 'Copayers(2-12)',
    address: 'Address',
    inputPks: 'Input 2 - 12 public keys\' info',
    name: 'Name',
    publicKey: 'Public Key',
    add: '+ Add',
    next: 'Next',
    cancel: 'Cancel',
    back: 'Back',
    importSharedWallet: 'Import Shared Wallet',
    requiredSigNum: 'Number of required signatures ',
    success: 'Success',
    duplicateCreate: 'The shared wallet is already existed.Please import it.',
    createFailed: 'Failed. Please try later.',
    createSuccess: 'Create shared wallet successfully.',
    create: 'Create Shared Wallet',
    walletNameErr: 'Wallet name can not be more than 12 characters',
    emptyLabel: 'Wallet name can not be empty'
  },

  importSharedWallet: {
    import: 'Join Shared Wallet',
    basicInfo: 'Basic info',
    inputPass: 'Input password',
    importSuccess: 'Success',
    inputAddress: 'Address of Shared Wallet',
    search: 'Search',
    name: 'Shared Wallet Name',
    totalCopayerNumber: 'Total number of copayers',
    requiredCopayerNumber: 'Required number of copayers',
    allCopayers: 'Address of all Copayers',
    noResult: 'No result',
    address: 'Address',
    chooseLocalWallet: 'Select local wallet to join',
    localWalletInfo: 'Local wallet detail',
    walletName: 'Wallet Name',
    pk: 'Public Key',
    next: 'Next',
    cancel: 'Cancel',
    back: 'Back',
    join: 'Join',
    inputPassword: 'Enter password to join',
    joinBefore: 'You have joined this wallet before.',
    success: 'Joind shared wallet succeefully!',
    passwordError: 'Password error.',
    sorry: 'Sorry!',
    notFound: 'The shared wallet you are looking for is not found.'
  },

  importLedgerWallet: {
    import: 'Connect Ledger Wallet',
    label: 'Name of Ledger Wallet',
    next: 'Connect',
    neoCompatible: 'NEO Address Compatible'
  },

  sharedWalletHome: {
    send: 'Send',
    receive: 'Receive',
    claim: 'Claim',
    rule: 'Rule',
    copayers: 'Copayers',
    pendingTx: 'Pending Transactions',
    completedTx: 'Completed Transactions',
    owners: 'Owners',
    address: 'Address',
    amount: 'Amount',
    max: 'MAX',
    to: 'To',
    recipient: 'Recipient Address',
    cancel: 'Cancel',
    next: "Next",
    back: 'Back',
    submit: 'Submit',
    asset: 'Asset',
    sponsor: 'Sponsor',
    dragDecide: 'Drag to decide sign sequence',
    fee: 'Fee',
    inputPassword: 'Input Password',
    inputPassToTransfer: 'Input password to complete transfer',
    walletAddress: 'Wallet Address',
    createTime: 'Creation Time',
    balance: 'Balance',
    confirmation: 'Confirmation',
    agreeToSend: 'I confirm the asset amount and recipient address are correct.',
    signSequence: 'Sign sequence',
    sign: 'Sign',
    checkMore: 'Check More',
    publicKey: 'Public Key',
    redeemOng: 'Redeem ONG'
  },

  commonWalletHome: {
    claimableOng: 'Claimable ONG',
    unboundOng: 'Unbound ONG',
    redeem: 'Redeem',
    receive: 'Receive',
    swap: 'Swap',
    walletQrCode: 'Wallet QR Code',
    walletAddress: 'Wallet Address',
    publicKey: 'Public Key',
    redeemCharge: 'Each redeem charges 0.01 ONG',
    inputPass: 'Please input your wallet password',
    emptyPass: 'Password can not be empty',
    cancel: 'Cancel',
    submit: 'Submit',
    swapText: 'Here you can perform the MainNet ONT token swap.Users can exchange Nep-5 ONT for ONT for ONT on the Ontology MainNet.Swap takes up to 1 month, you can check the status on https://swap.ont.io',
    stepFollow: 'Just do as follows:',
    step1: '1. Import your private key(from your NEO wallet) to create a wallet',
    step2: '2. Press [Swap] button to start the swap',
    step3: '3. View the status of your token swap',
    swapAmount: 'Swap Amount',
    nep5Balance: 'Balance of NEP-5 ONT:',
    password: 'Password',
    validAmount: 'Please input valid amount',
    checkMore: 'Check more',
    balance: 'Balance',
    scriptHash: 'Script hash',
    add: '+ Add',
    addOep4: 'Add OEP4 Token',
    enterScripthash: 'Please enter the script hash of oep4 token',
    invalidScriptHash: 'The script hash is invalid',
    addOep4Success: 'Add OEP4 token succeed!',
    noOep4Contract: 'The OEP4 contract is not found',
    networkError: 'Network error!Please try later.',
    oep4Exists: 'You have already added this OEP4 token.'
  },

  transfer: {
    inputValidAmount: 'Please input valid transfer amount.',
    inputValidAddress: 'Please input valid receiver address.',
    exceedBalance: 'Amount of transfer can not exceed your balance.',
    ongBalanceNotEnough: 'Your ONG balance is not enough for transfer and fee.',
    warningTransferAllONG: 'Transferring this amount of ONG means you will not have enough ONG to pay\r\nfor further transaction fees (including claiming unbound ONG). \r\n\r\nContinue?'
  },

  setting: {
    name: 'Setting',
    net: 'Network',
    lang: 'Language',
    testNet: 'TestNet',
    mainNet: 'MainNet',
    en: 'English',
    zh: '中文',
    pathTit: 'Path: ',
    path: 'Save keystore file path',
    change: 'Change',
    setNetworkSuccess: 'The network has been set to ',
    wallets: 'Wallets',
    ontid: 'ONT ID',
    nodeStake: 'Node Stake',
    help: 'Help',
    settings: 'Settings'
  },

  ledgerWallet: {
    nameOfLedgerWallet: 'Name of your ledger wallet',
    info: 'Ledger Info',
    connectApp: 'Please connect to your ledger device and open the ONT app on it.',
    status: 'Device Status',
    labelEmpty: 'Label can not be empty.',
    deviceError: 'Can not connect to device.Please try again.',
    signFailed: 'Sign with ledger failed.'
  },

  ledgerStatus : {
    NOT_FOUND: 'Ledger not open',
    NOT_SUPPORT: 'Ledger not supported',
    NO_DEVICE: 'Please plugin the device and login.',
    READY: 'Ledger is Ready',
    NOT_OPEN: 'The ONT app on ledger is not open.'
  },
  nodeStake: {
    iHaveKnown: 'I Have Known',
    ontid: 'ONT ID',
    nodeStake: 'Node Stake',
    stakeWalletAddress: 'Stake Wallet Address',
    nodePk: 'Node Public Key',
    contract: 'Contract',
    commitmentQuantity: 'Commitment Quantity',
    stakeQuantity: 'Stake Quantity',
    stake: 'Stake',
    feeTip: 'Stake needs 500 ONG for service fee',
    selectOntid: 'Select ONT ID',
    selectStakeWallet:'Select stake wallet',  
    next: 'Next',
    selectIdentity:'Please select your ONT ID',
    selectIndividualWallet: 'Please select your individual wallet',
    selectLedgerWallet: 'Please connect your ledger and open ONT app on it.',
    invalidOntid: 'Invalid ONT ID ',
    invalidAddress: 'Invalid stake wallet address',
    stakeQuantityEmpty: 'Please enter valid stake quantity',
    password: 'Enter Password',
    signWithOntid: 'Sign with ONT ID',
    signWithWallet: 'Sign with stake wallet',
    enterOntidPass: 'Please enter the password of your ONT ID',
    enterWalletPass: 'Please enter the password of your stake wallet',
    back: 'Back',
    recall: 'Recall',
    refund: 'Refund',
    quitNode: 'Quit Node',
    newStake: 'New Stake',
    passwordEmpty: 'Password can not be empty',
    search: 'Search'
  },
  nodeStakeStatus : {
    transfering: 'Transfering',
    transfered: 'Transfered',
    transferFailed: 'Transfer Failed',
    audit: 'Audit',
    auditing: 'Auditing',
    audited: 'Audited',
    auditFailed: 'Audit Failed',
    stake: 'Stake',
    staked: 'Staked',
    nodeExited: 'Node Exited',
    refund: 'Refund',
    refunding: 'Refunding',
    refunded: 'Refunded',
    refundFailed: 'Refund Failed',
    stakeExited: 'Stake Exited',
    quitStake: 'Quit Stake',
    nodeExited: 'Node Exited',
    unfrozenToRefund: 'Unfreeze successfully, you can refund now',
    transferNeedTime: 'Transfer needs a period of time',
    serviceFee: 'Stake needs 500 ONG for service fee',
    auditNeedTime: 'Audit needs a period of time',
    refundNeedTime: 'Refund needs a period of time',
    txFailed: 'Transaction failed.'
  },
  redeemInfo: {
    info: 'Redeem Info',
    claimableOng: `Claimable ONG is the amount of ONG you can claim for a 0.01 ONG fee. This balance will update each time a transaction is made in your wallet address.`,
    unboundOng: `Unbound ONG is an amount of ONG which has not been added to your claimable ONG balance yet (since it only updates each you make a transaction in your wallet address). When a transaction is made in your address, the claimable ONG balance will update (adding your unbound ONG amount to your claimable ONG amount).`,
    claimableOngName: 'Claimable ONG: ',
    unboundOngName: 'Unbound ONG: ',
    noClaimableOng: 'Your claimable ONG is 0. When a transaction of ONT is made in your address, the claimable ONG balance will update'
  },

  nodeMgmt: {
    nodeUser: 'If you are a candidate node, you can stake and manage your stake here.',
    nodeStakeMgmt: 'Node Stake Management',
    normalUser: 'If you are a normal user, you can participate in stake authorization here.',
    stakeAuthorizaton: 'Stake Authorization',
    nodeStake: 'Node Stake',
    userStakeAuthorization: 'User Stake Authorization',
    newStake: 'Submit A New Stake',
    allowStakes: 'Allow stakes from other users',
    deny: 'Deny',
    permit: 'Permit',
    yourStakeAmount: 'Your node stake amount',
    stakeLimit: 'Total max stake limit',
    userNumber: 'Current number of users staking',
    userStake: 'Current total stake of users',
    rewardsPerMonth: 'Estimate total rewards per month',
    rewardsTip: 'Estimate total rewards per month includes your rewards and the rewards of other uesrs staking.',
    rewardProportion: 'Reward proportion for yourself: ',
    current: 'current',
    rewardsProportionTip: '0% indicates the node will share all rewards to stake authorized users.',
    confirm: 'Confirm',
    changesTakeEffect: ' Changes will take effect in two consensus rounds (each round is approximately every 30 days). ',
    stakeAuthorization: 'Stake Authorization',
    toNextRound: 'Next round in',
    rank: 'Rank',
    name: 'Name',
    currentStake: 'Current total stake',
    process: 'Stake progress',
    changes: 'Changes',
    userParticipate: 'Only proceed if you want to participate in stake authorization!',
    nodeName: 'Node name',
    walletAddress: 'Your wallet address',
    inAuthorization: 'Total authorized stake',
    cancelStakeAuthorization: 'Cancel stake authorization',
    locked: 'Locked',
    claimable: 'Redeemable',
    redeem: 'Redeem',
    profit: 'Profit',
    rewards: 'Rewards',
    newStakeAuthorization: 'Submit new stake authorization',
    cancelAuthorization: 'Cancel stake authorization',
    units: 'Units of stake authorization',
    stakeAmountTip: 'Stake amount = input number * 500 ONT/unit.',
    stakeAmount: 'Stake amount',
    submit: 'Submit',
    allowedStakeUnits: 'Allowed stake unit',
    allowedStakeAmount: 'Allowed stake amount',
    noChange: 'You did not make a change.',
    noRewards: 'No rewards to redeem.',
    switchWallet: 'Switch wallet',
    noClaimableOnt: 'No redeemable ONT',
    amountToCancel: 'Amount to cancel',
    unitToCancel: 'Units to cancel',
    invalidInput: 'Please enter valid value.',
    peerNotAllowAuthorize: 'This peer does not allow authorization now.',
    addInitPos: 'Add to stake',
    reduceInitPos: 'Reduce stake',
    amountToAdd: 'Amount To Add',
    amountToReduce: 'Amount To Reduce',
    notThanCommitment: 'Initial stake can not be less than the commitment stake.',
    notLessTotalPos: 'The initial stake amount is too small.',
    notThanMax: 'Allowed stake can not be more than the max stake limit.',
    refresh: 'Refresh',
    totalStakeAmount: 'Total Authorization Amount',
    blocks: 'Blocks',
    proportionNextRound: "Reward proportion for others",
    proportionNextRoundTip: 'This is the portion of rewards received the node has chosen to share with users who have authorized stakes with them in the next consensus round.',
    nodeAndUser: 'Node / User',
    authorizeTip: `If new stake is cancelled it will be cancelled immediately and be shown as redeemable ONT. If authorized ONT from previous consensus rounds is cancelled it will be redeemable only at the beginning of the next consensus round for candidate nodes (or one round later for consensus nodes). If a user has both authorized ONT from this consensus round and a previous consensus round and cancels an ONT amount exceeding the amount from this consensus round, they will receive authorized ONT from this consensus round first and the remaining authorized ONT in the next consensus round.`,
    rewardTip: `All transactions fees received by Ontology are distributed to all candidate nodes and consensus nodes - 50% to each group.
Within their 50% share each candidate node will receive their share linearly according to their stake amount.
Within their 50% share each consensus node will receive their share according to their stake amount, which is subject to the incentive curve that discourages too high stakes.
`,
    unboundOng: 'Unbound ONG',
    activeT: 'Active in current round',
    activeT1: 'Active in next round',
    activeT2: 'Active in next 2 round',
    changeRewardProportion: 'Change Reward Proportion',
    edit: 'Edit',
    stakeHistory: 'My Stake',
    cancelUnits: 'units',
    stakeWalletAddress: 'Stake wallet address',
    lastUpdate: 'Last update time',
    walletRewardTip: 'This is all the reward of your wallet in current round.',
    switchMainnet: 'Please switch to MainNet.',
    consensusNode: 'Consensus node',
    candidateNode: 'Candidate consensus node',
    lockedONT: 'Your locked ONT is your authorized stake amount currently held in a smart contract. Once it is available to be withdrawn, it will appear as redeemable ONT.',
    unboundONG: 'This is the unbound ONG amount of your authorized ONT stake.',
    profitONG: 'This is the transaction fee profit you have made. This will update at the beginning of each new consensus round.',
    getProfitPart: 'Already receiving profit portion',
    newStakePart: 'New stake portion',
    claimableONT: 'Claimable ONT'
},
exchange: {
  exchange: 'Exchange',
  changelly: 'Changelly', 
  cryptonex: 'Cryptonex',
  loading: 'Loading latest pricing information, please wait..'
 }
}
