import axios from 'axios';
import 'node-mocks-http';
import { requestHandler } from './requestHandler';

jest.mock('axios')

describe('requestHandler wrapper tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should wrap a response in a generic response', async () => {
    const statusCode = 200
    const mockResponse = {
      data: [{ code: "CR", currencyCodes: ["CRC"], name: "Costa Rica", wikiDataId: "Q800" }],
      metadata: { currentOffset: 0, totalCount: 1}
    };

    (axios.request as jest.Mock<any>)
      .mockReturnValueOnce({ data: mockResponse, status: statusCode })

    const wrapper = await requestHandler({
      type: 'GET',
      baseUrl: 'mock',
      endpoint: 'endpoint',
      headers: {},
      params: {}
    })

    expect(axios.request).toBeCalledTimes(1)
    expect(wrapper.statusCode).toEqual(statusCode)
    expect(wrapper.response).toStrictEqual(mockResponse)
  })
})
