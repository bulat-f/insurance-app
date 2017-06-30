import applicants from './applicants';
import * as types from '../constants';

describe('applicants reducer', () => {
  it('should handle initial state', () => {
    expect(
      applicants(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_APPLICANT', () => {
    const newApplicant = {
      id: 0,
      age: 22,
      child: false,
      smoker: false
    }
    expect(
      applicants(
        [],
        Object.assign(
          newApplicant,
          { type: types.ADD_APPLICANT }
        )
      )
    ).toEqual([
      { id: 0, age: 22, child: false, smoker: false }
    ])

    expect(
      applicants(
        [{ id: 1, age: 30, child: false, smoker: true }],
        Object.assign(
          newApplicant,
          { id: 2, type: types.ADD_APPLICANT }
        )
      )
    ).toEqual([
      { id: 1, age: 30, child: false, smoker: true },
      { id: 2, age: 22, child: false, smoker: false }
    ])
  })

  it('should handle REMOVE_APPLICANT', () => {
    expect(
      applicants(
        [{ id: 0, age: 22, child: false, smoker: false }],
        { id: 0, type: types.REMOVE_APPLICANT }
      )
    ).toEqual([])

    expect(
      applicants(
        [{ id: 1, age: 30, child: false, smoker: true }],
        { id: 2, type: types.REMOVE_APPLICANT }
      )
    ).toEqual([
      { id: 1, age: 30, child: false, smoker: true },
    ])
  })
})
