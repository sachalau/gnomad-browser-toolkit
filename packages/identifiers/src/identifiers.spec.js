import {
  isRegionId,
  normalizeRegionId,
  isVariantId,
  normalizeVariantId,
  isRsId,
} from './identifiers'

const test = (fn, positiveTestCases, negativeTestCases) => {
  positiveTestCases.forEach(query => {
    it(`should return true for "${query}"`, () => {
      expect(fn(query)).toBe(true)
    })
  })

  negativeTestCases.forEach(query => {
    it(`should return false for "${query}"`, () => {
      expect(fn(query)).toBe(false)
    })
  })
}

describe('isRegionId', () => {
  const positiveTestCases = [
    'chr1-13414',
    '1-15342343-15342563',
    '1:15342343-15342563',
    'CHR3-12433-19000',
    '3:2592432',
    'chrX-23532-',
    '2-35324:',
    'y-712321-811232',
    '6:391518-3851275',
    '1:55,505,222-55,530,526',
  ]

  const negativeTestCases = ['chr1-', '5-1243421-a', '3-356788-123245', '54-12432-15440']

  test(isRegionId, positiveTestCases, negativeTestCases)
})

describe('normalizeRegionId', () => {
  const testCases = [
    { input: 'chr1-13414', normalized: '1-13394-13434' },
    { input: '1-15342343-15342563', normalized: '1-15342343-15342563' },
    { input: '1:15342343-15342563', normalized: '1-15342343-15342563' },
    { input: '1:00042343-00042563', normalized: '1-42343-42563' },
    { input: 'CHR3-12433-19000', normalized: '3-12433-19000' },
    { input: '3:2592432', normalized: '3-2592412-2592452' },
    { input: 'chrX-23532-', normalized: 'X-23512-23552' },
    { input: '2-35324:', normalized: '2-35304-35344' },
    { input: 'y-712321-811232', normalized: 'Y-712321-811232' },
    { input: '3-10', normalized: '3-0-30' },
    { input: '1:55,505,222-55,530,526', normalized: '1-55505222-55530526' },
  ]

  testCases.forEach(({ input, normalized }) => {
    it(`should normalize ${input} to ${normalized}`, () => {
      expect(normalizeRegionId(input)).toBe(normalized)
    })
  })
})

describe('isVariantId', () => {
  const positiveTestCases = [
    'chr1-13414-a-c',
    'chr1:13414:a:c',
    '1-15342343-cagc-t',
    '2-000123-A-G',
    'CHR3-12433-A-GATC',
    '1-55,516,888-G-GA',
  ]

  const negativeTestCases = [
    'chr1-',
    'chr2-532434',
    '5-1243421-a-z',
    '6-1a1bc-a-gc',
    'R-1242-A-T',
    'chrX-23532-cG',
    'y-712321-a-',
  ]

  test(isVariantId, positiveTestCases, negativeTestCases)
})

describe('normalizeVariantId', () => {
  const testCases = [
    { input: 'chr1-13414-a-c', normalized: '1-13414-A-C' },
    { input: 'chr1:13414:a:c', normalized: '1-13414-A-C' },
    { input: '1-15342343-cagc-t', normalized: '1-15342343-CAGC-T' },
    { input: '1-00042343-G-T', normalized: '1-42343-G-T' },
    { input: 'CHR3-12433-A-GATC', normalized: '3-12433-A-GATC' },
    { input: '1-55,516,888-G-GA', normalized: '1-55516888-G-GA' },
  ]

  testCases.forEach(({ input, normalized }) => {
    it(`should normalize ${input} to ${normalized}`, () => {
      expect(normalizeVariantId(input)).toBe(normalized)
    })
  })
})

describe('isRsId', () => {
  const positiveTestCases = ['rs123', 'rs4']

  const negativeTestCases = ['rs', 'RS123', 'rs123abc']

  test(isRsId, positiveTestCases, negativeTestCases)
})
