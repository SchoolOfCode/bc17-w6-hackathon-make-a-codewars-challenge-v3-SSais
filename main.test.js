import { expect, test } from 'vitest'
import { sortParenthesis, bonusChallange  } from './main'

//main test
test('bare bones test,should pass', () => {
  })

test('Test 1', () => {
    expect(sortParenthesis('((()))')).toBe('()()()')
})

test('Test 2', () => {
    expect(sortParenthesis('((()))()()((()))')).toBe('()()()()()()()()')
})

test('Test 3', () => {
    expect(sortParenthesis(')()(((((')).toBe('()()((((')
})

test('Test 4', () => {
    expect(sortParenthesis('))))()(()')).toBe('()()())))')
})


//Bonus tests

test('Bonus Challenge Test 1', () => {
    expect(bonusChallange('(())))')).toBe(2)
})

test('Bonus Challenge Test 2', () => {
    expect(bonusChallange('()()(()))((')).toBe(3)
})

