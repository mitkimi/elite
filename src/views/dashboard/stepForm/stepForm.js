import { post } from '../../../utilitys/ipAxios'
import NumberGrow from '../../../components/numberGrow'
import StatusBlock from '../../../components/statusBlock'
export default {
  components: {
    // GecStudentList,
    NumberGrow,
    StatusBlock
  },
  data () {
    return {
      filterShow: false,
      loading: true,
      active: 3,
      form: {
        payAccount: 'mitkimi@163.com',
        recieverAccount: '',
        payMethod: 'alipay',
        recieverName: 'Kimi',
        cash: 5000,
        password: '123456'
      },
      result: {
        return: 'success',
        data: {},
        msg: '对方账户不存在'
      }
    }
  },
  created () {
    this.handleSearchSubmit()
  },
  methods: {
    handleNext () {
      this.active += 1
    },
    handlePrev () {
      this.active -= 1
      if (this.active < 1) {
        this.active = 1
      }
    }
  }
}
