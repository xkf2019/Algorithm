function * generator() {
    console.log('before yied')
    const a = yield 'first'
    console.log('a', a)
    const b = yield 'second'
    console.log('b', b)
    const c = yield 'third'
    console.log('c', c)
}

const gen = generator('initial')
console.log(gen.next('first param'))
console.log(gen.next('second param'))
console.log(gen.next('third param'))
console.log(gen.next('forth param'))