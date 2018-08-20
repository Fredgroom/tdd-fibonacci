const fibonacci = require('../lib/fibonacci');

describe('fibonacci', () => {

    describe('when index is 0', () => {
        it('should return 1', () => {
            expect(fibonacci(0)).toEqual(1);
        });
    });

    describe('when index is 1', () => {
        it('should return 1', () => {
            expect(fibonacci(1)).toEqual(1);
        });
    });

});
