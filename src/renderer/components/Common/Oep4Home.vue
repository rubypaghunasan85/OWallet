<style scoped>
.content-container {
    display: flex;
    padding:10px;
  }

  .left-half {
    flex-basis: 50%;
    padding-right: 40px;

  }
  .oep4-container {
      max-height:360px;
      overflow-y:auto;
  }

  .right-half {
    flex-basis: 50%;
  }
  .home-title {
      display: flex;
      align-items: center;
      margin-bottom:20px;
  }
  .home-title p {
      font-size: 20px;
      font-weight: 500;
      margin:0;
      margin-right:15px;
  }
  .oep4-item {
      margin-bottom: 15px;
  }

  .oep4-item div {
      display: flex;
      align-items: center;
  }
   .asset-label {
    font-family: AvenirNext-Medium;
    font-size: 16px;
    color: #515457;
    float: left;
    margin-right: 12px;
  }

  .asset-amount {
    font-family: AvenirNext-Medium;
    font-size: 16px;
    color: #000000;
  }
  .asset-scriptHash {
    font-family: AvenirNext-Medium;
    font-size: 14px;
    color: #000000;
  }
  .oep4-btns {
      margin-top:30px;
  }
   .asset-btn {
    border-radius: 0;
    background: #196BD8;
    font-family: AvenirNext-Medium;
    font-size: 14px;
    color: #FFFFFF;
    width: 100px;
    height: 34px;
    margin-right: 40px;
    margin-bottom: 60px;
    border: none;
  }
    .refresh-icon {
    display: inline-block;
    height: 24px;
    width: 24px;
    background: url('../../assets/refresh.png') center center;
    background-size:cover;
    cursor: pointer;
  }
  .txList-header {
    padding-bottom: 5px;
    border-bottom: 1px solid #DFE2E9;
    position: relative;
  }

  .txList-header :first-child {
    font-family: AvenirNext-Bold;
    font-size: 14px;
    color: #000000;
    text-align: center;
  }

  .txList-header :last-child {
    width: 64px;
    height: 64px;
    display: block;
    float: right;
    background: url('../../assets/transaction.png');
    background-size: contain;
    top: -20px;
    right: 0;
    position: absolute;
  }
  .tx-item {
    float: left;
    margin: 5px 0;
    cursor: pointer;
  }

  .tx-item :first-child {
    width: 65%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: AvenirNext-Medium;
    font-size: 12px;
    color: #6F7781;
  }

  .tx-item :last-child {
    width: 30%;
    text-align: right;
    float: right;
    display: block;
    font-family: AvenirNext-Medium;
    font-size: 12px;
    color: #000000;
  }
.check-more {
    font-family: AvenirNext-Medium;
    font-size: 12px;
    color: #227EEC;
    text-align: center;
    cursor: pointer;
    width:100%;
    float:left;
  }
</style>

<template>
    <div>
        <breadcrumb :current="$t('sharedWalletHome.send')" :routes="routes"
                v-on:backEvent="handleBack"></breadcrumb>
        
        <div class="content-container">
            <div class="left-half">
                <div class="oep4-container">
                    <div class="home-title">
                        <p>OEP-4 Tokens</p>
                        <span class="refresh-icon" @click="refresh"></span>
                    </div>
                    
                    <div class="oep4-item" v-for="(token,index) of oep4s" :key="index" v-if="token.net === net">
                        <div class="font-medium-black">{{token.symbol}} - {{token.name}}</div>
                        <div class="oep4-balance">
                            <span class="asset-label">{{$t('commonWalletHome.balance')}}: </span>
                            <span class="asset-amount">{{token.balance}}</span>
                        </div>
                        <div class="">
                            <span class="asset-label">{{$t('commonWalletHome.scriptHash')}}: </span>
                            <span class="asset-scriptHash">{{token.scriptHash}}</span>
                        </div>
                    </div>

                    <a-button @click="handleAdd">{{$t('commonWalletHome.add')}}</a-button>
                </div>
                <div class="oep4-btns">
                    <a-button class="asset-btn" type="primary" @click="sendAsset">
                        <i class="arrow-up"></i>
                        {{$t('sharedWalletHome.send')}}
                    </a-button>
                    <a-button class="asset-btn" type="primary" @click="commnReceive">
                        <i class="arrow-down"></i>
                        {{$t('sharedWalletHome.receive')}}
                    </a-button>
                </div>
            </div>
            <div class="right-half">
                <div class="completed-tx">
                    <div class="txList-header">
                        <span>{{$t('sharedWalletHome.completedTx')}}</span>
                        <span class="transfer-icon"></span>
                    </div>
                    <div v-for="(tx,index) in completedTx" :key="tx.txHash+index" class="tx-item" v-if="index<10"
                        @click="showTxDetail(tx.txHash)">
                        <span>{{tx.txHash}}</span>
                        <span>{{tx.amount}} {{tx.asset}}</span>
                    </div>
                    <div class="check-more" v-if="completedTx.length > 6" @click="checkMoreTx">
                        {{$t('sharedWalletHome.checkMore')}}>>
                    </div>
                </div>
            </div>
          </div>

        <a-modal 
            :title="$t('commonWalletHome.addOep4')"
            :visible="showModal"
            @ok="handleAddOep4"
            @cancel="handleCancel">
            <div>
                <div>
                    <p>{{$t('commonWalletHome.enterScripthash')}}</p>
                    <a-input class="input" v-model="scriptHash"  ></a-input>
                </div>   
            </div>
        </a-modal>  
    </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb'
import {mapState} from 'vuex'
import { TEST_NET } from '../../../core/consts'
const {BrowserWindow} = require('electron').remote;

export default {
    name: 'Oep4Home',
    data() {
        const currentWallet = JSON.parse(sessionStorage.getItem('currentWallet'))
        const net = localStorage.getItem('net')
        return {
            walletName: currentWallet.label,
            currentWallet,
            routes: [{name: currentWallet.label, path: '/dashboard'}],
            showModal: false,
            scriptHash: '',
            net: net
        }
    },
    components:{
        Breadcrumb
    },
    mounted() {
        this.refresh()
    },
    computed:{
        ...mapState({
            oep4s: state => state.Oep4s.oep4s,
            balance: state => state.Oep4s.balance,
            completedTx: state => state.Oep4s.completedTx
        })
    },
    methods: {
        refresh() {
            this.$store.dispatch('queryBalanceForOep4', this.currentWallet.address)
            this.$store.dispatch('queryTxForOep4', {address: this.currentWallet.address, oep4s: this.oep4s})
        },
        handleBack() {
            this.$router.push({name: 'Wallets'})
        },
        handleAdd() {
            this.showModal = true;
        },
        handleCancel() {
            this.showModal = false;
            this.scriptHash = ''
        },
        handleAddOep4(){
            if(!this.scriptHash || this.scriptHash.trim().length !== 40) {
                this.$message.error(this.$t('commonWalletHome.invalidScriptHash'))
                return;
            }
            for(let i = 0 ; i < this.oep4s.length; i++) {
                if(this.oep4s[i].scriptHash === this.scriptHash) {
                    this.$message.warning(this.$t('commonWalletHome.oep4Exists'))
                    return;
                }
            }
            this.$store.dispatch('showLoadingModals')
            this.$store.dispatch('addOep4Token', {
                scriptHash: this.scriptHash,
                address: this.currentWallet.address
            }).then(res => {
                this.$store.dispatch('hideLoadingModals')
                if(res === 'ADD_SUCCESS') {
                    this.showModal = false;
                    this.scriptHash = '';
                    this.$message.success(this.$t('commonWalletHome.addOep4Success'))
                } else if(res === 'NO_CONTRACT') {
                    this.$message.success(this.$t('commonWalletHome.noOep4Contract'))
                } else if (res === 'NETWORK_ERROR') {   
                    this.$message.success(this.$t('commonWalletHome.networkError'))
                }
            })
        },
        sendAsset() {
            if(Number(this.balance.ong) < 0.01) {
            this.$message.warning(this.$t('common.ongNoEnough'))
            return;
            }
            this.$store.commit('CLEAR_CURRENT_TRANSFER');
            this.$store.dispatch('queryBalanceForOep4', this.currentWallet.address)
            this.$router.push({name: 'CommonSendHome'})
        },
        commnReceive() {
            this.$router.push({path: '/commonWalletReceive/commonWallet'})
        },
        showTxDetail(txHash) {
            let url = `https://explorer.ont.io/transaction/${txHash}`
            if (this.net === 'TEST_NET') {
                url += '/testnet'
            }
            let win = new BrowserWindow({width: 1280, height: 800, center: true});
            win.on('closed', () => {
                win = null
            })
            win.loadURL(url)
        },
        checkMoreTx() {
        let url = `https://explorer.ont.io/address/${this.address}/10/1`
            if (this.net === 'TEST_NET') {
                url += '/testnet'
            }
            let win = new BrowserWindow({width: 1280, height: 800, center: true});
            win.on('closed', () => {
            win = null
            })
            win.loadURL(url)
        },
    }
}
</script>

