import cmsRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return cmsRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
