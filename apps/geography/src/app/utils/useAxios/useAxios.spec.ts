import axios from 'axios';
import 'node-mocks-http';
import { useAxios } from './useAxios';

jest.mock('axios')

describe('useAxios hook tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch data when you use the useAxios hook', async () => {
    const statusCode = 200
    const mockResponse = {
      data: [{ code: "CR", currencyCodes: ["CRC"], name: "Costa Rica", wikiDataId: "Q800" }],
      metadata: { currentOffset: 0, totalCount: 1}
    };

    (axios.request as jest.Mock<any>)
      .mockReturnValueOnce({ data: mockResponse, status: statusCode })

    const response = await useAxios({
      type: 'GET',
      baseUrl: 'mock',
      endpoint: 'endpoint',
      headers: {},
      params: {}
    })

    expect(axios.request).toBeCalledTimes(1)
    expect(response.status).toEqual(statusCode)
    expect(response.data).toStrictEqual(mockResponse)
  })
})
