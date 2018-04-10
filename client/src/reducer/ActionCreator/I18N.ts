import * as ACTION_TYPE from '@/reducer/ACTION_TYPE'

class I18N {
  public static change (lang: string) {
    return {
      type: ACTION_TYPE.I18N.CHANGE,
      payload: {
        lang
      }
    }
  }
}

export default I18N
