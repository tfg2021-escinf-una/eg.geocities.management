import axios from 'axios';
import 'node-mocks-http';
import { createRequest, createResponse } from 'node-mocks-http';
import { IGenericResponse } from '../../utils';
import { getCountries, getCountryDetails, getCountryRegions, getCountryRegionsDivisions } from './countries';

jest.mock('axios')

describe('testing countries controller', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return countries based on the currency code', async () => {
    const req = createRequest({ method: 'GET', query: { currencyCode: 'CRC' } })
    const res = createResponse()
    const statusCode = 200
    const mockCountryResponse = {
      data: [{ code: "CR", currencyCodes: ["CRC"], name: "Costa Rica", wikiDataId: "Q800" }],
      metadata: { currentOffset: 0, totalCount: 1}
    };
    (axios.request as jest.Mock<any>)
      .mockReturnValueOnce({ data: mockCountryResponse, status: statusCode })

    await getCountries(req, res)

    expect(axios.request).toBeCalledTimes(1)
    expect(res._getJSONData()).toStrictEqual({
      response: { ...mockCountryResponse }, statusCode: statusCode, errors: []
    } as IGenericResponse)
  })

  it('should return an specific country based on the countryId', async () => {
    const req = createRequest({ method: 'GET', params: { countryid: 'CRC' } })
    const res = createResponse()
    const statusCode = 200
    const mockResponse = {
      data: {
        capital: "San José",
        code: "CR",
        callingCode: "+506",
        currencyCodes: ["CRC"],
        flagImageUri: "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Costa%20Rica.svg",
        name: "Costa Rica",
        numRegions: 7,
        wikiDataId: "Q800"
      }
    };

    (axios.request as jest.Mock<any>)
      .mockReturnValueOnce({ data: mockResponse, status: statusCode })

    await getCountryDetails(req, res)

    expect(axios.request).toHaveBeenCalledTimes(1)
    expect(res._getJSONData()).toStrictEqual({
      response: { ...mockResponse }, statusCode: statusCode, errors: []
    } as IGenericResponse)
  })

  it('should return a list of regions based on the countryid', async () => {
    const req = createRequest({ method: 'GET', params: { countryid: 'CRC' } })
    const res = createResponse()
    const statusCode = 200
    const mockResponse = {
      data: [
        { countryCode: "CR", fipsCode: "01", isoCode: "A", name: "Alajuela", wikiDataId: "Q502188" },
        { countryCode: "CR", fipsCode: "03", isoCode: "G", name: "Guanacaste", wikiDataId: "Q690026"},
      ]
    };

    (axios.request as jest.Mock<any>)
      .mockReturnValueOnce({ data: { ...mockResponse }, status: statusCode })

    await getCountryRegions(req, res);

    expect(axios.request).toBeCalledTimes(1)
    expect(res._getJSONData()).toStrictEqual({
      response: { ...mockResponse }, statusCode: statusCode, errors: []
    } as IGenericResponse)
  })

  it('should return the division of a region based on country id and region code', async () => {
    const req = createRequest({ method: 'GET', params: { countryid: 'CRC', regionCode: '123' } })
    const res = createResponse()
    const statusCode = 200
    const mockResponse = {
      data: [
        { id: 3469607, wikiDataId: "Q2672761", name: "Alajuela Canton", latitude: 10.165, longitude: -84.26638889, population: 321872 },
        { id: 3092262, wikiDataId: "Q2406261", name: "Atenas", latitude: 9.98083333, longitude: -84.40638889, population: 29880 }
      ]
    };

    (axios.request as jest.Mock<any>)
      .mockReturnValueOnce({ data: { ...mockResponse }, status: statusCode })

    await getCountryRegionsDivisions(req, res)

    expect(axios.request).toBeCalledTimes(1)
    expect(res._getJSONData()).toStrictEqual({
      response: { ...mockResponse }, statusCode: statusCode, errors: []
    } as IGenericResponse)
  })
})
