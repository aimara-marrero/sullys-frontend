import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'


Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        softgreen: '#C6DAB7',
        green: '#006B58',
        orange: '#E89662',
        blue: '#2A4E85',
        black: '#0E1118',
        yellow: '#F8EDCE',
        white: '#FCFBFD',
        background: '#FAF8F3',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
    }
  }
})
