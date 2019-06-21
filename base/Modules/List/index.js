/*
 List/index.js
*/

export default class {
  constructor() {
    this.url = window.location.origin
    this.endPoint = `${this.url}/assets/json/settlementCompanyTypeB.json`
    this.selectors = {
      searchItemsWrapper: document.querySelector('.fn-search-items-wrapper'),
      freeWordBox: document.querySelector('.fn-free-word'),
      searchButton: document.querySelector('.fn-search-button'),
      lists: document.querySelector('.fn-lists')
    }
    /*
    Dictionaries Below = {
      Letter of Display on View : [ Status in Operation, Input Value & Selector Properties, JSON Value, JSON Value ]
    }
    */
    this.paymentMethodDictionary = {
      クレジットカード: [true, 'credit-card', 'クレジットカード'],
      電子マネー: [true, 'electronic-money', '電子マネー'],
      QRコード: [true, 'qr-code', 'QRコード'],
      その他: [true, 'other-payment', 'その他'],
      デビットカード: [false, 'debit-card', null]
    }
    this.usageTerminalDictionary = {
      タブレット: [true, 'tablet', 'タブレット'],
      モバイル端末: [true, 'mobile', '持ち運び可能な端末（モバイル決済端末）'],
      据置型端末: [true, 'stationary-terminal', '店頭に設置する端末（据置型端末）'],
      端末不要: [true, 'no-terminal-required', '端末不要'],
      その他: [true, 'other', 'その他'],
      タブレット以外: [false, 'other-than-tablet', '持ち運び可能な端末（タブレット以外）'],
      blank: [false, 'blank', ' ']
    }
    this.rateHandlingDictionary = {
      継続: [true, 'continuation', '継続'],
      非継続: [true, 'discontinuation', '非継続'],
      一定期間継続: [true, 'fixed-period', '一定期間継続'],
      決済手段によって異なる: [true, 'depends-payment', '決済手段によって異なる']
    }
    this.paymentTimingDictionary = {
      翌月一括: [true, 'monthly-summing-up', '翌月一括'],
      複数回: [true, 'multiple', '複数回'],
      毎週: [true, 'every-week', '毎週'],
      その他: [true, 'other-timing', 'その他']
    }
    this.providerAreaDictionary = {
      全国: [true, 'zenkoku', '全国', ''],
      北海道: [true, 'hokkaido', '', '北海道'],
      東北: [true, 'tohoku', '東北', ''],
      青森県: [true, 'aomori', '東北', '青森県'],
      岩手県: [true, 'iwate', '東北', '岩手県'],
      秋田県: [true, 'akita', '東北', '秋田県'],
      宮城県: [true, 'miyazaki', '東北', '宮城県'],
      山形県: [true, 'yamagata', '東北', '山形県'],
      福島県: [true, 'fukushima', '東北', '福島県'],
      関東: [true, 'kanto', '関東', ''],
      茨城県: [true, 'ibaraki', '関東', '茨城県'],
      栃木県: [true, 'tochigi', '関東', '栃木県'],
      群馬県: [true, 'gunma', '関東', '群馬県'],
      埼玉県: [true, 'saitama', '関東', '埼玉県'],
      千葉県: [true, 'chiba', '関東', '千葉県'],
      東京都: [true, 'tokyo', '関東', '東京都'],
      神奈川県: [true, 'kanagawa', '関東', '神奈川県'],
      中部: [true, 'tyubu', '中部', ''],
      新潟県: [true, 'niigata', '中部', '新潟県'],
      富山県: [true, 'toyama', '中部', '富山県'],
      石川県: [true, 'ishikawa', '中部', '石川県'],
      福井県: [true, 'fukui', '中部', '福井県'],
      山梨県: [true, 'yamanashi', '中部', '山梨県'],
      長野県: [true, 'nagano', '中部', '長野県'],
      岐阜県: [true, 'gifu', '中部', '岐阜県'],
      静岡県: [true, 'shizuoka', '中部', '静岡県'],
      愛知県: [true, 'aichi', '中部', '愛知県'],
      近畿: [true, 'kinki', '近畿', ''],
      三重県: [true, 'mie', '近畿', '三重県'],
      滋賀県: [true, 'shiga', '近畿', '滋賀県'],
      奈良県: [true, 'nara', '近畿', '奈良県'],
      和歌山県: [true, 'wakayama', '近畿', '和歌山県'],
      京都府: [true, 'kyoto', '近畿', '京都府'],
      大阪府: [true, 'osaka', '近畿', '大阪府'],
      兵庫県: [true, 'hyogo', '近畿', '兵庫県'],
      中国: [true, 'tyugoku', '中国', ''],
      岡山県: [true, 'okayama', '中国', '岡山県'],
      広島県: [true, 'hiroshima', '中国', '広島県'],
      鳥取県: [true, 'tottori', '中国', '鳥取県'],
      島根県: [true, 'shimane', '中国', '島根県'],
      山口県: [true, 'yamaguchi', '中国', '山口県'],
      四国: [true, 'shikoku', '四国', ''],
      香川県: [true, 'kagawa', '四国', '香川県'],
      徳島県: [true, 'tokushima', '四国', '徳島県'],
      愛媛県: [true, 'ehime', '四国', '愛媛県'],
      高知県: [true, 'kochi', '四国', '高知県'],
      九州: [true, 'kyushu', '九州', ''],
      福岡県: [true, 'fukuoka', '九州', '福岡県'],
      佐賀県: [true, 'saga', '九州', '佐賀県'],
      長崎県: [true, 'nagasaki', '九州', '長崎県'],
      大分県: [true, 'oita', '九州', '大分県'],
      熊本県: [true, 'kumamoto', '九州', '熊本県'],
      宮崎県: [true, 'miyazaki', '九州', '宮崎県'],
      鹿児島県: [true, 'kagoshima', '九州', '鹿児島県'],
      沖縄県: [true, 'okinawa', '九州', '沖縄県']
    }
    /*
    Dictionary Below = {
      Letter of Display on View : [ Status in Operation, Input Value, Selector Class ]
    }
    */
    this.periodPaymentRateDictionary = {
      '0.00%': [true, 0, 'low'],
      '〜0.50%': [true, 0.5, 'second'],
      '〜1.00%': [true, 1, 'third'],
      '〜1.50%': [true, 1.5, 'fourth'],
      '〜2.00%': [true, 2, 'fifth'],
      '〜2.50%': [true, 2.5, 'sixth'],
      '〜3.00%': [true, 3, 'seventh'],
      '〜3.25%': [true, 3.25, 'high']
    }
    // Use to Render Icons on Providers List.
    this.paymentMethodIconDictionary = {
      クレジットカード: 'icon_card_cc',
      電子マネー: 'icon_card_ic',
      QRコード: 'icon_card_qr',
      その他: 'icon_card_et',
      デビットカード: 'icon_card_jd'
    }
    // Array to Store Each Data.
    this.store = {
      initializeData: [],
      paymentMethodCheckBoxData: [],
      usageTerminalCheckBoxData: [],
      periodPaymentSelectBoxData: [],
      rateHandlingSelectBoxData: [],
      paymentTimingSelectBoxData: [],
      provideAreaSelectBoxData: [],
      freeWordData: []
    }
  }

  resolvedPromise(arg) {
    return new Promise(resolve => resolve(arg))
  }

  async getData() {
    try {
      const getData = await fetch(this.endPoint)
      this.store.initializeData = await getData.json()
    } catch (error) {
      console.error('error: ', error)
    }
  }

  initializeList() {
    // '.fn-data-list' is Virtual DOM, Don't into Constructor.
    Array.from(document.querySelectorAll('.fn-data-list'), dataList => dataList.remove())
  }

  /*
  Render CheckBox 決済手段.
  */
  renderPaymentMethodCheckBox() {
    const createEachCheckBoxWrapperElement = document.createElement('dl')
    createEachCheckBoxWrapperElement.classList.add('each-checkbox-wrapper')
    createEachCheckBoxWrapperElement.innerHTML = `
      <dt class="each-checkbox-heading">決済手段</dt>
      <dd class="each-checkbox-data fn-checkbox-payment-method"></dd>
    `
    if (this.selectors.searchItemsWrapper) {
      this.selectors.searchItemsWrapper.appendChild(createEachCheckBoxWrapperElement)
    }

    Object.keys(this.paymentMethodDictionary).map(info => {
      if (this.paymentMethodDictionary[info][0]) {
        const createEachCheckBoxElement = document.createElement('span')
        createEachCheckBoxElement.classList.add('each-checkbox')
        createEachCheckBoxElement.innerHTML = `
          <input
           type="checkbox"
           id="${this.paymentMethodDictionary[info][1]}"
           class="checkbox-input checkbox-input-payment-method fn-checkbox-input fn-checkbox-input-payment-method"
           value="${this.paymentMethodDictionary[info][1]}">
          <label
           for="${this.paymentMethodDictionary[info][1]}"
           class="checkbox-label checkbox-label-payment-method
           ${this.paymentMethodDictionary[info][1]}">
           ${info}
          </label>
        `
        if (document.querySelector('.fn-checkbox-payment-method')) {
          document.querySelector('.fn-checkbox-payment-method').appendChild(createEachCheckBoxElement)
        }
      }
    })
  }

  /*
  Render CheckBox 利用決済端末.
  */
  renderUsageTerminalCheckBox() {
    const createEachCheckBoxWrapperElement = document.createElement('dl')
    createEachCheckBoxWrapperElement.classList.add('each-checkbox-wrapper')
    createEachCheckBoxWrapperElement.innerHTML = `
      <dt class="each-checkbox-heading">利用決済端末</dt>
      <dd class="each-checkbox-data fn-checkbox-usage-terminal"></dd>
    `
    if (this.selectors.searchItemsWrapper) {
      this.selectors.searchItemsWrapper.appendChild(createEachCheckBoxWrapperElement)
    }
    Object.keys(this.usageTerminalDictionary).map(info => {
      if (this.usageTerminalDictionary[info][0]) {
        const createEachCheckBoxElement = document.createElement('span')
        createEachCheckBoxElement.classList.add('each-checkbox')
        createEachCheckBoxElement.innerHTML = `
          <input
           type="checkbox"
           id="${this.usageTerminalDictionary[info][1]}"
           class="checkbox-input checkbox-input-usage-terminal fn-checkbox-input fn-checkbox-input-usage-terminal"
           value="${this.usageTerminalDictionary[info][1]}">
          <label
           for="${this.usageTerminalDictionary[info][1]}"
           class="checkbox-label
           ${this.usageTerminalDictionary[info][1]}">
           ${info}
          </label>
        `
        if (document.querySelector('.fn-checkbox-usage-terminal')) {
          document.querySelector('.fn-checkbox-usage-terminal').appendChild(createEachCheckBoxElement)
        }
      }
    })
  }

  /*
  Render SelectBox 期間中手数料.
  */
  renderPeriodPaymentRateSelectBox() {
    let option = `<option value="">選択して下さい</option>`
    const createEachSelectBoxWrapperElement = document.createElement('dl')
    createEachSelectBoxWrapperElement.classList.add('each-select-wrapper')
    createEachSelectBoxWrapperElement.innerHTML = `
      <dt class="each-select-heading">期間中手数料</dt>
      <dd class="each-select-data-wrapper">
        <select class="each-select-data fn-select-period-payment-rate"></select>
      </dd>
    `
    if (this.selectors.searchItemsWrapper) {
      this.selectors.searchItemsWrapper.appendChild(createEachSelectBoxWrapperElement)
    }
    Object.keys(this.periodPaymentRateDictionary).map(info => {
      if (this.periodPaymentRateDictionary[info][0]) {
        option += `
          <option
           value="${this.periodPaymentRateDictionary[info][1]}"
           class="${this.periodPaymentRateDictionary[info][2]}">
            ${info}
          </option>
        `
      }
    })
    if (document.querySelector('.fn-select-period-payment-rate')) {
      document.querySelector('.fn-select-period-payment-rate').innerHTML = option
    }
  }

  /*
  Render SelectBox 期間終了後の手数料の取扱い.
  */
  renderRateHandlingSelectBox() {
    let option = `<option value="">選択して下さい</option>`
    const createEachSelectBoxWrapperElement = document.createElement('dl')
    createEachSelectBoxWrapperElement.classList.add('each-select-wrapper')
    createEachSelectBoxWrapperElement.innerHTML = `
      <dt class="each-select-heading">期間終了後の手数料の取扱い</dt>
      <dd class="each-select-data-wrapper">
        <select class="each-select-data fn-select-rate-handling"></select>
      </dd>
    `
    if (this.selectors.searchItemsWrapper) {
      this.selectors.searchItemsWrapper.appendChild(createEachSelectBoxWrapperElement)
    }
    Object.keys(this.rateHandlingDictionary).map(info => {
      if (this.rateHandlingDictionary[info][0]) {
        option += `
          <option
           value="${this.rateHandlingDictionary[info][1]}"
           class="${this.rateHandlingDictionary[info][1]}">
            ${info}
          </option>
        `
      }
    })
    if (document.querySelector('.fn-select-rate-handling')) {
      document.querySelector('.fn-select-rate-handling').innerHTML = option
    }
  }

  /*
  Render SelectBox 入金タイミング.
  */
  renderPaymentTimingSelectBox() {
    let option = `<option value="">選択して下さい</option>`
    const createEachSelectBoxWrapperElement = document.createElement('dl')
    createEachSelectBoxWrapperElement.classList.add('each-select-wrapper')
    createEachSelectBoxWrapperElement.innerHTML = `
      <dt class="each-select-heading">入金タイミング</dt>
      <dd class="each-select-data-wrapper">
        <select class="each-select-data fn-select-payment-timing"></select>
      </dd>
    `
    if (this.selectors.searchItemsWrapper) {
      this.selectors.searchItemsWrapper.appendChild(createEachSelectBoxWrapperElement)
    }
    Object.keys(this.paymentTimingDictionary).map(info => {
      if (this.paymentTimingDictionary[info][0]) {
        option += `
          <option
           value="${this.paymentTimingDictionary[info][1]}"
           class="${this.paymentTimingDictionary[info][1]}">
             ${info}
          </option>
        `
      }
    })
    if (document.querySelector('.fn-select-payment-timing')) {
      document.querySelector('.fn-select-payment-timing').innerHTML = option
    }
  }

  /*
  Render SelectBox 提供エリア.
  */
  renderProvideAreaSelectBox() {
    let option = `<option value="">選択して下さい</option>`
    const createEachSelectBoxWrapperElement = document.createElement('dl')
    createEachSelectBoxWrapperElement.classList.add('each-select-wrapper')
    createEachSelectBoxWrapperElement.innerHTML = `
    <dt class="each-select-heading">提供エリア</dt>
    <dd class="each-select-data-wrapper">
      <select class="each-select-data fn-select-provider-area"></select>
    </dd>
  `
    if (this.selectors.searchItemsWrapper) {
      this.selectors.searchItemsWrapper.appendChild(createEachSelectBoxWrapperElement)
    }
    Object.keys(this.providerAreaDictionary).map(info => {
      if (this.providerAreaDictionary[info][0]) {
        option += `
          <option
           value="${this.providerAreaDictionary[info][1]}"
           class="${this.providerAreaDictionary[info][1]}">
             ${info}
          </option>
        `
      }
    })
    if (document.querySelector('.fn-select-provider-area')) {
      document.querySelector('.fn-select-provider-area').innerHTML = option
    }
  }

  /*
  Render Data List Core.
  */
  render(addData) {
    let renderData = ''
    if (addData.length > 0) {
      addData.map(info => {
        // prettier-ignore
        renderData += `
        <a href="${this.url}/franchise/settlement-company-typeB-detail.html?dataID=${info.dataID}" class="data-list fn-data-list">
          <dl class="data-list-heading">
            <dt class="data-list-heading-letter">
              ${info.決済事業者}
            </dt>
            <dd class="data-list-heading-logo">
              <img src="/assets/img/${info.ロゴ画像}" class="data-list-heading-logo-image" />
            </dd>
          </dl>
          <dl class="data-list-icon-wrapper">
            <dt class="data-list-icon-heading">
              <span class="heading-cube"></span>
              <span class="heading-letter">利用可能な決済手段</span>
            </dt>
            <dd class="data-list-icon-detail">
              ${info.利用可能な決済手段.length > 0 ? info.利用可能な決済手段.map(paymentMethodInfo => `<span class="icon-inner"><img src="/assets/img/${this.paymentMethodIconDictionary[paymentMethodInfo]}.png" class="icon-image"></span>`).toString().replace(/,/g, '') : ''}
            </dd>
          </dl>
          <div class="data-list-letter-wrapper">
            <dl class="data-list-letter-inner">
              <dt class="data-list-letter-heading">
                <span class="heading-cube"></span>
                <span class="heading-letter">利用料率</span>
              </dt>
              <dd class="data-list-letter-detail">
                ${info.利用料率}
              </dd>
            </dl>
            <dl class="data-list-letter-inner">
              <dt class="data-list-letter-heading">
                <span class="heading-cube"></span>
                <span class="heading-letter">利用決済端末</span>
              </dt>
              <dd class="data-list-letter-detail">
                ${info.利用決済端末}
              </dd>
            </dl>
            <dl class="data-list-letter-inner">
              <dt class="data-list-letter-heading">
                <span class="heading-cube"></span>
                <span class="heading-letter">期間終了後の<br class="display-mobile">手数料の取扱い</span>
              </dt>
              <dd class="data-list-letter-detail">
                ${info.期間終了後の手数料の取扱い}
              </dd>
            </dl>
            <dl class="data-list-letter-inner">
              <dt class="data-list-letter-heading">
                <span class="heading-cube"></span>
                <span class="heading-letter">入金<br class="display-mobile">タイミング</span>
              </dt>
              <dd class="data-list-letter-detail">
                ${info.入金タイミング}
              </dd>
            </dl>
          </div>
        </a>
      `
      })
    } else {
      renderData = `
      <div class="data-list fn-data-list no-data">
        該当データが有りません。
      </div>
    `
    }
    if (this.selectors.lists) {
      this.selectors.lists.innerHTML = renderData
    }
  }

  /*
  Search CheckBox 決済手段.
  */
  searchPaymentMethodCheckBox() {
    if (this.selectors.searchItemsWrapper) {
      const checkBoxPaymentMethodSelectors = document.querySelectorAll('.fn-checkbox-input-payment-method')
      this.store.paymentMethodCheckBoxData = this.store.initializeData
      Array.from(checkBoxPaymentMethodSelectors, selector => {
        selector.addEventListener('change', () => {
          const checkedList = []
          Array.from(checkBoxPaymentMethodSelectors)
            .filter(checkSelector => {
              if (checkSelector.checked) return checkSelector
            })
            .map(activeCheckBox => {
              Object.keys(this.paymentMethodDictionary).filter(keyInfo => {
                if (this.paymentMethodDictionary[keyInfo].includes(activeCheckBox.id)) {
                  checkedList.push(this.paymentMethodDictionary[keyInfo][2])
                }
              })
            })
          this.store.paymentMethodCheckBoxData = this.store.initializeData.filter(dataInfo => {
            if (checkedList.length === 0) {
              return dataInfo
            }
            for (let i = 0; i < checkedList.length; i++) {
              if (dataInfo.利用可能な決済手段.includes(checkedList[i])) {
                return dataInfo
              }
            }
          })
        })
      })
    }
  }

  /*
  Search CheckBox 利用決済端末.
  */
  searchUsageTerminalCheckBox() {
    if (this.selectors.searchItemsWrapper) {
      const checkBoxUsageTerminalSelectors = document.querySelectorAll('.fn-checkbox-input-usage-terminal')
      this.store.usageTerminalCheckBoxData = this.store.initializeData
      Array.from(checkBoxUsageTerminalSelectors, selector => {
        selector.addEventListener('change', () => {
          const checkedList = []
          Array.from(checkBoxUsageTerminalSelectors)
            .filter(checkSelector => {
              if (checkSelector.checked) return checkSelector
            })
            .map(activeCheckBox => {
              Object.keys(this.usageTerminalDictionary).filter(keyInfo => {
                if (this.usageTerminalDictionary[keyInfo].includes(activeCheckBox.id)) {
                  checkedList.push(this.usageTerminalDictionary[keyInfo][2])
                }
              })
            })
          this.store.usageTerminalCheckBoxData = this.store.initializeData.filter(dataInfo => {
            if (checkedList.length === 0) {
              return dataInfo
            }
            for (let i = 0; i < checkedList.length; i++) {
              if (dataInfo.利用決済端末 === checkedList[i]) {
                return dataInfo
              }
            }
          })
        })
      })
    }
  }

  /*
  Search SelectBox 期間中手数料.
  */
  searchPeriodPaymentRateSelectBox() {
    if (this.selectors.searchItemsWrapper) {
      const selectBoxPeriodPaymentSelector = document.querySelector('.fn-select-period-payment-rate')
      this.store.periodPaymentSelectBoxData = this.store.initializeData
      selectBoxPeriodPaymentSelector.addEventListener('change', event => {
        const getValue = event.currentTarget.value
        this.store.periodPaymentSelectBoxData = this.store.initializeData.filter(dataInfo => {
          if (getValue === '') {
            return dataInfo
          }
          const processingNumber =
            dataInfo.利用料率.lastIndexOf('%') > -1 ? dataInfo.利用料率.slice(dataInfo.利用料率.lastIndexOf('~') + 1, dataInfo.利用料率.lastIndexOf('%')) : ''
          if (processingNumber !== '' && Number(getValue) >= Number(processingNumber)) {
            return dataInfo
          }
        })
      })
    }
  }

  /*
  Search SelectBox 期間終了後の手数料の取扱い.
  */
  searchRateHandlingSelectBox() {
    if (this.selectors.searchItemsWrapper) {
      const selectBoxRateHandlingSelector = document.querySelector('.fn-select-rate-handling')
      this.store.rateHandlingSelectBoxData = this.store.initializeData
      selectBoxRateHandlingSelector.addEventListener('change', event => {
        const getValue = Object.keys(this.rateHandlingDictionary)
          .map(keyInfo => {
            if (this.rateHandlingDictionary[keyInfo].includes(event.currentTarget.value)) {
              return this.rateHandlingDictionary[keyInfo][2]
            }
          })
          .filter(info => info !== undefined)
        this.store.rateHandlingSelectBoxData = this.store.initializeData.filter(dataInfo => {
          if (getValue.length === 0) {
            return dataInfo
          }
          if (dataInfo.期間終了後の手数料の取扱い === getValue[0]) {
            return dataInfo
          }
        })
      })
    }
  }

  /*
  Search SelectBox 入金タイミング.
  */
  searchPaymentTimingSelectBox() {
    if (this.selectors.searchItemsWrapper) {
      const selectBoxPaymentTimingSelector = document.querySelector('.fn-select-payment-timing')
      this.store.paymentTimingSelectBoxData = this.store.initializeData
      selectBoxPaymentTimingSelector.addEventListener('change', event => {
        const getValue = Object.keys(this.paymentTimingDictionary)
          .map(keyInfo => {
            if (this.paymentTimingDictionary[keyInfo].includes(event.currentTarget.value)) {
              return this.paymentTimingDictionary[keyInfo][2]
            }
          })
          .filter(info => info !== undefined)
        this.store.paymentTimingSelectBoxData = this.store.initializeData.filter(dataInfo => {
          if (getValue.length === 0) {
            return dataInfo
          }
          if (dataInfo.入金タイミング === getValue[0]) {
            return dataInfo
          }
        })
      })
    }
  }

  /*
  Search SelectBox 提供エリア.
  */
  searchProvideAreaSelectBox() {
    if (this.selectors.searchItemsWrapper) {
      const selectBoxProvideAreaSelector = document.querySelector('.fn-select-provider-area')
      this.store.provideAreaSelectBoxData = this.store.initializeData
      selectBoxProvideAreaSelector.addEventListener('change', event => {
        const getRegionValue = Object.keys(this.providerAreaDictionary)
          .map(keyInfo => {
            if (event.currentTarget.value === '') return
            if (this.providerAreaDictionary[keyInfo].includes(event.currentTarget.value)) {
              return this.providerAreaDictionary[keyInfo][2]
            }
          })
          .filter(info => info !== undefined)
        const getAreaValue = Object.keys(this.providerAreaDictionary)
          .map(keyInfo => {
            if (event.currentTarget.value === '') return
            if (this.providerAreaDictionary[keyInfo].includes(event.currentTarget.value)) {
              return this.providerAreaDictionary[keyInfo][3]
            }
          })
          .filter(info => info !== undefined)
        this.store.provideAreaSelectBoxData = this.store.initializeData.filter(dataInfo => {
          if (getRegionValue.length === 0 && getAreaValue.length === 0) {
            return dataInfo
          }
          if (
            dataInfo.個票.map(individualDataInfo => individualDataInfo.サービス提供エリア.includes(getRegionValue[0])).includes(true) ||
            dataInfo.個票.map(individualDataInfo => individualDataInfo.サービス提供エリア.includes(getAreaValue[0])).includes(true)
          ) {
            return dataInfo
          }
        })
      })
    }
  }

  /*
  Comma Separated Multiple Search in Free Word.
  */
  searchFreeWord() {
    if (this.selectors.freeWordBox) {
      this.selectors.freeWordBox.value = ''
      this.store.freeWordData = this.store.initializeData
      this.selectors.freeWordBox.addEventListener('keyup', event => {
        // Initialize Array for Each Input.
        let eachWordSearchResultAry = []
        // Putting Comma Separated Words in Array.
        const eachWordAry = event.currentTarget.value
          .toLowerCase()
          .replace(/\s+/g, '')
          .split(',')
          .filter(info => info !== '')
        /*
        Branch. True → Full Data. / False → Check JSON Data.
        */
        // When Free Word Box is Empty, Put Full Data.
        if (eachWordAry.length === 0) {
          eachWordSearchResultAry = [this.store.initializeData]
        } else {
          /*
          JSON Data is Checked, for Words in Array. ( 'eachWordAry' Goes to See 'initializeData' )
          */
          for (let wordIndex = 0; wordIndex < eachWordAry.length; wordIndex++) {
            // Create Array in Array by Number of Words.
            eachWordSearchResultAry.push([])
            // Search.
            for (let dataIndex = 0; dataIndex < this.store.initializeData.length; dataIndex++) {
              /*
              ↓ Methods in Object Check Each Items. ↓
              */
              const checkItems = {
                // For Improve Code Format Readability,
                // Disable ESLint to This Block.
                /* eslint-disable */
                //
                // Search 決済事業者.
                provider:
                  this.store.initializeData[dataIndex].決済事業者
                  .toLowerCase()
                  .includes(eachWordAry[wordIndex]),
                //
                // Search 利用可能な決済手段.
                paymentMethod:
                  this.store.initializeData[dataIndex].利用可能な決済手段
                  .map(
                    paymentMethodInfo =>
                    paymentMethodInfo
                    .toLowerCase()
                    .includes(eachWordAry[wordIndex])
                  )
                  .includes(true),
                //
                // Search 利用料率.
                periodPaymentRate:
                  this.store.initializeData[dataIndex].利用料率
                  .toLowerCase()
                  .includes(eachWordAry[wordIndex]),
                //
                // Search 期間修了後の手数料の取扱い.
                rateHandling:
                  this.store.initializeData[dataIndex].期間終了後の手数料の取扱い
                  .toLowerCase()
                  .includes(eachWordAry[wordIndex]),
                //
                // Search 入金タイミング.
                paymentTiming:
                  this.store.initializeData[dataIndex].入金タイミング
                  .toLowerCase()
                  .includes(eachWordAry[wordIndex]),
                //
                // Search 利用決済端末.
                usageTerminal:
                  this.store.initializeData[dataIndex].利用決済端末
                  .toLowerCase()
                  .includes(eachWordAry[wordIndex]),
                //
                // Search 個票.サービス提供エリア.
                providerArea:
                  this.store.initializeData[dataIndex].個票
                  .map(
                    individualDataInfo =>
                    individualDataInfo.サービス提供エリア
                    .map(
                      providerAreaInfo =>
                      providerAreaInfo
                      .toLowerCase()
                      .includes(eachWordAry[wordIndex])
                    )
                    .includes(true)
                  )
                  .includes(true),
                //
                // Search 個票 → 対応可能なブランド → クレジットカード.
                paymentBrandCreditCard:
                  this.store.initializeData[dataIndex].個票
                  .map(
                    individualDataInfo =>
                    individualDataInfo.対応可能なブランド.クレジットカード
                    .map(
                      paymentBrandInfo =>
                      paymentBrandInfo
                      .toLowerCase()
                      .includes(eachWordAry[wordIndex])
                    )
                    .includes(true)
                  )
                  .includes(true),
                //
                // Search 個票 → 対応可能なブランド → 電子マネー
                paymentBrandElectronicMoney:
                  this.store.initializeData[dataIndex].個票
                  .map(
                    individualDataInfo =>
                    individualDataInfo.対応可能なブランド.電子マネー
                    .map(
                      paymentBrandInfo =>
                      paymentBrandInfo
                      .toLowerCase()
                      .includes(eachWordAry[wordIndex])
                    )
                    .includes(true)
                  )
                  .includes(true),
                //
                // Search 個票 → 対応可能なブランド → QRコード.
                paymentBrandQrCode:
                  this.store.initializeData[dataIndex].個票
                  .map(individualDataInfo =>
                    individualDataInfo.対応可能なブランド.QRコード
                    .map(
                      paymentBrandInfo =>
                      paymentBrandInfo
                      .toLowerCase()
                      .includes(eachWordAry[wordIndex])
                    )
                    .includes(true)
                  )
                  .includes(true),
                //
                // Search 個票 → 対応可能なブランド → その他.
                paymentBrandOther:
                  this.store.initializeData[dataIndex].個票
                  .map(
                    individualDataInfo =>
                    individualDataInfo.対応可能なブランド.その他
                    .map(
                      paymentBrandInfo =>
                      paymentBrandInfo
                      .toLowerCase()
                      .includes(eachWordAry[wordIndex])
                    )
                    .includes(true)
                  )
                  .includes(true),
                //
                // Search 個票 → 加盟店向けサービス問合せ備考.
                individualRemarks:
                  this.store.initializeData[dataIndex].個票
                  .map(
                    individualDataInfo =>
                    individualDataInfo.加盟店向けサービス問合せ備考
                    .toLowerCase()
                    .includes(eachWordAry[wordIndex])
                  )
                  .includes(true),
                //
                // Search 対応可能な決済端末 → 製品名.
                paymentTerminalName:
                  this.store.initializeData[dataIndex].対応可能な決済端末
                  .map(
                    individualDataInfo =>
                    individualDataInfo.製品名
                    .toLowerCase()
                    .includes(eachWordAry[wordIndex])
                  )
                  .includes(true)
                /* eslint-enable */
              }
              /*
              ↑ Methods in Object Check Each Items End. ↑
              */
              // To Check.
              if (
                checkItems.provider ||
                checkItems.paymentMethod ||
                checkItems.periodPaymentRate ||
                checkItems.rateHandling ||
                checkItems.paymentTiming ||
                checkItems.providerArea ||
                checkItems.usageTerminal ||
                checkItems.paymentBrandCreditCard ||
                checkItems.paymentBrandElectronicMoney ||
                checkItems.paymentBrandQrCode ||
                checkItems.paymentBrandOther ||
                checkItems.individualRemarks ||
                checkItems.paymentTerminalName
              ) {
                eachWordSearchResultAry[wordIndex].push(this.store.initializeData[dataIndex])
              }
            }
          }
        }
        // Leave Duplicate Data.
        this.store.freeWordData = [this.store.initializeData, ...eachWordSearchResultAry].reduce((accumulator, current) => {
          return [...accumulator, ...current].filter((info, index, array) => {
            return array.indexOf(info) === index && index !== array.lastIndexOf(info)
          })
        }, this.store.initializeData)
      })
    }
  }

  /*
  Search Result Render.
  */
  searchResultRender() {
    // Search Result Core.
    const searchResultCore = () => {
      const concatenateSearchData = [
        this.store.paymentMethodCheckBoxData,
        this.store.usageTerminalCheckBoxData,
        this.store.periodPaymentSelectBoxData,
        this.store.rateHandlingSelectBoxData,
        this.store.paymentTimingSelectBoxData,
        this.store.provideAreaSelectBoxData,
        this.store.freeWordData
      ]
      const processingData = concatenateSearchData.reduce((accumulator, current) => {
        return [...accumulator, ...current].filter((info, index, array) => {
          return array.indexOf(info) === index && index !== array.lastIndexOf(info)
        })
      }, this.store.initializeData)
      this.initializeList()
      this.render(processingData)
    }
    if (this.selectors.searchButton) {
      // Require When Click Search Button.
      this.selectors.searchButton.addEventListener('click', searchResultCore)
      // Require When Press Only Enter Key.
      document.addEventListener('keypress', event => {
        if (event.code === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.altKey) searchResultCore()
      })
    }
  }

  /*
  Require.
  */
  async core() {
    await this.resolvedPromise(this.getData())
    this.renderPaymentMethodCheckBox()
    this.renderUsageTerminalCheckBox()
    this.renderPeriodPaymentRateSelectBox()
    this.renderRateHandlingSelectBox()
    this.renderPaymentTimingSelectBox()
    this.renderProvideAreaSelectBox()
    this.render(this.store.initializeData)
    this.searchPaymentMethodCheckBox()
    this.searchUsageTerminalCheckBox()
    this.searchPeriodPaymentRateSelectBox()
    this.searchRateHandlingSelectBox()
    this.searchPaymentTimingSelectBox()
    this.searchProvideAreaSelectBox()
    this.searchFreeWord()
    this.searchResultRender()
  }
}
